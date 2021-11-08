import Sidebar from "../components/SideBar";
import Navbar from "../components/Navbar";
import { useState } from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { homeObjOne } from "../components/InfoSection/Data";
import Services from "../components/Services";
import Footer from "../components/Footer";
import CryptoSim from "../components/CryptoSim";
import { cryptoData } from "../components/CryptoSim/Data";


const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return ( 
        <>
           <Sidebar isOpen={isOpen} toggle={toggle} />
           <Navbar toggle={toggle} />
           <HeroSection />
           <InfoSection {...homeObjOne} />
           <Services />
           <CryptoSim {...cryptoData} />
           <Footer />
          
        </>
     );
}
 
export default Home;