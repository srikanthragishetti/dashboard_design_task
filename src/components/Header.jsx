
import React from "react";
import { FiSearch, FiBell, FiCalendar, FiFilter, FiShare2 } from "react-icons/fi";
import { HiOutlineLink } from "react-icons/hi";
import { BsGrid3X3Gap } from "react-icons/bs";

export default function Header() {
  return (
    
    <div className="px-6 py-4 bg-white border-b">

      <header className="flex items-center justify-between mb-6">
      {/* Left: Project title + link icons */}
        <div className="flex items-center gap-3">
          <h1 className="text-4xl font-bold">Mobile App</h1>
          <HiOutlineLink className="text-gray-400 w-5 h-5" />
        </div>

        {/* Middle - Search bar */}
      <div className="flex-1 max-w-xl mx-8 relative">
        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search for anything..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

    

      {/* Right - Icons + User */}
      <div className="flex items-center gap-6">
        <FiCalendar className="w-5 h-5 text-gray-500 cursor-pointer" />
        <FiBell className="w-5 h-5 text-gray-500 cursor-pointer" />
        <div className="flex items-center gap-3 cursor-pointer">

          <div className="hidden md:block text-right">
            <div className="font-medium text-sm">Palak Jain</div>
            <div className="text-xs text-gray-400">Rajasthan, India</div>
          </div>

          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src="https://res.cloudinary.com/dh2ultogk/image/upload/v1758456585/image_1_a05quk.png"
              alt="user avatar"
              className="w-full h-full object-cover"
            />
          </div>
          
        </div>
      </div>

    </header>


    

      <nav className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-6 ">

        {/* Center: Filter + Today */}
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border shadow-sm hover:bg-gray-50">
            <FiFilter className="w-4 h-4" /> Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border shadow-sm hover:bg-gray-50">
            <FiCalendar className="w-4 h-4" /> Today
          </button>
        </div>

        {/* Right: Invite + avatars + Share + layout toggle */}
        <div className="flex items-center gap-4">
          {/* Invite button + avatars */}
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 bg-indigo-40 text-indigo-600 text-sm font-medium rounded-lg hover:bg-indigo-100">
              + 
            </button>Invite
            <div className="flex -space-x-2">
              <img src="https://i.pravatar.cc/24?img=1" alt="avatar1" className="w-8 h-8 rounded-full border-2 border-white" />
              <img src="https://i.pravatar.cc/24?img=2" alt="avatar2" className="w-8 h-8 rounded-full border-2 border-white" />
              <img src="https://i.pravatar.cc/24?img=3" alt="avatar3" className="w-8 h-8 rounded-full border-2 border-white" />
              <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs text-gray-600">+2</div>
            </div>
          </div>

          {/* Share button */}
          <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border shadow-sm hover:bg-gray-50">
            <FiShare2 className="w-4 h-4" /> Share   
          </button> 
           
          {/* Layout toggle button */}
          <button className="p-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700">
            <BsGrid3X3Gap className="w-5 h-5" />
          </button>
        </div>
      </nav>
    </div>
  );
}


