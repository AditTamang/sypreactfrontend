"use client"

import type React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

// Define the form schema with zod
const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  country: z.string().min(1, "Country is required"),
  phone: z.string().min(1, "Phone number is required"),
  email: z.string().email("Invalid email address"),
  paymentMethod: z.enum(["visa", "khalti", "nicasia", "clinic"], {
    required_error: "Please select a payment method",
  }),
})

type FormValues = z.infer<typeof formSchema>

const AppointmentForm: React.FC = () => {
  // Initialize the form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      country: "Nepal",
      phone: "",
      email: "",
      paymentMethod: "visa",
    },
  })

  // Form submission handler
  function onSubmit(values: FormValues) {
    console.log("Form submitted:", values)
    // Here you would typically send the data to your backend
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-6">Appointment Details</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First name</FormLabel>
                      <FormControl>
                        <Input {...field} />
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
                      <FormLabel>Last name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem className="mb-6">
                    <FormLabel>Country / Region</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Nepal">Nepal</SelectItem>
                        <SelectItem value="India">India</SelectItem>
                        <SelectItem value="China">China</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="mb-6">
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input type="tel" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="mb-6">
                    <FormLabel>Email address</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-semibold mb-6">Your appointment</h2>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <div className="flex justify-between mb-4">
                  <div>
                    <h3 className="font-medium">Doctor Information</h3>
                    <p className="text-gray-600">Dr. Prayas Bakal, MD</p>
                    <p className="text-gray-600">Appointment type: Clinic Visit</p>
                    <p className="text-gray-600">Sun - Fri, 8am - 8pm</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Appointment charge</h3>
                    <p className="text-gray-600">Rs800.00</p>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between mb-2">
                    <span>Subtotal</span>
                    <span>Rs800.00</span>
                  </div>
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>Rs800.00</span>
                  </div>
                </div>
              </div>

              <FormField
                control={form.control}
                name="paymentMethod"
                render={({ field }) => (
                  <FormItem className="space-y-4">
                    <FormControl>
                      <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="space-y-4">
                        <div className="flex items-center space-x-2 p-4 bg-gray-50 rounded-lg">
                          <RadioGroupItem value="visa" id="visa" />
                          <Label htmlFor="visa" className="flex items-center">
                            <span className="mr-2">Visa/Mastercard</span>
                          </Label>
                        </div>

                        <div className="flex items-center space-x-2 p-4 bg-gray-50 rounded-lg">
                          <RadioGroupItem value="khalti" id="khalti" />
                          <Label htmlFor="khalti">Khalti</Label>
                        </div>

                        <div className="flex items-center space-x-2 p-4 bg-gray-50 rounded-lg">
                          <RadioGroupItem value="nicasia" id="nicasia" />
                          <Label htmlFor="nicasia">NICASIA PAY</Label>
                        </div>

                        <div className="flex items-center space-x-2 p-4 bg-gray-50 rounded-lg">
                          <RadioGroupItem value="clinic" id="clinic" />
                          <Label htmlFor="clinic">Clinic Visit</Label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <p className="text-sm text-gray-500 mt-6 mb-6">
                Your personal data will be used to process your order, support your experience throughout this website,
                and for other purposes described in our privacy policy.
              </p>

              <Button type="submit" className="w-full !rounded-button bg-blue-700 hover:bg-blue-800">
                BOOK APPOINTMENT
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default AppointmentForm

