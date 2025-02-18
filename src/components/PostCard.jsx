import { Heart, MessageCircle, SendHorizontal, MoreVertical } from "lucide-react";

const PostCard = () => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 border border-gray-300 w-full mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            src="./Images/image53.png"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold">John Carter <span className="text-gray-500 text-sm">3h</span></h2>
            <p className="text-xs text-gray-500">
              <span className="text-blue-600">#tech #Lifestyle #designer</span> <br />
              Subscribers <span className="text-yellow-600">20k</span> views <span className="text-gray-400">639</span>
            </p>
            <p className="text-xs text-gray-500">📍 248 Eye hill Drove, Soham Ely, UK</p>
          </div>
        </div>
        <MoreVertical className="text-gray-500 cursor-pointer" />
      </div>

      {/* Follow Button */}
      <button className="mt-2 text-xs bg-red-500 text-white px-3 py-1 rounded-full">+ Follow</button>

      {/* Post Image */}
      <div className="mt-3">
        <img
          src="./Images/image54.png"
          alt="Post"
          className="w-full rounded-lg"
        />
      </div>

      {/* Like, Comment, Send */}
      <div className="flex justify-between items-center mt-4 text-gray-500 text-sm">
        <div className="flex items-center space-x-2">
          <Heart className="w-5 h-5" />
          <span>250 Likes</span>
        </div>
        <div className="flex items-center space-x-2">
          <MessageCircle className="w-5 h-5" />
          <span>18 Comments</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-around mt-3 text-blue-600 font-semibold">
        <div className="flex items-center space-x-2 cursor-pointer">
          <Heart className="w-5 h-5" />
          <span>Like</span>
        </div>
        <div className="flex items-center space-x-2 cursor-pointer">
          <MessageCircle className="w-5 h-5" />
          <span>Comment</span>
        </div>
        <div className="flex items-center space-x-2 cursor-pointer">
          <SendHorizontal className="w-5 h-5" />
          <span>Send</span>
        </div>
      </div>

      {/* Comments Section */}
      <div className="mt-4">
        <h3 className="font-semibold">Comments</h3>
        <div className="flex items-center space-x-3 mt-2">
          <img
            src="./Images/image55.png"
            alt="Commenter"
            className="w-8 h-8 rounded-full object-cover"
          />
          <p className="text-sm">
            <span className="font-semibold">Lana Cruzz</span> Commented on your post
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
