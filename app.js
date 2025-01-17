
let listaAmigos = [];

function agregarAmigo() {
  const input = document.querySelector('input');
  const listaHtml = document.getElementById('listaAmigos');
  const amigo = input.value.trim();

  if (!amigo) {
    alert('Por favor, escribe un nombre válido.');
    return;
  }

  if (listaAmigos.includes(amigo)) {
    alert(`${amigo} ya está incluido en la lista. Prueba con un nombre distinto.`);
  } else {
    listaAmigos.push(amigo);
    input.value = '';
    actualizarListaHtml(listaHtml);
  }
}

function actualizarListaHtml(listaHtml) {
  listaHtml.innerHTML = ''; // Limpia la lista antes de agregar nuevos elementos
  listaAmigos.forEach((amigo) => {
    const li = document.createElement('li');
    li.textContent = amigo;
    listaHtml.appendChild(li);
  });
  console.log(listaAmigos)
}

function sortearAmigo() {
  const amigoSorteado  = document.getElementById('resultado')
  if (listaAmigos.length === 0) {
    alert('No hay amigos en la lista. Agregue al menos un amigo.');
    return;
  }
  const randomIndex = Math.floor(Math.random() * listaAmigos.length);
  const li = document.createElement('li');
  li.textContent = `Tu amigo secreto es ${listaAmigos[randomIndex]}`;
  amigoSorteado.appendChild(li);
  listaAmigos  = []
  document.getElementById('listaAmigos').innerHTML = listaAmigos
}