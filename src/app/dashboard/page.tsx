import { getCurrentUser } from "@/lib/auth"
import { redirect } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CalendarIcon, UserIcon } from "lucide-react"
import { getDoctors } from "@/action/doctor"
import { getUserAppointments } from "@/action/appointment"

export default async function Dashboard() {
  const user = await getCurrentUser()
  if (!user) {
    redirect("/login")
  }

  const appointmentsResult = await getUserAppointments()
  const doctorsResult = await getDoctors()

  const appointments = appointmentsResult.success ? appointmentsResult.data : []
  const doctors = doctorsResult.success ? doctorsResult.data : []

  const upcomingAppointments = appointments?.filter((app) => new Date(app.date) > new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 3) ?? []

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Welcome, {user.fullName}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CalendarIcon className="mr-2 h-5 w-5" />
              Upcoming Appointments
            </CardTitle>
            <CardDescription>Your next scheduled appointments</CardDescription>
          </CardHeader>
          <CardContent>
            {upcomingAppointments.length > 0 ? (
              <div className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <div key={appointment.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">
                          Dr. {appointment.doctor.firstName} {appointment.doctor.lastName}
                        </h3>
                        <p className="text-sm text-muted-foreground">{appointment.doctor.speciality}</p>
                        <p className="text-sm mt-1">
                          {new Date(appointment.date).toLocaleDateString()} at{" "}
                          {new Date(appointment.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </p>
                      </div>
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          appointment.status === "confirmed"
                            ? "bg-green-100 text-green-800"
                            : appointment.status === "cancelled"
                              ? "bg-red-100 text-red-800"
                              : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                      </span>
                    </div>
                  </div>
                ))}
                <Link href="/appointment" className="block mt-4">
                  <Button variant="outline" className="w-full">
                    View All Appointments
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="text-center py-6">
                <p className="text-muted-foreground mb-4">You have no upcoming appointments</p>
                <Link href="/book-appointment">
                  <Button>Book an Appointment</Button>
                </Link>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <UserIcon className="mr-2 h-5 w-5" />
              Available Doctors
            </CardTitle>
            <CardDescription>Find specialists for your needs</CardDescription>
          </CardHeader>
          <CardContent>
            {doctors && doctors.length > 0 ? (
              <div className="space-y-4">
                {doctors.slice(0, 3).map((doctor) => (
                  <div key={doctor.id} className="border rounded-lg p-4">
                    <h3 className="font-medium">
                      Dr. {doctor.firstName} {doctor.lastName}
                    </h3>
                    <p className="text-sm text-muted-foreground">{doctor.speciality}</p>
                    <p className="text-sm mt-1">{doctor.location}</p>
                    <Link href={`/doctors/${doctor.id}`} className="block mt-2">
                      <Button variant="outline" size="sm">
                        View Profile
                      </Button>
                    </Link>
                  </div>
                ))}
                <Link href="/doctors" className="block mt-4">
                  <Button variant="outline" className="w-full">
                    View All Doctors
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="text-center py-6">
                <p className="text-muted-foreground">No doctors available at the moment</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center mt-8">
        <Link href="/book-appointment">
          <Button size="lg" className="mr-4">
            Book an Appointment
          </Button>
        </Link>
        <Link href="/profile">
          <Button variant="outline" size="lg">
            Manage Profile
          </Button>
        </Link>
      </div>
    </div>
  )
}

