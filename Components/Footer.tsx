import Image from "next/image";
const Footer = () => {
    return (
        <footer className="relative bg-black text-white py-8"><div className="flex items-start justify-start px-10 mx-10 py-8 mb-4">
            <Image alt="Peakchain logo"
                loading="lazy"
                width="120"
                height="80"
                decoding="async"
                className="w-[100px] md:w-[150px]"
                src="/peakchainlogo.svg" />
        </div>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-lg font-bold mb-4">Contact
                        </h2>
                        <div className="space-y-2 text-gray-500">
                            <div className="flex items-center space-x-2">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="w-5 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M460.6 147.3L353 256.9c-.8.8-.8 2 0 2.8l75.3 80.2c5.1 5.1 5.1 13.3 0 18.4-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8l-75-79.9c-.8-.8-2.1-.8-2.9 0L313.7 297c-15.3 15.5-35.6 24.1-57.4 24.2-22.1.1-43.1-9.2-58.6-24.9l-17.6-17.9c-.8-.8-2.1-.8-2.9 0l-75 79.9c-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8c-5.1-5.1-5.1-13.3 0-18.4l75.3-80.2c.7-.8.7-2 0-2.8L51.4 147.3c-1.3-1.3-3.4-.4-3.4 1.4V368c0 17.6 14.4 32 32 32h352c17.6 0 32-14.4 32-32V148.7c0-1.8-2.2-2.6-3.4-1.4z"></path>
                                    <path d="M256 295.1c14.8 0 28.7-5.8 39.1-16.4L452 119c-5.5-4.4-12.3-7-19.8-7H79.9c-7.5 0-14.4 2.6-19.8 7L217 278.7c10.3 10.5 24.2 16.4 39 16.4z">
                                    </path>
                                </svg>
                                <span className="text-grayMedium">contact@nexus-lab.io</span>
                            </div>
                            <a href="https://www.linkedin.com/company/peakchain/posts/?feedView=all" className="flex items-center space-x-2">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="w-5 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
                                    </path>
                                </svg>
                                <span className="text-grayMedium">PeakChain Network</span>
                            </a>
                        </div>
                        <div className="mt-4 space-y-2"><a href="https://apps.apple.com/de/app/peakchain-moveup/id6630387673" className="w-1/2 bg-gradient-to-tr from-[#1A1A1A] to-black  backdrop-blur-md rounded-xl py-2 px-6 flex items-center justify-center">
                            <button className="flex items-center justify-center space-x-4">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" className="text-4xl text-white w-8 h-8" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg><div className="text-white text-left"><span className="block text-sm">Download on the</span><span className="text-lg font-semibold">App Store</span>
                                </div>
                            </button>
                        </a>
                            <a href="https://play.google.com/store/apps/details?id=com.wg.mobilitytracking&amp;hl=en" className="w-1/2 bg-gradient-to-tr from-[#1A1A1A] to-black rounded-xl py-2 px-6 flex items-center justify-center">
                                <button className="flex space-x-4 items-center justify-center"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-4xl text-white w-8 h-8" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z">
                                    </path>
                                </svg>
                                    <div className="text-white text-left">
                                        <span className="block text-sm">Get it on</span>
                                        <span className="text-lg font-semibold">Google Play
                                        </span>
                                    </div>
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <h2 className="text-lg font-bold mb-4">Learn</h2>
                        <ul className="space-y-2 text-gray-500">
                            <li>Build</li>
                            <li>Peakchain future projects</li>
                            <li>Our Mission</li>
                            <li>Our Solutions</li>
                            <li>Our Partners</li>
                            <li>Latest posts</li>
                        </ul>
                    </div>
                    <div className="col-span-1"><h2 className="text-lg font-bold mb-4">Community</h2>
                        <ul className="space-y-2 text-gray-500">
                            <li>Blog</li>
                            <li>FAQ</li>
                            <li>Roadmap</li>
                        </ul>
                    </div>
                    <div className="col-span-1">
                        <h2 className="text-lg font-bold mb-4">About us</h2>
                        <ul className="space-y-2 text-gray-500">
                            <li>Peakchain Overview</li>
                            <li>PeakSoft Gmbh</li>
                            <li>Partners</li>
                            <li>Peakchain Network</li>
                        </ul>
                    </div>
                    <div className="col-span-1"><h2 className="text-lg font-bold mb-4">MoveUp</h2>
                        <ul className="space-y-2 text-gray-500">
                            <li>Download</li>
                            <li>Get started</li>
                            <li>NFT's</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 text-center text-sm space-x-2">
                    <a href="/imprint" className="hover:underline"> © 2024 NexusLab.</a> 
                    <span>•</span>
                    <a href="/imprint" className="hover:underline"> Imprint</a>
                    <span>•</span>
                    <a href="/imprint" className="hover:underline"> Privacy Policy</a>
                    <span>•</span>
                    <a href="/imprint" className="hover:underline"> Privacy Settings</a>
                     
                </div>
            </div>
            <div className="absolute lg:top-10 right-10 top-1/2 -translate-y-1/2 md:translate-y-0 flex flex-col space-y-2 text-black"><a href="https://www.youtube.com/@peakchain2876" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full hover:bg-gray-100 transition duration-150">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z">
                    </path>
                </svg>
            </a>
                <a href="https://www.linkedin.com/company/peakchain" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full hover:bg-gray-100 transition duration-150">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                    </svg>
                </a>
                <a href="https://t.me/+IGfv_xz8cptkOWVk" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full hover:bg-gray-100 transition duration-150">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z">
                        </path>
                    </svg>
                </a>
                <a href="https://www.reddit.com/user/PeakChain_/" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full hover:bg-gray-100 transition duration-150">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M440.3 203.5c-15 0-28.2 6.2-37.9 15.9-35.7-24.7-83.8-40.6-137.1-42.3L293 52.3l88.2 19.8c0 21.6 17.6 39.2 39.2 39.2 22 0 39.7-18.1 39.7-39.7s-17.6-39.7-39.7-39.7c-15.4 0-28.7 9.3-35.3 22l-97.4-21.6c-4.9-1.3-9.7 2.2-11 7.1L246.3 177c-52.9 2.2-100.5 18.1-136.3 42.8-9.7-10.1-23.4-16.3-38.4-16.3-55.6 0-73.8 74.6-22.9 100.1-1.8 7.9-2.6 16.3-2.6 24.7 0 83.8 94.4 151.7 210.3 151.7 116.4 0 210.8-67.9 210.8-151.7 0-8.4-.9-17.2-3.1-25.1 49.9-25.6 31.5-99.7-23.8-99.7zM129.4 308.9c0-22 17.6-39.7 39.7-39.7 21.6 0 39.2 17.6 39.2 39.7 0 21.6-17.6 39.2-39.2 39.2-22 .1-39.7-17.6-39.7-39.2zm214.3 93.5c-36.4 36.4-139.1 36.4-175.5 0-4-3.5-4-9.7 0-13.7 3.5-3.5 9.7-3.5 13.2 0 27.8 28.5 120 29 149 0 3.5-3.5 9.7-3.5 13.2 0 4.1 4 4.1 10.2.1 13.7zm-.8-54.2c-21.6 0-39.2-17.6-39.2-39.2 0-22 17.6-39.7 39.2-39.7 22 0 39.7 17.6 39.7 39.7-.1 21.5-17.7 39.2-39.7 39.2z"></path>
                    </svg>
                </a>
                <a href="https://discord.gg/bC3P3mUt" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full hover:bg-gray-100 transition duration-150">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z">
                        </path>
                    </svg>
                </a>
                <a href="https://x.com/peak_chain" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full hover:bg-gray-100 transition duration-150">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z">
                        </path>
                    </svg>
                </a>
            </div>
        </footer>
    )
}

export default Footer