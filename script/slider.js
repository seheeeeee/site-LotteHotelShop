var visual = document.querySelectorAll('.slider > ul > li'); //큰사진 li
var button = document.querySelectorAll('.sliderCtrl > ul > li'); //블릿(버튼) li
var pause = document.querySelector('.sliderCtrl .stop');
var current = 0; //현재
var intervalState = 0;
var _loop_1 = function (i) {
    button[i].addEventListener('click', function () {
        for (var _i = 0, button_1 = button; _i < button_1.length; _i++) {
            var item = button_1[_i];
            item.classList.remove('on');
        }
        this.classList.add('on');
        //button[i].classList.add('on');
        move(i);
    });
};
for (var i = 0; i < button.length; i++) {
    _loop_1(i);
}
timer(); //timer() 한번실행;
function timer() {
    intervalState = setInterval(function () {
        var button = document.querySelectorAll('.sliderCtrl > ul > li'); //블릿(버튼) li

        var n = current + 1;
        if (n === 3) {
            n = 0;
        }
        // var e = document.createEvent('Event');
        const event = new Event('click');
        // e.initEvent('click', true, true);
        window.addEventListener('click', ()=> console.log("good"), false);
        button[n].dispatchEvent(event);
        //컴퓨터가 버튼을 강제로 누른다(클릭).
    }, 5000);
}
var slider = document.querySelector('.slider');
slider.addEventListener('mouseenter', function () {
    clearInterval(intervalState);
});
slider.addEventListener('mouseleave', function () {
    timer();
});
pause.addEventListener('click', function(){
    clearInterval(intervalState);
})
function move(i) {
    if (current === i)
        return;
    //현재있는 슬라이드 번호(인덱스번호) 와
    //클릭한 슬라이드번호가 같으면 빠져 나간다.
    var cu = visual[current];
    var ne = visual[i];
    cu.classList.remove('on');
    ne.classList.add('on');

    cu.style.transition = 'none';
    cu.style.left = '0%';
    setTimeout(function () {
        cu.style.transition = 'left .8s';
        cu.style.left = '-100%';
    }, 50);
    ne.style.transition = 'none';
    ne.style.left = '100%';
    setTimeout(function () {
        ne.style.transition = 'left .8s';
        ne.style.left = '0%';
    }, 50);
    current = i;
}
