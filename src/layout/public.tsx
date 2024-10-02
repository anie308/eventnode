import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

type PublicProps = {
  children: React.ReactNode;
};
function Public({ children }: PublicProps) {
  return (
    <div className=" bg-[#151A20] relative font-manrope">
        <div className="bg-[#7FE786] h-[150px] lg:h-[300px] w-[150px] lg:w-[300px] shape-blur absolute top-0 left-0 rounded-full"></div>
      <Navbar />
      {children}
      <Footer />
      <div className="bg-[#7FE786] h-[150px] lg:h-[300px] w-[150px] lg:w-[300px] shape-blur absolute bottom-0 right-0 rounded-full"></div>

    </div>
  );
}

export default Public;


