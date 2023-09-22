pubcoder.projectID = pubcoder.projectID || "D928F63EC5FACE4D86169F491C787A52";
pubcoder.project.id = pubcoder.project.id || "D928F63EC5FACE4D86169F491C787A52";
pubcoder.project.title = pubcoder.project.title || "OkidoNumbers";
pubcoder.page.id = pubcoder.page.id || 7;
pubcoder.page.title = pubcoder.page.title || "5";
pubcoder.page.number = pubcoder.page.number || 5;
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
var obj147_onTap_activeActionGroupIndex = -1;
var obj147_onTap_runningActionsCount = 0;
var obj147_onTap_loopCount = 0;
var obj147_onLoad_activeActionGroupIndex = -1;
var obj147_onLoad_runningActionsCount = 0;
var obj147_onLoad_loopCount = 0;
var obj152_onTap_activeActionGroupIndex = -1;
var obj152_onTap_runningActionsCount = 0;
var obj152_onTap_loopCount = 0;
var obj160_onTap_activeActionGroupIndex = -1;
var obj160_onTap_runningActionsCount = 0;
var obj160_onTap_loopCount = 0;
var obj842_SCEventRun_activeActionGroupIndex = -1;
var obj842_SCEventRun_runningActionsCount = 0;
var obj842_SCEventRun_loopCount = 0;
var obj1368_onLoad_activeActionGroupIndex = -1;
var obj1368_onLoad_runningActionsCount = 0;
var obj1368_onLoad_loopCount = 0;

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
		
obj147_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj147_onTap_activeActionGroupIndex = -1;
		$("#obj147").trigger("obj147_onTap_ended");
		
		return;
	}
	window.obj147_onTap_activeActionGroupIndex = 0;
	





























//	action: Run JavaScript
runjs_835();
function runjs_835() {
	window.obj147_onTap_runningActionsCount = obj147_onTap_runningActionsCount + 1;


	if(localStorage.getItem("tapped") === "1" && localStorage.getItem("ready") === "true")
{
    $("#obj842").trigger(PubCoder.Events.Run);
}

	setTimeout(function() {
		window.obj147_onTap_runningActionsCount = window.obj147_onTap_runningActionsCount - 1;

if (window.obj147_onTap_runningActionsCount == 0) {
	obj147_onTap_actionGroup1();
}
	}, 1);
}












};
obj147_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj147_onTap_activeActionGroupIndex = -1;
		$("#obj147").trigger("obj147_onTap_ended");
		
		return;
	}
	window.obj147_onTap_activeActionGroupIndex = 1;
	










































};
obj147_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj147_onLoad_activeActionGroupIndex = -1;
		$("#obj147").trigger("obj147_onLoad_ended");
		
		return;
	}
	window.obj147_onLoad_activeActionGroupIndex = 0;
	


//	action: show 
//	target: obj796 
(function(){
	window.obj147_onLoad_runningActionsCount = obj147_onLoad_runningActionsCount + 1;


	var element = "#obj796";
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
				window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup1();
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
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj794 
(function(){
	window.obj147_onLoad_runningActionsCount = obj147_onLoad_runningActionsCount + 1;


	var element = "#obj794";
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
				window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup1();
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
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj798 
(function(){
	window.obj147_onLoad_runningActionsCount = obj147_onLoad_runningActionsCount + 1;


	var element = "#obj798";
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
				window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup1();
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
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: move
//	target: obj152 
move_847();
function move_847() {
	window.obj147_onLoad_runningActionsCount = obj147_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj152");
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
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj152 
move_848();
function move_848() {
	window.obj147_onLoad_runningActionsCount = obj147_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj152");
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
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj152 
move_849();
function move_849() {
	window.obj147_onLoad_runningActionsCount = obj147_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj152");
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
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj152 
move_850();
function move_850() {
	window.obj147_onLoad_runningActionsCount = obj147_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj152");
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
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1403();
function playAudioFile_1403() {
	window.obj147_onLoad_runningActionsCount = obj147_onLoad_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1403")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1403");
			$("#obj_audio_playSoundFile1403").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup1();
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
				window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup1();
}
			}, false);
		} else {
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup1();
}
		}
	}

	
	
	
}






//	action: playAudioFile
playAudioFile_1281();
function playAudioFile_1281() {
	window.obj147_onLoad_runningActionsCount = obj147_onLoad_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1281")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1281");
			$("#obj_audio_playSoundFile1281").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup1();
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
				window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup1();
}
			}, false);
		} else {
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_1282();
function runjs_1282() {
	window.obj147_onLoad_runningActionsCount = obj147_onLoad_runningActionsCount + 1;


	localStorage.setItem("ready", "false");

	setTimeout(function() {
		window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup1();
}
	}, 1);
}












};
obj147_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj147_onLoad_activeActionGroupIndex = -1;
		$("#obj147").trigger("obj147_onLoad_ended");
		
		return;
	}
	window.obj147_onLoad_activeActionGroupIndex = 1;
	
















//	action: wait
wait_1283();
function wait_1283() {
	window.obj147_onLoad_runningActionsCount = obj147_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup2();
}
	}, 2500);
}

























};
obj147_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj147_onLoad_activeActionGroupIndex = -1;
		$("#obj147").trigger("obj147_onLoad_ended");
		
		return;
	}
	window.obj147_onLoad_activeActionGroupIndex = 2;
	


//	action: show 
//	target: obj804 
(function(){
	window.obj147_onLoad_runningActionsCount = obj147_onLoad_runningActionsCount + 1;


	var element = "#obj804";
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
		var animationDurationMs = 400;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup3();
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
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup3();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: move
//	target: obj152 
move_851();
function move_851() {
	window.obj147_onLoad_runningActionsCount = obj147_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj152");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-18";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 200, easing, function() {
		setTimeout(function() {
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup3();
}
		}, 1);
	});
}
//	action: move
//	target: obj152 
move_852();
function move_852() {
	window.obj147_onLoad_runningActionsCount = obj147_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj152");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 0;
	var moveY = 0;
	var isMoveBack = true;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 200, easing, function() {
		setTimeout(function() {
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup3();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1413();
function playAudioFile_1413() {
	window.obj147_onLoad_runningActionsCount = obj147_onLoad_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1413")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1413");
			$("#obj_audio_playSoundFile1413").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup3();
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
				window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup3();
}
			}, false);
		} else {
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup3();
}
		}
	}

	
	
	
}




































};
obj147_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj147_onLoad_activeActionGroupIndex = -1;
		$("#obj147").trigger("obj147_onLoad_ended");
		
		return;
	}
	window.obj147_onLoad_activeActionGroupIndex = 3;
	


//	action: show 
//	target: obj806 
(function(){
	window.obj147_onLoad_runningActionsCount = obj147_onLoad_runningActionsCount + 1;


	var element = "#obj806";
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
		var animationDurationMs = 400;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup4();
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
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup4();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: move
//	target: obj152 
move_853();
function move_853() {
	window.obj147_onLoad_runningActionsCount = obj147_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj152");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-18";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 200, easing, function() {
		setTimeout(function() {
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup4();
}
		}, 1);
	});
}
//	action: move
//	target: obj152 
move_854();
function move_854() {
	window.obj147_onLoad_runningActionsCount = obj147_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj152");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 0;
	var moveY = 0;
	var isMoveBack = true;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 200, easing, function() {
		setTimeout(function() {
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup4();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1414();
function playAudioFile_1414() {
	window.obj147_onLoad_runningActionsCount = obj147_onLoad_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1414")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1414");
			$("#obj_audio_playSoundFile1414").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup4();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup4();
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
				window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup4();
}
			}, false);
		} else {
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup4();
}
		}
	}

	
	
	
}




































};
obj147_onLoad_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj147_onLoad_activeActionGroupIndex = -1;
		$("#obj147").trigger("obj147_onLoad_ended");
		
		return;
	}
	window.obj147_onLoad_activeActionGroupIndex = 4;
	


//	action: show 
//	target: obj808 
(function(){
	window.obj147_onLoad_runningActionsCount = obj147_onLoad_runningActionsCount + 1;


	var element = "#obj808";
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
		var animationDurationMs = 400;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup5();
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
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup5();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: move
//	target: obj152 
move_855();
function move_855() {
	window.obj147_onLoad_runningActionsCount = obj147_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj152");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-18";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 200, easing, function() {
		setTimeout(function() {
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup5();
}
		}, 1);
	});
}
//	action: move
//	target: obj152 
move_856();
function move_856() {
	window.obj147_onLoad_runningActionsCount = obj147_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj152");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 0;
	var moveY = 0;
	var isMoveBack = true;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 200, easing, function() {
		setTimeout(function() {
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup5();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1415();
function playAudioFile_1415() {
	window.obj147_onLoad_runningActionsCount = obj147_onLoad_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1415")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1415");
			$("#obj_audio_playSoundFile1415").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup5();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup5();
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
				window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup5();
}
			}, false);
		} else {
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup5();
}
		}
	}

	
	
	
}




































};
obj147_onLoad_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj147_onLoad_activeActionGroupIndex = -1;
		$("#obj147").trigger("obj147_onLoad_ended");
		
		return;
	}
	window.obj147_onLoad_activeActionGroupIndex = 5;
	


//	action: show 
//	target: obj810 
(function(){
	window.obj147_onLoad_runningActionsCount = obj147_onLoad_runningActionsCount + 1;


	var element = "#obj810";
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
		var animationDurationMs = 400;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup6();
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
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup6();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: move
//	target: obj152 
move_857();
function move_857() {
	window.obj147_onLoad_runningActionsCount = obj147_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj152");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-18";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 200, easing, function() {
		setTimeout(function() {
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup6();
}
		}, 1);
	});
}
//	action: move
//	target: obj152 
move_858();
function move_858() {
	window.obj147_onLoad_runningActionsCount = obj147_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj152");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 0;
	var moveY = 0;
	var isMoveBack = true;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 200, easing, function() {
		setTimeout(function() {
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup6();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1416();
function playAudioFile_1416() {
	window.obj147_onLoad_runningActionsCount = obj147_onLoad_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1416")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1416");
			$("#obj_audio_playSoundFile1416").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup6();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup6();
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
				window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup6();
}
			}, false);
		} else {
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup6();
}
		}
	}

	
	
	
}




































};
obj147_onLoad_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj147_onLoad_activeActionGroupIndex = -1;
		$("#obj147").trigger("obj147_onLoad_ended");
		
		return;
	}
	window.obj147_onLoad_activeActionGroupIndex = 6;
	


//	action: show 
//	target: obj812 
(function(){
	window.obj147_onLoad_runningActionsCount = obj147_onLoad_runningActionsCount + 1;


	var element = "#obj812";
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
		var animationDurationMs = 400;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup7();
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
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup7();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: move
//	target: obj152 
move_859();
function move_859() {
	window.obj147_onLoad_runningActionsCount = obj147_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj152");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-18";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 200, easing, function() {
		setTimeout(function() {
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup7();
}
		}, 1);
	});
}
//	action: move
//	target: obj152 
move_860();
function move_860() {
	window.obj147_onLoad_runningActionsCount = obj147_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj152");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 0;
	var moveY = 0;
	var isMoveBack = true;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 200, easing, function() {
		setTimeout(function() {
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup7();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1417();
function playAudioFile_1417() {
	window.obj147_onLoad_runningActionsCount = obj147_onLoad_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1417")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1417");
			$("#obj_audio_playSoundFile1417").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup7();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup7();
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
				window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup7();
}
			}, false);
		} else {
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup7();
}
		}
	}

	
	
	
}




































};
obj147_onLoad_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj147_onLoad_activeActionGroupIndex = -1;
		$("#obj147").trigger("obj147_onLoad_ended");
		
		return;
	}
	window.obj147_onLoad_activeActionGroupIndex = 7;
	


//	action: show 
//	target: obj814 
(function(){
	window.obj147_onLoad_runningActionsCount = obj147_onLoad_runningActionsCount + 1;


	var element = "#obj814";
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
		var animationDurationMs = 400;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup8();
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
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup8();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: move
//	target: obj152 
move_861();
function move_861() {
	window.obj147_onLoad_runningActionsCount = obj147_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj152");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-18";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 200, easing, function() {
		setTimeout(function() {
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup8();
}
		}, 1);
	});
}
//	action: move
//	target: obj152 
move_862();
function move_862() {
	window.obj147_onLoad_runningActionsCount = obj147_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj152");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 0;
	var moveY = 0;
	var isMoveBack = true;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 200, easing, function() {
		setTimeout(function() {
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup8();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1418();
function playAudioFile_1418() {
	window.obj147_onLoad_runningActionsCount = obj147_onLoad_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1418")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1418");
			$("#obj_audio_playSoundFile1418").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup8();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup8();
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
				window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup8();
}
			}, false);
		} else {
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup8();
}
		}
	}

	
	
	
}




































};
obj147_onLoad_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj147_onLoad_activeActionGroupIndex = -1;
		$("#obj147").trigger("obj147_onLoad_ended");
		
		return;
	}
	window.obj147_onLoad_activeActionGroupIndex = 8;
	


//	action: show 
//	target: obj816 
(function(){
	window.obj147_onLoad_runningActionsCount = obj147_onLoad_runningActionsCount + 1;


	var element = "#obj816";
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
		var animationDurationMs = 400;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup9();
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
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup9();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: move
//	target: obj152 
move_863();
function move_863() {
	window.obj147_onLoad_runningActionsCount = obj147_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj152");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-18";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 200, easing, function() {
		setTimeout(function() {
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup9();
}
		}, 1);
	});
}
//	action: move
//	target: obj152 
move_864();
function move_864() {
	window.obj147_onLoad_runningActionsCount = obj147_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj152");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 0;
	var moveY = 0;
	var isMoveBack = true;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 200, easing, function() {
		setTimeout(function() {
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup9();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1419();
function playAudioFile_1419() {
	window.obj147_onLoad_runningActionsCount = obj147_onLoad_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1419")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1419");
			$("#obj_audio_playSoundFile1419").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup9();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup9();
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
				window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup9();
}
			}, false);
		} else {
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup9();
}
		}
	}

	
	
	
}




































};
obj147_onLoad_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj147_onLoad_activeActionGroupIndex = -1;
		$("#obj147").trigger("obj147_onLoad_ended");
		
		return;
	}
	window.obj147_onLoad_activeActionGroupIndex = 9;
	


//	action: show 
//	target: obj818 
(function(){
	window.obj147_onLoad_runningActionsCount = obj147_onLoad_runningActionsCount + 1;


	var element = "#obj818";
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
		var animationDurationMs = 400;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup10();
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
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup10();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: move
//	target: obj152 
move_865();
function move_865() {
	window.obj147_onLoad_runningActionsCount = obj147_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj152");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-18";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 200, easing, function() {
		setTimeout(function() {
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup10();
}
		}, 1);
	});
}
//	action: move
//	target: obj152 
move_866();
function move_866() {
	window.obj147_onLoad_runningActionsCount = obj147_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj152");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 0;
	var moveY = 0;
	var isMoveBack = true;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 200, easing, function() {
		setTimeout(function() {
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup10();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1420();
function playAudioFile_1420() {
	window.obj147_onLoad_runningActionsCount = obj147_onLoad_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1420")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1420");
			$("#obj_audio_playSoundFile1420").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup10();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup10();
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
				window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup10();
}
			}, false);
		} else {
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup10();
}
		}
	}

	
	
	
}




































};
obj147_onLoad_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj147_onLoad_activeActionGroupIndex = -1;
		$("#obj147").trigger("obj147_onLoad_ended");
		
		return;
	}
	window.obj147_onLoad_activeActionGroupIndex = 10;
	


//	action: show 
//	target: obj820 
(function(){
	window.obj147_onLoad_runningActionsCount = obj147_onLoad_runningActionsCount + 1;


	var element = "#obj820";
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
		var animationDurationMs = 400;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup11();
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
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup11();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: move
//	target: obj152 
move_867();
function move_867() {
	window.obj147_onLoad_runningActionsCount = obj147_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj152");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-18";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 200, easing, function() {
		setTimeout(function() {
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup11();
}
		}, 1);
	});
}
//	action: move
//	target: obj152 
move_868();
function move_868() {
	window.obj147_onLoad_runningActionsCount = obj147_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj152");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 0;
	var moveY = 0;
	var isMoveBack = true;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 200, easing, function() {
		setTimeout(function() {
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup11();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1421();
function playAudioFile_1421() {
	window.obj147_onLoad_runningActionsCount = obj147_onLoad_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1421")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1421");
			$("#obj_audio_playSoundFile1421").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup11();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup11();
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
				window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup11();
}
			}, false);
		} else {
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup11();
}
		}
	}

	
	
	
}




































};
obj147_onLoad_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj147_onLoad_activeActionGroupIndex = -1;
		$("#obj147").trigger("obj147_onLoad_ended");
		
		return;
	}
	window.obj147_onLoad_activeActionGroupIndex = 11;
	


//	action: show 
//	target: obj822 
(function(){
	window.obj147_onLoad_runningActionsCount = obj147_onLoad_runningActionsCount + 1;


	var element = "#obj822";
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
		var animationDurationMs = 400;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup12();
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
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup12();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: move
//	target: obj152 
move_869();
function move_869() {
	window.obj147_onLoad_runningActionsCount = obj147_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj152");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-18";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 200, easing, function() {
		setTimeout(function() {
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup12();
}
		}, 1);
	});
}
//	action: move
//	target: obj152 
move_870();
function move_870() {
	window.obj147_onLoad_runningActionsCount = obj147_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj152");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 0;
	var moveY = 0;
	var isMoveBack = true;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 200, easing, function() {
		setTimeout(function() {
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup12();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1422();
function playAudioFile_1422() {
	window.obj147_onLoad_runningActionsCount = obj147_onLoad_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1422")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1422");
			$("#obj_audio_playSoundFile1422").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup12();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup12();
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
				window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup12();
}
			}, false);
		} else {
			window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup12();
}
		}
	}

	
	
	
}




































};
obj147_onLoad_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj147_onLoad_activeActionGroupIndex = -1;
		$("#obj147").trigger("obj147_onLoad_ended");
		
		return;
	}
	window.obj147_onLoad_activeActionGroupIndex = 12;
	





























//	action: Run JavaScript
runjs_834();
function runjs_834() {
	window.obj147_onLoad_runningActionsCount = obj147_onLoad_runningActionsCount + 1;


	localStorage.setItem("tapped", "1");
localStorage.setItem('ready', "true");

	setTimeout(function() {
		window.obj147_onLoad_runningActionsCount = window.obj147_onLoad_runningActionsCount - 1;

if (window.obj147_onLoad_runningActionsCount == 0) {
	obj147_onLoad_actionGroup13();
}
	}, 1);
}












};
obj147_onLoad_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj147_onLoad_activeActionGroupIndex = -1;
		$("#obj147").trigger("obj147_onLoad_ended");
		
		return;
	}
	window.obj147_onLoad_activeActionGroupIndex = 13;
	










































};
obj152_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj152_onTap_activeActionGroupIndex = -1;
		$("#obj152").trigger("obj152_onTap_ended");
		
		return;
	}
	window.obj152_onTap_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj152 
move_1323();
function move_1323() {
	window.obj152_onTap_runningActionsCount = obj152_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj152");
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
			window.obj152_onTap_runningActionsCount = window.obj152_onTap_runningActionsCount - 1;

if (window.obj152_onTap_runningActionsCount == 0) {
	obj152_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj152 
move_1324();
function move_1324() {
	window.obj152_onTap_runningActionsCount = obj152_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj152");
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
			window.obj152_onTap_runningActionsCount = window.obj152_onTap_runningActionsCount - 1;

if (window.obj152_onTap_runningActionsCount == 0) {
	obj152_onTap_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1390();
function playAudioFile_1390() {
	window.obj152_onTap_runningActionsCount = obj152_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1390")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1390");
			$("#obj_audio_playSoundFile1390").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj152_onTap_runningActionsCount = window.obj152_onTap_runningActionsCount - 1;

if (window.obj152_onTap_runningActionsCount == 0) {
	obj152_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj152_onTap_runningActionsCount = window.obj152_onTap_runningActionsCount - 1;

if (window.obj152_onTap_runningActionsCount == 0) {
	obj152_onTap_actionGroup1();
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
				window.obj152_onTap_runningActionsCount = window.obj152_onTap_runningActionsCount - 1;

if (window.obj152_onTap_runningActionsCount == 0) {
	obj152_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj152_onTap_runningActionsCount = window.obj152_onTap_runningActionsCount - 1;

if (window.obj152_onTap_runningActionsCount == 0) {
	obj152_onTap_actionGroup1();
}
		}
	}

	
	
	
}




































};
obj152_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj152_onTap_activeActionGroupIndex = -1;
		$("#obj152").trigger("obj152_onTap_ended");
		
		return;
	}
	window.obj152_onTap_activeActionGroupIndex = 1;
	










































};
obj160_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj160_onTap_activeActionGroupIndex = -1;
		$("#obj160").trigger("obj160_onTap_ended");
		
		return;
	}
	window.obj160_onTap_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj160 
move_1325();
function move_1325() {
	window.obj160_onTap_runningActionsCount = obj160_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj160");
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
			window.obj160_onTap_runningActionsCount = window.obj160_onTap_runningActionsCount - 1;

if (window.obj160_onTap_runningActionsCount == 0) {
	obj160_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj160 
move_1326();
function move_1326() {
	window.obj160_onTap_runningActionsCount = obj160_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj160");
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
			window.obj160_onTap_runningActionsCount = window.obj160_onTap_runningActionsCount - 1;

if (window.obj160_onTap_runningActionsCount == 0) {
	obj160_onTap_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1391();
function playAudioFile_1391() {
	window.obj160_onTap_runningActionsCount = obj160_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1391")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1391");
			$("#obj_audio_playSoundFile1391").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj160_onTap_runningActionsCount = window.obj160_onTap_runningActionsCount - 1;

if (window.obj160_onTap_runningActionsCount == 0) {
	obj160_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj160_onTap_runningActionsCount = window.obj160_onTap_runningActionsCount - 1;

if (window.obj160_onTap_runningActionsCount == 0) {
	obj160_onTap_actionGroup1();
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
				window.obj160_onTap_runningActionsCount = window.obj160_onTap_runningActionsCount - 1;

if (window.obj160_onTap_runningActionsCount == 0) {
	obj160_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj160_onTap_runningActionsCount = window.obj160_onTap_runningActionsCount - 1;

if (window.obj160_onTap_runningActionsCount == 0) {
	obj160_onTap_actionGroup1();
}
		}
	}

	
	
	
}




































};
obj160_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj160_onTap_activeActionGroupIndex = -1;
		$("#obj160").trigger("obj160_onTap_ended");
		
		return;
	}
	window.obj160_onTap_activeActionGroupIndex = 1;
	










































};
obj842_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj842_SCEventRun_activeActionGroupIndex = -1;
		$("#obj842").trigger("obj842_SCEventRun_ended");
		
		return;
	}
	window.obj842_SCEventRun_activeActionGroupIndex = 0;
	


//	action: show 
//	target: obj840 
(function(){
	window.obj842_SCEventRun_runningActionsCount = obj842_SCEventRun_runningActionsCount + 1;


	var element = "#obj840";
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
				window.obj842_SCEventRun_runningActionsCount = window.obj842_SCEventRun_runningActionsCount - 1;

if (window.obj842_SCEventRun_runningActionsCount == 0) {
	obj842_SCEventRun_actionGroup1();
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
			window.obj842_SCEventRun_runningActionsCount = window.obj842_SCEventRun_runningActionsCount - 1;

if (window.obj842_SCEventRun_runningActionsCount == 0) {
	obj842_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj838 
(function(){
	window.obj842_SCEventRun_runningActionsCount = obj842_SCEventRun_runningActionsCount + 1;


	var element = "#obj838";
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
				window.obj842_SCEventRun_runningActionsCount = window.obj842_SCEventRun_runningActionsCount - 1;

if (window.obj842_SCEventRun_runningActionsCount == 0) {
	obj842_SCEventRun_actionGroup1();
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
			window.obj842_SCEventRun_runningActionsCount = window.obj842_SCEventRun_runningActionsCount - 1;

if (window.obj842_SCEventRun_runningActionsCount == 0) {
	obj842_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj836 
(function(){
	window.obj842_SCEventRun_runningActionsCount = obj842_SCEventRun_runningActionsCount + 1;


	var element = "#obj836";
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
				window.obj842_SCEventRun_runningActionsCount = window.obj842_SCEventRun_runningActionsCount - 1;

if (window.obj842_SCEventRun_runningActionsCount == 0) {
	obj842_SCEventRun_actionGroup1();
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
			window.obj842_SCEventRun_runningActionsCount = window.obj842_SCEventRun_runningActionsCount - 1;

if (window.obj842_SCEventRun_runningActionsCount == 0) {
	obj842_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: move
//	target: obj160 
move_871();
function move_871() {
	window.obj842_SCEventRun_runningActionsCount = obj842_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj160");
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
			window.obj842_SCEventRun_runningActionsCount = window.obj842_SCEventRun_runningActionsCount - 1;

if (window.obj842_SCEventRun_runningActionsCount == 0) {
	obj842_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj160 
move_872();
function move_872() {
	window.obj842_SCEventRun_runningActionsCount = obj842_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj160");
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
			window.obj842_SCEventRun_runningActionsCount = window.obj842_SCEventRun_runningActionsCount - 1;

if (window.obj842_SCEventRun_runningActionsCount == 0) {
	obj842_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj160 
move_873();
function move_873() {
	window.obj842_SCEventRun_runningActionsCount = obj842_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj160");
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
			window.obj842_SCEventRun_runningActionsCount = window.obj842_SCEventRun_runningActionsCount - 1;

if (window.obj842_SCEventRun_runningActionsCount == 0) {
	obj842_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj160 
move_874();
function move_874() {
	window.obj842_SCEventRun_runningActionsCount = obj842_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj160");
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
			window.obj842_SCEventRun_runningActionsCount = window.obj842_SCEventRun_runningActionsCount - 1;

if (window.obj842_SCEventRun_runningActionsCount == 0) {
	obj842_SCEventRun_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1404();
function playAudioFile_1404() {
	window.obj842_SCEventRun_runningActionsCount = obj842_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1404")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1404");
			$("#obj_audio_playSoundFile1404").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj842_SCEventRun_runningActionsCount = window.obj842_SCEventRun_runningActionsCount - 1;

if (window.obj842_SCEventRun_runningActionsCount == 0) {
	obj842_SCEventRun_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj842_SCEventRun_runningActionsCount = window.obj842_SCEventRun_runningActionsCount - 1;

if (window.obj842_SCEventRun_runningActionsCount == 0) {
	obj842_SCEventRun_actionGroup1();
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
				window.obj842_SCEventRun_runningActionsCount = window.obj842_SCEventRun_runningActionsCount - 1;

if (window.obj842_SCEventRun_runningActionsCount == 0) {
	obj842_SCEventRun_actionGroup1();
}
			}, false);
		} else {
			window.obj842_SCEventRun_runningActionsCount = window.obj842_SCEventRun_runningActionsCount - 1;

if (window.obj842_SCEventRun_runningActionsCount == 0) {
	obj842_SCEventRun_actionGroup1();
}
		}
	}

	
	
	
}






//	action: playAudioFile
playAudioFile_1285();
function playAudioFile_1285() {
	window.obj842_SCEventRun_runningActionsCount = obj842_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1285")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1285");
			$("#obj_audio_playSoundFile1285").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj842_SCEventRun_runningActionsCount = window.obj842_SCEventRun_runningActionsCount - 1;

if (window.obj842_SCEventRun_runningActionsCount == 0) {
	obj842_SCEventRun_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj842_SCEventRun_runningActionsCount = window.obj842_SCEventRun_runningActionsCount - 1;

if (window.obj842_SCEventRun_runningActionsCount == 0) {
	obj842_SCEventRun_actionGroup1();
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
				window.obj842_SCEventRun_runningActionsCount = window.obj842_SCEventRun_runningActionsCount - 1;

if (window.obj842_SCEventRun_runningActionsCount == 0) {
	obj842_SCEventRun_actionGroup1();
}
			}, false);
		} else {
			window.obj842_SCEventRun_runningActionsCount = window.obj842_SCEventRun_runningActionsCount - 1;

if (window.obj842_SCEventRun_runningActionsCount == 0) {
	obj842_SCEventRun_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_1284();
function runjs_1284() {
	window.obj842_SCEventRun_runningActionsCount = obj842_SCEventRun_runningActionsCount + 1;


	localStorage.setItem("ready", "false");

	setTimeout(function() {
		window.obj842_SCEventRun_runningActionsCount = window.obj842_SCEventRun_runningActionsCount - 1;

if (window.obj842_SCEventRun_runningActionsCount == 0) {
	obj842_SCEventRun_actionGroup1();
}
	}, 1);
}












};
obj842_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj842_SCEventRun_activeActionGroupIndex = -1;
		$("#obj842").trigger("obj842_SCEventRun_ended");
		
		return;
	}
	window.obj842_SCEventRun_activeActionGroupIndex = 1;
	





























//	action: Run JavaScript
runjs_1286();
function runjs_1286() {
	window.obj842_SCEventRun_runningActionsCount = obj842_SCEventRun_runningActionsCount + 1;


	localStorage.setItem("ready", "true");

	setTimeout(function() {
		window.obj842_SCEventRun_runningActionsCount = window.obj842_SCEventRun_runningActionsCount - 1;

if (window.obj842_SCEventRun_runningActionsCount == 0) {
	obj842_SCEventRun_actionGroup2();
}
	}, 1);
}












};
obj842_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj842_SCEventRun_activeActionGroupIndex = -1;
		$("#obj842").trigger("obj842_SCEventRun_ended");
		
		return;
	}
	window.obj842_SCEventRun_activeActionGroupIndex = 2;
	










































};
obj1368_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1368_onLoad_activeActionGroupIndex = -1;
		$("#obj1368").trigger("obj1368_onLoad_ended");
		
		return;
	}
	window.obj1368_onLoad_activeActionGroupIndex = 0;
	
























//	action: playAudio
//	target: obj1368 
playAudio_1370();
function playAudio_1370() {
	window.obj1368_onLoad_runningActionsCount = obj1368_onLoad_runningActionsCount + 1;

	var myAudio = $("#obj1368")[0];
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
		    window.obj1368_onLoad_runningActionsCount = window.obj1368_onLoad_runningActionsCount - 1;

if (window.obj1368_onLoad_runningActionsCount == 0) {
	obj1368_onLoad_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1368_onLoad_runningActionsCount = window.obj1368_onLoad_runningActionsCount - 1;

if (window.obj1368_onLoad_runningActionsCount == 0) {
	obj1368_onLoad_actionGroup1();
}
	}
}

















};
obj1368_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1368_onLoad_activeActionGroupIndex = -1;
		$("#obj1368").trigger("obj1368_onLoad_ended");
		
		return;
	}
	window.obj1368_onLoad_activeActionGroupIndex = 1;
	










































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		





/*
 *
 *   obj147: Event Touch Down
 *
 */

$("#obj147").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj147_onTap_activeActionGroupIndex != -1) return;
var obj147_onTap_runningActionsCount = 0;
var obj147_onTap_loopCount = 0;
obj147_onTap_actionGroup0();
});



/*
 *
 *   obj147: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj147_onLoad_activeActionGroupIndex != -1) return;
var obj147_onLoad_runningActionsCount = 0;
var obj147_onLoad_loopCount = 0;
obj147_onLoad_actionGroup0();
});

























/*
 *
 *   obj152: Event Touch Down
 *
 */

$("#obj152").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj152_onTap_activeActionGroupIndex != -1) return;
var obj152_onTap_runningActionsCount = 0;
var obj152_onTap_loopCount = 0;
obj152_onTap_actionGroup0();
});



























































/*
 *
 *   obj160: Event Touch Down
 *
 */

$("#obj160").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj160_onTap_activeActionGroupIndex != -1) return;
var obj160_onTap_runningActionsCount = 0;
var obj160_onTap_loopCount = 0;
obj160_onTap_actionGroup0();
});







































































































































































































































































/*
 *
 *   obj842: Event SCEventRun
 *
 */

$("#obj842").one("SCEventRun", function(event) {
	if (window.obj842_SCEventRun_activeActionGroupIndex != -1) return;
var obj842_SCEventRun_runningActionsCount = 0;
var obj842_SCEventRun_loopCount = 0;
obj842_SCEventRun_actionGroup0();
});









/*
 *
 *   obj1368: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1368_onLoad_activeActionGroupIndex != -1) return;
var obj1368_onLoad_runningActionsCount = 0;
var obj1368_onLoad_loopCount = 0;
obj1368_onLoad_actionGroup0();
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
	
$("#obj147").trigger('SCEventShow');
$("#obj162").trigger('SCEventShow');
$("#obj152").trigger('SCEventShow');
$("#obj154").trigger('SCEventShow');
$("#obj156").trigger('SCEventShow');
$("#obj158").trigger('SCEventShow');
$("#obj160").trigger('SCEventShow');
$("#obj1368").trigger('SCEventShow');
	localStorage.setItem("tapped", "0");
localStorage.setItem("tapped", "0");
localStorage.setItem("ready", "false");
});