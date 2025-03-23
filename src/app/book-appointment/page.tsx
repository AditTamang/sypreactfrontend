"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { createAppointment } from "@/action/appointment"

type Doctor = {
  id: string
  firstName: string
  lastName: string
  speciality: string
}

export default function BookAppointmentPage() {
  const router = useRouter()
  const [doctors, setDoctors] = useState<Doctor[]>([])
  const [selectedDoctor, setSelectedDoctor] = useState("")
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [selectedTime, setSelectedTime] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    async function fetchDoctors() {
      setIsLoading(true)
      try {
        const response = await fetch("/api/doctors")
        if (response.ok) {
          const data = await response.json()
          setDoctors(data)
        } else {
          setError("Failed to load doctors")
        }
      } catch (err) {
        setError("An error occurred while fetching doctors")
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchDoctors()
  }, [])

  // Generate time slots from 9 AM to 5 PM
  const timeSlots = Array.from({ length: 17 }, (_, i) => {
    const hour = Math.floor(i / 2) + 9
    const minute = (i % 2) * 30
    const ampm = hour >= 12 ? "PM" : "AM"
    const hour12 = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour
    return `${hour12}:${minute === 0 ? "00" : minute} ${ampm}`
  })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    if (!selectedDoctor) {
      setError("Please select a doctor")
      setIsSubmitting(false)
      return
    }

    if (!selectedDate) {
      setError("Please select a date")
      setIsSubmitting(false)
      return
    }

    if (!selectedTime) {
      setError("Please select a time")
      setIsSubmitting(false)
      return
    }

    try {
      // Combine date and time
      const [hours, minutes] = selectedTime.split(":")
      const isPM = selectedTime.includes("PM")

      const appointmentDate = new Date(selectedDate)
      appointmentDate.setHours(
        isPM && hours !== "12" ? Number.parseInt(hours) + 12 : Number.parseInt(hours),
        Number.parseInt(minutes.split(" ")[0]),
        0,
      )

      const result = await createAppointment({
        doctorId: selectedDoctor,
        date: appointmentDate,
      })

      if (result.success) {
        router.push("/appointments")
      } else {
        setError(result.error || "Failed to book appointment")
      }
    } catch (err) {
      setError("An unexpected error occurred")
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto py-8 px-4 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Book an Appointment</CardTitle>
          <CardDescription>Schedule a visit with one of our specialists</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && <div className="bg-red-50 text-red-500 p-3 rounded-md text-sm">{error}</div>}

            <div className="space-y-2">
              <Label htmlFor="doctor">Select Doctor</Label>
              <Select value={selectedDoctor} onValueChange={setSelectedDoctor}>
                <SelectTrigger id="doctor" className="w-full">
                  <SelectValue placeholder="Select a doctor" />
                </SelectTrigger>
                <SelectContent>
                  {isLoading ? (
                    <SelectItem value="loading" disabled>
                      Loading doctors...
                    </SelectItem>
                  ) : doctors.length > 0 ? (
                    doctors.map((doctor) => (
                      <SelectItem key={doctor.id} value={doctor.id}>
                        Dr. {doctor.firstName} {doctor.lastName} - {doctor.speciality}
                      </SelectItem>
                    ))
                  ) : (
                    <SelectItem value="none" disabled>
                      No doctors available
                    </SelectItem>
                  )}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Select Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !selectedDate && "text-muted-foreground",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {selectedDate ? format(selectedDate, "PPP") : "Select a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    initialFocus
                    disabled={
                      (date) =>
                        date < new Date(new Date().setHours(0, 0, 0, 0)) || // Disable past dates
                        date.getDay() === 0 ||
                        date.getDay() === 6 // Disable weekends
                    }
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label htmlFor="time">Select Time</Label>
              <Select value={selectedTime} onValueChange={setSelectedTime} disabled={!selectedDate}>
                <SelectTrigger id="time" className="w-full">
                  <SelectValue placeholder="Select a time" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button
            onClick={handleSubmit}
            className="w-full"
            disabled={isSubmitting || !selectedDoctor || !selectedDate || !selectedTime}
          >
            {isSubmitting ? "Booking..." : "Book Appointment"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

