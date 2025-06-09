"use client";
import React from "react";
import { Montserrat } from "next/font/google";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Wind } from "lucide-react";
const font = Montserrat({
  weight: "400",
  subsets: ["latin"],
});
const LandingNav = () => {
  const { isSignedIn } = useAuth();
  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="text-[#FF6868] relative h-10 w-40 mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-wind"
          >
            <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
            <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
            <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
          </svg>
        </div>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button className="bg-[#FF9843] hover:text-[#503C3C] hover:bg-[#FF9843] text-[#E4DEBE] font-bold p-2 rounded mt-5">
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default LandingNav;
