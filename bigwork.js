/*
* @Author: Lenovo
* @Date:   2018-12-16 15:25:36
* @Last Modified by:   Lenovo
* @Last Modified time: 2019-01-04 23:23:40
*/
//加减数量
var jian=document.getElementById('jian');
var jia=document.getElementById('jia');
var shumu=document.getElementById('shumu');
var numbers=parseInt(shumu.value);
shumu.onchange=function(){
	numbers=parseInt(shumu.value);
	if(numbers>5){
		shumu.value=5;
		shumu.innerHTML="5";
		console.log(shumu);
	}
}
jian.onclick=function(){
	jia.style.cursor="pointer";
	if(numbers<2){
		jian.style.cursor="not-allowed";
	}else{
		numbers--;
		shumu.value=numbers;
		shumu.innerHTML=numbers;
	}
}
jia.onclick=function(){
	jian.style.cursor="pointer";
	if(numbers>=5){
		jia.style.cursor="not-allowed";
	}else{
		numbers++;
		shumu.value=numbers;
		shumu.innerHTML=numbers;
		jia.style.cursor="pointer";
	}
}
//毫升切换
var  mlo =document.getElementById('mlo');
var  mlt =document.getElementById('mlt');
var  ml =document.getElementById('ml');
ml.innerHTML="'150ml'";
mlo.style.backgroundImage="url('../img/duigou.png')";
mlo.style.backgroundRepeat="no-repeat";
mlo.style.border="1px solid #ff0853";
mlo.style.backgroundPosition="47px 15px";
mlo.onclick=function(){
 	ml.innerHTML="'150ml'";
 	mlo.style.backgroundImage="url('../img/duigou.png')";
 	mlo.style.backgroundRepeat="no-repeat";
 	mlo.style.border="1px solid #ff0853";
 	mlt.style.border="none";
 	mlo.style.backgroundPosition="47px 15px";
 	mlt.style.backgroundImage="none";
}
mlt.onclick=function(){
	ml.innerHTML="'200ml'";
	mlt.style.backgroundImage="url('../img/duigou.png')";
	mlt.style.backgroundRepeat="no-repeat";
	mlt.style.border= "1px solid #ff0853";
	mlo.style.border="none";
 	mlt.style.backgroundPosition="47px 15px";
	mlo.style.backgroundImage="none";
}
//切换图片与放大镜
var z1=document.getElementById('z1');
var z2=document.getElementById('z2');
var z3=document.getElementById('z3');
var z4=document.getElementById('z4');
var img1=document.getElementById('img1');
var img2=document.getElementById('img2');
var tu=document.getElementById('tu');
var slider = document.getElementById("slider");
var Bimg = document.getElementById("Bimg");
var box = document.getElementById('box'); 
z1.onclick=function(){
	if(z2.style.border='none'){
		z2.style.border='2px solid #ff9003';
		z3.style.border='none';	
		tu.src="../img/pp0.jpeg";
		Bimg.src="../img/pp0.jpeg";
	}
}
z2.onmouseover=function(){
	z2.style.border='2px solid #ff9003';
	z3.style.border='none';	
	tu.src="../img/pp0.jpeg";
	Bimg.src="../img/pp0.jpeg";
}
z3.onmouseover=function(){
	z3.style.border='2px solid #ff9003';
	z2.style.border='none';
	tu.src="../img/pp1.jpeg";
	Bimg.src="../img/pp1.jpeg";
}
z4.onclick=function(){
	if(z3.style.border='none'){
		z3.style.border='2px solid #ff9003';
		z2.style.border='none';
		tu.src="../img/pp1.jpeg";
		Bimg.src="../img/pp1.jpeg";
	}
}
img1.onmouseover=function(){
    slider.style.display='block';
	img2.style.display='block';
	box.style.width="818px";
}
img1.onmouseout=function(){
    slider.style.display='none';
	img2.style.display='none';
	box.style.width="408px";
}
img1.onmousemove=function(ev){
	var ev=ev||event;
	var oL=ev.clientX-box.offsetLeft-slider.offsetWidth/2;
	var oT=ev.clientY-box.offsetTop-slider.offsetHeight/2;
	var oMaxw=img1.offsetWidth-slider.offsetWidth;
	var oMaxh=img1.offsetHeight-slider.offsetHeight;
	oL=oL>oMaxw?oMaxw:oL<0?0:oL;
	oT=oT>oMaxh?oMaxh:oT<0?0:oT;
	slider.style.left = oL+'px';
	slider.style.top = oT+'px';
	var oBmaxw = img2.offsetWidth - Bimg.offsetWidth; 
	var oBmaxh = img2.offsetHeight - Bimg.offsetHeight; 
	Bimg.style.left = ( oL/oMaxw ) * oBmaxw + 'px';
	Bimg.style.top = ( oT/oMaxh ) * oBmaxh + 'px';
	Bimg.style.width="816px";
	Bimg.style.height="816px";
}
//弹框
var x=document.getElementById('x');
var goon=document.getElementById('goon');
var kuang=document.getElementById('kuang');
var zhs62=document.getElementById('zhs62');
x.onclick=function(){
	kuang.style.display="none";
}
goon.onclick=function(){
	kuang.style.display="none";
}
zhs62.onclick=function(){
	kuang.style.display="block";
}
