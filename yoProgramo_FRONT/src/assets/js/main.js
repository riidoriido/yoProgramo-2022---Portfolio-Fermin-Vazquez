//storage
const misEventos = JSON.parse(localStorage.getItem("misJSON")) || [];
let saveToLocalStorage = () => {
  let storageJSON = JSON.stringify(misEventos);
  localStorage.setItem("eventosGuardadosJSON", storageJSON);
};

//listado
const listaServicios = [
  {
    id: 0,
    nombre: "Bautismo",
    tipo: "ceremonia",
    duracion: `5 horas`,
    precio: 25000,
  },
  {
    id: 1,
    nombre: "Boda",
    tipo: "ceremonia",
    duracion: `8 horas`,
    precio: 75000,
  },
  {
    id: 2,
    nombre: "Comunion",
    tipo: "ceremonia",
    duracion: `5 horas`,
    precio: 25000,
  },
  {
    id: 3,
    nombre: "Quinces",
    tipo: "fiesta",
    duracion: `8 horas`,
    precio: 50000,
  },
  {
    id: 4,
    nombre: "Diploma",
    tipo: "registro",
    duracion: `4 horas`,
    precio: 35000,
  },
  {
    id: 5,
    nombre: "Eventos",
    tipo: "fiesta",
    duracion: `5 horas`,
    precio: 40000,
  },
  {
    id: 6,
    nombre: "Recitales",
    tipo: "registro",
    duracion: `3 horas`,
    precio: 10000,
  },
  {
    id: 7,
    nombre: "Producto",
    tipo: "producto",
    duracion: `2 horas`,
    precio: 7500,
  },
];
//hora
const valorHora = 2500;
const DateTime = luxon.DateTime;
const dt = DateTime.now();

//inicio
let btn1 = document.getElementById("listabtn1");
let btn2 = document.getElementById("presupuestobtn2");
let btn3 = document.getElementById("contactobtn3");

btn1.addEventListener("click", publicarLista);
btn2.addEventListener("click", crear);
btn3.addEventListener("click", publicarForm);

//funcion para publicar listaServicios[] en div (usa BS)

function publicarLista() {
  let html = "";
  let heading = 1;
  for (let i = 0; i < listaServicios.length; i++) {
    heading = heading + 1;
    html =
      html +
      `
<div class="accordion accordion-flush" id="itemLista">
  <div class="accordion-item">
    <h5 class="accordion-header" id="flush-heading${heading}">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${heading}" aria-expanded="false" aria-controls="flush-collapse${heading}">
       ${listaServicios[i].nombre}
      </button>
    </h5>
    <div id="flush-collapse${heading}" class="accordion-collapse collapse" aria-labelledby="flush-heading${heading}" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <p>Valor de ARS${listaServicios[i].precio}</p>
        <p>Aproximadamente ${listaServicios[i].duracion}</p>
      </div>
    </div>
  </div>
  </div>`;
  }
  document.getElementById("contenedor").innerHTML =
    html +
    `<button class="btn btn-dark" id="atrasbtn" type="button">Atrás</button>`;
  document.getElementById("atrasbtn").onclick = function () {
    atras();
  };
}
// //fin lista

//evento nuevo
class Evento {
  constructor(nombre, duracion, precio, fecha) {
    this.nombre = nombre;
    this.duracion = duracion;
    this.precio = precio;
    this.fecha = fecha;
  }
  cargar() {
    misEventos.push(this);
  }
}
const miEvento = new Evento();

//llamar creacion

//crear
function crear() {
  document.getElementById("contenedor").innerHTML = `
    <h5>Cargá la info de tu evento:</h5>
    <form id="crearEvento">
    <div class="mb-3">
      <label for="nombreEvento" class="form-label">Evento</label>
      <input type="text" class="form-control" id="nombre" aria-describedby="info1">
      <div id="info1" class="form-text">Acá escribí el evento que querés registrar.</div>
    </div>
    <div class="mb-3">
      <label for="duracionEvento" class="form-label">Duración</label>
      <input type="number" min="1" max="12" class="form-control" id="duracion">
    </div>
    <div class="mb-3">
      <label for="fechaEvento" class="form-label">Fecha</label>
      <input type="date" class="form-control" id="fecha">
    </div>
    <button type="submit" class="btn btn-dark w-100" id="btnenviar">Enviar!</button>
  </form>

  <button class="btn btn-dark" id="atrasbtn" type="button">Atrás</button>
  `;
  let form = document.getElementById("crearEvento");
  form.addEventListener("submit", pushData);
  function pushData(e) {
    e.preventDefault();
    const consulta = new Evento(
      document.getElementById("crearEvento")[0].value,
      document.getElementById("crearEvento")[1].value + `hs`,
      document.getElementById("crearEvento")[1].value * valorHora,
      document.getElementById("crearEvento")[2].value
    );
    consulta.cargar();
    saveToLocalStorage();
    const validar = isNaN(consulta.nombre) ? true : false && consulta.nombre;
    validar
      ? swal(
          `El registro de tu ${consulta.nombre} te costaria aproximadamente $${consulta.precio}ARS`
        )
      : swal(
          `${consulta.nombre} no es válido como evento, por favor revisa tus datos.`
        );
  }
  document.getElementById("atrasbtn").onclick = function () {
    atras();
  };
}

// historial
const btnHist = document.getElementById("historial");
btnHist.addEventListener("click", generarHist);
function generarHist() {
  let html = "";
  for (let i = 0; i < misEventos.length; i++) {
    html =
      html +
      `
      <li id="itemlista">${misEventos[i].nombre} | ${misEventos[i].fecha} | ${misEventos[i].duracion} | ${misEventos[i].precio}</li>
    `;
  }
  document.getElementById("dropdownHist").innerHTML = html;
}

//remover elemento
let borrar = (id) => {
  misEventos.splice(id, 1);
  generarHist();
  saveToLocalStorage();
};

const btnBorrar = document
  .getElementById("borrarHist")
  .addEventListener("click", borrar);

//contacto

function publicarForm() {
  document.getElementById("contenedor").innerHTML = `
  <h5>Hablemos!</h5>
  <form id="contacto">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Nombre</label>
    <input type="text" class="form-control" placeholder="Tu nombre, o apodo." name="name">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Correo Electrónico</label>
    <input type="email" class="form-control" placeholder="Tu correo electrónico." name="email">
  </div>
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Dejá tu mensaje!</label>
  <textarea class="form-control" rows="3" placeholder="O hace tu consulta. ;)" name="message"></textarea>
</div>
  <input type="submit" class="btn btn-dark w-100" id="btncontacto" value="Enviar!">
</form>
  <button class="btn btn-dark" id="atrasbtn" type="button">Atrás</button>
`;
  document.getElementById("atrasbtn").onclick = function () {
    atras();
  };
  const btncontacto = document.getElementById("btncontacto");

  document
    .getElementById("contacto")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      btncontacto.value = "Enviando...";

      const serviceID = "default_service";
      const templateID = "template_w3nbqih";

      emailjs.sendForm(serviceID, templateID, this).then(
        () => {
          btncontacto.value = "Enviar!";
          swal(`Gracias por ponerte en contacto! Responderé a la brevedad. :)`);
        },
        (err) => {
          btncontacto.value = "Enviar!";
          swal(JSON.stringify(err));
        }
      );
    });
}

//volver inicio
//funcion para restaurar inicio

function atras() {
  document.getElementById("contenedor").innerHTML = `
        <button class="btn btn-dark" id="listabtn1" type="button">Lista de servicios</button>
        <button class="btn btn-dark" id="presupuestobtn2" type="button">Consultar presupuesto</button>
        <button class="btn btn-dark" id="contactobtn3" type="button">Contacto</button>
        `;
  btn1 = document.getElementById("listabtn1");
  btn2 = document.getElementById("presupuestobtn2");
  btn3 = document.getElementById("contactobtn3");
  btn1.addEventListener("click", publicarLista);
  btn2.addEventListener("click", crear);
  btn3.addEventListener("click", publicarForm);
}

//valorhora

const fechaHoy = (document.getElementById("valorhr").innerHTML = `
    <p>Los trabajos especiales se cobrarán en principio por hora de trabajo. </br> La <b>hora</b> tiene un valor de $${valorHora}ARS/h <i>. (${dt.toLocaleString()})</i>  </p>`);
