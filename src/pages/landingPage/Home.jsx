import React, { lazy, Suspense } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import SectionSkeleton from "./components/SectionSkeleton";

const Herosection = lazy(() => import("./components/Herosection"));
const Categories = lazy(() => import("./components/Categories"));
const PopularDishes = lazy(() => import("./components/PopularDishes"));
const About = lazy(() => import("./components/About"));
const Catering = lazy(() => import("./components/Catering"));
const Testimonial = lazy(() => import("./components/Testimonial"));

const Home = () => {
  return (
    <div className="bg-[#fffcfa] pt-6 overflow-hidden">
      <Navbar />

      <Suspense fallback={<SectionSkeleton height="500px" />}>
        <Herosection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Categories />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <PopularDishes />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <About />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Catering />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Testimonial />
      </Suspense>

      <Footer />
    </div>
  );
};

export default Home;
