import React, { useState } from 'react';
import Navbar from '../../components/layout/Navbar/Navbar';
// import Footer from '../../components/layout/Footer';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '../../components/ui/dialog';
import { Card, CardContent } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';
import { Button } from '../../components/ui/button';
import { Textarea } from '../../components/ui/textarea';
import { Instagram, Mail, Phone } from 'lucide-react';
import HeroImage from '../../assets/contactImg.jpg';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [isPhoneOpen, setIsPhoneOpen] = useState(false);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    setError('');

    try {
      const response = await fetch(
        'https://susanfalvoredkitchen-backend-23c5.onrender.com/api/v1/contact/contact',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }

      setSuccess("Your message has been sent successfully!");
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        subject: '',
        message: '',
      });
    } catch (err) {
      setError(err.message || 'Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const subjects = ['Order Inquiry', 'Catering', 'Feedback', 'Other'];

  return (
    <div className="min-h-screen bg-[#fff9f4]">
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative h-64 mt-20 mb-10 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-4xl md:text-5xl font-bold text-white z-10">
          We'd Love to Hear From You
        </h1>
      </div>

      {/* Contact Methods */}
      <div className="max-w-6xl mx-auto px-4 mt-8 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card onClick={() => setIsPhoneOpen(true)} className="cursor-pointer bg-transparent">
            <CardContent className="py-10 flex justify-center">
              <Phone className="w-10 h-10 text-orange-500" />
            </CardContent>
          </Card>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=Susanflavouredkitchen@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className="bg-transparent">
              <CardContent className="py-10 flex justify-center">
                <Mail className="w-10 h-10 text-orange-500" />
              </CardContent>
            </Card>
          </a>

          <a
            href="https://www.instagram.com/susanflavouredkitchenuk?igsh=dXVydXR2bGRjcHY2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className="bg-transparent">
              <CardContent className="py-10 flex justify-center">
                <Instagram className="w-10 h-10 text-orange-500" />
              </CardContent>
            </Card>
          </a>
        </div>
      </div>

      {/* Phone Dialog */}
      <Dialog open={isPhoneOpen} onOpenChange={setIsPhoneOpen} className="border-r-20">
  <DialogContent className="flex flex-col items-center rounded-sm justify-center text-center space-y-4">
    <DialogHeader>
      <DialogTitle className="text-bold text-xl">Call Us</DialogTitle>
    </DialogHeader>

    {/* Phone icon */}
    <span className="relative bg-orange-100 h-12 w-12 rounded-full flex items-center justify-center">
  <Phone className="text-orange-600 text-3xl" />
</span>

    {/* Phone number */}
    <a href="tel:+447387044524" className="text-2xl font-bold">
      +447387044524
    </a>

    <p className="font-sm">
      Available for orders and inquiries
    </p>
  </DialogContent>
</Dialog>


      {/* Contact Form */}
      <div className="max-w-5xl mx-auto px-4 pb-16">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                placeholder="Full Name *"
                value={formData.fullName}
                onChange={e => handleChange('fullName', e.target.value)}
                required
              />
              <Input
                type="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={e => handleChange('email', e.target.value)}
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Input
                placeholder="Phone Number / WhatsApp *"
                value={formData.phoneNumber}
                onChange={e => handleChange('phoneNumber', e.target.value)}
                required
              />

              <Select
                value={formData.subject}
                onValueChange={value => handleChange('subject', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select subject *" />
                </SelectTrigger>
                <SelectContent>
                  {subjects.map(s => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Textarea
              rows={8}
              placeholder="Your message *"
              value={formData.message}
              onChange={e => handleChange('message', e.target.value)}
              required
            />

            <Button type="submit" disabled={loading} className="bg-orange-500 w-full">
              {loading ? 'Sending...' : 'Send Message'}
            </Button>

            {success && <p className="text-green-600 text-center">{success}</p>}
            {error && <p className="text-red-600 text-center">{error}</p>}
          </form>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default ContactUs;
