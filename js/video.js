var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	document.querySelector("#player1").autoplay = false;
	document.querySelector("#player1").loop = false;

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector("#player1").play();
});

document.querySelector("#pause").addEventListener("click", function(){
	console.log ("pause video");
	document.querySelector("#player1").pause();
});

document.querySelector("#slower").addEventListener("click", function(){
	console.log ("slow down video");
	let vid = document.getElementById("player1");
	vid.playbackRate *= 0.9;
	console.log(document.getElementById("player1").playbackRate);
});

document.querySelector("#faster").addEventListener("click", function(){
	console.log ("speed up video");
	let vid = document.getElementById ("player1");
	vid.playbackRate *=1.1; //come back to this as numbers aren't exact
	console.log(document.getElementById("player1").playbackRate);
});

document.querySelector("#skip").addEventListener("click", function(){
	console.log ("skip ahead in video");
	document.getElementById("player1").currentTime +=10;
	console.log(document.getElementById("player1").currentTime);
	if (document.getElementById("player1").currentTime >= document.getElementById ("player1").duration) {
		document.getElementById("player1").currentTime = 0;
	}
});

document.querySelector("#mute").addEventListener("click", function(){
	if (document.getElementById("player1").muted) {
		console.log("video unmuted");
		document.getElementById("player1").muted = false;
		document.getElementById("mute").textContent = "Mute";
	} 
	else {
		console.log("video muted");
		document.getElementById("player1").muted = true;
		document.getElementById("mute").textContent = "Unmute";
	}
});

document.querySelector ("#slider").addEventListener("input", function(){
	console.log("volume changed");
	document.getElementById("volume").textContent = this.value+"%";
	console.log("The current value is " + this.value / 100);
});

document.getElementById("vintage").addEventListener("click", function(){
	console.log ("old school mode");
	document.getElementById("player1").classList.add("oldSchool");
});

document.getElementById("orig").addEventListener("click", function(){
	console.log ("back to original");
	document.getElementById("player1").classList.remove("oldSchool");
});



//using https://www.w3schools.com/Tags/ref_av_dom.asp for references