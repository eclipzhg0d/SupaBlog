import supabase from "@/utils/supabase";
import Date from "./ui/date";

export default async function GuestBookPosts() {
  const { data, error } = await supabase
    .from("guestbook")
    .select("*")
    .order("id", { ascending: false });
  if (error) throw new Error("Fetching failed.");

  if (!data) {
    return <div className="text-white">No records to show.</div>;
  }
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
            <Date dateString={post.created_at} />
          </div>
        </div>
      ))}
    </div>
  );
}
