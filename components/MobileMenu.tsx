"use client";

import Link from "next/link";
import { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
        <FiAlignJustify className="size-6" />
      </button>
      <div
        className={`md:hidden w-full transition duration-300 ease-in-out absolute ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
        } top-16 right-0 font-medium px-4 -z-30`}
      >
        <ul className="py-10 flex flex-col items-center gap-4 bg-neural-silver rounded-md">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Features</Link>
          </li>
          <li>
            <Link href="/">Community</Link>
          </li>
          <li>
            <Link href="/">Blog</Link>
          </li>
          <li>
            <Link href="/">Pricing</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
