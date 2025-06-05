import React from 'react'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"
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
function AccordianQuestion() {
	return (
		<div className='my-10'>
			<h2 className="text-center font-primary text-4xl font-[600] pt-5">Got Questions? </h2>
			<h2 className="text-center font-primary text-4xl font-[600] pb-5">We've Got Answers!</h2>
			<p className="text-center w-6/12 mx-auto pb-8">Simplify Clinic Operations, Enhance Patient Care, and Grow Your Practice with Saaro — Your All-in-One Clinic Management Solution.</p>
			<Accordion type="single" collapsible className="w-full ">
				{
					faqs.map((value, idx) => {
						return (<AccordionItem value={`item-${idx + 1}`} key={`item-${idx + 1}`}>
							<AccordionTrigger className="no-underline">{value.title}</AccordionTrigger>
							<AccordionContent>
								{value.value}
							</AccordionContent>
						</AccordionItem>)
					}
					)
				}


			</Accordion>
		</div>
	)
}

export default AccordianQuestion
