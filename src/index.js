import './index.css';
import logoImage from './assets/siribox-removebg-preview.png';
import { addEventListenerToCmtBtns, getData } from './modules/comment.js';
import { addEventListenerToLikeBtns, appendLikesToDom, fetchLikesCounts } from './modules/like.js';
import { countShows, showCount } from './modules/showCount.js';

const logo = document.getElementById('logo');
logo.src = logoImage;

const convertApiDataToHtml = (data) => {
  const htmlString = data.reverse().map((show) => `
          <div class="col d-flex flex-column m-md-5 shows">
            <img src="${show.image.original}" alt="${show.name}" class="h-75"/>
            <div class="d-flex w-100 justify-content-center align-items-center py-2">
              <span class="m-0 text-left w-75">${show.name}</span>
              <div class="d-flex ps-2 align-items-center">
                <i class="fa-regular fa-heart like-btn fs-5" id="${show.id}" style="color: #ff0000;"></i>
                <span class="likes pt-3" id="like-count-${show.id}">${appendLikesToDom(show.id)}</span>
              </div>
            </div>
            <button class="btn btn-outline-success cmt-btn fw-bold w-75 align-self-center p-1" data="${show.id}">Comments</button>
          </div>
      `).join('');
  return htmlString;
};

const displayAllMovies = async () => {
  const data = await getData();

  await fetchLikesCounts();

  const shows = convertApiDataToHtml(data);
  const ul = document.getElementById('lists-container');
  ul.innerHTML = shows;
  countShows();
  showCount(countShows());
  addEventListenerToCmtBtns();
  addEventListenerToLikeBtns();
};
displayAllMovies();
