import React from "react";
import GuestBookPosts from "@/components/GuestBookPosts";
import GuestBookForm from "@/components/GuestBookForm";

export default function GuestBookPage() {
  return (
    <>
      <div className="px-5">
        <GuestBookForm />
        <GuestBookPosts />
      </div>
    </>
  );
}
