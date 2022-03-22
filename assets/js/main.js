// =================================================
// ============ SETTINGS 

const WORDS = [
    "AEROPORT", "AFFAIRE", "ALBUM", "ALPHABET", "AMENER", "AMPOULE", "ANCIEN", "ANORAK", "ANTENNE", "APPAREIL", "APPORTER", "APPUYER", "APRES", "ARC", "ARMOIRE", "ARRET", "ARRIERE", "ARRIVER", "ARROSER", "ASSIETTE", "ASSIS", "ATTACHER", "ATTENDRE", "ATTENTION", "ATTERRIR", "ATTRAPER", "AU", "AUTANT", "AUTO", "AUTOMOBILISTE", "AUTORADIO", "AUTOUR", "AVANCER", "AVANT", "AVEC", "AVION", 
    "BAGAGE", "BAGUETTE", "BAIGNER", "BÂILLER", "BALLE", "BANC", "BARBE", "BARBOTER", "BARQUE", "BARRE", "BARREAU", "BAS", "BATEAU", "BEAUCOUP", "BIBLIOTHEQUE", "BLANC", "BLEU", "BOIS", "BOITE", "BONDIR", "BONNET", "BORD", "BOSSER", "BOTTE", "BOUCHER", "BOUCHON", "BOUDER", "BOUGER", "BOUSCULER", "BOUT", "BOUTEILLE", "BOUTON", "BRAS", "BRETELLE", "BRICOLAGE", "BRUIT", "BRUN", "BULLES", "BUREAU", 
    "CABANE", "CABINET", "CAGOULE", "CAHIER", "CAISSE", "CALME", "CAMARADE", "CAMESCOPE", "CAMION", "CANARD", "CARNET", "CARREAU", "CARTABLE", "CARTON", "CASIER", "CASQUE", "CASQUETTE", "CASSE", "CASSER", "CASSEROLE", "CASSETTE", "CATALOGUE", "CEDE", "CEDEROM", "CEINTURE", "CERCEAU", "CHAINE", "CHAISE", "CHAISES", "CHANSON", "CHAPEAU", "CHARGER", "CHAT", "CHAUD", "CHAUSSETTE", "CHAUSSON", "CHAUSSURE", "CHEMISE", "CHERCHER", "CHEVILLE", "CHIFFRE", "CHOISIR", "CHOSE", "CHUCHOTER", "CHUTE", "CIGARETTE", "CINQ", "CISEAUX", "CLASSE", "CLAVIER", "CLE", "CLOU", "COIN", "COL", "COLERE", "COLLANT", "COLLE", "COLLER", "COLORIAGE", "COLORIER", "COMMENCER", "COMPARER", "COMPTER", "CONDUIRE", "CONSTRUIRE", "CONTE", "CONTINUER", "CONTRAIRE", "CONTRE", "COPAIN", "COPIER", "COQUILLAGE", "COQUILLETTE", "COQUIN", "CORDE", "CORPS", "COTE", "COU", "COUCHE", "COUDE", "COUDRE", "COULEUR", "COULOIR", "COUPER", "COURIR", "COURONNE", "COURT", "CRAIE", "CRAVATE", "CROCHET", "CUBE", "CUILLERE", "CUISSE", "CULOTTE", "CURIEUX", "CUVETTE", 
    "DAME", "DANGER", "DANS", "DANSER", "DE", "DEBORDER", "DEBOUT", "DECHIRER", "DECOLLER", "DECORER", "DECOUPAGE", "DECOUPER", "DEDANS", "DEFENDRE", "DEHORS", "DELTAPLANE", "DEMANDER", "DEMARRER", "DEMOLIR", "DEPASSER", "DERNIER", "DERRIERE", "DESCENDRE", "DESOBEIR", "DESSIN", "DESSINER", "DETRUIRE", "DEUX", "DEUXIEME", "DEVANT", "DICTIONNAIRE", "DIFFERENCE", "DIFFERENT", "DIFFICILE", "DIRE", "DIRECTEUR", "DIRECTRICE", "DISCUTER", "DISPARAITRE", "DISTRIBUER", "DIX", "DOIGT", "DOIGTS", "DOMINO", "DONNER", "DORMIR", "DOS", "DOSSIER", "DOUCHE", "DOUCHER", "DOUX", "DROIT", "DU", "DUR", 
    "EAU", "ECARTER", "ECHANGER", "ECHARPE", "ECHASSES", "ECHELLE", "ECLABOUSSER", "ECLAIRER", "ECOLE", "ECOUTER", "ECRAN", "ECRASER", "ECRIRE", "ECRITURE", "EFFACER", "EFFORT", "ELASTIQUE", "ELECTRICITE", "ELEVE", "EMMENER", "EMPORTER", "ENCORE", "ENERVE", "ENFANT", "ENFILER", "ENFONCER", "ENGIN", "ENLEVER", "ENTENDRE", "ENTONNOIR", "ENTOURER", "ENTREE", "ENTRER", "ENVELOPPE", "ENVOYER", "EPAIS", "EPAULE", "EPEE", "EQUIPE", "ESCABEAU", "ESCALADER", "ESCALIER", "ESCARGOT", "ESCARPIN", "ESSUYER", "ETAGERE", "ETANG", "ETIQUETTE", "ETROIT", "ETUDE", "ETUDIER", "EXPLIQUER", "EXTERIEUR", 
    "FABRIQUER", "FACILE", "FAIRE", "FATIGUE", "FAUTE", "FAUTEUIL", "FEE", "FENETRE", "FERMER", "FESSE", "FEU", "FEUILLE", "FEUTRE", "FICELLE", "FIL", "FILET", "FILLE", "FILM", "FINIR", "FLECHE", "FLEUR", "FLOTTER", "FOIS", "FONCE", "FOND", "FOOTBALL", "FORT", "FOUILLER", "FRAPPER", "FREIN", "FROID", "FUSEE", "FUSIL", 
    "GAGNER", "GANT", "GARAGE", "GARÇON", "GARDER", "GARDIEN", "GARE", "GAUCHE", "GENER", "GENOU", "GENTIL", "GLISSER", "GOLF", "GOMME", "GONFLER", "GOUTER", "GOUTTES", "GRAND", "GRIMPER", "GRIS", "GRONDER", "GROS", "GROUPE", "GRUE", "GYMNASTIQUE", 
    "HABIT", "HANCHE", "HANDICAPE", "HAUT", "HELICOPTERE", "HEXAGONE", "HISTOIRE", "HORLOGE", "HUIT", "HUMIDE", 
    "IDEE", "ILE", "IMAGE", "IMITER", "IMMEUBLE", "IMMOBILE", "INONDER", "INSEPARABLE", "INSTRUMENT", "INTERESSANT", "INTERIEUR", "INTRUS", 
    "JALOUX", "JAMBES", "JAUNE", "JEAN", "JEU", "JOLI", "JOUER", "JOUET", "JUPE", 
    "LAC", "LACER", "LACET", "LAINE", "LAISSER", "LARGE", "LAVABO", "LAVER", "LECTURE", "LETTRE", "LIERRE", "LIGNE", "LINGE", "LIRE", "LISSE", "LISTE", "LIT", "LITRE", "LIVRE", "LOIN", "LONG", "LUMIERE", "LUNETTES",
    "MADAME", "MAGAZINE", "MAGICIEN", "MAGIE", "MAGNETOSCOPE", "MAILLOT", "MAIN", "MAINS", "MAISON", "MAITRE", "MAITRESSE", "MAL", "MALADROIT", "MANCHE", "MANQUER", "MANTEAU", "MARCHE", "MARIONNETTE", "MARTEAU", "MATELAS", "MATERNELLE", "MELANGER", "MEME", "MENSONGE", "MESURER", "METAL", "METRE", "METTRE", "MEUBLE", "MICRO", "MIEUX", "MILIEU", "MINE", "MODELE", "MOINS", "MONTAGNE", "MONTER", "MONTRER", "MORCEAU", "MOT", "MOTEUR", "MOTO", "MOUCHOIR", "MOUFLE", "MOUILLE", "MOUILLER", "MOULIN", "MOUSSE", "MOYEN", "MUET", "MULTICOLORE", "MUR", "MUSCLE", "MUSIQUE", 
    "NAGER", "NENUPHAR", "NEUF", "NŒUD", "NOIR", "NOM", "NOMBRE", "NOUVEAU", "NU", "NUMERO", 
    "OBEIR", "OBJET", "OBLIGER", "ONGLE", "ORCHESTRE", "ORDINATEUR", "ORDRE", "OURS", "OUTIL", "OUVRIR", 
    "PAGE", "PAIRE", "PANNE", "PANTALON", "PAPIER", "PARACHUTE", "PARCOURS", "PAREIL", "PARKING", "PARLER", "PARTAGER", "PARTIR", "PAS", "PASSERELLE", "PATAUGER", "PEDALO", "PEINDRE", "PEINTURE", "PELUCHE", "PENTE", "PERCER", "PERDRE", "PERLE", "PERSONNE", "PETIT", "PEU", "PEUR", "PHOTO", "PIED", "PIEDS", "PILOTE", "PINCEAU", "PION", "PLACARD", "PLAFOND", "PLAGE", "PLANCHE", "PLÂTRE", "PLEUVOIR", "PLI", "PLIAGE", "PLIER", "PLONGEOIR", "PLONGER", "PLUIE", "PLUS", "PNEU", "POCHE", "POIGNET", "POING", "POINT", "POINTE", "POINTU", "POISSON", "POLI", "POMPIERS", "PONT", "PORTE", "PORTEMANTEAU", "PORTER", "POSER", "POSTER", "POT", "POUBELLE", "POUCE", "POUSSER", "POUVOIR", "PREMIER", "PRENDRE", "PRENOM", "PREPARER", "PRES", "PRESENT", "PRESQUE", "PRESSER", "PRETER", "PRINCE", "PRISES", "PRIVER", "PROMETTRE", "PROPRE", "PUNAISE", "PUNIR", "PUZZLE", "PYJAMA", "PYRAMIDE", 
    "QUAI", "QUATRE", "QUESTION", 
    "RACONTER", "RADIATEUR", "RADIO", "RAME", "RAMPE", "RAMPER", "RANGER", "RATER", "RAYURE", "RECEVOIR", "RECITER", "RECOMMENCER", "RECREATION", "RECULER", "REFUSER", "REGARDER", "REINE", "REMETTRE", "REMPLACER", "REMPLIR", "RENTREE", "RENTRER", "RENVERSER", "REPARER", "REPETER", "REPONDRE", "RESPIRER", "RESSEMBLER", "RESTER", "RETARD", "REUSSIR", "REVENIR", "RIDEAU", "ROBE", "ROBINET", "ROI", "ROND", "ROUE", "ROUGE", "ROULADE", "ROULER", "ROUX", "RUBAN", "RUGUEUX", 
    "SAGE", "SALADIER", "SALE", "SALLE", "SAUT", "SAUTER", "SAVON", "SCIE", "SEAU", "SEC", "SECHER", "SEMELLE", "SENS", "SENTIR", "SEPARER", "SEPT", "SERIEUX", "SERPENT", "SERRE", "SERRER", "SERRURE", "SERVIETTE", "SERVIR", "SEUL", "SIEGE", "SIESTE", "SILENCE", "SIX", "SOL", "SOLDAT", "SOLIDE", "SOMMEIL", "SONNER", "SONNETTE", "SORCIERE", "SORTIE", "SORTIR", "SOUFFLER", "SOULEVER", "SOULIGNER", "SOUPLE", "SOURD", "SOURIRE", "SOUS", "SPAGHETTI", "SPORT", "STYLO", "SUIVANT", "SUIVRE", "SUR", "SURFEUR", 
    "TABLE", "TABLEAU", "TABLIER", "TABOURET", "TACHE", "TAILLE", "TAILLER", "TALON", "TAMBOUR", "TAMPON", "TAPER", "TAPIS", "TARD", "TASSE", "TELECOMMANDE", "TELEPHONE", "TELEVISION", "TENDRE", "TENIR", "TENNIS", "TERMINER", "TETE", "TIRER", "TIROIR", "TISSU", "TITRE", "TOBOGGAN", "TOILETTE", "TOMBER", "TORDU", "TOT", "TOUCHER", "TOUR", "TOURNER", "TOURNEVIS", "TRAIN", "TRAIT", "TRAMPOLINE", "TRANQUILLE", "TRANSPARENT", "TRANSPIRER", "TRANSPORTER", "TRAVAIL", "TRAVAILLER", "TRAVERSER", "TREMPER", "TRICHER", "TRICOT", "TRIER", "TROIS", "TROISIEME", "TROMPETTE", "TROP", "TROUER", "TROUS", "TROUSSE", "TUNNEL", 
    "UN", "UNIFORME", "USE", 
    "VACHE", "VALISE", "VASE", "VEHICULE", "VENIR", "VENTRE", "VERRE", "VERS", "VERSER", "VERT", "VESTE", "VETEMENT", "VIDER", "VIRAGE", "VIS", "VITE", "VITESSE", "VITRE", "VOITURE", "VOIX", "VOLER", "VOULOIR", "VOYAGE", 
    "WAGON",
    "XYLOPHONE", 
    "ZERO", "ZIGZAG"];
let _error = 0, _maxError = 7,  _errorDisplay = "", _wordData, _wordString, _wordArray;

// =================================================
// ============ MAIN 

/**
 * Initialize the game : add events on buttons
 **/

get("#play").addEventListener("click", startGame);
get("#reload").addEventListener("click", () => { location.reload(); });

/**
 * Start the game : choose a word and display the keyboard
 **/

 function startGame() {
     // Choose a word
    _wordData = chooseWord(); 
    _wordString = _wordData[0];
    _wordArray= _wordData[1];

    // Hide buttons list
    get(".buttonList")[0].style.display = "none";
    get("#play").style.display = "none";

    // Generate the "health bar"
    get("#results").classList.add("resultsInGame");
    for (let i = 0; i < _maxError; i++) {
        _errorDisplay += "❤";
    }

    // Display the board
    generateKeyboard();
    updateGame();
    get("#footer").innerHTML = FOOTER_INGAME;
}

/**
 * Choose randomly a word in the list
 * @return {array} the word as a string, the word as an array fill with "_"
 **/

 function chooseWord() {
    // Choose randomly a word
    let nb = rand(0, WORDS.length);
    _wordString = WORDS[nb];

    // Transform the word as string in an array of underscore
    _wordArray = [];
    for (i = 0; i < _wordString.length; i++) {
        _wordArray[i] = "_";
    }
    
    return [_wordString, _wordArray];
}

/**
 * The main game function which check if the letter is correct or not and call the updateGame function
 * @param {string} letterChoosen the letter choosen which is represented by buttons in the virtual keyboard
 **/

function play(letterChoosen) {
    // First, check if the letterChoosen is in the word
    let positions = [];
    for (i = 0; i < _wordString.length; i++) {
        if (_wordString[i] == letterChoosen) {
            positions.push(i);
        }
    }

    // Then, display it and inform the user it's correct
    if (positions.length != 0) {
        for (i = 0; i < positions.length; i++) {
            _wordArray[positions[i]] = letterChoosen;
        }
        get("#" + letterChoosen).style.background = getVariableCSS("correct");
    }
    
    //Or, just inform the user it's incorrect
    else {
        _error++;
        _errorDisplay = (_errorDisplay.substring(0, _errorDisplay.length - 1)).trim();
        navigator.vibrate('300');
        get("#" + letterChoosen).style.background = getVariableCSS("incorrect");
    }

    // In every cases, disable the letter and update the board
    get("#" + letterChoosen).disabled = true;
    updateGame();
}

/**
 * Each turn update the board and check the win or the loss
 **/

function updateGame() {
    // Generate the word to guess
    let wordAsUnderscore = "";
    for (i = 0; i < _wordArray.length; i++) {
        wordAsUnderscore += _wordArray[i] + " ";
    }

    // Update the display
    get('#guess').innerHTML = wordAsUnderscore.trim();
    get('#results').innerHTML = _errorDisplay;

    // Lose
    if (_error == _maxError) {
        get('#results').style.display = "none";
        get('#guess').innerHTML = CONTENT.lost + _wordString;
        get('#keyboard').style.display = "none";
        get(".buttonList")[0].style.display = "flex";
        get('#reload').style.display = "block";
    }

    // Win
    else if (_wordArray.indexOf("_") == -1) {
        get('#results').style.display = "none";
        get('#guess').innerHTML = "<p>" + CONTENT.win_part1 + _error + CONTENT.win_part2 + "</p>";
        get('#keyboard').style.display = "none";
        get(".buttonList")[0].style.display = "flex";
        get('#reload').style.display = "block";
    }
}


/**
 * Generate and display a virtual keyboard
 **/

function generateKeyboard() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    letters.forEach(letter => {
        const keyboardButton = document.createElement("button");
        keyboardButton.innerHTML = letter;
        keyboardButton.id = letter;
        keyboardButton.classList.add("keyboardButton");
        keyboardButton.classList.add("gameButton");
        keyboardButton.addEventListener("click", () => { play(letter)});
        get("#keyboard").appendChild(keyboardButton);
    })
}