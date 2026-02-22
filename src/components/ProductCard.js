import React from "react";
import "./ProductCard.css";

const products = [
  {
    id: 1,
    name: "YSL Black Opium EDP for Women 90ml For AnyBody Him and Her",
    price: "₹11,690",
    preorder: "₹9,936",
    img: "https://i.imgur.com/4AiXzf8.png",
  },
  {
    id: 2,
    name: "GiorFiorgio Armani Acqua Di Gio Profondo Eau De Parfum, Men, 100ML",
    price: "₹9,890",
    preorder: "₹8,406",
    img: "https://i.imgur.com/Z7AzH2c.png",
  },
  {
    id: 3,
    name: "Burberry Goddess Eau de Parfum Intense for Women 100ml (3.3oz)",
    price: "₹12,290",
    preorder: "₹10,446",
    img: "https://i.imgur.com/5tj6S7O.png",
  },
  {
    id: 4,
    name: "Davidoff Cool Water Men EDT 125ml Spray For AnyBody Him And Her",
    price: "₹3,990",
    preorder: "₹2,300",
    img: "https://i.imgur.com/Wv9ZQpR.png",
  },
];

const PopularProducts = () => {
  return (
    <section className="popular-section">
      <div className="popular-header">
        <h2>Popular Products</h2>
        <div className="nav-buttons">
          <button className="nav-btn">‹</button>
          <button className="nav-btn">›</button>
        </div>
      </div>

      <div className="products-grid">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            <div className="img-box">
              <img src={item.img} alt={item.name} />
            </div>

            <div className="product-info">
              <h3>{item.name}</h3>
              <p className="price">{item.price}</p>

              {item.preorder && (
                <p className="preorder">
                  Pre-order at <span>{item.preorder}</span>
                </p>
              )}

              <button className="add-btn">+ Add</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;