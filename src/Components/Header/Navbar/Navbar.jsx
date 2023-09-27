import { NavLink } from "react-router-dom";
import Logo from "../../../assets/Logo.png";
import { useState } from "react";
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from "react-icons/ai";


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(!false);
    return (
        <div>
            <nav className="max-w-[1024px] mx-auto px-6 flex justify-between items-center h-14 py-10">
                <NavLink to='/' className='text-2xl font-semibold'>
                    <img src={Logo} alt="" width={200} />
                </NavLink>

                <div className="hidden lg:flex justify-center items-center gap-9 text-lg font-medium">
                    <NavLink to='/' className={({ isActive, isPending }) => isPending ? "text-black" : isActive ? "text-[#FF444A] border-b-2 border-[#FF444A]" : ""}>
                        Home
                    </NavLink>

                    <NavLink to='/donation' className={({ isActive, isPending }) => isPending ? "text-black" : isActive ? "text-[#FF444A] border-b-2 border-[#FF444A]" : ""}>
                        Donation
                    </NavLink>

                    <NavLink to='/statistics' className={({ isActive, isPending }) => isPending ? "text-black" : isActive ? "text-[#FF444A] border-b-2 border-[#FF444A]" : ""}>
                        Statistics
                    </NavLink>
                </div>

                <div onClick={() => setToggleMenu(!toggleMenu)} className="lg:hidden flex items-center cursor-pointer text-2xl">
                    {
                        toggleMenu === true ? <FaBars /> : <AiOutlineClose />
                    }

                    <div className={`lg:hidden flex flex-col items-center absolute top-16 z-40 right-11 gap-12 text-lg font-medium bg-white border-2 shadow-md px-20 py-10 rounded-xl ${toggleMenu ? 'hidden' : ''}`}>
                        <NavLink to='/' className={({ isActive, isPending }) => isPending ? "text-black" : isActive ? "text-[#FF444A] border-b-2 border-[#FF444A]" : ""}>
                            Home
                        </NavLink>

                        <NavLink to='/donation' className={({ isActive, isPending }) => isPending ? "text-black" : isActive ? "text-[#FF444A] border-b-2 border-[#FF444A]" : ""}>
                            Donation
                        </NavLink>

                        <NavLink to='/statistics' className={({ isActive, isPending }) => isPending ? "text-black" : isActive ? "text-[#FF444A] border-b-2 border-[#FF444A]" : ""}>
                            Statistics
                        </NavLink>
                    </div>
                </div>
            </nav >
        </div >
    );
};

export default Navbar;