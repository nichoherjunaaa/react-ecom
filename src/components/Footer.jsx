import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="bg-gray-800 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h4 className="text-2xl font-bold mb-4 text-primary">UMKM Store</h4>
                            <p className="text-gray-300 mb-4">Platform terpercaya untuk produk UMKM berkualitas dari seluruh Indonesia</p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                    <i className="fab fa-whatsapp"></i>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h5 className="font-semibold mb-4">Kategori</h5>
                            <ul className="space-y-2 text-gray-300">
                                <li><a href="#" className="hover:text-white transition-colors">Fashion</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Makanan & Minuman</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Kerajinan Tangan</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Kecantikan</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-semibold mb-4">Bantuan</h5>
                            <ul className="space-y-2 text-gray-300">
                                <li><a href="#" className="hover:text-white transition-colors">Cara Berbelanja</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Kebijakan Pengembalian</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Hubungi Kami</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-semibold mb-4">Kontak</h5>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-center">
                                    <i className="fas fa-phone mr-2"></i>
                                    +62 812-3456-7890
                                </li>
                                <li className="flex items-center">
                                    <i className="fas fa-envelope mr-2"></i>
                                    info@umkmstore.com
                                </li>
                                <li className="flex items-center">
                                    <i className="fas fa-map-marker-alt mr-2"></i>
                                    Jakarta, Indonesia
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
                        <p>&copy; 2024 UMKM Store. Semua hak dilindungi.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer