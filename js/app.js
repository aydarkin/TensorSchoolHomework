/**
 * Человек
 */
class Person {
    /**
     *
     * @param {string} id - идентификатор
     * @param {string} name - имя студента
     * @param {string} photo - адрес фотографии
     * @param {string} birthDay - дата рождения (YYYY-MM-DD)
     * @param {string} lastSession - время последнего посещения (YYYY-MM-DDTHH:mm:ss)
     * @param {string} phone - основной телефон (международный формат, 7хххххххххх)
     * @param {Object} friends - информация о друзьях (кол-во, несколько примеров)
     */
    constructor({id, name, photo, birthDay, lastSession, phone, friends}) {
        this.id = id;
        this.name = name;
        this.photo = photo;
        this.birthDay = birthDay ? new Date(birthDay): undefined;
        this.lastSession = lastSession ? new Date(lastSession): undefined;
        this.phone = phone;

        this.friends = friends;
        if(!friends.data){
            this.friends.data = this.getFriendsData(4);
        }
    }
    /**
     * Количество друзей всего
     * @returns {number}
     */
    get friendsCount(){
        return this.friends.count;
    }

    /**
     * Получение информации о друзьях
     * @param {number} count - количество друзей, которые нужно получить
     * @returns {[]}
     */
    getFriendsData(count){
        //типо загрузка с API
        return [
            {id: 2, photo: "img/ava2.jpg", name: "Петрова Екатерина"},
            {id: 3, photo: "img/ava3.jpg", name: "Столовая Ложка"},
            {id: 4, photo: "img/ava4.jpg", name: "Иванов Иван"},
            {id: 5, photo: "img/ava5.jpg", name: "Иванов Иоганн"},
        ];
    }
}

/**
 * Студент
 */
class Student extends Person{
    /**
     *
     * @param {string} id - идентификатор
     * @param {string} name - имя студента
     * @param {string} photo - адрес фотографии
     * @param {string} birthDay - дата рождения (YYYY-MM-DD)
     * @param {string} lastSession - время последнего посещения (YYYY-MM-DDTHH:mm:ss)
     * @param {string} phone - основной телефон (международный формат, 7хххххххххх)
     * @param {Object} friends - информация о друзьях (кол-во, несколько примеров)
     * @param {string} university - название учебного заведения
     * @param {string} course - номер курса
     */
    constructor({id, name, photo, birthDay, lastSession, phone
                    , friends, university, course}) {
        super({id, name, photo, birthDay, lastSession, phone, friends});
        this.university = university;
        this.course = course;
    }

    /**
     * Рендер карточки
     * @return {string}
     */
    createCardPerson(){
        return renderCardPerson(this);
    }

    /**
     * Рендер всплывающего окна
     * @return {string}
     */
    createPopup(){
        return renderPopupStudent(this);
    }
}

/**
 * Модель данных, для работы со студентами
 * @type {{ObjectsToStudents(*): [], students: [], getData(): Object[]}}
 */
const studentModel = {
    /**
     * Возвращает полученные данные с сервера
     * @return {Object[]} objects
     * */
    getData(){
        //Делаем вид, что грузим с API
        return [
            {
                id: "13",
                name: "Маша Иванова",
                birthDay: "1997-06-22",
                phone: "79372156891",
                lastSession: "2020-03-30T21:24:00",
                photo: "img/ava1.jpg",
                university: "УГАТУ",
                course: "2",
                friends: {
                    count: "45",
                    data: []
                }
            },
            {
                id: "3",
                name: "Миша Петров",
                birthDay: "1999-12-17",
                phone: "79242143891",
                lastSession: "2020-03-30T21:22:00",
                photo: "img/ava2.jpg",
                university: "СурГУ",
                course: "3",
                friends: {
                    count: "27",
                    data: []
                }
            },
            {
                id: "7",
                name: "Марат Сидоров",
                birthDay: "1998-12-17",
                phone: "79992143891",
                lastSession: "2020-03-30T21:21:00",
                photo: "img/ava3.jpg",
                university: "БГУ",
                course: "4",
                friends: {
                    count: "16",
                    data: []
                }
            },
            {
                id: "4",
                name: "Иван Иванов",
                birthDay: "1998-12-17",
                phone: "79372143891",
                lastSession: "2020-03-31T21:24:00",
                photo: "img/ava4.jpg",
                university: "ТГЮК",
                course: "4",
                friends: {
                    count: "55",
                    data: []
                }
            },
            {
                id: "2",
                name: "Оксана Олеговна",
                birthDay: "1998-12-17",
                phone: "79379993891",
                lastSession: "2020-03-31T21:22:00",
                photo: "img/ava5.jpg",
                university: "УГАТУ",
                course: "4",
                friends: {
                    count: "78",
                    data: []
                }
            },
            {
                id: "23",
                name: "Стас Михайлов",
                birthDay: "1995-02-09",
                phone: "79172143897",
                lastSession: "2020-03-30T21:14:00",
                photo: "img/ava6.jpg",
                university: "БГПУ",
                course: "3",
                friends: {
                    count: "140",
                    data: []
                }
            },
            {
                id: "132",
                name: "Николай Васькин",
                birthDay: "",
                phone: "79372143891",
                lastSession: "2020-03-29T21:12:00",
                photo: "img/ava7.jpg",
                university: "БГУ",
                course: "4",
                friends: {
                    count: "439",
                    data: []
                }
            },
            {
                id: "113",
                name: "Олег Макет",
                birthDay: "1996-11-07",
                phone: "",
                lastSession: "2020-03-28T21:24:00",
                photo: "img/ava8.jpg",
                university: "ВЗФИ",
                course: "4",
                friends: {
                    count: "600",
                    data: []
                }
            },
        ];
    },

    ObjectsToStudents(objects){
        const students = [];
        for(let obj of objects){
            students.push(new Student(obj));
        }
        return students;
    },
    students : [],
};

/**
 * Формирует строку классов (например "класс класс_мод1 класс_мод2")
 * @param {string} element - элемент
 * @param {string[]} modifiers - модификаторы
 * @return {string} out
 */
function getClassesWithModifiers(element, modifiers) {
    let out = element;
    if(modifiers){
        for (let mod of modifiers){
            out += ` ${element}_${mod}`;
        }
    }
    return out;
}

/**
 * Рендер карточки студента
 * @param {Student} student
 * @return {string}
 */
function renderCardPerson(student){
    const img = renderCardImg({
        src: student.photo,
        modifiers: ["round"],
        alt: `${student.name}, ${student.university} ${student.course} курс`,
    });
    const title = renderCardTitle({
        text: student.name,
        modifiers: ["nowrap"],
    });
    const description = renderCardDescription({
        text: `${student.university} ${student.course} курс`,
    });

    return `<div class="card card_person" data-id="${student.id}">${img}${title}${description}</div>`;
}

/**
 * Рендер всплывающего окна студента
 * @param {Student} student
 * @return {string}
 */
function renderPopupStudent(student){
    const lastSession = renderLastSession({
        date: student.lastSession,
    });
    const closeButton = renderCloseButton();
    const title = renderCardTitle({
        text: student.name,
        modifiers: ["nowrap"],
    });
    const photo = renderCardImg({
        src: student.photo,
        modifiers: ["border"],
        alt: `Фото ${student.name}`,
    });
    const birthDay = renderBirthDay({
        date: student.birthDay,
    });
    const phone = renderPhone({
        phone: student.phone,
    });
    const messageButton = renderMessageButton({
        modifiers: ["round", "red"],
        id: student.id,
    });
    const friends = renderPersonsMiniList({
        id: student.id,
        friendsCount: student.friendsCount,
        friendsData: student.getFriendsData(4),
    });
    return `<div class="popup card card_popup">${lastSession}${closeButton}${title}${photo}${birthDay}${phone}${messageButton}${friends}</div>`;
}

/**
 * Рендер изображения на карточке
 * @param src - ссылка на изображение
 * @param alt - альтернативный текст изображения
 * @param {string[]} modifiers - модификаторы
 * @return {string}
 */
function renderCardImg({src = 'img/ui/default_placeholder.jpg', alt = '', modifiers} = {}) {
    const classes = getClassesWithModifiers("card__img", modifiers);
    return `<img  class="${classes}" src="${src}" alt="${alt}"/>`;
}

/**
 * Рендер заголовка карточки
 * @param {string} text
 * @param {string[]} modifiers
 * @return {string}
 */
function renderCardTitle({text = '', modifiers} = {}) {
    const classes = getClassesWithModifiers("card__title", modifiers);
    return `<p class="${classes}" title="${text}">${text}</p>`;
}

/**
 * Рендер описания карточки
 * @param {string} text
 * @param {string[]} modifiers
 * @return {string}
 */
function renderCardDescription({text = '', modifiers} = {}) {
    const classes = getClassesWithModifiers("card__description", modifiers);
    return `<span class="${classes}" title="${text}">${text}</span>`;
}

/**
 * Рендер информации о последнем времени онлайн
 * Например: "Был(а) в сети вчера в 21:10
 * @param {Date} date
 * @param {string[]} modifiers
 * @return {string}
 */
function renderLastSession({date , modifiers} = {}) {
    const classes = getClassesWithModifiers("card__last-session", modifiers);
    const text = `Был(-а) в сети ${renderTextDate(date)}`;
    return `<p class="${classes}" title="${text}">${text}</p>`;
}

/**
 * Возращает дату в текстовом виде по формату 'сегодня|вчера|позавчера в HH:MM' или 'DD.MM.YY в HH:MM'
 * 'неизвестно', если null
 * @param {Date|null} date - дата
 */
function renderTextDate(date) {
    let out = 'неизвестно';
    const now = new Date();
    const oneDay = 24 * 60 * 60 * 10000;
    const days = Math.floor((now - date) / oneDay);
    const daysStr = ['сегодня', 'вчера', 'позавчера'];
    if (date) {
        const timeText = `${date.getHours()}:${date.getMinutes()}`;
        out = `${daysStr[days] || date.toLocaleDateString()} в ${timeText}`;
    }
    return out;
}

/**
 * Рендер кнопки закрытия
 * @param {string[]} modifiers
 * @return {string}
 */
function renderCloseButton({modifiers= []}  = {}) {
    const classes = getClassesWithModifiers("card__close-button", modifiers);
    return `<div class="${classes}" title="Закрыть"></div>`;
}

/**
 * Рендер даты рождения
 * Например 11 мая, 25 лет
 * @param {Date} date
 * @param {string[]} modifiers
 * @return {string}
 */
function renderBirthDay({date, modifiers= []} = {}) {
    let textBirthday = 'скрыто';
    if(date){
        const months = [
            'января',
            'февраля',
            'марта',
            'апреля',
            'мая',
            'июня',
            'июля',
            'августа',
            'сентября',
            'октября',
            'ноября',
            'декабря',
        ];
        const years = getFullYears(date);
        //если последняя цифра 1-4, то {возраст} года, иначе {возраст} лет
        const yearsText = ((years+ 1) % 10 < 6) ? `${years} года` : `${years} лет`;
        textBirthday = `${date.getDate()} ${months[date.getMonth()]}, ${yearsText}`;
    }
    const classes = getClassesWithModifiers("card__birthday", modifiers);
    return `<p class="${classes} card__birthday_label" title="День рождения">День рождения</p>
            <p class="${classes}" title="${textBirthday}">${textBirthday}</p>`;
}

/**
 * Количество полных лет пройденных с даты
 * @param {Date} date
 * @returns {string} количество лет
 */
function getFullYears(date){
    if(date){
        const now = new Date();
        let years = now.getFullYear() - date.getFullYear();
        if(now.getMonth() < date.getMonth()
            || (now.getMonth() === date.getMonth() && now.getDate() < date.getDate())){
            years--;
        }
        return years.toString();
    }
    return '';
}

/**
 * Рендер телефона
 * @param {string} phone
 * @param {string[]} modifiers
 * @return {string}
 */
function renderPhone({phone, modifiers= []}) {
    const phoneText = renderPhoneText(phone);
    const classes = getClassesWithModifiers("card__phone", modifiers);
    return`<p class="${classes} card__phone_label" title="Телефон">Телефон</p>
            <p class="${classes}" title="${phoneText}">${phoneText}</p>`;
}

/**
 * Формирует телефон в формате +7(ХХХ)ХХХ-ХХ-ХХ
 * @param {string} phone - основной телефон (международный формат, 7хххххххххх)
 * @returns {string} out
 */
function renderPhoneText(phone) {
    let out = '';
    if(phone){
        const partsPhone = [
            phone.substr(0, 1),
            phone.substr(1, 3),
            phone.substr(4, 3),
            phone.substr(7, 2),
            phone.substr(9, 2),
        ];
        out = `+${partsPhone[0]}(${partsPhone[1]})${partsPhone[2]}-${partsPhone[3]}-${partsPhone[4]}`;
    }
    return out;
}

/**
 * Рендер кнопки перехода к сообщениям
 * @param {string} id
 * @param {string[]} modifiers
 * @return {string}
 */
function renderMessageButton({id, modifiers= []}) {
    const classes = getClassesWithModifiers("card__message", modifiers);
    return `<a href="/im?sel=${id}" class="${classes}"></a>`;
}

/**
 * Рендер друзей
 * @param {string} id - идентификатор студента
 * @param {string} friendsCount - кол-во друзей всего
 * @param {Object[]} friendsData - список друзей для отображения
 * @param {string[]} modifiers
 * @return {string}
 */
function renderPersonsMiniList({id, friendsCount, friendsData, modifiers= []}) {
    const classes = getClassesWithModifiers("persons-mini-list", modifiers);
    const friendsLink = renderPersonsMiniListLink({friendsCount});

    let friends = '';
    const listCount = Math.min(friendsData.length, 4);
    for(let i = 0; i < listCount; i++){
        friends += renderPersonsMiniListAva(friendsData[i]);
    }

    return `<div class="${classes}">${friendsLink}${friends}</div>`;
}

/**
 * Рендер ссылки на список друзей
 * @param {string} friendsCount - кол-во друзей всего
 * @param {string[]} modifiers
 * @return {string}
 */
function renderPersonsMiniListLink({friendsCount, modifiers= []}) {
    const classes = getClassesWithModifiers("persons-mini-list__link", modifiers);
    return `<a href="/friends/" class="${classes}">Друзей ${friendsCount || 0}</a>`;
}

/**
 * Рендер мини аватарки друга
 * @param {string} name - Имя друга
 * @param {string} photo - ссылка на фото друга
 * @param {string[]} modifiers
 * @return {string}
 */
function renderPersonsMiniListAva({name, photo = '/img/ui/default_placeholder.jpg', modifiers= []}) {
    const classes = getClassesWithModifiers("persons-mini-list__ava", modifiers);
    return `<img src="${photo}" alt="${name || ''}" class="${classes}"/>`;
}

/**
 * Возращает стек для отрисовки панелей
 * @returns {Element}
 */
function getPopupStack() {
    return document.querySelector('.popup-stack');
}

/**
 * Вычисляет положение всплывающего окна на странице
 * @param pageX
 * @param pageY
 * @param width
 * @param height
 * @return {{x: number, y: number}}
 */
function calcPopupPosition({pageX = 0, pageY = 0, width = 0, height = 0}){
    return {
        x : Math.max(Math.min(pageX, window.innerWidth - width - 20), 0),
        y : Math.max(pageY - (height / 3), 0),
    }
}

/**
 * Обработчик клика на карточку
 * @param {MouseEvent} event
 */
function onPersonClick(event) {
    event.stopPropagation();
    const student = studentModel.students.find(st => st.id === this.dataset.id);
    showPopup(student, event.pageX, event.pageY);
}

/**
 * Отображает всплывающее окно
 * @param {Student} student
 * @param pageX
 * @param pageY
 */
function showPopup(student, pageX, pageY) {
    const stack =  getPopupStack();
    let popup;

    // закроем, если были открыты другие
    closePopup();

    //рендерим содержимое
    stack.innerHTML = student.createPopup();
    popup = stack.firstElementChild;

    //позиционируем
    const position = calcPopupPosition({
        pageX: pageX,
        pageY: pageY,
        width: popup.clientWidth,
        height: popup.clientHeight,
    });
    popup.style.left = position.x + "px";
    popup.style.top = position.y + "px";

    // повесим обработчик на клик кнопки закрытия
    setCloseEvent(popup);
}

/**
 * Обработчик клика на кнопку закрытия сплывающего окна
 */
function onClosePopup() {
    closePopup();
}

/**
 * Закрывает верхнее всплывающее окно
 */
function closePopup() {
    const stack = getPopupStack();
    if (stack.innerHTML) {
        const popup = stack.firstElementChild;
        removeCloseEvent(popup);
        stack.innerHTML = '';
    }
}

function setCloseEvent(popup) {
    popup.querySelector('.popup .card__close-button').addEventListener('click', onClosePopup);
}

function removeCloseEvent(popup) {
    popup.querySelector('.popup .card__close-button').removeEventListener('click', onClosePopup);
}

/**
 * Показывает модальное окно при удержании курсора на элементе
 * @param {MouseEvent} event
 */
function hoverPopup(event){
    let timer = setTimeout(onPersonClick.bind(this, event), 2000);
    const self = this;
    const onMouseLeave = () => {
        window.clearTimeout(timer);
        self.removeEventListener("mouseleave", onMouseLeave);
    };
    self.addEventListener('mouseleave', onMouseLeave);
}



//работа основной программы
const dataFromServer = studentModel.getData();
studentModel.students = studentModel.ObjectsToStudents(dataFromServer);

const persons = document.querySelector('.persons');
let studentsHtml = '';
for(let student of studentModel.students){
    studentsHtml += student.createCardPerson();
}
persons.innerHTML = studentsHtml;

// собираем все карточки и навешиваем им обработчик события клика
const personsCollection = document.querySelectorAll(".persons .card_person");
for(let person of personsCollection){
    person.addEventListener('click', onPersonClick);
    person.addEventListener('mouseenter', hoverPopup);
}

// подписываемся на события клика по документу
document.addEventListener('click', function (event) {
    const stack =  getPopupStack();
    const popup = stack.firstElementChild;
    // если есть открытый popup, проверяем, клик был по его содержимому? если нет, то закрываем
    if (popup && !popup.contains(event.target)) {
        onClosePopup();
    }
});



