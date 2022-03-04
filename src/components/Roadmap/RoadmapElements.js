import styled from 'styled-components';

import BgImg from 'images/roadmap-bg.png'
import RoadImg from 'images/roadmap-road.png'
import TreeImg from 'images/road-tree.png'

export const RoadmapWrapper = styled.div`
  padding: 260px 0 82px;
  background-color: #3890FA;
  background-image: url(${BgImg});
  position: relative;
  height: 1522px;
  :before {
    content: '';
    background-image: url(${RoadImg});
    background-size: 100% 100%;
    width: 74.8vw;
    height: 906px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);    
  }
  :after {
    content: '';
    background-image: url(${TreeImg});
    background-size: 100% 100%;
    max-width: 884px;
    width: 61.3vw;
    height: 211px;
    position: absolute;
    top: 0;
    left: 0;   
  }
  @media screen and (max-width: 991px) {
    height: auto;
    :before {
      height: 700px;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 180px 0 50px;
  }
  @media screen and (max-width: 600px) {
    padding: 100px 0 20px;
    :before {
      height: 400px;
    }
    :after {
      height: 100px;
    }
  }
`
export const RoadmapH1 = styled.h2`
  text-align: center;
  color: white;
  font-weight: bold;
  font-size: 62px;
  line-height: 56px;
  font-family: Poppins;
  @media screen and (max-width: 768px) {
    font-size: 32px;
    line-height: 40px;
  }
`
export const RoadmapContents = styled.div`
  width: 100%;
  margin: 75px auto 0;
  position: relative;
  @media screen and (max-width: 991px) {
    width: 80vw;
    margin: 75px auto 0;
  }
  @media screen and (max-width: 600px) {
    margin: 30px auto 0;
  }
`
export const Title = styled.h3`
  color: white;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 56px;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    line-height: 28px;
  }
`
export const Description = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  text-transform: capitalize;
  color: #FFFFFF; 
`
