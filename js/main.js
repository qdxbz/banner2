var $li=$(".banner_img").children();
var $sli=$(".slider_nav").children();
setInterval(function(){
  $(".banner").css("height",$li.height());
},100);

$(".slider-page").on("click","a",function(e){
  e.preventDefault();
  var $a=$(this);
  var index;
  $.each($li,function(i,elem){
    if($(elem).is(".banner_active")){
      index=parseInt($(elem).index());
    }
  })
  if($a.is(".prevNav")){
    if(index>0){
      $($li[index]).removeClass().prev().addClass("banner_active");
      $($sli[index-1]).addClass("slider_active").siblings().removeClass();
    }else{
      $($li[index]).removeClass();
      $($li[$li.length-1]).addClass("banner_active");
      $($sli[$sli.length-1]).addClass("slider_active").siblings().removeClass();
    }
  }else{
    if(index<3){
      $($li[index]).removeClass().next().addClass("banner_active");
      $($sli[index+1]).addClass("slider_active").siblings().removeClass();
    }else{
      $($li[index]).removeClass();
      $($li[0]).addClass("banner_active");
      $($sli[0]).addClass("slider_active").siblings().removeClass();
    }
  }
})
timer=setInterval(function(){
  $(".nextNav").click();
},2000);
// 自动轮播
$(".banner").mouseenter(function(){
  clearInterval(timer);
  timer=null;
}).mouseleave(function(){
  timer=setInterval(function(){
    $(".nextNav").click();
  },2000);
})
// 悬浮轮播
$(".slider_nav").on("mouseover","li",function(){
  var $sli=$(this);
  var index=$sli.index();
  $sli.addClass("slider_active").siblings().removeClass();
  $($li[index]).addClass("banner_active").siblings().removeClass();
})