import About from "../About/About";
import SearchResults from "../SearchResults/SearchResults";

function Main({ articles = [], searchKeyword }) {
  return (
    <main className="main">
      {articles.length > 0 && (
        <SearchResults articles={articles} searchKeyword={searchKeyword} />
      )}

      <About />
    </main>
  );
}

export default Main;
