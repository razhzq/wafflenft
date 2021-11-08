import {
        ServicesContainer,
        ServicesH1,
        ServicesWrapper,
        ServicesCard,
        ServicesIcon,
        ServicesH2,
        ServicesP
} from './ServicesElements'
import Icon1 from '../../images/digitalart.svg'
import Icon2 from '../../images/audionft.svg'



const Services = () => {
    return ( 
        <ServicesContainer id="services">
            <ServicesH1>PasarSeni MarketPlace</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Digital Art NFT</ServicesH2>
                    <ServicesP>Discover amazing arts from different cultures and communities. </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Audio NFT</ServicesH2>
                    <ServicesP>We support musicians and artists that want to NFT's their music collection.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
     );
}
 
export default Services;