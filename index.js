const $btnEmpezar = document.getElementById("btnEmpezar");

const $cuadros = document.querySelectorAll(".cuadro");

let ronda = 0;
let jugadaPc = [],
  jugadaUsuario = [];

$btnEmpezar.onclick = empezarPartida;

function empezarPartida() {
  manejarRonda();
}

function bloqueoInputUsuario() {
  document.querySelectorAll(".cuadro").forEach((cuadro) => {
    cuadro.onclick = () => {};
  });
}

function desBloqueoInputUsuario() {
  document.querySelectorAll(".cuadro").forEach((cuadro) => {
    cuadro.onclick = manejarInputUsuario;
  });
}
function manejarInputUsuario(e) {
  const cuadro = e.target;
  //console.log(cuadro);
  activoCuadro(cuadro);
  jugadaUsuario.push(cuadro);
}
function actualizarEstado() {}
function manejarRonda() {
  actualizarEstado(`Turno Pc`);
  bloqueoInputUsuario();

  const $nuevoCuadro = obtenerCuadroAleatorio();
  jugadaPc.push($nuevoCuadro);

  const RETRASO_TURNO_JUGADOR = (jugadaPc.length + 1) * 1000;

  jugadaPc.forEach(function (cuadro, index) {
    const RETRASO_MS = (index + 1) * 1000;

    setTimeout(() => {
      activoCuadro(cuadro);
    }, RETRASO_MS);
  });

  setTimeout(() => {
    actualizarEstado(`Turno Jugador`);
    desBloqueoInputUsuario();
  }, RETRASO_TURNO_JUGADOR);

  jugadaUsuario = [];
  ronda++;

  actualizoNumeroRonda(ronda);
}

function actualizarEstado(estado) {
  document.getElementById("estado").innerText = estado;
}
function actualizoNumeroRonda(ronda) {
  document.getElementById("ronda").textContent = ronda;
}
function activoCuadro($cuadro) {
  activoSong($cuadro);
  $cuadro.style.opacity = 0.5;
  setTimeout(() => {
    $cuadro.style.opacity = 1;
    paroSong();
  }, 500);
}
function obtenerCuadroAleatorio() {
  const indice = Math.floor(Math.random() * (4 - 1 + 1) + 1);
  return $cuadros[indice];
}
function activoSong(cuadro) {
  /* const $audio = document.getElementById("audio");
  $audio.src = `./song/${cuadro}.mp3`;
  $audio.play(); */
}
function paroSong() {
  /*  const $audio = document.getElementById("audio");
  $audio.pause();
  $audio.src = ""; */
}
