'use client'

import Image from "next/image";
import ArtaWork from "../../components/past-work/artaWork";
import Nezma from "../../components/past-work/nezma";
import { useState } from "react";
import Navbar from "@/components/home/navbar";


export default function PastWork() {
  const [page, setPage] = useState(0)

  const nextPage = () => {
    var newPage = page + 1;

    if (newPage > 1) {
      newPage = 1
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
    <div className="flex flex-col items-center lg:items-start bg-white relative">
      <Navbar />
      {page != 0 &&
        <button onClick={prevPage} className="fixed w-20 h-20 bottom-5 left-5 rounded-full justify-center flex items-center bg-red-400 z-10">
          <p className="text-xl scale-x-[-1] text-red-800">&gt;</p>
        </button>
      }
      {
        page != 1 &&
        <button onClick={nextPage} className="fixed w-20 h-20 bottom-5 right-5 rounded-full justify-center flex items-center bg-red-400 z-10">
          <p className="text-xl  text-red-800">&gt; </p>
        </button>
      }

      {
        page == 0 &&
        <ArtaWork />
      }

      {
        page == 1 &&
        <Nezma />
      }


    </div>
  )
}

