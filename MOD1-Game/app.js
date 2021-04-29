
// alert("hello")


const obox_text="O";
const xbox_text="X";
let current_player= xbox_text;

let Player1, Player2;
// let empty_boxes=[];
let empty_array=[];
let count=0;
var counterPlayer1=0;
var counterPlayer2=0;

let gameOver=false;

function data(event){
      
    if(gameOver){     
       console.log('gameOver');
       return;
    }
    console.log("box clicked");  
    const id=event.target.id;   // storing index nos for every call
    console.log(id);

    if(!empty_array[id]){
      
          empty_array[id]=current_player;    //updating the value of empty_spaces array with current_player value
          event.target.innerHTML = current_player;  //updating the box with current player
          count++;                 
          

          if(playerHasWon()){
              if(current_player === xbox_text){
                  counterPlayer1++;
                  document.getElementById("status").innerHTML='Player 1 is the winner';
                  document.getElementById("player1").innerHTML='Player 1 scored:'+ counterPlayer1;
                  gameOver=true;
                  return;
               }else{
                 counterPlayer2++;
                 document.getElementById("status").innerHTML='Player 2 is the winner';
                 document.getElementById("player2").innerHTML='Player 2 scored:'+ counterPlayer2;
                 gameOver=true;
                 return;
               }
          }
          if(current_player === xbox_text){
                current_player = obox_text;
          }else{
              current_player = xbox_text;
          }

          if(count===9){
              document.getElementById("status").innerHTML='Tie';
              gameOver=true;
          }
      }
  }
   
   function playerHasWon(){
      //checking with 0th element
      if(empty_array[0]===current_player){
          if(empty_array[1] ===current_player && empty_array[2] ===current_player){

             document.getElementById("0").style.color="red";
             document.getElementById("1").style.color="red";
             document.getElementById("2").style.color="red";
             console.log(`${current_player} winner`);
             return true;
          }
          if(empty_array[3] ===current_player && empty_array[6] ===current_player){

             document.getElementById("0").style.color="red";
             document.getElementById("3").style.color="red";
             document.getElementById("6").style.color="red";
             console.log(`${current_player} winner`);
             return true;
          }
          if(empty_array[4] ===current_player && empty_array[8] ===current_player){

             document.getElementById("0").style.color="red";
             document.getElementById("4").style.color="red";
             document.getElementById("8").style.color="red";
             console.log(`${current_player} winner`);
             return true;
          }
      }
     
      if(empty_array[4] === current_player){
         if(empty_array[1] === current_player && empty_array[7] === current_player){

            document.getElementById("4").style.color="red";
            document.getElementById("1").style.color="red";
            document.getElementById("7").style.color="red";
            console.log(`${current_player} winner`);
             return true;
         }
         if(empty_array[3] === current_player && empty_array[5] === current_player){

             document.getElementById("4").style.color="red";
             document.getElementById("3").style.color="red";
             document.getElementById("5").style.color="red";
             console.log(`${current_player} winner`);
             return true;
         }
         if(empty_array[2] === current_player && empty_array[6] === current_player){

             document.getElementById("4").style.color="red";
             document.getElementById("2").style.color="red";
             document.getElementById("6").style.color="red";
             console.log(`${current_player} winner`);
             return true;
         }
      }
      //checking with index 8th element
      if(empty_array[8] === current_player){
          if(empty_array[6] === current_player && empty_array[7] === current_player){

             document.getElementById("8").style.color="red";
             document.getElementById("6").style.color="red";
             document.getElementById("7").style.color="red";
             console.log(`${current_player} winner`);
             return true;
          }
          if(empty_array[2] === current_player && empty_array[5] === current_player){

              document.getElementById("8").style.color="red";
              document.getElementById("2").style.color="red";
              document.getElementById("5").style.color="red";
              console.log(`${current_player} winner`);
              return true;
          }
       }
   }


 function restartGame(){
      count=0;

      let boxes=document.getElementsByClassName("box");
      for(let i=0; i<boxes.length; i++){
          boxes[i].innerHTML='';
          boxes[i].style.color="black";
      }
      // console.log(empty_array);
       empty_array=[];
       gameOver=false;
  
       document.getElementById("status").innerHTML="Let's Play";
       current_player=xbox_text;
      
  }

   function resetScore(){
   
        counterPlayer1=0;
        counterPlayer2=0;
        console.log(counterPlayer1);
        console.log(counterPlayer2);
        document.getElementById("player1").innerHTML='Player 1 scored:'+ counterPlayer1;
        document.getElementById("player2").innerHTML='Player 2 scored:'+ counterPlayer2;
}


