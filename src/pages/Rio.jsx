import Contact from "../components/Contact";
import Header from "../components/rio/Header";
import About from "../components/rio/About";

const Rio = () => {
  return (
    <main className="w-full flex flex-col justify-center items-center bg-[#e5ebed] font-madefor lg:bg-rio-football h-fit bg-no-repeat bg-cover bg-center bg-fixed">
      <Header />
      <About />
      <Contact />
    </main>
  );
};

export default Rio;
