$(function (){

// head footer 适配
var winH=$(window).height();
var contH=$(document.body).height();
var allContH=contH+142+296;
var footTop=winH-allContH;
if(winH>allContH){
  $(".footer").css("marginTop",footTop+"px");
};

// head nav 当前选中颜色
function headerNav(){
  var navName=$("meta[name=headerName]").attr("content");
  $(".headUl li").each(function (){
    var _this=$(this);
    if(navName==_this.attr("data-name")){
        _this.find("a").addClass("active")
    }
      
  })
};
headerNav();
//  small nav
$(window).bind("scroll",function (){
  var sTop=$(this).scrollTop();
  // console.log(sTop);
  if(sTop>=200){
    $(".smailNav").css("display","block")
  }else{
    $(".smailNav").css("display","none")
  }
  
})

//  right 

var windWid=$(window).width();
var rigLeft=(windWid-1080)/2+1080-30;
$(".rigBox").css("marginLeft",rigLeft+"px");
var rigLi=$(".rigBox ul li");
rigLi.each(function (){
  $(this).mouseover(function (){
    $(this).find("a img").css("display","block")
  }).mouseout(function (){
    $(this).find("a img").css("display","none")
  })
})
  
// 国际化
var seVal=document.cookie.split("=")[1];
        $("#lang").find("option[value="+seVal+"]").prop("selected",true);


})

