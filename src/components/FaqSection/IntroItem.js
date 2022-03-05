import React from 'react'
import useCollapse from 'react-collapsed'
import { IoMdClose, IoMdAdd } from "react-icons/io";

import {
  FaqItemContainer,
  FaqItemHeader,
  FaqItemTitle,
  FaqItemContent,
  FaqItemP,
  FaqItemH6
} from './FaqElements'

const IntroItem = (props) => {

  const { title } = props

  const config = {
    duration: 1000,
  };

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config)

  return (
    <FaqItemContainer>
      <FaqItemHeader {...getToggleProps()} isExpanded={isExpanded}>
        <FaqItemTitle>
          { title }
        </FaqItemTitle>
        {
          isExpanded ? <IoMdClose />: <IoMdAdd />
        }        
      </FaqItemHeader>
      <div {...getCollapseProps()}>
        <FaqItemContent >
          <FaqItemP>
          Waffle NFT aims to revolutionize the standard NFT by providing a real-life use case for each holder. Anyone who holds a WaffleNFT would not only hold a piece of delicious digital art, they would also have a raffle ticket or a “Waffle ticket” bringing real world use-case to its holder.
          </FaqItemP>
          
          <FaqItemH6>
            How ?
          </FaqItemH6>
          <FaqItemP>
          WaffleNFT is a project on the Solana network which has a total supply of 5000. After our minting has been closed we will launch our first phase of the project and introduce the daily raffles.
          </FaqItemP>
          <FaqItemP>
          Our commitment to the daily raffles would be setting aside a full years worth of raffle funds from any other project development finances, meaning no matter what updates we decide to implement on our journey the daily raffle would still remain untouched. Consistency is key for us and will be our point of difference, we will set a clear time in UTC each day for the raffle to take place and a set amount will be won each day, every day for the full year and will remain unchanged.
          </FaqItemP>
          <FaqItemP>
          Once WaffleNFT is through the public minting stage all of the information regarding time, value and proof will be published. After the user has successfully minted their NFT the Waffle will be shown within their chosen Solana wallet along with its metadata. Within this data each Waffle will be numbered between 1–5000 in correlation with our supply, this will be the users raffle ticket number.
          </FaqItemP>
          
        </FaqItemContent>
      </div>
    </FaqItemContainer>
  )
}

export default IntroItem
