import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X, Smile, Frown } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import RequestSubmittedModal from './components/RequestSubmittedModal';
import RequestFailedModal from './components/RequestFailedModal';
import Navbar from '@/components/layout/Navbar/Navbar';

const CateringQuote = () => {
  const [formData, setFormData] = useState({
    eventType: '',
    dateTime: '',
    numberOfGuests: '',
    venue: '',
    additionalNotes: '',
    name: '',
    email: '',
    phone: '',
    preferredDishes: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showRequestSubmitted, setShowRequestSubmitted] = useState(false);
  const [showRequestFailed, setShowRequestFailed] = useState(false);

  const eventTypes = [
    'Wedding',
    'Corporate Event',
    'Birthday Party',
    'Anniversary',
    'Conference',
    'Private Party',
    'Other',
  ];
  const dishes = [
    { id: 'jollof', label: 'Jollof Rice' },
    { id: 'egusi', label: 'Egusi Soup' },
    { id: 'chicken', label: 'Chicken' },
    { id: 'fufu', label: 'Moi Moi' },
    { id: 'gofoosoup', label: 'Snacks' },
    { id: 'pepper', label: 'Pepper Soup' },
    { id: 'assorted', label: 'Assorted Drinks' },
    { id: 'fried', label: 'Fried Plantain' },
  ];

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleDishToggle = dishId => {
    setFormData(prev => ({
      ...prev,
      preferredDishes: prev.preferredDishes.includes(dishId)
        ? prev.preferredDishes.filter(id => id !== dishId)
        : [...prev.preferredDishes, dishId],
    }));
  };
  const validateForm = () => {
    // Required fields
    if (
      !formData.eventType ||
      !formData.dateTime ||
      !formData.numberOfGuests ||
      !formData.venue ||
      !formData.name ||
      !formData.email ||
      !formData.phone
    ) {
      alert('Please fill in all required fields');
      return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return false;
    }

    // Phone validation
    const phoneRegex = /^\d{10,}$/;
    if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      alert('Please enter a valid phone number');
      return false;
    }

    // Number of guests validation
    if (isNaN(formData.numberOfGuests) || formData.numberOfGuests < 1) {
      alert('Please enter a valid number of guests');
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // Replace with your actual API endpoint
      console.log('Submitting catering request:', formData);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Simulate success/failure (90% success rate for demo)
      const isSuccess = Math.random() > 0.1;

      if (isSuccess) {
        setShowRequestSubmitted(true);
        // Reset form
        setFormData({
          eventType: '',
          dateTime: '',
          numberOfGuests: '',
          venue: '',
          additionalNotes: '',
          name: '',
          email: '',
          phone: '',
          preferredDishes: [],
        });
      } else {
        setShowRequestFailed(true);
      }
    } catch (error) {
      console.error('Error submitting catering request:', error);
      setShowRequestFailed(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRetry = () => {
    setShowRequestFailed(false);
  };
  return (
    <div className="bg-[#fffcfa]">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 py-12 mt-20">
        <div className="bg-white rounded-lg shadow-sm p-8">
          {/* Event Details Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Event Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Event Type */}
              <div className="space-y-2">
                <Label htmlFor="eventType">
                  Event Type <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={formData.eventType}
                  onValueChange={value => handleChange('eventType', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {eventTypes.map(type => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Date/Time */}
              <div className="space-y-2">
                <Label htmlFor="dateTime">
                  Date/Time <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="dateTime"
                  type="datetime-local"
                  value={formData.dateTime}
                  onChange={e => handleChange('dateTime', e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Number of Guests */}
              <div className="space-y-2">
                <Label htmlFor="numberOfGuests">
                  Number of Guests <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="numberOfGuests"
                  type="number"
                  placeholder="Enter number of guests"
                  value={formData.numberOfGuests}
                  onChange={e => handleChange('numberOfGuests', e.target.value)}
                  min="1"
                />
              </div>

              {/* Venue/Location */}
              <div className="space-y-2">
                <Label htmlFor="venue">
                  Venue / Location <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="venue"
                  placeholder="Enter Event Venue"
                  value={formData.venue}
                  onChange={e => handleChange('venue', e.target.value)}
                />
              </div>
            </div>

            {/* Additional Notes */}
            <div className="space-y-2">
              <Label htmlFor="additionalNotes">Additional Notes</Label>
              <Textarea
                id="additionalNotes"
                placeholder="Type Your Message"
                rows={8}
                value={formData.additionalNotes}
                onChange={e => handleChange('additionalNotes', e.target.value)}
                className="resize-none"
              />
            </div>
          </div>

          {/* Contact Details Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Contact Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name">
                  Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  placeholder="Enter Your Full Name"
                  value={formData.name}
                  onChange={e => handleChange('name', e.target.value)}
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">
                  Email Address <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={e => handleChange('email', e.target.value)}
                />
              </div>
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <Label htmlFor="phone">
                Phone Number <span className="text-red-500">*</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter Your Number"
                value={formData.phone}
                onChange={e => handleChange('phone', e.target.value)}
                className="md:w-1/2"
              />
            </div>
          </div>

          {/* Preferred Dishes Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Preferred Dishes</h2>
            <p className="text-sm text-gray-600 mb-4">
              Select the dishes you'd like to include in your event. You can
              choose as many as you like.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {dishes.map(dish => (
                <div key={dish.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={dish.id}
                    checked={formData.preferredDishes.includes(dish.id)}
                    onCheckedChange={() => handleDishToggle(dish.id)}
                    className="data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                  />
                  <Label
                    htmlFor={dish.id}
                    className="text-sm font-normal cursor-pointer"
                  >
                    {dish.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <Button
              onClick={handleSubmit}
              disabled={isLoading}
              className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-3 mt-6 text-base font-medium disabled:opacity-50"
            >
              {isLoading ? 'Submitting...' : 'Request Quote'}
            </Button>
          </div>
        </div>

        {/* Modals */}
        <RequestSubmittedModal
          isOpen={showRequestSubmitted}
          onClose={() => setShowRequestSubmitted(false)}
        />

        <RequestFailedModal
          isOpen={showRequestFailed}
          onClose={() => setShowRequestFailed(false)}
          onRetry={handleRetry}
        />
      </div>
    </div>
  );
};

export default CateringQuote;
