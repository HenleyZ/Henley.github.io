const body = document.body;
const header = document.querySelector("nav");
const main = document.querySelector("body");
const headerHeight = document.querySelector("nav").offsetHeight;

main.style.top = headerHeight + "px";
header.classList.remove("scroll-down");
let lastScroll = 0;

function scrollfunction(e){
    let currentScroll = window.pageYOffset;
    var scrolltotop = document.scrollingElement.scrollTop;
    var target = document.getElementById("scrolleffect");
    var xvalue = "center";
    var factor = .5;
    var yvalue = scrolltotop * factor;
    target.style.backgroundPosition = xvalue + " -" + yvalue + "px";
    console.log("current: ", currentScroll);
    console.log("last: ", lastScroll);
    if(window.location.pathname == "/arts.html" || window.location.pathname == "/arcadia.html"){
        return
    }
    if (currentScroll > window.innerWidth / 2 - 90) {
        // scrolled down -- header hide
        header.classList.add("scroll-down");
        header.classList.remove("scroll-up");
    } else if (currentScroll < window.innerWidth / 2 - 90){
        // scrolled up -- header show
        header.classList.add("scroll-up");
        header.classList.remove("scroll-down");
    }

    lastScroll = currentScroll;
}
window.addEventListener("scroll", scrollfunction)

const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', 
    function(){
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({behavior : 'smooth'});
    });
});

// const moreclass = document.querySelector('#more-classes')

// moreclass.addEventListener('click', 
//     function(){
//         moreclass.classList.toggle('open');
// });

function parallax() {
    var s = document.getElementById("floater");
  var yPos = 0 - window.pageYOffset/5;  
  s.style.top = 50 + yPos + "%"; }

window.addEventListener("scroll", function(){
    parallax(); 
});


window.onload = function(e) {
    scrollfunction(true);
  };
  $(window).load(function() {
    $("body").removeClass("preload");
  });
