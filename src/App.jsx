import { useState } from "react";

import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import LoginModal from "./components/LoginModal/LoginModal";
import SignupModal from "./components/SignupModal/SignupModal";
import SignupSuccess from "./components/SignupSuccess/SignupSuccess";

function App() {
  const [activeModal, setActiveModal] = useState(null);

  const [articles, setArticles] = useState([]);

  const [searchKeyword, setSearchKeyword] = useState("");

  function handleOpenLogin() {
    setActiveModal("login");
  }

  function handleOpenSignup() {
    setActiveModal("signup");
  }

  function handleSignupSuccess() {
    setActiveModal("success");
  }

  function handleCloseModal() {
    setActiveModal(null);
  }

  return (
    <div className="page">
      <Hero
        onOpenLogin={handleOpenLogin}
        isModalOpen={activeModal !== null}
        onSearch={(keyword, articles) => {
          setSearchKeyword(keyword);
          setArticles(articles);
        }}
      />
      <Main articles={articles} searchKeyword={searchKeyword} />
      <Footer />
      {activeModal === "login" && (
        <LoginModal
          onClose={handleCloseModal}
          onOpenSignup={handleOpenSignup}
        />
      )}

      {activeModal === "signup" && (
        <SignupModal
          onClose={handleCloseModal}
          onOpenLogin={handleOpenLogin}
          onSignupSuccess={handleSignupSuccess}
        />
      )}

      {activeModal === "success" && (
        <SignupSuccess
          onClose={handleCloseModal}
          onOpenLogin={handleOpenLogin}
        />
      )}
    </div>
  );
}

export default App;
