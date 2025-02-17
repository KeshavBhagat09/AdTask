const Navbar = () => {
  return (
    <div className="flex justify-center p-5">
      <nav className="flex items-center justify-between bg-[#050506] text-white px-6 py-3 rounded-full border border-gray-800 shadow-lg max-w-4xl w-full">
        {/* Logo */}
        <div className="text-2xl font-semibold">
          <span className="text-white">ad</span>
          <span className="text-white font-bold">Task</span>
          <span className="text-white">.ai</span>
        </div>
        
        {/* Navigation Links */}
        <div className="flex space-x-6">
          <button className="relative group">
            Products ▼
          </button>
          <button className="relative group">
            Tools ▼
          </button>
          <button>Contact Us</button>
        </div>
        
        {/* Action Buttons */}
        <div className="flex space-x-4 items-center">
        <button className="bg-gradient-to-b from-transparent to-white/30 border border-gray-500 px-4 py-2 rounded-full text-white">Log in</button>          <button className="bg-transparent border border-gray-500 px-3 py-2 rounded-full text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.05 5.05a7 7 0 010 9.9m-3.536-1.415a3.5 3.5 0 010-4.95M6 8h.01M6 12h.01M6 16h.01M3 12h.01m15 0a9 9 0 11-9-9 9 9 0 019 9z" />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;