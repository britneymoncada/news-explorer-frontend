import notFoundIcon from "../../images/not-found-icon.svg";
import "./NothingFound.css";

function NothingFound() {
  return (
    <section className="nothing-found">
      <img className="nothing-found__icon" src={notFoundIcon} alt="" />

      <h2 className="nothing-found__title">Nothing found</h2>

      <p className="nothing-found__text">
        Sorry, but nothing matched
        <br />
        your search terms.
      </p>
    </section>
  );
}

export default NothingFound;
