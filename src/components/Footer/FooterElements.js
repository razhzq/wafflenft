import styled from 'styled-components'
import { Link } from 'react-router-dom'

import BottomLeft from 'images/footer-left.png'
import BottomRight from 'images/footer-right.png'

export const FooterContainer = styled.footer`
	background-color: #FDD5D5;
	position: relative;
	:before {
		background-image: url(${BottomLeft});
		content: '';
		width: 20vw;
    background-size: 100% 100%;
    max-width: 290px;
    height: 21.5vw;
    max-height: 310px;
		bottom: 0;
		left: 0;
		position: absolute;
	}
	:after {
		background-image: url(${BottomRight});
		content: '';
		width: 20vw;
    background-size: 100% 100%;
		max-width: 290px;
    height: 21.5vw;
    max-height: 310px;
		bottom: 0;
		right: 0;
		position: absolute;
	}
`

export const FooterWrap = styled.div`
	width: 82vw;
	border-top: 2px solid rgba(0, 0, 0, 0.6);
	padding: 67px 0 16px;
	margin: 0 auto;
	text-align: center;
	@media screen and (max-width: 600px) {
		padding: 40px 0 10px;
	}
`

export const SocialLogo = styled(Link)`
	cursor: pointer;
	display: flex;
	margin-left: auto;
	margin-right: auto;
	width: 420px;
	margin-bottom: 58px;
	@media screen and (max-width: 991px) {
		width: 350px;
    margin-bottom: 40px;
	}
	@media screen and (max-width: 600px) {
		width: 60vw;
    margin-bottom: 20px;
	}
`

export const WebsiteRights = styled.small`
	color: #140634;
	margin-bottom: 0;
	font-size: 16px;
	line-height: 20px;
	font-family: Poppins;
	@media screen and (max-width: 600px) {
		font-size: 14px;
		line-height: 18px;
	}
`

export const SocialIcons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 192px;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 93.5px;
	@media screen and (max-width: 991px) {
		margin-bottom: 60px;
	}
	@media screen and (max-width: 600px) {
		width: 150px;
		margin-bottom: 30px;
	}
`

export const SocialIconLink = styled.a`
	color: #140634;
	font-size: 24px;
`
