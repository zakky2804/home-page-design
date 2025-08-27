import Image from "next/image";
import Link from "next/link";
import MobileMenu from "../MobileMenu";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-3 px-4 relative">
      <div className="flex items-center">
        <Image
          src={"/logo.svg"}
          alt=""
          className="w-6 h-4"
          width={24}
          height={16}
        />
        <span className="font-semibold text-neural-black text-xl">Nexcent</span>
      </div>

      <div className="hidden md:flex gap-5">
        <ul className="flex items-center gap-4 font-medium">
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
        <button className="btn-primary">Register Now →</button>
      </div>

      {/* Mobile Menu */}
      <MobileMenu />
    </nav>
  );
};

export default Navbar;
