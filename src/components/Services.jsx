import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, icon, title, subTitle }) => (
  <div className='flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl'>
    <div
      className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}
    >
      {icon}
    </div>
    <div className='ml-5 flex flex-col flex-1'>
      <h1 className='text-white mt-2 text-lg '>{title}</h1>
      <p className='text-white mt-2 text-sm md:w-9/12'>{subTitle}</p>
    </div>
  </div>
);

const Services = () => {
  return (
    <div className='flex flex-col lg:flex-row w-full items-center justify-center gradient-bg-services'>
      <div className='flex mf:flex-row flex-col items-center justify-end md:p-20 py-12 px-4'>
        <div className='flex-1 flex flex-col justify-center items-start '>
          <h1 className='text-white text-3xl sm:text-5xl py-2 text-gradient font-semibold'>
            Services that we <br />
            continue to improve
          </h1>
        </div>
      </div>
      <div className='flex-1 flex flex-col justify-start items-center'>
        <ServiceCard
          color='bg-[#2952e3]'
          icon={<BsShieldFillCheck fontSize={21} className='text-white' />}
          title='Security Guaranteed'
          subTitle='Security is guaranteed. We always maintain privacy and maintaining the quality of our products.'
        />
        <ServiceCard
          color='bg-[#8945F8]'
          icon={<BiSearchAlt fontSize={21} className='text-white' />}
          title='Best exchange rate'
          subTitle='Security is guaranteed. We always maintain privacy and maintaining the quality of our products.'
        />
        <ServiceCard
          color='bg-[#f84550]'
          icon={<RiHeart2Fill fontSize={21} className='text-white' />}
          title='Fastest Transaction'
          subTitle='Security is guaranteed. We always maintain privacy and maintaining the quality of our products.'
        />
      </div>
    </div>
  );
};

export default Services;
