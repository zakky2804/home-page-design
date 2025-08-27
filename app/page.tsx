export const dynamic = "force-static";

import Hero from "@/components/layouts/Hero";
import Navbar from "@/components/layouts/Navbar";

export default function Home() {
  return (
    <div className="max-w-screen-lg mx-auto">
      <Navbar />
      <Hero />
    </div>
  );
}
