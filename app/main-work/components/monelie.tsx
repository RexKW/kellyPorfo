import Image from 'next/image'
import React from 'react'

export default function Monelie() {
  return (
    <div className='flex flex-col bg-white relative'>
      <div className="flex flex-col justify-center bg-[#f5b0c7] items-center relative">
              <div className="flex-flex-col justify-center items-center relative z-1">
                <Image width={1200} height={600} src={'/mainWork/donutBackdrop.png'} alt="" className="w-screen h-auto" />
                <div className="bg-[#f5b0c7] w-full h-[45vh] lg:h-[50vh] justify-center items-center relative">
                  <img src="/mainWork/monelie/monelieGreen.svg" className="absolute left-[50%] translate-x-[-50%] z-2 w-[50%] translate-y-[-75%]" alt="" />
                  <div className="bg-[#f5b0c7] w-full h-full blur-lg">
      
                  </div>
                  <p className="text-center text-[#00998b] top-10 lg:top-[25%] absolute text-xl z-2 px-5 lg:px-10">Monelie adalah toko roti dan kue asal Surabaya barat
                    dengan branding identity minimalis yang kuat dengan
                    warna tosca. Tujuan dari rebranding untuk event Sakura
                    Festival di Pakuwon Mall adalah untuk membawakan
                    penampilan yang lebih segar menyesuaikan konsep
                    event, dan dengan menyambut menu baru yang
                    bertema sakura. Sentuhan bunga sakura dan warna pink
                    membuat Monelie semakin menyatu dengan tema</p>
                </div>
              </div>
      
            </div>
            <div className="flex flex-col bg-[#00998b]/40 justify-center items-center relative h-screen w-full">
              <div className="bg-linear-to-b from-[#f5b0c7] absolute top-0 to-transparent h-[25%] w-full">
              </div>
              <img src="/mainWork/monelie/monelieLogo.svg" className="w-3/4" alt="" />
            </div>
            <div className="flex flex-col bg-white justify-center items-center relative h-full lg:h-screen w-full">
              <div className="flex flex-row px-10 bg-[url(/mainWork/monelie/assetMonelieBackdrop.png)] bg-cover  w-full h-[40vh] lg:h-full">
                <div className="basis-1/6 h-full flex items-center"><img src="/mainWork/monelie/monelieAsset1.svg" className="w-[75%]" alt="" /></div>
                <div className="basis-1/6 h-full flex items-center mt-10 lg:mt-20"><img src="/mainWork/monelie/monelieAsset2.svg" className="w-[75%]" alt="" /></div>
                <div className="basis-1/6 h-full flex items-center"><img src="/mainWork/monelie/monelieAsset3.svg" className="w-[75%]" alt="" /></div>
                <div className="basis-1/6 h-full flex items-center mt-10 lg:mt-20"><img src="/mainWork/monelie/monelieAsset4.svg" className="w-[75%]" alt="" /></div>
                <div className="basis-1/6 h-full flex items-center"><img src="/mainWork/monelie/monelieAsset5.svg" className="w-[75%]" alt="" /></div>
                <div className="basis-1/6 h-full flex items-center mt-10 lg:mt-20"><img src="/mainWork/monelie/monelieAsset6.svg" className="w-[75%]" alt="" /></div>
              </div>
              <div className="w-full h-[100px] lg:h-[50vh] flex">
                <div className="bg-[#82c1b9] basis-1/5 h-full flex justify-center items-center"><p className='lg:text-2xl text-[#503117] items-center'>#82c1b9</p></div>
                <div className="bg-[#c8e8e5] basis-1/5 h-full flex justify-center items-center"><p className='lg:text-2xl text-[#503117] items-center'>#c8e8e5</p></div>
                <div className="bg-[#f2f9fa] basis-1/5 h-full flex justify-center items-center"><p className='lg:text-2xl text-[#503117] items-center'>#f2f9fa</p></div>
                <div className="bg-[#fad2de] basis-1/5 h-full flex justify-center items-center"><p className='lg:text-2xl text-[#503117] items-center'>#fad2de</p></div>
                <div className="bg-[#f3a3bf] basis-1/5 h-full flex justify-center items-center"><p className='lg:text-2xl text-[#503117] items-center'>#f3a3bf</p></div>
              </div>
            </div>
            <div className="flex relative flex-col h-[40vh] lg:h-screen bg-white overflow-hidden">
              <div className="bg-[#fad2de]/25 h-[50vh] w-full blur-md absolute bottom-0"></div>
              <img src="/mainWork/monelie/monelieBanners.png" className="w-[60%] absolute top-[50%] translate-y-[-50%] left-25" alt="" />
              <img src="/mainWork/monelie/bgMonelieBanner.png" className="w-screen h-full absolute top-0  left-0" alt="" />
              <img src="/mainWork/monelie/cornerAssetMonelie.svg" className="w-[25%] h-auto absolute top-0 right-0" alt="" />
              <img src="/mainWork/monelie/bottomCornerMonelie.svg" alt="" className="w-[20%] absolute bottom-[-5%] right-[-5%]" />
            </div>
            <div className="flex flex-col justify-center items-center h-[40vh] lg:h-screen ">
              <img src="/mainWork/monelie/monelieStand.png" className="w-[50%]" alt="" />
            </div>
    </div>
  )
}


