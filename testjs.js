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
    // Xử lý thẻ <a> hoặc thẻ khác
    html += `<li>`; // Mở thẻ <li> ở đây

    //handle if have not child
    if (item.children.length === 0) {
      html += `<a class="title-menu" href="${item.href}">${item.name}</a>`
    }

    // Xử lý children nếu có
    if (item.children && item.children.length > 0) {
      html += `<a class="title-menu" href="${item.href}">${item.name}</a>`
      html += `<ul class='panel-menu'>`
      html += generateChildMenu(item.children)
      html += `</ul>`
    }

    html += `</li>`; // Đóng thẻ <li> ở đây
  });

  html += '</ul></nav>';
  html += "<style>.panel-menu{display:none;background-color:#4CAF50;position:absolute;width:100vw;left:0;min-height:200px;list-style:none;}.title-menu:hover+.panel-menu,.panel-menu:hover{display:flex;}.horizontal-list{list-style:none;padding:0;margin:0;display:flex;}.title-menu{padding:10px 15px;color:black;text-decoration:none;}.menu-item{display:block;padding:10px 15px;color:white;text-decoration:none;}.menu-item:hover{background-color:rgba(255,255,255,0.3);}.menu-inmenu{list-style-type:none;}.panel-menu,.panel-mega-menu ul{justify-content:space-around;padding:10px;}.menu{padding:10px 0;}.panel-mega-menu ul li{padding:5px 10px;color:white;}.sub-child{position:relative;left:5px;}</style>"
  return html;
};


//generate panel show menu child
const generateChildMenu = (data) => {
  let html = ''; // Khởi tạo div cho menu

  data.forEach(item => {
    html += '<li class="menu">'
    // Tạo thẻ cho mỗi mục
    html += `<a class="title-menu" href="${item.href}">${item.name}</a>`

    // // Kiểm tra nếu có children và gọi lại hàm generateChildMenu để tạo submenu
    if (item.children && item.children.length > 0) {
      html += '<div class="menu-inmenu">'
      html += generatePanel(item.children); // Gọi đệ quy để tạo submenu
      html += '</div>'
    }
    html += '</li>'; // Kết thúc div cho menu
  });


  return html; // Trả về HTML
}

//generate panel below nav
export const generatePanel = (data) => {
  let html = "";
  html += '<div class="panel-mega-menu">';
  data.forEach(item => {
    html += '<ul>'
    html += `<a class = 'sub-child' >${item.name}</a>`
    html += '</ul>'
    if (item.children && item.children.length > 0) {
      generatePanel(item.children);
    }
  });
  html += '</div>'
  return html;
}

// Tạo menu mới
var newMenu = generateHTML(MENU_DATA);
// var newMenuMobile = generateHTMLMobile(MENU_DATA);
// Chèn menu mới vào trong .header-wrapper
originalMenu.insertAdjacentHTML('afterend', newMenu);
// mobileMenu.insertAdjacentHTML('afterend', newMenuMobile);
