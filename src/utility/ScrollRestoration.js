// src/components/ScrollRestoration.js
import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollRestoration = () => {
    const { pathname, key, state } = useLocation();
  
    // Save scroll position
    useEffect(() => {
      const scrollPositions = JSON.parse(
        sessionStorage.getItem("scrollPositions") || "{}"
      );
      scrollPositions[pathname + state?.key] = window.scrollY; // Unique key for dynamic routes
      sessionStorage.setItem("scrollPositions", JSON.stringify(scrollPositions));
    }, [pathname, key, state?.key]);
  
    // Restore scroll position
    useEffect(() => {
      const scrollPositions = JSON.parse(
        sessionStorage.getItem("scrollPositions") || "{}"
      );
      const savedPosition = scrollPositions[pathname + state?.key];
      if (savedPosition) window.scrollTo(0, savedPosition);
    }, [pathname, state?.key]);
  
    return null;
  };

export default ScrollRestoration;
