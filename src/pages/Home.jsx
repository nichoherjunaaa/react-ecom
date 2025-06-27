import React from 'react'

const Home = () => {
    // Product data array
    const featuredProducts = [
        {
            id: 1,
            name: "Batik Tulis Premium",
            location: "Yogyakarta",
            price: 320000,
            originalPrice: 400000,
            discount: "-20%",
            rating: 5,
            reviewCount: 128,
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
            reviewCount: 256,
            image: "/placeholder.svg?height=200&width=300",
            tag: "bestseller",
            isWishlisted: false
        },
        {
            id: 3,
            name: "Tas Rajut Handmade",
            location: "Bandung",
            price: 125000,
            rating: 4,
            reviewCount: 89,
            image: "/placeholder.svg?height=200&width=300",
            isWishlisted: true
        },
        {
            id: 4,
            name: "Keripik Singkong Pedas",
            location: "Malang",
            price: 25000,
            rating: 5,
            reviewCount: 45,
            image: "/placeholder.svg?height=200&width=300",
            tag: "new",
            isWishlisted: false
        }
    ];

    // Categories data
    const categories = [
        { name: "Fashion", icon: "fa-tshirt", color: "orange" },
        { name: "Makanan", icon: "fa-utensils", color: "green" },
        { name: "Rumah Tangga", icon: "fa-home", color: "blue" },
        { name: "Kerajinan", icon: "fa-palette", color: "purple" },
        { name: "Kecantikan", icon: "fa-spa", color: "pink" },
        { name: "Lainnya", icon: "fa-gift", color: "yellow" }
    ];

    // Format currency helper
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            maximumFractionDigits: 0
        }).format(amount).replace('Rp', 'Rp ');
    };

    // Render star ratings
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <i
                    key={i}
                    className={`fas ${i <= rating ? 'fa-star' : 'far fa-star'}`}
                ></i>
            );
        }
        return stars;
    };

    // Get tag styling
    const getTagStyle = (tag) => {
        switch (tag) {
            case 'discount':
                return 'bg-red-500';
            case 'bestseller':
                return 'bg-green-500';
            case 'new':
                return 'bg-blue-500';
            default:
                return 'bg-primary';
        }
    };

    return (
        <>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">Dukung Produk Lokal Indonesia</h2>
                            <p className="text-xl mb-6 opacity-90">Temukan berbagai produk berkualitas dari UMKM terpercaya di seluruh Indonesia</p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                    Belanja Sekarang
                                </button>
                                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
                                    Pelajari Lebih Lanjut
                                </button>
                            </div>
                        </div>
                        <div className="hidden lg:block">
                            <img src="/placeholder.svg?height=400&width=500" alt="Hero Image" className="rounded-lg shadow-2xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Kategori Produk</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {categories.map((category, index) => (
                            <div key={index} className="text-center group cursor-pointer">
                                <div className={`bg-${category.color}-100 p-6 rounded-full w-20 h-20 mx-auto mb-4 group-hover:bg-${category.color}-200 transition-colors flex items-center justify-center`}>
                                    <i className={`fas ${category.icon} text-2xl text-${category.color}-600`}></i>
                                </div>
                                <p className="font-medium text-gray-700">{category.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-12">
                        <h3 className="text-3xl font-bold text-gray-800">Produk Unggulan</h3>
                        <button className="text-primary font-semibold hover:underline">Lihat Semua</button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {featuredProducts.map((product) => (
                            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
                                <div className="relative">
                                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                                    <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                                        <i className={`fas fa-heart ${product.isWishlisted ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}></i>
                                    </button>
                                    {product.tag && (
                                        <div className={`absolute top-3 left-3 ${getTagStyle(product.tag)} text-white px-2 py-1 rounded text-sm font-semibold`}>
                                            {product.tag === 'discount' ? product.discount :
                                                product.tag === 'bestseller' ? 'Terlaris' : 'Baru'}
                                        </div>
                                    )}
                                </div>
                                <div className="p-4">
                                    <h4 className="font-semibold text-gray-800 mb-2">{product.name}</h4>
                                    <p className="text-gray-600 text-sm mb-2">{product.location}</p>
                                    <div className="flex items-center mb-2">
                                        <div className="flex text-yellow-400">
                                            {renderStars(product.rating)}
                                        </div>
                                        <span className="text-gray-600 text-sm ml-2">({product.reviewCount})</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className="text-lg font-bold text-primary">{formatCurrency(product.price)}</span>
                                            {product.originalPrice && (
                                                <span className="text-sm text-gray-500 line-through ml-2">
                                                    {formatCurrency(product.originalPrice)}
                                                </span>
                                            )}
                                        </div>
                                        <button className="bg-primary text-white px-3 py-1 rounded-lg hover:bg-primary/90 transition-colors">
                                            <i className="fas fa-cart-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-16 bg-primary text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h3 className="text-3xl font-bold mb-4">Dapatkan Penawaran Terbaik</h3>
                    <p className="text-xl mb-8 opacity-90">Berlangganan newsletter kami untuk mendapatkan info produk terbaru dan promo menarik</p>
                    <div className="max-w-md mx-auto flex gap-4">
                        <input
                            type="email"
                            placeholder="Masukkan email Anda"
                            className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                        />
                        <button className="bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors">
                            Berlangganan
                        </button>
                    </div>
                </div>
            </section>

            {/* Floating Cart Button (Mobile) */}
            <div className="fixed bottom-6 right-6 md:hidden">
                <button className="bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary/90 transition-colors">
                    <i className="fas fa-shopping-cart text-xl"></i>
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">5</span>
                </button>
            </div>
        </>
    )
}

export default Home