/*
* @Author: Lenovo
* @Date:   2018-12-11 15:19:03
* @Last Modified by:   Lenovo
* @Last Modified time: 2019-01-03 10:32:57
*/
//顶部悬浮
window.onload=function(){
	var head=document.getElementsByClassName("head")[0];
	window.onscroll=function(){
		var st=document.documentElement.scrollTop || document.body.scrollTop;
		if(st>130){
			head.style.position="fixed"
		}else{
			head.style.position="static"
		}
	}
	//纵轮播
	window.onload = zong(30);
	function zong(t) {
	    var ul1 = document.getElementById("ul1");
	    var ul2 = document.getElementById("ul2");
	    var box = document.getElementById("box1");
	    ul2.innerHTML = ul1.innerHTML;
	    box.scrollTop = 0;
	    var timer = setInterval(zongStart, t);
	    box.onmouseover = function () {
	        clearInterval(timer)
	    }
	    box.onmouseout = function () {
	        timer = setInterval(zongStart, t);
	    }
	}
	function zongStart() {
		var box = document.getElementById("box1");
	    if (box.scrollTop >= ul1.scrollHeight) {
	        box.scrollTop = 0;
	    } else {
	        box.scrollTop++;
	    }
	}
}
//手机充值
var s1=document.getElementById('s1');
	s1.innerHTML+='<option>'+10+'</option>';
	s1.innerHTML+='<option>'+30+'</option>';
	s1.innerHTML+='<option>'+50+'</option>';
	s1.innerHTML+='<option>'+100+'</option>';
var p=document.createElement('p');
p.id="jipp6";
inzhi.appendChild(p);
jipp6.innerHTML="10";
s1.onchange=function(){
	jipp6.innerHTML=s1.value;
}
//轮播
function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}
var lunbo = document.getElementById('lunbo');
var oNavlist = document.getElementById('nav').children;
var slider = document.getElementById('slider');
var left = document.getElementById('left');
var right = document.getElementById('right');
var index = 1;
var timer;
var isMoving = false;
lunbo.onmouseover = function(){
	animate(left,{opacity:50})
	animate(right,{opacity:50})
	clearInterval(timer)
}
lunbo.onmouseout = function(){
	animate(left,{opacity:0})
	animate(right,{opacity:0})
	timer = setInterval(next, 3000);
}
right.onclick = next;
left.onclick = prev;
for( var i=0; i<oNavlist.length; i++ ){
	oNavlist[i].index = i;
	oNavlist[i].onclick = function(){
		index = this.index+1;
		navmove();
		animate(slider,{left:-800*index});
	}
}
function next(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index++;
	navmove();
	animate(slider,{left:-800*index},function(){
		if(index==7){
			slider.style.left = '-800px';
			index = 1;
		}
		isMoving = false;
	});
}
function prev(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index--;
	navmove();
	animate(slider,{left:-800*index},function(){
		if(index==0){
			slider.style.left = '-4800px';
			index = 6;
		}
		isMoving = false;
	});
}
function navmove(){
	for( var i=0; i<oNavlist.length; i++ ){
		oNavlist[i].className = "";
	}
	if(index >6){
		oNavlist[0].className = "active";
	}else if(index<=0){
		oNavlist[5].className = "active";
	}else {
		oNavlist[index-1].className = "active";
	}
}
timer = setInterval(next, 3000);

//右面向左悬浮
var li5 = document.getElementById("left1");
li5.onmouseover = function(){
    startMove5(10);
}
li5.onmouseout = function(){
    startMove5(100);
}
var timer1 = null;
function startMove5(s){
    clearInterval(timer1);
    var li5 = document.getElementById("left1");
    timer5 = setInterval(function(){
        var speed = 0;
        if(li5.offsetLeft > s){
            speed = -10;
        }else{
            speed = 10;
        }
        if(li5.offsetLeft == s){
            clearInterval(timer5);
        }else{
            li5.style.left = li5.offsetLeft+speed+'px';
        }
    },10);
} 
var li1 = document.getElementById("left2");
li1.onmouseover = function(){
    startMove1(10);
}
li1.onmouseout = function(){
    startMove1(100);
}
var timer1 = null;
function startMove1(s){
    clearInterval(timer1);
    var li1 = document.getElementById("left2");
    timer1 = setInterval(function(){
        var speed = 0;
        if(li1.offsetLeft > s){
            speed = -10;
        }else{
            speed = 10;
        }
        if(li1.offsetLeft == s){
            clearInterval(timer1);
        }else{
            li1.style.left = li1.offsetLeft+speed+'px';
        }
    },10);
} 
var li2 = document.getElementById("left3");
li2.onmouseover = function(){
    startMove2(10);
}
li2.onmouseout = function(){
    startMove2(100);
}
var timer2 = null;
function startMove2(s){
    clearInterval(timer2);
    var li2 = document.getElementById("left3");
    timer2 = setInterval(function(){
        var speed = 0;
        if(li2.offsetLeft > s){
            speed = -10;
        }else{
            speed = 10;
        }
        if(li2.offsetLeft == s){
            clearInterval(timer2);
        }else{
            li2.style.left = li2.offsetLeft+speed+'px';
        }
    },10);
} 
var li4 = document.getElementById("left4");
li4.onmouseover = function(){
    startMove4(10);
}
li4.onmouseout = function(){
    startMove4(100);
}
var timer4 = null;
function startMove4(s){
    clearInterval(timer4);
    var li4 = document.getElementById("left4");
    timer4= setInterval(function(){
        var speed = 0;
        if(li4.offsetLeft > s){
            speed = -10;
        }else{
            speed = 10;
        }
        if(li4.offsetLeft == s){
            clearInterval(timer4);
        }else{
            li4.style.left = li4.offsetLeft+speed+'px';
        }
    },10);
} 
