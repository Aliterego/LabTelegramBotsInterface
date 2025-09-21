const zodiacSigns = [
  { id: "aries", name: "♈ Овен" },
  { id: "taurus", name: "♉ Телец" },
  { id: "gemini", name: "♊ Близнецы" },
  { id: "cancer", name: "♋ Рак" },
  { id: "leo", name: "♌ Лев" },
  { id: "virgo", name: "♍ Дева" },
  { id: "libra", name: "♎ Весы" },
  { id: "scorpio", name: "♏ Скорпион" },
  { id: "sagittarius", name: "♐ Стрелец" },
  { id: "capricorn", name: "♑ Козерог" },
  { id: "aquarius", name: "♒ Водолей" },
  { id: "pisces", name: "♓ Рыбы" },
];

// Находим контейнер
const list = document.getElementById("zodiac-list");

// Рисуем кнопки
zodiacSigns.forEach(sign => {
  const btn = document.createElement("button");
  btn.textContent = sign.name;
  btn.onclick = () => {
    // Отправляем данные обратно в бота
    Telegram.WebApp.sendData(sign.id);
  };
  list.appendChild(btn);
});

// Инициализация Telegram WebApp
Telegram.WebApp.ready();
