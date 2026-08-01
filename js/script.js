// Smooth Scroll

document.querySelectorAll('nav a').forEach(link=>{

link.addEventListener('click',function(e){

e.preventDefault();

const tujuan=document.querySelector(this.getAttribute('href'));

tujuan.scrollIntoView({

behavior:'smooth'

});

});

});


// Navbar Shadow

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.boxShadow="0 5px 15px rgba(0,0,0,.2)";

}else{

header.style.boxShadow="none";

}

});
