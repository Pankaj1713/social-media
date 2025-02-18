import { Home, Network, MessageCircle, Bell, Search, User } from "lucide-react";

const Navbar = () => {
  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden md:flex w-full bg-white shadow-md items-center justify-between py-3 px-8">
        <div className="flex items-center space-x-2">
          <a href="/">
            <img src="./Images/logo.png" alt="Logo"/>
          </a>
        </div>
        <div className="flex space-x-6 gap-10">
          <div className="flex flex-col items-center text-red-600">
            <Home className="w-6 h-6" />
            <p className="text-sm font-semibold underline">Home</p>
          </div>
          <div className="flex flex-col items-center">
            <Network className="w-6 h-6" />
            <p className="text-sm">My Network</p>
          </div>
          <div className="flex flex-col items-center">
            <MessageCircle className="w-6 h-6" />
            <p className="text-sm">Chats</p>
          </div>
          <div className="flex flex-col items-center relative">
            <Bell className="w-6 h-6" />
            <span className="absolute top-0 right-0 bg-red-600 w-3 h-3 rounded-full"></span>
            <p className="text-sm">Notifications</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-200 rounded-full px-4 py-2 focus:outline-none"
            />
            <Search className="absolute right-3 top-2 text-gray-500 w-5 h-5" />
          </div>
          <img
            src="./Images/Frame1682.png"
            alt="Profile"
            className="rounded-full w-10 h-10"
          />
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden fixed bottom-0 z-10 w-full bg-white shadow-md flex justify-around items-center py-2 border-t">
        <div className="flex flex-col items-center text-red-600">
          <Home className="w-6 h-6" />
        </div>
        <div className="flex flex-col items-center">
          <Network className="w-6 h-6" />
        </div>
        <div className="flex flex-col items-center relative">
          <MessageCircle className="w-6 h-6" />
        </div>
        <div className="flex flex-col items-center relative">
          <Bell className="w-6 h-6" />
          <span className="absolute top-0 right-0 bg-red-600 w-2 h-2 rounded-full"></span>
        </div>
        <div className="flex flex-col items-center">
          <User className="w-6 h-6" />
        </div>

        {/* Floating Search Button */}
        {/* <button className="absolute -top-6 bg-red-600 p-3 rounded-full shadow-lg">
          <Search className="text-white w-6 h-6" />
        </button> */}
      </div>
    </>
  );
};

export default Navbar;
