import React from 'react';
import {
  Bell,
  Calendar,
  Clock,
  FileText,
  BarChart2,
  Video,
  CalendarCheck,
  ClipboardList,
  Smartphone
} from 'lucide-react';
import { FaLaptopMedical, FaUserMd, FaBrain, FaFileMedical } from 'react-icons/fa';

const features = [
  {
    title: 'AI-Powered Prescription Automation',
    description:
      "Automating prescription writing ensures accuracy, reduces errors, and saves valuable time. Saaro Health's AI technology analyzes patient data to recommend the most appropriate medication and dosage, making prescription management easier than ever.",
    icon: <FileText className="w-8 h-8 text-white" />,
  },
  {
    title: 'Smart Patient Data Insights',
    description:
      "Unlock deeper insights into your patients' health with real-time data analysis. With our smart insights, you can track health trends, identify potential risks, and make well-informed decisions to improve patient care.",
    icon: <BarChart2 className="w-8 h-8 text-white" />,
  },
  {
    title: 'Integrated Telemedicine Capabilities',
    description:
      "Offer remote consultations with ease. Saaro Health's telemedicine feature enables you to connect with your patients securely through video calls, providing high-quality care no matter where they are.",
    icon: <Video className="w-8 h-8 text-white" />,
  },
  {
    title: 'Real-Time Appointment Scheduling & Reminders',
    description:
      "Say goodbye to scheduling headaches. Saaro Health's real-time appointment system allows patients to book appointments online, while automated reminders help reduce no-shows and keep your schedule running smoothly.",
    icon: <CalendarCheck className="w-8 h-8 text-white" />,
  },
  {
    title: 'Automated Clinical Notes & Documentation',
    description:
      "Reduce the time spent on paperwork. With Saaro Health, clinical notes and documentation are automatically generated during patient visits, allowing you to focus on patient care rather than administrative tasks.",
    icon: <ClipboardList className="w-8 h-8 text-white" />,
  },
  {
    title: 'Mobile App for Doctors',
    description:
      "Stay connected on the go. With our mobile app, you can access patient records, review lab results, schedule appointments, and even conduct virtual consultations from your phone or tablet.",
    icon: <Smartphone className="w-8 h-8 text-white" />,
  }
];

function FeatureCard({ icon, title }) {
  return (
    <div className="flex items-center gap-4">
      <div className="text-[#A67CFF] text-3xl">{icon}</div>
      <p className="font-medium text-gray-800">{title}</p>
    </div>
  );
}

export default function Neurologists() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center"
        style={{
          backgroundImage: `url('https://idreamcareer.com/wp-content/uploads/2023/04/how-to-become-a-neurologist.webp')`,
        }}
      >
        <div className="absolute inset-0 bg-teal-900 bg-opacity-80"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
          <div className="max-w-xl text-white">
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Revolutionize Neurology Practice, Elevate Patient Care, Drive Innovation
            </h1>
            <button className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 text-lg font-medium rounded-md shadow-md transition">
              Book a Free Demo Now
            </button>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side Text Content */}
        <div>
          <p className="text-[#A67CFF] uppercase tracking-widest font-semibold mb-2">
            Why Choose Us
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug mb-4">
            Leading neurology care designed for your peace of mind.
            </h2>
            <h3 className="text-2xl text-[#A67CFF] font-semibold mb-6">
            Expert Neurological Care by Dr. Aryan Mehta
            </h3>
            <p className="text-gray-600 mb-10">
            Experience specialized care for neurological conditions with precision diagnostics and personalized treatment. From chronic migraines to advanced neurodegenerative disorders, we ensure expert attention and compassionate support every step of the way.
            </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FeatureCard icon={<FaLaptopMedical />} title="Online Consultations" />
            <FeatureCard icon={<FaUserMd />} title="Verified Medical Experts" />
            <FeatureCard icon={<FaBrain />} title="Health Assessments" />
            <FeatureCard icon={<FaFileMedical />} title="Digital Medical Reports" />
          </div>
        </div>

        {/* Right Side Image */}
        <div className="w-full">
          <img
            src="data:image/jpeg;base64,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"
            alt="Neurology"
            className="rounded-xl shadow-lg object-cover w-full h-auto"
          />
        </div>
      </div>
    </section>

      {/* Treatment Cards */}
      <div className="bg-white min-h-screen py-12 px-6">
        <h2 className="text-4xl font-500 text-center mb-12 text-gray-800">Treatment</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
                <div
                key={index}
                className="relative rounded-xl shadow-lg p-6 flex flex-col justify-between min-h-[300px] transition duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer bg-white text-gray-800 hover:bg-[#A67CFF] hover:text-white group"
                >
                <div className="absolute top-0 left-0 p-3 rounded-br-xl bg-[#A67CFF]">
                    {/* Clone the icon with dynamic className */}
                    {React.cloneElement(feature.icon, {
                    className: "w-8 h-8 text-white transition duration-300 group-hover:text-white",
                    })}
                </div>
                <div className="mt-12">
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-sm leading-relaxed">{feature.description}</p>
                </div>
                <div className="mt-4 flex justify-between items-end">
                    <span className="text-sm underline cursor-pointer">Read More</span>
                    <span className="text-2xl font-light text-gray-300">0{index + 1}</span>
        </div>
    </div>
  ))}
</div>

      </div>

      {/* Appointment Section */}
      <section className="p-6 bg-gradient-to-br from-blue-50 to-white mt-20 max-w-7xl mx-auto rounded-2xl shadow-lg">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">
              Streamline Patient Appointments with ease
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <Calendar className="text-blue-600 w-5 h-5" />
                Efficient Appointment Management
              </li>
              <li className="flex items-center gap-3">
                <Bell className="text-blue-600 w-5 h-5" />
                Real-time Updates & Reminders
              </li>
              <li className="flex items-center gap-3">
                <Clock className="text-blue-600 w-5 h-5" />
                Customizable Slots & Availability
              </li>
            </ul>
            <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 text-lg rounded-xl">
              Get Your Neurology EMR Demo
            </button>
          </div>

          <div className="space-y-4">
            <img
              src="https://cdn.prod.website-files.com/64d0bd8b475d468c8b1aa632/6764556fa139367ff1e09304_1-apointment-neuro.webp"
              alt="neuro"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
