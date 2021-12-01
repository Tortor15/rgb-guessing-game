let pickedColor;
let numSquares = 6;
let colors = [];
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset")
let colorDisplay = document.getElementById("colorDisplay");
let message = document.querySelector("#message");
let squares = document.querySelectorAll(".square");
let easybtn = document.querySelector("#easyBtn");
let hardbtn = document.querySelector("#hardBtn");
let modeButton = document.querySelectorAll(".mode");

init();
function init(){
	//mode button event listeners
	for(let i = 0; i<modeButton.length; i++){
    modeButton[i].addEventListener("click", function(){
        modeButton[0].classList.remove("selected");
		 modeButton[1].classList.remove("selected");
		 modeButton[2].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent==="Easy"){
			numSquares=3;
		}
		if(this.textContent==="Medium"){
			numSquares = 6;
		}
		if(this.textContent==="Hard"){
			numSquares=9;
		}
		
        
        reset();

    });
  

}
//squares event listeners
for(let i = 0; i < squares.length; i++){

    squares[i].addEventListener("click" , function(){
       let clickedColor = this.style.backgroundColor;
       if(clickedColor === pickedColor){
           message.textContent = "Correct!";
           resetButton.textContent = "Play Again?";
           changeColor(clickedColor);
           h1.style.backgroundColor = pickedColor;

       }else{
           this.style.backgroundColor ="#232323";
           message.textContent = "Try Again";
       }
       
	});
	reset();
}
}




function reset(){
    colors = generateRandomColors(numSquares);
    pickedColor= pickColor();
    colorDisplay.textContent= "";
    resetButton.textContent = "New Color"
    colorDisplay.textContent=pickedColor;
    //reflect color to page
    for(let i = 0; i < squares.length; i++){
        if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.backgroundColor=colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
    }
    h1.style.backgroundColor = "";
}

resetButton.addEventListener("click", function(){
reset();
});
    



colorDisplay.textContent = pickedColor;






function changeColor(color){
    for(let i = 0; i< squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
  let random = Math.floor(Math.random() * colors.length);
  return  colors[random];
}

function generateRandomColors(num){
    let arr = [];
for( let i = 0; i< num; i++){
    arr.push(randomColor());
    }
return arr;
}




  function randomColor(){
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return "rgb(" + r + ", "+ g + ", "+ b +")";
    }

