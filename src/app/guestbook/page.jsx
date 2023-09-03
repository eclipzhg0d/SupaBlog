import React from "react";
import GuestBookPosts from "@/components/guestbook-post";
import GuestBookForm from "@/components/guestbook-form";

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
