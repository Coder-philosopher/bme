"use client";

import { useState, useEffect, useMemo } from "react";
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openCommandDialog, setOpenCommandDialog] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard shortcut for command dialog (Ctrl+K or Cmd+K)
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpenCommandDialog((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const navItems = [
    { 
      name: "Home", 
      path: "/", 
      keywords: ["homepage", "main", "landing", "index", "home page"],
      description: "Return to homepage"
    },
    { 
      name: "About", 
      path: "/about", 
      keywords: ["department", "vision", "mission", "history", "overview", "information", "details", "biomedical engineering", "introduction", "about us"],
      description: "Learn about the department"
    },
    { 
      name: "Academics", 
      path: "/academics", 
      keywords: ["courses", "curriculum", "programs", "syllabus", "btech", "mtech", "phd", "degree", "education", "study", "learning", "undergraduate", "postgraduate", "doctorate"],
      description: "Academic programs and curriculum"
    },
    { 
      name: "Research", 
      path: "/research", 
      keywords: ["publications", "papers", "projects", "innovation", "labs", "biomechanics", "signal processing", "tissue engineering", "medical imaging", "laboratories", "funded projects", "patents"],
      description: "Research areas and publications"
    },
    { 
      name: "People", 
      path: "/people", 
      keywords: ["faculty", "staff", "professors", "hod", "teachers", "team", "members", "employees", "dr", "doctor", "head of department", "assistant professor", "associate professor"],
      description: "Faculty and staff directory"
    },
    { 
      name: "Events", 
      path: "/events", 
      keywords: ["activities", "workshops", "seminars", "conferences", "symposium", "calendar", "upcoming", "news", "webinar", "lecture", "guest talk"],
      description: "Upcoming events and activities"
    },
    { 
      name: "Placement", 
      path: "/placement", 
      keywords: ["jobs", "careers", "recruitment", "companies", "internships", "opportunities", "hiring", "employment", "training", "job placement", "campus recruitment"],
      description: "Placement and career opportunities"
    },
    { 
      name: "Alumni", 
      path: "/alumni", 
      keywords: ["graduates", "former students", "alumni network", "passed out", "old students", "alumni association", "alumni meet", "alumni portal"],
      description: "Alumni network and achievements"
    },
    { 
      name: "Gallery", 
      path: "/gallery", 
      keywords: ["photos", "images", "pictures", "media", "events photos", "lab photos", "campus pictures", "photo gallery", "visual gallery"],
      description: "Photo gallery and media"
    },
    { 
      name: "Contact", 
      path: "/contact", 
      keywords: ["address", "phone", "email", "location", "reach us", "get in touch", "enquiry", "contact us", "contact details", "office address"],
      description: "Contact information and location"
    },
  ];

  // Fuzzy search configuration
  const fuse = useMemo(() => {
    return new Fuse(navItems, {
      keys: [
        { name: "name", weight: 2 },
        { name: "keywords", weight: 1 },
        { name: "description", weight: 0.5 },
      ],
      threshold: 0.3,
      distance: 100,
      minMatchCharLength: 2,
      includeScore: true,
      shouldSort: true,
      ignoreLocation: true,
    });
  }, []);

  const handleCommandSelect = (path: string) => {
    router.push(path);
    setOpenCommandDialog(false);
  };

  return (
    <>
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-7xl px-2 sm:px-2">
        <div
          className={`backdrop-blur-xl rounded-2xl border transition-all duration-300 ${
            isScrolled 
              ? "bg-white/95 shadow-lg border-gray-200/70" 
              : "bg-white/85 shadow-md border-gray-200/50"
          }`}
        >
          <div className="flex items-center justify-between px-5 py-3.5">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 flex-shrink-0 group">
              <div className="relative">
                <img 
                  src="/image.png" 
                  alt="NIT Raipur Logo" 
                  className="h-11 w-11 rounded-full ring-2 ring-gray-200/70 group-hover:ring-blue-500/40 transition-all duration-300" 
                />
              </div>
              <div className="hidden sm:block">
                <div className="text-[15px] font-bold text-gray-900 tracking-tight leading-tight">
                  NIT Raipur
                </div>
                <div className="text-[12.5px] font-semibold text-gray-600 leading-tight">
                  Biomedical Engineering
                </div>
              </div>
            </Link>

            {/* Navigation Links - Desktop */}
            <div className="hidden lg:flex items-center space-x-0.5">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`px-3.5 py-2 rounded-lg text-[14.5px] font-semibold transition-all duration-200 ${
                    pathname === item.path
                      ? "bg-blue-50 text-blue-700 shadow-sm"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Search + Mobile Toggle */}
            <div className="flex items-center space-x-2">
              {/* Desktop Search Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setOpenCommandDialog(true)}
                className="hidden sm:flex items-center space-x-2 h-9 px-3 rounded-lg hover:bg-gray-100 text-gray-600"
              >
                <Search size={16} />
                <span className="text-[13px] font-medium">Search</span>
                <kbd className="pointer-events-none hidden lg:inline-flex h-5 select-none items-center gap-1 rounded border border-gray-200 bg-gray-50 px-1.5 text-[10px] font-semibold text-gray-600">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </Button>

              {/* Mobile Search Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setOpenCommandDialog(true)}
                className="sm:hidden h-9 w-9 rounded-lg hover:bg-gray-100"
              >
                <Search size={18} className="text-gray-600" />
              </Button>

              {/* Mobile menu toggle */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden h-9 w-9 rounded-lg hover:bg-gray-100"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X size={20} className="text-gray-700" />
                ) : (
                  <Menu size={20} className="text-gray-700" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-200/50 p-4 bg-gradient-to-b from-white/50 to-white/80 backdrop-blur-sm rounded-b-2xl">
              <div className="grid grid-cols-2 gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={`px-4 py-3 rounded-lg text-[14.5px] font-semibold text-center transition-all duration-200 ${
                      pathname === item.path
                        ? "bg-blue-50 text-blue-700 shadow-sm border border-blue-100"
                        : "text-gray-800 hover:bg-gray-100 hover:text-gray-900 border border-gray-100"
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

      {/* Command Dialog for Search */}
      <CommandDialog open={openCommandDialog} onOpenChange={setOpenCommandDialog}>
        <CommandInput placeholder="Search pages, courses, faculty..." className="text-[15px] font-medium" />
        <CommandList className="max-h-[400px]">
          <CommandEmpty className="py-6 text-center text-[14px] text-gray-500 font-medium">
            No results found.
          </CommandEmpty>
          <CommandGroup heading="Navigation" className="text-[13px] font-bold text-gray-500 px-2 py-2">
            {navItems.map((item) => (
              <CommandItem
                key={item.path}
                value={`${item.name} ${item.keywords.join(" ")} ${item.description}`}
                onSelect={() => handleCommandSelect(item.path)}
                className="px-3 py-3 rounded-md cursor-pointer"
              >
                <div className="flex flex-col">
                  <span className="text-[14.5px] font-semibold text-gray-900">
                    {item.name}
                  </span>
                  <span className="text-[12.5px] text-gray-500 font-medium mt-0.5">
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
