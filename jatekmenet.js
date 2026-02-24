const element1 = document.getElementById("balKarakter");
const element2 = document.getElementById("jobbKarakter");


const elsoValaszthato= document.getElementById("elsoValaszthato");
const masodikValaszthato= document.getElementById("masodikValaszthato");
const harmadikValaszthato= document.getElementById("harmadikValaszthato");

const karakternev= document.getElementById("karakterNev");
const cutszoveg= document.getElementById("karakterSzoveg");
const tovabbgomb=document.getElementById("tovabbgomb");
const valaszto=document.getElementById("valaszto");
const item=document.getElementById("hasznaltitem");

const hatter=document.getElementById("jatektest");
hatter.style.backgroundImage = `url("kepek/tuskekilakoltatas.png")`;


function balkarakterbeszel(){
  const element1 = document.getElementById("balKarakter");
    element1.style.position = "absolute"; 
    element1.style.transition = "left 0.4s ease, top 0.2s ease, height 0.2s ease"; 
    element1.style.left = "10%";
    element1.style.height = "660px";
    element1.style.top = "120px";

    const element2 = document.getElementById("jobbKarakter");
    element2.style.position = "absolute"; 
    element2.style.transition = "right 0.4s ease, top 0.2s ease, height 0.2s ease"; 
    element2.style.right = "5%";
    element2.style.height = "510px";
    element2.style.top = "198px";
}
function jobbkarkterbeszel(){
  const element1 = document.getElementById("balKarakter");
  element1.style.position = "absolute"; 
  element1.style.transition = "left 0.4s ease, top 0.2s ease, height 0.2s ease";
  element1.style.left = "5%";
  element1.style.height = "550px";
  element1.style.top = "180px";

  const element2 = document.getElementById("jobbKarakter");
  element2.style.position = "absolute"; 
  element2.style.transition = "right 0.4s ease"; 
  element2.style.position = "absolute"; 
  element2.style.transition = "right 0.4s ease, top 0.2s ease, height 0.2s ease"; 
  element2.style.right = "10%";
  element2.style.height = "630px";
  element2.style.top = "130px"; 
}


let szoveg = "Fhuu... +Szét megy a fejem... +Mi történt az este? +Mennyi az idő egyáltalán? +Bakker jól ellehettünk... (buli jelenet) +Hol van Tüske amúgy? Sehol se látom... +Asszem együtt jöttünk haza, mert emlékszek, hogy elhányta magát a konyhában. +Merre van ez a gyerek? Felhívom. +*Távoli csörgés* +Ez a csávó most vagy itt van, vagy itthagyta a telóját. +Na megnézem mizu. +HELLÓ?? +HALLÓ! +Ez tényleg meglépett a telója nélkül... +Ez a pénztárcája? Nem hiszem el, egyszer a fejét fogja elhagyni! +ITT VAGY?? HELLÓ? +Szerintem hazament hajnalban és itthagyott mindent a részeg fejével... +Mindegy elmegyek hozzá, megkérdem hogy milyen a másnaposság."
let tortSzoveg = [];
let currantIndex = 0;


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
    console.log (tortSzoveg[currantIndex][i]);
    cutszoveg.innerHTML += tortSzoveg[currantIndex][i];
    await sleep(Math.floor(Math.random() * (100 - 20 + 1) + 20));
  }
  if (currantIndex < tortSzoveg.length-1)
  {
    currantIndex++;
    tovabbgomb.disabled= false;
  }
  
}
function tovabbg(){
  
  Kiir();
  storytelling();
  jobbkarkterbeszel();

}






valasztas();



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
    
    
    storytelling();
    Kiir();
    jobbkarkterbeszel();
    

}
function masodikva() {
    
    
    storytelling();
    Kiir();
    jobbkarkterbeszel();
    
    
}
function harmadikva() {
   
   
    storytelling();
    Kiir();
    jobbkarkterbeszel();
    
    
}