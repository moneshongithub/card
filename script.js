var btn = document.querySelector("button");
var flag = 0;
btn.addEventListener("click",function(){
    if(flag === 0){
        document.querySelector("h4").textContent = "Friends";
        document.querySelector("h4").style.color = "rgb(75, 184, 75)"; //green

        document.querySelector("button").textContent = "remove friend";
        document.querySelector("button").style.backgroundColor  = "rgb(200, 33, 33";  // red
        flag = 1;

    }
    else{
        document.querySelector("h4").textContent = "Stranger";
        document.querySelector("h4").style.color = "rgb(200, 33, 33";  //red

        document.querySelector("button").textContent = "Add friend";
        document.querySelector("button").style.backgroundColor  = 'rgb(64, 111, 200'; //blue
        flag = 0;
    }
}
)