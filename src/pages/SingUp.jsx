
const SingUp = () => {

    const handleSingUp = (e)=> {
        e.preventDefault()
        const from = e.target;
        const number = from.number.value;
        const email = from.email.value;
        const password = from.password.value;

        console.log(number, email, password);
    }

    return (
        <div className=" px-2 pt-20 bg-gradient-to-b  from-primary via-cyan-900 to-secondary">
                <h2 className="text-white text-3xl font-medium">Create an Account</h2>
                <form onSubmit={handleSingUp} className="space-y-6 mt-5">
                    <div className="">
                        <input name="number" className="bg-white py-3 px-4 w-full focus:outline-none shadow-2xl rounded-md placeholder:text-xl" type="tel" placeholder="Number" />
                    </div>
                    <div className="">
                        <input name="email" className="bg-white py-3 px-4 w-full focus:outline-none shadow-2xl rounded-md placeholder:text-xl" type="email" placeholder="Email" />
                    </div>
                    <div className="">
                        <input name="password" className="bg-white py-3 px-4 w-full focus:outline-none shadow-2xl rounded-md placeholder:text-xl" type="password" placeholder="Password" />
                    </div>
                    <div>
                        <button  className="bg-secondary tracking-wider text-white py-3 px-4 w-full focus:outline-none shadow-2xl rounded-md text-xl font-bold">Sing Up</button>
                    </div>
                </form>
            </div>
    );
};

export default SingUp;