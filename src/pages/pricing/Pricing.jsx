import React from 'react'
import green from '../../assets/green.svg'
import red from '../../assets/red.svg'
import { Link } from 'react-router-dom'

const Pricing = () => {
  return (
    <>
    <div className="container">
      <div className="flex flex-col justify-center items-center text-center">
          <h1 className='max-w-[414] text-[48px] leading-[<64px>] font-[600] mb-[16[px]]'>Our Pricing Plans</h1>
          <p className='max-w-[562px] text-[16px] leading-[<28px>] font-[500]'>When you’re ready to go beyond prototyping in Figma, Webflow is <br /> ready to help you bring your designs to life — without coding them.</p>
      </div>
        <div className="flex gap-8 rounded-2xl mt-16 mb-32">
          <div className='rounded-2xl bg-[#F4F6FC] pb-16'>
          <div className=' w-[406px] pl-12 pt-16'>
            <h2 className='inline-block max-w-[95px] text-[38px] leading-[<56px>] font-[600]'>$399</h2>
            <a className='flex-wrap ml-4 justify-center text-blue-400' to="#">Per Design</a>
            <h3 className='max-w-[180px] text-[24px] leading-[<36px>] font-[400] mt-5 mb-2'>Landing Page</h3>
            <p className='max-w-[281px] text-[16px] leading-[<28px>] font-[400] mb-[78px]'>When you’re ready to go beyond <br /> prototyping in Figma, </p>
            <ul className='list-none'>
              <li className='flex gap-2.5 mt-2.5 mb-2.5'>
              <img className='' width={15} src={green} alt="" />
              <span>All limited links</span></li>
              <li className='flex gap-2.5 mt-2.5 mb-2.5'><img className='' width={15} src={green} alt="" />
              <span>Own analytics platform</span> </li>
              <li className='flex gap-2.5 mt-2.5 mb-2.5'><img className='' width={15} src={green} alt="" />
              <span>Chat support</span> </li>
              <li className='flex gap-2.5 mt-2.5 mb-2.5'><img className='' width={15} src={red} alt="" />
              <span className='text-gray-400'>Optimize hashtags</span> </li>
              <li className='flex gap-2.5 mt-2.5 mb-2.5'><img className='' width={15} src={red} alt="" />
              <span className='text-gray-400'>Unlimited users</span> </li>
            </ul>
            <button className='bg-[#292B5D] text-white flex justify-center items-center py-4 px-[77px] rounded-full mt-[79px] ml-7'>Get started</button>
          </div>
          
      </div>
          <div className='rounded-2xl bg-[#292B5D] pb-16 text-white'>
            <div className=' w-[406px] pl-12 pt-16'>
            <h2 className='inline-block max-w-[95px] text-[38px] leading-[<56px>] font-[600]'>$399</h2>
              <a className='flex-wrap ml-4 justify-center text-[#FCD980]' to="#">Multi Design</a>
              <h3 className='max-w-[180px] text-[24px] leading-[<36px>] font-[400] mt-5 mb-2'>Website Page </h3>
              <p className='max-w-[281px] text-[16px] leading-[<28px>] font-[400] mb-[78px]'>When you’re ready to go beyond <br /> prototyping in Figma, Webflow’s <br /> ready to help. </p>
            <ul className='list-none'>
              <li className='flex gap-2.5 mt-2.5 mb-2.5'>
              <img className='' width={15} src={green} alt="" />
              <span>All limited links</span></li>
              <li className='flex gap-2.5 mt-2.5 mb-2.5'><img className='' width={15} src={green} alt="" />
              <span>Own analytics platform</span> </li>
              <li className='flex gap-2.5 mt-2.5 mb-2.5'><img className='' width={15} src={green} alt="" />
              <span>Chat support</span> </li>
              <li className='flex gap-2.5 mt-2.5 mb-2.5'><img className='' width={15} src={green} alt="" />
              <span>Optimize hashtags</span> </li>
              <li className='flex gap-2.5 mt-2.5 mb-2.5'><img className='' width={15} src={green} alt="" />
              <span>Unlimited users</span> </li>
            </ul>
              <button className='bg-[#FCD980] justify-center items-center py-4 px-[77px] rounded-full mt-[79px] ml-7'>Get started</button>
          </div>
          
      </div>
          <div className='rounded-2xl bg-[#F4F6FC] pb-16'>
            <div className='w-[406px] pl-12 pt-16'>
            <h2 className='inline-block max-w-[95px] text-[38px] leading-[<56px>] font-[600]'>$499+</h2>
            <a className='flex-wrap ml-8 justify-center text-blue-400' to="#">Per Design</a>
              <h3 className='max-w-[180px] text-[24px] leading-[<36px>] font-[400] mt-5 mb-2'>Complex Project</h3>
            <p className='max-w-[281px] text-[16px] leading-[<28px>] font-[400] mb-[78px]'>When you’re ready to go beyond <br /> prototyping in Figma, </p>
            <ul className='list-none'>
              <li className='flex gap-2.5 mt-2.5 mb-2.5'>
              <img className='' width={15} src={green} alt="" />
              <span>All limited links</span></li>
              <li className='flex gap-2.5 mt-2.5 mb-2.5'><img className='' width={15} src={green} alt="" />
              <span>Own analytics platform</span> </li>
              <li className='flex gap-2.5 mt-2.5 mb-2.5'><img className='' width={15} src={green} alt="" />
              <span>Chat support</span> </li>
              <li className='flex gap-2.5 mt-2.5 mb-2.5'><img className='' width={15} src={green} alt="" />
              <span>Optimize hashtags</span> </li>
              <li className='flex gap-2.5 mt-2.5 mb-2.5'><img className='' width={15} src={green} alt="" />
              <span>Unlimited users</span> </li>
              <li className='flex gap-2.5 mt-2.5 mb-2.5'><img className='' width={15} src={green} alt="" />
              <span>Assist and Help</span> </li>
            </ul>
              <button className='bg-[#292B5D] text-white flex justify-center items-center py-4 px-[77px] rounded-full mt-[79px] ml-7'>Contact us</button>
          </div>
          
      </div>
      </div>

      <div className='flex'>
          <div className="1/2">
            <h2 className='text-5xl font-[600] leading-16 mb-4'>Frequently asked questions</h2>
            <Link to={"/contact"} className='text-blue-700'>Contact us For More Info</Link>
          </div>
          <div className="1/2 mb-5">
            <div className='flex gap-14 border-b-1'>
             
              <span className='text-blue-700 text-2xl font-bold leading-9'>01</span>
              <div className='flex flex-col'>
                <h3 className='font-medium text-2xl leading-9'>How much time does it take ?</h3>
                <p className='mt-4 mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <button className=''>+</button>
            </div>
            <div className='flex gap-14 border-b-1'>
              <span className='text-blue-700 text-2xl font-bold leading-9'>02</span>
              <div className='flex max-w-[624px] '>
                <h3 className='font-medium text-2xl leading-9 my-2 '>How much time does it take ?</h3>
              </div>
              <button className='flex justify-end'>+</button>
              <hr />
            </div>
            <div className='flex gap-14 border-b-1'>
              <span className='text-blue-700 text-2xl font-bold leading-9'>03</span>
              <div className='flex flex-col'>
                <h3 className='font-medium text-2xl leading-9 my-2 '>How much time does it take ?</h3>
              </div>
              <button className=''>+</button>
              <hr />
            </div>
            <div className='flex gap-14 border-b-1'>
              <span className='text-blue-700 text-2xl font-bold leading-9'>04</span>
              <div className='flex flex-col'>
                <h3 className='font-medium text-2xl leading-9 my-2 '>How much time does it take ?</h3>
              </div>
              <button className=''>+</button>
              <hr />
            </div>
            <div className='flex gap-14 border-b-1'>
              <span className='text-blue-700 text-2xl font-bold leading-9'>05</span>
              <div className='flex flex-col'>
                <h3 className='font-medium text-2xl leading-9 my-2 '>How much time does it take ?</h3>
              </div>
              <button className=''>+</button>
              <hr />
            </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default Pricing