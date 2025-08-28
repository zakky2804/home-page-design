import HeroImage from "@/assets/images/hero-image.png";
import Image from "next/image";

const Hero = () => {
  return (
    <header className="min-h-[416px] section-wrapper flex items-center gap-[72px] flex-col-reverse md:flex-row bg-neural-silver">
      {/* content section */}
      <div className="space-y-3 text-center md:text-left">
        <h1 className="text-3xl lg:text-5xl font-medium leading-relaxed">
          Lessons and insights <br />
          <span className="text-brand-primary">from 8 years</span>
        </h1>
        <p className="">
          Where to grow your business as a photographer: site or social media?
        </p>
        <button className="btn-primary">Regiter</button>
      </div>

      {/* Hero image */}
      <div className="">
        <Image
          src={HeroImage}
          alt="Hero Image"
          className=""
          width={272}
          height={283}
          priority
        />
      </div>
    </header>
  );
};

export default Hero;
