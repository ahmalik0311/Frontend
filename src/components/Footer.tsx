"use client"

import Link from "next/link"
import { Send, MapPin, Phone, Mail } from "lucide-react"

const SocialIcons = {
  Facebook: () => (
    <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  ),
  Instagram: () => (
    <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.28.072-1.689.072-4.947s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.28-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  ),
  Twitter: () => (
    <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
  ),
  Youtube: () => (
    <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
    </svg>
  ),
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-black italic uppercase leading-none mb-6">
              FOOTWEAR<br />
              <span className="text-[#FF6B35]">SHOES</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Elevate your game with the world&apos;s most exclusive footwear collections. Performance meets luxury in every step.
            </p>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-lg font-bold uppercase tracking-widest mb-8 border-l-4 border-[#FF6B35] pl-4">Company</h4>
            <ul className="space-y-4">
              {[
                { name: "About Us", href: "/about" },
                { name: "Shop", href: "/shop" },
                { name: "New Arrivals", href: "/shop?sort=newest" },
                { name: "Contact Us", href: "/contact" },
                { name: "FAQ", href: "/faq" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#FF6B35] transition-colors text-sm uppercase font-bold tracking-tight">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-bold uppercase tracking-widest mb-8 border-l-4 border-[#FF6B35] pl-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="h-5 w-5 text-[#FF6B35] shrink-0" />
                <span className="text-sm">123 Shoe Street, Fashion City, NY 10001</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="h-5 w-5 text-[#FF6B35] shrink-0" />
                <span className="text-sm">+00 1234 5678</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="h-5 w-5 text-[#FF6B35] shrink-0" />
                <span className="text-sm">support@shoebox.com</span>
              </li>
            </ul>
          </div>

          {/* Follow Us Column */}
          <div>
            <h4 className="text-lg font-bold uppercase tracking-widest mb-8 border-l-4 border-[#FF6B35] pl-4">Follow Us</h4>
            <div className="flex gap-4 mb-8">
              {Object.entries(SocialIcons).map(([name, Icon], idx) => (
                <Link 
                  key={idx} 
                  href="#" 
                  aria-label={name}
                  className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#FF6B35] hover:text-white transition-all duration-300"
                >
                  <Icon />
                </Link>
              ))}
            </div>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter email" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 text-sm focus:outline-none focus:border-[#FF6B35]"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#FF6B35] rounded-full flex items-center justify-center hover:bg-[#FF6B35]/90 transition-colors">
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-xs uppercase tracking-widest">
            &copy; {currentYear} <span className="text-white font-bold">SHOEBOX</span>. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            {[
              { name: "Privacy Policy", href: "/policies?type=privacy" },
              { name: "Return Policy", href: "/policies?type=return" },
              { name: "Shipping Policy", href: "/policies?type=shipping" },
            ].map((link) => (
              <Link key={link.name} href={link.href} className="text-gray-500 hover:text-white text-[10px] uppercase font-bold tracking-widest transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
