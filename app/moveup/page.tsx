import Image from "next/image";
import NavBar from "@/Components/NavBar";
import Footer from"@/Components/Footer"
function Roadmap() {
    return (
        <div>
            <div className="bg-cover text-white " style={{ backgroundImage: 'url("/bg-1.png")' }}>
            <NavBar/> 
            <div className="z-10 text-center place-items-center py-16 pb-56">
        <h2 className="text-white text-2xl mb-2">HELLO</h2>
        <h1 className="text-white text-6xl font-bold mb-2">Username</h1>
        <p className="text-white text-lg mb-8">Welcome back !</p>
        <div className="mb-8">
          <Image
            src="/User.png"
            alt="Profile Picture"
            width={200}
            height={200}
            className="rounded-2xl"
          />
        </div>

        

        <a href="/moveup/home/car" className="bg-pink-600 hover:bg-pink-700 text-white px-16 py-4 rounded-full text-md">
          START
        </a>
        </div>
            </div>
             <Footer/>
        </div>
    );
}

export default Roadmap;
