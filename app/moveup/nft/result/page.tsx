"use client"

import Image from "next/image";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer"
import { useState } from "react";
function Timer() {
    const [time, setTime] = useState({
        hours: 0,
        minutes: 1,
        seconds: 27,
    })

    // Pad numbers with leading zeros
    const pad = (num: number, places: number) => String(num).padStart(places, '0')

    // Split number into individual digits
    const splitIntoDigits = (num: string) => num.split('')

    return (
        <div className="text-white h-screen">
            <div className="bg-cover h-full bg-center" style={{ backgroundImage: 'url("/bg-5.png")' }}>
                <NavBar />
                <div className="py-4 px-12  mr-8">
                    <h3 className="text-5xl font-bold text-white ">
                        Username
                    </h3>
                    <div className="flex ">
                        <Image
                            src="/verified.png"
                            alt="Profile Picture"
                            width={24}
                            height={24}
                            className="rounded-2xl opacity-50"
                        />
                        <span className=" px-2 font-semibold text-blue-500 text-xl">
                            Verified
                        </span>
                    </div>
                </div>


                <div className="z-10 text-center gap-4 w-full h-full mx-auto place-items-center pb-56">


    <div className="relative mb-4">
        <Image
            src="/NFT.png"
            alt="NFT Image"
            width={400}
            height={240}
            className="rounded-2xl"
        />
        <div className="absolute bottom-0 px-4 w-full bg-opacity-50 text-white text-lg text-start backdrop-blur-md py-4 rounded-b-2xl">
            #12345
        </div>
    </div>


    <button className="from-violet-700 backdrop-blur-sm to-pink-700 bg-gradient-to-r w-80 text-white font-bold my-4 px-16 py-4 rounded-full text-md">
        SET AS AVATAR
    </button>
    <br />
    <button className="bg-black w-80 text-white font-bold my-4 px-16 py-4 rounded-full text-md">
        <a href="/moveup/nft/collection">GO TO COLLECTION</a>
    </button>
</div>

            </div>
            <Footer />
        </div>
    );
}

export default Timer;
