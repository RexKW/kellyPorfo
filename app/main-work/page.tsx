import Image from "next/image";


export default function MainWork() {
  return (
    <div className="flex flex-col bg-white relative">
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
        <img src="/mainWork/monelieLogo.svg" className="w-3/4" alt="" />
      </div>
      <div className="flex flex-col bg-white justify-center items-center relative h-[200px] lg:h-screen w-full">
        <div className="flex flex-row px-10  w-full h-[100px] lg:h-full">
          <div className="basis-1/6 h-full flex items-start"><img src="/mainWork/monelie/monelieAsset1.svg" className="w-[75%]" alt="" /></div>
          <div className="basis-1/6 h-full flex items-end"><img src="/mainWork/monelie/monelieAsset2.svg" className="w-[75%]" alt="" /></div>
          <div className="basis-1/6 h-full flex items-start"><img src="/mainWork/monelie/monelieAsset3.svg" className="w-[75%]" alt="" /></div>
          <div className="basis-1/6 h-full flex items-end"><img src="/mainWork/monelie/monelieAsset4.svg" className="w-[75%]" alt="" /></div>
          <div className="basis-1/6 h-full flex items-start"><img src="/mainWork/monelie/monelieAsset5.svg" className="w-[75%]" alt="" /></div>
          <div className="basis-1/6 h-full flex items-end"><img src="/mainWork/monelie/monelieAsset6.svg" className="w-[75%]" alt="" /></div>
        </div>
        <div className="w-full h-[100px] lg:h-[50vh] flex">
          <div className="bg-[#82c1b9] basis-1/5 h-full"></div>
          <div className="bg-[#c8e8e5] basis-1/5 h-full"></div>
          <div className="bg-[#f2f9fa] basis-1/5 h-full"></div>
          <div className="bg-[#fad2de] basis-1/5 h-full"></div>
          <div className="bg-[#f3a3bf] basis-1/5 h-full"></div>
        </div>
      </div>
      <div className="flex relative flex-col h-screen bg-white overflow-hidden">
        <div className="bg-[#fad2de]/25 h-[50vh] w-full blur-md absolute bottom-0"></div>
        <img src="/mainWork/monelie/monelieBanners.png" className="w-[60%] absolute top-[50%] translate-y-[-50%] left-25" alt="" />
        <img src="/mainWork/monelie/bgMonelieBanner.png" className="w-screen h-full absolute top-0  left-0" alt="" />
        <img src="/mainWork/monelie/cornerAssetMonelie.svg" className="w-[25%] h-auto absolute top-0 right-0" alt="" />
        <img src="/mainWork/monelie/bottomCornerMonelie.svg" alt="" className="w-[20%] absolute bottom-[-5%] right-[-5%]" />
      </div>
      <div className="flex flex-col justify-center items-center h-screen">
        <img src="/mainWork/monelie/monelieStand.png" className="w-[50%]" alt="" />
      </div>
      <div className="flex-flex-col overflow-hidden justify-center items-center relative z-1">
        <Image width={1200} height={600} src={'/mainWork/bakery/JoBakeryBG.png'} alt="" className="w-screen h-auto" />
        <div className="bg-white w-full h-[45vh] lg:h-[50vh] justify-center items-center relative">
          <img src="/mainWork/bakery/joBakeryLogo.svg" className="absolute left-[50%] translate-x-[-50%] z-2 w-[20%] translate-y-[-75%]" alt="" />
          <p className="text-start text-[#523114] top-10 w-[50%] lg:top-[25%] absolute text-2xl z-2 px-5 lg:px-10">Jonathan's Bakery adalah toko roti asal NTT
            design ini dibuat berdasarkan pengembangan
            konsep dari Jonathan's Bakery dengan menambahkan
            sentuhan parisian bakery. Rebranding ini bertujuan
            untuk meningkatkan standard di NTT</p>
            <img src="/mainWork/bakery/asset2Bakery.svg" className="w-60 bottom-0 right-0 absolute" alt="" />
          <img src="/mainWork/bakery/asset1Bakery.svg" className="w-50 bottom-[-5%] right-[-5%] absolute" alt="" />
        </div>
      </div>

    </div>
  )
}

