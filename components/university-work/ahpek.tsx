import Image from 'next/image'
import React from 'react'

export default function AhPek() {
    return (
        <div className='flex flex-col overflow-x-hidden bg-[#fefaee] relative'>
            <div className="flex flex-col justify-center h-[40vh] lg:h-screen items-center relative">
                <Image width={1200} height={600} src={'/universityWork/ahPek/ahPekLogo.svg'} alt="" className="w-[50%] lg:w-[25%]" />

            </div>
            <div className="flex flex-col justify-center h-[40vh] lg:h-screen items-center relative">
                <Image width={1200} height={600} src={'/universityWork/ahPek/ahPekDecoratedLogo.svg'} alt="" className="w-[75%] lg:w-[45%]" />

            </div>
            <div className='flex flex-col justify-center items-center p-5 lg:p-20 px-10 lg:px-50 h-content lg:h-screen w-full relative'>
                <div className='bg-white rounded-xl relative w-full justify-center flex flex-col items-center h-content p-2  lg:p-15 pb-10 lg:pb-20 border-[#9d1d20] border-4 lg:border-2 border-dashed'>
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

                         <img src="/universityWork/ahPek/ballAhpek.svg" className='w-[5%] left-[-3%] top-[10%] lg:top-[25%] absolute' alt="" /> 
                        <img src="/universityWork/ahPek/flowersAhpek.svg" className='w-[10%] absolute left-0 top-[-5%] lg:top-[-15%] rotate-[45deg]' alt="" />
                        <img src="/universityWork/ahPek/flowersAhpek.svg" className='w-[10%] right-[-5%] bottom-[-5%] absolute ' alt="" />
                        <img src="/universityWork/ahPek/ballAhpek.svg" className='w-[5%] right-0 lg:right-5 bottom-[10%] lg:bottom-[35%] absolute ' alt="" />
                        <img src="/universityWork/ahPek/racketAhpek.svg" className='w-[15%] right-[-12%] bottom-[15%] lg:top-[10%] absolute ' alt="" />
                </div>
                
                        <img src="/universityWork/ahPek/waveAhpek.svg" className='absolute bottom-0 left-0 w-[35%]' alt="" />
            </div>


            <div className="flex flex-col bg-[#225244] justify-center px-10 lg:px-60 items-center relative py-10 h-[40vh] md:h-[80vh] lg:py-5 lg:h-[90vh] w-full">
                <p className='text-xl lg:text-4xl font-bold text-white text-center'>Mock Up Baju</p>
                <div className='flex w-full h-[80%] justify-center items-center pt-10 lg:gap-30 lg:px-40'>
                    <img src="/universityWork/ahPek/mockupShirtAhPekFront.png" className='w-[60%] h-auto' alt="" />
                    <img src="/universityWork/ahPek/mockupShirtAhPekFront.png" className='w-[60%] h-auto' alt="" />
                </div>
            </div>
            <div className="flex flex-col bg-[#225244]  justify-start lg:px-60 items-center relative py-5 h-[40vh] lg:h-full w-full">
                <p className='text-xl lg:text-4xl font-bold text-white text-center'>Mock Up Merchandise</p>
                <div className='flex flex-row items-center gap-2 justify-center w-full h-full'>
                    <div className='flex flex-col w-[15%] items-center gap-2 lg:gap-5 lg:py-10'>
                        <img src="/universityWork/ahPek/ahPekCard.svg" className='h-[50%] w-auto ' alt="" />
                        <img src="/universityWork/ahPek/ahPekCap.svg" className='h-[50%] w-auto ' alt="" />
                    </div>
                    <img src="/universityWork/ahPek/ahPekBottle.svg" alt="" className='w-[10%] h-auto lg:w-[12%]' />
                    <img src="/universityWork/ahPek/ahPekCup.svg" alt="" className='w-[20%] h-auto' />
                    <img src="/universityWork/ahPek/ahPekTotebag.svg" alt="" className='w-[20%] lg:w-[25%]' />
                </div>

            </div>
            <div className="flex flex-row justify-center items-start relative h-[200px] lg:h-screen w-full">
                <img src="/universityWork/ahPek/ahPekImage1.jpg" className='w-[33%] lg:basis-1/3 h-full ' alt="" />
                <img src="/universityWork/ahPek/ahPekImage2.jpg" className='w-[33%] lg:basis-1/3  h-full ' alt="" />
                <img src="/universityWork/ahPek/ahPekImage3.jpg" className='w-[33%] lg:basis-1/3  h-full ' alt="" />
            </div>
        </div>
    )
}
