const header=document.querySelector('.site-header');
addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>40),{passive:true});
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.13});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelector('#year').textContent=new Date().getFullYear();
const box=document.querySelector('.lightbox'),boxImg=box.querySelector('img'),boxTitle=box.querySelector('h3'),boxMeta=box.querySelector('p');
document.querySelectorAll('.project').forEach(card=>card.addEventListener('click',()=>{boxImg.src=card.querySelector('img').src;boxImg.alt=card.querySelector('img').alt;boxTitle.textContent=card.dataset.title;boxMeta.textContent=card.dataset.meta;box.showModal()}));
box.querySelector('.close').addEventListener('click',()=>box.close());
box.addEventListener('click',e=>{if(e.target===box)box.close()});
