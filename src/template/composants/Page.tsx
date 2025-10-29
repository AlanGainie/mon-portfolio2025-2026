import { JSX } from "react";
import '../../styles/index.css'
import '../../styles/tw.ts';

// Page
import ErrorGest from '../../template/pages/errorGest.tsx';
import Epitech from '../../template/pages/Epitech.tsx';
import AproposDeMoi from '../../template/pages/AproposDeMoi.tsx';
import CurriculumVitae from '../../template/pages/CurriculumVitae.tsx';
import ESMA from '../../template/pages/ESMA.tsx';
import ESUP from '../../template/pages/ESUP.tsx';
import Gmail from '../../template/pages/Gmail.tsx';
import Linkedin from '../../template/pages/Linkedin.tsx';
import Introduction from '../../template/pages/Introduction.tsx';
import NodeJs from '../../template/pages/NodeJs.tsx';
import JavaScript from '../../template/pages/JavaScript.tsx';
import Lycee from '../../template/pages/Lycee.tsx';
import Telephone from '../../template/pages/Telephone.tsx';
import Sommaire from '../../template/pages/Sommaire.tsx';
import ReactLg from '../../template/pages/ReactLg.tsx';
import Others from '../../template/pages/Others.tsx';
import Project1 from '../../template/pages/Project1.tsx';
import Project2 from '../../template/pages/Project2.tsx';

// Utilitaire
// import Carrousel from './template/composants/Carrousel.tsx';
import { DOWNPAGESCROLLDOWN, FOOTER } from '../../styles/tw.ts';
// import Theme from './template/organismes/Themes.tsx';
import LanguageC from '../../template/pages/C.tsx';
//--------
//

// Pages des sous-menues
const homePageTab = [<Introduction />, <Sommaire />]
const monCVTab = [<AproposDeMoi />, <CurriculumVitae />]
const mesCompetencesTab = [<JavaScript />, <ReactLg />, <NodeJs />, <LanguageC />]
const projetsTab = [<Project1 />, <Project2 />]
const mesEtudesTab = [<Lycee />, <Epitech />, <ESMA />, <ESUP />]
const contactsTab = [<Linkedin />, <Gmail />, <Telephone />, <Others />]

function displaySousMenue(tab: number, displaysInf: any) {
  displaysInf.diplaySecondMenuIndex = tab
  // La liste des sous-menues
  const pagesMenueList = [
    homePageTab[tab],
    monCVTab[tab],
    mesCompetencesTab[tab],
    projetsTab[tab],
    mesEtudesTab[tab],
    contactsTab[tab],
  ];
  return pagesMenueList[displaysInf.displayFirstMenuIndex] ?? <ErrorGest name="page" />;
}

const HeaderPage = ({content}: {content?: any}): JSX.Element => {
  if (content) {
    return (content);
  }
  return (
    <>
      {/* Il ne faut pas utiliser de **head** en react mais : react-helmet */}
      <head>
          <link rel="shortcut icon" href="../icone_portfolio.png" type="image/x-icon" />
      </head>
    </>
  );
}

function sousMenue({tab_menue1, displaysInf}: {tab_menue1: any, displaysInf: any}): React.JSX.Element {
  {/* Affiche les résultat des tab de la seconde barre de menu */}
  return (
    <>
      <hr />
      <div className={DOWNPAGESCROLLDOWN}>
        {displaySousMenue(tab_menue1, displaysInf)}
      </div>
    </>
  );
}

const BodyPage = ({content, tab_menue1, tab_menue2}: {content?: any, tab_menue1: any, tab_menue2?: any}): React.JSX.Element => {
    if (content) {
      return (content);
    }
  
    return displaySimpleMenue();
}

const FooterPage = ({content}: {content?: any}): JSX.Element => {
  if (content)
    return content;
  return (
    <footer className={FOOTER}>
      <>
          <p>© 2025 Alan Gainie - Tous droits réservés</p>
          <nav>
              <a href="/mentions-legales">Mentions légales </a>
              <a href="/confidentialite"> Confidentialité</a>
          </nav>
      </>
    </footer>
  );
}

function Page({header, footer, content, type}: {header?: any, footer?: any, content: any, type?: string}) {

  if (!type || ["normal", "classique", "ancre"].includes(type))
    return (
      <div>
        {(header != "none") && <HeaderPage content={header}/>}
        <BodyPage content={content} tab_menue1={tab_menue1}/>
        {(footer != "none") && <FooterPage content={footer}/>}
      </div >
    );
  else if (type === "db_menues" || type === "+menues")
    return (
      <div>
        {(header != "none") && <HeaderPage content={header}/>}
        <BodyPage content={content} tab_menue1={tab_menue1} tab_menue2={tab_menue2}/>
        {(footer != "none") && <FooterPage content={footer}/>}
      </div >
    );
}

export default Page;