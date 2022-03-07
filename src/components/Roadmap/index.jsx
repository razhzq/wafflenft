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

import { BsCheck2Circle } from 'react-icons/bs'

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
              - Socials Open{" "}< BsCheck2Circle /><br />
              - Marketing Implementation{" "}< BsCheck2Circle /><br />
              - Website Upgrade 2.0{" "}< BsCheck2Circle /> <br />
              - Whitelist Presale<br />
              - Marketing Push<br />
              - Public Launch
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
              - Daily Raffle Implementation<br />
              - Waffle Token Construction<br />
              - NFT Staking Launch<br />
              - Website 3.0 Upgrade<br />
              - Winners Circle Club Opening<br />
              - Waffle Casino Planning
              

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
              - Weekly Raffle Implementation<br />
              - Airdrops to Gen1 Holders<br />
              - Royalties Jackpot Commence<br />
              - Merchandise Shop Opens<br />
              - Good Cause Donations<br />
              - Community Voting <br />
              - Waffle Casino Construction Begins   

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
              - Monthly Raffle Implementation<br />
              - Airdrops to Gen1 Holders<br />
              - Waffle Casino Launch
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
