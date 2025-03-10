"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Search, ShoppingCart, User, ChevronDown } from "lucide-react";
import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/_components/ui/dropdown-menu";
import { useMobile } from "@/app/hooks/use-mobile";

export default function Navbar() {
  const isMobile = useMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="bg-background py-4 px-4 md:px-6 border-b">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu />
            </Button>
          )}
          <Link href="/" className="text-xl font-bold">
            SHOP.CO
          </Link>
        </div>

        {!isMobile && (
          <div className="hidden md:flex items-center space-x-6">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1">
                <span>Shop</span>
                <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Men</DropdownMenuItem>
                <DropdownMenuItem>Women</DropdownMenuItem>
                <DropdownMenuItem>Kids</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/on-sale" className="hover:text-gray-600">
              On Sale
            </Link>
            <Link href="/new-arrivals" className="hover:text-gray-600">
              New Arrivals
            </Link>
            <Link href="/brands" className="hover:text-gray-600">
              Brands
            </Link>
          </div>
        )}

        {!isMobile && (
          <div className="hidden md:flex relative w-80">
            <Input
              type="text"
              placeholder="Search for products..."
              className="pl-10 pr-4 py-2 w-full"
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
          </div>
        )}

        <div className="flex items-center space-x-4">
          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label="Search"
            >
              <Search />
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            aria-label="Cart"
            className="text-white"
          >
            <ShoppingCart />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Account"
            className="text-white"
          >
            <User />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div className="mt-4 px-4 py-2 bg-white border-t">
          <ul className="space-y-2">
            <li className="py-2 border-b">
              <Link
                href="/shop"
                className="flex justify-between items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
                <ChevronDown size={16} />
              </Link>
            </li>
            <li className="py-2 border-b">
              <Link
                href="/on-sale"
                className="block"
                onClick={() => setIsMenuOpen(false)}
              >
                On Sale
              </Link>
            </li>
            <li className="py-2 border-b">
              <Link
                href="/new-arrivals"
                className="block"
                onClick={() => setIsMenuOpen(false)}
              >
                New Arrivals
              </Link>
            </li>
            <li className="py-2">
              <Link
                href="/brands"
                className="block"
                onClick={() => setIsMenuOpen(false)}
              >
                Brands
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Mobile Search */}
      {isMobile && isSearchOpen && (
        <div className="mt-4 px-4 py-2 bg-white border-t">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search for products..."
              className="pl-10 pr-4 py-2 w-full"
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
          </div>
        </div>
      )}
    </nav>
  );
}
