"use client"

// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState("about");

  const teamMembers = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Chief Medical Officer",
      image:
        "https://public.readdy.ai/ai/img_res/ef5a350fb9a1bc8da90a3647523c1df5.jpg",
      description:
        "Board-certified physician with 15+ years of experience in internal medicine.",
    },
    {
      name: "Dr. James Chen",
      role: "Head of Cardiology",
      image:
        "https://public.readdy.ai/ai/img_res/6e57ac09c2c66a9140dd3c2193aed204.jpg",
      description:
        "Pioneering researcher in cardiovascular health with multiple published studies.",
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Director of Patient Care",
      image:
        "https://public.readdy.ai/ai/img_res/29861831ec45cc2fdf7c5fa632d67194.jpg",
      description:
        "Specialized in improving patient experience and healthcare accessibility.",
    },
  ];

  const testimonials = [
    {
      name: "Michael Thompson",
      role: "Patient",
      image:
        "https://public.readdy.ai/ai/img_res/4e577a5f1edd26810e821eef5b05d13e.jpg",
      content:
        "The telemedicine service provided by Hamro Doctor has been a game-changer for managing my chronic condition. The doctors are incredibly attentive and professional.",
      rating: 5,
    },
    {
      name: "Rebecca Anderson",
      role: "Healthcare Partner",
      image:
        "https://public.readdy.ai/ai/img_res/30be28db93799d40a3f305eda0978d3f.jpg",
      content:
        "Working with Hamro Doctor has significantly improved our ability to provide comprehensive care to our patients. Their platform is intuitive and efficient.",
      rating: 5,
    },
    {
      name: "David Martinez",
      role: "Patient",
      image:
        "https://public.readdy.ai/ai/img_res/9a97ec7733c181a27899a2f31fd78e48.jpg",
      content:
        "I appreciate how easy it is to schedule appointments and receive follow-up care. The doctors are knowledgeable and take time to explain everything thoroughly.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-[1024px] bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b">
        <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://public.readdy.ai/ai/img_res/1c0931bfb878cf1c2a35b5a00c63286a.jpg"
              alt="Hamro Doctor Logo"
              className="h-8"
            />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 cursor-pointer"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 cursor-pointer"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 cursor-pointer"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 cursor-pointer"
            >
              Contact
            </a>
          </nav>
          <Button className="!rounded-button bg-teal-500 hover:bg-teal-600 whitespace-nowrap">
            Get Started
          </Button>
        </div>
      </header>

      <main className="pt-16">
        <section className="relative h-[500px] overflow-hidden">
          <img
            src="https://public.readdy.ai/ai/img_res/2a95da0536b73fc1b7e97c39710f43af.jpg"
            alt="About Us Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent flex items-center">
            <div className="max-w-[1440px] mx-auto px-6">
              <h1 className="text-5xl font-bold text-white mb-6">
                Transforming Healthcare
                <br />
                Through Innovation
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                We're committed to making quality healthcare accessible to
                everyone through cutting-edge technology and compassionate care.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-[1440px] mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16">
              Our Leadership Team
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-40 h-40 rounded-full mx-auto mb-6 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-teal-600 mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16">
              What Our Users Say
            </h2>
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="pb-12 "
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <Card className="p-6">
                    <div className="flex items-center mb-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage
                          src={testimonial.image}
                          alt={testimonial.name}
                        />
                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="ml-4">
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{testimonial.content}</p>
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i key={i} className="fas fa-star"></i>
                      ))}
                    </div>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-teal-500 to-blue-600 text-white">
          <div className="max-w-[1440px] mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8">
              Ready to Experience Better Healthcare?
            </h2>
            <p className="text-xl mb-12 text-white/90">
              Join thousands of satisfied patients who have transformed their
              healthcare experience with Hamro Doctor.
            </p>
            <Button className="!rounded-button bg-white text-teal-600 hover:bg-gray-100 whitespace-nowrap">
              Get Started Now
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img
                src="https://public.readdy.ai/ai/img_res/d33651b9c946c82502f52808620dbe9e.jpg"
                alt="Hamro Doctor Logo"
                className="h-8 mb-4"
              />
              <p className="text-gray-400">
                Making quality healthcare accessible to everyone, everywhere.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Doctors
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Hamro Doctor. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
