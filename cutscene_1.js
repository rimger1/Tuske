let szoveg = "Fhuu... +Szét megy a fejem... +Mi történt az este? +Mennyi az idő egyáltalán? +Bakker jól ellehettünk... +Hol van Tüske amúgy? Sehol se látom... +Asszem együtt jöttünk haza, mert emlékszek, hogy elhányta magát a konyhában. +Merre van ez a gyerek? Felhívom. +*Távoli csörgés* +Ez a csávó most vagy itt van, vagy itthagyta a telóját. +Na megnézem mizu. +HELLÓ?? +HALLÓ! +Ez tényleg meglépett a telója nélkül... +Ez a pénztárcája? Nem hiszem el, egyszer a fejét fogja elhagyni! +ITT VAGY?? HELLÓ? +Szerintem hazament hajnalban és itthagyott mindent a részeg fejével... +Mindegy elmegyek hozzá, megkérdem hogy milyen a másnaposság."
let tortSzoveg = [];
let currantIndex = 0;
let tancIndex=0;
let tancVege=false
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
  console.log(clickCounter);
  tovBtn.disabled= true;
  tortSzoveg = szoveg.split('+');

  szovegTx.innerHTML ="";
  for (let i=0; i < tortSzoveg[currantIndex].length; i++)
  {
    szovegTx.innerHTML += tortSzoveg[currantIndex][i];
    //await sleep(Math.floor(Math.random() * (100 - 20 + 1) + 20));

  }


  if (currantIndex < tortSzoveg.length-1)
  {
    currantIndex++;
    tovBtn.disabled= false;
  }
  Mozgas();
}

function HatterChange(kep){
  hatter.style.backgroundImage = `url("${kep}")`;
}



async function Tanc(){
  if(clickCounter==5)
  {
    for(;tancIndex<10000;tancIndex++){
      
      if(tancVege)
      {
        return;
      }

      if(tancIndex%2==0)
      {
        szog.style.transition= "top 0.5s ease"
        szog.style.top= "230px"
        await sleep(150);
      }
      else
      {
        szog.style.transition= "top 0.5s ease"
        szog.style.top= "0px"
        await sleep(150);    
      }
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
      HatterChange("kepek/buli_pixel.png");
      fade.classList.add("out");
      tovBtn.style.display="none";
      Tanc();
      await sleep(2000)
      fadeOff();
      fade.classList.remove("out");
      fade.classList.remove("in");

      //buli vege

      await sleep(4000);
      fadeOn();
      fade.classList.add("in");
      await sleep(2900)
      HatterChange("kepek/szogszoba_fentrol_pixel.png");
      fade.classList.add("out");
      tancVege=true;
      szog.style.top= "230px"
      tovBtn.style.display="block"
      await sleep(2000)
      fadeOff();

      case 6:
        szog.style.transform = "translateX(-50%)";
        await sleep(50)
        szog.style.transform = "translateX(50%)";
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
