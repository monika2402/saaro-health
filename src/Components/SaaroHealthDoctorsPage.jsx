import React, { useState, useEffect } from 'react';
import { 
  Stethoscope, 
  Activity, 
  Users, 
  Video, 
  Calendar, 
  FileText, 
  Smartphone, 
  Clock, 
  Shield, 
  TrendingUp, 
  Zap,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Star,
  Heart,
  UserCheck,
  Clipboard
} from 'lucide-react';

const SaaroHealthDoctorsPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Comprehensive Clinical Assessment Tools",
      description: "Advanced diagnostic support with AI-powered symptom analysis, clinical decision support, and comprehensive examination templates for accurate patient assessments across all medical specialties.",
      color: "bg-blue-50"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Integrated EHR & Patient Records",
      description: "Seamless electronic health record management with real-time data synchronization, medication tracking, lab integration, and comprehensive patient history visualization for informed clinical decisions.",
      color: "bg-green-50"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Smart Scheduling & Workflow",
      description: "Intelligent appointment scheduling with automated reminders, waitlist management, and optimized patient flow to maximize practice efficiency and reduce no-shows by up to 40%.",
      color: "bg-purple-50"
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Advanced Telemedicine Platform",
      description: "High-quality virtual consultations with integrated diagnostic tools, secure messaging, and remote monitoring capabilities for comprehensive patient care from anywhere.",
      color: "bg-cyan-50"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Automated Documentation Suite",
      description: "AI-powered clinical documentation with voice-to-text capabilities, automated coding suggestions, and customizable templates that reduce documentation time by 50%.",
      color: "bg-amber-50"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Patient Engagement Portal",
      description: "Comprehensive patient portal with appointment scheduling, lab results access, medication management, and secure communication tools that improve patient satisfaction and outcomes.",
      color: "bg-teal-50"
    }
  ];

  const benefits = [
    { icon: <Stethoscope className="w-6 h-6" />, title: "Enhanced Clinical Care", description: "Advanced tools and AI support for more accurate diagnoses and better patient outcomes across all medical conditions." },
    { icon: <Clock className="w-6 h-6" />, title: "Streamlined Operations", description: "Automated workflows and intelligent scheduling reduce administrative burden and increase practice efficiency." },
    { icon: <Activity className="w-6 h-6" />, title: "Data-Driven Insights", description: "Comprehensive analytics and reporting help identify trends and optimize practice performance and patient care." },
    { icon: <Shield className="w-6 h-6" />, title: "Enterprise Security", description: "HIPAA-compliant platform with advanced security measures to protect sensitive patient data and practice information." }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="max-w-[1200px] m-[0_auto] p-[0px_0px]">
        <div className="flex justify-between items-center gap-12 mt-7">
          <div className="flex flex-col gap-5 w-2/5">
            <div className="inline-flex items-center space-x-2 bg-[#172342] bg-opacity-10 px-4 py-2 rounded-full border border-gray-200">
              <Sparkles className="w-5 h-5 text-[#10B981]" />
              <span className="text-[#10B981] font-semibold text-sm tracking-wide">For Doctors | Saaro Health</span>
            </div>
            
            <h1 className="text-[4.5rem] font-[500] leading-[70px] font-title text-slate-900">
              Revolutionizing Healthcare with{' '}
              <span className="text-[#10B981]">
                Smart Technology
              </span>
            </h1>
            
            <p className="text-xl font-primary text-[#172342] opacity-70 leading-relaxed">
              Transform your medical practice with comprehensive tools for patient management, clinical documentation, 
              and advanced diagnostics. Designed to enhance care quality while streamlining your workflow.
            </p>
            
            <div className="flex justify-start items-center gap-2">
              <button className="rounded-[30px] text-white bg-[#10B981] px-5 py-3 hover:bg-[#059669] transition-colors">
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
                    <div className="w-10 h-10 bg-[#D1FAE5] rounded-lg flex items-center justify-center">
                      <Stethoscope className="w-6 h-6 text-[#10B981]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Dr. Michael Rodriguez</h3>
                      <p className="text-sm text-[#172342] opacity-70">Family Medicine • Internal Medicine</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-[#172342] opacity-70">Documentation Time</p>
                    <p className="font-bold text-[#10B981]">↓ 50% Reduced</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                    <p className="text-sm text-green-700 font-medium">Patient Satisfaction</p>
                    <p className="text-xl font-bold text-green-800">96.3%</p>
                    <p className="text-xs text-green-600">Average Score</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <p className="text-sm text-blue-700 font-medium">Practice Efficiency</p>
                    <p className="text-xl font-bold text-blue-800">4.9★</p>
                    <p className="text-xs text-blue-600">Quality Rating</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 text-sm text-[#172342] opacity-70">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>HIPAA Compliant • AI-Powered • Real-time Analytics</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Logos Section */}
        <div className="my-6">
          <p className="my-14 text-center text-[#172342] opacity-70 font-[600] tracking-wide text-xl">
            Trusted by Leading Healthcare Organizations
          </p>
          <div className="flex justify-around items-center opacity-45">
            <div className="text-slate-400 font-semibold">Kaiser Permanente</div>
            <div className="text-slate-400 font-semibold">Mayo Clinic</div>
            <div className="text-slate-400 font-semibold">Cleveland Clinic</div>
            <div className="text-slate-400 font-semibold">Johns Hopkins</div>
            <div className="text-slate-400 font-semibold">Mount Sinai</div>
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="my-10 py-10">
          <h2 className="text-center font-[500] text-5xl my-3 text-slate-900">Why Choose Saaro for Your Practice?</h2>
          <p className="text-center text-lg w-3/6 mx-auto text-[#172342] opacity-70">
            Experience seamless healthcare automation with solutions designed to enhance patient care and streamline practice operations.
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
                    <div className="text-[#10B981]">{feature.icon}</div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">
                    {feature.title}
                  </h4>
                </div>
                <p className="text-[1.2rem] text-[#172342] opacity-70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Showcase Section */}
        <section className="relative flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto px-4 py-16">
          <div className="relative w-full lg:w-1/2 bg-green-50 p-7 rounded-xl">
            <div className="relative">
              <img
                src="https://framerusercontent.com/images/wbGhlMeVtEAFiH6rRlJf3VRlpGE.png"
                alt="Medical Dashboard"
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
              Unlock the Power of Modern Healthcare Technology
            </h3>
            <p className="text-[#172342] opacity-70 text-xl leading-relaxed">
              Leverage Saaro's comprehensive technology platform to enhance patient outcomes, optimize clinical workflows, and transform your practice efficiency.
            </p>

            <ul className="space-y-4">
              {[
                "Automate clinical documentation and coding processes",
                "Integrate seamlessly with existing healthcare systems",
                "Enhance patient engagement and satisfaction scores"
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
              Transform Your Medical Practice
            </h2>
            <p className="text-center text-lg w-3/6 mx-auto text-[#172342] opacity-70">
              Join thousands of physicians who trust Saaro for enhanced patient care and improved practice efficiency.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                  <div className="w-10 h-10 bg-[#D1FAE5] rounded-lg flex items-center justify-center text-[#10B981] mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-[#172342] opacity-70 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-[#10B981] to-[#059669] rounded-[40px] p-12 text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="inline-flex items-center space-x-2 bg-white bg-opacity-20 px-4 py-2 rounded-full mb-6">
                  <Heart className="w-5 h-5" />
                  <span className="font-semibold">Ready to Transform Care?</span>
                </div>
                
                <h2 className="text-[4rem] font-[500] leading-[60px] mb-6">
                  The Future of Medical Practice
                </h2>
                
                <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                  Join physicians nationwide who are providing exceptional patient care and achieving better outcomes 
                  with Saaro Health's comprehensive healthcare platform.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-[#10B981] rounded-[30px] px-8 py-4 font-semibold text-lg hover:bg-gray-50 transition-colors">
                    Schedule Demo Now
                  </button>
                  <button className="border-2 border-white text-white rounded-[30px] px-8 py-4 font-semibold text-lg hover:bg-white hover:text-[#10B981] transition-all duration-300">
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
                <Shield className="w-6 h-6 text-[#10B981]" />
                <span className="font-semibold text-gray-700">HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="font-semibold text-gray-700">SOC 2 Type II Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Stethoscope className="w-6 h-6 text-[#10B981]" />
                <span className="font-semibold text-gray-700">Trusted by 15,000+ Physicians</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-6 h-6 text-yellow-500" />
                <span className="font-semibold text-gray-700">4.9★ User Satisfaction</span>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default SaaroHealthDoctorsPage;