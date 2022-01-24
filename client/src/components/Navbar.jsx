import { HiMenuAlt4 } from "react-icons/hi"
import { AiOutlineClose } from 'react-icons/ai'

import logo from '../../images/logo.png'

const NavbarItem = ({ title, classNameProps }) => {
	return (
		<li className={`mx-4 cursor-pointer ${classNameProps}`}>
			{title}
		</li>
	)
}

const Navbar = () => {
	return (
		<nav className="w-full flex md:justify-center justify-between items-center p-4">	<div className="md:flex-[0.5] flex-initial justify-center items-center ">
			<img src={logo} alt="logo" className="w-20  cursor-pointer" />
		</div>
			<ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
				{["Market", "Exchange", "Wallet"].map((item, index) => {
					return (<NavbarItem key={item + index} title={item} />)
				})}
				<li className="bg-[#2952e3] py-2 px-6 mx-4 cursor-pointer rounded-full" >Login</li>
			</ul>
		</nav>
	)
}

export default Navbar