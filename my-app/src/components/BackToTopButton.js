import React, { useState, useEffect } from "react";

function BackToTopButton() {
  const [showButton, setShowButton] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "50px",
            right: "50px",
            padding: "10px",
            fontSize: "24px",
            backgroundColor: "#be50f4",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            cursor: "pointer",
            zIndex: 1000,
            width: "50px",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* SVG Arrow Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 12a.5.5 0 0 0 .5-.5V4.707l3.147 3.147a.5.5 0 0 0 .707-.708l-4-4a.5.5 0 0 0-.707 0l-4 4a.5.5 0 0 0 .707.708L7.5 4.707V11.5a.5.5 0 0 0 .5.5z"
            />
          </svg>
        </button>
      )}
    </>
  );
}

export default BackToTopButton;
