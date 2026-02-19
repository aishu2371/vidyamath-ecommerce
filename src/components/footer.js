import React from "react";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "12px 16px", textAlign: "center" }}>
        <small>© {new Date().getFullYear()} Vidyamath — All rights reserved.</small>
      </div>
    </footer>
  );
}

const styles = {
  footer: { borderTop: "1px solid #f0f0f0", marginTop: 24 },
};
