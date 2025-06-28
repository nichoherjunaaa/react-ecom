import React from 'react'

const Newsletter = () => {
    return (
        <section className="py-16 bg-primary text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h3 className="text-3xl font-bold mb-4">Dapatkan Penawaran Terbaik</h3>
                <p className="text-xl mb-8 opacity-90">Berlangganan newsletter kami untuk mendapatkan info produk terbaru dan promo menarik</p>
                <div className="max-w-md mx-auto flex gap-4">
                    <input
                        type="email"
                        placeholder="Masukkan email Anda"
                        className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none border-2 border-white"
                    />
                    <button className="bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors">
                        Berlangganan
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Newsletter