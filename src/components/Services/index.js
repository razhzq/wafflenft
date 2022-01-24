import {
        ServicesContainer,
        ServicesH1,
        ServicesWrapper,
        ServicesCard,
        ServicesIcon,
        ServicesH2,
        ServicesP
} from './ServicesElements'
import Icon1 from '../../images/waffleberry.png'
import Icon2 from '../../images/waffle2.png'
import Icon3 from '../../images/waffle3.png'


const Services = () => {
    return ( 
        <ServicesContainer id="gallery">
            <ServicesH1>NFTs Gallery</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                   
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                   
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
     );
}
 
export default Services;