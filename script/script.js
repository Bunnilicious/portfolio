'use strict';

const cursor = document.querySelector('.cursor');
const openPopup = () => {
  console.log(document.querySelector('.wrapper'));

  // document.querySelector(".popup")
  document.querySelector('.wrapper').classList.add('wrapper-fixed');
  document.querySelector('.popup').classList.remove('popup-hidden');
};

async function sleep(fn, timeout) {
  await setTimeout(() => {
    fn();
  }, timeout);
}
const cursorRemoveClass = (className) => {
  cursor.classList.remove(className);
};
const cursorAddClass = (className) => {
  cursor.classList.add(className);
};

window.addEventListener('mousemove', (e) => {
  cursor.style.left = e.pageX + 'px';
  cursor.style.top = e.pageY + 'px';
  cursor.setAttribute('data-fromTop', cursor.offsetTop - scrollY);
  // console.log(e)
});
window.addEventListener('scroll', () => {
  // Adding coordinates for cursor

  const fromTop = cursor.getAttribute('data-fromTop');
  cursor.style.top = scrollY + parseInt(fromTop) + 'px';

  // Paralax effect for strings

  const windowScrollY = window.scrollY;

  // First string
  const firstString = document.querySelector('.string-1');
  const firstStringInfo = document.querySelector('.string-1 > .info');
  firstStringInfo.style.transform =
    'translateX(' + (-windowScrollY - firstString.offsetTop) / 4 + 'px)';

  // Second string
  const secondString = document.querySelector('.string-2');
  const secondStringInfo = document.querySelector('.string-2 > .info');
  secondStringInfo.style.transform =
    'translateX(' + (windowScrollY - secondString.offsetTop) / 4 + 'px)';
});

window.addEventListener('click', (event) => {
  const clickTarget = event.target;

  const deleteClass = () => {
    cursor.classList.remove('click');
  };

  if (
    !cursor.classList.contains('click') &&
    !cursor.classList.contains('cursor-hover-fast') &&
    !cursor.classList.contains('cursor-hover-unique') &&
    !cursor.classList.contains('cursor-hover-user-friendly') &&
    !cursor.classList.contains('cursor-hover-inspiring') &&
    !cursor.classList.contains('cursor-hover-response') &&
    !cursor.classList.contains('cursor-hover-beautiful') &&
    !cursor.classList.contains('cursor-hover-edit')
  ) {
    void cursor.offsetWidth; // trigger a DOM reflow
    cursor.classList.add('click');
    sleep(deleteClass, 1200);
  }

  if (clickTarget.classList.contains('case')) {
    console.log(clickTarget);

    console.log(clickTarget.dataset.value);
    Swal.fire({
      imageUrl: `../img/case full/${clickTarget.dataset.value}.jpg`,
      imageAlt: 'A tall image',
    });
  }
});

window.addEventListener('mouseover', (event) => {
  const hoverTarget = event.target;
  // console.log(event.target.classList);

  if (hoverTarget.classList.contains('_link')) {
    cursorAddClass('cursor-hover-link');
    cursorAddClass('cursor-hover');
  } else if (hoverTarget.classList.contains('_unique')) {
    cursorAddClass('cursor-hover-unique');
    cursorAddClass('cursor-hover');
  } else if (hoverTarget.classList.contains('_user-friendly')) {
    cursorAddClass('cursor-hover-user-friendly');
    cursorAddClass('cursor-hover');
  } else if (hoverTarget.classList.contains('_inspiring')) {
    cursorAddClass('cursor-hover-inspiring');
    cursorAddClass('cursor-hover');
  } else if (hoverTarget.classList.contains('_response')) {
    cursorAddClass('cursor-hover-response');
    cursorAddClass('cursor-hover');
  } else if (hoverTarget.classList.contains('_beautiful')) {
    cursorAddClass('cursor-hover-beautiful');
    cursorAddClass('cursor-hover');
  } else if (hoverTarget.classList.contains('_fast')) {
    cursorAddClass('cursor-hover-fast');
    cursorAddClass('cursor-hover');
  } else if (hoverTarget.classList.contains('_edit')) {
    cursorAddClass('cursor-hover-edit');
    cursorAddClass('cursor-hover');
  } else if (hoverTarget.classList.contains('_mail')) {
    cursorAddClass('cursor-hover-mail');
    cursorAddClass('cursor-hover');
  } else if (hoverTarget.classList.contains('_pointer')) {
    cursorAddClass('cursor-hover-pointer');
    cursorAddClass('cursor-hover');
  } else if (hoverTarget.classList.contains('_nomix')) {
    cursorAddClass('cursor-nomix');
  } else {
    cursorRemoveClass('cursor-hover-link');
    cursorRemoveClass('cursor-hover-unique');
    cursorRemoveClass('cursor-hover-user-friendly');
    cursorRemoveClass('cursor-hover-beautiful');
    cursorRemoveClass('cursor-hover-fast');
    cursorRemoveClass('cursor-hover-response');
    cursorRemoveClass('cursor-hover-inspiring');
    cursorRemoveClass('cursor-hover-edit');
    cursorRemoveClass('cursor-hover-mail');
    cursorRemoveClass('cursor-hover-pointer');
    cursorRemoveClass('cursor-hover');
    cursorRemoveClass('cursor-nomix');
  }
});

// ========= form send =========

const form = document.getElementById('form');
form.addEventListener('submit', formSend);

const phoneHandler = (e) => {
  const value = e.value;
  e.value = value.replace(/\D/g, '');
};

async function formSend(e) {
  e.preventDefault();
  formValidate(form);

  let formData = new FormData(form);

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('._req');

    for (let index = 0; index < formReq.length; index++) {
      const element = formReq[index];
      removeErrorClass(element);
      // console.log(element.placeholder);

      element.addEventListener('click', () => {
        element.classList.remove('_error');
        error = 0;
      });

      if (
        (element.placeholder == 'E-mail' &&
          (element.value.indexOf('@') == -1 ||
            element.value.indexOf('.') == -1 ||
            element.value.length < 5)) ||
        element.value.length == ''
      ) {
        addErrorClass(element);
        error++;
      }
      if (element.placeholder == 'Phone' && element.value.length <= 7) {
        addErrorClass(element);
        error++;
      }
    }
  }
  if (error == 0) {
    let response = await fetch('sendmail.php', {
      method: 'POST',
      body: formData,
    });
    if (response.ok) {
      let result = await response.json();
      alert(result.message);
    } else {
      alert('fail');
    }
  }
  function addErrorClass(input) {
    input.classList.add('_error');
  }
  function removeErrorClass(input) {
    input.classList.remove('_error');
  }
}

// ========= circle text =========

const circularText = (txt, radius, id) => {
  txt = txt.split('');
  let object = document.getElementById(id);

  let deg = 360 / txt.length;
  let origin = 0;

  txt.forEach((letter) => {
    letter = `<span class="letter" style='height:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%;'>${letter}</span>`;
    object.innerHTML += letter;
    origin += deg;
  });
};

circularText('Design Design Design Design Design Design ', 240, 'letter-wrapper');

// ========= scroll =========

// var scroll = new SmoothScroll('.wrapper', {
// 	speed: 50000,
// 	speedAsDuration: true
// });

// //    test

// (function () {

//   const link = document.querySelectorAll('.hover-this');
//   const cursor = document.querySelector('.cursor');

//   const animateit = function (e) {
//         const span = this.querySelector('span');
//         const { offsetX: x, offsetY: y } = e,
//         { offsetWidth: width, offsetHeight: height } = this,

//         move = 25,
//         xMove = x / width * (move * 2) - move,
//         yMove = y / height * (move * 2) - move;

//         span.style.transform = `translate(${xMove}px, ${yMove}px)`;

//         if (e.type === 'mouseleave') span.style.transform = '';
//   };

//   const editCursor = e => {
//         const { clientX: x, clientY: y } = e;
//         cursor.style.left = x + 'px';
//         cursor.style.top = y + 'px';
//   };

//   link.forEach(b => b.addEventListener('mousemove', animateit));
//   link.forEach(b => b.addEventListener('mouseleave', animateit));
//   window.addEventListener('mousemove', editCursor);

// })();

// let Scrollbar = window.Scrollbar;

// Scrollbar.init(document.querySelector('.wrapper'), options);

// Swal.fire({
//   imageUrl: '../img/case full/case_funcube.jpg',
//   imageAlt: 'A tall image'
// })

// const circleText = new CircleType(document.getElementsByClassName('plusses'));
// console.log(circleText);
