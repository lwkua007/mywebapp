var j=0;
var arr1=new Array();
var arr2=new Array();
arr1[0]="./img/slider/zhoubo.png";
arr1[1]="./img/slider/guoxiaojian.jpg";
arr1[2]="./img/slider/slider__bg01.jpg";

arr2[0]="https://xtx-12.herokuapp.com/index.html";
arr2[1]="https://guo-site.herokuapp.com/index.html";
arr2[2]="index.html";
function bannerImage()
{
    var photo1=document.getElementById("bannerImage");
    var link=document.getElementById("bannerlink");
    if (j==arr1.length-1)
    {
        j=0;
    }
    else
    {
        j+=1;
    }
    photo1.src=arr1[j];
    link.href=arr2[j]
}
//重新加载的时间
setInterval("bannerImage()",2000);