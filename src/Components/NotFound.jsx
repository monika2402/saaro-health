import React from 'react'
import Navbar from './Navbar'
import { Link } from "react-router-dom"
import FooterSection from './FooterSection'
import TransformationSection from './TransformationSection'
function NotFound() {
	return (<>
		<Navbar />
		<div className='min-h-screen font-primary font-[500] max-w-[1200px] m-[0_auto] p-[20px_0px] mt-36'>
			<div className='text-center space-y-4'>
				<img src="https://framerusercontent.com/images/PLz7QzEUCok6sut5f6PFbBcu8.png" alt="404 image" className='mx-auto w-6/12' />
				<h1 className='text-center text-6xl font-primary font-[600]'>Oops! Page Not Found</h1>
				<p className='text-xl font-primary text-light w-8/12 mx-auto'>The page you're looking for doesn't exist. Let's get you back on track. Your Comprehensive Companion.</p>
				<Link className="text-xl px-5 py-3 bg-[#172342] text-white rounded-full hover:bg-[#1e2e4a] transition-colors inline-block"
					to="/"
				>
					Back to HomePage
				</Link>
			</div>
			<TransformationSection />
			<FooterSection />
		</div>

	</>
	)
}

export default NotFound
