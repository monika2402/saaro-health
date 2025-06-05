import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Check, ArrowRight, Play, Shield, Zap, Users, Calendar, FileText, BarChart3, Stethoscope, Brain, Database, Smartphone, Cloud, Lock } from 'lucide-react';
import FooterSection from './FooterSection';

const clinicFeatures = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "AI-Driven Prescription Automation",
    description: "Reduce prescription errors and save time with our AI-powered prescription system that generates accurate, personalized prescriptions based on patient data."
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Customizable Patient Dashboards",
    description: "Tailor your patient dashboards to suit your clinic's needs. View patient history, lab results, and treatment plans all in one place."
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Seamless Interoperability",
    description: "Integrate seamlessly with external lab software, pharmacy systems, and imaging solutions for smooth data flow across departments."
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Automated Billing",
    description: "Streamline financial processes with automated billing that minimizes errors, speeds up reimbursements, and ensures timely payments."
  },
  {
    icon: <Stethoscope className="w-6 h-6" />,
    title: "Integrated Lab Results & Imaging",
    description: "Access lab results and imaging reports in real-time, eliminating delays in patient care with all diagnostic information in one platform."
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Patient Self-Management Tools",
    description: "Empower patients to manage their health by tracking medications, appointments, and health metrics through the Saaro Health mobile app."
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: "Cloud-Based Data Storage",
    description: "Securely store all patient data in the cloud with easy access while maintaining compliance with healthcare regulations."
  }
];

const benefits = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Efficient Operations",
    description: "Automate billing, claims, and patient scheduling to streamline clinic management and reduce administrative burden."
  },
  {
    icon: <Check className="w-8 h-8" />,
    title: "Better Care",
    description: "Make quicker, more accurate decisions with real-time access to patient data and lab results."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Enhanced Patient Engagement",
    description: "Self-management tools help patients take an active role in their health, leading to better outcomes."
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: "Data Security",
    description: "Protect sensitive patient information with our cloud-based system that ensures compliance and security."
  }
];

const faqs = [
  {
    question: "How does Saaro Health integrate with existing clinic systems?",
    answer: "Saaro Health is designed with seamless interoperability in mind. Our platform can integrate with most existing lab software, pharmacy systems, imaging solutions, and other healthcare management tools through secure APIs and standard healthcare data formats like HL7."
  },
  {
    question: "Is my patient data secure with Saaro Health?",
    answer: "Absolutely. We use enterprise-grade security measures including end-to-end encryption, secure cloud storage, and comply with all major healthcare regulations including HIPAA. Your patient data is protected with the highest security standards."
  },
  {
    question: "Can Saaro Health work for small clinics?",
    answer: "Yes! Saaro Health is designed to scale from small single-physician practices to large multi-specialty clinics. Our flexible pricing and customizable features ensure that clinics of all sizes can benefit from our platform."
  },
  {
    question: "How long does implementation take?",
    answer: "Implementation typically takes 2-4 weeks depending on your clinic size and customization needs. Our dedicated support team works with you throughout the process to ensure a smooth transition with minimal disruption to your operations."
  }
];

function ClinicPage() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
              For Clinics | Saaro Health
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Revolutionizing <span className="text-blue-600">Clinic Management</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Simplify clinic operations with our powerful EMR and EHR platform. From small practices to large multi-specialty clinics, Saaro Health brings efficiency, automation, and integration to ensure your clinic runs smoothly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Request Demo
              </button>
              <button className="flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 px-8 py-4 rounded-full text-lg font-semibold border-2 border-blue-600 hover:border-blue-700 transition-all duration-300">
                <Play className="w-5 h-5" />
                Watch Video
              </button>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-3xl">
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Stethoscope className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Patient Dashboard</h3>
                    <p className="text-sm text-gray-500">Real-time clinic management</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-sm font-medium">Today's Appointments</span>
                    <span className="text-green-600 font-bold">24</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm font-medium">Pending Lab Results</span>
                    <span className="text-blue-600 font-bold">7</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                    <span className="text-sm font-medium">Active Prescriptions</span>
                    <span className="text-purple-600 font-bold">156</span>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg animate-pulse">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-xs font-medium">System Online</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-medium">HIPAA Compliant</span>
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
              Key Features Tailored for Clinics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience comprehensive clinic management with solutions designed specifically for healthcare professionals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clinicFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <div className="text-blue-600">
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
                Key Benefits for Your Clinic
              </h2>
              <div className="space-y-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <div className="text-green-600">
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
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Transform Your Practice Today</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-300" />
                      <span>Reduce administrative time by 40%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-300" />
                      <span>Improve patient satisfaction scores</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-300" />
                      <span>Increase revenue with automated billing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-300" />
                      <span>Ensure 100% regulatory compliance</span>
                    </div>
                  </div>
                  <button className="mt-8 bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
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
              Get answers to common questions about Saaro Health for clinics.
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Simplify Your Clinic's Operations Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Enhance patient care with Saaro Health's comprehensive EMR and EHR platform. 
            Request a demo to see how our solutions can transform your practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Request Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2">
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

export default ClinicPage;