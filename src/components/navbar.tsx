"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Inter } from "next/font/google";
import { Menu, X } from "lucide-react";

const inter = Inter({ subsets: ["latin"], weight: "700" });

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
       
        <Link
          href="/"
          className={`text-black text-3xl sm:text-4xl font-bold hover:text-gray-700 transition-all ${inter.className}`}
        >
          SacchiSewa
        </Link>

     
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/how-it-works"
            className="text-gray-800 hover:text-green-500 transition-all"
          >
            How It Works
          </Link>
          <Link href="/start-fundraiser">
            <Button className="bg-green-500 text-white hover:bg-green-400 transition-all shadow-md hover:shadow-lg rounded-lg px-4 py-2">
              Start a Fundraiser
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="bg-blue-500 text-white hover:bg-blue-400 transition-all shadow-md hover:shadow-lg rounded-lg px-4 py-2">
              Sign Up
            </Button>
          </Link>
        </div>

   
        <button
          className="md:hidden text-gray-800 hover:text-gray-500 transition-all focus:outline-none"
          aria-label="Toggle Menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t border-gray-200">
          <div className="flex flex-col gap-4 px-6 py-4">
            <Link
              href="/how-it-works"
              className="text-gray-800 hover:text-green-500 transition-all"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </Link>
            <Link href="/start-fundraiser">
              <Button
                className="w-full bg-green-500 text-white hover:bg-green-400 transition-all shadow-md hover:shadow-lg rounded-lg px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                Start a Fundraiser
              </Button>
            </Link>
            <Link href="/signup">
              <Button
                className="w-full bg-blue-500 text-white hover:bg-blue-400 transition-all shadow-md hover:shadow-lg rounded-lg px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
