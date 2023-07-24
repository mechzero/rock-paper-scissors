
// let score be grabbed from local storage and parsed into JSON.
// if the score value is null, or false, the set it using the || to a default value
        let score = JSON.parse(localStorage.getItem('score')) || {
            wins: 0,
            losses: 0,
            ties: 0
        };

        updateScoreElement();
       
           
// Leaving this here for reference because we can shorten this by using the || operator
        // if (score === null) {

        //    score = {
        //     wins: 0,
        //     losses: 0,
        //     ties: 0
        // };

        // }

        let game = JSON.parse(localStorage.getItem('game'));

        if (game === null){

           game = {
          numberOfGames: 0
        };

        }
       

        console.log(localStorage.getItem('score'));
        console.log(localStorage.getItem('game'));

        JSON.parse(localStorage.getItem('score'));


        function playGame(playerMove) {

            const computerMove = pickComputerMove();

            let result = '';

            if (playerMove === 'scissors'){

              if (computerMove === 'rock'){
            result = 'You Lose.'

            } else if (computerMove === 'paper'){
            result = 'You Win.'
            } else if ( computerMove === 'scissors'){
            result = 'Tie.'
            }

            } else if(playerMove === 'paper') {

                      if (computerMove === 'rock'){
            result = 'You Win.'

            } else if (computerMove === 'paper'){
              result = 'Tie.'
            } else if ( computerMove === 'scissors'){
              result = 'You Lose.'
            }

            } else if (playerMove === 'rock'){
                      if (computerMove === 'rock'){
            result = 'Tie.'

            } else if (computerMove === 'paper'){
              result = 'You Lose.'
            } else if ( computerMove === 'scissors'){
              result = 'You Win.'
     }
            }

            let gamesPlayed = game.numberOfGames++ + 1;
            document.querySelector('.js-total').innerHTML = `Games played: ${gamesPlayed}`;
            

            if (result === 'You Win.') {
             score.wins = score.wins + 1; 
            
          
            } else if ( result === 'You Lose.'){
              score.losses = score.losses + 1;
             
            } else if (result === 'Tie.'){
              score.ties = score.ties + 1; 
             
            }
       //     Local Storage! name , value
            localStorage.setItem('score' , JSON.stringify(score)); 
            localStorage.setItem('game', JSON.stringify(game));

            updateScoreElement();
          //  updateResultElement();
          document.querySelector('.js-result').innerHTML = 
            `${result}`;

           // updateMoveElement();
          //  document.querySelector('.js-move').innerHTML 
          // = `You ${playerMove}. - ${computerMove} Computer`;
          document.querySelector('.js-move').innerHTML 
          = ` You 
        <img src="images/${playerMove}-emoji.png"
        class="move-icon">
        <img src="images/${computerMove}-emoji.png"
        class="move-icon">
        Computer`;

        
            // alert(`You picked ${playerMove}. The computer picked ${computerMove}. ${result} 
            // \n Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}
            // \n  Total Games Played:  ${game.numberOfGames}
            // `);

            
            console.log(' What is currently in score: '  + JSON.stringify(score) );
            console.log(' What is currently in game: '  + JSON.stringify(game) );
        }

        function updateMoveElement() {
          document.querySelector('.js-move').innerHTML 
          = ` You 
        <img src="images/${playerMove}-emoji.png"
        class="move-icon">
        <img src="images/${computerMove}-emoji.png"
        class="move-icon">
        Computer`;
        }

        function updateResultElement() {
            document.querySelector('.js-result').innerHTML = 
            `${result}`;
        }


        function updateScoreElement() {

          document.querySelector('.js-score').innerHTML 
          = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

        }

function pickComputerMove () {

  let computerMove = '';
  
  const randomNumber = Math.random();
   

     if (randomNumber >= 0 && randomNumber < 1/3){
       computerMove = 'rock';;
     } else if ( randomNumber >= 1/3 && randomNumber < 2/3) {
       computerMove = 'paper';
     } else if (randomNumber >= 2/3 && randomNumber < 1) {
       computerMove = 'scissors';
     }

   //  console.log(computerMove);
  
  return computerMove;
  

}

function resetScore () {
  score.losses = 0;
      score.wins = 0;
      score.ties = 0;
     game.numberOfGames = 0; 

      alert(`Score Was Reset: Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties} 
      \n Games: ${game.numberOfGames}`);

      localStorage.clear();
      updateScoreElement()
     // localStorage.removeItem()

      // ${game.numberOfGames}
}

// function numberOfGamesPlayed() {
//  totalGamesPlayed = totalGamesPlayed.totalNumberOfGames + 1; 
// }
