import getData from './getDatafromApi.js';

const findShowById = async (id) => {
  const data = await getData();
  const targetId = parseInt(id, 10);
  const show = data.find((show) => show.id === targetId);
  return show;
};
