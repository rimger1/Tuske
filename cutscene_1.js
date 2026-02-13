let szoveg = "Fhuu... +Szét megy a fejem... +Mi történt az este? +Mennyi az idő egyáltalán? +Bakker jól ellehettünk... (buli jelenet) +Hol van Tüske amúgy? Sehol se látom... +Asszem együtt jöttünk haza, mert emlékszek, hogy elhányta magát a konyhában. +Merre van ez a gyerek? Felhívom. +*Távoli csörgés* +Ez a csávó most vagy itt van, vagy itthagyta a telóját. +Na megnézem mizu. +HELLÓ?? +HALLÓ! +Ez tényleg meglépett a telója nélkül... +Ez a pénztárcája? Nem hiszem el, egyszer a fejét fogja elhagyni! +ITT VAGY?? HELLÓ? +Szerintem hazament hajnalban és itthagyott mindent a részeg fejével... +Mindegy elmegyek hozzá, megkérdem hogy milyen a másnaposság."
let tortSzoveg = [];
let currantIndex = 0;
const szovegTx = document.getElementById("KarakterSzoveg");
const tovBtn = document.getElementById("next");
const szog = document.getElementById("karakter");
const hatter = document.getElementById("jatekcut");
const fade =document.getElementById("fade");

let clickCounter = 0;

/*fade levetele*/
setTimeout(fadeOff, 2500);

function fadeOff(){
  fade.style.display = "none";
}

//fade on

function fadeOn(){
  fade.style.display = "flex";
}


//kiiras
function sleep(ms) 
{ 
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function Kiir(){
  clickCounter++;
  tovBtn.disabled= true;
  tortSzoveg = szoveg.split('+');

  szovegTx.innerHTML ="";
  for (let i=0; i < tortSzoveg[currantIndex].length; i++)
  {
    szovegTx.innerHTML += tortSzoveg[currantIndex][i];
    /*await sleep(Math.floor(Math.random() * (100 - 20 + 1) + 20));*/

  }


  if (currantIndex < tortSzoveg.length-1)
  {
    currantIndex++;
    tovBtn.disabled= false;
  }
  Mozgas();
}

function HatterChange(){
  hatter.style.backgroundImage = "url(kepek/buli_pixel.png)"
}

async function Tanc(){
  if(clickCounter==5)
  {
    for(let i=0;i<1000;i++)
      if(i%2==0)
      {
        szog.style.transform= "top 0.2s ease"
        szog.style.top= "230px"
        await sleep(100);
      }
      else
      {
        szog.style.transform= "top 0.2s ease"
        szog.style.top= "30px"
        await sleep(100);    
      }
  }
}

async function Mozgas(){
  switch(clickCounter){
    case 4:
        szog.style.position = "absolute";
        szog.style.transform = "rotate(0deg)";
        break;
    case 5:
      fadeOn();
      fade.classList.add("in");
      await sleep(2900)
      HatterChange();
      fade.classList.add("out");
      await sleep(2500)
      fadeOff();
      Tanc();
  }
}




















/*Fhuu... +Szét megy a fejem... +Mi történt az este? +Mennyi az idő egyáltalán? +Bakker jól ellehettünk... (buli jelenet) +Hol van Tüske amúgy? Sehol se látom... 
+Asszem együtt jöttünk haza, mert emlékszek, hogy elhányta magát a konyhában. +Merre van ez a gyerek? Felhívom. +*Távoli csörgés* +Ez a csávó most vagy itt van, 
vagy itthagyta a telóját. +Na megnézem mizu. +HELLÓ?? +HALLÓ! +Ez tényleg meglépett a telója nélkül... +Ez a pénztárcája? Nem hiszem el, egyszer a fejét fogja elhagyni! 
+ITT VAGY?? HELLÓ? +Szerintem hazament hajnalban és itthagyott mindent a részeg fejével... +Mindegy elmegyek hozzá, megkérdem hogy milyen a másnaposság.
*/














/* 
document.querySelectorAll("input[type=button]").forEach(btn => {
  btn.addEventListener("click", () => {
    last = btn.id;
  });
});

let last;
*/
