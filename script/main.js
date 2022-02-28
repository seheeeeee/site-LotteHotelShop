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

let mb_srch_btn = document.querySelector('.mb_srch_btn');
mb_srch_btn.addEventListener('click',()=>{
    let keyword_form = document.querySelector('#keyword');

    if(mb_srch_btn.classList.contains('active')){
        mb_srch_btn.classList.remove('active');
        keyword_form.style.display = 'none';
    }else{
        mb_srch_btn.classList.add('active');
        keyword_form.style.display = 'block';
    }
});