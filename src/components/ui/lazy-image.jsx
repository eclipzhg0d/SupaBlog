"use client";

import { useState } from "react";
import Image from "next/image";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function LazyImage({ imageSrc }) {
  const [isLoading, setLoading] = useState(true);
  return (
    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 xl:aspect-w-16 xl:aspect-h-8">
      <Image
        src={imageSrc}
        fill
        style={{ objectFit: "cover" }}
        alt="Image"
        className={cn(
          "duration-700 ease-in-out group-hover:opacity-75",
          isLoading
            ? "scale-110 blur-2xl grayscale"
            : "scale-100 blur-0 grayscale-0"
        )}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
}
