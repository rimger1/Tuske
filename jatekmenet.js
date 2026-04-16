const element1 = document.getElementById("balKarakter");
const element2 = document.getElementById("jobbKarakter");
const elsoValaszthato = document.getElementById("elsoValaszthato");
const masodikValaszthato = document.getElementById("masodikValaszthato");
const harmadikValaszthato = document.getElementById("harmadikValaszthato");
const karakternev = document.getElementById("karakterNev");
const cutszoveg = document.getElementById("karakterSzoveg");
const tovabbgomb = document.getElementById("tovabbgomb");
const valaszto = document.getElementById("valaszto");
const item = document.getElementById("hasznaltitem");
const hud = document.getElementById("szovegMezo");
const itemmezo = document.getElementById("itemmezo");
const fade = document.getElementById("fade");
const tuskefeher = document.getElementById("tuske-feher");

let item1 = document.getElementById("item1");
let item2 = document.getElementById("item2");
let item3 = document.getElementById("item3");

const hatter = document.getElementById("jatektest");
let dialogvege = false;
itemmezo.style.visibility = "hidden"
item.style.visibility = "hidden";
let hovakattint = 0;

let waitmin = 1;
let waitmax = 1;
//15
//40



function balkarakterbeszel() {
  const element1 = document.getElementById("balKarakter");
  element1.style.position = "absolute";
  element1.style.transition = "left 0.4s ease, top 0.2s ease, height 0.2s ease";
  element1.style.left = "10%";
  element1.style.height = "660px";
  element1.style.top = "120px";

  const element2 = document.getElementById("jobbKarakter");
  element2.style.position = "absolute";
  element2.style.transition = "right 0.4s ease, top 0.2s ease, height 0.2s ease";
  element2.style.right = "12%";
  element2.style.height = "710px";
  element2.style.top = "198px";
}
function jobbkarkterbeszel() {
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
  element2.style.right = "25%";
  element2.style.height = "800px";
  element2.style.top = "130px";
}
let szoveg = "Fhuu... +Szét megy a fejem... +Mi történt az este? +Mennyi az idő egyáltalán? +Bakker jól ellehettünk... (buli jelenet) +Hol van Tüske amúgy? Sehol se látom... +Asszem együtt jöttünk haza, mert emlékszek, hogy elhányta magát a konyhában. +Merre van ez a gyerek? Felhívom. +*Távoli csörgés* +Ez a csávó most vagy itt van, vagy itthagyta a telóját. +Na megnézem mizu. +HELLÓ?? +HALLÓ! +Ez tényleg meglépett a telója nélkül... +Ez a pénztárcája? Nem hiszem el, egyszer a fejét fogja elhagyni! +ITT VAGY?? HELLÓ? +Szerintem hazament hajnalban és itthagyott mindent a részeg fejével... +Mindegy elmegyek hozzá, megkérdem hogy milyen a másnaposság."
let tortSzoveg = [];
let currantIndex = 0;
let tovabbGombPressed = false;
let dialogvegeCount = 0;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function Kiir(megadottszoveg) {
  tovabbgomb.disabled = true;
  tortSzoveg = szoveg.split('+');

  megadottszoveg.innerHTML = "";
  for (let i = 0; i < tortSzoveg[currantIndex].length; i++) {
    tovabbgomb.disabled = true;
    megadottszoveg.innerHTML += tortSzoveg[currantIndex][i];
    await sleep(Math.floor(Math.random() * (waitmax - waitmin + 1) + waitmin));
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

// const fadeElements = [
//   element1,
//   element2,
//   elsoValaszthato,
//   masodikValaszthato,
//   harmadikValaszthato,
//   karakternev,
//   cutszoveg,
//   tovabbgomb,
//   valaszto,
//   item,
//   hud,
//   itemmezo,
//   item1,
//   item2,
//   item3
// ];

// function setFade(opacity) {
//   fadeElements.forEach(el => {
//     el.style.transition = "opacity 1s";
//     el.style.opacity = opacity;
//   });
// }

// function fadeChangeBackground(kep) {
//   let fade = document.createElement("div");

//   fade.style.position = "fixed";
//   fade.style.top = "0";
//   fade.style.left = "0";
//   fade.style.width = "100%";
//   fade.style.height = "100%";
//   fade.style.background = "black";
//   fade.style.opacity = "0";
//   fade.style.transition = "opacity 1s";
//   fade.style.pointerEvents = "none";
//   fade.style.zIndex = "9999";

//   document.body.appendChild(fade);

//   setTimeout(() => {
//     fade.style.opacity = "1";
//     setFade("0");
//   }, 10);

//   setTimeout(() => {
//     HatterChange(hatter, kep);
//     hatter.style.backgroundPosition = "0,0";
//   }, 1000);

//   setTimeout(() => {
//     fade.style.opacity = "0";
//     setFade("1");
//   }, 1100);

//   setTimeout(() => {
//     fade.remove();
//   }, 2100);
// }

function HatterChange(valto, kep) {
  valto.style.backgroundImage = `url("${kep}")`;
}

setTimeout(fadeOff, 2500);

function fadeOff() {
  fade.style.display = "none";
}



function fadeOn() {
  fade.style.display = "flex";
}

function kilakoltatas(dv) {
  console.log("kilakoltatas");
  karakternev.innerHTML = "Szög";
  cutszoveg.innerHTML = "";
  szoveg = "Remélem be tudok jutni valahogy... +Csak nem alszik még mindig...";
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

    async function tovabbGombHandler() {
      if (dialogvege) {
        console.log(dialogvegeCount);
        if (dialogvegeCount === 2) {
          valasztas();
          karakternev.innerHTML = "Szög";
          karakternev.style.color = "black";
          elsoValaszthato.value = "Mióta nem fizeti a lakbért?";
          masodikValaszthato.value = "Mikor lett kilakoltatva?";
          harmadikValaszthato.value = "Hagyott itt valamit?";
          tovabbgomb.style.visibility = "hidden";
          tovabbgomb.disabled = true;

          elsoValaszthato.addEventListener("click", lakber);
          masodikValaszthato.addEventListener("click", kilakoltatasdatum);
          harmadikValaszthato.addEventListener("click", hagyottittvalamit);

          function lakber() {
            dialogvege = false;
            szoveg = "+ Hát öcsém... +Mióta? +Három mocskos hónapja. +Már alapjárat is úgy voltam, hogy megszabadulok a bőrétől, de egyszer csak felszívódott. +Engem meg itthagyott, hogy törődjek a hivatalos baromságokkal. +Mit képzel az ilyen? +Aztán meg kérdik tőlem az emberek, hogy miért veszekedek az asszonnyal ennyit... +Mert ők mit csinálnának? +Nem? +... +De mindegy a végén mégis én jártam jól, mi? +Hehe... +Legalább nem kell elviselnem. +Az hogy most hol van, az meg az ő baja. +Annyit tudok mondani, hogy talán még a postaládájában találsz valamit, mert sosem vett ki belőle semmit. + Az újságait is nekem kellett kidobálni a földről...";
            tovabbg();
            storytelling();
            karakternev.innerHTML = "Tulaj";
            cutszoveg.innerHTML = "";
            karakternev.style.color = "darkgreen";
            cutszoveg.style.color = "darkgreen";
            tovabbgomb.disabled = false;
            tovabbgomb.style.visibility = "visible";


            jobbkarkterbeszel();

            console.log("Első választási lehetőség kiválasztva.");
          }
          function kilakoltatasdatum() {
            dialogvege = false;
            szoveg = "+ Hát öcsém két hete délután volt rá időm és energiám. +Kedvem sincs az ilyenekkel foglalkozni. +Felszívódott. + Lakatost kellett hívnom az ajtóhoz, a Ferkót, hogy bejussak. +Azt hittem megölöm azt a gyreket, égett a pofám... +Mit képzel az ilyen? +Aztán meg kérdik tőlem az emberek, hogy miért veszekedek az asszonnyal ennyit... +Mert ők mit csinálnának? +Nem? +... +De mindegy a végén mégis én jártam jól, mi? +Hehe... +Legalább nem kell elviselnem. +Az hogy most hol van, az meg az ő baja. + *Sóhajt* + Ezek a mai fiatalok nincsenek tekintettel semmire... +Annyit tudok mondani, hogy talán még a postaládájában találsz valamit, mert sosem vett ki belőle semmit. + Az újságait is nekem kellett kidobálni a földről...";
            tovabbg();
            storytelling();
            karakternev.innerHTML = "Tulaj";
            cutszoveg.innerHTML = "";
            karakternev.style.color = "darkgreen";
            cutszoveg.style.color = "darkgreen";
            tovabbgomb.disabled = false;
            tovabbgomb.style.visibility = "visible";
          }
          function hagyottittvalamit() {
            dialogvege = false;
            szoveg = "+ Pár hülye ruhát itt hagyott, azon kívül semmit. +Kellenek? +Vagy... inkább hagyjad, most nem fogok felmenni értük. +Annyit tudok mondani, hogy talán még a postaládájában találsz valamit, mert sosem vett ki belőle semmit. + Az újságait is nekem kellett kidobálni a földről... + *Sóhajt* + Ezek a mai fiatalok nincsenek tekintettel semmire... +Tré banda... +És rám szokták mondani, hogy reménytelen vagyok. +Hát akkor? +Ti fiatalok mik vagytok? +Nem? +Most szerinted így néz ki egy életképtelen suttyó, mint én? +... +Mindegy is... +Legalább már nem kell elviselnem azt a gyereket annyi a lényeg.";
            tovabbg();
            storytelling();
            karakternev.innerHTML = "Tulaj";
            cutszoveg.innerHTML = "";
            karakternev.style.color = "darkgreen";
            cutszoveg.style.color = "darkgreen";
            tovabbgomb.disabled = false;
            tovabbgomb.style.visibility = "visible";
          }
        }
        else if (dialogvegeCount === 3) {
          dialogvege = false;
          balkarakterbeszel();
          tovabbg();
          storytelling();
          karakternev.innerHTML = "Szög";
          karakternev.style.color = "black";
          cutszoveg.style.color = "black";
          cutszoveg.innerHTML = "";
          szoveg = "+ Na jó, már most kezd az idegeimre menni ez a csávó... + Oké, kösz az infót.";
        }
        else if (dialogvegeCount === 4) {
          storytelling();
          jobbkarkterbeszel();
          dialogvege = false;
          tovabbg();
          karakternev.innerHTML = "Tulaj";
          cutszoveg.innerHTML = "";
          karakternev.style.color = "darkgreen";
          cutszoveg.style.color = "darkgreen";
          szoveg = "+ Szívesen. + *Sóhajt* Jólvan... engem innentől hagyjál a hülyeségeitekkel. +Nincs ezekre időm, elfoglalt vagyok. + Focit nézek és verem az asszonyt.";
        }
        else if (dialogvegeCount === 5) {
          storytelling();
          balkarakterbeszel();
          dialogvege = false;
          tovabbg();
          element2.style.position = "absolute";
          element2.style.animation = "none";
          element2.style.transform = "scaleX(-1)";

          element2.style.transition = "0.6s ease"
          element2.style.transition = "right 1s ease, top 0.8s ease, height 0.7s ease";
          element2.style.right = "-20%";
          karakternev.innerHTML = "Szög";
          karakternev.style.color = "black";
          cutszoveg.style.color = "black";
          cutszoveg.innerHTML = "";
          szoveg = "+ ... + Ez bolond... + Mi történik... + Ha Tüske itt nem volt a hetekben, akkor hol lakott ez a hülye? + Meg miért nem említett nekem erről semmit? +Mit csinált, hogy nem fizette a lakást? + ... + Mindegy, lecsekkolom a postaládát.";
        }
        else if (dialogvegeCount === 6) {
          fadeOn();
          fade.classList.add("in");
          await sleep(2000)
          storytelling();
          balkarakterbeszel();
          dialogvege = false;
          tovabbg();

          element2.style.visibility = "hidden";

          HatterChange(hatter, "kepek/TUSKEMailbox1.png");

          karakternev.innerHTML = "Szög";
          karakternev.style.color = "black";
          cutszoveg.style.color = "black";
          fade.classList.add("out");
          await sleep(2000)
          fadeOff()
          fade.classList.remove("out");
          fade.classList.remove("in");
          cutszoveg.innerHTML = "";
          szoveg = "+ Azt mondja hogy... +Az ott az övé amelyik nyitva van? +Szerintem biztos...";
        }

        else if (dialogvegeCount === 7) {
          fadeOn();
          storytelling();
          balkarakterbeszel();
          dialogvege = false;
          tovabbg();
          fade.classList.add("in");
          await sleep(2000)
          HatterChange(hatter, "kepek/TUSKE-mailbox.png");

          element1.style.visibility = "hidden";
          hud.style.visibility = "hidden";
          element2.style.visibility = "hidden";
          hatter.style.backgroundPositionY = "0px"

          itemmezo.style.visibility = "hidden";
          item1.style.visibility = "hidden";
          item2.style.visibility = "hidden";
          item3.style.visibility = "hidden";
          fade.classList.add("out");
          await sleep(2000)
          fadeOff();
          fade.classList.remove("out");
          fade.classList.remove("in");
          cutszoveg.innerHTML = "";
          szoveg = "+";


        }
        else if (dialogvegeCount === 8) {
          fadeOn();
          storytelling();
          balkarakterbeszel();
          dialogvege = false;
          tovabbg();

          fade.classList.add("in");
          await sleep(2000)
          HatterChange(hatter, "kepek/TUSKEMailbox1.png");
          hatter.style.backgroundPositionY = "-200px"
          element1.style.visibility = "visible";
          hud.style.visibility = "visible";
          element2.style.visibility = "hidden";

          itemmezo.style.visibility = "visible";
          item1.style.visibility = "hidden";
          item2.style.visibility = "hidden";
          item3.style.visibility = "visible";

          karakternev.innerHTML = "Szög";
          karakternev.style.color = "black";
          cutszoveg.style.color = "black";
          cutszoveg.innerHTML = "";
          fade.classList.add("out");
          await sleep(2000)
          fadeOff();
          fade.classList.remove("out");
          fade.classList.remove("in");

          szoveg = "+ Van benne egy cetli +Ejha, de még milyen... + Málik szét a kezemben olyan régi. + Ez egy cím. + Utca és házszám... + Érdekes... + Lehet elnézek arra... + Hátha ott van a csávó...";
        }
        else if (dialogvegeCount === 9) {
          fadeOn();

          fade.classList.add("in");
          await sleep(2000)
          HatterChange(hatter, "kepek/Folytatjuk hatter.png");
          tuskefeher.style.visibility = "visible";
          tuskefeher.src = "kepek/folytat.png";
          tuskefeher.style.opacity = "1";


          hud.style.visibility = "hidden";
          element1.style.visibility = "hidden";
          element2.style.visibility = "hidden";
          itemmezo.style.visibility = "hidden";
          item1.style.visibility = "hidden";
          item2.style.visibility = "hidden";
          item3.style.visibility = "hidden";
          hatter.style.backgroundPositionY = "0px"
          tovabbgomb.style.visibility = "hidden";
          szoveg = "";
          cutszoveg.style.visibility = "hidden";

          
          fadeOff();
          
          fade.classList.remove("in");

        }



        else {
          element2.style.visibility = "visible";
          element2.style.right = "14%";
          element2.style.transition = "right 0.4s ease, top 0.2s ease, height 0.2s ease";
          jobbkarkterbeszel();
          dialogvege = false;
          karakternev.innerHTML = "Tulaj";
          cutszoveg.innerHTML = "";
          karakternev.style.color = "darkgreen";
          cutszoveg.style.color = "darkgreen";
          szoveg = "...";
          szoveg = "Szevasz fiam! +Te vagy annak a hülyehajú gyereknek a cimbije? +Láttalak titeket együtt tengeni az épületem körül. +Ha őt keresed akkor rossz hírem van, kilakoltattam a gyereket. +Nem fizetett egy pengőt se már mióta... + Az én zsebeimet meg belepi a por. +Többet itt ne keresd, nem jön már szerintem. + A többi lakos is mondja, hogy eltűnt, nem jár az már erre, senki sem látja egy ideje... +Bár nekem ez csak jó hír... "
        }
      } else {
        console.log("megy a dialog");
      }
    };

    tovabbgomb.addEventListener("click", tovabbGombHandler);
  });
}

kilakoltatas(dialogvege);
