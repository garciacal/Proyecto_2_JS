// Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html
//que imprima cada uno de los albums. Que tenga la apariencia de una web completa dentro de lo posible.

const albums = [
  { title: "De Mysteriis Dom Sathanas", image: "fotos/Demysteriis.jpg", link: "https://open.spotify.com/intl-es/album/7mHVfSXtdzvPk7TkdhoekE" },
  { title: "Reign of Blood", image: "fotos/reignofblood.jpg", link: "https://open.spotify.com/intl-es/album/5v5BfkxWDAKTkzrXl3H0mU"},
  { title: "Ride the Lightning", image: "fotos/ridethelightning.jpg", link: "https://open.spotify.com/intl-es/album/05DePtm7oQMdL3Uzw2Jmsc"},
  { title: "Painkiller", image: "fotos/painkiller.jpg", link: "https://open.spotify.com/intl-es/album/7LgrhuKnAXpNEv8qzcVd2t"},
  { title: "Iron Fist", image: "fotos/ironfist.jpg", link: "https://open.spotify.com/intl-es/album/728HEEgXa98wouqC8nOdQR"},
];

const ul = document.createElement("ul");

for (let i = 0; i < albums.length; i++) {
  const li = document.createElement("li");

  const title = document.createElement("p");
  title.textContent = albums[i].title;
  li.appendChild(title);

  const img = document.createElement("img");
  img.src = albums[i].image;
  img.alt = albums[i].title;
  img.style.width = "150px";
  li.appendChild(img);

  const button = document.createElement("button");
  button.textContent = "Escuchar album en Spotify";

   button.addEventListener("click", () => {
    if (albums[i].link) {
      window.open(albums[i].link, "_blank");
    } else {
      alert("Link no disponible en Spoty");
    }
  });


  li.appendChild(button);
  ul.appendChild(li);
}

document.body.appendChild(ul);