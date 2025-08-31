import React from 'react'
import blog from '../../assets/blog.png'

const Blog = () => {
  return (
    <>
      <div>
        <div className="container">
          <div className="flex flex-col mt-32 mb-32 justify-center items-center text-center">
            <h1 className='max-w-[949px] text-[48px] leading-[<64px>] font-[600] font-(font-family:<"Libre Franklin", sans-serif>)'>A UX Case Study on Creating a <br /> Studious Environment for Students</h1>
          <span className=''>Andrew Jonson Posted on 27th January 2021</span>
          <img className=' mt-8 mb-12 max-h-[477px]' src={blog} alt="" />
          <p className=' text-gray-600 mb-4'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the <br /> stars had ceased to twinkle. By the same illusion which lifts the horizon of the <br /> sea to the level of the spectator on a hillside.</p>
          <a  href="#" className='text-blue-400'>Read more</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog