// =================================================
// ============ CORE VARIABLES

const VERSION = "1.0";
const GITHUB = "<a target=\"_blank\" href=\"https://github.com/n-deleforge/hangman\">GitHub</a>";
const FOOTER = "V. " + VERSION + " | © 2020-22 | " + GITHUB + " | <a id=\"switchLanguage\"></a>";
const FOOTER_INGAME = "V. " + VERSION + " | © 2020-22 | " + GITHUB;
const COOKIE_LANG = "GAMZ-language";

const FRENCH = {
    'footer': FOOTER,
    'hangman' : "Le jeu du pendu", 'title' : "Le jeu du pendu",
    'play': "Jouer",
    'reload': "Recommencer",
    'lastTry': "Plus qu'un essai !",
    'try': " essais restants",
    'lost': "Perdu !<br />Le mot à trouver était : ",
    'win_part1': "Bien joué !<br />Vous avez fait ",
    'win_part2': " erreurs.",
    'switchLanguage' : "English",
    'results' : "Les mots à deviner sont des mots français !"
};

const ENGLISH = {
    'footer': FOOTER,
    'hangman' : "Hangman", 'title' : "Hangman",
    'play': "Play",
    'reload': "Restart",
    'lastTry' : "One try left !",
    'try' : " tries left",
    'lost' : "Lost !<br />The word to find was : ",
    'win_part1' : "Good game !<br />You did ",
    "win_part2" : " errors.",
    'switchLanguage' : "French",
    'results' : "Words to guess are French words !"
}

// =================================================
// ============ CORE INITIALISATION

// Setup cookie language
if (!getCookie(COOKIE_LANG)) {
    setCookie(COOKIE_LANG , "EN");
}

// Setup content according language
const CONTENT = (getCookie(COOKIE_LANG) == "FR") ? FRENCH : ENGLISH;
Object.keys(CONTENT).forEach(key => {
    if (get("#" + key)) {
        get("#" + key).innerHTML = CONTENT[key];
    }
});

// Able to switch language between French and English
if (get("#switchLanguage")) {
    get("#switchLanguage").addEventListener("click", () => {
        (getCookie(COOKIE_LANG) == "FR") ? setCookie(COOKIE_LANG, "EN") : setCookie(COOKIE_LANG, "FR");
        location.reload();
    });
}