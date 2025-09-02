import React from 'react'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className='bg-[#1c1e53]'>
        <div className="container">
            <div className="flex text-white">
                <div className="1/2 mt-[104px]">
                    <img src={logo} alt="" />
                    <p className='mb-[86px] mt-[23px] text-[#eeee]'>We are always open to discuss your project and <br /> improve your online presence.</p>
                        <div className='flex mb-[92px]'>
                              <button className='flex items-start  bg-[#FCD980] text-black flex-col pt-[18px] pb-[16px] pl-[37px] pr-[29px]'>
                                <b>Email me at</b>
                                <Link to="#">contact@website.com</Link>
                            </button>
                              <button className='flex items-start bg-[#FCD980] text-black flex-col pt-[18px] pb-[16px] pr-[137px]'>
                                <b>Call us</b>
                                <Link to="#">0927 6277 28525</Link>
                            </button>
                    </div>
                </div>
                <div className="1/2 ml-[142px] mt-[96px]">
                          <h3 className='text-[48px] leading-[<64px>] font-[600]'>Lets Talk!</h3>
                          <p className='font-[400] text-[16px] leading-[<28px>] mt-[14px] mb-[28px]'>We are always open to discuss your project, <br /> improve your online presence and help with your <br /> UX/UI design challenges.</p>
                    <div className='flex max-w-[144px] gap-[26px]'>
                              <i className="fa-brands fa-facebook"></i>
                              <i className="fa-brands fa-twitter"></i>
                              <i className="fa-brands fa-instagram"></i>
                              <i className="fa-brands fa-linkedin"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer