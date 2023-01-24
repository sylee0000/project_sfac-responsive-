//햄버거메뉴 드롭다운
$(function(){

  //사업소개 드롭다운 메뉴 

  let businessbtnOpen = $('.header .ham_menu_sheet .menu_radio .menu_sheet .business_sheet ul:first-child ')
  let openSheet01 = $('.header .ham_menu_sheet .menu_radio .menu_sheet .business_sheet .business_sheet_s_menu')

  businessbtnOpen.mouseover(function(){
    openSheet01.stop().animate({height:300},300)
    $('.business_sheet_s_menu').addClass('bg')
  })

  businessbtnOpen.mouseout(function(){
    openSheet01.stop().animate({height:0},300)
  })
  
  //예술인 공간 드롭다운 메뉴

  let artistbtnOpen = $('.header .ham_menu_sheet .menu_radio .menu_sheet .artist_sheet ul:first-child')
  let openSheet02 = $('.header .ham_menu_sheet .menu_radio .menu_sheet .artist_sheet .artist_sheet_s_menu')

  artistbtnOpen.mouseover(function(){
    openSheet02.stop().animate({height:100},300)
    $('.artist_sheet_s_menu').addClass('bg')
  })

  artistbtnOpen.mouseout(function(){
    openSheet02.stop().animate({height:0},300)
  })


  //공연,전시,지역문화 공간 드롭다운 메뉴 
  
  let citizenbtnOpen = $('.header .ham_menu_sheet .menu_radio .menu_sheet .citizen_sheet .citizen_culture ')
  let openSheet03 = $('.header.ham_menu_sheet .menu_radio .menu_sheet .citizen_sheet .citizen_sheet_s_menu')

  citizenbtnOpen.mouseover(function(){
    openSheet03.stop().animate({height:250},300)
    $('.citizen_sheet_s_menu').addClass('bg')
  })

  citizenbtnOpen.mouseout(function(){
    openSheet03.stop().animate({height:0},300)
  })

  //공간소개 n/a

  //열린광장

  let communicationbtnOpen01 = $('.header .ham_menu_sheet .menu_radio .menu_sheet .communication_sheet .communication_menu01')
  let openSheet05_1 = $('.header .ham_menu_sheet .menu_radio .menu_sheet .communication_sheet .communication_sheet_s_menu01')

  communicationbtnOpen01.mouseover(function(){
    openSheet05_1.stop().animate({height:150},300)
    $('.communication_sheet_s_menu01').addClass('bg')
  
  })

  communicationbtnOpen01.mouseout(function(){
    openSheet05_1.stop().animate({height:0},300)
  })

  let communicationbtnOpen02 = $('.header .ham_menu_sheet .menu_radio .menu_sheet .communication_sheet .communication_menu02')
  let openSheet05_2 = $('.header .ham_menu_sheet .menu_radio .menu_sheet .communication_sheet .communication_sheet_s_menu02')

  communicationbtnOpen02.mouseover(function(){
    openSheet05_2.stop().animate({height:100},300)
    $('.communication_sheet_s_menu02').addClass('bg')
  })

  communicationbtnOpen02.mouseout(function(){
    openSheet05_2.stop().animate({height:0},300)
  })

  let communicationbtnOpen03 = $('.header .ham_menu_sheet .menu_radio .menu_sheet .communication_sheet .communication_menu03')
  let openSheet05_3 = $('.header .ham_menu_sheet .menu_radio .menu_sheet .communication_sheet .communication_sheet_s_menu03')

  communicationbtnOpen03.mouseover(function(){
    openSheet05_3.stop().animate({height:150},300)
    $('.communication_sheet_s_menu03').addClass('bg')
  })

  communicationbtnOpen03.mouseout(function(){
    openSheet05_3.stop().animate({height:0},300)
  })

  //정보공유

  let infobtnOpen01 = $('.header .ham_menu_sheet .menu_radio .menu_sheet .info_sheet .info_menu01')
  let openSheet06_1 = $('.header .ham_menu_sheet .menu_radio .menu_sheet .info_sheet .info_sheet_s_menu01')

  infobtnOpen01.mouseover(function(){
    openSheet06_1.stop().animate({height:150},300)
    $('.info_sheet_s_menu01').addClass('bg')
  })

  infobtnOpen01.mouseout(function(){
    Sheet06_1.stop().animate({height:0},300)
  })

  let infobtnOpen02 = $('.header .ham_menu_sheet .menu_radio .menu_sheet .info_sheet .info_menu02')
  let openSheet06_2 = $('.header .ham_menu_sheet .menu_radio .menu_sheet .info_sheet .info_sheet_s_menu02')

  infobtnOpen02.mouseover(function(){
    openSheet06_2.stop().animate({height:200},300)
    $('.info_sheet_s_menu02').addClass('bg')
  })

  infobtnOpen02.mouseout(function(){
    openSheet06_2.stop().animate({height:0},300)
  })

});




//서브페이지 소 제목 드롭다운

$(function(){
  const btnDropdown01 = $('.sub_s_title_business')
  const dropdownMenu01 = $('.sub_dropdown_menu_business')

  btnDropdown01.click(function(){
    dropdownMenu01.stop().animate({height:250},300)
  })

  btnDropdown01.mouseleave(function(){
    dropdownMenu01.stop().animate({height:0},300)
  })

  const btnDropdown02 = $('.sub_s_title_artist')
  const dropdownMenu02 = $('.sub_dropdown_menu_artist')

  btnDropdown02.click(function(){
    dropdownMenu02.stop().animate({height:300},300)
  })

  btnDropdown02.mouseleave(function(){
    dropdownMenu02.stop().animate({height:0},300)
  })

  const btnDropdown03 = $('.sub_s_title_citizens')
  const dropdownMenu03 = $('.sub_dropdown_menu_citizen')

  btnDropdown03.click(function(){
    dropdownMenu03.stop().animate({height:350},300)
  })

  btnDropdown03.mouseleave(function(){
    dropdownMenu03.stop().animate({height:0},300)
  })

  const btnDropdown04 = $('.sub_s_title_communication')
  const dropdownMenu04 = $('.sub_dropdown_menu_communication')

  btnDropdown04.click(function(){
    dropdownMenu04.stop().animate({height:300},300)
  })

  btnDropdown04.mouseleave(function(){
    dropdownMenu04.stop().animate({height:0},300)
  })
})


