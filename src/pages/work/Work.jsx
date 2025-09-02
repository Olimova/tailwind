import React from 'react'
import { WORK, WorkNav } from '../../static'

const Work = () => {
  return (
    <>
      <div className='bg-[#F4F6FC] mb-24'>
        <div className="flex  flex-col justify-center items-center text-center p-24">
          <p className='mt-1 text-gray-600'>What we created</p>
          <h1 className='mb-6 max-w-[504px] text-[48px] leading-[<64px>] font-[600] '>Our Work Portfolio</h1>
          <p className='text-gray-600'>We help teams create great digital products by providing them with tools and technology <br /> to make the design-to-code process universally accessible.</p>
        <div className='flex  max-w-[144px] gap-[26px] mt-8'>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-linkedin"></i>
        </div>
        </div>
      </div>
        <div className="container">
          <div className='mt-[100px] flex justify-center gap-8'>
            {
              WorkNav.map((item,index)=>(
                  <ul key={index} className=''>
                    <li className=''>{item}</li>
                  </ul>
              ))
            }
          </div>
        <div className="grid grid-cols-2">
          {
            WORK.map(item => (
              <div className='mt-12  max-w-[623px]' key={item.id}>
                <img src={item.img} alt={item.title} />
                <h3 className=' text-[38px] leading-[<56px>] font-[600] my-4'>{item.title}</h3>
                <p className='text-gray-500 text-[16px] leading-[<28px>] font-[400] mb-6'>{item.text}</p>
                <button className='text-[16px] leading-[<28px>] font-[500] mr-2 text-[#282938]'>{item.btn}</button>
                <i className="fa-solid fa-arrow-right text-[#282938]"></i>
              </div>
            ))
          }
        </div>
        </div>
        <div className='flex justify-center '>
        <div className='flex flex-col text-center my-32 max-w-[730px] justify-center items-center'>
          <h3 className='text-[48px] leading-[<64px>] font-[600]'>Let's build something great together</h3>
          <p className='my-5'>Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies nec dolor sit amet, scelerisque cursus purus.</p>
          <button className=' max-w-[230px] bg-[#FCD980] flex justify-center items-center text-center py-4 px-12 rounded-full mt-5 '>Contact Us</button>
        </div>
        </div>
    </>
  )
}

export default Work