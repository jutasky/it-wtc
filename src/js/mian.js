$(function(){
  var mySwiper1 = $('.swiper1').swiper({
    loop: true,
    autoplay: 4000,
    pagination: '.pagination',
    paginationClickable: true,
    onImagesReady: function () {
      $(".item").eq( 0 ).animate({
        width:"100%",
        opacity:"1"
      });
    },
    onSlideChangeStart:function (swiper) {
      // $(".item").eq( swiper.activeIndex-2 ).animate({
      //   width:"100%",
      //   opacity:"1"
      // });
    },
    onSlideChangeEnd: function(swiper){
      // console.log( swiper.activeIndex-1 );
      var Index = swiper.activeIndex-1;
      if ( swiper.activeIndex-1 === 5 ){
        Index = 0;
      }
      $(".item").animate({
        opacity:"0"
      },100).eq( Index ).animate({
        opacity:"1"
      },200);
    }
  });

  $('.next-left').on('click', function(e){
    e.preventDefault();
    mySwiper1.swipePrev();
  });
  $('.pre-right').on('click', function(e){
    e.preventDefault();
    mySwiper1.swipeNext();
  });
  SwiperAutoHieght();
  $(window).resize(function(){
    SwiperAutoHieght();
  });
    $(window).scroll(function () {
    SwiperAutoHieght();
  });
  function SwiperAutoHieght() {
    var h=$(".swiper1 .swiper-slide").find("img").height();
    $(".swiper1 .swiper-wrapper,.swiper1 .swiper-slide").css("height",h);
  }


  // Banner End

  var swiper2 = new Swiper('.swiper2', {
    loop:true,
    centeredSlides: true,
    slidesPerView: 3,
    watchActiveIndex: true,
    autoplay: 1000,
    keyboardControl : false,
    mousewheelControl : false,
  });
  // Footer Banner End


  var $vue = '想搜些什么?';
  $(".put").focus(function() {
    if ( $(this).val() === $vue ) {
      $(this).val('');
    }
  })
  .blur(function () {
    if ( $(this).val() === '' ){
      $(this).val( $vue );
    }  
  });
  // Search End


  var NavOf =true;
  $(".nav").click(function(e) {
    if ( NavOf ) {
      $(this).css('height', 'auto');
    }else{
      $(this).height('35px');
    }
    NavOf = !NavOf;
  });
  $(".nav>ul>li").hover(function( e ) {
    $(this).find('ul').animate({
      'opacity' : 1,
      'height' : $(this).find('li').length * 100 + '%'
    }, 100);
    $('.active').animate({
      'left': $(this).index()*$(this).width()
    }, 0);
  }, function( e ) {
    $(this)
    .find('ul').animate({
      'opacity' : 0,
      'height' : '0'
    }, 100);
    $('.active').animate({
      'left': 0
    }, 0);
  });

  // Nav End
console.log("%c   _____ _          ","color:orange;");
console.log("%c  / ____| |         ","color:orange;");
console.log("%c | (___ | | ___   _ ","color:orange;");
console.log("%c  \___ \| |/ / | | |","color:orange;");
console.log("%c  ____) |   <| |_| |","color:orange;");
console.log("%c |_____/|_|\_\\__, |","color:orange;");
console.log("%c               __/ |","color:orange;");
console.log("%c              |___/ ","color:orange;");
console.log("%c 计算机系B202","color:orange");
console.log("%c 感谢工作室2015级，2016全体成员","color:orangered");
console.log("%c 郑鹏,冯良贤,王睿,简文高,陶俊锋,牛艺兴,郭小凯,熊志林,熊瑶,金映,冯成龙,肖鑫,潘鑫,熊凯文,胡语诗,赵秋霞,朱庆芳,詹胜兰,石翠兰,郑鹏,程晓,郭金金,胡璐,胡凯 \n 黄国瑞,曾静,徐庆,蔡章荣,孙海威,詹颖,杨盼盼,陈林,黄开梓,徐豆,邵壮,李圆圆,舒香,姚茂林,邹煜,叶妍琦,夏梦珂,李婷玉,伍秋菊,张志强","color:#555");
});
