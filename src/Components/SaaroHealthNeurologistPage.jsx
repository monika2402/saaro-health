import React, { useState, useEffect } from 'react';
import { 
  Brain, 
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
  Stethoscope,
  Star,
  Eye,
  Waves
} from 'lucide-react';

const SaaroHealthNeurologistPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Advanced Neurological Assessment Tools",
      description: "Comprehensive cognitive assessment batteries, movement disorder scales, and neurological examination templates with AI-powered analysis for seizure patterns, motor function, and cognitive decline tracking.",
      color: "bg-blue-50"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "EEG & Imaging Integration",
      description: "Seamless integration with EEG systems, MRI/CT imaging platforms, and neurophysiology equipment. Automated report generation and pattern recognition for epilepsy monitoring and diagnostic workflows.",
      color: "bg-purple-50"
    },
    {
      icon: <Waves className="w-8 h-8" />,
      title: "Seizure Monitoring & Analytics",
      description: "Real-time seizure tracking, medication titration support, and comprehensive epilepsy management tools with automated alerts for breakthrough seizures and medication compliance monitoring.",
      color: "bg-indigo-50"
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Telehealth for Neurological Care",
      description: "Specialized virtual consultation tools for neurological assessments including remote cognitive testing, movement analysis, and follow-up care for chronic neurological conditions.",
      color: "bg-cyan-50"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Neurology Documentation Suite",
      description: "Specialized templates for neurological consultations, EMG reports, sleep studies, headache diaries, and comprehensive neurological examination documentation with ICD-11 coding support.",
      color: "bg-slate-50"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Patient & Caregiver Portal",
      description: "Dedicated portal for patients and caregivers to track symptoms, medication schedules, seizure logs, and access educational resources about neurological conditions and treatment plans.",
      color: "bg-teal-50"
    }
  ];

  const benefits = [
    { icon: <Brain className="w-6 h-6" />, title: "Enhanced Neurological Care", description: "Specialized tools for comprehensive neurological assessment and monitoring across all neurological subspecialties." },
    { icon: <Clock className="w-6 h-6" />, title: "Streamlined Workflows", description: "Automated documentation and integrated imaging reduce administrative burden and improve efficiency." },
    { icon: <Activity className="w-6 h-6" />, title: "Advanced Analytics", description: "AI-powered pattern recognition helps identify trends in seizure activity, medication response, and disease progression." },
    { icon: <Shield className="w-6 h-6" />, title: "Secure Data Management", description: "HIPAA-compliant platform with specialized security for sensitive neurological data and imaging." }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="max-w-[1200px] m-[0_auto] p-[20px_0px]">
        <div className="flex justify-between items-center gap-12 mt-7">
          <div className="flex flex-col gap-5 w-2/5">
            <div className="inline-flex items-center space-x-2 bg-[#172342] bg-opacity-10 px-4 py-2 rounded-full border border-gray-200">
              <Sparkles className="w-5 h-5 text-[#4F46E5]" />
              <span className="text-[#4F46E5] font-semibold text-sm tracking-wide">For Neurologists | Saaro Health</span>
            </div>
            
            <h1 className="text-[4.5rem] font-[500] leading-[70px] font-title text-slate-900">
              Advancing Neurology with{' '}
              <span className="text-[#4F46E5]">
                Intelligent Technology
              </span>
            </h1>
            
            <p className="text-xl font-primary text-[#172342] opacity-70 leading-relaxed">
              Transform your neurology practice with advanced tools for seizure monitoring, cognitive assessment, 
              and comprehensive neurological care. Designed specifically for the complex needs of neurological patients.
            </p>
            
            <div className="flex justify-start items-center gap-2">
              <button className="rounded-[30px] text-white bg-[#4F46E5] px-5 py-3 hover:bg-[#3730A3] transition-colors">
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
                    <div className="w-10 h-10 bg-[#EEF2FF] rounded-lg flex items-center justify-center">
                      <Brain className="w-6 h-6 text-[#4F46E5]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Dr. Sarah Chen</h3>
                      <p className="text-sm text-[#172342] opacity-70">Neurologist • Epilepsy Specialist</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-[#172342] opacity-70">Patient Assessments</p>
                    <p className="font-bold text-[#4F46E5]">↓ 40% Faster</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                    <p className="text-sm text-green-700 font-medium">Seizure Control</p>
                    <p className="text-xl font-bold text-green-800">85.7%</p>
                    <p className="text-xs text-green-600">Patient Success Rate</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <p className="text-sm text-blue-700 font-medium">Care Satisfaction</p>
                    <p className="text-xl font-bold text-blue-800">4.8★</p>
                    <p className="text-xs text-blue-600">Average Rating</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 text-sm text-[#172342] opacity-70">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>HIPAA Compliant • EEG Integration • AI-Powered Analytics</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Logos Section */}
        <div className="my-6">
          <p className="my-14 text-center text-[#172342] opacity-70 font-[600] tracking-wide text-xl">
            Trusted by Leading Neurological Centers
          </p>
          <div className="flex justify-around items-center opacity-45">
            <div className="text-slate-400 font-semibold">Mayo Clinic</div>
            <div className="text-slate-400 font-semibold">Johns Hopkins</div>
            <div className="text-slate-400 font-semibold">Cleveland Clinic</div>
            <div className="text-slate-400 font-semibold">Mass General</div>
            <div className="text-slate-400 font-semibold">UCSF Neurology</div>
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="my-10 py-10">
          <h2 className="text-center font-[500] text-5xl my-3 text-slate-900">Why Choose Saaro for Neurology?</h2>
          <p className="text-center text-lg w-3/6 mx-auto text-[#172342] opacity-70">
            Experience seamless neurological practice automation with solutions tailored specifically for complex neurological conditions.
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
                    <div className="text-[#4F46E5]">{feature.icon}</div>
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
          <div className="relative w-full lg:w-1/2 bg-blue-50 p-7 rounded-xl">
            <div className="relative">
              <img
                src="https://framerusercontent.com/images/wbGhlMeVtEAFiH6rRlJf3VRlpGE.png"
                alt="Neurology Dashboard"
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
              Unlock the Power of Advanced Neurology Care
            </h3>
            <p className="text-[#172342] opacity-70 text-xl leading-relaxed">
              Leverage Saaro's specialized technology to monitor neurological conditions, optimize treatment protocols, and enhance patient outcomes across your practice.
            </p>

            <ul className="space-y-4">
              {[
                "Automate seizure tracking and medication monitoring",
                "Integrate EEG data and neuroimaging workflows",
                "Enhance patient communication and care coordination"
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
              Transform Your Neurology Practice
            </h2>
            <p className="text-center text-lg w-3/6 mx-auto text-[#172342] opacity-70">
              Join leading neurologists who trust Saaro for enhanced neurological care and improved patient outcomes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                  <div className="w-10 h-10 bg-[#EEF2FF] rounded-lg flex items-center justify-center text-[#4F46E5] mb-6">
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
            <div className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] rounded-[40px] p-12 text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="inline-flex items-center space-x-2 bg-white bg-opacity-20 px-4 py-2 rounded-full mb-6">
                  <Brain className="w-5 h-5" />
                  <span className="font-semibold">Ready to Transform Care?</span>
                </div>
                
                <h2 className="text-[4rem] font-[500] leading-[60px] mb-6">
                  The Future of Neurological Care
                </h2>
                
                <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                  Join neurologists nationwide who are providing better care for patients with complex neurological conditions 
                  using Saaro Health's specialized neurology platform.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-[#4F46E5] rounded-[30px] px-8 py-4 font-semibold text-lg hover:bg-gray-50 transition-colors">
                    Schedule Demo Now
                  </button>
                  <button className="border-2 border-white text-white rounded-[30px] px-8 py-4 font-semibold text-lg hover:bg-white hover:text-[#4F46E5] transition-all duration-300">
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
                <Shield className="w-6 h-6 text-[#4F46E5]" />
                <span className="font-semibold text-gray-700">HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="font-semibold text-gray-700">FDA Approved Integrations</span>
              </div>
              <div className="flex items-center space-x-2">
                <Brain className="w-6 h-6 text-[#4F46E5]" />
                <span className="font-semibold text-gray-700">Trusted by 3,000+ Neurologists</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-6 h-6 text-yellow-500" />
                <span className="font-semibold text-gray-700">4.8★ Care Satisfaction</span>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default SaaroHealthNeurologistPage;