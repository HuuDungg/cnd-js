var originalMenu = document.querySelector('.header__inline-menu');
var mobileMenu = document.querySelector(".menu-drawer__navigation");

originalMenu.style.display = 'none';
mobileMenu.style.display = 'none';

const MENU_DATA =
  [
    {
      "id": "1e02c6e3-5410-481b-8438-807fa564c424",
      "name": "Home",
      "css": "menu-item",
      "class": "home",
      "level": 1,
      "isEditting": false,
      "tag": "a",
      "content": "Home",
      "href": "/home",
      "target": "_self",
      "icon": "",
      "children": [
        {
          "id": "ac8b3a27-c77c-48ee-8de4-79fc2d9dfe22",
          "name": "Sub menu",
          "css": "menu-item",
          "class": "home header__menu-item",
          "level": 1,
          "isEditting": false,
          "tag": "a",
          "content": "Sub menu",
          "href": "https://onextdigital.com/",
          "target": "_self",
          "icon": "",
          "children": [
            {
              "id": "f1888435-15fa-4a51-af6a-555500a5d1e9",
              "name": "Sub menu",
              "css": "menu-item",
              "class": "home header__menu-item",
              "level": 1,
              "isEditting": false,
              "tag": "a",
              "content": "Sub menu",
              "href": "https://onextdigital.com/",
              "target": "_self",
              "icon": "",
              "children": []
            },
            {
              "id": "01058a85-de50-4882-8eeb-145afea6c3fb",
              "name": "Sub menu",
              "css": "menu-item",
              "class": "home header__menu-item",
              "level": 1,
              "isEditting": false,
              "tag": "a",
              "content": "Sub menu",
              "href": "https://onextdigital.com/",
              "target": "_self",
              "icon": "",
              "children": []
            }
          ],
        },
        {
          "id": "1df06753-b885-4368-b0a7-dbe2db1597cb",
          "name": "Sub menu",
          "css": "menu-item",
          "class": "home header__menu-item",
          "level": 1,
          "isEditting": false,
          "tag": "a",
          "content": "Sub menu",
          "href": "https://onextdigital.com/",
          "target": "_self",
          "icon": "",
          "children": []
        },
        {
          "id": "ca444f37-2d83-4394-ac6d-0b5f98a1a75e",
          "name": "Image",
          "css": "",
          "class": "home header__menu-item",
          "level": 1,
          "isEditting": false,
          "tag": "img",
          "content": "Image",
          "href": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2FZuQB0BxGqmsCDm4uqxAzBRF4pDmtA90ew&s",
          "target": "_self",
          "icon": "",
          "children": [
            {
              "id": "28dbd268-03b7-4fa8-b571-f424996fc138",
              "name": "Sub menu",
              "css": "menu-item",
              "class": "home header__menu-item",
              "level": 1,
              "isEditting": false,
              "tag": "a",
              "content": "Sub menu",
              "href": "https://onextdigital.com/",
              "target": "_self",
              "icon": "",
              "children": []
            },
            {
              "id": "4756b6d5-6dce-4c33-af5c-a507a4c7ff72",
              "name": "Sub menu",
              "css": "menu-item",
              "class": "home header__menu-item",
              "level": 1,
              "isEditting": false,
              "tag": "a",
              "content": "Sub menu",
              "href": "https://onextdigital.com/",
              "target": "_self",
              "icon": "",
              "children": []
            }
          ],
        },
        {
          "id": "c0045b6b-8de5-4518-bc8b-fe79866929ac",
          "name": "Sub menu",
          "css": "menu-item",
          "class": "home header__menu-item",
          "level": 1,
          "isEditting": false,
          "tag": "a",
          "content": "Sub menu",
          "href": "https://onextdigital.com/",
          "target": "_self",
          "icon": "",
          "children": []
        },
        {
          "id": "a977e0ba-8739-4ad4-b881-981d8a69a9cf",
          "name": "Home",
          "css": "menu-item",
          "class": "home header__menu-item",
          "level": 1,
          "isEditting": false,
          "tag": "div",
          "content": "Home",
          "href": "",
          "target": "_self",
          "icon": "",
          "children": []
        }
      ],
    },
    {
      "id": "0b2932d7-372c-406a-8200-e78c8015816f",
      "name": "Home",
      "css": "menu-item",
      "class": "home",
      "level": 1,
      "isEditting": false,
      "tag": "a",
      "content": "Home",
      "href": "/home",
      "target": "_self",
      "icon": "",
      "children": [
        {
          "id": "c20ed31b-ff39-4cb4-b125-2b547ef839b5",
          "name": "Sub menu",
          "css": "menu-item",
          "class": "home header__menu-item",
          "level": 1,
          "isEditting": false,
          "tag": "a",
          "content": "Sub menu",
          "href": "https://onextdigital.com/",
          "target": "_self",
          "icon": "",
          "children": [
            {
              "id": "6e201b65-0a19-4e67-9d70-eb888328f478",
              "name": "Sub menu",
              "css": "menu-item",
              "class": "home header__menu-item",
              "level": 1,
              "isEditting": false,
              "tag": "a",
              "content": "Sub menu",
              "href": "https://onextdigital.com/",
              "target": "_self",
              "icon": "",
              "children": []
            },
            {
              "id": "9e5e47f8-fe1d-4f79-92ef-9534b341b2e5",
              "name": "Sub menu",
              "css": "menu-item",
              "class": "home header__menu-item",
              "level": 1,
              "isEditting": false,
              "tag": "a",
              "content": "Sub menu",
              "href": "https://onextdigital.com/",
              "target": "_self",
              "icon": "",
              "children": []
            },
            {
              "id": "9d0ed4d4-9252-4410-a628-33f8cfd24309",
              "name": "Sub menu",
              "css": "menu-item",
              "class": "home header__menu-item",
              "level": 1,
              "isEditting": false,
              "tag": "a",
              "content": "Sub menu",
              "href": "https://onextdigital.com/",
              "target": "_self",
              "icon": "",
              "children": []
            }
          ]
        },
        {
          "id": "18e9903e-b9ed-4381-9784-b61247ab8c5e",
          "name": "Sub menu",
          "css": "menu-item",
          "class": "home header__menu-item",
          "level": 1,
          "isEditting": false,
          "tag": "a",
          "content": "Sub menu",
          "href": "https://onextdigital.com/",
          "target": "_self",
          "icon": "",
          "children": [
            {
              "id": "8821eec3-4503-4c2c-9678-7a955b367b1e",
              "name": "Sub menu",
              "css": "menu-item",
              "class": "home header__menu-item",
              "level": 1,
              "isEditting": false,
              "tag": "a",
              "content": "Sub menu",
              "href": "https://onextdigital.com/",
              "target": "_self",
              "icon": "",
              "children": []
            },
            {
              "id": "3554740e-3442-4a39-bde1-2386ebc92eff",
              "name": "Sub menu",
              "css": "menu-item",
              "class": "home header__menu-item",
              "level": 1,
              "isEditting": false,
              "tag": "a",
              "content": "Sub menu",
              "href": "https://onextdigital.com/",
              "target": "_self",
              "icon": "",
              "children": []
            },
            {
              "id": "f736fbf0-69f0-4bdb-b307-af85954c7aba",
              "name": "Sub menu",
              "css": "menu-item",
              "class": "home header__menu-item",
              "level": 1,
              "isEditting": false,
              "tag": "a",
              "content": "Sub menu",
              "href": "https://onextdigital.com/",
              "target": "_self",
              "icon": "",
              "children": []
            }
          ]
        },
        {
          "id": "e9fe74bf-f3b9-4f28-b0ae-9236b85dac53",
          "name": "Sub menu",
          "css": "menu-item",
          "class": "home header__menu-item",
          "level": 1,
          "isEditting": false,
          "tag": "a",
          "content": "Sub menu",
          "href": "https://onextdigital.com/",
          "target": "_self",
          "icon": "",
          "children": [
            {
              "id": "794988cf-5a68-4fc5-a9f7-65c54df9d3a5",
              "name": "Sub menu",
              "css": "menu-item",
              "class": "home header__menu-item",
              "level": 1,
              "isEditting": false,
              "tag": "a",
              "content": "Sub menu",
              "href": "https://onextdigital.com/",
              "target": "_self",
              "icon": "",
              "children": []
            },
            {
              "id": "d21325bf-3ff9-4135-9141-1f23e5a5f957",
              "name": "Sub menu",
              "css": "menu-item",
              "class": "home header__menu-item",
              "level": 1,
              "isEditting": false,
              "tag": "a",
              "content": "Sub menu",
              "href": "https://onextdigital.com/",
              "target": "_self",
              "icon": "",
              "children": []
            },
            {
              "id": "f3060531-198d-44a2-b4df-347fb188d1f6",
              "name": "Sub menu",
              "css": "menu-item",
              "class": "home header__menu-item",
              "level": 1,
              "isEditting": false,
              "tag": "a",
              "content": "Sub menu",
              "href": "https://onextdigital.com/",
              "target": "_self",
              "icon": "",
              "children": []
            },
            {
              "id": "578d559a-ddbe-488e-960a-05ce55d32cda",
              "name": "Sub menu",
              "css": "menu-item",
              "class": "home header__menu-item",
              "level": 1,
              "isEditting": false,
              "tag": "a",
              "content": "Sub menu",
              "href": "https://onextdigital.com/",
              "target": "_self",
              "icon": "",
              "children": []
            }
          ]
        }
      ]
    },
    {
      "id": "49609b50-6211-4571-bd64-d378acc287f3",
      "name": "Home",
      "css": "menu-item",
      "class": "home",
      "level": 1,
      "isEditting": false,
      "tag": "a",
      "content": "Home",
      "href": "/home",
      "target": "_self",
      "icon": "",
      "children": [
        {
          "id": "e5e2ef3c-cb64-486b-9b89-f900f545620d",
          "name": "Sub menu",
          "css": "menu-item",
          "class": "home header__menu-item",
          "level": 1,
          "isEditting": false,
          "tag": "a",
          "content": "Sub menu",
          "href": "https://onextdigital.com/",
          "target": "_self",
          "icon": "",
          "children": [
            {
              "id": "9e6d7199-8123-4931-9435-c5b6837b8de1",
              "name": "Image",
              "css": "menu-item",
              "class": "home header__menu-item",
              "level": 1,
              "isEditting": false,
              "tag": "img",
              "content": "Image",
              "href": "https://www.toei-animation.com/wp-content/uploads/2019/02/one_piece_product.jpg",
              "target": "_self",
              "icon": "",
              "children": []
            }
          ]
        },
        {
          "id": "12ce9b3b-fbcb-49ce-8d4a-1ce3de286577",
          "name": "Sub menu",
          "css": "menu-item",
          "class": "home header__menu-item",
          "level": 1,
          "isEditting": false,
          "tag": "a",
          "content": "Sub menu",
          "href": "https://onextdigital.com/",
          "target": "_self",
          "icon": "",
          "children": [
            {
              "id": "ca4369aa-9d70-4332-9f33-6d45f207f6fd",
              "name": "Image",
              "css": "menu-item",
              "class": "home header__menu-item",
              "level": 1,
              "isEditting": false,
              "tag": "img",
              "content": "Image",
              "href": "https://www.toei-animation.com/wp-content/uploads/2019/02/one_piece_product.jpg",
              "target": "_self",
              "icon": "",
              "children": []
            }
          ]
        },
        {
          "id": "4c8cde47-6e93-47a9-97ec-3e699ecbed3d",
          "name": "Sub menu",
          "css": "menu-item",
          "class": "home header__menu-item",
          "level": 1,
          "isEditting": false,
          "tag": "a",
          "content": "Sub menu",
          "href": "https://onextdigital.com/",
          "target": "_self",
          "icon": "",
          "children": [
            {
              "id": "0fb07f35-5034-4f35-a0cc-0f21eca7ea7f",
              "name": "Image",
              "css": "menu-item",
              "class": "home header__menu-item",
              "level": 1,
              "isEditting": false,
              "tag": "img",
              "content": "Image",
              "href": "https://www.toei-animation.com/wp-content/uploads/2019/02/one_piece_product.jpg",
              "target": "_self",
              "icon": "",
              "children": []
            }
          ]
        },
        {
          "id": "203a4027-3a17-4131-8964-4592c25b2b53",
          "name": "Sub menu",
          "css": "menu-item",
          "class": "home header__menu-item",
          "level": 1,
          "isEditting": false,
          "tag": "a",
          "content": "Sub menu",
          "href": "https://onextdigital.com/",
          "target": "_self",
          "icon": "",
          "children": [
            {
              "id": "ca449db8-2058-4f54-a701-7016c34acb66",
              "name": "Image",
              "css": "menu-item",
              "class": "home header__menu-item",
              "level": 1,
              "isEditting": false,
              "tag": "img",
              "content": "Image",
              "href": "https://www.toei-animation.com/wp-content/uploads/2019/02/one_piece_product.jpg",
              "target": "_self",
              "icon": "",
              "children": []
            }
          ]
        }
      ]
    },
    {
      "id": "2e924f57-5b2f-4e62-b9a8-51320bcae49f",
      "name": "Home",
      "css": "menu-item",
      "class": "home",
      "level": 1,
      "isEditting": false,
      "tag": "a",
      "content": "Home",
      "href": "/home",
      "target": "_self",
      "icon": "",
      "children": [
        {
          "id": "6000d77e-451f-463d-983d-b4f27ffc4ba0",
          "name": "Sub menu",
          "css": "menu-item",
          "class": "home header__menu-item",
          "level": 1,
          "isEditting": false,
          "tag": "a",
          "content": "Sub menu",
          "href": "https://onextdigital.com/",
          "target": "_self",
          "icon": "",
          "children": [
            {
              "id": "6f1053aa-aaee-4419-8594-374724d69c4b",
              "name": "Sub menu",
              "css": "menu-item",
              "class": "home header__menu-item",
              "level": 1,
              "isEditting": false,
              "tag": "a",
              "content": "Sub menu",
              "href": "https://onextdigital.com/",
              "target": "_self",
              "icon": "",
              "children": []
            },
            {
              "id": "ceeb85e3-6665-435e-97c5-8de1b6d6ce71",
              "name": "Sub menu",
              "css": "menu-item",
              "class": "home header__menu-item",
              "level": 1,
              "isEditting": false,
              "tag": "a",
              "content": "Sub menu",
              "href": "https://onextdigital.com/",
              "target": "_self",
              "icon": "",
              "children": []
            },
            {
              "id": "32da5e28-4f91-4eac-b449-218446a7b7cc",
              "name": "Sub menu",
              "css": "menu-item",
              "class": "home header__menu-item",
              "level": 1,
              "isEditting": false,
              "tag": "a",
              "content": "Sub menu",
              "href": "https://onextdigital.com/",
              "target": "_self",
              "icon": "",
              "children": []
            }
          ]
        },
        {
          "id": "0cdd9d5c-0146-4008-ba99-fb00e38a5f20",
          "name": "Sub menu",
          "css": "menu-item",
          "class": "home header__menu-item",
          "level": 1,
          "isEditting": false,
          "tag": "a",
          "content": "Sub menu",
          "href": "https://onextdigital.com/",
          "target": "_self",
          "icon": "",
          "children": [
            {
              "id": "660a2e11-368e-46bd-8e2b-bce382c20ac0",
              "name": "Image",
              "css": "menu-item",
              "class": "home header__menu-item",
              "level": 1,
              "isEditting": false,
              "tag": "img",
              "content": "Image",
              "href": "https://www.toei-animation.com/wp-content/uploads/2019/02/one_piece_product.jpg",
              "target": "_self",
              "icon": "",
              "children": []
            },
            {
              "id": "0ba260ec-d324-47d3-b933-a2560c15eeff",
              "name": "Image",
              "css": "menu-item",
              "class": "home header__menu-item",
              "level": 1,
              "isEditting": false,
              "tag": "img",
              "content": "Image",
              "href": "https://www.toei-animation.com/wp-content/uploads/2019/02/one_piece_product.jpg",
              "target": "_self",
              "icon": "",
              "children": []
            },
            {
              "id": "576824c1-8e97-4ad1-b543-1dc9a18f575d",
              "name": "Image",
              "css": "menu-item",
              "class": "home header__menu-item",
              "level": 1,
              "isEditting": false,
              "tag": "img",
              "content": "Image",
              "href": "https://www.toei-animation.com/wp-content/uploads/2019/02/one_piece_product.jpg",
              "target": "_self",
              "icon": "",
              "children": []
            }
          ]
        },
        {
          "id": "4cd29507-cd61-423a-a39e-fa0b2433da38",
          "name": "Sub menu",
          "css": "menu-item",
          "class": "home header__menu-item",
          "level": 1,
          "isEditting": false,
          "tag": "a",
          "content": "Sub menu",
          "href": "https://onextdigital.com/",
          "target": "_self",
          "icon": "",
          "children": []
        }
      ]
    },
    {
      "id": "c863145d-fc47-4b3f-a4d3-75b69d5e64c6",
      "name": "Home",
      "css": "menu-item",
      "class": "home",
      "level": 1,
      "isEditting": false,
      "tag": "a",
      "content": "Home",
      "href": "/home",
      "target": "_self",
      "icon": "",
      "children": [
        {
          "id": "1c02e7eb-c625-494f-8a3a-8605a0ce7d39",
          "name": "Image",
          "css": "menu-item",
          "class": "home header__menu-item",
          "level": 1,
          "isEditting": false,
          "tag": "img",
          "content": "Image",
          "href": "https://www.toei-animation.com/wp-content/uploads/2019/02/one_piece_product.jpg",
          "target": "_self",
          "icon": "",
          "children": []
        },
        {
          "id": "aa63a394-7219-45c3-a70a-3fafeecdf6aa",
          "name": "Image",
          "css": "menu-item",
          "class": "home header__menu-item",
          "level": 1,
          "isEditting": false,
          "tag": "img",
          "content": "Image",
          "href": "https://www.toei-animation.com/wp-content/uploads/2019/02/one_piece_product.jpg",
          "target": "_self",
          "icon": "",
          "children": []
        },
        {
          "id": "64d5d0a0-de99-4f63-ab24-4c05adb29a7c",
          "name": "Image",
          "css": "menu-item",
          "class": "home header__menu-item",
          "level": 1,
          "isEditting": false,
          "tag": "img",
          "content": "Image",
          "href": "https://www.toei-animation.com/wp-content/uploads/2019/02/one_piece_product.jpg",
          "target": "_self",
          "icon": "",
          "children": []
        }
      ]
    }
  ]


const generateHTML = (data) => {
  let html = '<nav class="header__inline-menu"> <ul class=\'horizontal-list\'>'; // Sửa class để phù hợp với yêu cầu

  data.forEach(item => {
    // Xử lý thẻ <a> hoặc thẻ khác
    html += '<li>'; // Mở thẻ <li> ở đây

    //handle if have not child  
    if (item.children.length === 0) {
      html += `<a class=\'title-menu\ header__menu-item\' href=\'${item.href}\'>${item.name}</a>`;
    }

    // Xử lý children nếu có
    if (item.children && item.children.length > 0) {
      html += `<p class=\'title-menu\ header__menu-item\' href=\'${item.href}\'>${item.name}</p>`;
      html += '<ul class=\'panel-menu\'>';
      html += generateChildMenu(item.children);
      html += '</ul>';
    }

    html += '</li>'; // Đóng thẻ <li> ở đây
  });

  html += '</ul></nav>';
  html += "<style>.horizontal-list{display:flex;justify-content:center;list-style:none;padding:0;margin:0;}.horizontal-list li{margin:0 10px;}.title-menu:hover{text-decoration:underline;}.panel-menu{display:none;background-color:#4CAF50;position:absolute;width:100vw;left:0;min-height:200px;list-style:none;}.title-menu:hover+.panel-menu,.panel-menu:hover{display:flex;}.title-menu{padding:10px 15px;text-decoration:none;}.menu-item{display:block;padding:10px 15px;color:white;text-decoration:none;}.menu-item:hover{background-color:rgba(255,255,255,0.3);}.menu-inmenu{list-style-type:none;}.panel-menu,.panel-mega-menu ul{justify-content:space-around;padding:10px;}.menu{padding:10px 0;}.panel-mega-menu ul li{padding:5px 10px;color:white;}.sub-child{position:relative;left:5px;}</style>";


  return html;
};

const generateHTMLMobile = (data) => {
  let html = '<nav class="menu-drawer__navigation"> <ul class=\'horizontal-list-mobile\'>'; // Sửa class để phù hợp với yêu cầu

  data.forEach(item => {
    // Xử lý thẻ <a> hoặc thẻ khác
    html += '<li>'; // Mở thẻ <li> ở đây

    //handle if have not child  
    if (item.children.length === 0) {
      html += `<a class=\'title-menu\ header__menu-item\' href=\'${item.href}\'>${item.name}</a>`;
    }

    // Xử lý children nếu có
    if (item.children && item.children.length > 0) {
      html += `<p class=\'title-menu\ header__menu-item\' href=\'${item.href}\'>${item.name}</p>`;
      html += '<ul class=\' menu-drawer__menu has-submenu list-menu panel-menu list-menu\'>';
      html += generateChildMenu(item.children);
      html += '</ul>';
    }

    html += '</li>'; // Đóng thẻ <li> ở đây
  });

  html += '</ul></nav>';
  html += "<style>.horizontal-list-mobile{display: block !important;justify-content:center;list-style:none;padding:0;margin:0;}.horizontal-list li{margin:0 10px;}.title-menu:hover{text-decoration:underline;}.panel-menu{display:none;background-color:#4CAF50;position:absolute;width:100vw;left:0;min-height:200px;list-style:none;}.title-menu:hover+.panel-menu,.panel-menu:hover{display:flex;}.title-menu{padding:10px 15px;text-decoration:none;}.menu-item{display:block;padding:10px 15px;color:white;text-decoration:none;}.menu-item:hover{background-color:rgba(255,255,255,0.3);}.menu-inmenu{list-style-type:none;}.panel-menu,.panel-mega-menu ul{justify-content:space-around;padding:10px;}.menu{padding:10px 0;}.panel-mega-menu ul li{padding:5px 10px;color:white;}.sub-child{position:relative;left:5px;}</style>";


  return html;
};


//generate panel show menu child
const generateChildMenu = (data) => {
  let html = ''; // Khởi tạo div cho menu

  data.forEach(item => {
    html += '<li class=\'menu\'>';
    // Tạo thẻ cho mỗi mục
    if (item.tag === 'img') {
      html += `<img class=\'title-menu\' src=\'${item.href}\' style=\'overflow: hidden; width: 170px; height: 170px;\' />`;
    } else {
      html += `<a class=\'title-menu\ header__menu-item \' href=\'${item.href}\'>${item.name}</a>`;
    }

    // // Kiểm tra nếu có children và gọi lại hàm generateChildMenu để tạo submenu
    if (item.children && item.children.length > 0) {
      html += '<div class=\'menu-inmenu\'>';
      html += generatePanel(item.children); // Gọi đệ quy để tạo submenu
      html += '</div>';
    }
    html += '</li>'; // Kết thúc div cho menu
  });

  return html; // Trả về HTML
}

//generate panel below nav
const generatePanel = (data) => {
  let html = '';
  html += '<div class=\'panel-mega-menu\'>';
  data.forEach(item => {
    html += '<ul>';
    if (item.tag === 'img') {
      html += `<img class=\'title-menu\' src=\'${item.href}\' style=\'overflow: hidden; width: 170px; height: 170px;\' />`;
    } else {
      html += `<a class=\'title-menu\ header__menu-item \' href=\'${item.href}\'>${item.name}</a>`;
    }
    html += '</ul>';
    if (item.children && item.children.length > 0) {
      generatePanel(item.children);
    }
  });
  html += '</div>';
  return html;
}

// Tạo menu mới
var newMenu = generateHTML(MENU_DATA);
var newMenuMobile = generateHTMLMobile(MENU_DATA);

originalMenu.insertAdjacentHTML('afterend', newMenu);
mobileMenu.insertAdjacentHTML('afterend', newMenuMobile);
