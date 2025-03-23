// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

// import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const App: React.FC = () => {
  // const [email, setEmail] = useState("");

  // const handleSubscribe = () => {
  //   if (email) {
  //     console.log("Subscribed:", email);
  //     setEmail("");
  //   }
  // };

  return (
    <div className="min-h-[1024px] bg-white">
      <div className="relative pt-16">
        <div
          className="h-[600px] bg-cover bg-center"
          style={{
            backgroundImage: `url('/image/dai.png')`,
          }}
        >
          <div className="max-w-[1440px] mx-auto px-6 h-full flex items-center">
            <div className="max-w-xl">
              <h1 className="text-5xl font-bold text-white mb-6">
                MedDoc
              </h1>
              <p className="text-2xl text-green/190 mb-8">
                Experience world-className healthcare with our team of expert
                physicians and the best Doctor gives the least medicine.
              </p>
              <Button className="!rounded-button text-lg px-8 py-6">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Our Services</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Package 1 */}
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="aspect-video mb-4 overflow-hidden rounded-lg">
                <img
                  src="/image/liver.jpeg"
                  alt="Comprehensive Package"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Liver Function Test
              </h3>
              <p className="text-gray-600 mb-4">
                Complete full-body examination including vital tests and
                specialist consultation.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-600">$299</span>
                <Button variant="outline" className="!rounded-button">
                  Learn More
                </Button>
              </div>
            </Card>

            {/* Package 2 */}
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="aspect-video mb-4 overflow-hidden rounded-lg">
                <img
                  src="/image/lipid.jpg"
                  alt="Lipid Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">Lipid Profile Test</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive lipid analysis including cholesterol and
                triglycerides levels.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-600">$89</span>
                <Button variant="outline" className="!rounded-button">
                  Learn More
                </Button>
              </div>
            </Card>

            {/* Package 3 */}
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="aspect-video mb-4 overflow-hidden rounded-lg">
                <img
                  src="/image/bloodCheckUp.jpg"
                  alt="Blood Test"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Complete Blood Test
              </h3>
              <p className="text-gray-600 mb-4">
                Detailed blood analysis including CBC, diabetes, and thyroid
                screening.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-600">$129</span>
                <Button variant="outline" className="!rounded-button">
                  Learn More
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Us</h2>
              <p className="text-gray-600 mb-6">
                MedDoc is a leading healthcare provider committed to delivering
                exceptional medical care. With over 15 years of experience,
                we've been providing quality healthcare services to help you
                take care of your health needs. Our state-of-the-art facilities
                and expert team ensure the health of our patients and make your
                experience as smooth and cost-friendly as possible.
              </p>
              <Button
                variant="link"
                className="!rounded-button text-blue-600 pl-0"
              >
                <a href="/about">Click here to know more about us</a>
              </Button>
            </div>
            <div className="overflow-hidden rounded-xl">
              <img
                src="/image/d.jpg"
                alt="Doctor with Patient"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="text-gray-700 body-font mt-10">
    <div className="flex justify-center text-3xl font-bold text-gray-800 text-center">
      Why Us?
    </div>
    <div className="container px-5 py-12 mx-auto">
      <div className="flex flex-wrap text-center justify-center">
        <div className="p-4 md:w-1/4 sm:w-1/2">
          <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
            <div className="flex justify-center">
              <img
                src="https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp"
                className="w-32 mb-3" />
            </div>
            <h2 className="title-font font-regular text-2xl text-gray-900">
              Instant Video Consultations
            </h2>
          </div>
        </div>

        <div className="p-4 md:w-1/4 sm:w-1/2">
          <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
            <div className="flex justify-center">
              <img
                src="https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp"
                className="w-32 mb-3" />
            </div>
            <h2 className="title-font font-regular text-2xl text-gray-900">
              . Affordable and Transparent Pricing
            </h2>
          </div>
        </div>

        <div className="p-4 md:w-1/4 sm:w-1/2">
          <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
            <div className="flex justify-center">
              <img
                src="https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp"
                className="w-32 mb-3" />
            </div>
            <h2 className="title-font font-regular text-2xl text-gray-900">
              24/7 Availability
            </h2>
          </div>
        </div>

        <div className="p-4 md:w-1/4 sm:w-1/2">
          <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
            <div className="flex justify-center">
              <img
                src="https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp"
                className="w-32 mb-3" />
            </div>
            <h2 className="title-font font-regular text-2xl text-gray-900">
              Experienced Doctors
            </h2>
          </div>
        </div>
      </div>
    </div>
  </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Gallery</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="overflow-hidden rounded-lg">
              <img
                src="image/ambulanceG.jpg"
                alt="Ambulance"
                className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="/image/DG.jpg"
                alt="Consultation"
                className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="/image/medicine1G.jpeg"
                alt="Pharmacy"
                className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="/image/labG.png"
                alt="Lab"
                className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Visit Our Location
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="rounded-xl overflow-hidden h-[400px]">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114086.59774953734!2d87.1827978486148!3d26.6738876309094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6c66e80fbfa9%3A0x38094d1a7c974283!2sItahari!5e0!3m2!1sen!2snp!4v1741797811380!5m2!1sen!2snp" width="600" height="450" style={{border:0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Contact</h3>
                <p className="text-gray-600 mb-2">Phone: +977 9807373362</p>
                <p className="text-gray-600 mb-2">Email: info@meddoc.com</p>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Our Address</h3>
                <p className="text-gray-600">Itahari-20, Sunsari</p>
                <p className="text-gray-600">Medical Itahari District</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Hours</h3>
                <p className="text-gray-600 mb-2">
                  Monday - Friday: 8:00 AM - 8:00 PM
                </p>
                <p className="text-gray-600 mb-2">
                  Saturday: 9:00 AM - 6:00 PM
                </p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
