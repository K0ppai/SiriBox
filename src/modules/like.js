import { baseUrl, appId } from './data.js';


const addEventListenerToLikeBtns = () => {
    const likeBtns = document.querySelectorAll('.like-btn');
    likeBtns.forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        await postLikesToApi(e);
        const data = await getLikesFromApi();
        const foundLike = await findRightElement(data, e.target.id);
        const likeCount = document.getElementById(`like-count-${e.target.id}`);
        likeCount.textContent = `${foundLike}`;
      });
    });
  };

  export { addEventListenerToLikeBtns, appendLikesToDom, fetchLikesCounts };