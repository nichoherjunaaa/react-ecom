import React from 'react'

const Home = () => {
    return (
        <>
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
                        <div className="text-center group cursor-pointer">
                            <div className="bg-orange-100 p-6 rounded-full w-20 h-20 mx-auto mb-4 group-hover:bg-orange-200 transition-colors flex items-center justify-center">
                                <i className="fas fa-tshirt text-2xl text-orange-600"></i>
                            </div>
                            <p className="font-medium text-gray-700">Fashion</p>
                        </div>
                        <div className="text-center group cursor-pointer">
                            <div className="bg-green-100 p-6 rounded-full w-20 h-20 mx-auto mb-4 group-hover:bg-green-200 transition-colors flex items-center justify-center">
                                <i className="fas fa-utensils text-2xl text-green-600"></i>
                            </div>
                            <p className="font-medium text-gray-700">Makanan</p>
                        </div>
                        <div className="text-center group cursor-pointer">
                            <div className="bg-blue-100 p-6 rounded-full w-20 h-20 mx-auto mb-4 group-hover:bg-blue-200 transition-colors flex items-center justify-center">
                                <i className="fas fa-home text-2xl text-blue-600"></i>
                            </div>
                            <p className="font-medium text-gray-700">Rumah Tangga</p>
                        </div>
                        <div className="text-center group cursor-pointer">
                            <div className="bg-purple-100 p-6 rounded-full w-20 h-20 mx-auto mb-4 group-hover:bg-purple-200 transition-colors flex items-center justify-center">
                                <i className="fas fa-palette text-2xl text-purple-600"></i>
                            </div>
                            <p className="font-medium text-gray-700">Kerajinan</p>
                        </div>
                        <div className="text-center group cursor-pointer">
                            <div className="bg-pink-100 p-6 rounded-full w-20 h-20 mx-auto mb-4 group-hover:bg-pink-200 transition-colors flex items-center justify-center">
                                <i className="fas fa-spa text-2xl text-pink-600"></i>
                            </div>
                            <p className="font-medium text-gray-700">Kecantikan</p>
                        </div>
                        <div className="text-center group cursor-pointer">
                            <div className="bg-yellow-100 p-6 rounded-full w-20 h-20 mx-auto mb-4 group-hover:bg-yellow-200 transition-colors flex items-center justify-center">
                                <i className="fas fa-gift text-2xl text-yellow-600"></i>
                            </div>
                            <p className="font-medium text-gray-700">Lainnya</p>
                        </div>
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
                        {/* Product Card 1 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
                            <div className="relative">
                                <img src="/placeholder.svg?height=200&width=300" alt="Batik Tulis" className="w-full h-48 object-cover" />
                                <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                                    <i className="fas fa-heart text-gray-400 hover:text-red-500"></i>
                                </button>
                                <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                                    -20%
                                </div>
                            </div>
                            <div className="p-4">
                                <h4 className="font-semibold text-gray-800 mb-2">Batik Tulis Premium</h4>
                                <p className="text-gray-600 text-sm mb-2">Yogyakarta</p>
                                <div className="flex items-center mb-2">
                                    <div className="flex text-yellow-400">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <span className="text-gray-600 text-sm ml-2">(128)</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <span className="text-lg font-bold text-primary">Rp 320.000</span>
                                        <span className="text-sm text-gray-500 line-through ml-2">Rp 400.000</span>
                                    </div>
                                    <button className="bg-primary text-white px-3 py-1 rounded-lg hover:bg-primary/90 transition-colors">
                                        <i className="fas fa-cart-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Product Card 2 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
                            <div className="relative">
                                <img src="/placeholder.svg?height=200&width=300" alt="Kopi Arabika" className="w-full h-48 object-cover" />
                                <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                                    <i className="fas fa-heart text-gray-400 hover:text-red-500"></i>
                                </button>
                                <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded text-sm font-semibold">
                                    Terlaris
                                </div>
                            </div>
                            <div className="p-4">
                                <h4 className="font-semibold text-gray-800 mb-2">Kopi Arabika Gayo</h4>
                                <p className="text-gray-600 text-sm mb-2">Aceh</p>
                                <div className="flex items-center mb-2">
                                    <div className="flex text-yellow-400">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <span className="text-gray-600 text-sm ml-2">(256)</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <span className="text-lg font-bold text-primary">Rp 85.000</span>
                                    </div>
                                    <button className="bg-primary text-white px-3 py-1 rounded-lg hover:bg-primary/90 transition-colors">
                                        <i className="fas fa-cart-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
                            <div className="relative">
                                <img src="/placeholder.svg?height=200&width=300" alt="Tas Rajut" className="w-full h-48 object-cover" />
                                <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                                    <i className="fas fa-heart text-red-500"></i>
                                </button>
                            </div>
                            <div className="p-4">
                                <h4 className="font-semibold text-gray-800 mb-2">Tas Rajut Handmade</h4>
                                <p className="text-gray-600 text-sm mb-2">Bandung</p>
                                <div className="flex items-center mb-2">
                                    <div className="flex text-yellow-400">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </div>
                                    <span className="text-gray-600 text-sm ml-2">(89)</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <span className="text-lg font-bold text-primary">Rp 125.000</span>
                                    </div>
                                    <button className="bg-primary text-white px-3 py-1 rounded-lg hover:bg-primary/90 transition-colors">
                                        <i className="fas fa-cart-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
                            <div className="relative">
                                <img src="/placeholder.svg?height=200&width=300" alt="Keripik Singkong" className="w-full h-48 object-cover" />
                                <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                                    <i className="fas fa-heart text-gray-400 hover:text-red-500"></i>
                                </button>
                                <div className="absolute top-3 left-3 bg-blue-500 text-white px-2 py-1 rounded text-sm font-semibold">
                                    Baru
                                </div>
                            </div>
                            <div className="p-4">
                                <h4 className="font-semibold text-gray-800 mb-2">Keripik Singkong Pedas</h4>
                                <p className="text-gray-600 text-sm mb-2">Malang</p>
                                <div className="flex items-center mb-2">
                                    <div className="flex text-yellow-400">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <span className="text-gray-600 text-sm ml-2">(45)</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <span className="text-lg font-bold text-primary">Rp 25.000</span>
                                    </div>
                                    <button className="bg-primary text-white px-3 py-1 rounded-lg hover:bg-primary/90 transition-colors">
                                        <i className="fas fa-cart-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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