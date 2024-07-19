import AnimatedHeader from "../AnimatedHeader";

const Header = () => {
  return (
    <AnimatedHeader
      className={
        "flex flex-col justify-center items-center lg:m-48 gap-4 overflow-x-hidden w-full lg:bg-none bg-[url('./images/rio-football.png')] bg-center bg-cover h-96"
      }
    >
      <h2 className="text-4xl text-white">Rio De Janeiro</h2>
      <img src="./images/wavy-element.png" alt="wavy-element" />
    </AnimatedHeader>
  );
};

export default Header;
