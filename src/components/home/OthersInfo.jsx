import ActionBtn from "../actionBtn/ActionBtn";
import { BiTransfer } from "react-icons/bi";
import { MdPayments } from "react-icons/md";
import { IoIosCard } from "react-icons/io";
import { CiMobile1 } from "react-icons/ci";
import { GiShoppingBag } from "react-icons/gi";
import { BsQrCode } from "react-icons/bs";

const OthersInfo = () => {
    return (
        <div className="px-5 py-9 mt-10 bg-[#758694]">
             <div className="grid grid-cols-3 gap-6">
                <ActionBtn bgColor='bg-[#468585]' title='Transfer'><BiTransfer /></ActionBtn>
                <ActionBtn bgColor='bg-secondary' title='Bill Pay'><CiMobile1 /></ActionBtn>
                <ActionBtn bgColor='bg-[#508C9B]' title='Utility'><MdPayments /></ActionBtn>
                <ActionBtn bgColor='bg-[#508D4E]' title='Scan'><BsQrCode /></ActionBtn>
                <ActionBtn bgColor='bg-[#96C9F4]' title='Card'><IoIosCard /></ActionBtn>
                <ActionBtn bgColor='bg-[#4B70F5]' title='Shop'><GiShoppingBag /></ActionBtn>
            </div>
        </div>
    );
};

export default OthersInfo;