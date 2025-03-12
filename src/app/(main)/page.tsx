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
      {/* Header */}
      

      {/* Hero Section */}
      <div className="relative pt-16">
        <div
          className="h-[600px] bg-cover bg-center"
          style={{
            backgroundImage: `url('https://public.readdy.ai/ai/img_res/b33d2c9cbd8efa38f2952b480920cadb.jpg')`,
          }}
        >
          <div className="max-w-[1440px] mx-auto px-6 h-full flex items-center">
            <div className="max-w-xl">
              <h1 className="text-5xl font-bold text-white mb-6">
                The best Doctor with the best treatments
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Experience world-class healthcare with our team of expert
                physicians and state-of-the-art facilities.
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
                  src="https://public.readdy.ai/ai/img_res/6946745b2901d049262fdae25797e0cd.jpg"
                  alt="Comprehensive Package"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Comprehensive Health Check
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
                  src="https://public.readdy.ai/ai/img_res/9dfd1b7b972a902f5c3c4f8d237cb662.jpg"
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
                  src="https://public.readdy.ai/ai/img_res/7bf38c2456be8b9ce763adc3c8c119ac.jpg"
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
                Click here to know more about us
              </Button>
            </div>
            <div className="overflow-hidden rounded-xl">
              <img
                src="https://public.readdy.ai/ai/img_res/bbb5404b17427733ca2f4aaf29758fc5.jpg"
                alt="Doctor with Patient"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Why Us?</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <i className="fas fa-video text-4xl text-blue-600 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">
                Instant Video Consultations
              </h3>
            </div>
            <div>
              <i className="fas fa-dollar-sign text-4xl text-blue-600 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">
                Affordable and Transparent Pricing
              </h3>
            </div>
            <div>
              <i className="fas fa-clock text-4xl text-blue-600 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
            </div>
            <div>
              <i className="fas fa-user-md text-4xl text-blue-600 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">
                Experienced Doctors
              </h3>
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
                src="https://public.readdy.ai/ai/img_res/e5c15b40eea528f902416b16011d652b.jpg"
                alt="Pharmacy"
                className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://public.readdy.ai/ai/img_res/5f27a9b15a50578a13e81b71f64e8b37.jpg"
                alt="Consultation"
                className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://public.readdy.ai/ai/img_res/b54cb76185f4a48661f6581182c01c6f.jpg"
                alt="Equipment"
                className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://public.readdy.ai/ai/img_res/390c3fa98cd5ff7c9ab32a444f94f2fe.jpg"
                alt="Ambulance"
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
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991441291371!2d2.292292615509614!3d48.85837007928757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1647891702753!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
            <div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Contact</h3>
                <p className="text-gray-600 mb-2">Phone: +1 (555) 123-4567</p>
                <p className="text-gray-600 mb-2">Email: info@meddoc.com</p>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Our Address</h3>
                <p className="text-gray-600">123 Healthcare Avenue</p>
                <p className="text-gray-600">Medical District, NY 10001</p>
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

      {/* Footer */}
      {/* <footer className="bg-gray-900 text-white pt-20 pb-8">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
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
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    News
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Consultations
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Health Packages
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Emergency
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Helpful Links</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Terms
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
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
                    Locations
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
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8 py-8 border-t border-gray-800">
            <div className="flex gap-6">
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
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white cursor-pointer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <p className="text-gray-400">
              &copy; 2025 MedDoc. All rights reserved.
            </p>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 mt-12">
          <div className="bg-gray-800 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">Keep Updated</h3>
            <p className="text-gray-400 mb-6">
              Never miss an latest updates and our exciting info for
              personalized health tips and expert advice from our expertise
              doctors.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-700 border-gray-600 text-white"
              />
              <Button
                // onClick={handleSubscribe}
                className="!rounded-button whitespace-nowrap"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default App;
