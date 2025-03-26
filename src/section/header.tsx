import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { getCurrentUser, logout } from "@/lib/auth";
import { EllipsisVertical } from "lucide-react";
import Link from "next/link";

const navLinks = [{ name: "Home", href: "/" }, { name: "About", href: "/about" }, { name: "consultDoctor", href: "/consultDoctor" }, { name: "appointment", href: "/appointment" }, { name: "Health Packages", href: "#" }, { name: "FAQ", href: "/faq" }]

export default async function HeaderSection() {
  const isLoggedIn = await getCurrentUser()
  return (<header className="fixed top-0 left-0 right-0 bg-white z-50 border-b">
    <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <img className="logo w-12 h-auto" src="/image/Logo1.png" alt="Logo" />
        <div className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
          MedDoc</div>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        <Link
          href="/"
          className="text-gray-600 hover:text-blue-600 cursor-pointer"
        >
          Home
        </Link>
        <Link
          href="/consultDoctor"
          className="text-gray-600 hover:text-blue-600 cursor-pointer"
        >
          Consult Doctor
        </Link>
        <Link
          href="/appointment"
          className="text-gray-600 hover:text-blue-600 cursor-pointer"
        >
          Book Appointment
        </Link>
        <Link
          href="/package"
          className="text-gray-600 hover:text-blue-600 cursor-pointer"
        >
          Health Packages
        </Link>
        <Link
          href="/about"
          className="text-gray-600 hover:text-blue-600 cursor-pointer"
        >
          About Us
        </Link>
        <Link
          href="/faq"
          className="text-gray-600 hover:text-blue-600 cursor-pointer"
        >
          FAQ
        </Link>
      </nav>


      {isLoggedIn ? <DropdownMenu>
        <DropdownMenuTrigger><EllipsisVertical /></DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel className="text-center">{isLoggedIn.fullName}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Button variant={"ghost"} size={"sm"} className="w-full " asChild>
              <Link href="/profile">Profile</Link>
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <form className="w-full text-start" action={async () => {
              "use server"
              await logout()
            }}>
              <Button variant={"ghost"} size={"sm"} className="cursor-pointer w-full" type="submit">Logout</Button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
        :
        <Button variant="outline" className="!rounded-button" asChild>
          <Link href="/login">Login</Link>
        </Button>
      }
    </div>
  </header>)
}