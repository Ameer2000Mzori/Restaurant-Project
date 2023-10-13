import popUpCardFunc from './popUpCard.js';
import  { mealDb }   from './api.js';
import { likeDb } from './api.js';
import addLike from './likeCounter.js';

const mealsList = document.getElementsByClassName("meals-list")[0];
// Function to fetch meals starting with 'a' from the API
const displayMeals = async () => {
    const response = await fetch(mealDb)
    const data = await response.json()

  const responseLikes = await fetch(likeDb);
  const dataLikes = await responseLikes.json();
  const likesMap = {};
  dataLikes.forEach((like) => {
    likesMap[like.item_id] = like.likes;
  });

data.meals.forEach((item) => {

    const div = document.createElement("div");
    div.classList = "meal-card";

    const img = document.createElement("img");
    img.classList = "meal-img";
    img.src = item.strMealThumb;
    div.appendChild(img);

    const titleWrap = document.createElement("div");
    titleWrap.classList = "meal-titles";

    const titleDiv = document.createElement("div");
    titleDiv.classList = "meal-title";
    titleDiv.textContent = item.strMeal;
    titleWrap.appendChild(titleDiv);

    const likeBtnWrap = document.createElement("div");
    likeBtnWrap.classList = "like-btn-wrap";
    titleWrap.appendChild(likeBtnWrap);

    const likeImgWrap = document.createElement("div");
    likeImgWrap.classList = "likes";
    likeBtnWrap.appendChild(likeImgWrap);


    const likeCounter = document.createElement("div");
    likeCounter.classList.add("like-counter");
    likeCounter.innerText = `${likesMap[item.idMeal]} Likes` || '0 Likes'; 

    const likeImg = document.createElement("p");
    likeImg.classList = "meal-like";
    likeImg.id ='likeImgId';
    likeImg.textContent = "❤️"; 
    likeImgWrap.appendChild(likeImg);
    likeBtnWrap.appendChild(likeCounter);

    likeImg.addEventListener('click', ()=>{
      addLike(item.idMeal, likeCounter);
    })

    const commentBtn = document.createElement("button");
    commentBtn.classList = "comment-btn";
    commentBtn.textContent = "COMMENT";
    
    commentBtn.addEventListener("click", () => {
       console.log('hi world')
        popUpCardFunc( item.strMeal, item.strArea, item.strMealThumb, item.strCategory, item.strTags, item.strYoutube);
    });
    
    const buttonsWrap = document.createElement("div");
    buttonsWrap.classList = "button-wrap";
    buttonsWrap.appendChild(commentBtn);

    div.appendChild(titleWrap);
    mealsList.appendChild(div);
    div.appendChild(buttonsWrap);
    
    });
} 

export default displayMeals;

