var player1=Math.floor(Math.random()*6+1);
var player2=Math.floor(Math.random()*6+1);

console.log(player1+","+player2);

document.querySelector("img.image__1").setAttribute("src","images/"+player1+".png");
document.querySelector("img.image__2").setAttribute("src","images/"+player2+".png");

if(player2!==player1){
    if(player1>player2){
        document.querySelector("h1").textContent="Player 1 wins";
    }
    if(player1<player2){
        document.querySelector("h1").textContent="Player 2 wins";
    }
}
else{
    document.querySelector("h1").textContent="Draw"
}