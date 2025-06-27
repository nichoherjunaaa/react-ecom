import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
    const toggleMobileMenu = () => {
        // Implement your mobile menu toggle logic here
        const mobileMenu = document.getElementById('mobileMenu');
        if (mobileMenu) {
            mobileMenu.classList.toggle('hidden');
        }
    };

    return (
        <>
            <nav className="bg-white shadow-lg sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <h1 className="text-2xl font-bold text-primary">UMKM Store</h1>
                            </div>
                        </div>

                        <div className="hidden md:block flex-1 max-w-lg mx-8">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Cari produk UMKM..."
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                />
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                                    <i className="fas fa-search text-gray-400"></i>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            {/* Login & Register Buttons */}
                            <div className="hidden md:flex items-center space-x-2">
                                <Link to="/login" className="text-gray-600 hover:text-primary transition-colors px-3 py-1 rounded-lg border border-gray-300 hover:border-primary">
                                    Masuk
                                </Link>
                                <button className="bg-primary text-white px-3 py-1 rounded-lg hover:bg-primary/90 transition-colors">
                                    Daftar
                                </button>
                            </div>

                            {/* Wishlist */}
                            <button className="relative p-2 text-gray-600 hover:text-primary transition-colors">
                                <i className="fas fa-heart text-xl"></i>
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
                            </button>

                            {/* Cart */}
                            <button className="relative p-2 text-gray-600 hover:text-primary transition-colors">
                                <i className="fas fa-shopping-cart text-xl"></i>
                                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">5</span>
                            </button>

                            <div className="relative hidden">
                                <button className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors">
                                    <img src="/placeholder.svg?height=32&width=32" alt="Profile" className="h-8 w-8 rounded-full" />
                                    <span className="hidden lg:block">Akun</span>
                                </button>
                            </div>

                            <button className="md:hidden p-2 text-gray-600" onClick={toggleMobileMenu}>
                                <i className="fas fa-bars text-xl"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="md:hidden px-4 pb-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Cari produk UMKM..."
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                            <i className="fas fa-search text-gray-400"></i>
                        </div>
                    </div>
                </div>

                <div id="mobileMenu" className="md:hidden px-4 pb-4 border-t border-gray-200 hidden">
                    <div className="flex flex-col space-y-3">
                        <button className="text-left text-gray-600 hover:text-primary transition-colors py-2">
                            <i className="fas fa-heart mr-2"></i>
                            Wishlist (3)
                        </button>
                        <button className="text-left text-gray-600 hover:text-primary transition-colors py-2">
                            <i className="fas fa-shopping-cart mr-2"></i>
                            Keranjang (5)
                        </button>
                        <div className="flex space-x-2 pt-2">
                            <button className="flex-1 text-gray-600 hover:text-primary transition-colors px-3 py-2 rounded-lg border border-gray-300 hover:border-primary">
                                Masuk
                            </button>
                            <button className="flex-1 bg-primary text-white px-3 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                                Daftar
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar