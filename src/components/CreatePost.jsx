import { Image, FileText } from "lucide-react";

const CreatePost = () => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 flex flex-col items-center space-x-4 border border-gray-300 w-full mx-auto">
      {/* Profile Picture */}
     <div className="flex w-full gap-2">
      <img
        src="./Images/man-png-30110.png"
        alt="Profile"
        className="w-12 h-12 rounded-full object-cover"
      />

      {/* Input Field */}
      <input
        type="text"
        placeholder="Create a post, try writing with AI"
        className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm outline-none"
      />
     </div>

      {/* Action Buttons */}
      <div className="flex space-x-4 gap-8">
        <div className="flex flex-col items-center cursor-pointer">
          <Image className="w-6 h-6 text-green-700" />
          <p className="text-xs text-gray-600">Media</p>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <FileText className="w-6 h-6 text-orange-600" />
          <p className="text-xs text-gray-600">Keep Note</p>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
