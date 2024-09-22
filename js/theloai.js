const nhapbl = document.getElementById("nhapbl");
const bl = document.getElementById("bl");
const thbl = document.querySelector('.nguoidung');
const use = document.getElementById('use');
let comments = [];
let userdn = JSON.parse(localStorage.getItem("userdn"));
function themcomment() {
  const commentElements = comments.map(comment => `<div class="comm">${comment}</div>`);
  thbl.innerHTML = commentElements.join('');
  if (use) {
    use.textContent = userdn.name;
    use.style.display="flex";
  }
}

bl.addEventListener("submit", function(e) {
  e.preventDefault();
  const commentText = nhapbl.value.trim();
  if (commentText !== '') {
    comments.push(commentText);
    nhapbl.value = '';
    themcomment();
  }
});