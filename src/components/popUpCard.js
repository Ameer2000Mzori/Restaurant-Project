const popUpCardFunc = ( strMeal, strArea, strMealThumb, strCategory, strTags, strYoutube) => {

    const mainBody = document.querySelector('body');
    const popUpMeal = document.getElementsByClassName('popUpWrap')[0]; 
    mainBody.classList.add('active');
    popUpMeal.classList.add('active');

    // Check if a popUpCard already exists and remove it if it does
    const existingPopUpCard = document.querySelector('.popUpCard');
    if (existingPopUpCard) {
        popUpMeal.removeChild(existingPopUpCard);
    }

    const popUpCard = document.createElement('div');
    popUpCard.classList = 'popUpCard';

    const cardWrap = document.createElement('div');
    cardWrap.classList = 'cardWrap';
    popUpCard.appendChild(cardWrap);

    const upCloseBtn = document.createElement('button');
    upCloseBtn.classList = 'upCloseBtn';
    upCloseBtn.textContent ='X';
    cardWrap.appendChild(upCloseBtn);

    const popUpImg = document.createElement('img');
    popUpImg.src = strMealThumb;
    popUpImg.classList = 'popUpImg';
    cardWrap.appendChild(popUpImg);

    const popUpTitle = document.createElement('h3');
    popUpTitle.textContent = strMeal;
    cardWrap.appendChild(popUpTitle);

    const mealIfo = document.createElement('div');
    mealIfo.classList = 'mealIfo';
    cardWrap.appendChild(mealIfo);

    const orginInfo = document.createElement('div');
    orginInfo.classList = 'orginInfo';
    mealIfo.appendChild(orginInfo);

    const textInfOne = document.createElement('div');
    textInfOne.classList = 'textInfo';
    textInfOne.textContent = `from : ${strArea}`;
    orginInfo.appendChild(textInfOne);

    const textInfoTwo = document.createElement('div');
    textInfoTwo.classList = 'textInfo';
    textInfoTwo.textContent = `Category : ${strCategory}`;
    orginInfo.appendChild(textInfoTwo);

    const orginInfoTwo = document.createElement('div');
    orginInfoTwo.classList = 'orginInfo';
    mealIfo.appendChild(orginInfoTwo);

    const textInfThree = document.createElement('div');
    textInfThree.classList = 'textInfo';
    if(strTags === null){
    textInfThree.textContent = `Tags : N/A`;
    }else{
    textInfThree.textContent = `Tags : ${strTags}`;
    }
    orginInfoTwo.appendChild(textInfThree);

    const textInfoFour = document.createElement('a');
    textInfoFour.classList = 'textInfo';
    textInfoFour.textContent='Watch here video';
    textInfoFour.href =  `${strYoutube}`;
    orginInfoTwo.appendChild(textInfoFour);

    const commentsh3 = document.createElement('h3');
    commentsh3.textContent = 'COMMENTS';
    commentsh3.classList = 'commentsh3';
    cardWrap.appendChild(commentsh3);

    const commentWrap = document.createElement('div');
    commentWrap.classList = 'commentWrap';
    cardWrap.appendChild(commentWrap);

    const comments = document.createElement('div');
    comments.classList = 'comments';
    comments.textContent = 'WE LIKE IT ';
    commentWrap.appendChild(comments);

    const addCommentWrap = document.createElement('div');
    addCommentWrap.classList = 'addCommentWrap';
    cardWrap.appendChild(addCommentWrap);

    const addCommentH5 = document.createElement('h5');
    addCommentH5.textContent = 'ADD A COMMENT';
    addCommentWrap.appendChild(addCommentH5);

    const inputText = document.createElement('input');
    inputText.type = 'text';
    inputText.placeholder ='please enter your name';
    addCommentWrap.appendChild(inputText);

    const textarea = document.createElement('textarea');
    textarea.classList = 'textarea';
    textarea.placeholder = 'add your comment';
    textarea.cols = '20';
    textarea.rows = '5';
    addCommentWrap.appendChild(textarea);     

    const commentBtnCom = document.createElement('button');
    commentBtnCom.classList ='commentBtnCom';
    commentBtnCom.textContent ='COMMENT';
    addCommentWrap.appendChild(commentBtnCom);

    popUpMeal.appendChild(popUpCard);

    upCloseBtn.addEventListener('click', () => {
        mainBody.classList.remove('active');
        popUpMeal.classList.remove('active');
        // Remove the popUpCard element when the close button is clicked
        popUpMeal.removeChild(popUpCard);
    });
};




export default popUpCardFunc;