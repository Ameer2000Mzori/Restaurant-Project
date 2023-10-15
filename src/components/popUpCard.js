import  { mealDb, commentDb }   from './api.js';
import '../style/popUpCard.css';
import addComment from './addComment.js';
import commentsCounter from './commentCounter';


const popUpCardFunc = async (id,idMeal) => {
        const response = await fetch(mealDb);
        const data = await response.json();
        const mealSelect = data.meals.find((datas) => datas.idMeal === id);

      const commentsApi = await fetch(`${commentDb}item_id=${mealSelect.idMeal}`);
      const dataComment = await commentsApi.json();

 console.log(mealSelect.idMeal);

  const mainBody = document.querySelector('body');
  const popUpMeal = document.querySelector('.popUpWrap');
  mainBody.classList.add('active');
  popUpMeal.classList.add('active');

  // Check if a popUpCard already exists and remove it if it does
  const existingPopUpCard = document.querySelector('.popUpCard');
  if (existingPopUpCard) {
    popUpMeal.removeChild(existingPopUpCard);
  }

  const popUpCard = document.createElement('div');
  popUpCard.className = 'popUpCard';

  const cardWrap = document.createElement('div');
  cardWrap.className = 'cardWrap';
  popUpCard.appendChild(cardWrap);

  const upCloseBtn = document.createElement('button');
  upCloseBtn.className = 'upCloseBtn';
  upCloseBtn.textContent = 'X';
  cardWrap.appendChild(upCloseBtn);

  const popUpImg = document.createElement('img');
  popUpImg.src = mealSelect.strMealThumb;
  popUpImg.className = 'popUpImg';
  cardWrap.appendChild(popUpImg);

  const popUpTitle = document.createElement('h3');
  popUpTitle.textContent = mealSelect.strMeal;
  cardWrap.appendChild(popUpTitle);

  const mealInfo = document.createElement('div');
  mealInfo.className = 'mealInfo';
  cardWrap.appendChild(mealInfo);

  const originInfo = document.createElement('div');
  originInfo.className = 'originInfo';
  mealInfo.appendChild(originInfo);

  const createTextInfo = (text, value) => {
    const textInfo = document.createElement('div');
    textInfo.className = 'textInfo';
    textInfo.textContent = `${text} : ${value || 'N/A'}`;
    return textInfo;
  };

  originInfo.appendChild(createTextInfo('From', mealSelect.strArea));
  originInfo.appendChild(createTextInfo('Category', mealSelect.strCategory));

  const originInfoTwo = document.createElement('div');
  originInfoTwo.className = 'originInfo';
  mealInfo.appendChild(originInfoTwo);

  originInfoTwo.appendChild(createTextInfo('Tags', mealSelect.strTags));
  
  const textInfoFour = document.createElement('a');
  textInfoFour.className = 'textInfo';
  textInfoFour.textContent = 'Watch here video';
  textInfoFour.href = mealSelect.strYoutube;
  originInfoTwo.appendChild(textInfoFour);

  const commentsh3 = document.createElement('h3');
  commentsh3.textContent = 'COMMENTS';
  commentsh3.className = 'commentsh3';
  cardWrap.appendChild(commentsh3);

  const commentWrap = document.createElement('div');
  commentWrap.className = 'commentWrap';
  cardWrap.appendChild(commentWrap);


  if(dataComment && dataComment.length > 0 ){
    dataComment.forEach((item) =>{
        const comments = document.createElement('div');
        comments.className = 'comments';
        comments.innerHTML = `${item.creation_date}: ${item.comment} by ${item.username}`;
        commentWrap.appendChild(comments);

    });
  }

  const addCommentWrap = document.createElement('div');
  addCommentWrap.className = 'addCommentWrap';
  cardWrap.appendChild(addCommentWrap);

  const addCommentH5 = document.createElement('h5');
  addCommentH5.textContent = 'ADD A COMMENT';
  addCommentWrap.appendChild(addCommentH5);

  const createInput = (type, placeholder) => {
    const input = document.createElement('input');
    input.type = type;
    input.placeholder = placeholder;
    return input;
  };

  const inputText = createInput('text', 'Please enter your name');
  addCommentWrap.appendChild(inputText);

  const textarea = document.createElement('textarea');
  textarea.className = 'textarea';
  textarea.placeholder = 'Add your comment';
  textarea.cols = '20';
  textarea.rows = '5';
  addCommentWrap.appendChild(textarea);

  const commentBtnCom = document.createElement('button');
  commentBtnCom.className = 'commentBtnCom';
  commentBtnCom.textContent = 'COMMENT';
  addCommentWrap.appendChild(commentBtnCom);

  commentBtnCom.addEventListener('click', () => {
    const inputTextValue = inputText.value.toLowerCase();
    const textareaValue = textarea.value.toLowerCase();
    if (!inputTextValue || !textareaValue) {
      console.log('Please enter name and comment');
    } else {
      addComment(id, inputTextValue, textareaValue);
    }
    inputText.value = '';
    textarea.value = '';
  });

  popUpMeal.appendChild(popUpCard);

  upCloseBtn.addEventListener('click', () => {
    mainBody.classList.remove('active');
    popUpMeal.classList.remove('active');
    // Remove the popUpCard element when the close button is clicked
    popUpMeal.removeChild(popUpCard);
  });
  commentsCounter();
};

export default popUpCardFunc;
