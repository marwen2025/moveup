import Image from "next/image";
function NavBar() {
  return (
    <nav className="px-4 sm:px-6 lg:px-8 items-center py-4 bg-black bg-opacity-70 ">
      <div className="flex justify-between items-center">
        <div className="flex-shrink-0">
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
        </div>
        <div className="hidden lg:flex justify-center flex-grow ml-10">
          <ul className="flex justify-between items-center space-x-8">
            <li className="relative group">
              <a className="block py-2 font-light transition-all duration-200 text-grayLight text-lg hover:text-white" href="/">Home</a>
            </li>
            <li className="relative group">
              <a href="/moveup" className="text-grayMedium hover:text-white text-xl font-montserrat  py-2 transition-all duration-200">Solutions</a>
            </li>
            <li className="relative group">
              <a className="block py-2 font-light transition-all duration-200 text-grayLight text-lg hover:text-white" href="/community">Community</a>
            </li>
            <li className="relative group">
              <a className="block py-2 font-light transition-all duration-200 text-grayLight text-lg hover:text-white" href="/about">About</a>
            </li>
            <li className="relative group">
              <a className="block py-2 font-light transition-all duration-200 text-grayLight text-lg hover:text-white" href="/roadmap">Roadmap</a>
            </li>
            <li className="relative group">
              <a className="block py-2 font-light transition-all duration-200 text-grayLight text-lg hover:text-white" href="/build">Build</a>
            </li>
          </ul>
        </div>
        <div className="flex-shrink-0">
          <a href="build">
            <button className="px-6 py-2 border rounded-xl text-lg hover:bg-white hover:text-black transition-all duration-300">Start Building
            </button>
          </a>
        </div>
      </div>
    </nav>

  )
}

export default NavBar