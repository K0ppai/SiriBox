const countShows = () => {
  const container = document.getElementById('lists-container');
  const childCount = container.childElementCount;
  return childCount;
};

const showCount = async (count) => {
  const allShows = document.getElementById('all-shows');
  allShows.textContent = `All Shows(${count})`;
};

export { countShows, showCount };