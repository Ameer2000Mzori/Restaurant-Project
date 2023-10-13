import { likeDb } from './api.js';

const addLike = async (id, numLikes) => {
  fetch(likeDb, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const responseLikes = await fetch(likeDb);
  const dataLikes = await responseLikes.json();

  const likedItem = dataLikes.find((like) => like.item_id === id);
  numLikes.innerText = `${likedItem.likes} Likes` || '0 Likes';
};
export default addLike;