import Image from 'next/image'
import React from 'react'

export default function ChupaChupz() {
  return (
    <div className='flex flex-col overflow-x-hidden bg-white relative'>
      {/*gradient backdrop*/}
      <div className='absolute z-0 w-full h-full opacity-[70%]  bg-linear-to-r from-[#e2b6f1] via-[#faffa5] via-[#facbbf] via-[#faffa5] to-[#e2b6f1]'>
      </div>


      {/* content */}
      <div className="flex flex-col justify-center h-[40vh] lg:h-screen items-center relative z-1">
        <Image width={1200} height={600} src={'/universityWork/chups/chupaChupsLogo.svg'} alt="" className="w-[50%] lg:w-[25%]" />

      </div>


      <div className="flex flex-col bg-[url(/universityWork/chups/chupaChupsBGCan.jpg)] bg-cover justify-center px-10 lg:px-60 items-center relative py-10 h-content lg:py-5 lg:h-screen w-full">
        <p className='font-bold text-center text-base lg:text-3xl text-[#432565]'>Hard selling poster of Chupa Chups</p>
        <p className='text-sm lg:text-xl text-center  text-[#432565]'>A hard-selling poster is designed to directly persuade the
          audience to take immediate action, such as buying the product.
          In the case of Sparkling Chupa Chups, the poster should focus
          on strong visual impact, clear messaging, and an urgent call to
          action.<br /><br />
          visual elements must be bold and eye-catching. Since Sparkling
          Chupa Chups is a fun, colorful, and refreshing drink, the poster should
          use bright colors, dynamic splashes, and images of the beverage
          with sparkling effects. The product should be the main focus, placed
          prominently so viewers instantly recognize it.</p>
      </div>
      <div className="flex flex-col justify-center bg-contain bg-center lg:overflow-hidden  items-center relative h-full lg:h-screen w-full">
        <img src="/universityWork/chups/chupaChupsBG.jpg" className='w-full h-auto relative z-0' alt="" />
        <p className='bottom-0 right-0 absolute z-2 text-[#432565] text-4xl lg:text-6xl font-bold'>POSTER<br/>MOCK UP</p>
      </div>
      <div className='flex relative flex-row  bg-cover justify-between px-10 lg:px-60 items-center relative h-[50vh] lg:h-[150vh] w-full'>
        <p className='top-1/4 left-[-5%] lg:left-0 absolute z-2 text-[#432565] text-3xl rotate-[270deg] lg:text-6xl font-bold'>POSTER<br/>DESIGN</p>
        <img src="/universityWork/chups/posterchupaChups.png" className='w-[70%] top-1/6 h-auto lg:h-[75%] lg:w-auto right-2 lg:right-10 absolute' alt="" />
      </div>
    </div>
  )
}
