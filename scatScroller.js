(function () {
	var theScat = document.createElement("audio"),
		scatSrcMp3 = document.createElement('source'),
		scatSrcOgg = document.createElement('source'),
        timeout = null,
		randomTime = Math.floor(Math.random() * (338 - 0 + 1)),
		shouldSetRandom = true,
		setRandomTime = function() {
			if(shouldSetRandom){
				shouldSetRandom = false;
				theScat.currentTime = randomTime;
				theScat.removeEventListener('canplay', setRandomTime);
			}
		};

	scatSrcMp3.setAttribute("src", "https://s3-us-west-1.amazonaws.com/scatsounds/scatComboLofi.mp3");
	scatSrcMp3.setAttribute("type","audio/mpeg");
	scatSrcOgg.setAttribute("src", "https://s3-us-west-1.amazonaws.com/scatsounds/scatComboLofi.ogg");
	scatSrcOgg.setAttribute("type","audio/ogg");

	theScat.appendChild(scatSrcMp3);
	theScat.appendChild(scatSrcOgg);
	theScat.setAttribute("preload", "auto");
	theScat.setAttribute("loop","true");
	document.body.appendChild(theScat);

	theScat.addEventListener('canplay', setRandomTime);

	window.addEventListener('scroll', function(evt) {
        if (timeout) {
            window.clearTimeout(timeout);
            timeout = null;
        }

		if(theScat.paused){
			theScat.play();
		}

        timeout = window.setTimeout(function(){
            if (!theScat.paused) {
                theScat.pause();
            }
        }, 500);
	}, true);
}());