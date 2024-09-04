import React from "react";
import BlogComponent from "../components/BlogPage/BlogContent";
import HeroSection from "../components/BlogPage/HeroSection";

export default function Blog() {
  return (
    <div className="bg-black ">
      <HeroSection />
      <BlogComponent />
    </div>
  );
}
