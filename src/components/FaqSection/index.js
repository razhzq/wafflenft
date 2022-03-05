import React from 'react'

import {
  FaqWrapper,
  FaqContents,
  SectionTitle,
  RightImg
} from './FaqElements'

import FaqItem from './FaqItem'
import IntroItem from './IntroItem'

import RightImage from 'images/faq-1.png'

const FaqSection = () => {

  return (
    <FaqWrapper id='faq'>
      <RightImg src={RightImage} alt="Right" />
      <FaqContents>
        <SectionTitle>FAQ</SectionTitle>
        <IntroItem 
          title='What is WaffleNFT?'
          
        />
        <FaqItem 
          title='Which network is the mint on?'
          content='Solana blockchain.'
        />
        <FaqItem 
          title='When is the mint date?'
          content='Not yet announced however we have our first target set for 01st May 2022'
        />
        <FaqItem 
          title='What is the total supply?'
          content='5,000 WaffleNFT’s '
        />
        <FaqItem 
          title='What is the cost of each WaffleNFT?'
          content='TBA.'
        />
        <FaqItem 
          title='How many WaffleNFT’s can I mint?'
          content='5 maximum NFT’s per wallet address'
        />
        <FaqItem 
          title='What is the roadmap and plan for the WaffleNFT?'
          content='Head to over Roadmap section on our website or Discord for more information.'
        />
        <FaqItem 
          title='How can I get whitelisted?'
          content='Check out our Whitelist section within our Discord '
        />
        <FaqItem 
          title='What do I get as an early adopter?'
          content='We will hold plenty of Giveaways, Whitelist events & chances to win Free NFT’s 

          Being with us early gives you the biggest chance of winning all of the above! 
          '
        />
        <FaqItem 
          title='Where can I view my collection?'
          content='After we have had our public mint you will be able to see all information and metadata including traits and rarity on your chosen wallet (providing it is compatible to do so)'
        />
        <FaqItem 
          title='How can I buy or sell more WaffleNFT’s?'
          content='Secondary markets will be applied for as soon as our mint has closed'
        />
        <FaqItem 
          title='How do I purchase an NFT on Solana?'
          content='On our Mint day you will be able to Mint directly on our website

          Check out our Discord where we have a guides section on how to mint on our site
          '
        />
        <FaqItem 
          title='Where can I get more information or ask questions?'
          content='Discord and Twitter are always available with our devs to discuss more.'
        />
      </FaqContents>
    </FaqWrapper>
  )
}

export default FaqSection
