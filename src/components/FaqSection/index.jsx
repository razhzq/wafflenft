import React from 'react'

import {
  FaqWrapper,
  FaqContents,
  SectionTitle,
  RightImg
} from './FaqElements'

import FaqItem from './FaqItem'

import RightImage from 'images/faq-1.png'

const FaqSection = () => {

  return (
    <FaqWrapper id='faq'>
      <RightImg src={RightImage} alt="Right" />
      <FaqContents>
        <SectionTitle>FAQ</SectionTitle>
        <FaqItem 
          title='What is WaffleNFT?'
        />
        <FaqItem 
          title='Which network is the mint on?'
        />
        <FaqItem 
          title='When is the mint date?'
        />
        <FaqItem 
          title='What is the total supply?'
        />
        <FaqItem 
          title='What is the cost of each WaffleNFT?'
        />
        <FaqItem 
          title='How many WaffleNFT’s can I mint?'
        />
        <FaqItem 
          title='What is the roadmap and plan for the WaffleNFT?'
        />
        <FaqItem 
          title='How can I get whitelisted?'
        />
        <FaqItem 
          title='What do I get as an early adopter?'
        />
        <FaqItem 
          title='Where can I view my collection?'
        />
        <FaqItem 
          title='How can I buy or sell more WaffleNFT’s?'
        />
        <FaqItem 
          title='How do I purchase an NFT on Solana?'
        />
        <FaqItem 
          title='Where can I get more information or ask questions?'
        />
      </FaqContents>
    </FaqWrapper>
  )
}

export default FaqSection
