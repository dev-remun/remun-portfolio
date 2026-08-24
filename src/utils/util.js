
export function formatPrice(amount) {
    let base_price = amount; 
    return `$${base_price.toFixed(2)}`;
}