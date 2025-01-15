import Futurice from "../components/images/partners/futurice.png";
import Accenture from "../components/images/partners/accenture.png";
import Netum from "../components/images/partners/netum.png";
import Reaktor from "../components/images/partners/reaktor.png";
import Solita from "../components/images/partners/solita.png";
import ReceiptHero from "../components/images/partners/receipthero.png";
import Modulight from "../components/images/partners/modulight.png";
import ProfitSoftware from "../components/images/partners/profitsoftware.png";
import Vincit from "../components/images/partners/vincit.png";
import Kaijakka from "../components/images/partners/kaijakka.png";
import Hene from "../components/images/partners/hene.png";
import TOAS from "../components/images/partners/toas.png";
import Nokia from "../components/images/partners/nokia.png";
import Evitec from "../components/images/partners/evitec.png";
import Frostly from "../components/images/partners/frostly.png";
import Twoday from "../components/images/partners/twoday.png";
import { useTranslation } from "react-i18next";

import sourcebanner from "../components/images/sourcebanner.jpeg";

const Front = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="page">
        <div className="page-banner-container">
          <div className="page-banner filter">
            <img className="bannerImage" src={sourcebanner} alt=""></img>
          </div>
          <h1 class="page-title">{t("nav.frontPage")}</h1>
        </div>
        <div class="page-text">
          <p>{t("sourceInfo.paragraph1")}</p>
          <p>{t("sourceInfo.paragraph2")}</p>
          <p>{t("sourceInfo.paragraph3")}</p>
          <p>{t("sourceInfo.paragraph4")}</p>
        </div>
        <h1 class="partners-title">{t("partnersTitle")}</h1>
        <div class="partner-widget-partners">
          <a class="partner-widget-item" href="https://tammerforce.com/">
            <img src={Futurice} alt="Futurice Logo" />
          </a>
          <a class="partner-widget-item" href="https://netum.fi">
            <img src={Netum} alt="Netum Logo" />
          </a>
          <a class="partner-widget-item" href="https://www.solita.fi/">
            <img src={Solita} alt="Solita Logo" />
          </a>
          <a class="partner-widget-item" href="https://www.evitec.com/">
            <img src={Evitec} alt="Evitec Logo" />
          </a>
          <a class="partner-widget-item" href="https://www.yobaari.com/">
            <img src={Kaijakka} alt="Kaijakka Logo" />
          </a>
          <a class="partner-widget-item" href="https://hene.fi/">
            <img src={Hene} alt="Siniset Bussit Logo" />
          </a>
          <a class="partner-widget-item" href="https://toas.fi/">
            <img src={TOAS} alt="TOAS Logo" />
          </a>
          <a class="partner-widget-item" href="https://www.nokia.com/">
            <img src={Nokia} alt="Nokia Logo" />
          </a>
          <a class="partner-widget-item" href="https://www.twoday.com/">
            <img src={Twoday} alt="Twoday Logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Front;
