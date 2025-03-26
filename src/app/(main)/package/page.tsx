"use client"

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface HealthPackage {
  id: number;
  title: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  features: string[];
  image: string;
}

const App: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [packages, setPackages] = useState<HealthPackage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPackage, setSelectedPackage] = useState<HealthPackage | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editForm, setEditForm] = useState<HealthPackage>({
    id: 0,
    title: '',
    description: '',
    originalPrice: 0,
    discountedPrice: 0,
    features: [],
    image: ''
  });

  // Fetch packages from API
  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch('/api/packages');
        const data = await response.json();
        setPackages(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to fetch packages:', error);
        setIsLoading(false);
      }
    };

    fetchPackages();
  }, []);

  const handleAdd = async () => {
    try {
      const response = await fetch('/api/packages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...editForm,
          features: editForm.features.filter(f => f !== '')
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to add package');
      }

      const newPackage = await response.json();
      setPackages([...packages, newPackage]);
      setIsAddModalOpen(false);
      setEditForm({
        id: 0,
        title: '',
        description: '',
        originalPrice: 0,
        discountedPrice: 0,
        features: [],
        image: ''
      });
    } catch (error) {
      console.error('Error adding package:', error);
    }
  };

  const handleEdit = async () => {
    try {
      const response = await fetch(`/api/packages/${editForm.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editForm),
      });

      if (!response.ok) {
        throw new Error('Failed to update package');
      }

      const updatedPackage = await response.json();
      setPackages(packages.map(p => 
        p.id === updatedPackage.id ? updatedPackage : p
      ));
      setIsEditModalOpen(false);
    } catch (error) {
      console.error('Error updating package:', error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`/api/packages/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete package');
      }

      setPackages(packages.filter(p => p.id !== id));
    } catch (error) {
      console.error('Error deleting package:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 flex items-center justify-center">
        <div className="text-center">
          <p>Loading packages...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <Button 
          className="mb-8 !rounded-button"
          onClick={() => setIsAddModalOpen(true)}
        >
          Add New Package
        </Button>
        
        {packages.length === 0 ? (
          <div className="text-center py-12">
            <p>No health packages available. Add one to get started.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {packages.map((package_, index) => (
              <Card
                key={package_.id}
                className={`overflow-hidden transition-all duration-300 cursor-pointer ${
                  hoveredCard === index ? 'transform -translate-y-2' : ''
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative">
                  <img
                    src={package_.image}
                    alt={package_.title}
                    className="w-full h-[250px] object-cover object-center"
                  />
                  <Badge
                    className="absolute top-4 right-4 bg-red-500"
                  >
                    Save {Math.round(((package_.originalPrice - package_.discountedPrice) / package_.originalPrice) * 100)}%
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{package_.title}</h3>
                  <p className="text-gray-600 mb-4">{package_.description}</p>
                  <div className="flex items-center mb-4">
                    <span className="text-3xl font-bold text-primary">${package_.discountedPrice}</span>
                    <span className="ml-2 text-lg text-gray-500 line-through">${package_.originalPrice}</span>
                  </div>
                  <ul className="mb-6">
                    {package_.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center mb-2">
                        <i className="fas fa-check-circle text-green-500 mr-2"></i>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-2 mt-4">
                    <Button 
                      className="flex-1 !rounded-button"
                      onClick={() => {
                        setSelectedPackage(package_);
                        setIsViewModalOpen(true);
                      }}
                    >
                      View Details
                    </Button>
                    <Button 
                      className="flex-1 !rounded-button"
                      variant="outline"
                      onClick={() => {
                        setEditForm(package_);
                        setIsEditModalOpen(true);
                      }}
                    >
                      Edit
                    </Button>
                    <Button 
                      className="flex-1 !rounded-button"
                      variant="destructive"
                      onClick={() => handleDelete(package_.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* View Modal */}
      <Dialog open={isViewModalOpen} onOpenChange={setIsViewModalOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{selectedPackage?.title}</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <img
              src={selectedPackage?.image}
              alt={selectedPackage?.title}
              className="w-full h-[300px] object-cover rounded-lg mb-4"
            />
            <p className="text-gray-600 mb-4">{selectedPackage?.description}</p>
            <div className="flex items-center mb-4">
              <span className="text-3xl font-bold text-primary">${selectedPackage?.discountedPrice}</span>
              <span className="ml-2 text-lg text-gray-500 line-through">${selectedPackage?.originalPrice}</span>
            </div>
            <h4 className="font-semibold mb-2">Features:</h4>
            <ul className="space-y-2">
              {selectedPackage?.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-2"></i>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </DialogContent>
      </Dialog>

      {/* Edit Modal */}
      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Edit Package</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label>Title</Label>
              <Input
                value={editForm.title}
                onChange={(e) => setEditForm({...editForm, title: e.target.value})}
              />
            </div>
            <div className="grid gap-2">
              <Label>Description</Label>
              <Textarea
                value={editForm.description}
                onChange={(e) => setEditForm({...editForm, description: e.target.value})}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label>Original Price</Label>
                <Input
                  type="number"
                  value={editForm.originalPrice}
                  onChange={(e) => setEditForm({...editForm, originalPrice: Number(e.target.value)})}
                />
              </div>
              <div className="grid gap-2">
                <Label>Discounted Price</Label>
                <Input
                  type="number"
                  value={editForm.discountedPrice}
                  onChange={(e) => setEditForm({...editForm, discountedPrice: Number(e.target.value)})}
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label>Image URL</Label>
              <Input
                value={editForm.image}
                onChange={(e) => setEditForm({...editForm, image: e.target.value})}
              />
            </div>
            <div className="grid gap-2">
              <Label>Features (one per line)</Label>
              <Textarea
                value={editForm.features.join('\n')}
                onChange={(e) => setEditForm({
                  ...editForm, 
                  features: e.target.value.split('\n').filter(f => f.trim() !== '')
                })}
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleEdit} className="!rounded-button">Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Add Modal */}
      <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Add New Package</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label>Title</Label>
              <Input
                value={editForm.title}
                onChange={(e) => setEditForm({...editForm, title: e.target.value})}
              />
            </div>
            <div className="grid gap-2">
              <Label>Description</Label>
              <Textarea
                value={editForm.description}
                onChange={(e) => setEditForm({...editForm, description: e.target.value})}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label>Original Price</Label>
                <Input
                  type="number"
                  value={editForm.originalPrice}
                  onChange={(e) => setEditForm({...editForm, originalPrice: Number(e.target.value)})}
                />
              </div>
              <div className="grid gap-2">
                <Label>Discounted Price</Label>
                <Input
                  type="number"
                  value={editForm.discountedPrice}
                  onChange={(e) => setEditForm({...editForm, discountedPrice: Number(e.target.value)})}
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label>Image URL</Label>
              <Input
                value={editForm.image}
                onChange={(e) => setEditForm({...editForm, image: e.target.value})}
              />
            </div>
            <div className="grid gap-2">
              <Label>Features (one per line)</Label>
              <Textarea
                value={editForm.features.join('\n')}
                onChange={(e) => setEditForm({
                  ...editForm, 
                  features: e.target.value.split('\n').filter(f => f.trim() !== '')
                })}
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleAdd} className="!rounded-button">Add Package</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default App;