"use client"

import Image from "next/image";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer"

function Ranking() {
    const images = [
        '/NFT6.png',
        '/NFT2.png',
        '/NFT3.png',
        '/NFT4.png',
        '/NFT5.png', // Add more images if needed
    ];
    return (
        <div className="text-white h-screen">
            <div className="bg-cover h-full bg-center" style={{ backgroundImage: 'url("/bg-7.png")' }}>
                <NavBar />
                <div className="flex flex-row">
                    <div className="px-12 py-8">
                        <span className="text-3xl font-bold">TOP 1 </span> <span>this week</span>
                        <div className="relative mb-4 ">
                            <Image
                                src="/NFT.png"
                                alt="NFT Image"
                                width={200}
                                height={240}
                                className="rounded-2xl"
                            />
                            <div className="absolute bottom-0 px-4 w-[200px] bg-opacity-50 text-white text-lg text-start backdrop-blur-md py-4 justify-between flex rounded-b-2xl">
                                <p>#12345</p>
                                <p>1.2K</p>

                            </div>
                        </div>
                        <div className="pl-8 text-2xl font-bold">
                            Username
                        </div>
                    </div>
                    <div className="z-10 gap-4 mx-auto pb-16 pl-28">

                        <h3 className="py-2 pb-12 text-5xl font-bold text-left tracking-widest pt-8 text-white mr-8">
                            Ranking
                        </h3>
                        <div className="flex items-end overflow-x-auto space-x-4 px-4 bottom-0 py-6 scrollbar-hide">
                            {images.map((src, index) => (
                                <div key={index} className="flex w-1/4">
                                    <img
                                        src={src}
                                        alt={`Image ${index + 1}`}
                                        className={`object-cover rounded-lg shadow-lg ${index === 0 ? 'h-64' : 'h-48'} w-full`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="z-10 text-center  gap-4 relative  mx-auto place-items-center pb-56">

                    <div className="flex flex-row justify-between space-x-6">
                        <a
                            href="/moveup/nft/create"
                            className="flex-1 bg-gray-900 hover:bg-pink-700 text-white rounded-xl text-center p-12"
                        >
                            <p className="text-xl font-bold mb-2">Create</p>
                        </a>
                        <a
                            href="/moveup/nft/collection"
                            className="flex-1 bg-gray-900 hover:bg-pink-700 text-white rounded-xl text-center p-12"
                        >
                            <p className="text-xl font-bold mb-2">Collection</p>
                        </a>
                        <a
                            href="/moveup/nft/ranking"
                            className="flex-1 bg-pink-700 hover:bg-pink-700 text-white rounded-xl text-center p-12"
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

export default Ranking;
