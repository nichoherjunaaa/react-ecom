import React from 'react'
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Dukung Produk Lokal Indonesia</h2>
                        <p className="text-xl mb-6 opacity-90">Temukan berbagai produk berkualitas dari UMKM terpercaya di seluruh Indonesia</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/products" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                Belanja Sekarang
                            </Link>
                            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
                                Pelajari Lebih Lanjut
                            </button>
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <img src="/placeholder.svg?height=400&width=500" alt="Hero" className="rounded-lg shadow-2xl" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero