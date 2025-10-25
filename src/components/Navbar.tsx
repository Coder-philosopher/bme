"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import Fuse from "fuse.js";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openCommandDialog, setOpenCommandDialog] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { name: "Home", path: "/", keywords: ["homepage"], description: "Return to homepage" },
    { name: "About", path: "/about", keywords: ["department"], description: "Learn about the department" },
    { name: "Academics", path: "/academics", keywords: ["courses"], description: "Academic programs" },
    { name: "Research", path: "/research", keywords: ["projects"], description: "Research & publications" },
    { name: "People", path: "/people", keywords: ["faculty"], description: "Faculty directory" },
    { name: "Events", path: "/events", keywords: ["workshops"], description: "Upcoming events" },
    { name: "Placement", path: "/placement", keywords: ["careers"], description: "Placement opportunities" },
    { name: "Alumni", path: "/alumni", keywords: ["graduates"], description: "Alumni network" },
    { name: "Gallery", path: "/gallery", keywords: ["photos"], description: "Media gallery" },
    { name: "Contact", path: "/contact", keywords: ["address"], description: "Contact info" },
  ];

  const fuse = new Fuse(navItems, {
    keys: [
      { name: "name", weight: 2 },
      { name: "keywords", weight: 1 },
      { name: "description", weight: 0.5 },
    ],
    threshold: 0.3,
  });

  const handleCommandSelect = (path: string) => {
    router.push(path);
    setOpenCommandDialog(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-blue-900 shadow-md">
        <div className="max-w-screen mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between py-2 md:py-3 lg:py-3">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 md:space-x-3 flex-shrink-0">
              <img
                src="/image.png"
                alt="NIT Raipur Logo"
                className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12"
              />
              <div className="hidden sm:block">
                <div className="text-xs md:text-sm lg:text-base font-bold text-gray-900 uppercase leading-tight">
                  NIT Raipur
                </div>
                <div className="text-[10px] md:text-xs lg:text-sm font-semibold text-gray-700 leading-tight">
                  Biomedical Engineering
                </div>
              </div>
            </Link>

            {/* Navigation Links */}
            <div className="hidden lg:flex flex-1 justify-center gap-x-4 md:gap-x-2 flex-wrap">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`relative px-2 md:px-3 lg:px-4 py-1 md:py-2 text-xs md:text-sm lg:text-base font-semibold uppercase tracking-wide transition-colors duration-200 border-b-2 ${
                    pathname === item.path
                      ? "border-blue-900 text-blue-900"
                      : "border-transparent text-gray-700 hover:border-blue-900"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Search + Mobile Toggle */}
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setOpenCommandDialog(true)}
                className="hidden sm:flex items-center space-x-1 md:space-x-2 h-7 md:h-9 px-2 md:px-3 border border-gray-300 hover:bg-gray-100 text-gray-700 text-xs md:text-sm"
              >
                <Search size={14} className="md:hidden" />
                <Search size={16} className="hidden md:inline" />
                <span className="hidden md:inline">Search</span>
                <kbd className="pointer-events-none hidden md:inline-flex h-4 md:h-5 select-none items-center gap-1 border border-gray-300 bg-gray-100 px-1 text-[10px] md:text-xs font-semibold text-gray-600">
                  <span className="text-[10px] md:text-xs">⌘</span>K
                </kbd>
              </Button>

              {/* Mobile menu toggle */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden h-8 w-8 md:h-9 md:w-9 border border-gray-300 hover:bg-gray-100"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </Button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t-2 border-gray-300 bg-gray-50">
              <div className="grid grid-cols-2 gap-2 p-3 md:p-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={`px-3 py-2 text-xs md:text-sm text-center uppercase tracking-wide transition-colors duration-200 border-2 ${
                      pathname === item.path
                        ? "border-blue-900 bg-blue-900 text-white"
                        : "border-gray-300 text-gray-800 hover:border-blue-900 hover:bg-white"
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

      {/* Command Dialog */}
      <CommandDialog open={openCommandDialog} onOpenChange={setOpenCommandDialog}>
        <CommandInput placeholder="Search pages, courses, faculty..." className="text-base font-medium" />
        <CommandList className="max-h-[400px]">
          <CommandEmpty className="py-6 text-center text-sm text-gray-500 font-medium">
            No results found.
          </CommandEmpty>
          <CommandGroup heading="Navigation" className="text-sm font-bold text-gray-700 px-2 py-2">
            {navItems.map((item) => (
              <CommandItem
                key={item.path}
                value={`${item.name} ${item.keywords?.join(" ")} ${item.description}`}
                onSelect={() => handleCommandSelect(item.path)}
                className="px-3 py-3 cursor-pointer border-b border-gray-200 hover:bg-gray-100"
              >
                <div className="flex flex-col">
                  <span className="text-base font-bold text-gray-900 uppercase tracking-wide">
                    {item.name}
                  </span>
                  <span className="text-sm text-gray-600 font-medium mt-1">
                    {item.description}
                  </span>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default Navbar;
