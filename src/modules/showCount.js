const countShows = () => {
    const container = document.getElementById('lists-container');
    const childCount = container.childElementCount;
    return childCount;
  };
  
  export { countShows as default };