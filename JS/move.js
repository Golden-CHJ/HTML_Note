/**
 * Created by 胖胖 on 2017/5/20.运动框架
 *
 */
function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }
    else{
        return getComputedStyle(obj,false)[attr];
    }
}
/*window.onload=function(){
    var ali=document.getElementsByTagName('li');
    for(var i=0;i<ali.length;i++){
        ali[i].timer=null;
        ali[i].onmouseover=function(){

            stratMove(this,'opacity',100);

        }
        ali[i].onmouseout=function(){
            stratMove(this,'opacity',20);

        }
    }
}*/
function startMove(obj,json,fn){

    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        var flag=true;
        for( var  attr in json){
        //1.取数值
        var icur=0;
        if(attr=='opacity'){
            icur=Math.round(parseFloat(getStyle(obj,attr))*100);
        }
        else {
            icur=parseInt(getStyle(obj,attr));
        }
        //2.算速度
        var speed=(json[attr]-icur)/8;//8为比例系数
        speed=speed>0?Math.ceil(speed):Math.floor(speed);
        //3.检测停止
        if(icur!=json[attr]) {
            flag=false;
        }


           /* clearInterval(obj.timer);
            if (fn){
                fn();
            }
        }*/
            if(attr=='opacity'){
                obj.style.filter='alpha(opacity:'+(icur+speed)+')';
                obj.style.opacity=(icur+speed)/100;
            }
            else {
            obj.style[attr]=icur+speed+'px';
            }

            if(flag){
                clearInterval(obj.timer);
                if (fn){
                    fn();
                }
            }
    }},30)

}
/*window.onload=function() {
 var li = document.getElementById('li1');
 li.onmouseover = function () {
 stratMove(li, 'width', 400,function(){
 stratMove(li, 'height', 400);
 });
 }
 li.onmouseout = function () {
 stratMove(li, 'width', 200);
 }
 }*///链式运动