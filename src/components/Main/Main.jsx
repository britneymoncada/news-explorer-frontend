import About from "../About/About";
import SearchResults from "../SearchResults/SearchResults";
import SavedNews from "../SavedNews/SavedNews";

function Main({
  articles = [],
  searchKeyword,
  isLoggedIn,
  currentPage,
  savedArticles,
  onSaveArticle,
  userName,
}) {
  if (currentPage === "saved") {
    return (
      <main className="main">
        <SavedNews
          articles={savedArticles}
          onSaveArticle={onSaveArticle}
          userName={userName}
        />
      </main>
    );
  }

  return (
    <main className="main">
      {articles.length > 0 && (
        <SearchResults
          articles={articles}
          searchKeyword={searchKeyword}
          isLoggedIn={isLoggedIn}
          savedArticles={savedArticles}
          onSaveArticle={onSaveArticle}
        />
      )}

      <About />
    </main>
  );
}

export default Main;
