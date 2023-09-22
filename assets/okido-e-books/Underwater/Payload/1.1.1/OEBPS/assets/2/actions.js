pubcoder.projectID = pubcoder.projectID || "968537061CD4A6469E16DEA662F0DD9C";
pubcoder.project.id = pubcoder.project.id || "968537061CD4A6469E16DEA662F0DD9C";
pubcoder.project.title = pubcoder.project.title || "MGTO Underwater Story";
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

var obj192_animation_count = 0;

/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj53_onTap_activeActionGroupIndex = -1;
var obj53_onTap_runningActionsCount = 0;
var obj53_onTap_loopCount = 0;
var obj53_onLoad_activeActionGroupIndex = -1;
var obj53_onLoad_runningActionsCount = 0;
var obj53_onLoad_loopCount = 0;
var obj47_onTap_activeActionGroupIndex = -1;
var obj47_onTap_runningActionsCount = 0;
var obj47_onTap_loopCount = 0;
var obj70_onTap_activeActionGroupIndex = -1;
var obj70_onTap_runningActionsCount = 0;
var obj70_onTap_loopCount = 0;
var obj75_onLoad_activeActionGroupIndex = -1;
var obj75_onLoad_runningActionsCount = 0;
var obj75_onLoad_loopCount = 0;
var obj77_onTap_activeActionGroupIndex = -1;
var obj77_onTap_runningActionsCount = 0;
var obj77_onTap_loopCount = 0;
var obj167_SCEventRun_activeActionGroupIndex = -1;
var obj167_SCEventRun_runningActionsCount = 0;
var obj167_SCEventRun_loopCount = 0;
var obj171_SCEventRun_activeActionGroupIndex = -1;
var obj171_SCEventRun_runningActionsCount = 0;
var obj171_SCEventRun_loopCount = 0;
var obj175_SCEventRun_activeActionGroupIndex = -1;
var obj175_SCEventRun_runningActionsCount = 0;
var obj175_SCEventRun_loopCount = 0;
var obj179_SCEventRun_activeActionGroupIndex = -1;
var obj179_SCEventRun_runningActionsCount = 0;
var obj179_SCEventRun_loopCount = 0;
var obj192_onLoad_activeActionGroupIndex = -1;
var obj192_onLoad_runningActionsCount = 0;
var obj192_onLoad_loopCount = 0;
var obj5383_onLoad_activeActionGroupIndex = -1;
var obj5383_onLoad_runningActionsCount = 0;
var obj5383_onLoad_loopCount = 0;

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
	
initAnimation_192();
function initAnimation_192()
{
        var targetObjectId = "#obj192";
        var widthSCAnimationObject = 204;
        var heightSCAnimationObject = 162;
		var framesPerSecond = 6;
		var howManyLoops = 1;
		var backToFirstFrame = false;
        var isAnimationInfinite = false;
        window.audio_animation_obj192 = $("#")[0];
        window.hasAudioTrack_obj192 = false

 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj192_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj192 = $(targetObjectId).spritespin("api");
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
		
obj53_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53_onTap_activeActionGroupIndex = -1;
		$("#obj53").trigger("obj53_onTap_ended");
		
		return;
	}
	window.obj53_onTap_activeActionGroupIndex = 0;
	





























//	action: Run JavaScript
runjs_166();
function runjs_166() {
	window.obj53_onTap_runningActionsCount = obj53_onTap_runningActionsCount + 1;


	if(localStorage.getItem("ready") === "true")
{
    var tapped = parseInt(localStorage.getItem("tapped"));
    tapped += 1;
    localStorage.setItem("tapped", tapped.toString());
    if(tapped === 1)
    {
        //show speech bubble 2
        $("#obj171").trigger(PubCoder.Events.Run);
    }
    else if (tapped === 2)
    {
        //show speech bubble 3
        $("#obj175").trigger(PubCoder.Events.Run);
    }
    else if (tapped === 3)
    {
        //show speech bubble 4
        $("#obj179").trigger(PubCoder.Events.Run);
    }
}

	setTimeout(function() {
		window.obj53_onTap_runningActionsCount = window.obj53_onTap_runningActionsCount - 1;

if (window.obj53_onTap_runningActionsCount == 0) {
	obj53_onTap_actionGroup1();
}
	}, 1);
}












};
obj53_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53_onTap_activeActionGroupIndex = -1;
		$("#obj53").trigger("obj53_onTap_ended");
		
		return;
	}
	window.obj53_onTap_activeActionGroupIndex = 1;
	










































};
obj53_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53_onLoad_activeActionGroupIndex = -1;
		$("#obj53").trigger("obj53_onLoad_ended");
		
		return;
	}
	window.obj53_onLoad_activeActionGroupIndex = 0;
	



































//	action: run action list container
//	target: obj167 
runActionList_235();
function runActionList_235() {
	window.obj53_onLoad_runningActionsCount = obj53_onLoad_runningActionsCount + 1;

	$("#obj167").trigger('SCEventRun');
	setTimeout(function() {
		window.obj53_onLoad_runningActionsCount = window.obj53_onLoad_runningActionsCount - 1;

if (window.obj53_onLoad_runningActionsCount == 0) {
	obj53_onLoad_actionGroup1();
}		
	}, 1);
}






};
obj53_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53_onLoad_activeActionGroupIndex = -1;
		$("#obj53").trigger("obj53_onLoad_ended");
		
		return;
	}
	window.obj53_onLoad_activeActionGroupIndex = 1;
	










































};
obj47_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47_onTap_activeActionGroupIndex = -1;
		$("#obj47").trigger("obj47_onTap_ended");
		
		return;
	}
	window.obj47_onTap_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj47 
move_226();
function move_226() {
	window.obj47_onTap_runningActionsCount = obj47_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj47");
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
			window.obj47_onTap_runningActionsCount = window.obj47_onTap_runningActionsCount - 1;

if (window.obj47_onTap_runningActionsCount == 0) {
	obj47_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj47 
move_227();
function move_227() {
	window.obj47_onTap_runningActionsCount = obj47_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj47");
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
			window.obj47_onTap_runningActionsCount = window.obj47_onTap_runningActionsCount - 1;

if (window.obj47_onTap_runningActionsCount == 0) {
	obj47_onTap_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_5387();
function playAudioFile_5387() {
	window.obj47_onTap_runningActionsCount = obj47_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5387")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5387");
			$("#obj_audio_playSoundFile5387").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj47_onTap_runningActionsCount = window.obj47_onTap_runningActionsCount - 1;

if (window.obj47_onTap_runningActionsCount == 0) {
	obj47_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj47_onTap_runningActionsCount = window.obj47_onTap_runningActionsCount - 1;

if (window.obj47_onTap_runningActionsCount == 0) {
	obj47_onTap_actionGroup1();
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
				window.obj47_onTap_runningActionsCount = window.obj47_onTap_runningActionsCount - 1;

if (window.obj47_onTap_runningActionsCount == 0) {
	obj47_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj47_onTap_runningActionsCount = window.obj47_onTap_runningActionsCount - 1;

if (window.obj47_onTap_runningActionsCount == 0) {
	obj47_onTap_actionGroup1();
}
		}
	}

	
	
	
}




































};
obj47_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47_onTap_activeActionGroupIndex = -1;
		$("#obj47").trigger("obj47_onTap_ended");
		
		return;
	}
	window.obj47_onTap_activeActionGroupIndex = 1;
	










































};
obj70_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70_onTap_activeActionGroupIndex = -1;
		$("#obj70").trigger("obj70_onTap_ended");
		
		return;
	}
	window.obj70_onTap_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj70 
move_230();
function move_230() {
	window.obj70_onTap_runningActionsCount = obj70_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj70");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=7";
	var moveY = "+=-7";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj70_onTap_runningActionsCount = window.obj70_onTap_runningActionsCount - 1;

if (window.obj70_onTap_runningActionsCount == 0) {
	obj70_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj70 
move_231();
function move_231() {
	window.obj70_onTap_runningActionsCount = obj70_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj70");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 820;
	var moveY = 750;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj70_onTap_runningActionsCount = window.obj70_onTap_runningActionsCount - 1;

if (window.obj70_onTap_runningActionsCount == 0) {
	obj70_onTap_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_5388();
function playAudioFile_5388() {
	window.obj70_onTap_runningActionsCount = obj70_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5388")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5388");
			$("#obj_audio_playSoundFile5388").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj70_onTap_runningActionsCount = window.obj70_onTap_runningActionsCount - 1;

if (window.obj70_onTap_runningActionsCount == 0) {
	obj70_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj70_onTap_runningActionsCount = window.obj70_onTap_runningActionsCount - 1;

if (window.obj70_onTap_runningActionsCount == 0) {
	obj70_onTap_actionGroup1();
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
				window.obj70_onTap_runningActionsCount = window.obj70_onTap_runningActionsCount - 1;

if (window.obj70_onTap_runningActionsCount == 0) {
	obj70_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj70_onTap_runningActionsCount = window.obj70_onTap_runningActionsCount - 1;

if (window.obj70_onTap_runningActionsCount == 0) {
	obj70_onTap_actionGroup1();
}
		}
	}

	
	
	
}




































};
obj70_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70_onTap_activeActionGroupIndex = -1;
		$("#obj70").trigger("obj70_onTap_ended");
		
		return;
	}
	window.obj70_onTap_activeActionGroupIndex = 1;
	










































};
obj75_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75_onLoad_activeActionGroupIndex = -1;
		$("#obj75").trigger("obj75_onLoad_ended");
		
		return;
	}
	window.obj75_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj75 
move_187();
function move_187() {
	window.obj75_onLoad_runningActionsCount = obj75_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj75");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=5";
	var moveY = "+=37";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 700, easing, function() {
		setTimeout(function() {
			window.obj75_onLoad_runningActionsCount = window.obj75_onLoad_runningActionsCount - 1;

if (window.obj75_onLoad_runningActionsCount == 0) {
	obj75_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj75_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75_onLoad_activeActionGroupIndex = -1;
		$("#obj75").trigger("obj75_onLoad_ended");
		
		return;
	}
	window.obj75_onLoad_activeActionGroupIndex = 1;
	
















//	action: wait
wait_188();
function wait_188() {
	window.obj75_onLoad_runningActionsCount = obj75_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj75_onLoad_runningActionsCount = window.obj75_onLoad_runningActionsCount - 1;

if (window.obj75_onLoad_runningActionsCount == 0) {
	obj75_onLoad_actionGroup2();
}
	}, 200);
}

























};
obj75_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75_onLoad_activeActionGroupIndex = -1;
		$("#obj75").trigger("obj75_onLoad_ended");
		
		return;
	}
	window.obj75_onLoad_activeActionGroupIndex = 2;
	



//	action: move
//	target: obj75 
move_189();
function move_189() {
	window.obj75_onLoad_runningActionsCount = obj75_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj75");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 187;
	var moveY = -187;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 700, easing, function() {
		setTimeout(function() {
			window.obj75_onLoad_runningActionsCount = window.obj75_onLoad_runningActionsCount - 1;

if (window.obj75_onLoad_runningActionsCount == 0) {
	obj75_onLoad_actionGroup3();
}
		}, 1);
	});
}






































};
obj75_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75_onLoad_activeActionGroupIndex = -1;
		$("#obj75").trigger("obj75_onLoad_ended");
		
		return;
	}
	window.obj75_onLoad_activeActionGroupIndex = 3;
	















//	action: loop
loop_obj75_onLoad();
function loop_obj75_onLoad() {

	var loopCount = 0;

	window.obj75_onLoad_loopCount = window.obj75_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj75_onLoad_loopCount > loopCount) {
		window.obj75_onLoad_loopCount = 0
		obj75_onLoad_actionGroup4();
	} else {
		obj75_onLoad_actionGroup0();
	}

}


























};
obj75_onLoad_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75_onLoad_activeActionGroupIndex = -1;
		$("#obj75").trigger("obj75_onLoad_ended");
		
		return;
	}
	window.obj75_onLoad_activeActionGroupIndex = 4;
	
















//	action: wait
wait_191();
function wait_191() {
	window.obj75_onLoad_runningActionsCount = obj75_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj75_onLoad_runningActionsCount = window.obj75_onLoad_runningActionsCount - 1;

if (window.obj75_onLoad_runningActionsCount == 0) {
	obj75_onLoad_actionGroup5();
}
	}, 200);
}

























};
obj75_onLoad_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75_onLoad_activeActionGroupIndex = -1;
		$("#obj75").trigger("obj75_onLoad_ended");
		
		return;
	}
	window.obj75_onLoad_activeActionGroupIndex = 5;
	










































};
obj77_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77_onTap_activeActionGroupIndex = -1;
		$("#obj77").trigger("obj77_onTap_ended");
		
		return;
	}
	window.obj77_onTap_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj77 
move_228();
function move_228() {
	window.obj77_onTap_runningActionsCount = obj77_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj77");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-1";
	var moveY = "+=-18";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj77_onTap_runningActionsCount = window.obj77_onTap_runningActionsCount - 1;

if (window.obj77_onTap_runningActionsCount == 0) {
	obj77_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj77 
move_229();
function move_229() {
	window.obj77_onTap_runningActionsCount = obj77_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj77");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 361;
	var moveY = 601;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj77_onTap_runningActionsCount = window.obj77_onTap_runningActionsCount - 1;

if (window.obj77_onTap_runningActionsCount == 0) {
	obj77_onTap_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_5389();
function playAudioFile_5389() {
	window.obj77_onTap_runningActionsCount = obj77_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5389")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5389");
			$("#obj_audio_playSoundFile5389").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj77_onTap_runningActionsCount = window.obj77_onTap_runningActionsCount - 1;

if (window.obj77_onTap_runningActionsCount == 0) {
	obj77_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj77_onTap_runningActionsCount = window.obj77_onTap_runningActionsCount - 1;

if (window.obj77_onTap_runningActionsCount == 0) {
	obj77_onTap_actionGroup1();
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
				window.obj77_onTap_runningActionsCount = window.obj77_onTap_runningActionsCount - 1;

if (window.obj77_onTap_runningActionsCount == 0) {
	obj77_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj77_onTap_runningActionsCount = window.obj77_onTap_runningActionsCount - 1;

if (window.obj77_onTap_runningActionsCount == 0) {
	obj77_onTap_actionGroup1();
}
		}
	}

	
	
	
}




































};
obj77_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj77_onTap_activeActionGroupIndex = -1;
		$("#obj77").trigger("obj77_onTap_ended");
		
		return;
	}
	window.obj77_onTap_activeActionGroupIndex = 1;
	










































};
obj167_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj167_SCEventRun_activeActionGroupIndex = -1;
		$("#obj167").trigger("obj167_SCEventRun_ended");
		
		return;
	}
	window.obj167_SCEventRun_activeActionGroupIndex = 0;
	


//	action: show 
//	target: obj138 
(function(){
	window.obj167_SCEventRun_runningActionsCount = obj167_SCEventRun_runningActionsCount + 1;


	var element = "#obj138";
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
				window.obj167_SCEventRun_runningActionsCount = window.obj167_SCEventRun_runningActionsCount - 1;

if (window.obj167_SCEventRun_runningActionsCount == 0) {
	obj167_SCEventRun_actionGroup1();
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
			window.obj167_SCEventRun_runningActionsCount = window.obj167_SCEventRun_runningActionsCount - 1;

if (window.obj167_SCEventRun_runningActionsCount == 0) {
	obj167_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj152 
(function(){
	window.obj167_SCEventRun_runningActionsCount = obj167_SCEventRun_runningActionsCount + 1;


	var element = "#obj152";
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
				window.obj167_SCEventRun_runningActionsCount = window.obj167_SCEventRun_runningActionsCount - 1;

if (window.obj167_SCEventRun_runningActionsCount == 0) {
	obj167_SCEventRun_actionGroup1();
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
			window.obj167_SCEventRun_runningActionsCount = window.obj167_SCEventRun_runningActionsCount - 1;

if (window.obj167_SCEventRun_runningActionsCount == 0) {
	obj167_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();









//	action: playAudioFile
playAudioFile_5664();
function playAudioFile_5664() {
	window.obj167_SCEventRun_runningActionsCount = obj167_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5664")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5664");
			$("#obj_audio_playSoundFile5664").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj167_SCEventRun_runningActionsCount = window.obj167_SCEventRun_runningActionsCount - 1;

if (window.obj167_SCEventRun_runningActionsCount == 0) {
	obj167_SCEventRun_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj167_SCEventRun_runningActionsCount = window.obj167_SCEventRun_runningActionsCount - 1;

if (window.obj167_SCEventRun_runningActionsCount == 0) {
	obj167_SCEventRun_actionGroup1();
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
				window.obj167_SCEventRun_runningActionsCount = window.obj167_SCEventRun_runningActionsCount - 1;

if (window.obj167_SCEventRun_runningActionsCount == 0) {
	obj167_SCEventRun_actionGroup1();
}
			}, false);
		} else {
			window.obj167_SCEventRun_runningActionsCount = window.obj167_SCEventRun_runningActionsCount - 1;

if (window.obj167_SCEventRun_runningActionsCount == 0) {
	obj167_SCEventRun_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_5666();
function runjs_5666() {
	window.obj167_SCEventRun_runningActionsCount = obj167_SCEventRun_runningActionsCount + 1;


	localStorage.setItem("ready", "false");

	setTimeout(function() {
		window.obj167_SCEventRun_runningActionsCount = window.obj167_SCEventRun_runningActionsCount - 1;

if (window.obj167_SCEventRun_runningActionsCount == 0) {
	obj167_SCEventRun_actionGroup1();
}
	}, 1);
}












};
obj167_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj167_SCEventRun_activeActionGroupIndex = -1;
		$("#obj167").trigger("obj167_SCEventRun_ended");
		
		return;
	}
	window.obj167_SCEventRun_activeActionGroupIndex = 1;
	





























//	action: Run JavaScript
runjs_5667();
function runjs_5667() {
	window.obj167_SCEventRun_runningActionsCount = obj167_SCEventRun_runningActionsCount + 1;


	localStorage.setItem("ready", "true");

	setTimeout(function() {
		window.obj167_SCEventRun_runningActionsCount = window.obj167_SCEventRun_runningActionsCount - 1;

if (window.obj167_SCEventRun_runningActionsCount == 0) {
	obj167_SCEventRun_actionGroup2();
}
	}, 1);
}












};
obj167_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj167_SCEventRun_activeActionGroupIndex = -1;
		$("#obj167").trigger("obj167_SCEventRun_ended");
		
		return;
	}
	window.obj167_SCEventRun_activeActionGroupIndex = 2;
	










































};
obj171_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj171_SCEventRun_activeActionGroupIndex = -1;
		$("#obj171").trigger("obj171_SCEventRun_ended");
		
		return;
	}
	window.obj171_SCEventRun_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_5390();
function playAudioFile_5390() {
	window.obj171_SCEventRun_runningActionsCount = obj171_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5390")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5390");
			$("#obj_audio_playSoundFile5390").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj171_SCEventRun_runningActionsCount = window.obj171_SCEventRun_runningActionsCount - 1;

if (window.obj171_SCEventRun_runningActionsCount == 0) {
	obj171_SCEventRun_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj171_SCEventRun_runningActionsCount = window.obj171_SCEventRun_runningActionsCount - 1;

if (window.obj171_SCEventRun_runningActionsCount == 0) {
	obj171_SCEventRun_actionGroup1();
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
				window.obj171_SCEventRun_runningActionsCount = window.obj171_SCEventRun_runningActionsCount - 1;

if (window.obj171_SCEventRun_runningActionsCount == 0) {
	obj171_SCEventRun_actionGroup1();
}
			}, false);
		} else {
			window.obj171_SCEventRun_runningActionsCount = window.obj171_SCEventRun_runningActionsCount - 1;

if (window.obj171_SCEventRun_runningActionsCount == 0) {
	obj171_SCEventRun_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_5569();
function runjs_5569() {
	window.obj171_SCEventRun_runningActionsCount = obj171_SCEventRun_runningActionsCount + 1;


	localStorage.setItem("ready", "false");

	setTimeout(function() {
		window.obj171_SCEventRun_runningActionsCount = window.obj171_SCEventRun_runningActionsCount - 1;

if (window.obj171_SCEventRun_runningActionsCount == 0) {
	obj171_SCEventRun_actionGroup1();
}
	}, 1);
}












};
obj171_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj171_SCEventRun_activeActionGroupIndex = -1;
		$("#obj171").trigger("obj171_SCEventRun_ended");
		
		return;
	}
	window.obj171_SCEventRun_activeActionGroupIndex = 1;
	


//	action: show 
//	target: obj133 
(function(){
	window.obj171_SCEventRun_runningActionsCount = obj171_SCEventRun_runningActionsCount + 1;


	var element = "#obj133";
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
				window.obj171_SCEventRun_runningActionsCount = window.obj171_SCEventRun_runningActionsCount - 1;

if (window.obj171_SCEventRun_runningActionsCount == 0) {
	obj171_SCEventRun_actionGroup2();
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
			window.obj171_SCEventRun_runningActionsCount = window.obj171_SCEventRun_runningActionsCount - 1;

if (window.obj171_SCEventRun_runningActionsCount == 0) {
	obj171_SCEventRun_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj136 
(function(){
	window.obj171_SCEventRun_runningActionsCount = obj171_SCEventRun_runningActionsCount + 1;


	var element = "#obj136";
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
		var animationDurationMs = 1500;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				window.obj171_SCEventRun_runningActionsCount = window.obj171_SCEventRun_runningActionsCount - 1;

if (window.obj171_SCEventRun_runningActionsCount == 0) {
	obj171_SCEventRun_actionGroup2();
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
			window.obj171_SCEventRun_runningActionsCount = window.obj171_SCEventRun_runningActionsCount - 1;

if (window.obj171_SCEventRun_runningActionsCount == 0) {
	obj171_SCEventRun_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj131 
(function(){
	window.obj171_SCEventRun_runningActionsCount = obj171_SCEventRun_runningActionsCount + 1;


	var element = "#obj131";
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
				window.obj171_SCEventRun_runningActionsCount = window.obj171_SCEventRun_runningActionsCount - 1;

if (window.obj171_SCEventRun_runningActionsCount == 0) {
	obj171_SCEventRun_actionGroup2();
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
			window.obj171_SCEventRun_runningActionsCount = window.obj171_SCEventRun_runningActionsCount - 1;

if (window.obj171_SCEventRun_runningActionsCount == 0) {
	obj171_SCEventRun_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: move
//	target: obj47 
move_214();
function move_214() {
	window.obj171_SCEventRun_runningActionsCount = obj171_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj47");
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
			window.obj171_SCEventRun_runningActionsCount = window.obj171_SCEventRun_runningActionsCount - 1;

if (window.obj171_SCEventRun_runningActionsCount == 0) {
	obj171_SCEventRun_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj47 
move_215();
function move_215() {
	window.obj171_SCEventRun_runningActionsCount = obj171_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj47");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 0;
	var moveY = 0;
	var isMoveBack = true;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 100, easing, function() {
		setTimeout(function() {
			window.obj171_SCEventRun_runningActionsCount = window.obj171_SCEventRun_runningActionsCount - 1;

if (window.obj171_SCEventRun_runningActionsCount == 0) {
	obj171_SCEventRun_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj47 
move_218();
function move_218() {
	window.obj171_SCEventRun_runningActionsCount = obj171_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj47");
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
			window.obj171_SCEventRun_runningActionsCount = window.obj171_SCEventRun_runningActionsCount - 1;

if (window.obj171_SCEventRun_runningActionsCount == 0) {
	obj171_SCEventRun_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj47 
move_219();
function move_219() {
	window.obj171_SCEventRun_runningActionsCount = obj171_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj47");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 0;
	var moveY = 0;
	var isMoveBack = true;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 100, easing, function() {
		setTimeout(function() {
			window.obj171_SCEventRun_runningActionsCount = window.obj171_SCEventRun_runningActionsCount - 1;

if (window.obj171_SCEventRun_runningActionsCount == 0) {
	obj171_SCEventRun_actionGroup2();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_5566();
function playAudioFile_5566() {
	window.obj171_SCEventRun_runningActionsCount = obj171_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5566")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5566");
			$("#obj_audio_playSoundFile5566").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj171_SCEventRun_runningActionsCount = window.obj171_SCEventRun_runningActionsCount - 1;

if (window.obj171_SCEventRun_runningActionsCount == 0) {
	obj171_SCEventRun_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj171_SCEventRun_runningActionsCount = window.obj171_SCEventRun_runningActionsCount - 1;

if (window.obj171_SCEventRun_runningActionsCount == 0) {
	obj171_SCEventRun_actionGroup2();
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
				window.obj171_SCEventRun_runningActionsCount = window.obj171_SCEventRun_runningActionsCount - 1;

if (window.obj171_SCEventRun_runningActionsCount == 0) {
	obj171_SCEventRun_actionGroup2();
}
			}, false);
		} else {
			window.obj171_SCEventRun_runningActionsCount = window.obj171_SCEventRun_runningActionsCount - 1;

if (window.obj171_SCEventRun_runningActionsCount == 0) {
	obj171_SCEventRun_actionGroup2();
}
		}
	}

	
	
	
}




































};
obj171_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj171_SCEventRun_activeActionGroupIndex = -1;
		$("#obj171").trigger("obj171_SCEventRun_ended");
		
		return;
	}
	window.obj171_SCEventRun_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_5568();
function runjs_5568() {
	window.obj171_SCEventRun_runningActionsCount = obj171_SCEventRun_runningActionsCount + 1;


	localStorage.setItem("ready", "true");

	setTimeout(function() {
		window.obj171_SCEventRun_runningActionsCount = window.obj171_SCEventRun_runningActionsCount - 1;

if (window.obj171_SCEventRun_runningActionsCount == 0) {
	obj171_SCEventRun_actionGroup3();
}
	}, 1);
}












};
obj171_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj171_SCEventRun_activeActionGroupIndex = -1;
		$("#obj171").trigger("obj171_SCEventRun_ended");
		
		return;
	}
	window.obj171_SCEventRun_activeActionGroupIndex = 3;
	










































};
obj175_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj175_SCEventRun_activeActionGroupIndex = -1;
		$("#obj175").trigger("obj175_SCEventRun_ended");
		
		return;
	}
	window.obj175_SCEventRun_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_5406();
function playAudioFile_5406() {
	window.obj175_SCEventRun_runningActionsCount = obj175_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5406")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5406");
			$("#obj_audio_playSoundFile5406").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj175_SCEventRun_runningActionsCount = window.obj175_SCEventRun_runningActionsCount - 1;

if (window.obj175_SCEventRun_runningActionsCount == 0) {
	obj175_SCEventRun_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj175_SCEventRun_runningActionsCount = window.obj175_SCEventRun_runningActionsCount - 1;

if (window.obj175_SCEventRun_runningActionsCount == 0) {
	obj175_SCEventRun_actionGroup1();
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
				window.obj175_SCEventRun_runningActionsCount = window.obj175_SCEventRun_runningActionsCount - 1;

if (window.obj175_SCEventRun_runningActionsCount == 0) {
	obj175_SCEventRun_actionGroup1();
}
			}, false);
		} else {
			window.obj175_SCEventRun_runningActionsCount = window.obj175_SCEventRun_runningActionsCount - 1;

if (window.obj175_SCEventRun_runningActionsCount == 0) {
	obj175_SCEventRun_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_5570();
function runjs_5570() {
	window.obj175_SCEventRun_runningActionsCount = obj175_SCEventRun_runningActionsCount + 1;


	localStorage.setItem("ready", "false");

	setTimeout(function() {
		window.obj175_SCEventRun_runningActionsCount = window.obj175_SCEventRun_runningActionsCount - 1;

if (window.obj175_SCEventRun_runningActionsCount == 0) {
	obj175_SCEventRun_actionGroup1();
}
	}, 1);
}












};
obj175_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj175_SCEventRun_activeActionGroupIndex = -1;
		$("#obj175").trigger("obj175_SCEventRun_ended");
		
		return;
	}
	window.obj175_SCEventRun_activeActionGroupIndex = 1;
	


//	action: show 
//	target: obj154 
(function(){
	window.obj175_SCEventRun_runningActionsCount = obj175_SCEventRun_runningActionsCount + 1;


	var element = "#obj154";
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
				window.obj175_SCEventRun_runningActionsCount = window.obj175_SCEventRun_runningActionsCount - 1;

if (window.obj175_SCEventRun_runningActionsCount == 0) {
	obj175_SCEventRun_actionGroup2();
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
			window.obj175_SCEventRun_runningActionsCount = window.obj175_SCEventRun_runningActionsCount - 1;

if (window.obj175_SCEventRun_runningActionsCount == 0) {
	obj175_SCEventRun_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj158 
(function(){
	window.obj175_SCEventRun_runningActionsCount = obj175_SCEventRun_runningActionsCount + 1;


	var element = "#obj158";
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
				window.obj175_SCEventRun_runningActionsCount = window.obj175_SCEventRun_runningActionsCount - 1;

if (window.obj175_SCEventRun_runningActionsCount == 0) {
	obj175_SCEventRun_actionGroup2();
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
			window.obj175_SCEventRun_runningActionsCount = window.obj175_SCEventRun_runningActionsCount - 1;

if (window.obj175_SCEventRun_runningActionsCount == 0) {
	obj175_SCEventRun_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj156 
(function(){
	window.obj175_SCEventRun_runningActionsCount = obj175_SCEventRun_runningActionsCount + 1;


	var element = "#obj156";
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
				window.obj175_SCEventRun_runningActionsCount = window.obj175_SCEventRun_runningActionsCount - 1;

if (window.obj175_SCEventRun_runningActionsCount == 0) {
	obj175_SCEventRun_actionGroup2();
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
			window.obj175_SCEventRun_runningActionsCount = window.obj175_SCEventRun_runningActionsCount - 1;

if (window.obj175_SCEventRun_runningActionsCount == 0) {
	obj175_SCEventRun_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: move
//	target: obj77 
move_216();
function move_216() {
	window.obj175_SCEventRun_runningActionsCount = obj175_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj77");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-1";
	var moveY = "+=-18";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj175_SCEventRun_runningActionsCount = window.obj175_SCEventRun_runningActionsCount - 1;

if (window.obj175_SCEventRun_runningActionsCount == 0) {
	obj175_SCEventRun_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj77 
move_217();
function move_217() {
	window.obj175_SCEventRun_runningActionsCount = obj175_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj77");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 361;
	var moveY = 601;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 100, easing, function() {
		setTimeout(function() {
			window.obj175_SCEventRun_runningActionsCount = window.obj175_SCEventRun_runningActionsCount - 1;

if (window.obj175_SCEventRun_runningActionsCount == 0) {
	obj175_SCEventRun_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj77 
move_220();
function move_220() {
	window.obj175_SCEventRun_runningActionsCount = obj175_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj77");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-1";
	var moveY = "+=-18";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj175_SCEventRun_runningActionsCount = window.obj175_SCEventRun_runningActionsCount - 1;

if (window.obj175_SCEventRun_runningActionsCount == 0) {
	obj175_SCEventRun_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj77 
move_221();
function move_221() {
	window.obj175_SCEventRun_runningActionsCount = obj175_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj77");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 361;
	var moveY = 601;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 100, easing, function() {
		setTimeout(function() {
			window.obj175_SCEventRun_runningActionsCount = window.obj175_SCEventRun_runningActionsCount - 1;

if (window.obj175_SCEventRun_runningActionsCount == 0) {
	obj175_SCEventRun_actionGroup2();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_5567();
function playAudioFile_5567() {
	window.obj175_SCEventRun_runningActionsCount = obj175_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5567")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5567");
			$("#obj_audio_playSoundFile5567").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj175_SCEventRun_runningActionsCount = window.obj175_SCEventRun_runningActionsCount - 1;

if (window.obj175_SCEventRun_runningActionsCount == 0) {
	obj175_SCEventRun_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj175_SCEventRun_runningActionsCount = window.obj175_SCEventRun_runningActionsCount - 1;

if (window.obj175_SCEventRun_runningActionsCount == 0) {
	obj175_SCEventRun_actionGroup2();
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
				window.obj175_SCEventRun_runningActionsCount = window.obj175_SCEventRun_runningActionsCount - 1;

if (window.obj175_SCEventRun_runningActionsCount == 0) {
	obj175_SCEventRun_actionGroup2();
}
			}, false);
		} else {
			window.obj175_SCEventRun_runningActionsCount = window.obj175_SCEventRun_runningActionsCount - 1;

if (window.obj175_SCEventRun_runningActionsCount == 0) {
	obj175_SCEventRun_actionGroup2();
}
		}
	}

	
	
	
}




































};
obj175_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj175_SCEventRun_activeActionGroupIndex = -1;
		$("#obj175").trigger("obj175_SCEventRun_ended");
		
		return;
	}
	window.obj175_SCEventRun_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_5572();
function runjs_5572() {
	window.obj175_SCEventRun_runningActionsCount = obj175_SCEventRun_runningActionsCount + 1;


	localStorage.setItem("ready", "true");

	setTimeout(function() {
		window.obj175_SCEventRun_runningActionsCount = window.obj175_SCEventRun_runningActionsCount - 1;

if (window.obj175_SCEventRun_runningActionsCount == 0) {
	obj175_SCEventRun_actionGroup3();
}
	}, 1);
}












};
obj175_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj175_SCEventRun_activeActionGroupIndex = -1;
		$("#obj175").trigger("obj175_SCEventRun_ended");
		
		return;
	}
	window.obj175_SCEventRun_activeActionGroupIndex = 3;
	










































};
obj179_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj179_SCEventRun_activeActionGroupIndex = -1;
		$("#obj179").trigger("obj179_SCEventRun_ended");
		
		return;
	}
	window.obj179_SCEventRun_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_5407();
function playAudioFile_5407() {
	window.obj179_SCEventRun_runningActionsCount = obj179_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5407")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5407");
			$("#obj_audio_playSoundFile5407").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj179_SCEventRun_runningActionsCount = window.obj179_SCEventRun_runningActionsCount - 1;

if (window.obj179_SCEventRun_runningActionsCount == 0) {
	obj179_SCEventRun_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj179_SCEventRun_runningActionsCount = window.obj179_SCEventRun_runningActionsCount - 1;

if (window.obj179_SCEventRun_runningActionsCount == 0) {
	obj179_SCEventRun_actionGroup1();
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
				window.obj179_SCEventRun_runningActionsCount = window.obj179_SCEventRun_runningActionsCount - 1;

if (window.obj179_SCEventRun_runningActionsCount == 0) {
	obj179_SCEventRun_actionGroup1();
}
			}, false);
		} else {
			window.obj179_SCEventRun_runningActionsCount = window.obj179_SCEventRun_runningActionsCount - 1;

if (window.obj179_SCEventRun_runningActionsCount == 0) {
	obj179_SCEventRun_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_5573();
function runjs_5573() {
	window.obj179_SCEventRun_runningActionsCount = obj179_SCEventRun_runningActionsCount + 1;


	localStorage.setItem("ready", "false");

	setTimeout(function() {
		window.obj179_SCEventRun_runningActionsCount = window.obj179_SCEventRun_runningActionsCount - 1;

if (window.obj179_SCEventRun_runningActionsCount == 0) {
	obj179_SCEventRun_actionGroup1();
}
	}, 1);
}












};
obj179_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj179_SCEventRun_activeActionGroupIndex = -1;
		$("#obj179").trigger("obj179_SCEventRun_ended");
		
		return;
	}
	window.obj179_SCEventRun_activeActionGroupIndex = 1;
	


//	action: show 
//	target: obj160 
(function(){
	window.obj179_SCEventRun_runningActionsCount = obj179_SCEventRun_runningActionsCount + 1;


	var element = "#obj160";
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
				window.obj179_SCEventRun_runningActionsCount = window.obj179_SCEventRun_runningActionsCount - 1;

if (window.obj179_SCEventRun_runningActionsCount == 0) {
	obj179_SCEventRun_actionGroup2();
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
			window.obj179_SCEventRun_runningActionsCount = window.obj179_SCEventRun_runningActionsCount - 1;

if (window.obj179_SCEventRun_runningActionsCount == 0) {
	obj179_SCEventRun_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj162 
(function(){
	window.obj179_SCEventRun_runningActionsCount = obj179_SCEventRun_runningActionsCount + 1;


	var element = "#obj162";
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
				window.obj179_SCEventRun_runningActionsCount = window.obj179_SCEventRun_runningActionsCount - 1;

if (window.obj179_SCEventRun_runningActionsCount == 0) {
	obj179_SCEventRun_actionGroup2();
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
			window.obj179_SCEventRun_runningActionsCount = window.obj179_SCEventRun_runningActionsCount - 1;

if (window.obj179_SCEventRun_runningActionsCount == 0) {
	obj179_SCEventRun_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj164 
(function(){
	window.obj179_SCEventRun_runningActionsCount = obj179_SCEventRun_runningActionsCount + 1;


	var element = "#obj164";
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
				window.obj179_SCEventRun_runningActionsCount = window.obj179_SCEventRun_runningActionsCount - 1;

if (window.obj179_SCEventRun_runningActionsCount == 0) {
	obj179_SCEventRun_actionGroup2();
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
			window.obj179_SCEventRun_runningActionsCount = window.obj179_SCEventRun_runningActionsCount - 1;

if (window.obj179_SCEventRun_runningActionsCount == 0) {
	obj179_SCEventRun_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: move
//	target: obj70 
move_222();
function move_222() {
	window.obj179_SCEventRun_runningActionsCount = obj179_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj70");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=7";
	var moveY = "+=-7";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj179_SCEventRun_runningActionsCount = window.obj179_SCEventRun_runningActionsCount - 1;

if (window.obj179_SCEventRun_runningActionsCount == 0) {
	obj179_SCEventRun_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj70 
move_223();
function move_223() {
	window.obj179_SCEventRun_runningActionsCount = obj179_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj70");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 820;
	var moveY = 750;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 100, easing, function() {
		setTimeout(function() {
			window.obj179_SCEventRun_runningActionsCount = window.obj179_SCEventRun_runningActionsCount - 1;

if (window.obj179_SCEventRun_runningActionsCount == 0) {
	obj179_SCEventRun_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj70 
move_224();
function move_224() {
	window.obj179_SCEventRun_runningActionsCount = obj179_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj70");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=7";
	var moveY = "+=-7";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj179_SCEventRun_runningActionsCount = window.obj179_SCEventRun_runningActionsCount - 1;

if (window.obj179_SCEventRun_runningActionsCount == 0) {
	obj179_SCEventRun_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj70 
move_225();
function move_225() {
	window.obj179_SCEventRun_runningActionsCount = obj179_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj70");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 820;
	var moveY = 750;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 100, easing, function() {
		setTimeout(function() {
			window.obj179_SCEventRun_runningActionsCount = window.obj179_SCEventRun_runningActionsCount - 1;

if (window.obj179_SCEventRun_runningActionsCount == 0) {
	obj179_SCEventRun_actionGroup2();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_5575();
function playAudioFile_5575() {
	window.obj179_SCEventRun_runningActionsCount = obj179_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5575")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5575");
			$("#obj_audio_playSoundFile5575").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj179_SCEventRun_runningActionsCount = window.obj179_SCEventRun_runningActionsCount - 1;

if (window.obj179_SCEventRun_runningActionsCount == 0) {
	obj179_SCEventRun_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj179_SCEventRun_runningActionsCount = window.obj179_SCEventRun_runningActionsCount - 1;

if (window.obj179_SCEventRun_runningActionsCount == 0) {
	obj179_SCEventRun_actionGroup2();
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
				window.obj179_SCEventRun_runningActionsCount = window.obj179_SCEventRun_runningActionsCount - 1;

if (window.obj179_SCEventRun_runningActionsCount == 0) {
	obj179_SCEventRun_actionGroup2();
}
			}, false);
		} else {
			window.obj179_SCEventRun_runningActionsCount = window.obj179_SCEventRun_runningActionsCount - 1;

if (window.obj179_SCEventRun_runningActionsCount == 0) {
	obj179_SCEventRun_actionGroup2();
}
		}
	}

	
	
	
}




































};
obj179_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj179_SCEventRun_activeActionGroupIndex = -1;
		$("#obj179").trigger("obj179_SCEventRun_ended");
		
		return;
	}
	window.obj179_SCEventRun_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_5574();
function runjs_5574() {
	window.obj179_SCEventRun_runningActionsCount = obj179_SCEventRun_runningActionsCount + 1;


	localStorage.setItem("ready", "true");

	setTimeout(function() {
		window.obj179_SCEventRun_runningActionsCount = window.obj179_SCEventRun_runningActionsCount - 1;

if (window.obj179_SCEventRun_runningActionsCount == 0) {
	obj179_SCEventRun_actionGroup3();
}
	}, 1);
}












};
obj179_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj179_SCEventRun_activeActionGroupIndex = -1;
		$("#obj179").trigger("obj179_SCEventRun_ended");
		
		return;
	}
	window.obj179_SCEventRun_activeActionGroupIndex = 3;
	










































};
obj192_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj192_onLoad_activeActionGroupIndex = -1;
		$("#obj192").trigger("obj192_onLoad_ended");
		
		return;
	}
	window.obj192_onLoad_activeActionGroupIndex = 0;
	




//	action: playAnimation 
//	target: obj192 
playAnimation_205();
function playAnimation_205() {
	var targetObjectId = "#obj192";
	var targetObject = $(targetObjectId)[0];
	window.obj192_onLoad_runningActionsCount = obj192_onLoad_runningActionsCount + 1;

	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj192_onLoad_runningActionsCount = window.obj192_onLoad_runningActionsCount - 1;

if (window.obj192_onLoad_runningActionsCount == 0) {
	obj192_onLoad_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj192 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj192;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");

	setTimeout(function() {
	    api_animate_obj192.startAnimation();
	}, 1);

	if (!isAnimationInfinite) {
		$("#obj192").one("obj192_animation_ended",function(event) {
		    window.obj192_onLoad_runningActionsCount = window.obj192_onLoad_runningActionsCount - 1;

if (window.obj192_onLoad_runningActionsCount == 0) {
	obj192_onLoad_actionGroup1();
}
		});
	}
 }





































};
obj192_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj192_onLoad_activeActionGroupIndex = -1;
		$("#obj192").trigger("obj192_onLoad_ended");
		
		return;
	}
	window.obj192_onLoad_activeActionGroupIndex = 1;
	
















//	action: wait
wait_209();
function wait_209() {
	window.obj192_onLoad_runningActionsCount = obj192_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj192_onLoad_runningActionsCount = window.obj192_onLoad_runningActionsCount - 1;

if (window.obj192_onLoad_runningActionsCount == 0) {
	obj192_onLoad_actionGroup2();
}
	}, 3000);
}

























};
obj192_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj192_onLoad_activeActionGroupIndex = -1;
		$("#obj192").trigger("obj192_onLoad_ended");
		
		return;
	}
	window.obj192_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj192_onLoad();
function loop_obj192_onLoad() {

	var loopCount = 0;

	window.obj192_onLoad_loopCount = window.obj192_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj192_onLoad_loopCount > loopCount) {
		window.obj192_onLoad_loopCount = 0
		obj192_onLoad_actionGroup3();
	} else {
		obj192_onLoad_actionGroup0();
	}

}


























};
obj192_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj192_onLoad_activeActionGroupIndex = -1;
		$("#obj192").trigger("obj192_onLoad_ended");
		
		return;
	}
	window.obj192_onLoad_activeActionGroupIndex = 3;
	










































};
obj5383_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5383_onLoad_activeActionGroupIndex = -1;
		$("#obj5383").trigger("obj5383_onLoad_ended");
		
		return;
	}
	window.obj5383_onLoad_activeActionGroupIndex = 0;
	
























//	action: playAudio
//	target: obj5383 
playAudio_5385();
function playAudio_5385() {
	window.obj5383_onLoad_runningActionsCount = obj5383_onLoad_runningActionsCount + 1;

	var myAudio = $("#obj5383")[0];
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
		    window.obj5383_onLoad_runningActionsCount = window.obj5383_onLoad_runningActionsCount - 1;

if (window.obj5383_onLoad_runningActionsCount == 0) {
	obj5383_onLoad_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj5383_onLoad_runningActionsCount = window.obj5383_onLoad_runningActionsCount - 1;

if (window.obj5383_onLoad_runningActionsCount == 0) {
	obj5383_onLoad_actionGroup1();
}
	}
}

















};
obj5383_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5383_onLoad_activeActionGroupIndex = -1;
		$("#obj5383").trigger("obj5383_onLoad_ended");
		
		return;
	}
	window.obj5383_onLoad_activeActionGroupIndex = 1;
	










































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		





/*
 *
 *   obj53: Event Touch Down
 *
 */

$("#obj53").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj53_onTap_activeActionGroupIndex != -1) return;
var obj53_onTap_runningActionsCount = 0;
var obj53_onTap_loopCount = 0;
obj53_onTap_actionGroup0();
});



/*
 *
 *   obj53: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj53_onLoad_activeActionGroupIndex != -1) return;
var obj53_onLoad_runningActionsCount = 0;
var obj53_onLoad_loopCount = 0;
obj53_onLoad_actionGroup0();
});

















































































































































/*
 *
 *   obj47: Event Touch Down
 *
 */

$("#obj47").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj47_onTap_activeActionGroupIndex != -1) return;
var obj47_onTap_runningActionsCount = 0;
var obj47_onTap_loopCount = 0;
obj47_onTap_actionGroup0();
});





























/*
 *
 *   obj70: Event Touch Down
 *
 */

$("#obj70").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70_onTap_activeActionGroupIndex != -1) return;
var obj70_onTap_runningActionsCount = 0;
var obj70_onTap_loopCount = 0;
obj70_onTap_actionGroup0();
});


















/*
 *
 *   obj75: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj75_onLoad_activeActionGroupIndex != -1) return;
var obj75_onLoad_runningActionsCount = 0;
var obj75_onLoad_loopCount = 0;
obj75_onLoad_actionGroup0();
});










/*
 *
 *   obj77: Event Touch Down
 *
 */

$("#obj77").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj77_onTap_activeActionGroupIndex != -1) return;
var obj77_onTap_runningActionsCount = 0;
var obj77_onTap_loopCount = 0;
obj77_onTap_actionGroup0();
});























/*
 *
 *   obj167: Event SCEventRun
 *
 */

$("#obj167").bind("SCEventRun", function(event) {
	if (window.obj167_SCEventRun_activeActionGroupIndex != -1) return;
var obj167_SCEventRun_runningActionsCount = 0;
var obj167_SCEventRun_loopCount = 0;
obj167_SCEventRun_actionGroup0();
});












































/*
 *
 *   obj171: Event SCEventRun
 *
 */

$("#obj171").bind("SCEventRun", function(event) {
	if (window.obj171_SCEventRun_activeActionGroupIndex != -1) return;
var obj171_SCEventRun_runningActionsCount = 0;
var obj171_SCEventRun_loopCount = 0;
obj171_SCEventRun_actionGroup0();
});



























































/*
 *
 *   obj175: Event SCEventRun
 *
 */

$("#obj175").bind("SCEventRun", function(event) {
	if (window.obj175_SCEventRun_activeActionGroupIndex != -1) return;
var obj175_SCEventRun_runningActionsCount = 0;
var obj175_SCEventRun_loopCount = 0;
obj175_SCEventRun_actionGroup0();
});



























































/*
 *
 *   obj179: Event SCEventRun
 *
 */

$("#obj179").bind("SCEventRun", function(event) {
	if (window.obj179_SCEventRun_activeActionGroupIndex != -1) return;
var obj179_SCEventRun_runningActionsCount = 0;
var obj179_SCEventRun_loopCount = 0;
obj179_SCEventRun_actionGroup0();
});






















































/*
 *
 *   obj192: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj192_onLoad_activeActionGroupIndex != -1) return;
var obj192_onLoad_runningActionsCount = 0;
var obj192_onLoad_loopCount = 0;
obj192_onLoad_actionGroup0();
});














/*
 *
 *   obj5383: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj5383_onLoad_activeActionGroupIndex != -1) return;
var obj5383_onLoad_runningActionsCount = 0;
var obj5383_onLoad_loopCount = 0;
obj5383_onLoad_actionGroup0();
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
	
$("#obj53").trigger('SCEventShow');
$("#obj67").trigger('SCEventShow');
$("#obj128").trigger('SCEventShow');
$("#obj29").trigger('SCEventShow');
$("#obj115").trigger('SCEventShow');
$("#obj31").trigger('SCEventShow');
$("#obj33").trigger('SCEventShow');
$("#obj35").trigger('SCEventShow');
$("#obj45").trigger('SCEventShow');
$("#obj43").trigger('SCEventShow');
$("#obj47").trigger('SCEventShow');
$("#obj56").trigger('SCEventShow');
$("#obj70").trigger('SCEventShow');
$("#obj75").trigger('SCEventShow');
$("#obj77").trigger('SCEventShow');
$("#obj192").trigger('SCEventShow');
$("#obj5383").trigger('SCEventShow');
$("#obj5558").trigger('SCEventShow');
	localStorage.setItem('tapped','0');
localStorage.setItem('ready','true');
localStorage.setItem('ready','true');
});