import React, { useState } from "react";

function Navbar({ cartCount = 0 }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const onSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    alert("Search: " + query);
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <div style={styles.left}>
          <button aria-label="menu" onClick={() => setOpen(!open)} style={styles.burger}>☰</button>
          <a href="/" style={styles.brand}>Vidyamath</a>
        </div>

        <form onSubmit={onSearch} style={styles.searchForm}>
          <input
            aria-label="search"
            placeholder="Search courses, products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={styles.searchInput}
          />
          <button type="submit" style={styles.searchBtn}>Search</button>
        </form>

        <div style={styles.right}>
          <a href="/categories" style={styles.link}>Categories</a>
          <a href="/account" style={styles.link}>Account</a>
          <a href="/cart" style={{ ...styles.link, ...styles.cart }}>🛒 <span style={styles.cartCount}>{cartCount}</span></a>
        </div>
      </div>

      {open && (
        <div style={styles.mobileMenu}>
          <a href="/" style={styles.mobileLink}>Home</a>
          <a href="/categories" style={styles.mobileLink}>Categories</a>
          <a href="/account" style={styles.mobileLink}>Account</a>
          <a href="/cart" style={styles.mobileLink}>Cart ({cartCount})</a>
        </div>
      )}
    </nav>
  );
}

const styles = {
  nav: { background: "#fff", borderBottom: "1px solid #eee", position: "sticky", top: 0, zIndex: 50 },
  container: { maxWidth: 1100, margin: "0 auto", padding: "10px 16px", display: "flex", alignItems: "center", gap: 12, justifyContent: "space-between" },
  left: { display: "flex", alignItems: "center", gap: 12 },
  burger: { border: "none", background: "transparent", fontSize: 20, cursor: "pointer" },
  brand: { textDecoration: "none", fontWeight: 700, color: "#111", fontSize: 18 },
  searchForm: { flex: 1, display: "flex", gap: 8, maxWidth: 560 },
  searchInput: { flex: 1, padding: "8px 10px", border: "1px solid #ddd", borderRadius: 4 },
  searchBtn: { padding: "8px 12px", background: "#007bff", color: "#fff", border: "none", borderRadius: 4 },
  right: { display: "flex", gap: 12, alignItems: "center" },
  link: { textDecoration: "none", color: "#111" },
  cart: { position: "relative" },
  cartCount: { marginLeft: 6, background: "#ff3b30", color: "#fff", padding: "2px 6px", borderRadius: 12, fontSize: 12 },
  mobileMenu: { padding: 12, borderTop: "1px solid #f5f5f5", display: "flex", flexDirection: "column", gap: 8 },
  mobileLink: { textDecoration: "none", color: "#111", padding: "6px 0" },
};

export default Navbar;
