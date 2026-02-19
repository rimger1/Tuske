const element1 = document.getElementById("balKarakter");
const element2 = document.getElementById("jobbKarakter");

let szoveg = "Fhuu... +Szét megy a fejem... +Mi történt az este? +Mennyi az idő egyáltalán? +Bakker jól ellehettünk... (buli jelenet) +Hol van Tüske amúgy? Sehol se látom... +Asszem együtt jöttünk haza, mert emlékszek, hogy elhányta magát a konyhában. +Merre van ez a gyerek? Felhívom. +*Távoli csörgés* +Ez a csávó most vagy itt van, vagy itthagyta a telóját. +Na megnézem mizu. +HELLÓ?? +HALLÓ! +Ez tényleg meglépett a telója nélkül... +Ez a pénztárcája? Nem hiszem el, egyszer a fejét fogja elhagyni! +ITT VAGY?? HELLÓ? +Szerintem hazament hajnalban és itthagyott mindent a részeg fejével... +Mindegy elmegyek hozzá, megkérdem hogy milyen a másnaposság."
let tortSzoveg = [];
let currantIndex = 0;




const elsoValaszthato= document.getElementById("elsoValaszthato");
const masodikValaszthato= document.getElementById("masodikValaszthato");
const harmadikValaszthato= document.getElementById("harmadikValaszthato");

const karakternev= document.getElementById("karakterNev");
const cutszoveg= document.getElementById("karakterSzoveg");
const tovabbgomb=document.getElementById("tovabbgomb");
const valaszto=document.getElementById("valaszto");
const item=document.getElementById("hasznaltitem");

const hatter=document.getElementById("jatektest");




function sleep(ms) 
{ 
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function Kiir(){
  tovabbgomb.disabled= true;
  tortSzoveg = szoveg.split('+');

  cutszoveg.innerHTML ="";
  for (let i=0; i < tortSzoveg[currantIndex].length; i++)
  {
    cutszoveg.innerHTML += tortSzoveg[currantIndex][i];
    await sleep(Math.floor(Math.random() * (100 - 20 + 1) + 20));
  }
  if (currantIndex < tortSzoveg.length-1)
  {
    currantIndex++;
    tovabbgomb.disabled= false;
  }
}



valasztas();

function tgombnyom(){ Kiir();}




function storytelling()
    {
       
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
    storytelling();
    

}
function masodikva() {
    
    elsoValaszthato.style.visibility = "hidden";
    masodikValaszthato.style.visibility = "hidden";
    harmadikValaszthato.style.visibility = "hidden";
    storytelling();
    
    
}
function harmadikva() {
   
    elsoValaszthato.style.visibility = "hidden";
    masodikValaszthato.style.visibility = "hidden";
    harmadikValaszthato.style.visibility = "hidden";
    storytelling();
    
    
}