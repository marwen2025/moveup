"use client"
import Image from "next/image";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import DistanceSlider from "@/Components/DistanceSlider";
import { useState } from "react";
function MoveUpHome() {
    const [distanceToggle, setDistanceToggle] = useState(true)
    const [carbonToggle, setCarbonToggle] = useState(false)
    const [dailyDistance, setDailyDistance] = useState(65)
    const toggleSwitch = () => {
        setDistanceToggle(prev => !prev);
    };
    const toggleSwitch2 = () => {
        setCarbonToggle(prev => !prev);
    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDailyDistance(Number(event.target.value));
    };
    return (
        <div className="text-white">
            <div className="bg-cover " style={{ backgroundImage: 'url("/bike.png")' }}>
                <NavBar />
                <div className="z-10 text-center grid grid-cols-3 gap-4 mb-4 relative  mx-auto place-items-center py-16 pb-56">
                    <div className="bg-black  bg-opacity-50 px-2 py-16 rounded-full p-2">

                    <div className=" flex flex-col px-4 py-4 space-y-12">
                            <a href="/moveup/home/car"><Image
                                src="/car.svg"
                                alt="Profile Picture"
                                width={30}
                                height={30}
                                className="rounded-2xl opacity-50"
                            /></a>
                            <a href="/moveup/home/bike"><Image
                                src="/bycicle.svg"
                                alt="Profile Picture"
                                width={30}
                                height={30}
                                className="rounded-2xl "
                            /></a>
                            <a href="/moveup/home/shoe"><Image
                                src="/shoe.svg"
                                alt="Profile Picture "
                                width={30}
                                height={30}
                                className="rounded-2xl opacity-50"
                            /></a>
                            
                        </div>
                    </div>
                    <div className="space-y-8">
                        <div className="text-center grid grid-cols-2 space-x-8">
                            <div className=" px-12 py-4 rounded-lg  bg-black bg-opacity-50  space-y-8">
                                <h2 className="text-lg mb-2">Total Distance <br></br>Traveled</h2>
                                <p className="text-4xl font-bold mb-2">3720 <span className="text-sm">Km</span></p>
                                <div className="flex items-center">
                                    <div className="flex items-center">
                                        <div className="flex items-center">
                                            <div
                                                onClick={toggleSwitch}
                                                className={`relative w-28 h-10 rounded-full cursor-pointer transition-colors duration-300 flex items-center justify-between px-1 ${distanceToggle ? 'bg-pink-600' : 'bg-gray-700'}`} // Set width to w-28
                                            >
                                                <div
                                                    className={`absolute left-1 w-8 h-8 rounded-full bg-white transition-transform duration-300 ${distanceToggle ? 'transform translate-x-16' : ''}`} // Adjust position based on new width
                                                ></div>
                                                <span className={`text-white font-semibold transition-opacity duration-300 px-4 ${distanceToggle ? 'opacity-100' : 'opacity-0'}`}>On</span>
                                                <span className={`text-white font-semibold transition-opacity duration-300 px-4 ${distanceToggle ? 'opacity-0' : 'opacity-100'}`}>Off</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className=" px-12 py-4 rounded-lg  bg-black bg-opacity-50  space-y-8">
                                <h2 className="text-lg mb-2">Carbon Footprint <br></br>Tracker</h2>
                                <p className="text-4xl font-bold mb-2">0% <span className="text-sm">No data</span></p>
                                <div className="flex items-center">
                                    <div className="flex items-center">
                                        <div className="flex items-center">
                                            <div
                                                onClick={toggleSwitch2}
                                                className={`relative w-28 h-10 rounded-full cursor-pointer transition-colors duration-300 flex items-center justify-between px-1 ${carbonToggle ? 'bg-pink-600' : 'bg-gray-700'}`} // Set width to w-28
                                            >
                                                <div
                                                    className={`absolute left-1 w-8 h-8 rounded-full bg-white transition-transform duration-300 ${carbonToggle ? 'transform translate-x-16' : ''}`} // Adjust position based on new width
                                                ></div>
                                                <span className={`text-white font-semibold transition-opacity duration-300 px-4 ${carbonToggle ? 'opacity-100' : 'opacity-0'}`}>On</span>
                                                <span className={`text-white font-semibold transition-opacity duration-300 px-4 ${carbonToggle ? 'opacity-0' : 'opacity-100'}`}>Off</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                        <div className=" px-12 py-4 rounded-lg  bg-black bg-opacity-50  space-y-8">
                            <h2 className="text-lg mb-2">How much you traveled today ? </h2>
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    <div className="flex items-center">
                                        <div className="flex flex-col items-center">

                                            <input
                                                type="range"
                                                min="0"
                                                max="100"
                                                value={dailyDistance}
                                                onChange={handleChange}
                                                className="w-96 appearance-none bg-gray-300 rounded-lg h-2 focus:outline-none focus:ring-2 focus:ring-pink-600"
                                                style={{ background: `linear-gradient(to right, #ec4899 ${dailyDistance}%, #d1d5db ${dailyDistance}%)` }} // Custom background color based on value
                                            />
                                            <div className="flex items-center mt-2">
                                                <span className="text-lg font-semibold">{dailyDistance} km</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="bg-pink-600 hover:bg-pink-700 text-white px-16 py-4 rounded-full text-md">
                            Done
                        </button>
                        <div className=" pt-8">
                            <div className="bg-black bg-opacity-70 px-16 py-4 rounded-full p-2">
                            <div className="flex flex-row space-x-14 justify-between">
                                <a href="/moveup/">
                                    <Image
                                    src="/home.svg"
                                    alt="Profile Picture"
                                    width={50}
                                    height={50}
                                    className="rounded-2xl"
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
                    <div className=" absolute top-0 right-4">
                        <div className="flex items-center space-x-3  p-2 rounded-lg max-w-xs">
                            
                            <div className="flex flex-col">
                                <div className="flex items-center space-x-2">
                                <Image
                                    src="/coloredwallet.svg"
                                    alt={`use's profile`}
                                    width={60}
                                    height={60}
                                    className="rounded-lg"
                                />
                                    <div className=" text-white text-sm font-bold py-1 px-2 rounded">
                                        178102 Points
                                    </div>
                                </div>
                                <div className="text-gray-400 text-xs mt-1">
                                    ID: a7d82Lm9am53jy.j08
                                </div>
                            </div>
                            <div className="flex-shrink-0 relative">
                                <Image
                                    src="/User.png"
                                    alt={`use's profile`}
                                    width={80}
                                    height={80}
                                    className="rounded-lg"
                                />
                                <div className="text-white text-sm mt-1">
                                    @Username
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}

export default MoveUpHome;
