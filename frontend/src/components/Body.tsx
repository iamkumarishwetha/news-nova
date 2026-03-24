import { useEffect, useState } from "react";
import type { Article } from "../types/news";
import LikeDislike from "./LikeDislike";

const Body = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [allNews, setAllNews] = useState<Article[]>([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const fetchAllNews = async () => {
    try {
      const query = search.trim() || "technology";

      const res = await fetch(
        `${import.meta.env.VITE_API_URL}api/everything?q=${query}&page=${page}&pageSize=5`,
      );

      const data = await res.json();
      setAllNews(data.articles || []);
      setTotalResults(data.totalResults || 0);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}api/top-headlines`)
      .then((res) => res.json())
      .then((data) => setArticles(data.articles))
      .catch((err) => console.error(err));
  }, []);
  useEffect(() => {
    fetchAllNews();
  }, [search, page]);
  useEffect(() => {
    setPage(1);
  }, [search]);
  return (
    <div className="flex gap-6 p-6 bg-gray-100 min-h-screen">
      {/* LEFT SIDE - All News */}
      <div className="w-2/3 space-y-4">
        <input
          type="text"
          placeholder="Search news..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />

        {allNews.length === 0 ? (
          <p className="text-center text-gray-500">No news found</p>
        ) : (
          allNews.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded shadow flex gap-4">
              <img
                src={item.urlToImage || "https://via.placeholder.com/150"}
                alt="news"
                className="w-full sm:w-32 h-48 sm:h-24 object-cover rounded"
              />

              <div>
                <h3 className="font-semibold text-lg !text-left">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm !text-left">
                  {item.description || "No description available"}
                </p>

                <LikeDislike articleId={item.url} />
              </div>
            </div>
          ))
        )}
        <div className="flex justify-center gap-4 mt-6">
          <button
            disabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}
            className={`px-4 py-2 rounded ${
              page === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-gray-300"
            }`}
          >
            Prev
          </button>

          <span>Page {page}</span>

          <button
            disabled={page * 5 >= totalResults}
            onClick={() => setPage((prev) => prev + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Next
          </button>
        </div>
      </div>

      {/* RIGHT SIDE - Top Headlines */}
      <div className="w-1/3">
        <div className="space-y-4">
          <h2 className="!text-md font-bold mb-4 !text-blue-600 !text-left">
            Top Headlines
          </h2>

          <div className="space-y-4">
            {articles.slice(0, 10).map((item, index) => (
              <div key={index} className="flex gap-3 items-center">
                <img
                  src={item.urlToImage || "https://via.placeholder.com/80"}
                  alt="headline"
                  className="w-16 h-16 object-cover rounded"
                />

                <p className="!text-sm font-medium !text-left">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
