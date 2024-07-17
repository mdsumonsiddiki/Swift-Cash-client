import { NavLink, Outlet } from 'react-router-dom';
import logo from '../assets/logo.png'

const SingInUp = () => {
    return (
        <div className="h-screen font-poppins bg-gradient-to-b px-2 pt-5 from-primary via-cyan-900 relative to-secondary">
        <div className='flex items-center justify-between'>
            <img className='h-8 w-1/3' src={logo} alt="" />
            <div className='space-x-2'>
                <NavLink  end className={({ isActive }) => `border-2 font-bold  shadow-xl border-white px-3 py-1 ${isActive ? 'bg-white text-primary  ' : 'text-white bg-transparent'}`}>Log In</NavLink>
                <NavLink  to='singup' end className={({ isActive }) => `border-2 font-bold  shadow-xl border-white px-3 py-1 ${isActive ? 'bg-white text-primary  ' : 'text-white bg-transparent'}`}>Sing Up</NavLink>
            </div>
        </div>
        <Outlet/>
    </div>
    );
};

export default SingInUp;