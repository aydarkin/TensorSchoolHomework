
/**
 * Показывает модальное окно
 * @param event
 */
const showModal = function (event){
    let popup = document.querySelector('.card_popup');
    let name = document.querySelector('.card_popup .card__title');
    let lastSession = document.querySelector('.card_popup .card__last-session');
    let birthDay = document.querySelector('.card_popup .card__birthday:not(.card__birthday_label)');
    let phone = document.querySelector('.card_popup .card__phone:not(.card__phone_label)');
    let friends = document.querySelector('.card_popup .card__friends');

    lastSession.textContent = 'Был(-а) в сети '.concat(new Date(this.dataset.lastSession).toLocaleString());
    name.textContent = this.dataset.name;
    birthDay.textContent = new Date(this.dataset.birth).toLocaleDateString();
    phone.textContent = this.dataset.phone;
    friends.textContent = 'Друзей '.concat(this.dataset.friendsCount);

    for(let elem of [lastSession, name, birthDay, phone, friends]){
        elem.setAttribute('title', elem.textContent);
    }

    let close = document.querySelector('.card_popup');
    close.addEventListener('click', () => {
        popup.classList.add('card_hide');
    });

    popup.style.top = event.pageY  + 'px';
    popup.style.left = Math.min(event.pageX, window.innerWidth - popup.clientWidth - 20) + 'px';
    popup.classList.remove('card_hide');
    event.stopPropagation();
};

/**
 * Закрывает модальное окно
 * @param event
 */
const closeModal = function (event) {
    let popup = document.querySelector('.card_popup');
    if(!popup.contains(event.target)){
        popup.classList.add('card_hide');
    }
};

/**
 * Показывает модальное окно при удержании курсора на элементе
 * @param event
 */
const hoverShowModal = function(event){
  let timer = setTimeout(showModal.bind(this, event), 2000);
  this.addEventListener('mouseleave', () => {
      window.clearTimeout(timer);
  })
};

let persons = document.querySelectorAll('.persons .card_person');
for(let person of persons){
    person.addEventListener('click', showModal);
    person.addEventListener('mouseenter', hoverShowModal)
}

document.body.addEventListener('click', closeModal);
