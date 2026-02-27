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
let dialogvege=false;
item.style.visibility = "hidden";
let hovakattint=0;




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
let tovabbGombPressed = false;
let dialogvegeCount = 0;

function sleep(ms) 
{ 
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function Kiir(megadottszoveg){
  tovabbgomb.disabled = true;
  tortSzoveg = szoveg.split('+');

  megadottszoveg.innerHTML = "";
  for (let i = 0; i < tortSzoveg[currantIndex].length; i++) {
    
    megadottszoveg.innerHTML += tortSzoveg[currantIndex][i];
    await sleep(Math.floor(Math.random() * (100 - 20 + 1) + 20));
  }
  if (currantIndex < tortSzoveg.length - 1) {
    currantIndex++;
    tovabbgomb.disabled = false;
    dialogvege = false;
  } else if (currantIndex == tortSzoveg.length - 1) {
    currantIndex = 0;
    tovabbgomb.disabled = false;
    dialogvege = true;
    dialogvegeCount++;
    console.log("dialogvege: " + dialogvege);
  }
}

function tovabbg() {
  if (dialogvege && !tovabbGombPressed) {
    tovabbGombPressed = true; 
    
  } else {
    tovabbGombPressed = false; 
    Kiir(cutszoveg);
    storytelling();
  }
}

function storytelling() {
  elsoValaszthato.style.visibility = "hidden";
  masodikValaszthato.style.visibility = "hidden";
  harmadikValaszthato.style.visibility = "hidden";
  cutszoveg.style.visibility = "visible";
  item.style.visibility = "hidden";
  valaszto.style.visibility = "hidden";
  tovabbgomb.style.visibility = "visible";
}

function valasztas() {
  elsoValaszthato.style.visibility = "visible";
  masodikValaszthato.style.visibility = "visible";
  harmadikValaszthato.style.visibility = "visible";
  cutszoveg.style.visibility = "hidden";
  item.style.visibility = "visible";
  valaszto.style.visibility = "visible";
  tovabbgomb.style.visibility = "hidden";
  balkarakterbeszel();
}

function elsova() {
  storytelling();
  Kiir(cutszoveg);
  jobbkarkterbeszel();
  console.log("Első választási lehetőség kiválasztva.");
}

function masodikva() {
  storytelling();
  Kiir(cutszoveg);
  jobbkarkterbeszel();
  console.log("Második választási lehetőség kiválasztva.");
}

function harmadikva() {
  storytelling();
  Kiir(cutszoveg);
  jobbkarkterbeszel();
  console.log("Harmadik választási lehetőség kiválasztva.");
}

function kilakoltatas(dv) {

  




  console.log("kilakoltatas");
  karakternev.innerHTML = "Szög";
  cutszoveg.innerHTML = "";
  szoveg = "Remélem be tudok jutni valahogy... +Csak nem alszik még mindig ez a bolond.";
  hatter.style.backgroundImage = `url("kepek/tuskekilakoltatas.png")`;
  storytelling();
  balkarakterbeszel();
  element2.style.position = "absolute";
  element2.style.visibility = "hidden";
  element2.style.right = "-10%";
  console.log("kilakoltatas: " + dv);

  const waitForDialogvege = new Promise((resolve) => {
    const checkDialogvege = () => {
      if (dialogvege === true) {
        resolve();
      } else {
        setTimeout(checkDialogvege, 100);
      }
    };
    checkDialogvege();
  });

  waitForDialogvege.then(() => {
    console.log("kilakoltatas true");
    tovabbgomb.disabled = false; 
    console.log(dialogvegeCount);

    const tovabbGombHandler = () => {
      if (dialogvege) {
        console.log(dialogvegeCount);
        if (dialogvegeCount === 2) {
          valasztas();
          karakternev.innerHTML = "Szög";
          karakternev.style.color = "black";
          elsoValaszthato.value = "Mióta nem fizeti a lakbért?";
          masodikValaszthato.value = "Mikor lett kilakoltatva?";
          harmadikValaszthato.value = "Hagyott itt valamit?";

          elsoValaszthato.addEventListener("click", lakber);
          masodikValaszthato.addEventListener("click", kilakoltatasdatum);
          harmadikValaszthato.addEventListener("click", hagyottittvalamit);

          function lakber() {
             
            dialogvege = false;
            szoveg = "+ Hát hapsim mióta? +Három mocskos hónapja. +Már úgy voltam bűnvadászokat hívok, de egyszer csak felszívódott. +Ezek a mai fiatalok nincsenek tekintettel semmire...";
            tovabbg();
            storytelling();
            karakternev.innerHTML = "Tulaj";
                  cutszoveg.innerHTML = "";
                  karakternev.style.color = "darkgreen";
                  cutszoveg.style.color = "darkgreen";
            
            jobbkarkterbeszel();
            
            console.log("Első választási lehetőség kiválasztva.");
          }
          function kilakoltatasdatum() {
             
            dialogvege = false;
            szoveg = "+ Hát hapsim tegnap délután. +Felszívódott, így lakatost kellett hívnom az ajtóhoz, hogy bejussak.+ Ezek a mai fiatalok nincsenek tekintettel semmire...";
            tovabbg();
            storytelling();
            karakternev.innerHTML = "Tulaj";
                  cutszoveg.innerHTML = "";
                  karakternev.style.color = "darkgreen";
                  cutszoveg.style.color = "darkgreen";
          }

         

        } else {
          element2.style.visibility = "visible";
          element2.style.right = "10%";
          element2.style.transition = "right 0.4s ease, top 0.2s ease, height 0.2s ease";
          jobbkarkterbeszel();
          dialogvege = false;
          karakternev.innerHTML = "Tulaj";
          cutszoveg.innerHTML = "";
          karakternev.style.color = "darkgreen";
          cutszoveg.style.color = "darkgreen";
          szoveg = "...";
          
        }
      } else {
        console.log("megy a dialog");
      }
    };

    tovabbgomb.addEventListener("click", tovabbGombHandler);
  });
}

kilakoltatas(dialogvege);
