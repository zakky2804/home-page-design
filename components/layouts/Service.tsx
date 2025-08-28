import Image from "next/image";

const servicesData = [
  {
    id: 1,
    title: "Membership Organisations",
    desciption:
      "Our membership management software provides full automation of membership renewals and payments",
    icon: "/svg/service/img1.svg",
  },
  {
    id: 2,
    title: "National Associations",
    desciption:
      "Our membership management software provides full automation of membership renewals and payments",
    icon: "/svg/service/img2.svg",
  },
  {
    id: 3,
    title: "Clubs And Groups",
    desciption:
      "Our membership management software provides full automation of membership renewals and payments",
    icon: "/svg/service/img3.svg",
  },
];

const Service = () => {
  return (
    <section className="section-wrapper">
      <div className="mb-6 text-center">
        <h2 className="">Manage your entire community in a signle system</h2>
        <p className="">Who is Nextcent subtitle for?</p>
      </div>

      <div className="flex gap-6 text-center items-center">
        {servicesData.map((data) => (
          <div className="" key={data.id}>
            <Image
              src={data.icon}
              alt=""
              className="mx-auto"
              width={45}
              height={40}
            />
            <div className="">
              <h3 className="">{data.title}</h3>
              <p className="">{data.desciption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
