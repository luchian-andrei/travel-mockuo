import Header from "../components/contact/Header";
import ContactForm from "../components/contact/ContactForm";
import Contact from "../components/Contact";

const ContactPage = () => {
  return (
    <main className="w-full flex flex-col justify-center items-center bg-[#e5ebed] font-madefor lg:bg-[url('./images/rio-night.png')] bg-none h-fit bg-no-repeat bg-cover bg-center bg-fixed">
      <Header />
      <ContactForm />
      <Contact />
    </main>
  );
};

export default ContactPage;
