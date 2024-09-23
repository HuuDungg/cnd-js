document.querySelector('.header-wrapper').style.display = 'none'; const MENU_DATA = [{ "id": "c9a31b45-4863-4fd3-a837-baf08c5b80f5", "tag": "a", "content": "Home", "href": "/home", "children": [{ "id": "9239bdf1-ccf0-49c4-9c9d-bcaf30f77f89", "tag": "a", "content": "Home", "href": "https://onextdigital.com/", "children": [] }] }, { "id": "fe95224c-0f44-482e-98a7-b68e243089fc", "tag": "a", "content": "Home", "href": "/home", "children": [{ "id": "18bba4c6-e49a-4134-9150-bc1d0784f73c", "tag": "a", "content": "Home", "href": "https://onextdigital.com/", "children": [] }] }, { "id": "ba0990ea-14d9-4ba1-a52d-2fda6b95651f", "tag": "a", "content": "Home", "href": "/home", "children": [{ "id": "34ced7c6-61b9-49cd-bb16-31f971ef5e5a", "tag": "a", "content": "Home", "href": "https://onextdigital.com/", "children": [] }] }, { "id": "3a1a8df2-1d89-4709-85fa-04c6eac12336", "tag": "a", "content": "Home", "href": "/home", "children": [{ "id": "87c168d5-d30c-45cf-a208-955ef482805b", "tag": "a", "content": "Home", "href": "https://onextdigital.com/", "children": [] }] }, { "id": "b6c4f39b-39bb-4e96-a49e-d4978410d077", "tag": "a", "content": "Home", "href": "/home", "children": [{ "id": "f65c060c-2328-43b8-b7db-b45b9c26ecf9", "tag": "a", "content": "Home", "href": "https://onextdigital.com/", "children": [] }] }, { "id": "d3387837-581c-4e72-902f-e9bf818d7e22", "tag": "a", "content": "Home", "href": "/home", "children": [{ "id": "6cdff325-616c-45e0-aa4a-abe32ae583ec", "tag": "a", "content": "Home", "href": "https://onextdigital.com/", "children": [] }] }]; const generateHTML = (data) => { let html = "<nav><ul class='horizontal-menu' id='menu-main'>"; data.forEach(item => { html += `<li><${item.tag} id='${item.id}' href='${item.href}'>${item.content}</${item.tag}></li>`; if (item.children && item.children.length > 0) { html += `<ul class='submenu'>` + generateHTML(item.children) + `</ul>`; } }); html += '</ul></nav><style>.menu-container{width:100%;}.horizontal-menu{list-style:none;padding:0;display:flex;background-color:#333;}.horizontal-menu>li>a{padding:10px;color:white;text-decoration:none;background-color:#333;}.horizontal-menu>li>a:hover{background-color:#555;}.submenu{display:none;position:absolute;background-color:#333;}.submenu>li>a:hover{background-color:#555;}.horizontal-menu>li:hover>.submenu{display:block;}</style>'; return html; }; document.querySelector('.header-wrapper').insertAdjacentHTML('afterend', generateHTML(MENU_DATA));
