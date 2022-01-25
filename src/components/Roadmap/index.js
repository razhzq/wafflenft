import './style.css'
import Accordion from "./Accordian";
const RoadmapPhase = () => {

  return (
    <div id='roadmap'>
      <Accordion  >
        <div className="accordin-contents mt-3">
          <div className="phase-1">
            <h1>PHASE 2 </h1>
            <p>- Applications for secondary markets will be placed. Members can trade numbers, accumulate more waffle tickets or simply collect different designs</p>
            <p>- Our website will be fully updated to bring the latest and best tools to bring ease to our community and holders </p>
            <p>- Weekly Raffle NFTs will be created and put up for public sale</p>
          </div>
        
          <div className="phase-2">
            <h1>PHASE 3</h1>
            <p>- Community voting will commence for WaffleCasino games </p>
            <p>- WaffleNFT Merchandise Shop will be open on our website </p>
            <p>- Monthly Raffle NFTs will be created and put up for public sale</p>
          
          </div>

          <div className="phase-3">
            <h1>PHASE 4</h1>
            <p>- WaffleCasino Launch</p>
            <p>- Roadmap 2023 Update </p>
         
          </div>
          
        </div>
      </Accordion>
    </div>
  );
}

export default RoadmapPhase;