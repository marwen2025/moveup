"use client"

import Image from "next/image";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer"

import { useState } from "react"
function Collection() {
    const [currentIndex, setCurrentIndex] = useState(3)

    const images = [
        "/NFT1.png",
        "/NFT2.png",
        "/NFT6.png",
        "/NFT4.png",
        "/NFT5.png",
        "/NFT7.png",

    ]
    return (
        <div className="text-white h-screen">
            <div className="bg-cover h-full bg-center" style={{ backgroundImage: 'url("/bg-6.png")' }}>
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

                <div className="z-10 text-center  gap-4 relative  mx-auto place-items-center pb-56">

                    <h3 className="py-2 pb-12 px-4 text-5xl font-bold text-left tracking-widest text-white mr-8">
                        My Collection
                    </h3>
                    <div className="w-2/6">
                        <div className="relative w-full max-w-md mx-auto">
                            {/* Search Icon */}
                            <span className="absolute z-20 inset-y-0 left-2 flex items-center text-white">
                                <Image
                                    src="/searchIcon.svg"
                                    alt="Profile Picture"
                                    width={24}
                                    height={36}
                                    className="rounded-2xl opacity-50"
                                />
                            </span>
                            {/* Search Input */}
                            <input
                                type="text"
                                placeholder="Search by # or Description"
                                className="backdrop-blur-md bg-white/10 placeholder-white pl-10 pr-4 py-2  shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent w-full"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="relative inset-0 opacity-30">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,0,200,0.5),transparent_80%)]" />
                            <div className="absolute w-full h-32 bottom-0">
                                {[...Array(5)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="absolute bottom-0 left-0 right-0 h-12 bg-purple-500/20"
                                        style={{
                                            animation: `wave ${12 + i * 0.5}s ease-in-out infinite`,
                                            animationDelay: `${i * 0.1}s`,
                                            transform: 'translateY(100%)',
                                        }}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Image slider */}
                        <div className="relative h-[300px] flex items-center justify-center">


                            <div className="flex items-center justify-center gap-4 px-16">
                                {images.map((src, index) => {
                                    const position = index - currentIndex;
                                    return (
                                        <div
                                            key={index}
                                            className="absolute transition-all duration-300 ease-out cursor-pointer"
                                            style={{
                                                transform: `translateX(${position * 120}%) scale(${position === 0 ? 1 : 0.7
                                                    }) perspective(1000px) rotateY(${position * 5}deg)`,
                                                zIndex: position === 0 ? 10 : 5,
                                                opacity: Math.abs(position) >= 3 ? 0 : 1,
                                            }}
                                            onClick={() => setCurrentIndex(index)}
                                        >
                                            <img
                                                src={src}
                                                alt={`Slide ${index + 1}`}
                                                className="w-full h-[200px] rounded-2xl object-cover shadow-xl"
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>


                    </div>
                    <div className="flex flex-row justify-between space-x-6">
                        <a
                            href="/moveup/nft/create"
                            className="flex-1 bg-gray-900 hover:bg-pink-700 text-white rounded-xl text-center p-12"
                        >
                            <p className="text-xl font-bold mb-2">Create</p>
                        </a>
                        <a
                            href="/moveup/nft/collection"
                            className="flex-1 bg-pink-700 hover:bg-pink-700 text-white rounded-xl text-center p-12"
                        >
                            <p className="text-xl font-bold mb-2">Collection</p>
                        </a>
                        <a
                            href="/moveup/nft/ranking"
                            className="flex-1 bg-gray-900 hover:bg-pink-700 text-white rounded-xl text-center p-12"
                        >
                            <p className="text-xl font-bold mb-2">Ranking</p>
                        </a>
                    </div>
                    <div className=" pt-8">
                        <div className="bg-black bg-opacity-70 px-16 py-4 rounded-full p-2">

                            <div className="flex flex-row space-x-14 justify-between">
                                <Image
                                    src="/home.svg"
                                    alt="Profile Picture"
                                    width={50}
                                    height={50}
                                    className="rounded-2xl opacity-50"
                                />
                                <Image
                                    src="/performance.svg"
                                    alt="Profile Picture"
                                    width={50}
                                    height={50}
                                    className="rounded-2xl opacity-50"
                                />
                                <Image
                                    src="/wallet.svg"
                                    alt="Profile Picture"
                                    width={50}
                                    height={50}
                                    className="rounded-2xl opacity-50"
                                />
                                <Image
                                    src="/nft.svg"
                                    alt="Profile Picture"
                                    width={50}
                                    height={50}
                                    className="rounded-2xl "
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}

export default Collection;
