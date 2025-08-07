// Accederemos a los datos de una API pública de Game Of Thrones, 
// queremos un select con todos los nombres de los personajes para que cuando un usuario seleccione un nombre salga su imagen en el medio de la página, algo así:

// Para obtener los datos con los que jugar necesitaremos estudiar la documentación de la API y buscar la url necesaria para los datos que queramos, para este paso os pedimos que de verdad os esforcéis buscándola en la documentación, queremos la url que me traiga los datos de todos los personajes de GOT, sin embargo, en la slide siguiente tendréis la url directa de esos datos.

// URL de la documentación (para que indaguéis): https://thronesapi.com/

// Esta sería la URL final (la que deberéis utilizar para vuestra petición):

// https://thronesapi.com/api/v2/Characters


    const nombre = document.getElementById('character-list');
    const imagen = document.getElementById('character-image');

    fetch('https://thronesapi.com/api/v2/Characters')
      .then(response => response.json())
      .then(data => {
        data.forEach(personaje => {
          const option = document.createElement('option');
          option.value = personaje.imageUrl;
          option.textContent = personaje.fullName;
          nombre.appendChild(option);
        });
    })
    nombre.addEventListener('change', () => {
      const url = nombre.value;
      if (url) {
        imagen.src = url;
      } else (null);
    });