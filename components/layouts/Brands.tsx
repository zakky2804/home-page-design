import Image from "next/image";

const images = [
  "/svg/clients/image1.svg",
  "/svg/clients/image2.svg",
  "/svg/clients/image3.svg",
  "/svg/clients/image4.svg",
  "/svg/clients/image5.svg",
  "/svg/clients/image6.svg",
  "/svg/clients/image7.svg",
];

const Brands = () => {
  return (
    <section className="section-wrapper">
      <div className="text-center">
        <h2>Our clients</h2>
        <p>We have been working with some Fortune 500+ clients</p>
      </div>

      <div className="flex justify-center gap-8 flex-wrap md:justify-between py-10">
        {images.map((image) => (
          <Image
            key={image}
            src={image}
            alt="Client Image"
            className="size-[33.41px]"
            width={33.41}
            height={33.41}
          />
        ))}
      </div>
    </section>
  );
};

export default Brands;
