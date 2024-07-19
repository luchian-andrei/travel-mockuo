import About from "../components/home/About";
import Header from "../components/home/Header";
import Location from "../components/home/Location";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <main className="w-full flex flex-col justify-center items-center bg-[#e5ebed] font-madefor">
      <Header />
      <About />
      <Location />
      <Contact />
    </main>
  );
};

export default Home;
