const NavBar =()=>{
    return (
        <nav className="bg-black w-full fixed top-0 left-0 py-2">
      <div className="flex items-center justify-between h-16 px-2 ml-8 mr-8">
        <div className="flex items-center ">
          <img src="/blogger-logo-free-png.webp" className="w-15 h-15" alt="Logo" />
          <a href="/" className="text-xl font-semibold text-white hover:text-gray-300">
            BlogSpot
          </a>
          <div className="flex items-center ml-15">
          <ul className="hidden sm:flex items-center space-x-15">
          <li className="flex items-center space-x-2">
            <img src="/home_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png" className="w-5 h-5" alt="Home" />
            <a href="/" className="text-md font-medium text-white hover:text-gray-300">Home</a>
          </li>
          <li className="flex items-center space-x-2">
            <img src="/groups_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png" className="w-5 h-5" alt="About" />
            <a href="/about" className="text-md font-medium text-white hover:text-gray-300">About</a>
          </li>
          <li className="flex items-center space-x-2">
            <img src="/contact_page_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png" className="w-5 h-5" alt="Contact" />
            <a href="/contact" className="text-md font-medium text-white hover:text-gray-300">Contact</a>
          </li>
          <li className="flex items-center space-x-2">
            <img src="/contact_page_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png" className="w-5 h-5" alt="Contact" />
            <a href="/blogs" className="text-md font-medium text-white hover:text-gray-300">Blogs</a>
          </li>
        </ul>
          </div>
        </div>

        

        <div className="hidden sm:flex space-x-4 ml-8">
          <a href="/login" className="bg-[#36454F] text-white px-4 py-1 rounded-full hover:bg-gray-600">Login</a>
          <a href="/signup" className="bg-[#36454F] text-white px-4 py-1 rounded-full hover:bg-gray-600">Signup</a>
          <div className="sm:hidden">
            <img src="/menu_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png" className="w-6 h-6" alt="Menu" />
          </div>
        </div>

      </div>
    </nav>
    )
}
export default NavBar;