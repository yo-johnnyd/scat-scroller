# Scat Singing Scroller #

This piece of wonderous javascript will give you a little taste of jazz flavor every time you scroll.

##### Run it in the console
and enjoy the sweet scat sounds. Maybe share with an unsuspecting friend when they leave their computer.

##### Add it as a bookmark 
to quickly jazz up any page:

1. Create a bookmark with the url as:


        javascript:!function(){var t=document.createElement("audio"),e=document.createElement("source"),o=document.createElement("source"),n=null,a=Math.floor(339*Math.random()),s=!0,u=function(){s&&(s=!1,t.currentTime=a,t.removeEventListener("canplay",u))};e.setAttribute("src","https://s3-us-west-1.amazonaws.com/scatsounds/scatComboLofi.mp3"),e.setAttribute("type","audio/mpeg"),o.setAttribute("src","https://s3-us-west-1.amazonaws.com/scatsounds/scatComboLofi.ogg"),o.setAttribute("type","audio/ogg"),t.appendChild(e),t.appendChild(o),t.setAttribute("preload","auto"),t.setAttribute("loop","true"),document.body.appendChild(t),t.addEventListener("canplay",u),window.addEventListener("scroll",function(){n&&(window.clearTimeout(n),n=null),t.paused&&t.play(),n=window.setTimeout(function(){t.paused||t.pause()},500)},!0)}();


2. Visit a page. While on that page, open the bookmark

##### Place on your website 
to share the lively sounds with all your visitors.
