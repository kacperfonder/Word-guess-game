const game = {
    lives: 8,
    currSentence: '',
    currLetter: '',
    sentences: ['Im a Pickle', 'password', 'herkules', 'terminator'],
   

    eleSentence: document.querySelector('.sentence'),
    eleLives: document.querySelector('.lives'),
    eleLetters: document.querySelector('.letters'),
 
    generateButtons () {
        const alphabet = ['a','b','c','d','e','f','g','h','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    
        let self = this;
        alphabet.forEach(letter => {
            const button = document.createElement('button');
            button.classList.add('letter');
            button.type = 'button'
            button.innerHTML = letter;
            // button.dataset.letter = letter;
            self.eleLetters.appendChild(button)
        });
    },

    btnsOnClick () {
        this.eleLetters.addEventListener('click', function(e) {
                // const letter = e.target.dataset.letter;
                const letter = e.target.innerHTML
                e.target.disabled = true;
                console.log(letter);
        });
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
document.querySelector('.game-start-btn').addEventListener('click', function() {
    game.gameBoard(); 
});




