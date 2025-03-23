
// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { prisma } from "@/lib/prisma";

const App: React.FC = async () => {
  const doctors = await prisma.doctor.findMany()
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-12">
          Our Doctors
        </h1>

        <Tabs defaultValue="itahari" className="w-full flex flex-col items-center mb-12">
          <TabsList className="flex justify-center gap-4">
            <TabsTrigger
              value="itahari"
              className="!rounded-button px-6 py-2"
            >
              Itahari
            </TabsTrigger>
            <TabsTrigger
              value="dharan"
              className="!rounded-button px-6 py-2"
            >
              Dharan
            </TabsTrigger>
            <TabsTrigger
              value="tarahara"
              className="!rounded-button px-6 py-2"
            >
              Tarahara
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors
            .map((doctor) => (
              <Card
                key={doctor.id}
                className="overflow-hidden bg-white shadow-lg rounded-lg"
              >
                <div className="h-[300px] overflow-hidden">
                  <img
                    src={doctor.lastName}
                    alt={doctor.firstName}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-900">
                    {doctor.firstName}
                  </h3>
                  <div className="mt-4 space-y-2">
                    <p className="text-gray-600">
                      Department: {doctor.speciality}
                    </p>
                    <p className="text-gray-600">NMC No: {doctor.registrationNo}</p>
                    <p className="text-gray-600">
                      Qualification: {doctor.qualification}
                    </p>
                    {/* <p className="text-gray-600">
                      Consultation Type: {doctor.}
                    </p> */}
                    {/* <p className="text-gray-600">Schedule: {doctor.schedule}</p> */}
                  </div>
                  <Button
                    className="mt-6 w-full !rounded-button whitespace-nowrap cursor-pointer"
                  >
                    <a href="/appointmentDetails">Book Appointment</a>
                  </Button>
                </div>
              </Card>
            ))}
        </div>
      </div>

      <div className="fixed bottom-6 right-6">
        <Button
          className="!rounded-full w-14 h-14 bg-blue-600 hover:bg-blue-700 cursor-pointer"
        >
          <i className="fas fa-comments text-xl"></i>
        </Button>
      </div>
    </div>
  );
};

export default App;
