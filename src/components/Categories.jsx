import React from 'react'

const CATEGORIES = [
    { name: "Fashion", icon: "fa-tshirt", color: "orange" },
    { name: "Makanan", icon: "fa-utensils", color: "green" },
    { name: "Rumah Tangga", icon: "fa-home", color: "blue" },
    { name: "Kerajinan", icon: "fa-palette", color: "purple" },
    { name: "Kecantikan", icon: "fa-spa", color: "pink" },
    { name: "Lainnya", icon: "fa-gift", color: "yellow" }
];

const COLOR_MAP = {
    orange: { bg: 'bg-orange-100', hoverBg: 'bg-orange-200', text: 'text-orange-600' },
    green: { bg: 'bg-green-100', hoverBg: 'bg-green-200', text: 'text-green-600' },
    blue: { bg: 'bg-blue-100', hoverBg: 'bg-blue-200', text: 'text-blue-600' },
    purple: { bg: 'bg-purple-100', hoverBg: 'bg-purple-200', text: 'text-purple-600' },
    pink: { bg: 'bg-pink-100', hoverBg: 'bg-pink-200', text: 'text-pink-600' },
    yellow: { bg: 'bg-yellow-100', hoverBg: 'bg-yellow-200', text: 'text-yellow-600' }
};


const Categories = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Kategori Produk</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {CATEGORIES.map((category) => (
                        <div key={category.name} className="text-center group cursor-pointer">
                            <div className={`${COLOR_MAP[category.color].bg} p-6 rounded-full w-20 h-20 mx-auto mb-4 group-hover:${COLOR_MAP[category.color].hoverBg} transition-colors flex items-center justify-center`}>
                                <i className={`fas ${category.icon} text-2xl ${COLOR_MAP[category.color].text}`} />
                            </div>
                            <p className="font-medium text-gray-700">{category.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Categories