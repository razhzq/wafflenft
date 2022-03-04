import React from 'react'

import {
  RoadmapWrapper,
  RoadmapH1,
  RoadmapContents,
  Title,
  Description
} from './RoadmapElements'

import Line1 from 'images/phase-1-line.png'
import Line2 from 'images/phase-2-line.png'
import Line3 from 'images/team-line-3.png'
import Line4 from 'images/phase-4-line.png'
import WaffleImg from 'images/roadmap-waffle.png'
import Waffle2 from 'images/waffle2.png'
import Waffle4 from 'images/waffle4.png'

import './styles.css'

const RoadmapPhase = () => {

  return (
    <RoadmapWrapper id='roadmap'>
      <RoadmapH1>Roadmap</RoadmapH1>
      <RoadmapContents>
        <div className='phase-1'>
          <div className='position-relative'>
            <Title>
              Phase #1
            </Title>
            <Description>
              - Upon reaching 3000 discord members, a date will be set for both Presale & Main Launch
              -500 NFTs will be allocated to Presale(the funds accumulated from the presale will help push the
              community marketing towards our main launch)<br />
              -250 NFTs will be allocated to Giveaways & Contests <br />
              -The remaining 4,250 Waffle NFTS will be release to public mint.<br />
              - Daily raffle deployment upon closing of public sale
            </Description>
            <img src={Line1} alt="Line" className='road-line-1' />
            <img src={WaffleImg} alt="Waffle" className='phase-1-waffle' />
          </div>
        </div>

        <div className='phase-2'>
          <div className='position-relative'>
            <Title>
              Phase #2
            </Title>
            <Description>
              - Applications for secondary markets will be placed.
              Members can trade numbers, accumulate more waffle tickets or simply collect different designs
              - Our website will be fully updated to bring the latest and best tools to bring ease to our community and holders
              - Weekly Raffle NFTs will be created and put up for public sale
            </Description>
            <img src={Line2} alt="Line" className='road-line-2' />
            <img src={WaffleImg} alt="Waffle" className='phase-2-waffle' />
          </div>
        </div>

        <div className='phase-3'>
          <div className='position-relative'>
            <Title>
              Phase #3
            </Title>
            <Description>
              Community voting will commence for WaffleCasino games
              - WaffleNFT Merchandise Shop will be open on our website
              - Monthly Raffle NFTs will be created and put up for public sale
            </Description>
            <img src={Line3} alt="Line" className='road-line-3' />
            <img src={Waffle2} alt="Waffle" className='phase-3-waffle' />
          </div>
        </div>

        <div className='phase-4'>
          <div className='position-relative'>
            <Title>
              Phase #4
            </Title>
            <Description>
              - WaffleCasino Launch<br />
              - Roadmap 2023 Update
            </Description>
            <img src={Line4} alt="Line" className='road-line-4' />
            <img src={Waffle4} alt="Waffle" className='phase-4-waffle' />
          </div>
        </div>
      </RoadmapContents>
    </RoadmapWrapper>
  );
}

export default RoadmapPhase;
