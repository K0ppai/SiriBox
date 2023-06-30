const appId = '9FCYozFTWHToQfPAhtFa';
const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

// write a function to create a app id
const createAppId = async () => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  const data = await response.text();
  return data;
};
console.log(createAppId());
export { appId, baseUrl };