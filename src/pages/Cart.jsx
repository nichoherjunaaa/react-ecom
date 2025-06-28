import React, { useState, useEffect } from 'react';
import { FaSearch, FaHeart, FaShoppingCart, FaBars, FaTrash, FaCartPlus, FaStar, FaStarHalfAlt, FaShieldAlt, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Cart = () => {
    const [cartData, setCartData] = useState({
        1: { price: 320000, quantity: 1, selected: true, name: "Batik Tulis Premium Motif Parang" },
        2: { price: 85000, quantity: 2, selected: true, name: "Kopi Arabika Gayo Premium" },
        3: { price: 125000, quantity: 1, selected: false, name: "Tas Rajut Handmade Vintage" }
    });
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [selectAll, setSelectAll] = useState(false);
    const [couponCode, setCouponCode] = useState('');
    const [discount, setDiscount] = useState(0);
    const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

    const calculateSummary = () => {
        let selectedCount = 0;
        let subtotal = 0;
        const selectedItems = [];

        Object.entries(cartData).forEach(([id, item]) => {
            if (item.selected) {
                selectedCount++;
                const itemTotal = item.price * item.quantity;
                subtotal += itemTotal;
                selectedItems.push({
                    name: item.name.split(' ').slice(0, 3).join(' '),
                    quantity: item.quantity,
                    total: itemTotal
                });
            }
        });

        return {
            selectedCount,
            subtotal,
            selectedItems,
            total: subtotal - discount
        };
    };

    const summary = calculateSummary();

    // Update select all checkbox
    useEffect(() => {
        const allSelected = Object.values(cartData).every(item => item.selected);
        setSelectAll(allSelected);
    }, [cartData]);

    // Show toast notification
    const showToast = (message, type = 'success') => {
        setToast({ show: true, message, type });
        setTimeout(() => setToast({ ...toast, show: false }), 3000);
    };

    // Handle quantity changes
    const handleQuantityChange = (id, action) => {
        setCartData(prev => {
            const newData = { ...prev };
            if (action === 'increase') {
                newData[id].quantity += 1;
            } else if (action === 'decrease' && newData[id].quantity > 1) {
                newData[id].quantity -= 1;
            }
            return newData;
        });
    };

    // Handle item selection
    const handleItemSelect = (id, checked) => {
        setCartData(prev => ({
            ...prev,
            [id]: { ...prev[id], selected: checked }
        }));
    };

    // Handle select all
    const handleSelectAll = (checked) => {
        setSelectAll(checked);
        const updatedCartData = { ...cartData };
        Object.keys(updatedCartData).forEach(id => {
            updatedCartData[id].selected = checked;
        });
        setCartData(updatedCartData);
    };

    // Remove item
    const removeItem = (id) => {
        if (window.confirm('Apakah Anda yakin ingin menghapus produk ini dari keranjang?')) {
            const newCartData = { ...cartData };
            delete newCartData[id];
            setCartData(newCartData);
            showToast('Produk berhasil dihapus dari keranjang', 'success');
        }
    };

    // Remove selected items
    const removeSelected = () => {
        const selectedItems = Object.keys(cartData).filter(id => cartData[id].selected);

        if (selectedItems.length === 0) {
            showToast('Tidak ada produk yang dipilih', 'error');
            return;
        }

        if (window.confirm(`Apakah Anda yakin ingin menghapus ${selectedItems.length} produk yang dipilih?`)) {
            const newCartData = { ...cartData };
            selectedItems.forEach(id => delete newCartData[id]);
            setCartData(newCartData);
            showToast('Produk terpilih berhasil dihapus', 'success');
        }
    };

    // Move to wishlist
    const moveToWishlist = () => {
        const selectedItems = Object.keys(cartData).filter(id => cartData[id].selected);

        if (selectedItems.length === 0) {
            showToast('Tidak ada produk yang dipilih', 'error');
            return;
        }

        if (window.confirm(`Pindahkan ${selectedItems.length} produk ke wishlist?`)) {
            const newCartData = { ...cartData };
            selectedItems.forEach(id => delete newCartData[id]);
            setCartData(newCartData);
            showToast('Produk berhasil dipindah ke wishlist', 'success');
        }
    };

    // Apply coupon
    const applyCoupon = () => {
        if (couponCode.toUpperCase() === 'UMKM10') {
            const newDiscount = summary.subtotal * 0.1;
            setDiscount(newDiscount);
            showToast('Kupon berhasil diterapkan!', 'success');
        } else if (couponCode) {
            showToast('Kode kupon tidak valid', 'error');
        }
    };

    // Proceed to checkout
    const proceedToCheckout = () => {
        if (summary.selectedCount === 0) {
            showToast('Pilih minimal 1 produk untuk checkout', 'error');
            return;
        }
        window.location.href = '/checkout';
        console.log('Proceeding to checkout with items:', summary.selectedItems);
    };

    // Add to cart (for recommended products)
    const addToCart = (productName) => {
        showToast(`${productName} berhasil ditambahkan ke keranjang!`, 'success');
    };

    // Calculate total items count
    const totalItemsCount = Object.values(cartData).reduce((sum, item) => sum + item.quantity, 0);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Page Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Keranjang Belanja</h1>
                    <p className="text-gray-600">Kelola produk yang ingin Anda beli</p>
                </div>

                {/* Cart Content */}
                {Object.keys(cartData).length > 0 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Cart Items */}
                        <div className="lg:col-span-2">
                            {/* Select All */}
                            <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={selectAll}
                                        onChange={(e) => handleSelectAll(e.target.checked)}
                                        className="rounded border-gray-300 text-primary focus:ring-primary"
                                    />
                                    <span className="ml-3 text-gray-700 font-medium">
                                        Pilih Semua ({Object.keys(cartData).length} produk)
                                    </span>
                                </label>
                            </div>

                            {/* Cart Items List */}
                            <div className="space-y-4">
                                {Object.entries(cartData).map(([id, item]) => (
                                    <div key={id} className="bg-white rounded-lg shadow-md p-6" data-price={item.price} data-id={id}>
                                        <div className="flex items-start space-x-4">
                                            {/* Checkbox */}
                                            <input
                                                type="checkbox"
                                                checked={item.selected}
                                                onChange={(e) => handleItemSelect(id, e.target.checked)}
                                                className="item-checkbox mt-2 rounded border-gray-300 text-primary focus:ring-primary"
                                            />

                                            {/* Product Image */}
                                            <img
                                                src={`/placeholder.svg?height=120&width=120`}
                                                alt={item.name}
                                                className="w-24 h-24 object-cover rounded-lg"
                                            />

                                            {/* Product Details */}
                                            <div className="flex-1">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                                                        <p className="text-sm text-gray-600 mb-2">
                                                            {id === '1' ? 'Toko Batik Jogja • Yogyakarta' :
                                                                id === '2' ? 'Kedai Kopi Aceh • Aceh' :
                                                                    'Rajut Kreatif • Bandung'}
                                                        </p>
                                                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                                                            {id === '1' && (
                                                                <>
                                                                    <span>Ukuran: M</span>
                                                                    <span>Warna: Biru Navy</span>
                                                                </>
                                                            )}
                                                            {id === '2' && (
                                                                <>
                                                                    <span>Berat: 500g</span>
                                                                    <span>Roast: Medium</span>
                                                                </>
                                                            )}
                                                            {id === '3' && (
                                                                <>
                                                                    <span>Warna: Coklat</span>
                                                                    <span>Bahan: Benang Katun</span>
                                                                </>
                                                            )}
                                                        </div>
                                                        <div className="flex items-center space-x-4">
                                                            <span className="text-lg font-bold text-primary">
                                                                Rp {item.price.toLocaleString('id-ID')}
                                                            </span>
                                                            {id === '1' && (
                                                                <>
                                                                    <span className="text-sm text-gray-500 line-through">Rp 400.000</span>
                                                                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-semibold">20% OFF</span>
                                                                </>
                                                            )}
                                                        </div>
                                                    </div>

                                                    {/* Remove Button */}
                                                    <button
                                                        className="text-gray-400 hover:text-red-500 transition-colors"
                                                        onClick={() => removeItem(id)}
                                                    >
                                                        <FaTrash className="text-lg" />
                                                    </button>
                                                </div>

                                                {/* Quantity and Actions */}
                                                <div className="flex items-center justify-between mt-4">
                                                    <div className="flex items-center space-x-3">
                                                        {/* Quantity Controls */}
                                                        <div className="flex items-center border border-gray-300 rounded-lg">
                                                            <button
                                                                className="px-3 py-1 text-gray-600 hover:text-primary"
                                                                onClick={() => handleQuantityChange(id, 'decrease')}
                                                            >
                                                                -
                                                            </button>
                                                            <span className="px-3 py-1 border-x">
                                                                {item.quantity}
                                                            </span>
                                                            <button
                                                                className="px-3 py-1 text-gray-600 hover:text-primary"
                                                                onClick={() => handleQuantityChange(id, 'increase')}
                                                            >
                                                                +
                                                            </button>
                                                        </div>

                                                        {/* Stock Info */}
                                                        <span className="text-sm text-gray-500">
                                                            Stok: {id === '1' ? 25 : id === '2' ? 50 : 15}
                                                        </span>
                                                    </div>

                                                    {/* Actions */}
                                                    <div className="flex items-center space-x-3">
                                                        <button className="text-sm text-gray-600 hover:text-primary transition-colors">
                                                            <FaHeart className="inline mr-1" />
                                                            Pindah ke Wishlist
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Bulk Actions */}
                            <div className="bg-white rounded-lg shadow-md p-4 mt-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <span className="text-gray-700">
                                            Terpilih: {summary.selectedCount} produk
                                        </span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <button
                                            className="text-gray-600 hover:text-red-500 transition-colors"
                                            onClick={removeSelected}
                                        >
                                            <FaTrash className="inline mr-1" />
                                            Hapus Terpilih
                                        </button>
                                        <button
                                            className="text-gray-600 hover:text-primary transition-colors"
                                            onClick={moveToWishlist}
                                        >
                                            <FaHeart className="inline mr-1" />
                                            Pindah ke Wishlist
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                                <h2 className="text-xl font-semibold text-gray-900 mb-6">Ringkasan Belanja</h2>

                                {/* Selected Items */}
                                <div className="mb-4">
                                    <h3 className="font-medium text-gray-900 mb-3">
                                        Produk Terpilih ({summary.selectedCount})
                                    </h3>
                                    <div className="space-y-2 text-sm">
                                        {summary.selectedItems.map((item, index) => (
                                            <div key={index} className="flex justify-between">
                                                <span className="text-gray-600">
                                                    {item.name} ({item.quantity}x)
                                                </span>
                                                <span className="text-gray-900">
                                                    Rp {item.total.toLocaleString('id-ID')}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Coupon Code */}
                                <div className="mb-6">
                                    <div className="flex space-x-2">
                                        <input
                                            type="text"
                                            placeholder="Kode kupon"
                                            value={couponCode}
                                            onChange={(e) => setCouponCode(e.target.value)}
                                            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
                                        />
                                        <button
                                            className="bg-primary text-white px-4 py-2 rounded-lg text-sm hover:bg-primary/90 transition-colors"
                                            onClick={applyCoupon}
                                        >
                                            Terapkan
                                        </button>
                                    </div>
                                </div>

                                {/* Price Breakdown */}
                                <div className="border-t pt-4 space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">
                                            Subtotal ({summary.selectedCount} produk)
                                        </span>
                                        <span className="text-gray-900">
                                            Rp {summary.subtotal.toLocaleString('id-ID')}
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Diskon</span>
                                        <span className="text-green-600">
                                            {discount > 0 ? `-Rp ${discount.toLocaleString('id-ID')}` : 'Rp 0'}
                                        </span>
                                    </div>
                                    <div className="border-t pt-2">
                                        <div className="flex justify-between text-lg font-semibold">
                                            <span className="text-gray-900">Total</span>
                                            <span className="text-primary">
                                                Rp {summary.total.toLocaleString('id-ID')}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Checkout Button */}
                                <button
                                    className={`w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors mt-6 ${summary.selectedCount === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    onClick={proceedToCheckout}
                                    disabled={summary.selectedCount === 0}
                                >
                                    Lanjut ke Checkout
                                </button>

                                {/* Continue Shopping */}
                                <a href="/products" className="block text-center text-primary hover:underline mt-4">
                                    Lanjut Belanja
                                </a>

                                {/* Security Info */}
                                <div className="mt-6 text-center">
                                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                                        <FaShieldAlt className="text-green-500" />
                                        <span>Belanja aman dan terpercaya</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    /* Empty Cart State */
                    <div className="text-center py-16">
                        <div className="max-w-md mx-auto">
                            <div className="mb-8">
                                <FaShoppingCart className="text-6xl text-gray-300 mb-4 mx-auto" />
                                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Keranjang Belanja Kosong</h2>
                                <p className="text-gray-600">Yuk, mulai belanja produk UMKM terbaik!</p>
                            </div>
                            <a
                                href="/products"
                                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-block"
                            >
                                Mulai Belanja
                            </a>
                        </div>
                    </div>
                )}

                {/* Recommended Products */}
                {Object.keys(cartData).length > 0 && (
                    <div className="mt-16">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Produk Rekomendasi</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* Recommended Product 1 */}
                            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
                                <div className="relative">
                                    <img
                                        src="/placeholder.svg?height=200&width=300"
                                        alt="Keripik Singkong"
                                        className="w-full h-48 object-cover"
                                    />
                                    <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                                        <FaHeart className="text-gray-400 hover:text-red-500" />
                                    </button>
                                </div>
                                <div className="p-4">
                                    <h4 className="font-semibold text-gray-800 mb-2">Keripik Singkong Pedas</h4>
                                    <p className="text-gray-600 text-sm mb-2">Malang</p>
                                    <div className="flex items-center mb-2">
                                        <div className="flex text-yellow-400">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                        <span className="text-gray-600 text-sm ml-2">(45)</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-lg font-bold text-primary">Rp 25.000</span>
                                        <button
                                            className="bg-primary text-white px-3 py-1 rounded-lg hover:bg-primary/90 transition-colors"
                                            onClick={() => addToCart('Keripik Singkong')}
                                        >
                                            <FaCartPlus />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Recommended Product 2 */}
                            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
                                <div className="relative">
                                    <img
                                        src="/placeholder.svg?height=200&width=300"
                                        alt="Sabun Herbal"
                                        className="w-full h-48 object-cover"
                                    />
                                    <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                                        <FaHeart className="text-gray-400 hover:text-red-500" />
                                    </button>
                                </div>
                                <div className="p-4">
                                    <h4 className="font-semibold text-gray-800 mb-2">Sabun Herbal Alami</h4>
                                    <p className="text-gray-600 text-sm mb-2">Bali</p>
                                    <div className="flex items-center mb-2">
                                        <div className="flex text-yellow-400">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStarHalfAlt />
                                        </div>
                                        <span className="text-gray-600 text-sm ml-2">(73)</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-lg font-bold text-primary">Rp 35.000</span>
                                        <button
                                            className="bg-primary text-white px-3 py-1 rounded-lg hover:bg-primary/90 transition-colors"
                                            onClick={() => addToCart('Sabun Herbal')}
                                        >
                                            <FaCartPlus />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Recommended Product 3 */}
                            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
                                <div className="relative">
                                    <img
                                        src="/placeholder.svg?height=200&width=300"
                                        alt="Madu Hutan"
                                        className="w-full h-48 object-cover"
                                    />
                                    <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                                        <FaHeart className="text-gray-400 hover:text-red-500" />
                                    </button>
                                </div>
                                <div className="p-4">
                                    <h4 className="font-semibold text-gray-800 mb-2">Madu Hutan Asli</h4>
                                    <p className="text-gray-600 text-sm mb-2">Kalimantan</p>
                                    <div className="flex items-center mb-2">
                                        <div className="flex text-yellow-400">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                        <span className="text-gray-600 text-sm ml-2">(94)</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-lg font-bold text-primary">Rp 120.000</span>
                                        <button
                                            className="bg-primary text-white px-3 py-1 rounded-lg hover:bg-primary/90 transition-colors"
                                            onClick={() => addToCart('Madu Hutan')}
                                        >
                                            <FaCartPlus />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Recommended Product 4 */}
                            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
                                <div className="relative">
                                    <img
                                        src="/placeholder.svg?height=200&width=300"
                                        alt="Teh Herbal"
                                        className="w-full h-48 object-cover"
                                    />
                                    <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                                        <FaHeart className="text-gray-400 hover:text-red-500" />
                                    </button>
                                </div>
                                <div className="p-4">
                                    <h4 className="font-semibold text-gray-800 mb-2">Teh Herbal Organik</h4>
                                    <p className="text-gray-600 text-sm mb-2">Bandung</p>
                                    <div className="flex items-center mb-2">
                                        <div className="flex text-yellow-400">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                        <span className="text-gray-600 text-sm ml-2">(118)</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-lg font-bold text-primary">Rp 65.000</span>
                                        <button
                                            className="bg-primary text-white px-3 py-1 rounded-lg hover:bg-primary/90 transition-colors"
                                            onClick={() => addToCart('Teh Herbal')}
                                        >
                                            <FaCartPlus />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-12 mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h4 className="text-2xl font-bold mb-4 text-primary">UMKM Store</h4>
                            <p className="text-gray-300 mb-4">Platform terpercaya untuk produk UMKM berkualitas dari seluruh Indonesia</p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                    <FaFacebookF />
                                </a>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                    <FaInstagram />
                                </a>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                    <FaTwitter />
                                </a>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                    <FaWhatsapp />
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
                                    <FaPhone className="mr-2" />
                                    +62 812-3456-7890
                                </li>
                                <li className="flex items-center">
                                    <FaEnvelope className="mr-2" />
                                    info@umkmstore.com
                                </li>
                                <li className="flex items-center">
                                    <FaMapMarkerAlt className="mr-2" />
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

            {/* Notification Toast */}
            {toast.show && (
                <div className={`fixed top-4 right-4 z-50 transition-opacity duration-300 ${toast.show ? 'opacity-100' : 'opacity-0'}`}>
                    <div className={`${toast.type === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white px-6 py-3 rounded-lg shadow-lg`}>
                        <div className="flex items-center">
                            <FaShieldAlt className="mr-2" />
                            <span>{toast.message}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;