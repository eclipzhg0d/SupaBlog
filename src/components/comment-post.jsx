import FormatDate from "./ui/date";

export default async function CommentPost({ data }) {
  return (
    <div className="text-white pt-5">
      {data?.map((post) => (
        <div
          className="py-5 flex flex-col gap-3 border-b border-zinc-900"
          key={post.id}
        >
          <div className="font-medium">{post.username}</div>
          <div>{post.content}</div>
          <div className="text-sm opacity-50">
            <FormatDate dateString={post.created_at} />
          </div>
        </div>
      ))}
    </div>
  );
}
