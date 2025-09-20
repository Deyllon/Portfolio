function iniciarRelogio() {
  const clockEl = document.getElementById("clock");
  if (!clockEl) return;

  function atualizarRelogio() {
    const agora = new Date().toLocaleTimeString("en-US", {
      timeZone: "America/Sao_Paulo",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    clockEl.textContent = agora;

    const segundosRestantes = 60 - new Date().getSeconds();
    setTimeout(atualizarRelogio, segundosRestantes * 1000);
  }

  atualizarRelogio();
}

window.iniciarRelogio = iniciarRelogio;
