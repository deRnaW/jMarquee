/*
<div id="jMarquee">
<div>
<ul>
<li>pic</li>
</ul>
</div>
</div>
 */
(function($){$.fn.jMarquee=function(options){var settings={width:'300px',height:'100px',direct:'right',speed:10,pre:'pre',next:'next',hStop:false};options=options||{};$.extend(settings,options);var objThis=$(this);var li_=objThis.find('ul li');var itemsCount=li_.length;if(itemsCount<=0)
return;var container=document.getElementById(objThis.attr('id'))?document.getElementById(objThis.attr('id')):jMarquee;var func_up=function(){container.scrollTop>=fixh_?container.scrollTop=0:container.scrollTop++;}
var func_right=function(){container.scrollLeft<=0)?container.scrollLeft=fixw_:container.scrollLeft--;}
var func_down=function(){container.scrollTop<=0?container.scrollTop=fixh_:container.scrollTop--;}
var func_left=function(){container.scrollLeft>=fixw_?container.scrollLeft=0:container.scrollLeft++;}
switch(settings.direct){case'up':animateFunc=func_up;break;case'down':animateFunc=func_down;break;case'right':animateFunc=func_right;break;default:animateFunc=func_left;break;}
var objcon=objThis.find('ul');var objDiv=objThis.find('div');$('img').css('vertical-align','top');objcon.html(objcon.html().toString()+objcon.html().toString());var tempImg=new Image();tempImg.src=objcon.find('li:eq(0) img').attr('src');if(tempImg.complete)
objcon.find('img').css({width:tempImg.width,height:tempImg.height});function setCSS(obj,w,h,dir){var li_=objThis.find('li');var itemsCount=li_.length;if(itemsCount<=0)
return;if(dir=='left'||dir=='right'){obj.find('li').css('float','left');objDiv.css({'width':li_.width()*2+4,'height':li_.height()});}else{objDiv.css({'width':li_.width(),'height':parseInt(li_.height())*itemsCount});}
obj.css({'overflow':'hidden','width':settings.width,'height':settings.height,'cursor':'pointer'});}
setCSS(objThis,settings.width,settings.height,settings.direct);var fixw_=objDiv.width()/2;var fixh_=objDiv.height()/2;var preButton=$('#'+settings.pre);if(preButton!=undefined)
preButton.click(function(){(settings.direct=='right'||'left')?settings.direct='left':setting.direct='up';});var nextButton=$('#'+settings.next);if(nextButton!=undefined)
nextButton.click(function(){(settings.direct=='right'||'left')?settings.direct='right':setting.direct='down';});return this.each(function(){var startjM=function(){if(settings.hStop){objThis.hover(function(){if(jM)
clearInterval(jM);},function(){jM=setInterval(animateFunc,settings.speed);});}
var jM=setInterval(animateFunc,settings.speed);}
startjM.apply();});};})(jQuery);