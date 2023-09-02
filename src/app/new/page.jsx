"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import supabase from "@/utils/supabase";
import { useSession } from "@clerk/nextjs";

const BlogNew = () => {
  const router = useRouter();
  const { session } = useSession();
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error: insertError } = await supabase.from("posts").insert({
      title: titleRef.current.value,
      content: contentRef.current.value,
      user_id: session.user.id,
      username: session.user.username,
    });

    if (insertError) {
      alert(insertError.message);
      setLoading(false);
      return;
    }

    router.push("/posts/");
    router.refresh();

    setLoading(false);
  };

  return (
    <div className="w-full  md:max-w-full mx-auto pt-1 ">
      <div className="p-6 border border-zinc-900 sm:rounded-md text-sm">
        <form onSubmit={onSubmit}>
          <label className="block mb-6 ">
            <div className="text-gray-700 py-1">Title</div>
            <input
              ref={titleRef}
              type="text"
              id="title"
              placeholder="Title"
              className="block py-4 px-3 w-full text-sm text-gray-50 placeholder-gray-10 font-medium outline-none bg-transparent border border-zinc-900 hover:border-white focus:border-green-500 rounded-lg"
              required
            />
          </label>

          <label className="block mb-6">
            <div className="text-gray-700 py-1">Content</div>
            <textarea
              ref={contentRef}
              id="content"
              placeholder="Content"
              rows={15}
              required
              className="
              text-zinc-300
            block
            w-full
            p-2.5
            mt-1
            border-green-500
            rounded-md
            shadow-sm
            focus:border-green-500
            focus:ring
  
            bg-[#09090B]
          "
            ></textarea>
          </label>
          <div className="mb-6">
            {loading ? (
              <div>Loading..</div>
            ) : (
              <button
                type="submit"
                className="
                text-zinc-900
            h-10
            px-5
            
            bg-green-500
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-green-700
            w-full md:w-auto
          "
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogNew;
