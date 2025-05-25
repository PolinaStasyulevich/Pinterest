// Получаем корневой контейнер
const main = document.getElementById('main');

// Создаём обёртку
const container = document.createElement('div');
container.classList.add('container');

// ---------- ХЕДЕР ----------
const header = document.createElement('header');
header.classList.add('header');

const logo = document.createElement('div');
logo.classList.add('logo');

const iconLogo = document.createElement('i');
iconLogo.classList.add('fa-brands', 'fa-pinterest', 'logo-icon');

const text = document.createElement('span');
text.classList.add('logo-text');
text.textContent = 'Pinterest';

logo.append(iconLogo, text);
logo.addEventListener('click', function() {
    gallery.classList.remove('boardHidden')
})

const searchWrapper = document.createElement('div');
searchWrapper.classList.add('search-wrapper');

const iconSearch = document.createElement('i');
iconSearch.classList.add('fa-solid', 'fa-magnifying-glass', 'search-icon');

const search = document.createElement('input');
search.classList.add('search');
search.setAttribute('type', 'text');
search.setAttribute('placeholder', 'Идеи простых блюд на ужин, модных образов и многое другое');

const savedSearch = localStorage.getItem('searchQuery');
if (savedSearch) search.value = savedSearch;

search.addEventListener('input', () => {
    localStorage.setItem('searchQuery', search.value);
});

searchWrapper.append(iconSearch, search);




const boardCity = document.createElement('div')
boardCity.id = 'board-0'
boardCity.classList.add('boardHidden')
boardCity.textContent = 'city'

const boardFood = document.createElement('div')
boardFood.id = 'board-1'
boardFood.classList.add('boardHidden')
boardFood.textContent =' food'

const boardNature = document.createElement('div')
boardNature.id = 'board-2'
boardNature.classList.add('boardHidden')
boardNature.textContent = 'nature'





// ---------- БУРГЕР-МЕНЮ ----------

const boardWrapper = document.createElement('div');
boardWrapper.classList.add('board-wrapper');

const boardBtn = document.createElement('button');
boardBtn.classList.add('board-button');
const savedBoard = localStorage.getItem('selectedBoard');
boardBtn.textContent = savedBoard ? `Выбрано: ${savedBoard} ▼` : 'Выбрать доску ▼';

const boardList = document.createElement('ul');
boardList.classList.add('board-list');

const boards = ['Города', 'Еда', 'Природа'];
boards.forEach((board, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = board;
    listItem.classList.add('board-item');
    listItem.dataset.target = `board-${index}`
    listItem.addEventListener('click', () => {
        localStorage.setItem('selectedBoard', board);
        boardBtn.textContent = `Выбрано: ${board} ▼`;
        boardList.classList.remove('show');

        // Скрываем все доски
        document.querySelectorAll('[id^="board-"]').forEach(boardEl => {
            boardEl.classList.add('boardHidden');
        });

        // Показываем только выбранную
        const menuLiAttribute = listItem.getAttribute('data-target');
        document.getElementById(menuLiAttribute).classList.remove('boardHidden');

        // Скрываем галерею
        gallery.classList.add('boardHidden');
    });
    boardList.appendChild(listItem);
});

boardBtn.addEventListener('click', () => {
    boardList.classList.toggle('show');
});

boardWrapper.append(boardBtn, boardList);
header.append(logo, searchWrapper, boardWrapper);




// ---------- GALLERY ----------
const gallery = document.createElement('div');
gallery.classList.add('gallery');


// ---------- МОДАЛКИ И КАРТОЧКИ ----------
const divContainer = document.createElement('div');

const myWindow = document.createElement('div');
myWindow.classList.add('modal');
myWindow.id = 'myModal';

const modalContent = document.createElement('div');
modalContent.classList.add('modalContent');
myWindow.appendChild(modalContent);

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

['Города', 'Еда', 'Природа'].forEach(name => {
    const btn = document.createElement('button');
    btn.textContent = name;
    btn.classList.add('buttonBoard');
    menuContent.appendChild(btn);
});

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


const div = document.createElement('div');
div.classList.add('divLabel');
menuClaim.appendChild(div);

const input = document.createElement('input');
input.classList.add('input');
input.type = 'radio';
input.id = 'claimLabel';
input.name = 'claimLabel'
div.appendChild(input)

const label = document.createElement('label');
label.textContent = 'Спам';
label.classList.add('label');
label.htmlFor = 'claimLabel';
div.appendChild(label);

const divOne = document.createElement('div');
divOne.classList.add('divLabel');
menuClaim.appendChild(divOne);

const inputOne = document.createElement('input');
inputOne.classList.add('input');
inputOne.type = 'radio';
inputOne.id = 'claimLabel2';
inputOne.name = 'claimLabel'
divOne.appendChild(inputOne);

const labelOne = document.createElement('label');
labelOne.textContent = 'Опасные товары';
labelOne.classList.add('label');
labelOne.htmlFor = 'claimLabel2';
divOne.appendChild(labelOne);

const divTwo = document.createElement('div');
divTwo.classList.add('divLabel');
menuClaim.appendChild(divTwo);

const inputTwo = document.createElement('input');
inputTwo.classList.add('input');
inputTwo.type = 'radio';
inputTwo.id = 'claimLabel3';
inputTwo.name = 'claimLabel'
divTwo.appendChild(inputTwo);

const labelTwo = document.createElement('label');
labelTwo.textContent = 'Нарушение конфиденциальности';
labelTwo.classList.add('label');
labelTwo.htmlFor = 'claimLabel3';
divTwo.appendChild(labelTwo);

const divThree = document.createElement('div');
divThree.classList.add('divLabel');
menuClaim.appendChild(divThree);

const inputThree = document.createElement('input');
inputThree.classList.add('input');
inputThree.type = 'radio';
inputThree.id = 'claimLabel4';
inputThree.name = 'claimLabel'
divThree.appendChild(inputThree);

const labelThree = document.createElement('label');
labelThree.textContent = 'Сцены насилия';
labelThree.classList.add('label');
labelThree.htmlFor = 'claimLabel4';
divThree.appendChild(labelThree);

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
divContainer.append(myWindow, windowMenu, windowClaim);


// ---------- ГЛОБАЛЬНЫЙ CLAIMIMAGE ----------

const claimImage = document.createElement('div');
claimImage.classList.add('claimImage');
claimImage.id = 'claimImage';

const claimHeading = document.createElement('h2');
claimHeading.textContent = 'Жалоба отправлена';
claimHeading.classList.add('claimHeading');
claimImage.appendChild(claimHeading);

const cliamDescription = document.createElement('p');
cliamDescription.textContent = 'Спасибо! Ваши отзывы помогают нам заботиться о безопасности сообщества Pinterest.';
cliamDescription.classList.add('cliamDescription');
claimImage.appendChild(cliamDescription);

// Загрузка карточек из MockAPI
function loadPhotos() {
    fetch('https://6829fe1fab2b5004cb357623.mockapi.io/photos')
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                const card = document.createElement('div');
                card.classList.add('card');

                const image = document.createElement('div');
                image.classList.add('card-image');
                image.style.backgroundImage = `url(${item.image})`;

                const menuButton = document.createElement('i');
                menuButton.classList.add('fa-solid', 'fa-ellipsis', 'card-menu-button');
                menuButton.addEventListener('click', () => {
                    myWindow.style.display = 'block';
                });
                image.append(menuButton);

               

                const meta = document.createElement('div');
                meta.classList.add('card-meta');

                const avatar = document.createElement('div');
                avatar.classList.add('avatar');
                avatar.style.backgroundImage = `url(${item.avatar})`;

                const description = document.createElement('p');
                description.classList.add('description');
                description.textContent = item.description;

                meta.append(avatar, description);
                card.append(image, meta, claimImage);
                gallery.appendChild(card);
            });
        });
}

loadPhotos();

container.append(header, gallery, divContainer, boardCity, boardFood, boardNature);
main.append(container, claimImage);

add.onclick = function() {
    myWindow.style.display = "none";
    windowMenu.style.display = "block"
}
modalHide.onclick = function() {
    myWindow.style.display = "none";
}
claim.onclick = function() {
    myWindow.style.display = "none";
    windowClaim.style.display = "block"
}
cancel.onclick = function() {
    windowClaim.style.display = "none"
}
send.onclick = function() {
    const allClaimImages = document.querySelectorAll('.claimImage');
    allClaimImages.forEach(elem => elem.style.display = "block");
    windowClaim.style.display = "none"
}
document.addEventListener('click', function(event) {
    if (event.target === myWindow) {
        myWindow.style.display = 'none';
    }
    if (event.target === windowMenu) {
        windowMenu.style.display = 'none';
    }
    if (event.target === windowClaim) {
        windowClaim.style.display = 'none';
    }
    if (event.target === claimImage) {
        claimImage.style.display = 'none';
    }
});