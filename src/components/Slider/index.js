import Item1 from '../../images/waffleberry.png'
import Item2 from '../../images/waffle2.png'
import Item3 from '../../images/waffle3.png'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { SliderContainer, SliderWrapper, CloudStrikeImg, DotXImg, Img, DotXImgWrapper } from './SliderElements'
import Aos from 'aos';
import "aos/dist/aos.css";
import { useState, useEffect, useRef } from "react";

const SliderSection = () => {

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 2000,
		cssEase: 'linear',
		arrows: false,
	}
	useEffect(()=>{Aos.init({duration: 2000});}, []);
	return (
		<SliderContainer id='gallery'>
			<SliderWrapper  data-aos="fade-up">
				
				<Slider data-aos="fade-up" {...settings} className="home-slider">
					<div>
						<img width="90%" src={Item1} />
					</div>
					<div>
						<img width="90%" src={Item2} />
					</div>
					<div>
						<img width="90%" src={Item3} />
					</div>
					
					
					
				</Slider>
				
			</SliderWrapper>
		</SliderContainer>

	);
}

export default SliderSection;