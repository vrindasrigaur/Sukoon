import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, CheckCircle, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { createICSFile } from '@/lib/calendar';
import { useLocation, useNavigate } from 'react-router-dom';
import { initialCounsellors } from '@/data/counsellors';

const BookAppointment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedCounsellor, setSelectedCounsellor] = useState('');
  const [allCounsellors, setAllCounsellors] = useState([]);

  useEffect(() => {
    const localCounsellors = JSON.parse(localStorage.getItem('sukoonCounsellors') || '[]');
    const combined = [...initialCounsellors, ...localCounsellors];
    setAllCounsellors(combined);

    const queryParams = new URLSearchParams(location.search);
    const counsellorId = queryParams.get('counsellor');
    if (counsellorId && combined.some(c => c.id === counsellorId)) {
      setSelectedCounsellor(counsellorId);
    }
  }, [location.search]);

  const services = [
    { id: 'discovery', name: 'Discovery Call (30 min)', price: 'Free' },
    { id: 'counselling', name: 'Counselling Session (60 min)', price: '$80' },
    { id: 'stress', name: 'Stress Management (45 min)', price: '$65' },
    { id: 'mindfulness', name: 'Mindfulness Coaching (45 min)', price: '$65' }
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const handleBooking = () => {
    if (!selectedService || !selectedDate || !selectedTime || !selectedCounsellor) {
      toast({
        title: "Please complete all fields",
        description: "Make sure to select a service, counsellor, date, and time.",
        variant: "destructive"
      });
      return;
    }

    const serviceDetails = services.find(s => s.id === selectedService);
    const counsellorDetails = allCounsellors.find(c => c.id === selectedCounsellor);

    const bookingData = {
      service: serviceDetails.name,
      counsellor: counsellorDetails.name,
      date: selectedDate,
      time: selectedTime,
      timestamp: new Date().toISOString()
    };

    const existingBookings = JSON.parse(localStorage.getItem('sukoonBookings') || '[]');
    existingBookings.push(bookingData);
    localStorage.setItem('sukoonBookings', JSON.stringify(existingBookings));

    toast({
      title: "Booking Confirmed! 🎉",
      description: "Your session has been successfully booked. A calendar file will be downloaded.",
    });

    const icsBlob = createICSFile({
      serviceName: serviceDetails.name,
      counsellorName: counsellorDetails.name,
      date: selectedDate,
      time: selectedTime,
    });
    const url = URL.createObjectURL(icsBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sukoon-world-appointment.ics';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    // Reset form
    setSelectedService('');
    setSelectedDate('');
    setSelectedTime('');
    setSelectedCounsellor('');
    navigate('/book');
  };

  const generateDateOptions = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date.toISOString().split('T')[0]);
    }
    return dates;
  };

  return (
    <>
      <Helmet>
        <title>Book Appointment - Sukoon World | Schedule Your Mental Wellness Session</title>
        <meta name="description" content="Book your mental wellness session with our certified counsellors. Choose from discovery calls, counselling sessions, stress management, and mindfulness coaching." />
        <meta property="og:title" content="Book Appointment - Sukoon World | Schedule Your Mental Wellness Session" />
        <meta property="og:description" content="Book your mental wellness session with our certified counsellors. Choose from discovery calls, counselling sessions, stress management, and mindfulness coaching." />
      </Helmet>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-poppins font-bold text-secondary mb-6">
              Book Your Appointment
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Schedule your session with one of our certified counsellors. Choose the service, date, and time that works best for you.
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            {/* Service Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8"
            >
              <div className="flex items-center space-x-3 mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-poppins font-semibold text-secondary">
                  1. Select Service
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                      selectedService === service.id
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-200 hover:border-primary/50'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-secondary">{service.name}</span>
                      <span className="text-primary font-semibold">{service.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Counsellor Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <div className="flex items-center space-x-3 mb-4">
                <User className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-poppins font-semibold text-secondary">
                  2. Choose Counsellor
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {allCounsellors.map((counsellor) => (
                  <div
                    key={counsellor.id}
                    onClick={() => setSelectedCounsellor(counsellor.id)}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                      selectedCounsellor === counsellor.id
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-200 hover:border-primary/50'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-4">
                        <img src={counsellor.image} alt={counsellor.name} className="w-12 h-12 rounded-full object-cover" />
                        <div>
                          <span className="font-medium text-secondary block">{counsellor.name}</span>
                          <span className="text-gray-600 text-sm">{counsellor.specialties.join(', ')}</span>
                        </div>
                      </div>
                      {selectedCounsellor === counsellor.id && (
                        <CheckCircle className="h-5 w-5 text-primary" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Date Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Calendar className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-poppins font-semibold text-secondary">
                  3. Select Date
                </h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
                {generateDateOptions().map((date) => {
                  const dateObj = new Date(date + 'T00:00:00');
                  const dayName = dateObj.toLocaleDateString('en-US', { weekday: 'short' });
                  const dayNumber = dateObj.getDate();
                  const monthName = dateObj.toLocaleDateString('en-US', { month: 'short' });
                  
                  return (
                    <div
                      key={date}
                      onClick={() => setSelectedDate(date)}
                      className={`p-3 rounded-lg border-2 cursor-pointer text-center transition-all duration-200 ${
                        selectedDate === date
                          ? 'border-primary bg-primary text-white'
                          : 'border-gray-200 hover:border-primary/50'
                      }`}
                    >
                      <div className="text-sm font-medium">{dayName}</div>
                      <div className="text-lg font-bold">{dayNumber}</div>
                      <div className="text-xs">{monthName}</div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Time Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-poppins font-semibold text-secondary">
                  4. Select Time
                </h2>
              </div>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                {timeSlots.map((time) => (
                  <div
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`p-3 rounded-lg border-2 cursor-pointer text-center transition-all duration-200 ${
                      selectedTime === time
                        ? 'border-primary bg-primary text-white'
                        : 'border-gray-200 hover:border-primary/50'
                    }`}
                  >
                    <span className="font-medium">{time}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Booking Summary & Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <h3 className="text-lg font-poppins font-semibold text-secondary mb-4">
                Booking Summary
              </h3>
              <div className="space-y-2 mb-6 text-gray-700">
                <p><span className="font-medium text-secondary">Service:</span> {selectedService ? services.find(s => s.id === selectedService)?.name : 'Not selected'}</p>
                <p><span className="font-medium text-secondary">Counsellor:</span> {selectedCounsellor ? allCounsellors.find(c => c.id === selectedCounsellor)?.name : 'Not selected'}</p>
                <p><span className="font-medium text-secondary">Date:</span> {selectedDate ? new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : 'Not selected'}</p>
                <p><span className="font-medium text-secondary">Time:</span> {selectedTime || 'Not selected'}</p>
              </div>
              
              <Button 
                onClick={handleBooking}
                className="w-full bg-primary hover:bg-primary/90 rounded-full text-lg py-3"
                disabled={!selectedService || !selectedDate || !selectedTime || !selectedCounsellor}
              >
                Confirm Booking & Download Invite
              </Button>
              
              <p className="text-sm text-gray-600 mt-4 text-center">
                After confirming, a calendar invite (.ics file) will be downloaded to your device.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookAppointment;