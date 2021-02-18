let btn = document.querySelector(
  '.btn-burger__menu',
);
let menu = document.querySelector(
  '.header__menu',
);
let span = document.querySelector(
  '.btn-burger__menu--span',
);
btn.addEventListener('click', function () {
  menu.classList.toggle('burger-menu_active');
  span.classList.toggle('active-burger');
});
const anchors = document.querySelectorAll(
  'a[href*="#"]',
);

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const blockID = anchor
      .getAttribute('href')
      .substr(1);

    document
      .getElementById(blockID)
      .scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
  });
}

let form1 = document.getElementById('form1');
let phpForm = document.getElementById(
  'submit_btn',
);
let formResult = document.getElementById(
  'form-res',
);
let submitted = false;
let input = document.querySelector(
  '.php__form--input',
);
const formSubmit = () => {
  let myPhone = document.querySelector(
    '.php__form--input',
  ).value;
  let check = /^((8|\+380)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(
    myPhone,
  );
  if (check) {
    submitted = true;
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
  }
};
phpForm.addEventListener('click', formSubmit);
