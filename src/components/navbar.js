import React from "react";
import vidyaLogo from "../assets/logo (1) (1).jpg"; // adjust filename if different

export default function Navbar({ cartCount = 0 }) {
  return (
    <>
      <header style={styles.navbar}>
        <div style={styles.logo}>
          <img src={vidyaLogo} alt="Vidyamath" style={styles.logoImg} />
        </div>

        <nav style={styles.navLinks} aria-label="Main navigation">
          <a href="/" style={styles.link}>Home</a>
          <a href="/categories" style={styles.link}>Categories</a>
          <a href="/about" style={styles.link}>About</a>
        </nav>
      </header>
    </>
  );
}

const styles = {
  navbar: {
    maxWidth: 1100,
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 16px",
    borderBottom: "1px solid #e6e6e6",
    background: "transparent",
    position: "sticky",
    top: 0,
    zIndex: 40,
  },
  logo: { display: "flex", alignItems: "center", gap: 8 },
  logoImg: { height: 36, objectFit: "contain" },
  navLinks: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 16px",
  },

  link: { 
    textDecoration: "none", 
    color: "#111",
    fontSize: 15,
    padding: "8px 12px", 
  },
};


