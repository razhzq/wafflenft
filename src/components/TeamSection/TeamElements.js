import styled from 'styled-components';

import SectionBg from 'images/team-bg.png'
import BottomLogo from 'images/team-bottom.png'

export const TeamWrapper = styled.div`
  padding: 137px 0 150px;
  background-color: #FEC393;
  position: relative;
  :before {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${SectionBg});
    content: '';
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    top: 0;
    left: 0;
  }
  :after {
    width: 189px;
    height: 293px;
    position: absolute;
    content: '';
    background-image: url(${BottomLogo});
    background-size: 100% 100%;
    left: 0;
    bottom: -146px;
    z-index: 1;
  }
  @media screen and (max-width: 991px) {
    padding: 90px 0 100px;
    :after {
      width: 140px;
      height: 200px;
      bottom: -70px;
    }
  }
  @media screen and (max-width: 600px) {   
    padding-bottom: 40px;
    :after {
      width: 70px;
      height: 100px;
      bottom: -35px;
    }
  }
`
export const TeamContents = styled.div`
  width: 86vw;
  margin: 0 auto;  
`
export const HeaderH4 = styled.h4`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 56px;
  color: #140634;
  @media screen and (max-width: 768px) {
    font-size: 24px;
    line-height: 30px;
  }
`
export const HeaderH3 = styled.h3`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 42px;
  line-height: 56px;
  color: #140634;
  @media screen and (max-width: 768px) {
    font-size: 32px;
    line-height: 40px;
  }
`
export const TeamItemTitle = styled.h3`
  font-weight: bold;
  font-size: 32px;
  line-height: 40px;
  color: #140634;
  font-family: Poppins;
  text-align: center;
  word-break: break-all;
  margin-bottom: 8px;
  @media screen and (max-width: 768px) {
    font-size: 24px;
    line-height: 30px;
  }
`
export const TeamItem = styled.div`
  background: #FEFEFE;
  border-radius: 18px;
  width: 19.3vw;
  padding: 28px 40px 30px;
  text-align: center;
  min-height: 326px;
  position: relative;
  z-index: 2;
  @media screen and (max-width: 991px) {
    width: 48%;
    margin-bottom: 50px;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    margin-bottom: 30px;
  }  
`
export const TeamItemP = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  font-family: Poppins;
  color: #140634;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`
export const TeamItemLogo = styled.img`
  max-width: 100%;
`
export const TeamItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 76px;
  position: relative;
  @media screen and (max-width: 991px) {
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 40px;
  }
`

export const SecondItemsBlock = styled.div`
  width: 63.9vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: realtive; 
  @media screen and (max-width: 991px) {
    width: 100%;    
  }
`
export const MiddleLine = styled.div`
  position: absolute;
  width: 4px;
  height: 76px;
  bottom: -76px;
  background-color: white;
  content: '';
  left: 50%;
  @media screen and (max-width: 991px) {
    display: none;
  }

`