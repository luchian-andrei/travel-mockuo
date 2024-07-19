import AnimatedHeader from "../AnimatedHeader";

const Header = () => {
  return (
    <section className="md:bg-[url('./images/rio-landscape.png')] bg-[url('./images/rio-landscape-mobile.png')] w-full h-96 lg:h-screen  bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center text-center overflow-x-hidden mb-0">
      <AnimatedHeader>
        <div className=" flex flex-col lg:flex-row justify-center items-center gap-4">
          <img src="./images/wavy-element.png" alt="wavy-element" />
          <p className="text-white md:text-2xl text-lg font-light">
            BE MY GUEST
          </p>
          <img src="./images/wavy-element.png" alt="wavy-element" />
        </div>
        <h1 className="md:text-6xl text-5xl  text-white">Welcome to Rio</h1>
      </AnimatedHeader>
    </section>
  );
};

export default Header;
