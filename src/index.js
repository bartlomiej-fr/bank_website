'use strict';

//Files
import './assets/icons.svg';
import './assets/icon.png';
import './assets/logo.png';
import './assets/hero.png';
import './assets/online_payment.jpg';
import './assets/account_app.jpg';
import './assets/contactless.jpg';
import './assets/user-1.jpg';
import './assets/user-2.jpg';
import './assets/user-3.jpg';
import './assets/icon_white.png';

//Styles
import './styles/main.scss';
import './styles/header.scss';
import './styles/features.scss';
import './styles/operations.scss';
import './styles/slider.scss';
import './styles/signup.scss';
import './styles/footer.scss';
import './styles/modal.scss';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnsOpenModal.forEach((btn) => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

const btnScrollTo = document.querySelector('.btn-scroll-to');
const firstSection = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function () {
    // const s1coords = firstSection.getBoundingClientRect();
    // window.scrollTo({
    //     left: s1coords.left + window.pageXOffset,
    //     top: s1coords.top + window.pageYOffset,
    //     behavior: 'smooth',
    // });

    firstSection.scrollIntoView({ behavior: 'smooth' });
});
