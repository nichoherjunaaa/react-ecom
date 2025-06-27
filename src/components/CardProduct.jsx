import React from 'react'
import { formatCurrency, getTagStyle, getTagText, renderStars } from '../utils/helper'
const CardProduct = ({product}) => {
    
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
            <div className="relative">
                <img
                    src="/placeholder.svg?height=200&width=300"
                    alt={product.name}
                    className="w-full h-48 object-cover"
                />
                <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                    <i className={`fas fa-heart ${product.isWishlisted ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}></i>
                </button>
                {product.tag && (
                    <div className={`absolute top-3 left-3 ${getTagStyle(product.tag)} text-white px-2 py-1 rounded text-sm font-semibold`}>
                        {getTagText(product.tag)}
                    </div>
                )}
            </div>
            <div className="p-4">
                <h4 className="font-semibold text-gray-800 mb-2 hover:text-primary cursor-pointer">
                    {product.name}
                </h4>
                <p className="text-gray-600 text-sm mb-2">{product.location}</p>
                <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                        {renderStars(product.rating)}
                    </div>
                    <span className="text-gray-600 text-sm ml-2">({product.reviewCount})</span>
                </div>
                <div className="flex items-center justify-between">
                    <div>
                        <span className="text-lg font-bold text-primary">
                            {formatCurrency(product.price)}
                        </span>
                        {product.originalPrice && (
                            <span className="text-sm text-gray-500 line-through ml-2">
                                {formatCurrency(product.originalPrice)}
                            </span>
                        )}
                    </div>
                    <button className="bg-primary text-white px-3 py-1 rounded-lg hover:bg-primary/90 transition-colors">
                        <i className="fas fa-cart-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardProduct