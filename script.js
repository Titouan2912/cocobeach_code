// texte machine a ecrire
const texteSlogan = "Destination Cocobeach 🌴";
let indexLettre = 0;

function ecrireMachine() {
  if (indexLettre < texteSlogan.length) {
    document.getElementById("slogan").textContent +=
      texteSlogan.charAt(indexLettre);
    indexLettre++;
    setTimeout(ecrireMachine, 100);
  }
}

ecrireMachine();

//darck mode
function basculerMode() {
  document.body.classList.toggle("mode-sombre");
}

// effetd de fade / slide
const sectionAccueil = document.getElementById("section-acceuil");

//ajouter un écouteur d'evennement
window.addEventListener("scroll", () => {
  const position = sectionAccueil.getBoundingClientRect();
  if(position.top < window.innerHeight - 100) {
    sectionAccueil.classList.add("visible");
  }
});

const imagePlage = document.getElementById("image-plage");

imagePlage.addEventListener("mouseenter", () => {
  imagePlage.style.transform = "scale(1.5)";
});

imagePlage.addEventListener("mouseleave", () => {
  imagePlage.style.transform = "scale(1)";
});

// animation sur l'image du cocotier
const cocotier = document.getElementById("cocotiers");
let angleRotation = 0;
let direction = 1;


// on va timer notre animation
setInterval(() => {
    // Incrémente (ou décrémente) l'angle de rotation selon la direction
    angleRotation += direction * 0.5;


    // stopper si on dépasse +5° ou - 5° , on inverse la direction
    if (angleRotation > 5 || angleRotation < -5) {
        direction *= -1;
    }


    // appliquer la rotation à l'élément cocotier en css
    cocotier.style.transform = `rotate(${angleRotation}deg)`;
},50);

 document.getElementById("others").addEventListener("click", function () {
    window.location.href = "https://oscarduf.github.io/Courbevoie_stage_js/";
  });

   document.getElementById("resevation").addEventListener("click", function () {
    window.location.href = "https://titouan2912.github.io/reservation/";
  });