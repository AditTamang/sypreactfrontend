// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
"use client"
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

const App: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [showBookingDialog, setShowBookingDialog] = useState(false);

  const doctors = [
    {
      name: "Dr. Emily Thompson",
      specialty: "Internal Medicine",
      experience: "15+ years",
      image: "https://public.readdy.ai/ai/img_res/abc123.jpg"
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Cardiology",
      experience: "12+ years",
      image: "https://public.readdy.ai/ai/img_res/def456.jpg"
    },
    {
      name: "Dr. Sarah Williams",
      specialty: "Endocrinology",
      experience: "10+ years",
      image: "https://public.readdy.ai/ai/img_res/ghi789.jpg"
    }
  ];

  const testimonials = [
    {
      name: "Robert Anderson",
      rating: 5,
      comment: "The comprehensive health check was thorough and well-organized. Dr. Thompson explained everything clearly.",
      image: "https://public.readdy.ai/ai/img_res/jkl012.jpg"
    },
    {
      name: "Jennifer Martinez",
      rating: 5,
      comment: "Excellent service and attention to detail. The staff was professional and caring throughout the process.",
      image: "https://public.readdy.ai/ai/img_res/mno345.jpg"
    }
  ];

  const faqs = [
    {
      question: "How long does the comprehensive health check take?",
      answer: "The complete check-up typically takes 3-4 hours. We recommend scheduling your appointment in the morning."
    },
    {
      question: "Do I need to fast before the check-up?",
      answer: "Yes, 12 hours fasting is required for accurate blood test results. You can drink water during this period."
    },
    {
      question: "What should I bring to my appointment?",
      answer: "Please bring any previous medical records, current medications, and a valid ID. Wear comfortable clothing."
    }
  ];

  return (
    <div className="min-h-[1024px] bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b">
        <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="https://readdy.ai/home/02c47fb8-c4be-4f03-999a-743a0c825f88/ac4160ec-6b51-4e43-9789-7f18722da419" data-readdy="true" className="flex items-center gap-2">
              <i className="fas fa-arrow-left text-gray-600"></i>
              <span className="text-gray-600">Back to Services</span>
            </a>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#overview" className="text-gray-600 hover:text-blue-600 cursor-pointer">Overview</a>
            <a href="#components" className="text-gray-600 hover:text-blue-600 cursor-pointer">Components</a>
            <a href="#doctors" className="text-gray-600 hover:text-blue-600 cursor-pointer">Doctors</a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600 cursor-pointer">Testimonials</a>
          </nav>
          <Button onClick={() => setShowBookingDialog(true)} className="!rounded-button bg-blue-600">
            Book Now
          </Button>
        </div>
      </header>

      <div className="pt-16">
        <div className="relative h-[400px] bg-gradient-to-r from-blue-600 to-blue-400">
          <div className="absolute inset-0">
            <img
              src="https://public.readdy.ai/ai/img_res/pqr678.jpg"
              alt="Health Check Banner"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative max-w-[1440px] mx-auto px-6 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl font-bold mb-6">Comprehensive Health Check</h1>
              <p className="text-xl mb-8">A thorough evaluation of your health status with 77 essential tests, expert consultations, and personalized health recommendations.</p>
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold">77</div>
                  <div className="text-sm">Total Tests</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold">16</div>
                  <div className="text-sm">Machine Tests</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold">52</div>
                  <div className="text-sm">Lab Tests</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold">9</div>
                  <div className="text-sm">Consultations</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <section id="components" className="mb-16">
                <h2 className="text-3xl font-bold mb-8">Package Components</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="blood-tests">
                    <AccordionTrigger className="text-xl">Blood Tests</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-2">
                          <i className="fas fa-check text-green-500"></i>
                          <span>Complete Blood Count (CBC)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <i className="fas fa-check text-green-500"></i>
                          <span>Lipid Profile</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <i className="fas fa-check text-green-500"></i>
                          <span>Thyroid Function Tests</span>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="imaging">
                    <AccordionTrigger className="text-xl">Imaging & Diagnostics</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-2">
                          <i className="fas fa-check text-green-500"></i>
                          <span>Chest X-Ray</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <i className="fas fa-check text-green-500"></i>
                          <span>Ultrasound Abdomen</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <i className="fas fa-check text-green-500"></i>
                          <span>ECG</span>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </section>

              <section id="doctors" className="mb-16">
                <h2 className="text-3xl font-bold mb-8">Our Specialists</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {doctors.map((doctor, index) => (
                    <Card key={index} className="p-6">
                      <div className="aspect-square mb-4 overflow-hidden rounded-full">
                        <img
                          src={doctor.image}
                          alt={doctor.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
                      <p className="text-gray-600 mb-1">{doctor.specialty}</p>
                      <p className="text-gray-600">{doctor.experience} experience</p>
                    </Card>
                  ))}
                </div>
              </section>

              <section id="testimonials">
                <h2 className="text-3xl font-bold mb-8">Patient Testimonials</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {testimonials.map((testimonial, index) => (
                    <Card key={index} className="p-6">
                      <div className="flex gap-4 mb-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <div className="flex text-yellow-400">
                            {Array(testimonial.rating).fill(null).map((_, i) => (
                              <i key={i} className="fas fa-star"></i>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600">{testimonial.comment}</p>
                    </Card>
                  ))}
                </div>
              </section>
            </div>

            <div className="md:col-span-1">
              <Card className="p-6 sticky top-24">
                <div className="mb-6">
                  <div className="text-3xl font-bold text-blue-600">₹12,000</div>
                  <div className="text-gray-500 line-through">₹25,000</div>
                </div>
                <Button onClick={() => setShowBookingDialog(true)} className="w-full mb-6 !rounded-button">
                  Book Now
                </Button>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <i className="fas fa-clock text-blue-600"></i>
                    <span>Duration: 3-4 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-user-md text-blue-600"></i>
                    <span>Expert Consultation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-file-medical-alt text-blue-600"></i>
                    <span>Detailed Reports</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={showBookingDialog} onOpenChange={setShowBookingDialog}>
        <DialogContent className="max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Book Your Health Check</DialogTitle>
          </DialogHeader>
          <div className="p-6">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="mb-6"
            />
            <Button className="w-full !rounded-button" onClick={() => setShowBookingDialog(false)}>
              Confirm Booking
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default App;

