//top 버튼 생성

$(function(){

  $(window).scroll(function(){
    if($(window).scrollTop() >= 200){
      $('.btn_top').fadeIn(500)
    } else{
      $('.btn_top').fadeOut(500)
    }
  })
})

//scrollTo plugin사용

$(function(){
  $('.btn_top').click(function(e){
    $(window).scrollTo(this.hash || 0,500);
  }) 
})

