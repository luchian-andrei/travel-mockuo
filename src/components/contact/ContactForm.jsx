import { useEffect, useState } from "react";
import MapComponent from "./MapComponent";
import AnimatedHeader from "../AnimatedHeader";

const ContactForm = () => {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [textareaInput, setTextareaInput] = useState("");
  const [notPassing, setNotPassing] = useState([]);
  const [typing, setTyping] = useState(true);
  const [response, setReponse] = useState(true);

  const inputStyle =
    "w-full px-4 py-[6px] placeholder:text-[#868686]  hover:bg-[#cccccc] hover:px-[17px] text-white  focus:outline-none border-[1px] resize-none";

  const validateName = () => {
    if (nameInput === "") {
      setNotPassing([...notPassing, "Name"]);
    } else {
      setNotPassing(notPassing.filter((entry) => entry !== "Name"));
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setReponse(emailRegex.test(emailInput));

    if (!response && !typing) {
      setNotPassing([...notPassing, "Email"]);
    } else if (!response && typing) {
      setNotPassing(notPassing.filter((entry) => entry !== "Email"));
    } else if (response) {
      setNotPassing(notPassing.filter((entry) => entry !== "Email"));
    }
  };

  useEffect(() => {
    validateEmail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [emailInput, typing]);

  const validateTextarea = () => {
    if (textareaInput === "") {
      setNotPassing([...notPassing, "Textarea"]);
    } else {
      setNotPassing(notPassing.filter((entry) => entry !== "Textarea"));
    }
  };

  return (
    <AnimatedHeader className={"lg:w-3/4 w-full bg-white lg:-mt-60"}>
      <div className="lg:flex w-full lg:justify-around my-20 grid grid-row lg:px-20 px-10">
        <p className="w-1/3 flex flex-col justify-start items-start gap-4">
          <span className="text-3xl flex-wrap w-1/2 text-[#868686] tracking-wide mb-5">
            Ask Us Anything!
          </span>
          <span className="w-12 h-[3px] bg-orange-300 my-5"></span>
        </p>
        <div className="lg:w-2/3 w-full flex flex-col justify-between items-start gap-4">
          <input
            type="text"
            className={` ${inputStyle}
              ${
                notPassing.includes("Name")
                  ? "bg-red-100 focus:bg-red-100 border-red-500"
                  : "bg-[#e5ebed] focus:bg-[#87bebd]"
              }
              `}
            placeholder="Name"
            onChange={(e) => setNameInput(e.target.value)}
            onKeyUp={validateName}
            onBlur={validateName}
          />
          <input
            type="email"
            className={` ${inputStyle}   
            ${
              notPassing.includes("Email")
                ? "bg-red-100 focus:bg-red-100 border-red-500"
                : "bg-[#e5ebed] focus:bg-[#87bebd]"
            }`}
            placeholder="Email"
            onChange={(e) => setEmailInput(e.target.value)}
            onClick={() => setReponse(false)}
            onBlur={() => setTyping(false)}
            onKeyUp={() => setTyping(true)}
          />
          <textarea
            className={`${inputStyle}
              ${
                notPassing.includes("Textarea")
                  ? "bg-red-100 focus:bg-red-100 border-red-500"
                  : "bg-[#e5ebed] focus:bg-[#87bebd]"
              }`}
            rows="6"
            placeholder="Type your message here..."
            onChange={(e) => setTextareaInput(e.target.value)}
            onKeyUp={validateTextarea}
            onBlur={validateTextarea}
          ></textarea>
          <button
            className="text-[#6aa3a2] hover:text-black transition-colors duration-500 self-end"
            onClick={() => alert("Your data will go nowhere")}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="lg:flex w-full grid grid-rows-2 lg:justify-around lg:my-20">
        <div className="lg:w-1/3 w-full flex flex-col justify-start items-start gap-4 pl-20">
          <span className="text-3xl flex-wrap lg:w-1/2 w-full text-[#868686] tracking-wide mb-5">
            How to Get Here
          </span>
          <span className="w-12 h-[3px] bg-orange-300 my-5"></span>
          <p className="w-2/3 flex flex-col text-[#868686]">
            <span>R. Frame de Morá </span>
            <span>Floor 6</span>
            <span>Rio de Janeiro - Ipanema</span>
            <span>Cell: 123-456-7890</span>
          </p>
        </div>
        <div className="lg:w-2/3 w-full flex flex-col justify-between items-start gap-4 h-64 mt-6 lg:my-0 py-4 bg-[#e5ebed] lg:bg-white px-10 lg:px-0 lg:pr-20 ">
          <MapComponent />
        </div>
      </div>
    </AnimatedHeader>
  );
};

export default ContactForm;
