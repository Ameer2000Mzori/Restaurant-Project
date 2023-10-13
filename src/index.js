import "./style/style.css";
import "./style/header.css";
import "./style/popUpCard.css";
import displayMeals from "./components/displayMeals";
import menuHandler from "./components/navHnadler.js";
import logoImg from "./asset/logo.png";


const Logo = document.getElementsByClassName('logo-img')[0];
Logo.src = logoImg;

// *THE BURGER MENU BUTTON* //
const toggleBtn = document.getElementsByClassName('togglebtn')[0];
 toggleBtn.addEventListener('click', menuHandler);
 
displayMeals();
