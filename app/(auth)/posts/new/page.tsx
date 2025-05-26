// app/(authenticated)/posts/new/page.tsx
"use client"; // client component (form)

import { useState } from "react";
import { createPost } from "@/lib/api";

export default function NewPost() {
  const [fields, set] = useState({ name: "", level: 1 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createPost({ ...fields, authorId: 1 }); // authorId örnek
    location.href = "/posts";
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md p-4 space-y-2">
      <input
        placeholder="Name"
        className="border p-2 w-full"
        value={fields.name}
        onChange={(e) => set({ ...fields, name: e.target.value })}
      />
      <input
        type="number"
        min={1}
        className="border p-2 w-full"
        value={fields.level}
        onChange={(e) => set({ ...fields, level: +e.target.value })}
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Kaydet
      </button>
    </form>
  );
}
