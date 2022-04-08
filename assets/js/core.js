// =================================================
// ============ CORE VARIABLES

const VERSION = "1.1";
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
    'titleScreen': `<p>Le jeu du pendu est un jeu où il faut deviner un mot choisi aléaoirement dans une liste. Tous les mots sont des mots français.</p>
                          <p>Pour deviner le bon mot, il faut choisir une à une l'une des 26 lettres de l'alphabet. Au bout de 7 essais incorrect, la partie est perdue.</p>`,
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
    'titleScreen': `<p>The Hangman is a game where you have to guess a word randomly chosen from a list. All the words are French words.</p>
                         <p>To guess the correct word, you must choose one by one one one of the 26 letters of the alphabet. After 7 incorrect attempts, the game is lost.</p>`,
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