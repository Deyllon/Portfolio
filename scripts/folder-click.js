// Seleciona todas as pastas
const folders = document.querySelectorAll(".folder");

folders.forEach((folder) => {
  folder.addEventListener("click", () => {
    const title = folder.querySelector(".texto").textContent;
    openWindow(title);
  });
});

function openWindow(title) {
  fetch("./html/window.html")
    .then((res) => res.text())
    .then((html) => {
      const windowDiv = document.createElement("div");
      windowDiv.classList.add("window");
      windowDiv.innerHTML = html;

      windowDiv.querySelectorAll(".window-title").forEach((el) => {
        el.textContent = title;
      });
      windowDiv.querySelectorAll(".window-title-div").forEach((el) => {
        if (title === "SobreMim") {
          const wrapper = document.createElement("div");
          wrapper.className = "div-sobre-mim";
          const img = document.createElement("img");
          img.className = "img-sobre-mim";
          img.src = "./img/notebook.png";
          img.alt = "Sobre mim";
          const p = document.createElement("p");
          p.textContent = "Sobre Mim";

          wrapper.appendChild(img);
          wrapper.appendChild(p);

          el.innerHTML = "";
          el.appendChild(wrapper);
          wrapper.addEventListener("click", () => {
            openMarkdownWindow("SobreMim");
          });
        }

        if (title === "Blog") {
          const wrapper = document.createElement("div");
          wrapper.className = "div-sobre-mim";
          const img = document.createElement("img");
          img.className = "img-sobre-mim";
          img.src = "./img/notebook.png";
          img.alt = "Como virei techlead";
          const p = document.createElement("p");
          p.textContent = "Como virei techlead";

          wrapper.appendChild(img);
          wrapper.appendChild(p);

          el.innerHTML = "";
          el.appendChild(wrapper);
          wrapper.addEventListener("click", () => {
            openMarkdownWindow("Como virei techlead");
          });
        }

        if (title === "Projetos") {
          const wrapper = document.createElement("div");
          wrapper.className = "div-sobre-mim";
          const img = document.createElement("img");
          img.className = "img-sobre-mim";
          img.src = "./img/fully.png";
          img.alt = "Fully";
          const p = document.createElement("p");
          p.textContent = "Fully";

          wrapper.appendChild(img);
          wrapper.appendChild(p);

          el.innerHTML = "";
          el.appendChild(wrapper);
          wrapper.addEventListener("click", () => {
            window.open("https://www.livefully.com/pt/homepage-pt", "_blank");
          });
        }
      });
      document.body.appendChild(windowDiv);

      windowDiv.querySelector(".close-btn").addEventListener("click", () => {
        windowDiv.remove();
      });
      const header = windowDiv.querySelector(".window-header");
      dragElement(windowDiv, header);
    });
}
