import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [input, setInput] = useState("");
  const [testMode, setTestMode] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [response, setReponse] = useState();
  const [typing, setTyping] = useState(false);
  const [ringColorFocus, setRingColorFocus] = useState("focus:ring-[#868686]");
  const [ringColor, setRingColor] = useState("ring-[#868686]");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setReponse(emailRegex.test(email));

    if (response) {
      setDisabled(false);
      setRingColorFocus("focus:ring-[#868686]");
      setRingColor("ring-[#868686]");
    } else if (!response && typing) {
      setDisabled(true);
      setRingColorFocus("focus:ring-[#868686]");
      setRingColor("ring-[#868686]");
    } else if (!response && !typing) {
      setDisabled(true);
      setRingColorFocus("focus:ring-red-600");
      setRingColor("ring-red-600");
    }
  };

  useEffect(() => {
    if (testMode) {
      validateEmail(input);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input, typing]);

  return (
    <footer className="bg-[#e5ebed] flex flex-col w-full p-4 mb-20 pt-24  justify-center items-center ">
      <div className="lg:flex lg:justify-start lg:items-start lg:w-3/4 grid grid-rows-3 gap-4 lg:gap-0 mb-20">
        {/* contact us section */}

        <div className="flex flex-col items-start justify-start gap-6 lg:w-1/3 w-full">
          <Link to={"/contact"}>
            <p className="text-xl font-thin">Contact us</p>
          </Link>
          <span className="w-12 h-[3px] bg-orange-300"></span>
          <span className="text-[#868686] lg:w-1/2 w-full">
            Ask us anything! We’re here to answer any questions you have.
          </span>
          <span className="text-[#868686]">
            Email: <a href="mailto:info@mysite.com">info@mysite.com</a>{" "}
          </span>
        </div>

        {/* follow us section */}

        <div className="flex flex-col items-start justify-start gap-6 lg:w-1/3 w-full">
          <p className="text-xl font-thin">Follow us</p>
          <span className="w-12 h-[3px] bg-orange-300"></span>
          <div className="flex lg:gap-4 gap-10">
            <a href="https://www.tripadvisor.com/" target="_blank">
              <img
                src="./images/trip-logo.png"
                alt="trip-logo"
                className="w-10 h-10"
              />
            </a>
            <a href="https://www.facebook.com/wix" target="_blank">
              <img
                src="./images/fb-logo.png"
                alt="fb-logo"
                className="w-10 h-10"
              />
            </a>
            <a href="https://www.instagram.com/wix/" target="_blank">
              <img
                src="./images/insta-logo.png"
                alt="insta-logo"
                className="w-10 h-10"
              />
            </a>
          </div>
        </div>

        {/* newsletter section */}

        <div className="flex flex-col items-start justify-start gap-6 lg:w-1/3 w-full">
          <p className="text-xl font-thin">Subscribe for Updates & Offers</p>
          <span className="w-12 h-[3px] bg-orange-300"></span>
          <div className="w-full">
            <input
              onClick={() => setTestMode(true)}
              onChange={(e) => setInput(e.target.value)}
              onBlur={() => setTyping(false)}
              onKeyUp={() => setTyping(true)}
              type="email"
              placeholder="Enter your email here*"
              className={`w-full py-2 px-6  bg-[#e5ebed] ring-inset  text-[#868686]  focus:outline-none mb-4
                ${
                  testMode
                    ? `ring-[3px] px-7 ${ringColorFocus} ${ringColor}`
                    : "ring-[1px] hover:ring-[3px] hover:px-7 ring-[#868686] "
                }
                 `}
            />
            <button
              className="bg-[#868686] hover:bg-white w-full py-2 px-6 transition-colors duration-500 text-white hover:text-black cursor-pointer"
              onClick={() => alert("Your email address will go nowhere")}
              disabled={disabled}
            >
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
      <p className="text-[#868686] text-start w-3/4">
        © This is a perfect copy made by me after a free template from
        <a href="https://www.wix.com/?utm_campaign=vir_created_with">
          <span className="underline">Wix</span>
        </a>
      </p>
    </footer>
  );
};

export default Contact;
