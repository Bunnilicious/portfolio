'use strict'


const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
  cursor.setAttribute("data-fromTop", cursor.offsetTop - scrollY);
  // console.log(e)
});
window.addEventListener("scroll", () => {
  const fromTop = cursor.getAttribute("data-fromTop");
  cursor.style.top = scrollY + parseInt(fromTop) + "px";
  console.log(scrollY);
});
window.addEventListener("click", () => {

  async function sleep(fn, timeout) {
    await setTimeout(() => {
      fn();
    }, timeout);
  }

  const deleteClass = () => {
  cursor.classList.remove("click");
}
  if (cursor.classList.contains("click")) {
    cursor.classList.remove("click");
    void cursor.offsetWidth; // trigger a DOM reflow
    cursor.classList.add("click");
    sleep(deleteClass, 1200)
  } else {
    cursor.classList.add("click");
    sleep(deleteClass, 1200)
    // deleteClass()
  }
});


window.addEventListener('mouseover', (event) => {

  if (event.target.classList.contains('link')) {
    cursor.classList.add('cursor-hover-link')
  } else {
    cursor.classList.remove('cursor-hover-link')
  }

  if (event.target.classList.contains('star')) {
    cursor.classList.add('cursor-hover-star')
  } else {
    cursor.classList.remove('cursor-hover-star')
  }

  if (event.target.classList.contains('user-friendly')) {
    cursor.classList.add('cursor-hover-user-friendly')
  } else {
    cursor.classList.remove('cursor-hover-user-friendly')

  }

})


// ========= circle text =========


const circularText = (txt, radius, id) => {
  txt = txt.split('');
  let object = document.getElementById(id)

  let deg =  360 / txt.length
  let origin = 0 

  txt.forEach((letter) => {
    letter = `<span class="letter" style='height:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%;'>${letter}</span>`;
    object.innerHTML += letter;
    origin += deg;
  });
}

circularText("Design Design Design Design Design Design ", 240, 'letter-wrapper');

// const circleText = new CircleType(document.getElementsByClassName('plusses'));
// console.log(circleText);