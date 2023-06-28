import getData from './getDatafromApi.js';

const parentElement = document.getElementById('parent-container');

const findShowById = async (id) => {
  const data = await getData();
  const targetId = parseInt(id, 10);
  const show = data.find((show) => show.id === targetId);
  return show;
};

const generatePopupCommentBox = async (id) => {
  const show = await findShowById(id);
  const div = document.createElement('div');

  div.id = 'popUp';
  div.className = 'px-3 py-2';
  div.innerHTML = `
    <div class="row">
      <div class="col-md-3">
        <img src="${show.image.original}" alt="${show.name}" class="w-100"/>
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
    <div class="row justify-content-center">
      <div class="col-md-12 d-flex flex-column align-items-center">
        <h2 class="fs-5">Recent Comments</h2>
        <ul class="list-unstyled" id="comments">
        
        </ul>
      </div>
      <form class="col-md-12 d-flex flex-column align-items-center">
        <h3 class="fs-5">Add a comment</h3>
        <input id="username" type="text" placeholder="Your name" class="mb-md-1 form-control w-25 px-2 py-1" required>
        <input id="usercmt" type="text" placeholder="Your comment" class="mb-md-1 form-control w-25 px-2 py-1" required>
        <button type="submit" data="${id}" class="btn-outline-success btn px-2 py-1" id="add-cmt-btn">Add comment</button>
      <form>
    <div>
  `;

  parentElement.append(div);
};

const addEventListenerToCmtBtns = async () => {
  const cmtBtns = document.querySelectorAll('.cmt-btn');
  cmtBtns.forEach((cmtBtn) => {
    cmtBtn.addEventListener('click', (e) => {
      generatePopupCommentBox(e.target.id);
    });
  });
};

export { addEventListenerToCmtBtns, getData };