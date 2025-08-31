import React from 'react'
import error from '../../assets/404.png'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
          <h1 className=' flex justify-center items-center text-[48px] mt-[180px] mb-[80px]'>Voy, men nimanidir bosib yubordim…</h1>
          <img className="place-self-center" src={error} alt="" />
          <Link to={"/"} className=' uppercase text-[22px] flex justify-center my-[48px]'>Orqaga qaytish</Link>
    </div>
  )
}

export default Error