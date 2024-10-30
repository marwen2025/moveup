"use client"
import Image from "next/image";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";

function MoveUpWallet() {
    return (
        <div className="text-white">
            <div className="bg-cover " style={{ backgroundImage: 'url("/walletbg.png")' }}>
                <NavBar />
                <div className="z-10 text-center  gap-4 relative  mx-auto place-items-center py-16 pb-56">

                    <div>
                        <h2 className="text-4xl pb-8 font-bold ">My Wallet</h2>
                        <div className="bg-black bg-opacity-30 border-none w-96 mb-4 ">
                            <div className="py-2">
                            </div>
                            <div className=" bg-black bg-opacity-60 text-3xl mt-8  w-full">
                                <h3 className=" place-self-start pl-8 py-2">
                                    102 Points
                                </h3>
                            </div>

                            <h1 className=" place-self-start pl-14 pt-4">
                                Peakchain Wallet
                            </h1>
                            <h1 className="place-self-start pl-14">0xln65ksua100nxgallA9ydkxjq...</h1>
                            <Image
                                src="/logo-06.png"
                                alt="Profile Picture"
                                width={80}
                                height={80}
                                className="place-self-end mx-4">

                            </Image>
                        </div>


                    </div>

                    <div className="w-full  bg-black opacity-75">
                        <Image
                            src="/banner.png"
                            alt="Profile Picture"
                            width={600}
                            height={80}
                            className=" place-self-center py-4">

                        </Image>
                    </div>
                    <div className="bg-black w-1/3 border-none  mb-4 mt-12 rounded-3xl">
                            <div className="pt-8 place-self-center ">
                                Last Transactions
                            </div>
                            <div className="bg-stone-800 py-6 text-3xl mt-8 border-l-8 border-gray-300 flex flex-row space-x-14 items-center justify-between pr-8">
                            <div>
                            <Image
                            src="/User.png"
                            alt="Profile Picture"
                            width={80}
                            height={80}
                            className=" rounded-full mx-4">
                            </Image>
                            </div>
                            <div className="flex-row text-sm">
                                <p className="font-bold">
                                    Username
                                </p>
                                <p className="text-gray-400">
                                    Username
                                </p>
                            </div>
                            <div className=" text-xs">
                            <p className="font-bold">
                                    + 35 Points
                                </p>
                            </div>
                            <div className=" text-xs">
                            <p className="font-bold">
                                    BlockChain Logo
                                </p>
                            </div>
                            </div>
                            <div className="py-8">
                                </div>                         
                        </div>
                    <div className=" pt-8">
                        <div className="bg-black bg-opacity-70 px-16 py-4 rounded-full p-2">

                        <div className="flex flex-row space-x-14 justify-between">
                                <a href="/moveup/">
                                    <Image
                                    src="/home.svg"
                                    alt="Profile Picture"
                                    width={50}
                                    height={50}
                                    className="rounded-2xl opacity-50"
                                /></a>
                                <a href="/moveup/performance">
                                <Image
                                    src="/performance.svg"
                                    alt="Profile Picture"
                                    width={50}
                                    height={50}
                                    className="rounded-2xl opacity-50"
                                />
                                </a>
                                <a className="place-self-center" href="/moveup/wallet">
                                <Image
                                    src="/wallet.svg"
                                    alt="Profile Picture"
                                    width={50}
                                    height={50}
                                    className="rounded-2xl "
                                />
                                </a>
                                <a href="/moveup/nft" className="place-self-center"><Image
                                    src="/nft.svg"
                                    alt="Profile Picture"
                                    width={80}
                                    height={80}
                                    className=" opacity-50 "
                                /></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}

export default MoveUpWallet;
