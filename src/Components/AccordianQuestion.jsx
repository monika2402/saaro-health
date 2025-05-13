import React from 'react'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"
const faqs = [
	{
		title: "How secure is my financial data?",
		value: "Your financial data is protected using industry-standard encryption and secure storage protocols."
	},
	{
		title: "Can I access my financial data from multiple devices?",
		value: "Yes, your data is synced and accessible securely across all your logged-in devices."
	},
	{
		title: "Is customer support available if I need assistance?",
		value: "Absolutely, our support team is available 24/7 via chat, email, and phone."
	},
	{
		title: "Is there a free trial available?",
		value: "Yes, we offer a 14-day free trial with full access to all features."
	}
];
function AccordianQuestion() {
	return (
		<div className='my-10'>
			<h2 className="text-center font-primary text-4xl font-[600] pt-5">Got Questions? </h2>
			<h2 className="text-center font-primary text-4xl font-[600] pb-5">We've Got Answers!</h2>
			<p className="text-center w-6/12 mx-auto pb-8">Effortlessly Track, Manage, and Optimize Your Personal and Business Finances. Your Comprehensive Companion.</p>
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
