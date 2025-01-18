
let listaAmigos = [];

function agregarAmigo() {
  const input = document.querySelector('input');
  const listaHtml = document.getElementById('listaAmigos');
  const amigo = input.value.trim();
  // Se verifica que el usuario haya ingresado algun nombre
  if (!amigo) {
    alert('Por favor, escribe un nombre válido.');
    return;
  }
  // Se verifica que el nombre ingresado no este presente en la lista
  if (listaAmigos.includes(amigo)) {
    alert(`${amigo} ya está incluido en la lista. Prueba con un nombre distinto.`);
  } else {
    // Se agrega el nombre ingresado a la lista
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
  // Se verifica que hayan amigos cargados
  if (listaAmigos.length === 0) {
    alert('No hay amigos en la lista. Agregue al menos un amigo.');
    return;
  }
  // se sortea un amigo de la lista y se presenta el resultado
  const randomIndex = Math.floor(Math.random() * listaAmigos.length);
  const li = document.createElement('li');
  li.textContent = `Tu amigo secreto es ${listaAmigos[randomIndex]}`;
  amigoSorteado.appendChild(li);

  // Reinicia la lista de amigos
  listaAmigos  = []
  document.getElementById('listaAmigos').innerHTML = listaAmigos
  
  // limpia los resultados y desja la app lista para voler a iniciar
  setTimeout(() => {
    amigoSorteado.innerHTML = '';
  }, 5000);
}