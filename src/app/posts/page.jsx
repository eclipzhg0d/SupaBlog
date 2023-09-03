import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import Modal from "@/components/ui/Modal";

export default async function PostsRoot() {
  return (
    <>
      <PostForm />
      <PostList />
    </>
  );
}
