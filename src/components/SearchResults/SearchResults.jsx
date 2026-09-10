import { useState } from "react";
import "./SearchResults.css";

function SearchResults({
  articles,
  searchKeyword,
  savedArticles = [],
  onSaveArticle,
}) {
  const [visibleCount, setVisibleCount] = useState(3);

  const visibleArticles = articles.slice(0, visibleCount);

  function handleShowMore() {
    setVisibleCount((currentCount) => currentCount + 3);
  }

  function isArticleSaved(article) {
    return savedArticles.some(
      (savedArticle) => savedArticle.url === article.url,
    );
  }

  return (
    <section className="search-results">
      <h2 className="search-results__title">Search results</h2>

      <div className="search-results__grid">
        {visibleArticles.map((article) => {
          const isSaved = isArticleSaved(article);

          return (
            <article className="news-card" key={article.url}>
              <div className="news-card__image-container">
                {article.urlToImage && (
                  <img
                    className="news-card__image"
                    src={article.urlToImage}
                    alt={article.title}
                  />
                )}

                <span className="news-card__keyword">{searchKeyword}</span>

                <button
                  className={`news-card__save-button ${
                    isSaved ? "news-card__save-button_saved" : ""
                  }`}
                  type="button"
                  aria-label={isSaved ? "Remove saved article" : "Save article"}
                  onClick={() => onSaveArticle(article)}
                >
                  <svg
                    className="news-card__save-icon"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M6 4.5C6 3.67 6.67 3 7.5 3h9c.83 0 1.5.67 1.5 1.5V21l-6-3.75L6 21V4.5Z"
                      fill={isSaved ? "currentColor" : "none"}
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <div className="news-card__content">
                <p className="news-card__date">
                  {article.publishedAt
                    ? new Date(article.publishedAt).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        },
                      )
                    : ""}
                </p>

                <h3 className="news-card__title">{article.title}</h3>

                <p className="news-card__description">
                  {article.description || ""}
                </p>

                <p className="news-card__source">
                  {article.source?.name || ""}
                </p>
              </div>
            </article>
          );
        })}
      </div>

      {visibleCount < articles.length && (
        <button
          className="search-results__show-more"
          type="button"
          onClick={handleShowMore}
        >
          Show more
        </button>
      )}
    </section>
  );
}

export default SearchResults;
