/*====  MENU BARS ====*/

let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  header.classList.toggle('active');
}


window.onscroll = () =>{
  menu.classList.remove('fa-times');
  header.classList.remove('active');
}


/*====  CURSOR start ====*/

let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) =>{
  cursor1.style.top = e.pageY + 'px';
  cursor1.style.left = e.pageX + 'px';
  cursor2.style.top = e.pageY + 'px';
  cursor2.style.left = e.pageX + 'px';
}


document.querySelectorAll('a').forEach(links =>{

  links.onmouseenter = () =>{
    cursor1.classList.add('active');
    cursor2.classList.add('active');
  }

  links.onmouseleave = () =>{
    cursor1.classList.remove('active');
    cursor2.classList.remove('active');
  }

});
/*====  CURSOR end ====*/


/*====  typing start====*/

let typed = new Typed('.typing',{
  strings: [' Développeur Web', 'Front-End', 'Freelance'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 2000,
  loop: true
})

/*====  typing end====*/






/*====  Color switcher ====*/

const styleSwitcherToggle = document.querySelector(".style-switcher-toggle");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");

})

// hide style switcher on scroll

window.addEventListener("scroll", () => {
  if(document.querySelector(".style-switcher").classList.contains("open"))
  {
    document.querySelector(".style-switcher").classList.remove("open");
  }
})


// Theme Colors


const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(Color)
{
  alternateStyles.forEach((style) => {
    if(Color === style.getAttribute("title"))
    {
      style.removeAttribute("disabled");
    }
    else
    {
      style.setAttribute("disabled", "true");
    }
  })
}

// Theme Dark light


const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
  if(document.body.classList.contains("dark"))
  {
    dayNight.querySelector("i").classList.add("fa-sun");
  }
  else
  {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
})


window.onscroll = function(){
  if(window.scrollY >= section.offsetTop){
    if(!start){
      stat.forEach((sta) => startCount(sta));
    }
    start = true;
  }
}

let section = document.querySelector(".box-container");
let stat = document.querySelectorAll(".box .sta");
let start = false;

function startCount(el){
  let max = el.dataset.max;
  let count = setInterval(() =>{
    el.textContent++;
    if(el.textContent == max){
      clearInterval(count);
    }
  }, 2000 / stat);
  
}


// BACK TO TOP BUTTON  !!

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 400) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});




// ACTIVE LINK !!!


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -  150;
        let height = sec.offsetHeight;
        let id =sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add                
                ('active');
            });
        };
    });
};


// image TILT !!!

VanillaTilt.init(document.querySelectorAll(".tilt"),{
	max: 30,
	speed: 600,
  scale: 1,
  transition: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
  perspective: 600,
  glare: true
});




// PARTICLES !!!


particlesJS("particles-js",
 {"particles":{"number":{"value":80,
 "density":{"enable":true,
 "value_area":800}},
 "color":{"value":"#DC0073"},
 "shape":{"type":"circle",
 "stroke":{"width":0,"color":"#000000"},
 "polygon":{"nb_sides":5},
 "image":{"src":"img/github.svg",
 "width":100,
 "height":100}},
 "opacity":{"value":0.5,
 "random":false,
 "anim":{"enable":false,
 "speed":1,
 "opacity_min":0.1,
 "sync":false}},
 "size":{"value":3,"random":true,
 "anim":{"enable":false,
 "speed":40,
 "size_min":0.1,
 "sync":false}},"line_linked":{"enable":true,
 "distance":150,"color":"#ffffff",
 "opacity":0.4,
 "width":1},"move":{"enable":true,
 "speed":6,"direction":"none",
 "random":false,"straight":false,
 "out_mode":"out","bounce":false,
 "attract":{"enable":false,
 "rotateX":600,"rotateY":1200}}},
 "interactivity":{"detect_on":"canvas",
 "events":{"onhover":{"enable":true,
 "mode":"repulse"},"onclick":{"enable":true,
 "mode":"bubble"},"resize":true},
 "modes":{"grab":{"distance":400,
 "line_linked":{"opacity":1}},"bubble":{"distance":400,
 "size":10,"duration":1,"opacity":0.5,"speed":3},
 "repulse":{"distance":200,"duration":0.4},
 "push":{"particles_nb":4},"remove":{"particles_nb":2}}},
 "retina_detect":true});var count_particles,
  stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);
     count_particles = document.querySelector('.js-count-particles');
      update = function() { stats.begin(); stats.end();
         if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array)
          { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); };
           requestAnimationFrame(update);;

           


// SCROLLREVEAL  OK !!!

/*
    <script>
        ScrollReveal({ reset: true });
    </script>

    <script>
        ScrollReveal({
            reset: true,
            distance: '80px',
            duration: 800,
            delay: 400
        });

        ScrollReveal().reveal('.image, .bar span, form, .icon-left', { 
            distance: '100px',
            delay: 500,
            origin: 'left',
            easing: "cubic-bezier(.37,.01,.74,1)",
            opacity: 0.2  
        });
        ScrollReveal().reveal('.box-info, .map, footer span, .icon-right', { 
            distance: '100px',
            delay: 500,
            origin: 'right',
            easing: "cubic-bezier(.37,.01,.74,1)",
            opacity: 0.2  
        });
        ScrollReveal().reveal('.heading', {
            distance: '100px',
            delay: 500,
            origin: 'bottom',
            easing: "cubic-bezier(.37,.01,.74,1)",
            opacity: 0.2  
        });
        ScrollReveal().reveal('.btn, icon, btn1, btn2, .icon-top', {
            distance: '100px',
            delay: 500,
            origin: 'top',
            easing: "cubic-bezier(.37,.01,.74,1)",
            interval: 200,
            opacity: 0.2  
        });
        ScrollReveal().reveal('.card', {
            duration: 500,
            distance: '100px',
            delay: 300,
            easing: 'ease-out',
            interval: 200,
            opacity: 0.2,
            scale: 0.9
        });
        ScrollReveal().reveal('.box', {
            distance: '100px',
            delay: 300,
            easing: "cubic-bezier(.37,.01,.74,1)",
            interval: 200,
            opacity: 0.5
        });
        ScrollReveal().reveal('.mySwiper', {
            distance: '0px',
            opacity: 0.8
        });
        ScrollReveal().reveal('.squares', {
             mobile: false
        });
        ScrollReveal().reveal('.squares', { mobile: false });

// Nice!
        loadMore('.squares').then(function () {
        ScrollReveal().sync();
        });
    </script>
*/
