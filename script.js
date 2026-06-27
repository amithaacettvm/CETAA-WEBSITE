/*==========================================
 PRELOADER
==========================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("preloader");

    if(loader){
        loader.style.display = "none";
    }

});

/*==========================================
 ANIMATED COUNTERS
==========================================*/

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const count = +counter.innerText;

        const increment = target / 200;

        if(count < target){

            counter.innerText = Math.ceil(count + increment);

            setTimeout(updateCounter,10);

        }else{

            counter.innerText = target;

        }

    };

    updateCounter();

});

/*==========================================
 STICKY HEADER
==========================================*/

const header = document.querySelector(".header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        header.style.background="rgba(255,255,255,.95)";
        header.style.boxShadow="0 10px 30px rgba(0,0,0,.12)";

    }

    else{

        header.style.background="rgba(255,255,255,.25)";
        header.style.boxShadow="none";

    }

});

/*==========================================
 BACK TO TOP BUTTON
==========================================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

/*==========================================
 SCROLL REVEAL ANIMATION
==========================================*/

const reveals = document.querySelectorAll(

".card,.why-box,.timeline-item,.alumni-card,.event-card,.contact-card,.stat"

);

function reveal(){

    reveals.forEach(item=>{

        const windowHeight = window.innerHeight;

        const elementTop = item.getBoundingClientRect().top;

        const visible = 120;

        if(elementTop < windowHeight-visible){

            item.classList.add("fade-up");
            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll",reveal);

reveal();

/*==========================================
 SMOOTH NAVIGATION
==========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});

/*==========================================
 HERO PARALLAX
==========================================*/

window.addEventListener("scroll",()=>{

const hero=document.querySelector(".hero");

let value=window.scrollY;

hero.style.backgroundPositionY=value*0.4+"px";

});

/*==========================================
 CARD HOVER GLOW
==========================================*/

const cards=document.querySelectorAll(

".card,.why-box,.alumni-card,.event-card"

);

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow="0 20px 45px rgba(21,101,192,.35)";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow="0 15px 35px rgba(0,0,0,.08)";

});

});

/*==========================================
 BUTTON RIPPLE EFFECT
==========================================*/

const buttons=document.querySelectorAll(

".primary-btn,.secondary-btn,.footer-btn"

);

buttons.forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(button.clientWidth,button.clientHeight);

const radius=diameter/2;

circle.style.width=circle.style.height=diameter+"px";

circle.style.left=e.clientX-button.getBoundingClientRect().left-radius+"px";

circle.style.top=e.clientY-button.getBoundingClientRect().top-radius+"px";

circle.classList.add("ripple");

const ripple=button.getElementsByClassName("ripple")[0];

if(ripple){

ripple.remove();

}

button.appendChild(circle);

});

});

/*==========================================
 ACTIVE NAVIGATION
==========================================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});

/*==========================================
 END OF SCRIPT
==========================================*/