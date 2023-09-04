import React from "react";
import supabase from "@/utils/supabase";
import BlogPage from "@/components/blog-page";
import Comments from "@/components/comment-section";

export default async function BlogPageById({ params: { id } }) {
  const { data, error } = await supabase.from("posts").select().match({ id });

  if (error) throw new Error("Fetching failed.");

  return (
    <>
      <BlogPage post={data} />
      <Comments id={id} />
    </>
  );
}
