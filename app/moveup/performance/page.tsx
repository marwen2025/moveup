"use client"
import Image from "next/image";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts'

const dailyData = [
    { day: 'Mon', distance: 50 },
    { day: 'Tue', distance: 80 },
    { day: 'Wed', distance: 70 },
    { day: 'Thu', distance: 90 },
    { day: 'Fri', distance: 85 },
    { day: 'Sat', distance: 75 },
    { day: 'Sun', distance: 40 },
]

function MoveUpPerformance() {
    const progress =70 ;
    const size = 200;
    const strokeWidth = 30 ;
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const strokeDashoffset = circumference - (progress / 100) * circumference;
    return (
        <div className="text-white">
            <div className="bg-cover " style={{ backgroundImage: 'url("/car 1.png")' }}>
                <NavBar />
                <div className="z-10 text-center grid grid-cols-3 gap-4 mb-4 relative  mx-auto place-items-center py-16 pb-56">
                    <div className="bg-black  bg-opacity-50 px-2 py-16 rounded-full p-2">

                        <div className=" flex flex-col px-4 py-4 space-y-12">
                            <Image
                                src="/car.svg"
                                alt="Profile Picture"
                                width={30}
                                height={30}
                                className="rounded-2xl opacity-50"
                            />
                            <Image
                                src="/bycicle.svg"
                                alt="Profile Picture"
                                width={30}
                                height={30}
                                className="rounded-2xl opacity-50"
                            />
                            <Image
                                src="/shoe.svg"
                                alt="Profile Picture"
                                width={30}
                                height={30}
                                className="rounded-2xl opacity-50"
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className=" px-12 rounded-lg  bg-black bg-opacity-50  ">
                                <h2 className="text-4xl pt-8 font-bold ">My performance</h2>
                                <p className="text-md mb-2">Compared to last week <span className="text-sm">Km</span></p>
                                <div className="flex items-center justify-center h-full pb-12">
                                    <div className="relative inline-flex items-center justify-center">
                                        <svg width={size} height={size} className="transform -rotate-90">

                                            <circle
                                                cx={size / 2}
                                                cy={size / 2}
                                                r={radius}
                                                stroke="white" // Outer circle is white
                                                strokeWidth={strokeWidth}
                                                fill="none"
                                            />
                                            <circle
                                                cx={size / 2}
                                                cy={size / 2}
                                                r={radius}
                                                stroke="white"
                                                strokeWidth={strokeWidth}
                                                fill="none"
                                            />
                                            <circle
                                                cx={size / 2}
                                                cy={size / 2}
                                                r={radius - strokeWidth} // Adjust inner radius to account for stroke width
                                                stroke="white" // Inner circle is white
                                                strokeWidth={30} // No stroke to make it fully visible
                                                fill="white" // Fill color to make it fully visible
                                            />
                                            <circle
                                                cx={size / 2}
                                                cy={size / 2}
                                                r={radius - 5}
                                                stroke="url(#gradient)"
                                                strokeWidth={strokeWidth}
                                                strokeDasharray={circumference}
                                                strokeDashoffset={strokeDashoffset}
                                                strokeLinecap="round"
                                                fill="none"
                                            />
                                            <defs>
                                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                    <stop offset="0%" stopColor="#FF00FF" />
                                                    <stop offset="100%" stopColor="#8A2BE2" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-4xl font-bold text-black">{progress}%</span>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">Daily Traveled Distance this week</h3>
                                <div className="bg-black  bg-opacity-80 px-2 pt-8 rounded-3xl p-2">
                                
                                <ResponsiveContainer width="100%" height={200}>
                                    <BarChart data={dailyData}>
                                        <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: 'white' }} />
                                        <YAxis hide />
                                        <Tooltip
                                            contentStyle={{ backgroundColor: '#333', border: 'none' }}
                                            itemStyle={{ color: '#fff' }}
                                        />
                                        <Bar dataKey="distance" fill="url(#colorGradient)" />
                                        <defs>
                                            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#FF00FF" />
                                                <stop offset="100%" stopColor="#800080" />
                                            </linearGradient>
                                        </defs>
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
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
                                    className="rounded-2xl "
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
                                    <div className=" text-blazck text-sm font-bold py-1 px-2 rounded">
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

export default MoveUpPerformance;
