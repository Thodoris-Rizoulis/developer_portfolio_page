"use client";

import { ChevronUpIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Find the main scrolling container
    const scrollContainer = document.querySelector('.overflow-y-scroll');
    
    if (!scrollContainer) return;

    const toggleVisibility = () => {
      // Show button when scrolled down 300px
      if (scrollContainer.scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    scrollContainer.addEventListener("scroll", toggleVisibility);
    return () => scrollContainer.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <Link href="#hero">
      <footer className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex items-center justify-center">
          <ChevronUpIcon className="h-10 w-10 rounded-full text-gray-500 hover:text-[#F7AB0A] focus-visible:text-[#F7AB0A] focus-visible:ring-2 focus-visible:ring-[#F7AB0A] transition-colors duration-200 cursor-pointer" />
        </div>
      </footer>
    </Link>
  );
}
