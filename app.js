let turn = "0";

//function for change turn

const changeTurn = () => {
  if (turn === "X") {
    turn = "0";
  } else {
    turn = "X";
  }
  // return turn=== 'X' ?'0': 'X'
};

// check win

let checkWin = () => {
    let boxTexts = document.getElementsByClassName("check"); 
    let won = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    won.forEach((e) => {
        if (
            boxTexts[e[0]].innerText === boxTexts[e[1]].innerText &&
            boxTexts[e[1]].innerText === boxTexts[e[2]].innerText && 
            boxTexts[e[0]].innerText !== ""
        ) {
            document.querySelector('#h11').innerText = boxTexts[e[0]].innerText + ' won!'; // Fixed the assignment
            document.querySelector('#h22').innerText = ''; // Clear the turn message on win
            // Optionally disable further clicks or reset the game here
        }
    });

    let win = document.querySelector("#h22");
    win.innerText = `${turn}'s turn`; // Correctly set the turn message
};

// let checkWin = () => {
//   let boxTexts = document.getElementsByClassName("check");
//   let won = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   won.forEach((e) => {
//     if (
//       boxTexts[e[0]].innerText === boxTexts[e[1]].innerText &&
//       boxTexts[e[1]] === boxTexts[e[2]].innerText &&
//       boxTexts[e[0]].innerText !== ""
//     ) { 
//         document.querySelector('#h11').innerText = boxTexts[e[0]].innerText + 'won'  ;
//     }
//   });

//   let win = document.querySelector("#h22");
//   win.innerHTML = `${turn}'s turn `;
// };

// game logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((box) => {
  let boxText = box.querySelector(".check");
  box.addEventListener("click", () => {
    if (boxText.innerText === "") {
      boxText.innerText = turn;
      changeTurn();
      checkWin();
    }
      });
});


function restart(){
   let blank = document.getElementsByClassName('check')
   Array.from(blank).forEach(e=>{
    e.innerText=''

   })
   document.getElementById('h11').innerHTML='start new game'

}
