import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';

const products = [
  {
    id: 1,
    title: 'Minimalist Overcoat',
    category: 'Outerwear',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Silk Blend Blouse',
    category: 'Tops',
    price: 89.50,
    image: 'https://images.unsplash.com/photo-1604085572502-b4308a313c4c?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Tailored Trousers',
    category: 'Bottoms',
    price: 125.00,
    image: 'https://images.unsplash.com/photo-1594895697334-11883be75a13?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Classic Leather Tote',
    category: 'Accessories',
    price: 195.00,
    image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1974&auto=format&fit=crop',
  },
];

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      
      <section id="new" className="container" style={{ padding: '6rem 2rem' }}>
        <div className="flex justify-between items-center" style={{ marginBottom: '3rem' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>New Arrivals</h2>
            <p className="subtitle">Curated for the season</p>
          </div>
          <button className="btn btn-outline" style={{ display: 'none' }}>View All</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      <footer style={{ backgroundColor: 'var(--surface-color)', padding: '4rem 2rem', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container text-center">
          <h2 style={{ fontSize: '2rem', letterSpacing: '0.2em', marginBottom: '1rem' }}>
            VOGUE<span style={{ color: 'var(--accent-color)' }}>.</span>
          </h2>
          <p className="subtitle" style={{ marginBottom: '2rem' }}>Elevating everyday style since 2026.</p>
          <div className="flex justify-center gap-2">
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              &copy; {new Date().getFullYear()} VOGUE Fashion. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
