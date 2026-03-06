let szoveg = "Fhuu... +Szét megy a fejem... +Mi történt az este? +Mennyi az idő egyáltalán? +Bakker jól ellehettünk... +Hol van Tüske amúgy? Sehol se látom... +Asszem együtt jöttünk haza, mert emlékszek, hogy elhányta magát a konyhában. +Merre van ez a gyerek? Felhívom. +*Távoli csörgés* + +Ez a csávó most vagy itt van, vagy itthagyta a telóját. +Na megnézem mizu. +HELLÓ??(folyoso) +HALLÓ!(konyha) +Ez tényleg meglépett a telója nélkül...(konyha) +Ez a pénztárcája? Nem hiszem el, egyszer a fejét fogja elhagyni!(konyhakozel) +ITT VAGY?? HELLÓ? (wc) +Szerintem hazament hajnalban és itthagyott mindent a részeg fejével...(folyoso) +Mindegy elmegyek hozzá, megkérdem hogy milyen a másnaposság.(dolyoso)"
let tortSzoveg = [];
let currantIndex = 0;
let tancIndex=0;
let tancVege=false
const szovegTx = document.getElementById("KarakterSzoveg");
const tovBtn = document.getElementById("next");
const szog = document.getElementById("karakter");
const tuske = document.getElementById("karakter2");
const hatter = document.getElementById("jatekcut");
const fade =document.getElementById("fade");
const nev =document.getElementById("karakterNev");

let clickCounter = 0;

let waitmin=5  //20
let waitmax=20  //100




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
    await sleep(Math.floor(Math.random() * (waitmax - waitmin + 1) + waitmin));

  }


  if (currantIndex < tortSzoveg.length-1)
  {
    currantIndex++;
    tovBtn.disabled= false;
  }
  Mozgas();
}

function HatterChange(valto,kep){
  valto.style.backgroundImage = `url("${kep}")`;
}

function szogVisszaallitas(){
  szog.style.aspectRatio="1/1"
  szog.style.top="70px"
  szog.style.height="800px"
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
        szog.style.transition= "top 0.8s ease"
        szog.style.top= "230px"

        tuske.style.transition= "top 0.4s ease"
        tuske.style.top= "180px"
        await sleep(200);
      }
      else
      {
        szog.style.transition= "top 0.8s ease"
        szog.style.top= "0px"

        tuske.style.transition= "top 0.4s ease"
        tuske.style.top= "20px"
        await sleep(200);    
      }
    }
  }
}

async function Mozgas(){
  switch(clickCounter){
    case 4:
      szogVisszaallitas();
      HatterChange(szog,"kepek/szog_ul.png");
      szog.style.transform = "rotate(0deg)";
      szog.style.transition= "top 0.5s ease";
      //szog ul
      szog.style.top= "280px";
      szog.style.height= "700px";
      szog.style.right="41%";
      szog.style.aspectRatio="410/1400";

      HatterChange(hatter, "kepek/szogszoba_reggel_pixel.png");
      break;
    case 5:
      fadeOn();
      fade.classList.add("in");
      await sleep(2900)
      HatterChange(hatter,"kepek/buli_pixel.png");
      HatterChange(szog,"kepek/szog.png");
      //szog bulizik
      szog.style.top= "70px";
      szog.style.height= "800px";
      szog.style.right="10%";
      szog.style.aspectRatio="1/1";
      
      fade.classList.add("out");
      tovBtn.style.display="none";
      tuske.style.display="block"
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
      HatterChange(hatter,"kepek/szogszoba_reggel_pixel.png");
      HatterChange(szog,"kepek/szog_all.png");
      //szog all a szobaban
      szog.style.top= "260px";
      szog.style.height= "860px";
      szog.style.right="50%";
      szog.style.aspectRatio="240/1420";
      
      tuske.style.display="none"
      fade.classList.add("out");
      tancVege=true;
      szog.style.top= "230px"
      tovBtn.style.display="block"
      await sleep(2000)
      fadeOff();
      break;
    case 6:
      szog.style.transition= "0.6s ease"
      szog.style.transform = "scaleX(-1)";
      await sleep(800)
      szog.style.transform = "scaleX(1)";
      break;
    case 8:
      szovegTx.style.marginTop="70px"
      nev.style.display="none"
      HatterChange(hatter,"kepek/szogfolyoso_pixel.png")
      szog.style.display="none"
      tovBtn.click();
      break;
    case 10:
      tovBtn.click();
      HatterChange(hatter,"kepek/szogszoba_reggel_pixel.png")
      szovegTx.style.marginTop="0px"
      nev.style.display="block"
      szog.style.display="block"
      break;
    case 13:
      HatterChange(hatter,"kepek/szogfolyoso_pixel.png")
      break;
    case 14:
      HatterChange(hatter,"kepek/szogkonyha_pixel.png")
      break;
    case 16:
      szog.style.display="none"
      HatterChange(hatter,"kepek/tusketelefon_pixel.png")
      break;
    case 17:
      szog.style.display="block"
      HatterChange(hatter,"kepek/szogfurdoszoba_pixel.png")
      break;
    case 18:
      HatterChange(hatter,"kepek/szogfolyoso_pixel.png")
      break;
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
