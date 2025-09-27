(() => {
  const options = {
    element: ['All', 'Electro', 'Hydro', 'Anemo'],
    type: ['All', 'Pole'],
    rarity: ['All', 'four', 'five']
  };

  // Текущие значения фильтров в UI (не применённые)
  const currentIndex = {
    element: 0,
    type: 0,
    rarity: 0
  };

  // Применённые фильтры (на основе которых фильтруем карточки)
  const appliedIndex = {
    element: 0,
    type: 0,
    rarity: 0
  };

  function updateFilterDisplay(filterName) {
    const container = document.querySelector(`.filter[data-filter="${filterName}"]`);
    const display = container.querySelector('.filter-value');
    display.textContent = options[filterName][currentIndex[filterName]];
  }

  function changeFilter(filterName, direction) {
    const arr = options[filterName];
    let idx = currentIndex[filterName];
    idx += direction;
    if (idx < 0) idx = arr.length - 1;
    if (idx >= arr.length) idx = 0;
    currentIndex[filterName] = idx;
    updateFilterDisplay(filterName);
  }

  function applyFilter() {
    const cardsContainer = document.querySelector('.cards-container');
    const cards = cardsContainer.querySelectorAll('article.cardAvatar');
    const noResultsElem = document.getElementById('no-results-message');

    let visibleCount = 0;

    const elValue = options.element[appliedIndex.element];
    const typeValue = options.type[appliedIndex.type];
    const rarityValue = options.rarity[appliedIndex.rarity];

    cards.forEach(card => {
      let show = true;

      if (elValue !== 'All' && !card.classList.contains(elValue)) show = false;
      if (typeValue !== 'All' && !card.classList.contains(typeValue)) show = false;
      if (rarityValue !== 'All' && !card.classList.contains(rarityValue)) show = false;

      card.style.display = show ? '' : 'none';

      if (show) visibleCount++;
    });

    // Показываем сообщение, если нет результатов
    if (visibleCount === 0) {
      noResultsElem.style.display = 'block';
    } else {
      noResultsElem.style.display = 'none';
    }
  }

  // Инициализация фильтров: кнопки переключения
  document.querySelectorAll('.filter').forEach(container => {
    const filterName = container.dataset.filter;

    const btnLeft = container.querySelector('button.arrow.left');
    const btnRight = container.querySelector('button.arrow.right');

    btnLeft.addEventListener('click', () => {
      changeFilter(filterName, -1);
    });

    btnRight.addEventListener('click', () => {
      changeFilter(filterName, +1);
    });

    // Обновить текст сразу
    updateFilterDisplay(filterName);
  });

  // Кнопка "Применить фильтр"
  document.getElementById('apply-filter').addEventListener('click', () => {
    for (let key in currentIndex) {
      appliedIndex[key] = currentIndex[key];
    }
    applyFilter();
  });

  // Кнопка "Сбросить фильтры"
  document.getElementById('reset-filter').addEventListener('click', () => {
    for (let key in currentIndex) {
      currentIndex[key] = 0;
      appliedIndex[key] = 0;
      updateFilterDisplay(key);
    }
    applyFilter();
  });

  // Изначально показываем все карточки
  applyFilter();
})();