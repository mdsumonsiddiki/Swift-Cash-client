import { useState } from "react";
import ActionBtn from "../actionBtn/ActionBtn";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { MdMobileFriendly } from "react-icons/md";


const MainInfo = () => {
    const [showBalance, setShowBalance] = useState(false)
    return (
        <div className="mt-8 px-2">
            <div className="px-3 bg-secondary rounded-t-xl pb-6 w-full pt-10 ">
                <button onClick={()=>setShowBalance(!showBalance)} className="bg-white shadow-2xl relative rounded-full w-full py-10 md:py-14 font-bold text-2xl text-primary overflow-hidden">

                    <span className={`absolute top-1/2  -translate-y-1/2  duration-500 ${showBalance ? 'left-0 -translate-x-60': 'left-1/2 -translate-x-1/2'}`}>Check Balance</span>
                    <span className={`absolute top-1/2 -translate-y-1/2  duration-500 ${!showBalance ? 'right-0 translate-x-60': 'right-1/2 translate-x-1/2'}`}>$500</span>
                    
                </button>
            </div>
            <div className="flex  justify-around bg-darkShade pb-10 pt-6 rounded-b-xl">
                <ActionBtn bgColor='bg-secondary' title='Cash Out'><FaMoneyCheckDollar /></ActionBtn>
                <ActionBtn bgColor='bg-[#508C9B]' title='Send Money'><IoIosSend /></ActionBtn>
                <ActionBtn bgColor='bg-[#6C946F]' title='Recharge'><MdMobileFriendly /></ActionBtn>
            </div>
        </div>
    );
};

export default MainInfo;