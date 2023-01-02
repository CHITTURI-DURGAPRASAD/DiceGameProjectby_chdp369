

var rendom1 = Math.floor(Math.random() * 6)+1;
var rendom2 = Math.floor(Math.random() * 6)+1;
var rendomImg1 = "DiceImages/diceFace"+rendom1+".png"
var rendomImg2 = "DiceImages/diceFace"+rendom2+".png"


function winer()
{
    image();
    
   if(rendom1 > rendom2)
    {
    document.querySelector("h1").innerHTML=" Player-1 won🏆Congratulations...!";
    }
    else if(rendom1 === rendom2)
    {
    document.querySelector("h1").innerHTML="Draw"
    }
    else 
    {
        document.querySelector("h1").innerHTML=" Player-2 won🏆Congratulations...!"
    } 
}

function image() 
{
    document.querySelector(".img1").setAttribute("src", rendomImg1);
    document.querySelector(".img2").setAttribute("src", rendomImg2);
}

winer();

 function refreshPage()
 {

  window.location.reload();
    
 } 
