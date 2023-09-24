import { NavLink } from "react-router-dom";
import Logo from "../../../assets/Logo.png";

const Navbar = () => {
    return (
        <div>
            <nav className="max-w-[1024px] mx-auto px-6 flex justify-between items-center h-14 py-10">
                <NavLink to='/' className='text-2xl font-semibold'>
                    <img src={Logo} alt="" width={200} />
                </NavLink>

                <div className="flex justify-center items-center gap-9 text-lg font-medium">
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
            </nav>
        </div>
    );
};

export default Navbar;