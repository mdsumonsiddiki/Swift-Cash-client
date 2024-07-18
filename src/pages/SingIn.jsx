import { Link} from "react-router-dom";
import logo from '../assets/logo.png'

const SingIn = () => {
    const handleSingin = (e) => {
        e.preventDefault()
        const from = e.target;
        const number = from.number.value;
        const password = from.password.value;

        console.log(number, password);
    }
    return (
        <div className="h-screen font-poppins bg-gradient-to-b px-2 pt-5 from-primary via-cyan-900 relative to-secondary">
        <div className='flex items-center justify-between px-2'>
            <img className='h-8 w-1/3' src={logo} alt="" />
            <div className='space-x-2'>
                <Link  to='/singup'  className='border-2 font-bold tracking-wide shadow-xl border-white px-3 py-1 bg-secondary text-white'>Sing Up</Link>
            </div>
        </div>
        <div className=" px-2 pt-20 md:w-1/2 lg:w-2/3 mx-auto">
            <h2 className="text-white text-3xl font-medium">Welcome Back</h2>
            <form onSubmit={handleSingin} className="space-y-6 mt-5">
                <div className="">
                    <input name="number" className="bg-white py-3 px-4 w-full focus:outline-none shadow-2xl rounded-md placeholder:text-xl" type="text" placeholder="Number/Email" />
                </div>
                <div className="">
                    <input name="password" className="bg-white py-3 px-4 w-full focus:outline-none shadow-2xl rounded-md placeholder:text-xl" type="password" placeholder="Password" />
                </div>
                <div>
                    <button className="bg-secondary tracking-wider text-white py-3 px-4 w-full focus:outline-none shadow-2xl rounded-md text-xl font-bold">Sing In</button>
                </div>
            </form>
            <Link className="text-xl mt-10 inline-block text-white font-medium text-center w-full">Forgot your password</Link>
        </div>
    </div>
       
    );
};

export default SingIn;