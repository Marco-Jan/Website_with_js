'use strict'

import _ from "lodash";
import "./style.css";


function createTag(parent_node, tag_node, id_name, class_name, content) {
  const tag = document.createElement(tag_node);

  if (parent_node != null) {
    parent_node.append(tag);
  } else {
    const startpoint = document.getElementById("content");
    
    startpoint.append(tag);

    
    

  }

  if (id_name != null) {
    tag.id = id_name;
  }

  if (class_name != null) {
    tag.className = class_name;
  }

  if (content != null) {
    tag.innerHTML = content;
  }

  return tag;
}
/* mulittags function */

function createMultiTags(parent_node, tag_node, num, list, menu) {
  for (let i = 0; i < num; i++) {
    if (menu) {
      createTag(
        parent_node,
        tag_node,
        null,
        list[i],
        '<a href="#' + list[i].replace(/ /g, "-") + '">' + list[i] + "</a>"
      );
    } else {
      createTag(
        parent_node,
        tag_node,
        null,
        list[i].replace(/ /g, "_"),
        list[i]
      );
    }
  }
}


//Header start

function createHeader(){

  const header = createTag(null, 'header')
  const logo_header = createTag(header,'img','logo_headerId',null)
  const heading = createTag(header,'h1',null, null,'Merano-Bar')
  const nav_header = createTag(header, "nav", "nav_header");
  const menu = createTag(nav_header, "ul", null, "menu_header");

  let menu_list = ["Home", "Our Team", "Contact"];
  createMultiTags(menu, "li", menu_list.length, menu_list, 'hes');

  
  
  logo_header.src = '../src/img/Logo.png';
}
// Header end

// Mainpage start + News
function createMainpage(){

  const main = createTag(null,'div', 'content_box')
  const mainBg = createTag(main,'img', 'mainBGId',null,)
  const main2 = createTag(main,'div', 'main2Id')  
  
  mainBg.src = "../src/img/MJ_Merano_tapas-5.jpg";

  const news1Content = createTag(main2,'div', 'news1Content',null,)

  const newsText1 = createTag(news1Content,'p', 'newsText1Id',null, )
  const newsImage1 = createTag(news1Content,'img', 'newsImage1Id')
  newsImage1.src = "../src/img/MJ_Merano_tapas-1.jpg";

  const news2Content = createTag(main2,'div', 'news2Content',null,)
  const newsText2 = createTag(news2Content,'p', 'newsText2Id',null, )
  const newsImage2 = createTag(news2Content,'img', 'newsImage2Id')
  newsImage2.src = "../src/img/MJ_MG_04842018.jpg";

 
}

// Mainpage end

// Seiten Wechsel
function changePage(){

  const homeBtn = document.getElementById("Home");
  homeBtn.addEventListener("click", function () {
    console.log('es wurde geklickt');

    window.location.href = "index.html";
  });

  const teamBtn = document.getElementsByClassName("Our Team");
  teamBtn.addEventListener("click", function () {
    console.log('es wurde geklickt');
    window.location.href = "team.html";
  }); 

  const contactpage =document.URL.includes("contact.html");
  const contactBtn = document.getElementById("Contact");
  contactBtn.addEventListener("click", function () {
    console.log('es wurde geklickt');

    window.location.href = contactpage;
  });
}
  



  
  







function initial() {



  createHeader();
  
  createMainpage();
  changePage();

}

initial();


