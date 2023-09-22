pubcoder.projectID = pubcoder.projectID || "968537061CD4A6469E16DEA662F0DD9C";
pubcoder.project.id = pubcoder.project.id || "968537061CD4A6469E16DEA662F0DD9C";
pubcoder.project.title = pubcoder.project.title || "MGTO Underwater Story";
pubcoder.page.id = pubcoder.page.id || 978;
pubcoder.page.title = pubcoder.page.title || "6";
pubcoder.page.number = pubcoder.page.number || 6;
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
var obj4026_onTap_activeActionGroupIndex = -1;
var obj4026_onTap_runningActionsCount = 0;
var obj4026_onTap_loopCount = 0;
var obj4026_onLoad_activeActionGroupIndex = -1;
var obj4026_onLoad_runningActionsCount = 0;
var obj4026_onLoad_loopCount = 0;
var obj4236_onLoad_activeActionGroupIndex = -1;
var obj4236_onLoad_runningActionsCount = 0;
var obj4236_onLoad_loopCount = 0;
var obj4231_onLoad_activeActionGroupIndex = -1;
var obj4231_onLoad_runningActionsCount = 0;
var obj4231_onLoad_loopCount = 0;
var obj4167_onLoad_activeActionGroupIndex = -1;
var obj4167_onLoad_runningActionsCount = 0;
var obj4167_onLoad_loopCount = 0;
var obj4329_onLoad_activeActionGroupIndex = -1;
var obj4329_onLoad_runningActionsCount = 0;
var obj4329_onLoad_loopCount = 0;
var obj4315_onLoad_activeActionGroupIndex = -1;
var obj4315_onLoad_runningActionsCount = 0;
var obj4315_onLoad_loopCount = 0;
var obj4303_onLoad_activeActionGroupIndex = -1;
var obj4303_onLoad_runningActionsCount = 0;
var obj4303_onLoad_loopCount = 0;
var obj4288_onLoad_activeActionGroupIndex = -1;
var obj4288_onLoad_runningActionsCount = 0;
var obj4288_onLoad_loopCount = 0;
var obj4276_onLoad_activeActionGroupIndex = -1;
var obj4276_onLoad_runningActionsCount = 0;
var obj4276_onLoad_loopCount = 0;
var obj4262_onLoad_activeActionGroupIndex = -1;
var obj4262_onLoad_runningActionsCount = 0;
var obj4262_onLoad_loopCount = 0;
var obj4250_onLoad_activeActionGroupIndex = -1;
var obj4250_onLoad_runningActionsCount = 0;
var obj4250_onLoad_loopCount = 0;
var obj4052_onLoad_activeActionGroupIndex = -1;
var obj4052_onLoad_runningActionsCount = 0;
var obj4052_onLoad_loopCount = 0;
var obj4060_SCEventRun_activeActionGroupIndex = -1;
var obj4060_SCEventRun_runningActionsCount = 0;
var obj4060_SCEventRun_loopCount = 0;
var obj4124_onLoad_activeActionGroupIndex = -1;
var obj4124_onLoad_runningActionsCount = 0;
var obj4124_onLoad_loopCount = 0;
var obj4132_onLoad_activeActionGroupIndex = -1;
var obj4132_onLoad_runningActionsCount = 0;
var obj4132_onLoad_loopCount = 0;
var obj4136_SCEventRun_activeActionGroupIndex = -1;
var obj4136_SCEventRun_runningActionsCount = 0;
var obj4136_SCEventRun_loopCount = 0;
var obj4244_SCEventRun_activeActionGroupIndex = -1;
var obj4244_SCEventRun_runningActionsCount = 0;
var obj4244_SCEventRun_loopCount = 0;
var obj4341_SCEventRun_activeActionGroupIndex = -1;
var obj4341_SCEventRun_runningActionsCount = 0;
var obj4341_SCEventRun_loopCount = 0;
var obj4636_SCEventRun_activeActionGroupIndex = -1;
var obj4636_SCEventRun_runningActionsCount = 0;
var obj4636_SCEventRun_loopCount = 0;
var obj5428_onLoad_activeActionGroupIndex = -1;
var obj5428_onLoad_runningActionsCount = 0;
var obj5428_onLoad_loopCount = 0;
var obj5460_SCEventRun_activeActionGroupIndex = -1;
var obj5460_SCEventRun_runningActionsCount = 0;
var obj5460_SCEventRun_loopCount = 0;
var obj5471_SCEventRun_activeActionGroupIndex = -1;
var obj5471_SCEventRun_runningActionsCount = 0;
var obj5471_SCEventRun_loopCount = 0;

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
	 
initDrawImageInCanvas("obj4132", 40, $("#anchor61").attr("data-src"));

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
		
obj4026_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4026_onTap_activeActionGroupIndex = -1;
		$("#obj4026").trigger("obj4026_onTap_ended");
		
		return;
	}
	window.obj4026_onTap_activeActionGroupIndex = 0;
	





























//	action: Run JavaScript
runjs_4243();
function runjs_4243() {
	window.obj4026_onTap_runningActionsCount = obj4026_onTap_runningActionsCount + 1;


	if(localStorage.getItem("ready") === "true")
{
    if(localStorage.getItem("tapped") === "0")
    {
        localStorage.setItem("tapped", "1");
        $("#obj4244").trigger(PubCoder.Events.Run);
    }
}

	setTimeout(function() {
		window.obj4026_onTap_runningActionsCount = window.obj4026_onTap_runningActionsCount - 1;

if (window.obj4026_onTap_runningActionsCount == 0) {
	obj4026_onTap_actionGroup1();
}
	}, 1);
}












};
obj4026_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4026_onTap_activeActionGroupIndex = -1;
		$("#obj4026").trigger("obj4026_onTap_ended");
		
		return;
	}
	window.obj4026_onTap_activeActionGroupIndex = 1;
	










































};
obj4026_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4026_onLoad_activeActionGroupIndex = -1;
		$("#obj4026").trigger("obj4026_onLoad_ended");
		
		return;
	}
	window.obj4026_onLoad_activeActionGroupIndex = 0;
	


//	action: show 
//	target: obj4151 
(function(){
	window.obj4026_onLoad_runningActionsCount = obj4026_onLoad_runningActionsCount + 1;


	var element = "#obj4151";
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
				window.obj4026_onLoad_runningActionsCount = window.obj4026_onLoad_runningActionsCount - 1;

if (window.obj4026_onLoad_runningActionsCount == 0) {
	obj4026_onLoad_actionGroup1();
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
			window.obj4026_onLoad_runningActionsCount = window.obj4026_onLoad_runningActionsCount - 1;

if (window.obj4026_onLoad_runningActionsCount == 0) {
	obj4026_onLoad_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj4153 
(function(){
	window.obj4026_onLoad_runningActionsCount = obj4026_onLoad_runningActionsCount + 1;


	var element = "#obj4153";
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
				window.obj4026_onLoad_runningActionsCount = window.obj4026_onLoad_runningActionsCount - 1;

if (window.obj4026_onLoad_runningActionsCount == 0) {
	obj4026_onLoad_actionGroup1();
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
			window.obj4026_onLoad_runningActionsCount = window.obj4026_onLoad_runningActionsCount - 1;

if (window.obj4026_onLoad_runningActionsCount == 0) {
	obj4026_onLoad_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj4155 
(function(){
	window.obj4026_onLoad_runningActionsCount = obj4026_onLoad_runningActionsCount + 1;


	var element = "#obj4155";
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
				window.obj4026_onLoad_runningActionsCount = window.obj4026_onLoad_runningActionsCount - 1;

if (window.obj4026_onLoad_runningActionsCount == 0) {
	obj4026_onLoad_actionGroup1();
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
			window.obj4026_onLoad_runningActionsCount = window.obj4026_onLoad_runningActionsCount - 1;

if (window.obj4026_onLoad_runningActionsCount == 0) {
	obj4026_onLoad_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();









//	action: playAudioFile
playAudioFile_5603();
function playAudioFile_5603() {
	window.obj4026_onLoad_runningActionsCount = obj4026_onLoad_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5603")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5603");
			$("#obj_audio_playSoundFile5603").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4026_onLoad_runningActionsCount = window.obj4026_onLoad_runningActionsCount - 1;

if (window.obj4026_onLoad_runningActionsCount == 0) {
	obj4026_onLoad_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4026_onLoad_runningActionsCount = window.obj4026_onLoad_runningActionsCount - 1;

if (window.obj4026_onLoad_runningActionsCount == 0) {
	obj4026_onLoad_actionGroup1();
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
				window.obj4026_onLoad_runningActionsCount = window.obj4026_onLoad_runningActionsCount - 1;

if (window.obj4026_onLoad_runningActionsCount == 0) {
	obj4026_onLoad_actionGroup1();
}
			}, false);
		} else {
			window.obj4026_onLoad_runningActionsCount = window.obj4026_onLoad_runningActionsCount - 1;

if (window.obj4026_onLoad_runningActionsCount == 0) {
	obj4026_onLoad_actionGroup1();
}
		}
	}

	
	
	
}





























//	action: run action list container
//	target: obj4341 
runActionList_4350();
function runActionList_4350() {
	window.obj4026_onLoad_runningActionsCount = obj4026_onLoad_runningActionsCount + 1;

	$("#obj4341").trigger('SCEventRun');
	setTimeout(function() {
		window.obj4026_onLoad_runningActionsCount = window.obj4026_onLoad_runningActionsCount - 1;

if (window.obj4026_onLoad_runningActionsCount == 0) {
	obj4026_onLoad_actionGroup1();
}		
	}, 1);
}






};
obj4026_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4026_onLoad_activeActionGroupIndex = -1;
		$("#obj4026").trigger("obj4026_onLoad_ended");
		
		return;
	}
	window.obj4026_onLoad_activeActionGroupIndex = 1;
	





























//	action: Run JavaScript
runjs_5604();
function runjs_5604() {
	window.obj4026_onLoad_runningActionsCount = obj4026_onLoad_runningActionsCount + 1;


	localStorage.setItem("ready", "true");

	setTimeout(function() {
		window.obj4026_onLoad_runningActionsCount = window.obj4026_onLoad_runningActionsCount - 1;

if (window.obj4026_onLoad_runningActionsCount == 0) {
	obj4026_onLoad_actionGroup2();
}
	}, 1);
}












};
obj4026_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4026_onLoad_activeActionGroupIndex = -1;
		$("#obj4026").trigger("obj4026_onLoad_ended");
		
		return;
	}
	window.obj4026_onLoad_activeActionGroupIndex = 2;
	










































};
obj4236_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4236_onLoad_activeActionGroupIndex = -1;
		$("#obj4236").trigger("obj4236_onLoad_ended");
		
		return;
	}
	window.obj4236_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj4236 
move_4361();
function move_4361() {
	window.obj4236_onLoad_runningActionsCount = obj4236_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4236");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-131";
	var moveY = "+=-309";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1500, easing, function() {
		setTimeout(function() {
			window.obj4236_onLoad_runningActionsCount = window.obj4236_onLoad_runningActionsCount - 1;

if (window.obj4236_onLoad_runningActionsCount == 0) {
	obj4236_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4236 
move_4362();
function move_4362() {
	window.obj4236_onLoad_runningActionsCount = obj4236_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4236");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-204";
	var moveY = "+=-159";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1500, easing, function() {
		setTimeout(function() {
			window.obj4236_onLoad_runningActionsCount = window.obj4236_onLoad_runningActionsCount - 1;

if (window.obj4236_onLoad_runningActionsCount == 0) {
	obj4236_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4236 
move_4363();
function move_4363() {
	window.obj4236_onLoad_runningActionsCount = obj4236_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4236");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-78";
	var moveY = "+=-232";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1500, easing, function() {
		setTimeout(function() {
			window.obj4236_onLoad_runningActionsCount = window.obj4236_onLoad_runningActionsCount - 1;

if (window.obj4236_onLoad_runningActionsCount == 0) {
	obj4236_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4236 
move_4364();
function move_4364() {
	window.obj4236_onLoad_runningActionsCount = obj4236_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4236");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-185";
	var moveY = "+=-204";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1500, easing, function() {
		setTimeout(function() {
			window.obj4236_onLoad_runningActionsCount = window.obj4236_onLoad_runningActionsCount - 1;

if (window.obj4236_onLoad_runningActionsCount == 0) {
	obj4236_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4236 
move_4365();
function move_4365() {
	window.obj4236_onLoad_runningActionsCount = obj4236_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4236");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-182";
	var moveY = "+=-154";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1500, easing, function() {
		setTimeout(function() {
			window.obj4236_onLoad_runningActionsCount = window.obj4236_onLoad_runningActionsCount - 1;

if (window.obj4236_onLoad_runningActionsCount == 0) {
	obj4236_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4236 
move_4366();
function move_4366() {
	window.obj4236_onLoad_runningActionsCount = obj4236_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4236");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-118";
	var moveY = "+=-210";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1500, easing, function() {
		setTimeout(function() {
			window.obj4236_onLoad_runningActionsCount = window.obj4236_onLoad_runningActionsCount - 1;

if (window.obj4236_onLoad_runningActionsCount == 0) {
	obj4236_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj4236_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4236_onLoad_activeActionGroupIndex = -1;
		$("#obj4236").trigger("obj4236_onLoad_ended");
		
		return;
	}
	window.obj4236_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj4236 
move_4368();
function move_4368() {
	window.obj4236_onLoad_runningActionsCount = obj4236_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4236");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1170;
	var moveY = 1040;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj4236_onLoad_runningActionsCount = window.obj4236_onLoad_runningActionsCount - 1;

if (window.obj4236_onLoad_runningActionsCount == 0) {
	obj4236_onLoad_actionGroup2();
}
		}, 1);
	});
}












//	action: wait
wait_4369();
function wait_4369() {
	window.obj4236_onLoad_runningActionsCount = obj4236_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj4236_onLoad_runningActionsCount = window.obj4236_onLoad_runningActionsCount - 1;

if (window.obj4236_onLoad_runningActionsCount == 0) {
	obj4236_onLoad_actionGroup2();
}
	}, 3000);
}

























};
obj4236_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4236_onLoad_activeActionGroupIndex = -1;
		$("#obj4236").trigger("obj4236_onLoad_ended");
		
		return;
	}
	window.obj4236_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj4236_onLoad();
function loop_obj4236_onLoad() {

	var loopCount = 0;

	window.obj4236_onLoad_loopCount = window.obj4236_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj4236_onLoad_loopCount > loopCount) {
		window.obj4236_onLoad_loopCount = 0
		obj4236_onLoad_actionGroup3();
	} else {
		obj4236_onLoad_actionGroup0();
	}

}


























};
obj4236_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4236_onLoad_activeActionGroupIndex = -1;
		$("#obj4236").trigger("obj4236_onLoad_ended");
		
		return;
	}
	window.obj4236_onLoad_activeActionGroupIndex = 3;
	










































};
obj4231_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4231_onLoad_activeActionGroupIndex = -1;
		$("#obj4231").trigger("obj4231_onLoad_ended");
		
		return;
	}
	window.obj4231_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj4231 
move_4352();
function move_4352() {
	window.obj4231_onLoad_runningActionsCount = obj4231_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4231");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-234";
	var moveY = "+=116";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj4231_onLoad_runningActionsCount = window.obj4231_onLoad_runningActionsCount - 1;

if (window.obj4231_onLoad_runningActionsCount == 0) {
	obj4231_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4231 
move_4353();
function move_4353() {
	window.obj4231_onLoad_runningActionsCount = obj4231_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4231");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-305";
	var moveY = "+=111";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj4231_onLoad_runningActionsCount = window.obj4231_onLoad_runningActionsCount - 1;

if (window.obj4231_onLoad_runningActionsCount == 0) {
	obj4231_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4231 
move_4354();
function move_4354() {
	window.obj4231_onLoad_runningActionsCount = obj4231_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4231");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-245";
	var moveY = "+=259";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj4231_onLoad_runningActionsCount = window.obj4231_onLoad_runningActionsCount - 1;

if (window.obj4231_onLoad_runningActionsCount == 0) {
	obj4231_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4231 
move_4355();
function move_4355() {
	window.obj4231_onLoad_runningActionsCount = obj4231_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4231");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-284";
	var moveY = "+=209";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj4231_onLoad_runningActionsCount = window.obj4231_onLoad_runningActionsCount - 1;

if (window.obj4231_onLoad_runningActionsCount == 0) {
	obj4231_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4231 
move_4356();
function move_4356() {
	window.obj4231_onLoad_runningActionsCount = obj4231_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4231");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-278";
	var moveY = "+=120";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj4231_onLoad_runningActionsCount = window.obj4231_onLoad_runningActionsCount - 1;

if (window.obj4231_onLoad_runningActionsCount == 0) {
	obj4231_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj4231_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4231_onLoad_activeActionGroupIndex = -1;
		$("#obj4231").trigger("obj4231_onLoad_ended");
		
		return;
	}
	window.obj4231_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj4231 
move_4358();
function move_4358() {
	window.obj4231_onLoad_runningActionsCount = obj4231_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4231");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1377;
	var moveY = 27;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj4231_onLoad_runningActionsCount = window.obj4231_onLoad_runningActionsCount - 1;

if (window.obj4231_onLoad_runningActionsCount == 0) {
	obj4231_onLoad_actionGroup2();
}
		}, 1);
	});
}












//	action: wait
wait_4359();
function wait_4359() {
	window.obj4231_onLoad_runningActionsCount = obj4231_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj4231_onLoad_runningActionsCount = window.obj4231_onLoad_runningActionsCount - 1;

if (window.obj4231_onLoad_runningActionsCount == 0) {
	obj4231_onLoad_actionGroup2();
}
	}, 2000);
}

























};
obj4231_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4231_onLoad_activeActionGroupIndex = -1;
		$("#obj4231").trigger("obj4231_onLoad_ended");
		
		return;
	}
	window.obj4231_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj4231_onLoad();
function loop_obj4231_onLoad() {

	var loopCount = 0;

	window.obj4231_onLoad_loopCount = window.obj4231_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj4231_onLoad_loopCount > loopCount) {
		window.obj4231_onLoad_loopCount = 0
		obj4231_onLoad_actionGroup3();
	} else {
		obj4231_onLoad_actionGroup0();
	}

}


























};
obj4231_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4231_onLoad_activeActionGroupIndex = -1;
		$("#obj4231").trigger("obj4231_onLoad_ended");
		
		return;
	}
	window.obj4231_onLoad_activeActionGroupIndex = 3;
	










































};
obj4167_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4167_onLoad_activeActionGroupIndex = -1;
		$("#obj4167").trigger("obj4167_onLoad_ended");
		
		return;
	}
	window.obj4167_onLoad_activeActionGroupIndex = 0;
	


















//	action: scale
//	target: obj4167 
scale_4170();
function scale_4170() {
	window.obj4167_onLoad_runningActionsCount = obj4167_onLoad_runningActionsCount + 1;

	
	var targetObjectId = "#obj4167";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj4167';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '-1';
	var scaleYValue = '1';
	var effectDuration = '0';
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
		scale_4170_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4170_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4170_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_4170_completed() {
	setTimeout(function() {
		window.obj4167_onLoad_runningActionsCount = window.obj4167_onLoad_runningActionsCount - 1;

if (window.obj4167_onLoad_runningActionsCount == 0) {
	obj4167_onLoad_actionGroup1();
}
	}, 1);
}
























};
obj4167_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4167_onLoad_activeActionGroupIndex = -1;
		$("#obj4167").trigger("obj4167_onLoad_ended");
		
		return;
	}
	window.obj4167_onLoad_activeActionGroupIndex = 1;
	










































};
obj4329_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4329_onLoad_activeActionGroupIndex = -1;
		$("#obj4329").trigger("obj4329_onLoad_ended");
		
		return;
	}
	window.obj4329_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj4329 
move_4332();
function move_4332() {
	window.obj4329_onLoad_runningActionsCount = obj4329_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4329");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=288";
	var moveY = "+=-18";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1500, easing, function() {
		setTimeout(function() {
			window.obj4329_onLoad_runningActionsCount = window.obj4329_onLoad_runningActionsCount - 1;

if (window.obj4329_onLoad_runningActionsCount == 0) {
	obj4329_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4329 
move_4333();
function move_4333() {
	window.obj4329_onLoad_runningActionsCount = obj4329_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4329");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=188";
	var moveY = "+=134";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj4329_onLoad_runningActionsCount = window.obj4329_onLoad_runningActionsCount - 1;

if (window.obj4329_onLoad_runningActionsCount == 0) {
	obj4329_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4329 
move_4334();
function move_4334() {
	window.obj4329_onLoad_runningActionsCount = obj4329_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4329");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=170";
	var moveY = "+=-72";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1500, easing, function() {
		setTimeout(function() {
			window.obj4329_onLoad_runningActionsCount = window.obj4329_onLoad_runningActionsCount - 1;

if (window.obj4329_onLoad_runningActionsCount == 0) {
	obj4329_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4329 
move_4335();
function move_4335() {
	window.obj4329_onLoad_runningActionsCount = obj4329_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4329");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=232";
	var moveY = "+=130";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1700, easing, function() {
		setTimeout(function() {
			window.obj4329_onLoad_runningActionsCount = window.obj4329_onLoad_runningActionsCount - 1;

if (window.obj4329_onLoad_runningActionsCount == 0) {
	obj4329_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4329 
move_4336();
function move_4336() {
	window.obj4329_onLoad_runningActionsCount = obj4329_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4329");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=264";
	var moveY = "+=-110";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1800, easing, function() {
		setTimeout(function() {
			window.obj4329_onLoad_runningActionsCount = window.obj4329_onLoad_runningActionsCount - 1;

if (window.obj4329_onLoad_runningActionsCount == 0) {
	obj4329_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4329 
move_4337();
function move_4337() {
	window.obj4329_onLoad_runningActionsCount = obj4329_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4329");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=386";
	var moveY = "+=108";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj4329_onLoad_runningActionsCount = window.obj4329_onLoad_runningActionsCount - 1;

if (window.obj4329_onLoad_runningActionsCount == 0) {
	obj4329_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj4329_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4329_onLoad_activeActionGroupIndex = -1;
		$("#obj4329").trigger("obj4329_onLoad_ended");
		
		return;
	}
	window.obj4329_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj4329 
move_4339();
function move_4339() {
	window.obj4329_onLoad_runningActionsCount = obj4329_onLoad_runningActionsCount + 1;


	var easing = "linear";

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

	var targetObject = $("#obj4329");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = -113;
	var moveY = 560;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj4329_onLoad_runningActionsCount = window.obj4329_onLoad_runningActionsCount - 1;

if (window.obj4329_onLoad_runningActionsCount == 0) {
	obj4329_onLoad_actionGroup2();
}
		}, 1);
	});
}












//	action: wait
wait_4338();
function wait_4338() {
	window.obj4329_onLoad_runningActionsCount = obj4329_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj4329_onLoad_runningActionsCount = window.obj4329_onLoad_runningActionsCount - 1;

if (window.obj4329_onLoad_runningActionsCount == 0) {
	obj4329_onLoad_actionGroup2();
}
	}, 1000);
}

























};
obj4329_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4329_onLoad_activeActionGroupIndex = -1;
		$("#obj4329").trigger("obj4329_onLoad_ended");
		
		return;
	}
	window.obj4329_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj4329_onLoad();
function loop_obj4329_onLoad() {

	var loopCount = 0;

	window.obj4329_onLoad_loopCount = window.obj4329_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj4329_onLoad_loopCount > loopCount) {
		window.obj4329_onLoad_loopCount = 0
		obj4329_onLoad_actionGroup3();
	} else {
		obj4329_onLoad_actionGroup0();
	}

}


























};
obj4329_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4329_onLoad_activeActionGroupIndex = -1;
		$("#obj4329").trigger("obj4329_onLoad_ended");
		
		return;
	}
	window.obj4329_onLoad_activeActionGroupIndex = 3;
	










































};
obj4315_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4315_onLoad_activeActionGroupIndex = -1;
		$("#obj4315").trigger("obj4315_onLoad_ended");
		
		return;
	}
	window.obj4315_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj4315 
move_4318();
function move_4318() {
	window.obj4315_onLoad_runningActionsCount = obj4315_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4315");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=198";
	var moveY = "+=130";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj4315_onLoad_runningActionsCount = window.obj4315_onLoad_runningActionsCount - 1;

if (window.obj4315_onLoad_runningActionsCount == 0) {
	obj4315_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4315 
move_4319();
function move_4319() {
	window.obj4315_onLoad_runningActionsCount = obj4315_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4315");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=154";
	var moveY = "+=56";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 900, easing, function() {
		setTimeout(function() {
			window.obj4315_onLoad_runningActionsCount = window.obj4315_onLoad_runningActionsCount - 1;

if (window.obj4315_onLoad_runningActionsCount == 0) {
	obj4315_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4315 
move_4320();
function move_4320() {
	window.obj4315_onLoad_runningActionsCount = obj4315_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4315");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=160";
	var moveY = "+=20";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 700, easing, function() {
		setTimeout(function() {
			window.obj4315_onLoad_runningActionsCount = window.obj4315_onLoad_runningActionsCount - 1;

if (window.obj4315_onLoad_runningActionsCount == 0) {
	obj4315_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4315 
move_4321();
function move_4321() {
	window.obj4315_onLoad_runningActionsCount = obj4315_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4315");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=168";
	var moveY = "+=4";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 900, easing, function() {
		setTimeout(function() {
			window.obj4315_onLoad_runningActionsCount = window.obj4315_onLoad_runningActionsCount - 1;

if (window.obj4315_onLoad_runningActionsCount == 0) {
	obj4315_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4315 
move_4322();
function move_4322() {
	window.obj4315_onLoad_runningActionsCount = obj4315_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4315");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=190";
	var moveY = "+=-14";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj4315_onLoad_runningActionsCount = window.obj4315_onLoad_runningActionsCount - 1;

if (window.obj4315_onLoad_runningActionsCount == 0) {
	obj4315_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4315 
move_4323();
function move_4323() {
	window.obj4315_onLoad_runningActionsCount = obj4315_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4315");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=186";
	var moveY = "+=16";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 900, easing, function() {
		setTimeout(function() {
			window.obj4315_onLoad_runningActionsCount = window.obj4315_onLoad_runningActionsCount - 1;

if (window.obj4315_onLoad_runningActionsCount == 0) {
	obj4315_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4315 
move_4324();
function move_4324() {
	window.obj4315_onLoad_runningActionsCount = obj4315_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4315");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=166";
	var moveY = "+=22";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1300, easing, function() {
		setTimeout(function() {
			window.obj4315_onLoad_runningActionsCount = window.obj4315_onLoad_runningActionsCount - 1;

if (window.obj4315_onLoad_runningActionsCount == 0) {
	obj4315_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4315 
move_4325();
function move_4325() {
	window.obj4315_onLoad_runningActionsCount = obj4315_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4315");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=358";
	var moveY = "+=98";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1600, easing, function() {
		setTimeout(function() {
			window.obj4315_onLoad_runningActionsCount = window.obj4315_onLoad_runningActionsCount - 1;

if (window.obj4315_onLoad_runningActionsCount == 0) {
	obj4315_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj4315_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4315_onLoad_activeActionGroupIndex = -1;
		$("#obj4315").trigger("obj4315_onLoad_ended");
		
		return;
	}
	window.obj4315_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj4315 
move_4327();
function move_4327() {
	window.obj4315_onLoad_runningActionsCount = obj4315_onLoad_runningActionsCount + 1;


	var easing = "linear";

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

	var targetObject = $("#obj4315");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = -132;
	var moveY = 100;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj4315_onLoad_runningActionsCount = window.obj4315_onLoad_runningActionsCount - 1;

if (window.obj4315_onLoad_runningActionsCount == 0) {
	obj4315_onLoad_actionGroup2();
}
		}, 1);
	});
}












//	action: wait
wait_4326();
function wait_4326() {
	window.obj4315_onLoad_runningActionsCount = obj4315_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj4315_onLoad_runningActionsCount = window.obj4315_onLoad_runningActionsCount - 1;

if (window.obj4315_onLoad_runningActionsCount == 0) {
	obj4315_onLoad_actionGroup2();
}
	}, 1000);
}

























};
obj4315_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4315_onLoad_activeActionGroupIndex = -1;
		$("#obj4315").trigger("obj4315_onLoad_ended");
		
		return;
	}
	window.obj4315_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj4315_onLoad();
function loop_obj4315_onLoad() {

	var loopCount = 0;

	window.obj4315_onLoad_loopCount = window.obj4315_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj4315_onLoad_loopCount > loopCount) {
		window.obj4315_onLoad_loopCount = 0
		obj4315_onLoad_actionGroup3();
	} else {
		obj4315_onLoad_actionGroup0();
	}

}


























};
obj4315_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4315_onLoad_activeActionGroupIndex = -1;
		$("#obj4315").trigger("obj4315_onLoad_ended");
		
		return;
	}
	window.obj4315_onLoad_activeActionGroupIndex = 3;
	










































};
obj4303_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4303_onLoad_activeActionGroupIndex = -1;
		$("#obj4303").trigger("obj4303_onLoad_ended");
		
		return;
	}
	window.obj4303_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj4303 
move_4306();
function move_4306() {
	window.obj4303_onLoad_runningActionsCount = obj4303_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4303");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=288";
	var moveY = "+=-18";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj4303_onLoad_runningActionsCount = window.obj4303_onLoad_runningActionsCount - 1;

if (window.obj4303_onLoad_runningActionsCount == 0) {
	obj4303_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4303 
move_4307();
function move_4307() {
	window.obj4303_onLoad_runningActionsCount = obj4303_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4303");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=188";
	var moveY = "+=134";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj4303_onLoad_runningActionsCount = window.obj4303_onLoad_runningActionsCount - 1;

if (window.obj4303_onLoad_runningActionsCount == 0) {
	obj4303_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4303 
move_4308();
function move_4308() {
	window.obj4303_onLoad_runningActionsCount = obj4303_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4303");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=170";
	var moveY = "+=-72";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj4303_onLoad_runningActionsCount = window.obj4303_onLoad_runningActionsCount - 1;

if (window.obj4303_onLoad_runningActionsCount == 0) {
	obj4303_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4303 
move_4309();
function move_4309() {
	window.obj4303_onLoad_runningActionsCount = obj4303_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4303");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=232";
	var moveY = "+=130";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj4303_onLoad_runningActionsCount = window.obj4303_onLoad_runningActionsCount - 1;

if (window.obj4303_onLoad_runningActionsCount == 0) {
	obj4303_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4303 
move_4310();
function move_4310() {
	window.obj4303_onLoad_runningActionsCount = obj4303_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4303");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=264";
	var moveY = "+=-110";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj4303_onLoad_runningActionsCount = window.obj4303_onLoad_runningActionsCount - 1;

if (window.obj4303_onLoad_runningActionsCount == 0) {
	obj4303_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4303 
move_4311();
function move_4311() {
	window.obj4303_onLoad_runningActionsCount = obj4303_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4303");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=386";
	var moveY = "+=108";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj4303_onLoad_runningActionsCount = window.obj4303_onLoad_runningActionsCount - 1;

if (window.obj4303_onLoad_runningActionsCount == 0) {
	obj4303_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj4303_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4303_onLoad_activeActionGroupIndex = -1;
		$("#obj4303").trigger("obj4303_onLoad_ended");
		
		return;
	}
	window.obj4303_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj4303 
move_4313();
function move_4313() {
	window.obj4303_onLoad_runningActionsCount = obj4303_onLoad_runningActionsCount + 1;


	var easing = "linear";

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

	var targetObject = $("#obj4303");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = -156;
	var moveY = 421;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj4303_onLoad_runningActionsCount = window.obj4303_onLoad_runningActionsCount - 1;

if (window.obj4303_onLoad_runningActionsCount == 0) {
	obj4303_onLoad_actionGroup2();
}
		}, 1);
	});
}












//	action: wait
wait_4312();
function wait_4312() {
	window.obj4303_onLoad_runningActionsCount = obj4303_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj4303_onLoad_runningActionsCount = window.obj4303_onLoad_runningActionsCount - 1;

if (window.obj4303_onLoad_runningActionsCount == 0) {
	obj4303_onLoad_actionGroup2();
}
	}, 400);
}

























};
obj4303_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4303_onLoad_activeActionGroupIndex = -1;
		$("#obj4303").trigger("obj4303_onLoad_ended");
		
		return;
	}
	window.obj4303_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj4303_onLoad();
function loop_obj4303_onLoad() {

	var loopCount = 0;

	window.obj4303_onLoad_loopCount = window.obj4303_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj4303_onLoad_loopCount > loopCount) {
		window.obj4303_onLoad_loopCount = 0
		obj4303_onLoad_actionGroup3();
	} else {
		obj4303_onLoad_actionGroup0();
	}

}


























};
obj4303_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4303_onLoad_activeActionGroupIndex = -1;
		$("#obj4303").trigger("obj4303_onLoad_ended");
		
		return;
	}
	window.obj4303_onLoad_activeActionGroupIndex = 3;
	










































};
obj4288_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4288_onLoad_activeActionGroupIndex = -1;
		$("#obj4288").trigger("obj4288_onLoad_ended");
		
		return;
	}
	window.obj4288_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj4288 
move_4292();
function move_4292() {
	window.obj4288_onLoad_runningActionsCount = obj4288_onLoad_runningActionsCount + 1;


	var easing = "linear";

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

	var targetObject = $("#obj4288");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = -116;
	var moveY = 208;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj4288_onLoad_runningActionsCount = window.obj4288_onLoad_runningActionsCount - 1;

if (window.obj4288_onLoad_runningActionsCount == 0) {
	obj4288_onLoad_actionGroup1();
}
		}, 1);
	});
}












//	action: wait
wait_4291();
function wait_4291() {
	window.obj4288_onLoad_runningActionsCount = obj4288_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj4288_onLoad_runningActionsCount = window.obj4288_onLoad_runningActionsCount - 1;

if (window.obj4288_onLoad_runningActionsCount == 0) {
	obj4288_onLoad_actionGroup1();
}
	}, 1000);
}

























};
obj4288_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4288_onLoad_activeActionGroupIndex = -1;
		$("#obj4288").trigger("obj4288_onLoad_ended");
		
		return;
	}
	window.obj4288_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj4288 
move_4293();
function move_4293() {
	window.obj4288_onLoad_runningActionsCount = obj4288_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4288");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=172";
	var moveY = "+=24";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 700, easing, function() {
		setTimeout(function() {
			window.obj4288_onLoad_runningActionsCount = window.obj4288_onLoad_runningActionsCount - 1;

if (window.obj4288_onLoad_runningActionsCount == 0) {
	obj4288_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj4288 
move_4294();
function move_4294() {
	window.obj4288_onLoad_runningActionsCount = obj4288_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4288");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=148";
	var moveY = "+=-12";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 900, easing, function() {
		setTimeout(function() {
			window.obj4288_onLoad_runningActionsCount = window.obj4288_onLoad_runningActionsCount - 1;

if (window.obj4288_onLoad_runningActionsCount == 0) {
	obj4288_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj4288 
move_4295();
function move_4295() {
	window.obj4288_onLoad_runningActionsCount = obj4288_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4288");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=140";
	var moveY = "+=-12";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 700, easing, function() {
		setTimeout(function() {
			window.obj4288_onLoad_runningActionsCount = window.obj4288_onLoad_runningActionsCount - 1;

if (window.obj4288_onLoad_runningActionsCount == 0) {
	obj4288_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj4288 
move_4296();
function move_4296() {
	window.obj4288_onLoad_runningActionsCount = obj4288_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4288");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=166";
	var moveY = "+=-65";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 900, easing, function() {
		setTimeout(function() {
			window.obj4288_onLoad_runningActionsCount = window.obj4288_onLoad_runningActionsCount - 1;

if (window.obj4288_onLoad_runningActionsCount == 0) {
	obj4288_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj4288 
move_4297();
function move_4297() {
	window.obj4288_onLoad_runningActionsCount = obj4288_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4288");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=190";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 700, easing, function() {
		setTimeout(function() {
			window.obj4288_onLoad_runningActionsCount = window.obj4288_onLoad_runningActionsCount - 1;

if (window.obj4288_onLoad_runningActionsCount == 0) {
	obj4288_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj4288 
move_4298();
function move_4298() {
	window.obj4288_onLoad_runningActionsCount = obj4288_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4288");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=168";
	var moveY = "+=11";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 900, easing, function() {
		setTimeout(function() {
			window.obj4288_onLoad_runningActionsCount = window.obj4288_onLoad_runningActionsCount - 1;

if (window.obj4288_onLoad_runningActionsCount == 0) {
	obj4288_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj4288 
move_4299();
function move_4299() {
	window.obj4288_onLoad_runningActionsCount = obj4288_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4288");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=146";
	var moveY = "+=54";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 700, easing, function() {
		setTimeout(function() {
			window.obj4288_onLoad_runningActionsCount = window.obj4288_onLoad_runningActionsCount - 1;

if (window.obj4288_onLoad_runningActionsCount == 0) {
	obj4288_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj4288 
move_4300();
function move_4300() {
	window.obj4288_onLoad_runningActionsCount = obj4288_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4288");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=178";
	var moveY = "+=46";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 900, easing, function() {
		setTimeout(function() {
			window.obj4288_onLoad_runningActionsCount = window.obj4288_onLoad_runningActionsCount - 1;

if (window.obj4288_onLoad_runningActionsCount == 0) {
	obj4288_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj4288 
move_4301();
function move_4301() {
	window.obj4288_onLoad_runningActionsCount = obj4288_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4288");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=170";
	var moveY = "+=90";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 700, easing, function() {
		setTimeout(function() {
			window.obj4288_onLoad_runningActionsCount = window.obj4288_onLoad_runningActionsCount - 1;

if (window.obj4288_onLoad_runningActionsCount == 0) {
	obj4288_onLoad_actionGroup2();
}
		}, 1);
	});
}






































};
obj4288_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4288_onLoad_activeActionGroupIndex = -1;
		$("#obj4288").trigger("obj4288_onLoad_ended");
		
		return;
	}
	window.obj4288_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj4288_onLoad();
function loop_obj4288_onLoad() {

	var loopCount = 0;

	window.obj4288_onLoad_loopCount = window.obj4288_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj4288_onLoad_loopCount > loopCount) {
		window.obj4288_onLoad_loopCount = 0
		obj4288_onLoad_actionGroup3();
	} else {
		obj4288_onLoad_actionGroup0();
	}

}


























};
obj4288_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4288_onLoad_activeActionGroupIndex = -1;
		$("#obj4288").trigger("obj4288_onLoad_ended");
		
		return;
	}
	window.obj4288_onLoad_activeActionGroupIndex = 3;
	










































};
obj4276_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4276_onLoad_activeActionGroupIndex = -1;
		$("#obj4276").trigger("obj4276_onLoad_ended");
		
		return;
	}
	window.obj4276_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj4276 
move_4280();
function move_4280() {
	window.obj4276_onLoad_runningActionsCount = obj4276_onLoad_runningActionsCount + 1;


	var easing = "linear";

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

	var targetObject = $("#obj4276");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = -125;
	var moveY = 35;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj4276_onLoad_runningActionsCount = window.obj4276_onLoad_runningActionsCount - 1;

if (window.obj4276_onLoad_runningActionsCount == 0) {
	obj4276_onLoad_actionGroup1();
}
		}, 1);
	});
}












//	action: wait
wait_4279();
function wait_4279() {
	window.obj4276_onLoad_runningActionsCount = obj4276_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj4276_onLoad_runningActionsCount = window.obj4276_onLoad_runningActionsCount - 1;

if (window.obj4276_onLoad_runningActionsCount == 0) {
	obj4276_onLoad_actionGroup1();
}
	}, 700);
}

























};
obj4276_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4276_onLoad_activeActionGroupIndex = -1;
		$("#obj4276").trigger("obj4276_onLoad_ended");
		
		return;
	}
	window.obj4276_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj4276 
move_4281();
function move_4281() {
	window.obj4276_onLoad_runningActionsCount = obj4276_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4276");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=288";
	var moveY = "+=-18";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj4276_onLoad_runningActionsCount = window.obj4276_onLoad_runningActionsCount - 1;

if (window.obj4276_onLoad_runningActionsCount == 0) {
	obj4276_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj4276 
move_4282();
function move_4282() {
	window.obj4276_onLoad_runningActionsCount = obj4276_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4276");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=188";
	var moveY = "+=134";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj4276_onLoad_runningActionsCount = window.obj4276_onLoad_runningActionsCount - 1;

if (window.obj4276_onLoad_runningActionsCount == 0) {
	obj4276_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj4276 
move_4283();
function move_4283() {
	window.obj4276_onLoad_runningActionsCount = obj4276_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4276");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=170";
	var moveY = "+=-72";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj4276_onLoad_runningActionsCount = window.obj4276_onLoad_runningActionsCount - 1;

if (window.obj4276_onLoad_runningActionsCount == 0) {
	obj4276_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj4276 
move_4284();
function move_4284() {
	window.obj4276_onLoad_runningActionsCount = obj4276_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4276");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=232";
	var moveY = "+=130";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1700, easing, function() {
		setTimeout(function() {
			window.obj4276_onLoad_runningActionsCount = window.obj4276_onLoad_runningActionsCount - 1;

if (window.obj4276_onLoad_runningActionsCount == 0) {
	obj4276_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj4276 
move_4285();
function move_4285() {
	window.obj4276_onLoad_runningActionsCount = obj4276_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4276");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=264";
	var moveY = "+=-110";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1800, easing, function() {
		setTimeout(function() {
			window.obj4276_onLoad_runningActionsCount = window.obj4276_onLoad_runningActionsCount - 1;

if (window.obj4276_onLoad_runningActionsCount == 0) {
	obj4276_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj4276 
move_4286();
function move_4286() {
	window.obj4276_onLoad_runningActionsCount = obj4276_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4276");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=386";
	var moveY = "+=108";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1500, easing, function() {
		setTimeout(function() {
			window.obj4276_onLoad_runningActionsCount = window.obj4276_onLoad_runningActionsCount - 1;

if (window.obj4276_onLoad_runningActionsCount == 0) {
	obj4276_onLoad_actionGroup2();
}
		}, 1);
	});
}






































};
obj4276_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4276_onLoad_activeActionGroupIndex = -1;
		$("#obj4276").trigger("obj4276_onLoad_ended");
		
		return;
	}
	window.obj4276_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj4276_onLoad();
function loop_obj4276_onLoad() {

	var loopCount = 0;

	window.obj4276_onLoad_loopCount = window.obj4276_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj4276_onLoad_loopCount > loopCount) {
		window.obj4276_onLoad_loopCount = 0
		obj4276_onLoad_actionGroup3();
	} else {
		obj4276_onLoad_actionGroup0();
	}

}


























};
obj4276_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4276_onLoad_activeActionGroupIndex = -1;
		$("#obj4276").trigger("obj4276_onLoad_ended");
		
		return;
	}
	window.obj4276_onLoad_activeActionGroupIndex = 3;
	










































};
obj4262_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4262_onLoad_activeActionGroupIndex = -1;
		$("#obj4262").trigger("obj4262_onLoad_ended");
		
		return;
	}
	window.obj4262_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj4262 
move_4266();
function move_4266() {
	window.obj4262_onLoad_runningActionsCount = obj4262_onLoad_runningActionsCount + 1;


	var easing = "linear";

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

	var targetObject = $("#obj4262");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = -83;
	var moveY = 734;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj4262_onLoad_runningActionsCount = window.obj4262_onLoad_runningActionsCount - 1;

if (window.obj4262_onLoad_runningActionsCount == 0) {
	obj4262_onLoad_actionGroup1();
}
		}, 1);
	});
}












//	action: wait
wait_4265();
function wait_4265() {
	window.obj4262_onLoad_runningActionsCount = obj4262_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj4262_onLoad_runningActionsCount = window.obj4262_onLoad_runningActionsCount - 1;

if (window.obj4262_onLoad_runningActionsCount == 0) {
	obj4262_onLoad_actionGroup1();
}
	}, 800);
}

























};
obj4262_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4262_onLoad_activeActionGroupIndex = -1;
		$("#obj4262").trigger("obj4262_onLoad_ended");
		
		return;
	}
	window.obj4262_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj4262 
move_4267();
function move_4267() {
	window.obj4262_onLoad_runningActionsCount = obj4262_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4262");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=198";
	var moveY = "+=130";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj4262_onLoad_runningActionsCount = window.obj4262_onLoad_runningActionsCount - 1;

if (window.obj4262_onLoad_runningActionsCount == 0) {
	obj4262_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj4262 
move_4268();
function move_4268() {
	window.obj4262_onLoad_runningActionsCount = obj4262_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4262");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=154";
	var moveY = "+=56";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj4262_onLoad_runningActionsCount = window.obj4262_onLoad_runningActionsCount - 1;

if (window.obj4262_onLoad_runningActionsCount == 0) {
	obj4262_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj4262 
move_4269();
function move_4269() {
	window.obj4262_onLoad_runningActionsCount = obj4262_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4262");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=160";
	var moveY = "+=20";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 700, easing, function() {
		setTimeout(function() {
			window.obj4262_onLoad_runningActionsCount = window.obj4262_onLoad_runningActionsCount - 1;

if (window.obj4262_onLoad_runningActionsCount == 0) {
	obj4262_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj4262 
move_4270();
function move_4270() {
	window.obj4262_onLoad_runningActionsCount = obj4262_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4262");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=168";
	var moveY = "+=4";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 900, easing, function() {
		setTimeout(function() {
			window.obj4262_onLoad_runningActionsCount = window.obj4262_onLoad_runningActionsCount - 1;

if (window.obj4262_onLoad_runningActionsCount == 0) {
	obj4262_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj4262 
move_4271();
function move_4271() {
	window.obj4262_onLoad_runningActionsCount = obj4262_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4262");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=190";
	var moveY = "+=-14";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj4262_onLoad_runningActionsCount = window.obj4262_onLoad_runningActionsCount - 1;

if (window.obj4262_onLoad_runningActionsCount == 0) {
	obj4262_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj4262 
move_4272();
function move_4272() {
	window.obj4262_onLoad_runningActionsCount = obj4262_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4262");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=186";
	var moveY = "+=16";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 900, easing, function() {
		setTimeout(function() {
			window.obj4262_onLoad_runningActionsCount = window.obj4262_onLoad_runningActionsCount - 1;

if (window.obj4262_onLoad_runningActionsCount == 0) {
	obj4262_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj4262 
move_4273();
function move_4273() {
	window.obj4262_onLoad_runningActionsCount = obj4262_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4262");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=166";
	var moveY = "+=22";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj4262_onLoad_runningActionsCount = window.obj4262_onLoad_runningActionsCount - 1;

if (window.obj4262_onLoad_runningActionsCount == 0) {
	obj4262_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj4262 
move_4274();
function move_4274() {
	window.obj4262_onLoad_runningActionsCount = obj4262_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4262");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=358";
	var moveY = "+=98";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1600, easing, function() {
		setTimeout(function() {
			window.obj4262_onLoad_runningActionsCount = window.obj4262_onLoad_runningActionsCount - 1;

if (window.obj4262_onLoad_runningActionsCount == 0) {
	obj4262_onLoad_actionGroup2();
}
		}, 1);
	});
}






































};
obj4262_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4262_onLoad_activeActionGroupIndex = -1;
		$("#obj4262").trigger("obj4262_onLoad_ended");
		
		return;
	}
	window.obj4262_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj4262_onLoad();
function loop_obj4262_onLoad() {

	var loopCount = 0;

	window.obj4262_onLoad_loopCount = window.obj4262_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj4262_onLoad_loopCount > loopCount) {
		window.obj4262_onLoad_loopCount = 0
		obj4262_onLoad_actionGroup3();
	} else {
		obj4262_onLoad_actionGroup0();
	}

}


























};
obj4262_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4262_onLoad_activeActionGroupIndex = -1;
		$("#obj4262").trigger("obj4262_onLoad_ended");
		
		return;
	}
	window.obj4262_onLoad_activeActionGroupIndex = 3;
	










































};
obj4250_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4250_onLoad_activeActionGroupIndex = -1;
		$("#obj4250").trigger("obj4250_onLoad_ended");
		
		return;
	}
	window.obj4250_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj4250 
move_4254();
function move_4254() {
	window.obj4250_onLoad_runningActionsCount = obj4250_onLoad_runningActionsCount + 1;


	var easing = "linear";

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

	var targetObject = $("#obj4250");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = -116;
	var moveY = -32;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj4250_onLoad_runningActionsCount = window.obj4250_onLoad_runningActionsCount - 1;

if (window.obj4250_onLoad_runningActionsCount == 0) {
	obj4250_onLoad_actionGroup1();
}
		}, 1);
	});
}












//	action: wait
wait_4253();
function wait_4253() {
	window.obj4250_onLoad_runningActionsCount = obj4250_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj4250_onLoad_runningActionsCount = window.obj4250_onLoad_runningActionsCount - 1;

if (window.obj4250_onLoad_runningActionsCount == 0) {
	obj4250_onLoad_actionGroup1();
}
	}, 1000);
}

























};
obj4250_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4250_onLoad_activeActionGroupIndex = -1;
		$("#obj4250").trigger("obj4250_onLoad_ended");
		
		return;
	}
	window.obj4250_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj4250 
move_4255();
function move_4255() {
	window.obj4250_onLoad_runningActionsCount = obj4250_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4250");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=288";
	var moveY = "+=-18";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj4250_onLoad_runningActionsCount = window.obj4250_onLoad_runningActionsCount - 1;

if (window.obj4250_onLoad_runningActionsCount == 0) {
	obj4250_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj4250 
move_4256();
function move_4256() {
	window.obj4250_onLoad_runningActionsCount = obj4250_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4250");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=188";
	var moveY = "+=134";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1500, easing, function() {
		setTimeout(function() {
			window.obj4250_onLoad_runningActionsCount = window.obj4250_onLoad_runningActionsCount - 1;

if (window.obj4250_onLoad_runningActionsCount == 0) {
	obj4250_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj4250 
move_4257();
function move_4257() {
	window.obj4250_onLoad_runningActionsCount = obj4250_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4250");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=170";
	var moveY = "+=-72";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj4250_onLoad_runningActionsCount = window.obj4250_onLoad_runningActionsCount - 1;

if (window.obj4250_onLoad_runningActionsCount == 0) {
	obj4250_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj4250 
move_4258();
function move_4258() {
	window.obj4250_onLoad_runningActionsCount = obj4250_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4250");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=232";
	var moveY = "+=130";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj4250_onLoad_runningActionsCount = window.obj4250_onLoad_runningActionsCount - 1;

if (window.obj4250_onLoad_runningActionsCount == 0) {
	obj4250_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj4250 
move_4259();
function move_4259() {
	window.obj4250_onLoad_runningActionsCount = obj4250_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4250");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=264";
	var moveY = "+=-110";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj4250_onLoad_runningActionsCount = window.obj4250_onLoad_runningActionsCount - 1;

if (window.obj4250_onLoad_runningActionsCount == 0) {
	obj4250_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj4250 
move_4260();
function move_4260() {
	window.obj4250_onLoad_runningActionsCount = obj4250_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4250");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=386";
	var moveY = "+=108";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1500, easing, function() {
		setTimeout(function() {
			window.obj4250_onLoad_runningActionsCount = window.obj4250_onLoad_runningActionsCount - 1;

if (window.obj4250_onLoad_runningActionsCount == 0) {
	obj4250_onLoad_actionGroup2();
}
		}, 1);
	});
}






































};
obj4250_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4250_onLoad_activeActionGroupIndex = -1;
		$("#obj4250").trigger("obj4250_onLoad_ended");
		
		return;
	}
	window.obj4250_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj4250_onLoad();
function loop_obj4250_onLoad() {

	var loopCount = 0;

	window.obj4250_onLoad_loopCount = window.obj4250_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj4250_onLoad_loopCount > loopCount) {
		window.obj4250_onLoad_loopCount = 0
		obj4250_onLoad_actionGroup3();
	} else {
		obj4250_onLoad_actionGroup0();
	}

}


























};
obj4250_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4250_onLoad_activeActionGroupIndex = -1;
		$("#obj4250").trigger("obj4250_onLoad_ended");
		
		return;
	}
	window.obj4250_onLoad_activeActionGroupIndex = 3;
	










































};
obj4052_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4052_onLoad_activeActionGroupIndex = -1;
		$("#obj4052").trigger("obj4052_onLoad_ended");
		
		return;
	}
	window.obj4052_onLoad_activeActionGroupIndex = 0;
	














//	action: rotate 
//	target: obj4052 
rotate_4109();
function rotate_4109() {
	window.obj4052_onLoad_runningActionsCount = obj4052_onLoad_runningActionsCount + 1;

	
	var targetObjectId = "#obj4052";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj4052';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '-45';
	var rotationSpeed = 0;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = false;
	if (isInfinite) { rotate_4109_completed(); }

	//TweenMax.to(targetObjectId, 0, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_4109_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_4109_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_4109_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_4109_completed() {
	setTimeout(function() {
		window.obj4052_onLoad_runningActionsCount = window.obj4052_onLoad_runningActionsCount - 1;

if (window.obj4052_onLoad_runningActionsCount == 0) {
	obj4052_onLoad_actionGroup1();
}
	}, 1);
}




//	action: scale
//	target: obj4052 
scale_4058();
function scale_4058() {
	window.obj4052_onLoad_runningActionsCount = obj4052_onLoad_runningActionsCount + 1;

	
	var targetObjectId = "#obj4052";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj4052';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '-1';
	var scaleYValue = '1';
	var effectDuration = '0';
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
		scale_4058_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4058_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4058_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_4058_completed() {
	setTimeout(function() {
		window.obj4052_onLoad_runningActionsCount = window.obj4052_onLoad_runningActionsCount - 1;

if (window.obj4052_onLoad_runningActionsCount == 0) {
	obj4052_onLoad_actionGroup1();
}
	}, 1);
}
























};
obj4052_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4052_onLoad_activeActionGroupIndex = -1;
		$("#obj4052").trigger("obj4052_onLoad_ended");
		
		return;
	}
	window.obj4052_onLoad_activeActionGroupIndex = 1;
	



































//	action: run action list container
//	target: obj4060 
runActionList_4065();
function runActionList_4065() {
	window.obj4052_onLoad_runningActionsCount = obj4052_onLoad_runningActionsCount + 1;

	$("#obj4060").trigger('SCEventRun');
	setTimeout(function() {
		window.obj4052_onLoad_runningActionsCount = window.obj4052_onLoad_runningActionsCount - 1;

if (window.obj4052_onLoad_runningActionsCount == 0) {
	obj4052_onLoad_actionGroup2();
}		
	}, 1);
}






};
obj4052_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4052_onLoad_activeActionGroupIndex = -1;
		$("#obj4052").trigger("obj4052_onLoad_ended");
		
		return;
	}
	window.obj4052_onLoad_activeActionGroupIndex = 2;
	










































};
obj4060_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4060_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4060").trigger("obj4060_SCEventRun_ended");
		
		return;
	}
	window.obj4060_SCEventRun_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj4052 
move_4062();
function move_4062() {
	window.obj4060_SCEventRun_runningActionsCount = obj4060_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj4052");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-40";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj4060_SCEventRun_runningActionsCount = window.obj4060_SCEventRun_runningActionsCount - 1;

if (window.obj4060_SCEventRun_runningActionsCount == 0) {
	obj4060_SCEventRun_actionGroup1();
}
		}, 1);
	});
}






































};
obj4060_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4060_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4060").trigger("obj4060_SCEventRun_ended");
		
		return;
	}
	window.obj4060_SCEventRun_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj4052 
move_4063();
function move_4063() {
	window.obj4060_SCEventRun_runningActionsCount = obj4060_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj4052");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=40";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj4060_SCEventRun_runningActionsCount = window.obj4060_SCEventRun_runningActionsCount - 1;

if (window.obj4060_SCEventRun_runningActionsCount == 0) {
	obj4060_SCEventRun_actionGroup2();
}
		}, 1);
	});
}






































};
obj4060_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4060_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4060").trigger("obj4060_SCEventRun_ended");
		
		return;
	}
	window.obj4060_SCEventRun_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj4060_SCEventRun();
function loop_obj4060_SCEventRun() {

	var loopCount = 0;

	window.obj4060_SCEventRun_loopCount = window.obj4060_SCEventRun_loopCount + 1;
	if (loopCount != 0 && window.obj4060_SCEventRun_loopCount > loopCount) {
		window.obj4060_SCEventRun_loopCount = 0
		obj4060_SCEventRun_actionGroup3();
	} else {
		obj4060_SCEventRun_actionGroup0();
	}

}


























};
obj4060_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4060_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4060").trigger("obj4060_SCEventRun_ended");
		
		return;
	}
	window.obj4060_SCEventRun_activeActionGroupIndex = 3;
	










































};
obj4124_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4124_onLoad_activeActionGroupIndex = -1;
		$("#obj4124").trigger("obj4124_onLoad_ended");
		
		return;
	}
	window.obj4124_onLoad_activeActionGroupIndex = 0;
	



































//	action: run action list container
//	target: obj4136 
runActionList_4150();
function runActionList_4150() {
	window.obj4124_onLoad_runningActionsCount = obj4124_onLoad_runningActionsCount + 1;

	$("#obj4136").trigger('SCEventRun');
	setTimeout(function() {
		window.obj4124_onLoad_runningActionsCount = window.obj4124_onLoad_runningActionsCount - 1;

if (window.obj4124_onLoad_runningActionsCount == 0) {
	obj4124_onLoad_actionGroup1();
}		
	}, 1);
}






};
obj4124_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4124_onLoad_activeActionGroupIndex = -1;
		$("#obj4124").trigger("obj4124_onLoad_ended");
		
		return;
	}
	window.obj4124_onLoad_activeActionGroupIndex = 1;
	










































};
obj4132_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4132_onLoad_activeActionGroupIndex = -1;
		$("#obj4132").trigger("obj4132_onLoad_ended");
		
		return;
	}
	window.obj4132_onLoad_activeActionGroupIndex = 0;
	





























//	action: Run JavaScript
runjs_5459();
function runjs_5459() {
	window.obj4132_onLoad_runningActionsCount = obj4132_onLoad_runningActionsCount + 1;


	addEventListener("mousedown", (eventDown) => {});
addEventListener("mouseup", (eventUp) => {});
var fish = {
    left: 226,
    top: 359,
    width: 364,
    height: 256
};
onmouseup = (eventUp) => {
    //console.log("testing up");
    $("#obj5471").trigger(PubCoder.Events.Run);
};
onmousedown = (eventDown) => {
    var offset = $("#obj4026").offset();
    var x = eventDown.pageX - offset.left;
    var y = eventDown.pageY - offset.top;
    
    //console.log("testing " + x);
    if(x > fish.left && x < fish.left + fish.width)
    {
        console.log("x is within bounds");
        if(y > fish.top && y < fish.top + fish.height)
        {
            console.log("y is within bounds");
            if(localStorage.getItem("tapped")=== "1")
            {
                $("#obj5460").trigger(PubCoder.Events.Run);
                //console.log("uhhhhhhhhhhhhhh");
            }
        }
    }
};

	setTimeout(function() {
		window.obj4132_onLoad_runningActionsCount = window.obj4132_onLoad_runningActionsCount - 1;

if (window.obj4132_onLoad_runningActionsCount == 0) {
	obj4132_onLoad_actionGroup1();
}
	}, 1);
}












};
obj4132_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4132_onLoad_activeActionGroupIndex = -1;
		$("#obj4132").trigger("obj4132_onLoad_ended");
		
		return;
	}
	window.obj4132_onLoad_activeActionGroupIndex = 1;
	










































};
obj4136_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4136_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4136").trigger("obj4136_SCEventRun_ended");
		
		return;
	}
	window.obj4136_SCEventRun_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj4124 
move_4138();
function move_4138() {
	window.obj4136_SCEventRun_runningActionsCount = obj4136_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj4124");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-35";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 800, easing, function() {
		setTimeout(function() {
			window.obj4136_SCEventRun_runningActionsCount = window.obj4136_SCEventRun_runningActionsCount - 1;

if (window.obj4136_SCEventRun_runningActionsCount == 0) {
	obj4136_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4124 
move_4139();
function move_4139() {
	window.obj4136_SCEventRun_runningActionsCount = obj4136_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj4124");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=35";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 800, easing, function() {
		setTimeout(function() {
			window.obj4136_SCEventRun_runningActionsCount = window.obj4136_SCEventRun_runningActionsCount - 1;

if (window.obj4136_SCEventRun_runningActionsCount == 0) {
	obj4136_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4128 
move_4140();
function move_4140() {
	window.obj4136_SCEventRun_runningActionsCount = obj4136_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj4128");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-35";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 800, easing, function() {
		setTimeout(function() {
			window.obj4136_SCEventRun_runningActionsCount = window.obj4136_SCEventRun_runningActionsCount - 1;

if (window.obj4136_SCEventRun_runningActionsCount == 0) {
	obj4136_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4128 
move_4141();
function move_4141() {
	window.obj4136_SCEventRun_runningActionsCount = obj4136_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj4128");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=35";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 800, easing, function() {
		setTimeout(function() {
			window.obj4136_SCEventRun_runningActionsCount = window.obj4136_SCEventRun_runningActionsCount - 1;

if (window.obj4136_SCEventRun_runningActionsCount == 0) {
	obj4136_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4126 
move_4142();
function move_4142() {
	window.obj4136_SCEventRun_runningActionsCount = obj4136_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj4126");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-35";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 800, easing, function() {
		setTimeout(function() {
			window.obj4136_SCEventRun_runningActionsCount = window.obj4136_SCEventRun_runningActionsCount - 1;

if (window.obj4136_SCEventRun_runningActionsCount == 0) {
	obj4136_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4126 
move_4143();
function move_4143() {
	window.obj4136_SCEventRun_runningActionsCount = obj4136_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj4126");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=35";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 800, easing, function() {
		setTimeout(function() {
			window.obj4136_SCEventRun_runningActionsCount = window.obj4136_SCEventRun_runningActionsCount - 1;

if (window.obj4136_SCEventRun_runningActionsCount == 0) {
	obj4136_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4132 
move_4144();
function move_4144() {
	window.obj4136_SCEventRun_runningActionsCount = obj4136_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj4132");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-35";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 800, easing, function() {
		setTimeout(function() {
			window.obj4136_SCEventRun_runningActionsCount = window.obj4136_SCEventRun_runningActionsCount - 1;

if (window.obj4136_SCEventRun_runningActionsCount == 0) {
	obj4136_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4132 
move_4145();
function move_4145() {
	window.obj4136_SCEventRun_runningActionsCount = obj4136_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj4132");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=35";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 800, easing, function() {
		setTimeout(function() {
			window.obj4136_SCEventRun_runningActionsCount = window.obj4136_SCEventRun_runningActionsCount - 1;

if (window.obj4136_SCEventRun_runningActionsCount == 0) {
	obj4136_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4377 
move_4379();
function move_4379() {
	window.obj4136_SCEventRun_runningActionsCount = obj4136_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj4377");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-35";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 800, easing, function() {
		setTimeout(function() {
			window.obj4136_SCEventRun_runningActionsCount = window.obj4136_SCEventRun_runningActionsCount - 1;

if (window.obj4136_SCEventRun_runningActionsCount == 0) {
	obj4136_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4377 
move_4380();
function move_4380() {
	window.obj4136_SCEventRun_runningActionsCount = obj4136_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj4377");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=35";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 800, easing, function() {
		setTimeout(function() {
			window.obj4136_SCEventRun_runningActionsCount = window.obj4136_SCEventRun_runningActionsCount - 1;

if (window.obj4136_SCEventRun_runningActionsCount == 0) {
	obj4136_SCEventRun_actionGroup1();
}
		}, 1);
	});
}






































};
obj4136_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4136_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4136").trigger("obj4136_SCEventRun_ended");
		
		return;
	}
	window.obj4136_SCEventRun_activeActionGroupIndex = 1;
	















//	action: loop
loop_obj4136_SCEventRun();
function loop_obj4136_SCEventRun() {

	var loopCount = 0;

	window.obj4136_SCEventRun_loopCount = window.obj4136_SCEventRun_loopCount + 1;
	if (loopCount != 0 && window.obj4136_SCEventRun_loopCount > loopCount) {
		window.obj4136_SCEventRun_loopCount = 0
		obj4136_SCEventRun_actionGroup2();
	} else {
		obj4136_SCEventRun_actionGroup0();
	}

}


























};
obj4136_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4136_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4136").trigger("obj4136_SCEventRun_ended");
		
		return;
	}
	window.obj4136_SCEventRun_activeActionGroupIndex = 2;
	










































};
obj4244_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4244_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4244").trigger("obj4244_SCEventRun_ended");
		
		return;
	}
	window.obj4244_SCEventRun_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj4132 
move_4249();
function move_4249() {
	window.obj4244_SCEventRun_runningActionsCount = obj4244_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj4132");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 226;
	var moveY = 359;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj4244_SCEventRun_runningActionsCount = window.obj4244_SCEventRun_runningActionsCount - 1;

if (window.obj4244_SCEventRun_runningActionsCount == 0) {
	obj4244_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4124 
move_4246();
function move_4246() {
	window.obj4244_SCEventRun_runningActionsCount = obj4244_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj4124");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=806";
	var moveY = "+=10";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj4244_SCEventRun_runningActionsCount = window.obj4244_SCEventRun_runningActionsCount - 1;

if (window.obj4244_SCEventRun_runningActionsCount == 0) {
	obj4244_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4128 
move_4247();
function move_4247() {
	window.obj4244_SCEventRun_runningActionsCount = obj4244_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj4128");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=806";
	var moveY = "+=10";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj4244_SCEventRun_runningActionsCount = window.obj4244_SCEventRun_runningActionsCount - 1;

if (window.obj4244_SCEventRun_runningActionsCount == 0) {
	obj4244_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4126 
move_4248();
function move_4248() {
	window.obj4244_SCEventRun_runningActionsCount = obj4244_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj4126");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=806";
	var moveY = "+=10";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj4244_SCEventRun_runningActionsCount = window.obj4244_SCEventRun_runningActionsCount - 1;

if (window.obj4244_SCEventRun_runningActionsCount == 0) {
	obj4244_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4377 
move_4381();
function move_4381() {
	window.obj4244_SCEventRun_runningActionsCount = obj4244_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj4377");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=806";
	var moveY = "+=10";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj4244_SCEventRun_runningActionsCount = window.obj4244_SCEventRun_runningActionsCount - 1;

if (window.obj4244_SCEventRun_runningActionsCount == 0) {
	obj4244_SCEventRun_actionGroup1();
}
		}, 1);
	});
}






































};
obj4244_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4244_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4244").trigger("obj4244_SCEventRun_ended");
		
		return;
	}
	window.obj4244_SCEventRun_activeActionGroupIndex = 1;
	
















//	action: wait
wait_5606();
function wait_5606() {
	window.obj4244_SCEventRun_runningActionsCount = obj4244_SCEventRun_runningActionsCount + 1;

	setTimeout(function() {
		window.obj4244_SCEventRun_runningActionsCount = window.obj4244_SCEventRun_runningActionsCount - 1;

if (window.obj4244_SCEventRun_runningActionsCount == 0) {
	obj4244_SCEventRun_actionGroup2();
}
	}, 300);
}

























};
obj4244_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4244_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4244").trigger("obj4244_SCEventRun_ended");
		
		return;
	}
	window.obj4244_SCEventRun_activeActionGroupIndex = 2;
	


//	action: show 
//	target: obj4634 
(function(){
	window.obj4244_SCEventRun_runningActionsCount = obj4244_SCEventRun_runningActionsCount + 1;


	var element = "#obj4634";
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
				window.obj4244_SCEventRun_runningActionsCount = window.obj4244_SCEventRun_runningActionsCount - 1;

if (window.obj4244_SCEventRun_runningActionsCount == 0) {
	obj4244_SCEventRun_actionGroup3();
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
			window.obj4244_SCEventRun_runningActionsCount = window.obj4244_SCEventRun_runningActionsCount - 1;

if (window.obj4244_SCEventRun_runningActionsCount == 0) {
	obj4244_SCEventRun_actionGroup3();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();









//	action: playAudioFile
playAudioFile_5605();
function playAudioFile_5605() {
	window.obj4244_SCEventRun_runningActionsCount = obj4244_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5605")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5605");
			$("#obj_audio_playSoundFile5605").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4244_SCEventRun_runningActionsCount = window.obj4244_SCEventRun_runningActionsCount - 1;

if (window.obj4244_SCEventRun_runningActionsCount == 0) {
	obj4244_SCEventRun_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4244_SCEventRun_runningActionsCount = window.obj4244_SCEventRun_runningActionsCount - 1;

if (window.obj4244_SCEventRun_runningActionsCount == 0) {
	obj4244_SCEventRun_actionGroup3();
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
				window.obj4244_SCEventRun_runningActionsCount = window.obj4244_SCEventRun_runningActionsCount - 1;

if (window.obj4244_SCEventRun_runningActionsCount == 0) {
	obj4244_SCEventRun_actionGroup3();
}
			}, false);
		} else {
			window.obj4244_SCEventRun_runningActionsCount = window.obj4244_SCEventRun_runningActionsCount - 1;

if (window.obj4244_SCEventRun_runningActionsCount == 0) {
	obj4244_SCEventRun_actionGroup3();
}
		}
	}

	
	
	
}





























//	action: run action list container
//	target: obj4636 
runActionList_4649();
function runActionList_4649() {
	window.obj4244_SCEventRun_runningActionsCount = obj4244_SCEventRun_runningActionsCount + 1;

	$("#obj4636").trigger('SCEventRun');
	setTimeout(function() {
		window.obj4244_SCEventRun_runningActionsCount = window.obj4244_SCEventRun_runningActionsCount - 1;

if (window.obj4244_SCEventRun_runningActionsCount == 0) {
	obj4244_SCEventRun_actionGroup3();
}		
	}, 1);
}






};
obj4244_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4244_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4244").trigger("obj4244_SCEventRun_ended");
		
		return;
	}
	window.obj4244_SCEventRun_activeActionGroupIndex = 3;
	










































};
obj4341_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4341_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4341").trigger("obj4341_SCEventRun_ended");
		
		return;
	}
	window.obj4341_SCEventRun_activeActionGroupIndex = 0;
	


















//	action: scale
//	target: obj4250 
scale_4343();
function scale_4343() {
	window.obj4341_SCEventRun_runningActionsCount = obj4341_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj4250";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj4250';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '-1';
	var scaleYValue = '1';
	var effectDuration = '0';
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
		scale_4343_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4343_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4343_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_4343_completed() {
	setTimeout(function() {
		window.obj4341_SCEventRun_runningActionsCount = window.obj4341_SCEventRun_runningActionsCount - 1;

if (window.obj4341_SCEventRun_runningActionsCount == 0) {
	obj4341_SCEventRun_actionGroup1();
}
	}, 1);
}
//	action: scale
//	target: obj4262 
scale_4344();
function scale_4344() {
	window.obj4341_SCEventRun_runningActionsCount = obj4341_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj4262";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj4262';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '-1';
	var scaleYValue = '1';
	var effectDuration = '0';
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
		scale_4344_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4344_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4344_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_4344_completed() {
	setTimeout(function() {
		window.obj4341_SCEventRun_runningActionsCount = window.obj4341_SCEventRun_runningActionsCount - 1;

if (window.obj4341_SCEventRun_runningActionsCount == 0) {
	obj4341_SCEventRun_actionGroup1();
}
	}, 1);
}
//	action: scale
//	target: obj4276 
scale_4345();
function scale_4345() {
	window.obj4341_SCEventRun_runningActionsCount = obj4341_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj4276";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj4276';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '-1';
	var scaleYValue = '1';
	var effectDuration = '0';
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
		scale_4345_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4345_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4345_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_4345_completed() {
	setTimeout(function() {
		window.obj4341_SCEventRun_runningActionsCount = window.obj4341_SCEventRun_runningActionsCount - 1;

if (window.obj4341_SCEventRun_runningActionsCount == 0) {
	obj4341_SCEventRun_actionGroup1();
}
	}, 1);
}
//	action: scale
//	target: obj4288 
scale_4346();
function scale_4346() {
	window.obj4341_SCEventRun_runningActionsCount = obj4341_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj4288";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj4288';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '-1';
	var scaleYValue = '1';
	var effectDuration = '0';
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
		scale_4346_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4346_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4346_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_4346_completed() {
	setTimeout(function() {
		window.obj4341_SCEventRun_runningActionsCount = window.obj4341_SCEventRun_runningActionsCount - 1;

if (window.obj4341_SCEventRun_runningActionsCount == 0) {
	obj4341_SCEventRun_actionGroup1();
}
	}, 1);
}
//	action: scale
//	target: obj4303 
scale_4347();
function scale_4347() {
	window.obj4341_SCEventRun_runningActionsCount = obj4341_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj4303";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj4303';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '-1';
	var scaleYValue = '1';
	var effectDuration = '0';
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
		scale_4347_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4347_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4347_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_4347_completed() {
	setTimeout(function() {
		window.obj4341_SCEventRun_runningActionsCount = window.obj4341_SCEventRun_runningActionsCount - 1;

if (window.obj4341_SCEventRun_runningActionsCount == 0) {
	obj4341_SCEventRun_actionGroup1();
}
	}, 1);
}
//	action: scale
//	target: obj4315 
scale_4348();
function scale_4348() {
	window.obj4341_SCEventRun_runningActionsCount = obj4341_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj4315";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj4315';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '-1';
	var scaleYValue = '1';
	var effectDuration = '0';
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
		scale_4348_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4348_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4348_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_4348_completed() {
	setTimeout(function() {
		window.obj4341_SCEventRun_runningActionsCount = window.obj4341_SCEventRun_runningActionsCount - 1;

if (window.obj4341_SCEventRun_runningActionsCount == 0) {
	obj4341_SCEventRun_actionGroup1();
}
	}, 1);
}
//	action: scale
//	target: obj4329 
scale_4349();
function scale_4349() {
	window.obj4341_SCEventRun_runningActionsCount = obj4341_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj4329";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj4329';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '-1';
	var scaleYValue = '1';
	var effectDuration = '0';
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
		scale_4349_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4349_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4349_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_4349_completed() {
	setTimeout(function() {
		window.obj4341_SCEventRun_runningActionsCount = window.obj4341_SCEventRun_runningActionsCount - 1;

if (window.obj4341_SCEventRun_runningActionsCount == 0) {
	obj4341_SCEventRun_actionGroup1();
}
	}, 1);
}
























};
obj4341_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4341_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4341").trigger("obj4341_SCEventRun_ended");
		
		return;
	}
	window.obj4341_SCEventRun_activeActionGroupIndex = 1;
	










































};
obj4636_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4636_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4636").trigger("obj4636_SCEventRun_ended");
		
		return;
	}
	window.obj4636_SCEventRun_activeActionGroupIndex = 0;
	


















//	action: scale
//	target: obj4634 
scale_4646();
function scale_4646() {
	window.obj4636_SCEventRun_runningActionsCount = obj4636_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj4634";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj4634';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '0.8';
	var scaleYValue = '0.8';
	var effectDuration = '0.3';
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
		scale_4646_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4646_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4646_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_4646_completed() {
	setTimeout(function() {
		window.obj4636_SCEventRun_runningActionsCount = window.obj4636_SCEventRun_runningActionsCount - 1;

if (window.obj4636_SCEventRun_runningActionsCount == 0) {
	obj4636_SCEventRun_actionGroup1();
}
	}, 1);
}
























};
obj4636_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4636_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4636").trigger("obj4636_SCEventRun_ended");
		
		return;
	}
	window.obj4636_SCEventRun_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj4634 
move_4638();
function move_4638() {
	window.obj4636_SCEventRun_runningActionsCount = obj4636_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj4634");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=265";
	var moveY = "+=75";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj4636_SCEventRun_runningActionsCount = window.obj4636_SCEventRun_runningActionsCount - 1;

if (window.obj4636_SCEventRun_runningActionsCount == 0) {
	obj4636_SCEventRun_actionGroup2();
}
		}, 1);
	});
}






































};
obj4636_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4636_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4636").trigger("obj4636_SCEventRun_ended");
		
		return;
	}
	window.obj4636_SCEventRun_activeActionGroupIndex = 2;
	



//	action: move
//	target: obj4634 
move_4639();
function move_4639() {
	window.obj4636_SCEventRun_runningActionsCount = obj4636_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj4634");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-270";
	var moveY = "+=53";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj4636_SCEventRun_runningActionsCount = window.obj4636_SCEventRun_runningActionsCount - 1;

if (window.obj4636_SCEventRun_runningActionsCount == 0) {
	obj4636_SCEventRun_actionGroup3();
}
		}, 1);
	});
}






































};
obj4636_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4636_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4636").trigger("obj4636_SCEventRun_ended");
		
		return;
	}
	window.obj4636_SCEventRun_activeActionGroupIndex = 3;
	



//	action: move
//	target: obj4634 
move_4640();
function move_4640() {
	window.obj4636_SCEventRun_runningActionsCount = obj4636_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj4634");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=312";
	var moveY = "+=58";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj4636_SCEventRun_runningActionsCount = window.obj4636_SCEventRun_runningActionsCount - 1;

if (window.obj4636_SCEventRun_runningActionsCount == 0) {
	obj4636_SCEventRun_actionGroup4();
}
		}, 1);
	});
}






































};
obj4636_SCEventRun_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4636_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4636").trigger("obj4636_SCEventRun_ended");
		
		return;
	}
	window.obj4636_SCEventRun_activeActionGroupIndex = 4;
	


















//	action: scale
//	target: obj4634 
scale_4647();
function scale_4647() {
	window.obj4636_SCEventRun_runningActionsCount = obj4636_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj4634";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj4634';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1';
	var scaleYValue = '1';
	var effectDuration = '0.3';
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
		scale_4647_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4647_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4647_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_4647_completed() {
	setTimeout(function() {
		window.obj4636_SCEventRun_runningActionsCount = window.obj4636_SCEventRun_runningActionsCount - 1;

if (window.obj4636_SCEventRun_runningActionsCount == 0) {
	obj4636_SCEventRun_actionGroup5();
}
	}, 1);
}
























};
obj4636_SCEventRun_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4636_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4636").trigger("obj4636_SCEventRun_ended");
		
		return;
	}
	window.obj4636_SCEventRun_activeActionGroupIndex = 5;
	



//	action: move
//	target: obj4634 
move_4642();
function move_4642() {
	window.obj4636_SCEventRun_runningActionsCount = obj4636_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj4634");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 215;
	var moveY = 330;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj4636_SCEventRun_runningActionsCount = window.obj4636_SCEventRun_runningActionsCount - 1;

if (window.obj4636_SCEventRun_runningActionsCount == 0) {
	obj4636_SCEventRun_actionGroup6();
}
		}, 1);
	});
}






































};
obj4636_SCEventRun_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4636_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4636").trigger("obj4636_SCEventRun_ended");
		
		return;
	}
	window.obj4636_SCEventRun_activeActionGroupIndex = 6;
	















//	action: loop
loop_obj4636_SCEventRun();
function loop_obj4636_SCEventRun() {

	var loopCount = 0;

	window.obj4636_SCEventRun_loopCount = window.obj4636_SCEventRun_loopCount + 1;
	if (loopCount != 0 && window.obj4636_SCEventRun_loopCount > loopCount) {
		window.obj4636_SCEventRun_loopCount = 0
		obj4636_SCEventRun_actionGroup7();
	} else {
		obj4636_SCEventRun_actionGroup0();
	}

}


























};
obj4636_SCEventRun_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4636_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4636").trigger("obj4636_SCEventRun_ended");
		
		return;
	}
	window.obj4636_SCEventRun_activeActionGroupIndex = 7;
	










































};
obj5428_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5428_onLoad_activeActionGroupIndex = -1;
		$("#obj5428").trigger("obj5428_onLoad_ended");
		
		return;
	}
	window.obj5428_onLoad_activeActionGroupIndex = 0;
	
























//	action: playAudio
//	target: obj5428 
playAudio_5430();
function playAudio_5430() {
	window.obj5428_onLoad_runningActionsCount = obj5428_onLoad_runningActionsCount + 1;

	var myAudio = $("#obj5428")[0];
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
		    window.obj5428_onLoad_runningActionsCount = window.obj5428_onLoad_runningActionsCount - 1;

if (window.obj5428_onLoad_runningActionsCount == 0) {
	obj5428_onLoad_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj5428_onLoad_runningActionsCount = window.obj5428_onLoad_runningActionsCount - 1;

if (window.obj5428_onLoad_runningActionsCount == 0) {
	obj5428_onLoad_actionGroup1();
}
	}
}

















};
obj5428_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5428_onLoad_activeActionGroupIndex = -1;
		$("#obj5428").trigger("obj5428_onLoad_ended");
		
		return;
	}
	window.obj5428_onLoad_activeActionGroupIndex = 1;
	










































};
obj5460_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5460_SCEventRun_activeActionGroupIndex = -1;
		$("#obj5460").trigger("obj5460_SCEventRun_ended");
		
		return;
	}
	window.obj5460_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj4634 
hide_5465();
function hide_5465() {
	var element = "#obj4634";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5460_SCEventRun_runningActionsCount = obj5460_SCEventRun_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj5460_SCEventRun_runningActionsCount = window.obj5460_SCEventRun_runningActionsCount - 1;

if (window.obj5460_SCEventRun_runningActionsCount == 0) {
	obj5460_SCEventRun_actionGroup1();
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
		setTimeout(hide_5465(), 100);
		return;
	}

	setTimeout(function() {
		$(element).css("display", "none");
		window.obj5460_SCEventRun_runningActionsCount = window.obj5460_SCEventRun_runningActionsCount - 1;

if (window.obj5460_SCEventRun_runningActionsCount == 0) {
	obj5460_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)

}






















//	action: playAudio
//	target: obj5468 
playAudio_5470();
function playAudio_5470() {
	window.obj5460_SCEventRun_runningActionsCount = obj5460_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj5468")[0];
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
		    window.obj5460_SCEventRun_runningActionsCount = window.obj5460_SCEventRun_runningActionsCount - 1;

if (window.obj5460_SCEventRun_runningActionsCount == 0) {
	obj5460_SCEventRun_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj5460_SCEventRun_runningActionsCount = window.obj5460_SCEventRun_runningActionsCount - 1;

if (window.obj5460_SCEventRun_runningActionsCount == 0) {
	obj5460_SCEventRun_actionGroup1();
}
	}
}

















};
obj5460_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5460_SCEventRun_activeActionGroupIndex = -1;
		$("#obj5460").trigger("obj5460_SCEventRun_ended");
		
		return;
	}
	window.obj5460_SCEventRun_activeActionGroupIndex = 1;
	










































};
obj5471_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5471_SCEventRun_activeActionGroupIndex = -1;
		$("#obj5471").trigger("obj5471_SCEventRun_ended");
		
		return;
	}
	window.obj5471_SCEventRun_activeActionGroupIndex = 0;
	


























//	action: stopMovie 
//	target: obj5468 
stopAudio_5473();
function stopAudio_5473() {
	window.obj5471_SCEventRun_runningActionsCount = obj5471_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj5468")[0];
	myAudio.pause();
	window.obj5471_SCEventRun_runningActionsCount = window.obj5471_SCEventRun_runningActionsCount - 1;

if (window.obj5471_SCEventRun_runningActionsCount == 0) {
	obj5471_SCEventRun_actionGroup1();
}
}















};
obj5471_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5471_SCEventRun_activeActionGroupIndex = -1;
		$("#obj5471").trigger("obj5471_SCEventRun_ended");
		
		return;
	}
	window.obj5471_SCEventRun_activeActionGroupIndex = 1;
	










































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		





/*
 *
 *   obj4026: Event Touch Down
 *
 */

$("#obj4026").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4026_onTap_activeActionGroupIndex != -1) return;
var obj4026_onTap_runningActionsCount = 0;
var obj4026_onTap_loopCount = 0;
obj4026_onTap_actionGroup0();
});



/*
 *
 *   obj4026: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj4026_onLoad_activeActionGroupIndex != -1) return;
var obj4026_onLoad_runningActionsCount = 0;
var obj4026_onLoad_loopCount = 0;
obj4026_onLoad_actionGroup0();
});














/*
 *
 *   obj4236: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj4236_onLoad_activeActionGroupIndex != -1) return;
var obj4236_onLoad_runningActionsCount = 0;
var obj4236_onLoad_loopCount = 0;
obj4236_onLoad_actionGroup0();
});














/*
 *
 *   obj4231: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj4231_onLoad_activeActionGroupIndex != -1) return;
var obj4231_onLoad_runningActionsCount = 0;
var obj4231_onLoad_loopCount = 0;
obj4231_onLoad_actionGroup0();
});
















































































































































































































































































































































































































































































/*
 *
 *   obj4167: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj4167_onLoad_activeActionGroupIndex != -1) return;
var obj4167_onLoad_runningActionsCount = 0;
var obj4167_onLoad_loopCount = 0;
obj4167_onLoad_actionGroup0();
});












































/*
 *
 *   obj4329: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj4329_onLoad_activeActionGroupIndex != -1) return;
var obj4329_onLoad_runningActionsCount = 0;
var obj4329_onLoad_loopCount = 0;
obj4329_onLoad_actionGroup0();
});














/*
 *
 *   obj4315: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj4315_onLoad_activeActionGroupIndex != -1) return;
var obj4315_onLoad_runningActionsCount = 0;
var obj4315_onLoad_loopCount = 0;
obj4315_onLoad_actionGroup0();
});














/*
 *
 *   obj4303: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj4303_onLoad_activeActionGroupIndex != -1) return;
var obj4303_onLoad_runningActionsCount = 0;
var obj4303_onLoad_loopCount = 0;
obj4303_onLoad_actionGroup0();
});














/*
 *
 *   obj4288: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj4288_onLoad_activeActionGroupIndex != -1) return;
var obj4288_onLoad_runningActionsCount = 0;
var obj4288_onLoad_loopCount = 0;
obj4288_onLoad_actionGroup0();
});














/*
 *
 *   obj4276: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj4276_onLoad_activeActionGroupIndex != -1) return;
var obj4276_onLoad_runningActionsCount = 0;
var obj4276_onLoad_loopCount = 0;
obj4276_onLoad_actionGroup0();
});














/*
 *
 *   obj4262: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj4262_onLoad_activeActionGroupIndex != -1) return;
var obj4262_onLoad_runningActionsCount = 0;
var obj4262_onLoad_loopCount = 0;
obj4262_onLoad_actionGroup0();
});














/*
 *
 *   obj4250: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj4250_onLoad_activeActionGroupIndex != -1) return;
var obj4250_onLoad_runningActionsCount = 0;
var obj4250_onLoad_loopCount = 0;
obj4250_onLoad_actionGroup0();
});












































/*
 *
 *   obj4052: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj4052_onLoad_activeActionGroupIndex != -1) return;
var obj4052_onLoad_runningActionsCount = 0;
var obj4052_onLoad_loopCount = 0;
obj4052_onLoad_actionGroup0();
});



















/*
 *
 *   obj4060: Event SCEventRun
 *
 */

$("#obj4060").bind("SCEventRun", function(event) {
	if (window.obj4060_SCEventRun_activeActionGroupIndex != -1) return;
var obj4060_SCEventRun_runningActionsCount = 0;
var obj4060_SCEventRun_loopCount = 0;
obj4060_SCEventRun_actionGroup0();
});









/*
 *
 *   obj4124: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj4124_onLoad_activeActionGroupIndex != -1) return;
var obj4124_onLoad_runningActionsCount = 0;
var obj4124_onLoad_loopCount = 0;
obj4124_onLoad_actionGroup0();
});












































/*
 *
 *   obj4132: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj4132_onLoad_activeActionGroupIndex != -1) return;
var obj4132_onLoad_runningActionsCount = 0;
var obj4132_onLoad_loopCount = 0;
obj4132_onLoad_actionGroup0();
});



















/*
 *
 *   obj4136: Event SCEventRun
 *
 */

$("#obj4136").bind("SCEventRun", function(event) {
	if (window.obj4136_SCEventRun_activeActionGroupIndex != -1) return;
var obj4136_SCEventRun_runningActionsCount = 0;
var obj4136_SCEventRun_loopCount = 0;
obj4136_SCEventRun_actionGroup0();
});



























































/*
 *
 *   obj4244: Event SCEventRun
 *
 */

$("#obj4244").bind("SCEventRun", function(event) {
	if (window.obj4244_SCEventRun_activeActionGroupIndex != -1) return;
var obj4244_SCEventRun_runningActionsCount = 0;
var obj4244_SCEventRun_loopCount = 0;
obj4244_SCEventRun_actionGroup0();
});














/*
 *
 *   obj4341: Event SCEventRun
 *
 */

$("#obj4341").bind("SCEventRun", function(event) {
	if (window.obj4341_SCEventRun_activeActionGroupIndex != -1) return;
var obj4341_SCEventRun_runningActionsCount = 0;
var obj4341_SCEventRun_loopCount = 0;
obj4341_SCEventRun_actionGroup0();
});












































/*
 *
 *   obj4636: Event SCEventRun
 *
 */

$("#obj4636").bind("SCEventRun", function(event) {
	if (window.obj4636_SCEventRun_activeActionGroupIndex != -1) return;
var obj4636_SCEventRun_runningActionsCount = 0;
var obj4636_SCEventRun_loopCount = 0;
obj4636_SCEventRun_actionGroup0();
});









/*
 *
 *   obj5428: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj5428_onLoad_activeActionGroupIndex != -1) return;
var obj5428_onLoad_runningActionsCount = 0;
var obj5428_onLoad_loopCount = 0;
obj5428_onLoad_actionGroup0();
});



















/*
 *
 *   obj5460: Event SCEventRun
 *
 */

$("#obj5460").bind("SCEventRun", function(event) {
	if (window.obj5460_SCEventRun_activeActionGroupIndex != -1) return;
var obj5460_SCEventRun_runningActionsCount = 0;
var obj5460_SCEventRun_loopCount = 0;
obj5460_SCEventRun_actionGroup0();
});





























/*
 *
 *   obj5471: Event SCEventRun
 *
 */

$("#obj5471").bind("SCEventRun", function(event) {
	if (window.obj5471_SCEventRun_activeActionGroupIndex != -1) return;
var obj5471_SCEventRun_runningActionsCount = 0;
var obj5471_SCEventRun_loopCount = 0;
obj5471_SCEventRun_actionGroup0();
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
	
$("#obj4026").trigger('SCEventShow');
$("#obj4236").trigger('SCEventShow');
$("#obj4231").trigger('SCEventShow');
$("#obj4217").trigger('SCEventShow');
$("#obj2870").trigger('SCEventShow');
$("#obj4219").trigger('SCEventShow');
$("#obj4227").trigger('SCEventShow');
$("#obj4229").trigger('SCEventShow');
$("#obj4239").trigger('SCEventShow');
$("#obj4241").trigger('SCEventShow');
$("#obj4038").trigger('SCEventShow');
$("#obj4042").trigger('SCEventShow');
$("#obj4044").trigger('SCEventShow');
$("#obj4048").trigger('SCEventShow');
$("#obj4211").trigger('SCEventShow');
$("#obj4212").trigger('SCEventShow');
$("#obj4028").trigger('SCEventShow');
$("#obj4030").trigger('SCEventShow');
$("#obj4036").trigger('SCEventShow');
$("#obj4174").trigger('SCEventShow');
$("#obj4177").trigger('SCEventShow');
$("#obj4180").trigger('SCEventShow');
$("#obj4183").trigger('SCEventShow');
$("#obj4189").trigger('SCEventShow');
$("#obj4194").trigger('SCEventShow');
$("#obj4195").trigger('SCEventShow');
$("#obj4196").trigger('SCEventShow');
$("#obj4207").trigger('SCEventShow');
$("#obj4205").trigger('SCEventShow');
$("#obj4203").trigger('SCEventShow');
$("#obj4162").trigger('SCEventShow');
$("#obj4034").trigger('SCEventShow');
$("#obj4165").trigger('SCEventShow');
$("#obj4167").trigger('SCEventShow');
$("#obj4171").trigger('SCEventShow');
$("#obj4032").trigger('SCEventShow');
$("#obj4329").trigger('SCEventShow');
$("#obj4315").trigger('SCEventShow');
$("#obj4303").trigger('SCEventShow');
$("#obj4288").trigger('SCEventShow');
$("#obj4276").trigger('SCEventShow');
$("#obj4262").trigger('SCEventShow');
$("#obj4250").trigger('SCEventShow');
$("#obj4046").trigger('SCEventShow');
$("#obj4050").trigger('SCEventShow');
$("#obj4052").trigger('SCEventShow');
$("#obj4124").trigger('SCEventShow');
$("#obj4128").trigger('SCEventShow');
$("#obj4126").trigger('SCEventShow');
$("#obj4132").trigger('SCEventShow');
$("#obj4377").trigger('SCEventShow');
$("#obj5428").trigger('SCEventShow');
$("#obj5468").trigger('SCEventShow');
	localStorage.setItem('tapped','0');
localStorage.setItem('ready','true');
localStorage.setItem("tapped", "0");
localStorage.setItem("ready", "false");
});