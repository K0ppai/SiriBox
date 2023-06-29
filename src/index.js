import './index.css';
import { addEventListenerToCmtBtns, getData } from './modules/comment.js';
import { addEventListenerToLikeBtns, appendLikesToDom, fetchLikesCounts } from './modules/like.js';

const convertApiDataToHtml = (data) => {
  const htmlString = data.reverse().map((show) => `
          <div class="col d-flex flex-column w-25 m-md-5">
            <img src="${show.image.original}" alt="${show.name}" class="h-75"/>
            <div class="d-flex w-100 justify-content-center align-items-center py-2">
              <span class="m-0 fw-bold">${show.name}</span>
              <div class="d-flex ps-2 align-items-center">
                <i class="fa-regular fa-heart like-btn fs-5" id="${show.id}" style="color: #ff0000;"></i>
                <span class="likes pt-3" id="like-count-${show.id}">${appendLikesToDom(show.id)}</span>
              </div>
            </div>
            <button class="btn btn-outline-success cmt-btn" data="${show.id}">Comments</button>
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
  addEventListenerToCmtBtns();
  addEventListenerToLikeBtns();
};
displayAllMovies();