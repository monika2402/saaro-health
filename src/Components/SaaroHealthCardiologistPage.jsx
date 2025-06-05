import React, { useState, useEffect } from 'react';
import { 
  Heart, 
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
  Monitor,
  Star,
  BarChart3,
  AlertTriangle,
  Tablet
} from 'lucide-react';

const SaaroHealthCardiologistPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Advanced Cardiac Monitoring & Analytics",
      description: "Real-time ECG analysis, arrhythmia detection, and comprehensive cardiac event tracking with AI-powered pattern recognition. Monitor patient vitals remotely with automated alerts for critical changes.",
      color: "bg-red-50"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Cardiovascular Risk Assessment",
      description: "Integrated risk calculators for ASCVD, Framingham, and SCORE assessments. Track lipid panels, blood pressure trends, and lifestyle factors with predictive analytics for preventive care planning.",
      color: "bg-blue-50"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Remote Patient Monitoring",
      description: "Seamless integration with cardiac devices, blood pressure monitors, and wearable technology. Continuous monitoring with customizable alert thresholds and automated patient communication.",
      color: "bg-green-50"
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Cardiac Telemedicine Platform",
      description: "Specialized virtual consultations with cardiac-specific assessment tools. Share ECGs, imaging results, and treatment plans in real-time with secure, HIPAA-compliant video conferencing.",
      color: "bg-amber-50"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Cardiology Documentation Suite",
      description: "Specialized templates for cardiac catheterization, echocardiograms, stress tests, and follow-up visits. Automated CPT coding for cardiology procedures with integrated billing optimization.",
      color: "bg-teal-50"
    },
    {
      icon: <Tablet className="w-8 h-8" />,
      title: "Medication Management System",
      description: "Advanced cardiac medication tracking with drug interaction checking, dosage optimization based on kidney function, and automated refill reminders. Integration with cardiac rehab protocols.",
      color: "bg-indigo-50"
    }
  ];

  const benefits = [
    { icon: <Heart className="w-6 h-6" />, title: "Enhanced Cardiac Care", description: "Specialized tools designed specifically for cardiovascular disease management and prevention." },
    { icon: <Clock className="w-6 h-6" />, title: "Faster Diagnosis", description: "AI-powered analytics help identify cardiac conditions earlier with improved diagnostic accuracy." },
    { icon: <Users className="w-6 h-6" />, title: "Better Patient Outcomes", description: "Remote monitoring and predictive analytics lead to proactive interventions and reduced readmissions." },
    { icon: <Shield className="w-6 h-6" />, title: "Clinical Decision Support", description: "Evidence-based recommendations and alerts help optimize treatment protocols and medication management." }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="max-w-[1200px] m-[0_auto] p-[20px_0px]">
        <div className="flex justify-between items-center gap-12 mt-7">
          <div className="flex flex-col gap-5 w-2/5">
            <div className="inline-flex items-center space-x-2 bg-[#17234299] bg-opacity-10 px-4 py-2 rounded-full border border-gray-200">
              <Sparkles className="w-5 h-5 text-[#DC2626]" />
              <span className="text-[#DC2626] font-semibold text-sm tracking-wide">For Cardiologists | Saaro Health</span>
            </div>
            
            <h1 className="text-[4.5rem] font-[500] leading-[70px] font-title text-slate-900">
              Transforming{' '}
              <span className="text-[#DC2626]">
                Heart Care
              </span>{' '}
              with Innovation
            </h1>
            
            <p className="text-xl font-primary text-[#17234299] leading-relaxed">
              Advanced cardiovascular care platform with AI-powered analytics, remote monitoring, 
              and specialized tools designed for modern cardiology practice.
            </p>
            
            <div className="flex justify-start items-center gap-2">
              <button className="rounded-[30px] text-white bg-[#DC2626] px-5 py-3 hover:bg-[#b91c1c] transition-colors">
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
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <Heart className="w-6 h-6 text-[#DC2626]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Dr. Michael Chen</h3>
                      <p className="text-sm text-[#17234299]">Interventional Cardiologist • Heart Specialist</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-[#17234299]">Patient Readmissions</p>
                    <p className="font-bold text-[#DC2626]">↓ 40% Reduced</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                    <p className="text-sm text-green-700 font-medium">Early Detection Rate</p>
                    <p className="text-xl font-bold text-green-800">94.8%</p>
                    <p className="text-xs text-green-600">Accuracy</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <p className="text-sm text-blue-700 font-medium">Patient Satisfaction</p>
                    <p className="text-xl font-bold text-blue-800">4.9★</p>
                    <p className="text-xs text-blue-600">Average Rating</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 text-sm text-[#17234299]">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>HIPAA Compliant • FDA Approved • Real-time Monitoring</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Logos Section */}
        <div className="my-6">
          <p className="my-14 text-center text-[#17234299] font-[600] tracking-wide text-xl">
            Trusted by Leading Cardiac Institutions
          </p>
          <div className="flex justify-around items-center opacity-45">
            <div className="text-slate-400 font-semibold">Mayo Clinic</div>
            <div className="text-slate-400 font-semibold">Cleveland Clinic</div>
            <div className="text-slate-400 font-semibold">Johns Hopkins</div>
            <div className="text-slate-400 font-semibold">Mount Sinai</div>
            <div className="text-slate-400 font-semibold">Cardiology Associates</div>
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="my-10 py-10">
          <h2 className="text-center font-[500] text-5xl my-3 text-slate-900">Why Choose Saaro for Cardiology?</h2>
          <p className="text-center text-lg w-3/6 mx-auto text-[#17234299]">
            Experience advanced cardiovascular care automation with solutions tailored specifically for heart health and cardiac conditions.
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
                    <div className="text-[#DC2626]">{feature.icon}</div>
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
          <div className="relative w-full lg:w-1/2 bg-red-50 p-7 rounded-xl">
            <div className="relative">
              <img
                src="https://framerusercontent.com/images/wbGhlMeVtEAFiH6rRlJf3VRlpGE.png"
                alt="Cardiology Dashboard"
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
              Unlock Advanced Cardiovascular Care
            </h3>
            <p className="text-[#17234299] text-xl leading-relaxed">
              Leverage Saaro's specialized technology to monitor cardiac health, optimize treatment protocols, and enhance patient outcomes across your cardiology practice.
            </p>

            <ul className="space-y-4">
              {[
                "Automate cardiac monitoring and risk assessment",
                "Streamline ECG analysis and diagnostic workflows",
                "Enhance remote patient monitoring capabilities"
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
              Transform Your Cardiology Practice
            </h2>
            <p className="text-center text-lg w-3/6 mx-auto text-[#17234299]">
              Join leading cardiologists who trust Saaro for enhanced cardiovascular care and improved patient outcomes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-[#DC2626] mb-6">
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
            <div className="bg-gradient-to-r from-[#DC2626] to-red-600 rounded-[40px] p-12 text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="inline-flex items-center space-x-2 bg-white bg-opacity-20 px-4 py-2 rounded-full mb-6">
                  <Heart className="w-5 h-5" />
                  <span className="font-semibold">Ready to Transform Care?</span>
                </div>
                
                <h2 className="text-[4rem] font-[500] leading-[60px] mb-6">
                  The Future of Cardiology
                </h2>
                
                <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                  Join cardiologists nationwide who are providing superior cardiovascular care 
                  with Saaro Health's advanced cardiac platform.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-[#DC2626] rounded-[30px] px-8 py-4 font-semibold text-lg hover:bg-gray-50 transition-colors">
                    Schedule Demo Now
                  </button>
                  <button className="border-2 border-white text-white rounded-[30px] px-8 py-4 font-semibold text-lg hover:bg-white hover:text-[#DC2626] transition-all duration-300">
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
                <Shield className="w-6 h-6 text-[#DC2626]" />
                <span className="font-semibold text-gray-700">HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="font-semibold text-gray-700">AHA/ACC Guidelines Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-6 h-6 text-[#DC2626]" />
                <span className="font-semibold text-gray-700">Trusted by 3,500+ Cardiologists</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-6 h-6 text-yellow-500" />
                <span className="font-semibold text-gray-700">4.9★ Clinical Satisfaction</span>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default SaaroHealthCardiologistPage;