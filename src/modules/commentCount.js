const commentCounter = async () => {
  const ul = document.getElementById('comments');
  const childCount = ul.childElementCount;
  const commentTitle = document.getElementById('comment-title');
  commentTitle.textContent = `Latest Comments (${childCount})`;
  return childCount;
};
export { commentCounter as default };