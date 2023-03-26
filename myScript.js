
var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openFullImg(pic){
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
}

function closeFullImg(){
    fullImgBox.style.display = "none";
}


// const messageTextarea = document.getElementById('Message');
// const emojiContainer = document.getElementById('emoji-container');
// const emojis = emojiContainer.querySelectorAll('.emoji');

// emojis.forEach((emoji) => {
//   emoji.addEventListener('click', () => {
//     messageTextarea.value += emoji.innerHTML;
//   });
// });
