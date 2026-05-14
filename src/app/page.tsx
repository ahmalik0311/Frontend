import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { Categories } from "@/components/Categories"
import { ShowBanner } from "@/components/ShowBanner"
import { ImageBanners } from "@/components/ImageBanners"
import { FlashSale } from "@/components/FlashSale"
import { FeaturedProducts } from "@/components/FeaturedProducts"
import { NewArrivals } from "@/components/NewArrivals"
import { Testimonials } from "@/components/Testimonials"
import { PromoBanner } from "@/components/PromoBanner"
import { Newsletter } from "@/components/Newsletter"
import { Features } from "@/components/Features"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Categories />
      <ShowBanner />
      <ImageBanners />
      <FlashSale />
      <FeaturedProducts />
      <NewArrivals />
      <Testimonials />
      <PromoBanner />
      <Newsletter />
      <Features />
      {/* Brands Section */}
      <section className="py-20 bg-muted/10 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {["NIKE", "ADIDAS", "PUMA", "REEBOK", "NEW BALANCE"].map((brand) => (
              <span key={brand} className="text-3xl font-black  text-foreground">{brand}</span>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
