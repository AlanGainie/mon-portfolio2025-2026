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

// Structure style pages
//___________________________

    export const PAGESCROLLDOWNCOLORS = `border-yellow-400 border-4 bg-white/80 backdrop-blur-md shadow-2xl`;
    export const PAGESCROLLDOWN = `${FLEXCOL} justify-center w-full mt-32 rounded-2xl gap-6 ${PAGESCROLLDOWNCOLORS}`;
    export const TOPPAGESCROLLDOWN = `${FLEXCOL} bg-gray-200 rounded-lg border-pink-50 border-7`;
    export const DOWNPAGESCROLLDOWN = `${FLEXCOL} rounded-lg border-pink-50 border-7`;

// Structure style organisme
//___________________________

    // Structure de base menue
    export const COLORSBARREMENUE = `bg-gray-300 border-yellow-500 border-7`;
    export const BARREMENUE = `gap-4 rounded-xl ${COLORSBARREMENUE}`;
    
    export const GLOBALMENUE = `${FLEXROW} gap-1 p-1 ${COLORSBARREMENUE}`;
        // Root Menue
        export const ROOTMENUE = `${FLEXROW} ${BARREMENUE} justify-center w-[60%] h-12 p-1`;
        // Secondary Menue
        export const SECONDARYMENUE = `${FLEXCOL} ${BARREMENUE} justify-start w-[15%] h-full z-1 p-1`;
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

    export const BUTTONSCROLLDOWNCOLORS = `bg-green-500 p-2 text-white`;
    export const BUTTONSCROLLDOWN = `${FLEXCOL} rounded-full ${BUTTONCOLORS}`;

    // Bouttons terminal
    export const TERMINALBUTTONHOVER = "hover:bg-white"
    export const TERMINALBUTTONCOLORS = "bg-neutral-800 text-green-500 border-green-500 border-7 font-semibold transition-colors duration-300"
    export const TERMINALBUTTON = `px-4 py-2 rounded-lg ${TERMINALBUTTONCOLORS} ${TERMINALBUTTONHOVER}`

    export const TERMINALBUTTONHOVERQUIT = "hover:text-red-500"
    export const TERMINALBUTTONCOLORSQUIT = "bg-gray-300 text-yellow-300 text-2xl font-bold transition-colors duration-300"
    export const TERMINALBUTTONQUIT = `${DIRECTIONS("top", 2)} ${DIRECTIONS("left")} ${TERMINALBUTTONCOLORSQUIT} ${TERMINALBUTTONHOVERQUIT}`


// Animation
export const SLICE = ``;
export const FONDU = ``;