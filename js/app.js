/*
 * Create a list that holds all of your cards
 */
let count=0 , clickCount=0 ,winCount=0, sec=0, clear, incrementalTime = 0;




checkArray = []
const moves = document.querySelector('.moves');
  // to rest all stars
const stars = document.querySelector('.stars');
const scorePanel = document.querySelector('.score-panel');
const mm = document.querySelector('.deck');
const time = document.querySelector('.time');


innerHtmlArray=[]
for (let i=0; i<16; i++){
    innerHtmlArray[i]= mm.children[i].innerHTML
}
function rand(){ 
    shuffle(innerHtmlArray)
    for (let i=0; i<16; i++){
        mm.children[i].innerHTML=  innerHtmlArray[i] 
    }
}


function res(){
    for (const child of mm.children) {
        child.className = 'card'
       // console.log(child);
        
      }
    clickCount=0
    winCount=0
    moves.textContent=clickCount
    rand()
    incrementalTime = 0
    time.textContent='00:00:00'
    clearInterval(clear)
    checkArray.pop()

  
    stars.innerHTML='<li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li>'
    }

const restart = document.querySelector('.restart');
restart.addEventListener('click', function res1(){
    res();
    
    })
res(); // call the function at the first time
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// shuffling the card
shuffle(mm.childNodes)



/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */



mm.addEventListener("click", function myFunction(e) {

    if (e.target.className == 'card'){
    // finding the class name
       
        if (count <2){
        checkArray[count] = e.target;
        e.target.className = 'card open show'
        count++;
        starRating()   // calling Star Functions to start rating 
        }
        if (count == 2){

            if (checkArray[0].children[0].className == checkArray[1].children[0].className){
                checkArray[0].className = 'card match'
                checkArray[1].className = 'card match'
                count=0;
                winCount++
                if (winCount == 8) {
                    setTimeout(function delay(){
                        let myModal = document.getElementById("exampleModalLong")
                        let str='Congratulations! You Won!' + '<br>' + 'It took you '+ time.textContent +' to match all cards *_*' + '<br>' + 'You got '+ stars.childElementCount +' star/s' + '<br>'+'Press anywhere to replay:)' 
                        const modal = document.querySelector('.modal-body');
                        modal.innerHTML=str
                        $(myModal).modal("toggle")
                        res()
                    },500)
                    

            
            
                } 

            }
            else{
                // Hide when it is not match
                setTimeout(function delayHiding(){
                    
                    checkArray[0].className = 'card'
                    checkArray[1].className = 'card'
                    count=0;
                    
                },500)
            }
            
        }

    }

    
    

  });

  
  function starRating(){
    
    clickCount++
    if (clickCount==1){clear= setInterval(function f(){
        incrementalTime++
        let hours = Math.floor(incrementalTime / 10 / 60 / 60) % 60;
        let minutes = Math.floor(incrementalTime / 10 / 60) % 60;
        let seconds = Math.floor(incrementalTime / 10) % 60;
        
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        if (hours < 10) {
            hours = "0" + hours;
        }
        time.textContent=hours + ":" + minutes + ":"  + seconds;
    
    
    }, 100)} // timing start after first click and cleard when the playerd won or when the reset button clicked
    if (clickCount % 2 ==0){
        
        moves.textContent=(clickCount/2)}
    
     if (clickCount == 25){
         stars.firstElementChild.remove()
     }
     else if (clickCount == 30){
         stars.firstElementChild.remove()
     }
   
  }


    function timeCal(){
    let incrementalTime = 0
    setInterval(function f(){
    incrementalTime++
    let hours = Math.floor(incrementalTime / 10 / 60 / 60) % 60;
    let minutes = Math.floor(incrementalTime / 10 / 60) % 60;
    let seconds = Math.floor(incrementalTime / 10) % 60;
    
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    time.textContent=hours + ":" + minutes + ":"  + seconds;


}, 100)}










