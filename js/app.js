const game = {
    lives: 5,
    currSentence: '',
    currSplitedSentense: '',
    sentences: ['pickle','password','herkules','terminator','andrew','monkey',],
    correctLetter: [],
    incorrectLetters: [],

    eleSentence: document.querySelector('.sentence'),
    eleLives: document.querySelector('.lives'),
    eleLetters: document.querySelector('.letters'),
    eleText: document.querySelector('.final-text'),
 
    generateButtons () {
        const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
        let self = this;
        alphabet.forEach(letter => {
            const button = document.createElement('button');
            button.classList.add('letter');
            button.type = 'button'
            button.innerHTML = letter;
            self.eleLetters.appendChild(button)
        });
    },
    
    btnsOnClick () {
        let self = this    
        this.eleLetters.addEventListener('click', function(e) {  
            const letter = e.target.innerHTML
            self.checkLetter(letter);
            e.target.disabled = true;
            
        });
    },

    checkLetter (e) {
        if(this.currSentence.indexOf(e) === -1){
            this.incorrectLetters.push(e);
            this.lives--;
            this.eleLives.innerHTML--;
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
  
   
    randomSentence () {
        this.currSentence = this.sentences[Math.floor(Math.random()*this.sentences.length)];
        console.log(this.currSentence);

        this.currSplitedSentense = this.currSentence.split('')
        console.log(this.currSplitedSentense);
        
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
        this.eleText.innerHTML = "YOU WIN, GRATULATION!" + this.currSentence;
        this.buttonOFF();
        
    },

    gameOver () {
        this.eleText.innerHTML = "YOU LOOSE, THE SENTENCE WAS: " + this.currSentence;
        this.buttonOFF();
    },
    
    startGameBtn () {
        this.lives = 5;
        this.randomSentence();
        this.showLives();
        this.buttonON();
        this.eleText.innerHTML = '';
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




