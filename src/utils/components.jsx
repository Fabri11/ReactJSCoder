export async function getProducts() {
    const response = await fetch("/json/products.json")
    const data = await response.json();
    return data;
}

export const banner = ("/json/banners.json")
