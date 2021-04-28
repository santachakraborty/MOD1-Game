
// alert("hello")


const obox_text="0";
const xbox_text="X";
let current_player= obox_text;
let Player1, Player2;
// let winner;
let empty_boxes=[];
let count=0;

let gameOver=false;




function data(event){
      
  if(gameOver){
    console.log('gameOver');
    return;
    
  }
      console.log("box clicked");  //just for checking purpose on console
      
      const id=event.target.id;   // storing index nos for every call
      console.log(id);

      if(!empty_boxes[id]){
      
         empty_boxes[id]=current_player;    //updating the value of empty_spaces array with current_player value
         event.target.innerHTML = current_player;  //updating the box with current player
         count++;
         //setting the new value for current player, but we need to check first the current player is winner or not

           if(playerHasWon()){
              if(current_player === obox_text){
                 document.getElementById("status").innerHTML='Player1 is the winner';
                 gameOver=true;
                 return;
              }else{
                 document.getElementById("status").innerHTML='Player2 is the winner';
                 gameOver=true;
                 return;
              }
              
           }

           if(current_player === obox_text){
                current_player = xbox_text;
           }else{
              current_player = obox_text;
           }

          if(count===9){
              document.getElementById("status").innerHTML='Draw';
              gameOver=true;
          }
      }
  };
   
  function playerHasWon(){
      //checking with 0th element
      if(empty_boxes[0]===current_player){
         if(empty_boxes[1] ===current_player && empty_boxes[2] ===current_player){
           console.log(`${current_player} winner`);
           return true;
          }
         if(empty_boxes[3] ===current_player && empty_boxes[6] ===current_player){
            console.log(`${current_player} winner`);
            return true;
         }
         if(empty_boxes[4] ===current_player && empty_boxes[8] ===current_player){
             console.log(`${current_player} winner`);
             return true;
         }
      }
     //checking with index 4th element
      if(empty_boxes[4] === current_player){
         if(empty_boxes[1] === current_player && empty_boxes[7] === current_player){
            console.log(`${current_player} winner`);
             return true;
         }
         if(empty_boxes[3] === current_player && empty_boxes[5] === current_player){
            console.log(`${current_player} winner`);
            return true;
         }
         if(empty_boxes[2] === current_player && empty_boxes[6] === current_player){
             console.log(`${current_player} winner`);
             return true;
         }
      }
      //checking with index 8th element
      if(empty_boxes[8] === current_player){
         if(empty_boxes[6] === current_player && empty_boxes[7] === current_player){
            console.log(`${current_player} winner`);
            return true;
         }
         if(empty_boxes[2] === current_player && empty_boxes[5] === current_player){
             console.log(`${current_player} winner`);
             return true;
         }
      }
  };


function restartGame(){
   count=0;
  //  empty_boxes.forEach(box => {box.innerHTML=''})

  let boxes=document.getElementsByClassName("box");
  for(let i=0; i<boxes.length; i++){
    boxes[i].innerHTML='';
  }
   console.log(empty_boxes);
   empty_boxes=[];
   gameOver=false;
  
   
  document.getElementById("status").innerHTML='Play';
   current_player=obox_text;
      
}
document.getElementById("restart-btn").addEventListener("click",restartGame);
restartGame();
   
