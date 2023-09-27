import "./style/style.css";
import menuHandler from "./components/navHnadler.js";

// *THE BURGER MENU BUTTON* //
const toggleBtn = document.getElementsByClassName('togglebtn')[0];
 toggleBtn.addEventListener('click', menuHandler);