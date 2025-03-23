"use client"

import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const App: React.FC = () => {
  const [email, setEmail] = useState('');

  const faqData = [
    {
      question: "What is medDoc?",
      answer: "MedDoc is a comprehensive healthcare platform that connects patients with qualified doctors for online consultations, appointment booking, and medical services."
    },
    {
      question: "Why to choose medDoc?",
      answer: "We offer 24/7 access to healthcare professionals, convenient online booking, secure video consultations, and a network of top-rated hospitals and specialists."
    },
    {
      question: "How do I book an online doctor appointment?",
      answer: "Simply select your preferred doctor, choose an available time slot, fill in your details, and confirm your appointment. You'll receive a confirmation email with the consultation link."
    },
    {
      question: "What information do I need to provide while booking an appointment?",
      answer: "You'll need to provide your basic personal information, medical history, current symptoms, and any relevant medical reports or documents."
    },
    {
      question: "How do I consult with the doctor online?",
      answer: "Use the secure video link sent to your email at the scheduled time. Ensure you have a stable internet connection and a quiet environment for the consultation."
    },
    {
      question: "Can I reschedule or cancel my appointment?",
      answer: "Yes, you can reschedule or cancel your appointment up to 2 hours before the scheduled time through your MedDoc account dashboard."
    },
    {
      question: "What happens if I need tests or further treatment?",
      answer: "Your doctor will provide digital prescriptions and test recommendations. You can book tests through our platform or visit our partner diagnostic centers."
    },
    {
      question: "What should I do if I have an emergency?",
      answer: "For medical emergencies, please call our 24/7 emergency helpline or visit the nearest emergency department immediately."
    },
    {
      question: "What if I miss my appointment?",
      answer: "If you miss your appointment, you can reschedule within 24 hours. A nominal fee may apply for missed appointments without prior notice."
    },
    {
      question: "I have further queries relating to my medical appointments. Who can I contact?",
      answer: "Contact our 24/7 support team at support@meddoc.com or call our helpline at 1-800-MEDDOC for any queries."
    }
  ];

  const hospitalData = [
    {
      category: "Hospitals",
      items: [
        {
          name: "B.P. Koirala Institute of Health Sciences",
          phone: "977-25-525555",
          email: "bpkihs@bpkihs.edu"
        },
        {
          name: "Neuro Hospital",
          phone: "977-21-417484",
          email: "info@neurohospital.com.np"
        },
        {
          name: "Nobel Medical College Teaching Hospital",
          phone: "977-21-460624",
          email: "inquiry@nmcth.edu.np"
        }
      ]
    },
    {
      category: "Specialty Centres",
      items: [
        {
          name: "Cancer Hospital & Research Center",
          phone: "977-9803001333",
          email: "info@chrc.com.np"
        },
        {
          name: "Bir Hospital",
          phone: "+977-14221119",
          email: "admin@nams.org.np"
        },
        {
          name: "Civil Hospital",
          phone: "+977-01-4793000",
          email: "info@civil.gov.np"
        },
        {
          name: "Mental Hospital",
          phone: "+977-1-5521333",
          email: "mentalhospital@gmail.com"
        }
      ]
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Subscribed:', email);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-25">
        {/* FAQ Section */}
        <div className="mb-16">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  Q{index + 1}. {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Hospital Directory */}
        <div className="space-y-8">
          {hospitalData.map((category, index) => (
            <div key={index}>
              <h2 className="text-xl font-semibold mb-4">{category.category}</h2>
              <div className="border rounded-lg overflow-hidden">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex border-b last:border-b-0">
                    <div className="w-1/2 p-4 bg-gray-50">
                      <h3 className="font-medium">{item.name}</h3>
                    </div>
                    <div className="w-1/2 p-4">
                      <p className="text-gray-600">{item.phone}</p>
                      <a href={`mailto:${item.email}`} className="text-blue-600 hover:underline">
                        {item.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default App;

