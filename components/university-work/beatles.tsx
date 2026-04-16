import Image from 'next/image'
import React from 'react'

export default function Beattles() {
    return (
        <div className='flex flex-col overflow-x-hidden w-full bg-[#e92c24] relative'>
            <div className="flex flex-col justify-center h-[40vh] bg-[#e92c24] lg:h-screen w-full items-center relative">
                <Image width={1200} height={600} src={'/universityWork/beatles/theBeatles.svg'} alt="" className="w-[30%] lg:w-[45%]" />
                <Image width={1200} height={600} src={'/universityWork/beatles/borderMiddleBeatles.svg'} alt="" className=" absolute right-5 w-[10%]" />
                <Image width={1200} height={600} src={'/universityWork/beatles/borderMiddleBeatles.svg'} alt="" className=" absolute left-5 scale-x-[-1] w-[10%]" />
                <Image width={1200} height={600} src={'/universityWork/beatles/cornerBeatles.svg'} alt="" className="absolute right-5 top-5 w-[5%]" />
                <Image width={1200} height={600} src={'/universityWork/beatles/cornerBeatles.svg'} alt="" className="absolute left-5 top-5 scale-x-[-1] w-[5%]" />
                <Image width={1200} height={600} src={'/universityWork/beatles/cornerBeatles.svg'} alt="" className="absolute bottom-5 right-5 scale-y-[-1] w-[5%]" />
                <Image width={1200} height={600} src={'/universityWork/beatles/cornerBeatles.svg'} alt="" className="absolute bottom-5 left-5 scale-x-[-1] scale-y-[-1] w-[5%]" />

            </div>
            <div className="flex flex-col bg-[url(/universityWork/beatles/skyBGBeatle.jpg)] bg-cover bg-center justify-center h-full py-10 px-5 lg:px-60  items-center relative">
                <Image width={1200} height={600} src={'/universityWork/beatles/beatleBanner.svg'} alt="" className="w-[40%] lg:w-[70%]" />
                <p className='text-[#e92c24] text-center text-sm lg:text-2xl mt-5 lg:mt-10'>
                    Konsep yang ditampilkan dalam Sgt. Pepper’s Lonely Hearts Club Band
                    menggabungkan elemen imajinatif dengan nuansa nostalgia. Album ini sangat
                    erat kaitannya dengan tema karnaval, parade, dan taman bunga, yang
                    bersama-sama merepresentasikan sebuah dunia yang penuh kreativitas
                    serta kenangan akan perayaan di masa lalu.Suasana nostalgia ini dapat
                    diekspresikan secara visual melalui penggunaan tenda karnaval sebagai
                    latar belakang.<br /><br />
                    Sama seperti suasana yang disampaikan melalui lagu-lagu dalam
                    Sgt. Pepper’s Lonely Hearts Club Band, album ini mencerminkan
                    era psikedelik—sebuah masa yang penuh kebebasan dan imajinasi
                    tanpa batas yang ingin dibagikan The Beatles kepada para penggemarnya.
                    Album ini juga merepresentasikan bagian penting dari perjalanan mereka saat
                    beralih ke dalam gerakan psikedelik
                </p>
            </div>
            <div className='flex flex-col justify-center items-center  h-content lg:h-screen w-full relative'>
                <img src="/universityWork/beatles/peopleBGBeatles.png" className='w-full h-full relative z-0' alt="" />
                <Image width={1200} height={600} src={'/universityWork/beatles/sgtPepperBeattles.svg'} alt="" className="w-[30%] lg:w-[45%] absolute z-1 top-[50%] translate-y-[-50%]" />

            </div>

            <div className="flex flex-row justify-center px-5 lg:px-20 gap-5 py-10 h-[250px] md:h-[40vh] bg-[#e92c24] lg:h-screen items-center relative">
                <div className='flex flex-col gap-1 w-[33%] justify-center items-center h-full'>
                    <Image width={1200} height={600} src={'/universityWork/beatles/photo1Beatles.jpg'} alt="" className="w-full h-full" />
                    <Image width={1200} height={600} src={'/universityWork/beatles/photo2Beatles.jpg'} alt="" className="w-full h-full" />
                </div>

                <Image width={1200} height={600} src={'/universityWork/beatles/photo3Beatles.jpg'} alt="" className="h-full w-[33%]" />
                <Image width={1200} height={600} src={'/universityWork/beatles/photo4Beatles.jpg'} alt="" className="h-full w-[33%]" />


            </div>
            <div className="flex flex-col bg-[url(/universityWork/beatles/skyBGBeatle.jpg)] bg-cover bg-center justify-center h-[40vh] px-60 lg:h-screen items-center relative">
                <Image width={1200} height={600} src={'/universityWork/beatles/asset1Beatles.png'} alt="" className="w-[25%] absolute top-5 left-5" />
                <Image width={1200} height={600} src={'/universityWork/beatles/asset2Beatles.png'} alt="" className="w-[20%] absolute bottom-5 left-5 lg:left-30" />
                <Image width={1200} height={600} src={'/universityWork/beatles/asset3Beatles.png'} alt="" className="w-[15%] absolute bottom-5 lg:bottom-20 left-[35%]" />
                <Image width={1200} height={600} src={'/universityWork/beatles/asset4Beatles.png'} alt="" className="w-[20%] absolute top-5 lg:top-20 left-[35%]" />
                <Image width={1200} height={600} src={'/universityWork/beatles/asset5Beatles.png'} alt="" className="w-[25%] lg:w-[35%] absolute top-5 lg:top-20 right-25 lg:right-5" />
                <Image width={1200} height={600} src={'/universityWork/beatles/asset6Beatles.png'} alt="" className="w-[20%] absolute bottom-5 right-30 lg:right-[15%]" />
            </div>
        </div>
    )
}
