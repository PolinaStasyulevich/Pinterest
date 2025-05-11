// работа с DOM: getElement, createEl, селекторы


// Получаем корневой контейнер
const main = document.getElementById('main');


// Создаём обёртку
const container = document.createElement('div');
container.classList.add('container');

// ---------- ХЕДЕР ----------

const header = document.createElement('header');
header.classList.add('header');

// Логотип
const logo = document.createElement('div');
logo.classList.add('logo');
logo.textContent = 'Pinterest';

// Поиск
const search = document.createElement('input');
search.classList.add('search');
search.setAttribute('type', 'text');
search.setAttribute('placeholder', 'поиск...');

// Кнопка "Выбрать доску"
const boardBtn = document.createElement('button');
boardBtn.classList.add('board-button');
boardBtn.textContent = 'Выбрать доску ▼';

// Добавляем в хедер
header.append(logo, search, boardBtn);

// ---------- КАРТОЧКА ----------

const card = document.createElement('div');
card.classList.add('card');

// Изображение
const image = document.createElement('div');
image.classList.add('card-image');

// Аватар и описание
const meta = document.createElement('div');
meta.classList.add('card-meta');

const avatar = document.createElement('div');
avatar.classList.add('avatar');

const description = document.createElement('p');
description.classList.add('description');
description.textContent = 'Описание';

// Собираем карточку
meta.append(avatar, description);
card.append(image, meta);

// Вставляем всё в контейнер
container.append(header, card);

// И добавляем в main
main.append(container);
