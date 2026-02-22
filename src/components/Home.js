import React from "react";
import Navbar from "./navbar";
import Footer from "./Footer";
import ProductCard from "./ProductCard";
import Banner from "./Banner";

export default function Landing() {
  return (
    <div>
      <Navbar />
      <Banner   />
      <ProductCard />
      <Footer />
    </div>
  );
}

