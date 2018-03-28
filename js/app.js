const game = {
    lives: 8,
    currSentence: '',
    currSplitedSentense: '',
    sentences: ['Pickle','password','herkules','terminator'],
   

    eleSentence: document.querySelector('.sentence'),
    eleLives: document.querySelector('.lives'),
    eleLetters: document.querySelector('.letters'),
 
    generateButtons () {
        const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    
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
        this.eleLetters.addEventListener('click', function(e) {        
                const letter = e.target.innerHTML
                e.target.disabled = true;
                console.log(letter);
        });
    },
    showLives () {
        this.eleLives.innerHTML = this.lives;
         
    },
    randomSentence () {
        this.currSentence = this.sentences[Math.floor(Math.random()*this.sentences.length)];
        console.log(this.currSentence);
        
        this.currSplitedSentense = this.currSentence.split('');
        console.log(this.currSplitedSentense);
        
        let splitedWord = this.currSplitedSentense;
        splitedWord.forEach(e => {
            const box = document.createElement('div');
            box.classList.add('letter-box');
            if (splitedWord[e] === ' ') {
                div.classList.add('space-btw-letter')
            }
            this.eleSentence.appendChild(box);
        })
    },
    
    startGameBtn () {
        this.lives = 8;
        this.randomSentence();
        this.showLives();
    },

    gameBoard () {
        this.generateButtons();
        this.btnsOnClick();
    }
};
    game.gameBoard();

document.querySelector('.game-start-btn').addEventListener('click', function() {
    game.startGameBtn(); 
});




