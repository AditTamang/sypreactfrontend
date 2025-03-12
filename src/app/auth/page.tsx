"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { User, UserCog, Store, Mail, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

type UserType = "user" | "doctor" | "merchant"

export default function AuthPage() {
  const router = useRouter()
  const [userType, setUserType] = useState<UserType>("user")
  const [credentials, setCredentials] = useState({
    identifier: "", // phone/email for user, email/username for doctor
    password: "",
    rememberMe: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCredentials((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setCredentials((prev) => ({ ...prev, rememberMe: checked }))
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      // Determine which API endpoint to hit based on user type
      const endpoint = userType === "doctor" ? "/doctor/login" : "/login"

      // In a real app, you would make an API call here
      console.log(`Making API call to ${endpoint} with:`, credentials)

      // Simulate API call
      // const response = await fetch(endpoint, {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(credentials)
      // })

      // if (response.ok) {
      //   const data = await response.json()
      //   // Handle successful login
      //   router.push("/dashboard")
      // }

      // For demo purposes, just log and redirect
      router.push("/dashboard")
    } catch (error) {
      console.error("Login failed:", error)
    }
  }

  const handleRegister = () => {
    if (userType === "doctor") {
      router.push("/auth/doctor-registration")
    } else {
      router.push("/auth/user-registration")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8 items-start">
        {/* Left Column - User Type Selection */}
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h1 className="text-4xl font-bold text-[#003366] mb-6">Log In</h1>
          <p className="text-gray-600 mb-6">Select your Log In method from the following:</p>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <button
              onClick={() => setUserType("user")}
              className={`flex flex-col items-center justify-center p-6 rounded-lg transition-all ${
                userType === "user"
                  ? "bg-[#00A0B0] text-white"
                  : "bg-white text-gray-500 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              <User className="h-6 w-6 mb-2" />
              <span className="text-sm font-medium">User</span>
              <span className="text-sm">Log In</span>
            </button>

            <button
              onClick={() => setUserType("doctor")}
              className={`flex flex-col items-center justify-center p-6 rounded-lg transition-all ${
                userType === "doctor"
                  ? "bg-[#00A0B0] text-white"
                  : "bg-white text-gray-500 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              <UserCog className="h-6 w-6 mb-2" />
              <span className="text-sm font-medium">Doctor</span>
              <span className="text-sm">Log In</span>
            </button>

            <button
              onClick={() => setUserType("merchant")}
              className={`flex flex-col items-center justify-center p-6 rounded-lg transition-all ${
                userType === "merchant"
                  ? "bg-[#00A0B0] text-white"
                  : "bg-white text-gray-500 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              <Store className="h-6 w-6 mb-2" />
              <span className="text-sm font-medium">Merchant</span>
              <span className="text-sm">Log In</span>
            </button>
          </div>

          <div className="mt-12">
            <img
              src="/placeholder.svg?height=200&width=200"
              alt="Medical illustration"
              className="mx-auto h-48 w-auto opacity-50"
            />
          </div>
        </div>

        {/* Right Column - Login Form */}
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-[#003366] mb-6">
            {userType === "user" ? "User Log In" : userType === "doctor" ? "Doctor Log In" : "Merchant Log In"}
          </h2>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-[#003366] font-medium">
                {userType === "user" ? "Phone/Email Address" : "Email / Username"}
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  name="identifier"
                  value={credentials.identifier}
                  onChange={handleInputChange}
                  placeholder={userType === "user" ? "Phone/Email" : "Username"}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="block text-[#003366] font-medium">Password</label>
                <Link href="/auth/forgot-password" className="text-[#00A0B0] text-sm hover:underline">
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleInputChange}
                  placeholder="password"
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="remember" checked={credentials.rememberMe} onCheckedChange={handleCheckboxChange} />
              <label htmlFor="remember" className="text-sm text-gray-600">
                Keep me Logged In
              </label>
            </div>

            <Button type="submit" className="w-full bg-[#00A0B0] hover:bg-[#008A99] text-white">
              Log In
            </Button>
          </form>

          {userType === "user" && (
            <div className="mt-6 space-y-4">
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative bg-white px-4 text-sm text-gray-500">Or continue with</div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                  <svg className="h-5 w-5 text-red-500" viewBox="0 0 24 24">
                    <path
                      d="M12.545 10.239v3.821h5.445c-0.643 2.783-2.835 4.76-5.445 4.76-3.312 0-6-2.688-6-6s2.688-6 6-6c1.757 0 3.332 0.768 4.452 1.979l2.802-2.802c-1.932-1.8-4.535-2.897-7.254-2.897-5.967 0-10.8 4.833-10.8 10.8s4.833 10.8 10.8 10.8c6.435 0 10.8-4.533 10.8-10.8 0-0.723-0.090-1.437-0.255-2.121h-10.545z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  Google
                </button>
                <button className="flex items-center justify-center gap-2 rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                  <svg className="h-5 w-5 text-blue-600" viewBox="0 0 24 24">
                    <path
                      d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686 0.235 2.686 0.235v2.953h-1.514c-1.491 0-1.956 0.925-1.956 1.874v2.25h3.328l-0.532 3.47h-2.796v8.385c5.737-0.9 10.125-5.864 10.125-11.854z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  Facebook
                </button>
              </div>
            </div>
          )}

          <div className="mt-8 text-center">
            <div className="flex flex-col items-center space-y-4">
              <h3 className="text-lg font-semibold text-[#003366]">
                {userType === "doctor" ? "Register as a Doctor?" : "Register as a User?"}
              </h3>
              <p className="text-sm text-gray-600 max-w-xs">
                {userType === "doctor"
                  ? "Verify your information with us in order to Get Started"
                  : "Create an Account with us in order to get started"}
              </p>
              <Button
                onClick={handleRegister}
                variant="outline"
                className="rounded-full bg-[#E6F7F9] text-[#00A0B0] border-[#00A0B0] hover:bg-[#00A0B0] hover:text-white"
              >
                Start
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

