$(function(){function o(){var o=$(".swiper1 .swiper-slide").find("img").height();$(".swiper1 .swiper-wrapper,.swiper1 .swiper-slide").css("height",o)}var e=$(".swiper1").swiper({loop:!0,autoplay:4e3,pagination:".pagination",paginationClickable:!0,onImagesReady:function(){$(".item").eq(0).animate({width:"100%",opacity:"1"})},onSlideChangeStart:function(o){},onSlideChangeEnd:function(o){var e=o.activeIndex-1;o.activeIndex-1==5&&(e=0),$(".item").animate({opacity:"0"},100).eq(e).animate({opacity:"1"},200)}});$(".next-left").on("click",function(o){o.preventDefault(),e.swipePrev()}),$(".pre-right").on("click",function(o){o.preventDefault(),e.swipeNext()}),o(),$(window).resize(function(){o()}),$(window).scroll(function(){o()});new Swiper(".swiper2",{loop:!0,centeredSlides:!0,slidesPerView:3,watchActiveIndex:!0,autoplay:1e3,keyboardControl:!1,mousewheelControl:!1});$(".put").focus(function(){"想搜些什么?"===$(this).val()&&$(this).val("")}).blur(function(){""===$(this).val()&&$(this).val("想搜些什么?")});var i=!0;$(".nav").click(function(o){i?$(this).css("height","auto"):$(this).height("35px"),i=!i}),$(".nav>ul>li").hover(function(o){$(this).find("ul").animate({opacity:1,height:100*$(this).find("li").length+"%"},100),$(".active").animate({left:$(this).index()*$(this).width()},0)},function(o){$(this).find("ul").animate({opacity:0,height:"0"},100),$(".active").animate({left:0},0)}),console.log("%c   _____ _          ","color:orange;"),console.log("%c  / ____| |         ","color:orange;"),console.log("%c | (___ | | ___   _ ","color:orange;"),console.log("%c  ___ | |/ / | | |","color:orange;"),console.log("%c  ____) |   <| |_| |","color:orange;"),console.log("%c |_____/|_|_\\__, |","color:orange;"),console.log("%c               __/ |","color:orange;"),console.log("%c              |___/ ","color:orange;"),console.log("%c 计算机系B202","color:orange"),console.log("%c 感谢工作室2015级，2016全体成员","color:orangered"),console.log("%c 郑鹏,冯良贤,王睿,简文高,陶俊锋,牛艺兴,郭小凯,熊志林,熊瑶,金映,冯成龙,肖鑫,潘鑫,熊凯文,胡语诗,赵秋霞,朱庆芳,詹胜兰,石翠兰,郑鹏,程晓,郭金金,胡璐,胡凯 \n 黄国瑞,曾静,徐庆,蔡章荣,孙海威,詹颖,杨盼盼,陈林,黄开梓,徐豆,邵壮,李圆圆,舒香,姚茂林,邹煜,叶妍琦,夏梦珂,李婷玉,伍秋菊,张志强","color:#555")});