import { FaTwitter, FaDiscord } from 'react-icons/fa'
import { AiFillInstagram } from "react-icons/ai";
import { animateScroll as scroll } from 'react-scroll';
import {
	FooterContainer,
	FooterWrap,	
	SocialLogo,
	WebsiteRights,
	SocialIcons,
	SocialIconLink

} from './FooterElements'

import Logo from 'images/Waffle NFT.png'

const Footer = () => {

	const toggleHome = () => {
		scroll.scrollToTop();
	}

	return (
		<FooterContainer>
			<FooterWrap>
				<SocialLogo to="/" onClick={toggleHome}>
					<img src={Logo} alt='Waffle NFT' width='100%' />
				</SocialLogo>
				<SocialIcons>
					<SocialIconLink href="" target="_blank" aria-label="Instagram">
						<AiFillInstagram />
					</SocialIconLink>
					<SocialIconLink href="https://twitter.com/WaffleNft" target="_blank" aria-label="Twitter">
						<FaTwitter />
					</SocialIconLink>
					<SocialIconLink href="https://discord.gg/96QBSE4j59" target="_blank" aria-label="Discord">
						<FaDiscord />
					</SocialIconLink>
				</SocialIcons>
				<WebsiteRights>WaffleNFT © {new Date().getFullYear()} All rights reserved</WebsiteRights>
			</FooterWrap>
		</FooterContainer>
	);
}

export default Footer;