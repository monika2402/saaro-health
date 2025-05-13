import React from 'react'
import Navbar from "./Navbar"
import { Outlet } from 'react-router-dom'
function Layout() {
	return (
		<div className='min-h-screen font-primary font-[500] max-w-[1200px] m-[0_auto] p-[20px_0px] mt-36'>
			<Navbar />
			<Outlet />
		</div>
	)
}

export default Layout
