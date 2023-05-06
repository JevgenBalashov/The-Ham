const nameCssActive = 'active';
const loaderWrapper = document.querySelector('.loader-wrapper');

function clearStateActive(items) {
  [...items].forEach((item) => {
    item.classList.remove(nameCssActive);
  });
}

function setStateActive(item) {
  item.classList.add(nameCssActive);
}

function getStateActive(items) {
  return [...items].find((item) => item.classList.contains(nameCssActive));
}

const imagesMenuItemLink = 'images-menu__item-link';
const countItemsContent = [12, 24, 36];
const maxCountPushLoadBtn = 2;
let currentCountPushLoadBtn = 0;

const imagesMenu = document.querySelector('.our-work__images-menu');
const imagesContent = document.querySelector('.our-work__images-content');
const imagesLoadMoreBtn = document.querySelector('.our-work__button');

const all = {
  textForFirstItem: 'All Projects',
  datasetValue: 'all-projects',
};
const graphicDesign = {
  textForFirstItem: 'Graphic Design',
  datasetValue: 'graphic-design',
  path: './img/ourAmazWork/graphic-design/',
  items: [
    'graphic-design1.jpg',
    'graphic-design2.jpg',
    'graphic-design3.jpg',
    'graphic-design4.jpg',
    'graphic-design5.jpg',
    'graphic-design6.jpg',
    'graphic-design7.jpg',
    'graphic-design8.jpg',
    'graphic-design9.jpg',
    'graphic-design10.jpg',
    'graphic-design11.jpg',
    'graphic-design12.jpg',
  ],
};
const webDesign = {
  textForFirstItem: 'Web Design',
  datasetValue: 'web-design',
  path: './img/ourAmazWork/web_design/',
  items: [
    'web-design1.jpg',
    'web-design2.jpg',
    'web-design3.jpg',
    'web-design4.jpg',
    'web-design5.jpg',
    'web-design6.jpg',
    'web-design7.jpg',
    'web-design8.jpg',
    'web-design9.jpg',
    'web-design10.jpg',
    'web-design11.jpg',
    'web-design12.jpg',
  ],
};
const landingPages = {
  textForFirstItem: 'Landing Pages',
  datasetValue: 'landing-pages',
  path: './img/ourAmazWork/landing_page/',
  items: [
    'landing-page1.jpg',
    'landing-page2.jpg',
    'landing-page3.jpg',
    'landing-page4.jpg',
    'landing-page5.jpg',
    'landing-page6.jpg',
    'landing-page7.jpg',
    'landing-page8.jpg',
    'landing-page9.jpg',
    'landing-page10.jpg',
    'landing-page11.jpg',
    'landing-page12.jpg',
  ],
};
const wordpress = {
  textForFirstItem: 'Wordpress',
  datasetValue: 'wordpress',
  path: './img/ourAmazWork/wordpress/',
  items: [
    'wordpress1.jpg',
    'wordpress2.jpg',
    'wordpress3.jpg',
    'wordpress4.jpg',
    'wordpress5.jpg',
    'wordpress6.jpg',
    'wordpress7.jpg',
    'wordpress8.jpg',
    'wordpress9.jpg',
    'wordpress10.jpg',
    'wordpress11.jpg',
    'wordpress12.jpg',
  ],
};

function handlerImagesMenu(e) {
  const item = e.target;

  if (
    item.classList.contains(imagesMenuItemLink) &&
    !item.classList.contains(nameCssActive)
  ) {
    currentCountPushLoadBtn = 0;
    imagesLoadMoreBtn.classList.remove('disable');
    clearStateActive(imagesMenu.children);
    setStateActive(item);
    changeImagesContent();
  }
}

console.log(loaderWrapper)

function handlerLoadMoreBtn() {
  imagesLoadMoreBtn.classList.toggle('display-none')
  loaderWrapper.classList.toggle('display-none');
  console.log(document.querySelectorAll('.images-content__item').length)



  setTimeout(() => {
    loaderWrapper.style.opacity = 1;
  }, 300);

  setTimeout(() => {
    loaderWrapper.classList.toggle('display-none');
    imagesLoadMoreBtn.classList.toggle('display-none');
    loaderWrapper.style.opacity = 0;

    currentCountPushLoadBtn++;
    console.log(currentCountPushLoadBtn)
    // functional added images
    changeImagesContent();
    // end

    if (currentCountPushLoadBtn === maxCountPushLoadBtn) {

      imagesLoadMoreBtn.remove()
    }
  }, 2400);
}

function changeImagesContent() {
  const imagesMenuItemActive = getStateActive(imagesMenu.children);
  const nameObjItems = getObjNameFromDataset(imagesMenuItemActive);

  if (nameObjItems) {
    let i = 0;
    let countImage = 0;

    clearImagesContent();



    for (
      let count = 0;
      count < countItemsContent[currentCountPushLoadBtn];
      count++
    ) {
      i = Math.floor(Math.random() * nameObjItems.length);

      imagesContent.insertAdjacentHTML(
        'beforeend',
        imageItemContent(
          nameObjItems[i].textForFirstItem,
          nameObjItems[i].datasetValue,
          nameObjItems[i].path,
          nameObjItems[i].items[countImage]
        )
      );
      countImage =
        countImage >= nameObjItems[i].items.length - 1 ? 0 : countImage + 1;
    }
  } else {
    alert('Error: not find nameObjItems');
  }
}

function clearImagesContent() {
  imagesContent.innerHTML = '';
}

function imageItemContent(text, datasetValue, path, name) {
  return `
    <div class="images-content__item" data-images-item-link="${datasetValue}">
      <div class="images-content__item-front">
        <div class="images-content__item-img">
        <img src="${path}${name}" alt="${text}"/>
        <div class="img-card-icon-wrap">
          <div class="circle"><span><i class="img-card-icon fas fa-link"></i></span></div>
          <div class="circle"><span><i class="img-card-icon fas fa-search"></i></span>
          </div>
          <p class="img-card-title">CREATIVE DESIGN</p>
          <p class="img-card-category">Web Design</p>
        </div>
      </div>
    </div>

    `;
}

function getObjNameFromDataset(item) {
  let result;

  switch (item.dataset.imagesMenuLink) {
    case 'all-projects':
      result = [graphicDesign, webDesign, landingPages, wordpress];
      break;
    case 'graphic-design':
      result = [graphicDesign];
      break;
    case 'web-design':
      result = [webDesign];
      break;
    case 'landing-pages':
      result = [landingPages];
      break;
    case 'wordpress':
      result = [wordpress];
      break;
    default:
      result = false;
  }
  return result;
}

imagesMenu.addEventListener('click', handlerImagesMenu);
imagesLoadMoreBtn.addEventListener('click', handlerLoadMoreBtn);

changeImagesContent();