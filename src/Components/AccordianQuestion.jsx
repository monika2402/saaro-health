import React, { useState } from 'react';

const faqs = [
  {
    title: "How secure is my clinic and patient data?",
    value: "Saaro uses advanced encryption and secure cloud infrastructure to ensure your clinic and patient data remains fully protected at all times."
  },
  {
    title: "Can I access Saaro from multiple devices?",
    value: "Yes, Saaro is cloud-based and accessible securely from any internet-connected device — desktop, tablet, or mobile."
  },
  {
    title: "Is support available if I need help?",
    value: "Absolutely! Our dedicated support team is available 24/7 via chat, email, and phone to assist you anytime."
  },
  {
    title: "Do you offer a free trial?",
    value: "Yes, you can try Saaro for 14 days free of charge and explore all features without commitment."
  }
];

const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className="border-b">
    <button
      className="w-full text-left py-4 px-2 font-medium text-lg flex justify-between items-center"
      onClick={onClick}
    >
      {title}
      <span className="text-xl">{isOpen ? '−' : '+'}</span>
    </button>
    {isOpen && (
      <div className="px-2 pb-4 text-gray-700">{content}</div>
    )}
  </div>
);

function AccordionQuestion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="my-10 px-4">
      <h2 className="text-center font-primary text-4xl font-semibold pt-5">Got Questions?</h2>
      <h2 className="text-center font-primary text-4xl font-semibold pb-5">We've Got Answers!</h2>
      <p className="text-center max-w-2xl mx-auto pb-8">
        Simplify Clinic Operations, Enhance Patient Care, and Grow Your Practice with Saaro — Your All-in-One Clinic Management Solution.
      </p>

      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            title={faq.title}
            content={faq.value}
            isOpen={openIndex === index}
            onClick={() => toggleAccordion(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default AccordionQuestion;
