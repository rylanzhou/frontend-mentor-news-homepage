import mobile from 'is-mobile';
import './style.scss';

let menuUl: HTMLElement | null;

window.onload = () => {
  if (mobile()) {
    document.querySelector('#app')?.classList.add('mobile');

    document.querySelector('.menu')?.addEventListener('click', openMenu);
    document.querySelector('.close')?.addEventListener('click', closeMenu);

    menuUl = document.querySelector<HTMLElement>('nav ul');
    if (menuUl) {
      menuUl.style.display = 'none';
    }

    document.documentElement.style.setProperty('--height', window.innerHeight + 'px');
  }
};

window.onresize = () => {
  if (mobile()) {
    document.documentElement.style.setProperty('--height', window.innerHeight + 'px');
  }
};

function openMenu() {
  document.querySelector('#mask')?.classList.add('active');
  if (menuUl) {
    menuUl.style.display = 'block';
    setTimeout(() => (menuUl ? menuUl.classList.add('active') : ''), 0);
  }
}

function closeMenu() {
  document.querySelector('#mask')?.classList.remove('active');
  if (menuUl) {
    menuUl.classList.remove('active');
    setTimeout(() => (menuUl ? (menuUl.style.display = 'none') : ''), 300);
  }
}
