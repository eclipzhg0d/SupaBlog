"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import supabase from "@/utils/supabase";
import { useSession, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

export default function CommentForm({ id }) {
  const router = useRouter();
  const { session } = useSession();
  const contentRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error: insertError } = await supabase.from("comments").insert({
      content: contentRef.current.value,
      user_id: session.user.id,
      username: session.user.username,
      post_id: id,
    });

    if (insertError) {
      alert(insertError.message);
      setLoading(false);
      return;
    }

    setLoading(false);
  };
  return (
    <div className="">
      <div className="text-zinc-200 text-lg py-10">Comments</div>
      <div>
        <div className="w-full  md:max-w-full mx-auto pt-1 ">
          <div className="p-6 border border-zinc-900 sm:rounded-md text-sm">
            <form onSubmit={onSubmit}>
              <SignedIn>
                <label className="block mb-6">
                  <div className="text-gray-700 py-1">Write a comment</div>
                  <textarea
                    ref={contentRef}
                    id="content"
                    placeholder="Your comment here.."
                    rows={3}
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
              </SignedIn>
              <SignedOut>
                <div className="alert text-white opacity-25 text-sm my-5">
                  <span>Please sign-in to create a comment.</span>
                  <SignInButton>
                    <button className="text-sm  text-green-500  transition duration-300">
                      Sign In
                    </button>
                  </SignInButton>
                </div>
              </SignedOut>
              <SignedIn>
                <div className="">
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
              </SignedIn>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
