
function myFunction(){
	var a = 20;
	var b;
	var c = 30;
	var d = null;
	var e = a+c;

	alert(e);

	/*document.write("<h1>"+e+"<br>");
	document.write("<h1>"+b+"<br>");
	document.write("<h1>"+d+"<br>");
     */
	document.getElementById("name").innerHTML="<h1>"+e+"<br>"+"<h1>"+b+"<br>"+"<h1>"+d+"<br>";
}

function add(){
	
	var a = prompt("Enter number1: ");
	var b = prompt("Enter number2: ");
	
	//var c = a+b; //will concat a and b
	var c = parseInt(a)+parseInt(b);
	/*document.write("<h1>"+c);*/
	
	document.getElementById("name").innerHTML=a;
	
	
}

function array(){
	
	/*var a = ["ajay", "sunil", "anil"];
	for(i = 0; i <a.length; i++){
		alert(a[i]);
	}*/
	
	var a = new Array(22,34,27,90,12);
		//for(var i in  a){
		
		//}
	document.getElementById("name").innerHTML=a;
}

function  objecta(){
	var person={name:"Tsunami",age:"12",city:"Delhi"}
	document.getElementById("name").innerHTML=person.name+"<br>"+person.city+"<br>"+person.name;
	
}

function DefFun(){
	var d=new Date();
	document.getElementById("name").innerHTML="<h3>"+d+"</h3>";
	
	}

function ChangeFunc(){
	var loc=document.getElementById("change").style.background="yellow";
	}

function CreateDiv(){
	var bodis=document.createElement("main");
	var data=document.createElement('div')
	data.innerHTML("<p>Hoo ha</p>");;
	
	bodis.appendChild(data);
}

function check(){
	
	 var x = document.forms["form1"]["Name"].value;
	  var y = document.forms["form1"]["Phone"].value;
	  if (x == "") {
	    alert("Name must be filled out");
	   
	  }
	  
	  if (y == "") {
		    alert("Phone numberS must be filled out");
		
		  }
	
	var no=document.form1.Phone;
	if(document.getElementById("call").checked == true){
		alert("You can reach me at "+no.value)
	}else{
		alert("Dont call me plis!")
	}
	
}

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90
setInterval(drawClock, 1000);

function drawClock() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
  var grad;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2*Math.PI);
  ctx.fillStyle = '#f2d0ef';
  ctx.fill();
  grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
  grad.addColorStop(0, '#000000');
  grad.addColorStop(0.5, '#efe1ee');
  grad.addColorStop(1, '#efe1ee');
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius*0.1;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
  ctx.fillStyle = '#ff00ee';
  ctx.fill();
}

function drawNumbers(ctx, radius) {
  var ang;
  var num;
  ctx.font = radius*0.15 + "px arial";
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  for(num = 1; num < 13; num++){
    ang = num * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius*0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius*0.85);
    ctx.rotate(-ang);
  }
}

function drawTime(ctx, radius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //hour
    hour=hour%12;
    hour=(hour*Math.PI/6)+
    (minute*Math.PI/(6*60))+
    (second*Math.PI/(360*60));
    drawHand(ctx, hour, radius*0.5, radius*0.07);
    //minute
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx, minute, radius*0.8, radius*0.07);
    // second
    second=(second*Math.PI/30);
    drawHand(ctx, second, radius*0.9, radius*0.02);
}

function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}
	
document.getElementById("myBtn").addEventListener("click", DefFun);
	
	
	
	
	
	
	