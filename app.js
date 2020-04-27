let music = document.querySelectorAll("audio");
let tile = document.querySelectorAll(".tile");

tile.forEach( (ele , index)=> {
    ele.addEventListener("click" , () =>{
        music[index].currentTime=0;
        music[index].play();
    });
});