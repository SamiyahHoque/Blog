import { useState } from "react";
import { useRouter } from "next/router";

const SearchBar = ({ articles }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const router = useRouter();

  const handleSearch = () => {
    // Filter the articles based on the search query
    const filteredResults = articles.filter((article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Update the search results state
    setSearchResults(filteredResults);
  };

  const handleTitleClick = (slug, topic) => {
    // Redirect to the corresponding article page
    router.push(`/articles/${topic}/${slug}`);
  };

  return (
    <div className={`relative ${searchQuery.length > 0 ? "shadow-md" : ""}`}>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          handleSearch();
        }}
        className="mr-2 px-4 py-2 border rounded-md"
      />
      <button
        onClick={handleSearch}
        className="ml-2 px-4 py-2 bg-gray-900 text-white rounded-md"
      >
        Search
      </button>

      {/* Display the search results */}
      {searchQuery.length > 0 && (
        <ul className="bg-white border border-gray-300 rounded-md shadow-md mt-4">
          {searchResults.map((result) => (
            <li
              key={result.slug}
              onClick={() => handleTitleClick(result.slug, result.topic)}
              className="cursor-pointer py-2 px-4 hover:bg-gray-100"
            >
              {result.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;