var CRojo = 0;
var CAzul = 0;
var SaqueRojo = 0;
var SaqueAzul = 0;
var CSaque =  0;
var historial = [];

var PRojo = document.getElementById("PRojo");
var PAzul = document.getElementById("PAzul");
var Atras = document.getElementById("Anterior");
var Saque = document.getElementById("Saque");



PRojo.addEventListener( "click", function(){
  CRojo++;
  PRojo.innerHTML = CRojo;
  Saque.disabled = true;
  RSaque();
  guardarHistorial();
});

PAzul.addEventListener( "click", function(){
  CAzul++;
  PAzul.innerHTML = CAzul;
  ASaque();
  Saque.disabled = true;
  guardarHistorial();
});

Saque.addEventListener("click", function(){
  if (CSaque == 0) {
    CSaque = 1;
  }
  else if(CSaque == 1){
    CSaque = 0;
  }
  CoSaque();
});

Atras.addEventListener("click", function(){
  anteriorHistorial();
});

function ASaque() {
  if (CSaque == 1) {
    if (SaqueAzul == 1) {
      SaqueAzul = 2;
      Saque.innerHTML = SaqueAzul;
    } else if (SaqueAzul == 2) {
      SaqueAzul = 1;
      Saque.innerHTML = SaqueAzul;
    } else if (SaqueAzul == 0) {
      SaqueAzul = 2;
      Saque.innerHTML = SaqueAzul;
    }
  } 
  else if (CSaque == 0) {
    if (SaqueAzul == 1) {
      SaqueAzul = 2;
      Saque.innerHTML = SaqueAzul;
      CSaque = 1;
      CoSaque();
    } else if (SaqueAzul == 2) {
      SaqueAzul = 1;
      Saque.innerHTML = SaqueAzul;
      CSaque = 1;
      CoSaque();
    } else if (SaqueAzul == 0) {
      SaqueAzul = 1;
      Saque.innerHTML = SaqueAzul;
      CSaque = 1;
      CoSaque();
    }
  }
};

function RSaque() {
  if (CSaque == 0) {
    if (SaqueRojo == 1) {
      SaqueRojo = 2;
      Saque.innerHTML = SaqueRojo;
    } else if (SaqueRojo == 2) {
      SaqueRojo = 1;
      Saque.innerHTML = SaqueRojo;
    } else if (SaqueRojo == 0) {
      SaqueRojo = 2;
      Saque.innerHTML = SaqueRojo;
    }
  } 
  else if (CSaque == 1) {
    if (SaqueRojo == 1) {
      SaqueRojo = 2;
      Saque.innerHTML = SaqueRojo;
      CSaque = 0;
      CoSaque();
    } else if (SaqueRojo == 2) {
      SaqueRojo = 1;
      Saque.innerHTML = SaqueRojo;
      CSaque = 0;
      CoSaque();
    } else if (SaqueRojo == 0) {
      SaqueRojo = 1;
      Saque.innerHTML = SaqueRojo;
      CSaque = 0;
      CoSaque();
    }
  }
};

function CoSaque(){
  if (CSaque == 0) {
    Saque.style.backgroundColor = "#ffae00";
  }
  else if(CSaque == 1){
    Saque.style.backgroundColor = "#00fbff";
  }
};

function guardarHistorial(){
  historial.push({
    CRojo: CRojo,
    CAzul: CAzul,
    SaqueRojo: SaqueRojo,
    SaqueAzul: SaqueAzul,
    CSaque: CSaque,
  });
};

function anteriorHistorial(){
  if (historial.length > 0) {
    var ultimo = historial.pop();
    CRojo = ultimo.CRojo;
    CAzul = ultimo.CAzul;
    SaqueRojo = ultimo.SaqueRojo;
    SaqueAzul = ultimo.SaqueAzul;
    CSaque = ultimo.CSaque;
    
    PRojo.innerHTML = CRojo;
    PAzul.innerHTML = CAzul;
    Saque.disabled = true;
    Saque.style.backgroundColor = "gray";
    if(CSaque == 0) {
      Saque.innerHTML = SaqueRojo;
      CoSaque();
    }
    else if(CSaque == 1){
      Saque.innerHTML = SaqueAzul;
      CoSaque();
    };
  };
};

