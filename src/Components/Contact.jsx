import React from 'react'
import AccordianQuestion from './AccordianQuestion'
import { Link } from "react-router-dom"
import FooterSection from './FooterSection'
function Contact() {
	return (
		<>
			<h1 className='text-center text-6xl font-primary font-[600]'>Let’s Connect!</h1>
			<p className='text-xl font-primary text-light mx-auto text-center w-8/12 mt-7'>We’re not just another tech company—we’re your partners in innovation, and we’d love to hear from you. Whether you’ve got a question, an idea, or simply want to chat about how technology can transform your world, we’re all ears!</p>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-32">
				<div className="flex flex-col items-center p-12  bg-[#f1ecff] rounded-[40px] shadow-md text-md">
					<div className="w-14 h-14 mb-4">
						<img
							src="https://framerusercontent.com/images/gBg0M0ZMKd9HxqBVk1CC8R2M8.svg"
							alt="Sales Icon"
							className="w-full h-full object-cover rounded-full"
						/>
					</div>
					<h4 className=" font-semibold text-[#172342] text-3xl">Saaro Solutions</h4>
					<p className="text-xl text-center  mt-2 mb-4 text-light">
						Empower Your Industry with Smart, API-Driven Technology that Simplifies Complex Workflows and Accelerates Growth.
					</p>
					<Link
						to="/contact"
						className="text-xl px-5 py-2 bg-[#172342] text-white rounded-full hover:bg-[#1e2e4a] transition-colors"
					>
						Talk to Sales
					</Link>
				</div>

				<div className="flex flex-col items-center p-12 text-center bg-[#ecfaff] rounded-[40px] shadow-md">
					<div className="w-14 h-14 mb-4">
						<img
							src="https://framerusercontent.com/images/WcqIyAEFRVgg7A6MUbnoWGCeXng.svg"
							alt="Support Icon"
							className="w-full h-full object-cover rounded-full"
						/>
					</div>
					<h4 className="text-3xl font-semibold text-[#172342]">Customer Care & Support</h4>
					<p className="text-xl text-center  mt-2 mb-4 text-light">
						Partner with Us for Reliable, Expert Support to Ensure Seamless Integration and Maximum Impact of SaaRo’s Technology in Your Operations.
					</p>
					<Link
						to="/demo"
						className="text-xl px-5 py-2 bg-[#172342] text-white rounded-full hover:bg-[#1e2e4a] transition-colors"
					>
						Submit a Request
					</Link>
				</div>
			</div>
			<div className="bg-white rounded-3xl shadow-lg p-16 grid grid-cols-1 sm:grid-cols-2 border">
				<div className='items-center'>
					<div className="flex items-start space-x-4">
						<div className="w-10 h-10">
							<img
								src="https://framerusercontent.com/images/d6R5GUEYHdSxJKKco8ocvHgdoc.svg"
								alt="Office Icon"
								className="w-full h-full object-cover rounded-full"
							/>
						</div>
						<div>
							<h4 className="text-3xl font-semibold text-[#172342]">
								Saaro Office Location
							</h4>
						</div>
					</div>

					<p className="text-xl text-[#5E6575] my-10">
						Saaro Headquarters:
						<br />
						123 Tech Avenue,
						<br />
						Jaipur, Rajasthan, India
					</p>

					<div className="space-y-2 text-xl">
						<p className="text-[#5E6575]">
							Phone:{' '}
							<a
								href="tel:+1234567890"
								className="underline"
								target="_blank"
								rel="noopener"
							>
								(123) 456-7890
							</a>
						</p>
						<p className=" text-[#5E6575]">
							Email:{' '}
							<a
								href="mailto:info@fundflexfinance.com"
								className="underline"
								target="_blank"
								rel="noopener"
							>
								help@saaro.com
							</a>
						</p>
					</div>
				</div>
				<div className="overflow-hidden rounded-2xl h-80 w-full">
					<iframe
						title="Google Maps"
						className="w-full h-full border-0"
						src="https://maps.google.com/maps?q=52.37588,4.891295&z=15&output=embed"
						allowFullScreen
						loading="lazy"
					></iframe>
				</div>
			</div>
			<AccordianQuestion />
			<FooterSection />
		</>
	)
}

export default Contact
