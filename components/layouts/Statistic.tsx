import Image from "next/image";

const data = [
  {
    id: 1,
    name: "Members",
    value: "2,245,341",
    icon: "/svg/statistic/img1.svg",
  },
  {
    id: 2,
    name: "Clubs",
    value: "46,328",
    icon: "/svg/statistic/img1.svg",
  },
  {
    id: 3,
    name: "Event Bookings",
    value: "828,867",
    icon: "/svg/statistic/img1.svg",
  },
  {
    id: 4,
    name: "Payments",
    value: "1,926,436",
    icon: "/svg/statistic/img1.svg",
  },
];

const Statistic = () => {
  return (
    <section className="section-wrapper flex justify-between items-center bg-neural-silver">
      {/* content */}
      <div>
        <h2>
          Helping a local <br />{" "}
          <span className="text-brand-primary">business reinvent itself</span>
        </h2>
        <p className="">We reached here with our hard work and dedication</p>
      </div>

      {/* statistic data */}
      <div className="grid grid-cols-2 gap-y-6 gap-x-10">
        {data.map((d) => (
          <div key={d.id} className="flex items-center gap-4">
            <Image src={d.icon} alt="" width={33.41} height={33.41} />
            <div className="">
              <h3 className="tracking-wide font-bold">{d.value}</h3>
              <span className="">{d.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistic;
