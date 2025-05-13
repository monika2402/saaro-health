import React from 'react'
const testimonials = [
	{
		text: "I love how easy it is to track my spending with this app! It's helped me stick to my budget.",
		name: "Sarah",
		company: "GlOBALNOMADS",
		image: "https://framerusercontent.com/images/JzGnDOoofshSnqU9QI3SREGa9Vs.png",
	},
	{
		text: "Transaction management has never been easier! This app has saved me so much!",
		name: "Emily",
		company: "CYBERLEAP",
		image: "https://framerusercontent.com/images/NNZUCmEc36J7kATr3l6A788rnY.png",
	},
	{
		text: "The advanced analytics feature is a game-changer! It's helped me identify areas!",
		name: "John",
		company: "GlOBALNOMADS",
		image: "https://framerusercontent.com/images/GVsqrMpN6bGhL3aJlvWuyPJtuSU.png",
	},
	{
		text: "I've tried other finance tracking apps, but none compare to this one. Intuitive and budget friendly.",
		name: "Alex",
		company: "FINSMART",
		image: "https://framerusercontent.com/images/Grftpesh3EZDtoox3C2oZP9sQE.png",
	},
	{
		text: "I can't imagine managing my finances without this app. It's become an essential part!",
		name: "Leonel",
		company: "FLOCLIPS",
		image: "https://framerusercontent.com/images/OBJlz84HcB7DGfhBE0gXY3FzCb0.png",
	},
	{
		text: "I couldn't be happier with the outcome. Prowess and creativity helped me a lot.",
		name: "Martin",
		company: "CYBERLEAP",
		image: "https://framerusercontent.com/images/t2HyjSGvELgwe1p7cPKWLYn3Ps.png",
	}
];
function Testimonial() {
	return (
		<section className="py-12 bg-white">
			<h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">See Why People Love Us</h2>
			<p className="text-gray-600 max-w-xl mx-auto mb-10 text-xl text-center">
				Effortlessly Track, Manage, and Optimize Your Personal and Business Finances. Your Comprehensive Companion.
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
