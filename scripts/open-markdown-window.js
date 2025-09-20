function openMarkdownWindow(title) {
  fetch("./html/oppened-file.html")
    .then((res) => res.text())
    .then((html) => {
      const windowDiv = document.createElement("div");
      windowDiv.classList.add("oppened-file");
      windowDiv.style.zIndex = 2000;
      windowDiv.innerHTML = html;

      windowDiv.querySelector(".openned-file-title").textContent = title;

      const contentDiv = windowDiv.querySelector(".openned-file-title-div");
      contentDiv.innerHTML = "";

      if (title === "SobreMim") {
        fetch("./html/sobre/sobre-mim.html")
          .then((res) => res.text())
          .then((sobreHtml) => {
            contentDiv.innerHTML = sobreHtml;
          });
      }

      if (title === "Como virei techlead") {
        fetch("./html/blog/techlead.html")
          .then((res) => res.text())
          .then((sobreHtml) => {
            contentDiv.innerHTML = sobreHtml;
          });
      }

      document.body.appendChild(windowDiv);

      windowDiv.querySelector(".close-btn").addEventListener("click", () => {
        windowDiv.remove();
      });

      const header = windowDiv.querySelector(".openned-file-header");
      dragElement(windowDiv, header);
    });
}
