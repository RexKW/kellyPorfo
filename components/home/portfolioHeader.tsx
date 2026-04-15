import Image from 'next/image'
import React from 'react'
import Navbar from './navbar'

export default function PortfolioHeader() {
  return (
      <div className="flex z-2 h-[350px]  md:h-[800px] lg:min-h-[130vh] bg-white bg-cover bg-center bg-no-repeat bg-[url(/home/homeBG.png)] relative items-center justify-center overflow-hidden">
        <Image src={'/home/fruits.png'} alt="fruit" className="fruits absolute z-4 left-[5%] top-[25%] lg:top-[20%] lg:left-[8%] w-[75px] lg:w-[300px]" width={300} height={300} />
        <Image src={'/home/clover.png'} alt="clover" className="clover absolute z-2 left-[-10%] lg:left-[-5%] w-[150px] lg:w-[450px] top-[-5%] lg:top-[-10%]" width={500} height={500} />
        <Image src={'/home/fish.png'} alt="fish" className="fish absolute z-3 rotate-30 right-[-35%] lg:rotate-0 bottom-0 w-[325px] lg:w-[750px] lg:right-0 lg:bottom-[10%] " width={750} height={750} />
        <Image src={'/home/tape.png'} alt="tape" className="absolute z-1 right-[-5%] lg:right-0 top-[15%] lg:top-[25%]  w-[60px] lg:w-[120px]" width={120} height={120} />
        <Image src={'/home/graphicDesignStar.svg'} alt="starGraphDes" className="graphDesStar absolute z-2 left-[-10%] lg:left-[-5%] bottom-[0%] w-[150px] lg:w-[600px] lg:bottom-[4%]" width={600} height={600} />
        <Image src={'/home/starAsset.png'} alt="star" className="star absolute z-1 right-[-10%] lg:right-0 top-[-10%] lg:top-[-25%]  w-[200px] lg:w-[600px]" width={600} height={600} />
        <img src={'/home/thePortfolioAsset.png'} alt="portfo" className="portfolio top-[25%] lg:top-[10%] absolute z-3 w-[70vw] lg:w-[900px] h-auto" />
        <div className="w-[15vw]  h-[120vh] bg-[#9f1d21] absolute top-0 left-0">
        </div>
        <div className="w-[15vw]  h-[120vh] bg-[#9f1d21] absolute top-0 right-0">
        </div>
        <div className="bg-linear-to-b from-[#9f1d21] z-0 absolute bottom-[-2%] from-40% to-[75%] w-full h-[75px] lg:h-[25vh] to-white">

        </div>
      </div>
  )
}

