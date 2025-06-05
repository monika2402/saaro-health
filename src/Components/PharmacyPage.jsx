import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Check, ArrowRight, Play, Shield, Zap, Users, Calendar, FileText, BarChart3, Pill, Brain, Database, Smartphone, Cloud, Lock, Activity, Truck, AlertTriangle, Package } from 'lucide-react';
import FooterSection from './FooterSection';

const pharmacyFeatures = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "AI-Powered Drug Interaction Alerts",
    description: "Advanced AI system that automatically detects potential drug interactions, allergies, and contraindications to ensure patient safety and reduce medication errors."
  },
  {
    icon: <Package className="w-6 h-6" />,
    title: "Smart Inventory Management",
    description: "Automated inventory tracking with real-time stock levels, expiration date monitoring, and intelligent reorder alerts to prevent stockouts and reduce waste."
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Seamless EHR Integration",
    description: "Direct integration with hospital and clinic EHR systems for instant access to patient medication history, prescriptions, and clinical data."
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Automated Insurance Processing",
    description: "Streamline insurance claims and prior authorization processes with automated verification and real-time eligibility checking to reduce wait times."
  },
  {
    icon: <Pill className="w-6 h-6" />,
    title: "E-Prescription Management",
    description: "Secure electronic prescription receiving and processing system with automatic workflow management and prescription validation."
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Patient Mobile App Integration",
    description: "Connect patients with your pharmacy through mobile app features including prescription refills, pickup notifications, and medication reminders."
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Advanced Analytics & Reporting",
    description: "Comprehensive analytics dashboard providing insights on sales, inventory turnover, patient adherence, and operational efficiency metrics."
  }
];

const benefits = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Enhanced Patient Safety",
    description: "AI-powered drug interaction alerts and automated safety checks ensure every prescription is verified for patient safety and medication appropriateness."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Operational Efficiency",
    description: "Streamline prescription processing, inventory management, and insurance claims to reduce wait times and improve pharmacy workflow."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Improved Patient Experience",
    description: "Mobile app integration and automated notifications keep patients engaged and informed throughout their medication journey."
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Data-Driven Insights",
    description: "Advanced analytics help optimize inventory, identify trends, and make informed business decisions to increase profitability."
  }
];

const faqs = [
  {
    question: "How does Saaro Health integrate with existing pharmacy management systems?",
    answer: "Saaro Health seamlessly integrates with most existing pharmacy management systems through secure APIs and standard healthcare data formats. Our platform can connect with your current POS systems, insurance networks, and EHR systems without disrupting your workflow."
  },
  {
    question: "What safety measures are in place for drug interaction alerts?",
    answer: "Our AI-powered system uses comprehensive drug databases and patient medical history to detect potential interactions, allergies, and contraindications. The system provides real-time alerts with severity levels and clinical recommendations, helping pharmacists make informed decisions quickly."
  },
  {
    question: "How does the inventory management system prevent stockouts?",
    answer: "Our smart inventory system tracks real-time stock levels, monitors usage patterns, and automatically generates reorder alerts based on customizable thresholds. It also tracks expiration dates and suggests optimal ordering quantities to minimize waste while ensuring availability."
  },
  {
    question: "Is the platform suitable for independent pharmacies?",
    answer: "Absolutely! Saaro Health is designed to scale from small independent pharmacies to large chain operations. Our flexible pricing and modular features ensure that pharmacies of all sizes can benefit from our comprehensive platform."
  },
  {
    question: "How secure is patient prescription data?",
    answer: "We implement enterprise-grade security with end-to-end encryption, secure cloud storage, and full compliance with HIPAA, FDA regulations, and other pharmacy-specific requirements. Your patient data and prescription information are protected with the highest security standards."
  }
];

function PharmacyPage() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white py-0">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-0 py-0">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-block bg-purple-50 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold">
              For Pharmacies | Saaro Health
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Modernizing <span className="text-purple-600">Pharmacy Operations</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Transform your pharmacy with intelligent prescription management, automated inventory control, and seamless patient engagement. Saaro Health empowers pharmacies with cutting-edge technology to enhance patient safety, streamline operations, and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Request Demo
              </button>
              <button className="flex items-center justify-center gap-2 text-purple-600 hover:text-purple-700 px-8 py-4 rounded-full text-lg font-semibold border-2 border-purple-600 hover:border-purple-700 transition-all duration-300">
                <Play className="w-5 h-5" />
                See Features
              </button>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative bg-gradient-to-br from-purple-50 to-indigo-100 p-8 rounded-3xl">
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Pill className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Pharmacy Dashboard</h3>
                    <p className="text-sm text-gray-500">Real-time pharmacy management</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-sm font-medium">Prescriptions Today</span>
                    <span className="text-green-600 font-bold">127</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm font-medium">Ready for Pickup</span>
                    <span className="text-blue-600 font-bold">23</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                    <span className="text-sm font-medium">Low Stock Items</span>
                    <span className="text-orange-600 font-bold">8</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                    <span className="text-sm font-medium">Pending Insurance</span>
                    <span className="text-purple-600 font-bold">5</span>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span className="text-xs font-medium">Safety Check</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg animate-pulse">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-600" />
                  <span className="text-xs font-medium">Reorder Alert</span>
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
              Advanced Features for Modern Pharmacies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive pharmacy management solutions designed to enhance patient safety, streamline operations, and improve business outcomes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pharmacyFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                  <div className="text-purple-600">
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
                Key Benefits for Your Pharmacy
              </h2>
              <div className="space-y-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <div className="text-indigo-600">
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
                <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Transform Your Pharmacy Today</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-purple-300" />
                      <span>Reduce medication errors by 95%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-purple-300" />
                      <span>Improve prescription processing speed by 60%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-purple-300" />
                      <span>Increase inventory turnover efficiency</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-purple-300" />
                      <span>Enhance patient satisfaction scores</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-purple-300" />
                      <span>Ensure full regulatory compliance</span>
                    </div>
                  </div>
                  <button className="mt-8 bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
                    Start Free Trial
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
              Get answers to common questions about Saaro Health for pharmacies.
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
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Revolutionize Your Pharmacy Operations
          </h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Join thousands of pharmacies already using Saaro Health to enhance patient safety, streamline operations, and grow their business. 
            Request a demo to see how our solutions can transform your pharmacy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Request Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center gap-2">
              Learn More
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

export default PharmacyPage;