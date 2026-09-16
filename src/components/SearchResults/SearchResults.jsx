import { useState } from "react";
import bookmarkIcon from "../../images/bookmark-icon.svg";
import bookmarkFilledIcon from "../../images/bookmark-filled.svg";
import "./SearchResults.css";

function SearchResults({
  articles,
  isLoggedIn,
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

      <ul className="search-results__grid">
        {visibleArticles.map((article) => {
          const isSaved = isArticleSaved(article);

          return (
            <li className="news-card" key={article.url}>
              <a
                className="news-card__link"
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Read ${article.title}`}
              >
                <div className="news-card__image-container">
                  {article.urlToImage && (
                    <img
                      className="news-card__image"
                      src={article.urlToImage}
                      alt={article.title}
                    />
                  )}
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
              </a>

              <div className="news-card__save-wrapper">
                {!isLoggedIn && (
                  <span className="news-card__save-tooltip">
                    Sign in to save articles
                  </span>
                )}

                <button
                  className={`news-card__save-button ${
                    isSaved ? "news-card__save-button_saved" : ""
                  }`}
                  type="button"
                  aria-label={
                    isLoggedIn
                      ? isSaved
                        ? "Remove saved article"
                        : "Save article"
                      : "Sign in to save articles"
                  }
                  onClick={() => {
                    if (isLoggedIn) {
                      onSaveArticle(article);
                    }
                  }}
                >
                  <img
                    className="news-card__save-icon"
                    src={isSaved ? bookmarkFilledIcon : bookmarkIcon}
                    alt=""
                    aria-hidden="true"
                  />
                </button>
              </div>
            </li>
          );
        })}
      </ul>

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
