import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProductCard from "./ProductCard";

export default function Landing() {
  return (
    <div>
      <Navbar />
      <main style={styles.main}>
        <h1 style={styles.title}>Shop by Category</h1>
        <p style={styles.subtitle}>Find the perfect pair for every occasion</p>
      </main>
      <ProductCard />
      <Footer />
    </div>
  );
}

const styles = {
  main: {
    maxWidth: 1100,
    margin: "64px auto",
    padding: "0 16px",
  },
  title: {
    fontSize: 36,
    margin: 0,
    fontWeight: 700,
    color: "#111827",
  },
  subtitle: {
    marginTop: 12,
    fontSize: 18,
    color: "#6b7280",
  },
};