import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Check, ArrowRight, Play, Shield, Zap, Users, Calendar, FileText, BarChart3, Heart, Brain, Database, Smartphone, Cloud, Lock, Activity, Video, Building2 } from 'lucide-react';
import FooterSection from './FooterSection';

const hospitalFeatures = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "AI-Enhanced Health Risk Prediction",
    description: "Leverage AI to predict potential health risks based on patient data. Identify issues early to provide proactive care and reduce hospital readmissions."
  },
  {
    icon: <Video className="w-6 h-6" />,
    title: "Integrated Telemedicine for Remote Care",
    description: "Extend your hospital's reach with secure telemedicine capabilities. Provide remote consultations for follow-ups, emergencies, and routine check-ins."
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Seamless Interoperability Across Systems",
    description: "Integrate seamlessly with existing hospital systems for lab results, radiology reports, and pharmacy data to improve efficiency and reduce errors."
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Automated Billing & Insurance Claims",
    description: "Automate billing processes and claims submission to insurance providers, ensuring quick reimbursements and minimizing administrative delays."
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Real-Time Appointment Scheduling",
    description: "Manage patient appointments effectively with real-time scheduling and automated reminders, reducing no-shows and ensuring smoother operations."
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile App for Hospital Staff",
    description: "Equip healthcare staff with mobile access to patient data, lab results, and schedules on the go for enhanced coordination and quick decision-making."
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: "Cloud-Based Data Storage",
    description: "Store patient data securely in the cloud with advanced encryption, meeting compliance requirements while keeping sensitive information safe."
  }
];

const benefits = [
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Proactive Care",
    description: "AI-powered health risk prediction helps you provide proactive care, improving patient outcomes and reducing readmissions."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Better Coordination",
    description: "Seamless integration across departments ensures smooth information exchange, reducing delays and errors throughout the hospital."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Streamlined Operations",
    description: "Automate billing, scheduling, and claims processes to reduce administrative burden and improve operational efficiency."
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Enhanced Flexibility",
    description: "Mobile app allows staff to stay connected and access crucial patient data anytime, anywhere for better care coordination."
  }
];

const faqs = [
  {
    question: "How does Saaro Health integrate with existing hospital systems?",
    answer: "Saaro Health is built with comprehensive interoperability in mind. Our platform seamlessly integrates with existing hospital systems including lab management, radiology, pharmacy, and other departmental systems through secure APIs and standard healthcare data formats like HL7 and FHIR."
  },
  {
    question: "Is patient data secure with Saaro Health's cloud storage?",
    answer: "Absolutely. We implement enterprise-grade security with advanced encryption, secure cloud infrastructure, and full compliance with healthcare regulations including HIPAA, HITECH, and other international standards. Your patient data is protected with military-grade security measures."
  },
  {
    question: "Can Saaro Health scale for large hospital systems?",
    answer: "Yes! Saaro Health is designed to scale from small community hospitals to large multi-facility health systems. Our robust infrastructure can handle thousands of concurrent users and millions of patient records while maintaining optimal performance."
  },
  {
    question: "How does the AI health risk prediction work?",
    answer: "Our AI analyzes patient data including medical history, lab results, vital signs, and other clinical indicators to identify patterns and predict potential health risks. This enables proactive interventions, reduces readmissions, and improves patient outcomes through early detection and prevention."
  },
  {
    question: "What kind of support do you provide during implementation?",
    answer: "We provide comprehensive implementation support including dedicated project management, staff training, data migration assistance, and 24/7 technical support. Our typical hospital implementation takes 4-8 weeks with minimal disruption to your operations."
  }
];

function HospitalPage() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="max-w-8xl mx-auto px-0 py-0">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-block bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-semibold">
              For Hospitals | Saaro Health
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Streamlining <span className="text-green-600">Hospital Management</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Hospitals are dynamic environments that require seamless coordination between departments, fast access to patient information, and streamlined operations. Saaro Health empowers hospitals with comprehensive EMR and EHR solutions designed to improve patient care and operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Schedule Demo
              </button>
              <button className="flex items-center justify-center gap-2 text-green-600 hover:text-green-700 px-8 py-4 rounded-full text-lg font-semibold border-2 border-green-600 hover:border-green-700 transition-all duration-300">
                <Play className="w-5 h-5" />
                Watch Overview
              </button>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-3xl">
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Hospital Dashboard</h3>
                    <p className="text-sm text-gray-500">Real-time hospital management</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm font-medium">Active Patients</span>
                    <span className="text-blue-600 font-bold">342</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                    <span className="text-sm font-medium">Emergency Cases</span>
                    <span className="text-purple-600 font-bold">12</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-sm font-medium">Available Beds</span>
                    <span className="text-green-600 font-bold">87</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                    <span className="text-sm font-medium">Scheduled Surgeries</span>
                    <span className="text-orange-600 font-bold">15</span>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-green-600" />
                  <span className="text-xs font-medium">AI Monitoring</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg animate-pulse">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-xs font-medium">Emergency Alert</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Key Features for Hospitals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience comprehensive hospital management with solutions designed specifically for complex healthcare environments.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hospitalFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                  <div className="text-green-600">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Key Benefits for Your Hospital
              </h2>
              <div className="space-y-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <div className="text-emerald-600">
                        {benefit.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex-1">
              <div className="relative">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Transform Your Hospital Today</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-300" />
                      <span>Reduce readmission rates by 35%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-300" />
                      <span>Improve staff efficiency by 50%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-300" />
                      <span>Enhance patient satisfaction scores</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-300" />
                      <span>Achieve 100% regulatory compliance</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-300" />
                      <span>24/7 AI-powered risk monitoring</span>
                    </div>
                  </div>
                  <button className="mt-8 bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
                    Start Implementation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about Saaro Health for hospitals.
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-300"
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  {activeAccordion === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {activeAccordion === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Transform Your Hospital's Efficiency and Patient Care
          </h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Enhance patient outcomes with Saaro Health's comprehensive EMR and EHR platform. 
            Contact us for more information or to schedule a demo and see how our solutions can revolutionize your hospital operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Schedule Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 flex items-center justify-center gap-2">
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterSection />
    </div>
  );
}

export default HospitalPage;