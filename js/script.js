$(document).ready(function(){

    // 주메뉴를 선택하면 하위메뉴 보임
    $(".gnb>li:nth-child(1)").mouseenter(function(){
        $(".sub02").stop(true, true).slideUp();
        $(".sub01").stop(true, true).slideDown(); 
    });

    $(".gnb>li:nth-child(2)").mouseenter(function(){
        $(".sub01").stop(true, true).slideUp();
        $(".sub02").stop(true, true).slideDown(); 
    });

    // 마우스가 하위메뉴를 떠나면 일정 시간 후에 숨김 (부드러운 UX)
    $(".sub01, .sub02").mouseleave(function(){
        let $this = $(this);
        setTimeout(function(){
            $this.slideUp();
        }, 100); // 300ms 후에 닫힘
    });

    // 메뉴 3번째에 마우스 올리면 모든 서브메뉴 닫힘
    $(".gnb>li:nth-child(3)").mouseenter(function(){
        $(".sub01, .sub02").stop(true, true).slideUp();
    });

    $("header .icon i").click(function(){
        $(".search").fadeIn();
    });

    $(".search_close").click(function(){
        $(".search").fadeOut();
    });



    // Swiper 슬라이드
	const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 800,
        //자동 실행
        autoplay: {
            delay: 4500,
            
            disableOnInteraction: false,
        },
      
        // Navigation arrows 네비게이션 버튼
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        

        // And if we need scrollbar 하단바
	    scrollbar: {
	    el: '.swiper-scrollbar',
	    dragSize: 300, //스크롤바 사이즈 설정
	    },

    });

    // .up_btn이 footer 영역에 도달하면 숨기기
    $(window).scroll(function() {
        const footerOffset = $("footer").offset().top; // footer의 상단 위치
        const footerHeight = $("footer").outerHeight(); // footer의 높이
        const scrollPos = $(window).scrollTop() + $(window).height(); // 현재 스크롤 위치 + 윈도우 높이

        // 스크롤이 footer 영역에 도달했을 때 .up_btn 숨기기
        if (scrollPos >= footerOffset) {
            $(".up_btn").fadeOut(); // .up_btn 숨기기
        } else {
            $(".up_btn").fadeIn(); // .up_btn 다시 보이게 하기
        }
    });


    //반응형 메뉴창 열기
    $(".m_header p:nth-child(1)").click(function(){
        $(".m_menu").show();
    });

    // 모바일메뉴 상위메뉴를 선택하면 하위메뉴 보임
    $(".m_gnb .m_sub:nth-child(1)>a:nth-child(1)").click(function(){
        $(".m_menu .m_sub:nth-child(1) ol").toggle();
    });
    $(".m_gnb .m_sub:nth-child(2)>a:nth-child(1)").click(function(){
        $(".m_menu .m_sub:nth-child(2) ol").toggle();
    });

    //모바일메뉴 엑스버튼
    $(".m_menu .m_close").click(function(){
        $(".m_menu").hide();
    });

    //반응형 검색창
    $(".m_header p:nth-child(3)").click(function(){
        $(".m_search").show();
    });
    
    //모바일검색창 엑스버튼
    $(".m_search .m_search_close").click(function(){
        $(".m_search").hide();
    });



    // Swiper 슬라이드
	const swiper_sub4 = new Swiper('.swiper_sub4',{
    // Optional parameters
        loop: true,
        spaceBetween: 20, // 3단배열 사이 간격
        //자동 실행
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
          
        // If we need pagination 목록 동그라미
        pagination: {
            el: '.swiper-pagination',
        },
      
        // Navigation arrows 네비게이션 버튼
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar 하단바
        scrollbar: {
            el: '.swiper-scrollbar',
            dragSize: 150, //스크롤바 사이즈 설정
        },

        breakpoints: {
            320: {
                slidesPerView: 2, // 1개씩 표시
            },
            768: {
                slidesPerView: 3,
            },
            1280: {
                slidesPerView: 4,
            },
        }
    });

    $(".sec1_menu .tabs li").click(function(){
        const tab_id = $(this).attr("data-tab");  // this : 선택한 요소
      $(".sec1_menu .tabs li").removeClass("current"); // 초기화
      $(".sec1_menu .tab-content").removeClass("current");// 초기화
    
      $(this).addClass("current"); // 활성화
      $(".sec1_menu #" +tab_id).addClass("current"); // 활성화
      })


});