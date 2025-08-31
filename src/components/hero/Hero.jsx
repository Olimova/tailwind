import React from 'react'
import hero from '../../assets/hero.png'

const Hero = () => {
  return (
      <div className='w-full h-[660px] bg-[#1c1e53]'>
        <div className="container">
            <div className="flex justify-center items-center">
                <div className="w-1/2 text-white " >
                      <h1 className='max-w-[582px] font-semibold text-[54px] leading-[<74px>] font-(font-family:<"Libre Franklin", sans-serif>) text-wrap'>Building stellar websites for early startups</h1>
                      <p className='max-w-[562px] max-h[56px] text-[16px] text-[#FFFa] leading-[<28px>] mt-[24px] mb-[46px] font-(font-family:<"Libre Franklin", sans-serif>) font-[500]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/> eiusmod tempor incididunt.</p>
                      <div className='flex gap-10'>
                          <button className=' bg-[#FCD980] text-black py-4 px-12 rounded-full cursor-pointer'>View our work</button>
                          <button className='hover:text-white  text-[#bbbbcb] duration-300 cursor-pointer'>View Pricing</button>
                      </div>
                </div>
                <div className="w-1/2 ">
                <img width={800} src={hero} alt="" />
                </div>
            </div>
        </div>
      </div>
  )
}

export default Hero