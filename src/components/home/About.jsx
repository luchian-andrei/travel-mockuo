import AnimatedHeader from "../AnimatedHeader";

const About = () => {
  const width = window.innerWidth;

  return (
    <AnimatedHeader
      className={
        "w-full lg:w-3/4 flex flex-col justify-center items-center bg-white lg:-mt-60 mt-0"
      }
    >
      <div className="flex flex-col justify-center items-center gap-6 px-6 py-20 text-center">
        <h2 className="text-3xl text-[#868686]">
          A Home in the heart of the city
        </h2>
        <span className="w-16 h-1 bg-orange-400"></span>
        <p className="text-xl text-[#868686]">
          Stay in a beautiful highrise in Ipanema just off the beach close to
          many world-class cafes and restaurants. Enjoy Bossa Nova with a cold
          beer!
        </p>
      </div>
      <div className="grid grid-rows-2 lg:flex lg:flex-row w-full">
        <p className="bg-[#6aa3a2] flex flex-col gap-4 justify-center text-center items-center  w-full  lg:w-1/3 ">
          <span className="text-white text-3xl">Our </span>
          <span className="text-white text-3xl">Apartment </span>
          <span className="w-12 h-[3px] bg-orange-300"></span>
        </p>
        <img
          src="./images/interior.png"
          alt="interior"
          className="lg:w-2/3 w-full"
        />
      </div>
      <div className="grid grid-rows-2  lg:flex lg:flex-row">
        <img
          src={
            width > 768
              ? "./images/interior1.png"
              : "./images/interior-1-mobile.png"
          }
          alt="interior1"
          className="lg:w-1/3 w-full order-2 lg:order-1"
        />
        <p className="lg:w-2/3 w-full lg:text-start text-center flex items-center my-auto text-[#868686] lg:p-24 p-4  text-lg order-1 lg:order-2">
          The apartment is spacious with high ceilings, large windows, an open
          balcony and a beautiful view of the beach. Stay cool with central A/C
          and wind-down comfortably in the queen sized bedroom.
        </p>
      </div>
    </AnimatedHeader>
  );
};

export default About;
