import React from 'react'
import Navbar from './Navbar'
import Testimonial from './Testimonial'
import AccordianQuestion from './AccordianQuestion'
import TransformationSection from './TransformationSection'
import FooterSection from './FooterSection'
const pricing = [
	{
		title: "Starter Plan",
		explanaition: "For small companies",
		price: "49",
		priceExplanation: "per person, per month",
		features: [
			"Access to basic features",
			"Attend events",
			"Basic reporting + analytics",
			"Automatic updates",
			"Up to 10 individual users"
		],
		ispopular: false,
		bgColor: "#e9e1ff"
	},
	{
		title: "Standard Plan",
		explanaition: "For small companies",
		price: "149",
		priceExplanation: "per person, per month",
		features: [
			"Access to basic features",
			"Attend events",
			"Basic reporting + analytics",
			"Automatic updates",
			"Up to 10 individual users"
		],
		ispopular: true,
		bgColor: "#ffede8"
	},
	{
		title: "Premium Plan",
		explanaition: "For small companies",
		price: "199",
		priceExplanation: "per person, per month",
		features: [
			"Access to basic features",
			"Attend events",
			"Basic reporting + analytics",
			"Automatic updates",
			"Up to 10 individual users"
		],
		ispopular: false,
		bgColor: "#ecfaff"
	}
]
function Pricing() {
	return (<>
		<Navbar />
		<div>
			<h1 className='text-center text-6xl font-primary font-[600]'>Choose your Plan</h1>
			<p className='text-xl font-primary text-light mx-auto text-center w-8/12 mt-7'>Effortlessly Track, Manage, and Optimize Your Personal and Business Finances. Your Comprehensive Companion.</p>
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
