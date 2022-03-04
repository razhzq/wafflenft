import React from 'react'

import {
  TeamWrapper,
  TeamContents,
  HeaderH4,
  HeaderH3,
  TeamItem,
  TeamItemTitle,
  TeamItemP,
  TeamItems,
  TeamItemLogo,
  SecondItemsBlock,
  MiddleLine
} from './TeamElements'

import WafLogo from 'images/waf.png'
import DolphLogo from 'images/dolph.png'
import JuiceLogo from 'images/juice.png'
import GinghomLogo from 'images/gingham.png'
import CoppedLogo from 'images/copped.png'
import MapleLogo from 'images/maple.png'
import EtonLogo from 'images/eton.png'

import LineImg from 'images/team-line-1.png'
import LineImg2 from 'images/team-line-2.png'

import './styles.css'

const TeamSection = () => {

  return (
    <TeamWrapper id='team'>
      <TeamContents>
        <HeaderH4>Waffle Leadership</HeaderH4>
        <HeaderH3>Team</HeaderH3>

        <TeamItems>
          <img src={LineImg} alt="Line" className='line-1' />
          <img src={LineImg2} alt="Line" className='line-2' />
          <TeamItem className='team-item waf'>
            <TeamItemLogo src={WafLogo} alt="Waf" />
            <TeamItemTitle>
              WAF
            </TeamItemTitle>
            <TeamItemP>Founder &Chief of<br /> marketing</TeamItemP>            
          </TeamItem>

          <SecondItemsBlock>
            <TeamItem className='team-item top-line-item top-line-arrow top-line-left-arrow'>
              <TeamItemLogo src={DolphLogo} alt="Waf" />
              <TeamItemTitle>
                Dolph5n
              </TeamItemTitle>
              <TeamItemP>
                Full Stack Developer<br /> coder & technical <br />support
              </TeamItemP>
              <MiddleLine></MiddleLine>
            </TeamItem>

            <TeamItem className='team-item top-line-item top-line-arrow'>
              <TeamItemLogo src={JuiceLogo} alt="Waf" />
              <TeamItemTitle>
                Juiced
              </TeamItemTitle>
              <TeamItemP>
                Day time Admin/<br />moderater
              </TeamItemP>
            </TeamItem>

            <TeamItem className='team-item top-line-item'>
              <TeamItemLogo src={GinghomLogo} alt="Waf" />
              <TeamItemTitle>
                Gingham
              </TeamItemTitle>
              <TeamItemP>
                Night time Admin/<br />moderater
              </TeamItemP>
            </TeamItem>

            <TeamItem className='team-item bottom-line-arrow bottom-line-left-arrow'>
              <TeamItemLogo src={CoppedLogo} alt="Waf" />
              <TeamItemTitle>
                Chopped
              </TeamItemTitle>
              <TeamItemP>
                Community<br /> manager & social<br /> Support
              </TeamItemP>
            </TeamItem>

            <TeamItem className='team-item bottom-line-arrow'>
              <TeamItemLogo src={MapleLogo} alt="Waf" />
              <TeamItemTitle>
                Maple
              </TeamItemTitle>
              <TeamItemP>
                Day time Admin/<br />moderater
              </TeamItemP>
            </TeamItem>

            <TeamItem className='team-item'>
              <TeamItemLogo src={EtonLogo} alt="Waf" />
              <TeamItemTitle>
                Eton
              </TeamItemTitle>
              <TeamItemP>
                Day time Admin/<br />moderater
              </TeamItemP>
            </TeamItem>
          </SecondItemsBlock>
        </TeamItems>
      </TeamContents>
    </TeamWrapper>
  )
}

export default TeamSection
