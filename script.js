console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X";
let isgameover = false

// Function to change the turn 
const changeTurn =()=>{
    return turn === "X"? "0" : "X";
}

//Function to check for a win
const checkWin  = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 0, 5, 0],
        [3, 4, 5, 0, 15, 0],
        [6, 7, 8, 0, 25, 0],
        [0, 3, 6, -10.5, 15, 90],
        [1, 4, 7, -0.5, 15, 90],
        [2, 5, 8, 9.5, 15, 90],
        [0, 4, 8, 0, 15, 45],
        [2, 4, 6, -1, 15, 135],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerHTML === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerHTML = boxtext[e[0]].innerText + " won"
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
            document.querySelector('.line').style.width = '31vw';
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            gameover.play()
        }
            
    })
}

//Game Logic
// music.play()
let boxes = document.getElementsByClassName("box");
// music.play()
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click', (e)=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn=changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover){                
                document.getElementsByClassName("info")[0].innerText= "Turn for " + turn;
            }
        }
    })
}) 

//Add onclick listener to reset button
reset.addEventListener('click', () =>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element =>{
        element.innerText = ""
    });

    turn = "X";
    isgameover  = false 
     document.querySelector(".line").style.width = '0vw';             
    document.getElementsByClassName("info")[0].innerText= "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
     
})




// for Calculator

let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})

