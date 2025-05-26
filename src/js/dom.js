import { setupLayout } from './layout.js';
import { setupModals } from './modal.js';
import { loadPhotos } from './card.js';
import { setupEventListeners } from './events.js';

// Создаём DOM-элементы
const {
  main,
  container,
  header,
  gallery,
  boardCity,
  boardFood,
  boardNature
} = setupLayout();

// Добавляем элементы на страницу
container.append(header, gallery, boardCity, boardFood, boardNature);
main.append(container);

// Подключаем модалки
setupModals();

// Загружаем карточки
loadPhotos(gallery);

// Навешиваем обработчики (поиск и т.п.)
setupEventListeners(gallery);
