pubcoder.projectID = pubcoder.projectID || "D928F63EC5FACE4D86169F491C787A52";
pubcoder.project.id = pubcoder.project.id || "D928F63EC5FACE4D86169F491C787A52";
pubcoder.project.title = pubcoder.project.title || "OkidoNumbers";
pubcoder.page.id = pubcoder.page.id || 3;
pubcoder.page.title = pubcoder.page.title || "8";
pubcoder.page.number = pubcoder.page.number || 8;
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
var obj10_onTap_activeActionGroupIndex = -1;
var obj10_onTap_runningActionsCount = 0;
var obj10_onTap_loopCount = 0;
var obj10_onLoad_activeActionGroupIndex = -1;
var obj10_onLoad_runningActionsCount = 0;
var obj10_onLoad_loopCount = 0;
var obj196_onTap_activeActionGroupIndex = -1;
var obj196_onTap_runningActionsCount = 0;
var obj196_onTap_loopCount = 0;
var obj198_onTap_activeActionGroupIndex = -1;
var obj198_onTap_runningActionsCount = 0;
var obj198_onTap_loopCount = 0;
var obj329_onTap_activeActionGroupIndex = -1;
var obj329_onTap_runningActionsCount = 0;
var obj329_onTap_loopCount = 0;
var obj330_onTap_activeActionGroupIndex = -1;
var obj330_onTap_runningActionsCount = 0;
var obj330_onTap_loopCount = 0;
var obj202_onTap_activeActionGroupIndex = -1;
var obj202_onTap_runningActionsCount = 0;
var obj202_onTap_loopCount = 0;
var obj359_onTap_activeActionGroupIndex = -1;
var obj359_onTap_runningActionsCount = 0;
var obj359_onTap_loopCount = 0;
var obj205_onTap_activeActionGroupIndex = -1;
var obj205_onTap_runningActionsCount = 0;
var obj205_onTap_loopCount = 0;
var obj208_onTap_activeActionGroupIndex = -1;
var obj208_onTap_runningActionsCount = 0;
var obj208_onTap_loopCount = 0;
var obj215_SCEventRun_activeActionGroupIndex = -1;
var obj215_SCEventRun_runningActionsCount = 0;
var obj215_SCEventRun_loopCount = 0;
var obj221_SCEventRun_activeActionGroupIndex = -1;
var obj221_SCEventRun_runningActionsCount = 0;
var obj221_SCEventRun_loopCount = 0;
var obj283_SCEventRun_activeActionGroupIndex = -1;
var obj283_SCEventRun_runningActionsCount = 0;
var obj283_SCEventRun_loopCount = 0;
var obj308_SCEventRun_activeActionGroupIndex = -1;
var obj308_SCEventRun_runningActionsCount = 0;
var obj308_SCEventRun_loopCount = 0;
var obj357_SCEventRun_activeActionGroupIndex = -1;
var obj357_SCEventRun_runningActionsCount = 0;
var obj357_SCEventRun_loopCount = 0;
var obj478_SCEventRun_activeActionGroupIndex = -1;
var obj478_SCEventRun_runningActionsCount = 0;
var obj478_SCEventRun_loopCount = 0;
var obj1377_onLoad_activeActionGroupIndex = -1;
var obj1377_onLoad_runningActionsCount = 0;
var obj1377_onLoad_loopCount = 0;

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
		
obj10_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10_onTap_activeActionGroupIndex = -1;
		$("#obj10").trigger("obj10_onTap_ended");
		
		return;
	}
	window.obj10_onTap_activeActionGroupIndex = 0;
	





























//	action: Run JavaScript
runjs_214();
function runjs_214() {
	window.obj10_onTap_runningActionsCount = obj10_onTap_runningActionsCount + 1;


	/*if(localStorage.getItem("tapped") === "0") //&& audio is complete)
{
    localStorage.setItem("tapped", "1");
    //run an action list which displays how the game is played
    localStorage.setItem('tut', "false");
    $("#obj478").trigger(PubCoder.Events.Run);
}*/

	setTimeout(function() {
		window.obj10_onTap_runningActionsCount = window.obj10_onTap_runningActionsCount - 1;

if (window.obj10_onTap_runningActionsCount == 0) {
	obj10_onTap_actionGroup1();
}
	}, 1);
}












};
obj10_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10_onTap_activeActionGroupIndex = -1;
		$("#obj10").trigger("obj10_onTap_ended");
		
		return;
	}
	window.obj10_onTap_activeActionGroupIndex = 1;
	










































};
obj10_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10_onLoad_activeActionGroupIndex = -1;
		$("#obj10").trigger("obj10_onLoad_ended");
		
		return;
	}
	window.obj10_onLoad_activeActionGroupIndex = 0;
	



































//	action: run action list container
//	target: obj357 
runActionList_414();
function runActionList_414() {
	window.obj10_onLoad_runningActionsCount = obj10_onLoad_runningActionsCount + 1;

	$("#obj357").trigger('SCEventRun');
	setTimeout(function() {
		window.obj10_onLoad_runningActionsCount = window.obj10_onLoad_runningActionsCount - 1;

if (window.obj10_onLoad_runningActionsCount == 0) {
	obj10_onLoad_actionGroup1();
}		
	}, 1);
}






};
obj10_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10_onLoad_activeActionGroupIndex = -1;
		$("#obj10").trigger("obj10_onLoad_ended");
		
		return;
	}
	window.obj10_onLoad_activeActionGroupIndex = 1;
	










































};
obj196_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj196_onTap_activeActionGroupIndex = -1;
		$("#obj196").trigger("obj196_onTap_ended");
		
		return;
	}
	window.obj196_onTap_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj196 
move_345();
function move_345() {
	window.obj196_onTap_runningActionsCount = obj196_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj196");
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
			window.obj196_onTap_runningActionsCount = window.obj196_onTap_runningActionsCount - 1;

if (window.obj196_onTap_runningActionsCount == 0) {
	obj196_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj196 
move_346();
function move_346() {
	window.obj196_onTap_runningActionsCount = obj196_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj196");
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
			window.obj196_onTap_runningActionsCount = window.obj196_onTap_runningActionsCount - 1;

if (window.obj196_onTap_runningActionsCount == 0) {
	obj196_onTap_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1395();
function playAudioFile_1395() {
	window.obj196_onTap_runningActionsCount = obj196_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1395")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1395");
			$("#obj_audio_playSoundFile1395").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj196_onTap_runningActionsCount = window.obj196_onTap_runningActionsCount - 1;

if (window.obj196_onTap_runningActionsCount == 0) {
	obj196_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj196_onTap_runningActionsCount = window.obj196_onTap_runningActionsCount - 1;

if (window.obj196_onTap_runningActionsCount == 0) {
	obj196_onTap_actionGroup1();
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
				window.obj196_onTap_runningActionsCount = window.obj196_onTap_runningActionsCount - 1;

if (window.obj196_onTap_runningActionsCount == 0) {
	obj196_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj196_onTap_runningActionsCount = window.obj196_onTap_runningActionsCount - 1;

if (window.obj196_onTap_runningActionsCount == 0) {
	obj196_onTap_actionGroup1();
}
		}
	}

	
	
	
}




































};
obj196_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj196_onTap_activeActionGroupIndex = -1;
		$("#obj196").trigger("obj196_onTap_ended");
		
		return;
	}
	window.obj196_onTap_activeActionGroupIndex = 1;
	










































};
obj198_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj198_onTap_activeActionGroupIndex = -1;
		$("#obj198").trigger("obj198_onTap_ended");
		
		return;
	}
	window.obj198_onTap_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj198 
move_347();
function move_347() {
	window.obj198_onTap_runningActionsCount = obj198_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj198");
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
			window.obj198_onTap_runningActionsCount = window.obj198_onTap_runningActionsCount - 1;

if (window.obj198_onTap_runningActionsCount == 0) {
	obj198_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj198 
move_348();
function move_348() {
	window.obj198_onTap_runningActionsCount = obj198_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj198");
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
			window.obj198_onTap_runningActionsCount = window.obj198_onTap_runningActionsCount - 1;

if (window.obj198_onTap_runningActionsCount == 0) {
	obj198_onTap_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1396();
function playAudioFile_1396() {
	window.obj198_onTap_runningActionsCount = obj198_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1396")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1396");
			$("#obj_audio_playSoundFile1396").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj198_onTap_runningActionsCount = window.obj198_onTap_runningActionsCount - 1;

if (window.obj198_onTap_runningActionsCount == 0) {
	obj198_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj198_onTap_runningActionsCount = window.obj198_onTap_runningActionsCount - 1;

if (window.obj198_onTap_runningActionsCount == 0) {
	obj198_onTap_actionGroup1();
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
				window.obj198_onTap_runningActionsCount = window.obj198_onTap_runningActionsCount - 1;

if (window.obj198_onTap_runningActionsCount == 0) {
	obj198_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj198_onTap_runningActionsCount = window.obj198_onTap_runningActionsCount - 1;

if (window.obj198_onTap_runningActionsCount == 0) {
	obj198_onTap_actionGroup1();
}
		}
	}

	
	
	
}




































};
obj198_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj198_onTap_activeActionGroupIndex = -1;
		$("#obj198").trigger("obj198_onTap_ended");
		
		return;
	}
	window.obj198_onTap_activeActionGroupIndex = 1;
	










































};
obj329_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj329_onTap_activeActionGroupIndex = -1;
		$("#obj329").trigger("obj329_onTap_ended");
		
		return;
	}
	window.obj329_onTap_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj329 
move_336();
function move_336() {
	window.obj329_onTap_runningActionsCount = obj329_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj329");
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
			window.obj329_onTap_runningActionsCount = window.obj329_onTap_runningActionsCount - 1;

if (window.obj329_onTap_runningActionsCount == 0) {
	obj329_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj329 
move_338();
function move_338() {
	window.obj329_onTap_runningActionsCount = obj329_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj329");
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
			window.obj329_onTap_runningActionsCount = window.obj329_onTap_runningActionsCount - 1;

if (window.obj329_onTap_runningActionsCount == 0) {
	obj329_onTap_actionGroup1();
}
		}, 1);
	});
}






































};
obj329_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj329_onTap_activeActionGroupIndex = -1;
		$("#obj329").trigger("obj329_onTap_ended");
		
		return;
	}
	window.obj329_onTap_activeActionGroupIndex = 1;
	










































};
obj330_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj330_onTap_activeActionGroupIndex = -1;
		$("#obj330").trigger("obj330_onTap_ended");
		
		return;
	}
	window.obj330_onTap_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj330 
move_339();
function move_339() {
	window.obj330_onTap_runningActionsCount = obj330_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj330");
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
			window.obj330_onTap_runningActionsCount = window.obj330_onTap_runningActionsCount - 1;

if (window.obj330_onTap_runningActionsCount == 0) {
	obj330_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj330 
move_340();
function move_340() {
	window.obj330_onTap_runningActionsCount = obj330_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj330");
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
			window.obj330_onTap_runningActionsCount = window.obj330_onTap_runningActionsCount - 1;

if (window.obj330_onTap_runningActionsCount == 0) {
	obj330_onTap_actionGroup1();
}
		}, 1);
	});
}






































};
obj330_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj330_onTap_activeActionGroupIndex = -1;
		$("#obj330").trigger("obj330_onTap_ended");
		
		return;
	}
	window.obj330_onTap_activeActionGroupIndex = 1;
	










































};
obj202_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj202_onTap_activeActionGroupIndex = -1;
		$("#obj202").trigger("obj202_onTap_ended");
		
		return;
	}
	window.obj202_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_1463();
function playAudioFile_1463() {
	window.obj202_onTap_runningActionsCount = obj202_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1463")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1463");
			$("#obj_audio_playSoundFile1463").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj202_onTap_runningActionsCount = window.obj202_onTap_runningActionsCount - 1;

if (window.obj202_onTap_runningActionsCount == 0) {
	obj202_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj202_onTap_runningActionsCount = window.obj202_onTap_runningActionsCount - 1;

if (window.obj202_onTap_runningActionsCount == 0) {
	obj202_onTap_actionGroup1();
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
				window.obj202_onTap_runningActionsCount = window.obj202_onTap_runningActionsCount - 1;

if (window.obj202_onTap_runningActionsCount == 0) {
	obj202_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj202_onTap_runningActionsCount = window.obj202_onTap_runningActionsCount - 1;

if (window.obj202_onTap_runningActionsCount == 0) {
	obj202_onTap_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_248();
function runjs_248() {
	window.obj202_onTap_runningActionsCount = obj202_onTap_runningActionsCount + 1;


	if(localStorage.getItem("tut") === "false")
{
    if(localStorage.getItem("tally") === "0")
    {
        localStorage.setItem("tally", "1");
        $("#obj269").show(0);
    }
    else if(localStorage.getItem("tally") === "1")
    {
        localStorage.setItem("tally", "2");
        $("#obj271").show(0);
        $("#obj269").hide(0);
    }
    else if(localStorage.getItem("tally") === "2")
    {
        localStorage.setItem("tally", "3");
        $("#obj272").show(0);
        $("#obj271").hide(0);
    }
    else if(localStorage.getItem("tally") === "3")
    {
        localStorage.setItem("tally", "4");
        $("#obj273").show(0);
        $("#obj272").hide(0);
    }
    else if(localStorage.getItem("tally") === "4")
    {
        localStorage.setItem("tally", "5");
        $("#obj274").show(0);
        $("#obj273").hide(0);
    }
    else if(localStorage.getItem("tally") === "5")
    {
        localStorage.setItem("tally", "6");
        $("#obj275").show(0);
        $("#obj274").hide(0);
        
    }
    else if(localStorage.getItem("tally") === "6")
    {
        localStorage.setItem("tally", "7");
        $("#obj276").show(0);
        $("#obj275").hide(0);
    }
    else if(localStorage.getItem("tally") === "7")
    {
        localStorage.setItem("tally", "8");
        $("#obj277").show(0);
        $("#obj276").hide(0);
    }
    else if(localStorage.getItem("tally") === "8")
    {
        localStorage.setItem("tally", "9");
        $("#obj278").show(0);
        $("#obj277").hide(0);
    }
    else if(localStorage.getItem("tally") === "9")
    {
        localStorage.setItem("tally", "10");
        $("#obj270").show(0);
        $("#obj278").hide(0);
    }
}

	setTimeout(function() {
		window.obj202_onTap_runningActionsCount = window.obj202_onTap_runningActionsCount - 1;

if (window.obj202_onTap_runningActionsCount == 0) {
	obj202_onTap_actionGroup1();
}
	}, 1);
}












};
obj202_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj202_onTap_activeActionGroupIndex = -1;
		$("#obj202").trigger("obj202_onTap_ended");
		
		return;
	}
	window.obj202_onTap_activeActionGroupIndex = 1;
	










































};
obj359_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj359_onTap_activeActionGroupIndex = -1;
		$("#obj359").trigger("obj359_onTap_ended");
		
		return;
	}
	window.obj359_onTap_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj359 
move_579();
function move_579() {
	window.obj359_onTap_runningActionsCount = obj359_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj359");
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
			window.obj359_onTap_runningActionsCount = window.obj359_onTap_runningActionsCount - 1;

if (window.obj359_onTap_runningActionsCount == 0) {
	obj359_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj359 
move_580();
function move_580() {
	window.obj359_onTap_runningActionsCount = obj359_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj359");
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
			window.obj359_onTap_runningActionsCount = window.obj359_onTap_runningActionsCount - 1;

if (window.obj359_onTap_runningActionsCount == 0) {
	obj359_onTap_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1397();
function playAudioFile_1397() {
	window.obj359_onTap_runningActionsCount = obj359_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1397")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1397");
			$("#obj_audio_playSoundFile1397").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj359_onTap_runningActionsCount = window.obj359_onTap_runningActionsCount - 1;

if (window.obj359_onTap_runningActionsCount == 0) {
	obj359_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj359_onTap_runningActionsCount = window.obj359_onTap_runningActionsCount - 1;

if (window.obj359_onTap_runningActionsCount == 0) {
	obj359_onTap_actionGroup1();
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
				window.obj359_onTap_runningActionsCount = window.obj359_onTap_runningActionsCount - 1;

if (window.obj359_onTap_runningActionsCount == 0) {
	obj359_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj359_onTap_runningActionsCount = window.obj359_onTap_runningActionsCount - 1;

if (window.obj359_onTap_runningActionsCount == 0) {
	obj359_onTap_actionGroup1();
}
		}
	}

	
	
	
}




































};
obj359_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj359_onTap_activeActionGroupIndex = -1;
		$("#obj359").trigger("obj359_onTap_ended");
		
		return;
	}
	window.obj359_onTap_activeActionGroupIndex = 1;
	










































};
obj205_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj205_onTap_activeActionGroupIndex = -1;
		$("#obj205").trigger("obj205_onTap_ended");
		
		return;
	}
	window.obj205_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_1460();
function playAudioFile_1460() {
	window.obj205_onTap_runningActionsCount = obj205_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1460")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1460");
			$("#obj_audio_playSoundFile1460").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj205_onTap_runningActionsCount = window.obj205_onTap_runningActionsCount - 1;

if (window.obj205_onTap_runningActionsCount == 0) {
	obj205_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj205_onTap_runningActionsCount = window.obj205_onTap_runningActionsCount - 1;

if (window.obj205_onTap_runningActionsCount == 0) {
	obj205_onTap_actionGroup1();
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
				window.obj205_onTap_runningActionsCount = window.obj205_onTap_runningActionsCount - 1;

if (window.obj205_onTap_runningActionsCount == 0) {
	obj205_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj205_onTap_runningActionsCount = window.obj205_onTap_runningActionsCount - 1;

if (window.obj205_onTap_runningActionsCount == 0) {
	obj205_onTap_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_280();
function runjs_280() {
	window.obj205_onTap_runningActionsCount = obj205_onTap_runningActionsCount + 1;


	if(localStorage.getItem("tut") === "false" && localStorage.getItem("ready") === "true")
{
    if(localStorage.getItem("tally") === "1")
    {
        localStorage.setItem("tally", "0");
        $("#obj269").hide(0);
    }
    else if(localStorage.getItem("tally") === "2")
    {
        localStorage.setItem("tally", "1");
        $("#obj269").show(0);
        $("#obj271").hide(0);
    }
    else if(localStorage.getItem("tally") === "3")
    {
        localStorage.setItem("tally", "2");
        $("#obj271").show(0);
        $("#obj272").hide(0);
    }
    else if(localStorage.getItem("tally") === "4")
    {
        localStorage.setItem("tally", "3");
        $("#obj272").show(0);
        $("#obj273").hide(0);
    }
    else if(localStorage.getItem("tally") === "5")
    {
        localStorage.setItem("tally", "4");
        $("#obj273").show(0);
        $("#obj274").hide(0);
        
    }
    else if(localStorage.getItem("tally") === "6")
    {
        localStorage.setItem("tally", "5");
        $("#obj274").show(0);
        $("#obj275").hide(0);
    }
    else if(localStorage.getItem("tally") === "7")
    {
        localStorage.setItem("tally", "6");
        $("#obj275").show(0);
        $("#obj276").hide(0);
    }
    else if(localStorage.getItem("tally") === "8")
    {
        localStorage.setItem("tally", "7");
        $("#obj276").show(0);
        $("#obj277").hide(0);
    }
    else if(localStorage.getItem("tally") === "9")
    {
        localStorage.setItem("tally", "8");
        $("#obj277").show(0);
        $("#obj278").hide(0);
    }
    else if(localStorage.getItem("tally") === "10")
    {
        localStorage.setItem("tally", "9");
        $("#obj278").show(0);
        $("#obj270").hide(0);
    }
}

	setTimeout(function() {
		window.obj205_onTap_runningActionsCount = window.obj205_onTap_runningActionsCount - 1;

if (window.obj205_onTap_runningActionsCount == 0) {
	obj205_onTap_actionGroup1();
}
	}, 1);
}












};
obj205_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj205_onTap_activeActionGroupIndex = -1;
		$("#obj205").trigger("obj205_onTap_ended");
		
		return;
	}
	window.obj205_onTap_activeActionGroupIndex = 1;
	










































};
obj208_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj208_onTap_activeActionGroupIndex = -1;
		$("#obj208").trigger("obj208_onTap_ended");
		
		return;
	}
	window.obj208_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_1464();
function playAudioFile_1464() {
	window.obj208_onTap_runningActionsCount = obj208_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1464")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1464");
			$("#obj_audio_playSoundFile1464").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj208_onTap_runningActionsCount = window.obj208_onTap_runningActionsCount - 1;

if (window.obj208_onTap_runningActionsCount == 0) {
	obj208_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj208_onTap_runningActionsCount = window.obj208_onTap_runningActionsCount - 1;

if (window.obj208_onTap_runningActionsCount == 0) {
	obj208_onTap_actionGroup1();
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
				window.obj208_onTap_runningActionsCount = window.obj208_onTap_runningActionsCount - 1;

if (window.obj208_onTap_runningActionsCount == 0) {
	obj208_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj208_onTap_runningActionsCount = window.obj208_onTap_runningActionsCount - 1;

if (window.obj208_onTap_runningActionsCount == 0) {
	obj208_onTap_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_282();
function runjs_282() {
	window.obj208_onTap_runningActionsCount = obj208_onTap_runningActionsCount + 1;


	if(localStorage.getItem("tut") === "false" && localStorage.getItem("ready") === "true")
{
    if(localStorage.getItem("tally") === "4")
    {
        //yay youre right
        $("#obj308").trigger(PubCoder.Events.Run);
    }
    else
    {
        //aw ur wrong go again
        $("#obj283").trigger(PubCoder.Events.Run);
    }
}

	setTimeout(function() {
		window.obj208_onTap_runningActionsCount = window.obj208_onTap_runningActionsCount - 1;

if (window.obj208_onTap_runningActionsCount == 0) {
	obj208_onTap_actionGroup1();
}
	}, 1);
}












};
obj208_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj208_onTap_activeActionGroupIndex = -1;
		$("#obj208").trigger("obj208_onTap_ended");
		
		return;
	}
	window.obj208_onTap_activeActionGroupIndex = 1;
	










































};
obj215_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj215_SCEventRun_activeActionGroupIndex = -1;
		$("#obj215").trigger("obj215_SCEventRun_ended");
		
		return;
	}
	window.obj215_SCEventRun_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj217 
move_219();
function move_219() {
	window.obj215_SCEventRun_runningActionsCount = obj215_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj217");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=318";
	var moveY = "+=-207";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1500, easing, function() {
		setTimeout(function() {
			window.obj215_SCEventRun_runningActionsCount = window.obj215_SCEventRun_runningActionsCount - 1;

if (window.obj215_SCEventRun_runningActionsCount == 0) {
	obj215_SCEventRun_actionGroup1();
}
		}, 1);
	});
}










//	action: rotate 
//	target: obj217 
rotate_220();
function rotate_220() {
	window.obj215_SCEventRun_runningActionsCount = obj215_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj217";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj217';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '-14.15524';
	var rotationSpeed = 1.5;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = false;
	if (isInfinite) { rotate_220_completed(); }

	//TweenMax.to(targetObjectId, 1.5, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_220_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_220_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_220_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_220_completed() {
	setTimeout(function() {
		window.obj215_SCEventRun_runningActionsCount = window.obj215_SCEventRun_runningActionsCount - 1;

if (window.obj215_SCEventRun_runningActionsCount == 0) {
	obj215_SCEventRun_actionGroup1();
}
	}, 1);
}




























};
obj215_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj215_SCEventRun_activeActionGroupIndex = -1;
		$("#obj215").trigger("obj215_SCEventRun_ended");
		
		return;
	}
	window.obj215_SCEventRun_activeActionGroupIndex = 1;
	



































//	action: run action list container
//	target: obj221 
runActionList_227();
function runActionList_227() {
	window.obj215_SCEventRun_runningActionsCount = obj215_SCEventRun_runningActionsCount + 1;

	$("#obj221").trigger('SCEventRun');
	setTimeout(function() {
		window.obj215_SCEventRun_runningActionsCount = window.obj215_SCEventRun_runningActionsCount - 1;

if (window.obj215_SCEventRun_runningActionsCount == 0) {
	obj215_SCEventRun_actionGroup2();
}		
	}, 1);
}






};
obj215_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj215_SCEventRun_activeActionGroupIndex = -1;
		$("#obj215").trigger("obj215_SCEventRun_ended");
		
		return;
	}
	window.obj215_SCEventRun_activeActionGroupIndex = 2;
	


//	action: show 
//	target: obj240 
(function(){
	window.obj215_SCEventRun_runningActionsCount = obj215_SCEventRun_runningActionsCount + 1;


	var element = "#obj240";
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
				window.obj215_SCEventRun_runningActionsCount = window.obj215_SCEventRun_runningActionsCount - 1;

if (window.obj215_SCEventRun_runningActionsCount == 0) {
	obj215_SCEventRun_actionGroup3();
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
			window.obj215_SCEventRun_runningActionsCount = window.obj215_SCEventRun_runningActionsCount - 1;

if (window.obj215_SCEventRun_runningActionsCount == 0) {
	obj215_SCEventRun_actionGroup3();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj237 
(function(){
	window.obj215_SCEventRun_runningActionsCount = obj215_SCEventRun_runningActionsCount + 1;


	var element = "#obj237";
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
				window.obj215_SCEventRun_runningActionsCount = window.obj215_SCEventRun_runningActionsCount - 1;

if (window.obj215_SCEventRun_runningActionsCount == 0) {
	obj215_SCEventRun_actionGroup3();
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
			window.obj215_SCEventRun_runningActionsCount = window.obj215_SCEventRun_runningActionsCount - 1;

if (window.obj215_SCEventRun_runningActionsCount == 0) {
	obj215_SCEventRun_actionGroup3();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj235 
(function(){
	window.obj215_SCEventRun_runningActionsCount = obj215_SCEventRun_runningActionsCount + 1;


	var element = "#obj235";
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
				window.obj215_SCEventRun_runningActionsCount = window.obj215_SCEventRun_runningActionsCount - 1;

if (window.obj215_SCEventRun_runningActionsCount == 0) {
	obj215_SCEventRun_actionGroup3();
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
			window.obj215_SCEventRun_runningActionsCount = window.obj215_SCEventRun_runningActionsCount - 1;

if (window.obj215_SCEventRun_runningActionsCount == 0) {
	obj215_SCEventRun_actionGroup3();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj228 
(function(){
	window.obj215_SCEventRun_runningActionsCount = obj215_SCEventRun_runningActionsCount + 1;


	var element = "#obj228";
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
				window.obj215_SCEventRun_runningActionsCount = window.obj215_SCEventRun_runningActionsCount - 1;

if (window.obj215_SCEventRun_runningActionsCount == 0) {
	obj215_SCEventRun_actionGroup3();
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
			window.obj215_SCEventRun_runningActionsCount = window.obj215_SCEventRun_runningActionsCount - 1;

if (window.obj215_SCEventRun_runningActionsCount == 0) {
	obj215_SCEventRun_actionGroup3();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj230 
(function(){
	window.obj215_SCEventRun_runningActionsCount = obj215_SCEventRun_runningActionsCount + 1;


	var element = "#obj230";
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
				window.obj215_SCEventRun_runningActionsCount = window.obj215_SCEventRun_runningActionsCount - 1;

if (window.obj215_SCEventRun_runningActionsCount == 0) {
	obj215_SCEventRun_actionGroup3();
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
			window.obj215_SCEventRun_runningActionsCount = window.obj215_SCEventRun_runningActionsCount - 1;

if (window.obj215_SCEventRun_runningActionsCount == 0) {
	obj215_SCEventRun_actionGroup3();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();









//	action: playAudioFile
playAudioFile_1346();
function playAudioFile_1346() {
	window.obj215_SCEventRun_runningActionsCount = obj215_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1346")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1346");
			$("#obj_audio_playSoundFile1346").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj215_SCEventRun_runningActionsCount = window.obj215_SCEventRun_runningActionsCount - 1;

if (window.obj215_SCEventRun_runningActionsCount == 0) {
	obj215_SCEventRun_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj215_SCEventRun_runningActionsCount = window.obj215_SCEventRun_runningActionsCount - 1;

if (window.obj215_SCEventRun_runningActionsCount == 0) {
	obj215_SCEventRun_actionGroup3();
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
				window.obj215_SCEventRun_runningActionsCount = window.obj215_SCEventRun_runningActionsCount - 1;

if (window.obj215_SCEventRun_runningActionsCount == 0) {
	obj215_SCEventRun_actionGroup3();
}
			}, false);
		} else {
			window.obj215_SCEventRun_runningActionsCount = window.obj215_SCEventRun_runningActionsCount - 1;

if (window.obj215_SCEventRun_runningActionsCount == 0) {
	obj215_SCEventRun_actionGroup3();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_1347();
function runjs_1347() {
	window.obj215_SCEventRun_runningActionsCount = obj215_SCEventRun_runningActionsCount + 1;


	localStorage.setItem("ready", "false");

	setTimeout(function() {
		window.obj215_SCEventRun_runningActionsCount = window.obj215_SCEventRun_runningActionsCount - 1;

if (window.obj215_SCEventRun_runningActionsCount == 0) {
	obj215_SCEventRun_actionGroup3();
}
	}, 1);
}












};
obj215_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj215_SCEventRun_activeActionGroupIndex = -1;
		$("#obj215").trigger("obj215_SCEventRun_ended");
		
		return;
	}
	window.obj215_SCEventRun_activeActionGroupIndex = 3;
	





























//	action: Run JavaScript
runjs_1348();
function runjs_1348() {
	window.obj215_SCEventRun_runningActionsCount = obj215_SCEventRun_runningActionsCount + 1;


	localStorage.setItem("ready", "true");

	setTimeout(function() {
		window.obj215_SCEventRun_runningActionsCount = window.obj215_SCEventRun_runningActionsCount - 1;

if (window.obj215_SCEventRun_runningActionsCount == 0) {
	obj215_SCEventRun_actionGroup4();
}
	}, 1);
}
//	action: Run JavaScript
runjs_247();
function runjs_247() {
	window.obj215_SCEventRun_runningActionsCount = obj215_SCEventRun_runningActionsCount + 1;


	localStorage.setItem("tut", "false");

	setTimeout(function() {
		window.obj215_SCEventRun_runningActionsCount = window.obj215_SCEventRun_runningActionsCount - 1;

if (window.obj215_SCEventRun_runningActionsCount == 0) {
	obj215_SCEventRun_actionGroup4();
}
	}, 1);
}












};
obj215_SCEventRun_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj215_SCEventRun_activeActionGroupIndex = -1;
		$("#obj215").trigger("obj215_SCEventRun_ended");
		
		return;
	}
	window.obj215_SCEventRun_activeActionGroupIndex = 4;
	










































};
obj221_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj221_SCEventRun_activeActionGroupIndex = -1;
		$("#obj221").trigger("obj221_SCEventRun_ended");
		
		return;
	}
	window.obj221_SCEventRun_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj217 
move_223();
function move_223() {
	window.obj221_SCEventRun_runningActionsCount = obj221_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj217");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-26";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj221_SCEventRun_runningActionsCount = window.obj221_SCEventRun_runningActionsCount - 1;

if (window.obj221_SCEventRun_runningActionsCount == 0) {
	obj221_SCEventRun_actionGroup1();
}
		}, 1);
	});
}






































};
obj221_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj221_SCEventRun_activeActionGroupIndex = -1;
		$("#obj221").trigger("obj221_SCEventRun_ended");
		
		return;
	}
	window.obj221_SCEventRun_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj217 
move_225();
function move_225() {
	window.obj221_SCEventRun_runningActionsCount = obj221_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj217");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 0;
	var moveY = 0;
	var isMoveBack = true;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj221_SCEventRun_runningActionsCount = window.obj221_SCEventRun_runningActionsCount - 1;

if (window.obj221_SCEventRun_runningActionsCount == 0) {
	obj221_SCEventRun_actionGroup2();
}
		}, 1);
	});
}






































};
obj221_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj221_SCEventRun_activeActionGroupIndex = -1;
		$("#obj221").trigger("obj221_SCEventRun_ended");
		
		return;
	}
	window.obj221_SCEventRun_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj221_SCEventRun();
function loop_obj221_SCEventRun() {

	var loopCount = 0;

	window.obj221_SCEventRun_loopCount = window.obj221_SCEventRun_loopCount + 1;
	if (loopCount != 0 && window.obj221_SCEventRun_loopCount > loopCount) {
		window.obj221_SCEventRun_loopCount = 0
		obj221_SCEventRun_actionGroup3();
	} else {
		obj221_SCEventRun_actionGroup0();
	}

}


























};
obj221_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj221_SCEventRun_activeActionGroupIndex = -1;
		$("#obj221").trigger("obj221_SCEventRun_ended");
		
		return;
	}
	window.obj221_SCEventRun_activeActionGroupIndex = 3;
	










































};
obj283_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj283_SCEventRun_activeActionGroupIndex = -1;
		$("#obj283").trigger("obj283_SCEventRun_ended");
		
		return;
	}
	window.obj283_SCEventRun_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj202 
move_285();
function move_285() {
	window.obj283_SCEventRun_runningActionsCount = obj283_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj202");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=15";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 100, easing, function() {
		setTimeout(function() {
			window.obj283_SCEventRun_runningActionsCount = window.obj283_SCEventRun_runningActionsCount - 1;

if (window.obj283_SCEventRun_runningActionsCount == 0) {
	obj283_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj202 
move_286();
function move_286() {
	window.obj283_SCEventRun_runningActionsCount = obj283_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj202");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-30";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 200, easing, function() {
		setTimeout(function() {
			window.obj283_SCEventRun_runningActionsCount = window.obj283_SCEventRun_runningActionsCount - 1;

if (window.obj283_SCEventRun_runningActionsCount == 0) {
	obj283_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj202 
move_291();
function move_291() {
	window.obj283_SCEventRun_runningActionsCount = obj283_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj202");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 362;
	var moveY = 785;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 100, easing, function() {
		setTimeout(function() {
			window.obj283_SCEventRun_runningActionsCount = window.obj283_SCEventRun_runningActionsCount - 1;

if (window.obj283_SCEventRun_runningActionsCount == 0) {
	obj283_SCEventRun_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1461();
function playAudioFile_1461() {
	window.obj283_SCEventRun_runningActionsCount = obj283_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1461")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1461");
			$("#obj_audio_playSoundFile1461").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj283_SCEventRun_runningActionsCount = window.obj283_SCEventRun_runningActionsCount - 1;

if (window.obj283_SCEventRun_runningActionsCount == 0) {
	obj283_SCEventRun_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj283_SCEventRun_runningActionsCount = window.obj283_SCEventRun_runningActionsCount - 1;

if (window.obj283_SCEventRun_runningActionsCount == 0) {
	obj283_SCEventRun_actionGroup1();
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
				window.obj283_SCEventRun_runningActionsCount = window.obj283_SCEventRun_runningActionsCount - 1;

if (window.obj283_SCEventRun_runningActionsCount == 0) {
	obj283_SCEventRun_actionGroup1();
}
			}, false);
		} else {
			window.obj283_SCEventRun_runningActionsCount = window.obj283_SCEventRun_runningActionsCount - 1;

if (window.obj283_SCEventRun_runningActionsCount == 0) {
	obj283_SCEventRun_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_1349();
function runjs_1349() {
	window.obj283_SCEventRun_runningActionsCount = obj283_SCEventRun_runningActionsCount + 1;


	localStorage.setItem("ready", "false");

	setTimeout(function() {
		window.obj283_SCEventRun_runningActionsCount = window.obj283_SCEventRun_runningActionsCount - 1;

if (window.obj283_SCEventRun_runningActionsCount == 0) {
	obj283_SCEventRun_actionGroup1();
}
	}, 1);
}












};
obj283_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj283_SCEventRun_activeActionGroupIndex = -1;
		$("#obj283").trigger("obj283_SCEventRun_ended");
		
		return;
	}
	window.obj283_SCEventRun_activeActionGroupIndex = 1;
	


//	action: show 
//	target: obj295 
(function(){
	window.obj283_SCEventRun_runningActionsCount = obj283_SCEventRun_runningActionsCount + 1;


	var element = "#obj295";
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
				window.obj283_SCEventRun_runningActionsCount = window.obj283_SCEventRun_runningActionsCount - 1;

if (window.obj283_SCEventRun_runningActionsCount == 0) {
	obj283_SCEventRun_actionGroup2();
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
			window.obj283_SCEventRun_runningActionsCount = window.obj283_SCEventRun_runningActionsCount - 1;

if (window.obj283_SCEventRun_runningActionsCount == 0) {
	obj283_SCEventRun_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj297 
(function(){
	window.obj283_SCEventRun_runningActionsCount = obj283_SCEventRun_runningActionsCount + 1;


	var element = "#obj297";
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
				window.obj283_SCEventRun_runningActionsCount = window.obj283_SCEventRun_runningActionsCount - 1;

if (window.obj283_SCEventRun_runningActionsCount == 0) {
	obj283_SCEventRun_actionGroup2();
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
			window.obj283_SCEventRun_runningActionsCount = window.obj283_SCEventRun_runningActionsCount - 1;

if (window.obj283_SCEventRun_runningActionsCount == 0) {
	obj283_SCEventRun_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj299 
(function(){
	window.obj283_SCEventRun_runningActionsCount = obj283_SCEventRun_runningActionsCount + 1;


	var element = "#obj299";
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
				window.obj283_SCEventRun_runningActionsCount = window.obj283_SCEventRun_runningActionsCount - 1;

if (window.obj283_SCEventRun_runningActionsCount == 0) {
	obj283_SCEventRun_actionGroup2();
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
			window.obj283_SCEventRun_runningActionsCount = window.obj283_SCEventRun_runningActionsCount - 1;

if (window.obj283_SCEventRun_runningActionsCount == 0) {
	obj283_SCEventRun_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();









//	action: playAudioFile
playAudioFile_1351();
function playAudioFile_1351() {
	window.obj283_SCEventRun_runningActionsCount = obj283_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1351")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1351");
			$("#obj_audio_playSoundFile1351").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj283_SCEventRun_runningActionsCount = window.obj283_SCEventRun_runningActionsCount - 1;

if (window.obj283_SCEventRun_runningActionsCount == 0) {
	obj283_SCEventRun_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj283_SCEventRun_runningActionsCount = window.obj283_SCEventRun_runningActionsCount - 1;

if (window.obj283_SCEventRun_runningActionsCount == 0) {
	obj283_SCEventRun_actionGroup2();
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
				window.obj283_SCEventRun_runningActionsCount = window.obj283_SCEventRun_runningActionsCount - 1;

if (window.obj283_SCEventRun_runningActionsCount == 0) {
	obj283_SCEventRun_actionGroup2();
}
			}, false);
		} else {
			window.obj283_SCEventRun_runningActionsCount = window.obj283_SCEventRun_runningActionsCount - 1;

if (window.obj283_SCEventRun_runningActionsCount == 0) {
	obj283_SCEventRun_actionGroup2();
}
		}
	}

	
	
	
}




































};
obj283_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj283_SCEventRun_activeActionGroupIndex = -1;
		$("#obj283").trigger("obj283_SCEventRun_ended");
		
		return;
	}
	window.obj283_SCEventRun_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_1350();
function runjs_1350() {
	window.obj283_SCEventRun_runningActionsCount = obj283_SCEventRun_runningActionsCount + 1;


	localStorage.setItem("ready", "true");

	setTimeout(function() {
		window.obj283_SCEventRun_runningActionsCount = window.obj283_SCEventRun_runningActionsCount - 1;

if (window.obj283_SCEventRun_runningActionsCount == 0) {
	obj283_SCEventRun_actionGroup3();
}
	}, 1);
}












};
obj283_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj283_SCEventRun_activeActionGroupIndex = -1;
		$("#obj283").trigger("obj283_SCEventRun_ended");
		
		return;
	}
	window.obj283_SCEventRun_activeActionGroupIndex = 3;
	
















//	action: wait
wait_304();
function wait_304() {
	window.obj283_SCEventRun_runningActionsCount = obj283_SCEventRun_runningActionsCount + 1;

	setTimeout(function() {
		window.obj283_SCEventRun_runningActionsCount = window.obj283_SCEventRun_runningActionsCount - 1;

if (window.obj283_SCEventRun_runningActionsCount == 0) {
	obj283_SCEventRun_actionGroup4();
}
	}, 1000);
}

























};
obj283_SCEventRun_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj283_SCEventRun_activeActionGroupIndex = -1;
		$("#obj283").trigger("obj283_SCEventRun_ended");
		
		return;
	}
	window.obj283_SCEventRun_activeActionGroupIndex = 4;
	

//	action: hide
//	target: obj295 
hide_305();
function hide_305() {
	var element = "#obj295";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj283_SCEventRun_runningActionsCount = obj283_SCEventRun_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj283_SCEventRun_runningActionsCount = window.obj283_SCEventRun_runningActionsCount - 1;

if (window.obj283_SCEventRun_runningActionsCount == 0) {
	obj283_SCEventRun_actionGroup5();
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
		setTimeout(hide_305(), 100);
		return;
	}

	setTimeout(function() {
		$(element).css("display", "none");
		window.obj283_SCEventRun_runningActionsCount = window.obj283_SCEventRun_runningActionsCount - 1;

if (window.obj283_SCEventRun_runningActionsCount == 0) {
	obj283_SCEventRun_actionGroup5();
}
	}, animationDurationMs);

	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)

}
//	action: hide
//	target: obj297 
hide_306();
function hide_306() {
	var element = "#obj297";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj283_SCEventRun_runningActionsCount = obj283_SCEventRun_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj283_SCEventRun_runningActionsCount = window.obj283_SCEventRun_runningActionsCount - 1;

if (window.obj283_SCEventRun_runningActionsCount == 0) {
	obj283_SCEventRun_actionGroup5();
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
		setTimeout(hide_306(), 100);
		return;
	}

	setTimeout(function() {
		$(element).css("display", "none");
		window.obj283_SCEventRun_runningActionsCount = window.obj283_SCEventRun_runningActionsCount - 1;

if (window.obj283_SCEventRun_runningActionsCount == 0) {
	obj283_SCEventRun_actionGroup5();
}
	}, animationDurationMs);

	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)

}
//	action: hide
//	target: obj299 
hide_307();
function hide_307() {
	var element = "#obj299";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj283_SCEventRun_runningActionsCount = obj283_SCEventRun_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj283_SCEventRun_runningActionsCount = window.obj283_SCEventRun_runningActionsCount - 1;

if (window.obj283_SCEventRun_runningActionsCount == 0) {
	obj283_SCEventRun_actionGroup5();
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
		setTimeout(hide_307(), 100);
		return;
	}

	setTimeout(function() {
		$(element).css("display", "none");
		window.obj283_SCEventRun_runningActionsCount = window.obj283_SCEventRun_runningActionsCount - 1;

if (window.obj283_SCEventRun_runningActionsCount == 0) {
	obj283_SCEventRun_actionGroup5();
}
	}, animationDurationMs);

	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)

}








































};
obj283_SCEventRun_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj283_SCEventRun_activeActionGroupIndex = -1;
		$("#obj283").trigger("obj283_SCEventRun_ended");
		
		return;
	}
	window.obj283_SCEventRun_activeActionGroupIndex = 5;
	










































};
obj308_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj308_SCEventRun_activeActionGroupIndex = -1;
		$("#obj308").trigger("obj308_SCEventRun_ended");
		
		return;
	}
	window.obj308_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj295 
hide_318();
function hide_318() {
	var element = "#obj295";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj308_SCEventRun_runningActionsCount = obj308_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj308_SCEventRun_runningActionsCount = window.obj308_SCEventRun_runningActionsCount - 1;

if (window.obj308_SCEventRun_runningActionsCount == 0) {
	obj308_SCEventRun_actionGroup1();
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
		setTimeout(hide_318(), 100);
		return;
	}

	setTimeout(function() {
		$(element).css("display", "none");
		window.obj308_SCEventRun_runningActionsCount = window.obj308_SCEventRun_runningActionsCount - 1;

if (window.obj308_SCEventRun_runningActionsCount == 0) {
	obj308_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)

}
//	action: hide
//	target: obj297 
hide_322();
function hide_322() {
	var element = "#obj297";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj308_SCEventRun_runningActionsCount = obj308_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj308_SCEventRun_runningActionsCount = window.obj308_SCEventRun_runningActionsCount - 1;

if (window.obj308_SCEventRun_runningActionsCount == 0) {
	obj308_SCEventRun_actionGroup1();
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
		setTimeout(hide_322(), 100);
		return;
	}

	setTimeout(function() {
		$(element).css("display", "none");
		window.obj308_SCEventRun_runningActionsCount = window.obj308_SCEventRun_runningActionsCount - 1;

if (window.obj308_SCEventRun_runningActionsCount == 0) {
	obj308_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)

}
//	action: hide
//	target: obj299 
hide_323();
function hide_323() {
	var element = "#obj299";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj308_SCEventRun_runningActionsCount = obj308_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj308_SCEventRun_runningActionsCount = window.obj308_SCEventRun_runningActionsCount - 1;

if (window.obj308_SCEventRun_runningActionsCount == 0) {
	obj308_SCEventRun_actionGroup1();
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
		setTimeout(hide_323(), 100);
		return;
	}

	setTimeout(function() {
		$(element).css("display", "none");
		window.obj308_SCEventRun_runningActionsCount = window.obj308_SCEventRun_runningActionsCount - 1;

if (window.obj308_SCEventRun_runningActionsCount == 0) {
	obj308_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)

}










//	action: playAudioFile
playAudioFile_1462();
function playAudioFile_1462() {
	window.obj308_SCEventRun_runningActionsCount = obj308_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1462")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1462");
			$("#obj_audio_playSoundFile1462").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj308_SCEventRun_runningActionsCount = window.obj308_SCEventRun_runningActionsCount - 1;

if (window.obj308_SCEventRun_runningActionsCount == 0) {
	obj308_SCEventRun_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj308_SCEventRun_runningActionsCount = window.obj308_SCEventRun_runningActionsCount - 1;

if (window.obj308_SCEventRun_runningActionsCount == 0) {
	obj308_SCEventRun_actionGroup1();
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
				window.obj308_SCEventRun_runningActionsCount = window.obj308_SCEventRun_runningActionsCount - 1;

if (window.obj308_SCEventRun_runningActionsCount == 0) {
	obj308_SCEventRun_actionGroup1();
}
			}, false);
		} else {
			window.obj308_SCEventRun_runningActionsCount = window.obj308_SCEventRun_runningActionsCount - 1;

if (window.obj308_SCEventRun_runningActionsCount == 0) {
	obj308_SCEventRun_actionGroup1();
}
		}
	}

	
	
	
}




































};
obj308_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj308_SCEventRun_activeActionGroupIndex = -1;
		$("#obj308").trigger("obj308_SCEventRun_ended");
		
		return;
	}
	window.obj308_SCEventRun_activeActionGroupIndex = 1;
	


//	action: show 
//	target: obj310 
(function(){
	window.obj308_SCEventRun_runningActionsCount = obj308_SCEventRun_runningActionsCount + 1;


	var element = "#obj310";
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
				window.obj308_SCEventRun_runningActionsCount = window.obj308_SCEventRun_runningActionsCount - 1;

if (window.obj308_SCEventRun_runningActionsCount == 0) {
	obj308_SCEventRun_actionGroup2();
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
			window.obj308_SCEventRun_runningActionsCount = window.obj308_SCEventRun_runningActionsCount - 1;

if (window.obj308_SCEventRun_runningActionsCount == 0) {
	obj308_SCEventRun_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj316 
(function(){
	window.obj308_SCEventRun_runningActionsCount = obj308_SCEventRun_runningActionsCount + 1;


	var element = "#obj316";
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
				window.obj308_SCEventRun_runningActionsCount = window.obj308_SCEventRun_runningActionsCount - 1;

if (window.obj308_SCEventRun_runningActionsCount == 0) {
	obj308_SCEventRun_actionGroup2();
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
			window.obj308_SCEventRun_runningActionsCount = window.obj308_SCEventRun_runningActionsCount - 1;

if (window.obj308_SCEventRun_runningActionsCount == 0) {
	obj308_SCEventRun_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj312 
(function(){
	window.obj308_SCEventRun_runningActionsCount = obj308_SCEventRun_runningActionsCount + 1;


	var element = "#obj312";
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
				window.obj308_SCEventRun_runningActionsCount = window.obj308_SCEventRun_runningActionsCount - 1;

if (window.obj308_SCEventRun_runningActionsCount == 0) {
	obj308_SCEventRun_actionGroup2();
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
			window.obj308_SCEventRun_runningActionsCount = window.obj308_SCEventRun_runningActionsCount - 1;

if (window.obj308_SCEventRun_runningActionsCount == 0) {
	obj308_SCEventRun_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj325 
(function(){
	window.obj308_SCEventRun_runningActionsCount = obj308_SCEventRun_runningActionsCount + 1;


	var element = "#obj325";
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
				window.obj308_SCEventRun_runningActionsCount = window.obj308_SCEventRun_runningActionsCount - 1;

if (window.obj308_SCEventRun_runningActionsCount == 0) {
	obj308_SCEventRun_actionGroup2();
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
			window.obj308_SCEventRun_runningActionsCount = window.obj308_SCEventRun_runningActionsCount - 1;

if (window.obj308_SCEventRun_runningActionsCount == 0) {
	obj308_SCEventRun_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj351 
(function(){
	window.obj308_SCEventRun_runningActionsCount = obj308_SCEventRun_runningActionsCount + 1;


	var element = "#obj351";
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
				window.obj308_SCEventRun_runningActionsCount = window.obj308_SCEventRun_runningActionsCount - 1;

if (window.obj308_SCEventRun_runningActionsCount == 0) {
	obj308_SCEventRun_actionGroup2();
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
			window.obj308_SCEventRun_runningActionsCount = window.obj308_SCEventRun_runningActionsCount - 1;

if (window.obj308_SCEventRun_runningActionsCount == 0) {
	obj308_SCEventRun_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj354 
(function(){
	window.obj308_SCEventRun_runningActionsCount = obj308_SCEventRun_runningActionsCount + 1;


	var element = "#obj354";
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
				window.obj308_SCEventRun_runningActionsCount = window.obj308_SCEventRun_runningActionsCount - 1;

if (window.obj308_SCEventRun_runningActionsCount == 0) {
	obj308_SCEventRun_actionGroup2();
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
			window.obj308_SCEventRun_runningActionsCount = window.obj308_SCEventRun_runningActionsCount - 1;

if (window.obj308_SCEventRun_runningActionsCount == 0) {
	obj308_SCEventRun_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: move
//	target: obj198 
move_341();
function move_341() {
	window.obj308_SCEventRun_runningActionsCount = obj308_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj198");
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
			window.obj308_SCEventRun_runningActionsCount = window.obj308_SCEventRun_runningActionsCount - 1;

if (window.obj308_SCEventRun_runningActionsCount == 0) {
	obj308_SCEventRun_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj198 
move_342();
function move_342() {
	window.obj308_SCEventRun_runningActionsCount = obj308_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj198");
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
			window.obj308_SCEventRun_runningActionsCount = window.obj308_SCEventRun_runningActionsCount - 1;

if (window.obj308_SCEventRun_runningActionsCount == 0) {
	obj308_SCEventRun_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj198 
move_343();
function move_343() {
	window.obj308_SCEventRun_runningActionsCount = obj308_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj198");
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
			window.obj308_SCEventRun_runningActionsCount = window.obj308_SCEventRun_runningActionsCount - 1;

if (window.obj308_SCEventRun_runningActionsCount == 0) {
	obj308_SCEventRun_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj198 
move_344();
function move_344() {
	window.obj308_SCEventRun_runningActionsCount = obj308_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj198");
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
			window.obj308_SCEventRun_runningActionsCount = window.obj308_SCEventRun_runningActionsCount - 1;

if (window.obj308_SCEventRun_runningActionsCount == 0) {
	obj308_SCEventRun_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj329 
move_333();
function move_333() {
	window.obj308_SCEventRun_runningActionsCount = obj308_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj329");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-125";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 3000, easing, function() {
		setTimeout(function() {
			window.obj308_SCEventRun_runningActionsCount = window.obj308_SCEventRun_runningActionsCount - 1;

if (window.obj308_SCEventRun_runningActionsCount == 0) {
	obj308_SCEventRun_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj330 
move_334();
function move_334() {
	window.obj308_SCEventRun_runningActionsCount = obj308_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj330");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-5";
	var moveY = "+=-187";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 3000, easing, function() {
		setTimeout(function() {
			window.obj308_SCEventRun_runningActionsCount = window.obj308_SCEventRun_runningActionsCount - 1;

if (window.obj308_SCEventRun_runningActionsCount == 0) {
	obj308_SCEventRun_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj273 
move_349();
function move_349() {
	window.obj308_SCEventRun_runningActionsCount = obj308_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj273");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-101";
	var moveY = "+=5";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj308_SCEventRun_runningActionsCount = window.obj308_SCEventRun_runningActionsCount - 1;

if (window.obj308_SCEventRun_runningActionsCount == 0) {
	obj308_SCEventRun_actionGroup2();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1412();
function playAudioFile_1412() {
	window.obj308_SCEventRun_runningActionsCount = obj308_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1412")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1412");
			$("#obj_audio_playSoundFile1412").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj308_SCEventRun_runningActionsCount = window.obj308_SCEventRun_runningActionsCount - 1;

if (window.obj308_SCEventRun_runningActionsCount == 0) {
	obj308_SCEventRun_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj308_SCEventRun_runningActionsCount = window.obj308_SCEventRun_runningActionsCount - 1;

if (window.obj308_SCEventRun_runningActionsCount == 0) {
	obj308_SCEventRun_actionGroup2();
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
				window.obj308_SCEventRun_runningActionsCount = window.obj308_SCEventRun_runningActionsCount - 1;

if (window.obj308_SCEventRun_runningActionsCount == 0) {
	obj308_SCEventRun_actionGroup2();
}
			}, false);
		} else {
			window.obj308_SCEventRun_runningActionsCount = window.obj308_SCEventRun_runningActionsCount - 1;

if (window.obj308_SCEventRun_runningActionsCount == 0) {
	obj308_SCEventRun_actionGroup2();
}
		}
	}

	
	
	
}






//	action: playAudioFile
playAudioFile_1354();
function playAudioFile_1354() {
	window.obj308_SCEventRun_runningActionsCount = obj308_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1354")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1354");
			$("#obj_audio_playSoundFile1354").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj308_SCEventRun_runningActionsCount = window.obj308_SCEventRun_runningActionsCount - 1;

if (window.obj308_SCEventRun_runningActionsCount == 0) {
	obj308_SCEventRun_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj308_SCEventRun_runningActionsCount = window.obj308_SCEventRun_runningActionsCount - 1;

if (window.obj308_SCEventRun_runningActionsCount == 0) {
	obj308_SCEventRun_actionGroup2();
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
				window.obj308_SCEventRun_runningActionsCount = window.obj308_SCEventRun_runningActionsCount - 1;

if (window.obj308_SCEventRun_runningActionsCount == 0) {
	obj308_SCEventRun_actionGroup2();
}
			}, false);
		} else {
			window.obj308_SCEventRun_runningActionsCount = window.obj308_SCEventRun_runningActionsCount - 1;

if (window.obj308_SCEventRun_runningActionsCount == 0) {
	obj308_SCEventRun_actionGroup2();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_1352();
function runjs_1352() {
	window.obj308_SCEventRun_runningActionsCount = obj308_SCEventRun_runningActionsCount + 1;


	localStorage.setItem("ready", "false");

	setTimeout(function() {
		window.obj308_SCEventRun_runningActionsCount = window.obj308_SCEventRun_runningActionsCount - 1;

if (window.obj308_SCEventRun_runningActionsCount == 0) {
	obj308_SCEventRun_actionGroup2();
}
	}, 1);
}












};
obj308_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj308_SCEventRun_activeActionGroupIndex = -1;
		$("#obj308").trigger("obj308_SCEventRun_ended");
		
		return;
	}
	window.obj308_SCEventRun_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_1353();
function runjs_1353() {
	window.obj308_SCEventRun_runningActionsCount = obj308_SCEventRun_runningActionsCount + 1;


	localStorage.setItem("ready", "true");

	setTimeout(function() {
		window.obj308_SCEventRun_runningActionsCount = window.obj308_SCEventRun_runningActionsCount - 1;

if (window.obj308_SCEventRun_runningActionsCount == 0) {
	obj308_SCEventRun_actionGroup3();
}
	}, 1);
}












};
obj308_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj308_SCEventRun_activeActionGroupIndex = -1;
		$("#obj308").trigger("obj308_SCEventRun_ended");
		
		return;
	}
	window.obj308_SCEventRun_activeActionGroupIndex = 3;
	





























//	action: Run JavaScript
runjs_335();
function runjs_335() {
	window.obj308_SCEventRun_runningActionsCount = obj308_SCEventRun_runningActionsCount + 1;


	localStorage.setItem("tut", "true");

	setTimeout(function() {
		window.obj308_SCEventRun_runningActionsCount = window.obj308_SCEventRun_runningActionsCount - 1;

if (window.obj308_SCEventRun_runningActionsCount == 0) {
	obj308_SCEventRun_actionGroup4();
}
	}, 1);
}












};
obj308_SCEventRun_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj308_SCEventRun_activeActionGroupIndex = -1;
		$("#obj308").trigger("obj308_SCEventRun_ended");
		
		return;
	}
	window.obj308_SCEventRun_activeActionGroupIndex = 4;
	










































};
obj357_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj357_SCEventRun_activeActionGroupIndex = -1;
		$("#obj357").trigger("obj357_SCEventRun_ended");
		
		return;
	}
	window.obj357_SCEventRun_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj359 
move_361();
function move_361() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj359");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=85";
	var moveY = "+=-70";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 700, easing, function() {
		setTimeout(function() {
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj359 
move_362();
function move_362() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj359");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=125";
	var moveY = "+=-39";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 700, easing, function() {
		setTimeout(function() {
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj359 
move_363();
function move_363() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj359");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=162";
	var moveY = "+=22";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 700, easing, function() {
		setTimeout(function() {
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup1();
}
		}, 1);
	});
}

























//	action: Run JavaScript
runjs_494();
function runjs_494() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;


	if(localStorage.getItem("tut") === "false")
{
    $("#obj359").fadeOut(1000);
}
else
{
    $("#obj359").show(0);
}

	setTimeout(function() {
		window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup1();
}
	}, 1);
}












};
obj357_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj357_SCEventRun_activeActionGroupIndex = -1;
		$("#obj357").trigger("obj357_SCEventRun_ended");
		
		return;
	}
	window.obj357_SCEventRun_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj359 
move_509();
function move_509() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj359");
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
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj359 
move_510();
function move_510() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj359");
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
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj359 
move_511();
function move_511() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj359");
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
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj359 
move_512();
function move_512() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj359");
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
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup2();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1411();
function playAudioFile_1411() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1411")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1411");
			$("#obj_audio_playSoundFile1411").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup2();
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
				window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup2();
}
			}, false);
		} else {
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup2();
}
		}
	}

	
	
	
}






//	action: playAudioFile
playAudioFile_1339();
function playAudioFile_1339() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1339")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1339");
			$("#obj_audio_playSoundFile1339").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup2();
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
				window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup2();
}
			}, false);
		} else {
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup2();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_495();
function runjs_495() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;


	if(localStorage.getItem("tut") === "false")
{
    $("#obj364").fadeOut(1000);
    $("#obj366").fadeOut(1000);
    $("#obj368").fadeOut(1000);
    $("#obj370").fadeOut(1000);
    $("#obj373").fadeOut(1000);
    $("#obj375").fadeOut(1000);
}
else
{
    $("#obj364").fadeIn(1000);
    $("#obj366").fadeIn(1000);
    $("#obj368").fadeIn(1000);
    $("#obj370").fadeIn(1000);
    $("#obj373").fadeIn(1000);
    $("#obj375").fadeIn(1000);
}
localStorage.setItem("ready", "false");

	setTimeout(function() {
		window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup2();
}
	}, 1);
}












};
obj357_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj357_SCEventRun_activeActionGroupIndex = -1;
		$("#obj357").trigger("obj357_SCEventRun_ended");
		
		return;
	}
	window.obj357_SCEventRun_activeActionGroupIndex = 2;
	
















//	action: wait
wait_508();
function wait_508() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;

	setTimeout(function() {
		window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup3();
}
	}, 1000);
}

























};
obj357_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj357_SCEventRun_activeActionGroupIndex = -1;
		$("#obj357").trigger("obj357_SCEventRun_ended");
		
		return;
	}
	window.obj357_SCEventRun_activeActionGroupIndex = 3;
	












//	action: playAudioFile
playAudioFile_1341();
function playAudioFile_1341() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1341")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1341");
			$("#obj_audio_playSoundFile1341").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup4();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup4();
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
				window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup4();
}
			}, false);
		} else {
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup4();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_496();
function runjs_496() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;


	if(localStorage.getItem("tut") === "false")
{
    $("#obj383").fadeOut(1000);
    $("#obj385").fadeOut(1000);
    $("#obj387").fadeOut(1000);
    $("#obj389").fadeOut(1000);
    $("#obj407").fadeOut(1000);
}
else
{
    $("#obj383").fadeIn(1000);
    $("#obj385").fadeIn(1000);
    $("#obj387").fadeIn(1000);
    $("#obj389").fadeIn(1000);
    $("#obj407").fadeIn(1000);
}

	setTimeout(function() {
		window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup4();
}
	}, 1);
}












};
obj357_SCEventRun_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj357_SCEventRun_activeActionGroupIndex = -1;
		$("#obj357").trigger("obj357_SCEventRun_ended");
		
		return;
	}
	window.obj357_SCEventRun_activeActionGroupIndex = 4;
	












//	action: playAudioFile
playAudioFile_1453();
function playAudioFile_1453() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1453")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1453");
			$("#obj_audio_playSoundFile1453").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup5();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup5();
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
				window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup5();
}
			}, false);
		} else {
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup5();
}
		}
	}

	
	
	
}












//	action: scale
//	target: obj407 
scale_410();
function scale_410() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj407";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj407';
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
		scale_410_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_410_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_410_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_410_completed() {
	setTimeout(function() {
		window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup5();
}
	}, 1);
}











//	action: Run JavaScript
runjs_497();
function runjs_497() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;


	if(localStorage.getItem("tut") === "false")
{
    $("#obj269").fadeOut(1000);
}
else
{
    $("#obj269").show(0);
}

	setTimeout(function() {
		window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup5();
}
	}, 1);
}












};
obj357_SCEventRun_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj357_SCEventRun_activeActionGroupIndex = -1;
		$("#obj357").trigger("obj357_SCEventRun_ended");
		
		return;
	}
	window.obj357_SCEventRun_activeActionGroupIndex = 5;
	


















//	action: scale
//	target: obj407 
scale_411();
function scale_411() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj407";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj407';
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
		scale_411_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_411_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_411_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_411_completed() {
	setTimeout(function() {
		window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup6();
}
	}, 1);
}
























};
obj357_SCEventRun_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj357_SCEventRun_activeActionGroupIndex = -1;
		$("#obj357").trigger("obj357_SCEventRun_ended");
		
		return;
	}
	window.obj357_SCEventRun_activeActionGroupIndex = 6;
	


















//	action: scale
//	target: obj407 
scale_418();
function scale_418() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj407";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj407';
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
		scale_418_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_418_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_418_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_418_completed() {
	setTimeout(function() {
		window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup7();
}
	}, 1);
}
























};
obj357_SCEventRun_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj357_SCEventRun_activeActionGroupIndex = -1;
		$("#obj357").trigger("obj357_SCEventRun_ended");
		
		return;
	}
	window.obj357_SCEventRun_activeActionGroupIndex = 7;
	

//	action: hide
//	target: obj269 
hide_425();
function hide_425() {
	var element = "#obj269";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup8();
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
		setTimeout(hide_425(), 100);
		return;
	}

	setTimeout(function() {
		$(element).css("display", "none");
		window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup8();
}
	}, animationDurationMs);

	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)

}










//	action: playAudioFile
playAudioFile_1451();
function playAudioFile_1451() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1451")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1451");
			$("#obj_audio_playSoundFile1451").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup8();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup8();
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
				window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup8();
}
			}, false);
		} else {
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup8();
}
		}
	}

	
	
	
}












//	action: scale
//	target: obj407 
scale_420();
function scale_420() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj407";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj407';
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
		scale_420_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_420_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_420_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_420_completed() {
	setTimeout(function() {
		window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup8();
}
	}, 1);
}











//	action: Run JavaScript
runjs_498();
function runjs_498() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;


	if(localStorage.getItem("tut") === "false")
{
    $("#obj271").fadeOut(1000);
}
else
{
    $("#obj271").show(0);
}

	setTimeout(function() {
		window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup8();
}
	}, 1);
}












};
obj357_SCEventRun_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj357_SCEventRun_activeActionGroupIndex = -1;
		$("#obj357").trigger("obj357_SCEventRun_ended");
		
		return;
	}
	window.obj357_SCEventRun_activeActionGroupIndex = 8;
	


















//	action: scale
//	target: obj407 
scale_421();
function scale_421() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj407";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj407';
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
		scale_421_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_421_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_421_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_421_completed() {
	setTimeout(function() {
		window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup9();
}
	}, 1);
}
























};
obj357_SCEventRun_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj357_SCEventRun_activeActionGroupIndex = -1;
		$("#obj357").trigger("obj357_SCEventRun_ended");
		
		return;
	}
	window.obj357_SCEventRun_activeActionGroupIndex = 9;
	

//	action: hide
//	target: obj271 
hide_424();
function hide_424() {
	var element = "#obj271";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup10();
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
		setTimeout(hide_424(), 100);
		return;
	}

	setTimeout(function() {
		$(element).css("display", "none");
		window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup10();
}
	}, animationDurationMs);

	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)

}










//	action: playAudioFile
playAudioFile_1452();
function playAudioFile_1452() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1452")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1452");
			$("#obj_audio_playSoundFile1452").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup10();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup10();
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
				window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup10();
}
			}, false);
		} else {
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup10();
}
		}
	}

	
	
	
}












//	action: scale
//	target: obj407 
scale_423();
function scale_423() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj407";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj407';
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
		scale_423_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_423_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_423_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_423_completed() {
	setTimeout(function() {
		window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup10();
}
	}, 1);
}











//	action: Run JavaScript
runjs_499();
function runjs_499() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;


	if(localStorage.getItem("tut") === "false")
{
    $("#obj272").fadeOut(1000);
}
else
{
    $("#obj272").show(0);
}

	setTimeout(function() {
		window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup10();
}
	}, 1);
}












};
obj357_SCEventRun_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj357_SCEventRun_activeActionGroupIndex = -1;
		$("#obj357").trigger("obj357_SCEventRun_ended");
		
		return;
	}
	window.obj357_SCEventRun_activeActionGroupIndex = 10;
	












//	action: playAudioFile
playAudioFile_1342();
function playAudioFile_1342() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1342")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1342");
			$("#obj_audio_playSoundFile1342").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup11();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup11();
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
				window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup11();
}
			}, false);
		} else {
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup11();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_500();
function runjs_500() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;


	if(localStorage.getItem("tut") === "false")
{
    $("#obj396").fadeOut(1000);
    $("#obj391").fadeOut(1000);
}
else
{
    $("#obj396").fadeIn(1000);
    $("#obj391").fadeIn(1000);
}

	setTimeout(function() {
		window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup11();
}
	}, 1);
}












};
obj357_SCEventRun_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj357_SCEventRun_activeActionGroupIndex = -1;
		$("#obj357").trigger("obj357_SCEventRun_ended");
		
		return;
	}
	window.obj357_SCEventRun_activeActionGroupIndex = 11;
	


















//	action: scale
//	target: obj407 
scale_427();
function scale_427() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj407";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj407';
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
		scale_427_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_427_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_427_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_427_completed() {
	setTimeout(function() {
		window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup12();
}
	}, 1);
}
























};
obj357_SCEventRun_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj357_SCEventRun_activeActionGroupIndex = -1;
		$("#obj357").trigger("obj357_SCEventRun_ended");
		
		return;
	}
	window.obj357_SCEventRun_activeActionGroupIndex = 12;
	

//	action: hide
//	target: obj272 
hide_428();
function hide_428() {
	var element = "#obj272";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup13();
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
		setTimeout(hide_428(), 100);
		return;
	}

	setTimeout(function() {
		$(element).css("display", "none");
		window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup13();
}
	}, animationDurationMs);

	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)

}










//	action: playAudioFile
playAudioFile_1454();
function playAudioFile_1454() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1454")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1454");
			$("#obj_audio_playSoundFile1454").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup13();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup13();
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
				window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup13();
}
			}, false);
		} else {
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup13();
}
		}
	}

	
	
	
}












//	action: scale
//	target: obj407 
scale_430();
function scale_430() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj407";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj407';
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
		scale_430_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_430_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_430_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_430_completed() {
	setTimeout(function() {
		window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup13();
}
	}, 1);
}











//	action: Run JavaScript
runjs_501();
function runjs_501() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;


	if(localStorage.getItem("tut") === "false")
{
    $("#obj273").fadeOut(1000);
}
else
{
    $("#obj273").show(0);
}

	setTimeout(function() {
		window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup13();
}
	}, 1);
}












};
obj357_SCEventRun_actionGroup13 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj357_SCEventRun_activeActionGroupIndex = -1;
		$("#obj357").trigger("obj357_SCEventRun_ended");
		
		return;
	}
	window.obj357_SCEventRun_activeActionGroupIndex = 13;
	












//	action: playAudioFile
playAudioFile_1343();
function playAudioFile_1343() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1343")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1343");
			$("#obj_audio_playSoundFile1343").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup14();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup14();
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
				window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup14();
}
			}, false);
		} else {
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup14();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_502();
function runjs_502() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;


	if(localStorage.getItem("tut") === "false")
{
    $("#obj398").fadeOut(1000);
    $("#obj393").fadeOut(1000);
}
else
{
    $("#obj398").fadeIn(1000);
    $("#obj393").fadeIn(1000);
}

	setTimeout(function() {
		window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup14();
}
	}, 1);
}












};
obj357_SCEventRun_actionGroup14 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj357_SCEventRun_activeActionGroupIndex = -1;
		$("#obj357").trigger("obj357_SCEventRun_ended");
		
		return;
	}
	window.obj357_SCEventRun_activeActionGroupIndex = 14;
	


















//	action: scale
//	target: obj407 
scale_431();
function scale_431() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj407";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj407';
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
		scale_431_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_431_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_431_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_431_completed() {
	setTimeout(function() {
		window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup15();
}
	}, 1);
}
























};
obj357_SCEventRun_actionGroup15 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj357_SCEventRun_activeActionGroupIndex = -1;
		$("#obj357").trigger("obj357_SCEventRun_ended");
		
		return;
	}
	window.obj357_SCEventRun_activeActionGroupIndex = 15;
	

//	action: hide
//	target: obj273 
hide_432();
function hide_432() {
	var element = "#obj273";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup16();
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
		setTimeout(hide_432(), 100);
		return;
	}

	setTimeout(function() {
		$(element).css("display", "none");
		window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup16();
}
	}, animationDurationMs);

	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)

}










//	action: playAudioFile
playAudioFile_1455();
function playAudioFile_1455() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1455")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1455");
			$("#obj_audio_playSoundFile1455").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup16();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup16();
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
				window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup16();
}
			}, false);
		} else {
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup16();
}
		}
	}

	
	
	
}












//	action: scale
//	target: obj407 
scale_434();
function scale_434() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj407";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj407';
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
		scale_434_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_434_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_434_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_434_completed() {
	setTimeout(function() {
		window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup16();
}
	}, 1);
}











//	action: Run JavaScript
runjs_503();
function runjs_503() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;


	if(localStorage.getItem("tut") === "false")
{
    $("#obj274").fadeOut(1000);
}
else
{
    $("#obj274").show(0);
}

	setTimeout(function() {
		window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup16();
}
	}, 1);
}












};
obj357_SCEventRun_actionGroup16 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj357_SCEventRun_activeActionGroupIndex = -1;
		$("#obj357").trigger("obj357_SCEventRun_ended");
		
		return;
	}
	window.obj357_SCEventRun_activeActionGroupIndex = 16;
	


















//	action: scale
//	target: obj407 
scale_435();
function scale_435() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj407";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj407';
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
		scale_435_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_435_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_435_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_435_completed() {
	setTimeout(function() {
		window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup17();
}
	}, 1);
}
























};
obj357_SCEventRun_actionGroup17 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj357_SCEventRun_activeActionGroupIndex = -1;
		$("#obj357").trigger("obj357_SCEventRun_ended");
		
		return;
	}
	window.obj357_SCEventRun_activeActionGroupIndex = 17;
	

//	action: hide
//	target: obj274 
hide_436();
function hide_436() {
	var element = "#obj274";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup18();
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
		setTimeout(hide_436(), 100);
		return;
	}

	setTimeout(function() {
		$(element).css("display", "none");
		window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup18();
}
	}, animationDurationMs);

	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)

}










//	action: playAudioFile
playAudioFile_1456();
function playAudioFile_1456() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1456")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1456");
			$("#obj_audio_playSoundFile1456").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup18();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup18();
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
				window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup18();
}
			}, false);
		} else {
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup18();
}
		}
	}

	
	
	
}












//	action: scale
//	target: obj407 
scale_438();
function scale_438() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj407";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj407';
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
		scale_438_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_438_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_438_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_438_completed() {
	setTimeout(function() {
		window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup18();
}
	}, 1);
}











//	action: Run JavaScript
runjs_504();
function runjs_504() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;


	if(localStorage.getItem("tut") === "false")
{
    $("#obj275").fadeOut(1000);
}
else
{
    $("#obj275").show(0);
}

	setTimeout(function() {
		window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup18();
}
	}, 1);
}












};
obj357_SCEventRun_actionGroup18 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj357_SCEventRun_activeActionGroupIndex = -1;
		$("#obj357").trigger("obj357_SCEventRun_ended");
		
		return;
	}
	window.obj357_SCEventRun_activeActionGroupIndex = 18;
	



//	action: move
//	target: obj407 
move_443();
function move_443() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj407");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=365";
	var moveY = "+=16";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup19();
}
		}, 1);
	});
}






































};
obj357_SCEventRun_actionGroup19 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj357_SCEventRun_activeActionGroupIndex = -1;
		$("#obj357").trigger("obj357_SCEventRun_ended");
		
		return;
	}
	window.obj357_SCEventRun_activeActionGroupIndex = 19;
	


















//	action: scale
//	target: obj407 
scale_439();
function scale_439() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj407";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj407';
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
		scale_439_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_439_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_439_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_439_completed() {
	setTimeout(function() {
		window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup20();
}
	}, 1);
}
























};
obj357_SCEventRun_actionGroup20 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj357_SCEventRun_activeActionGroupIndex = -1;
		$("#obj357").trigger("obj357_SCEventRun_ended");
		
		return;
	}
	window.obj357_SCEventRun_activeActionGroupIndex = 20;
	



//	action: move
//	target: obj202 
move_444();
function move_444() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj202");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=15";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 100, easing, function() {
		setTimeout(function() {
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup21();
}
		}, 1);
	});
}
//	action: move
//	target: obj202 
move_445();
function move_445() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj202");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-30";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 200, easing, function() {
		setTimeout(function() {
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup21();
}
		}, 1);
	});
}
//	action: move
//	target: obj202 
move_446();
function move_446() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj202");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 362;
	var moveY = 785;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 100, easing, function() {
		setTimeout(function() {
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup21();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1466();
function playAudioFile_1466() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1466")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1466");
			$("#obj_audio_playSoundFile1466").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup21();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup21();
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
				window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup21();
}
			}, false);
		} else {
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup21();
}
		}
	}

	
	
	
}






//	action: playAudioFile
playAudioFile_1459();
function playAudioFile_1459() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1459")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1459");
			$("#obj_audio_playSoundFile1459").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup21();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup21();
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
				window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup21();
}
			}, false);
		} else {
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup21();
}
		}
	}

	
	
	
}












//	action: scale
//	target: obj407 
scale_442();
function scale_442() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj407";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj407';
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
		scale_442_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_442_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_442_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_442_completed() {
	setTimeout(function() {
		window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup21();
}
	}, 1);
}
























};
obj357_SCEventRun_actionGroup21 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj357_SCEventRun_activeActionGroupIndex = -1;
		$("#obj357").trigger("obj357_SCEventRun_ended");
		
		return;
	}
	window.obj357_SCEventRun_activeActionGroupIndex = 21;
	












//	action: playAudioFile
playAudioFile_1344();
function playAudioFile_1344() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1344")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1344");
			$("#obj_audio_playSoundFile1344").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup22();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup22();
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
				window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup22();
}
			}, false);
		} else {
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup22();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_505();
function runjs_505() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;


	if(localStorage.getItem("tut") === "false")
{
    $("#obj295").fadeOut(1000);
    $("#obj297").fadeOut(1000);
    $("#obj299").fadeOut(1000);
}
else
{
    $("#obj295").fadeIn(1000);
    $("#obj297").fadeIn(1000);
    $("#obj299").fadeIn(1000);
}

	setTimeout(function() {
		window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup22();
}
	}, 1);
}












};
obj357_SCEventRun_actionGroup22 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj357_SCEventRun_activeActionGroupIndex = -1;
		$("#obj357").trigger("obj357_SCEventRun_ended");
		
		return;
	}
	window.obj357_SCEventRun_activeActionGroupIndex = 22;
	



//	action: move
//	target: obj407 
move_450();
function move_450() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj407");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-768";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup23();
}
		}, 1);
	});
}






































};
obj357_SCEventRun_actionGroup23 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj357_SCEventRun_activeActionGroupIndex = -1;
		$("#obj357").trigger("obj357_SCEventRun_ended");
		
		return;
	}
	window.obj357_SCEventRun_activeActionGroupIndex = 23;
	


















//	action: scale
//	target: obj407 
scale_451();
function scale_451() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj407";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj407';
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
		scale_451_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_451_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_451_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_451_completed() {
	setTimeout(function() {
		window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup24();
}
	}, 1);
}
























};
obj357_SCEventRun_actionGroup24 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj357_SCEventRun_activeActionGroupIndex = -1;
		$("#obj357").trigger("obj357_SCEventRun_ended");
		
		return;
	}
	window.obj357_SCEventRun_activeActionGroupIndex = 24;
	

//	action: hide
//	target: obj275 
hide_453();
function hide_453() {
	var element = "#obj275";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup25();
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
		setTimeout(hide_453(), 100);
		return;
	}

	setTimeout(function() {
		$(element).css("display", "none");
		window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup25();
}
	}, animationDurationMs);

	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)

}










//	action: playAudioFile
playAudioFile_1457();
function playAudioFile_1457() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1457")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1457");
			$("#obj_audio_playSoundFile1457").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup25();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup25();
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
				window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup25();
}
			}, false);
		} else {
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup25();
}
		}
	}

	
	
	
}












//	action: scale
//	target: obj407 
scale_452();
function scale_452() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj407";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj407';
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
		scale_452_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_452_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_452_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_452_completed() {
	setTimeout(function() {
		window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup25();
}
	}, 1);
}











//	action: Run JavaScript
runjs_506();
function runjs_506() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;


	if(localStorage.getItem("tut") === "false")
{
    $("#obj274").fadeOut(1000);
}
else
{
    $("#obj274").show(0);
}

	setTimeout(function() {
		window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup25();
}
	}, 1);
}












};
obj357_SCEventRun_actionGroup25 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj357_SCEventRun_activeActionGroupIndex = -1;
		$("#obj357").trigger("obj357_SCEventRun_ended");
		
		return;
	}
	window.obj357_SCEventRun_activeActionGroupIndex = 25;
	



//	action: move
//	target: obj407 
move_455();
function move_455() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj407");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=768";
	var moveY = "+=-10";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup26();
}
		}, 1);
	});
}






































};
obj357_SCEventRun_actionGroup26 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj357_SCEventRun_activeActionGroupIndex = -1;
		$("#obj357").trigger("obj357_SCEventRun_ended");
		
		return;
	}
	window.obj357_SCEventRun_activeActionGroupIndex = 26;
	












//	action: playAudioFile
playAudioFile_1465();
function playAudioFile_1465() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1465")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1465");
			$("#obj_audio_playSoundFile1465").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup27();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup27();
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
				window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup27();
}
			}, false);
		} else {
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup27();
}
		}
	}

	
	
	
}






//	action: playAudioFile
playAudioFile_1458();
function playAudioFile_1458() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1458")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1458");
			$("#obj_audio_playSoundFile1458").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup27();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup27();
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
				window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup27();
}
			}, false);
		} else {
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup27();
}
		}
	}

	
	
	
}












//	action: scale
//	target: obj407 
scale_456();
function scale_456() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj407";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj407';
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
		scale_456_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_456_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_456_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_456_completed() {
	setTimeout(function() {
		window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup27();
}
	}, 1);
}
























};
obj357_SCEventRun_actionGroup27 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj357_SCEventRun_activeActionGroupIndex = -1;
		$("#obj357").trigger("obj357_SCEventRun_ended");
		
		return;
	}
	window.obj357_SCEventRun_activeActionGroupIndex = 27;
	


















//	action: scale
//	target: obj407 
scale_457();
function scale_457() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj407";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj407';
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
		scale_457_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_457_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_457_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_457_completed() {
	setTimeout(function() {
		window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup28();
}
	}, 1);
}
























};
obj357_SCEventRun_actionGroup28 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj357_SCEventRun_activeActionGroupIndex = -1;
		$("#obj357").trigger("obj357_SCEventRun_ended");
		
		return;
	}
	window.obj357_SCEventRun_activeActionGroupIndex = 28;
	

//	action: hide
//	target: obj295 
hide_458();
function hide_458() {
	var element = "#obj295";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup29();
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
		setTimeout(hide_458(), 100);
		return;
	}

	setTimeout(function() {
		$(element).css("display", "none");
		window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup29();
}
	}, animationDurationMs);

	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)

}
//	action: hide
//	target: obj297 
hide_459();
function hide_459() {
	var element = "#obj297";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup29();
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
		setTimeout(hide_459(), 100);
		return;
	}

	setTimeout(function() {
		$(element).css("display", "none");
		window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup29();
}
	}, animationDurationMs);

	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)

}
//	action: hide
//	target: obj299 
hide_460();
function hide_460() {
	var element = "#obj299";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup29();
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
		setTimeout(hide_460(), 100);
		return;
	}

	setTimeout(function() {
		$(element).css("display", "none");
		window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup29();
}
	}, animationDurationMs);

	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)

}










//	action: playAudioFile
playAudioFile_1345();
function playAudioFile_1345() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1345")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1345");
			$("#obj_audio_playSoundFile1345").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup29();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup29();
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
				window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup29();
}
			}, false);
		} else {
			window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup29();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_507();
function runjs_507() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;


	if(localStorage.getItem("tut") === "false")
{
    $("#obj471").fadeOut(1000);
    $("#obj469").fadeOut(1000);
    $("#obj467").fadeOut(1000);
    $("#obj465").fadeOut(1000);
}
else
{
    $("#obj471").fadeIn(1000);
    $("#obj469").fadeIn(1000);
    $("#obj467").fadeIn(1000);
    $("#obj465").fadeIn(1000);
}

	setTimeout(function() {
		window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup29();
}
	}, 1);
}












};
obj357_SCEventRun_actionGroup29 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj357_SCEventRun_activeActionGroupIndex = -1;
		$("#obj357").trigger("obj357_SCEventRun_ended");
		
		return;
	}
	window.obj357_SCEventRun_activeActionGroupIndex = 29;
	
















//	action: wait
wait_493();
function wait_493() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;

	setTimeout(function() {
		window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup30();
}
	}, 4000);
}

























};
obj357_SCEventRun_actionGroup30 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj357_SCEventRun_activeActionGroupIndex = -1;
		$("#obj357").trigger("obj357_SCEventRun_ended");
		
		return;
	}
	window.obj357_SCEventRun_activeActionGroupIndex = 30;
	



































//	action: run action list container
//	target: obj478 
runActionList_489();
function runActionList_489() {
	window.obj357_SCEventRun_runningActionsCount = obj357_SCEventRun_runningActionsCount + 1;

	$("#obj478").trigger('SCEventRun');
	setTimeout(function() {
		window.obj357_SCEventRun_runningActionsCount = window.obj357_SCEventRun_runningActionsCount - 1;

if (window.obj357_SCEventRun_runningActionsCount == 0) {
	obj357_SCEventRun_actionGroup31();
}		
	}, 1);
}






};
obj357_SCEventRun_actionGroup31 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj357_SCEventRun_activeActionGroupIndex = -1;
		$("#obj357").trigger("obj357_SCEventRun_ended");
		
		return;
	}
	window.obj357_SCEventRun_activeActionGroupIndex = 31;
	










































};
obj478_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj478_SCEventRun_activeActionGroupIndex = -1;
		$("#obj478").trigger("obj478_SCEventRun_ended");
		
		return;
	}
	window.obj478_SCEventRun_activeActionGroupIndex = 0;
	





























//	action: Run JavaScript
runjs_486();
function runjs_486() {
	window.obj478_SCEventRun_runningActionsCount = obj478_SCEventRun_runningActionsCount + 1;


	localStorage.setItem('tut', "false");
$("#obj465").fadeOut(1000);
$("#obj467").fadeOut(1000);
$("#obj469").fadeOut(1000);
$("#obj471").fadeOut(1000);
$("#obj407").fadeOut(1000);
$("#obj393").fadeOut(1000);
$("#obj391").fadeOut(1000);
$("#obj389").fadeOut(1000);
$("#obj398").fadeOut(1000);
$("#obj396").fadeOut(1000);
$("#obj387").fadeOut(1000);
$("#obj385").fadeOut(1000);
$("#obj383").fadeOut(1000);
$("#obj375").fadeOut(1000);
$("#obj373").fadeOut(1000);
$("#obj370").fadeOut(1000);
$("#obj368").fadeOut(1000);
$("#obj366").fadeOut(1000);
$("#obj364").fadeOut(1000);
$("#obj359").fadeOut(1000);
$("#obj274").fadeOut(1000);
$("#obj269").fadeOut(1000);
$("#obj271").fadeOut(1000);
$("#obj272").fadeOut(1000);
$("#obj273").fadeOut(1000);
$("#obj275").fadeOut(1000);


	setTimeout(function() {
		window.obj478_SCEventRun_runningActionsCount = window.obj478_SCEventRun_runningActionsCount - 1;

if (window.obj478_SCEventRun_runningActionsCount == 0) {
	obj478_SCEventRun_actionGroup1();
}
	}, 1);
}












};
obj478_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj478_SCEventRun_activeActionGroupIndex = -1;
		$("#obj478").trigger("obj478_SCEventRun_ended");
		
		return;
	}
	window.obj478_SCEventRun_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj359 
move_490();
function move_490() {
	window.obj478_SCEventRun_runningActionsCount = obj478_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj359");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = -318;
	var moveY = 527;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj478_SCEventRun_runningActionsCount = window.obj478_SCEventRun_runningActionsCount - 1;

if (window.obj478_SCEventRun_runningActionsCount == 0) {
	obj478_SCEventRun_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj407 
move_491();
function move_491() {
	window.obj478_SCEventRun_runningActionsCount = obj478_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj407");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 619;
	var moveY = 832;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj478_SCEventRun_runningActionsCount = window.obj478_SCEventRun_runningActionsCount - 1;

if (window.obj478_SCEventRun_runningActionsCount == 0) {
	obj478_SCEventRun_actionGroup2();
}
		}, 1);
	});
}












//	action: wait
wait_487();
function wait_487() {
	window.obj478_SCEventRun_runningActionsCount = obj478_SCEventRun_runningActionsCount + 1;

	setTimeout(function() {
		window.obj478_SCEventRun_runningActionsCount = window.obj478_SCEventRun_runningActionsCount - 1;

if (window.obj478_SCEventRun_runningActionsCount == 0) {
	obj478_SCEventRun_actionGroup2();
}
	}, 1000);
}

























};
obj478_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj478_SCEventRun_activeActionGroupIndex = -1;
		$("#obj478").trigger("obj478_SCEventRun_ended");
		
		return;
	}
	window.obj478_SCEventRun_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_488();
function runjs_488() {
	window.obj478_SCEventRun_runningActionsCount = obj478_SCEventRun_runningActionsCount + 1;


	if(localStorage.getItem('tut') === 'true')
{
    $("#obj357").trigger(PubCoder.Events.Run);
}
else
{
    //clear action list
    $("#obj215").trigger(PubCoder.Events.Run);
}

	setTimeout(function() {
		window.obj478_SCEventRun_runningActionsCount = window.obj478_SCEventRun_runningActionsCount - 1;

if (window.obj478_SCEventRun_runningActionsCount == 0) {
	obj478_SCEventRun_actionGroup3();
}
	}, 1);
}












};
obj478_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj478_SCEventRun_activeActionGroupIndex = -1;
		$("#obj478").trigger("obj478_SCEventRun_ended");
		
		return;
	}
	window.obj478_SCEventRun_activeActionGroupIndex = 3;
	










































};
obj1377_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1377_onLoad_activeActionGroupIndex = -1;
		$("#obj1377").trigger("obj1377_onLoad_ended");
		
		return;
	}
	window.obj1377_onLoad_activeActionGroupIndex = 0;
	
























//	action: playAudio
//	target: obj1377 
playAudio_1379();
function playAudio_1379() {
	window.obj1377_onLoad_runningActionsCount = obj1377_onLoad_runningActionsCount + 1;

	var myAudio = $("#obj1377")[0];
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
		    window.obj1377_onLoad_runningActionsCount = window.obj1377_onLoad_runningActionsCount - 1;

if (window.obj1377_onLoad_runningActionsCount == 0) {
	obj1377_onLoad_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1377_onLoad_runningActionsCount = window.obj1377_onLoad_runningActionsCount - 1;

if (window.obj1377_onLoad_runningActionsCount == 0) {
	obj1377_onLoad_actionGroup1();
}
	}
}

















};
obj1377_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1377_onLoad_activeActionGroupIndex = -1;
		$("#obj1377").trigger("obj1377_onLoad_ended");
		
		return;
	}
	window.obj1377_onLoad_activeActionGroupIndex = 1;
	










































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		





/*
 *
 *   obj10: Event Touch Down
 *
 */

$("#obj10").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj10_onTap_activeActionGroupIndex != -1) return;
var obj10_onTap_runningActionsCount = 0;
var obj10_onTap_loopCount = 0;
obj10_onTap_actionGroup0();
});



/*
 *
 *   obj10: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj10_onLoad_activeActionGroupIndex != -1) return;
var obj10_onLoad_runningActionsCount = 0;
var obj10_onLoad_loopCount = 0;
obj10_onLoad_actionGroup0();
});

























/*
 *
 *   obj196: Event Touch Down
 *
 */

$("#obj196").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj196_onTap_activeActionGroupIndex != -1) return;
var obj196_onTap_runningActionsCount = 0;
var obj196_onTap_loopCount = 0;
obj196_onTap_actionGroup0();
});














/*
 *
 *   obj198: Event Touch Down
 *
 */

$("#obj198").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj198_onTap_activeActionGroupIndex != -1) return;
var obj198_onTap_runningActionsCount = 0;
var obj198_onTap_loopCount = 0;
obj198_onTap_actionGroup0();
});














/*
 *
 *   obj329: Event Touch Down
 *
 */

$("#obj329").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj329_onTap_activeActionGroupIndex != -1) return;
var obj329_onTap_runningActionsCount = 0;
var obj329_onTap_loopCount = 0;
obj329_onTap_actionGroup0();
});














/*
 *
 *   obj330: Event Touch Down
 *
 */

$("#obj330").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj330_onTap_activeActionGroupIndex != -1) return;
var obj330_onTap_runningActionsCount = 0;
var obj330_onTap_loopCount = 0;
obj330_onTap_actionGroup0();
});












































/*
 *
 *   obj202: Event Touch Down
 *
 */

$("#obj202").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj202_onTap_activeActionGroupIndex != -1) return;
var obj202_onTap_runningActionsCount = 0;
var obj202_onTap_loopCount = 0;
obj202_onTap_actionGroup0();
});














/*
 *
 *   obj359: Event Touch Down
 *
 */

$("#obj359").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj359_onTap_activeActionGroupIndex != -1) return;
var obj359_onTap_runningActionsCount = 0;
var obj359_onTap_loopCount = 0;
obj359_onTap_actionGroup0();
});














/*
 *
 *   obj205: Event Touch Down
 *
 */

$("#obj205").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj205_onTap_activeActionGroupIndex != -1) return;
var obj205_onTap_runningActionsCount = 0;
var obj205_onTap_loopCount = 0;
obj205_onTap_actionGroup0();
});














/*
 *
 *   obj208: Event Touch Down
 *
 */

$("#obj208").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj208_onTap_activeActionGroupIndex != -1) return;
var obj208_onTap_runningActionsCount = 0;
var obj208_onTap_loopCount = 0;
obj208_onTap_actionGroup0();
});























/*
 *
 *   obj215: Event SCEventRun
 *
 */

$("#obj215").one("SCEventRun", function(event) {
	if (window.obj215_SCEventRun_activeActionGroupIndex != -1) return;
var obj215_SCEventRun_runningActionsCount = 0;
var obj215_SCEventRun_loopCount = 0;
obj215_SCEventRun_actionGroup0();
});





























/*
 *
 *   obj221: Event SCEventRun
 *
 */

$("#obj221").bind("SCEventRun", function(event) {
	if (window.obj221_SCEventRun_activeActionGroupIndex != -1) return;
var obj221_SCEventRun_runningActionsCount = 0;
var obj221_SCEventRun_loopCount = 0;
obj221_SCEventRun_actionGroup0();
});















































































































































































































































/*
 *
 *   obj283: Event SCEventRun
 *
 */

$("#obj283").bind("SCEventRun", function(event) {
	if (window.obj283_SCEventRun_activeActionGroupIndex != -1) return;
var obj283_SCEventRun_runningActionsCount = 0;
var obj283_SCEventRun_loopCount = 0;
obj283_SCEventRun_actionGroup0();
});



























































/*
 *
 *   obj308: Event SCEventRun
 *
 */

$("#obj308").bind("SCEventRun", function(event) {
	if (window.obj308_SCEventRun_activeActionGroupIndex != -1) return;
var obj308_SCEventRun_runningActionsCount = 0;
var obj308_SCEventRun_loopCount = 0;
obj308_SCEventRun_actionGroup0();
});








































































































/*
 *
 *   obj357: Event SCEventRun
 *
 */

$("#obj357").bind("SCEventRun", function(event) {
	if (window.obj357_SCEventRun_activeActionGroupIndex != -1) return;
var obj357_SCEventRun_runningActionsCount = 0;
var obj357_SCEventRun_loopCount = 0;
obj357_SCEventRun_actionGroup0();
});











































































































































































































































































































/*
 *
 *   obj478: Event SCEventRun
 *
 */

$("#obj478").bind("SCEventRun", function(event) {
	if (window.obj478_SCEventRun_activeActionGroupIndex != -1) return;
var obj478_SCEventRun_runningActionsCount = 0;
var obj478_SCEventRun_loopCount = 0;
obj478_SCEventRun_actionGroup0();
});









/*
 *
 *   obj1377: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1377_onLoad_activeActionGroupIndex != -1) return;
var obj1377_onLoad_runningActionsCount = 0;
var obj1377_onLoad_loopCount = 0;
obj1377_onLoad_actionGroup0();
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
	
$("#obj10").trigger('SCEventShow');
$("#obj200").trigger('SCEventShow');
$("#obj196").trigger('SCEventShow');
$("#obj198").trigger('SCEventShow');
$("#obj329").trigger('SCEventShow');
$("#obj330").trigger('SCEventShow');
$("#obj210").trigger('SCEventShow');
$("#obj212").trigger('SCEventShow');
$("#obj202").trigger('SCEventShow');
$("#obj359").trigger('SCEventShow');
$("#obj205").trigger('SCEventShow');
$("#obj208").trigger('SCEventShow');
$("#obj217").trigger('SCEventShow');
$("#obj1377").trigger('SCEventShow');
	localStorage.setItem("tapped", "0");
localStorage.setItem("tapped", "0");
localStorage.setItem("tally", "0");
localStorage.setItem("tut", "true");
});