// var originalMenu = document.querySelector('.header__inline-menu');
// var mobileMenu = document.querySelector(".menu-drawer__navigation");

// originalMenu.style.display = 'none';
// mobileMenu.style.display = 'none';

// const MENU_DATA =
//   [
//     {
//       "id": "1e02c6e3-5410-481b-8438-807fa564c424",
//       "name": "Home",
//       "css": "menu-item",
//       "class": "home",
//       "level": 1,
//       "isEditting": false,
//       "tag": "a",
//       "content": "Home",
//       "href": "/home",
//       "target": "_self",
//       "icon": "",
//       "children": [
//         {
//           "id": "ac8b3a27-c77c-48ee-8de4-79fc2d9dfe22",
//           "name": "Sub menu",
//           "css": "menu-item",
//           "class": "home header__menu-item",
//           "level": 1,
//           "isEditting": false,
//           "tag": "a",
//           "content": "Sub menu",
//           "href": "https://onextdigital.com/",
//           "target": "_self",
//           "icon": "",
//           "children": [
//             {
//               "id": "f1888435-15fa-4a51-af6a-555500a5d1e9",
//               "name": "Sub menu",
//               "css": "menu-item",
//               "class": "home header__menu-item",
//               "level": 1,
//               "isEditting": false,
//               "tag": "a",
//               "content": "Sub menu",
//               "href": "https://onextdigital.com/",
//               "target": "_self",
//               "icon": "",
//               "children": []
//             },
//             {
//               "id": "01058a85-de50-4882-8eeb-145afea6c3fb",
//               "name": "Sub menu",
//               "css": "menu-item",
//               "class": "home header__menu-item",
//               "level": 1,
//               "isEditting": false,
//               "tag": "a",
//               "content": "Sub menu",
//               "href": "https://onextdigital.com/",
//               "target": "_self",
//               "icon": "",
//               "children": []
//             }
//           ],
//         },
//         {
//           "id": "1df06753-b885-4368-b0a7-dbe2db1597cb",
//           "name": "Sub menu",
//           "css": "menu-item",
//           "class": "home header__menu-item",
//           "level": 1,
//           "isEditting": false,
//           "tag": "a",
//           "content": "Sub menu",
//           "href": "https://onextdigital.com/",
//           "target": "_self",
//           "icon": "",
//           "children": []
//         },
//         {
//           "id": "ca444f37-2d83-4394-ac6d-0b5f98a1a75e",
//           "name": "Image",
//           "css": "",
//           "class": "home header__menu-item",
//           "level": 1,
//           "isEditting": false,
//           "tag": "img",
//           "content": "Image",
//           "href": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2FZuQB0BxGqmsCDm4uqxAzBRF4pDmtA90ew&s",
//           "target": "_self",
//           "icon": "",
//           "children": [
//             {
//               "id": "28dbd268-03b7-4fa8-b571-f424996fc138",
//               "name": "Sub menu",
//               "css": "menu-item",
//               "class": "home header__menu-item",
//               "level": 1,
//               "isEditting": false,
//               "tag": "a",
//               "content": "Sub menu",
//               "href": "https://onextdigital.com/",
//               "target": "_self",
//               "icon": "",
//               "children": []
//             },
//             {
//               "id": "4756b6d5-6dce-4c33-af5c-a507a4c7ff72",
//               "name": "Sub menu",
//               "css": "menu-item",
//               "class": "home header__menu-item",
//               "level": 1,
//               "isEditting": false,
//               "tag": "a",
//               "content": "Sub menu",
//               "href": "https://onextdigital.com/",
//               "target": "_self",
//               "icon": "",
//               "children": []
//             }
//           ],
//         },
//         {
//           "id": "c0045b6b-8de5-4518-bc8b-fe79866929ac",
//           "name": "Sub menu",
//           "css": "menu-item",
//           "class": "home header__menu-item",
//           "level": 1,
//           "isEditting": false,
//           "tag": "a",
//           "content": "Sub menu",
//           "href": "https://onextdigital.com/",
//           "target": "_self",
//           "icon": "",
//           "children": []
//         },
//         {
//           "id": "a977e0ba-8739-4ad4-b881-981d8a69a9cf",
//           "name": "Home",
//           "css": "menu-item",
//           "class": "home header__menu-item",
//           "level": 1,
//           "isEditting": false,
//           "tag": "div",
//           "content": "Home",
//           "href": "",
//           "target": "_self",
//           "icon": "",
//           "children": []
//         }
//       ],
//     },
//     {
//       "id": "0b2932d7-372c-406a-8200-e78c8015816f",
//       "name": "Home",
//       "css": "menu-item",
//       "class": "home",
//       "level": 1,
//       "isEditting": false,
//       "tag": "a",
//       "content": "Home",
//       "href": "/home",
//       "target": "_self",
//       "icon": "",
//       "children": [
//         {
//           "id": "c20ed31b-ff39-4cb4-b125-2b547ef839b5",
//           "name": "Sub menu",
//           "css": "menu-item",
//           "class": "home header__menu-item",
//           "level": 1,
//           "isEditting": false,
//           "tag": "a",
//           "content": "Sub menu",
//           "href": "https://onextdigital.com/",
//           "target": "_self",
//           "icon": "",
//           "children": [
//             {
//               "id": "6e201b65-0a19-4e67-9d70-eb888328f478",
//               "name": "Sub menu",
//               "css": "menu-item",
//               "class": "home header__menu-item",
//               "level": 1,
//               "isEditting": false,
//               "tag": "a",
//               "content": "Sub menu",
//               "href": "https://onextdigital.com/",
//               "target": "_self",
//               "icon": "",
//               "children": []
//             },
//             {
//               "id": "9e5e47f8-fe1d-4f79-92ef-9534b341b2e5",
//               "name": "Sub menu",
//               "css": "menu-item",
//               "class": "home header__menu-item",
//               "level": 1,
//               "isEditting": false,
//               "tag": "a",
//               "content": "Sub menu",
//               "href": "https://onextdigital.com/",
//               "target": "_self",
//               "icon": "",
//               "children": []
//             },
//             {
//               "id": "9d0ed4d4-9252-4410-a628-33f8cfd24309",
//               "name": "Sub menu",
//               "css": "menu-item",
//               "class": "home header__menu-item",
//               "level": 1,
//               "isEditting": false,
//               "tag": "a",
//               "content": "Sub menu",
//               "href": "https://onextdigital.com/",
//               "target": "_self",
//               "icon": "",
//               "children": []
//             }
//           ]
//         },
//         {
//           "id": "18e9903e-b9ed-4381-9784-b61247ab8c5e",
//           "name": "Sub menu",
//           "css": "menu-item",
//           "class": "home header__menu-item",
//           "level": 1,
//           "isEditting": false,
//           "tag": "a",
//           "content": "Sub menu",
//           "href": "https://onextdigital.com/",
//           "target": "_self",
//           "icon": "",
//           "children": [
//             {
//               "id": "8821eec3-4503-4c2c-9678-7a955b367b1e",
//               "name": "Sub menu",
//               "css": "menu-item",
//               "class": "home header__menu-item",
//               "level": 1,
//               "isEditting": false,
//               "tag": "a",
//               "content": "Sub menu",
//               "href": "https://onextdigital.com/",
//               "target": "_self",
//               "icon": "",
//               "children": []
//             },
//             {
//               "id": "3554740e-3442-4a39-bde1-2386ebc92eff",
//               "name": "Sub menu",
//               "css": "menu-item",
//               "class": "home header__menu-item",
//               "level": 1,
//               "isEditting": false,
//               "tag": "a",
//               "content": "Sub menu",
//               "href": "https://onextdigital.com/",
//               "target": "_self",
//               "icon": "",
//               "children": []
//             },
//             {
//               "id": "f736fbf0-69f0-4bdb-b307-af85954c7aba",
//               "name": "Sub menu",
//               "css": "menu-item",
//               "class": "home header__menu-item",
//               "level": 1,
//               "isEditting": false,
//               "tag": "a",
//               "content": "Sub menu",
//               "href": "https://onextdigital.com/",
//               "target": "_self",
//               "icon": "",
//               "children": []
//             }
//           ]
//         },
//         {
//           "id": "e9fe74bf-f3b9-4f28-b0ae-9236b85dac53",
//           "name": "Sub menu",
//           "css": "menu-item",
//           "class": "home header__menu-item",
//           "level": 1,
//           "isEditting": false,
//           "tag": "a",
//           "content": "Sub menu",
//           "href": "https://onextdigital.com/",
//           "target": "_self",
//           "icon": "",
//           "children": [
//             {
//               "id": "794988cf-5a68-4fc5-a9f7-65c54df9d3a5",
//               "name": "Sub menu",
//               "css": "menu-item",
//               "class": "home header__menu-item",
//               "level": 1,
//               "isEditting": false,
//               "tag": "a",
//               "content": "Sub menu",
//               "href": "https://onextdigital.com/",
//               "target": "_self",
//               "icon": "",
//               "children": []
//             },
//             {
//               "id": "d21325bf-3ff9-4135-9141-1f23e5a5f957",
//               "name": "Sub menu",
//               "css": "menu-item",
//               "class": "home header__menu-item",
//               "level": 1,
//               "isEditting": false,
//               "tag": "a",
//               "content": "Sub menu",
//               "href": "https://onextdigital.com/",
//               "target": "_self",
//               "icon": "",
//               "children": []
//             },
//             {
//               "id": "f3060531-198d-44a2-b4df-347fb188d1f6",
//               "name": "Sub menu",
//               "css": "menu-item",
//               "class": "home header__menu-item",
//               "level": 1,
//               "isEditting": false,
//               "tag": "a",
//               "content": "Sub menu",
//               "href": "https://onextdigital.com/",
//               "target": "_self",
//               "icon": "",
//               "children": []
//             },
//             {
//               "id": "578d559a-ddbe-488e-960a-05ce55d32cda",
//               "name": "Sub menu",
//               "css": "menu-item",
//               "class": "home header__menu-item",
//               "level": 1,
//               "isEditting": false,
//               "tag": "a",
//               "content": "Sub menu",
//               "href": "https://onextdigital.com/",
//               "target": "_self",
//               "icon": "",
//               "children": []
//             }
//           ]
//         }
//       ]
//     },
//     {
//       "id": "49609b50-6211-4571-bd64-d378acc287f3",
//       "name": "Home",
//       "css": "menu-item",
//       "class": "home",
//       "level": 1,
//       "isEditting": false,
//       "tag": "a",
//       "content": "Home",
//       "href": "/home",
//       "target": "_self",
//       "icon": "",
//       "children": [
//         {
//           "id": "e5e2ef3c-cb64-486b-9b89-f900f545620d",
//           "name": "Sub menu",
//           "css": "menu-item",
//           "class": "home header__menu-item",
//           "level": 1,
//           "isEditting": false,
//           "tag": "a",
//           "content": "Sub menu",
//           "href": "https://onextdigital.com/",
//           "target": "_self",
//           "icon": "",
//           "children": [
//             {
//               "id": "9e6d7199-8123-4931-9435-c5b6837b8de1",
//               "name": "Image",
//               "css": "menu-item",
//               "class": "home header__menu-item",
//               "level": 1,
//               "isEditting": false,
//               "tag": "img",
//               "content": "Image",
//               "href": "https://www.toei-animation.com/wp-content/uploads/2019/02/one_piece_product.jpg",
//               "target": "_self",
//               "icon": "",
//               "children": []
//             }
//           ]
//         },
//         {
//           "id": "12ce9b3b-fbcb-49ce-8d4a-1ce3de286577",
//           "name": "Sub menu",
//           "css": "menu-item",
//           "class": "home header__menu-item",
//           "level": 1,
//           "isEditting": false,
//           "tag": "a",
//           "content": "Sub menu",
//           "href": "https://onextdigital.com/",
//           "target": "_self",
//           "icon": "",
//           "children": [
//             {
//               "id": "ca4369aa-9d70-4332-9f33-6d45f207f6fd",
//               "name": "Image",
//               "css": "menu-item",
//               "class": "home header__menu-item",
//               "level": 1,
//               "isEditting": false,
//               "tag": "img",
//               "content": "Image",
//               "href": "https://www.toei-animation.com/wp-content/uploads/2019/02/one_piece_product.jpg",
//               "target": "_self",
//               "icon": "",
//               "children": []
//             }
//           ]
//         },
//         {
//           "id": "4c8cde47-6e93-47a9-97ec-3e699ecbed3d",
//           "name": "Sub menu",
//           "css": "menu-item",
//           "class": "home header__menu-item",
//           "level": 1,
//           "isEditting": false,
//           "tag": "a",
//           "content": "Sub menu",
//           "href": "https://onextdigital.com/",
//           "target": "_self",
//           "icon": "",
//           "children": [
//             {
//               "id": "0fb07f35-5034-4f35-a0cc-0f21eca7ea7f",
//               "name": "Image",
//               "css": "menu-item",
//               "class": "home header__menu-item",
//               "level": 1,
//               "isEditting": false,
//               "tag": "img",
//               "content": "Image",
//               "href": "https://www.toei-animation.com/wp-content/uploads/2019/02/one_piece_product.jpg",
//               "target": "_self",
//               "icon": "",
//               "children": []
//             }
//           ]
//         },
//         {
//           "id": "203a4027-3a17-4131-8964-4592c25b2b53",
//           "name": "Sub menu",
//           "css": "menu-item",
//           "class": "home header__menu-item",
//           "level": 1,
//           "isEditting": false,
//           "tag": "a",
//           "content": "Sub menu",
//           "href": "https://onextdigital.com/",
//           "target": "_self",
//           "icon": "",
//           "children": [
//             {
//               "id": "ca449db8-2058-4f54-a701-7016c34acb66",
//               "name": "Image",
//               "css": "menu-item",
//               "class": "home header__menu-item",
//               "level": 1,
//               "isEditting": false,
//               "tag": "img",
//               "content": "Image",
//               "href": "https://www.toei-animation.com/wp-content/uploads/2019/02/one_piece_product.jpg",
//               "target": "_self",
//               "icon": "",
//               "children": []
//             }
//           ]
//         }
//       ]
//     },
//     {
//       "id": "2e924f57-5b2f-4e62-b9a8-51320bcae49f",
//       "name": "Home",
//       "css": "menu-item",
//       "class": "home",
//       "level": 1,
//       "isEditting": false,
//       "tag": "a",
//       "content": "Home",
//       "href": "/home",
//       "target": "_self",
//       "icon": "",
//       "children": [
//         {
//           "id": "6000d77e-451f-463d-983d-b4f27ffc4ba0",
//           "name": "Sub menu",
//           "css": "menu-item",
//           "class": "home header__menu-item",
//           "level": 1,
//           "isEditting": false,
//           "tag": "a",
//           "content": "Sub menu",
//           "href": "https://onextdigital.com/",
//           "target": "_self",
//           "icon": "",
//           "children": [
//             {
//               "id": "6f1053aa-aaee-4419-8594-374724d69c4b",
//               "name": "Sub menu",
//               "css": "menu-item",
//               "class": "home header__menu-item",
//               "level": 1,
//               "isEditting": false,
//               "tag": "a",
//               "content": "Sub menu",
//               "href": "https://onextdigital.com/",
//               "target": "_self",
//               "icon": "",
//               "children": []
//             },
//             {
//               "id": "ceeb85e3-6665-435e-97c5-8de1b6d6ce71",
//               "name": "Sub menu",
//               "css": "menu-item",
//               "class": "home header__menu-item",
//               "level": 1,
//               "isEditting": false,
//               "tag": "a",
//               "content": "Sub menu",
//               "href": "https://onextdigital.com/",
//               "target": "_self",
//               "icon": "",
//               "children": []
//             },
//             {
//               "id": "32da5e28-4f91-4eac-b449-218446a7b7cc",
//               "name": "Sub menu",
//               "css": "menu-item",
//               "class": "home header__menu-item",
//               "level": 1,
//               "isEditting": false,
//               "tag": "a",
//               "content": "Sub menu",
//               "href": "https://onextdigital.com/",
//               "target": "_self",
//               "icon": "",
//               "children": []
//             }
//           ]
//         },
//         {
//           "id": "0cdd9d5c-0146-4008-ba99-fb00e38a5f20",
//           "name": "Sub menu",
//           "css": "menu-item",
//           "class": "home header__menu-item",
//           "level": 1,
//           "isEditting": false,
//           "tag": "a",
//           "content": "Sub menu",
//           "href": "https://onextdigital.com/",
//           "target": "_self",
//           "icon": "",
//           "children": [
//             {
//               "id": "660a2e11-368e-46bd-8e2b-bce382c20ac0",
//               "name": "Image",
//               "css": "menu-item",
//               "class": "home header__menu-item",
//               "level": 1,
//               "isEditting": false,
//               "tag": "img",
//               "content": "Image",
//               "href": "https://www.toei-animation.com/wp-content/uploads/2019/02/one_piece_product.jpg",
//               "target": "_self",
//               "icon": "",
//               "children": []
//             },
//             {
//               "id": "0ba260ec-d324-47d3-b933-a2560c15eeff",
//               "name": "Image",
//               "css": "menu-item",
//               "class": "home header__menu-item",
//               "level": 1,
//               "isEditting": false,
//               "tag": "img",
//               "content": "Image",
//               "href": "https://www.toei-animation.com/wp-content/uploads/2019/02/one_piece_product.jpg",
//               "target": "_self",
//               "icon": "",
//               "children": []
//             },
//             {
//               "id": "576824c1-8e97-4ad1-b543-1dc9a18f575d",
//               "name": "Image",
//               "css": "menu-item",
//               "class": "home header__menu-item",
//               "level": 1,
//               "isEditting": false,
//               "tag": "img",
//               "content": "Image",
//               "href": "https://www.toei-animation.com/wp-content/uploads/2019/02/one_piece_product.jpg",
//               "target": "_self",
//               "icon": "",
//               "children": []
//             }
//           ]
//         },
//         {
//           "id": "4cd29507-cd61-423a-a39e-fa0b2433da38",
//           "name": "Sub menu",
//           "css": "menu-item",
//           "class": "home header__menu-item",
//           "level": 1,
//           "isEditting": false,
//           "tag": "a",
//           "content": "Sub menu",
//           "href": "https://onextdigital.com/",
//           "target": "_self",
//           "icon": "",
//           "children": []
//         }
//       ]
//     },
//     {
//       "id": "c863145d-fc47-4b3f-a4d3-75b69d5e64c6",
//       "name": "Home",
//       "css": "menu-item",
//       "class": "home",
//       "level": 1,
//       "isEditting": false,
//       "tag": "a",
//       "content": "Home",
//       "href": "/home",
//       "target": "_self",
//       "icon": "",
//       "children": [
//         {
//           "id": "1c02e7eb-c625-494f-8a3a-8605a0ce7d39",
//           "name": "Image",
//           "css": "menu-item",
//           "class": "home header__menu-item",
//           "level": 1,
//           "isEditting": false,
//           "tag": "img",
//           "content": "Image",
//           "href": "https://www.toei-animation.com/wp-content/uploads/2019/02/one_piece_product.jpg",
//           "target": "_self",
//           "icon": "",
//           "children": []
//         },
//         {
//           "id": "aa63a394-7219-45c3-a70a-3fafeecdf6aa",
//           "name": "Image",
//           "css": "menu-item",
//           "class": "home header__menu-item",
//           "level": 1,
//           "isEditting": false,
//           "tag": "img",
//           "content": "Image",
//           "href": "https://www.toei-animation.com/wp-content/uploads/2019/02/one_piece_product.jpg",
//           "target": "_self",
//           "icon": "",
//           "children": []
//         },
//         {
//           "id": "64d5d0a0-de99-4f63-ab24-4c05adb29a7c",
//           "name": "Image",
//           "css": "menu-item",
//           "class": "home header__menu-item",
//           "level": 1,
//           "isEditting": false,
//           "tag": "img",
//           "content": "Image",
//           "href": "https://www.toei-animation.com/wp-content/uploads/2019/02/one_piece_product.jpg",
//           "target": "_self",
//           "icon": "",
//           "children": []
//         }
//       ]
//     }
//   ]


// export const generateHTML = (data) => {
//   let html = "<nav> <ul class='horizontal-list'>"; // Sửa class để phù hợp với yêu cầu

//   data.forEach(item => {
//     // Xử lý thẻ <a> hoặc thẻ khác
//     html += `<li>`; // Mở thẻ <li> ở đây

//     //handle if have not child
//     if (item.children.length === 0) {
//       html += `<a class="title-menu" href="${item.href}">${item.name}</a>`
//     }

//     // Xử lý children nếu có
//     if (item.children && item.children.length > 0) {
//       html += `<a class="title-menu" href="${item.href}">${item.name}</a>`
//       html += `<ul class='panel-menu'>`
//       html += generateChildMenu(item.children)
//       html += `</ul>`
//     }

//     html += `</li>`; // Đóng thẻ <li> ở đây
//   });

//   html += '</ul></nav>';
//   html += "<style>.panel-menu{display:none;background-color:#4CAF50;position:absolute;width:100vw;left:0;min-height:200px;list-style:none;}.title-menu:hover+.panel-menu,.panel-menu:hover{display:flex;}.horizontal-list{list-style:none;padding:0;margin:0;display:flex;}.title-menu{padding:10px 15px;color:black;text-decoration:none;}.menu-item{display:block;padding:10px 15px;color:white;text-decoration:none;}.menu-item:hover{background-color:rgba(255,255,255,0.3);}.menu-inmenu{list-style-type:none;}.panel-menu,.panel-mega-menu ul{justify-content:space-around;padding:10px;}.menu{padding:10px 0;}.panel-mega-menu ul li{padding:5px 10px;color:white;}.sub-child{position:relative;left:5px;}</style>"
//   return html;
// };


// //generate panel show menu child
// const generateChildMenu = (data) => {
//   let html = ''; // Khởi tạo div cho menu

//   data.forEach(item => {
//     html += '<li class="menu">'
//     // Tạo thẻ cho mỗi mục
//     html += `<a class="title-menu" href="${item.href}">${item.name}</a>`

//     // // Kiểm tra nếu có children và gọi lại hàm generateChildMenu để tạo submenu
//     if (item.children && item.children.length > 0) {
//       html += '<div class="menu-inmenu">'
//       html += generatePanel(item.children); // Gọi đệ quy để tạo submenu
//       html += '</div>'
//     }
//     html += '</li>'; // Kết thúc div cho menu
//   });


//   return html; // Trả về HTML
// }

// //generate panel below nav
// export const generatePanel = (data) => {
//   let html = "";
//   html += '<div class="panel-mega-menu">';
//   data.forEach(item => {
//     html += '<ul>'
//     html += `<a class = 'sub-child' >${item.name}</a>`
//     html += '</ul>'
//     if (item.children && item.children.length > 0) {
//       generatePanel(item.children);
//     }
//   });
//   html += '</div>'
//   return html;
// }

// // Tạo menu mới
// var newMenu = generateHTML(MENU_DATA);

// originalMenu.insertAdjacentHTML('afterend', newMenu);

const nav = document.querySelector('.header__inline-menu');
const ulElements = nav.querySelectorAll('ul[role="list"]');

ulElements.forEach((ulElement) => {
  const liElements = ulElement.querySelectorAll('li');
  liElements.forEach((liElement) => {
    liElement.classList.add('d-menu');
    const aElement = liElement.querySelector('a');
    aElement.classList.add('d-menu__link');
    const subUlElement = liElement.querySelector('ul');
    if (subUlElement) {
      liElement.classList.add('has-sub-menu');
      const subLiElements = subUlElement.querySelectorAll('li');
      subLiElements.forEach((subLiElement) => {
        subLiElement.classList.add('d-sub-menu');
        const subAElement = subLiElement.querySelector('a');
        subAElement.classList.add('d-sub-menu__link');
      });
    }
  });
  const liElement = document.createElement('li');
  liElement.id = 'menu-main';
  ulElement.appendChild(liElement); // Thêm thẻ li vào ul
});

const Header_draw = document.querySelector('header-drawer');
const detail = Header_draw.querySelector('details');
const div_main = detail.querySelector('div[id="menu-drawer"]');
const div_container = div_main.querySelector('div[class="menu-drawer__navigation-container"]');
const nav_mobile = div_container.querySelector('nav[class="menu-drawer__navigation"]');
const ul_mobile = nav_mobile.querySelector('ul[role="list"]');

// Chọn tất cả các <li> trong ul_mobile
const li_mobile = ul_mobile.querySelectorAll('li');
li_mobile.forEach((liElement) => {
  liElement.classList.add('d-menu');

  // Thêm class vào thẻ <a> bên trong <li>
  const aElement = liElement.querySelector('a');
  if (aElement) {
    aElement.classList.add('d-menu__link');
  }

  // Kiểm tra nếu có <ul> con bên trong <li>
  const subUlElement_mobile = liElement.querySelector('ul');
  if (subUlElement_mobile) {
    liElement.classList.add('has-sub-menu');

    // Thêm class cho các <li> trong <ul> con
    const subli_mobile = subUlElement_mobile.querySelectorAll('li');
    subli_mobile.forEach((subLiElement) => {
      subLiElement.classList.add('d-sub-menu');

      // Thêm class vào thẻ <a> bên trong <li> con
      const subAElement = subLiElement.querySelector('a');
      if (subAElement) {
        subAElement.classList.add('d-sub-menu__link');
      }
    });
  }
});

// Tạo li sau li cuối cùng trong ul_mobile
const liElement_mobile = document.createElement('li');
liElement_mobile.id = 'menu-main-mobile' // Thêm class "menu" cho thẻ li
ul_mobile.appendChild(liElement_mobile); // Thêm thẻ li vào ul


var menuItems = [
  {
    "name": "Home",
    "class": ["home-item"],
    "url": "#",
    "submenu": []
  },
  {
    "name": "About",
    "class": ["about-item"],
    "url": "#",
    "submenu": []
  },
  {
    "name": "Services",
    "class": ["services-item"],
    "url": "#",
    "submenu": [
      {
        "name": "Web Design",
        "class": ["web-design-item"],
        "url": "#"
      },
      {
        "name": "Graphic Design",
        "class": ["graphic-design-item"],
        "url": "#"
      },
      {
        "name": "Social Media",
        "class": ["social-media-item"],
        "url": "#"
      }
    ]
  },
  {
    "name": "Contact",
    "class": ["contact-item"],
    "url": "#",
    "submenu": []
  }
];

// Tạo menu cho desktop
var mainMenu = "<ul>";
for (var m = 0; m < menuItems.length; m++) {
  var itemClasses = menuItems[m].class.join(' ');
  mainMenu += "<li class='" + itemClasses + "'>";
  mainMenu += "<a href='" + menuItems[m].url + "'>" + menuItems[m].name + "</a>";
  if (menuItems[m].submenu.length > 0) {
    mainMenu += "<ul>";
    for (var n = 0; n < menuItems[m].submenu.length; n++) {
      var subItemClasses = menuItems[m].submenu[n].class.join(' ');
      mainMenu += "<li class='" + subItemClasses + "'>";
      mainMenu += "<a href='" + menuItems[m].submenu[n].url + "'>" + menuItems[m].submenu[n].name + "</a>";
      mainMenu += "</li>";
    }
    mainMenu += "</ul>";
  }
  mainMenu += "</li>";
}
mainMenu += "</ul>";
document.getElementById("menu-main").innerHTML = mainMenu;

// Tạo menu cho mobile
var mobileMenu = "<ul>";
for (var m = 0; m < menuItems.length; m++) {
  var itemClasses = menuItems[m].class.join(' ');
  mobileMenu += "<li class='" + itemClasses + "'>";
  mobileMenu += "<a href='" + menuItems[m].url + "'>" + menuItems[m].name + "</a>";
  if (menuItems[m].submenu.length > 0) {
    mobileMenu += "<ul>";
    for (var n = 0; n < menuItems[m].submenu.length; n++) {
      var subItemClasses = menuItems[m].submenu[n].class.join(' ');
      mobileMenu += "<li class='" + subItemClasses + "'>";
      mobileMenu += "<a href='" + menuItems[m].submenu[n].url + "'>" + menuItems[m].submenu[n].name + "</a>";
      mobileMenu += "</li>";
    }
    mobileMenu += "</ul>";
  }
  mobileMenu += "</li>";
}
mobileMenu += "</ul>";
document.getElementById("menu-main-mobile").innerHTML = mobileMenu;

var head = document.getElementsByTagName('head')[0];
var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'https://hocdev.click/onextjs/test.css';
head.appendChild(link);