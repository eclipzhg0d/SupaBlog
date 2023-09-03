import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";

export default async function PostsRoot() {
  return (
    <>
      <PostForm />
      <PostList />
    </>
  );
}
