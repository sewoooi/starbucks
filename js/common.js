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


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //값을 지정
// new Date() 현재 날짜정보를 생성하는 함수
// getFRullYear() 올해의 숫자를 반환하는 메소드 함수