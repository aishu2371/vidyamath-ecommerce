import React from "react";
import Navbar from "./navbar";
import Footer from "./Footer";
import ProductCard from "./ProductCard";
import Banner from "./Banner";
import "./Home.css";

export default function Home() {
  return (
    <div className="landing-page">
      <Navbar />
      <Banner />
      <ProductCard />
      <Footer />
    </div>
  );
}

