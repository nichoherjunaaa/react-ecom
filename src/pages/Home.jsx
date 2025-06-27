import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import Newsletter from '../components/Newsletter';
import FeaturedProducts from '../components/FeaturedProducts';

const FloatingCartButton = () => (
    <div className="fixed bottom-6 right-6 md:hidden">
        <button className="bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary/90 transition-colors">
            <i className="fas fa-shopping-cart text-xl" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">5</span>
        </button>
    </div>
);

// Main Component
const Home = () => {
    return (
        <>
            <Hero />
            <Categories />
            <FeaturedProducts />
            <Newsletter />
            <FloatingCartButton />
        </>
    );
};

export default Home;