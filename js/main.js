const searchEl = document.querySelector('.search');
const searchInput = searchEl.querySelector('input');

searchEl.addEventListener('click',function(){
  searchInput.focus();
});

searchInput.addEventListener('focus',function(){
  searchEl.classList.add('focused');
  searchInput.setAttribute('placeholder','통합검색');
});


searchInput.addEventListener('blur',function(){
  searchEl.classList.remove('focused');
  searchInput.setAttribute('placeholder','');
});


const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top')

window.addEventListener('scroll',_.throttle(
  function(){
    console.log(window.scrollY);
    if(window.scrollY>500){
      // badgeEl.style.display='none';
      gsap.to(badgeEl,0.6,{
        opacity: 0,
        display: 'none'
      }); //버튼보이기
      gsap.to(toTopEl, .2, {
        x: 0
      });

    }else{
      // badgeEl.style.display='block';
      gsap.to(badgeEl,0.6,{
        opacity: 1,
        display: 'block'
      }); // 버튼숨기기
      gsap.to(toTopEl, .2, {
        x: 100
      });

    }
  },300
));


toTopEl.addEventListener('click',function(){
  gsap.to(window, 0.7,{ //window 객체
    scrollTo: 0
  }); 
})

const fadeEls = document.querySelectorAll('.visual .fade-in')
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  })
});

// new Swiper(선택자-css,{})
new Swiper('.notice-line .swiper',{
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper', {
  // direction: 'horizontal', // 수평 슬라이드
  autoplay: { // 자동 재생 여부
    delay: 5000 // 5초마다 슬라이드 바뀜
  },
  loop: true, // 반복 재생 여부
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  pagination: { // 페이지 번호 사용 여부
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.promotion .swiper-prev', // 이전 버튼 선택자
    nextEl: '.promotion .swiper-next' // 다음 버튼 선택자
  }
});

new Swiper('.awards .swiper', {
  // direction: 'horizontal', // 수평 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
  spaceBetween: 30, // 슬라이드 사이 여백
  slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수
  // slidesPerGroup: 5, // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.awards .swiper-prev', // 이전 버튼 선택자
    nextEl: '.awards .swiper-next' // 다음 버튼 선택자
  }
})


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click',function(){
  isHidePromotion = !isHidePromotion
  if (isHidePromotion){
    //숨김
    promotionEl.classList.add('hide')  
  }else{
    //보임
    promotionEl.classList.remove('hide')
  }
});

// Floating-object
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 '문자 데이터'를,
  // `parseFloat()`을 통해 소수점을 가지는 '숫자 데이터'로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

//선택자, 지연시간, 이동범위px
function floatingObject(selector, delay, size) {
  gsap.to(
    selector, // 선택자
    random(1.5, 2.5), // 애니메이션 동작 시간
    {
      delay: random(0, delay), // 얼마나 늦게 애니메이션을 시작할 것인지 지연 시간을 설정.
      y: size, // `transform: translateY(수치);`와 같음. 수직으로 얼마나 움직일지 설정.
      repeat: -1, // 몇 번 반복하는지를 설정, `-1`은 무한 반복.
      yoyo: true, // 한번 재생된 애니메이션을 다시 뒤로 재생.
      ease: Power1.easeInOut // Easing 함수 적용.
    }
  )
}
floatingObject('.floating1', 1, 15)
floatingObject('.floating2', .5, 15)
floatingObject('.floating3', 1.5, 20)

/**
 * 요소가 화면에 보여짐 여부에 따른 요소 관리
 */
// 관리할 요소들 검색!
const spyEls = document.querySelectorAll('section.scroll-spy')
// 요소들 반복 처리!
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({ // 감시할 장면(Scene)을 추가
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
    })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)
})

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //값을 지정
// new Date() 현재 날짜정보를 생성하는 함수
// getFRullYear() 올해의 숫자를 반환하는 메소드 함수