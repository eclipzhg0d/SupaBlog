"use server";

import supabase from "@/utils/supabase";
import Post from "@/components/Post";
import { revalidatePath } from "next/cache";

export default async function PostsRoot() {
  const { data, error } = await supabase.from("posts").select("*");
  if (error) throw new Error("Fetching failed.");
  revalidatePath("/");

  if (!data) {
    return <div className="text-white">No posts to show.</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
      {data?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
