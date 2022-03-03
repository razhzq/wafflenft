import styled from 'styled-components';
import TreeImg from 'images/tree.png'
import FullWaffle from 'images/full-waffle.png'

export const FaqWrapper = styled.div`
  background-color: #FDD5D5;
  padding: 145px 0;
  position: relative;
  :before {
    position: absolute;
    width: 742px;
    top: 0;
    right: 0;
    height: 222px;
    content: '';
    background-image: url(${TreeImg});
    background-size: 100% 100%;
  }
  :after {
    position: absolute;
    content: '';
    background-size: 100% 100%;
    background-image: url(${FullWaffle});
    width: 132px;
    height: 132px;
    right: 36px;
    bottom: 62px;
  }
  @media screen and (max-width: 991px) {
    :before {
      width: 500px;
      height: 150px;
    }
    :after {
      width: 100px;
      bottom: 30px;
      height: 100px;
    }
  }
  @media screen and (max-width: 600px) {
    padding: 80px 0 40px;
    :before {
      width: 82vw;     
    }
    :after {
      width: 70px;
      bottom: 10px;
      height: 70px;
    }
  }
`
export const FaqContents = styled.div`
  width: 82vw;
  margin-left: auto;
  margin-right: auto;
  padding-right: 7vw;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 991px) {
    padding-right: 0;
  }
  @media screen and (max-width: 600px) {
    width: 90vw;
  }
`
export const SectionTitle = styled.h1`
  font-size: 42px;
  line-height: 56px;
  color: #140634;
  font-weight: bold;
  font-family: Poppins;
  margin-bottom: 36px;
  @media screen and (max-width: 768px) {
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 20px;
  }
`
export const FaqItemContainer = styled.div`
  background: rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  padding: 0 70px 0 60px;
  margin-bottom: 15px;
  @media screen and (max-width: 768px) {
    padding: 0 40px 0 30px;
  }
  @media screen and (max-width: 600px) {
    padding: 0 20px 0 16px;
  }
`
export const FaqItemHeader = styled.div`  
  padding: ${({ isExpanded }) => (isExpanded ? '30px 20px 30px 0' : '20px 20px 20px 0')}; 
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 24px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    padding: ${({ isExpanded }) => (isExpanded ? '25px 0 25px 0' : '20px 0 20px 0')}; 
  }
`
export const FaqItemTitle = styled.h3`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 30px;
  color: #140634;
  width: calc(100% - 24px);
  @media screen and (max-width: 768px) {
    font-size: 18px;
    line-height: 26px;
  }
  @media screen and (max-width: 600px) {
    font-size: 16px;
    line-height: 24px;
  }
`
export const FaqItemContent = styled.div`
  padding: 24px 0 36px;
  border-top: 2px solid rgba(0, 0, 0, 0.1);
`
export const FaqItemP = styled.p`
  font-size: 16px;
  color: #140634;
  line-height: 20px;
  margin-bottom: 16px;
  font-family: Poppins;
`
export const FaqItemH6 = styled.h6`
  font-size: 16px;
  color: #140634;
  line-height: 20px;
  font-family: Poppins;
  font-weight: 600;
  margin-bottom: 16px;
`
export const RightImg = styled.img`
  width: 164px;
  height: 245px;
  position: absolute;
  right: 0;
  top: 444px;
  @media screen and (max-width: 991px) {
    height: 180px;
    width: 120px;
  }
  @media screen and (max-width: 600px) {
    width: 80px;
    height: 120px;
    top: 200px;
  }
`
