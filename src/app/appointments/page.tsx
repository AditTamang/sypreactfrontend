import { getCurrentUser } from "@/lib/auth"
import { redirect } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CalendarIcon, PlusIcon } from "lucide-react"
import { getUserAppointments } from "@/action/appointment"

export default async function AppointmentsPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/login")
  }

  const appointmentsResult = await getUserAppointments()
  const appointments = appointmentsResult.success ? appointmentsResult.data : []

  // Separate appointments into upcoming and past
  const now = new Date()
  const upcomingAppointments = appointments?.filter((app) => new Date(app.date) > now)
  const pastAppointments = appointments?.filter((app) => new Date(app.date) <= now)

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">My Appointments</h1>
        <Link href="/book-appointment">
          <Button>
            <PlusIcon className="mr-2 h-4 w-4" />
            Book New Appointment
          </Button>
        </Link>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <CalendarIcon className="mr-2 h-5 w-5" />
            Upcoming Appointments
          </CardTitle>
          <CardDescription>Your scheduled appointments</CardDescription>
        </CardHeader>
        <CardContent>
          {upcomingAppointments && upcomingAppointments?.length > 0 ? (
            <div className="space-y-4">
              {upcomingAppointments?.map((appointment) => (
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
                  <div className="mt-4 flex space-x-2">
                    <Link href={`/appointments/${appointment.id}`}>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </Link>
                    {appointment.status !== "cancelled" && (
                      <Link href={`/appointments/${appointment.id}/cancel`}>
                        <Button variant="outline" size="sm" className="text-red-500 border-red-200 hover:bg-red-50">
                          Cancel
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
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
          <CardTitle>Past Appointments</CardTitle>
          <CardDescription>Your appointment history</CardDescription>
        </CardHeader>
        <CardContent>
          {pastAppointments && pastAppointments?.length > 0 ? (
            <div className="space-y-4">
              {pastAppointments?.map((appointment) => (
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
                  <div className="mt-4">
                    <Link href={`/appointments/${appointment.id}`}>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-6">
              <p className="text-muted-foreground">You have no past appointments</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

