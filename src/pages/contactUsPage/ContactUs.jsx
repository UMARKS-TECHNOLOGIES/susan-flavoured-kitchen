import React, { useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../components/ui/dialog";
import { Card, CardContent } from "../../components/ui/card";
import { Label } from "@radix-ui/react-label";
import { Input } from "../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Button } from "../../components/ui/button";
import { Textarea } from "../../components/ui/textarea";
import { Instagram, Mail, Phone } from "lucide-react";
import HeroImage from "../../assets/contactImg.jpg";
import { Separator } from "@radix-ui/react-separator";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPhoneOpen, setIsPhoneOpen] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      // Replace with your actual API endpoint
      console.log("Submitting form:", formData);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      alert("Message sent successfully! We'll get back to you soon.");

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const subjects = ["Order Inquiry", "Catering", "Feedback", "Other"];
  return (
    <div className="min-h-screen bg-[#fff9f4]">
      <Navbar />
      {/* Hero Section */}
      <div
        className="relative h-64 mt-17 mb-10  bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${HeroImage})`,
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-4xl md:text-5xl font-bold text-white z-10">
          We'd Love to Hear From You
        </h1>
      </div>

      {/* Contact Methods */}
      <div className="max-w-6xl mx-auto px-4 mt-8 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Phone - Opens Dialog */}
          <Card
            onClick={() => setIsPhoneOpen(true)}
            className="text-center hover:shadow-md transition-shadow bg-transparent cursor-pointer h-full flex items-center justify-center"
          >
            <CardContent className="py-10">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                  <Phone className="w-8 h-8" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Email - Opens Mailto */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=Susanflavouredkitchen@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full"
          >
            <Card className="text-center hover:shadow-md transition-shadow bg-transparent cursor-pointer h-full flex items-center justify-center">
              <CardContent className="py-10">
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                    <Mail className="w-8 h-8" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </a>

          {/* Instagram - Opens Link */}
          <a
            href="https://instagram.com/susanflavouredkitchenuk"
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full"
          >
            <Card className="text-center hover:shadow-md transition-shadow bg-transparent cursor-pointer h-full flex items-center justify-center">
              <CardContent className="py-10">
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                    <Instagram className="w-8 h-8" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </a>
        </div>
      </div>

      <Dialog open={isPhoneOpen} onOpenChange={setIsPhoneOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-bold">
              Call Us
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center justify-center space-y-4 py-6">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center text-orange-500">
              <Phone className="w-10 h-10" />
            </div>
            <a
              href="tel:07387064824"
              className="text-3xl font-bold text-gray-800 hover:text-orange-500 transition-colors"
            >
              07387064824
            </a>
            <p className="text-gray-500 text-center">
              Available for orders and inquiries
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Contact Form */}
      <div className="max-w-5xl mx-auto px-4 pb-16">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

          <div className="space-y-6">
            {/* Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <Label htmlFor="name" className="font-semibold">
                  Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  placeholder="Enter Your Full Name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="font-semibold">
                  Email Address <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Phone and Subject */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <Label htmlFor="phone" className="font-semibold">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter Your Number"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="font-semibold">
                  Subject <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={formData.subject}
                  onValueChange={(value) => handleChange("subject", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {subjects.map((subject) => (
                      <SelectItem key={subject} value={subject}>
                        {subject}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message" className="font-semibold">
                Message <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="message"
                placeholder="Type Your Message"
                rows={10}
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                required
                className="resize-none"
              />
            </div>

            {/* Submit Button */}
            {/* Submit Button */}
            <div className="flex justify-center">
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-base disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
