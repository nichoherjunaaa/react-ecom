import React from 'react'

const Checkout = () => {
    return (
        <>
            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Checkout Form */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Shipping Information */}
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
                                            <option value="">Pilih Provinsi</option>
                                            <option value="jakarta">DKI Jakarta</option>
                                            <option value="jabar">Jawa Barat</option>
                                            <option value="jateng">Jawa Tengah</option>
                                            <option value="jatim">Jawa Timur</option>
                                            <option value="yogya">DI Yogyakarta</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Kota/Kabupaten *</label>
                                        <select required className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent">
                                            <option value="">Pilih Kota</option>
                                            <option value="jakarta-pusat">Jakarta Pusat</option>
                                            <option value="jakarta-selatan">Jakarta Selatan</option>
                                            <option value="bandung">Bandung</option>
                                            <option value="surabaya">Surabaya</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Kode Pos *</label>
                                        <input type="text" required className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="12345" />
                                    </div>
                                </div>
                            </form>
                        </div>

                        {/* Shipping Method */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-6">Metode Pengiriman</h2>
                            <div className="space-y-3">
                                <label className="flex items-center p-4 border border-gray-300 rounded-lg hover:border-primary cursor-pointer transition-colors">
                                    <input type="radio" name="shipping" value="regular" className="text-primary focus:ring-primary" defaultChecked />
                                    <div className="ml-3 flex-1">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <p className="font-medium text-gray-900">Reguler (3-5 hari kerja)</p>
                                                <p className="text-sm text-gray-600">JNE, J&T, SiCepat</p>
                                            </div>
                                            <span className="font-semibold text-gray-900">Rp 15.000</span>
                                        </div>
                                    </div>
                                </label>

                                <label className="flex items-center p-4 border border-gray-300 rounded-lg hover:border-primary cursor-pointer transition-colors">
                                    <input type="radio" name="shipping" value="express" className="text-primary focus:ring-primary" />
                                    <div className="ml-3 flex-1">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <p className="font-medium text-gray-900">Express (1-2 hari kerja)</p>
                                                <p className="text-sm text-gray-600">JNE YES, J&T Express</p>
                                            </div>
                                            <span className="font-semibold text-gray-900">Rp 25.000</span>
                                        </div>
                                    </div>
                                </label>

                                <label className="flex items-center p-4 border border-gray-300 rounded-lg hover:border-primary cursor-pointer transition-colors">
                                    <input type="radio" name="shipping" value="same-day" className="text-primary focus:ring-primary" />
                                    <div className="ml-3 flex-1">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <p className="font-medium text-gray-900">Same Day (Hari ini)</p>
                                                <p className="text-sm text-gray-600">Khusus Jakarta & sekitarnya</p>
                                            </div>
                                            <span className="font-semibold text-gray-900">Rp 35.000</span>
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </div>

                        {/* Payment Method */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-6">Metode Pembayaran</h2>

                            {/* E-Wallet */}
                            <div className="mb-6">
                                <h3 className="font-medium text-gray-900 mb-3">E-Wallet</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <label className="flex items-center p-4 border border-gray-300 rounded-lg hover:border-primary cursor-pointer transition-colors">
                                        <input type="radio" name="payment" value="gopay" className="text-primary focus:ring-primary" />
                                        <img src="/placeholder.svg?height=30&width=60" alt="GoPay" className="ml-3 h-6" />
                                        <span className="ml-3 font-medium text-gray-900">GoPay</span>
                                    </label>

                                    <label className="flex items-center p-4 border border-gray-300 rounded-lg hover:border-primary cursor-pointer transition-colors">
                                        <input type="radio" name="payment" value="ovo" className="text-primary focus:ring-primary" />
                                        <img src="/placeholder.svg?height=30&width=60" alt="OVO" className="ml-3 h-6" />
                                        <span className="ml-3 font-medium text-gray-900">OVO</span>
                                    </label>

                                    <label className="flex items-center p-4 border border-gray-300 rounded-lg hover:border-primary cursor-pointer transition-colors">
                                        <input type="radio" name="payment" value="dana" className="text-primary focus:ring-primary" />
                                        <img src="/placeholder.svg?height=30&width=60" alt="DANA" className="ml-3 h-6" />
                                        <span className="ml-3 font-medium text-gray-900">DANA</span>
                                    </label>

                                    <label className="flex items-center p-4 border border-gray-300 rounded-lg hover:border-primary cursor-pointer transition-colors">
                                        <input type="radio" name="payment" value="shopeepay" className="text-primary focus:ring-primary" />
                                        <img src="/placeholder.svg?height=30&width=60" alt="ShopeePay" className="ml-3 h-6" />
                                        <span className="ml-3 font-medium text-gray-900">ShopeePay</span>
                                    </label>
                                </div>
                            </div>

                            {/* Bank Transfer */}
                            <div className="mb-6">
                                <h3 className="font-medium text-gray-900 mb-3">Transfer Bank</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <label className="flex items-center p-4 border border-gray-300 rounded-lg hover:border-primary cursor-pointer transition-colors">
                                        <input type="radio" name="payment" value="bca" className="text-primary focus:ring-primary" />
                                        <img src="/placeholder.svg?height=30&width=60" alt="BCA" className="ml-3 h-6" />
                                        <span className="ml-3 font-medium text-gray-900">BCA</span>
                                    </label>

                                    <label className="flex items-center p-4 border border-gray-300 rounded-lg hover:border-primary cursor-pointer transition-colors">
                                        <input type="radio" name="payment" value="mandiri" className="text-primary focus:ring-primary" />
                                        <img src="/placeholder.svg?height=30&width=60" alt="Mandiri" className="ml-3 h-6" />
                                        <span className="ml-3 font-medium text-gray-900">Mandiri</span>
                                    </label>

                                    <label className="flex items-center p-4 border border-gray-300 rounded-lg hover:border-primary cursor-pointer transition-colors">
                                        <input type="radio" name="payment" value="bni" className="text-primary focus:ring-primary" />
                                        <img src="/placeholder.svg?height=30&width=60" alt="BNI" className="ml-3 h-6" />
                                        <span className="ml-3 font-medium text-gray-900">BNI</span>
                                    </label>

                                    <label className="flex items-center p-4 border border-gray-300 rounded-lg hover:border-primary cursor-pointer transition-colors">
                                        <input type="radio" name="payment" value="bri" className="text-primary focus:ring-primary" />
                                        <img src="/placeholder.svg?height=30&width=60" alt="BRI" className="ml-3 h-6" />
                                        <span className="ml-3 font-medium text-gray-900">BRI</span>
                                    </label>
                                </div>
                            </div>

                            {/* Credit Card */}
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

                        {/* Additional Notes */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Catatan Tambahan</h2>
                            <textarea className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent" rows="3" placeholder="Tambahkan catatan untuk penjual (opsional)"></textarea>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                            <h2 className="text-xl font-semibold text-gray-900 mb-6">Ringkasan Pesanan</h2>

                            {/* Cart Items */}
                            <div className="space-y-4 mb-6">
                                {/* Item 1 */}
                                <div className="flex items-center space-x-3">
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
                                <div className="flex items-center space-x-3">
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
                                <div className="flex items-center space-x-3">
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
                                
                            </div>

                            {/* Coupon Code */}
                            <div className="mb-6">
                                <div className="flex space-x-2">
                                    <input type="text" placeholder="Kode kupon" className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-transparent" />
                                    <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm hover:bg-primary/90 transition-colors">
                                        Terapkan
                                    </button>
                                </div>
                            </div>

                            {/* Order Total */}
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

                            {/* Terms and Conditions */}
                            <div className="mt-6">
                                <label className="flex items-start">
                                    <input type="checkbox" required className="mt-1 rounded border-gray-300 text-primary focus:ring-primary" />
                                    <span className="ml-2 text-sm text-gray-600">
                                        Saya setuju dengan
                                        <a href="#" className="text-primary hover:underline">syarat dan ketentuan</a>
                                        serta
                                        <a href="#" className="text-primary hover:underline">kebijakan privasi</a>
                                    </span>
                                </label>
                            </div>

                            {/* Place Order Button */}
                            <button className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors mt-6">
                                Buat Pesanan
                            </button>

                            {/* Security Info */}
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
    )
}

export default Checkout