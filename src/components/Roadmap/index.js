import './style.css'
import Accordion from "./Accordian";
const RoadmapPhase = () => {

  return (
    <div id='roadmap'>
      <Accordion  >
        <div className="accordin-contents mt-3">
          <div className="phase-1">
            <h1>PHASE 2 </h1>
            <p>-The remaining 4,250 Waffle NFTs will be release to public mint, Each NFT corresponds to a number between 1-4000 which acts as a ticket for upcoming raffle</p>
          </div>
        
          <div className="phase-2">
            <h1>PHASE 3</h1>
            <p>
              -Applications for secondary markets will be placed.  Members can trade numbers, accumulate more waffle tickets or simply collect different designs

            </p>
          
          </div>

          <div className="phase-3">
            <h1>PHASE 4</h1>
            <p>- A further 2,000 Waffle NFTs will be launched, this second batch of NFTs will be used for our weekly raffles which will be 7x higher value and potentially life changing amounts to be won. </p>
         
          </div>
          
        </div>
      </Accordion>
    </div>
  );
}

export default RoadmapPhase;