import React from 'react'
import { Link } from "react-router-dom"
import { ArrowUpRight } from 'lucide-react';
function TransformationSection() {
	return (
		<>
			<div className="flex justify-between items-center gap-5 bg-[#ecfaff] p-10 mt-10 rounded-3xl">
				<div className="flex flex-col gap-5">
					<h2 className="text-4xl font-bold">Ready to Streamline Your Clinic?</h2>
					<p className="text-lg  ">Get started with Saaro and experience smarter patient care, seamless operations, and real growth.</p>
					<Link to="/" className='rounded-[30px] text-white bg-black px-5 py-3 self-start flex justify-start items-center'>Get Started now <ArrowUpRight /></Link>
				</div>
				<div className="relative">
					<img src="https://framerusercontent.com/images/ODbs1AeljoPnKKqfmC5NimejRU.png?scale-down-to=1024" alt="dollors-image" className="w-9/12 h-2/6 ml-auto" />
					<img src="https://framerusercontent.com/images/64RPf27rb3PiABjyHw82pQBvf4.png?scale-down-to=512" alt="animation-rounded-image" className="absolute h-40 w-40 top-[20px] left-[50px] spinner" />
				</div>
			</div>
		</>
	)
}

export default TransformationSection
