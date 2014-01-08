(function () {
	var theScat = document.createElement("audio"),
		scatSrcMp3 = document.createElement('source'),
		scatSrcOgg = document.createElement('source'),
		randomTime = Math.floor(Math.random() * (338 - 0 + 1));;

	scatSrcMp3.setAttribute("src", "https://s3-us-west-1.amazonaws.com/scatsounds/scatComboLofi.mp3");
	scatSrcMp3.setAttribute("type","audio/mpeg");
	scatSrcOgg.setAttribute("src", "https://s3-us-west-1.amazonaws.com/scatsounds/scatComboLofi.ogg");
	scatSrcOgg.setAttribute("type","audio/ogg");

	theScat.appendChild(scatSrcMp3);
	theScat.appendChild(scatSrcOgg);
	theScat.setAttribute("preload", "auto");
	theScat.setAttribute("loop","true");
	document.body.appendChild(theScat);

	theScat.addEventListener('canplay', function(evt) {
		theScat.currentTime = randomTime;
	});

	window.onscroll = function(evt) {
		if(theScat.paused){
			theScat.play();
			window.setTimeout(function(){
				theScat.pause();
			}, 2000);
		}
	}
}());