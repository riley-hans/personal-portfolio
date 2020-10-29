let flip = document.querySelector("#flip")
let HT = document.querySelector(".HT");
let randomNum = Math.floor(Math.random());

function getRandom(){
    return Math.floor(Math.random()* 2)
}


for(var i = 0; i < 1; i++){
    flip.addEventListener("click", function(){
     console.log(getRandom());
     if(getRandom() != 1){
         HT.textContent = "Heads"
     } else{
         HT.textContent = "Tails"
     }
    })
}
