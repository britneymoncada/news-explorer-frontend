import { useState } from "react";
import { searchNews } from "../../utils/newsApi";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [keyword, setKeyword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    const trimmedKeyword = keyword.trim();

    if (!trimmedKeyword) {
      return;
    }

    setIsLoading(true);

    try {
      const data = await searchNews(trimmedKeyword);

      onSearch(trimmedKeyword, data.articles || []);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="search-form__input"
        placeholder="Enter topic"
        aria-label="Search news by keyword"
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      <button
        className="search-form__button"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? "Searching..." : "Search"}
      </button>
    </form>
  );
}

export default SearchForm;
