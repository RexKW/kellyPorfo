import Image from 'next/image'
import React from 'react'

export default function AhPek() {
    return (
        <div className='flex flex-col overflow-x-hidden bg-[#fefaee] relative'>
            {/*gradient backdrop*/}


            {/* content */}
            <div className="flex flex-col justify-center h-[40vh] lg:h-screen items-center relative">
                <Image width={1200} height={600} src={'/universityWork/ahPek/ahPekLogo.svg'} alt="" className="w-[50%] lg:w-[25%]" />

            </div>
            <div className="flex flex-col justify-center h-[40vh] lg:h-screen items-center relative">
                <Image width={1200} height={600} src={'/universityWork/ahPek/ahPekDecoratedLogo.svg'} alt="" className="w-[60%] lg:w-[45%]" />

            </div>
            <div className='flex flex-col justify-center items-center p-10 lg:p-20 lg:px-50 h-content lg:h-screen w-full relative'>
                <div className='bg-white rounded-xl relative w-full justify-center flex flex-col items-center h-content p-5 lg:p-10 pb-10 lg:pb-20 border-[#9d1d20] border-4 lg:border-2 border-dashed'>
                    <p className='text-xl lg:text-4xl text-center text-[#225244] font-bold'>Applied on Typography</p>
                    <p className='text-[#225244] pt-10 text-sm lg:text-2xl text-center font-medium'>Konsep tipografi untuk tema AHPEK Paddle Club menggabungkan
                        nuansa yang playful (ceria) yang mencerminkan semangat santai dan
                        menyenangkan dari komunitas olahraga paddle. Desain ini tetap
                        mempertahankan ciri khas AHPEK yang retro-modern, diperkaya
                        dengan palet warna yang selaras dengan brand, serta menampilkan
                        elemen pop-up yang menarik secara visual.
                        <br /><br />
                        Tipografi yang diterapkan telah diaplikasikan ke berbagai
                        jenis merchandise paddle agar lebih sesuai dan dekat dengan
                        komunitas paddle.z</p>
                </div>
            </div>


            <div className="flex flex-col bg-[#225244] justify-center px-10 lg:px-60 items-center relative py-10 h-[40vh] lg:py-5 lg:h-[90vh] w-full">
                <p className='text-4xl font-bold text-white'>Mock Up Baju</p>
                <div className='flex w-full h-[80%] justify-center items-center gap-30 px-40'>
                    <img src="/universityWork/ahPek/mockupShirtAhPekFront.png" className='w-[60%]' alt="" />
                    <img src="/universityWork/ahPek/mockupShirtAhPekFront.png" className='w-[60%]' alt="" />
                </div>
            </div>
            <div className="flex flex-col bg-[#225244] mt-[-1%] justify-start px-10 lg:px-60 items-center relative py-5 h-[40vh] lg:py-5 lg:h-content w-full">
                <p className='text-4xl font-bold text-white'>Mock Up Merchandise</p>
                <div className='flex flex-row items-center'>
                    <div className='flex flex-col gap-5 py-10'>
                        <img src="/universityWork/ahPek/ahPekCard.svg" className='w-[80%] ' alt="" />
                        <img src="/universityWork/ahPek/ahPekCap.svg" className='w-[80%] ' alt="" />
                    </div>
                    <img src="/universityWork/ahPek/ahPekBottle.svg" alt="" className='w-[25%]' />
                    <img src="/universityWork/ahPek/ahPekCup.svg" alt="" className='w-auto h-[50%]' />
                </div>

            </div>
            <div className="flex flex-row justify-center bg-contain bg-center lg:overflow-hidden  items-center relative h-full lg:h-screen w-full">
                <img src="/universityWork/chups/chupaChupsBG.jpg" className=' flex h-auto ' alt="" />
                <img src="/universityWork/chups/chupaChupsBG.jpg" className=' flex h-auto ' alt="" />
                <img src="/universityWork/chups/chupaChupsBG.jpg" className=' flex h-auto ' alt="" />
            </div>
        </div>
    )
}
