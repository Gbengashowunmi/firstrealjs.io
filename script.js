const simple = document.getElementById("simple");
const hex = document.getElementById("hex");
const button = document.getElementById("button");
const body = document.querySelector("body");
const colorName = document.getElementById("color-name");



button.addEventListener("click", ()=>{
    let simpleColors = ["Red", "Rgba(133,122,200)", "#F15025", "Green"];
    
    let color = [Math.floor(Math.random() * simpleColors.length)]
     body.style.background = simpleColors[color] ;
    

    colorName.innerHTML = "Background color : " +  simpleColors[color];
});
