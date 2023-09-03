"use client";

import supabase from "@/utils/supabase";

import { useEffect, useState } from "react";
import BlogPost from "@/components/blog-post";

export default function PostList() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .order("id", { ascending: false });
      if (error) throw new Error("Fetching failed.");

      if (!data) {
        return <div className="text-white">No posts to show.</div>;
      }
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
      {data?.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
}
