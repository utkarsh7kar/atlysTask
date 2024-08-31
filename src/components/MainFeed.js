import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { SAMPLE_DATA_POSTS } from "../constants/dummyData";
import { UserContext } from "../contexts/user.context";

function MainFeed() {
  const [newPostText, setNewPostText] = useState("");
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  useEffect(() => {
    console.log("User Updated:");
  }, [user]);

  const handlePostSubmit = () => {
    // we can Handle posting logic here
    console.log("Posting:", newPostText);
    setNewPostText("");
  };

  const handleCreatePost = () => {
    navigate("/login");
  };

  return (
    <div className="bg-gray-800 p-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl text-white font-bold">Hello, {user.userName}!</h2>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600" onClick={handleCreatePost}>
          Create Post
        </button>
      </div>
      <div className="mb-4">
        <textarea
          className="w-full p-2 border-gray-700 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="How are you feeling today?"
          value={newPostText}
          onChange={(e) => setNewPostText(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 mt-2"
          onClick={handlePostSubmit}
        >
          Post
        </button>
      </div>
      <div className="space-y-4">
        {SAMPLE_DATA_POSTS.map((post) => (
          <div key={post.id} className="border-b border-gray-700 py-4">
            <div className="flex items-center">
              <img
                src={post?.user?.avatar}
                alt={post?.user?.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="text-white font-bold">{post?.user?.name}</h3>
                <p className="text-gray-400">{post.createdAt}</p>
              </div>
            </div>
            <p className="text-gray-400 mt-2">{post?.content}</p>
            <div className="flex justify-between mt-2">
              <button className="text-gray-400 hover:text-blue-500">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 10a8 8 0 018 8V8a8 8 0 01-8-8zm9 0a8 8 0 018 8V8a8 8 0 01-8-8z" />
                </svg>
                <span className="ml-1">Like ({post?.likes})</span>
              </button>
              <button className="text-gray-400 hover:text-blue-500">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 10a8 8 0 018 8V8a8 8 0 01-8-8zm9 0a8 8 0 018 8V8a8 8 0 01-8-8z" />
                </svg>
                <span className="ml-1">Comment</span>
              </button>
            </div>
            <div className="mt-2">
              {post.comments.map((comment) => (
                <div key={comment.id} className="ml-4">
                  <p className="text-gray-400">{comment?.user?.name}</p>
                  <p className="text-gray-500">{comment?.content}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainFeed;
