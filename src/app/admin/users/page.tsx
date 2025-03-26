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
import SearchTableData from "@/components/searchTable"
import DeleteTableData from "@/components/deleteTableData"
import { deleteUserByIdByAdmin } from "@/action/user"
type SearchParams = { [key: string]: string | string[] | undefined }

export default async function UsersPage({ searchParams,
}: {
  searchParams: SearchParams
}) {
  const users = await prisma.user.findMany()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Users</h1>
          <p className="text-muted-foreground">Manage user accounts and information</p>
        </div>
        <Link href="/admin/users/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add User
          </Button>
        </Link>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>All Users</CardTitle>
          <CardDescription>View and manage all registered users</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <SearchTableData />
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Full Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Created At</TableHead>
                <TableHead>Appointments</TableHead>
                <TableHead className="w-[100px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.length === 0 ?
                <TableRow className="text-center">
                  <TableCell colSpan={5} className="h-24 text-muted-foreground">
                    No users found
                  </TableCell>
                </TableRow> :
                users.map((user) => {
                  return (
                    <TableRow key={user.id}>
                      <TableCell>John Doe</TableCell>
                      <TableCell>john@example.com</TableCell>
                      <TableCell>Jan 10, 2023</TableCell>
                      <TableCell>3</TableCell>
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
                              <Link href={`/admin/users/id-here`}>View details</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Link href={`/admin/users/id-here/edit`}>Edit</Link>
                            </DropdownMenuItem>
                           <DeleteTableData id={user.id} callback={deleteUserByIdByAdmin} />
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

