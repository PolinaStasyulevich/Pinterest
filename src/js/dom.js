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

// Восстанавливаем предыдущий поисковый запрос
const savedSearch = localStorage.getItem('searchQuery');
if (savedSearch) {
    search.value = savedSearch;
}

// Сохраняем поисковой запрос при изменении
search.addEventListener('input', () => {
    localStorage.setItem('searchQuery', search.value);
});

searchWrapper.append(iconSearch, search);

// ---------- БУРГЕР-МЕНЮ ----------
const boardWrapper = document.createElement('div');
boardWrapper.classList.add('board-wrapper');

// Кнопка "Выбрать доску"
const boardBtn = document.createElement('button');
boardBtn.classList.add('board-button');

// Устанавливаем текст кнопки из `localStorage`, если он есть
const savedBoard = localStorage.getItem('selectedBoard');
boardBtn.textContent = savedBoard ? `Выбрано: ${savedBoard} ▼` : 'Выбрать доску ▼';

// Список досок
const boardList = document.createElement('ul');
boardList.classList.add('board-list');

const boards = ['Доска 1', 'Доска 2', 'Доска 3'];
boards.forEach(board => {
    const listItem = document.createElement('li');
    listItem.textContent = board;
    listItem.classList.add('board-item');
    
    // Сохраняем выбор в `localStorage`
    listItem.addEventListener('click', () => {
        localStorage.setItem('selectedBoard', board);
        boardBtn.textContent = `Выбрано: ${board} ▼`;
        boardList.classList.remove('show'); 
    });

    boardList.appendChild(listItem);
});

// Обработчик клика с плавным появлением списка
boardBtn.addEventListener('click', () => {
    boardList.classList.toggle('show');
});
// Добавляем кнопку и список в обертку
boardWrapper.appendChild(boardBtn);
boardWrapper.appendChild(boardList);

// Добавляем всё в хедер
header.append(logo, searchWrapper, boardWrapper);

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
const menuButton = document.createElement('i');
menuButton.classList.add('fa-solid', 'fa-ellipsis','card-menu-button');
image.append(menuButton);

// Аватар и описание
const meta = document.createElement('div');
meta.classList.add('card-meta');

const avatar = document.createElement('div');
avatar.classList.add('avatar');

const description = document.createElement('p');
description.classList.add('description');
description.textContent = 'Интерьер';

meta.append(avatar, description);
card.append(image, meta);

// Сохраняем последний просмотренный элемент
card.addEventListener('click', () => {
    localStorage.setItem('lastViewed', description.textContent);
});

// Проверяем, есть ли сохранённый просмотренный элемент
const lastViewed = localStorage.getItem('lastViewed');
if (lastViewed) {
    description.textContent = `Последний просмотр: ${lastViewed}`;
}

// ---------- СБОРКА ----------
gallery.append(card);
container.append(header, gallery);
main.append(container);
