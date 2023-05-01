const menuItems = document.querySelectorAll('.portfolio-item');
const workCards = document.querySelectorAll('.work-card');

let allFilterSelected = false;

menuItems.forEach(item => {
  item.addEventListener('click', function() {
    const currentItem = item;
    const currentFilter = currentItem.getAttribute('data-item-card-img');

    menuItems.forEach(item => {
      item.classList.remove('active');
    });

    currentItem.classList.add('active');

    workCards.forEach(card => {
      const cardFilters = card.getAttribute('data-item-card-img').split(' ');

      if (currentFilter === 'all') {
        if (allFilterSelected) {
          if (!cardFilters.includes(currentFilter)) {
            card.style.display = 'none';
          }
        } else {
          card.style.display = 'block';
          allFilterSelected = true;
        }
      } else if (cardFilters.includes(currentFilter)) {
        card.style.display = 'block';
        allFilterSelected = false;
      } else {
        card.style.display = 'none';
        allFilterSelected = false;
      }
    });
  });
});





const loadMoreButton = document.getElementById('btn-loadMore');
const hiddenBlocks = document.querySelectorAll('.work-card[hidden]');

loadMoreButton.addEventListener('click', () => {
  hiddenBlocks.forEach((block) => {
    block.removeAttribute('hidden');
  });
  loadMoreButton.remove();
});