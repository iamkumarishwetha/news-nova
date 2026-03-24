import {useEffect, useState } from "react";
import type { Article } from "../types/news";
import LikeDislike from "./LikeDislike";

const Body = () => {
const [articles, setArticles] = useState<Article[]>([]);
const [allNews, setAllNews] = useState<Article[]>([]);
const [search, setSearch] = useState("");
const fetchAllNews = async () => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}api/everything?q=${search}`
    );
    const data = await res.json();
    setAllNews(data.articles);
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

        <h2 className="text-2xl font-bold mb-4 !text-blue-600">All News</h2>

        {allNews.map((item, index) => (
        <div key={index} className="bg-white p-4 rounded shadow flex gap-4">
          <img
              src={item.urlToImage || "https://via.placeholder.com/150"}
              alt="news"
              className="w-32 h-24 object-cover rounded"
          />

          <div>
              <h3 className="font-semibold text-lg">{item.title}</h3>

              <p className="text-gray-600 text-sm">
              {item.description || "No description available"}
              </p>
              <LikeDislike articleId={item.url}/>
          </div>
        </div>
        ))}

      </div>

      {/* RIGHT SIDE - Top Headlines */}
      <div className="w-1/3">
        
        <h2 className="text-xl font-bold mb-4 !text-blue-600 line-clamp-2">Top Headlines</h2>

        <div className="space-y-4">

    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Top Headlines</h2>

      <div className="space-y-4">
        {articles.slice(0, 5).map((item, index) => (
          <div key={index} className="flex gap-3 items-center">
            <img
              src={item.urlToImage || "https://via.placeholder.com/80"}
              alt="headline"
              className="w-16 h-16 object-cover rounded"
            />

            <p className="text-sm font-medium">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
        </div>
      </div>
    </div>
  );
};

export default Body;