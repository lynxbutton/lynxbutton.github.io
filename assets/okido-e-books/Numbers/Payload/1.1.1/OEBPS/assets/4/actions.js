pubcoder.projectID = pubcoder.projectID || "D928F63EC5FACE4D86169F491C787A52";
pubcoder.project.id = pubcoder.project.id || "D928F63EC5FACE4D86169F491C787A52";
pubcoder.project.title = pubcoder.project.title || "OkidoNumbers";
pubcoder.page.id = pubcoder.page.id || 6;
pubcoder.page.title = pubcoder.page.title || "4";
pubcoder.page.number = pubcoder.page.number || 4;
pubcoder.page.alias = pubcoder.page.alias || "";


var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;



/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj124_onTap_activeActionGroupIndex = -1;
var obj124_onTap_runningActionsCount = 0;
var obj124_onTap_loopCount = 0;
var obj124_onLoad_activeActionGroupIndex = -1;
var obj124_onLoad_runningActionsCount = 0;
var obj124_onLoad_loopCount = 0;
var obj128_onTap_activeActionGroupIndex = -1;
var obj128_onTap_runningActionsCount = 0;
var obj128_onTap_loopCount = 0;
var obj134_onTap_activeActionGroupIndex = -1;
var obj134_onTap_runningActionsCount = 0;
var obj134_onTap_loopCount = 0;
var obj136_onTap_activeActionGroupIndex = -1;
var obj136_onTap_runningActionsCount = 0;
var obj136_onTap_loopCount = 0;
var obj130_onTap_activeActionGroupIndex = -1;
var obj130_onTap_runningActionsCount = 0;
var obj130_onTap_loopCount = 0;
var obj145_onLoad_activeActionGroupIndex = -1;
var obj145_onLoad_runningActionsCount = 0;
var obj145_onLoad_loopCount = 0;
var obj740_SCEventRun_activeActionGroupIndex = -1;
var obj740_SCEventRun_runningActionsCount = 0;
var obj740_SCEventRun_loopCount = 0;
var obj763_SCEventRun_activeActionGroupIndex = -1;
var obj763_SCEventRun_runningActionsCount = 0;
var obj763_SCEventRun_loopCount = 0;
var obj1365_onLoad_activeActionGroupIndex = -1;
var obj1365_onLoad_runningActionsCount = 0;
var obj1365_onLoad_loopCount = 0;

/*
 * 
 * Init SCCounter
 *
 * 
 */
 

 $(window).on(PubCoder.Events.PageLoad, function(){
	window.eventObj = {};
	/*
	 * 
	 * Init SCAnimation
	 * 
	 * 
	 */
	

	/*
	 *
	 *   Init Shake
	 *
	 */
	window.addEventListener('shake', function () {
		
	}, false);
	
	/*
	 *
	 *   Init Masked Images
	 *
	 */
	 

 	/*
	 * 
	 * Init SCPhotogallery
	 * 
	 * 
	 */
	

 	/*
	 * 
	 * Init SCQuizMulti
	 * 
	 * 
	 */
	

 	/*
	 * 
	 * Init SCDrawer
	 * 
	 * 
	 */
	
    
 	/*
	 * 
	 * Init SCWPanZoom
	 * 
	 * 
	 */
	
    
 	/*
	 * 
	 * Init SCWMemoryGame
	 * 
	 * 
	 */
	
    
    

	if(! navigator.userAgent.match(/PubCoderHelper/i)) {
		/*
		 *
	 	 *   Action Groups
	 	 *
	 	 */
		
obj124_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj124_onTap_activeActionGroupIndex = -1;
		$("#obj124").trigger("obj124_onTap_ended");
		
		return;
	}
	window.obj124_onTap_activeActionGroupIndex = 0;
	





























//	action: Run JavaScript
runjs_739();
function runjs_739() {
	window.obj124_onTap_runningActionsCount = obj124_onTap_runningActionsCount + 1;


	if(localStorage.getItem("tapped") === "0" && localStorage.getItem("ready") === "true")
{
    localStorage.setItem("tapped", "1");
    //play Zam speech
    $("#obj740").trigger(PubCoder.Events.Run);
}
else if(localStorage.getItem("tapped") === "1"&& localStorage.getItem("ready") === "true")
{
    localStorage.setItem("tapped", "2");
    //play Zim speech
    $("#obj763").trigger(PubCoder.Events.Run);
}

	setTimeout(function() {
		window.obj124_onTap_runningActionsCount = window.obj124_onTap_runningActionsCount - 1;

if (window.obj124_onTap_runningActionsCount == 0) {
	obj124_onTap_actionGroup1();
}
	}, 1);
}












};
obj124_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj124_onTap_activeActionGroupIndex = -1;
		$("#obj124").trigger("obj124_onTap_ended");
		
		return;
	}
	window.obj124_onTap_activeActionGroupIndex = 1;
	










































};
obj124_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj124_onLoad_activeActionGroupIndex = -1;
		$("#obj124").trigger("obj124_onLoad_ended");
		
		return;
	}
	window.obj124_onLoad_activeActionGroupIndex = 0;
	


//	action: show 
//	target: obj721 
(function(){
	window.obj124_onLoad_runningActionsCount = obj124_onLoad_runningActionsCount + 1;


	var element = "#obj721";
	if ($(element).hasClass("SCImage")) {
		try {
			const img = $(element + " img")[0];
			img.decode()
				.then(function() { showObject(); })
				.catch(function(encodingError) {
					console.error(encodingError);
					showObject();
				});
		} catch (err) {
			showObject();
		}
	} else {
		showObject();
	}
	
	function showObject() {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				window.obj124_onLoad_runningActionsCount = window.obj124_onLoad_runningActionsCount - 1;

if (window.obj124_onLoad_runningActionsCount == 0) {
	obj124_onLoad_actionGroup1();
}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			window.obj124_onLoad_runningActionsCount = window.obj124_onLoad_runningActionsCount - 1;

if (window.obj124_onLoad_runningActionsCount == 0) {
	obj124_onLoad_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj723 
(function(){
	window.obj124_onLoad_runningActionsCount = obj124_onLoad_runningActionsCount + 1;


	var element = "#obj723";
	if ($(element).hasClass("SCImage")) {
		try {
			const img = $(element + " img")[0];
			img.decode()
				.then(function() { showObject(); })
				.catch(function(encodingError) {
					console.error(encodingError);
					showObject();
				});
		} catch (err) {
			showObject();
		}
	} else {
		showObject();
	}
	
	function showObject() {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				window.obj124_onLoad_runningActionsCount = window.obj124_onLoad_runningActionsCount - 1;

if (window.obj124_onLoad_runningActionsCount == 0) {
	obj124_onLoad_actionGroup1();
}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			window.obj124_onLoad_runningActionsCount = window.obj124_onLoad_runningActionsCount - 1;

if (window.obj124_onLoad_runningActionsCount == 0) {
	obj124_onLoad_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj719 
(function(){
	window.obj124_onLoad_runningActionsCount = obj124_onLoad_runningActionsCount + 1;


	var element = "#obj719";
	if ($(element).hasClass("SCImage")) {
		try {
			const img = $(element + " img")[0];
			img.decode()
				.then(function() { showObject(); })
				.catch(function(encodingError) {
					console.error(encodingError);
					showObject();
				});
		} catch (err) {
			showObject();
		}
	} else {
		showObject();
	}
	
	function showObject() {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				window.obj124_onLoad_runningActionsCount = window.obj124_onLoad_runningActionsCount - 1;

if (window.obj124_onLoad_runningActionsCount == 0) {
	obj124_onLoad_actionGroup1();
}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			window.obj124_onLoad_runningActionsCount = window.obj124_onLoad_runningActionsCount - 1;

if (window.obj124_onLoad_runningActionsCount == 0) {
	obj124_onLoad_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: move
//	target: obj128 
move_735();
function move_735() {
	window.obj124_onLoad_runningActionsCount = obj124_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj128");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-18";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj124_onLoad_runningActionsCount = window.obj124_onLoad_runningActionsCount - 1;

if (window.obj124_onLoad_runningActionsCount == 0) {
	obj124_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj128 
move_736();
function move_736() {
	window.obj124_onLoad_runningActionsCount = obj124_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj128");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 0;
	var moveY = 0;
	var isMoveBack = true;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj124_onLoad_runningActionsCount = window.obj124_onLoad_runningActionsCount - 1;

if (window.obj124_onLoad_runningActionsCount == 0) {
	obj124_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj128 
move_737();
function move_737() {
	window.obj124_onLoad_runningActionsCount = obj124_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj128");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-18";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj124_onLoad_runningActionsCount = window.obj124_onLoad_runningActionsCount - 1;

if (window.obj124_onLoad_runningActionsCount == 0) {
	obj124_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj128 
move_738();
function move_738() {
	window.obj124_onLoad_runningActionsCount = obj124_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj128");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 0;
	var moveY = 0;
	var isMoveBack = true;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj124_onLoad_runningActionsCount = window.obj124_onLoad_runningActionsCount - 1;

if (window.obj124_onLoad_runningActionsCount == 0) {
	obj124_onLoad_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1400();
function playAudioFile_1400() {
	window.obj124_onLoad_runningActionsCount = obj124_onLoad_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1400")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1400");
			$("#obj_audio_playSoundFile1400").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj124_onLoad_runningActionsCount = window.obj124_onLoad_runningActionsCount - 1;

if (window.obj124_onLoad_runningActionsCount == 0) {
	obj124_onLoad_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj124_onLoad_runningActionsCount = window.obj124_onLoad_runningActionsCount - 1;

if (window.obj124_onLoad_runningActionsCount == 0) {
	obj124_onLoad_actionGroup1();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj124_onLoad_runningActionsCount = window.obj124_onLoad_runningActionsCount - 1;

if (window.obj124_onLoad_runningActionsCount == 0) {
	obj124_onLoad_actionGroup1();
}
			}, false);
		} else {
			window.obj124_onLoad_runningActionsCount = window.obj124_onLoad_runningActionsCount - 1;

if (window.obj124_onLoad_runningActionsCount == 0) {
	obj124_onLoad_actionGroup1();
}
		}
	}

	
	
	
}




































};
obj124_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj124_onLoad_activeActionGroupIndex = -1;
		$("#obj124").trigger("obj124_onLoad_ended");
		
		return;
	}
	window.obj124_onLoad_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_1273();
function playAudioFile_1273() {
	window.obj124_onLoad_runningActionsCount = obj124_onLoad_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1273")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1273");
			$("#obj_audio_playSoundFile1273").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj124_onLoad_runningActionsCount = window.obj124_onLoad_runningActionsCount - 1;

if (window.obj124_onLoad_runningActionsCount == 0) {
	obj124_onLoad_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj124_onLoad_runningActionsCount = window.obj124_onLoad_runningActionsCount - 1;

if (window.obj124_onLoad_runningActionsCount == 0) {
	obj124_onLoad_actionGroup2();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj124_onLoad_runningActionsCount = window.obj124_onLoad_runningActionsCount - 1;

if (window.obj124_onLoad_runningActionsCount == 0) {
	obj124_onLoad_actionGroup2();
}
			}, false);
		} else {
			window.obj124_onLoad_runningActionsCount = window.obj124_onLoad_runningActionsCount - 1;

if (window.obj124_onLoad_runningActionsCount == 0) {
	obj124_onLoad_actionGroup2();
}
		}
	}

	
	
	
}




































};
obj124_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj124_onLoad_activeActionGroupIndex = -1;
		$("#obj124").trigger("obj124_onLoad_ended");
		
		return;
	}
	window.obj124_onLoad_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_1274();
function runjs_1274() {
	window.obj124_onLoad_runningActionsCount = obj124_onLoad_runningActionsCount + 1;


	localStorage.setItem("ready", "true");

	setTimeout(function() {
		window.obj124_onLoad_runningActionsCount = window.obj124_onLoad_runningActionsCount - 1;

if (window.obj124_onLoad_runningActionsCount == 0) {
	obj124_onLoad_actionGroup3();
}
	}, 1);
}












};
obj124_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj124_onLoad_activeActionGroupIndex = -1;
		$("#obj124").trigger("obj124_onLoad_ended");
		
		return;
	}
	window.obj124_onLoad_activeActionGroupIndex = 3;
	










































};
obj128_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj128_onTap_activeActionGroupIndex = -1;
		$("#obj128").trigger("obj128_onTap_ended");
		
		return;
	}
	window.obj128_onTap_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj128 
move_729();
function move_729() {
	window.obj128_onTap_runningActionsCount = obj128_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj128");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-18";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj128_onTap_runningActionsCount = window.obj128_onTap_runningActionsCount - 1;

if (window.obj128_onTap_runningActionsCount == 0) {
	obj128_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj128 
move_730();
function move_730() {
	window.obj128_onTap_runningActionsCount = obj128_onTap_runningActionsCount + 1;


	var easing = "bounce-out";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj128");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 0;
	var moveY = 0;
	var isMoveBack = true;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj128_onTap_runningActionsCount = window.obj128_onTap_runningActionsCount - 1;

if (window.obj128_onTap_runningActionsCount == 0) {
	obj128_onTap_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1387();
function playAudioFile_1387() {
	window.obj128_onTap_runningActionsCount = obj128_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1387")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1387");
			$("#obj_audio_playSoundFile1387").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj128_onTap_runningActionsCount = window.obj128_onTap_runningActionsCount - 1;

if (window.obj128_onTap_runningActionsCount == 0) {
	obj128_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj128_onTap_runningActionsCount = window.obj128_onTap_runningActionsCount - 1;

if (window.obj128_onTap_runningActionsCount == 0) {
	obj128_onTap_actionGroup1();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj128_onTap_runningActionsCount = window.obj128_onTap_runningActionsCount - 1;

if (window.obj128_onTap_runningActionsCount == 0) {
	obj128_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj128_onTap_runningActionsCount = window.obj128_onTap_runningActionsCount - 1;

if (window.obj128_onTap_runningActionsCount == 0) {
	obj128_onTap_actionGroup1();
}
		}
	}

	
	
	
}




































};
obj128_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj128_onTap_activeActionGroupIndex = -1;
		$("#obj128").trigger("obj128_onTap_ended");
		
		return;
	}
	window.obj128_onTap_activeActionGroupIndex = 1;
	










































};
obj134_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj134_onTap_activeActionGroupIndex = -1;
		$("#obj134").trigger("obj134_onTap_ended");
		
		return;
	}
	window.obj134_onTap_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj134 
move_733();
function move_733() {
	window.obj134_onTap_runningActionsCount = obj134_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj134");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-18";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj134_onTap_runningActionsCount = window.obj134_onTap_runningActionsCount - 1;

if (window.obj134_onTap_runningActionsCount == 0) {
	obj134_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj134 
move_734();
function move_734() {
	window.obj134_onTap_runningActionsCount = obj134_onTap_runningActionsCount + 1;


	var easing = "bounce-out";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj134");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 0;
	var moveY = 0;
	var isMoveBack = true;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj134_onTap_runningActionsCount = window.obj134_onTap_runningActionsCount - 1;

if (window.obj134_onTap_runningActionsCount == 0) {
	obj134_onTap_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1389();
function playAudioFile_1389() {
	window.obj134_onTap_runningActionsCount = obj134_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1389")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1389");
			$("#obj_audio_playSoundFile1389").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj134_onTap_runningActionsCount = window.obj134_onTap_runningActionsCount - 1;

if (window.obj134_onTap_runningActionsCount == 0) {
	obj134_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj134_onTap_runningActionsCount = window.obj134_onTap_runningActionsCount - 1;

if (window.obj134_onTap_runningActionsCount == 0) {
	obj134_onTap_actionGroup1();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj134_onTap_runningActionsCount = window.obj134_onTap_runningActionsCount - 1;

if (window.obj134_onTap_runningActionsCount == 0) {
	obj134_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj134_onTap_runningActionsCount = window.obj134_onTap_runningActionsCount - 1;

if (window.obj134_onTap_runningActionsCount == 0) {
	obj134_onTap_actionGroup1();
}
		}
	}

	
	
	
}




































};
obj134_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj134_onTap_activeActionGroupIndex = -1;
		$("#obj134").trigger("obj134_onTap_ended");
		
		return;
	}
	window.obj134_onTap_activeActionGroupIndex = 1;
	










































};
obj136_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj136_onTap_activeActionGroupIndex = -1;
		$("#obj136").trigger("obj136_onTap_ended");
		
		return;
	}
	window.obj136_onTap_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj136 
move_731();
function move_731() {
	window.obj136_onTap_runningActionsCount = obj136_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj136");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-18";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj136_onTap_runningActionsCount = window.obj136_onTap_runningActionsCount - 1;

if (window.obj136_onTap_runningActionsCount == 0) {
	obj136_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj136 
move_732();
function move_732() {
	window.obj136_onTap_runningActionsCount = obj136_onTap_runningActionsCount + 1;


	var easing = "bounce-out";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj136");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 0;
	var moveY = 0;
	var isMoveBack = true;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj136_onTap_runningActionsCount = window.obj136_onTap_runningActionsCount - 1;

if (window.obj136_onTap_runningActionsCount == 0) {
	obj136_onTap_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1388();
function playAudioFile_1388() {
	window.obj136_onTap_runningActionsCount = obj136_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1388")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1388");
			$("#obj_audio_playSoundFile1388").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj136_onTap_runningActionsCount = window.obj136_onTap_runningActionsCount - 1;

if (window.obj136_onTap_runningActionsCount == 0) {
	obj136_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj136_onTap_runningActionsCount = window.obj136_onTap_runningActionsCount - 1;

if (window.obj136_onTap_runningActionsCount == 0) {
	obj136_onTap_actionGroup1();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj136_onTap_runningActionsCount = window.obj136_onTap_runningActionsCount - 1;

if (window.obj136_onTap_runningActionsCount == 0) {
	obj136_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj136_onTap_runningActionsCount = window.obj136_onTap_runningActionsCount - 1;

if (window.obj136_onTap_runningActionsCount == 0) {
	obj136_onTap_actionGroup1();
}
		}
	}

	
	
	
}




































};
obj136_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj136_onTap_activeActionGroupIndex = -1;
		$("#obj136").trigger("obj136_onTap_ended");
		
		return;
	}
	window.obj136_onTap_activeActionGroupIndex = 1;
	










































};
obj130_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj130_onTap_activeActionGroupIndex = -1;
		$("#obj130").trigger("obj130_onTap_ended");
		
		return;
	}
	window.obj130_onTap_activeActionGroupIndex = 0;
	














//	action: rotate 
//	target: obj130 
rotate_778();
function rotate_778() {
	window.obj130_onTap_runningActionsCount = obj130_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj130";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj130';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '12';
	var rotationSpeed = 0.5;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = false;
	if (isInfinite) { rotate_778_completed(); }

	//TweenMax.to(targetObjectId, 0.5, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_778_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_778_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_778_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_778_completed() {
	setTimeout(function() {
		window.obj130_onTap_runningActionsCount = window.obj130_onTap_runningActionsCount - 1;

if (window.obj130_onTap_runningActionsCount == 0) {
	obj130_onTap_actionGroup1();
}
	}, 1);
}




























};
obj130_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj130_onTap_activeActionGroupIndex = -1;
		$("#obj130").trigger("obj130_onTap_ended");
		
		return;
	}
	window.obj130_onTap_activeActionGroupIndex = 1;
	














//	action: rotate 
//	target: obj130 
rotate_779();
function rotate_779() {
	window.obj130_onTap_runningActionsCount = obj130_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj130";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj130';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '-24';
	var rotationSpeed = 1;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = false;
	if (isInfinite) { rotate_779_completed(); }

	//TweenMax.to(targetObjectId, 1, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_779_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_779_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_779_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_779_completed() {
	setTimeout(function() {
		window.obj130_onTap_runningActionsCount = window.obj130_onTap_runningActionsCount - 1;

if (window.obj130_onTap_runningActionsCount == 0) {
	obj130_onTap_actionGroup2();
}
	}, 1);
}




























};
obj130_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj130_onTap_activeActionGroupIndex = -1;
		$("#obj130").trigger("obj130_onTap_ended");
		
		return;
	}
	window.obj130_onTap_activeActionGroupIndex = 2;
	












//	action: playAudioFile
playAudioFile_1428();
function playAudioFile_1428() {
	window.obj130_onTap_runningActionsCount = obj130_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1428")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1428");
			$("#obj_audio_playSoundFile1428").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj130_onTap_runningActionsCount = window.obj130_onTap_runningActionsCount - 1;

if (window.obj130_onTap_runningActionsCount == 0) {
	obj130_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj130_onTap_runningActionsCount = window.obj130_onTap_runningActionsCount - 1;

if (window.obj130_onTap_runningActionsCount == 0) {
	obj130_onTap_actionGroup3();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj130_onTap_runningActionsCount = window.obj130_onTap_runningActionsCount - 1;

if (window.obj130_onTap_runningActionsCount == 0) {
	obj130_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj130_onTap_runningActionsCount = window.obj130_onTap_runningActionsCount - 1;

if (window.obj130_onTap_runningActionsCount == 0) {
	obj130_onTap_actionGroup3();
}
		}
	}

	
	
	
}




































};
obj130_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj130_onTap_activeActionGroupIndex = -1;
		$("#obj130").trigger("obj130_onTap_ended");
		
		return;
	}
	window.obj130_onTap_activeActionGroupIndex = 3;
	


//	action: show 
//	target: obj785 
(function(){
	window.obj130_onTap_runningActionsCount = obj130_onTap_runningActionsCount + 1;


	var element = "#obj785";
	if ($(element).hasClass("SCImage")) {
		try {
			const img = $(element + " img")[0];
			img.decode()
				.then(function() { showObject(); })
				.catch(function(encodingError) {
					console.error(encodingError);
					showObject();
				});
		} catch (err) {
			showObject();
		}
	} else {
		showObject();
	}
	
	function showObject() {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeInUp";
		var animationDurationMs = 800;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				window.obj130_onTap_runningActionsCount = window.obj130_onTap_runningActionsCount - 1;

if (window.obj130_onTap_runningActionsCount == 0) {
	obj130_onTap_actionGroup4();
}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			window.obj130_onTap_runningActionsCount = window.obj130_onTap_runningActionsCount - 1;

if (window.obj130_onTap_runningActionsCount == 0) {
	obj130_onTap_actionGroup4();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();











//	action: rotate 
//	target: obj130 
rotate_780();
function rotate_780() {
	window.obj130_onTap_runningActionsCount = obj130_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj130";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj130';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '12';
	var rotationSpeed = 0.5;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = false;
	if (isInfinite) { rotate_780_completed(); }

	//TweenMax.to(targetObjectId, 0.5, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_780_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_780_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_780_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_780_completed() {
	setTimeout(function() {
		window.obj130_onTap_runningActionsCount = window.obj130_onTap_runningActionsCount - 1;

if (window.obj130_onTap_runningActionsCount == 0) {
	obj130_onTap_actionGroup4();
}
	}, 1);
}




























};
obj130_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj130_onTap_activeActionGroupIndex = -1;
		$("#obj130").trigger("obj130_onTap_ended");
		
		return;
	}
	window.obj130_onTap_activeActionGroupIndex = 4;
	



//	action: move
//	target: obj785 
move_782();
function move_782() {
	window.obj130_onTap_runningActionsCount = obj130_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj785");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-110";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 700, easing, function() {
		setTimeout(function() {
			window.obj130_onTap_runningActionsCount = window.obj130_onTap_runningActionsCount - 1;

if (window.obj130_onTap_runningActionsCount == 0) {
	obj130_onTap_actionGroup5();
}
		}, 1);
	});
}














//	action: scale
//	target: obj785 
scale_783();
function scale_783() {
	window.obj130_onTap_runningActionsCount = obj130_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj785";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj785';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1.1';
	var scaleYValue = '1.1';
	var effectDuration = '0.7';
	var effectEasing = 'ease';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_783_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_783_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_783_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_783_completed() {
	setTimeout(function() {
		window.obj130_onTap_runningActionsCount = window.obj130_onTap_runningActionsCount - 1;

if (window.obj130_onTap_runningActionsCount == 0) {
	obj130_onTap_actionGroup5();
}
	}, 1);
}
























};
obj130_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj130_onTap_activeActionGroupIndex = -1;
		$("#obj130").trigger("obj130_onTap_ended");
		
		return;
	}
	window.obj130_onTap_activeActionGroupIndex = 5;
	

//	action: hide
//	target: obj785 
hide_784();
function hide_784() {
	var element = "#obj785";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj130_onTap_runningActionsCount = obj130_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOutUp";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj130_onTap_runningActionsCount = window.obj130_onTap_runningActionsCount - 1;

if (window.obj130_onTap_runningActionsCount == 0) {
	obj130_onTap_actionGroup6();
}
		}, 1);
		return;
	};

	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);

	// var node = $(element)[0];

	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_784(), 100);
		return;
	}

	setTimeout(function() {
		$(element).css("display", "none");
		window.obj130_onTap_runningActionsCount = window.obj130_onTap_runningActionsCount - 1;

if (window.obj130_onTap_runningActionsCount == 0) {
	obj130_onTap_actionGroup6();
}
	}, animationDurationMs);

	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)

}








































};
obj130_onTap_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj130_onTap_activeActionGroupIndex = -1;
		$("#obj130").trigger("obj130_onTap_ended");
		
		return;
	}
	window.obj130_onTap_activeActionGroupIndex = 6;
	










































};
obj145_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj145_onLoad_activeActionGroupIndex = -1;
		$("#obj145").trigger("obj145_onLoad_ended");
		
		return;
	}
	window.obj145_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj145 
move_773();
function move_773() {
	window.obj145_onLoad_runningActionsCount = obj145_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj145");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-50";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj145_onLoad_runningActionsCount = window.obj145_onLoad_runningActionsCount - 1;

if (window.obj145_onLoad_runningActionsCount == 0) {
	obj145_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj145 
move_775();
function move_775() {
	window.obj145_onLoad_runningActionsCount = obj145_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj145");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=100";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj145_onLoad_runningActionsCount = window.obj145_onLoad_runningActionsCount - 1;

if (window.obj145_onLoad_runningActionsCount == 0) {
	obj145_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj145 
move_776();
function move_776() {
	window.obj145_onLoad_runningActionsCount = obj145_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj145");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 946;
	var moveY = 320;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj145_onLoad_runningActionsCount = window.obj145_onLoad_runningActionsCount - 1;

if (window.obj145_onLoad_runningActionsCount == 0) {
	obj145_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj145_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj145_onLoad_activeActionGroupIndex = -1;
		$("#obj145").trigger("obj145_onLoad_ended");
		
		return;
	}
	window.obj145_onLoad_activeActionGroupIndex = 1;
	















//	action: loop
loop_obj145_onLoad();
function loop_obj145_onLoad() {

	var loopCount = 0;

	window.obj145_onLoad_loopCount = window.obj145_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj145_onLoad_loopCount > loopCount) {
		window.obj145_onLoad_loopCount = 0
		obj145_onLoad_actionGroup2();
	} else {
		obj145_onLoad_actionGroup0();
	}

}


























};
obj145_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj145_onLoad_activeActionGroupIndex = -1;
		$("#obj145").trigger("obj145_onLoad_ended");
		
		return;
	}
	window.obj145_onLoad_activeActionGroupIndex = 2;
	










































};
obj740_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj740_SCEventRun_activeActionGroupIndex = -1;
		$("#obj740").trigger("obj740_SCEventRun_ended");
		
		return;
	}
	window.obj740_SCEventRun_activeActionGroupIndex = 0;
	


//	action: show 
//	target: obj742 
(function(){
	window.obj740_SCEventRun_runningActionsCount = obj740_SCEventRun_runningActionsCount + 1;


	var element = "#obj742";
	if ($(element).hasClass("SCImage")) {
		try {
			const img = $(element + " img")[0];
			img.decode()
				.then(function() { showObject(); })
				.catch(function(encodingError) {
					console.error(encodingError);
					showObject();
				});
		} catch (err) {
			showObject();
		}
	} else {
		showObject();
	}
	
	function showObject() {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				window.obj740_SCEventRun_runningActionsCount = window.obj740_SCEventRun_runningActionsCount - 1;

if (window.obj740_SCEventRun_runningActionsCount == 0) {
	obj740_SCEventRun_actionGroup1();
}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			window.obj740_SCEventRun_runningActionsCount = window.obj740_SCEventRun_runningActionsCount - 1;

if (window.obj740_SCEventRun_runningActionsCount == 0) {
	obj740_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj746 
(function(){
	window.obj740_SCEventRun_runningActionsCount = obj740_SCEventRun_runningActionsCount + 1;


	var element = "#obj746";
	if ($(element).hasClass("SCImage")) {
		try {
			const img = $(element + " img")[0];
			img.decode()
				.then(function() { showObject(); })
				.catch(function(encodingError) {
					console.error(encodingError);
					showObject();
				});
		} catch (err) {
			showObject();
		}
	} else {
		showObject();
	}
	
	function showObject() {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				window.obj740_SCEventRun_runningActionsCount = window.obj740_SCEventRun_runningActionsCount - 1;

if (window.obj740_SCEventRun_runningActionsCount == 0) {
	obj740_SCEventRun_actionGroup1();
}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			window.obj740_SCEventRun_runningActionsCount = window.obj740_SCEventRun_runningActionsCount - 1;

if (window.obj740_SCEventRun_runningActionsCount == 0) {
	obj740_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj748 
(function(){
	window.obj740_SCEventRun_runningActionsCount = obj740_SCEventRun_runningActionsCount + 1;


	var element = "#obj748";
	if ($(element).hasClass("SCImage")) {
		try {
			const img = $(element + " img")[0];
			img.decode()
				.then(function() { showObject(); })
				.catch(function(encodingError) {
					console.error(encodingError);
					showObject();
				});
		} catch (err) {
			showObject();
		}
	} else {
		showObject();
	}
	
	function showObject() {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				window.obj740_SCEventRun_runningActionsCount = window.obj740_SCEventRun_runningActionsCount - 1;

if (window.obj740_SCEventRun_runningActionsCount == 0) {
	obj740_SCEventRun_actionGroup1();
}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			window.obj740_SCEventRun_runningActionsCount = window.obj740_SCEventRun_runningActionsCount - 1;

if (window.obj740_SCEventRun_runningActionsCount == 0) {
	obj740_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: move
//	target: obj136 
move_755();
function move_755() {
	window.obj740_SCEventRun_runningActionsCount = obj740_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj136");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-18";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj740_SCEventRun_runningActionsCount = window.obj740_SCEventRun_runningActionsCount - 1;

if (window.obj740_SCEventRun_runningActionsCount == 0) {
	obj740_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj136 
move_756();
function move_756() {
	window.obj740_SCEventRun_runningActionsCount = obj740_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj136");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 0;
	var moveY = 0;
	var isMoveBack = true;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj740_SCEventRun_runningActionsCount = window.obj740_SCEventRun_runningActionsCount - 1;

if (window.obj740_SCEventRun_runningActionsCount == 0) {
	obj740_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj136 
move_757();
function move_757() {
	window.obj740_SCEventRun_runningActionsCount = obj740_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj136");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-18";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj740_SCEventRun_runningActionsCount = window.obj740_SCEventRun_runningActionsCount - 1;

if (window.obj740_SCEventRun_runningActionsCount == 0) {
	obj740_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj136 
move_758();
function move_758() {
	window.obj740_SCEventRun_runningActionsCount = obj740_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj136");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 0;
	var moveY = 0;
	var isMoveBack = true;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj740_SCEventRun_runningActionsCount = window.obj740_SCEventRun_runningActionsCount - 1;

if (window.obj740_SCEventRun_runningActionsCount == 0) {
	obj740_SCEventRun_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1401();
function playAudioFile_1401() {
	window.obj740_SCEventRun_runningActionsCount = obj740_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1401")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1401");
			$("#obj_audio_playSoundFile1401").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj740_SCEventRun_runningActionsCount = window.obj740_SCEventRun_runningActionsCount - 1;

if (window.obj740_SCEventRun_runningActionsCount == 0) {
	obj740_SCEventRun_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj740_SCEventRun_runningActionsCount = window.obj740_SCEventRun_runningActionsCount - 1;

if (window.obj740_SCEventRun_runningActionsCount == 0) {
	obj740_SCEventRun_actionGroup1();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj740_SCEventRun_runningActionsCount = window.obj740_SCEventRun_runningActionsCount - 1;

if (window.obj740_SCEventRun_runningActionsCount == 0) {
	obj740_SCEventRun_actionGroup1();
}
			}, false);
		} else {
			window.obj740_SCEventRun_runningActionsCount = window.obj740_SCEventRun_runningActionsCount - 1;

if (window.obj740_SCEventRun_runningActionsCount == 0) {
	obj740_SCEventRun_actionGroup1();
}
		}
	}

	
	
	
}






//	action: playAudioFile
playAudioFile_1277();
function playAudioFile_1277() {
	window.obj740_SCEventRun_runningActionsCount = obj740_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1277")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1277");
			$("#obj_audio_playSoundFile1277").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj740_SCEventRun_runningActionsCount = window.obj740_SCEventRun_runningActionsCount - 1;

if (window.obj740_SCEventRun_runningActionsCount == 0) {
	obj740_SCEventRun_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj740_SCEventRun_runningActionsCount = window.obj740_SCEventRun_runningActionsCount - 1;

if (window.obj740_SCEventRun_runningActionsCount == 0) {
	obj740_SCEventRun_actionGroup1();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj740_SCEventRun_runningActionsCount = window.obj740_SCEventRun_runningActionsCount - 1;

if (window.obj740_SCEventRun_runningActionsCount == 0) {
	obj740_SCEventRun_actionGroup1();
}
			}, false);
		} else {
			window.obj740_SCEventRun_runningActionsCount = window.obj740_SCEventRun_runningActionsCount - 1;

if (window.obj740_SCEventRun_runningActionsCount == 0) {
	obj740_SCEventRun_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_1275();
function runjs_1275() {
	window.obj740_SCEventRun_runningActionsCount = obj740_SCEventRun_runningActionsCount + 1;


	localStorage.setItem("ready", "false");

	setTimeout(function() {
		window.obj740_SCEventRun_runningActionsCount = window.obj740_SCEventRun_runningActionsCount - 1;

if (window.obj740_SCEventRun_runningActionsCount == 0) {
	obj740_SCEventRun_actionGroup1();
}
	}, 1);
}












};
obj740_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj740_SCEventRun_activeActionGroupIndex = -1;
		$("#obj740").trigger("obj740_SCEventRun_ended");
		
		return;
	}
	window.obj740_SCEventRun_activeActionGroupIndex = 1;
	





























//	action: Run JavaScript
runjs_1276();
function runjs_1276() {
	window.obj740_SCEventRun_runningActionsCount = obj740_SCEventRun_runningActionsCount + 1;


	localStorage.setItem("ready", "true");

	setTimeout(function() {
		window.obj740_SCEventRun_runningActionsCount = window.obj740_SCEventRun_runningActionsCount - 1;

if (window.obj740_SCEventRun_runningActionsCount == 0) {
	obj740_SCEventRun_actionGroup2();
}
	}, 1);
}












};
obj740_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj740_SCEventRun_activeActionGroupIndex = -1;
		$("#obj740").trigger("obj740_SCEventRun_ended");
		
		return;
	}
	window.obj740_SCEventRun_activeActionGroupIndex = 2;
	














//	action: rotate 
//	target: obj130 
rotate_787();
function rotate_787() {
	window.obj740_SCEventRun_runningActionsCount = obj740_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj130";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj130';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '12';
	var rotationSpeed = 0.5;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = false;
	if (isInfinite) { rotate_787_completed(); }

	//TweenMax.to(targetObjectId, 0.5, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_787_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_787_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_787_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_787_completed() {
	setTimeout(function() {
		window.obj740_SCEventRun_runningActionsCount = window.obj740_SCEventRun_runningActionsCount - 1;

if (window.obj740_SCEventRun_runningActionsCount == 0) {
	obj740_SCEventRun_actionGroup3();
}
	}, 1);
}




























};
obj740_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj740_SCEventRun_activeActionGroupIndex = -1;
		$("#obj740").trigger("obj740_SCEventRun_ended");
		
		return;
	}
	window.obj740_SCEventRun_activeActionGroupIndex = 3;
	














//	action: rotate 
//	target: obj130 
rotate_788();
function rotate_788() {
	window.obj740_SCEventRun_runningActionsCount = obj740_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj130";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj130';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '-24';
	var rotationSpeed = 1;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = false;
	if (isInfinite) { rotate_788_completed(); }

	//TweenMax.to(targetObjectId, 1, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_788_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_788_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_788_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_788_completed() {
	setTimeout(function() {
		window.obj740_SCEventRun_runningActionsCount = window.obj740_SCEventRun_runningActionsCount - 1;

if (window.obj740_SCEventRun_runningActionsCount == 0) {
	obj740_SCEventRun_actionGroup4();
}
	}, 1);
}




























};
obj740_SCEventRun_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj740_SCEventRun_activeActionGroupIndex = -1;
		$("#obj740").trigger("obj740_SCEventRun_ended");
		
		return;
	}
	window.obj740_SCEventRun_activeActionGroupIndex = 4;
	












//	action: playAudioFile
playAudioFile_1429();
function playAudioFile_1429() {
	window.obj740_SCEventRun_runningActionsCount = obj740_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1429")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1429");
			$("#obj_audio_playSoundFile1429").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj740_SCEventRun_runningActionsCount = window.obj740_SCEventRun_runningActionsCount - 1;

if (window.obj740_SCEventRun_runningActionsCount == 0) {
	obj740_SCEventRun_actionGroup5();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj740_SCEventRun_runningActionsCount = window.obj740_SCEventRun_runningActionsCount - 1;

if (window.obj740_SCEventRun_runningActionsCount == 0) {
	obj740_SCEventRun_actionGroup5();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj740_SCEventRun_runningActionsCount = window.obj740_SCEventRun_runningActionsCount - 1;

if (window.obj740_SCEventRun_runningActionsCount == 0) {
	obj740_SCEventRun_actionGroup5();
}
			}, false);
		} else {
			window.obj740_SCEventRun_runningActionsCount = window.obj740_SCEventRun_runningActionsCount - 1;

if (window.obj740_SCEventRun_runningActionsCount == 0) {
	obj740_SCEventRun_actionGroup5();
}
		}
	}

	
	
	
}




































};
obj740_SCEventRun_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj740_SCEventRun_activeActionGroupIndex = -1;
		$("#obj740").trigger("obj740_SCEventRun_ended");
		
		return;
	}
	window.obj740_SCEventRun_activeActionGroupIndex = 5;
	


//	action: show 
//	target: obj785 
(function(){
	window.obj740_SCEventRun_runningActionsCount = obj740_SCEventRun_runningActionsCount + 1;


	var element = "#obj785";
	if ($(element).hasClass("SCImage")) {
		try {
			const img = $(element + " img")[0];
			img.decode()
				.then(function() { showObject(); })
				.catch(function(encodingError) {
					console.error(encodingError);
					showObject();
				});
		} catch (err) {
			showObject();
		}
	} else {
		showObject();
	}
	
	function showObject() {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeInUp";
		var animationDurationMs = 800;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				window.obj740_SCEventRun_runningActionsCount = window.obj740_SCEventRun_runningActionsCount - 1;

if (window.obj740_SCEventRun_runningActionsCount == 0) {
	obj740_SCEventRun_actionGroup6();
}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			window.obj740_SCEventRun_runningActionsCount = window.obj740_SCEventRun_runningActionsCount - 1;

if (window.obj740_SCEventRun_runningActionsCount == 0) {
	obj740_SCEventRun_actionGroup6();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();











//	action: rotate 
//	target: obj130 
rotate_789();
function rotate_789() {
	window.obj740_SCEventRun_runningActionsCount = obj740_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj130";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj130';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '12';
	var rotationSpeed = 0.5;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = false;
	if (isInfinite) { rotate_789_completed(); }

	//TweenMax.to(targetObjectId, 0.5, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_789_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_789_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_789_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_789_completed() {
	setTimeout(function() {
		window.obj740_SCEventRun_runningActionsCount = window.obj740_SCEventRun_runningActionsCount - 1;

if (window.obj740_SCEventRun_runningActionsCount == 0) {
	obj740_SCEventRun_actionGroup6();
}
	}, 1);
}




























};
obj740_SCEventRun_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj740_SCEventRun_activeActionGroupIndex = -1;
		$("#obj740").trigger("obj740_SCEventRun_ended");
		
		return;
	}
	window.obj740_SCEventRun_activeActionGroupIndex = 6;
	



//	action: move
//	target: obj785 
move_791();
function move_791() {
	window.obj740_SCEventRun_runningActionsCount = obj740_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj785");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-110";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 700, easing, function() {
		setTimeout(function() {
			window.obj740_SCEventRun_runningActionsCount = window.obj740_SCEventRun_runningActionsCount - 1;

if (window.obj740_SCEventRun_runningActionsCount == 0) {
	obj740_SCEventRun_actionGroup7();
}
		}, 1);
	});
}














//	action: scale
//	target: obj785 
scale_792();
function scale_792() {
	window.obj740_SCEventRun_runningActionsCount = obj740_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj785";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj785';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1.1';
	var scaleYValue = '1.1';
	var effectDuration = '0.7';
	var effectEasing = 'ease';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_792_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_792_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_792_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_792_completed() {
	setTimeout(function() {
		window.obj740_SCEventRun_runningActionsCount = window.obj740_SCEventRun_runningActionsCount - 1;

if (window.obj740_SCEventRun_runningActionsCount == 0) {
	obj740_SCEventRun_actionGroup7();
}
	}, 1);
}
























};
obj740_SCEventRun_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj740_SCEventRun_activeActionGroupIndex = -1;
		$("#obj740").trigger("obj740_SCEventRun_ended");
		
		return;
	}
	window.obj740_SCEventRun_activeActionGroupIndex = 7;
	

//	action: hide
//	target: obj785 
hide_793();
function hide_793() {
	var element = "#obj785";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj740_SCEventRun_runningActionsCount = obj740_SCEventRun_runningActionsCount + 1;

	
	var animationType = "fadeOutUp";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj740_SCEventRun_runningActionsCount = window.obj740_SCEventRun_runningActionsCount - 1;

if (window.obj740_SCEventRun_runningActionsCount == 0) {
	obj740_SCEventRun_actionGroup8();
}
		}, 1);
		return;
	};

	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);

	// var node = $(element)[0];

	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_793(), 100);
		return;
	}

	setTimeout(function() {
		$(element).css("display", "none");
		window.obj740_SCEventRun_runningActionsCount = window.obj740_SCEventRun_runningActionsCount - 1;

if (window.obj740_SCEventRun_runningActionsCount == 0) {
	obj740_SCEventRun_actionGroup8();
}
	}, animationDurationMs);

	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)

}








































};
obj740_SCEventRun_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj740_SCEventRun_activeActionGroupIndex = -1;
		$("#obj740").trigger("obj740_SCEventRun_ended");
		
		return;
	}
	window.obj740_SCEventRun_activeActionGroupIndex = 8;
	










































};
obj763_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj763_SCEventRun_activeActionGroupIndex = -1;
		$("#obj763").trigger("obj763_SCEventRun_ended");
		
		return;
	}
	window.obj763_SCEventRun_activeActionGroupIndex = 0;
	


//	action: show 
//	target: obj744 
(function(){
	window.obj763_SCEventRun_runningActionsCount = obj763_SCEventRun_runningActionsCount + 1;


	var element = "#obj744";
	if ($(element).hasClass("SCImage")) {
		try {
			const img = $(element + " img")[0];
			img.decode()
				.then(function() { showObject(); })
				.catch(function(encodingError) {
					console.error(encodingError);
					showObject();
				});
		} catch (err) {
			showObject();
		}
	} else {
		showObject();
	}
	
	function showObject() {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				window.obj763_SCEventRun_runningActionsCount = window.obj763_SCEventRun_runningActionsCount - 1;

if (window.obj763_SCEventRun_runningActionsCount == 0) {
	obj763_SCEventRun_actionGroup1();
}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			window.obj763_SCEventRun_runningActionsCount = window.obj763_SCEventRun_runningActionsCount - 1;

if (window.obj763_SCEventRun_runningActionsCount == 0) {
	obj763_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj761 
(function(){
	window.obj763_SCEventRun_runningActionsCount = obj763_SCEventRun_runningActionsCount + 1;


	var element = "#obj761";
	if ($(element).hasClass("SCImage")) {
		try {
			const img = $(element + " img")[0];
			img.decode()
				.then(function() { showObject(); })
				.catch(function(encodingError) {
					console.error(encodingError);
					showObject();
				});
		} catch (err) {
			showObject();
		}
	} else {
		showObject();
	}
	
	function showObject() {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				window.obj763_SCEventRun_runningActionsCount = window.obj763_SCEventRun_runningActionsCount - 1;

if (window.obj763_SCEventRun_runningActionsCount == 0) {
	obj763_SCEventRun_actionGroup1();
}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			window.obj763_SCEventRun_runningActionsCount = window.obj763_SCEventRun_runningActionsCount - 1;

if (window.obj763_SCEventRun_runningActionsCount == 0) {
	obj763_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj759 
(function(){
	window.obj763_SCEventRun_runningActionsCount = obj763_SCEventRun_runningActionsCount + 1;


	var element = "#obj759";
	if ($(element).hasClass("SCImage")) {
		try {
			const img = $(element + " img")[0];
			img.decode()
				.then(function() { showObject(); })
				.catch(function(encodingError) {
					console.error(encodingError);
					showObject();
				});
		} catch (err) {
			showObject();
		}
	} else {
		showObject();
	}
	
	function showObject() {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				window.obj763_SCEventRun_runningActionsCount = window.obj763_SCEventRun_runningActionsCount - 1;

if (window.obj763_SCEventRun_runningActionsCount == 0) {
	obj763_SCEventRun_actionGroup1();
}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			window.obj763_SCEventRun_runningActionsCount = window.obj763_SCEventRun_runningActionsCount - 1;

if (window.obj763_SCEventRun_runningActionsCount == 0) {
	obj763_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: move
//	target: obj134 
move_768();
function move_768() {
	window.obj763_SCEventRun_runningActionsCount = obj763_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj134");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-18";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj763_SCEventRun_runningActionsCount = window.obj763_SCEventRun_runningActionsCount - 1;

if (window.obj763_SCEventRun_runningActionsCount == 0) {
	obj763_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj134 
move_769();
function move_769() {
	window.obj763_SCEventRun_runningActionsCount = obj763_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj134");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 0;
	var moveY = 0;
	var isMoveBack = true;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj763_SCEventRun_runningActionsCount = window.obj763_SCEventRun_runningActionsCount - 1;

if (window.obj763_SCEventRun_runningActionsCount == 0) {
	obj763_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj134 
move_770();
function move_770() {
	window.obj763_SCEventRun_runningActionsCount = obj763_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj134");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-18";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj763_SCEventRun_runningActionsCount = window.obj763_SCEventRun_runningActionsCount - 1;

if (window.obj763_SCEventRun_runningActionsCount == 0) {
	obj763_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj134 
move_771();
function move_771() {
	window.obj763_SCEventRun_runningActionsCount = obj763_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj134");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 0;
	var moveY = 0;
	var isMoveBack = true;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj763_SCEventRun_runningActionsCount = window.obj763_SCEventRun_runningActionsCount - 1;

if (window.obj763_SCEventRun_runningActionsCount == 0) {
	obj763_SCEventRun_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1402();
function playAudioFile_1402() {
	window.obj763_SCEventRun_runningActionsCount = obj763_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1402")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1402");
			$("#obj_audio_playSoundFile1402").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj763_SCEventRun_runningActionsCount = window.obj763_SCEventRun_runningActionsCount - 1;

if (window.obj763_SCEventRun_runningActionsCount == 0) {
	obj763_SCEventRun_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj763_SCEventRun_runningActionsCount = window.obj763_SCEventRun_runningActionsCount - 1;

if (window.obj763_SCEventRun_runningActionsCount == 0) {
	obj763_SCEventRun_actionGroup1();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj763_SCEventRun_runningActionsCount = window.obj763_SCEventRun_runningActionsCount - 1;

if (window.obj763_SCEventRun_runningActionsCount == 0) {
	obj763_SCEventRun_actionGroup1();
}
			}, false);
		} else {
			window.obj763_SCEventRun_runningActionsCount = window.obj763_SCEventRun_runningActionsCount - 1;

if (window.obj763_SCEventRun_runningActionsCount == 0) {
	obj763_SCEventRun_actionGroup1();
}
		}
	}

	
	
	
}






//	action: playAudioFile
playAudioFile_1279();
function playAudioFile_1279() {
	window.obj763_SCEventRun_runningActionsCount = obj763_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1279")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1279");
			$("#obj_audio_playSoundFile1279").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj763_SCEventRun_runningActionsCount = window.obj763_SCEventRun_runningActionsCount - 1;

if (window.obj763_SCEventRun_runningActionsCount == 0) {
	obj763_SCEventRun_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj763_SCEventRun_runningActionsCount = window.obj763_SCEventRun_runningActionsCount - 1;

if (window.obj763_SCEventRun_runningActionsCount == 0) {
	obj763_SCEventRun_actionGroup1();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj763_SCEventRun_runningActionsCount = window.obj763_SCEventRun_runningActionsCount - 1;

if (window.obj763_SCEventRun_runningActionsCount == 0) {
	obj763_SCEventRun_actionGroup1();
}
			}, false);
		} else {
			window.obj763_SCEventRun_runningActionsCount = window.obj763_SCEventRun_runningActionsCount - 1;

if (window.obj763_SCEventRun_runningActionsCount == 0) {
	obj763_SCEventRun_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_1278();
function runjs_1278() {
	window.obj763_SCEventRun_runningActionsCount = obj763_SCEventRun_runningActionsCount + 1;


	localStorage.setItem("ready", "false");

	setTimeout(function() {
		window.obj763_SCEventRun_runningActionsCount = window.obj763_SCEventRun_runningActionsCount - 1;

if (window.obj763_SCEventRun_runningActionsCount == 0) {
	obj763_SCEventRun_actionGroup1();
}
	}, 1);
}












};
obj763_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj763_SCEventRun_activeActionGroupIndex = -1;
		$("#obj763").trigger("obj763_SCEventRun_ended");
		
		return;
	}
	window.obj763_SCEventRun_activeActionGroupIndex = 1;
	





























//	action: Run JavaScript
runjs_1280();
function runjs_1280() {
	window.obj763_SCEventRun_runningActionsCount = obj763_SCEventRun_runningActionsCount + 1;


	localStorage.setItem("ready", "true");

	setTimeout(function() {
		window.obj763_SCEventRun_runningActionsCount = window.obj763_SCEventRun_runningActionsCount - 1;

if (window.obj763_SCEventRun_runningActionsCount == 0) {
	obj763_SCEventRun_actionGroup2();
}
	}, 1);
}












};
obj763_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj763_SCEventRun_activeActionGroupIndex = -1;
		$("#obj763").trigger("obj763_SCEventRun_ended");
		
		return;
	}
	window.obj763_SCEventRun_activeActionGroupIndex = 2;
	










































};
obj1365_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1365_onLoad_activeActionGroupIndex = -1;
		$("#obj1365").trigger("obj1365_onLoad_ended");
		
		return;
	}
	window.obj1365_onLoad_activeActionGroupIndex = 0;
	
























//	action: playAudio
//	target: obj1365 
playAudio_1367();
function playAudio_1367() {
	window.obj1365_onLoad_runningActionsCount = obj1365_onLoad_runningActionsCount + 1;

	var myAudio = $("#obj1365")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj1365_onLoad_runningActionsCount = window.obj1365_onLoad_runningActionsCount - 1;

if (window.obj1365_onLoad_runningActionsCount == 0) {
	obj1365_onLoad_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1365_onLoad_runningActionsCount = window.obj1365_onLoad_runningActionsCount - 1;

if (window.obj1365_onLoad_runningActionsCount == 0) {
	obj1365_onLoad_actionGroup1();
}
	}
}

















};
obj1365_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1365_onLoad_activeActionGroupIndex = -1;
		$("#obj1365").trigger("obj1365_onLoad_ended");
		
		return;
	}
	window.obj1365_onLoad_activeActionGroupIndex = 1;
	










































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		





/*
 *
 *   obj124: Event Touch Down
 *
 */

$("#obj124").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj124_onTap_activeActionGroupIndex != -1) return;
var obj124_onTap_runningActionsCount = 0;
var obj124_onTap_loopCount = 0;
obj124_onTap_actionGroup0();
});



/*
 *
 *   obj124: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj124_onLoad_activeActionGroupIndex != -1) return;
var obj124_onLoad_runningActionsCount = 0;
var obj124_onLoad_loopCount = 0;
obj124_onLoad_actionGroup0();
});










/*
 *
 *   obj128: Event Touch Down
 *
 */

$("#obj128").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj128_onTap_activeActionGroupIndex != -1) return;
var obj128_onTap_runningActionsCount = 0;
var obj128_onTap_loopCount = 0;
obj128_onTap_actionGroup0();
});














/*
 *
 *   obj134: Event Touch Down
 *
 */

$("#obj134").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj134_onTap_activeActionGroupIndex != -1) return;
var obj134_onTap_runningActionsCount = 0;
var obj134_onTap_loopCount = 0;
obj134_onTap_actionGroup0();
});














/*
 *
 *   obj136: Event Touch Down
 *
 */

$("#obj136").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj136_onTap_activeActionGroupIndex != -1) return;
var obj136_onTap_runningActionsCount = 0;
var obj136_onTap_loopCount = 0;
obj136_onTap_actionGroup0();
});





























/*
 *
 *   obj130: Event Touch Down
 *
 */

$("#obj130").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj130_onTap_activeActionGroupIndex != -1) return;
var obj130_onTap_runningActionsCount = 0;
var obj130_onTap_loopCount = 0;
obj130_onTap_actionGroup0();
});














































































/*
 *
 *   obj145: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj145_onLoad_activeActionGroupIndex != -1) return;
var obj145_onLoad_runningActionsCount = 0;
var obj145_onLoad_loopCount = 0;
obj145_onLoad_actionGroup0();
});
































































/*
 *
 *   obj740: Event SCEventRun
 *
 */

$("#obj740").bind("SCEventRun", function(event) {
	if (window.obj740_SCEventRun_activeActionGroupIndex != -1) return;
var obj740_SCEventRun_runningActionsCount = 0;
var obj740_SCEventRun_loopCount = 0;
obj740_SCEventRun_actionGroup0();
});








































































































/*
 *
 *   obj763: Event SCEventRun
 *
 */

$("#obj763").bind("SCEventRun", function(event) {
	if (window.obj763_SCEventRun_activeActionGroupIndex != -1) return;
var obj763_SCEventRun_runningActionsCount = 0;
var obj763_SCEventRun_loopCount = 0;
obj763_SCEventRun_actionGroup0();
});









/*
 *
 *   obj1365: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1365_onLoad_activeActionGroupIndex != -1) return;
var obj1365_onLoad_runningActionsCount = 0;
var obj1365_onLoad_loopCount = 0;
obj1365_onLoad_actionGroup0();
});






		
		
		/*
		 *
	 	 *  Page is ready to be played
	 	 *
	 	 */
		XPUB.ready();
	 }
});

$(window).on(PubCoder.Events.PagePlay, function() {
	$(window).trigger(PubCoder.Events.PageReady);
	
$("#obj124").trigger('SCEventShow');
$("#obj128").trigger('SCEventShow');
$("#obj134").trigger('SCEventShow');
$("#obj136").trigger('SCEventShow');
$("#obj126").trigger('SCEventShow');
$("#obj130").trigger('SCEventShow');
$("#obj138").trigger('SCEventShow');
$("#obj140").trigger('SCEventShow');
$("#obj142").trigger('SCEventShow');
$("#obj145").trigger('SCEventShow');
$("#obj1365").trigger('SCEventShow');
	localStorage.setItem("tapped", "0");
localStorage.setItem("tapped", "0");
localStorage.setItem("ready", "false");
});