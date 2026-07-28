// src/components/sidebar/LatestBlog.jsx
import { BookOpen } from "lucide-react";

const formatDate = (isoDate) =>
  new Date(isoDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

export default function LatestBlog({ posts }) {
  return (
    <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
      <div className="flex items-center gap-2 mb-4">
        <BookOpen size={18} className="text-blue-900" />
        <h2 className="text-lg font-bold text-gray-800">Latest From The Blog</h2>
      </div>

      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id}>
            <a href="#" className="flex gap-3 group">
              <img
                src={post.image}
                alt={post.title}
                className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                loading="lazy"
              />
              <div className="min-w-0">
                <p className="text-sm font-medium text-gray-800 leading-snug line-clamp-2 group-hover:text-blue-900 transition-colors">
                  {post.title}
                </p>
                <p className="text-xs text-gray-400 mt-1">{formatDate(post.date)}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}