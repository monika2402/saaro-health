import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
const socialLinks = [
	{
		href: 'https://www.facebook.com/',
		imgSrc: 'https://framerusercontent.com/images/xVEp4ObaB2YWVOYWvT2UwGUdM0.svg',
		alt: 'Facebook',
	},
	{
		href: 'https://www.instagram.com/',
		imgSrc: 'https://framerusercontent.com/images/vMSxvaoXIXVb41cKEqbLQrniKI0.svg',
		alt: 'Instagram',
	},
	{
		href: 'https://x.com/',
		imgSrc: 'https://framerusercontent.com/images/N0xNysxnjwGTNfjtgRc9uBp8f4.svg',
		alt: 'X (Twitter)',
	},
	{
		href: 'https://www.linkedin.com/',
		imgSrc: 'https://framerusercontent.com/images/KXJBv3wVTKEN5ZRlyyg1nQLv2oA.svg',
		alt: 'LinkedIn',
	},
]
function FooterSection() {
	return (
		<footer className="text-light py-10 mt-10">
			<div className="max-w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
				<div>
					<a href="/" className="inline-block mb-4">
						<img
							src={logo}
							alt="Logo"
							width={157}
							height={33}
						/>
					</a>
					<p className="text-lg opacity-80">
						Built on a Foundation of World-Class Partnerships.
					</p>
				</div>

				<div>
					<h4 className="text-lg font-semibold mb-3 text-black">Menu</h4>
					<ul className="space-y-2 text-lg">
						<li><Link to="/">Home</Link></li>
						<li><Link to="/about">About Us</Link></li>
						<li><Link to="/contact">Contact Us</Link></li>
					</ul>
				</div>

				{/* Resources */}
				<div>
					<h4 className="text-lg font-semibold mb-3  text-black">Resources</h4>
					<ul className="space-y-2 text-lg">
						<li><Link to="/blog" >Blog</Link></li>
						<li><Link to="/faq" >FAQ</Link></li>
						<li><Link to="/support" >Support</Link></li>
					</ul>
				</div>

				{/* Contact */}
				<div>
					<h4 className="text-lg font-semibold mb-3 text-black">Contact</h4>
					<p className='text-lg'>Email: help@saaro.com</p>
					<p className='text-lg'>Phone: +91 1234567890</p>
					<p className='text-lg'>Address: 123 Tech Avenue, Jaipur, Rajasthan, India</p>
				</div>
			</div>

			<div className="mt-10 text-center text-lg opacity-60 flex justify-between items-center">
				<p>&copy; {new Date().getFullYear()} Saaro. All rights reserved.</p>
				<div className="flex gap-4 ">
					{socialLinks.map((link, index) => (
						<a
							key={index}
							href={link.href}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-block"
						>
							<img
								src={link.imgSrc}
								alt={link.alt}
								width={25}
								height={25}
								className="object-cover"
							/>
						</a>
					))}
				</div>
			</div>
		</footer>
	);
}

export default FooterSection
