//햄버거메뉴 드롭다운

$(function(){

  //사업소개 드롭다운 메뉴 
  
  let businessbtnOpen = $('.header_sticky .ham_menu_sheet .menu_radio .menu_sheet .business_sheet ul:first-child')
  let openSheet01 = $('.header_sticky .ham_menu_sheet .menu_radio .menu_sheet .business_sheet .business_sheet_s_menu')

  businessbtnOpen.mouseover(function(){
    openSheet01.stop().animate({height:300},300)
    $('.business_sheet_s_menu').addClass('bg')
  })

  businessbtnOpen.mouseout(function(){
    openSheet01.stop().animate({height:0},300)
  })
  
  //예술인 공간 드롭다운 메뉴

  let artistbtnOpen = $('.header_sticky .ham_menu_sheet .menu_radio .menu_sheet .artist_sheet ul:first-child')
  let openSheet02 = $('.header_sticky .ham_menu_sheet .menu_radio .menu_sheet .artist_sheet .artist_sheet_s_menu')

  artistbtnOpen.mouseover(function(){
    openSheet02.stop().animate({height:100},300)
    $('.artist_sheet_s_menu').addClass('bg')
  })

  artistbtnOpen.mouseout(function(){
    openSheet02.stop().animate({height:0},300)
  })


  //공연,전시,지역문화 공간 드롭다운 메뉴 

  let citizenbtnOpen = $('.header_sticky .ham_menu_sheet .menu_radio .menu_sheet .citizen_sheet .citizen_culture')
  let openSheet03 = $('.header_sticky .ham_menu_sheet .menu_radio .menu_sheet .citizen_sheet .citizen_sheet_s_menu')

  citizenbtnOpen.mouseover(function(){
  openSheet03.stop().animate({height:250},300)
  $('.citizen_sheet_s_menu').addClass('bg')
  })

  citizenbtnOpen.mouseout(function(){
  openSheet03.stop().animate({height:0},300)
  })

  //공간소개 n/a

  //열린광장

  let communicationbtnOpen01 = $('.header_sticky .ham_menu_sheet .menu_radio .menu_sheet .communication_sheet .communication_menu01')
  let openSheet05_1 = $('.header_sticky .ham_menu_sheet .menu_radio .menu_sheet .communication_sheet .communication_sheet_s_menu01')

  communicationbtnOpen01.mouseover(function(){
  openSheet05_1.stop().animate({height:150},300)
  $('.communication_sheet_s_menu01').addClass('bg')
  
  })

  communicationbtnOpen01.mouseout(function(){
  openSheet05_1.stop().animate({height:0},300)
  })

  let communicationbtnOpen02 = $('.header_sticky .ham_menu_sheet .menu_radio .menu_sheet .communication_sheet .communication_menu02')
  let openSheet05_2 = $('.header_sticky .ham_menu_sheet .menu_radio .menu_sheet .communication_sheet .communication_sheet_s_menu02')

  communicationbtnOpen02.mouseover(function(){
  openSheet05_2.stop().animate({height:100},300)
  $('.communication_sheet_s_menu02').addClass('bg')
  })

  communicationbtnOpen02.mouseout(function(){
  openSheet05_2.stop().animate({height:0},300)
  })

  let communicationbtnOpen03 = $('.header_sticky .ham_menu_sheet .menu_radio .menu_sheet .communication_sheet .communication_menu03')
  let openSheet05_3 = $('.header_sticky .ham_menu_sheet .menu_radio .menu_sheet .communication_sheet .communication_sheet_s_menu03')

  communicationbtnOpen03.mouseover(function(){
  openSheet05_3.stop().animate({height:150},300)
  $('.communication_sheet_s_menu03').addClass('bg')
  })

  communicationbtnOpen03.mouseout(function(){
  openSheet05_3.stop().animate({height:0},300)
  })

  //정보공유

  let infobtnOpen01 = $('.header_sticky .ham_menu_sheet .menu_radio .menu_sheet .info_sheet .info_menu01 ')
  let openSheet06_1 = $('.header_sticky .ham_menu_sheet .menu_radio .menu_sheet .info_sheet .info_sheet_s_menu01')

  infobtnOpen01.mouseover(function(){
  openSheet06_1.stop().animate({height:150},300)
  $('.info_sheet_s_menu01').addClass('bg')
  })

  infobtnOpen01.mouseout(function(){
  openSheet06_1.stop().animate({height:0},300)
  })

  let infobtnOpen02 = $('.header_sticky .ham_menu_sheet .menu_radio .menu_sheet .info_sheet .info_menu02 ')
  let openSheet06_2 = $('.header_sticky .ham_menu_sheet .menu_radio .menu_sheet .info_sheet .info_sheet_s_menu02')

  infobtnOpen02.mouseover(function(){
  openSheet06_2.stop().animate({height:200},300)
  $('.info_sheet_s_menu02').addClass('bg')
  })

  infobtnOpen02.mouseout(function(){
  openSheet06_2.stop().animate({height:0},300)
  })

})

//공지사항

$(function(){
  const tab = $('.notice .notice_tab li')
  const sheet = $('.notice .notice_sheet ul')

  tab.click(function(){
    let target = $(this)
    let i = target.index()

    tab.removeClass('on')
    tab.eq(i).addClass('on')

    sheet.removeClass('on_sheet')
    sheet.eq(i).addClass('on_sheet')
  })
})


//스크롤시 헤더 색상변경

$(function(){
  const header = document.querySelector('#top')
  const headerHeight = header.getBoundingClientRect().height

  window.addEventListener('scroll', () => {
    if(window.scrollY > headerHeight){
      header.setAttribute('style','background: #303030')
    } else {
      header.setAttribute("style", "background: none;")
    }
  })
})

//plugin사용

//메인비주얼(모바일,테블릿)plugin사용

$(function(){
  let swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: true,
    loop: true
  })
})

//메인비주얼(웹)plugin사용

$(function(){
  let swiper = new Swiper(".mainposter", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 40,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: true,
    loop: true
  })
})


//section_02(예술인의 공간) 웹 plugin사용

$(function(){

  let swiper = new Swiper(".artist", {
    slidesPerView: 4,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  })
})


//webjin

document.addEventListener('DOMContentLoaded',()=>{
  let toggleBtn = document.querySelector('.btn_rotate');
  let changeImg01 = document.querySelector('.webjin_bg .webjin_box .webjin_poster>div img')
  let changeImg02 = document.querySelector('.webjin_bg .webjin_box .webjin_poster>div:nth-child(2) img')
  let changeTxt01 = document.querySelector('.webjin_txt_01')
  let changeTxt02 = document.querySelector('.webjin_txt_02')
  let state = false

  toggleBtn.addEventListener('click',()=>{
    if(!state == true){
      toggleBtn.style.transform = 'rotate(360deg)'

      changeImg01.style.transform = 'rotate(360deg)'
      changeImg02.style.transform = 'rotate(360deg)'
      changeImg01.setAttribute('src','./images/contents05/webjin_dance_in_315.png')
      changeImg02.setAttribute('src','./images/contents05/webjin_play_in_315.jpg')
      
      changeTxt02.innerHTML= '<p>무용 전문 웹진 춤:in</p>서울문화재단의 무용 전문<br/>웹 매거진 채널 "춤:in"에서<br/>다양한 정보를 확인하세요.'
      changeTxt02.style.padding = '20px 0'
      changeTxt01.innerHTML= '<p>연극 전문 웹진 연극:in</p>서울문화재단의 연극 전문<br/>웹 매거진 채널 "연극:in"에서<br/>다양한 정보를 확인하세요.'
      changeTxt01.style.padding = '20px 0'
      state = true
    } else if(state){
      toggleBtn.style.transform = 'rotate(180deg)'

      changeImg01.style.transform = 'rotate(0)'
      changeImg02.style.transform = 'rotate(0)'
      changeImg01.setAttribute('src','./images/contents05/webjin_biyu315.png')
      changeImg02.setAttribute('src','./images/contents05/webjin_plus_seoul_315.jpg')
      

      changeTxt02.innerHTML= '<p>문학 전문 웹진 비유</p>서울문화재단의 문학 전문<br/>웹 매거진 채널 "비유"에서<br/>다양한 정보를 확인하세요.'
      changeTxt02.style.padding = '20px 0'
      changeTxt01.innerHTML= '<p>문학 전문 웹진 플러스서울</p>서울문화재단의 문학 전문<br/>웹 매거진 채널 "플러스 서울"에서<br/>다양한 정보를 확인하세요.'
      changeTxt01.style.padding = '20px 0'
      state = false
    }
  })
})
