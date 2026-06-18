// замени на свои ссылки
const LINKS = {
  kwork: "https://kwork.ru/",
  telegram: "https://t.me/",
};

document.querySelectorAll("#link-kwork, #link-kwork-2").forEach((el) => {
  el.href = LINKS.kwork;
});

document.querySelectorAll("#link-telegram, #link-telegram-2").forEach((el) => {
  el.href = LINKS.telegram;
});
