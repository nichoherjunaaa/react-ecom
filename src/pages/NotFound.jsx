import React from 'react'
import { Link } from 'react-router-dom'
const NotFound = () => {
    return (

        <div className="flex-1 flex items-center justify-center px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
                <div className="relative mb-8">
                    <div className="text-8xl md:text-9xl font-bold text-primary select-none">
                        404
                    </div>
                </div>

                <div className="mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Oops! Halaman Tidak Ditemukan
                    </h1>
                    <p className="text-xl text-gray-600 mb-2">
                        Sepertinya halaman yang Anda cari sedang berbelanja di tempat lain
                    </p>
                    <p className="text-lg text-gray-500">
                        Jangan khawatir, mari kita bantu Anda menemukan produk UMKM terbaik!
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <Link to="/" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center justify-center">
                        <i className="fas fa-home mr-2"></i>
                        Kembali ke Beranda
                    </Link>
                    <Link to="/products" className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors inline-flex items-center justify-center">
                        <i className="fas fa-shopping-bag mr-2"></i>
                        Lihat Semua Produk
                    </Link>
                </div>

                <div className="bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Butuh Bantuan?</h2>
                    <p className="text-gray-600 mb-6">Tim customer service kami siap membantu Anda 24/7</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <a href="#" className="flex items-center justify-center p-4 border border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors group">
                            <div className="text-center">
                                <i className="fas fa-phone text-2xl text-primary mb-2 group-hover:scale-110 transition-transform"></i>
                                <p className="font-medium text-gray-800">Telepon</p>
                                <p className="text-sm text-gray-600">+62 812-3456-7890</p>
                            </div>
                        </a>

                        <a href="#" className="flex items-center justify-center p-4 border border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors group">
                            <div className="text-center">
                                <i className="fas fa-envelope text-2xl text-primary mb-2 group-hover:scale-110 transition-transform"></i>
                                <p className="font-medium text-gray-800">Email</p>
                                <p className="text-sm text-gray-600">help@umkmstore.com</p>
                            </div>
                        </a>

                        <a href="#" className="flex items-center justify-center p-4 border border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors group">
                            <div className="text-center">
                                <i className="fab fa-whatsapp text-2xl text-primary mb-2 group-hover:scale-110 transition-transform"></i>
                                <p className="font-medium text-gray-800">WhatsApp</p>
                                <p className="text-sm text-gray-600">Chat Langsung</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound