import React from 'react'
import Navbar from './Navbar'
import TransformationSection from './TransformationSection'
import FooterSection from './FooterSection'
const companyLogo = [
	"https://framerusercontent.com/images/PrE34uenPJZDQexxT2w8id9mN0.svg",
	"https://framerusercontent.com/images/m2iRqc0vjWCAjaKDXwpBZLHL6Q.svg",
	"https://framerusercontent.com/images/yC2iV2rmFwuP2ByxGcZkd2o4k6Y.svg",
	"https://framerusercontent.com/images/z5fRaFVV36hlMpbcgIeNIFBCs.svg",
	"https://framerusercontent.com/images/VjMEe07s9HEE81fRBplh6VeiilY.svg"
]
const statisitcs = [
	{
		value: "5000+",
		title: "Satisfied Global Clients",
		explation: 'Manage and Optimize Your Personal and Business Finances.'
	},
	{
		value: "97%",
		title: "Client Satisfaction Level",
		explation: 'Simplify and Automate Your Home Maintenance Tasks.'
	},
	{
		value: "200M+",
		title: "Revenue Generated",
		explation: 'Simplify and Automate Your Home Maintenance Tasks.'
	}
];
const persons = [
	{
		image: "https://framerusercontent.com/images/TfUfFlOkkRjdeDy26qEvqinwY3A.png",
		name: "Esther Howard",
		role: "Marketing Coordinator"
	},
	{
		image: "https://framerusercontent.com/images/saWc1fMvqIMAcKlqaNgwGyVNH00.png",
		name: "Robert Fox",
		role: "Web Designer"
	},
	{
		image: "https://framerusercontent.com/images/n0IMuxHwPgFaxMUY79XO1DJL8EM.png",
		name: "Annette Black",
		role: "President of Sales"
	},
	{
		image: "https://framerusercontent.com/images/Fa7gedHzgKo1WCfmJKkE3bVGRds.png",
		name: "Ronald Richards",
		role: "Web Designer"
	},
	{
		image: "https://framerusercontent.com/images/5cfrRCfh2twraIvh2c61anVMbso.png",
		name: "Savannah Nguyen",
		role: "President of Sales"
	},
	{
		image: "https://framerusercontent.com/images/Bhg0zBzg7lAHsbr6tFl9UplBMc.png",
		name: "Dianne Russell",
		role: "Web Designer"
	}
]
function About() {
	return (
		<>
			<Navbar />
			<div>
				<h1 className='text-center text-6xl font-primary font-[600]'>Our Story</h1>
				<p className='text-xl font-primary text-light mx-auto text-center w-8/12 mt-7'>Effortlessly Track, Manage, and Optimize Your Personal and Business Finances. Your Comprehensive Companion.</p>
				<div className="grid grid-cols-[2fr_4fr] gap-5 my-14">
					<div className='bg-[#ecfaff] space-y-5 p-10 rounded-2xl'>
						<img src="https://framerusercontent.com/images/gNxdKmcLbxag4xQV1mfsDE7dPA.png" alt="rotated-image" className='spinner h-32 w-32' />
						<h3 className='text-2xl'>Can I access my financial data from multiple devices?</h3>
						<p className='text-xl text-light'>Yes, you can access your financial data from any device with an internet connection.</p>
					</div>
					<div>
						<img src="https://framerusercontent.com/images/kV4HfgNz5T9pCq2ZyhbldFrwDSU.png?scale-down-to=1024" alt="company environment" />
					</div>
				</div>
			</div>
			<div className='my-6'>
				<p className='my-14 text-center text-[#17234299] font-[600] tracking-wide text-xl' >Trusted by thousands of companies worldwide</p>
				<div className='flex justify-around'>
					{
						companyLogo.map((eachImageUrl, idx) => {
							return <img key={idx} src={eachImageUrl} alt={idx} className='opacity-45' />
						}
						)
					}
				</div>
			</div>
			<ul className='grid grid-cols-3 py-24'>
				{
					statisitcs.map(eachItem => {
						const { title, value, explation } = eachItem
						return <li key={title} className='space-y-2'>
							<h3 className='text-6xl font-[600]'>{value}</h3>
							<h3 className='text-2xl'>{title}</h3>
							<p className='text-light'>{explation}</p>
						</li>
					}
					)
				}
			</ul>
			<div className='mb-10'>
				<h1 className='text-center text-5xl font-primary font-[500]'>Meet Our Team</h1>
				<p className='text-xl font-primary text-light mx-auto text-center w-8/12 mt-7'>Effortlessly Track, Manage, and Optimize Your Personal and Business Finances. Your Comprehensive Companion.</p>
			</div>
			<ul className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 bg-linear-[25deg,red_5%,yellow_60%,lime_90%,teal]'>
				{
					persons.map(value => {
						const { image, name, role } = value
						return <li key={name} className='space-y-3'>
							<div className='bg-[#fbfafa] px-10 pt-10 rounded-3xl'>
								<img src={image} alt={name} />
							</div>
							<p className='text-center font-bold text-xl'>{name}</p>
							<p className='text-center text-light'>{role}</p>
						</li>
					}
					)
				}
			</ul>
			<TransformationSection />
			<FooterSection />
		</>
	)
}

export default About
