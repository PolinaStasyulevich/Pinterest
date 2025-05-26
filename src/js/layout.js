import { loadSearchQuery, loadSelectedBoard } from './storage.js';

export function setupLayout() {
  const main = document.getElementById('main');

  // Контейнер
  const container = document.createElement('div');
  container.classList.add('container');

  // ===== HEADER =====
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
    logo.addEventListener('click', () => {
        gallery.style.display = 'flex';
        boardCity.style.display = 'none';
        boardFood.style.display = 'none';
        boardNature.style.display = 'none';
    });

  // Поиск
  const searchWrapper = document.createElement('div');
  searchWrapper.classList.add('search-wrapper');

  const iconSearch = document.createElement('i');
  iconSearch.classList.add('fa-solid', 'fa-magnifying-glass', 'search-icon');

  const search = document.createElement('input');
  search.classList.add('search');
  search.type = 'text';
  search.placeholder = 'Идеи простых блюд на ужин, модных образов и многое другое';

  const savedSearch = loadSearchQuery();
  if (savedSearch) search.value = savedSearch;

  searchWrapper.append(iconSearch, search);

  // Меню выбора доски
  const boardWrapper = document.createElement('div');
  boardWrapper.classList.add('board-wrapper');

  const boardBtn = document.createElement('button');
  boardBtn.classList.add('board-button');

  const savedBoard = loadSelectedBoard();
  boardBtn.textContent = savedBoard ? `Выбрано: ${savedBoard} ▼` : 'Выбрать доску ▼';

  const boardList = document.createElement('ul');
  boardList.classList.add('board-list');

  const boards = ['Города', 'Еда', 'Природа'];

  boards.forEach((board, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = board;
    listItem.classList.add('board-item');
    listItem.dataset.target = `board-${index}`;
    boardList.appendChild(listItem);
  });

  boardBtn.addEventListener('click', () => {
    boardList.classList.toggle('show');
  });

  boardWrapper.append(boardBtn, boardList);

  // Сборка header
  header.append(logo, searchWrapper, boardWrapper);

  // ===== GALLERY =====
  const gallery = document.createElement('div');
  gallery.classList.add('gallery');

  // ===== ДОСКИ =====
  const boardCity = document.createElement('div');
  boardCity.id = 'board-0';
  boardCity.style.display = 'none';

  const boardFood = document.createElement('div');
  boardFood.id = 'board-1';
  boardFood.style.display = 'none';

  const boardNature = document.createElement('div');
  boardNature.id = 'board-2';
  boardNature.style.display = 'none';

  // Возврат всех нужных элементов
  return {
    main,
    container,
    header,
    gallery,
    boardCity,
    boardFood,
    boardNature,
    boardBtn,
    boardList,
    boards,
    logo,
    search
  };
}
