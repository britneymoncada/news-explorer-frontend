import About from "../About/About";
import SearchResults from "../SearchResults/SearchResults";
import SavedNews from "../SavedNews/SavedNews";
import Preloader from "../Preloader/Preloader";
import NothingFound from "../NothingFound/NothingFound";

function Main({
  articles = [],
  searchKeyword,
  isLoggedIn,
  currentPage,
  savedArticles,
  onSaveArticle,
  userName,
  isLoading,
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

  if (isLoading) {
    return (
      <main className="main">
        <Preloader />
      </main>
    );
  }

  return (
    <main className="main">
      {articles.length > 0 ? (
        <SearchResults
          articles={articles}
          isLoggedIn={isLoggedIn}
          savedArticles={savedArticles}
          onSaveArticle={onSaveArticle}
        />
      ) : searchKeyword ? (
        <NothingFound />
      ) : null}

      <About />
    </main>
  );
}

export default Main;
