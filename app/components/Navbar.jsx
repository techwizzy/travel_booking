// app/components/Navbar.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Globe, Menu, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const currencies = [
  { code: "USD", symbol: "$", name: "US Dollar", flag: "🇺🇸" },
  { code: "EUR", symbol: "€", name: "Euro", flag: "🇪🇺" },
  { code: "GBP", symbol: "£", name: "British Pound", flag: "🇬🇧" },
  { code: "JPY", symbol: "¥", name: "Japanese Yen", flag: "🇯🇵" },
  { code: "CAD", symbol: "C$", name: "Canadian Dollar", flag: "🇨🇦" },
];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("places");
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={96}
              height={98}
              className="h-16 w-16"
            />
           
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="#"
            onClick={() => setActiveLink("places")}
            className={`relative px-2 py-1 text-sm font-medium transition-colors ${
              activeLink === "places"
                ? "text-indigo-600"
                : "text-muted-foreground hover:text-indigo-600"
            }`}
          >
            Places to stay
            {activeLink === "places" && (
              <span className="absolute inset-x-0 -bottom-[17px] h-[2px] bg-indigo-600" />
            )}
          </Link>
          <Link
            href="#"
            onClick={() => setActiveLink("experiences")}
            className={`relative px-2 py-1 text-sm font-medium transition-colors ${
              activeLink === "experiences"
                ? "text-indigo-600"
                : "text-muted-foreground hover:text-indigo-600"
            }`}
          >
            Experiences
            {activeLink === "experiences" && (
              <span className="absolute inset-x-0 -bottom-[17px] h-[2px] bg-indigo-600" />
            )}
          </Link>
          <Link
            href="#"
            onClick={() => setActiveLink("discover")}
            className={`relative px-2 py-1 text-sm font-medium transition-colors ${
              activeLink === "discover"
                ? "text-indigo-600"
                : "text-muted-foreground hover:text-indigo-600"
            }`}
          >
            Discover
            {activeLink === "discover" && (
              <span className="absolute inset-x-0 -bottom-[17px] h-[2px] bg-indigo-600" />
            )}
          </Link>
        </nav>

        {/* User Actions */}
        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-9 px-2 rounded-full hover:bg-indigo-50 space-x-1">
                <span className="text-sm font-medium">{selectedCurrency.symbol}</span>
                <span className="text-sm font-medium">{selectedCurrency.code}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white w-52">
              {currencies.map((currency) => (
                <DropdownMenuItem 
                  key={currency.code}
                  className="hover:bg-indigo-50 hover:text-indigo-600 cursor-pointer"
                  onClick={() => setSelectedCurrency(currency)}
                >
                  <div className="flex items-center space-x-2">
                  <span className="ml-auto font-medium">{currency.symbol}</span>
                    <div className="flex flex-col">
                      <span className="font-medium">{currency.code}</span>
                     
                    </div>
                   
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full hover:bg-indigo-50">
            <Globe className="h-5 w-5" />
            <span className="sr-only">Language</span>
          </Button>

          <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full hover:bg-indigo-50">
            <User className="h-5 w-5" />
            <span className="sr-only">User account</span>
          </Button>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full hover:bg-indigo-50">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white">
              <div className="flex flex-col space-y-4 mt-8">
                <Link
                  href="#"
                  onClick={() => setActiveLink("places")}
                  className={`text-base font-medium ${
                    activeLink === "places"
                      ? "text-indigo-600"
                      : "text-muted-foreground hover:text-indigo-600"
                  }`}
                >
                  Places to stay
                </Link>
                <Link
                  href="#"
                  onClick={() => setActiveLink("experiences")}
                  className={`text-base font-medium ${
                    activeLink === "experiences"
                      ? "text-indigo-600"
                      : "text-muted-foreground hover:text-indigo-600"
                  }`}
                >
                  Experiences
                </Link>
                <Link
                  href="#"
                  onClick={() => setActiveLink("discover")}
                  className={`text-base font-medium ${
                    activeLink === "discover"
                      ? "text-indigo-600"
                      : "text-muted-foreground hover:text-indigo-600"
                  }`}
                >
                  Discover
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;