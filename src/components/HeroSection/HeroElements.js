import styled from 'styled-components';

import LeftImg from 'images/hero-left.png'
import TopRightImg from 'images/hero-top-right.png'

export const HeroContainer = styled.div`
	background: #fff;
	position: relative;
	padding: 188px 0 144px 0;

	:before {
		content: '';
		position: absolute;	
		left: 0;		
		bottom: -75px;
		background-image: url(${LeftImg});
		width: 193px;
		height: 265px;
		z-index: 2;
	}
	:after {
		content: '';
		position: absolute;	
		right: 0;		
		top: 0;
		background-image: url(${TopRightImg});
		width: 290px;
		height: 297px;
		z-index: 1;
	}
	@media screen and (max-width: 768px) {
		padding-top: 150px;
		padding-bottom: 100px;
		:after {
			width: 200px;
			height: 200px;
			background-size: 100% 100%;
		}
		:before {
			width: 100px;
			height: 130px;
			bottom: -40px;
			background-size: 100% 100%;
		}
	}
`


export const HeroBg = styled.div`
     position: absolute;
     top: 0;
     right: 0;
     bottom: 0;
     left: 0;
     width: 100%;
     height: 100%;
     overflow: hidden;

`

export const VideoBg = styled.img`
     width: 100%;
     height: 100%;
     --o-object-fit: cover;
     object-fit: cover;
     background: #fff;

`

export const HeroContent = styled.div`    
	display: flex;
	justify-content: space-between;	
	align-items: center;
	position: relative;
	z-index: 2;
	width: 80vw;
	margin: 0 auto;
	flex-wrap: wrap;
	@media screen and (max-width: 991px) {
		flex-direction: column-reverse;
	}
`

export const HeroH1 = styled.h1`
	color: #140634;
	font-weight: bold;
	font-size: 52px;
	line-height: 78px;
	font-family: Poppins;
	word-break: break-all;
	@media screen and (max-width: 768px) {
		font-size: 40px;
		line-height: 60px;
	}

	@media screen and (max-width: 480px) {
		font-size: 32px;
		line-height: 50px;
	}
`

export const HeroP = styled.p`
	margin-top : 4px;
	color: #140634;
	font-size: 16px;
	line-height: 24px;
	font-weight: normal;
	text-transform: capitalize;
	@media screen and (max-width: 768px) {
		font-size: 16px;
		line-height: 24px;
	}
`

export const HeroBtnWrapper = styled.div`
	margin-top: 32px;
	width: fit-content;
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`

export const HeroImage = styled.div`
	width: 35%;
	padding-left: 20px;
	padding-right: 20px;
	
	@media screen and (max-width: 991px) {
		width: 100%;
	}
	@media screen and (max-width: 768px) {
		padding-left: 0px;
		padding-right: 0px;
	}
`
export const LeftContents = styled.div`
	width: 53%;	
	@media screen and (max-width: 991px) {
		width: 100%;
		margin-top: 40px;
	}
`
export const HeroH3 = styled.h3`
	font-size: 38px;
	line-height: 57px;
	color: #140634;
	font-weight: bold;
	font-family: Poppins;
	@media screen and (max-width: 768px) {
		font-size: 24px;
		line-height: 30px;
	}
`
export const Image = styled.img`
	filter: drop-shadow(0px 14px 54px rgba(0, 0, 0, 0.15));
	border-radius: 35px;
`
export const NFTText = styled.span`
	-webkit-text-stroke:2px #140634;
  -webkit-text-fill-color:transparent;
	margin-left: 8px;
`
export const SocialImg = styled.img`
	opacity: 0.5
`
export const SocialLinks = styled.div`
	z-index: 2;
	position: absolute;
	right: 50px;
	height: 183px;
	top: 350px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	@media screen and (max-width: 991px) {
		right: 30px;
	}
	@media screen and (max-width: 768px) {
		right: 5px;
	}
`
export const AttachIcon = styled.img`
	position: absolute;
	left: 50%;
	bottom: 53px;
	transform: translateX(-50%);
	@media screen and (max-width: 768px) {
		width: 25px;
		bottom: 20px;
	}
`
