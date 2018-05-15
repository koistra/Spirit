/*============================ menu ==============================*/
$(document).ready(function() {

    $('.menu_trigger').click(function() {
        $('nav ul').slideToggle(500);
    });
    $(window).resize(function() {
        if ($(window).width() > 768) {
            $('nav ul').removeAttr('style');
        }
    });
});

/*============================  ==============================*/

$(document).ready(function() {
    var leftUIEl = $('.carousel-arrow-left');
    var rightUIEl = $('.carousel-arrow-right');

    leftUIEl.click(function() {});

    rightUIEl.click(function() {});

});

/*============================ TESTIMONIALS ==============================*/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

/*============================clients===============================*/
$(function() {

    var $icons = $('#slide-logo');

    function loopImg() {
        var $first = $icons.find('.container-logo img:first-child');
        $first.animate({
            'marginLeft': '-=' + $first.outerWidth(true) + 'px'
        }, 5000, 'linear', function() {
            $first.clone().removeAttr('style').appendTo($first.parent());
            $first.remove();
            loopImg();
        });
    }
    loopImg();
})
/*============================testimonias===============================*/
var links = document.querySelectorAll(".itemLinks");
var wrapper = document.querySelector("#wrapper");

// activeLink обеспечивает метку для активного элемента
var activeLink = 0;

// устанавливаем отслеживание событий
for (var i = 0; i < links.length; i++) {
    var link = links[i];
    link.addEventListener('click', setClickedItem, false);

    // определяем элемент для activeLink
    link.itemID = i;
}

// устанавливаем первый элемент в качестве активного
links[activeLink].classList.add("active");

function setClickedItem(e) {
    removeActiveLinks();

    var clickedLink = e.target;
    activeLink = clickedLink.itemID;

    changePosition(clickedLink);
}

function removeActiveLinks() {
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
    }
}

// Обработчик изменяет позицию слайдера, после того, как мы убедились,
// что в качестве активной обозначена нужная нам ссылка.
function changePosition(link) {
    link.classList.add("active");

    var position = link.getAttribute("data-pos");
    wrapper.style.left = position;
}