import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, Users, UserRound, Package } from "lucide-react"
import { prisma } from "@/lib/prisma"

export default function AdminDashboard() {

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Overview of your healthcare application</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Doctors</CardTitle>
            <UserRound className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <ViewDoctorCount />
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <ViewUserCount />
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Appointments</CardTitle>
            <CalendarDays className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <ViewAppointmentsCount />
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Health Packages</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <ViewPackagesCount />
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Appointments</CardTitle>
            <CardDescription>Overview of recent appointments</CardDescription>
          </CardHeader>
          <CardContent>
            <ReactAppointmentComp />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Popular Health Packages</CardTitle>
            <CardDescription>Most viewed health packages</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-10 text-muted-foreground">No health packages found</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

async function ReactAppointmentComp() {
  const reactAppointments = await prisma.appointment.findMany({
    include:
    {
      doctor: true
      , user: true
    }, orderBy: { createdAt: 'desc' }, take: 5
  })
  return (
    <>
      {reactAppointments && reactAppointments.length > 0 ?
        reactAppointments.map((appointment) => (
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
                className={`px-2 py-1 text-xs rounded-full ${appointment.status === "confirmed"
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

        )
        ) : <div className="text-center py-10 text-muted-foreground">No recent appointments found</div>
      }
    </>
  )

}

async function ViewDoctorCount() {
  const docCount = await prisma.doctor.count()
  return (
    <CardContent>
      <div className="text-2xl font-bold">{docCount}</div>
      <p className="text-xs text-muted-foreground">
        <Link href="/admin/doctors" className="text-blue-500 hover:underline">
          View all doctors
        </Link>
      </p>
    </CardContent>
  )
}
async function ViewUserCount() {
  const count = await prisma.user.count()
  return (
    <CardContent>
      <div className="text-2xl font-bold">{count}</div>
      <p className="text-xs text-muted-foreground">
        <Link href="/admin/users" className="text-blue-500 hover:underline">
          View all users
        </Link>
      </p>
    </CardContent>
  )
}


async function ViewAppointmentsCount() {
  const count = await prisma.appointment.count()
  return (
    <CardContent>
      <div className="text-2xl font-bold">{count}</div>
      <p className="text-xs text-muted-foreground">
        <Link href="/admin/appointments" className="text-blue-500 hover:underline">
          View all appointments
        </Link>
      </p>
    </CardContent>
  )
}



async function ViewPackagesCount() {
  const count = await prisma.healthPackage.count()
  return (
    <CardContent>
      <div className="text-2xl font-bold">{count}</div>
      <p className="text-xs text-muted-foreground">
        <Link href="/admin/health-packages" className="text-blue-500 hover:underline">
          View all packages
        </Link>
      </p>
    </CardContent>
  )
}