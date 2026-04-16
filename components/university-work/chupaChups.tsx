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
        <p className='font-bold text-center text-base lg:text-3xl text-[#432565]'>Poster hard-selling dirancang untuk secara langsung membujuk audiens agar segera mengambil tindakan, seperti membeli produk. Dalam kasus Sparkling Chupa Chups, poster harus berfokus pada dampak visual yang kuat, pesan yang jelas, serta ajakan bertindak CTA (call to action) yang mendesak.
          <br/><br/>
          Elemen visual harus tegas dan menarik perhatian. Karena Sparkling Chupa Chups adalah minuman yang fun, berwarna cerah, dan menyegarkan, poster sebaiknya menggunakan warna-warna terang, percikan dinamis, serta gambar minuman dengan efek berkilau. Produk harus menjadi fokus utama, ditempatkan secara menonjol agar langsung dikenali oleh audiens.</p>
      </div>
      <div className="flex flex-col justify-center bg-contain bg-center lg:overflow-hidden  items-center relative h-full lg:h-screen w-full">
        <img src="/universityWork/chups/chupaChupsBG.jpg" className='w-full h-auto relative z-0' alt="" />
        <p className='bottom-0 right-0 absolute z-2 text-[#432565] text-4xl lg:text-6xl font-bold'>POSTER<br />MOCK UP</p>
      </div>
      <div className='flex relative flex-row  justify-between px-10 lg:px-60 items-center relative h-[75vh] py-10 lg:h-[150vh] w-full  bg-linear-to-r from-[#e2b6f1] via-[#faffa5] via-[#facbbf] via-[#faffa5] to-[#e2b6f1]'>
        <p className='top-1/4 left-[-5%] lg:left-0 absolute z-2 text-[#432565] text-3xl rotate-[270deg] lg:text-6xl font-bold'>POSTER<br />DESIGN</p>
        <img src="/universityWork/chups/posterchupaChups.png" className='w-[70%] top-1/6 h-auto lg:h-[75%] lg:w-auto right-2 lg:right-10 absolute' alt="" />
      </div>
    </div>
  )
}
