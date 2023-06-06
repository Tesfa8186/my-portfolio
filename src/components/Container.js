import React, { useState } from "react";
import Header from "./Header";
// import Footer from "./Footer";
import Aboutme from "./pages/Aboutme";
// import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
// import Resume from "./pages/Resume";

function Container() {
  const [currentPage, setCureentPage] = useState("Aboutme");

  const renderPage = () => {
    if (currentPage === "Aboutme") {
      return <Aboutme />;
    }
    if (currentPage === "Portfoilio") {
      // return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    // return <Resume />;
  };

  const handlePageChange = (page) => setCureentPage(page);
  return (
    <>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      {/* <Footer /> */}
    </>
  );
}

export default Container;
