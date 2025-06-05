import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Baby, 
  Users, 
  Video, 
  Calendar, 
  FileText, 
  Smartphone, 
  Clock, 
  Shield, 
  TrendingUp, 
  Thermometer,
  Zap,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Stethoscope,
  Activity,
  Star
} from 'lucide-react';

const SaaroHealthPediatricianPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Baby className="w-8 h-8" />,
      title: "Age-Appropriate Growth & Development Tracking",
      description: "Monitor growth charts, developmental milestones, and vaccination schedules with automated alerts for delays or concerns. Track height, weight, BMI percentiles, and developmental markers from birth through adolescence.",
      color: "bg-pink-50"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Smart Immunization Management",
      description: "Automated vaccination scheduling with CDC guideline compliance, reminder systems for parents, and comprehensive immunization records. Never miss a vaccination window with intelligent scheduling.",
      color: "bg-blue-50"
    },
    {
      icon: <Thermometer className="w-8 h-8" />,
      title: "Pediatric Symptom Assessment",
      description: "AI-powered analysis of common pediatric conditions including fever patterns, respiratory symptoms, rashes, and behavioral concerns with age-specific diagnostic support and treatment recommendations.",
      color: "bg-green-50"
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Family-Friendly Telemedicine",
      description: "Child-friendly virtual consultations with interactive tools for engaging young patients. Includes parent education resources and visual aids to help explain conditions and treatments to families.",
      color: "bg-amber-50"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Pediatric Documentation Templates",
      description: "Specialized templates for well-child visits, sports physicals, ADHD assessments, developmental screenings, and school forms. Streamlined documentation for common pediatric encounters.",
      color: "bg-teal-50"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Parent Portal & Communication Hub",
      description: "Secure portal for parents to access immunization records, growth charts, appointment scheduling, and direct messaging with the care team. Educational resources tailored to child's age and conditions.",
      color: "bg-indigo-50"
    }
  ];

  const benefits = [
    { icon: <Baby className="w-6 h-6" />, title: "Enhanced Pediatric Care", description: "Age-specific tools and assessments designed specifically for infants, children, and adolescents." },
    { icon: <Clock className="w-6 h-6" />, title: "Streamlined Well-Child Visits", description: "Automated milestone tracking and vaccination reminders make routine visits more efficient." },
    { icon: <Users className="w-6 h-6" />, title: "Improved Parent Engagement", description: "Digital tools help parents stay informed and involved in their child's healthcare journey." },
    { icon: <Shield className="w-6 h-6" />, title: "Child Safety & Privacy", description: "Enhanced security measures specifically designed for protecting pediatric patient information." }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="max-w-[1200px] m-[0_auto] p-[20px_0px]">
        <div className="flex justify-between items-center gap-12 mt-7">
          <div className="flex flex-col gap-5 w-2/5">
            <div className="inline-flex items-center space-x-2 bg-[#17234299] bg-opacity-10 px-4 py-2 rounded-full border border-gray-200">
              <Sparkles className="w-5 h-5 text-[#FF6B9D]" />
              <span className="text-[#FF6B9D] font-semibold text-sm tracking-wide">For Pediatricians | Saaro Health</span>
            </div>
            
            <h1 className="text-[4.5rem] font-[500] leading-[70px] font-title text-slate-900">
              Caring for Children with{' '}
              <span className="text-[#FF6B9D]">
                Smart Technology
              </span>
            </h1>
            
            <p className="text-xl font-primary text-[#17234299] leading-relaxed">
              Transform your pediatric practice with specialized tools for growth tracking, immunization management, 
              and family-centered care. Designed specifically for the unique needs of children and their families.
            </p>
            
            <div className="flex justify-start items-center gap-2">
              <button className="rounded-[30px] text-white bg-[#FF6B9D] px-5 py-3 hover:bg-[#e55a8a] transition-colors">
                Schedule a Demo
              </button>
              <button className="text-slate-700 hover:text-slate-900 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="relative w-2/5">
            <div className="relative bg-white rounded-[40px] shadow-lg p-8 border border-gray-100">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-[#FFE4ED] rounded-lg flex items-center justify-center">
                      <Baby className="w-6 h-6 text-[#FF6B9D]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Dr. Emily Martinez</h3>
                      <p className="text-sm text-[#17234299]">Pediatrician • Child Development Specialist</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-[#17234299]">Well-Child Visits</p>
                    <p className="font-bold text-[#FF6B9D]">↓ 30% Faster</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                    <p className="text-sm text-green-700 font-medium">Vaccination On-Time</p>
                    <p className="text-xl font-bold text-green-800">98.2%</p>
                    <p className="text-xs text-green-600">Compliance Rate</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <p className="text-sm text-blue-700 font-medium">Parent Satisfaction</p>
                    <p className="text-xl font-bold text-blue-800">4.9★</p>
                    <p className="text-xs text-blue-600">Average Rating</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 text-sm text-[#17234299]">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>HIPAA Compliant • Child-Safe • Parent-Friendly Portal</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Logos Section */}
        <div className="my-6">
          <p className="my-14 text-center text-[#17234299] font-[600] tracking-wide text-xl">
            Trusted by Leading Pediatric Institutions
          </p>
          <div className="flex justify-around items-center opacity-45">
            <div className="text-slate-400 font-semibold">Children's Hospital</div>
            <div className="text-slate-400 font-semibold">Boston Children's</div>
            <div className="text-slate-400 font-semibold">Nationwide Children's</div>
            <div className="text-slate-400 font-semibold">CHOP</div>
            <div className="text-slate-400 font-semibold">Seattle Children's</div>
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="my-10 py-10">
          <h2 className="text-center font-[500] text-5xl my-3 text-slate-900">Why Choose Saaro for Pediatrics?</h2>
          <p className="text-center text-lg w-3/6 mx-auto text-[#17234299]">
            Experience seamless pediatric practice automation with solutions tailored specifically for children and families.
          </p>
        </div>

        {/* Features Grid */}
        <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {features.slice(0, 3).map((feature, idx) => (
              <div
                key={idx}
                className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition border-gray-100"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-10 h-10 flex items-center justify-center ${feature.color} rounded-lg`}>
                    <div className="text-[#FF6B9D]">{feature.icon}</div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">
                    {feature.title}
                  </h4>
                </div>
                <p className="text-[1.2rem] text-[#17234299]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Showcase Section */}
        <section className="relative flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto px-4 py-16">
          <div className="relative w-full lg:w-1/2 bg-pink-50 p-7 rounded-xl">
            <div className="relative">
              <img
                src="https://framerusercontent.com/images/wbGhlMeVtEAFiH6rRlJf3VRlpGE.png"
                alt="Pediatric Dashboard"
                className="rounded-xl object-cover w-8/12 mx-auto z-20"
              />
              <img
                src="https://framerusercontent.com/images/IBEXtjH0fwakPa6HBdO6GK1x8.png"
                alt="background-shape"
                className="absolute top-0 h-full w-full opacity-10"
              />
              <img
                src="https://framerusercontent.com/images/gNxdKmcLbxag4xQV1mfsDE7dPA.png"
                alt="feature-card"
                className="absolute -top-[30%] -right-[10%] w-32"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Unlock the Power of Pediatric-Focused Care
            </h3>
            <p className="text-[#17234299] text-xl leading-relaxed">
              Leverage Saaro's specialized technology to monitor child development, optimize vaccination schedules, and enhance family engagement across your practice.
            </p>

            <ul className="space-y-4">
              {[
                "Automate growth tracking and milestone monitoring",
                "Streamline vaccination management and reminders",
                "Enhance parent communication and engagement tools"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  <p className="text-gray-800 text-xl font-[600]">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-center font-[500] text-5xl my-3 text-slate-900">
              Transform Your Pediatric Practice
            </h2>
            <p className="text-center text-lg w-3/6 mx-auto text-[#17234299]">
              Join leading pediatricians who trust Saaro for enhanced child healthcare and family satisfaction.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                  <div className="w-10 h-10 bg-[#FFE4ED] rounded-lg flex items-center justify-center text-[#FF6B9D] mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-[#17234299] leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-[#FF6B9D] to-purple-600 rounded-[40px] p-12 text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="inline-flex items-center space-x-2 bg-white bg-opacity-20 px-4 py-2 rounded-full mb-6">
                  <Heart className="w-5 h-5" />
                  <span className="font-semibold">Ready to Transform Care?</span>
                </div>
                
                <h2 className="text-[4rem] font-[500] leading-[60px] mb-6">
                  The Future of Pediatric Care
                </h2>
                
                <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                  Join pediatricians nationwide who are providing better care for children and families 
                  with Saaro Health's specialized pediatric platform.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-[#FF6B9D] rounded-[30px] px-8 py-4 font-semibold text-lg hover:bg-gray-50 transition-colors">
                    Schedule Demo Now
                  </button>
                  <button className="border-2 border-white text-white rounded-[30px] px-8 py-4 font-semibold text-lg hover:bg-white hover:text-[#FF6B9D] transition-all duration-300">
                    View Pricing
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-12 bg-slate-50 rounded-2xl">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              <div className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-[#FF6B9D]" />
                <span className="font-semibold text-gray-700">HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="font-semibold text-gray-700">CDC Guidelines Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Baby className="w-6 h-6 text-[#FF6B9D]" />
                <span className="font-semibold text-gray-700">Trusted by 5,000+ Pediatricians</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-6 h-6 text-yellow-500" />
                <span className="font-semibold text-gray-700">4.9★ Parent Satisfaction</span>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default SaaroHealthPediatricianPage;