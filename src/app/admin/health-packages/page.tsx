import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Plus } from "lucide-react"

export default function HealthPackagesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Health Packages</h1>
          <p className="text-muted-foreground">Manage health packages and offerings</p>
        </div>
        <Link href="/admin/health-packages/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Package
          </Button>
        </Link>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>All Health Packages</CardTitle>
          <CardDescription>View and manage all health packages</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Input placeholder="Search packages..." className="max-w-sm" />
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Original Price</TableHead>
                <TableHead>Discounted Price</TableHead>
                <TableHead>Created At</TableHead>
                <TableHead className="w-[100px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="text-center">
                <TableCell colSpan={5} className="h-24 text-muted-foreground">
                  No health packages found
                </TableCell>
              </TableRow>
              {/* Example row (will be populated from database)
              <TableRow>
                <TableCell>Complete Health Checkup</TableCell>
                <TableCell>$199.99</TableCell>
                <TableCell>$149.99</TableCell>
                <TableCell>Jan 5, 2023</TableCell>
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
                        <Link href={`/admin/health-packages/id-here`}>View details</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href={`/admin/health-packages/id-here/edit`}>Edit</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              */}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

