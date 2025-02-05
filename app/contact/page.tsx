"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, MapPin, Phone, Mail, Upload } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import AddressIcon from "../../images/contactImage/business-address.png";
import PhoneNumberIcon from "../../images/contactImage/contacts.png";
import EmailIcon from "../../images/contactImage/mail.png";
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState('');
  const { toast } = useToast();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 font-luxora">
      <div className="container max-w-6xl mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-2 gap-16 py-8">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-12 "
          >
            <motion.div variants={itemVariants} className="">
              <h1 className="text-5xl tracking-tight mb-4">Get in Touch</h1>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you shortly.
              </p>
            </motion.div>

            <motion.form onSubmit={handleSubmit} className="space-y-8" variants={containerVariants}>
              <motion.div variants={itemVariants} className="space-y-6">
                <div className="relative">
                  <label className="text-sm text-gray-600 mb-2 block">· Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-transparent border-b-2 border-gray-200 py-3 focus:outline-none focus:border-[#cf479b] transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div className="relative">
                  <label className="text-sm text-gray-600 mb-2 block">· Email Address</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-transparent border-b-2 border-gray-200 py-3 focus:outline-none focus:border-[#cf479b] transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="relative">
                  <label className="text-sm text-gray-600 mb-2 block">· Phone Number</label>
                  <input
                    type="tel"
                    required
                    className="w-full bg-transparent border-b-2 border-gray-200 py-3 focus:outline-none focus:border-[#cf479b] transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className="relative">
                  <label className="text-sm text-gray-600 mb-2 block">· Message</label>
                  <textarea
                    required
                    className="w-full bg-transparent border-b-2 border-gray-200 py-3 focus:outline-none focus:border-[#cf479b] transition-colors resize-none"
                    placeholder="How can we help you?"
                    rows={4}
                  />
                </div>

                <div className="relative">
                  <label className="text-sm text-gray-600 mb-2 block">· Resume Upload</label>
                  <div className="relative">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                      id="resume-upload"
                    />
                    <label
                      htmlFor="resume-upload"
                      className="flex items-center justify-center w-full border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:border-[#cf479b] transition-colors"
                    >
                      <div className="text-center">
                        <Upload className="w-6 h-6 mx-auto mb-2 text-gray-400" />
                        <span className="text-sm text-gray-600">
                          {fileName || 'Upload your resume (PDF, DOC, DOCX)'}
                        </span>
                      </div>
                    </label>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className="group relative rounded-3xl border border-[#cf479b] text-[#cf479b] bg-[#fff8ff] hover:text-white overflow-hidden transition-colors duration-300"
                >
                  <a className="flex gap-2 relative z-10">
                    {isSubmitting ? (
                      <span className="flex items-center space-x-2">Sending...</span>
                    ) : submitted ? (
                      <span className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Sent Successfully
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Send Message
                        <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </span>
                    )}
                    <div className="absolute inset-0 w-full h-full bg-[#cf479b] -z-10 transform translate-x-full transition-transform duration-300 group-hover:translate-x-0" />
                  </a>
                </Button>
              
              </motion.div>
            </motion.form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="lg:pl-16"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-4xl tracking-tight mb-4 pt-4">Office Information</h2>

              {/* Address */}
              <div className="bg-transparent border border-gray-200 rounded-xl p-6 flex items-center space-x-4">
                <Image src={AddressIcon.src} width={15} height={15} alt='no image' className="w-8 h-8 " />
                <div>
                  <p className="text-xl">123 Career Street, NY 10001</p>
                  <h3 className="text-sm text-gray-600 font-medium">You are always welcome for a visit in our office.</h3>
                </div>
              </div>

              {/* Phone */}
              <a
                href="tel:+15551234567"
                className="bg-transparent border border-gray-200 rounded-xl p-6 flex items-center space-x-4 transition"
              >
                <Image src={PhoneNumberIcon.src} width={15} height={15} alt='no image' className="w-8 h-8 " />
                <div>
                  <p className=" text-xl hover:text-purple-600 transition-colors">
                    +1 (555) 123-4567
                  </p>
                  <h3 className="text-gray-600 text-sm font-medium">Phone calls will be answered during office hours.</h3>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:contact@example.com"
                className="bg-transparent  rounded-xl p-6 flex items-center space-x-4 transition border border-gray-200"
              >
                <Image src={EmailIcon.src} width={15} height={15} alt='no image' className="w-8 h-8 " />
                <div>
                  <p className="text-xl hover:text-purple-600 transition-colors">
                    contact@example.com
                  </p>
                  <h3 className="text-sm text-gray-600 font-medium">You can contact us regarding your work at this email.</h3>
                </div>
              </a>

              {/* Google Map */}
              <div className="rounded-lg overflow-hidden border border-gray-200 h-80 mt-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25436351647!2d-74.11976379633569!3d40.69767006847726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1643755438485!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;