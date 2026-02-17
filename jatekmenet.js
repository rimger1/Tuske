const element1 = document.getElementById("balKarakter");
const element2 = document.getElementById("jobbKarakter");


const karakternev= document.getElementById("karakterNev");
const cutszoveg= document.getElementById("karakterSzoveg");
const tovabbgomb=document.getElementById("tovabbgomb");

const elsoValaszthato= document.getElementById("elsoValaszthato");
const masodikValaszthato= document.getElementById("masodikValaszthato");
const harmadikValaszthato= document.getElementById("harmadikValaszthato");

const hatter=document.getElementById("jatektest");

const valaszto=document.getElementById("valaszto");
const item=document.getElementById("hasznaltitem");

valasztas();

function tgombnyom(){


}

function elsoani(){
    storytelling();
}

  

function storytelling()
    {
        console.log("storytelling");
        elsoValaszthato.style.visibility = "hidden";
        masodikValaszthato.style.visibility = "hidden";
        harmadikValaszthato.style.visibility = "hidden";
        cutszoveg.style.visibility = "visible";
        item.style.visibility="hidden";
        valaszto.style.visibility = "hidden";
        tovabbgomb.style.visibility = "visible";
    }
function valasztas()
    {
        elsoValaszthato.style.visibility = "visible";
        masodikValaszthato.style.visibility = "visible";
        harmadikValaszthato.style.visibility = "visible";
        cutszoveg.style.visibility = "hidden";
        item.style.visibility="visible";
        valaszto.style.visibility = "visible";
        tovabbgomb.style.visibility = "hidden";
    }
        


function elsova() {
    
    elsoValaszthato.style.visibility = "hidden";
    masodikValaszthato.style.visibility = "hidden";
    harmadikValaszthato.style.visibility = "hidden";

}
function masodikva() {
    
    elsoValaszthato.style.visibility = "hidden";
    masodikValaszthato.style.visibility = "hidden";
    harmadikValaszthato.style.visibility = "hidden";
    
}
function harmadikva() {
   
    elsoValaszthato.style.visibility = "hidden";
    masodikValaszthato.style.visibility = "hidden";
    harmadikValaszthato.style.visibility = "hidden";
    
}