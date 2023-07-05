'use strict'

import _ from "lodash";
import "./style.css";


class News {
  constructor(date, time, newscontent){
  
    this.date = date;
    this.time = time;
    this.newscontent = newscontent;

  }
  getDate() {
    return this.date;
  }

  getTime() {
    return this.time;
  }

  getNews() {
    return this.newscontent;
  }
}


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
  createMultiTags(menu, "li", menu_list.length, menu_list, true);


  logo_header.src = '../src/img/Logo.png';
}
// Header end

// Mainpage start
function createMainpage(){

  const main = createTag(null,'div', 'content_box')
  const mainBg = createTag(main,'img', 'mainBGId')
  const main2 = createTag(main,'div', 'main2Id')
  
  mainBg.src = "../src/img/MJ_Merano_tapas-5.jpg";

  const news1Content = createTag(main2,'div', 'news1Content',null, 'News1')
  // const newsText1 = createTag(news1Content,'p', 'newsText1Id',null, )
  const newsImage1 = createTag(news1Content,'img', 'newsImage1Id')
  newsImage1.src = "../src/img/MJ_Merano_tapas-1.jpg";

  const news2Content = createTag(main2,'div', 'news2Content',null, 'News2')
  const newsImage2 = createTag(news2Content,'img', 'newsImage2Id')
  newsImage2.src = "../src/img/MJ_MG_04842018.jpg";

  NewsInput.forEach((News) => {
    
      createCard(menu_coffee, drink, order);
    
   
  });
}



  
  







function initial(){

  const News1 = new News ('28.7.2023', '18:30','Beachparty');
  const News2 = new News ('15.8.2023', '20:15', 'Midsummer Party');

  const NewsInput = [News1, News2]; 

  

  createHeader();
  createMainpage();
  createNews(NewsInput);
}

initial();


