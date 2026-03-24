import { useState, useEffect } from "react";
type Props = {
  articleId: string;
};

const LikeDislike = ({ articleId }: Props) => {
  const [counts, setCounts] = useState({ likes: 0, dislikes: 0 });
  const handleReaction = async (articleId: string, reaction: string) => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first");
      return;
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}api/react`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          article_id: articleId,
          reaction: reaction,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        if (res.status === 401) {
          alert("Session expired. Please login again.");
          localStorage.removeItem("token");
          return;
        }

        alert(data.message || "Something went wrong");
        return;
      }

      console.log(data);
      await fetchCounts();
    } catch (error) {
      console.error(error);
    }
  };
  const fetchCounts = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}api/reactions?articleId=${encodeURIComponent(articleId)}`,
      );
      const data = await res.json();
      setCounts(data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchCounts();
  }, [articleId]);
  return (
    <div className="flex gap-4 mt-2">
      <button
        onClick={() => handleReaction(articleId, "like")}
        className="bg-gray-200 px-3 py-1 rounded hover:bg-green-500 hover:text-white cursor-pointer"
      >
        👍 Like ({counts.likes})
      </button>

      <button
        onClick={() => handleReaction(articleId, "dislike")}
        className="bg-gray-200 px-3 py-1 rounded hover:bg-red-500 hover:text-white cursor-pointer"
      >
        👎 Dislike ({counts.dislikes})
      </button>
    </div>
  );
};

export default LikeDislike;
