import { likeDb } from './api.js';

const addLike = async (id, numLikes) => {
  try {
    // Step 1: Send a POST request to add a like
    const response = await fetch(likeDb, {
      method: 'POST',
      body: JSON.stringify({ item_id: id }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to add like');
    }

    // Step 2: Wait for 1 second
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Step 3: Fetch the updated like count
    const updatedLikesResponse = await fetch(likeDb);

    if (!updatedLikesResponse.ok) {
      throw new Error('Failed to fetch like count');
    }

    const dataLikes = await updatedLikesResponse.json();

    // Step 4: Find the liked item and update the UI
    const likedItem = dataLikes.find((like) => like.item_id === id);
    numLikes.innerText = `${likedItem.likes} Likes` || '0 Likes';
  } catch (error) {
    console.error('Error:', error);
  }
};

export default addLike;
