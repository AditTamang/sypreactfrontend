"use client";

import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

// Sample doctor data
const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    experience: "15 years",
    education: "MD, Harvard Medical School",
    image: "/image/d1.png",
    availability: "Mon, Wed, Fri",
    bio: "Dr. Johnson is a board-certified cardiologist with extensive experience in treating heart conditions.",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Neurologist",
    experience: "12 years",
    education: "MD, Johns Hopkins University",
    image: "/image/d1.png",
    availability: "Tue, Thu, Sat",
    bio: "Dr. Chen specializes in neurological disorders and has published numerous research papers.",
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrician",
    experience: "10 years",
    education: "MD, Stanford University",
    image: "/image/d1.png",
    availability: "Mon-Fri",
    bio: "Dr. Rodriguez is passionate about children's health and preventive care.",
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialty: "Orthopedic Surgeon",
    experience: "18 years",
    education: "MD, Yale University",
    image: "/image/d1.png",
    availability: "Mon, Wed, Fri",
    bio: "Dr. Wilson is an expert in joint replacement and sports medicine.",
  },
  {
    id: 5,
    name: "Dr. Lisa Patel",
    specialty: "Dermatologist",
    experience: "8 years",
    education: "MD, University of California",
    image: "/image/d1.png",
    availability: "Tue, Thu",
    bio: "Dr. Patel specializes in cosmetic dermatology and skin cancer treatment.",
  },
  {
    id: 6,
    name: "Dr. Robert Kim",
    specialty: "Psychiatrist",
    experience: "14 years",
    education: "MD, Columbia University",
    image: "/image/d1.png",
    availability: "Mon-Thu",
    bio: "Dr. Kim focuses on anxiety, depression, and stress management therapies.",
  },
];

type TypeDoctor = (typeof doctors)[0];

export default function DoctorCards() {
  const [date, setDate] = useState<Date | undefined> (new Date());
  const [open, setOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<TypeDoctor | null>(null);

  const handleOpenChange = (open: boolean) => {
    setOpen(open);
  };

  const handleAppointmentClick = (doctor: TypeDoctor) => {
    setSelectedDoctor(doctor);
    setOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor, index) => (
          <Card
            key={doctor.id}
            className="overflow-hidden group relative transition-all duration-300 hover:shadow-xl"
          >
            <div className="relative h-[400px] w-full">
              <Image
                src={doctor.image || "/placeholder.svg"}
                alt={doctor.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Default state - basic info visible */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                <h3 className="text-xl font-bold">{doctor.name}</h3>
                <p className="text-sm">{doctor.specialty}</p>
              </div>

              {/* Hover state - full details and appointment button */}
              <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white">
                <div>
                  <h3 className="text-2xl font-bold mb-3">{doctor.name}</h3>
                  <p className="text-sm mb-2">
                    <span className="font-semibold">Specialty:</span>{" "}
                    {doctor.specialty}
                  </p>
                  <p className="text-sm mb-2">
                    <span className="font-semibold">Experience:</span>{" "}
                    {doctor.experience}
                  </p>
                  <p className="text-sm mb-2">
                    <span className="font-semibold">Education:</span>{" "}
                    {doctor.education}
                  </p>
                  <p className="text-sm mb-2">
                    <span className="font-semibold">Availability:</span>{" "}
                    {doctor.availability}
                  </p>
                  <p className="text-sm mt-3">{doctor.bio}</p>
                </div>

                <Button
                  className="mt-4 w-full"
                  onClick={() => handleAppointmentClick(doctor)}
                >
                  Request Appointment
                </Button>
              </div>

              {/* Special hover effect for the 3rd card */}
              {index === 2 && (
                <div className="absolute overflow-hidden inset-0 bg-gradient-to-t from-primary/80 to-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white">
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{doctor.name}</h3>
                    <p className="text-sm mb-2">
                      <span className="font-semibold">Specialty:</span>{" "}
                      {doctor.specialty}
                    </p>
                    <p className="text-sm mb-2">
                      <span className="font-semibold">Experience:</span>{" "}
                      {doctor.experience}
                    </p>
                    <p className="text-sm mb-2">
                      <span className="font-semibold">Education:</span>{" "}
                      {doctor.education}
                    </p>
                    <p className="text-sm mb-2">
                      <span className="font-semibold">Availability:</span>{" "}
                      {doctor.availability}
                    </p>
                    <p className="text-sm mt-3">{doctor.bio}</p>
                  </div>

                  <Button
                    className="mt-4 w-full bg-white text-primary hover:bg-white/90"
                    onClick={() => handleAppointmentClick(doctor)}
                  >
                    Request Appointment
                  </Button>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Appointment Form Dialog */}
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              Book an Appointment with {selectedDoctor?.name}
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Your Name</Label>
              <Input id="name" placeholder="Enter your full name" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" placeholder="Enter your phone number" />
            </div>

            <div className="grid gap-2">
              <Label>Appointment Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : "Select a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(day) => setDate(day || undefined)}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="time">Preferred Time</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">Morning (9AM - 12PM)</SelectItem>
                  <SelectItem value="afternoon">
                    Afternoon (1PM - 4PM)
                  </SelectItem>
                  <SelectItem value="evening">Evening (5PM - 7PM)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="reason">Reason for Visit</Label>
              <Textarea
                id="reason"
                placeholder="Please describe your symptoms or reason for visit"
              />
            </div>
          </div>
          <Button type="submit" className="w-full">
            Confirm Appointment
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
