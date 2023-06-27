import _ from "lodash";
import "./style.css";

function createHtml() {
  const element = document.createElement("div");
  element.style.display = "flex";
  element.style.flexDirection = "column";
  element.style.alignItems = "center";
  return element;
}

function createheader() {
  const header = document.createElement("header");
  header.className = "header";
  header.style.display = "flex";
  header.style.justifyContent = "center";
  header.style.alignItems = "center";

  const menu = document.createElement("nav");
  menu.style.display = "flex";
  menu.style.justifyContent = "space-around";
  const menuList = document.createElement("ul");

  const menuItem1 = document.createElement("li");
  const menuLink1 = document.createElement("a");
  menuLink1.href = "#";
  menuLink1.textContent = "Menüpunkt 1";
  menuItem1.appendChild(menuLink1);

  const menuItem2 = document.createElement("li");
  const menuLink2 = document.createElement("a");
  menuLink2.href = "#";
  menuLink2.textContent = "Menüpunkt 2";
  menuItem2.appendChild(menuLink2);

  const menuItem3 = document.createElement("li");
  const menuLink3 = document.createElement("a");
  menuLink3.href = "#";
  menuLink3.textContent = "Menüpunkt 3";
  menuItem3.appendChild(menuLink3);

  menuList.appendChild(menuItem1);
  menuList.appendChild(menuItem2);
  menuList.appendChild(menuItem3);
  menu.appendChild(menuList);

  header.appendChild(menu);

  return header;
}

function createDiv() {
  const box_front = document.createElement("div");
  box_front.className = "box_front";

  return box_front;
}

const htmlElement = createHtml();
const headerElement = createheader();
const divElement1 = createDiv();
const divElement2 = createDiv();

divElement1.className = "div_front_left";
divElement1.style.position = "sticky";
divElement1.style.top = "8vh";
divElement2.className = "div_front_right";
divElement2.style.height = "80vh";
divElement2.style.width = "60vh";
// divElement2.style.backgroundImage = `url(${Pic1})`;
divElement2.style.position = "sticky";
divElement2.style.top = "10vh";

const container = document.createElement("div");
container.style.display = "flex";
container.style.justifyContent = "flex-start";
container.appendChild(divElement1);
divElement1.textContent = _.join(["Die-Hotel-Bar"]);
container.appendChild(divElement2);

//übergabe an body
document.body.appendChild(htmlElement);
document.body.appendChild(headerElement);
document.body.appendChild(container);
