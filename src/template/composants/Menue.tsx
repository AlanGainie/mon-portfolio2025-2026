import BarreMenue from '../organismes/BarreMenue.tsx';
import { ROOTMENUE, SECONDARYMENUE, PAGESCROLLDOWN, PAGESGLOBAL, TOPPAGESCROLLDOWN } from '../../styles/tw.ts';
import { useState } from 'react';

import MonCV from '../../template/pages/MonCV.tsx';
import MesEtudes from '../../template/pages/MesEtudes.tsx';
import MesCompetences from '../../template/pages/MesCompetences.tsx';
import ErrorGest from '../../template/pages/errorGest.tsx';
import HomePage from '../../template/pages/HomePage.tsx';
import Projets from '../../template/pages/Projets.tsx';
import Contacts from '../../template/pages/Contacts.tsx';

import {MultipliedMenues, OnlyOnedMenue} from '../../../datas/Menue.tsx'

const handleClick = (tabIndex: number,
    setTab1: React.Dispatch<React.SetStateAction<number>>,
    setTabs1: React.Dispatch<React.SetStateAction<string[]>>,
    setIcons1: React.Dispatch<React.SetStateAction<string[]>>) => {

    setTab1(0);
    if (tabIndex === undefined || tabIndex < 0 || tabIndex > MultipliedMenues.length) {

        setTabs1(["Home page", "Softskills"]);
        setIcons1(["home", ""]);
    } else {
        setTabs1(MultipliedMenues[tabIndex].names);
        setIcons1(MultipliedMenues[tabIndex].icones);
    }
    return;
};

function displayContentDefaultMenue(tab: number, displaysInf: any) {
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

/**
 * @param type Is a choice enter differents methodes to read page:
 * - Page by ancre : type = ancre or undefined
 * - Page by page : type = multi-page
 * @returns 
 */
function displayContentMenues(type: string) {
    const [tab_menue1] = useState(0);
    // const [tab_menue2] = useState(0);
    const displaysInf: { displayFirstMenuIndex: number; displaySecondMenuIndex: number }[] = [
        { displayFirstMenuIndex: 0, displaySecondMenuIndex: 0 }
    ];

    return (
        <>
            <div className={PAGESCROLLDOWN}>
                {/* Définir une taille de fenêtre de + de 2000px pour pouvoir scroll down ou up */}
                <div className={PAGESGLOBAL}>
                    {/* Affiche le résultat des tab de la première barre de menu */}
                    <div className={TOPPAGESCROLLDOWN}>
                        {displayContentDefaultMenue(tab_menue1, displaysInf)}
                    </div>
                    {/* {tab_menue2 && sousMenue({ tab_menue2, displaysInf })} */}
                </div>
            </div>
        </>
    );
}

/**
 * @type React.FC (Fonction React)
 * @param content Is a content replace menue if it enter
 * @param nbr is a number of menue and behind-menue you want
 * @returns One or more menue
 */
export const Menue = ({ content, nbr }: { content?: any, nbr?: number | undefined }): (React.ReactNode | string) => {
    const [, setTab1] = useState(0);
    const [tabs_menue1, setTabs1] = useState(['...']);
    const [icons_menue1, setIcons1] = useState(['more']);

    if (content)
        return content;
    return (
        <>
            {/* Premier menu à gauche */}
            <BarreMenue
                className={ROOTMENUE}
                setTab={(tabIndex) => handleClick(tabIndex, setTab1, setTabs1, setIcons1)}
                tabs={['Home page', 'À propos de moi/CV', 'Mes Competences', 'Projets', 'Mes Etudes', 'Contact']}
                icons={["home", "cv", "competence", "projet", "etudes", "contact"]} />
            {/* Second menu */}
            {(Number(nbr) > 1) && <BarreMenue
                className={SECONDARYMENUE}
                setTab={setTab1}
                tabs={tabs_menue1}
                icons={icons_menue1} />}
        </>
    );
};