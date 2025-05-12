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

const iconLogo = document.createElement('i');
iconLogo.classList.add('fa-brands', 'fa-pinterest', 'logo-icon');

const text = document.createElement('span');
text.classList.add('logo-text');
text.textContent = 'Pinterest';

logo.append(iconLogo, text);



// Поиск
const searchWrapper = document.createElement('div');
searchWrapper.classList.add('search-wrapper');

const iconSearch = document.createElement('i');
iconSearch.classList.add('fa-solid', 'fa-magnifying-glass', 'search-icon');

const search = document.createElement('input');
search.classList.add('search');
search.setAttribute('type', 'text');
search.setAttribute('placeholder', 'Идеи простых блюд на ужин, модных образов и многое другое');

searchWrapper.append(iconSearch, search);



// Кнопка "Выбрать доску"
const boardBtn = document.createElement('button');
boardBtn.classList.add('board-button');
boardBtn.textContent = 'Выбрать доску ▼';




// Добавляем всё в хедер
header.append(logo, searchWrapper, boardBtn);






// ---------- GALLERY ----------

const gallery = document.createElement('div');
gallery.classList.add('gallery');

// Карточка
const card = document.createElement('div');
card.classList.add('card');

// Изображение
const image = document.createElement('div');
image.classList.add('card-image');

// Кнопка "⋯"
const menuButton = document.createElement('button');
menuButton.classList.add('card-menu-button');
menuButton.innerHTML = '⋯';
image.append(menuButton);

// Аватар и описание
const meta = document.createElement('div');
meta.classList.add('card-meta');

const avatar = document.createElement('div');
avatar.classList.add('avatar');

const description = document.createElement('p');
description.classList.add('description');
description.textContent = 'Описание';

meta.append(avatar, description);
card.append(image, meta);

// ---------- СБОРКА ----------

gallery.append(card);
container.append(header, gallery);
main.append(container);