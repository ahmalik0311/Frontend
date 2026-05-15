"use client"

import * as React from "react"
import Link from "next/link"
import { Search, ShoppingCart, User, Menu, Heart } from "lucide-react"
import { useStore } from "@/lib/store-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const menCategories = [
  { title: "Basketball", href: "/collections/basketball" },
  { title: "T-shirts", href: "/collections/t-shirts" },
  { title: "Sneakers", href: "/collections/sneakers" },
  { title: "7a Premium", href: "/collections/7a-premium" },
  { title: "Slides", href: "/collections/flip-flops" },
]

const mainNav = [
  { name: "Shop", href: "/shop" },
  { name: "Categories", href: "/categories" },
  { name: "New Arrival", href: "/shop?sort=newest" },
  { name: "Flash Sale", href: "/shop?filter=sale" },
  { name: "Order Tracking", href: "/order-tracking" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const { cart, wishlist } = useStore()
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0)
  const wishlistCount = wishlist.length

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border py-3"
          : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
            <span className="text-primary-foreground font-bold text-xl">S</span>
          </div>
          <span className="text-2xl font-bold  text-foreground uppercase font-heading">
            SHOE<span className="text-primary italic">BOX</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-2">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-white/5 text-foreground font-bold uppercase tracking-tight">
                  Men
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-card border-border">
                    {menCategories.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink
                          href={item.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-bold leading-none">{item.title}</div>
                          <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                            Explore our premium {item.title.toLowerCase()} collection.
                          </p>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {mainNav.map((link) => (
                <NavigationMenuItem key={link.name}>
                  <NavigationMenuLink
                    href={link.href}
                    className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-white/5 text-foreground font-bold uppercase tracking-tight")}
                  >
                    {link.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Search & Actions */}
        <div className="hidden xl:flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="pl-10 w-[150px] lg:w-[200px] bg-white/5 border-transparent focus:bg-white/10 transition-all duration-300 rounded-full"
            />
          </div>
          <div className="flex items-center gap-2">
            <Link href="/wishlist">
              <Button variant="ghost" size="icon" className="text-foreground hover:text-primary rounded-full relative">
                <Heart className="h-5 w-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Button>
            </Link>
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="text-foreground hover:text-primary rounded-full relative">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
            <Link href="/auth">
              <Button variant="ghost" size="icon" className="text-foreground hover:text-primary rounded-full">
                <User className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-foreground">
            <Search className="h-5 w-5" />
          </Button>
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className="text-foreground">
                  <Menu className="h-6 w-6" />
                </Button>
              }
            />
            <SheetContent side="right" className="bg-background border-border overflow-y-auto">
              <div className="flex flex-col gap-6 mt-12">
                <div>
                  <h4 className="text-xs font-black text-primary uppercase tracking-widest mb-4">Men</h4>
                  <div className="flex flex-col gap-3 pl-4">
                    {menCategories.map((item) => (
                      <Link key={item.title} href={item.href} className="text-lg font-bold text-foreground/80">
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="h-px bg-border my-4" />

                {mainNav.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-xl font-black text-foreground hover:text-primary transition-colors uppercase tracking-tight"
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="flex flex-col gap-4 pt-8 border-t border-border mt-auto">
                  <Link href="/auth" className="w-full">
                    <Button className="w-full bg-primary text-primary-foreground font-bold rounded-full h-12">
                      Login / Sign Up
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
