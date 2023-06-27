import './index.css';

const getData = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  const data = await response.json();
  return data;
};

const displayAllMovies = async () => {
  const data = await getData();
  data.length = 40;
  const htmlString = data
    .map((show) => `
          <div class="col d-flex flex-column w-25 m-md-5">
            <img src="${show.image.medium}" alt="${show.name}"/>
            <div class="d-flex w-100">
              <h5>${show.name}</h5>
              <div class="d-flex">
                <i class="fa-regular fa-heart" style="color: #ff0000;"></i>
                <span></span>
              </div>
            </div>
            <button class="btn btn-primary cmt-btn">Comments</button>
            <button class="btn btn-primary res-btn">Reservations</button>
          </div>
      `).join('');
  const ul = document.getElementById('lists-container');
  ul.innerHTML = htmlString;
};
displayAllMovies();
