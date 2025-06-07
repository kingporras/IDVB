
window.votarMVP = function() {
  const nombre = document.getElementById('nombreMVP').value;
  const votos = JSON.parse(localStorage.getItem('votosMVP') || '{}');
  votos[nombre] = (votos[nombre] || 0) + 1;
  localStorage.setItem('votosMVP', JSON.stringify(votos));
  renderVotos();
};

function renderVotos() {
  const votos = JSON.parse(localStorage.getItem('votosMVP') || '{}');
  const lista = document.getElementById('rankingMVP');
  lista.innerHTML = '';
  Object.entries(votos).sort((a, b) => b[1] - a[1]).forEach(([nombre, cantidad]) => {
    const li = document.createElement('li');
    li.textContent = `${nombre}: ${cantidad}`;
    lista.appendChild(li);
  });
}

window.addEventListener('DOMContentLoaded', renderVotos);
