import React from 'react';
import BarreMenue from './template/organismes/BarreMenue.tsx';
import './styles/App.css';
import './styles/tw.ts';
import { useState } from 'react';

// -- Composants--------
// Pages
import TerminalLinux from './template/organismes/TerminalLinux.tsx';
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
import Softskills from './template/pages/Softskills.tsx';
import Telephone from './template/pages/Telephone.tsx';
import Sommaire from './template/pages/Sommaire.tsx';
import ReactLg from './template/pages/ReactLg.tsx';
import Others from './template/pages/Others.tsx';
import Project1 from './template/pages/Project1.tsx';
import Project2 from './template/pages/Project2.tsx';

// Utilitaire
import ScrollingBarre from './template/composants/ScrollingBarre.tsx';
import Carrousel from './template/composants/Carrousel.tsx';
import { BARREMENUE, DIRECTIONS, FLEXCOL, FLEXROW, TERMINALBUTTON, TERMINALBUTTONQUIT } from './styles/tw.ts';

//--------


const displaysInf: { displayFirstMenuIndex: number; displaySecondMenuIndex: number }[] = [
  { displayFirstMenuIndex: 0, displaySecondMenuIndex: 0 }
];

function display(tab: number, displaysInf: any) {
  displaysInf.diplayFirstMenuIndex = tab
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
  const mesCompetencesTab = [<JavaScript />, <ReactLg />, <NodeJs />]
  const projetsTab = [<Project1 />, <Project2 />]
  const mesEtudesTab = [<Lycee />, <Epitech />, <ESMA />, <ESUP />]
  const contactsTab = [<Linkedin />, <Gmail />, <Telephone />, <Others />]
  const prédefTab = [<HomePage />, <Softskills />]

  displaysInf.diplaySecondMenuIndex = tab
  switch (displaysInf.diplayFirstMenuIndex) {
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

function App() {
  const [tab_menue1, setTab1] = useState(0);
  const [tab_menue2, setTab2] = useState(0);
  const [tabs_menue1, setTabs1] = useState(['...']);
  const [tabs_menue2, setTabs2] = useState(['...']);
  const [displayFirstMenuIndex, setDisplayFirstMenuIndex] = useState<number>(0);
  const [displaySecondMenuIndex, setDisplaySecondMenuIndex] = useState<number>(0);

  const [showTerminal, setShowTerminal] = useState(false);

  const handleTab2Click = (tabIndex: number) => {
    setTab1(0);
    setTab2(tabIndex);
    switch (tabIndex) {
      case 0:
        setTabs1(["Introduction", "Sommaire"]);
        break;
      case 1:
        setTabs1(["A propos de moi", "Curriculum Vitae"]);
        break;
      case 2:
        setTabs1(["JavaScript", "React", "Node.js"]);
        break;
      case 3:
        setTabs1(["Projet1", "Projet2"]);
        break;
      case 4:
        setTabs1(["Lycée", "Epitech", "ESMA", "ESUP"]);
        break;
      case 5:
        setTabs1(["Linkedin", "Gmail", "Téléphone", "..."]);
        break;
      default:
        setTabs1(["Home page", "Softskills"]);
        break;
    }
  };

  return (
    <>
      {/* Il ne faut pas utiliser de **head** en react mais : react-helmet */}
      <head>
        <link rel="shortcut icon" href="../icone_portfolio.png" type="image/x-icon" />
      </head>
      {/* Définir une taille de fenêtre de + de 2000px pour pouvoir scroll down ou up */}
      <div className="w-full min-h-screen bg-[url('./background.jpg')] bg-fixed h-[10000px]">
        {/* Premier menu à gauche */}
        <BarreMenue
          className={`${FLEXCOL} ${BARREMENUE} justify-start ${DIRECTIONS("top", 8)} ${DIRECTIONS("left", 1)} w-70 rounded-lg`}
          setTab={setTab1}
          tabs={tabs_menue1}
        />
        {/* Second menu centré en haut */}
        <BarreMenue
          className={`${FLEXROW} ${BARREMENUE} justify-center ${DIRECTIONS("top", 2)} ${DIRECTIONS("left", 50)} -translate-x-1/2 h-10 w-[80%] rounded-full`}
          setTab={handleTab2Click}
          tabs={['Home page', 'À propos de moi/CV', 'Mes Competences', 'Projets', 'Mes Etudes', 'Contact']}
        />
        {/* Terminal */}
        <div className="p-8">
          <button
            onClick={() => setShowTerminal(true)}
            className={`${TERMINALBUTTON}`}
          >
            Ouvrir le terminal
          </button>
          {showTerminal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
              <div className="relative bg-black text-white rounded-2xl p-6 w-[680px] max-w-full shadow-2xl border border-yellow-400">
                <button
                  onClick={() => setShowTerminal(false)}
                  className={`${TERMINALBUTTONQUIT}`}
                >
                </button>
                <TerminalLinux />
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-center w-full mt-32">
          <div className={`${FLEXCOL} w-[70%] rounded-2xl border-yellow-400 border-4 bg-white/80 backdrop-blur-md shadow-2xl gap-6`}>
            {/* Affiche le résultat des tab de la première barre de menu */}
            <div className={`${FLEXCOL} bg-gray-200 rounded-lg border-pink-50 border-7`}>
              {display(tab_menue2, displaysInf)}
            </div>
            <hr />
            {/* Affiche les résultat des tab de la seconde barre de menu */}
            <div className={`${FLEXCOL} rounded-lg border-pink-50 border-7`}>
              {displayTab(tab_menue1, displaysInf)}
            </div>
          </div>
        </div>
        <ScrollingBarre />
      </div >
    </>
  );
}

export default App;
