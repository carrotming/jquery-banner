# jquery-banner
[jquery插件之旋转木马](http://carrotming.cn/jquery-banner/.)

使用方法
导入css文件
 link rel="stylesheet" href="css/index.css"
 
 html布局结构
/*
 ul id="oUl"
    li>img src="images1/slidepic1.jpg" alt=""/></li
    li>img src="images1/slidepic2.jpg" alt=""/></li
    li>img src="images1/slidepic3.jpg" alt=""/></li
    liimg src="images1/slidepic4.jpg" alt=""/></li
    li>img src="images1/slidepic5.jpg" alt=""/></li
    li>img src="images1/slidepic6.jpg" alt=""/></li
/ul
span id="prev"></span
span id="next"></span
*/ 


导入js文件

<script src="js/jquery-3.1.1.js"></script>
<script src="js/index.js"></script>

调用方法

$(function () {
        $('#oUl').myBanner(
            //数组控制每一张图片具体位置,透明度,大小. simple默认为true,移入移出照片现在控制器,false为一直显示
             /*[{width: 800, height: 500, zIndex: 7, opacity: 1, left: 0, top: 300},
             {width: 700, height: 400, zIndex: 6, opacity: 0.2, left: 300, top: 200},
             {width: 600, height: 300, zIndex: 3, opacity: 0.2, left: 400, top: 120},
             {width: 500, height: 200, zIndex: 1, opacity: 0.2, left: 0, top: 0},
             {width: 600, height: 300, zIndex: 3, opacity: 0.2, left: -400, top: 120},
             {width: 700, height: 400, zIndex: 6, opacity: 0.2, left: -300, top: 200},
             {simple:false}]*/
        );
})
