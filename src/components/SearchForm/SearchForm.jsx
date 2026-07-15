import "./SearchForm.css";

function SearchForm() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <section className="search-form">
      <div className="search-form__content">
        <h1 className="search-form__title">What's going on in the world?</h1>

        <p className="search-form__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>

        <form className="search-form__form" onSubmit={handleSubmit}>
          <input
            className="search-form__input"
            type="text"
            name="keyword"
            placeholder="Enter topic"
            aria-label="Search news by keyword"
          />

          <button className="search-form__button" type="submit">
            Search
          </button>
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
