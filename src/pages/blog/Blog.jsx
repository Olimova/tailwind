import React from 'react'
import blog from '../../assets/blog.png'
import { BLOG } from '../../static'

const Blog = () => {
  return (
    <>
      <div>
        <div className="container">
          <div className="flex flex-col mt-32 mb-32 justify-center items-center text-center">
            <h3 className='max-w-[949px] text-[48px] leading-[<64px>] font-[600] font-(font-family:<"Libre Franklin", sans-serif>)'>A UX Case Study on Creating a <br /> Studious Environment for Students</h3>
          <span className=''>Andrew Jonson Posted on 27th January 2021</span>
          <img className=' mt-8 mb-12 max-h-[477px]' src={blog} alt="" />
          <p className=' text-gray-600 mb-4'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the <br /> stars had ceased to twinkle. By the same illusion which lifts the horizon of the <br /> sea to the level of the spectator on a hillside.</p>
          <a  href="#" className='text-blue-400'>Read more</a>
          </div>
          <div>
            <h3 className='flex justify-center text-[48px] leading-[<64px>] font-[600] mb-12'>Our Blog</h3>
            <div className="grid grid-cols-3 mb-28">
              {
                BLOG.map(item=>(
                  <div className='mt-12 mb-4 max-w-[405px]' key={item.id}>
                    <img  src={item.img} alt={item.title} />
                    <p className='text-gray-500 text-[16px] leading-[<28px>] font-[500] mt-8'>{item.data}</p>
                    <h3 className='text-[27px] leading-[<36px>] font-[400] my-4'>{item.title}</h3>
                    <p className='text-gray-500 text-[16px] leading-[<28px>] font-[400] mb-6'>{item.text}</p>
                    <button className='text-[16px] leading-[<28px>] font-[500] mr-2 text-[#282938]'>{item.btn}</button>
                    <i className="fa-solid fa-arrow-right text-[#282938]"></i>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog