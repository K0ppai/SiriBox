import './index.css';
import logoImage from './assets/siribox-removebg-preview.png';
import { fetchData } from './modules/getDatafromApi.js';
import addEventListenerToCmtBtns from './modules/comment.js';
import { addEventListenerToLikeBtns, appendLikesToDom, fetchLikesCounts } from './modules/like.js';
import { countShows, showCount } from './modules/showCount.js';

const logo = document.getElementById('logo');
logo.src = logoImage;

const convertApiDataToHtml = (data) => {
  const htmlString = data.reverse().map((show) => `
          <div class="col d-flex flex-column mx-2 my-4 p-0 shows align-items-center justify-content-end">
            <div class="background-image" style="background-image: url(${show.image.original});"></div>
            <h1 class="m-0 show-titles text-white p-2">${show.name}</h1>
            <div class="d-flex align-items-center like-container">
              <span class="heart like-btn" id="${show.id}"></span>
              <span class="likes" id="like-count-${show.id}">${appendLikesToDom(show.id)} likes</span>
            </div>
            <button class="btn btn-outline-success cmt-btn fw-bold w-75 align-self-center px-2 py-1 p-md-1 mb-3" data="${show.id}">Comments</button>
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

displayShows('All Shows', allShows);

const displayShowsByGenre = (genre) => {
  if (genre === 'All Shows') {
    displayShows(genre, allShows);
    return;
  }
  if (genre === 'Choose Genre') {
    return;
  }
  const ShowsByGenre = allShows.filter((show) => show.genres.includes(genre));
  displayShows(genre, ShowsByGenre);
};

const chooseGenre = document.getElementById('drop-down');
chooseGenre.addEventListener('change', (e) => {
  displayShowsByGenre(e.target.value);
});