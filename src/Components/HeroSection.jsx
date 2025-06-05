import AccordianQuestion from './AccordianQuestion';
import React from 'react'
import { Link } from 'react-router-dom'
import FooterSection from './FooterSection';
import TransformationSection from './TransformationSection';
import Testimonial from './Testimonial';



const companyLogo = [
	"https://framerusercontent.com/images/PrE34uenPJZDQexxT2w8id9mN0.svg",
	"https://framerusercontent.com/images/m2iRqc0vjWCAjaKDXwpBZLHL6Q.svg",
	"https://framerusercontent.com/images/yC2iV2rmFwuP2ByxGcZkd2o4k6Y.svg",
	"https://framerusercontent.com/images/z5fRaFVV36hlMpbcgIeNIFBCs.svg",
	"https://framerusercontent.com/images/VjMEe07s9HEE81fRBplh6VeiilY.svg"
]
const services = [
	{
		logo: "https://framerusercontent.com/images/v5Bri6AV8ud5lW6wcX5GbkPKro8.svg",
		heading: "Streamlined Workflows",
		paragraph: "Automate repetitive tasks and free up time for high-impact work."
	},
	{
		logo: "https://framerusercontent.com/images/xa7Nt8c6dGrhyFWucV7vtmRNo.svg",
		heading: "Real-Time Analytics",
		paragraph: "Gain actionable insights and make data-driven decisions effortlessly."
	},
	{
		logo: "https://framerusercontent.com/images/wv6fhlFK89MtfpMqSIEXLQKVRBg.svg",
		heading: "Customizable Solutions",
		paragraph: "Tailored features designed to meet the needs of healthcare, manufacturing, and more."
	}
];
function HeroSection() {
	return (
		<main className='max-w-[1200px] m-[0_auto] p-[20px_0px]'>
			<div className='flex justify-between items-center gap-28 mt-7'>
				<div className='flex flex-col gap-5'>
					<h1 className='text-[4.5rem] font-[500] leading-[70px] font-title text-slate-900'>Automate, Simplify, and Grow with Saaro.</h1>
					<p className='text-xl font-primary text-light'>From healthcare to manufacturing, Saaro helps you save time, reduce complexity, and stay ahead with tailored automation solutions.</p>
					<div className='flex justify-start items-center gap-2'>
						<Link to="/" className='rounded-[30px] text-white bg-[#a67cff] px-5 py-3'>Explore Saaro Solutions</Link>
						<Link to="/" >Start Free Today</Link>
					</div>
				</div>
				<div className='relative'>
					<img src="https://framerusercontent.com/images/B35ETpFBDX3cACnu8Tw6BmfMuv0.png?scale-down-to=1024" alt="hero-section image statistics-1" className='shadow-lg rounded-[40px]' />
					<img src="https://framerusercontent.com/images/fkKRVp4hjy6zNZKNVLr3haYV34.png?scale-down-to=512" alt="hero-section image statistics-2" className='absolute right-0 -top-[30px] bg-transparent h-[130px] shadow-lg  rounded-[40px] movingImg' />
				</div>
			</div>
			<div className='my-6'>
				<p className='my-14 text-center text-[#17234299] font-[600] tracking-wide text-xl' >Built on a Foundation of World-Class Partnerships.</p>
				<div className='flex justify-around'>
					{
						companyLogo.map((eachImageUrl, idx) => {
							return <img key={idx} src={eachImageUrl} alt={idx} className='opacity-45' />
						}
						)
					}
				</div>
			</div>
			<div className='my-10 py-10'>
				<h2 className='text-center font-[500] text-5xl my-3'>Why Choose Saaro?</h2>
				<p className='text-center text-lg w-3/6 mx-auto'>Experience seamless automation with solutions tailored to meet your industry's needs.</p>
			</div>
			<div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
				<div className="grid gap-8 md:grid-cols-3">
					{services.map((service, idx) => (
						<div
							key={idx}
							className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition"
						>
							<div className="flex items-start gap-4 mb-4">
								<div className="w-10 h-10 flex items-center justify-center bg-[#daff47] rounded-lg">
									<img src={service.logo} alt={`feature-${idx}`} className="w-6 h-6" />
								</div>
								<h4 className="text-lg font-bold text-gray-900">
									{service.heading}
								</h4>
							</div>
							<p className="text-[1.2rem] text-gray-600">{service.paragraph}</p>
						</div>
					))}
				</div>
			</div>
			<section className="relative flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto px-4 py-16">
				{/* Left Image Stack */}
				<div className='relative w-full lg:w-1/2 bg-[#3a91e844] p-7 rounded-xl'>
					<div className="relative">
						{/* Main Feature Image */}
						<img
							src="https://framerusercontent.com/images/wbGhlMeVtEAFiH6rRlJf3VRlpGE.png"
							alt="feature-image"
							className="rounded-xl object-cover w-8/12 mx-auto z-20"
						/>

						{/* Background Shape */}
						{/* <img
							src="https://framerusercontent.com/images/IBEXtjH0fwakPa6HBdO6GK1x8.png"
							alt="background-shape"
							className="absolute top-[10px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-55 pointer-events-none "
						/> */}
						<img
							src="https://framerusercontent.com/images/IBEXtjH0fwakPa6HBdO6GK1x8.png"
							alt="background-shape"
							className="absolute top-0 h-full w-full opacity-10"
						/>
						{/* Rotated Card */}
						<img
							src="https://framerusercontent.com/images/gNxdKmcLbxag4xQV1mfsDE7dPA.png"
							alt="feature-card"
							className="absolute -top-[30%] -right-[10%] w-32 spinner"
						/>
					</div>
				</div>

				{/* Right Content */}
				<div className="w-full lg:w-1/2 space-y-6">
					<h3 className="text-3xl font-bold text-gray-900">
						Unlock the Power of Automation
					</h3>
					<p className="text-gray-600 text-xl leading-relaxed">
						Leverage Saaro’s technology to monitor key metrics, optimize processes, and track growth across your organization.
					</p>

					{/* Feature List */}
					<ul className="space-y-4">
						{[
							"Automate everyday processes for greater efficiency",
							"Visualize performance trends in real time",
							"Stay ahead with tools designed for scalability"
						].map((item, idx) => (
							<li key={idx} className="flex items-start gap-3">
								<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-laptop-minimal-check-icon lucide-laptop-minimal-check text-green-500" ><path d="M2 20h20" /><path d="m9 10 2 2 4-4" /><rect x="3" y="4" width="18" height="12" rx="2" /></svg>
								<p className="text-gray-800 text-xl font-[600]">{item}</p>
							</li>
						))}
					</ul>
				</div>
			</section>

			<Testimonial />
			<AccordianQuestion />
			<TransformationSection />
			<FooterSection />
		</main>
	)
}

export default HeroSection
