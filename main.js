/*
 GAME FUNCTION:
 - Player must guess a number between 1 and 10
 - Player get a certain amount of guesses
 - Notify Player of guess remaining
 - Notify player of the correct answer if loose 
 - Let player choose to play again
 */

 //Game values
 let min = 1,
     max = 10,
     winningNum = getRandomNum(min,max),
     guessesLeft =3;

 //UI Elements
 const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum  = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      messageOut=document.querySelector('.message');

//Assign MIN and MAX numbers      
   minNum.textContent = min;
   maxNum.textContent = max;

//Play again event
game.addEventListener('mousedown',function(e){
  // console.log(1)
  if(e.target.className==='play-again'){
   window.location.reload();
  }
})   

//Button event

guessBtn.addEventListener('click',function(e){
  e.preventDefault()
  let guess = parseInt(guessInput.value);
  //Validate input
  if(isNaN(guess) || guess<min||guess>max){
    setMessage(`Please enter a number betweeen ${min} and ${max}`,'red');
  }
  else{

  }

  //Check if won 
  if(guess=== winningNum){
    //Game over - won 
    gameOver(true,`${winningNum} is correct! YOU WIN`);

    //disable input
    // guessInput.disabled = true; 
    //  guessInput.style.borderColor='green';
    //  //Set win message
    //  setMessage(`${winningNum} is correct! YOU WIN`,'green')
  }else{
    //Wrong number
    guessesLeft = guessesLeft -1;
    if(guessesLeft===0){
      gameOver(false,`Game over!!!You lost.The correct number was ${winningNum}`)
      //Game over.Lost
      // guessInput.disabled = true; 
      // guessInput.style.borderColor='red';
      // //Set win message
      // setMessage(`Game over!!!You lost.The correct number was ${winningNum}`,'red')

    }else{
      //Game continues - answer wrong
      guessInput.style.borderColor='red';

      //Clear input
      guessInput.value = '';
     setMessage(`${guess} is not correct,${guessesLeft} guesses left`,'red')
    }
  }
});
//Game over function

function gameOver(won,msg) {

  let color;
  won === true? color ='green': color='red';

  guessInput.disabled = true; 

  guessInput.style.borderColor=color;

  messageOut.style.color=color;
     //Set win message
     setMessage(msg)

  //Play again  
  guessBtn.value = 'Play again' ;
  guessBtn.className = 'play-again'
  
}
//Get Winning Number
function getRandomNum(min,max){
return Math.floor(Math.random()*(max-min+1)+min)
}

function setMessage(msg,color){
  messageOut.style.color=color;
  messageOut.textContent = msg;
  // guessInput.style.borderColor='red';
  // guessInput.value='';
}
