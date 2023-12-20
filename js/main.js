// Codigo de las librerias, animaciones y funciones de la pagina
const swiper = new Swiper(".swiper", {
  // Parámetros opcionales
  direction: "horizontal",
  loop: true,

  // Paginación
  pagination: {
    el: ".swiper-pagination",
  },

  // Navegación
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

document.addEventListener("DOMContentLoaded", (event) => {
  if (typeof particlesJS !== "undefined") {
    particlesJS.load(
      "particles-js",
      "./src/particlesjs-config.json",
      function () {
        console.log("particles.js loaded");
      }
    );
  } else {
    console.log("particlesJS is not defined");
  }
});
var rellax = new Rellax(".hero-section", {
  speed: -2,
  center: false,
  wrapper: null,
  round: true,
  vertical: true,
  horizontal: false,
});

//* Código para manipular el DOM

const habilidades = [
  {
    categoria: "Frontend",
    skills: [
      { imagen: "img/html-5.png", nombre: "HTML5" },
      { imagen: "img/css3.png", nombre: "CSS3" },
      { imagen: "img/javascript.png", nombre: "Javascript" },
      { imagen: "img/jquery.png", nombre: "jQuery" },
    ],
  },
  {
    categoria: "Backend",
    skills: [
      { imagen: "img/php.png", nombre: "PHP" },
      { imagen: "img/nodejs.png", nombre: "Node.js" },
      { imagen: "img/mysql.png", nombre: "MySQL" },
      { imagen: "img/sqlite.png", nombre: "SQLite" },
    ],
  },
  {
    categoria: "Servidores y Control de Versiones",
    skills: [
      { imagen: "img/linux.png", nombre: "Linux" },
      { imagen: "img/docker.png", nombre: "Docker" },
      { imagen: "img/git.png", nombre: "Git" },
      { imagen: "img/github.png", nombre: "Github" },
      { imagen: "img/actions.png", nombre: "Github Actions" },
      { imagen: "img/nginx.png", nombre: "Server Nginx" },
      { imagen: "img/apache.png", nombre: "Server Apache" },
    ],
  },
];

function generarHTMLHabilidades(habilidades) {
  const contenedor = document.getElementById("habilidades");

  habilidades.forEach((categoria) => {
    let htmlCategoria = `<h3 class="text-2xl font-semibold mb-4">${categoria.categoria}</h3>
                           <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">`;

    categoria.skills.forEach((skill) => {
      htmlCategoria += `<div class="skill-card">
                                <img src="${skill.imagen}" alt="${skill.nombre}" class="mx-auto" />
                                <p class="text-center mt-2">${skill.nombre}</p>
                            </div>`;
    });

    htmlCategoria += `</div>`;
    contenedor.innerHTML += htmlCategoria;
  });
}

// Animación suave al darle click a enlace
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start", // Puedes cambiar a 'end', 'center', etc.
    });
  });
});

//* Mi document.ready pero version vanilla
document.addEventListener("DOMContentLoaded", () => {
  generarHTMLHabilidades(habilidades);
});
