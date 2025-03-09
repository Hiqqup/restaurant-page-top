
const main = document.querySelector("main")
import "./styles.css"

import home  from "./pages/home/home.html";
addHtml(home, undefined); // initial page
document.querySelector("nav button.home").addEventListener("click",(e)=> addHtml(home,e.target));
import menu  from "./pages/menu/menu.html";
document.querySelector("nav button.menu").addEventListener("click",(e)=> addHtml(menu,e.target));
import reviews  from "./pages/reviews/reviews.html";
document.querySelector("nav button.reviews").addEventListener("click",(e)=> addHtml(reviews,e.target));
import contact  from "./pages/contact/contact.html";
document.querySelector("nav button.contact").addEventListener("click",(e)=> addHtml(contact,e.target));



function addHtml(html:string, target: EventTarget){
    document.querySelectorAll("nav button").forEach((button) => button.classList.remove("selected"));
    if ( target instanceof HTMLElement) target.classList.add("selected");
    main.innerHTML = '';
    main.innerHTML = html;
}