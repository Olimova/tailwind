import React from 'react'
import about from '../../assets/about/about.png'
import about2 from '../../assets/about/about2.png'
import { ABOUTS } from '../../static'
const About = () => {
  return (
    <>
      <div className="container">
        <div className='flex font-(font-family:<"Libre Franklin", sans-serif>) mt-[128px] mb-[126px]'>
          <div className="1/2 text-[#282938]">
            <h3 className='text-[18px] leading-[<32px>] font-[400]'>About us</h3>
            <h1 className='text-[54px] leading-[<74px>] font-[600] max-w-[595px] mt-[8px] mb-[31px] '>Our designs solve problems</h1>
            <p className='text-[16px] leading-[<28px>] font-[400] max-w-[484px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </div>
          <div className="1/2">
            <img src={about} alt="" />
          </div>
        </div>
        <div className='mb-32'>
          <div className='flex py-24 pl-20 pr-[109px] bg-[#F4F5F5]'>
            <div className="1/2">
              <h3 className='text-[38px] leading-14 font-[600] mb-4'>Goal focussed</h3>
              <p className='text-gray-600 font-[400] leading-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="1/2">
              <h3 className='text-[38px] leading-14 font-[600] mb-4'>Continuous improvement</h3>
              <p className='text-gray-600 font-[400] leading-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
          <div><img src={about2} alt="" /></div>
        </div>

      </div>
        <div className='bg-[#F4F6FC] py-32 px-40 '>
          <h2 className='text-5xl leading-16 font-[600] flex justify-center'>Meet our team</h2>
          <div className="container">
        <div className="flex gap-8 py-12 px-16 mt-12 justify-center items-center text-center">
          {ABOUTS.map((item) => (
            <div key={item.id} className="flex flex-col items-center bg-white py-12 px-16 ">
              <div className="relative w-[168px] h-[168px] rounded-full overflow-hidden group">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-[168px] h-[168px] rounded-full object-cover"
                />
                <div className="absolute inset-0 rounded-full 
                        bg-gradient-to-t from-purple-700/90 to-transparent 
                        flex items-end justify-center gap-4 pb-6 
                        opacity-0 group-hover:opacity-80 
                        translate-y-6 group-hover:translate-y-0 
                        transition-all duration-500 ease-in-out">
                  <a href="#" className="text-white bg-black/30 p-2 rounded-full hover:bg-black/60 transition">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a href="#" className="text-white bg-black/30 p-2 rounded-full hover:bg-black/60 transition">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#" className="text-white bg-black/30 p-2 rounded-full hover:bg-black/60 transition">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </div>
              </div>
              <h3 className="mt-[30px] text-2xl font-[500] leading-9 text-gray-800 z-10 ">{item.title}</h3>
              <p className="text-sm text-gray-500 z-10">{item.text}</p>
            </div>
          ))}
        </div>
          </div>

        </div>
    </>
  )
}

export default About