// Ẩn nội dung menu cũ
// var originalMenu = document.querySelector('.header-wrapper');
var originalMenu = document.querySelector('.header__inline-menu');
var mobileMenu = document.querySelector(".menu-drawer__navigation");

originalMenu.style.display = 'none';
mobileMenu.style.display = 'none';

const MENU_DATA =
  [
    {
      "id": "c9a31b45-4863-4fd3-a837-baf08c5b80f5",
      "name": "Home",
      "css": "menu-item",
      "class": "header__menu-item",
      "level": 1,
      "isEditting": false,
      "tag": "a",
      "content": "Home",
      "href": "/home",
      "target": "_self",
      "icon": "",
      "children": [
        {
          "id": "9239bdf1-ccf0-49c4-9c9d-bcaf30f77f89",
          "name": "Home",
          "css": "menu-item",
          "class": "header__menu-item",
          "level": 1,
          "isEditting": false,
          "tag": "a",
          "content": "Home",
          "href": "https://onextdigital.com/",
          "target": "_self",
          "icon": "",
          "children": []
        }
      ]
    },
    {
      "id": "fe95224c-0f44-482e-98a7-b68e243089fc",
      "name": "Home",
      "css": "menu-item",
      "class": "header__menu-item",
      "level": 1,
      "isEditting": false,
      "tag": "a",
      "content": "Home",
      "href": "/home",
      "target": "_self",
      "icon": "",
      "children": [
        {
          "id": "18bba4c6-e49a-4134-9150-bc1d0784f73c",
          "name": "Home",
          "css": "menu-item",
          "class": "header__menu-item",
          "level": 1,
          "isEditting": false,
          "tag": "a",
          "content": "Home",
          "href": "https://onextdigital.com/",
          "target": "_self",
          "icon": "",
          "children": []
        }
      ]
    },
    {
      "id": "ba0990ea-14d9-4ba1-a52d-2fda6b95651f",
      "name": "Home",
      "css": "menu-item",
      "class": "header__menu-item",
      "level": 1,
      "isEditting": false,
      "tag": "a",
      "content": "Home",
      "href": "/home",
      "target": "_self",
      "icon": "",
      "children": [
        {
          "id": "34ced7c6-61b9-49cd-bb16-31f971ef5e5a",
          "name": "Home",
          "css": "menu-item",
          "class": "header__menu-item",
          "level": 1,
          "isEditting": false,
          "tag": "a",
          "content": "Home",
          "href": "https://onextdigital.com/",
          "target": "_self",
          "icon": "",
          "children": []
        }
      ]
    },
    {
      "id": "3a1a8df2-1d89-4709-85fa-04c6eac12336",
      "name": "Home",
      "css": "menu-item",
      "class": "header__menu-item",
      "level": 1,
      "isEditting": false,
      "tag": "a",
      "content": "Home",
      "href": "/home",
      "target": "_self",
      "icon": "",
      "children": [
        {
          "id": "87c168d5-d30c-45cf-a208-955ef482805b",
          "name": "Home",
          "css": "menu-item",
          "class": "header__menu-item",
          "level": 1,
          "isEditting": false,
          "tag": "a",
          "content": "Home",
          "href": "https://onextdigital.com/",
          "target": "_self",
          "icon": "",
          "children": []
        }
      ]
    },
    {
      "id": "b6c4f39b-39bb-4e96-a49e-d4978410d077",
      "name": "Home",
      "css": "menu-item",
      "class": "header__menu-item",
      "level": 1,
      "isEditting": false,
      "tag": "a",
      "content": "Home",
      "href": "/home",
      "target": "_self",
      "icon": "",
      "children": [
        {
          "id": "f65c060c-2328-43b8-b7db-b45b9c26ecf9",
          "name": "Home",
          "css": "menu-item",
          "class": "header__menu-item",
          "level": 1,
          "isEditting": false,
          "tag": "a",
          "content": "Home",
          "href": "https://onextdigital.com/",
          "target": "_self",
          "icon": "",
          "children": []
        }
      ]
    },
    {
      "id": "d3387837-581c-4e72-902f-e9bf818d7e22",
      "name": "Home",
      "css": "menu-item",
      "class": "header__menu-item",
      "level": 1,
      "isEditting": false,
      "tag": "a",
      "content": "Home",
      "href": "/home",
      "target": "_self",
      "icon": "",
      "children": [
        {
          "id": "6cdff325-616c-45e0-aa4a-abe32ae583ec",
          "name": "Home",
          "css": "menu-item",
          "class": "header__menu-item",
          "level": 1,
          "isEditting": false,
          "tag": "a",
          "content": "Home",
          "href": "https://onextdigital.com/",
          "target": "_self",
          "icon": "",
          "children": []
        }
      ]
    }
  ]


export const generateHTML = (data) => {
  let html = "<nav> <ul class='horizontal-list'>"; // Sửa class để phù hợp với yêu cầu

  data.forEach(item => {
    let attributes = `id='${item.id}' class='${item.class}' style='${item.css}'`;
    // Xử lý thẻ <a> hoặc thẻ khác
    html += `<li>`; // Mở thẻ <li> ở đây

    switch (item.tag) {
      case 'a':
        // Thêm CSS inline cho thẻ <a>
        html += `<${item.tag} ${attributes} href='${item.href}' level='${item.level}'> ${item.content} </${item.tag}>`;
        break;

      case 'div':
        // Thêm CSS inline cho thẻ <div>
        html += `<${item.tag} ${attributes} style='padding: 10px; background-color: #f0f0f0;'>${item.content}</${item.tag}>`;
        break;

      case 'img':
        // Thêm CSS inline cho thẻ <img>
        html += `<${item.tag} ${attributes} src='${item.href}' alt='${item.content}' style='${item.css}'>`;
        break;

      default:
        // Xử lý các thẻ khác
        html += `<${item.tag} ${attributes}>${item.content}</${item.tag}>`;
        break;
    }

    // Xử lý children nếu có
    if (item.children && item.children.length > 0) {
      html += `<div class='menu-child'>`; // Thay đổi thành <div> cho menu con
      html += generateHTML(item.children);
      html += `</div>`;
    }

    html += `</li>`; // Đóng thẻ <li> ở đây
  });

  html += '</ul></nav>';
  html += '<style>body{margin:0}.horizontal-list{list-style-type:none;padding:0;margin:0;display:flex}.horizontal-list li{position:relative;margin-right:20px;border-bottom:1px solid transparent}.horizontal-list li:last-child{margin-right:0}.horizontal-list li:hover{border-bottom:1px solid black}.menu-child{width:100vw;height:110px;background-color:rebeccapurple;display:none;position:fixed;top:15px;left:0;z-index:1}.horizontal-list li:hover .menu-child,.menu-child:hover{display:block}</style>'
  return html;
};

const generateHTMLMobile = (data) => {
  let html = "<nav> <ul class='horizontal-menu' id='menu-main'>";

  data.forEach(item => {
    let attributes = `id='${item.id}' class='${item.class}' style='${item.css}'`;
    // Xử lý thẻ <a> hoặc thẻ khác
    switch (item.tag) {
      case 'a':
        // Thêm CSS inline cho thẻ <a>
        html += `<li><${item.tag} ${attributes} href='${item.href}' level='${item.level}'> ${item.content} </${item.tag}>`;
        html += `<div class='${item.level === 1 ? 'custom-line' : ''}'></div>`;
        break;

      case 'button':
        // Thêm CSS inline cho thẻ <button>
        html += `<li style='margin-right: 10px;'><${item.tag} ${attributes} style='padding: 5px 10px; background-color: #007BFF; color: white; border: none; cursor: pointer;'>${item.content}</${item.tag}></li>`;
        break;

      case 'div':
        // Thêm CSS inline cho thẻ <div>
        html += `<li style='margin-right: 10px;'><${item.tag} ${attributes} style='padding: 10px; background-color: #f0f0f0;'>${item.content}</${item.tag}></li>`;
        break;

      case 'span':
        // Thêm CSS inline cho thẻ <span>
        html += `<li style='margin-right: 10px;'><${item.tag} ${attributes} style='font-size: 14px;'>${item.content}</${item.tag}></li>`;
        break;

      case 'img':
        // Thêm CSS inline cho thẻ <img>
        html += `<li style='margin-right: 10px;' class='${item.class.includes('menu-8') ? 'horizontal-img-item' : 't-center'}'><${item.tag} ${attributes} src='${item.href}' alt='${item.content}' style='${item.css}'>`;
        html += `<div class='${item.class.includes('menu-8') ? 'content-position' : ''}'></div></li>`;
        break;

      default:
        // Xử lý các thẻ khác
        html += `<li style='margin-right: 10px;'><${item.tag} ${attributes}>${item.content}</${item.tag}></li>`;
        break;
    }

    // Xử lý children nếu có
    if (item.children && item.children.length > 0) {
      html += `<ul class='submenu'>`;
      html += generateHTML(item.children);
      html += `</ul>`;
    }

    html += `</li>`;
  });

  html += '</ul></nav>';
  html += `<style>.menu-container{width:100%;position:relative;}.horizontal-menu{padding:0;margin:0;display:flex;}.horizontal-menu>li{position:relative;}.horizontal-menu>li>a{display:block;padding:10px 15px;text-decoration:none;}.horizontal-menu>li>a:hover{background-color:#555;}.submenu{list-style:none;padding:0;margin:0;position:absolute;top:100%;left:0;width:100%;display:none;background-color:#333;z-index:1000;}.submenu>li>a{display:block;padding:10px 15px;text-decoration:none;}.submenu>li>a:hover{background-color:#555;}.horizontal-menu>li:hover>.submenu{display:block;}.nav-menu{display:flex;justify-content:center;align-items:center;padding:0;margin:0;background-color:#333;}.nav-menu>.horizontal-menu>li{margin:0 20px;}</style>`
  return html;
};

// Tạo menu mới
var newMenu = generateHTML(MENU_DATA);
var newMenuMobile = generateHTMLMobile(MENU_DATA);
// Chèn menu mới vào trong .header-wrapper
originalMenu.insertAdjacentHTML('afterend', newMenu);
mobileMenu.insertAdjacentHTML('afterend', newMenu);
