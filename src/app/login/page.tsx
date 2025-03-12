"use client"
// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const App: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState("user");
  return (
    <div className="min-h-[1024px] bg-gradient-to-br from-blue-50 to-white">
     
      <div className="pt-16 flex min-h-screen">
        <div className="flex-1 bg-gradient-to-br from-teal-500 to-blue-500 hidden lg:flex items-center justify-center">
          <img
            src="https://public.readdy.ai/ai/img_res/1c4f4fff62b100d0ae857598ef631931.jpg"
            alt="Healthcare Illustration"
            className="max-w-2xl"
          />
        </div>
        <div className="flex-1 flex items-center justify-center p-8">
          <Card className="w-full max-w-md p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Log In</h1>
              <p className="text-gray-500">
                Select your Log In method from the following:
              </p>
            </div>
            <Tabs
              defaultValue="user"
              className="w-full"
              onValueChange={setActiveTab}
            >
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="user" className="!rounded-button">
                  <i className="fas fa-user mr-2"></i>
                  User
                </TabsTrigger>
                <TabsTrigger value="doctor" className="!rounded-button">
                  <i className="fas fa-user-md mr-2"></i>
                  Doctor
                </TabsTrigger>
                <TabsTrigger value="merchant" className="!rounded-button">
                  <i className="fas fa-store mr-2"></i>
                  Merchant
                </TabsTrigger>
              </TabsList>

              <TabsContent value="user">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email / Username
                    </label>
                    <Input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full border-gray-300"
                      placeholder={
                        username.startsWith("DR-")
                          ? "Enter your doctor ID"
                          : "Enter your username"
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <Input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full border-gray-300"
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Checkbox
                        id="keepLoggedIn"
                        checked={keepLoggedIn}
                        onCheckedChange={(checked) =>
                          setKeepLoggedIn(checked as boolean)
                        }
                      />
                      <label
                        htmlFor="keepLoggedIn"
                        className="ml-2 text-sm text-gray-600"
                      >
                        Keep me Logged In
                      </label>
                    </div>
                    <a
                      href="#"
                      className="text-sm text-teal-500 hover:text-teal-600"
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <Button className="w-full !rounded-button bg-teal-500 hover:bg-teal-600">
                    Log In
                  </Button>
                </div>
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex-1 border-t border-gray-200"></div>
                  <span className="text-sm text-gray-500">or</span>
                  <div className="flex-1 border-t border-gray-200"></div>
                </div>
                <div className="mt-8">
                  <div className="flex items-center gap-4">
                    <img
                      src="https://public.readdy.ai/ai/img_res/7a721d1776e51d7141a5fdf98c341247.jpg"
                      alt="Doctor Icon"
                      className="w-12 h-12"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Register as a Doctor?
                      </h3>
                      <p className="text-sm text-gray-500">
                        Verify your information with us in order to Get Started
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      className="ml-auto !rounded-button"
                    >
                      Start
                    </Button>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email / Username
                    </label>
                    <Input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full border-gray-300"
                      placeholder="Enter your username"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <Input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full border-gray-300"
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Checkbox
                        id="keepLoggedIn"
                        checked={keepLoggedIn}
                        onCheckedChange={(checked) =>
                          setKeepLoggedIn(checked as boolean)
                        }
                      />
                      <label
                        htmlFor="keepLoggedIn"
                        className="ml-2 text-sm text-gray-600"
                      >
                        Keep me Logged In
                      </label>
                    </div>
                    <a
                      href="#"
                      className="text-sm text-teal-500 hover:text-teal-600"
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <Button className="w-full !rounded-button bg-teal-500 hover:bg-teal-600">
                    Log In
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="doctor">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Doctor ID
                    </label>
                    <Input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full border-gray-300"
                      placeholder="Enter your doctor ID"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <Input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full border-gray-300"
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Checkbox
                        id="keepLoggedIn"
                        checked={keepLoggedIn}
                        onCheckedChange={(checked) =>
                          setKeepLoggedIn(checked as boolean)
                        }
                      />
                      <label
                        htmlFor="keepLoggedIn"
                        className="ml-2 text-sm text-gray-600"
                      >
                        Keep me Logged In
                      </label>
                    </div>
                    <a
                      href="#"
                      className="text-sm text-teal-500 hover:text-teal-600"
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <Button className="w-full !rounded-button bg-teal-500 hover:bg-teal-600">
                    Log In
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="merchant">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Merchant ID
                    </label>
                    <Input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full border-gray-300"
                      placeholder="Enter your merchant ID"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <Input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full border-gray-300"
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Checkbox
                        id="keepLoggedIn"
                        checked={keepLoggedIn}
                        onCheckedChange={(checked) =>
                          setKeepLoggedIn(checked as boolean)
                        }
                      />
                      <label
                        htmlFor="keepLoggedIn"
                        className="ml-2 text-sm text-gray-600"
                      >
                        Keep me Logged In
                      </label>
                    </div>
                    <a
                      href="#"
                      className="text-sm text-teal-500 hover:text-teal-600"
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <Button className="w-full !rounded-button bg-teal-500 hover:bg-teal-600">
                    Log In
                  </Button>
                </div>
              </TabsContent>
            </Tabs>

            {activeTab === "doctor" && (
              <div className="mt-8 flex items-center gap-4">
                <img
                  src="https://readdy.ai/api/search-image?query=friendly cartoon doctor character icon smiling medical professional avatar illustration&width=60&height=60&seq=18&orientation=squarish"
                  alt="Doctor Icon"
                  className="w-12 h-12"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Register as a Doctor?
                  </h3>
                  <p className="text-sm text-gray-500">
                    Verify your information with us in order to Get Started
                  </p>
                </div>
                <Button variant="outline" className="ml-auto !rounded-button">
                  Start
                </Button>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default App;
