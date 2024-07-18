import { NavLink } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";


const Nav = () => {
    const navItem = <>
        <li>
            <NavLink className='text-5xl text-white'>
                <IoMdHome />
            </NavLink>
        </li>
        <li>
            <NavLink className='text-5xl text-white'>
                <FaMoneyBillTransfer />
            </NavLink>
        </li>
        <li>
            <NavLink className='text-4xl text-white'>
                <FaUser />
            </NavLink>
        </li>
    </>
    return (
        <div className="bg-darkShade shadow-2xl">
            <div className="py-4">
                {/* mobile menu  */}
                <div>
                    <ul className="flex items-center justify-around">
                        {navItem}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Nav;