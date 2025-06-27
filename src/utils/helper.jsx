export const getTagStyle = (tag) => {
    switch (tag) {
        case 'discount': return 'bg-red-500'
        case 'bestseller': return 'bg-green-500'
        case 'new': return 'bg-blue-500'
        case 'limited': return 'bg-purple-500'
        case 'exclusive': return 'bg-yellow-500'
        default: return 'bg-primary'
    }
}

export const getTagText = (tag) => {
    switch (tag) {
        case 'discount': return '-20%'
        case 'bestseller': return 'Terlaris'
        case 'new': return 'Baru'
        case 'limited': return 'Limited'
        case 'exclusive': return 'Eksklusif'
        default: return ''
    }
}

export const formatCurrency = (amount) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0
    }).format(amount).replace('Rp', 'Rp ')
}

export const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
        <i
            key={i}
            className={`fas ${i < rating ? 'fa-star' : 'far fa-star'} text-sm`}
        ></i>
    ))
}