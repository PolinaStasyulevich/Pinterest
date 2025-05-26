// обработчики событий// events.js — обработка событий: поиск, выбор доски, закрытие окон

export function setupEventListeners(gallery) {
  // ===== ПОИСК =====
  const search = document.querySelector('.search');

  if (search) {
    // Восстанавливаем из localStorage
    const savedSearch = localStorage.getItem('searchQuery');
    if (savedSearch) search.value = savedSearch;

    search.addEventListener('input', () => {
      const query = search.value.trim().toLowerCase();
      localStorage.setItem('searchQuery', query);

      const cards = document.querySelectorAll('.card');

      cards.forEach(card => {
        const tags = card.dataset.tags || '';
        if (!query || tags.includes('#' + query)) {
          card.style.removeProperty('display');
        } else {
          card.style.display = 'none';
        }
      });
    });
  }

  // ===== ВЫБОР ДОСКИ =====
  const boardBtn = document.querySelector('.board-button');
  const boardList = document.querySelector('.board-list');
  const boardItems = document.querySelectorAll('.board-item');

  boardItems.forEach(item => {
    item.addEventListener('click', () => {
      const selected = item.textContent;
      const targetId = item.dataset.target;

      localStorage.setItem('selectedBoard', selected);
      boardBtn.textContent = `Выбрано: ${selected} ▼`;
      boardList.classList.remove('show');

      // Скрыть все доски
      document.querySelectorAll('[id^="board-"]').forEach(el => {
        el.style.display = 'none';
      });

      // Показать выбранную доску
      const target = document.getElementById(targetId);
      if (target) target.style.display = 'flex';

      // Скрыть галерею
      gallery.style.display = 'none';
    });
  });

  // ===== ЗАКРЫТИЕ ОКОН ПО КЛИКУ =====
  document.addEventListener('click', (e) => {
    const modal = document.getElementById('myModal');
    const menu = document.getElementById('myMenu');
    const claim = document.getElementById('myClaim');
    const claimImage = document.getElementById('claimImage');

    if (e.target === modal) modal.style.display = 'none';
    if (e.target === menu) menu.style.display = 'none';
    if (e.target === claim) claim.style.display = 'none';
    if (e.target === claimImage) claimImage.style.display = 'none';
  });
}
