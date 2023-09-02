import Image from "next/image";
import Link from "next/link";
import Date from "./ui/Date";
import LazyImage from "./ui/LazyImage";

export default function PostPage({ post }) {
  return (
    <>
      {post?.map((post) => (
        <div key={post.id} className="text-white p-5 cursor-pointer">
          <div className="font-medium text-xl">{post.title}</div>
          <div className="py-3">
            <LazyImage imageSrc={post.imgsrc} />
          </div>
          <div className="py-3 ">{post.content}</div>

          <div className=" opacity-75 py-5">
            <div className="">
              <div className="">Author: {post.username}</div>
              <Date dateString={post.created_at} />{" "}
            </div>
            <div>Category: {post.category}</div>
          </div>
        </div>
      ))}
    </>
  );
}
