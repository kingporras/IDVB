
window.agregarPartido = function() {
  const historial = JSON.parse(localStorage.getItem('historialB') || '[]');
  const partido = prompt('Ej: 06/06 - Inter B 5-3 Rival | Goles: Rony(2), Dani(1), Porras(2) | MVP: Rony');
  if (partido) {
    historial.push(partido);
    localStorage.setItem('historialB', JSON.stringify(historial));
    renderHistorial();
  }
};

function renderHistorial() {
  const historial = JSON.parse(localStorage.getItem('historialB') || '[]');
  const ul = document.getElementById('listaHistorial');
  ul.innerHTML = '';
  historial.forEach(p => {
    const li = document.createElement('li');
    li.textContent = p;
    ul.appendChild(li);
  });
}

window.addEventListener('DOMContentLoaded', renderHistorial);
