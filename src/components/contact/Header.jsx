import AnimatedHeader from "../AnimatedHeader";

const Header = () => {
  return (
    <AnimatedHeader
      className={
        "flex flex-col justify-center items-center lg:m-48 gap-4 overflow-x-hidden w-full bg-[url('./images/rio-night-mobile.png')] lg:bg-none bg-center bg-cover h-96"
      }
    >
      <h2 className="text-4xl text-white">Contact Us</h2>
      <img src="./images/wavy-element.png" alt="wavy-element" />
    </AnimatedHeader>
  );
};

export default Header;
