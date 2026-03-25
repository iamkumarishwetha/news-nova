import { useLocation } from "react-router-dom";

const NewsDetails = () => {
  const location = useLocation();
  const article = location.state;

  if (!article) {
    return <p className="p-6">No article data found</p>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Title */}
      <h1 className="text-2xl font-bold mb-4">{article.title}</h1>

      {/* Image */}
      <img
        src={article.urlToImage}
        alt="news"
        className="w-full h-80 object-cover rounded mb-4"
      />

      {/* Meta info */}
      <p className="text-sm text-gray-500 mb-2">
        {article.author} | {article.source?.name}
      </p>

      <p className="text-sm text-gray-400 mb-4">
        {new Date(article.publishedAt).toLocaleString()}
      </p>

      {/* Description */}
      <p className="text-gray-700 mb-4">{article.description}</p>

      {/* Content */}
      <p className="text-gray-800 mb-6">{article.content}</p>

      {/* Optional link */}
      <a href={article.url} target="_blank" className="text-blue-500 underline">
        Read full article on source
      </a>
    </div>
  );
};

export default NewsDetails;
