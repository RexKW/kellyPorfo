import Image from "next/image";
import Link from "next/link";


export default function Projects() {
    return (
        <div className="flex bg-white relative z-0 items-center justify-center h-full flex-col h-[400px] lg:min-h-screen">
            <div className="border-2 border-[#9f1d21] absolute top-5 rounded-2xl px-5 md:px-10 py-2 text-lg md:text-xl text-[#9f1d21]">
                <p>Projects</p>
            </div>
            <div className="flex flex-col py-30 px-10 md:px-5 md:flex-row gap-5 justify-center items-start w-full h-full">
                <div className="flex flex-col justify-start">
                    <Link href={'/main-work'}>
                        <Image alt="" width={500} height={300} src={'/home/mainWorkCover.png'} className="hover:scale-[105%] animate transition duration-200 hover:rotate-[5deg]"/>
                        <p className=" text-2xl text-center md:text-4xl font-bold text-[#9f1d21]">Main Work</p>
                    </Link>
                </div>
                <div className="flex flex-col justify-start">
                    <Link href={'/past-work'}>
                        <Image alt="" width={500} height={300} src={'/home/pastWorkCover.png'} className="hover:scale-[105%] animate transition duration-200 hover:rotate-[-5deg]" />
                        <p className=" text-2xl text-center md:text-4xl font-bold text-[#9f1d21]">Past Work</p>
                    </Link>
                </div>
                <div className="flex flex-col justify-start">
                    <Link href={'/university-projects'}>
                        <Image alt="" width={500} height={300} src={'/home/univWorkCover.png'} className="hover:scale-[105%] animate transition duration-200 hover:rotate-[5deg]" />
                        <p className=" text-2xl text-center md:text-4xl font-bold text-[#9f1d21]">University <br />Projects</p>
                    </Link>
                </div>
            </div>

        </div>
    )
}

