const AROMATIZANTES = 1500;
const DIFUSORES = 2500;
const ACEITES = 1300;

const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const email = document.querySelector("#mail");
const cantidad = document.querySelector("#cantidadProductos");
const categoria = document.querySelector("#categoriaSelect");
const borrar = document.querySelector("#btnBorrar");
const resumen = document.querySelector("#btnResumen");
let totalPago = document.querySelector("#totalPago");

function limpiarRegistros() {
  nombre.value = "";
  apellido.value = "";
  email.value = "";
  cantidad.value = "";
  categoria.value = "";
  totalPago.textContent = "";
}

resumen.addEventListener("click", calcularMonto);



function calcularDescuento() {
  switch (categoria.value) {
    case "0":
      return AROMATIZANTES - AROMATIZANTES * 0.05;
    case "1":
      return DIFUSORES - DIFUSORES * 0.05;
    case "2":
      return ACEITES - ACEITES * 0.05;

    default:
      break;
  }
}

function calcularMonto() {
  cantidadNumerica = parseInt(cantidad.value);
  let descuento = calcularDescuento();
  totalPago.textContent = cantidadNumerica * descuento;
}
