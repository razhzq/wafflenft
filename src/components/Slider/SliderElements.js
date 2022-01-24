import styled from 'styled-components'

export const SliderContainer = styled.div`
	color: #000;
`

export const SliderWrapper = styled.div`
	display: inline-block;
	vertical-align: middle;
	z-index: 1;
	height: 1000px;
	width: 100%;
	max-width: 1100px;
	margin-right: auto;
	margin-left: auto;
	margin-top: 200px;  
	@media screen and (max-width: 992px) {		
		margin-top: 100px;
		height: auto;
	} 
	@media screen and (max-width: 600px) {			
		margin-top: 50px;
	}   
`

export const CloudStrikeImg = styled.div`
	margin-left: 200px;		
	padding-bottom: 100px;   
	@media screen and (max-width: 992px) {		
	}  
	@media screen and (max-width: 600px) {	
		margin-left: 40vw;
		padding-bottom: 50px;	
	}
`

export const Img = styled.img`
	width: 50vw;
	max-width: 720px;
	@media screen and (max-width: 992px) {
	
	}
`

export const DotXImgWrapper = styled.div`
	width: 100%;
	height: 30%;
	margin-top: 100px;
	@media screen and (max-width: 992px) {
		height: auto;		
	}
	@media screen and (max-width: 600px) {
		margin-top: 50px;
	}
`
export const DotXImg = styled.img`
	width: 40vw;
	max-width: 600px;
	min-width: 250px;
`