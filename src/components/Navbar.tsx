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
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-7xl px-4 sm:px-6">
      <div
        className={`backdrop-blur-md rounded-2xl border border-gray-200/50 transition-all duration-300 ${
          isScrolled ? "bg-white/90 shadow-sm" : "bg-white/70 shadow-sm"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 flex-shrink-0">
            <img src="/image.png" alt="NIT Raipur Logo" className="h-10 w-10 rounded-full" />
            <div className="text-gray-900 font-heading font-semibold hidden sm:block">
              <span className="block text-sm">NIT Raipur</span>
              <span className="block text-xs text-gray-600">Biomedical Engineering</span>
            </div>
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 text-[14px] ${
                  pathname === item.path
                    ? "underline underline-offset-4 decoration-primary-teal text-gray-900"
                    : "text-gray-700 hover:text-gray-900 "
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Search + Mobile Toggle */}
          <div className="flex items-center space-x-2">
            {/* Desktop Search */}
            <div className="hidden sm:flex items-center">
              {showSearch ? (
                <form onSubmit={handleSearch} className="flex items-center">
                  <Input
                    type="text"
                    placeholder="Search..."
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
                  className="h-10 w-10 rounded-xl "
                >
                  <Search size={18} />
                </Button>
              )}
            </div>

            {/* Mobile menu toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden h-10 w-10 rounded-xl "
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200/50 p-4">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="flex items-center mb-4">
              <Input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 h-8 text-sm rounded-lg border-gray-300 mr-2"
              />
              <Button type="submit" size="sm" className="h-8 px-3 rounded-lg">
                <Search size={16} />
              </Button>
            </form>

            {/* Mobile nav links */}
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`px-4 py-3 rounded-xl text-sm font-medium text-center transition-all duration-200 ${
                    pathname === item.path
                      ? "underline underline-offset-4 decoration-primary-teal text-gray-900"
                      : "text-gray-800 hover:bg-gray-100 hover:text-gray-900"
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
