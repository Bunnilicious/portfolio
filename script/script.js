'use strict';

const cursor = document.querySelector('.cursor');
const cursorBg = document.querySelector('.cursor > .bg');
const openPopup = () => {
  // document.querySelector(".popup")
  document.querySelector('.wrapper').classList.add('wrapper-fixed');
  document.querySelector('.popup').classList.remove('popup-hidden');
};

// const resizeCases = () => {
//   const casesArr = document.querySelectorAll('.case');
//   console.log(casesArr);
//   casesArr.forEach((element) => {
//     console.log(element);
//     console.log(element.parentNode.width);
//     console.log(element.width);
//     element.style.height = element.naturalWidth;
//   });
// };
// resizeCases();

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
window.scrollTo(0, 0);

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

  // Third string
  const thirdString = document.querySelector('.string-3');
  const thirdStringInfo = document.querySelector('.string-3 > .info');
  thirdStringInfo.style.transform =
    'translateX(' + (-windowScrollY + thirdString.offsetTop) / 4 + 'px)';

  // Fourth string
  const fourthString = document.querySelector('.string-4');
  const fourthStringInfo = document.querySelector('.string-4 > .info');
  fourthStringInfo.style.transform =
    'translateX(' + (windowScrollY - fourthString.offsetTop) / 4 + 'px)';

  // First arm
  const figure1 = document.querySelector('.first > .img-container > .figure');
  const figure1layout = document.querySelector('.first > .img-container > .figure-overlay');
  figure1.style.transform =
    'rotate(' + (windowScrollY - figure1.offsetTop + 1500) / 50 + 'deg) translateY(-50%)';
  figure1layout.style.transform = figure1.style.transform;

  // Second arm
  const figure2 = document.querySelector('.second > .img-container > .triangle');
  const figure2layout = document.querySelector('.second > .img-container > .figure-overlay');
  figure2.style.transform = 'rotate(' + (windowScrollY - figure2.offsetTop - 1500) / 50 + 'deg) ';
  figure2layout.style.transform = figure2.style.transform;

  // Third arm
  const figure3 = document.querySelector('.third > .img-container > .figure');
  const figure3layout = document.querySelector('.third > .img-container > .figure-overlay');

  figure3.style.transform = 'rotate(' + (windowScrollY - figure3.offsetTop + 1500) / 50 + 'deg)';
  figure3layout.style.transform = figure3.style.transform;

  // to top

  const toTop = document.querySelector('.totop');
  if (scrollY < window.innerHeight) {
    toTop.classList.add('totop-inactive');
  } else {
    toTop.classList.remove('totop-inactive');
  }
});

window.addEventListener('click', (event) => {
  const sort1 = document.getElementById('sort1');
  const sort2 = document.getElementById('sort2');
  const sort3 = document.getElementById('sort3');
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
  if (clickTarget.parentNode.classList.contains('cases-wrapper-all')) {
    Swal.fire({
      imageUrl: `../img/case full/all/${clickTarget.dataset.value}.jpg`,
      imageAlt: 'Case image',
    });
  } else if (clickTarget.parentNode.classList.contains('cases-wrapper-landing')) {
    Swal.fire({
      imageUrl: `../img/case full/land/${clickTarget.dataset.value}.jpg`,
      imageAlt: 'Case image',
    });
  } else if (clickTarget.parentNode.classList.contains('cases-wrapper-commerce')) {
    Swal.fire({
      imageUrl: `../img/case full/land/${clickTarget.dataset.value}.jpg`,
      imageAlt: 'Case image',
    });
  } else if (clickTarget.parentNode.classList.contains('cases-wrapper-app')) {
    Swal.fire({
      imageUrl: `../img/case full/app/${clickTarget.dataset.value}.jpg`,
      imageAlt: 'Case image',
    });
  }

  if (clickTarget.classList.contains('privacy')) {
    Swal.fire(`
    
    <span> At DDesign, accessible from DDesign.space, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by DDesign and how we use it.

    If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
    
    This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in DDesign. This policy is not applicable to any information collected offline or via channels other than this website. Our Privacy Policy was created with the help of the Free Privacy Policy Generator.
    
    Consent
    By using our website, you hereby consent to our Privacy Policy and agree to its terms.
    
    Information we collect
    The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
    
    If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
    
    When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.
    
    How we use your information
    We use the information we collect in various ways, including to:
    
    Provide, operate, and maintain our website
    Improve, personalize, and expand our website
    Understand and analyze how you use our website
    Develop new products, services, features, and functionality
    Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes
    Send you emails
    Find and prevent fraud
    Log Files
    DDesign follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
    
    Advertising Partners Privacy Policies
    You may consult this list to find the Privacy Policy for each of the advertising partners of DDesign.
    
    Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on DDesign, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
    
    Note that DDesign has no access to or control over these cookies that are used by third-party advertisers.
    
    Third Party Privacy Policies
    DDesign's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
    
    You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.
    
    CCPA Privacy Rights (Do Not Sell My Personal Information)
    Under the CCPA, among other rights, California consumers have the right to:
    
    Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.
    
    Request that a business delete any personal data about the consumer that a business has collected.
    
    Request that a business that sells a consumer's personal data, not sell the consumer's personal data.
    
    If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
    
    GDPR Data Protection Rights
    We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
    
    The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.
    
    The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.
    
    The right to erasure – You have the right to request that we erase your personal data, under certain conditions.
    
    The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.
    
    The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.
    
    The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.
    
    If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
    
    Children's Information
    Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
    
    DDesign does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.  </span>
      `);
  }

  if (clickTarget.classList.contains('terms')) {
    Swal.fire(
      `
      <span>
      Introduction
        These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, DDesign accessible at DDesign.space.

        These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions. These Terms and Conditions have been generated with the help of the Terms And Conditiions Sample Generator.

        Minors or people below 18 years old are not allowed to use this Website.

        Intellectual Property Rights
        Other than the content you own, under these Terms, DDesign and/or its licensors own all the intellectual property rights and materials contained in this Website.

        You are granted limited license only for purposes of viewing the material contained on this Website.

        Restrictions
        You are specifically restricted from all of the following:

        publishing any Website material in any other media;
        selling, sublicensing and/or otherwise commercializing any Website material;
        publicly performing and/or showing any Website material;
        using this Website in any way that is or may be damaging to this Website;
        using this Website in any way that impacts user access to this Website;
        using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;
        engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website;
        using this Website to engage in any advertising or marketing.
        Certain areas of this Website are restricted from being access by you and DDesign may further restrict access by you to any areas of this Website, at any time, in absolute discretion. Any user ID and password you may have for this Website are confidential and you must maintain confidentiality as well.

        Your Content
        In these Website Standard Terms and Conditions, "Your Content" shall mean any audio, video text, images or other material you choose to display on this Website. By displaying Your Content, you grant DDesign a non-exclusive, worldwide irrevocable, sub licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.

        Your Content must be your own and must not be invading any third-party’s rights. DDesign reserves the right to remove any of Your Content from this Website at any time without notice.

        Your Privacy
        Please read Privacy Policy.

        No warranties
        This Website is provided "as is," with all faults, and DDesign express no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.

        Limitation of liability
        In no event shall DDesign, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract.  DDesign, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.

        Indemnification
        You hereby indemnify to the fullest extent DDesign from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms.

        Severability
        If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.

        Variation of Terms
        DDesign is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.

        Assignment
        The DDesign is allowed to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.

        Entire Agreement
        These Terms constitute the entire agreement between DDesign and you in relation to your use of this Website, and supersede all prior agreements and understandings.

        Governing Law & Jurisdiction
        These Terms will be governed by and interpreted in accordance with the laws of the State of ua, and you submit to the non-exclusive jurisdiction of the state and federal courts located in ua for the resolution of any disputes.
      </ span>
      `,
    );
  }

  // start sort

  // const removeActiveSortClass = () => {
  //   sort1.classList.remove('sort-item-active');
  //   sort2.classList.remove('sort-item-active');
  //   sort3.classList.remove('sort-item-active');
  // };
  // const displayCases = (category = 0) => {
  //   const addDisplayNoneAll = () => {
  //     casesAll.classList.add('display-none');
  //     casesLanding.classList.add('display-none');
  //     casesCommerce.classList.add('display-none');
  //     casesApp.classList.add('display-none');
  //   };
  //   const removeDisplayNone = (target) => {
  //     target.classList.remove('display-none');
  //   };

  //   const casesAll = document.querySelector('.cases-wrapper-all');
  //   const casesLanding = document.querySelector('.cases-wrapper-landing');
  //   const casesCommerce = document.querySelector('.cases-wrapper-commerce');
  //   const casesApp = document.querySelector('.cases-wrapper-app');
  //   if (category == '0') {
  //     addDisplayNoneAll();
  //     removeDisplayNone(casesAll);
  //   } else if (category == 'land') {
  //     addDisplayNoneAll();
  //     removeDisplayNone(casesLanding);
  //   } else if (category == 'comm') {
  //     addDisplayNoneAll();
  //     removeDisplayNone(casesCommerce);
  //   } else if (category == 'app') {
  //     addDisplayNoneAll();
  //     removeDisplayNone(casesApp);
  //   }
  // };

  // if (clickTarget.classList.contains('land')) {
  //   removeActiveSortClass();
  //   displayCases('land');
  //   sort1.classList.add('sort-item-active');
  // } else if (clickTarget.classList.contains('comm')) {
  //   removeActiveSortClass();
  //   displayCases('comm');
  //   sort2.classList.add('sort-item-active');
  // } else if (clickTarget.classList.contains('app')) {
  //   removeActiveSortClass();
  //   displayCases('app');
  //   sort3.classList.add('sort-item-active');
  // }

  // if (clickTarget.classList.contains('sort-item-active')) {
  //   clickTarget.classList.remove('sort-item-active');
  //   displayCases();
  // } else if (clickTarget.parentNode.classList.contains('sort-item-active')) {
  //   clickTarget.parentNode.classList.remove('sort-item-active');
  //   displayCases();
  // } else if (
  //   clickTarget.classList.contains('sort-item') &&
  //   !clickTarget.classList.contains('sort-item-active')
  // ) {
  //   removeActiveSortClass();
  //   clickTarget.classList.add('sort-item-active');
  //   displayCases(clickTarget.dataset.sort);
  // } else if (
  //   clickTarget.parentNode.classList.contains('sort-item') &&
  //   !clickTarget.parentNode.classList.contains('sort-item-active')
  // ) {
  //   removeActiveSortClass();
  //   clickTarget.parentNode.classList.add('sort-item-active');
  //   displayCases(clickTarget.parentNode.dataset.sort);
  // }

  // end sort
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
  } else if (hoverTarget.classList.contains('stroke')) {
    cursorAddClass('cursor-hover-stroke');
  } else if (hoverTarget.classList.contains('_nomix')) {
    cursorAddClass('cursor-nomix');
  } else {
    cursorRemoveClass('cursor-hover-link');
    cursorRemoveClass('cursor-hover-stroke');
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

// ========= scroll =========

var scrollToCategories = new SmoothScroll('a[href*="#cases"]', {
  speed: 1500,
  speedAsDuration: true,
});
var scrollToTop = new SmoothScroll('a[href*="#body"]', {
  speed: 2000,
  speedAsDuration: true,
});

// ========= form send =========

// const form = document.getElementById('form');
// form.addEventListener('submit', formSend);
const user_name = document.querySelector('input[name="user_name"]');

const phoneHandler = (e) => {
  const value = e.value;
  e.value = value.replace(/\D/g, '');
};

const form = document.querySelector('#form');
form.addEventListener('submit', formSend);

async function formSend(e) {
  const button = document.querySelector('#form > .button');
  const formData = new FormData(form);
  e.preventDefault();
  formValidate(form);
  // form.action = '<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>';
  let error = 0;
  function formValidate(form) {
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
  // button.addEventListener('click', () => {
  //   console.log(error);
  //   form.submit();
  // });
  // console.log(error);
  if (error == 0) {
    const user_name = document.querySelector('input[name="user_name"]').value;
    console.log(user_name);
    const user_phone = document.querySelector('input[name="user_phone"]').value;
    console.log(user_phone);
    const user_email = document.querySelector('input[name="user_email"]').value;
    console.log(user_email);
    const user_text = document.querySelector('textarea[name="user_text"]').value;
    console.log(user_text);
    // const user_name = document.querySelector('input[name="user_name"]').value;
    // console.log(user_name);
    // const user_phone = document.querySelector('input[name="user_phone"]').value;
    // console.log(user_phone);
    // const user_email = document.querySelector('input[name="user_email"]').value;
    // console.log(user_email);
    // const user_text = document.querySelector('textarea[name="user_text"]').value;
    // console.log(user_text);

    // Создаем экземпляр класса XMLHttpRequest
    document.cookie = `user_name=${user_name}`;
    document.cookie = `user_phone=${user_phone}`;
    document.cookie = `user_email=${user_email}`;
    document.cookie = `user_text=${user_text}`;
    const request = new XMLHttpRequest();

    // Указываем путь до файла на сервере, который будет обрабатывать наш запрос
    const url = './telegram.php';

    let http = new XMLHttpRequest();

    http.open('POST', url, true);

    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    http.onreadystatechange = function () {
      if (http.readyState == 4 && http.status == 200) {
        console.log(http.responseText);
      }
    };
    http.send(formData);
    // http.send(JSON.stringify(formData));

    // console.log(params);
    // console.log(JSON.stringify(params));
    // const paramsJSON = JSON.stringify(params);
    // /* Указываем что соединение	у нас будет POST, говорим что путь к файлу в переменной url, и что запрос у нас
    // асинхронный, по умолчанию так и есть не стоит его указывать, еще есть 4-й параметр пароль авторизации, но этот
    // параметр тоже необязателен.*/
    // request.open('POST', url, true);

    // //В заголовке говорим что тип передаваемых данных закодирован.
    // // request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    // request.addEventListener('readystatechange', () => {
    //   if (request.readyState === 4 && request.status === 200) {
    //     console.log(request.responseText);
    //   }
    // });
    // request.send(paramsJSON);

    // request.send(params);
    // request.send(params);
    //	Вот здесь мы и пере
    // form.method = 'POST';
    // document.body.append(form);
    // button.preventDefault();
    // form.submit();
    // return false;
    // let response = await fetch('telegram.php', {
    //   method: 'POST',
    //   body: formData,
    // });
    // if (response.ok) {
    //   let result = await response.json();
    //   alert(result.message);
    // } else {
    //   alert('fail');
    // }
  }
  function addErrorClass(input) {
    input.classList.add('_error');
  }
  function removeErrorClass(input) {
    input.classList.remove('_error');
  }
}

// ========= circle text =========

// const circularText = (txt, radius, id) => {
//   async function addActiveClass(letterNumber, time) {
//     const letter = document.querySelector('[data-letter="' + letterNumber + '"]');
//     // console.log(letter);
//     await setTimeout(() => {
//       letter.classList.add('letter-active');
//     }, time);
//   }

//   txt = txt.split('');
//   let object = document.getElementById(id);

//   let deg = 360 / txt.length;
//   let origin = 0;
//   let letterCounter = 0;
//   txt.forEach((letter) => {
//     letter = `<span data-letter=${letterCounter} class="letter" style='animation-delay:  ${
//       letterCounter / 10
//     }s;height:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%;'>${letter}</span>`;
//     object.innerHTML += letter;
//     origin += deg;
//     addActiveClass(letterCounter, 999);
//     letterCounter++;
//   });
// };

// circularText('Design Design Design Design Design Design ', 240, 'letter-wrapper');

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
