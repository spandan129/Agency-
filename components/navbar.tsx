'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Menu, X, Heart } from 'lucide-react';
import Image from 'next/image';
import Logo from "../images/logo/images.png"
import { routes } from "../data/navbar"


export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-500 backdrop-blur-sm",
      isScrolled
        ? "bg-[#7a2964]/95 shadow-lg"
        : "bg-[#7a2964]"
    )}>
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-12 h-12">
              <Image
                src={Logo.src}
                alt="Workforce Solutions Logo"
                width={48}
                height={48}
                className="transition-transform hover:scale-105 object-cover rounded-lg"
              />
            </div>
            <span className="text-lg font-semibold text-white">
              TruLink WorkForce
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <div className="bg-white/5 backdrop-blur-md px-2 py-1.5 rounded-xl flex items-center space-x-1 shadow-inner">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    'px-4 py-2.5 pb-3 rounded-lg text-sm font-medium transition-all duration-300',
                    'relative group ',
                    pathname === route.href
                      ? 'text-white '
                      : 'text-gray-200 hover:text-white'
                  )}
                >
                  {route.label}
                  {pathname === route.href && (
                    <span className="absolute bottom-1.5 left-0 w-[80%] ml-[10%] h-0.5 bg-white " />
                  )}
                </Link>
              ))}
            </div>

          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2.5 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 px-2  backdrop-blur-md rounded-b-xl border-t border-white/10">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  'block px-4 py-3 rounded-lg text-gray-200 hover:bg-white/10 hover:text-white transition-colors',
                  pathname === route.href && 'bg-white/10 text-white'
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {route.label}
              </Link>
            ))}

          </nav>
        )}
      </div>
    </header>
  );
}