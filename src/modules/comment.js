import getData from './getDatafromApi.js';
import commentCounter from './commentCount.js';

const parentElement = document.getElementById('parent-container');
const appId = '9FCYozFTWHToQfPAhtFa';
const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const findShowById = async (id) => {
  const datas = await getData();
  const show = await datas.find((data) => data.id === Number(id));
  return show;
};

const addEventListenerToCloseBtns = () => {
  const closeBtns = document.querySelectorAll('.close-btn');
  closeBtns.forEach((closeBtn) => {
    closeBtn.addEventListener('click', () => {
      const popUp = document.getElementById('popUp');
      parentElement.removeChild(popUp);
    });
  });
};

const limitSentences = (pTag, limit) => {
  const sentenceRegex = /[.!?,;]+/g;
  const sentences = pTag.textContent.trim().split(sentenceRegex);

  if (sentences.length > limit) {
    const truncatedSentences = sentences.slice(0, limit);
    const truncatedText = `${truncatedSentences.join(' ')}...`;
    pTag.textContent = truncatedText;
  }
};

const postCommentToApi = async (event, nameInput, commentInput) => {
  const requestBody = {
    item_id: event.target.getAttribute('data'),
    username: nameInput.value,
    comment: commentInput.value,
  };
  const request = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    body: JSON.stringify(requestBody),
  };
  await fetch(`${baseUrl}/${appId}/comments`, request);
};

const getCommentsFromApi = async (id) => {
  const response = await fetch(`${baseUrl}/${appId}/comments?item_id=${id}`);
  const data = await response.json();
  return data;
};

const changeApiDataToHtml = (data) => {
  const htmlString = data
    .map((element) => `
    <li>
      ${element.creation_date} <strong class="px-1">${element.username}:</strong> ${element.comment}
    </li>
  `).join('');
  return htmlString;
};

const sortCommentsFromLatest = (comments) => {
  const latestComments = comments.reverse();
  return latestComments;
};

const appendCommentsToPopup = async (id) => {
  const ul = document.getElementById('comments');
  ul.innerHTML = '';
  const comments = await getCommentsFromApi(id);

  if (Object.keys(comments)[0] === 'error') {
    ul.innerHTML = 'No comments yet';
  } else {
    const latestComments = sortCommentsFromLatest(comments);
    const li = changeApiDataToHtml(latestComments);
    ul.innerHTML = li;
  }
};

const updateComments = async (id) => {
  const ul = document.getElementById('comments');
  const commentTitle = document.getElementById('comment-title');
  const comments = await getCommentsFromApi(id);
  const latestComments = sortCommentsFromLatest(comments);
  const li = await changeApiDataToHtml(latestComments);
  ul.innerHTML = li;
  commentTitle.textContent = `Comments (${comments.length})`;
};

const addEventListenerToCommentForm = async () => {
  const form = document.querySelector('form');
  const addCmtBtn = document.getElementById('add-cmt-btn');
  const nameInput = document.getElementById('username');
  const commentInput = document.getElementById('usercmt');

  addCmtBtn.addEventListener('click', async (e) => {
    if (nameInput.value === '' || commentInput.value === '') {
      return;
    }
    e.preventDefault();
    await postCommentToApi(e, nameInput, commentInput);
    updateComments(e.target.getAttribute('data'));
    form.reset();
  });
};

const generatePopupCommentBox = async (id) => {
  const show = await findShowById(id);
  const div = document.createElement('div');

  div.id = 'popUp';
  div.className = 'px-3 py-2 rounded-3';
  div.innerHTML = `
    <div class="row" id="popup-desc">
      <div class="col-md-3 d-flex justify-content-center align-items-center">
        <img src="${show.image.original}" alt="${show.name}" class="w-75 h-75"/>
      </div>
      <div class="col-md-9">
        <div class="d-flex justify-content-between">
          <h1>${show.name}</h1>
          <button class="close-btn">&times;</button>
        </div>
        <div class="d-flex justify-content-md-around">
          <span class="small-fonts"><strong>Rating :</strong> ${show.rating.average}</span>
          <span class="small-fonts"><a href="https://www.imdb.com/title/${show.externals.imdb}/"><strong>IMDB :</strong> ${show.externals.imdb}</a></span>
        </div>
        <article id="summary" class="small-fonts"><span class="fs-5 fw-bold">Overview :</span><br>${show.summary}</article>
        <div class="row">
          <div class="col-md-6">
            <span class="small-fonts"><strong>Genres : </strong>${show.genres}</span><br>
            <span class="small-fonts"><strong>Average Run Time : </strong>${show.averageRuntime}</span><br>
            <span class="small-fonts"><strong>Ended : </strong>${show.ended}</span>
          </div>
          <div class="col-md-6">
            <span class="small-fonts"><strong>Language : </strong>${show.language}</span><br>
            <span class="small-fonts"><strong>Type : </strong>${show.type}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center m-md-2" id="popup-cmt-sec">
      <div class="col-md-6 d-flex flex-column align-items-center">
        <h2 class="fs-5"><b id="comment-title">Latest Comments()</b></h2>
        <ul class="list-unstyled mb-1" id="comments">
        
        </ul>
      </div>
      <form class="col-md-6 d-flex flex-column align-items-center">
        <h3 class="fs-5"><b>Add a comment</b></h3>
        <input id="username" type="text" placeholder="Your name" class="mb-md-2 form-control w-50 px-2 py-1" required>
        <input id="usercmt" type="text" placeholder="Your comment" class="mb-md-2 form-control w-50 px-2 py-1" required>
        <button type="submit" data="${id}" class="btn-outline-success btn px-2 py-1 fw-bold" id="add-cmt-btn">Add comment</button>
      <form>
    <div>
  `;

  parentElement.append(div);
  addEventListenerToCloseBtns();
  addEventListenerToCommentForm();
  limitSentences(document.querySelector('#summary p'), 4);
  await appendCommentsToPopup(id);
  await commentCounter();
};

const addEventListenerToCmtBtns = async () => {
  const cmtBtns = document.querySelectorAll('.cmt-btn');
  cmtBtns.forEach((cmtBtn) => {
    cmtBtn.addEventListener('click', (e) => {
      generatePopupCommentBox(e.target.getAttribute('data'));
    });
  });
};

export { addEventListenerToCmtBtns, getData };