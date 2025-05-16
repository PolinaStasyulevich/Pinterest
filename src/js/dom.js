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
const menuButton = document.createElement('i');
menuButton.classList.add('fa-solid', 'fa-ellipsis','card-menu-button');
menuButton.id = 'openModalBtn'
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

//==================================================

// const main = document.getElementById('main')

// const container = document.createElement('div')
// container.classList.add('container')

// const buttonAll = document.createElement('button')
// buttonAll.textContent = 'Модульное окно'
// buttonAll.classList.add('button')
// buttonAll.id = 'openModalBtn'

const divContainer = document.createElement('div')
// ------Первое модальное окно------------------------------------
const myWindow = document.createElement('div')
myWindow.classList.add('modal')
myWindow.id = 'myModal'

const modalContent = document.createElement('div')
modalContent.classList.add('modalContent')
myWindow.appendChild(modalContent)

const oneDiv = document.createElement('div')
oneDiv.classList.add('divModal')

const iconAdd = document.createElement('i')
iconAdd.classList.add('fa-solid', 'fa-plus', 'iconModal')
oneDiv.appendChild(iconAdd)

const add = document.createElement('button')
add.textContent = 'Добавить на доску'
add.classList.add('buttonModal')
add.id = 'addClaim'
oneDiv.append(add)

const twoDiv = document.createElement('div')
twoDiv.classList.add('divModal')

const iconHide = document.createElement('i')
iconHide.classList.add('fa-regular', 'fa-eye-slash', 'iconModal')
twoDiv.appendChild(iconHide)

const modalHide = document.createElement('button')
modalHide.textContent = 'Скрыть пин со страницы'
modalHide.classList.add('buttonModal')
modalHide.id = 'addHide'
twoDiv.append(modalHide)

const threeDiv = document.createElement('div')
threeDiv.classList.add('divModal')

const iconClaim = document.createElement('i')
iconClaim.classList.add('fa-solid', 'fa-trash', 'iconModal')
threeDiv.appendChild(iconClaim)

const claim = document.createElement('button')
claim.textContent = 'Пожаловаться'
claim.classList.add('buttonModal')
claim.id = 'Claim'
threeDiv.append(claim)
modalContent.append(oneDiv, twoDiv, threeDiv)
// ------Второе модальное окно------------------------------------
const windowMenu = document.createElement('div')
windowMenu.classList.add('windowMenu')
windowMenu.id = 'myMenu'

const menuContent = document.createElement('div')
menuContent.classList.add('menuContent')
windowMenu.appendChild(menuContent)

const menuText = document.createElement('div')
menuText.textContent = 'Меню'
menuText.classList.add('menuText')
menuContent.appendChild(menuText)

const modalOne = document.createElement('button')
modalOne.textContent = 'Доска 1'
modalOne.classList.add('buttonBoard')
menuContent.appendChild(modalOne)

const modalTwy = document.createElement('button')
modalTwy.textContent = 'Доска 2'
modalTwy.classList.add('buttonBoard')
menuContent.appendChild(modalTwy)

const modalThree = document.createElement('button')
modalThree.textContent = 'Доска 3'
modalThree.classList.add('buttonBoard')
menuContent.appendChild(modalThree)
// ------Третие модальное окно------------------------------------
const windowClaim = document.createElement('div')
windowClaim.classList.add('windowClaim')
windowClaim.id = 'myClaim'

const claimContent = document.createElement('div')
claimContent.classList.add('claimContent')
windowClaim.appendChild(claimContent)
// -----Создание формы--------------------------------------------
const menuClaim = document.createElement('form')
menuClaim.classList.add('menuClaim')

const menuClaimText = document.createElement('div')
menuClaimText.textContent = 'Жалоба на пин'
menuClaimText.classList.add('menuClaimText')
menuClaim.appendChild(menuClaimText)

const div = document.createElement('div')
menuClaim.appendChild(div)

const input = document.createElement('input')
input.classList.add('input')
input.type = 'radio'
input.id = 'claimLabel'
input.setAttribute("name", "claimForm")
div.appendChild(input)

const label = document.createElement('label')
label.textContent = 'Спам'
label.classList.add('label')
label.htmlFor = 'claimLabel'
label.setAttribute("name", "claimForm")
div.appendChild(label)

const divOne = document.createElement('div')
menuClaim.appendChild(divOne)

const inputOne = document.createElement('input')
inputOne.classList.add('input')
inputOne.type = 'radio'
inputOne.id = 'claimLabel'
inputOne.setAttribute("name", "claimForm")
divOne.appendChild(inputOne)

const labelOne = document.createElement('label')
labelOne.textContent = 'Опасные товары'
labelOne.classList.add('label')
labelOne.htmlFor = 'claimLabel'
labelOne.setAttribute("name", "claimForm")
divOne.appendChild(labelOne)

const divTwo = document.createElement('div')
menuClaim.appendChild(divTwo)

const inputTwo = document.createElement('input')
inputTwo.classList.add('input')
inputTwo.type = 'radio'
inputTwo.id = 'claimLabel'
inputTwo.setAttribute("name", "claimForm")
divTwo.appendChild(inputTwo)

const labelTwo = document.createElement('label')
labelTwo.textContent = 'Нарушение конфиденциальности'
labelTwo.classList.add('label')
labelTwo.htmlFor = 'claimLabel'
labelTwo.setAttribute("name", "claimForm")
divTwo.appendChild(labelTwo)

const divThree = document.createElement('div')
menuClaim.appendChild(divThree)

const inputThree = document.createElement('input')
inputThree.classList.add('input')
inputThree.type = 'radio'
inputThree.id = 'claimLabel'
inputThree.setAttribute("name", "claimForm")
divThree.appendChild(inputThree)

const labelThree = document.createElement('label')
labelThree.textContent = 'Сцены насилия'
labelThree.classList.add('label')
labelThree.htmlFor = 'claimLabel'
labelThree.setAttribute("name", "claimForm")
divThree.appendChild(labelThree)

const menuButtonAdd = document.createElement('div')
menuButtonAdd.classList.add('menuButtonAdd')

const cancel = document.createElement('button')
cancel.textContent = 'cancel'
cancel.classList.add('cancel')
menuButtonAdd.appendChild(cancel)

const send = document.createElement('button')
send.textContent = 'send'
send.classList.add('send')
menuButtonAdd.appendChild(send)
//==================================================

// ---------- СБОРКА ----------

// claimContent.append(menuClaim, menuButtonAdd)
// container.append(buttonAll, myWindow, windowMenu, windowClaim)

gallery.append(card);
claimContent.append(menuClaim, menuButtonAdd)
divContainer.append(buttonAll, myWindow, windowMenu, windowClaim)
container.append(header, gallery, divContainer);
main.append(container);

// Получаем элементы DOM
const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openModalBtn");
const modalMenu = document.getElementById("myMenu")
const claimAdd= document.getElementById("myClaim")


// Открываем модальное окно при клике на кнопку
openBtn.onclick = function() {
    modal.style.display = "block";
}

// Закрываем модальное окно при клике
add.onclick = function() {
    modal.style.display = "none";
    modalMenu.style.display = "block"

}
modalHide.onclick = function() {
    modal.style.display = "none";
}

claim.onclick = function() {
    modal.style.display = "none";
    claimAdd.style.display = "block"
}

// Закрываем модальное окно при клике вне его области
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == modalMenu){
        modalMenu.style.display = "none"
    }
    if (event.target == claimAdd) {
        claimAdd.style.display = "none";
    }
}