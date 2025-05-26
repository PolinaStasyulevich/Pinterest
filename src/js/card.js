// card.js — создание карточек и загрузка данных

import { selectedCardData, selectedCardElement } from './state.js';

// Создаёт одну карточку на основе item (объект с image, avatar, tags, description)
export function createCard(item) {
  const card = document.createElement('div');
  card.classList.add('card');

  // Присваиваем теги
  card.dataset.tags = item.tags.join(' ').toLowerCase(); 
  // Например: "#еда #итальянская"

  // Изображение карточки
  const image = document.createElement('div');
  image.classList.add('card-image');
  image.style.backgroundImage = `url(${item.image})`;

  // Кнопка меню (три точки)
  const menuButton = document.createElement('i');
  menuButton.classList.add('fa-solid', 'fa-ellipsis', 'card-menu-button');

  // При клике открываем модалку и сохраняем данные
  menuButton.addEventListener('click', () => {
    const modal = document.getElementById('myModal');
    if (modal) {
      modal.style.display = 'flex';
      selectedCardData.value = item;
      selectedCardElement.value = card;
    }
  });

  image.append(menuButton);

  // Метаданные (аватар + описание)
  const meta = document.createElement('div');
  meta.classList.add('card-meta');

  const avatar = document.createElement('div');
  avatar.classList.add('avatar');
  avatar.style.backgroundImage = `url(${item.avatar})`;

  const description = document.createElement('p');
  description.classList.add('description');
  description.textContent = item.description;

  meta.append(avatar, description);
  card.append(image, meta);

  return card;
}

// Загружает карточки по API и добавляет их в переданный контейнер
export function loadPhotos(gallery) {
  fetch('https://6829fe1fab2b5004cb357623.mockapi.io/photos')
    .then(response => response.json())
    .then(data => {
      data.forEach(item => {
        const card = createCard(item);
        gallery.appendChild(card);
      });
    })
    .catch(error => {
      console.error('Ошибка загрузки карточек:', error);
    });
}
