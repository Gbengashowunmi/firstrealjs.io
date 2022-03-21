let btn = document.getElementById("button");
let body = document.getElementById("background")
let simp = document.getElementById("simp");
let hex = document.getElementById("hex");
let backgroundText = document.getElementById("backgroundtext")

let color = ['Blue', '#F15025', 'Green', 'Rgba(133,122,200)', 'Yellow', 'Red'];

let alphaNum = [0, 1, 2, 3, 4, 5, 6, 7, 8 , 9, 'A', 'B', 'C', 'D' , 'E', 'F'];

body.style.background = '#FFFFFF';

btn.addEventListener("click", function() {
    firstColor = Math.floor(Math.random() * color.length)
    body.style.background = color[firstColor]; 
    
    backgroundText.innerHTML = 'Background color :' + ' ' + color[firstColor]

})
simp.addEventListener("click", function(){
    body.style.background = '#F1f5f8';
    backgroundText.innerHTML = 'Background color :' + ' ' + '#F1f5f8';
})


hex.addEventListener("click", function(){
    let hash = '#';
    for(let i=0; i <6; i++){
    let heX = Math.floor(Math.random() * alphaNum.length);
     hash = hash + alphaNum[heX];
    }
     body.style.background = hash;
     backgroundText.innerHTML = 'Background color :' + ' ' + hash;
})
