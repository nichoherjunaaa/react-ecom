import React from 'react'
import CardProduct from './CardProduct';
const FEATURED_PRODUCTS = [
    {
        id: 1,
        name: "Batik Tulis Premium",
        location: "Yogyakarta",
        price: 320000,
        originalPrice: 400000,
        discount: "-20%",
        rating: 5,
        review: 128,
        image: "/placeholder.svg?height=200&width=300",
        tag: "discount",
        isWishlisted: false
    },
    {
        id: 2,
        name: "Kopi Arabika Gayo",
        location: "Aceh",
        price: 85000,
        rating: 5,
        review: 256,
        image: "/placeholder.svg?height=200&width=300",
        tag: "bestseller",
        isWishlisted: false,
        image: "https://images.unsplash.com/photo-1584880368838-f60e501e7493?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 3,
        name: "Tas Rajut Handmade",
        location: "Bandung",
        price: 125000,
        rating: 4,
        review: 89,
        image: "/placeholder.svg?height=200&width=300",
        isWishlisted: true
    },
    {
        id: 4,
        name: "Keripik Singkong Pedas",
        location: "Malang",
        price: 25000,
        rating: 5,
        review: 45,
        image: "/placeholder.svg?height=200&width=300",
        tag: "new",
        isWishlisted: false
    }
];
const FeaturedProducts = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-12">
                    <h3 className="text-3xl font-bold text-gray-800">Produk Unggulan</h3>
                    <button className="text-primary font-semibold hover:underline">Lihat Semua</button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {FEATURED_PRODUCTS.map((product) => (
                        <CardProduct key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturedProducts