"use client";

import { useState } from "react";

const categoryNames = [
  {
    id: 1,
    name: "Travel",
  },
  {
    id: 2,
    name: "Technologies",
  },
  {
    id: 3,
    name: "E-Sports",
  },
];

export default function Categories() {
  const [active, setActive] = useState(false);

  return (
    <div className="w-full">
      <div className="flex items-center gap-3 text-sm  flex-wrap">
        {categoryNames.map((category) => (
          <button
            key={category.id}
            onClick={() => setActive(!active)}
            className={`${
              active ? "bg-green-500 text-zinc-900" : "bg-zinc-900"
            } px-4 py-2 rounded-md  text-white hover:bg-zinc-800 transition duration-300`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}
