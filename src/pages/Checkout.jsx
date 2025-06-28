import React from 'react';

const Checkout = () => {
    const provinces = [
        { value: '', label: 'Pilih Provinsi' },
        { value: 'jakarta', label: 'DKI Jakarta' },
        { value: 'jabar', label: 'Jawa Barat' },
        { value: 'jateng', label: 'Jawa Tengah' },
        { value: 'jatim', label: 'Jawa Timur' },
        { value: 'yogya', label: 'DI Yogyakarta' }
    ];

    const cities = [
        { value: '', label: 'Pilih Kota' },
        { value: 'jakarta-pusat', label: 'Jakarta Pusat' },
        { value: 'jakarta-selatan', label: 'Jakarta Selatan' },
        { value: 'bandung', label: 'Bandung' },
        { value: 'surabaya', label: 'Surabaya' }
    ];

    const paymentMethods = [
        { value: 'gopay', label: 'GoPay', src: '/placeholder.svg?height=30&width=60' },
        { value: 'ovo', label: 'OVO', src: '/placeholder.svg?height=30&width=60' },
        { value: 'dana', label: 'DANA', src: '/placeholder.svg?height=30&width=60' },
        { value: 'shopeepay', label: 'ShopeePay', src: '/placeholder.svg?height=30&width=60' }
    ];

    const bankMethods = [
        { value: 'bca', label: 'BCA', src: '/placeholder.svg?height=30&width=60' },
        { value: 'mandiri', label: 'Mandiri', src: '/placeholder.svg?height=30&width=60' },
        { value: 'bni', label: 'BNI', src: '/placeholder.svg?height=30&width=60' },
        { value: 'bri', label: 'BRI', src: '/placeholder.svg?height=30&width=60' }
    ];

    const renderOptions = (options) => options.map(({ value, label }) => (
        <option key={value} value={value}>{label}</option>
    ));

    const renderPaymentOptions = (options) => options.map(({ value, label, src }) => (
        <label key={value} className="flex items-center p-4 border border-gray-300 rounded-lg hover:border-primary cursor-pointer transition-colors">
            <input type="radio" name="payment" value={value} className="text-primary focus:ring-primary" />
            <img src={src} alt={label} className="ml-3 h-6" />
            <span className="ml-3 font-medium text-gray-900">{label}</span>
        </label>
    ));

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-6">Informasi Pengiriman</h2>
                            <form className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Nama Depan *</label>
                                        <input type="text" required className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Masukkan nama depan" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Nama Belakang *</label>
                                        <input type="text" required className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Masukkan nama belakang" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                                    <input type="email" required className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="contoh@email.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Nomor Telepon *</label>
                                    <input type="tel" required className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="+62 812-3456-7890" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Alamat Lengkap *</label>
                                    <textarea required className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent" rows="3" placeholder="Masukkan alamat lengkap"></textarea>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Provinsi *</label>
                                        <select required className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent">
                                            {renderOptions(provinces)}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Kota/Kabupaten *</label>
                                        <select required className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent">
                                            {renderOptions(cities)}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Kode Pos *</label>
                                        <input type="text" required className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="12345" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-6">Metode Pengiriman</h2>
                            <div className="space-y-3">
                                {[
                                    { value: 'regular', label: 'Reguler (3-5 hari kerja)', details: 'JNE, J&T, SiCepat', price: 'Rp 15.000', defaultChecked: true },
                                    { value: 'express', label: 'Express (1-2 hari kerja)', details: 'JNE YES, J&T Express', price: 'Rp 25.000' },
                                    { value: 'same-day', label: 'Same Day (Hari ini)', details: 'Khusus Jakarta & sekitarnya', price: 'Rp 35.000' }
                                ].map(({ value, label, details, price, defaultChecked }) => (
                                    <label key={value} className="flex items-center p-4 border border-gray-300 rounded-lg hover:border-primary cursor-pointer transition-colors">
                                        <input type="radio" name="shipping" value={value} className="text-primary focus:ring-primary" defaultChecked={defaultChecked} />
                                        <div className="ml-3 flex-1">
                                            <div className="flex justify-between items-center">
                                                <div>
                                                    <p className="font-medium text-gray-900">{label}</p>
                                                    <p className="text-sm text-gray-600">{details}</p>
                                                </div>
                                                <span className="font-semibold text-gray-900">{price}</span>
                                            </div>
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-6">Metode Pembayaran</h2>
                            <div className="mb-6">
                                <h3 className="font-medium text-gray-900 mb-3">E-Wallet</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">{renderPaymentOptions(paymentMethods)}</div>
                            </div>
                            <div className="mb-6">
                                <h3 className="font-medium text-gray-900 mb-3">Transfer Bank</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">{renderPaymentOptions(bankMethods)}</div>
                            </div>
                            <div>
                                <h3 className="font-medium text-gray-900 mb-3">Kartu Kredit/Debit</h3>
                                <label className="flex items-center p-4 border border-gray-300 rounded-lg hover:border-primary cursor-pointer transition-colors">
                                    <input type="radio" name="payment" value="credit-card" className="text-primary focus:ring-primary" />
                                    <div className="ml-3 flex items-center space-x-2">
                                        <img src="/placeholder.svg?height=20&width=30" alt="Visa" className="h-5" />
                                        <img src="/placeholder.svg?height=20&width=30" alt="Mastercard" className="h-5" />
                                        <span className="font-medium text-gray-900">Kartu Kredit/Debit</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Catatan Tambahan</h2>
                            <textarea className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent" rows="3" placeholder="Tambahkan catatan untuk penjual (opsional)"></textarea>
                        </div>
                    </div>
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                            <h2 className="text-xl font-semibold text-gray-900 mb-6">Ringkasan Pesanan</h2>
                            <div className="space-y-4 mb-6">
                                {Array(3).fill().map((_, i) => (
                                    <div key={i} className="flex items-center space-x-3">
                                        <img src="/placeholder.svg?height=60&width=60" alt="Batik Tulis Premium" className="w-15 h-15 object-cover rounded-lg" />
                                        <div className="flex-1">
                                            <h4 className="font-medium text-gray-900 text-sm">Batik Tulis Premium</h4>
                                            <p className="text-sm text-gray-600">Ukuran: M, Warna: Biru</p>
                                            <div className="flex justify-between items-center mt-1">
                                                <span className="text-sm text-gray-600">Qty: 1</span>
                                                <span className="font-semibold text-primary">Rp 320.000</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* <div className="mb-6">
                                <div className="flex space-x-2">
                                    <input type="text" placeholder="Kode kupon" className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-transparent" />
                                    <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm hover:bg-primary/90 transition-colors">
                                        Terapkan
                                    </button>
                                </div>
                            </div> */}
                            <div className="border-t pt-4 space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Subtotal</span>
                                    <span className="text-gray-900">Rp 615.000</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Ongkos Kirim</span>
                                    <span className="text-gray-900" id="shippingCost">Rp 15.000</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Diskon</span>
                                    <span className="text-green-600">-Rp 0</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Pajak (PPN 11%)</span>
                                    <span className="text-gray-900">Rp 69.300</span>
                                </div>
                                <div className="border-t pt-2">
                                    <div className="flex justify-between text-lg font-semibold">
                                        <span className="text-gray-900">Total</span>
                                        <span className="text-primary" id="totalAmount">Rp 699.300</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6">
                                <label className="flex items-start">
                                    <input type="checkbox" required className="mt-1 rounded border-gray-300 text-primary focus:ring-primary" />
                                    <span className="ml-2 text-sm text-gray-600">
                                        Saya setuju dengan
                                        <a href="#" className="text-primary hover:underline"> Syarat dan Ketentuan</a> serta
                                        <a href="#" className="text-primary hover:underline"> Kebijakan Privasi</a>
                                    </span>
                                </label>
                            </div>
                            <button className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors mt-6">
                                Buat Pesanan
                            </button>
                            <div className="mt-4 text-center">
                                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                                    <i className="fas fa-shield-alt text-green-500"></i>
                                    <span>Pembayaran aman dan terpercaya</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkout;
