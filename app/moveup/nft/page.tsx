import Image from "next/image";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer"
function Nft() {
    return (
        <div className="text-white h-screen">
            <div className="bg-cover h-full bg-center" style={{ backgroundImage: 'url("/bg-3.png")' }}>
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

                    <h3 className="py-4 px-4 text-5xl font-bold text-left tracking-widest text-white mr-8">
                        You Have 230/500
                    </h3>
                    <div className="bg-black bg-opacity-50 content-center h-16 rounded-full">
                        <span className=" text-xl px-12 py-4 bg-gradient-to-r from-violet-600 to-pink-700 rounded-full">
                            Get NFT
                        </span>
                        <span className="px-4 text-xl py-4">
                            500
                        </span>
                    </div>

                    <div className="flex flex-row justify-between py-12 space-x-6">
                        <a href="/moveup/nft/create" className="flex-1 bg-gray-900 hover:bg-pink-700 text-white rounded-xl text-center p-12">
                            <p className="text-3xl font-bold mb-2"> Create</p>
                        </a>
                        <a href="/moveup/nft/collection" className="flex-1 bg-gray-900 hover:bg-pink-700 text-white rounded-xl text-center p-12">
                            <p className="text-3xl font-bold mb-2"> Collection </p>
                        </a>
                        <a href="/moveup/nft/ranking" className="flex-1 bg-gray-900 hover:bg-pink-700 text-white rounded-xl text-center p-12">
                            <p className="text-3xl font-bold mb-2"> Ranking</p>
                        </a>
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
                                    className="rounded-2xl opacity-50"
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

export default Nft;
