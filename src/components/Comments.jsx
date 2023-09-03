import CommentForm from "./CommentForm";
import CommentPosts from "./CommentPosts";
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
