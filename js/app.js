const game = {
    lives: 12,
    currSentence: '',
    currSplitedSentense: '',
    sentences: ['pickle','password','herkules','terminator','andrew','monkey','television','basketball','soccer','baseball','tennis',
                'football','boxing','dragon','magic','bowling', 'internet','wonderwoman','apple', "pizza", "meat", "rice", "cake",
                "sandwich", "bean",'banana','keyboard', "variable", "scope", "hoisting", "method", "prototype", "object", "boolean", 
                "number", "string", "undefined","hiv",'hallucinations','gorilla','helicopter','mountain','horse','chocolate',
                'serpent',"alien", "dirty", "gladiator", "nemo", "jaws","humor", "miniature", "creepy", "fact", "risk","verse", "land",
                "holiday", "glorious", "brake", "pretty","ignore", "certain",  "dress", "true",  "observation", "action", "various",
                "want", "direful", "suck", "dress", "scarecrow", "judge", "fierce", "love", "arrest","serve", "fit", "hug", "curve",
                "eatable", "race", "innocent", "open", "steady", "acoustics","lock", "field",  "rifle", "learned", "toe", "flow",
                "competition","match","male", "smile", "dull", "food", "bell",  "strengthen", "responsible","enchanting", "switch", 
                "idea", "nine", "pig", "bat", "dear", "train", "frog", "lonely", "hurry", "natural", "sun", "snow", "broken", "friend",
                "bright", "cake", "sour","economic", "lovely", "quick", "van", "business", "adjustment", "blushing","slippery", "load",
                "winter", "exist", "tongue", "country", "roll", "fast", "possess", "pass", "books", "hospitable", "dust", "naughty", 
                "produce","stick", "ear", "copy", "friendly", "press", "vegetable", "venomous","statement", "spell", "square", "taste",
                "great", "thumb", "chilly", "test", "ancient","green", "badge", "work", "repeat", "free", "elderly", "doctor", 
                "difficult", "turn", "thunder", "cherries", "rest", "plan", "crime", "sticks", "wealthy", "phone", "suspend",
                "fence", "note", "wall", "interest","jump", "enchanted", "funny", "polish", "elbow", "smart", "crowd","eggs", 
                "detailed", "veil", "coal"
                ],
    correctLetter: [],
    incorrectLetters: [],

    eleSentence: document.querySelector('.sentence'),
    eleLives: document.querySelector('.lives'),
    eleLetters: document.querySelector('.letters'),
    eleText: document.querySelector('.final-text'),
    // canvas: document.getElementById('stickman'),
    // ctx: canvas.getContext('2d'),
 
    generateButtons () {
        const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
        let self = this;
        alphabet.forEach(letter => {
            const button = document.createElement('button');
            button.classList.add('letter');
            button.type = 'button'
            button.innerHTML = letter
            self.eleLetters.appendChild(button)
        });
    },
    
    btnsOnClick () {
        let self = this    
        this.eleLetters.addEventListener('click', function(e) { 
            if (e.target.classList.contains('letter')) {
                const letter = e.target.innerHTML
                self.checkLetter(letter);
                e.target.disabled = true;
            }
        });
    },

    randomSentence () {
        this.currSentence = this.sentences[Math.floor(Math.random()*this.sentences.length)];
        console.log(this.currSentence);

        this.currSplitedSentense = this.currSentence.split('')
        this.eleSentence.innerHTML = '';
       
        let splitedWord = this.currSplitedSentense
        splitedWord.forEach(e => {
            const box = document.createElement('div');
            box.classList.add('letter-box');
            if (splitedWord[e] === ' ') {
                div.classList.add('space-btw-letter')
            }
            this.eleSentence.appendChild(box);
        })
    },

    checkLetter (e) {
        if(this.currSentence.indexOf(e) === -1){
            this.incorrectLetters.push(e);
            this.lives--;
            this.eleLives.innerHTML--;
            console.log(this.incorrectLetters);
            
        } 
        if (this.lives === 0) {
            this.gameOver();
         
        }
    
        if (this.currSentence.indexOf(e) !== -1) { 
            for (let i=0; i<this.currSentence.length; i++) {
                if (this.currSentence[i] === e) {
                    this.eleSentence.querySelectorAll('.letter-box')[i].innerHTML = e; 
                    this.correctLetter.push(e)          
                } 
                if (this.correctLetter.length === this.currSentence.length) {
                    this.gameComplete();
                  
                }
            }
        }
    },

    showLives () {
        this.eleLives.innerHTML = this.lives;
    },
    buttonON () {
        const buttons = this.eleLetters.querySelectorAll('.letter');
        buttons.forEach(e => {
            e.disabled = false;
        })
    },
    buttonOFF () {
        const buttons = this.eleLetters.querySelectorAll('.letter');
        buttons.forEach(e => {
            e.disabled = true;
        })
    },

    gameComplete () {
        this.eleText.innerHTML = "YOU WIN, GRATULATION!";
        this.buttonOFF();
        
    },

    gameOver () {
        this.eleText.innerHTML = "YOU LOOSE, THE SENTENCE WAS: " + this.currSentence.toUpperCase();
        this.buttonOFF();
    },
    
    startGameBtn () {
        this.lives = 12;
        this.randomSentence();
        this.showLives();
        this.buttonON();
        this.eleText.innerHTML = ' ';
        this.correctLetter = [];
        this.incorrectLetters = [];
    },

    gameBoard () {
        this.generateButtons();
        this.btnsOnClick();
        this.buttonOFF();
    }
};

    game.gameBoard();

document.querySelector('.game-start-btn').addEventListener('click', function() {
    game.startGameBtn(); 
});




