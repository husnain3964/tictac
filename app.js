
let turn = "x"

const box= document.getElementsByClassName('box')
function  hello() {
 
if (turn=="0"){
    turn="x"
}else{
    turn='0'
}

function changeTurn(turn) {
  const headinggg= document.getElementById("h22")
 headinggg.textContent=`turn is ${turn}`
}
changeTurn(turn)
console.log(turn);

}


function mainLogic(){
    const newArr= Array.from(box)
console.log(newArr);
}
mainLogic()











function colooor() {
    let col = document.getElementById('restart');
     col.addEventListener("click" ,() => {
        col.style.Color = "red"
        console.log('hello');
    })
    
}
colooor()

