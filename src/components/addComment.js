import { commentDb } from "./api";
import commentsCounter from './commentCounter';

const addComment = async (id, user, userComment) => {
  try {

    const postCommentResponse = await fetch(commentDb, {
      method: 'POST',
      body: JSON.stringify({ 
        item_id: id,
         username: user, 
        comment: userComment , 
      }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });

    if (!postCommentResponse.ok) {
      throw new Error('Failed to post a comment');
    }
    

    await new Promise((resolve) => setTimeout(resolve, 1000));
    const updateCommentResponse = await fetch(`${commentDb}item_id=${id}`);
    if (!updateCommentResponse.ok) {
      throw new Error('Failed to fetch comment data');
    }

    const dataComments = await updateCommentResponse.json();
    const addCommentWrap = document.querySelector('.commentWrap');
    addCommentWrap.classList = 'commentWrap';

    addCommentWrap.innerHTML = '';
    dataComments.forEach((item) => {
      const comments = document.createElement('div');
      comments.classList = 'comments';
      comments.innerHTML = `${item.creation_date} ${item.username} ${item.comment}`;
      addCommentWrap.appendChild(comments);
    });

    // Step 4: Update the comment count
    commentsCounter();
  } catch (error) {
    console.error('Error:', error);
  }
};

export default addComment;
