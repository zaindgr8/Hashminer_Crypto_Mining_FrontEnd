import React from "react";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import mining1 from "../assets/mining1.png";
import mining2 from "../assets/mining2.png";
import mining3 from "../assets/mining6.png";
import mining4 from "../assets/mining4.png";
import { CheckCircle2 } from "lucide-react";
import Miningpackages from "./components/miningpackages";

function SecondSection() {
  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal(".headline4", {
      duration: 2000,
      origin: "bottom",
      distance: "20px",
    });
  }, []);

  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal(".headline4b", {
      duration: 2000,
      origin: "left",
      distance: "20px",
    });
  }, []);

  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal(".headline4a", {
      duration: 2000,
      origin: "top",
      distance: "20px",
    });
  }, []);

  return (
    
      <section className="cryptocurrencies-section" id="products">
        <h2 className="text-black p-10 font-bold text-5xl headline4b">
          Invest in the latest, most
          <span className="text-blue-500"> secure</span>, <br /> and{" "}
          <span className="text-blue-500">profitable</span> crypto mining
          machines today.
        </h2>

        <div className="cryptocurrencies-info-cards headline4">

   
            <Miningpackages
              title=" Genesis Hashwave "
              investment="100 USD"
              returns="4 USD"
              src={mining3}
              imgSize={150}
              package1="starter"
              
            />

            <Miningpackages
              title=" Xenon Supercharge "
              investment="500 USD"
              returns="20 USD"
              src={mining2}
              imgSize={270}
              package1="pro"
            />
    
            <Miningpackages
              title=" Nebula Odyssey "
              investment="2500 USD"
              returns="100 USD"
              src={mining1}
              imgSize={210}
              package1="premium"
            />

            <Miningpackages
              title=" Custom Package "
              investment="? USD"
              returns="? USD"
              src={mining4}
              imgSize={290}
              package1="check"
            />
          </div>
        
      </section>
 
  );
}

export default SecondSection;
