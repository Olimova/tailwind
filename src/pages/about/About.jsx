import React from 'react'
import about from '../../assets/about.png'
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
    </div>
    </>
  )
}

export default About