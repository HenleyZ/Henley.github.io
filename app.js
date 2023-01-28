const body = document.body;
const header = document.querySelector("nav");
const main = document.querySelector("body");
const headerHeight = document.querySelector("nav").offsetHeight;

main.style.top = headerHeight + "px";

let lastScroll = 0;

window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;
    var scrolltotop = document.scrollingElement.scrollTop;
    var target = document.getElementById("newhome");
    var xvalue = "center";
    var factor = 0.5;
    var yvalue = scrolltotop * factor;
    target.style.backgroundPosition = xvalue + " -" + yvalue + "px";
    console.log("current: ", currentScroll);
    console.log("last: ", lastScroll);
    if(window.location.pathname == "/arts.html"){
        return
    }
    if (currentScroll - lastScroll > 0 && currentScroll > window.innerWidth / 2 - 90) {
        // scrolled down -- header hide
        header.classList.add("scroll-down");
        header.classList.remove("scroll-up");
    } else if (currentScroll - lastScroll < 0 && currentScroll < window.innerWidth / 2 - 90){
        // scrolled up -- header show
        header.classList.add("scroll-up");
        header.classList.remove("scroll-down");
    }

    lastScroll = currentScroll;
    // console.log("last: ", lastScroll);

})

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

const moreclass = document.querySelector('#more-classes')

moreclass.addEventListener('click', 
    function(){
        moreclass.classList.toggle('open');
});

function parallax() {
    var s = document.getElementById("floater");
  var yPos = 0 - window.pageYOffset/5;  
  s.style.top = 50 + yPos + "%"; }

window.addEventListener("scroll", function(){
    parallax(); 
});

