// modal.js — создаёт модальные окна: "пожаловаться", "добавить", "скрыть", "меню"

import { selectedCardData, selectedCardElement } from './state.js';
import { createCard } from './card.js';

export function setupModals() {
  // ========== МОДАЛЬНОЕ ОКНО ПИНА ==========
  const myWindow = document.createElement('div');
  myWindow.classList.add('modal');
  myWindow.id = 'myModal';

  const modalContent = document.createElement('div');
  modalContent.classList.add('modalContent');
  myWindow.appendChild(modalContent);

  // Кнопка "Добавить"
  const oneDiv = document.createElement('div');
  oneDiv.classList.add('divModal');

  const iconAdd = document.createElement('i');
  iconAdd.classList.add('fa-solid', 'fa-plus', 'iconModal');
  oneDiv.appendChild(iconAdd);

  const add = document.createElement('button');
  add.textContent = ' Добавить на доску';
  add.classList.add('buttonModal');
  add.id = 'addClaim';
  oneDiv.append(add);

  // Кнопка "Скрыть"
  const twoDiv = document.createElement('div');
  twoDiv.classList.add('divModal');

  const iconHide = document.createElement('i');
  iconHide.classList.add('fa-regular', 'fa-eye-slash', 'iconModal');
  twoDiv.appendChild(iconHide);

  const modalHide = document.createElement('button');
  modalHide.textContent = ' Скрыть пин со страницы';
  modalHide.classList.add('buttonModal');
  modalHide.id = 'addHide';
  twoDiv.append(modalHide);

  // Кнопка "Пожаловаться"
  const threeDiv = document.createElement('div');
  threeDiv.classList.add('divModal');

  const iconClaim = document.createElement('i');
  iconClaim.classList.add('fa-solid', 'fa-trash', 'iconModal');
  threeDiv.appendChild(iconClaim);

  const claim = document.createElement('button');
  claim.textContent = 'Пожаловаться';
  claim.classList.add('buttonModal');
  claim.id = 'Claim';
  threeDiv.append(claim);

  modalContent.append(oneDiv, twoDiv, threeDiv);

  // ========== ОКНО МЕНЮ (выбор доски) ==========
  const windowMenu = document.createElement('div');
  windowMenu.classList.add('windowMenu');
  windowMenu.id = 'myMenu';

  const menuContent = document.createElement('div');
  menuContent.classList.add('menuContent');
  windowMenu.appendChild(menuContent);

  const menuText = document.createElement('div');
  menuText.textContent = 'Меню';
  menuText.classList.add('menuText');
  menuContent.appendChild(menuText);

  ['Города', 'Еда', 'Природа'].forEach((name, index) => {
    const btn = document.createElement('button');
    btn.textContent = name;
    btn.classList.add('buttonBoard');

    btn.addEventListener('click', () => {
      if (selectedCardData.value) {
        const board = document.getElementById(`board-${index}`);
        const card = createCard(selectedCardData.value);
        board.appendChild(card);
        selectedCardData.value = null;
        windowMenu.style.display = 'none';
      }
    });

    menuContent.appendChild(btn);
  });

  // ========== ОКНО ЖАЛОБЫ ==========
  const windowClaim = document.createElement('div');
  windowClaim.classList.add('windowClaim');
  windowClaim.id = 'myClaim';

  const claimContent = document.createElement('div');
  claimContent.classList.add('claimContent');
  windowClaim.appendChild(claimContent);

  const menuClaim = document.createElement('form');
  menuClaim.classList.add('menuClaim');

  const menuClaimText = document.createElement('div');
  menuClaimText.textContent = 'Жалоба на пин';
  menuClaimText.classList.add('menuClaimText');
  menuClaim.appendChild(menuClaimText);

  const reasons = [
    { id: 'claimLabel', text: 'Спам' },
    { id: 'claimLabel2', text: 'Опасные товары' },
    { id: 'claimLabel3', text: 'Нарушение конфиденциальности' },
    { id: 'claimLabel4', text: 'Сцены насилия' }
  ];

  reasons.forEach(reason => {
    const div = document.createElement('div');
    div.classList.add('divLabel');

    const input = document.createElement('input');
    input.classList.add('input');
    input.type = 'radio';
    input.name = 'claimLabel';
    input.id = reason.id;

    const label = document.createElement('label');
    label.textContent = reason.text;
    label.classList.add('label');
    label.htmlFor = reason.id;

    div.append(input, label);
    menuClaim.appendChild(div);
  });

  const menuButtonAdd = document.createElement('div');
  menuButtonAdd.classList.add('menuButtonAdd');

  const cancel = document.createElement('button');
  cancel.textContent = 'Отмена';
  cancel.classList.add('cancel');
  menuButtonAdd.appendChild(cancel);

  const send = document.createElement('button');
  send.textContent = 'Отправить';
  send.classList.add('send');
  menuButtonAdd.appendChild(send);

  claimContent.append(menuClaim, menuButtonAdd);

  // ========== ОКНО "Жалоба отправлена" ==========
  const claimImage = document.createElement('div');
  claimImage.classList.add('claimImage');
  claimImage.id = 'claimImage';

  const claimHeading = document.createElement('h2');
  claimHeading.textContent = 'Жалоба отправлена';
  claimHeading.classList.add('claimHeading');
  claimImage.style.display = 'none';

  const cliamDescription = document.createElement('p');
  cliamDescription.textContent = 'Спасибо! Ваши отзывы помогают нам заботиться о безопасности сообщества Pinterest.';
  cliamDescription.classList.add('cliamDescription');

  claimImage.append(claimHeading, cliamDescription);

  // ========== ОБРАБОТЧИКИ ==========
  add.onclick = () => {
    myWindow.style.display = 'none';
    windowMenu.style.display = 'flex';
  };

  modalHide.onclick = () => {
    myWindow.style.display = 'none';
    if (selectedCardElement.value) {
      selectedCardElement.value.style.display = 'none';
    }
  };

  claim.onclick = () => {
    myWindow.style.display = 'none';
    windowClaim.style.display = 'flex';
  };

  cancel.onclick = () => {
    windowClaim.style.display = 'none';
  };

  send.onclick = () => {
    document.querySelectorAll('.claimImage').forEach(el => el.style.display = 'block');
    windowClaim.style.display = 'none';
  };

  document.addEventListener('click', e => {
    if (e.target === myWindow) myWindow.style.display = 'none';
    if (e.target === windowMenu) windowMenu.style.display = 'none';
    if (e.target === windowClaim) windowClaim.style.display = 'none';
    if (e.target === claimImage) claimImage.style.display = 'none';
  });

  // Добавляем всё в DOM
  document.body.append(myWindow, windowMenu, windowClaim, claimImage);
}
