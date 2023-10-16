$(document).ready(function(){

    //-------------- 헤더 로고 스크롤 --------------------
    $(window).scroll(function(){
        //윈도우에 스크롤하면
        const scrollTop = $(window).scrollTop();
        //변수에 윈도우 스크롤탑값 저장
        console.log(scrollTop);
        //scrollTop 200이상일 때 nav-menu,logo 클래스 추가 아닐때 제거
        if(scrollTop >= 200){
            $('.logo').addClass('on');
            $('.main-menu').addClass('on');
            $('.header-container').addClass('on');
            $('.header-area input').addClass('on');
            $('#hamburger').addClass('on');
        }else{
            $('.logo').removeClass('on');
            $('.main-menu').removeClass('on');
            $('.header-container').removeClass('on');
            $('.header-area input').removeClass('on');
            $('#hamburger').removeClass('on');
        }
    });
    
    //--------------배너 스와이퍼 Swiper JS : source --------------
    var swiper = new Swiper(".firstSwiper", {
      pagination: {
        el: ".swiper-pagination",
        // type: "fraction", => 활성화시키면 글자 1/4 이렇게 나오게 할 수 있다
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    
    //--------------section2 스와이퍼 Initialize Swiper --------------
    var swiper = new Swiper('.secondSwiper', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });


    //-------------- section3 스와이퍼 Initialize Swiper --------------

    var swiper = new Swiper(".thirdSwiper", {
        watchSlidesProgress: true,
        slidesPerView: 2,

    });
    
    
    // -------------- sub-menu --------------
    // 마우스 올리면 카테고리에 맞는 탭 활성화 / 헤더 색상변경 / 서브메뉴 박스에서 마우스 나가면 기존 상태로 다시 변경
    $('.main-menu li').mouseenter(function(){
        let result = $(this).attr('data-tab');
        $('.sub-menu').removeClass('active');
        $(`#${result}`).addClass('active');

        //서브메뉴박스 보이게
        $('.sub-menu-box').addClass('active');

        //헤더 색상 변경
        $('.main-menu li').addClass('active');
        $('.header-container').addClass('active');
        $('.logo').addClass('active');
    });

    $('.sub-menu-box').mouseleave(function(){
        $(this).removeClass('active');
        $('.header-area, .header-logo svg').removeClass('active');
        $('.header-container').removeClass('active');
        $('.main-menu li').removeClass('active');
        $('.logo').removeClass('active');
    });

    // -------------- 마우스 클릭 시 사이즈 확장 --------------
    const ww = $(window).width();

    if(ww > 1000){
        $('.box').click(function(){
            $(this).addClass('on');
            $(this).siblings().removeClass('on');
        });    
    }else{

    }    

    // ---------------- 탭메뉴 --------------------------------
    //버튼 active 추가 제거 해보기
    $('.btn li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');

        //탭메뉴 연결하기
        const result = $(this).attr('data-tab');
        //li에 있는 data-alt 값을 변수에 저장시킴

        // console.log(tab);

        $('.tabs div').removeClass('active');
        $(`.${result}`).addClass('active');
    });

    // ---------------- 상단이동버튼 -------------------------
    // 상단이동버튼 300px 이상일때 최상단으로 올라가는 상단이동버튼
    // (배너에서 없어져있다가 sec1에서부터 보이게)
    let btn = $('.top-btn');
    $(window).scroll(function(){
        if($(window).scrollTop() >= 300){
            btn.fadeIn();
        }else{
            btn.fadeOut();
        }
    });

    btn.click(function(){
        $('html,body').animate({
            scrollTop : 0
        },500);
    });

    //---------------- AOS -------------------------
    AOS.init();


    //햄버거 버튼 클릭하면 메인메뉴 나오면서 햄버거버튼 스위치되도록 처리 
    $('#hamburger').click(function(){
        $(this).toggleClass('active');
        $('.main-menu').toggleClass('active');
    });
});