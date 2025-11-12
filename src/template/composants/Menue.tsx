import BarreMenue from '../organismes/BarreMenue.tsx';
import { ROOTMENUE, SECONDARYMENUE, PAGESCROLLDOWN, PAGESGLOBAL, TOPPAGESCROLLDOWN} from '../../styles/tw.ts';
import { useState } from 'react';

import MonCV from '../../template/pages/MonCV.tsx';
import MesEtudes from '../../template/pages/MesEtudes.tsx';
import MesCompetences from '../../template/pages/MesCompetences.tsx';
import ErrorGest from '../../template/pages/errorGest.tsx';
import HomePage from '../../template/pages/HomePage.tsx';
import Projets from '../../template/pages/Projets.tsx';
import Contacts from '../../template/pages/Contacts.tsx';

const handleClick = (tabIndex: number,
    setTab1: React.Dispatch<React.SetStateAction<number>>,
    setTabs1: React.Dispatch<React.SetStateAction<string[]>>,
    setIcons1: React.Dispatch<React.SetStateAction<string[]>>) => {

    setTab1(0);
    switch (tabIndex) {
        case 0:
            setTabs1(["Introduction", "Sommaire"]);
            setIcons1(["", ""]);
            break;
        case 1:
            setTabs1(["A propos de moi", "Curriculum Vitae"]);
            setIcons1(["personal", "cv"]);
            break;
        case 2:
            setTabs1(["JavaScript", "React", "Node.js", "C"]);
            setIcons1(["js", "react", "node", "c"]);
            break;
        case 3:
            setTabs1(["Projet1", "Projet2"]);
            setIcons1(["revision", "jdr"]);
            break;
        case 4:
            setTabs1(["Lycée", "Epitech", "ESMA", "ESUP"]);
            setIcons1(["", "", "", ""]);
            break;
        case 5:
            setTabs1(["Linkedin", "Gmail", "Téléphone", "..."]);
            setIcons1(["linkedin", "at", "contact", "more"]);
            break;
        default:
            setTabs1(["Home page", "Softskills"]);
            setIcons1(["home", ""]);
            break;
    }
};

function DoubleMenue(content?: any, nbr?: number | undefined): (React.ReactNode | string) {
    const [, setTab1] = useState(0);
    const [tabs_menue1, setTabs1] = useState(['...']);
    const [icons_menue1, setIcons1] = useState(['more']);
                
    return (
        <>
            {/* Premier menu à gauche */}
            <BarreMenue
            className={SECONDARYMENUE}
            setTab={setTab1}
            tabs={tabs_menue1}
            icons={icons_menue1} />
            {/* Second menu centré en haut */}
            <BarreMenue
            className={ROOTMENUE}
            setTab={(tabIndex) => handleClick(tabIndex, setTab1, setTabs1, setIcons1)}
            tabs={['Home page', 'À propos de moi/CV', 'Mes Competences', 'Projets', 'Mes Etudes', 'Contact']}
            icons={["home", "cv", "competence", "projet", "etudes", "contact"]} />
        </>
    );
}

function displaySimpleMenue() {
    const [tab_menue1] = useState(0);
    const [tab_menue2] = useState(0);
    const displaysInf: { displayFirstMenuIndex: number; displaySecondMenuIndex: number }[] = [
        { displayFirstMenuIndex: 0, displaySecondMenuIndex: 0 }
    ];
    function displayMenuePrincipal(tab: number, displaysInf: any) {
        // La liste des menues
        const pagesList = [
            <HomePage />,
            <MonCV />,
            <MesCompetences />,
            <Projets />,
            <MesEtudes />,
            <Contacts />,
        ]
        displaysInf.displayFirstMenuIndex = tab
        return pagesList[tab] ?? <ErrorGest name="page" />;
    }

    return (
      <>
        <div className={PAGESCROLLDOWN}>
          {/* Définir une taille de fenêtre de + de 2000px pour pouvoir scroll down ou up */}
          <div className={PAGESGLOBAL}>
            {/* Affiche le résultat des tab de la première barre de menu */}
            <div className={TOPPAGESCROLLDOWN}>
                {displayMenuePrincipal(tab_menue2, displaysInf)}
            </div>
            {tab_menue2 && sousMenue({tab_menue1, displaysInf})}
          </div>
        </div>
      </>
    );
}

function SimpleMenue(content?: any): (React.ReactNode | string) {
    const [setTab1] = useState(0);

    displaySimpleMenue();
                                
    return (
        <>
            <BarreMenue
                className={SECONDARYMENUE}
                setTab={setTab1}
                tabs={tabs_menue1}
                icons={icons_menue1}/>
        </>
    );
}

export const Menue = ({content, nbr}: {content?: any, nbr?: number | undefined}): (React.ReactNode | string) => {

    if (content)
        return content;
    else if (!nbr || nbr === undefined || nbr === 1)
        return SimpleMenue(content);
    else if (nbr > 1)
        return DoubleMenue(content, nbr);
    else
        return "error bad request";
};