import { Routes, Route, useLocation } from "react-router";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import Rio from "./pages/Rio";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

function App() {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <main className="w-full flex flex-col justify-center items-center bg-[#e5ebed] font-madefor overflow-x-hidden selection:bg-[#6aa3a2] selection:text-white">
      <Nav handleMenu={setOpenMenu} isOpen={openMenu} />
      <section className={`${openMenu === true ? "hidden" : "flex w-full"}`}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route index element={<Home />} />
            <Route path="/rio" element={<Rio />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </AnimatePresence>
      </section>
    </main>
  );
}

export default App;
