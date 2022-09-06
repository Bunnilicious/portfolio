'use strict'


const cursor = document.querySelector(".cursor");

async function sleep(fn, timeout) {
  await setTimeout(() => {
    fn();
  }, timeout);
}
const cursorRemoveClass = (className) => {
  cursor.classList.remove(className)
}
const cursorAddClass = (className) => {
  cursor.classList.add(className)
}

window.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
  cursor.setAttribute("data-fromTop", cursor.offsetTop - scrollY);
  // console.log(e)
});
window.addEventListener("scroll", () => {
  const fromTop = cursor.getAttribute("data-fromTop");
  cursor.style.top = scrollY + parseInt(fromTop) + "px";
});

window.addEventListener("click", (event) => {

  const clickTarget =  event.target

  const deleteClass = () => {
  cursor.classList.remove("click");
}
  if (!cursor.classList.contains("click") 
  && !cursor.classList.contains("cursor-hover-fast")
  && !cursor.classList.contains("cursor-hover-unique")
  && !cursor.classList.contains("cursor-hover-user-friendly")
  && !cursor.classList.contains("cursor-hover-inspiring")
  && !cursor.classList.contains("cursor-hover-response")
  && !cursor.classList.contains("cursor-hover-beautiful")
  ) {
    void cursor.offsetWidth; // trigger a DOM reflow
    cursor.classList.add("click");
    sleep(deleteClass, 1200)
  }

  if (clickTarget.classList.contains('case')) {
    alert('123')
  }
});

window.addEventListener('mouseover', (event) =>  {

  const hoverTarget =  event.target
  console.log(event.target.classList);


  if (hoverTarget.classList.contains('link')) {
    cursorAddClass('cursor-hover-link')
    cursorAddClass('cursor-hover')
  } else if (hoverTarget.classList.contains('unique')) {
    cursorAddClass('cursor-hover-unique')
    cursorAddClass('cursor-hover')
  } else if (hoverTarget.classList.contains('user-friendly')) {
    cursorAddClass('cursor-hover-user-friendly')
    cursorAddClass('cursor-hover')
  } else if (hoverTarget.classList.contains('inspiring')) {
    cursorAddClass('cursor-hover-inspiring')
    cursorAddClass('cursor-hover')
  } else if (hoverTarget.classList.contains('response')) {
    cursorAddClass('cursor-hover-response')
    cursorAddClass('cursor-hover')
  } else if (hoverTarget.classList.contains('beautiful')) {
    cursorAddClass('cursor-hover-beautiful')
    cursorAddClass('cursor-hover')
  } else if (hoverTarget.classList.contains('fast')) {
    cursorAddClass('cursor-hover-fast')
    cursorAddClass('cursor-hover')
  } else {
    cursorRemoveClass('cursor-hover-link')
    cursorRemoveClass('cursor-hover-unique')
    cursorRemoveClass('cursor-hover-user-friendly')
    cursorRemoveClass('cursor-hover-beautiful')
    cursorRemoveClass('cursor-hover-fast')
    cursorRemoveClass('cursor-hover-response')
    cursorRemoveClass('cursor-hover-inspiring')
    cursorRemoveClass('cursor-hover')
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