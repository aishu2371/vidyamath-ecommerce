import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar cartCount={0} />
      <main style={{ maxWidth: 1100, margin: "24px auto", padding: "0 16px" }}>
        <h1>Welcome to Vidyamath</h1>
        <p>Product details have been removed from this page.</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;

