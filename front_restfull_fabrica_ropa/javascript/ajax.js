//VARIABLES URL
const URL_DESTINO = "http://localhost:4000/rest/familias";
var destino = "";
var destino2 = "";

//Funcion AJAX /todas /alta
function miFuncionAjax(str, txt) {
  console.log("uno");
  contenedor.innerHTML = "";
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        if (str === "/todas") {
          verTodas(this.responseText);
        } else if (str === "/alta") {
          destino = "/todas";
          miFuncionAjax(destino);
        } else if (str === "verUna") {
          verUna(this.responseText);
        } else if (str === "borrar") {
          destino = "/todas";
          miFuncionAjax(destino);
        } else if (str === "goEdit") {
          verUnaEdit(this.responseText);
        } else if (str === "/modificar") {
          destino = "/todas";
          miFuncionAjax(destino);
        }
      }
    }
  };

  if (str === "/todas") {
    xhr.open("GET", URL_DESTINO + destino, true);
    xhr.send(null);
  } else if (str === "/alta") {
    let myJson = JSON.stringify(txt);
    xhr.open("POST", URL_DESTINO + destino, true);
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
    xhr.send(myJson);
  } else if (str === "verUna") {
    xhr.open("GET", URL_DESTINO + destino2, true);
    xhr.send(null);
  } else if (str === "borrar") {
    xhr.open("DELETE", URL_DESTINO + destino2, true);
    xhr.send(null);
  } else if (str === "goEdit") {
    xhr.open("GET", URL_DESTINO + destino2, true);
    xhr.send(null);
  } else if (str === "/modificar") {
    let myJson = JSON.stringify(txt);
    xhr.open("PUT", URL_DESTINO + destino, true);
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
    xhr.send(myJson);
  }
}

//Funcion para ver todas las familias
function verTodas(jsonDoc) {
  titulo.innerHTML = "";

  let titH2 = document.createTextNode("Listado de Familias");
  titulo.appendChild(titH2);
  //Parseamos a JSON
  var json = JSON.parse(jsonDoc);

  //Creamos TABLA
  var tabla = document.createElement("table");
  var tablaTRH = document.createElement("tr");
  var tablaHeadsId = document.createElement("th");
  var tablaHeadsDesc = document.createElement("th");
  var tablaHeadsIdText = document.createTextNode("Id Familia");
  var tablaHeadsDescText = document.createTextNode("Descripcion");
  var tablaHeadsVer = document.createElement("th");
  var tablaHeadsVerTxt = document.createTextNode("Ver");
  var tablaHeadsDel = document.createElement("th");
  var tablaHeadsDelTxt = document.createTextNode("Borrar");
  var tablaHeadsEdit = document.createElement("th");
  var tablaHeadsEditTxt = document.createTextNode("Editar");

  //ADD on DIV
  tablaHeadsId.appendChild(tablaHeadsIdText);
  tablaHeadsDesc.appendChild(tablaHeadsDescText);
  tablaHeadsVer.appendChild(tablaHeadsVerTxt);
  tablaHeadsDel.appendChild(tablaHeadsDelTxt);
  tablaHeadsEdit.appendChild(tablaHeadsEditTxt);

  tablaTRH.appendChild(tablaHeadsId);
  tablaTRH.appendChild(tablaHeadsDesc);
  tablaTRH.appendChild(tablaHeadsVer);
  tablaTRH.appendChild(tablaHeadsDel);
  tablaTRH.appendChild(tablaHeadsEdit);

  tabla.appendChild(tablaTRH);
  contenedor.appendChild(tabla);

  //Creamos Registros
  var regTrs = [];
  var regTdsId = [];
  var regTdsIdTxt = [];
  var regTdsDesc = [];
  var regTdsDescTxt = [];

  //Arrays de opciones
  var tdsOpcVer = [];
  var tdsOpcVerA = [];
  var tdsOpcVerTxt = [];
  var tdsOpcDel = [];
  var tdsOpcDelA = [];
  var tdsOpcDelTxt = [];
  var tdsOpcEdit = [];
  var tdsOpcEditA = [];
  var tdsOpcEditTxt = [];

  for (let i = 0; i < json.length; i++) {
    //CREATE
    regTrs[i] = document.createElement("tr");
    regTdsId[i] = document.createElement("td");
    regTdsIdTxt[i] = document.createTextNode(json[i].idFamilia);
    regTdsDesc[i] = document.createElement("td");
    regTdsDescTxt[i] = document.createTextNode(json[i].descripcion);
    //Funcion ver
    tdsOpcVer[i] = document.createElement("td");
    tdsOpcVerA[i] = document.createElement("a");
    tdsOpcVerA[i].href = "";
    tdsOpcVerA[i].id = "/verUna/" + json[i].idFamilia;
    tdsOpcVerA[i].className = "ver";
    tdsOpcVerTxt[i] = document.createTextNode("Ver");
    //Funcion Borrar
    tdsOpcDel[i] = document.createElement("td");
    tdsOpcDelA[i] = document.createElement("a");
    tdsOpcDelA[i].href = "#";
    tdsOpcDelA[i].id = "/eliminar/" + json[i].idFamilia;
    tdsOpcDelA[i].className = "eli";
    tdsOpcDelTxt[i] = document.createTextNode("Borrar");
    //Funcion Editar
    tdsOpcEdit[i] = document.createElement("td");
    tdsOpcEditA[i] = document.createElement("a");
    tdsOpcEditA[i].href = "#";
    tdsOpcEditA[i].id = "e/verUna/" + json[i].idFamilia;
    tdsOpcEditA[i].className = "edit";
    tdsOpcEditTxt[i] = document.createTextNode("Editar");

    //ADD
    regTdsId[i].appendChild(regTdsIdTxt[i]);
    regTdsDesc[i].appendChild(regTdsDescTxt[i]);
    regTrs[i].appendChild(regTdsId[i]);
    regTrs[i].appendChild(regTdsDesc[i]);

    tdsOpcVerA[i].appendChild(tdsOpcVerTxt[i]);
    tdsOpcVer[i].appendChild(tdsOpcVerA[i]);

    tdsOpcDelA[i].appendChild(tdsOpcDelTxt[i]);
    tdsOpcDel[i].appendChild(tdsOpcDelA[i]);

    tdsOpcEditA[i].appendChild(tdsOpcEditTxt[i]);
    tdsOpcEdit[i].appendChild(tdsOpcEditA[i]);

    regTrs[i].appendChild(tdsOpcVer[i]);
    regTrs[i].appendChild(tdsOpcDel[i]);
    regTrs[i].appendChild(tdsOpcEdit[i]);

    tabla.appendChild(regTrs[i]);
  }

  for (let i = 0; i < json.length; i++) {
    let idUrl = document.getElementById(tdsOpcVerA[i].id);
    let ruta = idUrl.id;
    idUrl.addEventListener("click", function (event) {
      event.preventDefault();
      destino2 = ruta;
      let txt = "verUna";
      miFuncionAjax(txt);
    });
  }
  for (let i = 0; i < json.length; i++) {
    let idUrl = document.getElementById(tdsOpcDelA[i].id);
    let ruta = idUrl.id;
    idUrl.addEventListener("click", function (event) {
      event.preventDefault();
      destino2 = ruta;
      let txt = "borrar";
      miFuncionAjax(txt);
    });
  }
  for (let i = 0; i < json.length; i++) {
    let idUrl = document.getElementById(tdsOpcEditA[i].id);
    let ruta = idUrl.id;
    idUrl.addEventListener("click", function (event) {
      event.preventDefault();
      let ruta2 = ruta.slice(1);
      destino2 = ruta2;
      let txt = "goEdit";
      miFuncionAjax(txt);
    });
  }
}
function verUna(jsonDoc) {
  let json = JSON.parse(jsonDoc);

  titulo.innerHTML = "";
  contenedor.innerHTML = "";
  let startH2 = document.createTextNode("Familia: ");
  let idFamSpan = document.createElement("span");
  let idFamSpanTxt = document.createTextNode(json.idFamilia);
  let parraf = document.createElement("p");
  let parrafTxt = document.createTextNode(json.descripcion);

  idFamSpan.appendChild(idFamSpanTxt);
  parraf.appendChild(parrafTxt);
  titulo.appendChild(startH2);
  titulo.appendChild(idFamSpan);

  contenedor.appendChild(parraf);
}

function verUnaEdit(jsonDoc) {
  let json = JSON.parse(jsonDoc);
  titulo.innerHTML = "";
  contenedor.innerHTML = "";

  let ttlSpan = document.createElement("span");
  let ttlSpanTxt = document.createTextNode(" " + json.idFamilia);
  ttlSpan.appendChild(ttlSpanTxt);
  let textoH2 = "Editar Familia: ";
  let ttlH2 = document.createTextNode(textoH2);
  titulo.appendChild(ttlH2);
  titulo.appendChild(ttlSpan);
  //CREAMOS FORMULARIO
  //Creamos nodos
  var fieldSet = document.createElement("fieldset");
  var formu = document.createElement("form");
  formu.id = "formulario";
  formu.action = "/modificar";
  var divBox = document.createElement("div");
  divBox.className = "box";
  var divSub = document.createElement("div");
  divSub.className = "btnsForm";
  var label = document.createElement("label");
  var labelTxt = document.createTextNode("Descripción: ");
  var inputTxt = document.createElement("input");
  inputTxt.type = "text";
  inputTxt.value = json.descripcion;
  inputTxt.name = "descripcion";
  var inputId = document.createElement("input");
  inputId.type = "number";
  inputId.value = json.idFamilia;
  inputId.name = "idFamilia";
  inputId.className = "hide";
  var inputSubmt = document.createElement("input");
  inputSubmt.type = "submit";
  inputSubmt.value = "Editar";
  var inputReset = document.createElement("input");
  inputReset.type = "reset";
  inputReset.value = "Borrar";
  //ADD nodos
  label.appendChild(labelTxt);
  divBox.appendChild(inputId);
  divBox.appendChild(label);
  divBox.appendChild(inputTxt);
  divSub.appendChild(inputSubmt);
  divSub.appendChild(inputReset);
  formu.appendChild(divBox);
  formu.appendChild(divSub);
  fieldSet.appendChild(formu);

  contenedor.appendChild(fieldSet);

  formulario = document.getElementById("formulario");

  formulario.onsubmit = function (event) {
    event.preventDefault();
    let idValue = formulario.idFamilia.value;
    let valor = formulario.descripcion.value;
    let go = "/modificar";
    destino = formulario.getAttribute("action");
    let jsObj = { idFamilia: `${idValue}`, descripcion: `${valor}` };
    miFuncionAjax(go, jsObj);
  };
}

function formAltaFamilia() {
  titulo.innerHTML = "";

  let titH2 = document.createTextNode("Alta Familia");
  titulo.appendChild(titH2);
  //CREAMOS FORMULARIO
  //Creamos nodos
  var fieldSet = document.createElement("fieldset");
  var formu = document.createElement("form");
  formu.id = "formulario";
  formu.action = "/alta";
  //formu.method = "post";
  var divBox = document.createElement("div");
  divBox.className = "box";
  var divSub = document.createElement("div");
  divSub.className = "btnsForm";
  var label = document.createElement("label");
  var labelTxt = document.createTextNode("Descripción: ");
  var inputTxt = document.createElement("input");
  inputTxt.type = "text";
  inputTxt.placeholder = "añade descripción...";
  inputTxt.name = "descripcion";
  var inputSubmt = document.createElement("input");
  inputSubmt.type = "submit";
  inputSubmt.value = "Alta";
  var inputReset = document.createElement("input");
  inputReset.type = "reset";
  inputReset.value = "Borrar";

  //ADD nodos
  label.appendChild(labelTxt);
  divBox.appendChild(label);
  divBox.appendChild(inputTxt);
  divSub.appendChild(inputSubmt);
  divSub.appendChild(inputReset);
  formu.appendChild(divBox);
  formu.appendChild(divSub);
  fieldSet.appendChild(formu);

  contenedor.appendChild(fieldSet);

  formulario = document.getElementById("formulario");

  formulario.onsubmit = function (event) {
    event.preventDefault();
    let valor = formulario.descripcion.value;
    let go = "/alta";
    destino = formulario.getAttribute("action");
    let jsObj = { descripcion: `${valor}` };
    miFuncionAjax(go, jsObj);
  };
}
function funcionFamilia() {
  nav.innerHTML = "";
  titulo.innerHTML = "";

  let titFam = document.createTextNode("Gestion de Familias");
  titulo.appendChild(titFam);

  let links = [];
  let linksA = [];
  let linksANodeTxt = [];
  let linksATxt = ["Ver Todas", "Alta Familia", "Index"];
  let linksAId = ["todas", "formAlta", "index"];

  for (let i = 0; i < linksATxt.length; i++) {
    links[i] = document.createElement("li");
    linksA[i] = document.createElement("a");
    linksA[i].href = "#";
    linksA[i].id = linksAId[i];
    linksANodeTxt[i] = document.createTextNode(linksATxt[i]);
    linksA[i].appendChild(linksANodeTxt[i]);
    links[i].appendChild(linksA[i]);
    nav.appendChild(links[i]);
  }
  todas.addEventListener("click", function () {
    contenedor.innerHTML = "";
    destino = "/todas";
    miFuncionAjax(destino);
  });
  formAlta.addEventListener("click", function () {
    contenedor.innerHTML = "";
    formAltaFamilia();
  });
  index.addEventListener("click", function () {
    location.reload();
    return false;
  });
}

window.onload = function () {
  family.addEventListener("click", function () {
    funcionFamilia();
  });
};
