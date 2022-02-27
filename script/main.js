let f_toggle_btn = document.querySelector('button.toggleBtn');

f_toggle_btn.addEventListener('click', ()=>{
    let list = document.querySelector('ul.toggleList');
    if(list.classList.contains('on')){
        list.classList.remove('on');
        f_toggle_btn.style.backgroundImage = 'url("../../img/mb_ico_sel.png")';
    }else{
        list.classList.add('on');
        f_toggle_btn.style.backgroundImage = 'url("../../img/mb_ico_sel_on.png")';
    }
})

let header = document.querySelector('#header');

window.addEventListener('scroll',()=>{
    if(window.scrollY>100){
        header.classList.add('fixed');
    }else{
        header.classList.remove('fixed');
    }
});

let quickBtn = document.querySelector('.quick_btn');
quickBtn.addEventListener('click',()=>{
    document.body.scrollIntoView({behavior: 'smooth'});
})