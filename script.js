const messages = [
  "HI HI",
  "เอ๊ะ นี่คืออะไรน้าาา",
  "ไม่ต้องตกใจ นี่ไม่ใช่ไวรัสสส",
  "ลองทายสิ้",
  "....",
  "ฮั่นแน่ ทายอยู่อ่ะสิ",
  "ยิ้มอ๊ะป๊าววว",
  "ไปดูดีกว่าเนาะะ"
  
];

const textElement = document.getElementById("text");

let index = 0;

function showMessage() {
  textElement.style.opacity = 0;

  setTimeout(() => {
    textElement.textContent = messages[index];
    textElement.style.opacity = 1;

    index++;

    if (index < messages.length) {
      setTimeout(showMessage, 2000);
    } else {
      setTimeout(() => {
        document.body.classList.add("page-exit");

        setTimeout(() => {
          window.location.href = "page.html";
        }, 1000);

      }, 2000);
    }

  }, 1000);
}

showMessage();
