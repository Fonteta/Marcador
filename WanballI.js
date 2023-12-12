var PuntosRojo = 0;
var PuntosAzul = 0;
var SaqueAlterno = 0;
var CSaque = 0;

var PuntosR = document.getElementById("BotonRojo");
var PuntosA = document.getElementById("BotonAzul");
var RestaR = document.getElementById("AtrasRojo");
var RestaA = document.getElementById("AtrasAzul");
var SaqueAlternoElemento = document.getElementById("SaqueAlterno");

PuntosR.addEventListener('click', function() {
  PuntosRojo++;
  PuntosR.innerHTML = PuntosRojo;
  actualizarSaque();
  CoSaque();
  SaqueAlternoElemento.disabled = true;
});

PuntosA.addEventListener('click', function() {
  PuntosAzul++;
  PuntosA.innerHTML = PuntosAzul;
  actualizarSaque();
  CoSaque();
  SaqueAlternoElemento.disabled = true;
});

RestaR.addEventListener('click', function() {
  if (PuntosRojo > 0) {
    PuntosRojo--;
    PuntosR.innerHTML = PuntosRojo;
    actualizarSaque();
    CoSaque();
  }
});

RestaA.addEventListener('click', function() {
  if (PuntosAzul > 0) {
    PuntosAzul--;
    PuntosA.innerHTML = PuntosAzul;
    actualizarSaque();
    CoSaque();
  }
});

SaqueAlternoElemento.addEventListener('click', function() {
  CoSaque();
});

function actualizarSaque() {
  if ((PuntosRojo + PuntosAzul) % 2 === 0) {
    SaqueAlterno = 1;
  } else {
    SaqueAlterno = 2;
  }
  SaqueAlternoElemento.innerHTML = SaqueAlterno;
};

function CoSaque(){
  if (CSaque == 0) {
    CSaque = 1;
    SaqueAlternoElemento.style.backgroundColor = "#ffae00";
  }
  else if(CSaque == 1){
    SaqueAlternoElemento.style.backgroundColor = "#00fbff";
    CSaque = 0;
  };
  actualizarSaque();
};