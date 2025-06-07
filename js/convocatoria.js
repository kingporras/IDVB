
window.guardarConvocatoria = function() {
  const txt = document.getElementById('convocatoriaInput').value;
  localStorage.setItem('convocatoriaB', txt);
  alert('Convocatoria guardada');
};

window.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('convocatoriaB');
  if (saved) document.getElementById('convocatoriaInput').value = saved;
});
