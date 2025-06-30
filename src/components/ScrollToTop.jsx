// components/ScrollToTop.jsx
import { useEffect } from "react";

const ScrollToTop = ({ page }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]); // Triggers when page changes

  return null; // No UI, just side-effect
};

export default ScrollToTop;
