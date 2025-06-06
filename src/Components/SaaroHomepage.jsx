import React, { useState } from 'react';
import { ChevronDown, Menu, X, Check, Play, Star, ArrowRight, Shield, Clock, Users, Brain, Calendar, FileText, Video, CreditCard, Headphones } from 'lucide-react';
import FooterSection from './FooterSection';
import logo from '../assets/logo.png'

const SaaroHomepage = () => {
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const productItems = [
    'EMR Solutions',
    'EHR Management',
    'AI-Powered Prescriptions',
    'Telemedicine',
    'Analytics Dashboard',
    'Billing Integration'
  ];

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Prescription Printing",
      description: "Never worry about manual prescription errors again. Our AI analyzes patient data and generates accurate, personalized prescriptions every time.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Predictive Patient Analytics",
      description: "AI-driven insights help predict patient conditions and treatment responses, allowing you to take proactive steps in care management.",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Automated Appointment Scheduling",
      description: "Allow patients to schedule, reschedule, or cancel appointments effortlessly with automated reminders.",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Integrated Telemedicine",
      description: "Conduct remote consultations with ease using our integrated video conferencing tools.",
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Seamless Insurance & Billing",
      description: "Automate billing processes and integrate directly with insurance providers for faster claims.",
      color: "bg-orange-50 text-orange-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "24/7 Data Security",
      description: "End-to-end encryption and secure cloud storage with round-the-clock support.",
      color: "bg-red-50 text-red-600"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Nisha Patel",
      role: "General Practitioner",
      content: "The AI-powered prescription printing has been a game-changer. It's saved us so much time, and the accuracy has improved patient safety.",
      rating: 5
    },
    {
      name: "Dr. Ramesh Kumar",
      role: "Cardiologist",
      content: "Saaro Health's predictive analytics has helped us catch potential health issues before they became serious. It's like having an extra set of eyes on every patient.",
      rating: 5
    },
    {
      name: "Dr. Sarah Johnson",
      role: "Family Medicine",
      content: "The integrated telemedicine feature has transformed how we deliver care. Our patients love the convenience and we've seen improved engagement.",
      rating: 5
    }
  ];

  // Placeholder logos - using div elements instead of external images
  const companyLogos = [
    { name: "HealthTech", color: "bg-blue-500" },
    { name: "MediCorp", color: "bg-green-500" },
    { name: "CarePlus", color: "bg-purple-500" },
    { name: "WellnessAI", color: "bg-red-500" },
    { name: "DocSys", color: "bg-yellow-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
                <img
                    src={logo}
                    alt="Saaro Health Logo"
                    className="h-10 w-auto"
                />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-purple-500 font-medium">Home</a>
              
              {/* Product Dropdown */}
              <div className="relative">
                <button
                  className="flex items-center text-gray-700 hover:text-purple-500 font-medium"
                  onMouseEnter={() => setIsProductDropdownOpen(true)}
                  onMouseLeave={() => setIsProductDropdownOpen(false)}
                >
                  Product
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {isProductDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200"
                    onMouseEnter={() => setIsProductDropdownOpen(true)}
                    onMouseLeave={() => setIsProductDropdownOpen(false)}
                  >
                    {productItems.map((item, index) => (
                      <a
                        key={index}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-500 first:rounded-t-md last:rounded-b-md"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              
              <a href="#" className="text-gray-700 hover:text-purple-500 font-medium">Contact Us</a>
              <a href="#" className="text-gray-700 hover:text-purple-500 font-medium">Pricing</a>
            </div>

            {/* Get Started Button */}
            <div className="hidden md:flex">
              <button className="bg-gray-800 text-white px-6 py-2 rounded-full font-medium hover:bg-gray-900 transition-colors">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-700 font-medium">Home</a>
              <a href="#" className="block px-3 py-2 text-gray-700 font-medium">Product</a>
              <a href="#" className="block px-3 py-2 text-gray-700 font-medium">Contact Us</a>
              <a href="#" className="block px-3 py-2 text-gray-700 font-medium">Pricing</a>
              <button className="w-full text-left bg-gray-800 text-white px-3 py-2 rounded-md font-medium mt-2">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Smarter Healthcare,
                <br />
                <span className="text-gray-600">Powered by AI</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Transform your practice with Saaro Health's intelligent, easy-to-use EMR & EHR solutions. Designed to make patient care efficient and personalized.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-600 transition-colors shadow-lg">
                Start Your Free Trial
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-colors">
                Book A Demo
              </button>
            </div>
          </div>

          {/* Right Side - Analytics Dashboard */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              {/* Dashboard Header */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-500 mb-2">Patient Care Efficiency</h3>
                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl font-bold text-gray-900">94.2%</span>
                </div>
                <div className="flex items-center mt-2">
                  <span className="text-green-500 text-sm font-medium">📈 12.3% improvement this month</span>
                </div>
              </div>

              {/* Chart Area */}
              <div className="relative h-64">
                <div className="flex items-end justify-between h-full space-x-3">
                  {[
                    { height: '60%', label: 'EMR' },
                    { height: '85%', label: 'AI Rx' },
                    { height: '92%', label: 'Analytics' },
                    { height: '78%', label: 'Billing' },
                    { height: '95%', label: 'Total' }
                  ].map((bar, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center">
                      <div 
                        className="w-full bg-gradient-to-t from-purple-400 to-purple-200 rounded-t-lg relative overflow-hidden"
                        style={{ height: bar.height }}
                      >
                        <div className="absolute inset-0 opacity-30">
                          {[...Array(6)].map((_, i) => (
                            <div 
                              key={i}
                              className="absolute w-full h-1 bg-purple-500 rounded-full"
                              style={{ 
                                top: `${i * 16}%`,
                                opacity: 0.3 + (i * 0.1)
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Labels */}
              <div className="flex justify-between mt-4 text-xs text-gray-400">
                <span>EMR</span>
                <span>AI Rx</span>
                <span>Analytics</span>
                <span>Billing</span>
                <span>Total</span>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-200 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-200 rounded-full opacity-60 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Company Logos Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-center text-gray-500 font-semibold tracking-wide text-lg mb-12">
          Built on a Foundation of World-Class Partnerships
        </p>
        <div className="flex justify-center items-center space-x-8 md:space-x-12 opacity-60">
          {companyLogos.map((logo, index) => (
            <div key={index} className={`${logo.color} h-8 w-20 md:h-10 md:w-24 rounded flex items-center justify-center`}>
              <span className="text-white text-xs font-bold">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* What is Saaro Health Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Revolutionizing Healthcare Management, One Smart Solution at a Time
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At Saaro Health, we believe in simplifying healthcare while boosting its capabilities. Our advanced AI-powered EMR & EHR solutions provide healthcare professionals with the tools they need to deliver exceptional care. AI isn't just a buzzword for us—it's the backbone of our capabilities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Save Time</h3>
              <p className="text-gray-600">Automate repetitive tasks and focus more on patient care</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI-Powered</h3>
              <p className="text-gray-600">Intelligent insights for better clinical decisions</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Patient-Centered</h3>
              <p className="text-gray-600">Enhance patient engagement and satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Powerful Features for Your Healthcare Practice
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each feature in Saaro Health is designed to save you time, enhance patient care, and improve the overall practice experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className={`w-16 h-16 rounded-lg ${feature.color} flex items-center justify-center mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI in Action Section */}
      <div className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                AI-Driven Healthcare, Tailored to Your Needs
              </h2>
              <p className="text-xl mb-8 opacity-90">
                At Saaro Health, we harness the power of Artificial Intelligence to go beyond simple data management. Our AI systems improve clinical decision-making, reduce administrative work, and personalize patient care.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Automated Diagnostics</h4>
                    <p className="opacity-90">AI helps flag possible conditions based on real-time patient data, enabling early intervention.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Personalized Treatment Plans</h4>
                    <p className="opacity-90">Using patient data, AI suggests tailored treatment options for better outcomes.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Streamlined Workflows</h4>
                    <p className="opacity-90">Automation of routine tasks improves efficiency and reduces human error.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm opacity-75">AI Analysis Status</span>
                    <span className="text-green-300 text-sm">● Active</span>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white bg-opacity-20 rounded-lg p-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm">Prescription Analysis</span>
                        <span className="text-xs bg-green-500 px-2 py-1 rounded-full">Complete</span>
                      </div>
                      <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                        <div className="bg-green-400 h-2 rounded-full w-full"></div>
                      </div>
                    </div>
                    <div className="bg-white bg-opacity-20 rounded-lg p-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm">Risk Assessment</span>
                        <span className="text-xs bg-blue-500 px-2 py-1 rounded-full">Processing</span>
                      </div>
                      <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                        <div className="bg-blue-400 h-2 rounded-full w-3/4 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Success Stories */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Hear From Healthcare Professionals Using Saaro Health
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it—see how Saaro Health is making a difference in practices around the world.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-100">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Transformation Section */}
      <div className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Experience the Power of Smarter Healthcare Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Saaro Health isn't just about keeping records—it's about using technology to transform the way healthcare is delivered.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <ArrowRight className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Efficiency Boost</h3>
              <p className="text-gray-600">Automate repetitive tasks so your staff spends more time on patient care.</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Better Care Decisions</h3>
              <p className="text-gray-600">Make faster, more accurate decisions with AI-powered analytics and decision support.</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Happier Patients</h3>
              <p className="text-gray-600">Seamless communication and easy access to health records keep patients engaged.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Revolutionize Your Practice?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            If you're ready to experience the future of healthcare management, we're here to help. Saaro Health provides everything you need to run a smarter, more efficient practice.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-700 transition-colors">
              Get Started
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors">
              Book a Demo
            </button>
            <button className="border border-gray-400 text-gray-300 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors">
              Contact Us for More Info
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default SaaroHomepage;