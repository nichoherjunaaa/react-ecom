import React from 'react'
const LoginAuth = () => {
    const togglePassword = () => {
        // Implement password toggle functionality here
        const passwordInput = document.getElementById('password');
        const passwordIcon = document.getElementById('password-icon');
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            passwordIcon.className = 'fas fa-eye-slash';
        } else {
            passwordInput.type = 'password';
            passwordIcon.className = 'fas fa-eye';
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
    };

    return (
        <div className="h-screen flex items-center justify-center p-4 bg-primary">
            <div className="w-full max-w-6xl h-full max-h-[90vh] relative bg-white rounded-3xl">
                <div className="login-container rounded-2xl h-full grid grid-cols-2">
                    <div className="p-8 flex flex-col justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
                        <div className="text-center mb-8">
                            <div className="flex items-center justify-center space-x-3 mb-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
                                    <i className="fas fa-store text-white text-xl"></i>
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold gradient-text">UMKM Store</h1>
                                    <p className="text-xs text-gray-500">Modern Marketplace</p>
                                </div>
                            </div>
                            <h2 className="text-xl font-bold text-gray-800 mb-2">Selamat Datang Kembali!</h2>
                            <p className="text-sm text-gray-600">Masuk dan lanjutkan berbelanja produk UMKM terbaik</p>
                        </div>

                        <div className="feature-highlight">
                            <div className="flex items-center space-x-3 mb-3">
                                <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                                    <i className="fas fa-shopping-bag text-white"></i>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 text-sm">Keranjang Tersimpan</h4>
                                    <p className="text-xs text-gray-600">Lanjutkan belanja dari terakhir kali</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 mb-6">
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                                    <i className="fas fa-heart text-white text-sm"></i>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800 text-sm">Wishlist Anda</h4>
                                    <p className="text-xs text-gray-600">Produk favorit menunggu</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                                    <i className="fas fa-history text-white text-sm"></i>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800 text-sm">Riwayat Pesanan</h4>
                                    <p className="text-xs text-gray-600">Lacak status pembelian</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                                    <i className="fas fa-gift text-white text-sm"></i>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800 text-sm">Poin Reward</h4>
                                    <p className="text-xs text-gray-600">Tukar dengan voucher</p>
                                </div>
                            </div>
                        </div>

                        <div className="testimonial">
                            <div className="flex items-center space-x-2 mb-2">
                                <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                                    <i className="fas fa-user text-white text-xs"></i>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800 text-xs">Sari Dewi</p>
                                    <div className="flex text-yellow-400 text-xs">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                            </div>
                            <p className="text-xs text-gray-600">"Platform terbaik untuk produk UMKM berkualitas!"</p>
                        </div>

                        <div className="grid grid-cols-3 gap-4 text-center">
                            <div>
                                <div className="text-lg font-black text-primary">50K+</div>
                                <div className="text-xs text-gray-600">Member</div>
                            </div>
                            <div>
                                <div className="text-lg font-black text-primary">1000+</div>
                                <div className="text-xs text-gray-600">Produk</div>
                            </div>
                            <div>
                                <div className="text-lg font-black text-primary">4.9</div>
                                <div className="text-xs text-gray-600">Rating</div>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 flex flex-col justify-center">
                        
                        <div id="error-message" className="error-message mb-4 hidden">
                            <i className="fas fa-exclamation-circle mr-2"></i>
                            <span id="error-text"></span>
                        </div>
                        
                        <div id="success-message" className="success-message mb-4 hidden">
                            <i className="fas fa-check-circle mr-2"></i>
                            <span id="success-text"></span>
                        </div>

                        <form id="login-form" className="space-y-5" onSubmit={handleSubmit}>
                            
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                    <i className="fas fa-envelope mr-2 text-primary"></i>Email
                                </label>
                                <input 
                                    type="email" 
                                    id="email"
                                    placeholder="Masukkan email Anda"
                                    className="input-field w-full px-4 py-3 rounded-lg text-sm focus:outline-none border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                                    <i className="fas fa-lock mr-2 text-primary"></i>Password
                                </label>
                                <div className="relative">
                                    <input 
                                        type="password" 
                                        id="password"
                                        placeholder="Masukkan password Anda"
                                        className="input-field w-full px-4 py-3 pr-10 rounded-lg text-sm focus:outline-none border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                                        required
                                    />
                                    <button 
                                        type="button" 
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary"
                                        onClick={togglePassword}
                                    >
                                        <i id="password-icon" className="fas fa-eye"></i>
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input type="checkbox" id="remember" className="rounded border-gray-300 text-primary focus:ring-primary"/>
                                    <span className="text-sm text-gray-600 font-medium">Ingat saya</span>
                                </label>
                                <a href="#" className="text-sm font-semibold text-primary hover:text-secondary transition-colors">
                                    Lupa password?
                                </a>
                            </div>

                            <button 
                                type="submit" 
                                id="login-btn"
                                className="modern-button w-full text-white py-3 rounded-lg font-semibold text-sm bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-colors"
                            >
                                <span id="login-text">Masuk</span>
                            </button>
                        </form>

                        <div className="flex items-center my-5">
                            <div className="flex-1 border-t border-gray-200"></div>
                            <span className="px-3 text-xs text-gray-500">atau masuk dengan</span>
                            <div className="flex-1 border-t border-gray-200"></div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 mb-5">
                            <button type="button" className="social-button p-3 rounded-lg font-medium text-gray-700 flex items-center justify-center space-x-2 text-sm border border-gray-300 hover:bg-gray-50">
                                <i className="fab fa-google text-red-500"></i>
                                <span>Google</span>
                            </button>
                            <button type="button" className="social-button p-3 rounded-lg font-medium text-gray-700 flex items-center justify-center space-x-2 text-sm border border-gray-300 hover:bg-gray-50">
                                <i className="fab fa-facebook text-blue-600"></i>
                                <span>Facebook</span>
                            </button>
                        </div>

                        <div className="text-center">
                            <p className="text-sm text-gray-600">
                                Belum punya akun? 
                                <a href="#" className="font-semibold text-primary hover:text-secondary transition-colors ml-1">
                                    Daftar sekarang
                                </a>
                            </p>
                        </div>

                        <div className="mt-4 flex items-center justify-center space-x-4 text-xs text-gray-500">
                            <div className="flex items-center space-x-1">
                                <i className="fas fa-shield-alt text-primary"></i>
                                <span>Aman</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <i className="fas fa-lock text-primary"></i>
                                <span>Terenkripsi</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <i className="fas fa-check-circle text-primary"></i>
                                <span>Terpercaya</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginAuth