export const dynamic = "force-static";

import Brand2 from "@/components/layouts/Brand2";
import Brands from "@/components/layouts/Brands";
import Hero from "@/components/layouts/Hero";
import Navbar from "@/components/layouts/Navbar";
import Service from "@/components/layouts/Service";
import Statistic from "@/components/layouts/Statistic";

export default function Home() {
  return (
    <div className="max-w-screen-lg mx-auto">
      <Navbar />
      <Hero />
      <Brands />
      <Service />
      <Brand2 />
      <Statistic />
    </div>
  );
}
