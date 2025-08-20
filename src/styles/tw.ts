// Vue déveloper
const developer = true;
export function DEVELOPERVIEW(displayed: true, level: number): string;
export function DEVELOPERVIEW(displayed: false | undefined, level?: never): undefined;
export function DEVELOPERVIEW(displayed?: boolean | undefined, level?: number) {
    if (!displayed)
        return undefined;
    switch (level) {
        case 1:
            return `border-red-600 border-7`;
        case 2:
            return `border-orange-500 border-7`;
        case 3:
            return `border-green-400 border-7`;
        case 4:
            return `border-pink-300 border-7`;
        case 5:
            return `border-blue-200 border-7`;
        default:
            return `border-yellow-400 border-7`;
    }
}

// Agencement de la page
export const FLEXCOL = `flex flex-col md:flex-col`;
export const FLEXROW = `flex flex-row md:flex-row`;
export const GRID = ``;

export const error = "Erreur tailwind pas de mutation disponible";

// Directions
export const DIRECTIONS = (position: "top" | "left" | "right" | "bottom" | "center", degres?: number | "justify") => {
    let base = "";
    if (degres) {
        if ( degres === "justify" || degres >= 100 ) {
            switch (position) {
                case "right": base = "justify-right"; break;
                case "center": base = "justify-center"; break;
                case "left": base = "justify-left"; break;
            }
        } else {
            switch (position) {
                case "top": return `${base} top-[${degres}%]`;
                case "left": return `${base} left-[${degres}%]`;
                case "right": return `${base} right-[${degres}%]`;
                case "bottom": return `${base} bottom-[${degres}%]`;
            }
        }
    }
    switch (position) {
        case "right": base = "justify-right"; break;
        case "center": base = "justify-center"; break;
        case "left": base = "justify-left"; break;
    }
    return error;
};

// Animation
export const SLICE = ``;

export const FONDU = (percent?: number) => {
    let opacity = 'hover:opacity-100';
    if (percent)
        switch (true) {
            case percent <= 10:
                opacity = 'hover:opacity-10';
                break;
            case percent > 10 && percent <= 25:
                opacity = 'hover:opacity-25';
                break;
            case percent > 25 && percent <= 50:
                opacity = 'hover:opacity-50';
                break;
            case percent > 50 && percent <= 75:
                opacity = 'hover:opacity-75';
                break;
            case percent > 75 && percent <= 85:
                opacity = 'hover:opacity-85';
                break;
        }
    return `opacity-0 transition-opacity duration-700 ${opacity}`;
}

export const PAGESGLOBALBG = "bg-[url('./background.jpg')] bg-fixed"
export const PAGESGLOBAL = "w-full min-h-screen h-[10000px]";

// Structure style pages
//___________________________
    export const PAGESCROLLDOWNCOLORS = `border-yellow-400 border-4 bg-white/80 backdrop-blur-md shadow-2xl`;
    export const PAGESCROLLDOWN = `${FLEXCOL} justify-center w-full mt-32 rounded-2xl gap-6 ${PAGESCROLLDOWNCOLORS}`;
    export const TOPPAGESCROLLDOWN = `${FLEXCOL} bg-gray-200 rounded-lg border-pink-50 border-7`;
    export const DOWNPAGESCROLLDOWN = `${FLEXCOL} rounded-lg border-pink-50 border-7`;

// Structure style organisme
//___________________________

    // Structure de base menue
    // export const COLORSBARREMENUEV01 = `bg-gray-300 border-yellow-500 border-7`;
    export const COLORSBARREMENUE = ``;
    export const BARREMENUE = `gap-4 rounded-xl ${COLORSBARREMENUE}`;
    
    // bg-black/80
    export const GLOBALMENUE = `${FLEXROW} gap-1 p-1 rounded-xl`;
        // Root Menue
        export const ROOTMENUEBG = `bg-[url('/home/againie/Desktop/AppPortefolioReact/Mon-portfolio2025-2026/src/assets/picture/background.svg')]`
        export const ROOTMENUE = `${developer ? DEVELOPERVIEW(developer, 1) : FONDU(20)} ${FLEXROW} ${BARREMENUE} justify-center w-full h-12 p-1 ${ROOTMENUEBG}`;
        // Secondary Menue
        export const SECONDARYMENUE = `${developer ? DEVELOPERVIEW(developer, 1) : FONDU()} ${FLEXCOL} ${BARREMENUE} justify-start bg-[url('/home/againie/Desktop/AppPortefolioReact/Mon-portfolio2025-2026/src/assets/picture/background.svg')] w-[15%] h-full z-1 p-1`;
        // Parameter Menue
        export const PARAMETERMENUE = `${FLEXROW} ${BARREMENUE} justify-end w-[25%] h-12 p-1`;


// Structure style composants
//___________________________

    // Structure de base carouselle
    export const CARROUSELLE = ``;

    // Structure thèmes
    export const THEMES = ``;
    export const PASTEL = ``;

    // Structure de base buttons
    export const BUTTONCOLORS = (clicked?: boolean, disabled?: boolean) => {
        const COLORHOVER = 'hover:bg-gray-500 opacity-70 border-red-500';
        const COLORSDISABLED = disabled ? '' : COLORHOVER;
        const COLORSCLICKED = clicked ? 'bg-green-500' : '';
        const COLORS = `${COLORSDISABLED} ${COLORSCLICKED} ${COLORHOVER} transition-colors duration-300`;
    
        return COLORS;
    };

    export const BUTTONSCROLLDOWNCOLORS = `${DEVELOPERVIEW(developer, 5)} bg-green-500 p-2 text-white`;
    export const BUTTONSCROLLDOWN = `${FLEXCOL} rounded-full ${BUTTONCOLORS}`;

    // Bouttons terminal
    export const TERMINALBUTTONHOVER = "hover:bg-white"
    export const TERMINALBUTTONCOLORS = `${DEVELOPERVIEW(developer, 3)} bg-neutral-800 text-green-500 font-semibold transition-colors duration-300`
    export const TERMINALBUTTON = `gap-4 px-4 py-2 rounded-lg ${TERMINALBUTTONCOLORS} ${TERMINALBUTTONHOVER}`

    export const TERMINALBUTTONHOVERQUIT = "hover:text-red-500"
    export const TERMINALBUTTONCOLORSQUIT = `${DEVELOPERVIEW(developer, 3)} bg-gray-300 text-yellow-300 text-2xl font-bold transition-colors duration-300`
    export const TERMINALBUTTONQUIT = `${FLEXROW} justify-center w-[6%] rounded-xl ${TERMINALBUTTONCOLORSQUIT} ${TERMINALBUTTONHOVERQUIT}`
