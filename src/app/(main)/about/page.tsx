
// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { prisma } from "@/lib/prisma";

const App: React.FC = async () => {

  const teamMembers = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Chief Medical Officer",
      image:
        "/image/a2.jpg",
      description:
        "Board-certified physician with 15+ years of experience in internal medicine.",
    },
    {
      name: "Dr. James Chen",
      role: "Head of Cardiology",
      image:
        "/image/a2.jpg",
      description:
        "Pioneering researcher in cardiovascular health with multiple published studies.",
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Director of Patient Care",
      image:
        "/image/a3.jpg",
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
  const doctors = await prisma.doctor.findMany()
  return (
    <div className="min-h-[1024px] bg-white">
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
              {doctors.map((member, index) => (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <img
                    src={teamMembers[0].image}
                    alt={member.firstName}
                    className="w-40 h-40 rounded-full mx-auto mb-6 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-2">{member.firstName}</h3>
                  <p className="text-teal-600 mb-4">{member.qualification}</p>
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

    </div>
  );
};

export default App;
