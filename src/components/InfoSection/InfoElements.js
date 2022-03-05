import styled from 'styled-components'

import TreeImg from 'images/tree.png'
import Waffleberry from 'images/waffleberry.png'

export const InfoContainer = styled.div`
	color: #140634;
	background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#FDD5D5')}; 
	position: relative;
	padding: 348px 0 153px;
	:before {
		background-image: url(${TreeImg});
		content: '';
		position: absolute;
		height: 24.5vw;
		max-height: 354px;
		width: 82vw;
		background-size: 100% 100%;
		top: 0;
		right: 0;
		max-width: 1185px;
	}
	:after {
		background-image: url(${Waffleberry});
		content: '';
		position: absolute;
		height: 33.4vw;
		max-height: 480px;
		width: 33.4vw;
		max-width: 480px;
		background-size: 100% 100%;
		bottom: -288px;
		right: 0;		
		z-index: 2;
	}
	@media screen and (max-width: 1200px) {
		padding: 250px 0 150px;
		:before {
			height: 250px;
		}
		:after {
			width: 300px;
    height: 300px;
    bottom: -150px;
		}
	}
	
	@media screen and (max-width: 768px) {		
		padding: 230px 0 160px;
		:before {
			height: 230px;
		}
		:after {
			width: 300px;
			height: 300px;
			bottom: -150px;
		}
	}
	@media screen and (max-width: 600px) {
		padding: 150px 0 80px;
		:before {
			height: 150px;
		}
		:after {
			width: 150px;
			height: 150px;
			bottom: -70px;
		}
	}
`

export const InfoWrapper = styled.div`    
	z-index: 1;
	width: 90vw;
	margin-right: auto;
	margin-left: auto;
	@media screen and (max-width: 991px) {
		width: 80vw;
	}
`

export const InfoRow = styled.div`    
	align-items: center;
	display: flex;
	justify-content: space-between;
	@media screen and (max-width: 991px) {
		flex-wrap: wrap;
	}
`

export const Column1 = styled.div`
	width: 46%;
	padding: 0;
	@media screen and (max-width: 991px) {
		width: 100%;
	}
`

export const Column2 = styled.div`
	width: 48%;
	padding: 0 50px;
	@media screen and (max-width: 1200px) {
		padding: 0px;
	}
	@media screen and (max-width: 991px) {
		width: 100%;
		// padding: 0 10vw;
		margin-bottom: 50px;
	}
`
export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;

`

export const TopLine = styled.p`
	color: #140634;
	font-size: 28px;
	line-height: 42px;
	font-weight: 700;    
	margin-bottom: 0;
	font-family: Poppins;
	@media screen and (max-width: 768px) {
		font-size: 24px;
    line-height: 30px;
	}
`

export const Heading = styled.h1`
	margin-bottom: 24px;
	font-size: 42px;
	line-height: 56px;
	font-weight: 600;
	color: #140634; 
	font-family: Poppins;
	@media screen and (max-width: 768px) {
		font-size: 32px;
    line-height: 40px;
		margin-bottom: 16px;
	}
	@media screen and (max-width: 480px) {
			font-size: 32px;
	}
`

export const Subtitle = styled.p`	
	margin-bottom: 32px;
	font-size: 16px;
	line-height: 24px;
	color: #140634;
	@media screen and (max-width: 600px) {
		font-size: 14px;
    line-height: 18px;
		margin-bottom: 16px;
	}
`

export const BtnWrap = styled.div`
	display: flex;
	justify-content: flex-start;
	@media screen and (max-width: 768px) {
		width: 100%;
		display: block;	
	}
`

export const ImgWrap = styled.div`
      max-width: 555px;
      height: 100%;

`

export const Img = styled.img`
	width: 100%;
	margin: 0 0 10px 0;
	padding-right: 0;
	border-radius: 30px;
`