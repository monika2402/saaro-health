import React from 'react'
import Navbar from './Navbar'
import Testimonial from './Testimonial'
import AccordianQuestion from './AccordianQuestion'
import TransformationSection from './TransformationSection'
import FooterSection from './FooterSection'
const pricing = [
  {
    title: "Appointment Ease",
    explanaition: "For solo doctors or small clinics to simplify appointment scheduling",
    price: "₹10,000",
    priceExplanation: "/year",
    features: [
      "Book and manage appointments in real-time",
      "Send automatic patient reminders",
      "Reschedule or cancel with ease",
      "Calendar app integration",
      "Patient self-booking support",
      "Secure and private data handling"
    ],
    ispopular: false,
    bgColor: "#e9e1ff"
  },
  {
    title: "Practitioner Pro",
    explanaition: "A full management suite for doctors excluding billing and queue features",
    price: "₹25,000",
    priceExplanation: "/year",
    features: [
      "All Appointment Ease features",
      "AI-assisted prescription writing",
      "Patient health data insights",
      "Telemedicine consultation support",
      "Auto-organized notes & documents",
      "Mobile app for doctors and patients",
      "Cloud-based secure data storage"
    ],
    ispopular: true,
    bgColor: "#ffede8"
  },
  {
    title: "Clinic Pro",
    explanaition: "End-to-end solution for multi-doctor clinics with complete management tools",
    price: "₹35,000",
    priceExplanation: "/year",
    features: [
      "All features from Appointment Ease and Practitioner Pro",
      "Automated billing & invoicing",
      "Effortless patient queue management",
      "Custom dashboards for engagement",
      "Integrated lab results & imaging",
      "AI-driven health risk predictions",
      "Digital patient consent management",
      "Comprehensive analytics and reports",
      "Patient-facing mobile app"
    ],
    ispopular: false,
    bgColor: "#ecfaff"
  }
];


function Pricing() {
	return (<>
		<Navbar />
		<div>
			<h1 className='text-center text-6xl font-primary font-[600]'>Choose your Plan</h1>
			<p className='text-xl font-primary text-light mx-auto text-center w-8/12 mt-7'>Simplify Clinic Operations, Enhance Patient Care, and Grow Your Practice with Saaro — Your All-in-One Clinic Management Solution.</p>
			<ul className="grid grid-cols-3 gap-3 my-8">
				{
					pricing.map((eachItem, idx) => {
						const { bgColor, title, explanaition, ispopular, priceExplanation, price, features } = eachItem
						return (<li key={title} style={{ backgroundColor: bgColor }} className="p-4 rounded-3xl">
							<div className='pl-4 my-6'>
								<h3 className='font-primary text-3xl font-bold flex justify-start items-center gap-2'><span>
									{title}</span> {ispopular ? <span className='bg-purple-600 text-sm px-4 py-1 rounded-3xl text-white'>Popular</span> : <></>}</h3>
								<p>{explanaition}</p>
							</div>
							<div className='bg-white rounded-3xl p-7'>
								<h3 className='py-1 font-[800] text-4xl'>$ <span className=''>{price}</span> USD</h3>
								<p className='py-2 text-light '>{priceExplanation}</p>
								<hr className='my-4' />
								<ul className='space-y-7'>
									{
										features.map((value) => {
											return <li key={value} className='flex justify-start items-center gap-2 text-light hover:text-slate-900 text-md cursor-pointer'>
												<img src="https://framerusercontent.com/images/RlvhHE2lNBLE1Jru46ydP2mBqhk.svg" alt="tickMark" />
												<p>{value}</p>
											</li>
										})
									}
								</ul>
								<button className='p-3 text-white bg-slate-900 my-4 rounded-3xl w-full hover:bg-slate-600 duration-300'>Buy Plan</button>
							</div>
						</li>)
					}
					)
				}
			</ul>
		</div>
		<Testimonial />
		<AccordianQuestion />
		<TransformationSection />
		<FooterSection />
	</>
	)
}

export default Pricing
