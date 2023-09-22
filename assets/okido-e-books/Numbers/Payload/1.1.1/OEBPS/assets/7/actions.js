pubcoder.projectID = pubcoder.projectID || "D928F63EC5FACE4D86169F491C787A52";
pubcoder.project.id = pubcoder.project.id || "D928F63EC5FACE4D86169F491C787A52";
pubcoder.project.title = pubcoder.project.title || "OkidoNumbers";
pubcoder.page.id = pubcoder.page.id || 9;
pubcoder.page.title = pubcoder.page.title || "7";
pubcoder.page.number = pubcoder.page.number || 7;
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
var obj173_onLoad_activeActionGroupIndex = -1;
var obj173_onLoad_runningActionsCount = 0;
var obj173_onLoad_loopCount = 0;
var obj176_onTap_activeActionGroupIndex = -1;
var obj176_onTap_runningActionsCount = 0;
var obj176_onTap_loopCount = 0;
var obj178_onTap_activeActionGroupIndex = -1;
var obj178_onTap_runningActionsCount = 0;
var obj178_onTap_loopCount = 0;
var obj180_onTap_activeActionGroupIndex = -1;
var obj180_onTap_runningActionsCount = 0;
var obj180_onTap_loopCount = 0;
var obj182_onTap_activeActionGroupIndex = -1;
var obj182_onTap_runningActionsCount = 0;
var obj182_onTap_loopCount = 0;
var obj184_onTap_activeActionGroupIndex = -1;
var obj184_onTap_runningActionsCount = 0;
var obj184_onTap_loopCount = 0;
var obj901_onTap_activeActionGroupIndex = -1;
var obj901_onTap_runningActionsCount = 0;
var obj901_onTap_loopCount = 0;
var obj939_SCEventRun_activeActionGroupIndex = -1;
var obj939_SCEventRun_runningActionsCount = 0;
var obj939_SCEventRun_loopCount = 0;
var obj974_SCEventRun_activeActionGroupIndex = -1;
var obj974_SCEventRun_runningActionsCount = 0;
var obj974_SCEventRun_loopCount = 0;
var obj1374_onLoad_activeActionGroupIndex = -1;
var obj1374_onLoad_runningActionsCount = 0;
var obj1374_onLoad_loopCount = 0;

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
		
obj173_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj173_onLoad_activeActionGroupIndex = -1;
		$("#obj173").trigger("obj173_onLoad_ended");
		
		return;
	}
	window.obj173_onLoad_activeActionGroupIndex = 0;
	


//	action: show 
//	target: obj897 
(function(){
	window.obj173_onLoad_runningActionsCount = obj173_onLoad_runningActionsCount + 1;


	var element = "#obj897";
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
				window.obj173_onLoad_runningActionsCount = window.obj173_onLoad_runningActionsCount - 1;

if (window.obj173_onLoad_runningActionsCount == 0) {
	obj173_onLoad_actionGroup1();
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
			window.obj173_onLoad_runningActionsCount = window.obj173_onLoad_runningActionsCount - 1;

if (window.obj173_onLoad_runningActionsCount == 0) {
	obj173_onLoad_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj895 
(function(){
	window.obj173_onLoad_runningActionsCount = obj173_onLoad_runningActionsCount + 1;


	var element = "#obj895";
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
				window.obj173_onLoad_runningActionsCount = window.obj173_onLoad_runningActionsCount - 1;

if (window.obj173_onLoad_runningActionsCount == 0) {
	obj173_onLoad_actionGroup1();
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
			window.obj173_onLoad_runningActionsCount = window.obj173_onLoad_runningActionsCount - 1;

if (window.obj173_onLoad_runningActionsCount == 0) {
	obj173_onLoad_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj899 
(function(){
	window.obj173_onLoad_runningActionsCount = obj173_onLoad_runningActionsCount + 1;


	var element = "#obj899";
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
				window.obj173_onLoad_runningActionsCount = window.obj173_onLoad_runningActionsCount - 1;

if (window.obj173_onLoad_runningActionsCount == 0) {
	obj173_onLoad_actionGroup1();
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
			window.obj173_onLoad_runningActionsCount = window.obj173_onLoad_runningActionsCount - 1;

if (window.obj173_onLoad_runningActionsCount == 0) {
	obj173_onLoad_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: move
//	target: obj901 
move_907();
function move_907() {
	window.obj173_onLoad_runningActionsCount = obj173_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj901");
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
			window.obj173_onLoad_runningActionsCount = window.obj173_onLoad_runningActionsCount - 1;

if (window.obj173_onLoad_runningActionsCount == 0) {
	obj173_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj901 
move_908();
function move_908() {
	window.obj173_onLoad_runningActionsCount = obj173_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj901");
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
			window.obj173_onLoad_runningActionsCount = window.obj173_onLoad_runningActionsCount - 1;

if (window.obj173_onLoad_runningActionsCount == 0) {
	obj173_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj901 
move_909();
function move_909() {
	window.obj173_onLoad_runningActionsCount = obj173_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj901");
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
			window.obj173_onLoad_runningActionsCount = window.obj173_onLoad_runningActionsCount - 1;

if (window.obj173_onLoad_runningActionsCount == 0) {
	obj173_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj901 
move_910();
function move_910() {
	window.obj173_onLoad_runningActionsCount = obj173_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj901");
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
			window.obj173_onLoad_runningActionsCount = window.obj173_onLoad_runningActionsCount - 1;

if (window.obj173_onLoad_runningActionsCount == 0) {
	obj173_onLoad_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1409();
function playAudioFile_1409() {
	window.obj173_onLoad_runningActionsCount = obj173_onLoad_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1409")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1409");
			$("#obj_audio_playSoundFile1409").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj173_onLoad_runningActionsCount = window.obj173_onLoad_runningActionsCount - 1;

if (window.obj173_onLoad_runningActionsCount == 0) {
	obj173_onLoad_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj173_onLoad_runningActionsCount = window.obj173_onLoad_runningActionsCount - 1;

if (window.obj173_onLoad_runningActionsCount == 0) {
	obj173_onLoad_actionGroup1();
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
				window.obj173_onLoad_runningActionsCount = window.obj173_onLoad_runningActionsCount - 1;

if (window.obj173_onLoad_runningActionsCount == 0) {
	obj173_onLoad_actionGroup1();
}
			}, false);
		} else {
			window.obj173_onLoad_runningActionsCount = window.obj173_onLoad_runningActionsCount - 1;

if (window.obj173_onLoad_runningActionsCount == 0) {
	obj173_onLoad_actionGroup1();
}
		}
	}

	
	
	
}






//	action: playAudioFile
playAudioFile_1335();
function playAudioFile_1335() {
	window.obj173_onLoad_runningActionsCount = obj173_onLoad_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1335")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1335");
			$("#obj_audio_playSoundFile1335").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj173_onLoad_runningActionsCount = window.obj173_onLoad_runningActionsCount - 1;

if (window.obj173_onLoad_runningActionsCount == 0) {
	obj173_onLoad_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj173_onLoad_runningActionsCount = window.obj173_onLoad_runningActionsCount - 1;

if (window.obj173_onLoad_runningActionsCount == 0) {
	obj173_onLoad_actionGroup1();
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
				window.obj173_onLoad_runningActionsCount = window.obj173_onLoad_runningActionsCount - 1;

if (window.obj173_onLoad_runningActionsCount == 0) {
	obj173_onLoad_actionGroup1();
}
			}, false);
		} else {
			window.obj173_onLoad_runningActionsCount = window.obj173_onLoad_runningActionsCount - 1;

if (window.obj173_onLoad_runningActionsCount == 0) {
	obj173_onLoad_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_1333();
function runjs_1333() {
	window.obj173_onLoad_runningActionsCount = obj173_onLoad_runningActionsCount + 1;


	localStorage.setItem("ready", "false");

	setTimeout(function() {
		window.obj173_onLoad_runningActionsCount = window.obj173_onLoad_runningActionsCount - 1;

if (window.obj173_onLoad_runningActionsCount == 0) {
	obj173_onLoad_actionGroup1();
}
	}, 1);
}












};
obj173_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj173_onLoad_activeActionGroupIndex = -1;
		$("#obj173").trigger("obj173_onLoad_ended");
		
		return;
	}
	window.obj173_onLoad_activeActionGroupIndex = 1;
	





























//	action: Run JavaScript
runjs_1334();
function runjs_1334() {
	window.obj173_onLoad_runningActionsCount = obj173_onLoad_runningActionsCount + 1;


	localStorage.setItem("ready", "true");

	setTimeout(function() {
		window.obj173_onLoad_runningActionsCount = window.obj173_onLoad_runningActionsCount - 1;

if (window.obj173_onLoad_runningActionsCount == 0) {
	obj173_onLoad_actionGroup2();
}
	}, 1);
}












};
obj173_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj173_onLoad_activeActionGroupIndex = -1;
		$("#obj173").trigger("obj173_onLoad_ended");
		
		return;
	}
	window.obj173_onLoad_activeActionGroupIndex = 2;
	
















//	action: wait
wait_976();
function wait_976() {
	window.obj173_onLoad_runningActionsCount = obj173_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj173_onLoad_runningActionsCount = window.obj173_onLoad_runningActionsCount - 1;

if (window.obj173_onLoad_runningActionsCount == 0) {
	obj173_onLoad_actionGroup3();
}
	}, 5000);
}

























};
obj173_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj173_onLoad_activeActionGroupIndex = -1;
		$("#obj173").trigger("obj173_onLoad_ended");
		
		return;
	}
	window.obj173_onLoad_activeActionGroupIndex = 3;
	





























//	action: Run JavaScript
runjs_977();
function runjs_977() {
	window.obj173_onLoad_runningActionsCount = obj173_onLoad_runningActionsCount + 1;


	if(localStorage.getItem("finger") === "true")
{
    $("#obj974").trigger(PubCoder.Events.Run);
}

	setTimeout(function() {
		window.obj173_onLoad_runningActionsCount = window.obj173_onLoad_runningActionsCount - 1;

if (window.obj173_onLoad_runningActionsCount == 0) {
	obj173_onLoad_actionGroup4();
}
	}, 1);
}












};
obj173_onLoad_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj173_onLoad_activeActionGroupIndex = -1;
		$("#obj173").trigger("obj173_onLoad_ended");
		
		return;
	}
	window.obj173_onLoad_activeActionGroupIndex = 4;
	










































};
obj176_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj176_onTap_activeActionGroupIndex = -1;
		$("#obj176").trigger("obj176_onTap_ended");
		
		return;
	}
	window.obj176_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	target: obj875 
(function(){
	window.obj176_onTap_runningActionsCount = obj176_onTap_runningActionsCount + 1;


	var element = "#obj875";
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
				window.obj176_onTap_runningActionsCount = window.obj176_onTap_runningActionsCount - 1;

if (window.obj176_onTap_runningActionsCount == 0) {
	obj176_onTap_actionGroup1();
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
			window.obj176_onTap_runningActionsCount = window.obj176_onTap_runningActionsCount - 1;

if (window.obj176_onTap_runningActionsCount == 0) {
	obj176_onTap_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();









//	action: playAudioFile
playAudioFile_1446();
function playAudioFile_1446() {
	window.obj176_onTap_runningActionsCount = obj176_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1446")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1446");
			$("#obj_audio_playSoundFile1446").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj176_onTap_runningActionsCount = window.obj176_onTap_runningActionsCount - 1;

if (window.obj176_onTap_runningActionsCount == 0) {
	obj176_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj176_onTap_runningActionsCount = window.obj176_onTap_runningActionsCount - 1;

if (window.obj176_onTap_runningActionsCount == 0) {
	obj176_onTap_actionGroup1();
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
				window.obj176_onTap_runningActionsCount = window.obj176_onTap_runningActionsCount - 1;

if (window.obj176_onTap_runningActionsCount == 0) {
	obj176_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj176_onTap_runningActionsCount = window.obj176_onTap_runningActionsCount - 1;

if (window.obj176_onTap_runningActionsCount == 0) {
	obj176_onTap_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_934();
function runjs_934() {
	window.obj176_onTap_runningActionsCount = obj176_onTap_runningActionsCount + 1;


	localStorage.setItem("tapped", "1");
localStorage.setItem("finger", "false");
$("#obj978").fadeOut(1000);

	setTimeout(function() {
		window.obj176_onTap_runningActionsCount = window.obj176_onTap_runningActionsCount - 1;

if (window.obj176_onTap_runningActionsCount == 0) {
	obj176_onTap_actionGroup1();
}
	}, 1);
}












};
obj176_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj176_onTap_activeActionGroupIndex = -1;
		$("#obj176").trigger("obj176_onTap_ended");
		
		return;
	}
	window.obj176_onTap_activeActionGroupIndex = 1;
	










































};
obj178_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj178_onTap_activeActionGroupIndex = -1;
		$("#obj178").trigger("obj178_onTap_ended");
		
		return;
	}
	window.obj178_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_1447();
function playAudioFile_1447() {
	window.obj178_onTap_runningActionsCount = obj178_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1447")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1447");
			$("#obj_audio_playSoundFile1447").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj178_onTap_runningActionsCount = window.obj178_onTap_runningActionsCount - 1;

if (window.obj178_onTap_runningActionsCount == 0) {
	obj178_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj178_onTap_runningActionsCount = window.obj178_onTap_runningActionsCount - 1;

if (window.obj178_onTap_runningActionsCount == 0) {
	obj178_onTap_actionGroup1();
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
				window.obj178_onTap_runningActionsCount = window.obj178_onTap_runningActionsCount - 1;

if (window.obj178_onTap_runningActionsCount == 0) {
	obj178_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj178_onTap_runningActionsCount = window.obj178_onTap_runningActionsCount - 1;

if (window.obj178_onTap_runningActionsCount == 0) {
	obj178_onTap_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_935();
function runjs_935() {
	window.obj178_onTap_runningActionsCount = obj178_onTap_runningActionsCount + 1;


	if(localStorage.getItem("tapped") === "1")
{
    $("#obj877").fadeIn(1000);
    localStorage.setItem("tapped", "2");
    localStorage.setItem("finger", "false");
    $("#obj978").fadeOut(1000);
}

	setTimeout(function() {
		window.obj178_onTap_runningActionsCount = window.obj178_onTap_runningActionsCount - 1;

if (window.obj178_onTap_runningActionsCount == 0) {
	obj178_onTap_actionGroup1();
}
	}, 1);
}












};
obj178_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj178_onTap_activeActionGroupIndex = -1;
		$("#obj178").trigger("obj178_onTap_ended");
		
		return;
	}
	window.obj178_onTap_activeActionGroupIndex = 1;
	










































};
obj180_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj180_onTap_activeActionGroupIndex = -1;
		$("#obj180").trigger("obj180_onTap_ended");
		
		return;
	}
	window.obj180_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_1448();
function playAudioFile_1448() {
	window.obj180_onTap_runningActionsCount = obj180_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1448")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1448");
			$("#obj_audio_playSoundFile1448").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj180_onTap_runningActionsCount = window.obj180_onTap_runningActionsCount - 1;

if (window.obj180_onTap_runningActionsCount == 0) {
	obj180_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj180_onTap_runningActionsCount = window.obj180_onTap_runningActionsCount - 1;

if (window.obj180_onTap_runningActionsCount == 0) {
	obj180_onTap_actionGroup1();
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
				window.obj180_onTap_runningActionsCount = window.obj180_onTap_runningActionsCount - 1;

if (window.obj180_onTap_runningActionsCount == 0) {
	obj180_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj180_onTap_runningActionsCount = window.obj180_onTap_runningActionsCount - 1;

if (window.obj180_onTap_runningActionsCount == 0) {
	obj180_onTap_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_936();
function runjs_936() {
	window.obj180_onTap_runningActionsCount = obj180_onTap_runningActionsCount + 1;


	if(localStorage.getItem("tapped") === "2")
{
    $("#obj878").fadeIn(1000);
    localStorage.setItem("tapped", "3");
    localStorage.setItem("finger", "false");
    $("#obj978").fadeOut(1000);
}

	setTimeout(function() {
		window.obj180_onTap_runningActionsCount = window.obj180_onTap_runningActionsCount - 1;

if (window.obj180_onTap_runningActionsCount == 0) {
	obj180_onTap_actionGroup1();
}
	}, 1);
}












};
obj180_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj180_onTap_activeActionGroupIndex = -1;
		$("#obj180").trigger("obj180_onTap_ended");
		
		return;
	}
	window.obj180_onTap_activeActionGroupIndex = 1;
	










































};
obj182_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj182_onTap_activeActionGroupIndex = -1;
		$("#obj182").trigger("obj182_onTap_ended");
		
		return;
	}
	window.obj182_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_1449();
function playAudioFile_1449() {
	window.obj182_onTap_runningActionsCount = obj182_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1449")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1449");
			$("#obj_audio_playSoundFile1449").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj182_onTap_runningActionsCount = window.obj182_onTap_runningActionsCount - 1;

if (window.obj182_onTap_runningActionsCount == 0) {
	obj182_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj182_onTap_runningActionsCount = window.obj182_onTap_runningActionsCount - 1;

if (window.obj182_onTap_runningActionsCount == 0) {
	obj182_onTap_actionGroup1();
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
				window.obj182_onTap_runningActionsCount = window.obj182_onTap_runningActionsCount - 1;

if (window.obj182_onTap_runningActionsCount == 0) {
	obj182_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj182_onTap_runningActionsCount = window.obj182_onTap_runningActionsCount - 1;

if (window.obj182_onTap_runningActionsCount == 0) {
	obj182_onTap_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_937();
function runjs_937() {
	window.obj182_onTap_runningActionsCount = obj182_onTap_runningActionsCount + 1;


	if(localStorage.getItem("tapped") === "3")
{
    $("#obj879").fadeIn(1000);
    localStorage.setItem("tapped", "4");
    localStorage.setItem("finger", "false");
    $("#obj978").fadeOut(1000);
}

	setTimeout(function() {
		window.obj182_onTap_runningActionsCount = window.obj182_onTap_runningActionsCount - 1;

if (window.obj182_onTap_runningActionsCount == 0) {
	obj182_onTap_actionGroup1();
}
	}, 1);
}












};
obj182_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj182_onTap_activeActionGroupIndex = -1;
		$("#obj182").trigger("obj182_onTap_ended");
		
		return;
	}
	window.obj182_onTap_activeActionGroupIndex = 1;
	










































};
obj184_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj184_onTap_activeActionGroupIndex = -1;
		$("#obj184").trigger("obj184_onTap_ended");
		
		return;
	}
	window.obj184_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_1450();
function playAudioFile_1450() {
	window.obj184_onTap_runningActionsCount = obj184_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1450")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1450");
			$("#obj_audio_playSoundFile1450").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj184_onTap_runningActionsCount = window.obj184_onTap_runningActionsCount - 1;

if (window.obj184_onTap_runningActionsCount == 0) {
	obj184_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj184_onTap_runningActionsCount = window.obj184_onTap_runningActionsCount - 1;

if (window.obj184_onTap_runningActionsCount == 0) {
	obj184_onTap_actionGroup1();
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
				window.obj184_onTap_runningActionsCount = window.obj184_onTap_runningActionsCount - 1;

if (window.obj184_onTap_runningActionsCount == 0) {
	obj184_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj184_onTap_runningActionsCount = window.obj184_onTap_runningActionsCount - 1;

if (window.obj184_onTap_runningActionsCount == 0) {
	obj184_onTap_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_938();
function runjs_938() {
	window.obj184_onTap_runningActionsCount = obj184_onTap_runningActionsCount + 1;


	if(localStorage.getItem("tapped") === "4" && localStorage.getItem("ready") === "true")
{
    //run action list
    $("#obj939").trigger(PubCoder.Events.Run);
    localStorage.setItem("tapped", "5");
    localStorage.setItem("finger", "false");
    $("#obj978").fadeOut(1000);
}

	setTimeout(function() {
		window.obj184_onTap_runningActionsCount = window.obj184_onTap_runningActionsCount - 1;

if (window.obj184_onTap_runningActionsCount == 0) {
	obj184_onTap_actionGroup1();
}
	}, 1);
}












};
obj184_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj184_onTap_activeActionGroupIndex = -1;
		$("#obj184").trigger("obj184_onTap_ended");
		
		return;
	}
	window.obj184_onTap_activeActionGroupIndex = 1;
	










































};
obj901_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj901_onTap_activeActionGroupIndex = -1;
		$("#obj901").trigger("obj901_onTap_ended");
		
		return;
	}
	window.obj901_onTap_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj901 
move_1331();
function move_1331() {
	window.obj901_onTap_runningActionsCount = obj901_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj901");
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
			window.obj901_onTap_runningActionsCount = window.obj901_onTap_runningActionsCount - 1;

if (window.obj901_onTap_runningActionsCount == 0) {
	obj901_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj901 
move_1332();
function move_1332() {
	window.obj901_onTap_runningActionsCount = obj901_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj901");
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
			window.obj901_onTap_runningActionsCount = window.obj901_onTap_runningActionsCount - 1;

if (window.obj901_onTap_runningActionsCount == 0) {
	obj901_onTap_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1394();
function playAudioFile_1394() {
	window.obj901_onTap_runningActionsCount = obj901_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1394")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1394");
			$("#obj_audio_playSoundFile1394").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj901_onTap_runningActionsCount = window.obj901_onTap_runningActionsCount - 1;

if (window.obj901_onTap_runningActionsCount == 0) {
	obj901_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj901_onTap_runningActionsCount = window.obj901_onTap_runningActionsCount - 1;

if (window.obj901_onTap_runningActionsCount == 0) {
	obj901_onTap_actionGroup1();
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
				window.obj901_onTap_runningActionsCount = window.obj901_onTap_runningActionsCount - 1;

if (window.obj901_onTap_runningActionsCount == 0) {
	obj901_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj901_onTap_runningActionsCount = window.obj901_onTap_runningActionsCount - 1;

if (window.obj901_onTap_runningActionsCount == 0) {
	obj901_onTap_actionGroup1();
}
		}
	}

	
	
	
}




































};
obj901_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj901_onTap_activeActionGroupIndex = -1;
		$("#obj901").trigger("obj901_onTap_ended");
		
		return;
	}
	window.obj901_onTap_activeActionGroupIndex = 1;
	










































};
obj939_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj939_SCEventRun_activeActionGroupIndex = -1;
		$("#obj939").trigger("obj939_SCEventRun_ended");
		
		return;
	}
	window.obj939_SCEventRun_activeActionGroupIndex = 0;
	


//	action: show 
//	target: obj880 
(function(){
	window.obj939_SCEventRun_runningActionsCount = obj939_SCEventRun_runningActionsCount + 1;


	var element = "#obj880";
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
				window.obj939_SCEventRun_runningActionsCount = window.obj939_SCEventRun_runningActionsCount - 1;

if (window.obj939_SCEventRun_runningActionsCount == 0) {
	obj939_SCEventRun_actionGroup1();
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
			window.obj939_SCEventRun_runningActionsCount = window.obj939_SCEventRun_runningActionsCount - 1;

if (window.obj939_SCEventRun_runningActionsCount == 0) {
	obj939_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj918 
(function(){
	window.obj939_SCEventRun_runningActionsCount = obj939_SCEventRun_runningActionsCount + 1;


	var element = "#obj918";
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
				window.obj939_SCEventRun_runningActionsCount = window.obj939_SCEventRun_runningActionsCount - 1;

if (window.obj939_SCEventRun_runningActionsCount == 0) {
	obj939_SCEventRun_actionGroup1();
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
			window.obj939_SCEventRun_runningActionsCount = window.obj939_SCEventRun_runningActionsCount - 1;

if (window.obj939_SCEventRun_runningActionsCount == 0) {
	obj939_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj920 
(function(){
	window.obj939_SCEventRun_runningActionsCount = obj939_SCEventRun_runningActionsCount + 1;


	var element = "#obj920";
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
				window.obj939_SCEventRun_runningActionsCount = window.obj939_SCEventRun_runningActionsCount - 1;

if (window.obj939_SCEventRun_runningActionsCount == 0) {
	obj939_SCEventRun_actionGroup1();
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
			window.obj939_SCEventRun_runningActionsCount = window.obj939_SCEventRun_runningActionsCount - 1;

if (window.obj939_SCEventRun_runningActionsCount == 0) {
	obj939_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj916 
(function(){
	window.obj939_SCEventRun_runningActionsCount = obj939_SCEventRun_runningActionsCount + 1;


	var element = "#obj916";
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
				window.obj939_SCEventRun_runningActionsCount = window.obj939_SCEventRun_runningActionsCount - 1;

if (window.obj939_SCEventRun_runningActionsCount == 0) {
	obj939_SCEventRun_actionGroup1();
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
			window.obj939_SCEventRun_runningActionsCount = window.obj939_SCEventRun_runningActionsCount - 1;

if (window.obj939_SCEventRun_runningActionsCount == 0) {
	obj939_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj881 
(function(){
	window.obj939_SCEventRun_runningActionsCount = obj939_SCEventRun_runningActionsCount + 1;


	var element = "#obj881";
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
				window.obj939_SCEventRun_runningActionsCount = window.obj939_SCEventRun_runningActionsCount - 1;

if (window.obj939_SCEventRun_runningActionsCount == 0) {
	obj939_SCEventRun_actionGroup1();
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
			window.obj939_SCEventRun_runningActionsCount = window.obj939_SCEventRun_runningActionsCount - 1;

if (window.obj939_SCEventRun_runningActionsCount == 0) {
	obj939_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj882 
(function(){
	window.obj939_SCEventRun_runningActionsCount = obj939_SCEventRun_runningActionsCount + 1;


	var element = "#obj882";
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
				window.obj939_SCEventRun_runningActionsCount = window.obj939_SCEventRun_runningActionsCount - 1;

if (window.obj939_SCEventRun_runningActionsCount == 0) {
	obj939_SCEventRun_actionGroup1();
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
			window.obj939_SCEventRun_runningActionsCount = window.obj939_SCEventRun_runningActionsCount - 1;

if (window.obj939_SCEventRun_runningActionsCount == 0) {
	obj939_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj883 
(function(){
	window.obj939_SCEventRun_runningActionsCount = obj939_SCEventRun_runningActionsCount + 1;


	var element = "#obj883";
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
				window.obj939_SCEventRun_runningActionsCount = window.obj939_SCEventRun_runningActionsCount - 1;

if (window.obj939_SCEventRun_runningActionsCount == 0) {
	obj939_SCEventRun_actionGroup1();
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
			window.obj939_SCEventRun_runningActionsCount = window.obj939_SCEventRun_runningActionsCount - 1;

if (window.obj939_SCEventRun_runningActionsCount == 0) {
	obj939_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj884 
(function(){
	window.obj939_SCEventRun_runningActionsCount = obj939_SCEventRun_runningActionsCount + 1;


	var element = "#obj884";
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
				window.obj939_SCEventRun_runningActionsCount = window.obj939_SCEventRun_runningActionsCount - 1;

if (window.obj939_SCEventRun_runningActionsCount == 0) {
	obj939_SCEventRun_actionGroup1();
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
			window.obj939_SCEventRun_runningActionsCount = window.obj939_SCEventRun_runningActionsCount - 1;

if (window.obj939_SCEventRun_runningActionsCount == 0) {
	obj939_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj876 
(function(){
	window.obj939_SCEventRun_runningActionsCount = obj939_SCEventRun_runningActionsCount + 1;


	var element = "#obj876";
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
				window.obj939_SCEventRun_runningActionsCount = window.obj939_SCEventRun_runningActionsCount - 1;

if (window.obj939_SCEventRun_runningActionsCount == 0) {
	obj939_SCEventRun_actionGroup1();
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
			window.obj939_SCEventRun_runningActionsCount = window.obj939_SCEventRun_runningActionsCount - 1;

if (window.obj939_SCEventRun_runningActionsCount == 0) {
	obj939_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: move
//	target: obj901 
move_945();
function move_945() {
	window.obj939_SCEventRun_runningActionsCount = obj939_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj901");
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
			window.obj939_SCEventRun_runningActionsCount = window.obj939_SCEventRun_runningActionsCount - 1;

if (window.obj939_SCEventRun_runningActionsCount == 0) {
	obj939_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj901 
move_946();
function move_946() {
	window.obj939_SCEventRun_runningActionsCount = obj939_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj901");
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
			window.obj939_SCEventRun_runningActionsCount = window.obj939_SCEventRun_runningActionsCount - 1;

if (window.obj939_SCEventRun_runningActionsCount == 0) {
	obj939_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj901 
move_947();
function move_947() {
	window.obj939_SCEventRun_runningActionsCount = obj939_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj901");
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
			window.obj939_SCEventRun_runningActionsCount = window.obj939_SCEventRun_runningActionsCount - 1;

if (window.obj939_SCEventRun_runningActionsCount == 0) {
	obj939_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj901 
move_948();
function move_948() {
	window.obj939_SCEventRun_runningActionsCount = obj939_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj901");
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
			window.obj939_SCEventRun_runningActionsCount = window.obj939_SCEventRun_runningActionsCount - 1;

if (window.obj939_SCEventRun_runningActionsCount == 0) {
	obj939_SCEventRun_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1410();
function playAudioFile_1410() {
	window.obj939_SCEventRun_runningActionsCount = obj939_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1410")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1410");
			$("#obj_audio_playSoundFile1410").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj939_SCEventRun_runningActionsCount = window.obj939_SCEventRun_runningActionsCount - 1;

if (window.obj939_SCEventRun_runningActionsCount == 0) {
	obj939_SCEventRun_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj939_SCEventRun_runningActionsCount = window.obj939_SCEventRun_runningActionsCount - 1;

if (window.obj939_SCEventRun_runningActionsCount == 0) {
	obj939_SCEventRun_actionGroup1();
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
				window.obj939_SCEventRun_runningActionsCount = window.obj939_SCEventRun_runningActionsCount - 1;

if (window.obj939_SCEventRun_runningActionsCount == 0) {
	obj939_SCEventRun_actionGroup1();
}
			}, false);
		} else {
			window.obj939_SCEventRun_runningActionsCount = window.obj939_SCEventRun_runningActionsCount - 1;

if (window.obj939_SCEventRun_runningActionsCount == 0) {
	obj939_SCEventRun_actionGroup1();
}
		}
	}

	
	
	
}






//	action: playAudioFile
playAudioFile_1338();
function playAudioFile_1338() {
	window.obj939_SCEventRun_runningActionsCount = obj939_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1338")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1338");
			$("#obj_audio_playSoundFile1338").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj939_SCEventRun_runningActionsCount = window.obj939_SCEventRun_runningActionsCount - 1;

if (window.obj939_SCEventRun_runningActionsCount == 0) {
	obj939_SCEventRun_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj939_SCEventRun_runningActionsCount = window.obj939_SCEventRun_runningActionsCount - 1;

if (window.obj939_SCEventRun_runningActionsCount == 0) {
	obj939_SCEventRun_actionGroup1();
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
				window.obj939_SCEventRun_runningActionsCount = window.obj939_SCEventRun_runningActionsCount - 1;

if (window.obj939_SCEventRun_runningActionsCount == 0) {
	obj939_SCEventRun_actionGroup1();
}
			}, false);
		} else {
			window.obj939_SCEventRun_runningActionsCount = window.obj939_SCEventRun_runningActionsCount - 1;

if (window.obj939_SCEventRun_runningActionsCount == 0) {
	obj939_SCEventRun_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_1336();
function runjs_1336() {
	window.obj939_SCEventRun_runningActionsCount = obj939_SCEventRun_runningActionsCount + 1;


	localStorage.setItem("ready", "false");

	setTimeout(function() {
		window.obj939_SCEventRun_runningActionsCount = window.obj939_SCEventRun_runningActionsCount - 1;

if (window.obj939_SCEventRun_runningActionsCount == 0) {
	obj939_SCEventRun_actionGroup1();
}
	}, 1);
}












};
obj939_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj939_SCEventRun_activeActionGroupIndex = -1;
		$("#obj939").trigger("obj939_SCEventRun_ended");
		
		return;
	}
	window.obj939_SCEventRun_activeActionGroupIndex = 1;
	





























//	action: Run JavaScript
runjs_1337();
function runjs_1337() {
	window.obj939_SCEventRun_runningActionsCount = obj939_SCEventRun_runningActionsCount + 1;


	localStorage.setItem("ready", "true");

	setTimeout(function() {
		window.obj939_SCEventRun_runningActionsCount = window.obj939_SCEventRun_runningActionsCount - 1;

if (window.obj939_SCEventRun_runningActionsCount == 0) {
	obj939_SCEventRun_actionGroup2();
}
	}, 1);
}












};
obj939_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj939_SCEventRun_activeActionGroupIndex = -1;
		$("#obj939").trigger("obj939_SCEventRun_ended");
		
		return;
	}
	window.obj939_SCEventRun_activeActionGroupIndex = 2;
	










































};
obj974_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj974_SCEventRun_activeActionGroupIndex = -1;
		$("#obj974").trigger("obj974_SCEventRun_ended");
		
		return;
	}
	window.obj974_SCEventRun_activeActionGroupIndex = 0;
	


//	action: show 
//	target: obj978 
(function(){
	window.obj974_SCEventRun_runningActionsCount = obj974_SCEventRun_runningActionsCount + 1;


	var element = "#obj978";
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
				window.obj974_SCEventRun_runningActionsCount = window.obj974_SCEventRun_runningActionsCount - 1;

if (window.obj974_SCEventRun_runningActionsCount == 0) {
	obj974_SCEventRun_actionGroup1();
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
			window.obj974_SCEventRun_runningActionsCount = window.obj974_SCEventRun_runningActionsCount - 1;

if (window.obj974_SCEventRun_runningActionsCount == 0) {
	obj974_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();







































};
obj974_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj974_SCEventRun_activeActionGroupIndex = -1;
		$("#obj974").trigger("obj974_SCEventRun_ended");
		
		return;
	}
	window.obj974_SCEventRun_activeActionGroupIndex = 1;
	


















//	action: scale
//	target: obj978 
scale_981();
function scale_981() {
	window.obj974_SCEventRun_runningActionsCount = obj974_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj978";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj978';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '0.8';
	var scaleYValue = '0.8';
	var effectDuration = '1';
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
		scale_981_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_981_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_981_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_981_completed() {
	setTimeout(function() {
		window.obj974_SCEventRun_runningActionsCount = window.obj974_SCEventRun_runningActionsCount - 1;

if (window.obj974_SCEventRun_runningActionsCount == 0) {
	obj974_SCEventRun_actionGroup2();
}
	}, 1);
}
























};
obj974_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj974_SCEventRun_activeActionGroupIndex = -1;
		$("#obj974").trigger("obj974_SCEventRun_ended");
		
		return;
	}
	window.obj974_SCEventRun_activeActionGroupIndex = 2;
	


















//	action: scale
//	target: obj978 
scale_982();
function scale_982() {
	window.obj974_SCEventRun_runningActionsCount = obj974_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj978";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj978';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1';
	var scaleYValue = '1';
	var effectDuration = '1';
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
		scale_982_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_982_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_982_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_982_completed() {
	setTimeout(function() {
		window.obj974_SCEventRun_runningActionsCount = window.obj974_SCEventRun_runningActionsCount - 1;

if (window.obj974_SCEventRun_runningActionsCount == 0) {
	obj974_SCEventRun_actionGroup3();
}
	}, 1);
}
























};
obj974_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj974_SCEventRun_activeActionGroupIndex = -1;
		$("#obj974").trigger("obj974_SCEventRun_ended");
		
		return;
	}
	window.obj974_SCEventRun_activeActionGroupIndex = 3;
	



//	action: move
//	target: obj978 
move_983();
function move_983() {
	window.obj974_SCEventRun_runningActionsCount = obj974_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj978");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=246";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj974_SCEventRun_runningActionsCount = window.obj974_SCEventRun_runningActionsCount - 1;

if (window.obj974_SCEventRun_runningActionsCount == 0) {
	obj974_SCEventRun_actionGroup4();
}
		}, 1);
	});
}






































};
obj974_SCEventRun_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj974_SCEventRun_activeActionGroupIndex = -1;
		$("#obj974").trigger("obj974_SCEventRun_ended");
		
		return;
	}
	window.obj974_SCEventRun_activeActionGroupIndex = 4;
	


//	action: show 
//	target: obj978 
(function(){
	window.obj974_SCEventRun_runningActionsCount = obj974_SCEventRun_runningActionsCount + 1;


	var element = "#obj978";
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
				window.obj974_SCEventRun_runningActionsCount = window.obj974_SCEventRun_runningActionsCount - 1;

if (window.obj974_SCEventRun_runningActionsCount == 0) {
	obj974_SCEventRun_actionGroup5();
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
			window.obj974_SCEventRun_runningActionsCount = window.obj974_SCEventRun_runningActionsCount - 1;

if (window.obj974_SCEventRun_runningActionsCount == 0) {
	obj974_SCEventRun_actionGroup5();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();







































};
obj974_SCEventRun_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj974_SCEventRun_activeActionGroupIndex = -1;
		$("#obj974").trigger("obj974_SCEventRun_ended");
		
		return;
	}
	window.obj974_SCEventRun_activeActionGroupIndex = 5;
	


















//	action: scale
//	target: obj978 
scale_985();
function scale_985() {
	window.obj974_SCEventRun_runningActionsCount = obj974_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj978";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj978';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '0.8';
	var scaleYValue = '0.8';
	var effectDuration = '1';
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
		scale_985_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_985_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_985_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_985_completed() {
	setTimeout(function() {
		window.obj974_SCEventRun_runningActionsCount = window.obj974_SCEventRun_runningActionsCount - 1;

if (window.obj974_SCEventRun_runningActionsCount == 0) {
	obj974_SCEventRun_actionGroup6();
}
	}, 1);
}
























};
obj974_SCEventRun_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj974_SCEventRun_activeActionGroupIndex = -1;
		$("#obj974").trigger("obj974_SCEventRun_ended");
		
		return;
	}
	window.obj974_SCEventRun_activeActionGroupIndex = 6;
	


















//	action: scale
//	target: obj978 
scale_986();
function scale_986() {
	window.obj974_SCEventRun_runningActionsCount = obj974_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj978";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj978';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1';
	var scaleYValue = '1';
	var effectDuration = '1';
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
		scale_986_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_986_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_986_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_986_completed() {
	setTimeout(function() {
		window.obj974_SCEventRun_runningActionsCount = window.obj974_SCEventRun_runningActionsCount - 1;

if (window.obj974_SCEventRun_runningActionsCount == 0) {
	obj974_SCEventRun_actionGroup7();
}
	}, 1);
}
























};
obj974_SCEventRun_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj974_SCEventRun_activeActionGroupIndex = -1;
		$("#obj974").trigger("obj974_SCEventRun_ended");
		
		return;
	}
	window.obj974_SCEventRun_activeActionGroupIndex = 7;
	



//	action: move
//	target: obj978 
move_987();
function move_987() {
	window.obj974_SCEventRun_runningActionsCount = obj974_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj978");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=246";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj974_SCEventRun_runningActionsCount = window.obj974_SCEventRun_runningActionsCount - 1;

if (window.obj974_SCEventRun_runningActionsCount == 0) {
	obj974_SCEventRun_actionGroup8();
}
		}, 1);
	});
}






































};
obj974_SCEventRun_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj974_SCEventRun_activeActionGroupIndex = -1;
		$("#obj974").trigger("obj974_SCEventRun_ended");
		
		return;
	}
	window.obj974_SCEventRun_activeActionGroupIndex = 8;
	


//	action: show 
//	target: obj978 
(function(){
	window.obj974_SCEventRun_runningActionsCount = obj974_SCEventRun_runningActionsCount + 1;


	var element = "#obj978";
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
				window.obj974_SCEventRun_runningActionsCount = window.obj974_SCEventRun_runningActionsCount - 1;

if (window.obj974_SCEventRun_runningActionsCount == 0) {
	obj974_SCEventRun_actionGroup9();
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
			window.obj974_SCEventRun_runningActionsCount = window.obj974_SCEventRun_runningActionsCount - 1;

if (window.obj974_SCEventRun_runningActionsCount == 0) {
	obj974_SCEventRun_actionGroup9();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();







































};
obj974_SCEventRun_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj974_SCEventRun_activeActionGroupIndex = -1;
		$("#obj974").trigger("obj974_SCEventRun_ended");
		
		return;
	}
	window.obj974_SCEventRun_activeActionGroupIndex = 9;
	


















//	action: scale
//	target: obj978 
scale_989();
function scale_989() {
	window.obj974_SCEventRun_runningActionsCount = obj974_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj978";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj978';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '0.8';
	var scaleYValue = '0.8';
	var effectDuration = '1';
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
		scale_989_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_989_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_989_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_989_completed() {
	setTimeout(function() {
		window.obj974_SCEventRun_runningActionsCount = window.obj974_SCEventRun_runningActionsCount - 1;

if (window.obj974_SCEventRun_runningActionsCount == 0) {
	obj974_SCEventRun_actionGroup10();
}
	}, 1);
}
























};
obj974_SCEventRun_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj974_SCEventRun_activeActionGroupIndex = -1;
		$("#obj974").trigger("obj974_SCEventRun_ended");
		
		return;
	}
	window.obj974_SCEventRun_activeActionGroupIndex = 10;
	


















//	action: scale
//	target: obj978 
scale_990();
function scale_990() {
	window.obj974_SCEventRun_runningActionsCount = obj974_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj978";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj978';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1';
	var scaleYValue = '1';
	var effectDuration = '1';
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
		scale_990_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_990_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_990_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_990_completed() {
	setTimeout(function() {
		window.obj974_SCEventRun_runningActionsCount = window.obj974_SCEventRun_runningActionsCount - 1;

if (window.obj974_SCEventRun_runningActionsCount == 0) {
	obj974_SCEventRun_actionGroup11();
}
	}, 1);
}
























};
obj974_SCEventRun_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj974_SCEventRun_activeActionGroupIndex = -1;
		$("#obj974").trigger("obj974_SCEventRun_ended");
		
		return;
	}
	window.obj974_SCEventRun_activeActionGroupIndex = 11;
	



//	action: move
//	target: obj978 
move_991();
function move_991() {
	window.obj974_SCEventRun_runningActionsCount = obj974_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj978");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=246";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj974_SCEventRun_runningActionsCount = window.obj974_SCEventRun_runningActionsCount - 1;

if (window.obj974_SCEventRun_runningActionsCount == 0) {
	obj974_SCEventRun_actionGroup12();
}
		}, 1);
	});
}






































};
obj974_SCEventRun_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj974_SCEventRun_activeActionGroupIndex = -1;
		$("#obj974").trigger("obj974_SCEventRun_ended");
		
		return;
	}
	window.obj974_SCEventRun_activeActionGroupIndex = 12;
	


//	action: show 
//	target: obj978 
(function(){
	window.obj974_SCEventRun_runningActionsCount = obj974_SCEventRun_runningActionsCount + 1;


	var element = "#obj978";
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
				window.obj974_SCEventRun_runningActionsCount = window.obj974_SCEventRun_runningActionsCount - 1;

if (window.obj974_SCEventRun_runningActionsCount == 0) {
	obj974_SCEventRun_actionGroup13();
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
			window.obj974_SCEventRun_runningActionsCount = window.obj974_SCEventRun_runningActionsCount - 1;

if (window.obj974_SCEventRun_runningActionsCount == 0) {
	obj974_SCEventRun_actionGroup13();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();







































};
obj974_SCEventRun_actionGroup13 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj974_SCEventRun_activeActionGroupIndex = -1;
		$("#obj974").trigger("obj974_SCEventRun_ended");
		
		return;
	}
	window.obj974_SCEventRun_activeActionGroupIndex = 13;
	


















//	action: scale
//	target: obj978 
scale_993();
function scale_993() {
	window.obj974_SCEventRun_runningActionsCount = obj974_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj978";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj978';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '0.8';
	var scaleYValue = '0.8';
	var effectDuration = '1';
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
		scale_993_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_993_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_993_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_993_completed() {
	setTimeout(function() {
		window.obj974_SCEventRun_runningActionsCount = window.obj974_SCEventRun_runningActionsCount - 1;

if (window.obj974_SCEventRun_runningActionsCount == 0) {
	obj974_SCEventRun_actionGroup14();
}
	}, 1);
}
























};
obj974_SCEventRun_actionGroup14 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj974_SCEventRun_activeActionGroupIndex = -1;
		$("#obj974").trigger("obj974_SCEventRun_ended");
		
		return;
	}
	window.obj974_SCEventRun_activeActionGroupIndex = 14;
	


















//	action: scale
//	target: obj978 
scale_994();
function scale_994() {
	window.obj974_SCEventRun_runningActionsCount = obj974_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj978";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj978';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1';
	var scaleYValue = '1';
	var effectDuration = '1';
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
		scale_994_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_994_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_994_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_994_completed() {
	setTimeout(function() {
		window.obj974_SCEventRun_runningActionsCount = window.obj974_SCEventRun_runningActionsCount - 1;

if (window.obj974_SCEventRun_runningActionsCount == 0) {
	obj974_SCEventRun_actionGroup15();
}
	}, 1);
}
























};
obj974_SCEventRun_actionGroup15 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj974_SCEventRun_activeActionGroupIndex = -1;
		$("#obj974").trigger("obj974_SCEventRun_ended");
		
		return;
	}
	window.obj974_SCEventRun_activeActionGroupIndex = 15;
	



//	action: move
//	target: obj978 
move_995();
function move_995() {
	window.obj974_SCEventRun_runningActionsCount = obj974_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj978");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 118;
	var moveY = 472;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj974_SCEventRun_runningActionsCount = window.obj974_SCEventRun_runningActionsCount - 1;

if (window.obj974_SCEventRun_runningActionsCount == 0) {
	obj974_SCEventRun_actionGroup16();
}
		}, 1);
	});
}






































};
obj974_SCEventRun_actionGroup16 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj974_SCEventRun_activeActionGroupIndex = -1;
		$("#obj974").trigger("obj974_SCEventRun_ended");
		
		return;
	}
	window.obj974_SCEventRun_activeActionGroupIndex = 16;
	















//	action: loop
loop_obj974_SCEventRun();
function loop_obj974_SCEventRun() {

	var loopCount = 0;

	window.obj974_SCEventRun_loopCount = window.obj974_SCEventRun_loopCount + 1;
	if (loopCount != 0 && window.obj974_SCEventRun_loopCount > loopCount) {
		window.obj974_SCEventRun_loopCount = 0
		obj974_SCEventRun_actionGroup17();
	} else {
		obj974_SCEventRun_actionGroup0();
	}

}


























};
obj974_SCEventRun_actionGroup17 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj974_SCEventRun_activeActionGroupIndex = -1;
		$("#obj974").trigger("obj974_SCEventRun_ended");
		
		return;
	}
	window.obj974_SCEventRun_activeActionGroupIndex = 17;
	










































};
obj1374_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1374_onLoad_activeActionGroupIndex = -1;
		$("#obj1374").trigger("obj1374_onLoad_ended");
		
		return;
	}
	window.obj1374_onLoad_activeActionGroupIndex = 0;
	
























//	action: playAudio
//	target: obj1374 
playAudio_1376();
function playAudio_1376() {
	window.obj1374_onLoad_runningActionsCount = obj1374_onLoad_runningActionsCount + 1;

	var myAudio = $("#obj1374")[0];
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
		    window.obj1374_onLoad_runningActionsCount = window.obj1374_onLoad_runningActionsCount - 1;

if (window.obj1374_onLoad_runningActionsCount == 0) {
	obj1374_onLoad_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1374_onLoad_runningActionsCount = window.obj1374_onLoad_runningActionsCount - 1;

if (window.obj1374_onLoad_runningActionsCount == 0) {
	obj1374_onLoad_actionGroup1();
}
	}
}

















};
obj1374_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1374_onLoad_activeActionGroupIndex = -1;
		$("#obj1374").trigger("obj1374_onLoad_ended");
		
		return;
	}
	window.obj1374_onLoad_activeActionGroupIndex = 1;
	










































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		









/*
 *
 *   obj173: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj173_onLoad_activeActionGroupIndex != -1) return;
var obj173_onLoad_runningActionsCount = 0;
var obj173_onLoad_loopCount = 0;
obj173_onLoad_actionGroup0();
});










/*
 *
 *   obj176: Event Touch Down
 *
 */

$("#obj176").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj176_onTap_activeActionGroupIndex != -1) return;
var obj176_onTap_runningActionsCount = 0;
var obj176_onTap_loopCount = 0;
obj176_onTap_actionGroup0();
});














/*
 *
 *   obj178: Event Touch Down
 *
 */

$("#obj178").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj178_onTap_activeActionGroupIndex != -1) return;
var obj178_onTap_runningActionsCount = 0;
var obj178_onTap_loopCount = 0;
obj178_onTap_actionGroup0();
});














/*
 *
 *   obj180: Event Touch Down
 *
 */

$("#obj180").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj180_onTap_activeActionGroupIndex != -1) return;
var obj180_onTap_runningActionsCount = 0;
var obj180_onTap_loopCount = 0;
obj180_onTap_actionGroup0();
});














/*
 *
 *   obj182: Event Touch Down
 *
 */

$("#obj182").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj182_onTap_activeActionGroupIndex != -1) return;
var obj182_onTap_runningActionsCount = 0;
var obj182_onTap_loopCount = 0;
obj182_onTap_actionGroup0();
});














/*
 *
 *   obj184: Event Touch Down
 *
 */

$("#obj184").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj184_onTap_activeActionGroupIndex != -1) return;
var obj184_onTap_runningActionsCount = 0;
var obj184_onTap_loopCount = 0;
obj184_onTap_actionGroup0();
});




























































































































































































































































































/*
 *
 *   obj901: Event Touch Down
 *
 */

$("#obj901").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj901_onTap_activeActionGroupIndex != -1) return;
var obj901_onTap_runningActionsCount = 0;
var obj901_onTap_loopCount = 0;
obj901_onTap_actionGroup0();
});




































































/*
 *
 *   obj939: Event SCEventRun
 *
 */

$("#obj939").bind("SCEventRun", function(event) {
	if (window.obj939_SCEventRun_activeActionGroupIndex != -1) return;
var obj939_SCEventRun_runningActionsCount = 0;
var obj939_SCEventRun_loopCount = 0;
obj939_SCEventRun_actionGroup0();
});




































































































































































/*
 *
 *   obj974: Event SCEventRun
 *
 */

$("#obj974").bind("SCEventRun", function(event) {
	if (window.obj974_SCEventRun_activeActionGroupIndex != -1) return;
var obj974_SCEventRun_runningActionsCount = 0;
var obj974_SCEventRun_loopCount = 0;
obj974_SCEventRun_actionGroup0();
});
























/*
 *
 *   obj1374: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1374_onLoad_activeActionGroupIndex != -1) return;
var obj1374_onLoad_runningActionsCount = 0;
var obj1374_onLoad_loopCount = 0;
obj1374_onLoad_actionGroup0();
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
	
$("#obj173").trigger('SCEventShow');
$("#obj176").trigger('SCEventShow');
$("#obj178").trigger('SCEventShow');
$("#obj180").trigger('SCEventShow');
$("#obj182").trigger('SCEventShow');
$("#obj184").trigger('SCEventShow');
$("#obj194").trigger('SCEventShow');
$("#obj192").trigger('SCEventShow');
$("#obj190").trigger('SCEventShow');
$("#obj188").trigger('SCEventShow');
$("#obj186").trigger('SCEventShow');
$("#obj901").trigger('SCEventShow');
$("#obj954").trigger('SCEventShow');
$("#obj956").trigger('SCEventShow');
$("#obj958").trigger('SCEventShow');
$("#obj960").trigger('SCEventShow');
$("#obj962").trigger('SCEventShow');
$("#obj964").trigger('SCEventShow');
$("#obj966").trigger('SCEventShow');
$("#obj968").trigger('SCEventShow');
$("#obj970").trigger('SCEventShow');
$("#obj972").trigger('SCEventShow');
$("#obj1374").trigger('SCEventShow');
	localStorage.setItem("tapped", "0");
localStorage.setItem("tapped", "0");
localStorage.setItem("finger", "true");
});