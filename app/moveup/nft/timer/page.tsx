"use client"

import Image from "next/image";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer"
import { useState } from "react";
function Timer() {
    const time ={
        hours: 0,
        minutes: 1,
        seconds: 27,
    }

    // Pad numbers with leading zeros
    const pad = (num: number, places: number) => String(num).padStart(places, '0')

    // Split number into individual digits
    const splitIntoDigits = (num: string) => num.split('')

    return (
        <div className="text-white h-screen">
            <div className="bg-cover h-full bg-center" style={{ backgroundImage: 'url("/bg-4.png")' }}>
                <NavBar />
                <div className="py-4 px-12  mr-8">
                    <h3 className="text-5xl font-bold text-white">
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


                <div className="z-10 text-center  gap-4 relative  mx-auto place-items-center py-16 pb-56">

                    <h3 className="py-4 px-4 text-5xl font-bold text-left tracking-widest pb-24 text-white mr-8">
                        Your NFT will be ready in
                    </h3>
                    <div className="flex gap-1 mb-6">
                        {/* Hours */}
                        {splitIntoDigits(pad(time.hours, 2)).map((digit, idx) => (
                            <div
                                key={`hours-${idx}`}
                                className="w-12 h-16 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg flex items-center justify-center text-4xl font-bold text-white border border-white border-opacity-20"
                            >
                                {digit}
                            </div>
                        ))}

                        <div className="text-white text-4xl self-center font-bold mx-1">:</div>

                        {/* Minutes */}
                        {splitIntoDigits(pad(time.minutes, 2)).map((digit, idx) => (
                            <div
                                key={`minutes-${idx}`}
                                className="w-12 h-16 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg flex items-center justify-center text-4xl font-bold text-white border border-white border-opacity-20"
                            >
                                {digit}
                            </div>
                        ))}

                        <div className="text-white text-4xl self-center font-bold mx-1">:</div>

                        {/* Seconds */}
                        {splitIntoDigits(pad(time.seconds, 2)).map((digit, idx) => (
                            <div
                                key={`seconds-${idx}`}
                                className="w-12 h-16 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg flex items-center justify-center text-4xl font-bold text-white border border-white border-opacity-20"
                            >
                                {digit}
                            </div>
                        ))}

                        
                    </div>

                    <a href="/moveup/nft/result" className="from-violet-700 backdrop-blur-sm to-pink-700 bg-gradient-to-r text-white font-bold my-8 px-16 py-4 rounded-full text-md">
                        GET NFT
                    </a>

                </div>

            </div>
            <Footer />
        </div>
    );
}

export default Timer;
