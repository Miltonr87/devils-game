import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

const open_menu = document.querySelector('.open-menu');
const menu = document.querySelector('.menu');
const open_icon = document.querySelector('.open-menu .open');
const close_icon = document.querySelector('.open-menu .close');

open_menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    open_icon.classList.toggle('active');
    close_icon.classList.toggle('active');
})

const links = document.querySelectorAll('.menu ul a');
links.forEach(link => {
    link.addEventListener('click', () => {
        clearActives();
        link.classList.add('active');

        setTimeout(() => {
            menu.classList.remove('active');
            open_icon.classList.remove('active');
            close_icon.classList.remove('active');
        }, 500);
    });
})

function clearActives() {
    for (let i =0; i < links.length; i++) {
        const elem = links[i]
        elem.classList.remove('active');
    }
}