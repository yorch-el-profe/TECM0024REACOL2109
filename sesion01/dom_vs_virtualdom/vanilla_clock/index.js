function updateClock() {
  const root = document.getElementById("root");

  root.innerHTML = `
    <h1>Hello from Vanilla JS</h1>
    <h2>${new Date().toLocaleTimeString()}</h2>
  `;
}

// Ejecutar cada segundo la función updateClock
setInterval(updateClock, 1000);

updateClock();
