
const jugadores = {
  portero: ['1 Pablo'],
  defensas: ['18 SHH', '69 SALO', '16 IVÁN A'],
  medios: ['10 Dani', '7 Gera', '17 El Madriles', '8 Grizzi', '6 Daud'],
  delanteros: ['9 El Porras', '11 Rony']
};

const campo = document.getElementById('campo');
for (const linea in jugadores) {
  const div = document.createElement('div');
  div.className = 'linea ' + linea;
  jugadores[linea].forEach(j => {
    const jugador = document.createElement('div');
    jugador.className = 'jugador';
    jugador.textContent = j;
    div.appendChild(jugador);
  });
  campo.appendChild(div);
}
