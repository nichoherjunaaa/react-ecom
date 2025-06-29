import React, { useState, useEffect } from 'react';
import { formatCurrency, renderStars } from '../utils/helper';
import { Link, useParams } from 'react-router-dom';
import { getDetailProduct } from '../service/productsService';
const ProductDetail = () => {
    const { id } = useParams();

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await getDetailProduct(id);
                setProduct(response.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };
        fetchProduct();
    }, [id]);

    const [mainImage, setMainImage] = useState('/placeholder.svg?height=500&width=500');
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState('S');
    const [selectedColor, setSelectedColor] = useState('blue');
    const [activeTab, setActiveTab] = useState('description');

    const sizes = ['S', 'M', 'L', 'XL'];
    const colors = [
        { name: 'blue', class: 'bg-blue-800' },
        { name: 'red', class: 'bg-red-800' },
        { name: 'green', class: 'bg-green-800' }
    ];
    const thumbnails = Array(4).fill('/placeholder.svg?height=120&width=120');

    const reviews = [
        {
            name: "Sari Dewi",
            rating: 5,
            date: "2 hari yang lalu",
            comment: "Batiknya bagus banget! Kualitas premium dengan harga yang reasonable. Motif parangnya juga sangat detail dan rapi. Penjual responsif dan pengiriman cepat. Recommended!",
            images: 2
        },
        {
            name: "Budi Santoso",
            rating: 5,
            date: "1 minggu yang lalu",
            comment: "Sangat puas dengan pembelian ini. Batik tulis asli dengan kualitas terbaik. Cocok untuk acara formal. Terima kasih!"
        },
        {
            name: "Maya Putri",
            rating: 4,
            date: "2 minggu yang lalu",
            comment: "Bahannya adem dan nyaman dipakai. Motifnya juga cantik. Cuma agak lama pengirimannya, tapi overall puas."
        }
    ];

    const relatedProducts = [
        {
            name: "Batik Cap Mega Mendung",
            location: "Cirebon",
            price: 250000,
            rating: 4,
            reviewCount: 89
        },
        {
            name: "Kemeja Batik Kawung",
            location: "Solo",
            price: 180000,
            rating: 5,
            reviewCount: 156
        },
        {
            name: "Dress Batik Modern",
            location: "Pekalongan",
            price: 275000,
            rating: 4,
            reviewCount: 67
        },
        {
            name: "Selendang Batik Silk",
            location: "Yogyakarta",
            price: 150000,
            rating: 5,
            reviewCount: 92
        }
    ];

    const changeMainImage = (newImage) => {
        setMainImage(newImage);
    };

    const increaseQuantity = () => {
        if (quantity < 25) {
            setQuantity(quantity + 1);
        }
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Product Images */}
                <div className="space-y-4">
                    {/* Main Image */}
                    <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-md">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Product Info */}
                <div className="space-y-6">
                    {/* Product Title & Rating */}
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="flex items-center">
                                <span className="text-accent">{renderStars(product.rating)}</span>
                                <span className="ml-2 text-gray-600">{product.rating}.0 ({product.review})</span>
                            </div>
                            <span className="text-gray-400">|</span>
                            <span className="text-gray-600">Terjual 250+</span>
                        </div>
                    </div>

                    {/* Price */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center space-x-4">
                            <span className="text-3xl font-bold text-primary">{formatCurrency(product.price)}</span>
                            {/* <span className="text-lg text-gray-500 line-through">{formatCurrency(400000)}</span> */}
                            {/* <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">20% OFF</span> */}
                        </div>
                    </div>

                    {/* Seller Info */}
                    <div className="border rounded-lg p-4">
                        <div className="flex items-center space-x-3">
                            <img
                                src="/placeholder.svg?height=50&width=50"
                                alt="Toko Batik Jogja"
                                className="w-12 h-12 rounded-full"
                            />
                            <div className="flex-1">
                                <h3 className="font-semibold text-gray-900">Toko Batik Jogja</h3>
                                <p className="text-sm text-gray-600">Yogyakarta • Online 2 jam lalu</p>
                            </div>
                            <button className="text-primary border border-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition-colors">
                                Kunjungi Toko
                            </button>
                        </div>
                    </div>

                    {/* Product Variants */}
                    <div className="space-y-4">
                        {/* Quantity */}
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-2">Jumlah</h3>
                            <div className="flex items-center space-x-3">
                                <div className="flex items-center border rounded-lg">
                                    <button
                                        className="px-3 py-2 text-gray-600 hover:text-primary"
                                        onClick={decreaseQuantity}
                                    >
                                        -
                                    </button>
                                    <span className="px-4 py-2 border-x">{quantity}</span>
                                    <button
                                        className="px-3 py-2 text-gray-600 hover:text-primary"
                                        onClick={increaseQuantity}
                                    >
                                        +
                                    </button>
                                </div>
                                <span className="text-gray-600">Stok: {product.stock} tersedia</span>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                        <div className="flex space-x-3">
                            <button className="flex-1 bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center">
                                <i className="fas fa-cart-plus mr-2"></i>
                                Tambah ke Keranjang
                            </button>
                            <button className="p-3 border border-gray-300 rounded-lg text-gray-600 hover:text-red-500 hover:border-red-500 transition-colors">
                                <i className="fas fa-heart text-xl"></i>
                            </button>
                        </div>
                        <button className="w-full bg-accent text-white py-3 px-6 rounded-lg font-semibold hover:bg-accent/90 transition-colors">
                            Beli Sekarang
                        </button>
                    </div>

                    {/* Shipping Info */}
                    <div className="border rounded-lg p-4 space-y-3">
                        <h3 className="font-semibold text-gray-900">Informasi Pengiriman</h3>
                        <div className="space-y-2 text-sm">
                            <div className="flex items-center">
                                <i className="fas fa-truck text-primary mr-2"></i>
                                <span>Gratis ongkir untuk pembelian di atas Rp 100.000</span>
                            </div>
                            <div className="flex items-center">
                                <i className="fas fa-clock text-primary mr-2"></i>
                                <span>Estimasi tiba 2-4 hari kerja</span>
                            </div>
                            <div className="flex items-center">
                                <i className="fas fa-shield-alt text-primary mr-2"></i>
                                <span>Garansi 100% uang kembali</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Details Tabs */}
            <div className="mt-12">
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex space-x-8">
                        <button
                            className={`py-4 px-1 border-b-2 ${activeTab === 'description' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700'} font-medium`}
                            onClick={() => setActiveTab('description')}
                        >
                            Deskripsi
                        </button>
                        <button
                            className={`py-4 px-1 border-b-2 ${activeTab === 'reviews' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700'} font-medium`}
                            onClick={() => setActiveTab('reviews')}
                        >
                            Ulasan (128)
                        </button>
                    </nav>
                </div>

                {/* Tab Content */}
                <div className="mt-6">
                    {/* Description Tab */}
                    {activeTab === 'description' && (
                        <div className="prose max-w-none">
                            <h3 className="text-xl font-semibold mb-4">Deskripsi Produk</h3>
                            <p className="text-gray-700 mb-4">
                                {product.description}
                            </p>
                            {/* <p className="text-gray-700 mb-4">
                                Motif Parang merupakan salah satu motif batik klasik yang memiliki makna filosofis mendalam,
                                melambangkan kekuatan, keteguhan, dan semangat pantang menyerah.
                            </p>
                            <h4 className="text-lg font-semibold mb-2">Keunggulan Produk:</h4>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                <li>100% handmade oleh pengrajin berpengalaman</li>
                                <li>Menggunakan pewarna alami yang ramah lingkungan</li>
                                <li>Bahan katun premium yang nyaman dan breathable</li>
                                <li>Motif klasik dengan kualitas finishing yang rapi</li>
                                <li>Cocok untuk acara formal maupun casual</li>
                            </ul> */}
                        </div>
                    )}

                    {/* Reviews Tab */}
                    {activeTab === 'reviews' && (
                        <div className="space-y-6">
                            {/* Review Summary */}
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <div className="flex items-center space-x-6">
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-primary">4.9</div>
                                        <div className="flex text-yellow-400 justify-center mb-1">
                                            {renderStars(4.9)}
                                        </div>
                                        <div className="text-sm text-gray-600">128 ulasan</div>
                                    </div>
                                    <div className="flex-1 space-y-2">
                                        {[5, 4, 3, 2, 1].map((star) => (
                                            <div key={star} className="flex items-center">
                                                <span className="text-sm w-8">{star}</span>
                                                <i className="fas fa-star text-yellow-400 mr-2"></i>
                                                <div className="flex-1 bg-gray-200 rounded-full h-2">
                                                    <div
                                                        className="bg-yellow-400 h-2 rounded-full"
                                                        style={{ width: `${star === 5 ? 85 : star === 4 ? 12 : star === 3 ? 2 : star === 2 ? 1 : 0}%` }}
                                                    />
                                                </div>
                                                <span className="text-sm ml-2 w-8">
                                                    {star === 5 ? 109 : star === 4 ? 15 : star === 3 ? 3 : star === 2 ? 1 : 0}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Individual Reviews */}
                            <div className="space-y-4">
                                {reviews.map((review, index) => (
                                    <div key={index} className="border-b pb-4">
                                        <div className="flex items-start space-x-3">
                                            <img
                                                src="/placeholder.svg?height=40&width=40"
                                                alt="User"
                                                className="w-10 h-10 rounded-full"
                                            />
                                            <div className="flex-1">
                                                <div className="flex items-center space-x-2 mb-1">
                                                    <h4 className="font-medium text-gray-900">{review.name}</h4>
                                                    <div className="flex text-yellow-400">
                                                        {renderStars(review.rating)}
                                                    </div>
                                                </div>
                                                <p className="text-sm text-gray-600 mb-2">{review.date}</p>
                                                <p className="text-gray-700">{review.comment}</p>
                                                {review.images && (
                                                    <div className="flex space-x-2 mt-2">
                                                        {Array(review.images).fill().map((_, i) => (
                                                            <img
                                                                key={i}
                                                                src="/placeholder.svg?height=60&width=60"
                                                                alt="Review"
                                                                className="w-15 h-15 rounded-lg"
                                                            />
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                <div className="text-center">
                                    <button className="text-primary font-medium hover:underline">Lihat Semua Ulasan</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Related Products */}
            {/* <div className="mt-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Produk Serupa</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {relatedProducts.map((product, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
                            <div className="relative">
                                <img
                                    src="/placeholder.svg?height=200&width=300"
                                    alt={product.name}
                                    className="w-full h-48 object-cover"
                                />
                                <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                                    <i className="fas fa-heart text-gray-400 hover:text-red-500"></i>
                                </button>
                            </div>
                            <div className="p-4">
                                <h4 className="font-semibold text-gray-800 mb-2">{product.name}</h4>
                                <p className="text-gray-600 text-sm mb-2">{product.location}</p>
                                <div className="flex items-center mb-2">
                                    {renderStars(product.rating)}
                                    <span className="text-gray-600 text-sm ml-2">({product.reviewCount})</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-lg font-bold text-primary">{formatCurrency(product.price)}</span>
                                    <button className="bg-primary text-white px-3 py-1 rounded-lg hover:bg-primary/90 transition-colors">
                                        <i className="fas fa-cart-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}
        </div>
    );
};

export default ProductDetail;