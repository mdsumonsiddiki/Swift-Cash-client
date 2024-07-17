import { Link } from "react-router-dom";


const SingIn = () => {
    const handleSingin = (e) => {
        e.preventDefault()
        const from = e.target;
        const number = from.number.value;
        const password = from.password.value;

        console.log(number, password);
    }
    return (
        <div className=" px-2 pt-20 ">
            <h2 className="text-white text-3xl font-medium">Create an Account</h2>
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
            <Link className="text-xl mt-10 inline-block text-white font-medium ">Forgot your password</Link>
        </div>
    );
};

export default SingIn;