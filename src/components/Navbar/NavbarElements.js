import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

import BtnBg from 'images/mint-btn.png'

export const Nav = styled.nav`
	background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
	height: 105px;
	margin-top: -105px;
	padding-top: 25px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	position: sticky;
	top: 0;
	z-index: 10;


	@media screen and (max-width: 960px) {
			transition: 0.8s all ease;
	}
`


export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 80px;
	z-index: 1;
	width: 80vw;	
	padding-right: 10vw;
`

export const NavLogo = styled(LinkR)`	
	cursor: pointer;
	display: flex;
	align-items: center;
`

export const MobileIcon = styled.div`
	display: none;
	@media screen and (max-width: 991px) {
		display: block;
		position: absolute;		
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
		color: #fff;
	}
`

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	margin-left: 50px;

	@media screen and (max-width: 991px) {
		display: none;
	}
`

export const NavItem = styled.li`
    height: 80px;

`

export const NavLinks = styled(LinkS)`
	color: ${({scrollNav}) => (scrollNav ? '#fff' : '#15131C')};
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 25px;
	height: 100%;
	cursor: pointer;
	font-family: Poppins;
	&.active {
			border-bottom: 3px solid #daa520;
	}
`

export const NavBtn = styled.nav`
	display: flex;
	align-items: center;

	@media screen and (max-width: 991px) {
		display: none;
	}
`

export const NavBtnLink = styled(LinkR)`
	border-radius: 9px;
	background: ${({scrollNav}) => (scrollNav ? '#fff' : '#140634')};
	white-space: nowrap;
	padding: 10px 40px;
	color: ${({scrollNav}) => (scrollNav ? '#15131C' : 'white')};
	font-weight: 500;
	font-size: 20px;
	line-height: 30px;
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	font-family: Poppins;
	background-image: url(${BtnBg});	
`
export const NavLogoImg = styled.img`
	@media screen and (max-width: 600px) {
		width: 180px;
	}
`
