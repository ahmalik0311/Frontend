export interface ShopifyProduct {
  id: number;
  title: string;
  handle: string;
  body_html: string;
  vendor: string;
  product_type: string;
  variants: {
    id: number;
    title: string;
    price: string;
    compare_at_price: string | null;
    available: boolean;
    sku: string;
  }[];
  images: {
    id: number;
    src: string;
  }[];
  options: {
    name: string;
    values: string[];
  }[];
}

export interface AppProduct {
  id: string | number;
  name: string;
  price: number;
  salePrice?: number;
  category: string;
  brand: string;
  image: string;
  description: string;
  rating: number;
  reviews: number;
  sizes: number[];
  colors: string[];
  isNew: boolean;
  isSale: boolean;
}

export async function fetchProducts(): Promise<AppProduct[]> {
  try {
    const response = await fetch("https://jutay.co/collections/all/products.json");
    if (!response.ok) throw new Error("Failed to fetch products");
    const data = await response.json();
    
    return data.products.map((p: ShopifyProduct) => {
      const variant = p.variants[0];
      const price = parseFloat(variant.price);
      const salePrice = variant.compare_at_price ? parseFloat(variant.compare_at_price) : undefined;
      
      // Extract sizes (usually in options where name is "Size")
      const sizeOption = p.options.find(o => o.name.toLowerCase() === "size");
      const sizes = sizeOption ? sizeOption.values.map(v => parseInt(v)).filter(v => !isNaN(v)) : [40, 41, 42, 43, 44, 45];

      return {
        id: p.id.toString(),
        name: p.title,
        price: salePrice && salePrice > price ? salePrice : price, // If compare_at_price is higher, it's the original price
        salePrice: salePrice && salePrice > price ? price : undefined,
        category: p.product_type || "Shoes",
        brand: p.vendor,
        image: p.images[0]?.src || "/shoe-1.png",
        description: p.body_html.replace(/<[^>]*>?/gm, ''), // Simple strip HTML
        rating: 4.5 + Math.random() * 0.5, // Mock rating
        reviews: Math.floor(Math.random() * 200) + 50,
        sizes: sizes,
        colors: ["Default"],
        isNew: p.published_at ? (new Date().getTime() - new Date(p.published_at).getTime() < 30 * 24 * 60 * 60 * 1000) : false,
        isSale: !!salePrice && salePrice > price,
      };
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
