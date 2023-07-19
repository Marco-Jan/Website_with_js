'use strict';

import _ from 'lodash';
import './style.css';

function createTag(parent_node, tag_node, id_name, class_name, content) {
  const tag = document.createElement(tag_node);

  if (parent_node != null) {
    parent_node.append(tag);
  } else {
    const startpoint = document.getElementById('content');
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

function createMultiTags(parent_node, tag_node, num, list, menu) {
  for (let i = 0; i < num; i++) {
    if (menu) {
      createTag(
        parent_node,
        tag_node,
        null,
        list[i],
        '<a href="#' + list[i].replace(/ /g, '-') + '">' + list[i] + '</a>'
      );
    } else {
      createTag(
        parent_node,
        tag_node,
        null,
        list[i].replace(/ /g, '_'),
        list[i]
      );
    }
  }
}

// Header start
function createHeader() {
  const header = createTag(null, 'header');
  const logo_header = createTag(header, 'img', 'logo_headerId', null);
  const heading = createTag(header, 'h1', null, null, 'Merano-Bar');
  const nav_header = createTag(header, 'nav', 'nav_header');
  const menu = createTag(nav_header, 'ul', null, 'menu_header');

  let menu_list = ['Home', 'Our Team', 'Contact'];
  createMultiTags(menu, 'li', menu_list.length, menu_list, 'hes');

  logo_header.src = '../src/img/Logo.png';
}
// Header end

// Mainpage start + News
function createMainpage() {
  const main = createTag(null, 'div', 'content_box');
  const mainBg = createTag(main, 'img', 'mainBGId', null);
  const main2 = createTag(main, 'div', 'main2Id');

  mainBg.src = '../src/img/MJ_Merano_tapas-5.jpg';

  const news1Content = createTag(main2, 'div', 'news1Content', null);

  const newsText1 = createTag(news1Content, 'p', 'newsText1Id', null);
  const newsImage1 = createTag(news1Content, 'img', 'newsImage1Id');
  newsImage1.src = '../src/img/MJ_Merano_tapas-1.jpg';

  const news2Content = createTag(main2, 'div', 'news2Content', null);
  const newsText2 = createTag(news2Content, 'p', 'newsText2Id', null);
  const newsImage2 = createTag(news2Content, 'img', 'newsImage2Id');
  newsImage2.src = '../src/img/MJ_MG_04842018.jpg';

  // Speichern Sie den Inhalt der Hauptseite in einer globalen Variablen
  const mainpagecontent = main.innerHTML;
}
// Mainpage end

// Seiten Wechsel
function PageTeam() {
  const main = createTag(null, 'div', 'content_box');
  const mainBg = createTag(main, 'img', 'mainBGId', null);
  const main3 = createTag(main, 'div', 'main3Id');

  const teamBtn = document.getElementsByClassName('Our Team')[1];

  teamBtn.addEventListener('click', function () {
    console.log('es wurde geklickt');
    main3.innerHTML = '';

    const news1Content = createTag(main3, 'div', 'news1Content', null);
    const newsImage1 = createTag(news1Content, 'img', 'newsImage1Id');
    newsImage1.src = '../src/img/MJ_MC_Personal-5.jpg';
    const newsText1 = createTag(
      news1Content,
      'p',
      'newsText1Id',
      null,
      'Max Mustermann'
    );

    const news2Content = createTag(main3, 'div', 'news2Content', null);
    const newsImage2 = createTag(news2Content, 'img', 'newsImage2Id');
    newsImage2.src = '../src/img/MJ_MC_Personal-8.jpg';
    const newsText2 = createTag(
      news2Content,
      'p',
      'newsText2Id',
      null,
      'Max Mustermann'
    );

    const news3Content = createTag(main3, 'div', 'news3Content', null);
    const newsImage3 = createTag(news3Content, 'img', 'newsImage3Id');
    newsImage3.src = '../src/img/MJ_MC_Personal-10.jpg';
    const newsText3 = createTag(
      news3Content,
      'p',
      'newsText3Id',
      null,
      'Maxin Musterfrau'
    );

    const news4Content = createTag(main3, 'div', 'news4Content', null);
    const newsImage4 = createTag(news4Content, 'img', 'newsImage4Id');
    newsImage4.src = '../src/img/MJ_MC_Personal-13.jpg';
    const newsText4 = createTag(
      news4Content,
      'p',
      'newsText4Id',
      null,
      'maxmuster'
    );
  });
}

// Seiten Wechsel zurück zu Mainpage
function PageHome() {
  const homeBtn = document.getElementsByClassName('Home')[0];

  homeBtn.addEventListener('click', function () {
    console.log('es wurde geklickt');
    // Löschen Sie den vorherigen Inhalt, wenn auf den "Home" Button geklickt wird
    main.innerHTML = '';

    const main = createTag(null, 'div', 'content_box');
    const mainBg = createTag(main, 'img', 'mainBGId', null);
    const main2 = createTag(main, 'div', 'main2Id');

    mainBg.src = '../src/img/MJ_Merano_tapas-5.jpg';

    const news1Content = createTag(main2, 'div', 'news1Content', null);
    const newsText1 = createTag(news1Content, 'p', 'newsText1Id', null);
    const newsImage1 = createTag(news1Content, 'img', 'newsImage1Id');
    newsImage1.src = '../src/img/MJ_Merano_tapas-1.jpg';

    const news2Content = createTag(main2, 'div', 'news2Content', null);
    const newsText2 = createTag(news2Content, 'p', 'newsText2Id', null);
    const newsImage2 = createTag(news2Content, 'img', 'newsImage2Id');
    newsImage2.src = '../src/img/MJ_MG_04842018.jpg';

    // Fügen Sie den Hauptinhalt der "Mainpage" wieder hinzu
    document.getElementById('content_box').innerHTML = main.innerHTML;
  });
}

function initial() {
  createHeader();
  createMainpage();
  PageTeam();
  PageHome();
}

initial();
