import Image from "next/image";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer"
function CreateNFT() {
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
                    <div className="relative w-3/6">
                        <div className="absolute inset-0 bg-black bg-opacity-25 backdrop-blur-sm"></div>
                        <div className="bg-transparent relative z-10 pb-4">
                            <h3 className="py-4 px-4 text-4xl font-thin text-center  text-white mr-8">
                                Generate your NFT using AI
                            </h3>
                            <textarea
                                placeholder="Describe your NFT with as much detail as possible"
                                className="w-5/6 h-28 px-4 py-2 m-4 text-gray-800 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 bg-white bg-opacity-10 transition resize-none"
                            />
                        </div>
                    </div>
                    <a href="/moveup/nft/timer" className="from-violet-700 backdrop-blur-sm to-pink-700 bg-gradient-to-r text-white font-bold my-8 px-16 py-4 rounded-full text-md">
                        Generate
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default CreateNFT;
