

import React from 'react';

const sampleProducts = [
	{ id: 1, name: 'Wireless Headphones', price: 79.99, image: 'https://source.unsplash.com/collection/190727/400x300?sig=1' },
	{ id: 2, name: 'Smart Watch', price: 129.99, image: 'https://source.unsplash.com/collection/190727/400x300?sig=2' },
	{ id: 3, name: 'Portable Speaker', price: 49.99, image: 'https://source.unsplash.com/collection/190727/400x300?sig=3' },
	{ id: 4, name: 'Classic Sunglasses', price: 24.99, image: 'https://source.unsplash.com/collection/190727/400x300?sig=4' },
	{ id: 5, name: 'Backpack', price: 39.99, image: 'https://source.unsplash.com/collection/190727/400x300?sig=5' },
	{ id: 6, name: 'Running Shoes', price: 59.99, image: 'https://source.unsplash.com/collection/190727/400x300?sig=6' },
];

function ProductCard({ product }) {
	return (
		<div style={styles.card}>
			<img src={product.image} alt={product.name} style={styles.productImage} />
			<div style={styles.cardBody}>
				<h3 style={styles.productName}>{product.name}</h3>
				<p style={styles.price}>${product.price.toFixed(2)}</p>
				<button style={styles.button}>Add to cart</button>
			</div>
		</div>
	);
}

export default function Home() {
	return (
		<main>
			<section style={styles.hero}>
				<div style={styles.heroInner}>
					<h1 style={styles.heroTitle}>Discover products you love</h1>
					<p style={styles.heroSubtitle}>Curated picks, great prices — delivered fast.</p>
					<a href="/" style={styles.cta}>Shop Now</a>
				</div>
			</section>

			<section style={styles.container}>
				<h2 style={styles.sectionTitle}>Featured products</h2>
				<div style={styles.grid}>
					{sampleProducts.map(p => (
						<ProductCard key={p.id} product={p} />
					))}
				</div>
			</section>
		</main>
	);
}

const styles = {
	hero: {
		backgroundImage: 'linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.25)), url(https://source.unsplash.com/1600x600/?shopping)',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		color: '#fff',
		padding: '60px 20px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	heroInner: { textAlign: 'center', maxWidth: 900 },
	heroTitle: { fontSize: 36, margin: 0, fontWeight: 700 },
	heroSubtitle: { fontSize: 18, margin: '12px 0 20px' },
	cta: {
		display: 'inline-block',
		background: '#ff6a00',
		color: '#fff',
		padding: '12px 20px',
		borderRadius: 6,
		textDecoration: 'none',
		fontWeight: 600,
	},
	container: { padding: '36px 20px', maxWidth: 1100, margin: '0 auto' },
	sectionTitle: { fontSize: 22, margin: '0 0 18px' },
	grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 18 },
	card: { border: '1px solid #eee', borderRadius: 8, overflow: 'hidden', background: '#fff', display: 'flex', flexDirection: 'column' },
	productImage: { width: '100%', height: 140, objectFit: 'cover' },
	cardBody: { padding: 12, display: 'flex', flexDirection: 'column', flex: 1 },
	productName: { fontSize: 16, margin: '0 0 8px', flex: '0 0 auto' },
	price: { fontSize: 14, color: '#333', margin: '0 0 12px' },
	button: { marginTop: 'auto', padding: '10px', background: '#0066ff', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' },
};

