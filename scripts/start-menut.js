fetch("./html/footer.html")
  .then((res) => res.text())
  .then((html) => {
    document.getElementById("footer-placeholder").outerHTML = html;
    iniciarRelogio();
    const startButton = document.querySelector(".start");
    const startMenu = document.getElementById("startMenu");

    startButton.addEventListener("click", () => {
      startMenu.style.display =
        startMenu.style.display === "flex" ? "none" : "flex";
    });

    const startMenuItems = document.querySelectorAll(".start-menu-item");
    startMenuItems.forEach((item) => {
      item.addEventListener("click", () => {
        const title = item.querySelector("span").textContent.replace(/\s/g, "");
        openWindow(title);
        startMenu.style.display = "none";
      });
    });
  });
