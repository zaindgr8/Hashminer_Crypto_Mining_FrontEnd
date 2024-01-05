import React from "react";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import mining1 from "../assets/mining1.png";
import mining2 from "../assets/mining2.png";
import mining3 from "../assets/mining6.png";
import mining2a from "../assets/mining2a.png";
import mining2b from "../assets/mining2b.png";
import mining2c from "../assets/mining2c.png";
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
        <span className="text-blue-500">profitable</span> crypto mining machines
        today.
      </h2>

      <div className="cryptocurrencies-info-cards headline4">
        <Miningpackages
          title=" Genesis Hashwave "
          investment="100 USDT"
          returns="4 USDT"
          src={mining3}
          imgSize={150}
          package1="explorer"
          bonus="4 USDT"
        />

        <Miningpackages
          title=" Xenon Supercharge "
          investment="1000 USDT"
          returns="40 USDT"
          src={mining2b}
          imgSize={270}
          package1="starter"
          bonus="40 USDT"
        />

        <Miningpackages
          title=" Nebula Odyssey "
          investment="2000 USDT"
          returns="80 USDT"
          src={mining2a}
          imgSize={230}
          package1="bronze"
          bonus="80 USDT"
        />

        <Miningpackages
          title="Quantum Hash"
          investment="5000 USDT"
          returns="200 USDT"
          src={mining2c}
          imgSize={290}
          package1="silver"
          bonus="200 USDT"
        />
        <Miningpackages
          title="Cyber Mine X"
          investment="8000 USDT"
          returns="320 USDT"
          src={mining1}
          imgSize={220}
          package1="gold"
          bonus="320 USDT"
        />
        <Miningpackages
          title="Stellar Hash"
          investment="10000 USDT"
          returns="400 USDT"
          src={mining2}
          imgSize={290}
          package1="platinum"
          bonus="400 USDT"
        />
      </div>
    </section>
  );
}

export default SecondSection;
