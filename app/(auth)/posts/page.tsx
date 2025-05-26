import { fetchPosts } from "@/lib/api";

export default async function PostsPage() {
  const { data: posts } = await fetchPosts(); // SSR – Node tarafında

  return (
    <main className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Posts</h1>
      <ul className="space-y-2">
        {posts.map((p: any) => (
          <li key={p.id} className="border p-3 rounded">
            <b>{p.name}</b> — lvl {p.level}
          </li>
        ))}
      </ul>
    </main>
  );
}
