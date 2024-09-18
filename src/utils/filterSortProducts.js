export const filterProducts = (products, filterColors, maxPrice, searchQuery) => {
    return products.filter(product => {
        if (filterColors.length === 0) return true;
        if (!product.colors) return false;
        return product.colors.some(color => filterColors.includes(color.colorName));
    }).filter(product => maxPrice ? product.price <= maxPrice : product.price
    ).filter(product => searchQuery ? product.name.includes(searchQuery) : true);
};

export const sortProducts = (products, sortCriteria) => {
    let sortedProducts = [...products];
    if (sortCriteria === 'price_ASC') {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortCriteria === 'alphabet') {
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortCriteria === 'price_DESC') {
        sortedProducts.sort((a, b) => b.price - a.price);
    }
    return sortedProducts;
};
