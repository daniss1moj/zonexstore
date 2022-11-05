// Slider


$('.product__slider').slick({
    infinite: false,
    prevArrow: '<button class="slider-btn slider-btn__left"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17"/></svg></button>',
    nextArrow: '<button class="slider-btn slider-btn__right"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.78161 17L9 9L0.78161 1"/></svg></button>'
});

// $('.questions__item-title').on('click', function() {
//     $(this).toggleClass('questions__item-title_press')
//     $(this).next().toggleClass('questions__item-text_active')
// }) 

// $('.questions__item-title').click(function () {
//     $(this).toggleClass('question__item-title_press').next().slideToggle();
//     $('.questions__item-title').not(this).removeClass('question__item-title_press').next().slideUp();
//  });

    // Меняем видимость контента при нажатии на тригер(стрелку)
function switchAccordion (accordionTrigger,accordionTriggerActiveClass,accordionContentActiveClass, content) {
    if (accordionTrigger.classList.contains(accordionTriggerActiveClass.slice(1))) {
        content.classList.add(accordionContentActiveClass.slice(1))
        content.style.maxHeight = content.scrollHeight + 'px';
    } else {
        content.classList.remove(accordionContentActiveClass.slice(1))
        content.style.maxHeight = ''
    }
}
// Инициализация для корректного отрображения оступов у уже открытых аккардионов при загрузке страницы
function  init (accordions, accordionTriggerClass,accordionTriggerActiveClass,accordionContentClass, accordionContentActiveClass) {
    accordions.forEach((elem)=>{
        const accordionTrigger = elem.querySelector(accordionTriggerClass);
        const content = elem.querySelector(accordionContentClass);
        switchAccordion(accordionTrigger, accordionTriggerActiveClass,accordionContentActiveClass, content)
    })
}
// Активация аккардеонов
function activateAccordions (accordionClass, accordionTriggerClass, accordionTriggerActiveClass, accordionContentClass, accordionContentActiveClass) {
    const accordions = document.querySelectorAll(accordionClass);
	init (accordions, accordionTriggerClass,accordionTriggerActiveClass,accordionContentClass, accordionContentActiveClass)
    accordions.forEach(el => {
        // Вешаем событие клик на каждый аккардеон при котором менятся класс контента и поворачивается стрелка
		el.addEventListener('click', function(event) {
            const accordionTrigger = this.querySelector(accordionTriggerClass);
            const content = this.querySelector(accordionContentClass);
            
			accordionTrigger.classList.toggle(accordionTriggerActiveClass.slice(1));
            console.log(event.target)
			switchAccordion(accordionTrigger, accordionTriggerActiveClass,accordionContentActiveClass, content)
            // Закрываем все аккардеоны кроме того на котором произошел клик
            accordions.forEach(elem=>{
                if(elem !==this){
                elem.querySelector(accordionTriggerClass).classList.remove(accordionTriggerActiveClass.slice(1))
                elem.querySelector(accordionContentClass).classList.remove(accordionContentActiveClass.slice(1))
                elem.querySelector(accordionContentClass).style.maxHeight = ''
                }
            })
        })
    })

}

 document.addEventListener('DOMContentLoaded', ()=> {
 activateAccordions('.questions__item', '.questions__item-title', '.questions__item-title_press', '.questions__item-text', '.questions__item-text_active')
})
 
new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
    sectionSelector: '.page-section',
    navigation: true,
	navigationPosition: 'right',
	navigationTooltips: ['promo', 'product', 'benefits', 'features', 'questions', 'contacts'],
    menu: '#header__nav',
    anchors:['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],


});

// // Плавная прокрутка якорных ссылок на странице 
// // Найти все ссылки начинающиеся на #
// const anchors = document.querySelectorAll('a[href^="#"]')

// // Цикл по всем ссылкам
// for(let anchor of anchors) {
//   anchor.addEventListener("click", function(e) {
//     e.preventDefault() // Предотвратить стандартное поведение ссылок
//     // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
//     const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
//     // Плавная прокрутка до элемента с id = href у ссылки
//     document.querySelector(goto).scrollIntoView({
//       behavior: "smooth",
//       block: "start"
//     })
//   })
// }

const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu__mobile'),
        btnClose = document.querySelector('.menu__mobile-close'),
        headerLogo = document.querySelector('.header__logo'),
        headerButton = document.querySelector('.header__button'),
        navItems = document.querySelectorAll('.menu__mobile-link')

hamburger.addEventListener('click', function () {
    menu.classList.add('menu__mobile_active')
    hamburger.style.transform = 'translateX(100px)'
    headerLogo.style.transform = 'translateX(-200%)'
    headerButton.style.opacity = 0
})

btnClose.addEventListener('click', function () {
    menu.classList.remove('menu__mobile_active')
    headerLogo.style.transform = ''
    headerButton.style.opacity = ''
    hamburger.style.transform = ''
})

navItems.forEach((elem)=> {
    elem.addEventListener('click', ()=> {
        menu.classList.remove('menu__mobile_active')
        headerLogo.style.transform = ''
        headerButton.style.opacity = ''
        hamburger.style.transform = ''
    })
})
