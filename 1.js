const colors = ["green","red","yellow","orange","rgba(133,122,200)","#f15025"];
const btn = document.querySelector("#btn");   //and also use document.getElementById
const color = document.querySelector(".color");

btn.addEventListener("click",function(){
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}