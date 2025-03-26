import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import LogoutButton from "@/components/logoutButton"
import { checkAdminStatus } from "@/lib/auth"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin dashboard for healthcare application",
}

interface AdminLayoutProps {
  children: React.ReactNode
}

export default async function AdminLayout({ children }: AdminLayoutProps) {
  const isAdmin = await checkAdminStatus()
  if(!isAdmin)  return redirect("/dashboard")
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72">
            <nav className="grid gap-2 text-lg font-medium">
              <Link
                href="/admin"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-foreground hover:bg-accent"
              >
                Dashboard
              </Link>
              <Link
                href="/admin/doctors"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-foreground hover:bg-accent"
              >
                Doctors
              </Link>
              <Link
                href="/admin/users"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-foreground hover:bg-accent"
              >
                Users
              </Link>
              <Link
                href="/admin/appointments"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-foreground hover:bg-accent"
              >
                Appointments
              </Link>
              <Link
                href="/admin/health-packages"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-foreground hover:bg-accent"
              >
                Health Packages
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex items-center gap-2">
          <Link href="/admin" className="font-semibold">
            Healthcare Admin
          </Link>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <LogoutButton />
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="hidden w-64 border-r bg-muted/40 md:block">
          <nav className="grid gap-2 p-4 text-sm font-medium">
            <Link
              href="/admin"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-foreground hover:bg-accent"
            >
              Dashboard
            </Link>
            <Link
              href="/admin/doctors"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-foreground hover:bg-accent"
            >
              Doctors
            </Link>
            <Link
              href="/admin/users"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-foreground hover:bg-accent"
            >
              Users
            </Link>
            <Link
              href="/admin/appointments"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-foreground hover:bg-accent"
            >
              Appointments
            </Link>
            <Link
              href="/admin/health-packages"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-foreground hover:bg-accent"
            >
              Health Packages
            </Link>
          </nav>
        </aside>
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}

