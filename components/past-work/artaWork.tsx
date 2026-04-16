import Image from 'next/image'
import React from 'react'

export default function ArtaWork() {
  return (
    <div className='flex flex-col bg-white relative'>


      <div className="flex flex-col bg-[#0b4e96] justify-center items-center relative h-[40vh] lg:h-screen w-full">
        <img src="/pastWork/artaMedia/ArtaLogo.svg" className="w-3/4" alt="" />
      </div>


      <div className="flex flex-col justify-center bg-white items-center relative">
        <div className="bg-linear-to-b from-[#0b4e96] absolute z-2 top-0 to-transparent h-[25%] w-full">
        </div>

        <div className="flex-flex-col justify-center items-center relative z-1">
          <Image width={1200} height={600} src={'/pastWork/artaMedia/artaHeader.png'} alt="" className="w-screen h-auto" />
          <div className="bg-white w-full h-full lg:h-[50vh] justify-center items-center relative">
            <p className="text-center text-[#0b4e96] py-10 text-xl z-2 px-5 lg:px-10">Arta Media Tama adalah pabrik percetakan dengan branding
              minimalist dan elegan . Arta Media Tama masih tidak mempunyai
              visual identitas ataupun komunikasi branding untuk digital marketing di sosial media. Maka dari itu saya menggabungkan konsep minimalis dan sentuhan pop up yang berwarna namun tidak meninggalkan jejak elegan dari Arta Media Tama</p>
          </div>
        </div>
      </div>
      <div className="flex relative flex-col h-[30vh] lg:h-screen bg-white overflow-hidden">
        <Image width={1200} height={600} src="/pastWork/artaMedia/artaPosts.png" className='w-auto h-full' alt="" />
      </div>
      <div className="flex relative flex-col h-[40vh] lg:h-screen bg-white overflow-hidden">
        <Image width={600} height={600} src="/pastWork/artaMedia/artaPromo.png" className='w-auto h-full absolute translate-x-[35%] lg:translate-x-[0] right-0 bottom-0' alt="" />
        <Image width={500} height={500} src="/pastWork/artaMedia/artaPhone.png" className='w-auto h-[78%] absolute left-[25%] translate-x-[-50%] top-[50%] translate-y-[-50%]' alt="" />
        <Image width={1200} height={600} src="/pastWork/artaMedia/artaContentBG.png" className='w-full h-full' alt="" />
      </div>
      <div className='flex flex-row w-full h-[30vh] lg:h-screen'>
        <div className='flex bg-[#073ab0] justify-center basis-1/4 items-end'>
          <p className='text-white p-2 lg:p-10 lg:text-2xl'>#073AB0</p>
        </div>
        <div className='flex bg-[#0249CF] justify-center basis-1/4 items-end'>
          <p className='text-white p-2 lg:p-10 lg:text-2xl'>#0249CF</p>
        </div>
        <div className='flex bg-[#34A3DB] justify-center basis-1/4 items-end'>
          <p className='text-white p-2 lg:p-10 lg:text-2xl'>#34A3DB</p>
        </div>
        <div className='flex bg-[#FFFFFF] justify-center basis-1/4 items-end'>
          <p className='text-black p-2 lg:p-10 lg:text-2xl'>#FFFFFF</p>
        </div>
      </div>
    </div>
  )
}


