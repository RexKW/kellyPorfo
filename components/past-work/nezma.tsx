import Image from 'next/image'
import React from 'react'

export default function Nezma() {
  return (
    <div className='flex flex-col overflow-x-hidden bg-white relative'>
      {/*gradient backdrop*/}
      <div className='absolute z-0 w-full h-full opacity-[70%]  bg-linear-to-r from-[#b2654f] via-[#b86e57] via-[#facbbf] via-[#f0a28c] to-[#b2654f]'>
      </div>


      {/* content */}
      <div className="flex flex-col justify-start pt-30 lg:pt-10 h-content lg:h-screen items-center relative z-0">
        <Image width={1200} height={600} src={'/pastWork/nezma/nezmaDarkLogo.svg'} alt="" className="w-[25%]" />
        <div className='flex flex-col lg:flex-row justify-center items-start text-[#6c2c40] px-10 py-10'>
          <p className='lg:text-2xl order-2 lg:order-1 pt-10 lg:pt-0 lg:basis-1/2 lg:pr-20'>NEZMA is a beauty product
            and skincare brand.NEZMA
            need a new packaging design
            that leads to feminimity and
            have a sense of kombucha color
            due to the new product that
            contain kombbucha.
            The combination of
            elegance and luxury color of
            deep dark purple and rose gold
            give of the color of kombucha
          </p>
          <Image width={1200} height={600} src={'/pastWork/nezma/nezmaPhoto.png'} alt="" className="h-[40%] order-1 lg:order-2 lg:h-[50%]  w-auto" />
        </div>
      </div>
      <div className="flex flex-col bg-[#6c2c40] justify-center items-center relative h-[40vh] lg:h-screen w-full">
        <Image width={1200} height={600} src="/pastWork/nezma/nezmaLightLogo.svg" className="w-1/2 lg:w-3/4" alt="" />
      </div>


      <div className="flex flex-col justify-center items-center relative h-[40vh] lg:h-screen w-full">
        <Image width={1200} height={600} src="/pastWork/nezma/nezmaContent.png" className="w-1/2 lg:w-3/4 h-auto" alt="" />
      </div>
      <div className="flex flex-col justify-center items-center relative h-[40vh] my-20 lg:h-screen w-full">
        <Image width={1200} height={600} src="/pastWork/nezma/nezmaContent2.png" className="w-auto h-[85%]" alt="" />
      </div>
      <div className='flex relative flex-row  bg-cover justify-between px-10 lg:px-60 items-center relative h-[40vh] lg:h-screen w-full'>
        <img src="/pastWork/nezma/nezmaBoxLeft.png" className="w-50 lg:w-150 absolute left-0 top-[50%] translate-y-[-50%]" alt="" />
        <img src="/pastWork/nezma/nezmaBoxRight.png" className="w-50 lg:w-150 absolute right-0 top-[50%] translate-y-[-50%]" alt="" />
      </div>
    </div>
  )
}
