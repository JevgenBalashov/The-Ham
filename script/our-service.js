// code for first tab section on landing page
const tabsList = document.querySelector('#tabsList');
const tabsContentCards = document.querySelectorAll('.tabs-content-card');

tabsList.addEventListener('click', function (ev) {
  if (ev.target.classList.contains('tabs-info-list')) {
    const dataContent = ev.target.getAttribute('data-content');

    tabsContentCards.forEach(function (tab) {
      if (tab.getAttribute('data-content') === dataContent) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    tabsList.querySelectorAll('.tabs-info-list').forEach(function (li) {
      li.classList.remove('active');
    });

    ev.target.classList.add('active');
  }
});
