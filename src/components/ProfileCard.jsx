import { Handshake, Star, CheckCircle, Instagram, Linkedin, MessageCircle } from "lucide-react";

const ProfileCard = () => {
  return (
    <div className="bg-black text-white p-5 rounded-lg flex items-center space-x-5 w-full max-w-2xl">
      {/* Profile Image Section */}
      <div className="relative">
        <img
         src="./Images/man-png-30110.png"
          alt="Profile"
          className="w-36 h-36 rounded-full object-cover border-4 border-black"
        />
        <div className="absolute -right-8 top-1/2 -translate-y-1/2 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full rotate-90">
          Open to Close
        </div>
      </div>

      {/* Profile Details */}
      <div>
        <h2 className="text-lg font-semibold">@SandeepSeminars</h2>
        <p className="text-gray-400 text-sm">
          <span className="text-blue-500">20k</span> subscribers ·
          <span className="text-gray-300"> 639</span> views ·
          Connection: <span className="text-blue-500">12K+</span>
        </p>
        <p className="text-sm text-gray-200 mt-2">
          Maheshwari is best known as a motivational speaker conducting life-changing seminars and sessions...
          <span className="text-blue-500 cursor-pointer"> more</span>
        </p>
        <p className="text-blue-500 text-sm mt-1">#tech #Lifestyle #Food</p>

        {/* Stats */}
        <p className="text-sm mt-2">
          Total Videos: <span className="text-blue-500">150+</span> | 
          Total Likes: <span className="text-blue-500">12.5K+</span>
        </p>

        {/* Badges */}
        <div className="flex items-center space-x-4 mt-3">
          <div className="flex items-center space-x-1">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span className="text-sm">Verified creator badge</span>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-500" />
            <span className="text-sm">Top collaborator</span>
          </div>
          <div className="flex items-center space-x-1">
            <Handshake className="w-4 h-4 text-green-500" />
            <span className="text-sm">Fresh brand Deal</span>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-3 mt-3">
          <Instagram className="w-5 h-5 text-pink-500 cursor-pointer" />
          <Linkedin className="w-5 h-5 text-blue-500 cursor-pointer" />
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3 mt-4">
          <button className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-semibold">🔗 Connect</button>
          <button className="bg-gray-700 px-4 py-2 rounded-md text-sm font-semibold">+ Follow</button>
          <button className="bg-gray-700 px-4 py-2 rounded-md text-sm font-semibold">
            <MessageCircle className="w-4 h-4 inline-block mr-1" /> Message
          </button>
          <button className="border border-red-600 px-4 py-2 rounded-md text-sm font-semibold text-red-500">More+</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
