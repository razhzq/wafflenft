import Sidebar from "../components/SideBar";
import Navbar from "../components/Navbar";
import { useState } from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { homeObjOne } from "../components/InfoSection/Data";
import Services from "../components/Services";
import Footer from "../components/Footer";
import RoadmapPhase from "../components/Roadmap";
import FaqSection from 'components/FaqSection'

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
			<RoadmapPhase />
			<Services />
			<FaqSection />
			<Footer />
		</>
	);
}

export default Home;
