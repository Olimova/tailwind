import React from 'react'

const Contact = () => {
  return (
    <>
    <div>
      <div className="container">
        <div className="flex flex-col justify-center items-center text-center mt-[220px]">
            <h1 className='max-w-[269px] text-[48px] leading-[<64px>] font-[600] mb-4'>Contact Us</h1>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore.</p>
        </div>
          <form action="" className='pt-[55px] pb-[165px] pl-[77px] pr-[77px] bg-[#F4F6FC] rounded-[12px] mt-[64px] mb-[128px]'>
          <div className="flex flex-row">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="full-name"
                    className="block text-sm font-medium text-black"
                  >
                    Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="full-name"
                      type="text"
                      name="full-name"
                      autoComplete="given-name"
                      placeholder="Enter your name"
                      className="block w-full rounded-md border border-gray-400 px-3 py-1.5 text-base text-black placeholder-black focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-4 mt-10">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-black"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="Enter your email"
                    className="block w-full rounded-md border border-gray-400 px-3 py-1.5 text-base text-black placeholder-black focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
          </div>
          <div className="flex flex-row">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 mb-[24px]">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-black"
                  >
                    Subject
                  </label>
                  <div className="mt-2">
                    <input
                      id="first-name"
                      type="text"
                      name="first-name"
                      autoComplete="given-name"
                      placeholder="Provide context"
                      className="block w-full rounded-md border border-gray-400 px-3 py-1.5 text-base text-black placeholder-black focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-black"
                  >
                    Subject
                  </label>
                  <div className="mt-2">
                    <input
                      id="first-name"
                      type="text"
                      name="first-name"
                      autoComplete="given-name"
                      placeholder="Select Subject"
                      className="block w-full rounded-md border border-gray-400 px-3 py-1.5 text-base text-black placeholder-black focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
          </div>
            <div className="col-span-full max-w-[908px] ">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-black"
              >
                Message
              </label>
              <div className="mt-2 max-w-[908px]">
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  placeholder="Write your  question here"
                  className="block w-[600px] rounded-md border border-gray-400 px-3 py-1.5 text-base text-black placeholder-black focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                ></textarea>
              </div>
              <button className='py-4 px-12 bg-[#282938] text-white rounded-full mt-[32px]'>Send Messege</button>
            </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Contact