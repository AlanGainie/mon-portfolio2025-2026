import BarreMenue from '../organismes/BarreMenue.tsx';
import { ROOTMENUE, SECONDARYMENUE, PAGESCROLLDOWN, PAGESGLOBAL, TOPPAGESCROLLDOWN } from '../../styles/tw.ts';
import { useState } from 'react';
import ErrorGest from '../pages/errorGest.tsx';

import {MultipliedMenues, OnlyOnedMenue} from '../../../datas/Menue.tsx'

// TODO: Finir les JS doxygene

/**
 * This var is a hook reaction when used a click in menue
 */
const handleClick = (tabIndex: number,
    setActuallistMenue: React.Dispatch<React.SetStateAction<number>>
    ) => {

    setActuallistMenue(tabIndex);
    return;
};

/**
 * The goal of this function is to return content when the menus set error
 * when I have no menue : I have default menue. Is better than UX and error
 * gest.
 * @param tab
 * @param displaysInf
 * @returns React.JSX.Element : The content have to print in page.
 */
export function ContentDefaultMenue(tab: number, displaysInf: any): React.JSX.Element {
    displaysInf.displayFirstMenuIndex = tab
    return OnlyOnedMenue.sections[tab] ?? <ErrorGest name="page" />;
}

interface ContentMenuesType {
    type?: "ancre" | "multi-pages" | undefined;
    actualmenue: number;
}

/**
 * The goal of this function is to return content when one or more menues
 * already existe.
 * @param type Is a choice enter differents methodes to read page:
 * - Page by ancre : type = ancre or undefined
 * - Page by page : type = multi-pages
 * @returns React.JSX.Element : The content have to print in page.
 */
export const ContentMenues: React.FC<ContentMenuesType> = ({type, actualmenue}: ContentMenuesType): React.JSX.Element => {
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
                        {ContentDefaultMenue(actualmenue, displaysInf)}
                    </div>
                    {/* {tab_menue2 && sousMenue({ tab_menue2, displaysInf })} */}
                </div>
            </div>
        </>
    );
};

/**
 * @type React.FC (Fonction React)
 * @param content Is a content replace menue if it enter
 * @param nbr is a number of menue and behind-menue you want
 * @returns One or more menue
 */
export const Menue = ({ content, nbr, actual_list_menue, setActuallistMenue}:
    { content?: any, nbr?: number | undefined, actual_list_menue: number, setActuallistMenue: React.Dispatch<React.SetStateAction<number>>}): (React.ReactNode | string) => {

    if (content) return content;

    return (
        <>
            {/* Premier menu à gauche */}
            <BarreMenue
                className={ROOTMENUE}
                setTab={(tabIndex) => handleClick(tabIndex, setActuallistMenue)}
                tabs={OnlyOnedMenue.names}
                icons={OnlyOnedMenue.icones} />
            {/* Second menu */}
            {(Number(nbr) > 1) && <BarreMenue
                className={SECONDARYMENUE}
                setTab={(tabIndex) => handleClick(tabIndex, setActuallistMenue)}
                tabs={OnlyOnedMenue.sections.map((_, i) => OnlyOnedMenue.names[i])}
                icons={OnlyOnedMenue.sections.map((_, i) => OnlyOnedMenue.icones[i])} />}
        </>
    );
};