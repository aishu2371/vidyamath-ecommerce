// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';import React from 'react';
import products from "../data";
import { styles } from './components/Products';
import ProductCard from "./ProductCard";
export default function Products({ addToCart = () => { } }) {

    const raw = products && !Array.isArray(products) && products.default ? products.default : products;
    const list = Array.isArray(raw) ? raw : [];

    if (!list.length) {
        return (
            <section style={{ maxWidth: 1100, margin: "24px auto", padding: "0 16px" }}>
                <h2>No products found</h2>
            </section>
        );
    }

    return (
        <section style={{ maxWidth: 1100, margin: "24px auto", padding: "0 16px" }}>
            <h2>Products</h2>
            <div style={styles.grid}>
                {list.map((p) => (
                    <ProductCard key={p.id} product={p} addToCart={addToCart} />
                ))}
            </div>
        </section>
    );
}

