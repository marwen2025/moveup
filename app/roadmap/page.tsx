import Image from "next/image";
import Footer from"@/Components/Footer"
function Roadmap() {
    return (
        < div className="bg-black">
            <nav className="flex flex-row justify-between items-center space-x-6 min-h-[10vh] pb-4">
                <div className="flex items-center px-4 py-4 space-x-4">
                    <a href="/">
                        <Image
                            alt="Peakchain logo"
                            loading="lazy"
                            width="120"
                            height="80"
                            decoding="async"
                            className="w-[100px] md:w-[150px]"
                            src="/peakchainlogo.svg"
                        />
                    </a>
                    <div className="w-px bg-gray-500 h-8"></div>
                    <h1 className="text-md text-xl text-gray-300">Roadmap</h1>
                </div>
                <div className="px-4 flex items-center text-white">
                    <p className="text-2xl font-semibold">1.2K/</p>
                    <div className="flex flex-col text-left ml-2">
                        <p className="text-xs">Keys</p>
                        <p className="text-xs">5K Total</p>
                    </div>
                </div>
            </nav>

            <section>
                <div className="flex flex-row pb-12">
                    <div className="md:w-16 mr-4 flex-shrink-0 mx-4 px-2">
                    <div className="text-center py-4 text-cyan-400">
                            <div className="font-bold text-sm md:text-lg">Q4</div>
                            <div className="text-xs md:text-sm text-cyan-400">2024</div>
                        </div>
                        <div className="h-1/2 bg-cyan-400 w-1 md:w-3 md:border md:border-cyan-400 rounded-full mx-auto relative">
                            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-4 h-4 md:w-8 md:h-8 bg-cyan-400 shadow-2xl rounded-full"></div>
                            <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 w-4 h-4 md:w-8 md:h-8 bg-cyan-400 shadow-2xl rounded-full"></div>
                        </div>
                        <div className="h-1/2 border-l border-r border-b border-cyan-400 w-1 md:w-3 rounded-b-full mx-auto relative"></div>
                        
                    </div>

                    <div className="flex-1">
                        <div
                            className="min-h-[20vh] md:min-h-[65vh] bg-cover bg-center flex flex-col justify-center items-center"
                            style={{ backgroundImage: 'url("/image1.png")' }}
                        >
                            {/* <h2 className="text-xl md:text-2xl lg:text-4xl text-black font-light tracking-widest text-center">
                                REDESIGNING OUR WEBSITE
                            </h2> */}
                        </div>

                        <div
                            className="min-h-[22vh] md:min-h-[65vh] bg-cover bg-center bg-no-repeat flex flex-col justify-start items-start  "
                            style={{ backgroundImage: 'url("/image2.png")' }}
                        >
                            {/* <div className="backdrop-blur-md p-2 md:p-4 rounded-3xl">
                                <h2 className="text-xl md:text-7xl text-white font-poppins font-semibold tracking-widest">NFTs</h2>
                                <p className="text-sm md:text-3xl text-white font-poppins font-light tracking-widest">
                                    Integration with AI,
                                    <span className="block">Make your own prompt,</span>
                                    <span className="block">Collect, Showcase!</span>
                                </p>
                            </div> */}
                        </div>

                        <div
                            className="min-h-[20vh] md:min-h-[65vh] bg-cover bg-center  bg-no-repeat flex flex-col justify-start items-center "
                            style={{ backgroundImage: 'url("image3.png")' }}
                        >
                        
                        </div>
                        <div
                            className="min-h-[20vh] md:min-h-[65vh] bg-cover bg-center  bg-no-repeat flex flex-col justify-start items-center "
                            style={{ backgroundImage: 'url("/image4.png")' }}
                        >
                        </div>
                    </div>
                </div>
                <section className=" w-full flex flex-col items-center justify-start px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 text-white">
                    <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12 md:mb-16 tracking-widest">COMING SOON !</h2>
                    <div className="flex flex-col items-center justify-center w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl p-6 sm:p-8 md:p-10 rounded-3xl">
                        <p className=" text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 md:mb-10 text-center tracking-widest text-grayMedium">Stay updated &amp; Follow Us</p>
                        <a href="#" className="flex items-center text-base sm:text-lg md:text-xl lg:text-2xl text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-md bg-white transition-colors">Join 
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-up-right ml-2 h-5 w-5">
                        <path d="M7 7h10v10">

                        </path>
                        <path d="M7 17 17 7">

                        </path>
                        </svg>
                        </a>
                        </div>
                </section>
            </section>
            <Footer/>
        </div>
    );
}

export default Roadmap;
