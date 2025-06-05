import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { title } from 'process'
import TransformationSection from './TransformationSection';
import AccordianQuestion from './AccordianQuestion';
import FooterSection from './FooterSection';
const content = [
	{
		title: "Acceptance of Terms",
		message: `
By accessing and using Fundflex Finance, you agree to comply with and be bound by these Terms of Use. If you do not agree, please do not use our services. Fundflex Finance offers financial management software as a service (SaaS). We reserve the right to modify or discontinue services at any time. 

One of the most significant advantages of SaaS financial solutions is cost savings. Unlike traditional software that requires hefty upfront investments in licenses, hardware, and IT infrastructure, SaaS operates on a subscription model. This means you pay a predictable monthly or annual fee, which includes software updates, maintenance, and support. This model eliminates the need for large capital expenditures and reduces ongoing IT costs, making it an affordable option for small businesses with limited budgets.`,

	}, {
		title: "Services Provided",
		message: `
One of the most significant advantages of SaaS financial solutions is cost savings. Unlike traditional software that requires hefty upfront investments in licenses, hardware, and IT infrastructure, SaaS operates on a subscription model. This means you pay a predictable monthly or annual fee, which includes software updates, maintenance, and support. This model eliminates the need for large capital expenditures and reduces ongoing IT costs, making it an affordable option for small businesses with limited budgets.`,

	}, {
		title: "User Responsibilities",
		message: `
One of the most significant advantages of SaaS financial solutions is cost savings. Unlike traditional software that requires hefty upfront investments in licenses, hardware, and IT infrastructure, SaaS operates on a subscription model. This means you pay a predictable monthly or annual fee, which includes software updates, maintenance, and support. This model eliminates the need for large capital expenditures and reduces ongoing IT costs, making it an affordable option for small businesses with limited budgets.`,

	},
	{
		title: "Privacy",
		message: `
One of the most significant advantages of SaaS financial solutions is cost savings. Unlike traditional software that requires hefty upfront investments in licenses, hardware, and IT infrastructure, SaaS operates on a subscription model. This means you pay a predictable monthly or annual fee, which includes software updates, maintenance, and support. This model eliminates the need for large capital expenditures and reduces ongoing IT costs, making it an affordable option for small businesses with limited budgets.`,

	}, {
		title: "Intellectual Property",
		message: `
One of the most significant advantages of SaaS financial solutions is cost savings. Unlike traditional software that requires hefty upfront investments in licenses, hardware, and IT infrastructure, SaaS operates on a subscription model. This means you pay a predictable monthly or annual fee, which includes software updates, maintenance, and support. This model eliminates the need for large capital expenditures and reduces ongoing IT costs, making it an affordable option for small businesses with limited budgets.`,

	},
	{
		title: "Changes to Terms",
		message: `
One of the most significant advantages of SaaS financial solutions is cost savings. Unlike traditional software that requires hefty upfront investments in licenses, hardware, and IT infrastructure, SaaS operates on a subscription model. This means you pay a predictable monthly or annual fee, which includes software updates, maintenance, and support. This model eliminates the need for large capital expenditures and reduces ongoing IT costs, making it an affordable option for small businesses with limited budgets.`,

	}
]

function Terms() {
	useEffect(() => {
		const handleScroll = (e) => {
			e.preventDefault();
			const targetId = e.target.getAttribute('href').substring(1);
			const targetElement = document.getElementById(targetId);
			if (targetElement) {
				const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
				const offset = 20;
				const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
				window.scrollTo({
					top: elementPosition - navbarHeight - offset,
					behavior: 'smooth',
				});
			}
		};

		const links = document.querySelectorAll('a[href^="#"]');
		links.forEach((link) => {
			link.addEventListener('click', handleScroll);
		});

		return () => {
			links.forEach((link) => {
				link.removeEventListener('click', handleScroll);
			});
		};
	}, []);

	return (
		<div className="scroll-smooth">
			<Navbar />
			<div>
				<p className="text-center mb-4">Updated: January 10, 2024</p>
				<h1 className="text-center text-6xl font-primary font-[600]">Privacy Policy</h1>
				<p className="text-xl font-primary text-light mx-auto text-center w-8/12 mt-7">
					Effortlessly Track, Manage, and Optimize Your Personal and Business Finances. Your Comprehensive Companion.
				</p>
			</div>
			<div className="container mx-auto px-4 grid grid-cols-[3fr_1.2fr] gap-2 py-10">
				<div className="space-y-8 my-10">
					{content.map((eachTerm, idx) => {
						const { title, message } = eachTerm;
						return (
							<div key={title} id={title.replace(" ", "")} className="pt-20 -mt-20">
								<h2 className="text-3xl py-2 text-slate-900/95">
									{idx + 1}. {title}
								</h2>
								<p className="text-xl text-light leading-8 tracking-wide">{message}</p>
							</div>
						);
					})}
				</div>
				<div className='bg-[#ffede8] p-10 self-start sticky top-[80px] space-y-6 rounded-2xl'>
					<h3 className='text-3xl '>Page Contents</h3>
					<ul className="list-disc pl-5 space-y-5">
						{content.map((eachTerm) => {
							const { title } = eachTerm;
							return (
								<li key={title} className='text-xl hover:text-slate-900 text-light'>
									<a href={`#${title.replace(" ", "")}`} className="">
										{title}
									</a>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
			<TransformationSection />
			<AccordianQuestion />
			<FooterSection />
		</div>
	);
}
export default Terms
