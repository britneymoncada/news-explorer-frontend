import "./SavedNews.css";
import trashIcon from "../../images/trash-icon.svg";

function SavedNews({ articles = [], onSaveArticle, userName }) {
  return (
    <section className="saved-news">
      <div className="saved-news__header">
        <p className="saved-news__label">Saved articles</p>

        <h1 className="saved-news__title">
          {userName || "You"}, you have {articles.length} saved{" "}
          {articles.length === 1 ? "article" : "articles"}
        </h1>

        <p className="saved-news__keywords">
          By keywords:{" "}
          <strong>
            {[
              ...new Set(
                articles.map((article) => article.keyword).filter(Boolean),
              ),
            ].join(", ")}
          </strong>
        </p>
      </div>

      {articles.length === 0 ? (
        <p className="saved-news__empty">
          You don't have any saved articles yet.
        </p>
      ) : (
        <div className="saved-news__grid">
          {articles.map((article) => (
            <article className="news-card" key={article.url}>
              <div className="news-card__image-container">
                {article.urlToImage && (
                  <img
                    className="news-card__image"
                    src={article.urlToImage}
                    alt={article.title}
                  />
                )}

                <span className="news-card__keyword">{article.keyword}</span>

                <button
                  className="news-card__save-button news-card__save-button_saved"
                  type="button"
                  aria-label="Remove saved article"
                  onClick={() => onSaveArticle(article)}
                >
                  <img src={trashIcon} alt="" aria-hidden="true" />
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

                <h2 className="news-card__title">{article.title}</h2>

                <p className="news-card__description">
                  {article.description || ""}
                </p>

                <p className="news-card__source">
                  {article.source?.name || ""}
                </p>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default SavedNews;
