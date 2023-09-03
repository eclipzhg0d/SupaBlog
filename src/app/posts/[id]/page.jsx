import React from "react";
import supabase from "@/utils/supabase";
import PostPage from "@/components/PostPage";
import Comments from "@/components/Comments";

export default async function PostPageById({ params: { id } }) {
  const { data, error } = await supabase.from("posts").select().match({ id });

  if (error) throw new Error("Fetching failed.");

  return (
    <>
      <PostPage post={data} />
      <Comments id={id} />
    </>
  );
}
