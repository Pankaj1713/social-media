import { useState } from "react";

function SocialMediaPost() {
  const [likes, setLikes] = useState(250);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [isShared, setIsShared] = useState(false);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  const handleShare = () => {
    setIsShared(true);
    setTimeout(() => setIsShared(false), 2000);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <span className="font-medium">Lana Cruzz</span>
        <span className="text-gray-500 text-sm">Commented on your post</span>
        <button className="text-gray-500 hover:text-black">✖</button>
      </div>

      {/* User Info */}
      <div className="flex items-center mt-2">
        <img src="/profile.jpg" alt="John Carter" className="w-10 h-10 rounded-full" />
        <div className="ml-3">
          <p className="font-semibold">John Carter</p>
          <p className="text-sm text-gray-500">#tech #Lifestyle #designer</p>
        </div>
        <button className="ml-auto bg-red-500 text-white px-3 py-1 rounded-lg">+ Follow</button>
      </div>

      {/* Post Content */}
      <div className="p-4">
        <img src="/sale-banner.jpg" alt="Sale Banner" className="w-full rounded-lg" />
      </div>

      {/* Like, Comment, Share Counts */}
      <div className="flex justify-between text-gray-600 text-sm px-2">
        <span>👍 {likes} Likes</span>
        <span>💬 {comments.length} Comments</span>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between px-2 mt-2">
        <button onClick={handleLike} className="text-gray-600 hover:text-blue-500 flex items-center">
          👍 Like
        </button>
        <button className="text-gray-600 hover:text-green-500">💬 Comment</button>
        <button onClick={handleShare} className="text-gray-600 hover:text-purple-500">📤 Share</button>
      </div>

      {/* Comment Input */}
      <form onSubmit={handleCommentSubmit} className="mt-3">
        <input
          type="text"
          placeholder="Write a comment..."
          className="w-full p-2 border rounded-lg"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button type="submit" className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg w-full">
          Post Comment
        </button>
      </form>

      {/* Comment List */}
      <div className="mt-4">
        {comments.map((comment, index) => (
          <p key={index} className="bg-gray-100 p-2 rounded-lg mt-2">{comment}</p>
        ))}
      </div>

      {/* Share Confirmation */}
      {isShared && <div className="mt-2 text-green-500 text-sm text-center">✅ Post shared successfully!</div>}
    </div>
  );
}

// Use <SocialMediaPost /> in your main component
export default SocialMediaPost;
