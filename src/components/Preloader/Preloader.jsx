import "./Preloader.css";

function Preloader() {
  return (
    <section className="preloader">
      <div className="preloader__spinner"></div>
      <p className="preloader__text">Searching for news...</p>
    </section>
  );
}

export default Preloader;
