const folder1 = document.getElementById("folder1");
const folder2 = document.getElementById("folder2");
const folder3 = document.getElementById("folder3");

const icon1 = folder1.querySelector(".clicable");
const icon2 = folder2.querySelector(".clicable");
const icon3 = folder3.querySelector(".clicable");

dragElement(folder1, icon1);
dragElement(folder2, icon2);
dragElement(folder3, icon3);
dragElement(cobrinha, icon4);

function getAllDraggables() {
  return Array.from(
    document.querySelectorAll(".folder, .window, .oppened-file, .openned-file")
  );
}

function bringToFront(el) {
  getAllDraggables().forEach((other) => {
    if (other !== el) other.style.zIndex = 1000;
  });
  el.style.zIndex = 1001;
}

function dragElement(elmnt, handle) {
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  let onMove, onUp;
  let hasMoved = false; // <-- 1. Variável para rastrear o movimento

  const startDrag = (e) => {
    e.preventDefault();
    bringToFront(elmnt);

    hasMoved = false; // <-- Reseta a variável a cada novo clique
    pos3 = e.clientX;
    pos4 = e.clientY;

    const rect = elmnt.getBoundingClientRect();
    elmnt.style.position = "absolute";
    elmnt.style.left = rect.left + "px";
    elmnt.style.top = rect.top + "px";

    onMove = (ev) => {
      ev.preventDefault();

      // Se o mouse se mover mais que um pouquinho, consideramos um arrasto
      if (Math.abs(pos3 - ev.clientX) > 5 || Math.abs(pos4 - ev.clientY) > 5) {
        hasMoved = true; // <-- 2. Marca que o elemento foi movido
      }

      pos1 = pos3 - ev.clientX;
      pos2 = pos4 - ev.clientY;
      pos3 = ev.clientX;
      pos4 = ev.clientY;

      const maxWidth = window.innerWidth;
      const maxHeight = window.innerHeight;
      const elemWidth = elmnt.offsetWidth;
      const elemHeight = elmnt.offsetHeight;

      let newTop = elmnt.offsetTop - pos2;
      let newLeft = elmnt.offsetLeft - pos1;

      newTop = Math.max(0, Math.min(newTop, maxHeight - elemHeight));
      newLeft = Math.max(0, Math.min(newLeft, maxWidth - elemWidth));

      elmnt.style.top = newTop + "px";
      elmnt.style.left = newLeft + "px";
    };

    onUp = () => {
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerup", onUp);

      // 3. Se moveu, prepara para bloquear o próximo clique
      if (hasMoved) {
        elmnt.addEventListener("click", blockClick, {
          capture: true,
          once: true,
        });
      }
    };

    document.addEventListener("pointermove", onMove);
    document.addEventListener("pointerup", onUp);
  };

  // 4. Função que efetivamente bloqueia o clique
  const blockClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  handle.addEventListener("pointerdown", startDrag);
  elmnt.addEventListener("pointerdown", (e) => {
    if (e.target === handle) return;
    bringToFront(elmnt);
  });
}
