"use client";
import Link from "next/link";

// React Client Component
function PostCard({ post }) {
  return (
    <div className="bg-gray-900 p-10">
      <Link href={`/posts/${post.id}`}>
        <h3 className="text-2xl font-bold">
          {post.id}. {post.title}
        </h3>
      </Link>
      <p className="text-slate-300">{post.body}</p>
      <button
        onClick={() => {
          alert("test");
        }}
      >
        Click
      </button>
    </div>
  );
}

export default PostCard;
