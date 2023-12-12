var JocRojo = 0;
var JocAzul = 0;
var PuntoRojo = 0;
var PuntoAzul = 0;
var QuinSaca = 1;
var CSaque = 0;

var PRojo = document.getElementById("CRojo");
var PAzul = document.getElementById("CAzul");
var JRojo = document.getElementById("JRojo");
var JAzul = document.getElementById("JAzul");
var R1 = document.getElementById("R1");
var A1 = document.getElementById("A1");
var Saque = document.getElementById("Saque");

PRojo.addEventListener('click', function() {
  if (PuntoRojo == 0) {
    PuntoRojo++;
    puntorojo();
  }
  else if (PuntoRojo == 1) {
    PuntoRojo++;
    puntorojo();
  }
  else if (PuntoRojo == 2) {
    if(PuntoAzul == 3){
      PuntoAzul--;
      puntoazul();
    }
    else{
      PuntoRojo++;
      puntorojo();
    }
  }
  else if (PuntoRojo == 3) {
    PuntoRojo = 0;
    JocRojo = JocRojo + 5;
    puntorojo();
    jocrojo();
  }
  Saque.disabled = true;
});

PAzul.addEventListener('click', function() {
  if (PuntoAzul == 0) {
    PuntoAzul++;
    puntoazul();
  }
  else if (PuntoAzul == 1) {
    PuntoAzul++;
    puntoazul();
  }
  else if (PuntoAzul == 2) {
    if(PuntoRojo == 3){
      PuntoRojo--;
      puntorojo();
    }
    else{
      PuntoAzul++;
      puntoazul();
    }
  }
  else if (PuntoAzul == 3) {
    PuntoAzul = 0;
    JocAzul = JocAzul + 5;
    puntoazul();
    jocazul();
  }
  Saque.disabled = true;
});

R1.addEventListener('click', function() {
  if (PuntoRojo == 3) {
    PuntoRojo--;
    puntorojo();
  }
  else if (PuntoRojo == 2) {
    PuntoRojo--;
    puntorojo();
  }
  else if (PuntoRojo == 1) {
    PuntoRojo--;
    puntorojo();
  }
  else if (PuntoRojo == 0) {
    if (JocRojo > 0){
      puntorojo(); 
      JocRojo = JocRojo - 5;
      jocrojo();
    }
  }
});

A1.addEventListener('click', function() {
  if (PuntoAzul == 3) {
    PuntoAzul--;
    puntoazul();
  }
  else if (PuntoAzul == 2) {
    PuntoAzul--;
    puntoazul();
  }
  else if (PuntoAzul == 1) {
    PuntoAzul--;
    puntoazul();
  }
  else if (PuntoAzul == 0) {
    if (JocAzul > 0){
      puntoazul(); 
      JocAzul = JocAzul - 5;
      jocazul();
    }
  }
});

Saque.addEventListener('click', function() {
  CoSaque();
});

function puntorojo(){
  if (PuntoRojo == 0) {
    PRojo.innerHTML = 0;
  }
  else if (PuntoRojo == 1) {
    PRojo.innerHTML = 15;
  }
  else if (PuntoRojo == 2) {
    PRojo.innerHTML = 30;
  }
  else if (PuntoRojo == 3) {
    PRojo.innerHTML = "Val";
  }
};

function puntoazul(){
  if (PuntoAzul == 0) {
    PAzul.innerHTML = 0;
  }
  else if (PuntoAzul == 1) {
    PAzul.innerHTML = 15;
  }
  else if (PuntoAzul == 2) {
    PAzul.innerHTML = 30;
  }
  else if (PuntoAzul == 3) {
    PAzul.innerHTML = "Val";
  }
};

function jocrojo(){
  JRojo.innerHTML = JocRojo;
  PuntoAzul = 0;
  PAzul.innerHTML = 0;
  saque();
  CoSaque();
};

function jocazul(){
  JAzul.innerHTML = JocAzul;
  PuntoRojo = 0;
  PRojo.innerHTML = 0;
  saque();
  CoSaque();
};

function saque(){
  if ((JocRojo + JocAzul) % 2 === 0) {
    QuienSaca = 1;
    Saque.innerHTML = QuienSaca;
  }
  else {
    QuienSaca = 2;
    Saque.innerHTML = QuienSaca;
  }
};

function CoSaque(){
  if (CSaque == 0) {
    CSaque = 1;
    Saque.style.backgroundColor = "#ffae00";
  }
  else if(CSaque == 1){
    Saque.style.backgroundColor = "#00fbff";
    CSaque = 0;
  };
  saque();
};  