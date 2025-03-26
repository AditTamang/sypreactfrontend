"use client"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"


import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { ArrowLeft, Save } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { createDoctorByAdmin } from "@/action/doctor"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Label } from "@/components/ui/label"

// Define the form schema with Zod
const doctorFormSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  registrationNo: z.string().min(1, {
    message: "Registration number is required.",
  }),
  speciality: z.string().min(1, {
    message: "Speciality is required.",
  }),
  location: z.string().min(1, {
    message: "Location is required.",
  }),
  qualification: z.string().min(1, {
    message: "Qualification is required.",
  }),
  gender: z.string().min(1, {
    message: "Gender is required.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  userId: z.string().min(1, {
    message: "User ID is required.",
  })
})

// Define the form values type
type DoctorFormValues = z.infer<typeof doctorFormSchema>

// Default values for the form
const defaultValues: Partial<DoctorFormValues> = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  registrationNo: "",
  speciality: "",
  location: "",
  qualification: "",
  gender: "",
  description: "",
}

export default function DoctorEditPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [users, setUsers] = useState<Pick<TypeUser, "email" | "fullName" | "id">[]>([])
  const [error, setError] = useState("")

  // Initialize the form
  const form = useForm<DoctorFormValues>({
    resolver: zodResolver(doctorFormSchema),
    defaultValues,
  })

  // Handle form submission
  async function onSubmit(data: DoctorFormValues) {
    console.log(data)
    try {

      await createDoctorByAdmin(data)
      toast.success("Doctor saved successfully")
      router.push("/admin/doctors")
    } catch (err) {
      toast.error("Failed to save doctor")
    }
  }
  useEffect(() => {
    async function fetchDoctors() {
      setIsLoading(true)
      try {
        const response = await fetch("/api/user/all")
        if (response.ok) {
          const data = await response.json()
          setUsers(data)
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
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/admin/doctors">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Add New Doctor</h1>
          <p className="text-muted-foreground">Create a new doctor profile</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Doctor Information</CardTitle>
          <CardDescription>Enter the doctor's personal and professional details</CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter first name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter last name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="doctor@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="registrationNo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Registration Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter registration number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="speciality"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Speciality</FormLabel>
                      <FormControl>
                        <Input placeholder="E.g., Cardiology, Neurology" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <FormControl>
                        <Input placeholder="City, Country" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="qualification"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Qualification</FormLabel>
                      <FormControl>
                        <Input placeholder="E.g., MD, MBBS" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gender</FormLabel>
                    <FormControl>
                      <Input placeholder="Male/Female/Other" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="userId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Selct User</FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <SelectTrigger id="user" className="w-full">
                          <SelectValue placeholder="Select a user" />
                        </SelectTrigger>
                        <SelectContent>
                          {isLoading ? (
                            <SelectItem value="loading" disabled>
                              Loading users...
                            </SelectItem>
                          ) : users.length > 0 ? (
                            users.map((user) => (
                              <SelectItem key={user.id} value={user.id}>
                                {user.fullName} - {user.email}
                              </SelectItem>
                            ))
                          ) : (
                            <SelectItem value="none" disabled>
                              No users available
                            </SelectItem>
                          )}
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )} />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter doctor's bio and professional details"
                        className="min-h-[120px]"
                        {...field}
                      />

                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline" asChild>
                <Link href="/admin/doctors">Cancel</Link>
              </Button>
              <Button type="submit">
                <Save className="mr-2 h-4 w-4" />
                Save Doctor
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  )
}

