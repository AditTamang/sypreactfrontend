"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const App: React.FC = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Prayas Bidari, MD",
      image:
        "https://public.readdy.ai/ai/img_res/dfc4434847af458011a68d11da44e840.jpg",
      department: "Internal Medicine",
      nmc: "15620",
      qualification: "MBBS, MD (Internal Medicine)",
      schedule: "Sun - Fri: 4 pm - 8 pm",
      experience: [
        "Consultant Physician at Clinic One",
        "Nepal Police Hospital, Internal Medicine",
        "TU Teaching Hospital, Emergency Department",
        "Chure Hill Hospital, Medical Officer",
      ],
      education: [
        "MD Internal Medicine, Pokhara Academy of Health Sciences [2024]",
        "MBBS, Kathmandu University School of Medical Sciences [2015]",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Doctor Profile Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-[3/4] relative">
            <img
              src={doctors[0].image}
              alt={doctors[0].name}
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="bg-[#F8F9FE] p-8 rounded-lg">
            <h1 className="text-2xl font-bold text-[#0B3B7B] mb-4">
              {doctors[0].name}
            </h1>
            <div className="space-y-3 text-gray-600">
              <p>Department: {doctors[0].department}</p>
              <p>NMC No: {doctors[0].nmc}</p>
              <p>Qualification: {doctors[0].qualification}</p>
              <p>OPD Schedule: {doctors[0].schedule}</p>
            </div>

            {/* Appointment Type Selection */}
            <div className="mt-8">
              <h3 className="font-semibold mb-2">Appointment Type</h3>
              <label className="flex items-center space-x-2">
                <input type="radio" name="appointmentType" className="text-[#0B3B7B]" />
                <span>Clinic Visit</span>
              </label>
            </div>

            {/* Branch Selection */}
            <div className="mt-4">
              <h3 className="font-semibold mb-2">Branches</h3>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Branch" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kathmandu">
                    Kathmandu: Sun - Fri, 4 - 8 pm (+Rs800.00)
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Appointment & Inquiry Buttons */}
            <div className="mt-6 space-y-3">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full bg-[#0B3B7B] hover:bg-green-800 text-white !rounded-button">
                    <a href="/appointmentDetails">Book Appointment</a>
                  </Button>
                </DialogTrigger>
              </Dialog>

              <Button className="w-full border-2 bg-[#0B3B7B] hover:bg-green-800 text-white !rounded-button">
                Send Inquiry
              </Button>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-12">
          <Tabs defaultValue="details">
            <TabsList className="border-b">
              <TabsTrigger value="details" className="!rounded-button">
                DETAILS
              </TabsTrigger>
              <TabsTrigger value="reviews" className="!rounded-button">
                REVIEWS (0)
              </TabsTrigger>
              <TabsTrigger value="qa" className="!rounded-button">
                Q & A
              </TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Experience & Education */}
          <div className="mt-8">
            <h2 className="text-xl font-bold text-[#0B3B7B] mb-4">Professional Experience</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {doctors[0].experience.map((exp, index) => (
                <li key={index}>{exp}</li>
              ))}
            </ul>

            <h2 className="text-xl font-bold text-[#0B3B7B] mt-8 mb-4">Education</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {doctors[0].education.map((edu, index) => (
                <li key={index}>{edu}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
