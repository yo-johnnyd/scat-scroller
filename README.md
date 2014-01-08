# Scat Singing Scroller #

This piece of wonderous javascript will give you a little taste of jazz flavor every time you scroll.

##### Run it in the console
and enjoy the sweet scat sounds. Maybe share with an unsuspecting friend when they leave their computer.

##### Add it as a bookmark 
to quickly jazz up any page:

1. Create a bookmark with the url as:


        javascript:javascript:(function(){var e=document.createElement("audio"),t=document.createElement("source"),n=document.createElement("source"),r=null,i=Math.floor(Math.random()*(338-0+1)),s=true,o=function(){if(s){s=false;e.currentTime=i;e.removeEventListener("canplay",o)}};t.setAttribute("src","https://s3-us-west-1.amazonaws.com/scatsounds/scatComboLofi.mp3");t.setAttribute("type","audio/mpeg");n.setAttribute("src","https://s3-us-west-1.amazonaws.com/scatsounds/scatComboLofi.ogg");n.setAttribute("type","audio/ogg");e.appendChild(t);e.appendChild(n);e.setAttribute("preload","auto");e.setAttribute("loop","true");document.body.appendChild(e);e.addEventListener("canplay",o);window.onscroll=function(t){if(r){window.clearTimeout(r);r=null}if(e.paused){e.play()}r=window.setTimeout(function(){if(!e.paused){e.pause()}},500)}})()


2. Visit a page. While on that page, open the bookmark

##### Place on your website 
to share the lively sounds with all your visitors.
