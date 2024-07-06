
import React from 'react';
import { FcAlarmClock } from "react-icons/fc";
const SearchTalent = () => {
  const filtredTalent= props.talent.filter((elem)=>{
    return e.toLowerCase().includes(props.searchVal.toLowerCase())
})
  return (
    <div className="talents">
    <h3 className='text-3xl font-bold text-[#181818] mt-10 flex items-center justify-center '>Result of your searched : </h3>
    <div className="talent-card mt-10 max-w-64 rounded-xl cursor-pointer">
        <img src="https://i0.wp.com/tw3partners.fr/wp-content/uploads/2024/03/ia-developpement-web-700x400-1.png?fit=700%2C400&ssl=1" className='w-56 ml-4  rounded-xl'></img>
        <h5 className='p-3 font-semibold text-[#181818] cursor-pointer hover:text-[#108a00]'>Descreption:</h5>
        <div className="price-delivery flex items-center">
        <FcAlarmClock size={28} className='text-[#505050] ml-3'/>
        <h5 className='text-[#505050] font-bold text-sm ml-1 '>2 days delivery</h5>
        <h5 className='text-[#505050] font-bold text-sm ml-6 '>From $100</h5>
        </div>
        <div className="profile flex ">
            <img src="" className='w-14 mt-6' />
            <h5 className='mt-10 ml-2 font-semibold text-[#181818]'>username</h5>
            <h5 className='mt-10 ml-10 font-semibold p-1'>⭐ 4.8</h5>
        </div>
    </div>
</div>
  );
}

export default SearchTalent;

