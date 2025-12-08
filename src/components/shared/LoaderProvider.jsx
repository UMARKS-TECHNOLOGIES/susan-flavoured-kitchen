import React, { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Preloader from "./Preloader";

const LoaderContext = createContext();

export const useLoader = () => useContext(LoaderContext);

export const LoaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // Helper function to wait for images
  const waitForImages = async () => {
    // 1. Wait for document ready if needed (mostly for initial load)
    if (document.readyState !== "complete") {
      await new Promise((resolve) => window.addEventListener("load", resolve));
    }

    // 2. Initial small delay to allow React to render the new route's DOM
    await new Promise((resolve) => setTimeout(resolve, 100));

    // 3. Find all images
    const images = Array.from(document.images);

    if (images.length === 0) {
      setIsLoading(false);
      return;
    }

    // 4. Wait for them to load
    const imagePromises = images.map((img) => {
      if (img.complete) return Promise.resolve();
      return new Promise((resolve) => {
        img.onload = resolve;
        img.onerror = resolve; // Don't block errors
      });
    });

    await Promise.all(imagePromises);

    // 5. Smooth finish
    setTimeout(() => setIsLoading(false), 800);
  };

  // Trigger on route change
  useEffect(() => {
    setIsLoading(true);
    waitForImages();

    // Safety timeout increased to 15s to match previous robustness
    const safety = setTimeout(() => setIsLoading(false), 15000);
    return () => clearTimeout(safety);
  }, [location.pathname]);

  // Method to manually trigger loader (for "activity processing")
  const triggerLoading = async (promise) => {
    setIsLoading(true);
    if (promise) {
      try {
        await promise;
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <LoaderContext.Provider value={{ isLoading, setIsLoading, triggerLoading }}>
      {isLoading && <Preloader />}
      {children}
    </LoaderContext.Provider>
  );
};

export default LoaderProvider;
