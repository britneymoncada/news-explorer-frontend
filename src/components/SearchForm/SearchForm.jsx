import { useState } from "react";
import { searchNews } from "../../utils/NewsApi";
import "./SearchForm.css";

function SearchForm({ onSearch, onLoadingChange }) {
  const [keyword, setKeyword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const trimmedKeyword = keyword.trim();

    if (!trimmedKeyword) {
      return;
    }

    onLoadingChange(true);

    try {
      const data = await searchNews(trimmedKeyword);

      onSearch(trimmedKeyword, data.articles || []);
    } catch (error) {
      console.error(error);
      onSearch(trimmedKeyword, []);
    } finally {
      onLoadingChange(false);
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

      <button className="search-form__button" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
