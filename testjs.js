alert("this is a simple js file")
// Ẩn nội dung menu cũ
var originalMenu = document.querySelector('.header-wrapper');
originalMenu.style.display = 'none';

// Tạo menu mới
var newMenu = `
  <nav class="new-menu">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
`;

// Chèn menu mới vào trong .header-wrapper
originalMenu.insertAdjacentHTML('afterend', newMenu);

