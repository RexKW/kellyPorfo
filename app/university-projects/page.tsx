'use client'

import Image from "next/image";
import ArtaWork from "../../components/past-work/artaWork";
import Nezma from "../../components/past-work/nezma";
import { useState } from "react";
import Navbar from "@/components/home/navbar";
import ChupaChupz from "@/components/university-work/chupaChups";
import AhPek from "@/components/university-work/ahpek";


export default function PastWork() {
  const [page, setPage] = useState(0)

  const nextPage = () => {
    var newPage = page + 1;

    if (newPage > 2) {
      newPage = 2
    }

    setPage(newPage)

  }

  const prevPage = () => {
    var newPage = page - 1;

    if (newPage < 0) {
      newPage = 0
    }

    setPage(newPage)

  }

  return (
    <div className="flex flex-col items-center bg-white relative">
      <Navbar />
      {page != 0 &&
        <button onClick={prevPage} className="fixed w-20 h-20 bottom-5 left-5 rounded-full justify-center flex items-center bg-red-400 z-10">
          <p className="text-xl scale-x-[-1] text-red-800">&gt;</p>
        </button>
      }
      {
        page != 2 &&
        <button onClick={nextPage} className="fixed w-20 h-20 bottom-5 right-5 rounded-full justify-center flex items-center bg-red-400 z-10">
          <p className="text-xl  text-red-800">&gt; </p>
        </button>
      }

      {
        page == 0 &&
        <ChupaChupz />
      }

      {
        page == 1 &&
        <AhPek />
      }

      {
        page == 2 &&
        <Nezma />
      }


    </div>
  )
}

