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

// Structure style organisme
    // Structure de base menue
    export const COLORSBARREMENUE = `bg-gray-300 border-yellow-500 border-7`;
    export const BARREMENUE = `fixed gap-4 ${COLORSBARREMENUE}`;

    // Structure de base terminal
    export const TERMINALBUTTONHOVER = "hover:bg-neutral-800 hover:border-white border-7"
    export const TERMINALBUTTONCOLORS = "bg-gray-300 text-green-500 font-semibold transition-colors duration-300"
    export const TERMINALBUTTON = `px-4 py-2 rounded ${TERMINALBUTTONCOLORS} ${TERMINALBUTTONHOVER}`

    export const TERMINALBUTTONHOVERQUIT = "hover:text-red-500"
    export const TERMINALBUTTONCOLORSQUIT = "bg-gray-300 text-yellow-300 text-2xl font-bold transition-colors duration-300"
    export const TERMINALBUTTONQUIT = `absolute ${DIRECTIONS("top", 2)} ${DIRECTIONS("left")} ${TERMINALBUTTONCOLORSQUIT} ${TERMINALBUTTONHOVERQUIT}`


// Structure style composants
    // Structure de base carouselle
    export const CARROUSELLE = ``;

    // Structure de base buttons
    export const BUTTONCOLORS = `bg-gray-300`;
    export const BUTTON = `${BUTTONCOLORS}`;


// Animation
export const SLICE = ``;
export const FONDU = ``;