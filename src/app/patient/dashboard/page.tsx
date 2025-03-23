"use client"


import React, { useState } from 'react';
import * as echarts from 'echarts';
import { useEffect } from 'react';
import {
Dialog,
DialogContent,
DialogHeader,
DialogTitle,
DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
const App: React.FC = () => {
const [appointments, setAppointments] = useState([
{
id: 1,
doctor: "Dr. Elizabeth Anderson",
specialty: "Cardiologist",
time: "09:30 AM",
location: "Medical Center, Room 205",
status: "confirmed",
date: "2025-03-22",
notes: "Regular checkup and ECG",
},
{
id: 2,
doctor: "Dr. Robert Chen",
specialty: "Neurologist",
time: "02:00 PM",
location: "Neurology Clinic, Floor 3",
status: "pending",
date: "2025-03-22",
notes: "Follow-up consultation",
},
{
id: 3,
doctor: "Dr. Maria Garcia",
specialty: "Dermatologist",
time: "11:15 AM",
location: "Skin Care Center",
status: "confirmed",
date: "2025-03-22",
notes: "Annual skin examination",
},
{
id: 4,
doctor: "Dr. James Wilson",
specialty: "Orthopedist",
time: "10:00 AM",
location: "Orthopedic Center, Room 302",
status: "cancelled",
date: "2025-03-23",
notes: "Joint pain consultation",
},
{
id: 5,
doctor: "Dr. Sarah Thompson",
specialty: "Ophthalmologist",
time: "03:30 PM",
location: "Vision Care Center",
status: "confirmed",
date: "2025-03-24",
notes: "Annual eye examination",
},
{
id: 6,
doctor: "Dr. David Lee",
specialty: "Dentist",
time: "02:15 PM",
location: "Dental Clinic, Suite 405",
status: "pending",
date: "2025-03-25",
notes: "Dental cleaning and checkup",
},
{
id: 7,
doctor: "Dr. Emily Martinez",
specialty: "Pediatrician",
time: "11:45 AM",
location: "Children's Medical Center",
status: "confirmed",
date: "2025-03-21",
notes: "Vaccination and growth check",
},
{
id: 8,
doctor: "Dr. Michael Brown",
specialty: "Psychiatrist",
time: "04:00 PM",
location: "Mental Health Clinic",
status: "cancelled",
date: "2025-03-20",
notes: "Follow-up session",
}
]);
const [searchTerm, setSearchTerm] = useState("");
const [selectedDate, setSelectedDate] = useState("2025-03-22");
const [showBookingForm, setShowBookingForm] = useState(false);
const [newAppointment, setNewAppointment] = useState({
doctor: "",
specialty: "",
date: "",
time: "",
location: "",
notes: ""
});
const [showMessage, setShowMessage] = useState(false);
const [messageContent, setMessageContent] = useState("");
const [medicalRecords, setMedicalRecords] = useState([
{
id: 1,
date: "2025-02-15",
type: "Blood Test",
doctor: "Dr. Elizabeth Anderson",
results: "Normal blood count, slightly elevated cholesterol",
documents: "blood_test_results.pdf",
isDownloading: false
},
{
id: 2,
date: "2025-01-20",
type: "Annual Physical",
doctor: "Dr. Michael Roberts",
results: "Overall good health, recommended exercise routine",
documents: "physical_exam_report.pdf"
},
{
id: 3,
date: "2024-12-05",
type: "X-Ray",
doctor: "Dr. Jennifer Williams",
results: "No abnormalities detected",
documents: "xray_results.pdf"
}
]);
const [profile, setProfile] = useState({
name: "Sarah Mitchell",
email: "sarah.mitchell@example.com",
phone: "+1 (555) 123-4567",
address: "123 Healthcare Ave, Medical City, MC 12345",
insurance: "HealthCare Plus - Policy #HC123456789"
});
useEffect(() => {
const chart = echarts.init(document.getElementById('appointmentsChart'));
const confirmed = appointments.filter(app => app.status === 'confirmed').length;
const pending = appointments.filter(app => app.status === 'pending').length;
const cancelled = appointments.filter(app => app.status === 'cancelled').length;
const option = {
animation: false,
tooltip: {
trigger: 'item',
formatter: '{b}: {c} ({d}%)'
},
legend: {
bottom: '0',
left: 'center',
itemWidth: 12,
itemHeight: 12,
textStyle: {
fontSize: 14
}
},
series: [{
type: 'pie',
radius: ['65%', '80%'],
center: ['50%', '40%'],
startAngle: 90,
avoidLabelOverlap: false,
itemStyle: {
borderRadius: 0,
borderWidth: 4,
borderColor: '#fff'
},
label: {
show: true,
position: 'center',
fontSize: '24',
fontWeight: 'bold',
formatter: '{c}\nTotal'
},
emphasis: {
label: {
show: true,
fontSize: '24',
fontWeight: 'bold'
}
},
data: [
{
value: confirmed,
name: 'Confirmed',
itemStyle: { color: '#10B981' }
},
{
value: pending,
name: 'Pending',
itemStyle: { color: '#F59E0B' }
},
{
value: cancelled,
name: 'Cancelled',
itemStyle: { color: '#EF4444' }
}
]
}]
};
chart.setOption(option);
// Handle window resize
const handleResize = () => {
chart.resize();
};
window.addEventListener('resize', handleResize);
return () => {
chart.dispose();
window.removeEventListener('resize', handleResize);
};
}, [appointments]);
const handleCancelAppointment = (id: number) => {
setAppointments(appointments.map(app =>
app.id === id ? {...app, status: 'cancelled'} : app
));
};
const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
setSearchTerm(event.target.value);
};
const filteredAppointments = appointments.filter(app =>
app.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
app.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
app.location.toLowerCase().includes(searchTerm.toLowerCase())
);
const handleBookAppointment = () => {
if (!newAppointment.doctor || !newAppointment.date || !newAppointment.time) {
return;
}
const appointment = {
id: appointments.length + 1,
...newAppointment,
status: 'pending'
};
setAppointments([...appointments, appointment]);
setShowBookingForm(false);
setNewAppointment({
doctor: "",
specialty: "",
date: "",
time: "",
location: "",
notes: ""
});
};
const handleSendMessage = () => {
if (!messageContent.trim()) {
return;
}
// Here you would typically send the message to your backend
setShowMessage(false);
setMessageContent("");
};
const handleProfileUpdate = (newProfile: typeof profile) => {
setProfile(newProfile);
};
const handleDownload = async (recordId: number) => {
setMedicalRecords(records =>
records.map(record =>
record.id === recordId
? { ...record, isDownloading: true }
: record
)
);
// Simulate download delay
await new Promise(resolve => setTimeout(resolve, 2000));
setMedicalRecords(records =>
records.map(record =>
record.id === recordId
? { ...record, isDownloading: false }
: record
)
);
};
return (
<div className="min-h-screen bg-gray-50">
<div className="max-w-[1440px] mx-auto px-6 py-8">
{/* Header */}
<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-4">
<Avatar className="h-12 w-12">
<AvatarImage src="https://public.readdy.ai/ai/img_res/f279ba777c8d1471b71c0b69ed2adfe8.jpg" />
<AvatarFallback>SM</AvatarFallback>
</Avatar>
<div>
<h1 className="text-2xl font-bold">Welcome back, {profile.name}</h1>
<p className="text-gray-600">{profile.email}</p>
</div>
</div>
<div className="text-right">
<p className="text-sm text-gray-600">Next Appointment</p>
<p className="font-semibold">2025-03-22 09:30 AM</p>
</div>
</div>
{/* Stats Cards */}
<div className="grid grid-cols-4 gap-6 mb-8">
<Card className="p-6">
<h3 className="text-4xl font-bold mb-2">5</h3>
<p className="text-gray-600">Total Appointments</p>
</Card>
<Card className="p-6">
<h3 className="text-4xl font-bold text-green-500 mb-2">3</h3>
<p className="text-gray-600">Confirmed</p>
</Card>
<Card className="p-6">
<h3 className="text-4xl font-bold text-amber-500 mb-2">2</h3>
<p className="text-gray-600">Pending</p>
</Card>
<Card className="p-6">
<h3 className="text-4xl font-bold text-blue-500 mb-2">$850</h3>
<p className="text-gray-600">Total Spent</p>
</Card>
</div>
<div className="grid grid-cols-3 gap-6">
{/* Appointments Overview */}
<div className="col-span-2">
<Card className="p-6">
<h2 className="text-xl font-bold mb-6">Appointments Overview</h2>
<div id="appointmentsChart" style={{height: '300px'}}></div>
</Card>
</div>
{/* Quick Actions */}
<div>
<Card className="p-6">
<h2 className="text-xl font-bold mb-6">Quick Actions</h2>
<div className="space-y-4">
<Input
type="search"
placeholder="Search appointments..."
className="w-full"
value={searchTerm}
onChange={handleSearch}
/>
<Dialog>
<DialogTrigger asChild>
<Button className="w-full !rounded-button">
<i className="fas fa-calendar-plus mr-2"></i>
Book New Appointment
</Button>
</DialogTrigger>
<DialogContent>
<DialogHeader>
<DialogTitle>Book New Appointment</DialogTitle>
</DialogHeader>
<div className="p-4 space-y-4">
<Input
placeholder="Doctor's Name"
value={newAppointment.doctor}
onChange={(e) => setNewAppointment({...newAppointment, doctor: e.target.value})}
/>
<Input
placeholder="Specialty"
value={newAppointment.specialty}
onChange={(e) => setNewAppointment({...newAppointment, specialty: e.target.value})}
/>
<Input
type="date"
value={newAppointment.date}
onChange={(e) => setNewAppointment({...newAppointment, date: e.target.value})}
/>
<Input
type="time"
value={newAppointment.time}
onChange={(e) => setNewAppointment({...newAppointment, time: e.target.value})}
/>
<Input
placeholder="Location"
value={newAppointment.location}
onChange={(e) => setNewAppointment({...newAppointment, location: e.target.value})}
/>
<Input
placeholder="Notes"
value={newAppointment.notes}
onChange={(e) => setNewAppointment({...newAppointment, notes: e.target.value})}
/>
<Button onClick={handleBookAppointment} className="w-full !rounded-button">
Book Appointment
</Button>
</div>
</DialogContent>
</Dialog>
<Dialog>
<DialogTrigger asChild>
<Button variant="outline" className="w-full !rounded-button">
<i className="fas fa-file-medical mr-2"></i>
View Medical Records
</Button>
</DialogTrigger>
<DialogContent className="max-w-4xl">
<DialogHeader>
<DialogTitle>Medical Records</DialogTitle>
</DialogHeader>
<div className="p-4">
<div className="space-y-4">
{medicalRecords.map(record => (
<Card key={record.id} className="p-4">
<div className="flex justify-between items-start">
<div>
<h3 className="font-semibold">{record.type}</h3>
<p className="text-sm text-gray-600">{record.date}</p>
<p className="text-sm text-gray-600">{record.doctor}</p>
<p className="mt-2">{record.results}</p>
</div>
<Dialog>
<DialogTrigger asChild>
<Button variant="outline" size="sm" className="!rounded-button">
<i className="fas fa-download mr-2"></i>
Download
</Button>
</DialogTrigger>
<DialogContent>
<DialogHeader>
<DialogTitle>Download Medical Record</DialogTitle>
</DialogHeader>
<div className="p-4">
<p className="mb-4">You are about to download confidential medical information. Please confirm this action.</p>
<p className="text-sm text-gray-600 mb-6">File: {record.documents}</p>
<div className="flex justify-end gap-4">
<DialogTrigger asChild>
<Button variant="outline" className="!rounded-button">Cancel</Button>
</DialogTrigger>
<Button
onClick={() => {
const link = document.createElement('a');
link.href = `/medical-records/${record.documents}`;
link.download = record.documents;
link.click();
}}
className="!rounded-button"
>
Confirm Download
</Button>
</div>
</div>
</DialogContent>
</Dialog>
</div>
</Card>
))}
</div>
</div>
</DialogContent>
</Dialog>
<Dialog>
<DialogTrigger asChild>
<Button variant="outline" className="w-full !rounded-button">
<i className="fas fa-comment-medical mr-2"></i>
Message Doctor
</Button>
</DialogTrigger>
<DialogContent>
<DialogHeader>
<DialogTitle>Message Your Doctor</DialogTitle>
</DialogHeader>
<div className="p-4 space-y-4">
<div className="space-y-2">
<label className="text-sm font-medium">Select Doctor</label>
<select
className="w-full p-2 border rounded-md"
value={newAppointment.doctor}
onChange={(e) => setNewAppointment({...newAppointment, doctor: e.target.value})}
>
<option value="">Select a doctor</option>
{appointments.map(app => (
<option key={app.id} value={app.doctor}>{app.doctor}</option>
))}
</select>
</div>
<div className="space-y-2">
<label className="text-sm font-medium">Message</label>
<textarea
className="w-full p-2 border rounded-md h-32"
value={messageContent}
onChange={(e) => setMessageContent(e.target.value)}
placeholder="Type your message here..."
/>
</div>
<Button onClick={handleSendMessage} className="w-full !rounded-button">
Send Message
</Button>
</div>
</DialogContent>
</Dialog>
</div>
</Card>
</div>
</div>
{/* Appointments List */}
<Card className="mt-8 p-6">
<Tabs defaultValue="today">
<TabsList>
<TabsTrigger value="today">Today</TabsTrigger>
<TabsTrigger value="upcoming">Upcoming</TabsTrigger>
<TabsTrigger value="past">Past</TabsTrigger>
</TabsList>
<TabsContent value="today" className="mt-6">
{appointments.map(appointment => (
<div key={appointment.id} className="flex items-center justify-between p-4 border-b last:border-b-0">
<div className="flex items-center gap-4">
<Avatar>
<AvatarImage src={`https://readdy.ai/api/search-image?query=professional headshot of a medical doctor in white coat with stethoscope against hospital background&width=40&height=40&flag=be045fcdb2a423c08cb5e28c8a57bb49&flag=be045fcdb2a423c08cb5e28c8a57bb49&flag=be045fcdb2a423c08cb5e28c8a57bb49&seq=${appointment.id}&orientation=squarish`} />
<AvatarFallback>DR</AvatarFallback>
</Avatar>
<div>
<h3 className="font-semibold">{appointment.doctor}</h3>
<p className="text-sm text-gray-600">{appointment.specialty}</p>
<p className="text-sm text-gray-600">{appointment.time} - {appointment.location}</p>
</div>
</div>
<div className="flex items-center gap-4">
<span className={`px-3 py-1 rounded-full text-sm ${
appointment.status === 'confirmed' ? 'bg-green-100 text-green-800' :
appointment.status === 'pending' ? 'bg-amber-100 text-amber-800' :
'bg-red-100 text-red-800'
}`}>
{appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
</span>
<Dialog>
<DialogTrigger asChild>
<Button variant="outline" size="sm" className="!rounded-button">
<i className="fas fa-eye mr-2"></i>
View Details
</Button>
</DialogTrigger>
<DialogContent>
<DialogHeader>
<DialogTitle>Appointment Details</DialogTitle>
</DialogHeader>
<div className="p-4">
<p>Detailed appointment information would go here</p>
</div>
</DialogContent>
</Dialog>
{appointment.status !== 'cancelled' && (
<Button
variant="destructive"
size="sm"
className="!rounded-button"
onClick={() => handleCancelAppointment(appointment.id)}
>
<i className="fas fa-times mr-2"></i>
Cancel
</Button>
)}
</div>
</div>
))}
</TabsContent>
<TabsContent value="upcoming">
{appointments.filter(appointment => new Date(appointment.date) > new Date()).map(appointment => (
<div key={appointment.id} className="flex items-center justify-between p-4 border-b last:border-b-0">
<div className="flex items-center gap-4">
<Avatar>
<AvatarImage src={`https://readdy.ai/api/search-image?query=professional headshot of a medical doctor in white coat with stethoscope against hospital background&width=40&height=40&seq=${appointment.id}&orientation=squarish`} />
<AvatarFallback>DR</AvatarFallback>
</Avatar>
<div>
<h3 className="font-semibold">{appointment.doctor}</h3>
<p className="text-sm text-gray-600">{appointment.specialty}</p>
<p className="text-sm text-gray-600">{appointment.time} - {appointment.location}</p>
</div>
</div>
<div className="flex items-center gap-4">
<span className={`px-3 py-1 rounded-full text-sm ${
appointment.status === 'confirmed' ? 'bg-green-100 text-green-800' :
appointment.status === 'pending' ? 'bg-amber-100 text-amber-800' :
'bg-red-100 text-red-800'
}`}>
{appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
</span>
<Dialog>
<DialogTrigger asChild>
<Button variant="outline" size="sm" className="!rounded-button">
<i className="fas fa-eye mr-2"></i>
View Details
</Button>
</DialogTrigger>
<DialogContent>
<DialogHeader>
<DialogTitle>Appointment Details</DialogTitle>
</DialogHeader>
<div className="p-4">
<p>Detailed appointment information would go here</p>
</div>
</DialogContent>
</Dialog>
{appointment.status !== 'cancelled' && (
<Button
variant="destructive"
size="sm"
className="!rounded-button"
onClick={() => handleCancelAppointment(appointment.id)}
>
<i className="fas fa-times mr-2"></i>
Cancel
</Button>
)}
</div>
</div>
))}
</TabsContent>
<TabsContent value="past">
{appointments.filter(appointment => new Date(appointment.date) < new Date()).map(appointment => (
<div key={appointment.id} className="flex items-center justify-between p-4 border-b last:border-b-0">
<div className="flex items-center gap-4">
<Avatar>
<AvatarImage src={`https://readdy.ai/api/search-image?query=professional headshot of a medical doctor in white coat with stethoscope against hospital background&width=40&height=40&seq=${appointment.id}&orientation=squarish`} />
<AvatarFallback>DR</AvatarFallback>
</Avatar>
<div>
<h3 className="font-semibold">{appointment.doctor}</h3>
<p className="text-sm text-gray-600">{appointment.specialty}</p>
<p className="text-sm text-gray-600">{appointment.time} - {appointment.location}</p>
</div>
</div>
<div className="flex items-center gap-4">
<span className={`px-3 py-1 rounded-full text-sm ${
appointment.status === 'confirmed' ? 'bg-green-100 text-green-800' :
appointment.status === 'pending' ? 'bg-amber-100 text-amber-800' :
'bg-red-100 text-red-800'
}`}>
{appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
</span>
<Dialog>
<DialogTrigger asChild>
<Button variant="outline" size="sm" className="!rounded-button">
<i className="fas fa-eye mr-2"></i>
View Details
</Button>
</DialogTrigger>
<DialogContent>
<DialogHeader>
<DialogTitle>Appointment Details</DialogTitle>
</DialogHeader>
<div className="p-4">
<p>Detailed appointment information would go here</p>
</div>
</DialogContent>
</Dialog>
</div>
</div>
))}
</TabsContent>
</Tabs>
</Card>
</div>
</div>
);
};
export default App
