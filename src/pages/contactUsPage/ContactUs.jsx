import React, { useState } from "react";
import Navbar from "../../components/layout/Navbar/Navbar";
// import Footer from '../../components/layout/Footer';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../components/ui/dialog";
import { Card, CardContent } from "../../components/ui/card";
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
import HeroImage from "../../assets/contact_bg_sharp.png";
import { motion } from "framer-motion";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [isPhoneOpen, setIsPhoneOpen] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch(
        "https://susanfalvoredkitchen-backend-23c5.onrender.com/api/v1/contact/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      setSuccess("Your message has been sent successfully!");
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      setError(err.message || "Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const subjects = ["Order Inquiry", "Catering", "Feedback", "Other"];

  return (
    <div className="min-h-screen bg-[#fff9f4]">
      <Navbar />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative h-64 sm:h-80 md:h-[400px] mt-20 mb-10 bg-cover bg-center flex items-center justify-center p-4 text-center"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <h1 className="relative text-3xl sm:text-4xl md:text-5xl font-extrabold text-white z-10 drop-shadow-lg">
          We'd Love to Hear From You
        </h1>
      </motion.div>

      {/* Contact Methods */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-6xl mx-auto px-4 mt-8 mb-10"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <motion.div whileHover={{ y: -5, scale: 1.02 }}>
            <Card
              onClick={() => setIsPhoneOpen(true)}
              className="cursor-pointer bg-white/50 border-orange-100 hover:border-orange-500 transition-colors h-full"
            >
              <CardContent className="py-8 sm:py-10 flex flex-col items-center gap-4">
                <Phone className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500" />
                <p className="text-sm font-semibold text-gray-600 sm:hidden">
                  Call Us
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=Susanflavouredkitchen@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div whileHover={{ y: -5, scale: 1.02 }} className="h-full">
              <Card className="bg-white/50 border-orange-100 hover:border-orange-500 transition-colors h-full">
                <CardContent className="py-8 sm:py-10 flex flex-col items-center gap-4">
                  <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500" />
                  <p className="text-sm font-semibold text-gray-600 sm:hidden">
                    Email Us
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </a>

          <a
            href="https://www.instagram.com/susanflavouredkitchenuk?igsh=dXVydXR2bGRjcHY2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div whileHover={{ y: -5, scale: 1.02 }} className="h-full">
              <Card className="bg-white/50 border-orange-100 hover:border-orange-500 transition-colors h-full">
                <CardContent className="py-8 sm:py-10 flex flex-col items-center gap-4">
                  <Instagram className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500" />
                  <p className="text-sm font-semibold text-gray-600 sm:hidden">
                    Follow Us
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </a>
        </div>
      </motion.div>

      {/* Phone Dialog */}
      <Dialog open={isPhoneOpen} onOpenChange={setIsPhoneOpen}>
        <DialogContent className="flex flex-col items-center rounded-3xl justify-center text-center space-y-6 pt-12 pb-10 max-w-[90%] sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-black text-gray-900">
              Call Us
            </DialogTitle>
          </DialogHeader>

          <div className="relative bg-orange-100 h-20 w-20 rounded-full flex items-center justify-center animate-bounce">
            <Phone className="text-orange-600 w-10 h-10" />
          </div>

          <a
            href="tel:+447387044524"
            className="text-2xl sm:text-3xl font-black text-orange-600 hover:scale-105 transition-transform"
          >
            +447387044524
          </a>

          <p className="text-gray-500 font-medium px-4">
            Available 24/7 for orders and inquiries
          </p>
        </DialogContent>
      </Dialog>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-1 sm:px-4 pb-16"
      >
        <div className="bg-white rounded-4xl shadow-xl shadow-orange-900/5 p-3 sm:p-10 border border-gray-100">
          <h2 className="text-2xl font-black text-gray-900 mb-4 mt-3 border-b border-gray-50 pb-4">
            Send Us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Input
                placeholder="Full Name *"
                className="h-12 bg-gray-50 border-gray-200 rounded-xl focus:ring-orange-500"
                value={formData.fullName}
                onChange={(e) => handleChange("fullName", e.target.value)}
                required
              />
              <Input
                type="email"
                placeholder="Email Address *"
                className="h-12 bg-gray-50 border-gray-200 rounded-xl focus:ring-orange-500"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Input
                placeholder="Phone (e.g. +44 7700 900000) *"
                className="h-12 bg-gray-50 border-gray-200 rounded-xl focus:ring-orange-500"
                value={formData.phoneNumber}
                onChange={(e) => handleChange("phoneNumber", e.target.value)}
                required
              />

              <Select
                value={formData.subject}
                onValueChange={(value) => handleChange("subject", value)}
              >
                <SelectTrigger className="h-12 bg-gray-50 border-gray-200 rounded-xl focus:ring-orange-500">
                  <SelectValue placeholder="Select subject *" />
                </SelectTrigger>
                <SelectContent className="rounded-xl">
                  {subjects.map((s) => (
                    <SelectItem
                      key={s}
                      value={s}
                      className="focus:bg-orange-50 cursor-pointer"
                    >
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Textarea
              rows={6}
              placeholder="Your message *"
              className="bg-gray-50 border-gray-200 rounded-2xl p-4 focus:ring-orange-500 resize-none"
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              required
            />

            <Button
              type="submit"
              disabled={loading}
              className="bg-orange-600 hover:bg-orange-700 h-14 w-full rounded-2xl text-lg font-bold transition shadow-lg shadow-orange-500/20 active:scale-95"
            >
              {loading ? "Sending Request..." : "Send Message"}
            </Button>

            {success && <p className="text-green-600 text-center">{success}</p>}
            {error && <p className="text-red-600 text-center">{error}</p>}
          </form>
        </div>
      </motion.div>

      {/* <Footer /> */}
    </div>
  );
};

export default ContactUs;
