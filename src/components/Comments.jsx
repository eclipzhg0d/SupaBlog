import CommentForm from "./comment-form";
import CommentPosts from "./comment-post";
import supabase from "@/utils/supabase";

export default async function Comments({ id }) {
  const { data, error } = await supabase
    .from("comments")
    .select("*")
    .eq("post_id", id)
    .order("id", { ascending: false });

  if (error) throw new Error("Fetching failed.");
  return (
    <>
      <CommentForm id={id} />
      <CommentPosts data={data} />
    </>
  );
}
