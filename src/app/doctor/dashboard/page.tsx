
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Graph from './_comp/graph';
import { prisma } from "@/lib/prisma";
import { getCurrentUser, requireAuth } from "@/lib/auth";
import { redirect } from "next/navigation";

const App: React.FC =async() => {
  // const [searchQuery, setSearchQuery] = useState('');
const currentSession = await requireAuth()
const doctor = await prisma.doctor.findUnique({where: {userId: currentSession.id}})
if(!doctor) return redirect("/dashboard")
  // const doctor = {
  //   name: 'Dr. Elizabeth Anderson',
  //   specialty: 'Cardiologist',
  //   image: 'https://public.readdy.ai/ai/img_res/eb51f88533def9da6f53fac0a16b5048.jpg'
  // };

  const appointments = [
    {
      id: '1',
      patientName: 'James Wilson',
      date: '2025-03-22',
      time: '09:30 AM',
      status: 'confirmed',
      patientAge: 45,
      patientGender: 'Male',
      reason: 'Regular Heart Checkup',
      bookingDate: '2025-03-15'
    },
    {
      id: '2',
      patientName: 'Emma Thompson',
      date: '2025-03-22',
      time: '11:00 AM',
      status: 'pending',
      patientAge: 38,
      patientGender: 'Female',
      reason: 'Chest Pain Investigation',
      bookingDate: '2025-03-18'
    },
    {
      id: '3',
      patientName: 'Michael Roberts',
      date: '2025-03-22',
      time: '02:15 PM',
      status: 'cancelled',
      patientAge: 52,
      patientGender: 'Male',
      reason: 'Post-Surgery Follow-up',
      bookingDate: '2025-03-16'
    },
  ];

  const stats = {
    total: 8,
    confirmed: 5,
    pending: 2,
    cancelled: 1
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

console.log(doctor)
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="h-12 w-12">
                <img src={"https://public.readdy.ai/ai/img_res/eb51f88533def9da6f53fac0a16b5048.jpg"} alt={doctor?.firstName} className="object-cover" />
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{doctor?.firstName}</h1>
                <p className="text-gray-600">{doctor?.speciality}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Saturday, March 22, 2025</p>
              <p className="text-lg font-semibold text-gray-900">{stats.total} Appointments Today</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-gray-900">{stats.total}</div>
              <div className="text-sm text-gray-600">Total Appointments</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-green-600">{stats.confirmed}</div>
              <div className="text-sm text-gray-600">Confirmed</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-yellow-600">{stats.pending}</div>
              <div className="text-sm text-gray-600">Pending</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-red-600">{stats.cancelled}</div>
              <div className="text-sm text-gray-600">Cancelled</div>
            </CardContent>
          </Card>
        </div>

        {/* Chart and Search Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Graph/>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-4">Quick Search</h2>
              <Input
                placeholder="Search appointments..."
                // value={searchQuery}
                // onChange={(e) => setSearchQuery(e.target.value)}
                className="mb-4"
              />
              <div className="space-y-2">
                <Button className="w-full !rounded-button whitespace-nowrap cursor-pointer" variant="outline">
                  <i className="fas fa-calendar-alt mr-2"></i> View Calendar
                </Button>
                <Button className="w-full !rounded-button whitespace-nowrap cursor-pointer" variant="outline">
                  <i className="fas fa-user-clock mr-2"></i> Pending Reviews
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Appointments List */}
        <Card>
          <CardContent className="p-6">
            <Tabs defaultValue="today" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="today">Today</TabsTrigger>
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="past">Past</TabsTrigger>
              </TabsList>

              <TabsContent value="today">
                <div className="space-y-4">
                  {appointments.map((appointment) => (
                    <div key={appointment.id} className="bg-white p-6 rounded-lg shadow-sm border">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Avatar className="h-12 w-12">
                            <i className="fas fa-user text-gray-400"></i>
                          </Avatar>
                          <div>
                            <h3 className="text-lg font-semibold">{appointment.patientName}</h3>
                            <p className="text-sm text-gray-600">
                              {appointment.time} - {appointment.reason}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <Badge className={getStatusColor(appointment.status)}>
                            {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                          </Badge>
                          <Button variant="outline" className="!rounded-button whitespace-nowrap cursor-pointer">
                            <i className="fas fa-eye mr-2"></i> View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default App;

