import Image from 'next/image'
import React from 'react'

export default function JonBakery() {
  return (
    <div className='flex flex-col overflow-x-hidden bg-white relative'>
      <div className="flex-flex-col overflow-hidden justify-center items-center relative z-1">
        <Image width={1200} height={600} src={'/mainWork/bakery/JoBakeryBG.png'} alt="" className="w-screen h-auto" />
        <div className="bg-white w-full h-[45vh] lg:h-[50vh] justify-center items-center relative">
          <img src="/mainWork/bakery/joBakeryLogo.svg" className="absolute left-[50%] translate-x-[-50%] z-2 w-[20%] translate-y-[-75%]" alt="" />
          <p className="text-center lg:text-start text-[#523114] top-10 lg:w-[50%] lg:top-[25%] absolute lg:text-2xl z-2 px-5 lg:px-10">Jonathan's Bakery adalah toko roti asal NTT
            design ini dibuat berdasarkan pengembangan
            konsep dari Jonathan's Bakery dengan menambahkan
            sentuhan parisian bakery. Rebranding ini bertujuan
            untuk meningkatkan standard di NTT</p>
          <img src="/mainWork/bakery/asset2Bakery.svg" className="w-50 hidden lg:w-60 bottom-0 right-0 lg:absolute" alt="" />
          <img src="/mainWork/bakery/asset1Bakery.svg" className="w-40 lg:w-50 bottom-[-5%] right-[-5%] absolute" alt="" />
        </div>
      </div>
      <div className="flex flex-col bg-white justify-center items-center relative h-[275px] lg:h-screen w-full">
        <div className="flex flex-row w-full gap-5 w-[75vw] justify-start items-center h-[20vh] lg:h-full">
          <img src="/mainWork/bakery/joBakeryHam.png" alt="" className='w-[25vw] h-auto' />
          <img src="/mainWork/bakery/joBakeryWaffle.png" alt="" className='w-[25vw] h-auto' />
          <img src="/mainWork/bakery/joBakeryHam.png" alt="" className='w-[25vw] h-auto' />
        </div>
        <div className='flex flex-row gap-5 py-5 w-full'>
          <img src="/mainWork/bakery/bakedGoods.svg" className='max-w-[60vw] flex flex-row justify-start w-full' alt="" />
        </div>
        <div className="w-full h-[200px] lg:h-[50vh] flex">
          <div className="bg-[#503013] basis-1/4 h-full flex justify-center items-center"><p className='lg:text-2xl text-white items-center'>#503013</p></div>
          <div className="bg-[#cd9b2b] basis-1/4 h-full flex justify-center items-center"><p className='lg:text-2xl text-white items-center'>#cd9b2b</p></div>
          <div className="bg-[#e9dabb] basis-1/4 h-full flex justify-center items-center"><p className='lg:text-2xl text-[#503117] items-center'>#e9dabb</p></div>

        </div>
        <img src="/mainWork/bakery/phoneBakery.png" alt="" className='translate-x-[27%] lg:translate-x-0 right-0 absolute h-full w-auto z-10 bottom-0' />
      </div>
      <div className='flex relative flex-col bg-white bg-[url(/mainWork/bakery/joBakeryBG2.png)] bg-cover justify-center items-center relative h-[40vh] lg:h-screen w-full'>
        <img src="/mainWork/bakery/joBakeryText.svg" className="w-40 lg:w-100 top-[15%] right-[5%] absolute" alt="" />
        <img src="/mainWork/bakery/joBakeryLogo.svg" className="absolute left-[10%] top-[10%] w-20 lg:w-60 h-auto" alt="" />
        <img src="/mainWork/bakery/joWhiteLogo.svg" className="absolute left-[35%] bottom-[20%] w-20 lg:w-60 h-auto" alt="" />
      </div>
      <div className='flex relative flex-row bg-white bg-[url(/mainWork/bakery/joBakeryBG2.png)] bg-cover justify-between px-10 lg:px-60 items-center relative h-[40vh] lg:h-screen w-full'>
        <img src="/mainWork/bakery/joBoxes.png" className="w-40 lg:w-100" alt="" />
        <img src="/mainWork/bakery/joBoxesUnfold.png" className="w-30 lg:w-80 h-auto" alt="" />
      </div>
    </div>
  )
}
