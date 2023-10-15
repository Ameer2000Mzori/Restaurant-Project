const commentsCounter = () => {
  const comments = document.querySelectorAll('.comments');
  const title = document.querySelector('.commentsh3');

  const numberOfElements = comments.length;
  title.innerHTML = `Comments(${numberOfElements})`;
};

export default commentsCounter;
