pubcoder.projectID = pubcoder.projectID || "968537061CD4A6469E16DEA662F0DD9C";
pubcoder.project.id = pubcoder.project.id || "968537061CD4A6469E16DEA662F0DD9C";
pubcoder.project.title = pubcoder.project.title || "MGTO Underwater Story";
pubcoder.page.id = pubcoder.page.id || 3;
pubcoder.page.title = pubcoder.page.title || "3";
pubcoder.page.number = pubcoder.page.number || 3;
pubcoder.page.alias = pubcoder.page.alias || "";


var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;

var obj427_animation_count = 0;
var obj296_animation_count = 0;
var obj282_animation_count = 0;
var obj264_animation_count = 0;
var obj334_animation_count = 0;
var obj4969_animation_count = 0;

/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj427_onShow_activeActionGroupIndex = -1;
var obj427_onShow_runningActionsCount = 0;
var obj427_onShow_loopCount = 0;
var obj282_onLoad_activeActionGroupIndex = -1;
var obj282_onLoad_runningActionsCount = 0;
var obj282_onLoad_loopCount = 0;
var obj264_onLoad_activeActionGroupIndex = -1;
var obj264_onLoad_runningActionsCount = 0;
var obj264_onLoad_loopCount = 0;
var obj354_SCEventRun_activeActionGroupIndex = -1;
var obj354_SCEventRun_runningActionsCount = 0;
var obj354_SCEventRun_loopCount = 0;
var obj360_SCEventRun_activeActionGroupIndex = -1;
var obj360_SCEventRun_runningActionsCount = 0;
var obj360_SCEventRun_loopCount = 0;
var obj446_SCEventRun_activeActionGroupIndex = -1;
var obj446_SCEventRun_runningActionsCount = 0;
var obj446_SCEventRun_loopCount = 0;
var obj468_onLoad_activeActionGroupIndex = -1;
var obj468_onLoad_runningActionsCount = 0;
var obj468_onLoad_loopCount = 0;
var obj464_onLoad_activeActionGroupIndex = -1;
var obj464_onLoad_runningActionsCount = 0;
var obj464_onLoad_loopCount = 0;
var obj476_onLoad_activeActionGroupIndex = -1;
var obj476_onLoad_runningActionsCount = 0;
var obj476_onLoad_loopCount = 0;
var obj4969_onDrag_activeActionGroupIndex = -1;
var obj4969_onDrag_runningActionsCount = 0;
var obj4969_onDrag_loopCount = 0;
var obj4969_onLoad_activeActionGroupIndex = -1;
var obj4969_onLoad_runningActionsCount = 0;
var obj4969_onLoad_loopCount = 0;
var obj4969_onTouchDown_activeActionGroupIndex = -1;
var obj4969_onTouchDown_runningActionsCount = 0;
var obj4969_onTouchDown_loopCount = 0;
var obj4969_onTouchUp_activeActionGroupIndex = -1;
var obj4969_onTouchUp_runningActionsCount = 0;
var obj4969_onTouchUp_loopCount = 0;
var obj4668_SCEventRun_activeActionGroupIndex = -1;
var obj4668_SCEventRun_runningActionsCount = 0;
var obj4668_SCEventRun_loopCount = 0;
var obj4671_onLoad_activeActionGroupIndex = -1;
var obj4671_onLoad_runningActionsCount = 0;
var obj4671_onLoad_loopCount = 0;
var obj4671_onShow_activeActionGroupIndex = -1;
var obj4671_onShow_runningActionsCount = 0;
var obj4671_onShow_loopCount = 0;
var obj5418_onLoad_activeActionGroupIndex = -1;
var obj5418_onLoad_runningActionsCount = 0;
var obj5418_onLoad_loopCount = 0;

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
	
initAnimation_427();
function initAnimation_427()
{
        var targetObjectId = "#obj427";
        var widthSCAnimationObject = 439;
        var heightSCAnimationObject = 442;
		var framesPerSecond = 24;
		var howManyLoops = 1;
		var backToFirstFrame = false;
        var isAnimationInfinite = false;
        window.audio_animation_obj427 = $("#")[0];
        window.hasAudioTrack_obj427 = false

 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj427_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj427 = $(targetObjectId).spritespin("api");
}
initAnimation_296();
function initAnimation_296()
{
        var targetObjectId = "#obj296";
        var widthSCAnimationObject = 439;
        var heightSCAnimationObject = 442;
		var framesPerSecond = 12;
		var howManyLoops = 1;
		var backToFirstFrame = false;
        var isAnimationInfinite = false;
        window.audio_animation_obj296 = $("#")[0];
        window.hasAudioTrack_obj296 = false

 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj296_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj296 = $(targetObjectId).spritespin("api");
}
initAnimation_282();
function initAnimation_282()
{
        var targetObjectId = "#obj282";
        var widthSCAnimationObject = 439;
        var heightSCAnimationObject = 442;
		var framesPerSecond = 24;
		var howManyLoops = 1;
		var backToFirstFrame = false;
        var isAnimationInfinite = false;
        window.audio_animation_obj282 = $("#")[0];
        window.hasAudioTrack_obj282 = false

 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj282_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj282 = $(targetObjectId).spritespin("api");
}
initAnimation_264();
function initAnimation_264()
{
        var targetObjectId = "#obj264";
        var widthSCAnimationObject = 133;
        var heightSCAnimationObject = 99;
		var framesPerSecond = 6;
		var howManyLoops = 1;
		var backToFirstFrame = false;
        var isAnimationInfinite = false;
        window.audio_animation_obj264 = $("#")[0];
        window.hasAudioTrack_obj264 = false

 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj264_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj264 = $(targetObjectId).spritespin("api");
}
initAnimation_334();
function initAnimation_334()
{
        var targetObjectId = "#obj334";
        var widthSCAnimationObject = 526;
        var heightSCAnimationObject = 253;
		var framesPerSecond = 18;
		var howManyLoops = 1;
		var backToFirstFrame = false;
        var isAnimationInfinite = false;
        window.audio_animation_obj334 = $("#")[0];
        window.hasAudioTrack_obj334 = false

 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj334_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj334 = $(targetObjectId).spritespin("api");
}
initAnimation_4969();
function initAnimation_4969()
{
        var targetObjectId = "#obj4969";
        var widthSCAnimationObject = 412;
        var heightSCAnimationObject = 227;
		var framesPerSecond = 10;
		var howManyLoops = 0;
		var backToFirstFrame = false;
        var isAnimationInfinite = true;
        window.audio_animation_obj4969 = $("#")[0];
        window.hasAudioTrack_obj4969 = false

 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj4969_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj4969 = $(targetObjectId).spritespin("api");
}


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
		
obj427_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj427_onShow_activeActionGroupIndex = -1;
		$("#obj427").trigger("obj427_onShow_ended");
		
		return;
	}
	window.obj427_onShow_activeActionGroupIndex = 0;
	
















//	action: wait
wait_456();
function wait_456() {
	window.obj427_onShow_runningActionsCount = obj427_onShow_runningActionsCount + 1;

	setTimeout(function() {
		window.obj427_onShow_runningActionsCount = window.obj427_onShow_runningActionsCount - 1;

if (window.obj427_onShow_runningActionsCount == 0) {
	obj427_onShow_actionGroup1();
}
	}, 5000);
}

























};
obj427_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj427_onShow_activeActionGroupIndex = -1;
		$("#obj427").trigger("obj427_onShow_ended");
		
		return;
	}
	window.obj427_onShow_activeActionGroupIndex = 1;
	




//	action: playAnimation 
//	target: obj427 
playAnimation_457();
function playAnimation_457() {
	var targetObjectId = "#obj427";
	var targetObject = $(targetObjectId)[0];
	window.obj427_onShow_runningActionsCount = obj427_onShow_runningActionsCount + 1;

	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj427_onShow_runningActionsCount = window.obj427_onShow_runningActionsCount - 1;

if (window.obj427_onShow_runningActionsCount == 0) {
	obj427_onShow_actionGroup2();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj427 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj427;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");

	setTimeout(function() {
	    api_animate_obj427.startAnimation();
	}, 1);

	if (!isAnimationInfinite) {
		$("#obj427").one("obj427_animation_ended",function(event) {
		    window.obj427_onShow_runningActionsCount = window.obj427_onShow_runningActionsCount - 1;

if (window.obj427_onShow_runningActionsCount == 0) {
	obj427_onShow_actionGroup2();
}
		});
	}
 }





































};
obj427_onShow_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj427_onShow_activeActionGroupIndex = -1;
		$("#obj427").trigger("obj427_onShow_ended");
		
		return;
	}
	window.obj427_onShow_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj427_onShow();
function loop_obj427_onShow() {

	var loopCount = 0;

	window.obj427_onShow_loopCount = window.obj427_onShow_loopCount + 1;
	if (loopCount != 0 && window.obj427_onShow_loopCount > loopCount) {
		window.obj427_onShow_loopCount = 0
		obj427_onShow_actionGroup3();
	} else {
		obj427_onShow_actionGroup0();
	}

}


























};
obj427_onShow_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj427_onShow_activeActionGroupIndex = -1;
		$("#obj427").trigger("obj427_onShow_ended");
		
		return;
	}
	window.obj427_onShow_activeActionGroupIndex = 3;
	










































};
obj282_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj282_onLoad_activeActionGroupIndex = -1;
		$("#obj282").trigger("obj282_onLoad_ended");
		
		return;
	}
	window.obj282_onLoad_activeActionGroupIndex = 0;
	
















//	action: wait
wait_294();
function wait_294() {
	window.obj282_onLoad_runningActionsCount = obj282_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj282_onLoad_runningActionsCount = window.obj282_onLoad_runningActionsCount - 1;

if (window.obj282_onLoad_runningActionsCount == 0) {
	obj282_onLoad_actionGroup1();
}
	}, 5000);
}

























};
obj282_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj282_onLoad_activeActionGroupIndex = -1;
		$("#obj282").trigger("obj282_onLoad_ended");
		
		return;
	}
	window.obj282_onLoad_activeActionGroupIndex = 1;
	




//	action: playAnimation 
//	target: obj282 
playAnimation_293();
function playAnimation_293() {
	var targetObjectId = "#obj282";
	var targetObject = $(targetObjectId)[0];
	window.obj282_onLoad_runningActionsCount = obj282_onLoad_runningActionsCount + 1;

	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj282_onLoad_runningActionsCount = window.obj282_onLoad_runningActionsCount - 1;

if (window.obj282_onLoad_runningActionsCount == 0) {
	obj282_onLoad_actionGroup2();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj282 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj282;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");

	setTimeout(function() {
	    api_animate_obj282.startAnimation();
	}, 1);

	if (!isAnimationInfinite) {
		$("#obj282").one("obj282_animation_ended",function(event) {
		    window.obj282_onLoad_runningActionsCount = window.obj282_onLoad_runningActionsCount - 1;

if (window.obj282_onLoad_runningActionsCount == 0) {
	obj282_onLoad_actionGroup2();
}
		});
	}
 }





































};
obj282_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj282_onLoad_activeActionGroupIndex = -1;
		$("#obj282").trigger("obj282_onLoad_ended");
		
		return;
	}
	window.obj282_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj282_onLoad();
function loop_obj282_onLoad() {

	var loopCount = 0;

	window.obj282_onLoad_loopCount = window.obj282_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj282_onLoad_loopCount > loopCount) {
		window.obj282_onLoad_loopCount = 0
		obj282_onLoad_actionGroup3();
	} else {
		obj282_onLoad_actionGroup0();
	}

}


























};
obj282_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj282_onLoad_activeActionGroupIndex = -1;
		$("#obj282").trigger("obj282_onLoad_ended");
		
		return;
	}
	window.obj282_onLoad_activeActionGroupIndex = 3;
	










































};
obj264_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj264_onLoad_activeActionGroupIndex = -1;
		$("#obj264").trigger("obj264_onLoad_ended");
		
		return;
	}
	window.obj264_onLoad_activeActionGroupIndex = 0;
	




//	action: playAnimation 
//	target: obj264 
playAnimation_272();
function playAnimation_272() {
	var targetObjectId = "#obj264";
	var targetObject = $(targetObjectId)[0];
	window.obj264_onLoad_runningActionsCount = obj264_onLoad_runningActionsCount + 1;

	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj264_onLoad_runningActionsCount = window.obj264_onLoad_runningActionsCount - 1;

if (window.obj264_onLoad_runningActionsCount == 0) {
	obj264_onLoad_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj264 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj264;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");

	setTimeout(function() {
	    api_animate_obj264.startAnimation();
	}, 1);

	if (!isAnimationInfinite) {
		$("#obj264").one("obj264_animation_ended",function(event) {
		    window.obj264_onLoad_runningActionsCount = window.obj264_onLoad_runningActionsCount - 1;

if (window.obj264_onLoad_runningActionsCount == 0) {
	obj264_onLoad_actionGroup1();
}
		});
	}
 }





































};
obj264_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj264_onLoad_activeActionGroupIndex = -1;
		$("#obj264").trigger("obj264_onLoad_ended");
		
		return;
	}
	window.obj264_onLoad_activeActionGroupIndex = 1;
	
















//	action: wait
wait_273();
function wait_273() {
	window.obj264_onLoad_runningActionsCount = obj264_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj264_onLoad_runningActionsCount = window.obj264_onLoad_runningActionsCount - 1;

if (window.obj264_onLoad_runningActionsCount == 0) {
	obj264_onLoad_actionGroup2();
}
	}, 3000);
}

























};
obj264_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj264_onLoad_activeActionGroupIndex = -1;
		$("#obj264").trigger("obj264_onLoad_ended");
		
		return;
	}
	window.obj264_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj264_onLoad();
function loop_obj264_onLoad() {

	var loopCount = 0;

	window.obj264_onLoad_loopCount = window.obj264_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj264_onLoad_loopCount > loopCount) {
		window.obj264_onLoad_loopCount = 0
		obj264_onLoad_actionGroup3();
	} else {
		obj264_onLoad_actionGroup0();
	}

}


























};
obj264_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj264_onLoad_activeActionGroupIndex = -1;
		$("#obj264").trigger("obj264_onLoad_ended");
		
		return;
	}
	window.obj264_onLoad_activeActionGroupIndex = 3;
	










































};
obj354_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj354_SCEventRun_activeActionGroupIndex = -1;
		$("#obj354").trigger("obj354_SCEventRun_ended");
		
		return;
	}
	window.obj354_SCEventRun_activeActionGroupIndex = 0;
	


//	action: show 
//	target: obj334 
(function(){
	window.obj354_SCEventRun_runningActionsCount = obj354_SCEventRun_runningActionsCount + 1;


	var element = "#obj334";
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
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				window.obj354_SCEventRun_runningActionsCount = window.obj354_SCEventRun_runningActionsCount - 1;

if (window.obj354_SCEventRun_runningActionsCount == 0) {
	obj354_SCEventRun_actionGroup1();
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
			window.obj354_SCEventRun_runningActionsCount = window.obj354_SCEventRun_runningActionsCount - 1;

if (window.obj354_SCEventRun_runningActionsCount == 0) {
	obj354_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj375 
(function(){
	window.obj354_SCEventRun_runningActionsCount = obj354_SCEventRun_runningActionsCount + 1;


	var element = "#obj375";
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
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				window.obj354_SCEventRun_runningActionsCount = window.obj354_SCEventRun_runningActionsCount - 1;

if (window.obj354_SCEventRun_runningActionsCount == 0) {
	obj354_SCEventRun_actionGroup1();
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
			window.obj354_SCEventRun_runningActionsCount = window.obj354_SCEventRun_runningActionsCount - 1;

if (window.obj354_SCEventRun_runningActionsCount == 0) {
	obj354_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj377 
(function(){
	window.obj354_SCEventRun_runningActionsCount = obj354_SCEventRun_runningActionsCount + 1;


	var element = "#obj377";
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
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				window.obj354_SCEventRun_runningActionsCount = window.obj354_SCEventRun_runningActionsCount - 1;

if (window.obj354_SCEventRun_runningActionsCount == 0) {
	obj354_SCEventRun_actionGroup1();
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
			window.obj354_SCEventRun_runningActionsCount = window.obj354_SCEventRun_runningActionsCount - 1;

if (window.obj354_SCEventRun_runningActionsCount == 0) {
	obj354_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();

//	action: playAnimation 
//	target: obj334 
playAnimation_357();
function playAnimation_357() {
	var targetObjectId = "#obj334";
	var targetObject = $(targetObjectId)[0];
	window.obj354_SCEventRun_runningActionsCount = obj354_SCEventRun_runningActionsCount + 1;

	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj354_SCEventRun_runningActionsCount = window.obj354_SCEventRun_runningActionsCount - 1;

if (window.obj354_SCEventRun_runningActionsCount == 0) {
	obj354_SCEventRun_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj334 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj334;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");

	setTimeout(function() {
	    api_animate_obj334.startAnimation();
	}, 1);

	if (!isAnimationInfinite) {
		$("#obj334").one("obj334_animation_ended",function(event) {
		    window.obj354_SCEventRun_runningActionsCount = window.obj354_SCEventRun_runningActionsCount - 1;

if (window.obj354_SCEventRun_runningActionsCount == 0) {
	obj354_SCEventRun_actionGroup1();
}
		});
	}
 }







//	action: playAudioFile
playAudioFile_5421();
function playAudioFile_5421() {
	window.obj354_SCEventRun_runningActionsCount = obj354_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5421")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5421");
			$("#obj_audio_playSoundFile5421").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj354_SCEventRun_runningActionsCount = window.obj354_SCEventRun_runningActionsCount - 1;

if (window.obj354_SCEventRun_runningActionsCount == 0) {
	obj354_SCEventRun_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj354_SCEventRun_runningActionsCount = window.obj354_SCEventRun_runningActionsCount - 1;

if (window.obj354_SCEventRun_runningActionsCount == 0) {
	obj354_SCEventRun_actionGroup1();
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
				window.obj354_SCEventRun_runningActionsCount = window.obj354_SCEventRun_runningActionsCount - 1;

if (window.obj354_SCEventRun_runningActionsCount == 0) {
	obj354_SCEventRun_actionGroup1();
}
			}, false);
		} else {
			window.obj354_SCEventRun_runningActionsCount = window.obj354_SCEventRun_runningActionsCount - 1;

if (window.obj354_SCEventRun_runningActionsCount == 0) {
	obj354_SCEventRun_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_410();
function runjs_410() {
	window.obj354_SCEventRun_runningActionsCount = obj354_SCEventRun_runningActionsCount + 1;


	localStorage.setItem("splashing", "true");

	setTimeout(function() {
		window.obj354_SCEventRun_runningActionsCount = window.obj354_SCEventRun_runningActionsCount - 1;

if (window.obj354_SCEventRun_runningActionsCount == 0) {
	obj354_SCEventRun_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_454();
function runjs_454() {
	window.obj354_SCEventRun_runningActionsCount = obj354_SCEventRun_runningActionsCount + 1;


	if(localStorage.getItem("gasp") === "false" && localStorage.getItem("ready") === "true")
{
    localStorage.setItem("gasp", "true");
    $("#obj446").trigger(PubCoder.Events.Run);
}

	setTimeout(function() {
		window.obj354_SCEventRun_runningActionsCount = window.obj354_SCEventRun_runningActionsCount - 1;

if (window.obj354_SCEventRun_runningActionsCount == 0) {
	obj354_SCEventRun_actionGroup1();
}
	}, 1);
}












};
obj354_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj354_SCEventRun_activeActionGroupIndex = -1;
		$("#obj354").trigger("obj354_SCEventRun_ended");
		
		return;
	}
	window.obj354_SCEventRun_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj377 
move_383();
function move_383() {
	window.obj354_SCEventRun_runningActionsCount = obj354_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj377");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-102";
	var moveY = "+=20";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 200, easing, function() {
		setTimeout(function() {
			window.obj354_SCEventRun_runningActionsCount = window.obj354_SCEventRun_runningActionsCount - 1;

if (window.obj354_SCEventRun_runningActionsCount == 0) {
	obj354_SCEventRun_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj377 
move_384();
function move_384() {
	window.obj354_SCEventRun_runningActionsCount = obj354_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj377");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-79";
	var moveY = "+=209";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 150, easing, function() {
		setTimeout(function() {
			window.obj354_SCEventRun_runningActionsCount = window.obj354_SCEventRun_runningActionsCount - 1;

if (window.obj354_SCEventRun_runningActionsCount == 0) {
	obj354_SCEventRun_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj375 
move_388();
function move_388() {
	window.obj354_SCEventRun_runningActionsCount = obj354_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj375");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=113";
	var moveY = "+=-36";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 200, easing, function() {
		setTimeout(function() {
			window.obj354_SCEventRun_runningActionsCount = window.obj354_SCEventRun_runningActionsCount - 1;

if (window.obj354_SCEventRun_runningActionsCount == 0) {
	obj354_SCEventRun_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj375 
move_389();
function move_389() {
	window.obj354_SCEventRun_runningActionsCount = obj354_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj375");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=75";
	var moveY = "+=177";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 150, easing, function() {
		setTimeout(function() {
			window.obj354_SCEventRun_runningActionsCount = window.obj354_SCEventRun_runningActionsCount - 1;

if (window.obj354_SCEventRun_runningActionsCount == 0) {
	obj354_SCEventRun_actionGroup2();
}
		}, 1);
	});
}










//	action: rotate 
//	target: obj377 
rotate_385();
function rotate_385() {
	window.obj354_SCEventRun_runningActionsCount = obj354_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj377";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj377';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '-75.63846';
	var rotationSpeed = 0.5;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = false;
	if (isInfinite) { rotate_385_completed(); }

	//TweenMax.to(targetObjectId, 0.5, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_385_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_385_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_385_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_385_completed() {
	setTimeout(function() {
		window.obj354_SCEventRun_runningActionsCount = window.obj354_SCEventRun_runningActionsCount - 1;

if (window.obj354_SCEventRun_runningActionsCount == 0) {
	obj354_SCEventRun_actionGroup2();
}
	}, 1);
}
//	action: rotate 
//	target: obj375 
rotate_390();
function rotate_390() {
	window.obj354_SCEventRun_runningActionsCount = obj354_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj375";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj375';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '83.49661';
	var rotationSpeed = 0.5;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = false;
	if (isInfinite) { rotate_390_completed(); }

	//TweenMax.to(targetObjectId, 0.5, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_390_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_390_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_390_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_390_completed() {
	setTimeout(function() {
		window.obj354_SCEventRun_runningActionsCount = window.obj354_SCEventRun_runningActionsCount - 1;

if (window.obj354_SCEventRun_runningActionsCount == 0) {
	obj354_SCEventRun_actionGroup2();
}
	}, 1);
}




























};
obj354_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj354_SCEventRun_activeActionGroupIndex = -1;
		$("#obj354").trigger("obj354_SCEventRun_ended");
		
		return;
	}
	window.obj354_SCEventRun_activeActionGroupIndex = 2;
	

//	action: hide
//	target: obj334 
hide_371();
function hide_371() {
	var element = "#obj334";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj354_SCEventRun_runningActionsCount = obj354_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj354_SCEventRun_runningActionsCount = window.obj354_SCEventRun_runningActionsCount - 1;

if (window.obj354_SCEventRun_runningActionsCount == 0) {
	obj354_SCEventRun_actionGroup3();
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
		setTimeout(hide_371(), 100);
		return;
	}

	setTimeout(function() {
		$(element).css("display", "none");
		window.obj354_SCEventRun_runningActionsCount = window.obj354_SCEventRun_runningActionsCount - 1;

if (window.obj354_SCEventRun_runningActionsCount == 0) {
	obj354_SCEventRun_actionGroup3();
}
	}, animationDurationMs);

	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)

}
//	action: hide
//	target: obj377 
hide_387();
function hide_387() {
	var element = "#obj377";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj354_SCEventRun_runningActionsCount = obj354_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj354_SCEventRun_runningActionsCount = window.obj354_SCEventRun_runningActionsCount - 1;

if (window.obj354_SCEventRun_runningActionsCount == 0) {
	obj354_SCEventRun_actionGroup3();
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
		setTimeout(hide_387(), 100);
		return;
	}

	setTimeout(function() {
		$(element).css("display", "none");
		window.obj354_SCEventRun_runningActionsCount = window.obj354_SCEventRun_runningActionsCount - 1;

if (window.obj354_SCEventRun_runningActionsCount == 0) {
	obj354_SCEventRun_actionGroup3();
}
	}, animationDurationMs);

	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)

}
//	action: hide
//	target: obj375 
hide_408();
function hide_408() {
	var element = "#obj375";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj354_SCEventRun_runningActionsCount = obj354_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj354_SCEventRun_runningActionsCount = window.obj354_SCEventRun_runningActionsCount - 1;

if (window.obj354_SCEventRun_runningActionsCount == 0) {
	obj354_SCEventRun_actionGroup3();
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
		setTimeout(hide_408(), 100);
		return;
	}

	setTimeout(function() {
		$(element).css("display", "none");
		window.obj354_SCEventRun_runningActionsCount = window.obj354_SCEventRun_runningActionsCount - 1;

if (window.obj354_SCEventRun_runningActionsCount == 0) {
	obj354_SCEventRun_actionGroup3();
}
	}, animationDurationMs);

	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)

}












//	action: rotate 
//	target: obj377 
rotate_386();
function rotate_386() {
	window.obj354_SCEventRun_runningActionsCount = obj354_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj377";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj377';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '75.63846';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = false;
	if (isInfinite) { rotate_386_completed(); }

	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_386_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_386_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_386_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_386_completed() {
	setTimeout(function() {
		window.obj354_SCEventRun_runningActionsCount = window.obj354_SCEventRun_runningActionsCount - 1;

if (window.obj354_SCEventRun_runningActionsCount == 0) {
	obj354_SCEventRun_actionGroup3();
}
	}, 1);
}
//	action: rotate 
//	target: obj375 
rotate_407();
function rotate_407() {
	window.obj354_SCEventRun_runningActionsCount = obj354_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj375";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj375';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '-83.49661';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = false;
	if (isInfinite) { rotate_407_completed(); }

	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_407_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_407_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_407_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_407_completed() {
	setTimeout(function() {
		window.obj354_SCEventRun_runningActionsCount = window.obj354_SCEventRun_runningActionsCount - 1;

if (window.obj354_SCEventRun_runningActionsCount == 0) {
	obj354_SCEventRun_actionGroup3();
}
	}, 1);
}















//	action: Run JavaScript
runjs_409();
function runjs_409() {
	window.obj354_SCEventRun_runningActionsCount = obj354_SCEventRun_runningActionsCount + 1;


	localStorage.setItem("splashing","false");

	setTimeout(function() {
		window.obj354_SCEventRun_runningActionsCount = window.obj354_SCEventRun_runningActionsCount - 1;

if (window.obj354_SCEventRun_runningActionsCount == 0) {
	obj354_SCEventRun_actionGroup3();
}
	}, 1);
}












};
obj354_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj354_SCEventRun_activeActionGroupIndex = -1;
		$("#obj354").trigger("obj354_SCEventRun_ended");
		
		return;
	}
	window.obj354_SCEventRun_activeActionGroupIndex = 3;
	










































};
obj360_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj360_SCEventRun_activeActionGroupIndex = -1;
		$("#obj360").trigger("obj360_SCEventRun_ended");
		
		return;
	}
	window.obj360_SCEventRun_activeActionGroupIndex = 0;
	





























//	action: Run JavaScript
runjs_362();
function runjs_362() {
	window.obj360_SCEventRun_runningActionsCount = obj360_SCEventRun_runningActionsCount + 1;


	if(parseInt($("#obj4969").css("top")) >= 400 && localStorage.getItem("touching") === "true" && localStorage.getItem("splashing") === "false")
    {
        var align = gridAlign();
        var x = align.toString() + "px";
        console.log(x);
        if(localStorage.getItem("underSea") === "false")
        {
            localStorage.setItem("underSea","true");
            var zep = {
            left: x, //$("#obj310").css("left"),
            top: "367px" //$("#obj310").css("top")
            };
            $("#obj334").css(zep);
            $("#obj377").css("left",(align + 14).toString() + "px");
            $("#obj375").css("left",(align + 372).toString() + "px");
            $("#obj377").css("top","400px");
            $("#obj375").css("top","422px");
            //run action list
            $("#obj354").trigger(PubCoder.Events.Run);
        }
    }
    else if (parseInt($("#obj4969").css("top")) < 400)
    {
        localStorage.setItem("underSea","false");
    }
    
    
function gridAlign(x)
{
    var space = 53;
    var amount = Math.floor(parseInt($("#obj4969").css("left")) / space);
    return (amount * space) - 25;
}

	setTimeout(function() {
		window.obj360_SCEventRun_runningActionsCount = window.obj360_SCEventRun_runningActionsCount - 1;

if (window.obj360_SCEventRun_runningActionsCount == 0) {
	obj360_SCEventRun_actionGroup1();
}
	}, 1);
}












};
obj360_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj360_SCEventRun_activeActionGroupIndex = -1;
		$("#obj360").trigger("obj360_SCEventRun_ended");
		
		return;
	}
	window.obj360_SCEventRun_activeActionGroupIndex = 1;
	










































};
obj446_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj446_SCEventRun_activeActionGroupIndex = -1;
		$("#obj446").trigger("obj446_SCEventRun_ended");
		
		return;
	}
	window.obj446_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj282 
hide_448();
function hide_448() {
	var element = "#obj282";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj446_SCEventRun_runningActionsCount = obj446_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj446_SCEventRun_runningActionsCount = window.obj446_SCEventRun_runningActionsCount - 1;

if (window.obj446_SCEventRun_runningActionsCount == 0) {
	obj446_SCEventRun_actionGroup1();
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
		setTimeout(hide_448(), 100);
		return;
	}

	setTimeout(function() {
		$(element).css("display", "none");
		window.obj446_SCEventRun_runningActionsCount = window.obj446_SCEventRun_runningActionsCount - 1;

if (window.obj446_SCEventRun_runningActionsCount == 0) {
	obj446_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)

}
//	action: show 
//	target: obj296 
(function(){
	window.obj446_SCEventRun_runningActionsCount = obj446_SCEventRun_runningActionsCount + 1;


	var element = "#obj296";
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
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				window.obj446_SCEventRun_runningActionsCount = window.obj446_SCEventRun_runningActionsCount - 1;

if (window.obj446_SCEventRun_runningActionsCount == 0) {
	obj446_SCEventRun_actionGroup1();
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
			window.obj446_SCEventRun_runningActionsCount = window.obj446_SCEventRun_runningActionsCount - 1;

if (window.obj446_SCEventRun_runningActionsCount == 0) {
	obj446_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();

//	action: playAnimation 
//	target: obj296 
playAnimation_450();
function playAnimation_450() {
	var targetObjectId = "#obj296";
	var targetObject = $(targetObjectId)[0];
	window.obj446_SCEventRun_runningActionsCount = obj446_SCEventRun_runningActionsCount + 1;

	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj446_SCEventRun_runningActionsCount = window.obj446_SCEventRun_runningActionsCount - 1;

if (window.obj446_SCEventRun_runningActionsCount == 0) {
	obj446_SCEventRun_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj296 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj296;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");

	setTimeout(function() {
	    api_animate_obj296.startAnimation();
	}, 1);

	if (!isAnimationInfinite) {
		$("#obj296").one("obj296_animation_ended",function(event) {
		    window.obj446_SCEventRun_runningActionsCount = window.obj446_SCEventRun_runningActionsCount - 1;

if (window.obj446_SCEventRun_runningActionsCount == 0) {
	obj446_SCEventRun_actionGroup1();
}
		});
	}
 }





































};
obj446_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj446_SCEventRun_activeActionGroupIndex = -1;
		$("#obj446").trigger("obj446_SCEventRun_ended");
		
		return;
	}
	window.obj446_SCEventRun_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj296 
hide_451();
function hide_451() {
	var element = "#obj296";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj446_SCEventRun_runningActionsCount = obj446_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj446_SCEventRun_runningActionsCount = window.obj446_SCEventRun_runningActionsCount - 1;

if (window.obj446_SCEventRun_runningActionsCount == 0) {
	obj446_SCEventRun_actionGroup2();
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
		setTimeout(hide_451(), 100);
		return;
	}

	setTimeout(function() {
		$(element).css("display", "none");
		window.obj446_SCEventRun_runningActionsCount = window.obj446_SCEventRun_runningActionsCount - 1;

if (window.obj446_SCEventRun_runningActionsCount == 0) {
	obj446_SCEventRun_actionGroup2();
}
	}, animationDurationMs);

	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)

}
//	action: show 
//	target: obj427 
(function(){
	window.obj446_SCEventRun_runningActionsCount = obj446_SCEventRun_runningActionsCount + 1;


	var element = "#obj427";
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
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				window.obj446_SCEventRun_runningActionsCount = window.obj446_SCEventRun_runningActionsCount - 1;

if (window.obj446_SCEventRun_runningActionsCount == 0) {
	obj446_SCEventRun_actionGroup2();
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
			window.obj446_SCEventRun_runningActionsCount = window.obj446_SCEventRun_runningActionsCount - 1;

if (window.obj446_SCEventRun_runningActionsCount == 0) {
	obj446_SCEventRun_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj480 
(function(){
	window.obj446_SCEventRun_runningActionsCount = obj446_SCEventRun_runningActionsCount + 1;


	var element = "#obj480";
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
				window.obj446_SCEventRun_runningActionsCount = window.obj446_SCEventRun_runningActionsCount - 1;

if (window.obj446_SCEventRun_runningActionsCount == 0) {
	obj446_SCEventRun_actionGroup2();
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
			window.obj446_SCEventRun_runningActionsCount = window.obj446_SCEventRun_runningActionsCount - 1;

if (window.obj446_SCEventRun_runningActionsCount == 0) {
	obj446_SCEventRun_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj466 
(function(){
	window.obj446_SCEventRun_runningActionsCount = obj446_SCEventRun_runningActionsCount + 1;


	var element = "#obj466";
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
				window.obj446_SCEventRun_runningActionsCount = window.obj446_SCEventRun_runningActionsCount - 1;

if (window.obj446_SCEventRun_runningActionsCount == 0) {
	obj446_SCEventRun_actionGroup2();
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
			window.obj446_SCEventRun_runningActionsCount = window.obj446_SCEventRun_runningActionsCount - 1;

if (window.obj446_SCEventRun_runningActionsCount == 0) {
	obj446_SCEventRun_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj470 
(function(){
	window.obj446_SCEventRun_runningActionsCount = obj446_SCEventRun_runningActionsCount + 1;


	var element = "#obj470";
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
				window.obj446_SCEventRun_runningActionsCount = window.obj446_SCEventRun_runningActionsCount - 1;

if (window.obj446_SCEventRun_runningActionsCount == 0) {
	obj446_SCEventRun_actionGroup2();
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
			window.obj446_SCEventRun_runningActionsCount = window.obj446_SCEventRun_runningActionsCount - 1;

if (window.obj446_SCEventRun_runningActionsCount == 0) {
	obj446_SCEventRun_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();









//	action: playAudioFile
playAudioFile_5579();
function playAudioFile_5579() {
	window.obj446_SCEventRun_runningActionsCount = obj446_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5579")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5579");
			$("#obj_audio_playSoundFile5579").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj446_SCEventRun_runningActionsCount = window.obj446_SCEventRun_runningActionsCount - 1;

if (window.obj446_SCEventRun_runningActionsCount == 0) {
	obj446_SCEventRun_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj446_SCEventRun_runningActionsCount = window.obj446_SCEventRun_runningActionsCount - 1;

if (window.obj446_SCEventRun_runningActionsCount == 0) {
	obj446_SCEventRun_actionGroup2();
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
				window.obj446_SCEventRun_runningActionsCount = window.obj446_SCEventRun_runningActionsCount - 1;

if (window.obj446_SCEventRun_runningActionsCount == 0) {
	obj446_SCEventRun_actionGroup2();
}
			}, false);
		} else {
			window.obj446_SCEventRun_runningActionsCount = window.obj446_SCEventRun_runningActionsCount - 1;

if (window.obj446_SCEventRun_runningActionsCount == 0) {
	obj446_SCEventRun_actionGroup2();
}
		}
	}

	
	
	
}




































};
obj446_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj446_SCEventRun_activeActionGroupIndex = -1;
		$("#obj446").trigger("obj446_SCEventRun_ended");
		
		return;
	}
	window.obj446_SCEventRun_activeActionGroupIndex = 2;
	










































};
obj468_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj468_onLoad_activeActionGroupIndex = -1;
		$("#obj468").trigger("obj468_onLoad_ended");
		
		return;
	}
	window.obj468_onLoad_activeActionGroupIndex = 0;
	


//	action: show 
//	target: obj468 
(function(){
	window.obj468_onLoad_runningActionsCount = obj468_onLoad_runningActionsCount + 1;


	var element = "#obj468";
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
				window.obj468_onLoad_runningActionsCount = window.obj468_onLoad_runningActionsCount - 1;

if (window.obj468_onLoad_runningActionsCount == 0) {
	obj468_onLoad_actionGroup1();
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
			window.obj468_onLoad_runningActionsCount = window.obj468_onLoad_runningActionsCount - 1;

if (window.obj468_onLoad_runningActionsCount == 0) {
	obj468_onLoad_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();







































};
obj468_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj468_onLoad_activeActionGroupIndex = -1;
		$("#obj468").trigger("obj468_onLoad_ended");
		
		return;
	}
	window.obj468_onLoad_activeActionGroupIndex = 1;
	










































};
obj464_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj464_onLoad_activeActionGroupIndex = -1;
		$("#obj464").trigger("obj464_onLoad_ended");
		
		return;
	}
	window.obj464_onLoad_activeActionGroupIndex = 0;
	





























//	action: Run JavaScript
runjs_5576();
function runjs_5576() {
	window.obj464_onLoad_runningActionsCount = obj464_onLoad_runningActionsCount + 1;


	localStorage.setItem('ready','false');

	setTimeout(function() {
		window.obj464_onLoad_runningActionsCount = window.obj464_onLoad_runningActionsCount - 1;

if (window.obj464_onLoad_runningActionsCount == 0) {
	obj464_onLoad_actionGroup1();
}
	}, 1);
}












};
obj464_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj464_onLoad_activeActionGroupIndex = -1;
		$("#obj464").trigger("obj464_onLoad_ended");
		
		return;
	}
	window.obj464_onLoad_activeActionGroupIndex = 1;
	


//	action: show 
//	target: obj464 
(function(){
	window.obj464_onLoad_runningActionsCount = obj464_onLoad_runningActionsCount + 1;


	var element = "#obj464";
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
				window.obj464_onLoad_runningActionsCount = window.obj464_onLoad_runningActionsCount - 1;

if (window.obj464_onLoad_runningActionsCount == 0) {
	obj464_onLoad_actionGroup2();
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
			window.obj464_onLoad_runningActionsCount = window.obj464_onLoad_runningActionsCount - 1;

if (window.obj464_onLoad_runningActionsCount == 0) {
	obj464_onLoad_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();









//	action: playAudioFile
playAudioFile_5577();
function playAudioFile_5577() {
	window.obj464_onLoad_runningActionsCount = obj464_onLoad_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5577")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5577");
			$("#obj_audio_playSoundFile5577").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj464_onLoad_runningActionsCount = window.obj464_onLoad_runningActionsCount - 1;

if (window.obj464_onLoad_runningActionsCount == 0) {
	obj464_onLoad_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj464_onLoad_runningActionsCount = window.obj464_onLoad_runningActionsCount - 1;

if (window.obj464_onLoad_runningActionsCount == 0) {
	obj464_onLoad_actionGroup2();
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
				window.obj464_onLoad_runningActionsCount = window.obj464_onLoad_runningActionsCount - 1;

if (window.obj464_onLoad_runningActionsCount == 0) {
	obj464_onLoad_actionGroup2();
}
			}, false);
		} else {
			window.obj464_onLoad_runningActionsCount = window.obj464_onLoad_runningActionsCount - 1;

if (window.obj464_onLoad_runningActionsCount == 0) {
	obj464_onLoad_actionGroup2();
}
		}
	}

	
	
	
}




































};
obj464_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj464_onLoad_activeActionGroupIndex = -1;
		$("#obj464").trigger("obj464_onLoad_ended");
		
		return;
	}
	window.obj464_onLoad_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_5578();
function runjs_5578() {
	window.obj464_onLoad_runningActionsCount = obj464_onLoad_runningActionsCount + 1;


	localStorage.setItem('ready','true');

	setTimeout(function() {
		window.obj464_onLoad_runningActionsCount = window.obj464_onLoad_runningActionsCount - 1;

if (window.obj464_onLoad_runningActionsCount == 0) {
	obj464_onLoad_actionGroup3();
}
	}, 1);
}












};
obj464_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj464_onLoad_activeActionGroupIndex = -1;
		$("#obj464").trigger("obj464_onLoad_ended");
		
		return;
	}
	window.obj464_onLoad_activeActionGroupIndex = 3;
	










































};
obj476_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj476_onLoad_activeActionGroupIndex = -1;
		$("#obj476").trigger("obj476_onLoad_ended");
		
		return;
	}
	window.obj476_onLoad_activeActionGroupIndex = 0;
	


//	action: show 
//	target: obj476 
(function(){
	window.obj476_onLoad_runningActionsCount = obj476_onLoad_runningActionsCount + 1;


	var element = "#obj476";
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
				window.obj476_onLoad_runningActionsCount = window.obj476_onLoad_runningActionsCount - 1;

if (window.obj476_onLoad_runningActionsCount == 0) {
	obj476_onLoad_actionGroup1();
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
			window.obj476_onLoad_runningActionsCount = window.obj476_onLoad_runningActionsCount - 1;

if (window.obj476_onLoad_runningActionsCount == 0) {
	obj476_onLoad_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();







































};
obj476_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj476_onLoad_activeActionGroupIndex = -1;
		$("#obj476").trigger("obj476_onLoad_ended");
		
		return;
	}
	window.obj476_onLoad_activeActionGroupIndex = 1;
	










































};
obj4969_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4969_onLoad_activeActionGroupIndex = -1;
		$("#obj4969").trigger("obj4969_onLoad_ended");
		
		return;
	}
	window.obj4969_onLoad_activeActionGroupIndex = 0;
	



































//	action: run action list container
//	target: obj360 
runActionList_5001();
function runActionList_5001() {
	window.obj4969_onLoad_runningActionsCount = obj4969_onLoad_runningActionsCount + 1;

	$("#obj360").trigger('SCEventRun');
	setTimeout(function() {
		window.obj4969_onLoad_runningActionsCount = window.obj4969_onLoad_runningActionsCount - 1;

if (window.obj4969_onLoad_runningActionsCount == 0) {
	obj4969_onLoad_actionGroup1();
}		
	}, 1);
}






};
obj4969_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4969_onLoad_activeActionGroupIndex = -1;
		$("#obj4969").trigger("obj4969_onLoad_ended");
		
		return;
	}
	window.obj4969_onLoad_activeActionGroupIndex = 1;
	



































//	action: run action list container
//	target: obj4668 
runActionList_5002();
function runActionList_5002() {
	window.obj4969_onLoad_runningActionsCount = obj4969_onLoad_runningActionsCount + 1;

	$("#obj4668").trigger('SCEventRun');
	setTimeout(function() {
		window.obj4969_onLoad_runningActionsCount = window.obj4969_onLoad_runningActionsCount - 1;

if (window.obj4969_onLoad_runningActionsCount == 0) {
	obj4969_onLoad_actionGroup2();
}		
	}, 1);
}






};
obj4969_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4969_onLoad_activeActionGroupIndex = -1;
		$("#obj4969").trigger("obj4969_onLoad_ended");
		
		return;
	}
	window.obj4969_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj4969_onLoad();
function loop_obj4969_onLoad() {

	var loopCount = 0;

	window.obj4969_onLoad_loopCount = window.obj4969_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj4969_onLoad_loopCount > loopCount) {
		window.obj4969_onLoad_loopCount = 0
		obj4969_onLoad_actionGroup3();
	} else {
		obj4969_onLoad_actionGroup0();
	}

}


























};
obj4969_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4969_onLoad_activeActionGroupIndex = -1;
		$("#obj4969").trigger("obj4969_onLoad_ended");
		
		return;
	}
	window.obj4969_onLoad_activeActionGroupIndex = 3;
	










































};
obj4969_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4969_onTouchDown_activeActionGroupIndex = -1;
		$("#obj4969").trigger("obj4969_onTouchDown_ended");
		
		return;
	}
	window.obj4969_onTouchDown_activeActionGroupIndex = 0;
	




//	action: playAnimation 
//	target: obj4969 
playAnimation_5019();
function playAnimation_5019() {
	var targetObjectId = "#obj4969";
	var targetObject = $(targetObjectId)[0];
	window.obj4969_onTouchDown_runningActionsCount = obj4969_onTouchDown_runningActionsCount + 1;

	var isAnimationInfinite = true;
	if (isAnimationInfinite) {
		window.obj4969_onTouchDown_runningActionsCount = window.obj4969_onTouchDown_runningActionsCount - 1;

if (window.obj4969_onTouchDown_runningActionsCount == 0) {
	obj4969_onTouchDown_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj4969 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj4969;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");

	setTimeout(function() {
	    api_animate_obj4969.startAnimation();
	}, 1);

	if (!isAnimationInfinite) {
		$("#obj4969").one("obj4969_animation_ended",function(event) {
		    window.obj4969_onTouchDown_runningActionsCount = window.obj4969_onTouchDown_runningActionsCount - 1;

if (window.obj4969_onTouchDown_runningActionsCount == 0) {
	obj4969_onTouchDown_actionGroup1();
}
		});
	}
 }
























//	action: Run JavaScript
runjs_5015();
function runjs_5015() {
	window.obj4969_onTouchDown_runningActionsCount = obj4969_onTouchDown_runningActionsCount + 1;


	localStorage.setItem("touching","true");


	setTimeout(function() {
		window.obj4969_onTouchDown_runningActionsCount = window.obj4969_onTouchDown_runningActionsCount - 1;

if (window.obj4969_onTouchDown_runningActionsCount == 0) {
	obj4969_onTouchDown_actionGroup1();
}
	}, 1);
}












};
obj4969_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4969_onTouchDown_activeActionGroupIndex = -1;
		$("#obj4969").trigger("obj4969_onTouchDown_ended");
		
		return;
	}
	window.obj4969_onTouchDown_activeActionGroupIndex = 1;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj4969");

//	action: dragDrop
//	target: obj4969 
dragDrop_4991();
function dragDrop_4991() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj4969_onTouchDown_runningActionsCount = obj4969_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj4969');
	var page = $('.SCPage');

	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();

	//div container
	var isBoundObject = false;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container

	// init Position
	var initPosClient;
	console.warn(event);
	if (event.type == "touchstart") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;

	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (e.type == "touchmove") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
			if (e.type == "mousemove") {
				var leftMouseButtonDown = e.buttons === undefined ? e.which === 1 : e.buttons === 1;
				if (!leftMouseButtonDown) {
					endDrag(e);
					return;
				}
			}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});

	var endDrag = function(e) {
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
		// $(".SCPage").unbind("mouseleave");
    	window.obj4969_onTouchDown_runningActionsCount = window.obj4969_onTouchDown_runningActionsCount - 1;

if (window.obj4969_onTouchDown_runningActionsCount == 0) {
	obj4969_onTouchDown_actionGroup2();
}
    	//define droppable elements
    	var droppableElements = new Array();
    	var actionsOnDrop = new Array() //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_4991 = false;
    	var dropped_id_4991;
    	var eventType;
    	if (e.type == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_4991 = true;
					dropped_id_4991 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_4991) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			

		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}






















};
obj4969_onTouchDown_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4969_onTouchDown_activeActionGroupIndex = -1;
		$("#obj4969").trigger("obj4969_onTouchDown_ended");
		
		return;
	}
	window.obj4969_onTouchDown_activeActionGroupIndex = 2;
	










































};
obj4969_onTouchUp_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4969_onTouchUp_activeActionGroupIndex = -1;
		$("#obj4969").trigger("obj4969_onTouchUp_ended");
		
		return;
	}
	window.obj4969_onTouchUp_activeActionGroupIndex = 0;
	





//	action: stopAnimation 
//	target: obj4969 
stopAnimation_5076();
function stopAnimation_5076() {
	window.obj4969_onTouchUp_runningActionsCount = obj4969_onTouchUp_runningActionsCount + 1;

	var targetObject = $("#obj4969");
	if (targetObject.hasClass("playing")) {
		targetObject.removeClass("playing");
		api_animate_obj4969.stopAnimation();
        if (window.hasAudioTrack_obj4969) {
            var audio_animation = window.audio_animation_obj4969;
            audio_animation.src = audio_animation.src; // myAudio.currentTime = 0 does not work on iOS
		    audio_animation.pause();
        }
		$("#obj4969").trigger('obj4969_animation_ended');
	}
	setTimeout(function() {
		window.obj4969_onTouchUp_runningActionsCount = window.obj4969_onTouchUp_runningActionsCount - 1;

if (window.obj4969_onTouchUp_runningActionsCount == 0) {
	obj4969_onTouchUp_actionGroup1();
}
	}, 1);
}























//	action: Run JavaScript
runjs_5017();
function runjs_5017() {
	window.obj4969_onTouchUp_runningActionsCount = obj4969_onTouchUp_runningActionsCount + 1;


	localStorage.setItem("touching","false");

	setTimeout(function() {
		window.obj4969_onTouchUp_runningActionsCount = window.obj4969_onTouchUp_runningActionsCount - 1;

if (window.obj4969_onTouchUp_runningActionsCount == 0) {
	obj4969_onTouchUp_actionGroup1();
}
	}, 1);
}












};
obj4969_onTouchUp_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4969_onTouchUp_activeActionGroupIndex = -1;
		$("#obj4969").trigger("obj4969_onTouchUp_ended");
		
		return;
	}
	window.obj4969_onTouchUp_activeActionGroupIndex = 1;
	










































};
obj4668_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4668_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4668").trigger("obj4668_SCEventRun_ended");
		
		return;
	}
	window.obj4668_SCEventRun_activeActionGroupIndex = 0;
	





























//	action: Run JavaScript
runjs_4670();
function runjs_4670() {
	window.obj4668_SCEventRun_runningActionsCount = obj4668_SCEventRun_runningActionsCount + 1;


	var defX = 356;
var defY = 245;
var zLeft = parseInt($("#obj4969").css("left").slice(0, -2));
var zTop = parseInt($("#obj4969").css("top").slice(0, -2));
if(zLeft !== defX || zTop !== defY)
    {
        $("#obj4671").fadeOut();
    }

	setTimeout(function() {
		window.obj4668_SCEventRun_runningActionsCount = window.obj4668_SCEventRun_runningActionsCount - 1;

if (window.obj4668_SCEventRun_runningActionsCount == 0) {
	obj4668_SCEventRun_actionGroup1();
}
	}, 1);
}












};
obj4668_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4668_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4668").trigger("obj4668_SCEventRun_ended");
		
		return;
	}
	window.obj4668_SCEventRun_activeActionGroupIndex = 1;
	










































};
obj4671_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4671_onLoad_activeActionGroupIndex = -1;
		$("#obj4671").trigger("obj4671_onLoad_ended");
		
		return;
	}
	window.obj4671_onLoad_activeActionGroupIndex = 0;
	
















//	action: wait
wait_4674();
function wait_4674() {
	window.obj4671_onLoad_runningActionsCount = obj4671_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj4671_onLoad_runningActionsCount = window.obj4671_onLoad_runningActionsCount - 1;

if (window.obj4671_onLoad_runningActionsCount == 0) {
	obj4671_onLoad_actionGroup1();
}
	}, 4000);
}

























};
obj4671_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4671_onLoad_activeActionGroupIndex = -1;
		$("#obj4671").trigger("obj4671_onLoad_ended");
		
		return;
	}
	window.obj4671_onLoad_activeActionGroupIndex = 1;
	


//	action: show 
//	target: obj4671 
(function(){
	window.obj4671_onLoad_runningActionsCount = obj4671_onLoad_runningActionsCount + 1;


	var element = "#obj4671";
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
				window.obj4671_onLoad_runningActionsCount = window.obj4671_onLoad_runningActionsCount - 1;

if (window.obj4671_onLoad_runningActionsCount == 0) {
	obj4671_onLoad_actionGroup2();
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
			window.obj4671_onLoad_runningActionsCount = window.obj4671_onLoad_runningActionsCount - 1;

if (window.obj4671_onLoad_runningActionsCount == 0) {
	obj4671_onLoad_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();







































};
obj4671_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4671_onLoad_activeActionGroupIndex = -1;
		$("#obj4671").trigger("obj4671_onLoad_ended");
		
		return;
	}
	window.obj4671_onLoad_activeActionGroupIndex = 2;
	










































};
obj4671_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4671_onShow_activeActionGroupIndex = -1;
		$("#obj4671").trigger("obj4671_onShow_ended");
		
		return;
	}
	window.obj4671_onShow_activeActionGroupIndex = 0;
	


















//	action: scale
//	target: obj4671 
scale_4680();
function scale_4680() {
	window.obj4671_onShow_runningActionsCount = obj4671_onShow_runningActionsCount + 1;

	
	var targetObjectId = "#obj4671";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj4671';
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
		scale_4680_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4680_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4680_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_4680_completed() {
	setTimeout(function() {
		window.obj4671_onShow_runningActionsCount = window.obj4671_onShow_runningActionsCount - 1;

if (window.obj4671_onShow_runningActionsCount == 0) {
	obj4671_onShow_actionGroup1();
}
	}, 1);
}
























};
obj4671_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4671_onShow_activeActionGroupIndex = -1;
		$("#obj4671").trigger("obj4671_onShow_ended");
		
		return;
	}
	window.obj4671_onShow_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj4671 
move_4681();
function move_4681() {
	window.obj4671_onShow_runningActionsCount = obj4671_onShow_runningActionsCount + 1;


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

	var targetObject = $("#obj4671");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=350";
	var moveY = "+=293";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj4671_onShow_runningActionsCount = window.obj4671_onShow_runningActionsCount - 1;

if (window.obj4671_onShow_runningActionsCount == 0) {
	obj4671_onShow_actionGroup2();
}
		}, 1);
	});
}






































};
obj4671_onShow_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4671_onShow_activeActionGroupIndex = -1;
		$("#obj4671").trigger("obj4671_onShow_ended");
		
		return;
	}
	window.obj4671_onShow_activeActionGroupIndex = 2;
	
















//	action: wait
wait_4698();
function wait_4698() {
	window.obj4671_onShow_runningActionsCount = obj4671_onShow_runningActionsCount + 1;

	setTimeout(function() {
		window.obj4671_onShow_runningActionsCount = window.obj4671_onShow_runningActionsCount - 1;

if (window.obj4671_onShow_runningActionsCount == 0) {
	obj4671_onShow_actionGroup3();
}
	}, 700);
}

























};
obj4671_onShow_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4671_onShow_activeActionGroupIndex = -1;
		$("#obj4671").trigger("obj4671_onShow_ended");
		
		return;
	}
	window.obj4671_onShow_activeActionGroupIndex = 3;
	


















//	action: scale
//	target: obj4671 
scale_4682();
function scale_4682() {
	window.obj4671_onShow_runningActionsCount = obj4671_onShow_runningActionsCount + 1;

	
	var targetObjectId = "#obj4671";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj4671';
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
		scale_4682_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4682_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4682_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_4682_completed() {
	setTimeout(function() {
		window.obj4671_onShow_runningActionsCount = window.obj4671_onShow_runningActionsCount - 1;

if (window.obj4671_onShow_runningActionsCount == 0) {
	obj4671_onShow_actionGroup4();
}
	}, 1);
}
























};
obj4671_onShow_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4671_onShow_activeActionGroupIndex = -1;
		$("#obj4671").trigger("obj4671_onShow_ended");
		
		return;
	}
	window.obj4671_onShow_activeActionGroupIndex = 4;
	



//	action: move
//	target: obj4671 
move_4683();
function move_4683() {
	window.obj4671_onShow_runningActionsCount = obj4671_onShow_runningActionsCount + 1;


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

	var targetObject = $("#obj4671");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 621;
	var moveY = 304;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj4671_onShow_runningActionsCount = window.obj4671_onShow_runningActionsCount - 1;

if (window.obj4671_onShow_runningActionsCount == 0) {
	obj4671_onShow_actionGroup5();
}
		}, 1);
	});
}






































};
obj4671_onShow_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4671_onShow_activeActionGroupIndex = -1;
		$("#obj4671").trigger("obj4671_onShow_ended");
		
		return;
	}
	window.obj4671_onShow_activeActionGroupIndex = 5;
	
















//	action: wait
wait_4685();
function wait_4685() {
	window.obj4671_onShow_runningActionsCount = obj4671_onShow_runningActionsCount + 1;

	setTimeout(function() {
		window.obj4671_onShow_runningActionsCount = window.obj4671_onShow_runningActionsCount - 1;

if (window.obj4671_onShow_runningActionsCount == 0) {
	obj4671_onShow_actionGroup6();
}
	}, 700);
}

























};
obj4671_onShow_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4671_onShow_activeActionGroupIndex = -1;
		$("#obj4671").trigger("obj4671_onShow_ended");
		
		return;
	}
	window.obj4671_onShow_activeActionGroupIndex = 6;
	















//	action: loop
loop_obj4671_onShow();
function loop_obj4671_onShow() {

	var loopCount = 0;

	window.obj4671_onShow_loopCount = window.obj4671_onShow_loopCount + 1;
	if (loopCount != 0 && window.obj4671_onShow_loopCount > loopCount) {
		window.obj4671_onShow_loopCount = 0
		obj4671_onShow_actionGroup7();
	} else {
		obj4671_onShow_actionGroup0();
	}

}


























};
obj4671_onShow_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4671_onShow_activeActionGroupIndex = -1;
		$("#obj4671").trigger("obj4671_onShow_ended");
		
		return;
	}
	window.obj4671_onShow_activeActionGroupIndex = 7;
	










































};
obj5418_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5418_onLoad_activeActionGroupIndex = -1;
		$("#obj5418").trigger("obj5418_onLoad_ended");
		
		return;
	}
	window.obj5418_onLoad_activeActionGroupIndex = 0;
	
























//	action: playAudio
//	target: obj5418 
playAudio_5420();
function playAudio_5420() {
	window.obj5418_onLoad_runningActionsCount = obj5418_onLoad_runningActionsCount + 1;

	var myAudio = $("#obj5418")[0];
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
		    window.obj5418_onLoad_runningActionsCount = window.obj5418_onLoad_runningActionsCount - 1;

if (window.obj5418_onLoad_runningActionsCount == 0) {
	obj5418_onLoad_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj5418_onLoad_runningActionsCount = window.obj5418_onLoad_runningActionsCount - 1;

if (window.obj5418_onLoad_runningActionsCount == 0) {
	obj5418_onLoad_actionGroup1();
}
	}
}

















};
obj5418_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5418_onLoad_activeActionGroupIndex = -1;
		$("#obj5418").trigger("obj5418_onLoad_ended");
		
		return;
	}
	window.obj5418_onLoad_activeActionGroupIndex = 1;
	










































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		




































































/*
 *
 *   obj427: Event Show
 *
 */
 
$("#obj427").bind('SCEventShow', function(event) {
	if (window.obj427_onShow_activeActionGroupIndex != -1) return;
var obj427_onShow_runningActionsCount = 0;
var obj427_onShow_loopCount = 0;
obj427_onShow_actionGroup0();
});






























/*
 *
 *   obj282: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj282_onLoad_activeActionGroupIndex != -1) return;
var obj282_onLoad_runningActionsCount = 0;
var obj282_onLoad_loopCount = 0;
obj282_onLoad_actionGroup0();
});



















































































































































































/*
 *
 *   obj264: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj264_onLoad_activeActionGroupIndex != -1) return;
var obj264_onLoad_runningActionsCount = 0;
var obj264_onLoad_loopCount = 0;
obj264_onLoad_actionGroup0();
});



















/*
 *
 *   obj354: Event SCEventRun
 *
 */

$("#obj354").bind("SCEventRun", function(event) {
	if (window.obj354_SCEventRun_activeActionGroupIndex != -1) return;
var obj354_SCEventRun_runningActionsCount = 0;
var obj354_SCEventRun_loopCount = 0;
obj354_SCEventRun_actionGroup0();
});














/*
 *
 *   obj360: Event SCEventRun
 *
 */

$("#obj360").bind("SCEventRun", function(event) {
	if (window.obj360_SCEventRun_activeActionGroupIndex != -1) return;
var obj360_SCEventRun_runningActionsCount = 0;
var obj360_SCEventRun_loopCount = 0;
obj360_SCEventRun_actionGroup0();
});














/*
 *
 *   obj446: Event SCEventRun
 *
 */

$("#obj446").bind("SCEventRun", function(event) {
	if (window.obj446_SCEventRun_activeActionGroupIndex != -1) return;
var obj446_SCEventRun_runningActionsCount = 0;
var obj446_SCEventRun_loopCount = 0;
obj446_SCEventRun_actionGroup0();
});









/*
 *
 *   obj468: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj468_onLoad_activeActionGroupIndex != -1) return;
var obj468_onLoad_runningActionsCount = 0;
var obj468_onLoad_loopCount = 0;
obj468_onLoad_actionGroup0();
});














/*
 *
 *   obj464: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj464_onLoad_activeActionGroupIndex != -1) return;
var obj464_onLoad_runningActionsCount = 0;
var obj464_onLoad_loopCount = 0;
obj464_onLoad_actionGroup0();
});














/*
 *
 *   obj476: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj476_onLoad_activeActionGroupIndex != -1) return;
var obj476_onLoad_runningActionsCount = 0;
var obj476_onLoad_loopCount = 0;
obj476_onLoad_actionGroup0();
});







































































/*
 *
 *   obj4969: Event Touch Up
 *
 */

$("#obj4969").bind("touchdown touchmove", function(event) {
	event.preventDefault(); // prevent readers from starting a page swipe on this element
})
$("#obj4969").bind(window.touchUpEvent, function(event) {
	event.preventDefault();

	var startActionList = function() {
		$("#obj4969").unbind("obj4969_onTouchDown_ended", startActionList);
	    if (window.obj4969_onTouchUp_activeActionGroupIndex != -1) return;
var obj4969_onTouchUp_runningActionsCount = 0;
var obj4969_onTouchUp_loopCount = 0;
obj4969_onTouchUp_actionGroup0();
	};

	if ((window['obj4969_onTouchDown_activeActionGroupIndex'] == undefined) || window.obj4969_onTouchDown_activeActionGroupIndex == -1) {
		startActionList();
	} else {
		$("#obj4969").bind("obj4969_onTouchDown_ended", startActionList);
	}
});
/*
 *
 *   obj4969: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj4969");
	var winTarget = document.getElementById("obj4969");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj4969").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj4969_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj4969_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj4969_onTouchDown_activeActionGroupIndex != -1) return;
var obj4969_onTouchDown_runningActionsCount = 0;
var obj4969_onTouchDown_loopCount = 0;
obj4969_onTouchDown_actionGroup0();
});

/*
 *
 *   obj4969: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj4969_onLoad_activeActionGroupIndex != -1) return;
var obj4969_onLoad_runningActionsCount = 0;
var obj4969_onLoad_loopCount = 0;
obj4969_onLoad_actionGroup0();
});
































































/*
 *
 *   obj4668: Event SCEventRun
 *
 */

$("#obj4668").bind("SCEventRun", function(event) {
	if (window.obj4668_SCEventRun_activeActionGroupIndex != -1) return;
var obj4668_SCEventRun_runningActionsCount = 0;
var obj4668_SCEventRun_loopCount = 0;
obj4668_SCEventRun_actionGroup0();
});








/*
 *
 *   obj4671: Event Show
 *
 */
 
$("#obj4671").bind('SCEventShow', function(event) {
	if (window.obj4671_onShow_activeActionGroupIndex != -1) return;
var obj4671_onShow_runningActionsCount = 0;
var obj4671_onShow_loopCount = 0;
obj4671_onShow_actionGroup0();
});
/*
 *
 *   obj4671: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj4671_onLoad_activeActionGroupIndex != -1) return;
var obj4671_onLoad_runningActionsCount = 0;
var obj4671_onLoad_loopCount = 0;
obj4671_onLoad_actionGroup0();
});














/*
 *
 *   obj5418: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj5418_onLoad_activeActionGroupIndex != -1) return;
var obj5418_onLoad_runningActionsCount = 0;
var obj5418_onLoad_loopCount = 0;
obj5418_onLoad_actionGroup0();
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
	
$("#obj236").trigger('SCEventShow');
$("#obj308").trigger('SCEventShow');
$("#obj260").trigger('SCEventShow');
$("#obj258").trigger('SCEventShow');
$("#obj282").trigger('SCEventShow');
$("#obj280").trigger('SCEventShow');
$("#obj276").trigger('SCEventShow');
$("#obj278").trigger('SCEventShow');
$("#obj246").trigger('SCEventShow');
$("#obj242").trigger('SCEventShow');
$("#obj244").trigger('SCEventShow');
$("#obj248").trigger('SCEventShow');
$("#obj250").trigger('SCEventShow');
$("#obj252").trigger('SCEventShow');
$("#obj256").trigger('SCEventShow');
$("#obj254").trigger('SCEventShow');
$("#obj264").trigger('SCEventShow');
$("#obj238").trigger('SCEventShow');
$("#obj4969").trigger('SCEventShow');
$("#obj5418").trigger('SCEventShow');
	localStorage.setItem('tapped','0');
localStorage.setItem('ready','true');
localStorage.setItem("touching","false");
localStorage.setItem("underSea","false");
localStorage.setItem("splashing","false");
localStorage.setItem("gasp","false");
localStorage.setItem('ready','false');
});