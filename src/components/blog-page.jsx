import FormatDate from "./ui/date";
import LazyImage from "./ui/lazy-image";

export default function BlogPage({ post }) {
  return (
    <>
      {post?.map((post) => (
        <div key={post.id} className="text-white p-5 cursor-pointer ">
          <div className="font-medium text-xl text-center pt-10">
            {post.title}
          </div>
          <div className="flex items-center gap-5 justify-center opacity-25 text-xs font-base py-10">
            <div>Author: {post.username}</div>
            <div>
              Posted on: <FormatDate dateString={post.created_at} />
            </div>
            <div className="">
              <button className="px-3 py-1 rounded-md bg-zinc-900 text-white">
                {post.category}
              </button>
            </div>
          </div>
          <div className="py-3">
            <LazyImage imageSrc={post.imgsrc} />
          </div>
          <div className="py-3 ">{post.content}</div>
        </div>
      ))}
    </>
  );
}
