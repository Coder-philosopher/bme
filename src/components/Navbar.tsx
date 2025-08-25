"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Research", path: "/research" },
    { name: "People", path: "/people" },
    { name: "Events", path: "/events" },
    { name: "Placement", path: "/placement" },
    { name: "Alumni", path: "/alumni" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      if (query.includes("academic") || query.includes("course") || query.includes("program")) {
        router.push("/academics");
      } else if (query.includes("research") || query.includes("publication")) {
        router.push("/research");
      } else if (query.includes("faculty") || query.includes("staff") || query.includes("people")) {
        router.push("/people");
      } else if (query.includes("placement") || query.includes("job") || query.includes("career")) {
        router.push("/placement");
      } else if (query.includes("event") || query.includes("activity")) {
        router.push("/events");
      } else if (query.includes("alumni") || query.includes("graduate")) {
        router.push("/alumni");
      } else if (query.includes("gallery") || query.includes("photo") || query.includes("image")) {
        router.push("/gallery");
      } else if (query.includes("contact") || query.includes("address") || query.includes("phone")) {
        router.push("/contact");
      } else {
        router.push("/about");
      }
      setSearchQuery("");
      setShowSearch(false);
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300">
      <div
        className={`bg-white/95 backdrop-blur-md shadow-lg rounded-2xl border border-gray-200/50 transition-all duration-300 ${
          isScrolled ? "shadow-xl scale-[0.98]" : "shadow-lg"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 flex-shrink-0">
            <img src="/placeholder.svg" alt="NIT Raipur Logo" className="h-10 w-10 rounded-full" />
            <div className="text-gray-900 font-heading font-semibold hidden sm:block">
              <span className="block text-sm">NIT Raipur</span>
              <span className="block text-xs text-gray-600">Biomedical Engineering</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center space-x-1 mx-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:bg-primary-teal hover:text-white ${
                  pathname === item.path
                    ? "bg-primary-teal text-white"
                    : "text-gray-700 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Search + mobile menu */}
          <div className="flex items-center space-x-3">
            {showSearch ? (
              <form onSubmit={handleSearch} className="hidden sm:flex items-center">
                <Input
                  type="text"
                  placeholder="Search website..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-48 h-8 text-sm rounded-lg border-gray-300"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowSearch(false)}
                  className="ml-1 h-8 w-8 rounded-lg"
                >
                  <X size={16} />
                </Button>
              </form>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowSearch(true)}
                className="h-10 w-10 rounded-xl hover:bg-gray-100 hidden sm:flex"
              >
                <Search size={18} />
              </Button>
            )}

            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden h-10 w-10 rounded-xl hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200/50 p-4">
            <form onSubmit={handleSearch} className="flex items-center mb-4 sm:hidden">
              <Input
                type="text"
                placeholder="Search website..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 h-8 text-sm rounded-lg border-gray-300 mr-2"
              />
              <Button type="submit" size="sm" className="h-8 px-3 rounded-lg">
                <Search size={16} />
              </Button>
            </form>

            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 text-center ${
                    pathname === item.path
                      ? "bg-primary-teal text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
