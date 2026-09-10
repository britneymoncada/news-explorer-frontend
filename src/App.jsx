import { useEffect, useState } from "react";

import Header from "./components/Header/Header";
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

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  const [userName, setUserName] = useState(() => {
    return localStorage.getItem("userName") || "";
  });

  const [currentPage, setCurrentPage] = useState("home");

  const [temporarySavedArticles, setTemporarySavedArticles] = useState([]);

  const [savedArticles, setSavedArticles] = useState(() => {
    const saved = localStorage.getItem("savedArticles");

    return saved ? JSON.parse(saved) : [];
  });

  // Keep saved articles in localStorage
  useEffect(() => {
    localStorage.setItem("savedArticles", JSON.stringify(savedArticles));
  }, [savedArticles]);

  // Keep login status in localStorage
  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  // Keep username in localStorage
  useEffect(() => {
    localStorage.setItem("userName", userName);
  }, [userName]);

  function handleOpenLogin() {
    setActiveModal("login");
  }

  function handleOpenSignup() {
    setActiveModal("signup");
  }

  function handleSignupSuccess(username) {
    setUserName(username);
    setActiveModal("success");
  }

  function handleLogin() {
    setIsLoggedIn(true);
    setCurrentPage("home");
    setActiveModal(null);
  }

  function handleLogout() {
    setIsLoggedIn(false);
    setUserName("");
    setCurrentPage("home");
    setActiveModal(null);
  }

  function handleCloseModal() {
    setActiveModal(null);
  }

  function handleNavigate(page) {
    if (page === "saved" && !isLoggedIn) {
      return;
    }

    setCurrentPage(page);
  }

  function handleSearch(keyword, newArticles) {
    setSearchKeyword(keyword);
    setArticles(newArticles);
    setCurrentPage("home");
  }

  function handleSaveArticle(article) {
    if (!isLoggedIn) {
      setTemporarySavedArticles((currentArticles) => {
        const alreadySaved = currentArticles.some(
          (savedArticle) => savedArticle.url === article.url,
        );

        if (alreadySaved) {
          return currentArticles.filter(
            (savedArticle) => savedArticle.url !== article.url,
          );
        }

        return [...currentArticles, article];
      });

      return;
    }

    setSavedArticles((currentSavedArticles) => {
      const alreadySaved = currentSavedArticles.some(
        (savedArticle) => savedArticle.url === article.url,
      );

      if (alreadySaved) {
        return currentSavedArticles.filter(
          (savedArticle) => savedArticle.url !== article.url,
        );
      }

      return [
        ...currentSavedArticles,
        {
          ...article,
          keyword: searchKeyword,
        },
      ];
    });
  }

  return (
    <div className="page">
      <Header
        onOpenLogin={handleOpenLogin}
        isModalOpen={activeModal !== null}
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
        onNavigate={handleNavigate}
        currentPage={currentPage}
        userName={userName}
      />

      {currentPage === "home" && <Hero onSearch={handleSearch} />}

      <Main
        articles={articles}
        searchKeyword={searchKeyword}
        isLoggedIn={isLoggedIn}
        currentPage={currentPage}
        savedArticles={isLoggedIn ? savedArticles : temporarySavedArticles}
        onSaveArticle={handleSaveArticle}
        userName={userName}
      />

      <Footer />

      {activeModal === "login" && (
        <LoginModal
          onClose={handleCloseModal}
          onOpenSignup={handleOpenSignup}
          onLogin={handleLogin}
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
