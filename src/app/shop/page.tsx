"use client"

import * as React from "react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { ProductCard } from "@/components/ProductCard"
import { fetchProducts, type AppProduct } from "@/lib/api"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Filter, X } from "lucide-react"

export default function ShopPage() {
  const [products, setProducts] = React.useState<AppProduct[]>([])
  const [loading, setLoading] = React.useState(true)
  const [priceRange, setPriceRange] = React.useState([0, 50000])
  const [selectedBrands, setSelectedBrands] = React.useState<string[]>([])
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>([])
  const [sortBy, setSortBy] = React.useState("featured")
  const [isFilterOpen, setIsFilterOpen] = React.useState(false)

  const [inStockOnly, setInStockOnly] = React.useState(false)
  const [onSaleOnly, setOnSaleOnly] = React.useState(false)
  const [selectedSizes, setSelectedSizes] = React.useState<number[]>([])

  React.useEffect(() => {
    async function loadProducts() {
      const allProducts = await fetchProducts()
      setProducts(allProducts)
      setLoading(false)
      
      // Update max price based on real data
      if (allProducts.length > 0) {
        const maxPrice = Math.max(...allProducts.map(p => p.price))
        setPriceRange([0, maxPrice])
      }
    }
    loadProducts()
  }, [])

  const brands = Array.from(new Set(products.map((p) => p.brand)))
  const categories = Array.from(new Set(products.map((p) => p.category)))

  const filteredProducts = products.filter((product) => {
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand)
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category)
    const matchesSale = !onSaleOnly || product.isSale
    const matchesStock = !inStockOnly || true // Assuming all are in stock for this demo
    const matchesSize = selectedSizes.length === 0 || product.sizes.some(s => selectedSizes.includes(s))
    
    return matchesPrice && matchesBrand && matchesCategory && matchesSale && matchesStock && matchesSize
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price
    if (sortBy === "price-high") return b.price - a.price
    if (sortBy === "newest") return a.isNew ? -1 : 1
    return 0
  })

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    )
  }

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    )
  }

  const toggleSize = (size: number) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-32 pb-12 bg-muted/5 border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-4">
            Our <span className="text-primary">Collection</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl uppercase font-bold tracking-widest text-sm">
            Explore our curated selection of premium footwear. From performance runners to luxury sneakers.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters - Desktop */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="bg-card border border-border rounded-3xl p-6 sticky top-32 space-y-8">
                <h2 className="text-2xl font-black text-foreground">Filters</h2>

                {/* Availability */}
                <div>
                  <div className="flex justify-between items-center mb-4 cursor-pointer">
                    <h3 className="text-lg font-bold text-foreground">Availability</h3>
                    <span className="text-muted-foreground text-sm">^</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Checkbox 
                        id="in-stock" 
                        className="rounded-md border-muted-foreground/30 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                        checked={inStockOnly}
                        onCheckedChange={(checked) => setInStockOnly(checked as boolean)}
                      />
                      <label htmlFor="in-stock" className="text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors">In Stock</label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Checkbox 
                        id="on-sale" 
                        className="rounded-md border-muted-foreground/30 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                        checked={onSaleOnly}
                        onCheckedChange={(checked) => setOnSaleOnly(checked as boolean)}
                      />
                      <label htmlFor="on-sale" className="text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors">On Sale</label>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-border/50" />

                {/* Price Range */}
                <div>
                  <div className="flex justify-between items-center mb-4 cursor-pointer">
                    <h3 className="text-lg font-bold text-foreground">Price Range</h3>
                    <span className="text-muted-foreground text-sm">^</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative flex-1">
                      <input 
                        type="number" 
                        placeholder="Min" 
                        className="w-full bg-background/50 border border-border rounded-full py-2.5 px-4 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                      />
                    </div>
                    <span className="text-muted-foreground">—</span>
                    <div className="relative flex-1">
                      <input 
                        type="number" 
                        placeholder="Max" 
                        className="w-full bg-background/50 border border-border rounded-full py-2.5 px-4 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      />
                    </div>
                  </div>
                </div>

                <div className="h-px bg-border/50" />

                {/* Size */}
                <div>
                  <div className="flex justify-between items-center mb-4 cursor-pointer">
                    <h3 className="text-lg font-bold text-foreground">Size</h3>
                    <span className="text-muted-foreground text-sm">^</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[38, 39, 40, 41, 42, 43, 44, 45, 46].map((size) => (
                      <button
                        key={size}
                        onClick={() => toggleSize(size)}
                        className={`w-11 h-11 rounded-full text-sm font-bold transition-all flex items-center justify-center border ${
                          selectedSizes.includes(size)
                            ? "bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/20"
                            : "bg-background/50 border-border text-muted-foreground hover:text-foreground hover:border-primary"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="h-px bg-border/50" />

                {/* Brand */}
                <div>
                  <div className="flex justify-between items-center mb-4 cursor-pointer">
                    <h3 className="text-lg font-bold text-foreground">Brand</h3>
                    <span className="text-muted-foreground text-sm">^</span>
                  </div>
                  <div className="space-y-3">
                    {brands.map((brand) => (
                      <div key={brand} className="flex items-center space-x-3">
                        <Checkbox
                          id={`brand-${brand}`}
                          checked={selectedBrands.includes(brand)}
                          onCheckedChange={() => toggleBrand(brand)}
                          className="rounded-md border-muted-foreground/30 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                        />
                        <label
                          htmlFor={`brand-${brand}`}
                          className="text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
                        >
                          {brand}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full border-border text-muted-foreground hover:bg-primary hover:text-white hover:border-primary font-bold rounded-full mt-4"
                  onClick={() => {
                    setPriceRange([0, 50000])
                    setSelectedBrands([])
                    setSelectedCategories([])
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            </aside>

            {/* Mobile Filter Toggle */}
            <div className="lg:hidden flex items-center justify-between mb-6">
              <span className="font-bold uppercase tracking-widest text-sm text-muted-foreground">
                {sortedProducts.length} Products Found
              </span>
              <Button 
                variant="outline" 
                className="border-border text-foreground"
                onClick={() => setIsFilterOpen(true)}
              >
                <Filter className="mr-2 h-4 w-4" /> Filter
              </Button>
            </div>

            {/* Product Grid */}
            <div className="flex-1">
              <div className="hidden lg:flex items-center justify-between mb-8 pb-4 border-b border-border">
                <span className="font-bold uppercase tracking-widest text-sm text-muted-foreground">
                  Showing {loading ? "..." : sortedProducts.length} Products
                </span>
              </div>

              {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="aspect-[3/4] bg-muted animate-pulse rounded-2xl" />
                  ))}
                </div>
              ) : sortedProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {sortedProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      price={product.price}
                      category={product.category}
                      brand={product.brand}
                      image={product.image}
                      isNew={product.isNew}
                      isSale={product.isSale}
                      salePrice={product.salePrice}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-24">
                  <h3 className="text-2xl font-black uppercase mb-4">No products found</h3>
                  <p className="text-muted-foreground uppercase text-xs font-bold tracking-widest">
                    Try adjusting your filters to find what you're looking for.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Filter Drawer Mockup (Logic simplified for brevity) */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md lg:hidden p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-black uppercase italic">Filters</h2>
            <Button variant="ghost" size="icon" onClick={() => setIsFilterOpen(false)}>
              <X className="h-6 w-6" />
            </Button>
          </div>
          {/* Mobile Filter Content... */}
          <div className="space-y-8 pb-12">
             {/* Reuse Sidebar components here in a real implementation */}
             <p className="text-muted-foreground italic">Mobile filters would be here...</p>
             <Button className="w-full h-12 bg-primary font-bold uppercase rounded-full" onClick={() => setIsFilterOpen(false)}>
                Apply Filters
             </Button>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}
