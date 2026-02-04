import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import BookAppointment from '@/pages/BookAppointment';
import IntakeForm from '@/pages/IntakeForm';
import Blog from '@/pages/Blog';
import Contact from '@/pages/Contact';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import Terms from '@/pages/Terms';
import CancellationPolicy from '@/pages/CancellationPolicy';
import CreatePost from '@/pages/admin/CreatePost';
import BlogPost from '@/pages/BlogPost';
import Counsellors from '@/pages/Counsellors';
import CounsellorProfile from '@/pages/CounsellorProfile';
import ManageCounsellors from '@/pages/admin/ManageCounsellors';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/counsellors" element={<Counsellors />} />
            <Route path="/counsellors/:counsellorId" element={<CounsellorProfile />} />
            <Route path="/services" element={<Services />} />
            <Route path="/book" element={<BookAppointment />} />
            <Route path="/intake-form" element={<IntakeForm />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:postId" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cancellation" element={<CancellationPolicy />} />
            <Route path="/admin/create-post" element={<CreatePost />} />
            <Route path="/admin/manage-counsellors" element={<ManageCounsellors />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;