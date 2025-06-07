
window.registrarAsistencia = function(e) {
  e.preventDefault();
  const nombre = document.getElementById('nombreAsistente').value;
  const resp = document.getElementById('respuestaAsistencia').value;
  const li = document.createElement('li');
  li.textContent = nombre + ' - ' + resp;
  document.getElementById('listaAsistencia').appendChild(li);
  e.target.reset();
};
