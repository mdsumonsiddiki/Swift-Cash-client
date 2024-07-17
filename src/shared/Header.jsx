import { IoIosNotifications } from "react-icons/io";
import { Link } from "react-router-dom";
import logo from '../assets/text-1721203624360-removebg-preview.png'
import { CgMenuGridR } from "react-icons/cg";


const Header = () => {
    return (
        <div className="flex bg-darkShade items-center justify-between px-2 py-4 shadow-2xl">
            <Link className="text-3xl text-white"><CgMenuGridR /></Link>
            <Link ><img className="h-8  mx-auto" src={logo} alt="" /></Link>
            <div className="relative">
                <Link className="text-3xl text-white"><IoIosNotifications /></Link>
                <div className="h-4 w-4 bg-error rounded-full absolute top-0 right-0"></div>
            </div>
        </div>
    );
};

export default Header;