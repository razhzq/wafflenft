import {
	Nav,
	NavLogo,
	NavbarContainer,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLinks,
	NavBtn,
	NavBtnLink,
	NavLogoImg
} from './NavbarElements'
import { FaBars } from 'react-icons/fa'
import { useState, useEffect } from 'react';
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll';

import Logo from 'images/nav-logo.png'
import WhiteLogo from 'images/white-logo.png'

const Navbar = ({ toggle }) => {

	const [scrollNav, setScrollNav] = useState(false);

	const changeNav = () => {
		if (window.scrollY >= 80) {
			setScrollNav(true)
		} else {
			setScrollNav(false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', changeNav)
	}, []);

	const toggleHome = () => {
		scroll.scrollToTop();
	}

	return (
		<>
			<IconContext.Provider value={{ color: '#fff' }}>
				<Nav scrollNav={scrollNav}>
					<NavbarContainer>
						<NavLogo to="/" onClick={toggleHome}>
							{
								scrollNav ? <NavLogoImg src={WhiteLogo} alt='logo' /> : <NavLogoImg src={Logo} alt='logo' />
							}							
						</NavLogo>
						<MobileIcon onClick={toggle}>
							<FaBars />
						</MobileIcon>
						<NavMenu>
							<NavItem>
								<NavLinks to="about"
									smooth={true}
									duration={500}
									spy={true}
									exact='true'
									offset={-105}
									scrollNav={scrollNav}
								>
									About Us
								</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="roadmap"
									smooth={true}
									duration={500}
									spy={true}
									exact='true'
									offset={-105}
									scrollNav={scrollNav}
								>
									Roadmap
								</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="team"
									smooth={true}
									duration={500}
									spy={true}
									exact='true'
									offset={-105}
									scrollNav={scrollNav}
								>
									Team
								</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="faq"
									smooth={true}
									duration={500}
									spy={true}
									exact='true'
									offset={-105}
									scrollNav={scrollNav}
								>
									FAQs
								</NavLinks>
							</NavItem>
						</NavMenu>
						<NavBtn>
							<NavBtnLink to="" scrollNav={scrollNav}>Mint: TBD</NavBtnLink>
						</NavBtn>
					</NavbarContainer>
				</Nav>
			</IconContext.Provider>
		</>
	);
}

export default Navbar;