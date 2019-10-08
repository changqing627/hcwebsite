document.write('<link rel="stylesheet" href="css/select_gj.css">');
document.write('<script src="script/select_gj.min.js"></script>');
document.write('<script src="script/select2_1.js"></script>');

$(function (){

    var headBox=`<header>
    <ul class="indexNav">
        <li>
              
                <div class="head" id="langBox">
                        <select name="country" class="fastbannerform__country" id="lang">
                            <option value="ch" title="CN" selected="selected">China,默认中文浏览</option>
                            <option value="en" title="GB" >English</option>
                            <option value="ru" title="RU" >Russia</option>
                            <option value="es" title="ES" >Spain</option> 
                            <option value="pt" title="PT" >Portugal</option>
                        </select>
                    </div>
        </li>
        <li><a href="javascript:;" id="head01">APP下载</a></li>
        <li><a href="javascript:;" id="head02">帮助中心</a></li>
    </ul>
</header> 
<nav class="allWidth oh">
   <p class="log fl"><img src="images/logo.png" class="imgSize" alt=""></p> 
   <ul class="headUl">
       <li data-name="index">
           <a href="index.html" id="head03">首页</a>
       </li>
       <li data-name="railway">
        <a href="railway.html" id="head04">铁路装备垂直跨境营销平台</a>
    </li>
    <li data-name="industInter">
        <a href="interCustom.html" id="head05">产业互联网+铁路定制解决方案</a>
    </li>
    <li data-name="aboutUs">
        <a href="about.html" id="head06">关于我们</a>
    </li>
       
   </ul>
</nav>

<nav class="oh smailNav">
    <div class="allWidth">
        <p class="log fl"><img src="images/logo.png" class="imgSize" alt=""></p> 
        <ul class="headUl">
            <li data-name="index">
                <a href="index.html" id="head07">首页</a>
            </li>
            <li data-name="railway">
             <a href="railway.html" id="head08">铁路装备垂直跨境营销平台</a>
         </li>
         <li data-name="industInter">
             <a href="interCustom.html" id="head09">产业互联网+铁路定制解决方案</a>
         </li>
         <li data-name="aboutUs" >
             <a href="about.html" id="head10">关于我们</a>
         </li>
            
        </ul>
    </div>
     </nav>

     <div class="rigBox">
        <ul>
            <li><a href="javascript:;"><img src="images/right/dianhua-s.png" alt=""></a></li>
            <li><a href="javascript:;"><img src="images/right/shouji-s.png" alt=""></a></li>
            <li><a href="javascript:;"><img src="images/right/youxiang-s.png" alt=""></a></li>
            <li><a href="javascript:;"><img src="images/right/weixin-s.png" alt=""></a></li>
        </ul>
     </div>`;
     $("#header").html(headBox);
})