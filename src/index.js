const linksContainer = document.getElementById("links");
const nameContainer = document.querySelector("h1");



const data = {
    name: "Kevin Garcia MX",
    nickname: "k-ser",
    description: "...",
    avatar: "...",
    social: [
      {
        name: "youtube",
        url: "https://www.youtube.com/@K-ser05",
        username: "K-ser05",
      },
      {
        name: "github",
        url: "https://github.com/K-ser",
        username: "K-ser",
      },
      {
        name: "instagram",
        url: "https://www.instagram.com/ke.iv.kai",
        username: "ke.iv.kai",
      },
      {
        name: "X",
        url: "https://x.com/Kevin_HxC",
        username: "Kevin_HxC",
      },
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/kevin-garcia-a7a898247/",
        username: "Kevin Garcia",
      },
    ],
    links: [
      {
        name: "💸 Obten un mes adicional en tu suscripción a Platzi",
        url: "https://platzi.com/c/k-ser/",
        color: "green",
        emoji: "💻",
      },
      {
        name: "Mentorias",
        url: "https://www.linkedin.com/in/kevin-garcia-a7a898247/",
        color: "fuchsia",
        emoji: "💻",
      },
      {
        name: "BLOG",
        url: "https://example.com/",
        color: "yellow",
        emoji: "📖",
      },
      {
        name: "PODCAST",
        url: "https://example.com/",
        color: "blue",
        emoji: "🎙️",
      },
      {
        name: "CURSOS",
        url: "https://example.com/",
        color: "lime",
        emoji: "🎒",
      },
      {
        name: "SPONSORS (Media Kit)",
        url: "https://example.com/",
        color: "rose",
        emoji: "🚀",
      },
    ],
    footer: "Made with Love in Mexico",
  }; 

  const main = () => {
    let name = document.createTextNode(data?.name);

    let links = data?.links?.map((link) => {
        return `<div class="bg-${link.color}-200 px-4 py-5 w-full flex justify-between">
                <a class="text-sm font-bold text-${link.color}-600 text-center hover:text-${link.color}-800 cursor-pointer"
                href="${link.url}" target="_blank">
                ${link.name}
                </a>
                <span>${link.emoji}</span>
                </div>`;
    }).join('');

    nameContainer.appendChild(name);
    linksContainer.innerHTML = links;
  }

  main();