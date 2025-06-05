import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import logo from '../assets/logo.png'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
const navItems = [
  { label: "Pricing", path: "/pricing" },
  { label: "About", path: "/about" },
  { label: "Doctors", path: "/for-doctors" },
  { label: "Clinic", path: "/for-clinic" },
  { label: "Hospital", path: "/for-hospital" },
  { label: "Pharmacy", path: "/for-pharmacy" },
];

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)

	// Handle scroll effect
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 10) {
				setScrolled(true)
			} else {
				setScrolled(false)
			}
		}

		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-2" : "bg-white/80 backdrop-blur-sm py-4"
				}`}
		>
			<div className="flex justify-between items-center max-w-[1200px] mx-auto px-4 md:px-6">
				{/* Logo */}
				<div className="flex-shrink-0">
					<Link to="/" className="flex items-center">
						<img
							src={logo}
							alt="fundFlex logo"
							className="h-8"
						/>
					</Link>
				</div>

				{/* Desktop Navigation */}
				<ul className="hidden md:flex items-center gap-8">
					<NavigationMenuDemo />
					{navItems.map((item, idx) => (
						<li key={idx}>
							<Link
								to={item.path}
								className="font-medium text-light  transition-colors relative group hover:text-black"
							>
								{item.label}
							</Link>
						</li>
					))}
				</ul>

				{/* Desktop CTA Buttons */}
				<div className="hidden md:flex items-center gap-4">
					<Link to="/login" className="font-medium hover:text-black transition-colors text-light">
						Log In
					</Link>
					<Link
						to="/get-template"
						className="rounded-full bg-black text-white px-5 py-2.5 font-medium hover:bg-gray-800 transition-colors shadow-sm"
					>
						Get This Template
					</Link>
				</div>

				<button
					className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
					onClick={() => setIsOpen(!isOpen)}
					aria-label={isOpen ? "Close menu" : "Open menu"}
				>
					{isOpen ? <X size={24} /> : <Menu size={24} />}
				</button>
			</div>

			<div
				className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
					}`}
			>
				<div className="px-4 py-3 space-y-3">
					<ul className="space-y-4 py-4 border-b">
						{navItems.map((item, idx) => (
							<li key={idx}>
								<Link
									to={item.path}
									className="block font-medium text-gray-700 hover:text-black transition-colors py-2"
									onClick={() => setIsOpen(false)}
								>
									{item.label}
								</Link>
							</li>
						))}
					</ul>
					<div className="flex flex-col gap-3 py-4">
						<Link
							to="/login"
							className="font-medium text-gray-700 hover:text-black transition-colors py-2"
							onClick={() => setIsOpen(false)}
						>
							Log In
						</Link>
						<Link
							to="/get-template"
							className="rounded-full bg-black text-white px-5 py-2.5 font-medium hover:bg-gray-800 transition-colors text-center"
							onClick={() => setIsOpen(false)}
						>
							Get This Template
						</Link>
					</div>
				</div>
			</div>

		</nav>
	)
}

export function NavigationMenuDemo() {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger className="text-light">All pages</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-1 p-2 min-w-[150px] grid-cols-1">
							<ListItem >
								<Link to="/" className="w-full h-full inline-block p-2">
									Home
								</Link>
							</ListItem>
							<ListItem >
								<Link to="/contact" className="w-full h-full inline-block p-2">
									Contact Us
								</Link>
							</ListItem>
							<ListItem >
								<Link to="/terms" className="w-full h-full inline-block p-2">
									Terms
								</Link>
							</ListItem>
							<ListItem >
								<Link to="/not-found" className="w-full h-full inline-block p-2">
									NotFound
								</Link>
							</ListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	)
}

const ListItem = (({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<div
					// ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-md  leading-none no-underline outline-none transition-colors hover:bg-black hover:text-white",
						className
					)}
					{...props}
				>
					<p className="line-clamp-2 text-sm leading-snug">
						{children}
					</p>
				</div>
			</NavigationMenuLink>
		</li>
	)
})
ListItem.displayName = "ListItem"