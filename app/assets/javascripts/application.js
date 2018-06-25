// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

//TAGCLOUD PLUGIN-----------------------------

(function(h){var l;var k={halfHeight:null,halfWidth:null,hwratio:null,dtr:null,diameter:null,speedX:null,speedY:null,tLength:null};var e={height:400,width:400,radius:150,speed:3,slower:0.9,timer:5,fontMultiplier:15,hoverStyle:{border:"1px solid #935C26",color:"#935C26"},mouseOutStyle:{border:"none",color:"red"}};var i={mouseOver:null,lastFy:null,lastFx:null,sy:null,cy:null,sx:null,cx:null,mouseX:null,mouseY:null};var m={};jQuery.fn.tagoSphere=function(n){m=jQuery.extend(e,n);f(this);g(this);b();a();setInterval(c,m.timer);return this};function b(){k.halfHeight=m.height/2;k.halfWidth=m.width/2;k.speedX=m.speed/k.halfWidth;k.speedY=m.speed/k.halfHeight;k.dtr=Math.PI/180;k.diameter=m.radius*2;k.hwratio=m.height/m.width;k.whratio=m.width/m.height;k.tLength=l.length-1;i.mouseOver=false;i.lastFx=m.speed;i.lastFy=m.speed}function f(n){n.height(m.height);n.width(m.width);n.css({overflow:"hidden",position:"relative"});n.mousemove(function(o){i.mouseX=o.pageX-this.offsetLeft;i.mouseY=o.pageY-this.offsetTop});n.hover(function(){i.mouseOver=true},function(){i.mouseOver=false})}function g(p){l=p.children("ul").children();l.css({position:"absolute","list-style-type":"none","list-style-position":"outside","list-style-image":"none"});for(var n=0;n<l.length;n++){var q=jQuery(l[n]);var o=jQuery(q.children()[0]);l[n]=q;q.hover(function(){jQuery(this).css(m.hoverStyle)},function(){jQuery(this).css(m.mouseOutStyle)})}}function a(){var q=0;var p=0;var n=k.tLength+1;var o=0;while(o++<n){q=Math.acos(-1+(2*o-1)/n);p=Math.sqrt(n*Math.PI)*q;l[o-1].cx=m.radius*Math.cos(p)*Math.sin(q);l[o-1].cy=m.radius*Math.sin(p)*Math.sin(q);l[o-1].cz=m.radius*Math.cos(q);l[o-1].h=jQuery(l[o-1]).height()/4;l[o-1].w=jQuery(l[o-1]).width()/4}}function d(n,o){i.sy=Math.sin(n*k.dtr);i.cy=Math.cos(n*k.dtr);i.sx=Math.sin(o*k.dtr);i.cx=Math.cos(o*k.dtr)}function c(){var o;var p;if(i.mouseOver){o=m.speed-k.speedY*i.mouseY;p=k.speedX*i.mouseX-m.speed}else{o=i.lastFy*m.slower;p=i.lastFx*m.slower}if(i.lastFy!=o||i.lastFx!=p){d(o,p);i.lastFy=o;i.lastFx=p}if(Math.abs(o)>0.01||Math.abs(p)>0.01){j=-1;while(j++<k.tLength){rx1=l[j].cx;ry1=l[j].cy*i.cy+l[j].cz*-i.sy;rz1=l[j].cy*i.sy+l[j].cz*i.cy;l[j].cx=rx1*i.cx+rz1*i.sx;l[j].cy=l[j].cy*i.cy+l[j].cz*-i.sy;l[j].cz=rx1*-i.sx+rz1*i.cx;var n=k.diameter/(k.diameter+l[j].cz);l[j].x=l[j].cx*n;l[j].y=l[j].cy*n;l[j].alpha=n/2;l[j].css({left:k.whratio*(l[j].x-l[j].w*n)+k.halfWidth,top:k.hwratio*(l[j].y-l[j].h*n)+k.halfHeight,opacity:l[j].alpha,"font-size":m.fontMultiplier*l[j].alpha+"px","z-index":Math.round(-l[j].cz)})}}}})(jQuery);