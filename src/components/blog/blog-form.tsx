"use client";

import type React from "react";

import { useState } from "react";

interface CommentFormProps {
  postSlug: string;
  onCommentSubmit: ( content: string) => void;
}

export default function CommentForm({ onCommentSubmit }: CommentFormProps) {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  // const [saveInfo, setSaveInfo] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content) {
      onCommentSubmit( content);
      setContent("");
    }
  };

  return (
    <div className="mt-12">
      <h3 className="mb-6 text-2xl font-bold">Leave a Comment</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Write a comment"
          className="mb-4 min-h-[120px] w-full rounded-md border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-green-500"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        {/* <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-md border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your mail"
            className="w-full rounded-md border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="save-info"
            className="mr-2"
            checked={saveInfo}
            onChange={(e) => setSaveInfo(e.target.checked)}
          />
          <label htmlFor="save-info" className="text-gray-700">
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </div> */}
        <button
          type="submit"
          className="rounded-md bg-green-500 px-6 py-3 text-white transition-colors hover:bg-green-600"
        >
          Post a Comment
        </button>
      </form>
    </div>
  );
}
