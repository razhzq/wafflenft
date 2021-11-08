import { useState } from 'react';

import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import Video from '../../videos/arts.mp4'
import { Button } from '../ButtonElement'


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
                 <HeroH1>Discover, Sell and Collect</HeroH1>
                 <HeroP>
                     We houses NFT marketplace and one of few breedable NFT's, CryptoSim. Signup to create you own NFT Sim. 
                 </HeroP>
                 <HeroBtnWrapper>
                     <Button to="signup" onMouseEnter={onHover} 
                                         onMouseLeave={onHover}
                                         primary="true"
                                         dark="true"
                                         smooth={true}
                                         duration={500}
                                         spy={true}
                                         exact='true'
                                         offset={-80}
                                      
                                         >
                         Coming Soon {hover ? <ArrowForward /> : <ArrowRight />}
                     </Button>
                 </HeroBtnWrapper>
             </HeroContent>
        </HeroContainer>
     );
}
 
export default HeroSection;

