import { Link } from "react-router-dom";

const Location = () => {
  return (
    <section className="w-full lg:w-3/4 flex flex-col justify-center items-center bg-white lg:my-20">
      <div className="lg:flex lg:flex-row w-full grid grid-rows-2">
        <img
          src="./images/location.png"
          alt="location"
          className="lg:w-2/3 w-full order-2 lg:order-1"
        />
        <p className="flex flex-col bg-[#6aa3a2] lg:w-1/3 w-full text-center items-center justify-center gap-4 order-1 lg:order-2">
          <span className="text-white text-3xl tracking-wider">Location</span>
          <span className="w-12 h-[3px] bg-orange-300"></span>
        </p>
      </div>
      <div className="lg:p-20 p-10 flex flex-col justify-center items-center text-center gap-6">
        <p className="lg:w-2/3 w-full text-lg text-[#868686]">
          Conveniently located just opposite Leblon Beach in Ipanema, our
          apartment will sweep you into the charm and excitements of Rio! Dine
          at one of our neighborhood’s many world-renowned restaurants, enjoy
          fresh-squeezed juices from one of the colourful stalls along the
          beach, and don’t miss live bossy-nova show in one of the local bars.
        </p>
        <Link>
          <p className="text-[#6aa3a2] hover:text-black transition-colors duration-300">
            VIEW MAP
          </p>
        </Link>
      </div>
      <div className="md:flex md:flex-row w-full grid grid-rows-2">
        <img
          src="./images/couple.png"
          alt="host"
          className="md:w-1/3 w-full object-cover"
        />
        <p className="md:w-2/3 w-full bg-[#6aa3a2] flex flex-col justify-start items-start md:p-20 p-10 gap-8">
          <span className="text-white text-3xl">About Camila and Tiago </span>
          <span className="w-12 h-[2px] bg-orange-300"></span>
          <span className="text-white">
            Hi, my name is Camila and I’m a nutritionist from the south of
            Brazil. I moved to the beautiful Ipanema neighborhood two years ago
            with my husband, Tiago. We live in a homie highrise just off the
            Leblon Beach, but in the summer we travel!
          </span>
        </p>
      </div>
    </section>
  );
};

export default Location;
