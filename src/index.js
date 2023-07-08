import './index.css';
import logoImage from './assets/siribox-removebg-preview.png';
import { fetchData } from './modules/getDatafromApi.js';
import addEventListenerToCmtBtns from './modules/comment.js';
import { addEventListenerToLikeBtns, appendLikesToDom, fetchLikesCounts } from './modules/like.js';
import { countShows, showCount } from './modules/showCount.js';

const logo = document.getElementById('logo');
logo.src = logoImage;

const convertApiDataToHtml = (data) => {
  const htmlString = data.map((show) => `
          <div class="col d-flex flex-column mx-2 my-4 p-0 shows align-items-center justify-content-end scale-in-center">
            <div class="background-image" style="background-image: url(${show.image.original});"></div>
            <h1 class="m-0 show-titles text-white p-2">${show.name}</h1>
            <div class="row justify-content-center align-items-center w-100 px-md-2">
              <div class="col-md-4 col-3 d-flex align-items-center like-container p-0 px-md-2">
                <span class="heart like-btn" id="${show.id}"></span>
                <span class="likes" id="like-count-${show.id}">${appendLikesToDom(show.id)}</span>
              </div>
              <div class="col-md-8 col-9 d-flex justify-content-center justify-content-md-end p-0 px-md-2">
                <button class="btn btn-outline-success cmt-btn align-self-center px-1 py-1 px-md-2 py-md-1 mb-3" data="${show.id}">Comments</button>
              </div>
            </div>
          </div>
      `).join('');
  return htmlString;
};

const allShows = await fetchData();

const displayShows = async (genre, shows) => {
  await fetchLikesCounts();

  const htmlString = convertApiDataToHtml(shows);
  const ul = document.getElementById('lists-container');
  ul.innerHTML = htmlString;
  addEventListenerToLikeBtns();
  addEventListenerToCmtBtns();
  const numberOfShows = countShows();
  showCount(genre, numberOfShows);
};

await displayShows('All Shows', allShows.reverse());

const displayShowsByGenre = (genre) => {
  if (genre === 'All Shows') {
    displayShows(genre, allShows);
    return;
  }
  if (genre === 'Choose Genre' || genre === 'Genre') {
    return;
  }
  const ShowsByGenre = allShows.filter((show) => show.genres.includes(genre));
  displayShows(genre, ShowsByGenre.reverse());
};

const chooseGenre = document.getElementById('drop-down');
chooseGenre.addEventListener('change', (e) => {
  displayShowsByGenre(e.target.value);
});

const selectedOption = document.querySelector('option[selected]');

const updateSelectedOptionText = () => {
  if (window.innerWidth <= 768) {
    selectedOption.innerHTML = 'Genre';
  } else {
    selectedOption.innerHTML = 'Choose Genre';
  }
};

// Initial update when the page loads
updateSelectedOptionText();

// Event listener for window resize to update the text dynamically
window.addEventListener('resize', updateSelectedOptionText);
