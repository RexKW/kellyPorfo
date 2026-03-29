import Image from "next/image";

export default function About() {
  return (
    <div className="flex min-h-screen relative items-center justify-center">
      <Image src={'/home/ThePortfolioAsset.svg'} alt="portfo" className="absolute z-2" width={900} height={900}/>
      <div className="w-[15vw]  h-screen bg-[#9f1d21] absolute left-0">
      </div>
      <div className="w-[15vw]  h-screen bg-[#9f1d21] absolute right-0">
      </div>
    </div>
  );
}