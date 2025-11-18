// Se portfolio est réaliser en React 19 de fais quelques signature classique
// comme JSX.Element deviennent à présent : React.JSX.Element toutefois je suis
// en Typescript 5

import './styles/index.css'
import './styles/tw.ts';

// -- Composants--------

// Pages
import MonCV from './template/pages/MonCV.tsx';
import MesEtudes from './template/pages/MesEtudes.tsx';
import MesCompetences from './template/pages/MesCompetences.tsx';
import ErrorGest from './template/pages/errorGest.tsx';
import HomePage from './template/pages/HomePage.tsx';
import Projets from './template/pages/Projets.tsx';
import Contacts from './template/pages/Contacts.tsx';
import Epitech from './template/pages/Epitech.tsx';
import AproposDeMoi from './template/pages/AproposDeMoi.tsx';
import CurriculumVitae from './template/pages/CurriculumVitae.tsx';
import ESMA from './template/pages/ESMA.tsx';
import ESUP from './template/pages/ESUP.tsx';
import Gmail from './template/pages/Gmail.tsx';
import Linkedin from './template/pages/Linkedin.tsx';
import Introduction from './template/pages/Introduction.tsx';
import NodeJs from './template/pages/NodeJs.tsx';
import JavaScript from './template/pages/JavaScript.tsx';
import Lycee from './template/pages/Lycee.tsx';
import Telephone from './template/pages/Telephone.tsx';
import Sommaire from './template/pages/Sommaire.tsx';
import ReactLg from './template/pages/ReactLg.tsx';
import Others from './template/pages/Others.tsx';
import Project1 from './template/pages/Project1.tsx';
import Project2 from './template/pages/Project2.tsx';

// Utilitaire
// import Carrousel from './template/composants/Carrousel.tsx';
import { DOWNPAGESCROLLDOWN, GLOBALMENUE, PAGESCROLLDOWN, PAGESGLOBAL, TOPPAGESCROLLDOWN } from './styles/tw.ts';
// import Theme from './template/organismes/Themes.tsx';
import LanguageC from './template/pages/C.tsx';
import Page from './template/composants/Page.tsx';
import { Menue } from './template/composants/Menue.tsx';
//--------


const displaysInf: { displayFirstMenuIndex: number; displaySecondMenuIndex: number }[] = [
  { displayFirstMenuIndex: 0, displaySecondMenuIndex: 0 }
];

function display(tab: number, displaysInf: any) {
  displaysInf.displayFirstMenuIndex = tab
  switch (tab) {
    case 0:
      return <HomePage />;
    case 1:
      return <MonCV />;
    case 2:
      return <MesCompetences />;
    case 3:
      return <Projets />;
    case 4:
      return <MesEtudes />;
    case 5:
      return <Contacts />;
    default:
      return <ErrorGest name="page" />;
  }
}

function displayTab(tab: number, displaysInf: any) {
  const homePageTab = [<Introduction />, <Sommaire />]
  const monCVTab = [<AproposDeMoi />, <CurriculumVitae />]
  const mesCompetencesTab = [<JavaScript />, <ReactLg />, <NodeJs />, <LanguageC />]
  const projetsTab = [<Project1 />, <Project2 />]
  const mesEtudesTab = [<Lycee />, <Epitech />, <ESMA />, <ESUP />]
  const contactsTab = [<Linkedin />, <Gmail />, <Telephone />, <Others />]
  // const prédefTab = [<HomePage />, <Softskills />]

  displaysInf.diplaySecondMenuIndex = tab
  switch (displaysInf.displayFirstMenuIndex) {
    case 0:
      return homePageTab[tab];
    case 1:
      return monCVTab[tab];
    case 2:
      return mesCompetencesTab[tab];
    case 3:
      return projetsTab[tab];
    case 4:
      return mesEtudesTab[tab];
    case 5:
      return contactsTab[tab];
    default:
      return <ErrorGest name="page" />;
  }
}

export const content = (tab_menue2: any, tab_menue1: any) => (
  <div className={`${PAGESCROLLDOWN}`}>
    {/* Affiche le résultat des tab de la première barre de menu */}
    <div className={`${TOPPAGESCROLLDOWN}`}>
      {display(tab_menue2, displaysInf)}
    </div>
    <hr />
    {/* Affiche les résultat des tab de la seconde barre de menu */}
    <div className={`${DOWNPAGESCROLLDOWN}`}>
      {displayTab(tab_menue1, displaysInf)}
    </div>
  </div>
);

function App() {
  // const [showTerminal, setShowTerminal] = useState(false);

  return (
    <>
      {/* Définir une taille de fenêtre de + de 2000px pour pouvoir scroll down ou up */}
      <div className={`${PAGESGLOBAL}`}>
        <div className={`${GLOBALMENUE}`}>
          <Menue nbr={1}/> // Menue Global
        </div>
        <Page
          content={content}
          type={undefined}
          />
      </div >
    </>
  );
}

export default App;
