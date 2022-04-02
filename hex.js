const simple = document.getElementById("simple");
const hex = document.getElementById("hex");
const button = document.getElementById("button");
const body = document.querySelector("body");
const colorName = document.getElementById("color-name");



button.addEventListener("click", ()=>{
   let alphaNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];
        
        let hash = "#";
        
         for(let i = 0; i < 6; i++) {
            let color2 = [Math.floor(Math.random() * alphaNum.length)];
           hash = hash + alphaNum[color2];}
           body.style.background = hash ;
        colorName.innerHTML = "Background color : " +  hash;
    
});

