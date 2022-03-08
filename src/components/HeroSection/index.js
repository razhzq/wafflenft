import { useState } from 'react';

import {
	HeroContainer,
	HeroBg,
	VideoBg,
	HeroContent,
	HeroH1,
	HeroP,
	HeroBtnWrapper,
	HeroImage,
	LeftContents,
	HeroH3,
	Image,
	NFTText,
	SocialImg,
	SocialLinks,
	AttachIcon
} from './HeroElements'
import Video from '../../images/hero-bg.png'
import { Button } from '../ButtonElement'

import HeroImg from 'images/waffleani.gif'
import Instagram from 'images/instagram.png'
import Twitter from 'images/twitter.png'
import Discord from 'images/discord.png'
import Attach from 'images/hero-bottom.png'

const HeroSection = () => {

	const [hover, setHover] = useState(false);

	const onHover = () => {
		setHover(!hover)
	}

	return (
		<HeroContainer id='home'>
			<HeroBg>
				<VideoBg autoPlay loop muted src={Video} type='video/mp4' />
			</HeroBg>
			<HeroContent>
				<LeftContents>
					<HeroH3>WaffleNFT</HeroH3>
					<HeroH1>
						Revolutionising<br class="mobile-break" />
						<NFTText>NFTs</NFTText>
					</HeroH1>				
					<HeroP>
						Community will always be at our heart here at WaffleNFT.
						Our main goal is and always has been bringing REAL utility to our holders.
						Head on to our whitelist competition and grab your seats.
					</HeroP>
					<HeroBtnWrapper>
						<Button to="signup" 
							onMouseEnter={onHover}
							onMouseLeave={onHover}
							primary="true"
							dark="true"
							smooth={true}
							duration={500}
							spy={true}
							exact='true'
							offset={-80}
							onClick={() => window.location.href = "https://gleam.io/Ltgua/wafflenft-whitelist-competition"}
						>
							Go to Whitelist
						</Button>
					</HeroBtnWrapper>
				</LeftContents>
				<HeroImage>
					<Image src={HeroImg} width='90%' alt='hero' />
				</HeroImage>
			</HeroContent>
			<SocialLinks>
				<a>
					<SocialImg onClick={() => window.location.href = "https://instagram.com/wafflenft?utm_medium=copy_link"} src={Instagram} alt='Instagram' />
				</a>
				<a>
					<SocialImg onClick={() => window.location.href = "https://twitter.com/WaffleNft"} src={Twitter} alt='Twitter' />
				</a>
				<a>
					<SocialImg onClick={() => window.location.href = "https://discord.gg/96QBSE4j59"} src={Discord} alt='Discord' />
				</a>
			</SocialLinks>
			<AttachIcon src={Attach} alt='Attach' />
		</HeroContainer>
	);
}

export default HeroSection;

