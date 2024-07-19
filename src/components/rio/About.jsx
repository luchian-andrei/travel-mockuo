import { Link } from "react-router-dom";
import AnimatedHeader from "../AnimatedHeader";

const About = () => {
  return (
    <AnimatedHeader
      className={"lg:w-3/4 w-full bg-white lg:p-20 p-10 lg:-mt-60"}
    >
      <div className="lg:flex lg:w-full  lg:justify-around lg:my-20 grid grid-row">
        <p className="w-1/3 flex flex-col justify-between items-start">
          <span className="text-3xl flex-wrap w-1/2 text-[#868686] tracking-wider mb-5">
            The Marvelous City{" "}
          </span>
          <span className="w-12 h-[3px] bg-orange-300 my-5"></span>
        </p>
        <p className="lg:w-2/3 w-full flex flex-col justify-between items-start">
          <span className="text-[#868686] text-lg mb-5 lg:mb-0 ">
            Create memories of a lifetime in one of the most beautiful cities in
            the world - <span className="font-bold">Rio de Janeiro</span> .
            Relax on gorgeous white sandy beaches, explore a cultural hub of art
            and entertainment, or check out the many famous landmarks around the
            city.
          </span>
          <Link to="/contact">
            <p className="text-[#6aa3a2] hover:text-black transition-colors duration-300">
              View Map
            </p>
          </Link>
        </p>
      </div>
      <div className="lg:flex grid grid-row w-full justify-around h-1/3 my-20">
        <p className="w-1/3 flex flex-col justify-between items-start">
          <span className="text-3xl flex-wrap w-1/2 text-[#868686] tracking-wider mb-5">
            The Games
          </span>
          <span className="w-12 h-[3px] bg-orange-300 my-5"></span>
        </p>
        <p className="lg:w-2/3 w-full flex flex-col justify-between items-start">
          <span className="text-[#868686] mb-5 lg:mb-0">
            Be where the action is. Witness 10,500 athletes from around the
            world compete in 306 medal events. Celebrate the wins and cheer your
            nation on. When it comes to The Games, you’ll want to be there.
            Check the official Games website for updates on events and locations
          </span>
          <a
            href="https://olympics.com/en/olympic-games/rio-2016"
            className="text-[#6aa3a2] hover:text-black transition-colors duration-300"
          >
            www.rio2016.com
          </a>
        </p>
      </div>
      <div className="flex w-full justify-around">
        <img src="./images/statue.png" alt="jesus-statue" />
      </div>
      {/* </section> */}
    </AnimatedHeader>
  );
};

export default About;
