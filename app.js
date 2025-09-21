const actors = [
  { id: "dicaprio", name: "Леонардо ДиКаприо" },
  { id: "hanks", name: "Том Хэнкс" },
  { id: "deniro", name: "Роберт Де Ниро" },
  { id: "streep", name: "Мерил Стрип" },
  { id: "pitt", name: "Брэд Питт" },
];

const list = document.getElementById("actor-list");

actors.forEach(actor => {
  const btn = document.createElement("button");
  btn.textContent = actor.name;
  btn.onclick = () => {
    Telegram.WebApp.sendData(actor.id);
  };
  list.appendChild(btn);
});

Telegram.WebApp.ready();
