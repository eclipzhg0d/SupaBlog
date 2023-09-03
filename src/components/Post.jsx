import Link from "next/link";
import LazyImage from "./ui/LazyImage";
import Date from "./ui/Date";

export const revalidate = 0;

export default function Post({ post }) {
  return (
    <Link href={`/posts/${post.id}`}>
      <div className="text-white p-5 opacity-75 hover:opacity-100 ease-in-out transition">
        <div className="font-medium text-xl h-[50px]">{post.title}</div>
        <div className="py-3">
          <LazyImage imageSrc={post.imgsrc} />
        </div>
        <div className="opacity-50 flex items-center justify-between">
          <div>
            <div>{post.username}</div>
          </div>
          <div className="text-sm">
            <Date dateString={post.created_at} />
          </div>
        </div>
      </div>
    </Link>
  );
}
