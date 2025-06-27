import React from 'react'
import CardProduct from '../components/CardProduct'
import { renderStars } from '../utils/helper'

const Products = () => {
    const breadcrumbs = [
        { name: 'Beranda', href: 'index.html' },
        { name: 'Semua Produk', href: null }
    ]

    // Categories filter data
    const categories = [
        { name: 'Semua Kategori', count: null, checked: true },
        { name: 'Fashion', count: 45, checked: false },
        { name: 'Makanan', count: 32, checked: false },
        { name: 'Kerajinan', count: 28, checked: false },
        { name: 'Kecantikan', count: 19, checked: false },
        { name: 'Rumah Tangga', count: 23, checked: false }
    ]

    // Price ranges filter data
    const priceRanges = [
        { label: 'Semua Harga', value: 'all' },
        { label: '< Rp 50.000', value: '0-50000' },
        { label: 'Rp 50.000 - Rp 100.000', value: '50000-100000' },
        { label: 'Rp 100.000 - Rp 300.000', value: '100000-300000' },
        { label: '> Rp 300.000', value: '300000+' }
    ]

    // Rating filter data
    const ratings = [
        { stars: 5, label: '5 Bintang' },
        { stars: 4, label: '4+ Bintang' },
        { stars: 3, label: '3+ Bintang' }
    ]

    // Location filter data
    const locations = [
        'Semua Lokasi',
        'Jakarta',
        'Yogyakarta',
        'Bandung',
        'Surabaya',
        'Solo',
        'Malang'
    ]

    // Products data
    const products = [
        {
            id: 1,
            name: 'Batik Tulis Premium',
            location: 'Yogyakarta',
            price: 320000,
            originalPrice: 400000,
            discount: '-20%',
            rating: 5,
            reviewCount: 128,
            tag: 'discount',
            isWishlisted: false
        },
        {
            id: 2,
            name: 'Kopi Arabika Gayo',
            location: 'Aceh',
            price: 85000,
            rating: 5,
            reviewCount: 256,
            tag: 'bestseller',
            isWishlisted: false,
            image : "https://images.unsplash.com/photo-1584880368838-f60e501e7493?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 3,
            name: 'Tas Rajut Handmade',
            location: 'Bandung',
            price: 125000,
            rating: 4,
            reviewCount: 89,
            isWishlisted: true
        },
        {
            id: 4,
            name: 'Keripik Singkong Pedas',
            location: 'Malang',
            price: 25000,
            rating: 5,
            reviewCount: 45,
            tag: 'new',
            isWishlisted: false
        },
        {
            id: 5,
            name: 'Sabun Herbal Alami',
            location: 'Bali',
            price: 35000,
            rating: 4,
            reviewCount: 73,
            isWishlisted: false
        },
        {
            id: 6,
            name: 'Kemeja Batik Modern',
            location: 'Solo',
            price: 180000,
            rating: 5,
            reviewCount: 167,
            tag: 'limited',
            isWishlisted: false
        },
        {
            id: 7,
            name: 'Madu Hutan Asli',
            location: 'Kalimantan',
            price: 120000,
            rating: 5,
            reviewCount: 94,
            isWishlisted: false
        },
        {
            id: 8,
            name: 'Gelang Perak Handmade',
            location: 'Kotagede',
            price: 450000,
            rating: 4,
            reviewCount: 52,
            tag: 'exclusive',
            isWishlisted: false
        },
        {
            id: 9,
            name: 'Teh Herbal Organik',
            location: 'Bandung',
            price: 65000,
            rating: 5,
            reviewCount: 118,
            isWishlisted: false,
            image : "https://images.unsplash.com/photo-1601568656750-bf1a9c205613?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]

    // Sort options
    const sortOptions = [
        'Terpopuler',
        'Harga Terendah',
        'Harga Tertinggi',
        'Rating Tertinggi',
        'Terbaru'
    ]

    // Pagination data
    const pagination = [1, 2, 3, 4, '...', 7]
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Breadcrumb */}
            <div className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                    <nav className="flex text-sm text-gray-600">
                        {breadcrumbs.map((item, index) => (
                            <React.Fragment key={index}>
                                {item.href ? (
                                    <a href={item.href} className="hover:text-primary">{item.name}</a>
                                ) : (
                                    <span className="text-gray-900">{item.name}</span>
                                )}
                                {index < breadcrumbs.length - 1 && (
                                    <span className="mx-2">/</span>
                                )}
                            </React.Fragment>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Filters */}
                    <div className="lg:w-1/4">
                        <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter Produk</h3>

                            {/* Category Filter */}
                            <div className="mb-6">
                                <h4 className="font-medium text-gray-900 mb-3">Kategori</h4>
                                <div className="space-y-2">
                                    {categories.map((category, index) => (
                                        <label key={index} className="flex items-center">
                                            <input
                                                type="checkbox"
                                                className="rounded border-gray-300 text-primary focus:ring-primary"
                                                defaultChecked={category.checked}
                                            />
                                            <span className="ml-2 text-sm text-gray-700">
                                                {category.name}
                                                {category.count && ` (${category.count})`}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Price Range Filter */}
                            <div className="mb-6">
                                <h4 className="font-medium text-gray-900 mb-3">Rentang Harga</h4>
                                <div className="space-y-2">
                                    {priceRanges.map((range, index) => (
                                        <label key={index} className="flex items-center">
                                            <input
                                                type="radio"
                                                name="price"
                                                value={range.value}
                                                className="border-gray-300 text-primary focus:ring-primary"
                                                defaultChecked={index === 0}
                                            />
                                            <span className="ml-2 text-sm text-gray-700">{range.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Rating Filter */}
                            <div className="mb-6">
                                <h4 className="font-medium text-gray-900 mb-3">Rating</h4>
                                <div className="space-y-2">
                                    {ratings.map((rating, index) => (
                                        <label key={index} className="flex items-center">
                                            <input
                                                type="checkbox"
                                                className="rounded border-gray-300 text-primary focus:ring-primary"
                                            />
                                            <div className="ml-2 flex items-center">
                                                <div className="flex text-yellow-400">
                                                    {renderStars(rating.stars)}
                                                </div>
                                                <span className="ml-1 text-sm text-gray-700">{rating.label}</span>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Location Filter */}
                            <div className="mb-6">
                                <h4 className="font-medium text-gray-900 mb-3">Lokasi</h4>
                                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent">
                                    {locations.map((location, index) => (
                                        <option key={index}>{location}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Reset Filter Button */}
                            <button className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors">
                                Reset Filter
                            </button>
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className="lg:w-3/4">
                        {/* Sort and View Options */}
                        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                <div className="flex items-center space-x-4">
                                    <span className="text-gray-700">Menampilkan 1-9 dari {products.length} produk</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center space-x-2">
                                        <span className="text-sm text-gray-700">Urutkan:</span>
                                        <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:ring-2 focus:ring-primary focus:border-transparent">
                                            {sortOptions.map((option, index) => (
                                                <option key={index}>{option}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="flex border border-gray-300 rounded-lg">
                                        <button className="p-2 bg-primary text-white rounded-l-lg">
                                            <i className="fas fa-th text-sm"></i>
                                        </button>
                                        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-r-lg">
                                            <i className="fas fa-list text-sm"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Products Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {products.map((product) => (
                                <CardProduct key={product.id} product={product} />
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="mt-8 flex justify-center">
                            <nav className="flex items-center space-x-2">
                                <button className="px-3 py-2 text-gray-500 hover:text-primary border border-gray-300 rounded-lg hover:border-primary transition-colors">
                                    <i className="fas fa-chevron-left"></i>
                                </button>
                                {pagination.map((item, index) => (
                                    <button
                                        key={index}
                                        className={`px-3 py-2 ${item === 1 ? 'bg-primary text-white' : 'text-gray-700 hover:text-primary'} border ${item === 1 ? 'border-primary' : 'border-gray-300'} rounded-lg hover:border-primary transition-colors`}
                                    >
                                        {item}
                                    </button>
                                ))}
                                <button className="px-3 py-2 text-gray-500 hover:text-primary border border-gray-300 rounded-lg hover:border-primary transition-colors">
                                    <i className="fas fa-chevron-right"></i>
                                </button>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Filter Button */}
            <div className="lg:hidden fixed bottom-6 left-6">
                <button className="bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary/90 transition-colors">
                    <i className="fas fa-filter text-xl"></i>
                </button>
            </div>
        </div>
    )
}

export default Products