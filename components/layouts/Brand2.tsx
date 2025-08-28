import Image from "next/image";
import BrandImage from "@/assets/images/brand1-image.png";

const Brand2 = () => {
  return (
    <section className="section-wrapper mt-6 flex flex-col md:flex-row gap-6 text-center md:text-left">
      {/* image */}
      <Image src={BrandImage} alt="" width={307} height={299} />

      {/* content */}
      <div className="space-y-4">
        <h2>The unseen of spending three years at Pixelgrade</h2>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
        <button className="btn-primary">Learn More</button>
      </div>
    </section>
  );
};

export default Brand2;
