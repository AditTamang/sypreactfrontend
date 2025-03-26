import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { MoreHorizontal, Plus } from "lucide-react"
import { prisma } from "@/lib/prisma"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import DeleteTableData from "@/components/deleteTableData"
import { deleteDoctor } from "@/action/doctor"
export default async function DoctorsPage() {
  const doctors = await prisma.doctor.findMany()
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Doctors</h1>
          <p className="text-muted-foreground">Manage doctor profiles and information</p>
        </div>
        <Link href="/admin/doctors/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Doctor
          </Button>
        </Link>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>All Doctors</CardTitle>
          <CardDescription>View and manage all registered doctors</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Input placeholder="Search doctors..." className="max-w-sm" />
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Registration No</TableHead>
                <TableHead>Speciality</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Location</TableHead>
                <TableHead className="w-[100px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {doctors.length === 0 ?
                <TableRow className="text-center">
                  <TableCell colSpan={7} className="h-24 text-muted-foreground">
                    No doctors found
                  </TableCell>
                </TableRow> :
                doctors.map((doctor) => {
                  return (
                    <TableRow key={doctor.id}>
                      <TableCell>Dr. {doctor.firstName} {doctor.lastName}</TableCell>
                      <TableCell>{doctor.registrationNo}</TableCell>
                      <TableCell>{doctor.speciality}</TableCell>
                      <TableCell>{doctor.email}</TableCell>
                      <TableCell>{doctor.phone}</TableCell>
                      <TableCell>{doctor.location}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <span className="sr-only">Open menu</span>
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>
                              <Link href={`/admin/doctors/${doctor.id}`}>View details</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Link href={`/admin/doctors/${doctor.id}/edit`}>Edit</Link>
                            </DropdownMenuItem>
                            <DeleteTableData id={doctor.id} callback={deleteDoctor} />
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  )
                })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

