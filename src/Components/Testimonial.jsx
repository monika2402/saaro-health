import React from 'react'
const testimonials = [
	{
		text: "Saaro Health revolutionized how we manage patient records. It’s a game-changer for our clinic!",
		name: "Dr. Neha Sharma",
		company: "Sunrise Clinics",
		image: "https://framerusercontent.com/images/JzGnDOoofshSnqU9QI3SREGa9Vs.png",
	},
	{
		text: "Saaro’s automation tools helped us scale operations with ease. Manufacturing has never been so efficient!",
		name: "Amit Patel",
		company: "XYZ Industries",
		image: "https://framerusercontent.com/images/NNZUCmEc36J7kATr3l6A788rnY.png",
	},
	{
		text: "From content scheduling to analytics, Saaro Social makes managing our campaigns effortless.",
		name: "Priya Verma",
		company: "Creative Agency",
		image: "https://framerusercontent.com/images/GVsqrMpN6bGhL3aJlvWuyPJtuSU.png",
	},
	{
		text: "Saaro's solutions adapt perfectly to our needs, saving us hours of manual work every day.",
		name: "Rohit Mehta",
		company: "LogiCorp",
		image: "https://framerusercontent.com/images/Grftpesh3EZDtoox3C2oZP9sQE.png",
	},
	{
		text: "Saaro's solutions adapt perfectly to our workflow, reducing complexity and improving efficiency.",
		name: "Leonel",
		company: "FLOCLIPS",
		image: "https://framerusercontent.com/images/OBJlz84HcB7DGfhBE0gXY3FzCb0.png",
	},
	{
		text: "Saaro's tools are incredibly efficient—what used to take hours now takes minutes.",
		name: "Martin",
		company: "CYBERLEAP",
		image: "https://framerusercontent.com/images/t2HyjSGvELgwe1p7cPKWLYn3Ps.png",
	}
];
function Testimonial() {
	return (
		<section className="py-12 bg-white">
			<h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Why Businesses Choose Saaro.</h2>
			<p className="text-gray-600 max-w-xl mx-auto mb-10 text-xl text-center">
				See how Saaro’s automation tools are transforming businesses across industries.
			</p>
			<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto bg-slate-400/30 gap-x-[2px] gap-y-[2px]">
				{testimonials.map((t, index) => (
					<li key={index} className="bg-white p-10 border-slate-300 duration-150 flex flex-col justify-between gap-y-3">
						<p className="text-gray-800 mb-4 text-xl leading-8 tracking-wide">“{t.text}”</p>
						<div className="flex items-center justify-start gap-4">
							<img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover" />
							<div className="text-left">
								<p className="font-semibold text-gray-900 text-xl">{t.name}</p>
								<p className="text-sm text-gray-500">{t.company}</p>
							</div>
						</div>
					</li>
				))}
			</ul>
		</section>
	)
}

export default Testimonial
