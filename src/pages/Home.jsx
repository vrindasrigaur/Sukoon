import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, Shield, Users, Clock, Star, ArrowRight } from 'lucide-react';

const Home = () => {
  const services = [
    {
      title: 'Discovery Call',
      description: 'Free 30-minute consultation to understand your needs',
      icon: Heart,
      price: 'Free'
    },
    {
      title: 'Counselling Session',
      description: 'Professional 60-minute one-on-one counselling',
      icon: Users,
      price: 'Book Now'
    },
    {
      title: 'Stress Management',
      description: 'Learn effective techniques to manage daily stress',
      icon: Shield,
      price: 'Book Now'
    },
    {
      title: 'Mindfulness Coaching',
      description: 'Develop mindfulness practices for inner peace',
      icon: Clock,
      price: 'Book Now'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      text: 'The Sukoon World helped me find peace during my most challenging times. The counsellors are incredibly understanding and professional.',
      rating: 5
    },
    {
      name: 'Ahmed K.',
      text: 'I was skeptical about online counselling, but the experience exceeded my expectations. Highly recommend their stress management sessions.',
      rating: 5
    },
    {
      name: 'Priya S.',
      text: 'The mindfulness coaching sessions have transformed my daily routine. I feel more centered and calm than ever before.',
      rating: 5
    }
  ];

  const blogPosts = [
    {
      title: '5 Simple Breathing Techniques for Instant Calm',
      category: 'Mindfulness',
      excerpt: 'Discover powerful breathing exercises that can help you find peace in moments of stress...',
      readTime: '3 min read'
    },
    {
      title: 'Understanding Anxiety: Signs and Solutions',
      category: 'Anxiety',
      excerpt: 'Learn to recognize anxiety symptoms and explore effective coping strategies...',
      readTime: '5 min read'
    },
    {
      title: 'Creating Work-Life Balance in a Digital World',
      category: 'Lifestyle Balance',
      excerpt: 'Practical tips for maintaining mental wellness while navigating modern work demands...',
      readTime: '4 min read'
    }
  ];

  return (
    <>
      <Helmet>
        <title>The Sukoon World - Where Peace Finds You | Online Counselling & Stress Relief</title>
        <meta name="description" content="Professional online counselling and stress-relief sessions. Find peace, manage anxiety, and improve your mental wellness with our certified counsellors." />
        <meta property="og:title" content="The Sukoon World - Where Peace Finds You | Online Counselling & Stress Relief" />
        <meta property="og:description" content="Professional online counselling and stress-relief sessions. Find peace, manage anxiety, and improve your mental wellness with our certified counsellors." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-poppins font-bold text-secondary mb-6">
              Where Peace <span className="text-gradient">Finds You</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Professional online counselling and stress-relief sessions in a safe, confidential space designed for your mental wellness journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-full text-lg px-8 py-3">
                <Link to="/book">Book a Session</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full text-lg px-8 py-3 border-primary text-primary hover:bg-primary hover:text-white">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <img  alt="Peaceful meditation scene with person in serene environment" className="w-full h-64 object-cover opacity-20" src="https://images.unsplash.com/photo-1581557568198-15aee95662e8" />
        </div>
      </section>

      {/* Why Sukoon Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-secondary mb-6">
              Why Choose Sukoon?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide a sanctuary for your mental wellness with professional care, complete confidentiality, and personalized support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Complete Confidentiality',
                description: 'Your privacy is our priority. All sessions are completely confidential and secure.'
              },
              {
                icon: Users,
                title: 'Certified Counsellors',
                description: 'Work with experienced, licensed professionals who understand your journey.'
              },
              {
                icon: Heart,
                title: 'Personalized Care',
                description: 'Tailored approaches that respect your unique needs and circumstances.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-poppins font-semibold text-secondary mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-secondary mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive mental wellness support tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <service.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-poppins font-semibold text-secondary mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {service.description}
                </p>
                <Button asChild variant="outline" size="sm" className="w-full rounded-full border-primary text-primary hover:bg-primary hover:text-white">
                  <Link to="/services">{service.price}</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-secondary mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from people who found their peace with us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-poppins font-semibold text-secondary">
                  {testimonial.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Highlights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-secondary mb-6">
              Latest from Our Blog
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights and tips for your mental wellness journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img  alt={`Blog post about ${post.title}`} className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1648827273919-511d8e3ca580" />
                <div className="p-6">
                  <span className="text-sm text-primary font-medium">{post.category}</span>
                  <h3 className="text-lg font-poppins font-semibold text-secondary mt-2 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <Button asChild variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                      <Link to="/blog">
                        Read More <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white">
              <Link to="/blog">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
              Ready to Begin Your Journey to Peace?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Take the first step towards better mental wellness. Book your session today and discover where peace finds you.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 rounded-full text-lg px-8 py-3">
              <Link to="/book">Book Your Session Now</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;