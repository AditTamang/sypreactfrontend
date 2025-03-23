"use client"



import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner"
import { Delete, Edit, Trash } from 'lucide-react';



const App: React.FC = () => {
  interface Doctor {
    id: string;
    name: string;
    avatar: string;
    specialization: string;
    experience: string;
    status: string;
    email: string;
    phone: string;
    qualifications: string;
    lastUpdated: string;
  }

  const [doctors, setDoctors] = useState<Doctor[]>([
    {
      id: 'DOC001',
      name: 'Dr. Elizabeth Anderson',
      avatar: 'https://public.readdy.ai/ai/img_res/c6f820c28994867f49079c0621dffc75.jpg',
      specialization: 'Cardiology',
      experience: '15 years',
      status: 'Active',
      email: 'elizabeth.anderson@medical.com',
      phone: '+1 (555) 123-4567',
      qualifications: 'MD, FACC',
      lastUpdated: '2025-03-22'
    },
    {
      id: 'DOC002',
      name: 'Dr. Michael Richardson',
      avatar: 'https://public.readdy.ai/ai/img_res/237798681151c417ff1aebbc8c1a6f66.jpg',
      specialization: 'Neurology',
      experience: '12 years',
      status: 'Active',
      email: 'michael.richardson@medical.com',
      phone: '+1 (555) 234-5678',
      qualifications: 'MD, PhD',
      lastUpdated: '2025-03-21'
    },
  ]);

  const [newDoctor, setNewDoctor] = useState<Partial<Doctor>>({
    name: '',
    specialization: '',
    experience: '',
    email: '',
    phone: '',
    status: 'Active',
  });
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const handleAdd = () => {
    setSelectedDoctor(null);
    setNewDoctor({
      name: '',
      specialization: '',
      experience: '',
      email: '',
      phone: '',
      status: 'Active',
    });
    setIsAddModalOpen(true);
  };

  const handleSave = () => {
    if (selectedDoctor) {
      // Edit existing doctor
      setDoctors(doctors.map(doc =>
        doc.id === selectedDoctor.id
          ? { ...doc, ...newDoctor }
          : doc
      ));
    } else {
      // Add new doctor
      const newDoctorId = `DOC${String(doctors.length + 1).padStart(3, '0')}`;
      const avatar = `https://readdy.ai/api/search-image?query=professional doctor portrait headshot against plain light background&width=100&height=100&flag=9f00d782181c96649218733b88a0835e&seq=${doctors.length + 3}&orientation=squarish`;

      setDoctors([...doctors, {
        ...newDoctor as Doctor,
        id: newDoctorId,
        avatar,
        qualifications: 'MD',
        lastUpdated: new Date().toISOString().split('T')[0],
      } as Doctor]);
    }
    setIsAddModalOpen(false);
  };

  const handleInputChange = (field: keyof Doctor, value: string) => {
    setNewDoctor(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const handleEdit = (doctor: any) => {
    setSelectedDoctor(doctor);
    setIsAddModalOpen(true);
  };
  const handleDelete = (doctorId: string) => {
    setDoctors(doctors.filter(d => d.id !== doctorId));
  };
  const handleStatusToggle = (doctorId: string) => {
    setDoctors(doctors.map(d => {
      if (d.id === doctorId) {
        return { ...d, status: d.status === 'Active' ? 'Inactive' : 'Active' };
      }
      return d;
    }));
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img
                src="https://public.readdy.ai/ai/img_res/7fa214f1f1d575b34f40467937ea9234.jpg"
                alt="Logo"
                className="h-8 w-8"
              />
              <span className="ml-2 text-xl font-semibold">MedAdmin</span>
            </div>
            <h1 className="text-2xl font-bold">Doctor Management</h1>
            <div className="flex items-center">
              <Avatar className="h-8 w-8">
                <img src="https://public.readdy.ai/ai/img_res/c0f0fe5199ab1649793b5d566397c7ac.jpg" alt="Admin" />
              </Avatar>
            </div>
          </div>
        </div>
      </header>
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Action Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                <Input
                  type="text"
                  placeholder="Search doctors..."
                  className="pl-10 w-64"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={selectedSpecialization} onValueChange={setSelectedSpecialization}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Specialization" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cardiology">Cardiology</SelectItem>
                  <SelectItem value="neurology">Neurology</SelectItem>
                  <SelectItem value="pediatrics">Pediatrics</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button onClick={handleAdd} className="!rounded-button">
              <i className="fas fa-plus mr-2"></i>
              Add New Doctor
            </Button>
          </div>
        </div>
        {/* Table */}
        <div className="bg-white rounded-lg shadow">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">ID</TableHead>
                <TableHead>Doctor</TableHead>
                <TableHead>Specialization</TableHead>
                <TableHead>Experience</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {doctors.filter(doctor => {
                const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  doctor.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  doctor.phone.includes(searchTerm);

                const matchesSpecialization = !selectedSpecialization ||
                  doctor.specialization.toLowerCase() === selectedSpecialization.toLowerCase();

                const matchesStatus = !selectedStatus ||
                  doctor.status.toLowerCase() === selectedStatus.toLowerCase();

                return matchesSearch && matchesSpecialization && matchesStatus;
              }).map((doctor) => (
                <TableRow key={doctor.id} className="cursor-pointer hover:bg-gray-50">
                  <TableCell>{doctor.id}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10">
                        <img src={doctor.avatar} alt={doctor.name} />
                      </Avatar>
                      <div className="ml-4">
                        <a href="https://readdy.ai/home/819e942f-0b82-4b8e-87fc-30faa8d98d7d/569bccb6-c928-43ff-9524-0a5a999a3454" data-readdy="true" className="font-medium hover:text-blue-600 transition-colors">{doctor.name}</a>
                        <div className="text-sm text-gray-500">{doctor.qualifications}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{doctor.specialization}</TableCell>
                  <TableCell>{doctor.experience}</TableCell>
                  <TableCell>
                    <Badge variant={doctor.status === 'Active' ? 'default' : 'secondary'}>
                      {doctor.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div>{doctor.email}</div>
                      <div className="text-gray-500">{doctor.phone}</div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-2">
                      <Button variant="outline" size="icon" onClick={() => handleEdit(doctor)} className="!rounded-button">
                       <Edit/>
                      </Button>
                      <Button variant="outline" size="icon" onClick={() => handleDelete(doctor.id)} className="!rounded-button">
                        <Trash className="text-destructive"/>
                      </Button>
                      <Switch
                        checked={doctor.status === 'Active'}
                        onCheckedChange={() => handleStatusToggle(doctor.id)}
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        {/* Pagination */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Select value={itemsPerPage.toString()} onValueChange={(value) => setItemsPerPage(Number(value))}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Items per page" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10 items per page</SelectItem>
                <SelectItem value="25">25 items per page</SelectItem>
                <SelectItem value="50">50 items per page</SelectItem>
              </SelectContent>
            </Select>
            <span className="text-sm text-gray-500">
              Showing {Math.min(itemsPerPage, doctors.length)} of {doctors.length} entries
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="!rounded-button"
            >
              Previous
            </Button>
            <span className="text-sm text-gray-500">Page {currentPage}</span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage * itemsPerPage >= doctors.length}
              className="!rounded-button"
            >
              Next
            </Button>
          </div>
        </div>
        {/* Add/Edit Modal */}
        <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>{selectedDoctor ? 'Edit Doctor' : 'Add New Doctor'}</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="flex items-center gap-4">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={selectedDoctor ? selectedDoctor.name : newDoctor.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="col-span-3"
                />
              </div>
              <div className="flex items-center gap-4">
                <Label htmlFor="specialization">Specialization</Label>
                <Select
                  value={selectedDoctor ? selectedDoctor.specialization : newDoctor.specialization}
                  onValueChange={(value) => handleInputChange('specialization', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select specialization" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Cardiology">Cardiology</SelectItem>
                    <SelectItem value="Neurology">Neurology</SelectItem>
                    <SelectItem value="Pediatrics">Pediatrics</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-4">
                <Label htmlFor="experience">Experience</Label>
                <Input
                  id="experience"
                  value={selectedDoctor ? selectedDoctor.experience : newDoctor.experience}
                  onChange={(e) => handleInputChange('experience', e.target.value)}
                />
              </div>
              <div className="flex items-center gap-4">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={selectedDoctor ? selectedDoctor.email : newDoctor.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
              </div>
              <div className="flex items-center gap-4">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={selectedDoctor ? selectedDoctor.phone : newDoctor.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                />
              </div>
              <div className="flex items-center gap-4">
                <Label>Status</Label>
                <Switch
                  checked={selectedDoctor ? selectedDoctor.status === 'Active' : newDoctor.status === 'Active'}
                  onCheckedChange={(checked) => handleInputChange('status', checked ? 'Active' : 'Inactive')}
                />
              </div>
            </div>
            <div className="flex justify-end gap-4">
              <Button variant="outline" onClick={() => setIsAddModalOpen(false)} className="!rounded-button">
                Cancel
              </Button>
              <Button onClick={handleSave} className="!rounded-button">
                Save
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
};
export default App
