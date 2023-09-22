pubcoder.projectID = pubcoder.projectID || "D928F63EC5FACE4D86169F491C787A52";
pubcoder.project.id = pubcoder.project.id || "D928F63EC5FACE4D86169F491C787A52";
pubcoder.project.title = pubcoder.project.title || "OkidoNumbers";
pubcoder.page.id = pubcoder.page.id || 4;
pubcoder.page.title = pubcoder.page.title || "2";
pubcoder.page.number = pubcoder.page.number || 2;
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
var obj519_onTap_activeActionGroupIndex = -1;
var obj519_onTap_runningActionsCount = 0;
var obj519_onTap_loopCount = 0;
var obj519_onLoad_activeActionGroupIndex = -1;
var obj519_onLoad_runningActionsCount = 0;
var obj519_onLoad_loopCount = 0;
var obj41_onTap_activeActionGroupIndex = -1;
var obj41_onTap_runningActionsCount = 0;
var obj41_onTap_loopCount = 0;
var obj66_onTap_activeActionGroupIndex = -1;
var obj66_onTap_runningActionsCount = 0;
var obj66_onTap_loopCount = 0;
var obj68_onTap_activeActionGroupIndex = -1;
var obj68_onTap_runningActionsCount = 0;
var obj68_onTap_loopCount = 0;
var obj522_SCEventRun_activeActionGroupIndex = -1;
var obj522_SCEventRun_runningActionsCount = 0;
var obj522_SCEventRun_loopCount = 0;
var obj534_SCEventRun_activeActionGroupIndex = -1;
var obj534_SCEventRun_runningActionsCount = 0;
var obj534_SCEventRun_loopCount = 0;
var obj1362_onLoad_activeActionGroupIndex = -1;
var obj1362_onLoad_runningActionsCount = 0;
var obj1362_onLoad_loopCount = 0;

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
		
obj519_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj519_onTap_activeActionGroupIndex = -1;
		$("#obj519").trigger("obj519_onTap_ended");
		
		return;
	}
	window.obj519_onTap_activeActionGroupIndex = 0;
	





























//	action: Run JavaScript
runjs_521();
function runjs_521() {
	window.obj519_onTap_runningActionsCount = obj519_onTap_runningActionsCount + 1;


	if(localStorage.getItem("tapped") === "0" && localStorage.getItem("ready") === "true")
{
    localStorage.setItem("tapped", "1");
    $("#obj534").trigger(PubCoder.Events.Run);
}

	setTimeout(function() {
		window.obj519_onTap_runningActionsCount = window.obj519_onTap_runningActionsCount - 1;

if (window.obj519_onTap_runningActionsCount == 0) {
	obj519_onTap_actionGroup1();
}
	}, 1);
}












};
obj519_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj519_onTap_activeActionGroupIndex = -1;
		$("#obj519").trigger("obj519_onTap_ended");
		
		return;
	}
	window.obj519_onTap_activeActionGroupIndex = 1;
	










































};
obj519_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj519_onLoad_activeActionGroupIndex = -1;
		$("#obj519").trigger("obj519_onLoad_ended");
		
		return;
	}
	window.obj519_onLoad_activeActionGroupIndex = 0;
	



































//	action: run action list container
//	target: obj522 
runActionList_528();
function runActionList_528() {
	window.obj519_onLoad_runningActionsCount = obj519_onLoad_runningActionsCount + 1;

	$("#obj522").trigger('SCEventRun');
	setTimeout(function() {
		window.obj519_onLoad_runningActionsCount = window.obj519_onLoad_runningActionsCount - 1;

if (window.obj519_onLoad_runningActionsCount == 0) {
	obj519_onLoad_actionGroup1();
}		
	}, 1);
}






};
obj519_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj519_onLoad_activeActionGroupIndex = -1;
		$("#obj519").trigger("obj519_onLoad_ended");
		
		return;
	}
	window.obj519_onLoad_activeActionGroupIndex = 1;
	










































};
obj41_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41_onTap_activeActionGroupIndex = -1;
		$("#obj41").trigger("obj41_onTap_ended");
		
		return;
	}
	window.obj41_onTap_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj556 
move_573();
function move_573() {
	window.obj41_onTap_runningActionsCount = obj41_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj556");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 842;
	var moveY = 313;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj41_onTap_runningActionsCount = window.obj41_onTap_runningActionsCount - 1;

if (window.obj41_onTap_runningActionsCount == 0) {
	obj41_onTap_actionGroup1();
}
		}, 1);
	});
}






































};
obj41_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41_onTap_activeActionGroupIndex = -1;
		$("#obj41").trigger("obj41_onTap_ended");
		
		return;
	}
	window.obj41_onTap_activeActionGroupIndex = 1;
	














//	action: rotate 
//	target: obj41 
rotate_566();
function rotate_566() {
	window.obj41_onTap_runningActionsCount = obj41_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj41";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj41';
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
	if (isInfinite) { rotate_566_completed(); }

	//TweenMax.to(targetObjectId, 0.5, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_566_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_566_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_566_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_566_completed() {
	setTimeout(function() {
		window.obj41_onTap_runningActionsCount = window.obj41_onTap_runningActionsCount - 1;

if (window.obj41_onTap_runningActionsCount == 0) {
	obj41_onTap_actionGroup2();
}
	}, 1);
}




























};
obj41_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41_onTap_activeActionGroupIndex = -1;
		$("#obj41").trigger("obj41_onTap_ended");
		
		return;
	}
	window.obj41_onTap_activeActionGroupIndex = 2;
	














//	action: rotate 
//	target: obj41 
rotate_567();
function rotate_567() {
	window.obj41_onTap_runningActionsCount = obj41_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj41";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj41';
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
	if (isInfinite) { rotate_567_completed(); }

	//TweenMax.to(targetObjectId, 1, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_567_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_567_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_567_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_567_completed() {
	setTimeout(function() {
		window.obj41_onTap_runningActionsCount = window.obj41_onTap_runningActionsCount - 1;

if (window.obj41_onTap_runningActionsCount == 0) {
	obj41_onTap_actionGroup3();
}
	}, 1);
}




























};
obj41_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41_onTap_activeActionGroupIndex = -1;
		$("#obj41").trigger("obj41_onTap_ended");
		
		return;
	}
	window.obj41_onTap_activeActionGroupIndex = 3;
	












//	action: playAudioFile
playAudioFile_1427();
function playAudioFile_1427() {
	window.obj41_onTap_runningActionsCount = obj41_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1427")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1427");
			$("#obj_audio_playSoundFile1427").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj41_onTap_runningActionsCount = window.obj41_onTap_runningActionsCount - 1;

if (window.obj41_onTap_runningActionsCount == 0) {
	obj41_onTap_actionGroup4();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj41_onTap_runningActionsCount = window.obj41_onTap_runningActionsCount - 1;

if (window.obj41_onTap_runningActionsCount == 0) {
	obj41_onTap_actionGroup4();
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
				window.obj41_onTap_runningActionsCount = window.obj41_onTap_runningActionsCount - 1;

if (window.obj41_onTap_runningActionsCount == 0) {
	obj41_onTap_actionGroup4();
}
			}, false);
		} else {
			window.obj41_onTap_runningActionsCount = window.obj41_onTap_runningActionsCount - 1;

if (window.obj41_onTap_runningActionsCount == 0) {
	obj41_onTap_actionGroup4();
}
		}
	}

	
	
	
}




































};
obj41_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41_onTap_activeActionGroupIndex = -1;
		$("#obj41").trigger("obj41_onTap_ended");
		
		return;
	}
	window.obj41_onTap_activeActionGroupIndex = 4;
	














//	action: rotate 
//	target: obj41 
rotate_568();
function rotate_568() {
	window.obj41_onTap_runningActionsCount = obj41_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj41";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj41';
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
	if (isInfinite) { rotate_568_completed(); }

	//TweenMax.to(targetObjectId, 0.5, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_568_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_568_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_568_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_568_completed() {
	setTimeout(function() {
		window.obj41_onTap_runningActionsCount = window.obj41_onTap_runningActionsCount - 1;

if (window.obj41_onTap_runningActionsCount == 0) {
	obj41_onTap_actionGroup5();
}
	}, 1);
}




























};
obj41_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41_onTap_activeActionGroupIndex = -1;
		$("#obj41").trigger("obj41_onTap_ended");
		
		return;
	}
	window.obj41_onTap_activeActionGroupIndex = 5;
	


//	action: show 
//	target: obj556 
(function(){
	window.obj41_onTap_runningActionsCount = obj41_onTap_runningActionsCount + 1;


	var element = "#obj556";
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
				window.obj41_onTap_runningActionsCount = window.obj41_onTap_runningActionsCount - 1;

if (window.obj41_onTap_runningActionsCount == 0) {
	obj41_onTap_actionGroup6();
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
			window.obj41_onTap_runningActionsCount = window.obj41_onTap_runningActionsCount - 1;

if (window.obj41_onTap_runningActionsCount == 0) {
	obj41_onTap_actionGroup6();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();







































};
obj41_onTap_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41_onTap_activeActionGroupIndex = -1;
		$("#obj41").trigger("obj41_onTap_ended");
		
		return;
	}
	window.obj41_onTap_activeActionGroupIndex = 6;
	



//	action: move
//	target: obj556 
move_570();
function move_570() {
	window.obj41_onTap_runningActionsCount = obj41_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj556");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-67";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 700, easing, function() {
		setTimeout(function() {
			window.obj41_onTap_runningActionsCount = window.obj41_onTap_runningActionsCount - 1;

if (window.obj41_onTap_runningActionsCount == 0) {
	obj41_onTap_actionGroup7();
}
		}, 1);
	});
}














//	action: scale
//	target: obj556 
scale_571();
function scale_571() {
	window.obj41_onTap_runningActionsCount = obj41_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj556";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj556';
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
		scale_571_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_571_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_571_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_571_completed() {
	setTimeout(function() {
		window.obj41_onTap_runningActionsCount = window.obj41_onTap_runningActionsCount - 1;

if (window.obj41_onTap_runningActionsCount == 0) {
	obj41_onTap_actionGroup7();
}
	}, 1);
}
























};
obj41_onTap_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41_onTap_activeActionGroupIndex = -1;
		$("#obj41").trigger("obj41_onTap_ended");
		
		return;
	}
	window.obj41_onTap_activeActionGroupIndex = 7;
	

//	action: hide
//	target: obj556 
hide_572();
function hide_572() {
	var element = "#obj556";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj41_onTap_runningActionsCount = obj41_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOutUp";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj41_onTap_runningActionsCount = window.obj41_onTap_runningActionsCount - 1;

if (window.obj41_onTap_runningActionsCount == 0) {
	obj41_onTap_actionGroup8();
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
		setTimeout(hide_572(), 100);
		return;
	}

	setTimeout(function() {
		$(element).css("display", "none");
		window.obj41_onTap_runningActionsCount = window.obj41_onTap_runningActionsCount - 1;

if (window.obj41_onTap_runningActionsCount == 0) {
	obj41_onTap_actionGroup8();
}
	}, animationDurationMs);

	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)

}








































};
obj41_onTap_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41_onTap_activeActionGroupIndex = -1;
		$("#obj41").trigger("obj41_onTap_ended");
		
		return;
	}
	window.obj41_onTap_activeActionGroupIndex = 8;
	










































};
obj66_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj66_onTap_activeActionGroupIndex = -1;
		$("#obj66").trigger("obj66_onTap_ended");
		
		return;
	}
	window.obj66_onTap_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj66 
move_577();
function move_577() {
	window.obj66_onTap_runningActionsCount = obj66_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj66");
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
			window.obj66_onTap_runningActionsCount = window.obj66_onTap_runningActionsCount - 1;

if (window.obj66_onTap_runningActionsCount == 0) {
	obj66_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj66 
move_578();
function move_578() {
	window.obj66_onTap_runningActionsCount = obj66_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj66");
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
			window.obj66_onTap_runningActionsCount = window.obj66_onTap_runningActionsCount - 1;

if (window.obj66_onTap_runningActionsCount == 0) {
	obj66_onTap_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1383();
function playAudioFile_1383() {
	window.obj66_onTap_runningActionsCount = obj66_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1383")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1383");
			$("#obj_audio_playSoundFile1383").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj66_onTap_runningActionsCount = window.obj66_onTap_runningActionsCount - 1;

if (window.obj66_onTap_runningActionsCount == 0) {
	obj66_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj66_onTap_runningActionsCount = window.obj66_onTap_runningActionsCount - 1;

if (window.obj66_onTap_runningActionsCount == 0) {
	obj66_onTap_actionGroup1();
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
				window.obj66_onTap_runningActionsCount = window.obj66_onTap_runningActionsCount - 1;

if (window.obj66_onTap_runningActionsCount == 0) {
	obj66_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj66_onTap_runningActionsCount = window.obj66_onTap_runningActionsCount - 1;

if (window.obj66_onTap_runningActionsCount == 0) {
	obj66_onTap_actionGroup1();
}
		}
	}

	
	
	
}




































};
obj66_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj66_onTap_activeActionGroupIndex = -1;
		$("#obj66").trigger("obj66_onTap_ended");
		
		return;
	}
	window.obj66_onTap_activeActionGroupIndex = 1;
	










































};
obj68_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68_onTap_activeActionGroupIndex = -1;
		$("#obj68").trigger("obj68_onTap_ended");
		
		return;
	}
	window.obj68_onTap_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj68 
move_575();
function move_575() {
	window.obj68_onTap_runningActionsCount = obj68_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj68");
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
			window.obj68_onTap_runningActionsCount = window.obj68_onTap_runningActionsCount - 1;

if (window.obj68_onTap_runningActionsCount == 0) {
	obj68_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj68 
move_576();
function move_576() {
	window.obj68_onTap_runningActionsCount = obj68_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj68");
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
			window.obj68_onTap_runningActionsCount = window.obj68_onTap_runningActionsCount - 1;

if (window.obj68_onTap_runningActionsCount == 0) {
	obj68_onTap_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1382();
function playAudioFile_1382() {
	window.obj68_onTap_runningActionsCount = obj68_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1382")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1382");
			$("#obj_audio_playSoundFile1382").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj68_onTap_runningActionsCount = window.obj68_onTap_runningActionsCount - 1;

if (window.obj68_onTap_runningActionsCount == 0) {
	obj68_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj68_onTap_runningActionsCount = window.obj68_onTap_runningActionsCount - 1;

if (window.obj68_onTap_runningActionsCount == 0) {
	obj68_onTap_actionGroup1();
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
				window.obj68_onTap_runningActionsCount = window.obj68_onTap_runningActionsCount - 1;

if (window.obj68_onTap_runningActionsCount == 0) {
	obj68_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj68_onTap_runningActionsCount = window.obj68_onTap_runningActionsCount - 1;

if (window.obj68_onTap_runningActionsCount == 0) {
	obj68_onTap_actionGroup1();
}
		}
	}

	
	
	
}




































};
obj68_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68_onTap_activeActionGroupIndex = -1;
		$("#obj68").trigger("obj68_onTap_ended");
		
		return;
	}
	window.obj68_onTap_activeActionGroupIndex = 1;
	










































};
obj522_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj522_SCEventRun_activeActionGroupIndex = -1;
		$("#obj522").trigger("obj522_SCEventRun_ended");
		
		return;
	}
	window.obj522_SCEventRun_activeActionGroupIndex = 0;
	


//	action: show 
//	target: obj513 
(function(){
	window.obj522_SCEventRun_runningActionsCount = obj522_SCEventRun_runningActionsCount + 1;


	var element = "#obj513";
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
				window.obj522_SCEventRun_runningActionsCount = window.obj522_SCEventRun_runningActionsCount - 1;

if (window.obj522_SCEventRun_runningActionsCount == 0) {
	obj522_SCEventRun_actionGroup1();
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
			window.obj522_SCEventRun_runningActionsCount = window.obj522_SCEventRun_runningActionsCount - 1;

if (window.obj522_SCEventRun_runningActionsCount == 0) {
	obj522_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj515 
(function(){
	window.obj522_SCEventRun_runningActionsCount = obj522_SCEventRun_runningActionsCount + 1;


	var element = "#obj515";
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
				window.obj522_SCEventRun_runningActionsCount = window.obj522_SCEventRun_runningActionsCount - 1;

if (window.obj522_SCEventRun_runningActionsCount == 0) {
	obj522_SCEventRun_actionGroup1();
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
			window.obj522_SCEventRun_runningActionsCount = window.obj522_SCEventRun_runningActionsCount - 1;

if (window.obj522_SCEventRun_runningActionsCount == 0) {
	obj522_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj517 
(function(){
	window.obj522_SCEventRun_runningActionsCount = obj522_SCEventRun_runningActionsCount + 1;


	var element = "#obj517";
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
				window.obj522_SCEventRun_runningActionsCount = window.obj522_SCEventRun_runningActionsCount - 1;

if (window.obj522_SCEventRun_runningActionsCount == 0) {
	obj522_SCEventRun_actionGroup1();
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
			window.obj522_SCEventRun_runningActionsCount = window.obj522_SCEventRun_runningActionsCount - 1;

if (window.obj522_SCEventRun_runningActionsCount == 0) {
	obj522_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: move
//	target: obj68 
move_530();
function move_530() {
	window.obj522_SCEventRun_runningActionsCount = obj522_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj68");
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
			window.obj522_SCEventRun_runningActionsCount = window.obj522_SCEventRun_runningActionsCount - 1;

if (window.obj522_SCEventRun_runningActionsCount == 0) {
	obj522_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj68 
move_531();
function move_531() {
	window.obj522_SCEventRun_runningActionsCount = obj522_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj68");
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
			window.obj522_SCEventRun_runningActionsCount = window.obj522_SCEventRun_runningActionsCount - 1;

if (window.obj522_SCEventRun_runningActionsCount == 0) {
	obj522_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj68 
move_532();
function move_532() {
	window.obj522_SCEventRun_runningActionsCount = obj522_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj68");
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
			window.obj522_SCEventRun_runningActionsCount = window.obj522_SCEventRun_runningActionsCount - 1;

if (window.obj522_SCEventRun_runningActionsCount == 0) {
	obj522_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj68 
move_533();
function move_533() {
	window.obj522_SCEventRun_runningActionsCount = obj522_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj68");
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
			window.obj522_SCEventRun_runningActionsCount = window.obj522_SCEventRun_runningActionsCount - 1;

if (window.obj522_SCEventRun_runningActionsCount == 0) {
	obj522_SCEventRun_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1380();
function playAudioFile_1380() {
	window.obj522_SCEventRun_runningActionsCount = obj522_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1380")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1380");
			$("#obj_audio_playSoundFile1380").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj522_SCEventRun_runningActionsCount = window.obj522_SCEventRun_runningActionsCount - 1;

if (window.obj522_SCEventRun_runningActionsCount == 0) {
	obj522_SCEventRun_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj522_SCEventRun_runningActionsCount = window.obj522_SCEventRun_runningActionsCount - 1;

if (window.obj522_SCEventRun_runningActionsCount == 0) {
	obj522_SCEventRun_actionGroup1();
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
				window.obj522_SCEventRun_runningActionsCount = window.obj522_SCEventRun_runningActionsCount - 1;

if (window.obj522_SCEventRun_runningActionsCount == 0) {
	obj522_SCEventRun_actionGroup1();
}
			}, false);
		} else {
			window.obj522_SCEventRun_runningActionsCount = window.obj522_SCEventRun_runningActionsCount - 1;

if (window.obj522_SCEventRun_runningActionsCount == 0) {
	obj522_SCEventRun_actionGroup1();
}
		}
	}

	
	
	
}






//	action: playAudioFile
playAudioFile_1271();
function playAudioFile_1271() {
	window.obj522_SCEventRun_runningActionsCount = obj522_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1271")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1271");
			$("#obj_audio_playSoundFile1271").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj522_SCEventRun_runningActionsCount = window.obj522_SCEventRun_runningActionsCount - 1;

if (window.obj522_SCEventRun_runningActionsCount == 0) {
	obj522_SCEventRun_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj522_SCEventRun_runningActionsCount = window.obj522_SCEventRun_runningActionsCount - 1;

if (window.obj522_SCEventRun_runningActionsCount == 0) {
	obj522_SCEventRun_actionGroup1();
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
				window.obj522_SCEventRun_runningActionsCount = window.obj522_SCEventRun_runningActionsCount - 1;

if (window.obj522_SCEventRun_runningActionsCount == 0) {
	obj522_SCEventRun_actionGroup1();
}
			}, false);
		} else {
			window.obj522_SCEventRun_runningActionsCount = window.obj522_SCEventRun_runningActionsCount - 1;

if (window.obj522_SCEventRun_runningActionsCount == 0) {
	obj522_SCEventRun_actionGroup1();
}
		}
	}

	
	
	
}




































};
obj522_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj522_SCEventRun_activeActionGroupIndex = -1;
		$("#obj522").trigger("obj522_SCEventRun_ended");
		
		return;
	}
	window.obj522_SCEventRun_activeActionGroupIndex = 1;
	





























//	action: Run JavaScript
runjs_1270();
function runjs_1270() {
	window.obj522_SCEventRun_runningActionsCount = obj522_SCEventRun_runningActionsCount + 1;


	localStorage.setItem("ready", "true");

	setTimeout(function() {
		window.obj522_SCEventRun_runningActionsCount = window.obj522_SCEventRun_runningActionsCount - 1;

if (window.obj522_SCEventRun_runningActionsCount == 0) {
	obj522_SCEventRun_actionGroup2();
}
	}, 1);
}












};
obj522_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj522_SCEventRun_activeActionGroupIndex = -1;
		$("#obj522").trigger("obj522_SCEventRun_ended");
		
		return;
	}
	window.obj522_SCEventRun_activeActionGroupIndex = 2;
	










































};
obj534_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj534_SCEventRun_activeActionGroupIndex = -1;
		$("#obj534").trigger("obj534_SCEventRun_ended");
		
		return;
	}
	window.obj534_SCEventRun_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj556 
move_574();
function move_574() {
	window.obj534_SCEventRun_runningActionsCount = obj534_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj556");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 842;
	var moveY = 313;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj534_SCEventRun_runningActionsCount = window.obj534_SCEventRun_runningActionsCount - 1;

if (window.obj534_SCEventRun_runningActionsCount == 0) {
	obj534_SCEventRun_actionGroup1();
}
		}, 1);
	});
}






































};
obj534_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj534_SCEventRun_activeActionGroupIndex = -1;
		$("#obj534").trigger("obj534_SCEventRun_ended");
		
		return;
	}
	window.obj534_SCEventRun_activeActionGroupIndex = 1;
	


//	action: show 
//	target: obj547 
(function(){
	window.obj534_SCEventRun_runningActionsCount = obj534_SCEventRun_runningActionsCount + 1;


	var element = "#obj547";
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
				window.obj534_SCEventRun_runningActionsCount = window.obj534_SCEventRun_runningActionsCount - 1;

if (window.obj534_SCEventRun_runningActionsCount == 0) {
	obj534_SCEventRun_actionGroup2();
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
			window.obj534_SCEventRun_runningActionsCount = window.obj534_SCEventRun_runningActionsCount - 1;

if (window.obj534_SCEventRun_runningActionsCount == 0) {
	obj534_SCEventRun_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj545 
(function(){
	window.obj534_SCEventRun_runningActionsCount = obj534_SCEventRun_runningActionsCount + 1;


	var element = "#obj545";
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
				window.obj534_SCEventRun_runningActionsCount = window.obj534_SCEventRun_runningActionsCount - 1;

if (window.obj534_SCEventRun_runningActionsCount == 0) {
	obj534_SCEventRun_actionGroup2();
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
			window.obj534_SCEventRun_runningActionsCount = window.obj534_SCEventRun_runningActionsCount - 1;

if (window.obj534_SCEventRun_runningActionsCount == 0) {
	obj534_SCEventRun_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj543 
(function(){
	window.obj534_SCEventRun_runningActionsCount = obj534_SCEventRun_runningActionsCount + 1;


	var element = "#obj543";
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
				window.obj534_SCEventRun_runningActionsCount = window.obj534_SCEventRun_runningActionsCount - 1;

if (window.obj534_SCEventRun_runningActionsCount == 0) {
	obj534_SCEventRun_actionGroup2();
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
			window.obj534_SCEventRun_runningActionsCount = window.obj534_SCEventRun_runningActionsCount - 1;

if (window.obj534_SCEventRun_runningActionsCount == 0) {
	obj534_SCEventRun_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: move
//	target: obj66 
move_539();
function move_539() {
	window.obj534_SCEventRun_runningActionsCount = obj534_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj66");
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
			window.obj534_SCEventRun_runningActionsCount = window.obj534_SCEventRun_runningActionsCount - 1;

if (window.obj534_SCEventRun_runningActionsCount == 0) {
	obj534_SCEventRun_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj66 
move_540();
function move_540() {
	window.obj534_SCEventRun_runningActionsCount = obj534_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj66");
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
			window.obj534_SCEventRun_runningActionsCount = window.obj534_SCEventRun_runningActionsCount - 1;

if (window.obj534_SCEventRun_runningActionsCount == 0) {
	obj534_SCEventRun_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj66 
move_541();
function move_541() {
	window.obj534_SCEventRun_runningActionsCount = obj534_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj66");
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
			window.obj534_SCEventRun_runningActionsCount = window.obj534_SCEventRun_runningActionsCount - 1;

if (window.obj534_SCEventRun_runningActionsCount == 0) {
	obj534_SCEventRun_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj66 
move_542();
function move_542() {
	window.obj534_SCEventRun_runningActionsCount = obj534_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj66");
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
			window.obj534_SCEventRun_runningActionsCount = window.obj534_SCEventRun_runningActionsCount - 1;

if (window.obj534_SCEventRun_runningActionsCount == 0) {
	obj534_SCEventRun_actionGroup2();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1384();
function playAudioFile_1384() {
	window.obj534_SCEventRun_runningActionsCount = obj534_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1384")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1384");
			$("#obj_audio_playSoundFile1384").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj534_SCEventRun_runningActionsCount = window.obj534_SCEventRun_runningActionsCount - 1;

if (window.obj534_SCEventRun_runningActionsCount == 0) {
	obj534_SCEventRun_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj534_SCEventRun_runningActionsCount = window.obj534_SCEventRun_runningActionsCount - 1;

if (window.obj534_SCEventRun_runningActionsCount == 0) {
	obj534_SCEventRun_actionGroup2();
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
				window.obj534_SCEventRun_runningActionsCount = window.obj534_SCEventRun_runningActionsCount - 1;

if (window.obj534_SCEventRun_runningActionsCount == 0) {
	obj534_SCEventRun_actionGroup2();
}
			}, false);
		} else {
			window.obj534_SCEventRun_runningActionsCount = window.obj534_SCEventRun_runningActionsCount - 1;

if (window.obj534_SCEventRun_runningActionsCount == 0) {
	obj534_SCEventRun_actionGroup2();
}
		}
	}

	
	
	
}






//	action: playAudioFile
playAudioFile_1272();
function playAudioFile_1272() {
	window.obj534_SCEventRun_runningActionsCount = obj534_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1272")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1272");
			$("#obj_audio_playSoundFile1272").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj534_SCEventRun_runningActionsCount = window.obj534_SCEventRun_runningActionsCount - 1;

if (window.obj534_SCEventRun_runningActionsCount == 0) {
	obj534_SCEventRun_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj534_SCEventRun_runningActionsCount = window.obj534_SCEventRun_runningActionsCount - 1;

if (window.obj534_SCEventRun_runningActionsCount == 0) {
	obj534_SCEventRun_actionGroup2();
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
				window.obj534_SCEventRun_runningActionsCount = window.obj534_SCEventRun_runningActionsCount - 1;

if (window.obj534_SCEventRun_runningActionsCount == 0) {
	obj534_SCEventRun_actionGroup2();
}
			}, false);
		} else {
			window.obj534_SCEventRun_runningActionsCount = window.obj534_SCEventRun_runningActionsCount - 1;

if (window.obj534_SCEventRun_runningActionsCount == 0) {
	obj534_SCEventRun_actionGroup2();
}
		}
	}

	
	
	
}




































};
obj534_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj534_SCEventRun_activeActionGroupIndex = -1;
		$("#obj534").trigger("obj534_SCEventRun_ended");
		
		return;
	}
	window.obj534_SCEventRun_activeActionGroupIndex = 2;
	














//	action: rotate 
//	target: obj41 
rotate_550();
function rotate_550() {
	window.obj534_SCEventRun_runningActionsCount = obj534_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj41";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj41';
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
	if (isInfinite) { rotate_550_completed(); }

	//TweenMax.to(targetObjectId, 0.5, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_550_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_550_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_550_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_550_completed() {
	setTimeout(function() {
		window.obj534_SCEventRun_runningActionsCount = window.obj534_SCEventRun_runningActionsCount - 1;

if (window.obj534_SCEventRun_runningActionsCount == 0) {
	obj534_SCEventRun_actionGroup3();
}
	}, 1);
}




























};
obj534_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj534_SCEventRun_activeActionGroupIndex = -1;
		$("#obj534").trigger("obj534_SCEventRun_ended");
		
		return;
	}
	window.obj534_SCEventRun_activeActionGroupIndex = 3;
	














//	action: rotate 
//	target: obj41 
rotate_551();
function rotate_551() {
	window.obj534_SCEventRun_runningActionsCount = obj534_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj41";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj41';
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
	if (isInfinite) { rotate_551_completed(); }

	//TweenMax.to(targetObjectId, 1, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_551_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_551_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_551_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_551_completed() {
	setTimeout(function() {
		window.obj534_SCEventRun_runningActionsCount = window.obj534_SCEventRun_runningActionsCount - 1;

if (window.obj534_SCEventRun_runningActionsCount == 0) {
	obj534_SCEventRun_actionGroup4();
}
	}, 1);
}




























};
obj534_SCEventRun_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj534_SCEventRun_activeActionGroupIndex = -1;
		$("#obj534").trigger("obj534_SCEventRun_ended");
		
		return;
	}
	window.obj534_SCEventRun_activeActionGroupIndex = 4;
	












//	action: playAudioFile
playAudioFile_1426();
function playAudioFile_1426() {
	window.obj534_SCEventRun_runningActionsCount = obj534_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1426")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1426");
			$("#obj_audio_playSoundFile1426").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj534_SCEventRun_runningActionsCount = window.obj534_SCEventRun_runningActionsCount - 1;

if (window.obj534_SCEventRun_runningActionsCount == 0) {
	obj534_SCEventRun_actionGroup5();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj534_SCEventRun_runningActionsCount = window.obj534_SCEventRun_runningActionsCount - 1;

if (window.obj534_SCEventRun_runningActionsCount == 0) {
	obj534_SCEventRun_actionGroup5();
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
				window.obj534_SCEventRun_runningActionsCount = window.obj534_SCEventRun_runningActionsCount - 1;

if (window.obj534_SCEventRun_runningActionsCount == 0) {
	obj534_SCEventRun_actionGroup5();
}
			}, false);
		} else {
			window.obj534_SCEventRun_runningActionsCount = window.obj534_SCEventRun_runningActionsCount - 1;

if (window.obj534_SCEventRun_runningActionsCount == 0) {
	obj534_SCEventRun_actionGroup5();
}
		}
	}

	
	
	
}




































};
obj534_SCEventRun_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj534_SCEventRun_activeActionGroupIndex = -1;
		$("#obj534").trigger("obj534_SCEventRun_ended");
		
		return;
	}
	window.obj534_SCEventRun_activeActionGroupIndex = 5;
	














//	action: rotate 
//	target: obj41 
rotate_553();
function rotate_553() {
	window.obj534_SCEventRun_runningActionsCount = obj534_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj41";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj41';
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
	if (isInfinite) { rotate_553_completed(); }

	//TweenMax.to(targetObjectId, 0.5, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_553_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_553_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_553_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_553_completed() {
	setTimeout(function() {
		window.obj534_SCEventRun_runningActionsCount = window.obj534_SCEventRun_runningActionsCount - 1;

if (window.obj534_SCEventRun_runningActionsCount == 0) {
	obj534_SCEventRun_actionGroup6();
}
	}, 1);
}




























};
obj534_SCEventRun_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj534_SCEventRun_activeActionGroupIndex = -1;
		$("#obj534").trigger("obj534_SCEventRun_ended");
		
		return;
	}
	window.obj534_SCEventRun_activeActionGroupIndex = 6;
	


//	action: show 
//	target: obj556 
(function(){
	window.obj534_SCEventRun_runningActionsCount = obj534_SCEventRun_runningActionsCount + 1;


	var element = "#obj556";
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
				window.obj534_SCEventRun_runningActionsCount = window.obj534_SCEventRun_runningActionsCount - 1;

if (window.obj534_SCEventRun_runningActionsCount == 0) {
	obj534_SCEventRun_actionGroup7();
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
			window.obj534_SCEventRun_runningActionsCount = window.obj534_SCEventRun_runningActionsCount - 1;

if (window.obj534_SCEventRun_runningActionsCount == 0) {
	obj534_SCEventRun_actionGroup7();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();







































};
obj534_SCEventRun_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj534_SCEventRun_activeActionGroupIndex = -1;
		$("#obj534").trigger("obj534_SCEventRun_ended");
		
		return;
	}
	window.obj534_SCEventRun_activeActionGroupIndex = 7;
	



//	action: move
//	target: obj556 
move_562();
function move_562() {
	window.obj534_SCEventRun_runningActionsCount = obj534_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj556");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-67";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 700, easing, function() {
		setTimeout(function() {
			window.obj534_SCEventRun_runningActionsCount = window.obj534_SCEventRun_runningActionsCount - 1;

if (window.obj534_SCEventRun_runningActionsCount == 0) {
	obj534_SCEventRun_actionGroup8();
}
		}, 1);
	});
}














//	action: scale
//	target: obj556 
scale_565();
function scale_565() {
	window.obj534_SCEventRun_runningActionsCount = obj534_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj556";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj556';
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
		scale_565_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_565_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_565_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_565_completed() {
	setTimeout(function() {
		window.obj534_SCEventRun_runningActionsCount = window.obj534_SCEventRun_runningActionsCount - 1;

if (window.obj534_SCEventRun_runningActionsCount == 0) {
	obj534_SCEventRun_actionGroup8();
}
	}, 1);
}
























};
obj534_SCEventRun_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj534_SCEventRun_activeActionGroupIndex = -1;
		$("#obj534").trigger("obj534_SCEventRun_ended");
		
		return;
	}
	window.obj534_SCEventRun_activeActionGroupIndex = 8;
	

//	action: hide
//	target: obj556 
hide_564();
function hide_564() {
	var element = "#obj556";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj534_SCEventRun_runningActionsCount = obj534_SCEventRun_runningActionsCount + 1;

	
	var animationType = "fadeOutUp";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj534_SCEventRun_runningActionsCount = window.obj534_SCEventRun_runningActionsCount - 1;

if (window.obj534_SCEventRun_runningActionsCount == 0) {
	obj534_SCEventRun_actionGroup9();
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
		setTimeout(hide_564(), 100);
		return;
	}

	setTimeout(function() {
		$(element).css("display", "none");
		window.obj534_SCEventRun_runningActionsCount = window.obj534_SCEventRun_runningActionsCount - 1;

if (window.obj534_SCEventRun_runningActionsCount == 0) {
	obj534_SCEventRun_actionGroup9();
}
	}, animationDurationMs);

	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)

}








































};
obj534_SCEventRun_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj534_SCEventRun_activeActionGroupIndex = -1;
		$("#obj534").trigger("obj534_SCEventRun_ended");
		
		return;
	}
	window.obj534_SCEventRun_activeActionGroupIndex = 9;
	










































};
obj1362_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1362_onLoad_activeActionGroupIndex = -1;
		$("#obj1362").trigger("obj1362_onLoad_ended");
		
		return;
	}
	window.obj1362_onLoad_activeActionGroupIndex = 0;
	
























//	action: playAudio
//	target: obj1362 
playAudio_1364();
function playAudio_1364() {
	window.obj1362_onLoad_runningActionsCount = obj1362_onLoad_runningActionsCount + 1;

	var myAudio = $("#obj1362")[0];
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
		    window.obj1362_onLoad_runningActionsCount = window.obj1362_onLoad_runningActionsCount - 1;

if (window.obj1362_onLoad_runningActionsCount == 0) {
	obj1362_onLoad_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1362_onLoad_runningActionsCount = window.obj1362_onLoad_runningActionsCount - 1;

if (window.obj1362_onLoad_runningActionsCount == 0) {
	obj1362_onLoad_actionGroup1();
}
	}
}

















};
obj1362_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1362_onLoad_activeActionGroupIndex = -1;
		$("#obj1362").trigger("obj1362_onLoad_ended");
		
		return;
	}
	window.obj1362_onLoad_activeActionGroupIndex = 1;
	










































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		





/*
 *
 *   obj519: Event Touch Down
 *
 */

$("#obj519").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj519_onTap_activeActionGroupIndex != -1) return;
var obj519_onTap_runningActionsCount = 0;
var obj519_onTap_loopCount = 0;
obj519_onTap_actionGroup0();
});



/*
 *
 *   obj519: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj519_onLoad_activeActionGroupIndex != -1) return;
var obj519_onLoad_runningActionsCount = 0;
var obj519_onLoad_loopCount = 0;
obj519_onLoad_actionGroup0();
});




























































































































































































































/*
 *
 *   obj41: Event Touch Down
 *
 */

$("#obj41").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj41_onTap_activeActionGroupIndex != -1) return;
var obj41_onTap_runningActionsCount = 0;
var obj41_onTap_loopCount = 0;
obj41_onTap_actionGroup0();
});














/*
 *
 *   obj66: Event Touch Down
 *
 */

$("#obj66").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj66_onTap_activeActionGroupIndex != -1) return;
var obj66_onTap_runningActionsCount = 0;
var obj66_onTap_loopCount = 0;
obj66_onTap_actionGroup0();
});












































/*
 *
 *   obj68: Event Touch Down
 *
 */

$("#obj68").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68_onTap_activeActionGroupIndex != -1) return;
var obj68_onTap_runningActionsCount = 0;
var obj68_onTap_loopCount = 0;
obj68_onTap_actionGroup0();
});




































































/*
 *
 *   obj522: Event SCEventRun
 *
 */

$("#obj522").bind("SCEventRun", function(event) {
	if (window.obj522_SCEventRun_activeActionGroupIndex != -1) return;
var obj522_SCEventRun_runningActionsCount = 0;
var obj522_SCEventRun_loopCount = 0;
obj522_SCEventRun_actionGroup0();
});














/*
 *
 *   obj534: Event SCEventRun
 *
 */

$("#obj534").bind("SCEventRun", function(event) {
	if (window.obj534_SCEventRun_activeActionGroupIndex != -1) return;
var obj534_SCEventRun_runningActionsCount = 0;
var obj534_SCEventRun_loopCount = 0;
obj534_SCEventRun_actionGroup0();
});






















































/*
 *
 *   obj1362: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1362_onLoad_activeActionGroupIndex != -1) return;
var obj1362_onLoad_runningActionsCount = 0;
var obj1362_onLoad_loopCount = 0;
obj1362_onLoad_actionGroup0();
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
	
$("#obj519").trigger('SCEventShow');
$("#obj27").trigger('SCEventShow');
$("#obj33").trigger('SCEventShow');
$("#obj23").trigger('SCEventShow');
$("#obj73").trigger('SCEventShow');
$("#obj71").trigger('SCEventShow');
$("#obj39").trigger('SCEventShow');
$("#obj37").trigger('SCEventShow');
$("#obj56").trigger('SCEventShow');
$("#obj54").trigger('SCEventShow');
$("#obj52").trigger('SCEventShow');
$("#obj50").trigger('SCEventShow');
$("#obj48").trigger('SCEventShow');
$("#obj46").trigger('SCEventShow');
$("#obj41").trigger('SCEventShow');
$("#obj66").trigger('SCEventShow');
$("#obj35").trigger('SCEventShow');
$("#obj59").trigger('SCEventShow');
$("#obj68").trigger('SCEventShow');
$("#obj1362").trigger('SCEventShow');
	localStorage.setItem("tapped", "0");
localStorage.setItem("ready", "false");
});