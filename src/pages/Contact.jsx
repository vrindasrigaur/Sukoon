import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleInputChange = e => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      const contactData = {
        ...formData,
        timestamp: new Date().toISOString()
      };
      const existingContacts = JSON.parse(localStorage.getItem('sukoonContacts') || '[]');
      existingContacts.push(contactData);
      localStorage.setItem('sukoonContacts', JSON.stringify(existingContacts));
      toast({
        title: "Message Sent! ✅",
        description: "Thank you for reaching out. We will get back to you shortly."
      });

      // Reset form and submitting state
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };
  const handleWhatsAppClick = () => {
    const phoneNumber = '15551237322'; // Replace with a real number for production
    const message = "Hello, I'm contacting you from The Sukoon World website.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };
  return <>
      <Helmet>
        <title>Contact Us - The Sukoon World | Get in Touch for Mental Wellness Support</title>
        <meta name="description" content="Contact The Sukoon World for mental wellness support. Reach out via our contact form or WhatsApp for questions about our counselling services and appointments." />
        <meta property="og:title" content="Contact Us - The Sukoon World | Get in Touch for Mental Wellness Support" />
        <meta property="og:description" content="Contact The Sukoon World for mental wellness support. Reach out via our contact form or WhatsApp for questions about our counselling services and appointments." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-accent/20 to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="text-center">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold text-secondary mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to support you on your mental wellness journey. Reach out with any questions or to schedule your session.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }} className="space-y-8">
              <div>
                <h2 className="text-3xl font-poppins font-bold text-secondary mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  We're committed to providing you with the support you need. Choose the method that feels most comfortable for you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-poppins font-semibold text-secondary mb-1">Email</h3>
                    <p className="text-gray-600">hello@sukoonworld.com</p>
                    <p className="text-sm text-gray-500">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-poppins font-semibold text-secondary mb-1">Phone</h3>
                    <p className="text-gray-600">+91 7300979567</p>
                    <p className="text-sm text-gray-500">Mon-Fri, 9 AM - 6 PM </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MessageCircle className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-poppins font-semibold text-secondary mb-1">WhatsApp</h3>
                    <p className="text-gray-600 mb-2">Quick chat for immediate support</p>
                    <Button onClick={handleWhatsAppClick} className="bg-green-500 hover:bg-green-600 text-white rounded-full">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Chat on WhatsApp
                    </Button>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-poppins font-semibold text-secondary mb-1">Office Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM </p>
                      <p>Saturday: 10:00 AM - 4:00 PM </p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Notice */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-poppins font-semibold text-red-800 mb-2">
                  Emergency Support
                </h3>
                <p className="text-red-700 text-sm">
                  If you're experiencing a mental health emergency, please contact your local emergency services or crisis helpline immediately. The Sukoon World is not an emergency service.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }} className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-poppins font-bold text-secondary mb-6">
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" name="name" type="text" required value={formData.name} onChange={handleInputChange} className="mt-1" placeholder="Your full name" />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} className="mt-1" placeholder="your.email@example.com" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <select id="subject" name="subject" required value={formData.subject} onChange={handleInputChange} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                    <option value="">Select a subject</option>
                    <option value="booking">Booking Inquiry</option>
                    <option value="services">Questions about Services</option>
                    <option value="technical">Technical Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea id="message" name="message" required value={formData.message} onChange={handleInputChange} className="mt-1" rows={5} placeholder="How can we help you today?" />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 rounded-full text-lg py-3" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : <><Send className="h-5 w-5 mr-2" />Send Message</>}
                </Button>
                
                <p className="text-sm text-gray-600 text-center">
                  We'll get back to you within 24 hours during business days.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-secondary mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our services.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[{
            question: "How do I book my first session?",
            answer: "You can book your first session through our online booking system. We recommend starting with a free discovery call to understand your needs better."
          }, {
            question: "Are sessions confidential?",
            answer: "Yes, all sessions are completely confidential. We follow strict privacy guidelines and professional ethics to ensure your information is protected."
          }, {
            question: "What if I need to cancel or reschedule?",
            answer: "You can cancel or reschedule your appointment up to 24 hours before your session time. Please refer to our cancellation policy for more details."
          }, {
            question: "Do you offer emergency support?",
            answer: "The Sukoon World is not an emergency service. If you're experiencing a mental health crisis, please contact your local emergency services or crisis helpline immediately."
          }].map((faq, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: index * 0.1
          }} viewport={{
            once: true
          }} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-poppins font-semibold text-secondary mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </motion.div>)}
          </div>
        </div>
      </section>
    </>;
};
export default Contact;