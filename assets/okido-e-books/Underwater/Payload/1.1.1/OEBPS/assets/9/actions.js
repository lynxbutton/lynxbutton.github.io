pubcoder.projectID = pubcoder.projectID || "968537061CD4A6469E16DEA662F0DD9C";
pubcoder.project.id = pubcoder.project.id || "968537061CD4A6469E16DEA662F0DD9C";
pubcoder.project.title = pubcoder.project.title || "MGTO Underwater Story";
pubcoder.page.id = pubcoder.page.id || 982;
pubcoder.page.title = pubcoder.page.title || "9";
pubcoder.page.number = pubcoder.page.number || 9;
pubcoder.page.alias = pubcoder.page.alias || "";


var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;

var obj1081_animation_count = 0;

/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj983_onTap_activeActionGroupIndex = -1;
var obj983_onTap_runningActionsCount = 0;
var obj983_onTap_loopCount = 0;
var obj988_onLoad_activeActionGroupIndex = -1;
var obj988_onLoad_runningActionsCount = 0;
var obj988_onLoad_loopCount = 0;
var obj994_onLoad_activeActionGroupIndex = -1;
var obj994_onLoad_runningActionsCount = 0;
var obj994_onLoad_loopCount = 0;
var obj1006_onTap_activeActionGroupIndex = -1;
var obj1006_onTap_runningActionsCount = 0;
var obj1006_onTap_loopCount = 0;
var obj1012_onTap_activeActionGroupIndex = -1;
var obj1012_onTap_runningActionsCount = 0;
var obj1012_onTap_loopCount = 0;
var obj1016_onLoad_activeActionGroupIndex = -1;
var obj1016_onLoad_runningActionsCount = 0;
var obj1016_onLoad_loopCount = 0;
var obj1024_onTap_activeActionGroupIndex = -1;
var obj1024_onTap_runningActionsCount = 0;
var obj1024_onTap_loopCount = 0;
var obj1036_SCEventRun_activeActionGroupIndex = -1;
var obj1036_SCEventRun_runningActionsCount = 0;
var obj1036_SCEventRun_loopCount = 0;
var obj1081_onLoad_activeActionGroupIndex = -1;
var obj1081_onLoad_runningActionsCount = 0;
var obj1081_onLoad_loopCount = 0;
var obj5437_onLoad_activeActionGroupIndex = -1;
var obj5437_onLoad_runningActionsCount = 0;
var obj5437_onLoad_loopCount = 0;

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
	
initAnimation_1081();
function initAnimation_1081()
{
        var targetObjectId = "#obj1081";
        var widthSCAnimationObject = 204;
        var heightSCAnimationObject = 162;
		var framesPerSecond = 6;
		var howManyLoops = 1;
		var backToFirstFrame = false;
        var isAnimationInfinite = false;
        window.audio_animation_obj1081 = $("#")[0];
        window.hasAudioTrack_obj1081 = false

 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj1081_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj1081 = $(targetObjectId).spritespin("api");
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
		
obj983_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj983_onTap_activeActionGroupIndex = -1;
		$("#obj983").trigger("obj983_onTap_ended");
		
		return;
	}
	window.obj983_onTap_activeActionGroupIndex = 0;
	





























//	action: Run JavaScript
runjs_985();
function runjs_985() {
	window.obj983_onTap_runningActionsCount = obj983_onTap_runningActionsCount + 1;


	var tapped = parseInt(localStorage.getItem("tapped"));
tapped += 1;
localStorage.setItem("tapped", tapped.toString());
if(tapped === 1)
{
    //show speech bubble 2
    $("#obj1036").trigger(PubCoder.Events.Run);
}

	setTimeout(function() {
		window.obj983_onTap_runningActionsCount = window.obj983_onTap_runningActionsCount - 1;

if (window.obj983_onTap_runningActionsCount == 0) {
	obj983_onTap_actionGroup1();
}
	}, 1);
}












};
obj983_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj983_onTap_activeActionGroupIndex = -1;
		$("#obj983").trigger("obj983_onTap_ended");
		
		return;
	}
	window.obj983_onTap_activeActionGroupIndex = 1;
	










































};
obj988_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj988_onLoad_activeActionGroupIndex = -1;
		$("#obj988").trigger("obj988_onLoad_ended");
		
		return;
	}
	window.obj988_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj988 
move_1098();
function move_1098() {
	window.obj988_onLoad_runningActionsCount = obj988_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj988");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=50";
	var moveY = "+=5";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 800, easing, function() {
		setTimeout(function() {
			window.obj988_onLoad_runningActionsCount = window.obj988_onLoad_runningActionsCount - 1;

if (window.obj988_onLoad_runningActionsCount == 0) {
	obj988_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj988 
move_1099();
function move_1099() {
	window.obj988_onLoad_runningActionsCount = obj988_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj988");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 85;
	var moveY = 250;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 800, easing, function() {
		setTimeout(function() {
			window.obj988_onLoad_runningActionsCount = window.obj988_onLoad_runningActionsCount - 1;

if (window.obj988_onLoad_runningActionsCount == 0) {
	obj988_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj988 
move_1113();
function move_1113() {
	window.obj988_onLoad_runningActionsCount = obj988_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj988");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-50";
	var moveY = "+=-5";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 800, easing, function() {
		setTimeout(function() {
			window.obj988_onLoad_runningActionsCount = window.obj988_onLoad_runningActionsCount - 1;

if (window.obj988_onLoad_runningActionsCount == 0) {
	obj988_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj988 
move_1114();
function move_1114() {
	window.obj988_onLoad_runningActionsCount = obj988_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj988");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 85;
	var moveY = 250;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 800, easing, function() {
		setTimeout(function() {
			window.obj988_onLoad_runningActionsCount = window.obj988_onLoad_runningActionsCount - 1;

if (window.obj988_onLoad_runningActionsCount == 0) {
	obj988_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj988_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj988_onLoad_activeActionGroupIndex = -1;
		$("#obj988").trigger("obj988_onLoad_ended");
		
		return;
	}
	window.obj988_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj988 
move_1127();
function move_1127() {
	window.obj988_onLoad_runningActionsCount = obj988_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj988");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-50";
	var moveY = "+=5";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 800, easing, function() {
		setTimeout(function() {
			window.obj988_onLoad_runningActionsCount = window.obj988_onLoad_runningActionsCount - 1;

if (window.obj988_onLoad_runningActionsCount == 0) {
	obj988_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj988 
move_1128();
function move_1128() {
	window.obj988_onLoad_runningActionsCount = obj988_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj988");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 85;
	var moveY = 250;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 800, easing, function() {
		setTimeout(function() {
			window.obj988_onLoad_runningActionsCount = window.obj988_onLoad_runningActionsCount - 1;

if (window.obj988_onLoad_runningActionsCount == 0) {
	obj988_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj988 
move_1129();
function move_1129() {
	window.obj988_onLoad_runningActionsCount = obj988_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj988");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=50";
	var moveY = "+=-5";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 800, easing, function() {
		setTimeout(function() {
			window.obj988_onLoad_runningActionsCount = window.obj988_onLoad_runningActionsCount - 1;

if (window.obj988_onLoad_runningActionsCount == 0) {
	obj988_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj988 
move_1130();
function move_1130() {
	window.obj988_onLoad_runningActionsCount = obj988_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj988");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 85;
	var moveY = 250;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 800, easing, function() {
		setTimeout(function() {
			window.obj988_onLoad_runningActionsCount = window.obj988_onLoad_runningActionsCount - 1;

if (window.obj988_onLoad_runningActionsCount == 0) {
	obj988_onLoad_actionGroup2();
}
		}, 1);
	});
}






































};
obj988_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj988_onLoad_activeActionGroupIndex = -1;
		$("#obj988").trigger("obj988_onLoad_ended");
		
		return;
	}
	window.obj988_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj988_onLoad();
function loop_obj988_onLoad() {

	var loopCount = 0;

	window.obj988_onLoad_loopCount = window.obj988_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj988_onLoad_loopCount > loopCount) {
		window.obj988_onLoad_loopCount = 0
		obj988_onLoad_actionGroup3();
	} else {
		obj988_onLoad_actionGroup0();
	}

}


























};
obj988_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj988_onLoad_activeActionGroupIndex = -1;
		$("#obj988").trigger("obj988_onLoad_ended");
		
		return;
	}
	window.obj988_onLoad_activeActionGroupIndex = 3;
	










































};
obj994_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj994_onLoad_activeActionGroupIndex = -1;
		$("#obj994").trigger("obj994_onLoad_ended");
		
		return;
	}
	window.obj994_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj994 
move_1135();
function move_1135() {
	window.obj994_onLoad_runningActionsCount = obj994_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj994");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=10";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj994_onLoad_runningActionsCount = window.obj994_onLoad_runningActionsCount - 1;

if (window.obj994_onLoad_runningActionsCount == 0) {
	obj994_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj994 
move_1136();
function move_1136() {
	window.obj994_onLoad_runningActionsCount = obj994_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj994");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1035;
	var moveY = 719;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj994_onLoad_runningActionsCount = window.obj994_onLoad_runningActionsCount - 1;

if (window.obj994_onLoad_runningActionsCount == 0) {
	obj994_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj994_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj994_onLoad_activeActionGroupIndex = -1;
		$("#obj994").trigger("obj994_onLoad_ended");
		
		return;
	}
	window.obj994_onLoad_activeActionGroupIndex = 1;
	















//	action: loop
loop_obj994_onLoad();
function loop_obj994_onLoad() {

	var loopCount = 0;

	window.obj994_onLoad_loopCount = window.obj994_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj994_onLoad_loopCount > loopCount) {
		window.obj994_onLoad_loopCount = 0
		obj994_onLoad_actionGroup2();
	} else {
		obj994_onLoad_actionGroup0();
	}

}


























};
obj994_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj994_onLoad_activeActionGroupIndex = -1;
		$("#obj994").trigger("obj994_onLoad_ended");
		
		return;
	}
	window.obj994_onLoad_activeActionGroupIndex = 2;
	










































};
obj1006_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1006_onTap_activeActionGroupIndex = -1;
		$("#obj1006").trigger("obj1006_onTap_ended");
		
		return;
	}
	window.obj1006_onTap_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj1006 
move_1008();
function move_1008() {
	window.obj1006_onTap_runningActionsCount = obj1006_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj1006");
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
			window.obj1006_onTap_runningActionsCount = window.obj1006_onTap_runningActionsCount - 1;

if (window.obj1006_onTap_runningActionsCount == 0) {
	obj1006_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1006 
move_1009();
function move_1009() {
	window.obj1006_onTap_runningActionsCount = obj1006_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj1006");
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
			window.obj1006_onTap_runningActionsCount = window.obj1006_onTap_runningActionsCount - 1;

if (window.obj1006_onTap_runningActionsCount == 0) {
	obj1006_onTap_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_5441();
function playAudioFile_5441() {
	window.obj1006_onTap_runningActionsCount = obj1006_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5441")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5441");
			$("#obj_audio_playSoundFile5441").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1006_onTap_runningActionsCount = window.obj1006_onTap_runningActionsCount - 1;

if (window.obj1006_onTap_runningActionsCount == 0) {
	obj1006_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1006_onTap_runningActionsCount = window.obj1006_onTap_runningActionsCount - 1;

if (window.obj1006_onTap_runningActionsCount == 0) {
	obj1006_onTap_actionGroup1();
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
				window.obj1006_onTap_runningActionsCount = window.obj1006_onTap_runningActionsCount - 1;

if (window.obj1006_onTap_runningActionsCount == 0) {
	obj1006_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj1006_onTap_runningActionsCount = window.obj1006_onTap_runningActionsCount - 1;

if (window.obj1006_onTap_runningActionsCount == 0) {
	obj1006_onTap_actionGroup1();
}
		}
	}

	
	
	
}




































};
obj1006_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1006_onTap_activeActionGroupIndex = -1;
		$("#obj1006").trigger("obj1006_onTap_ended");
		
		return;
	}
	window.obj1006_onTap_activeActionGroupIndex = 1;
	










































};
obj1012_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1012_onTap_activeActionGroupIndex = -1;
		$("#obj1012").trigger("obj1012_onTap_ended");
		
		return;
	}
	window.obj1012_onTap_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj1012 
move_1014();
function move_1014() {
	window.obj1012_onTap_runningActionsCount = obj1012_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj1012");
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
			window.obj1012_onTap_runningActionsCount = window.obj1012_onTap_runningActionsCount - 1;

if (window.obj1012_onTap_runningActionsCount == 0) {
	obj1012_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1012 
move_1015();
function move_1015() {
	window.obj1012_onTap_runningActionsCount = obj1012_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj1012");
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
			window.obj1012_onTap_runningActionsCount = window.obj1012_onTap_runningActionsCount - 1;

if (window.obj1012_onTap_runningActionsCount == 0) {
	obj1012_onTap_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_5442();
function playAudioFile_5442() {
	window.obj1012_onTap_runningActionsCount = obj1012_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5442")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5442");
			$("#obj_audio_playSoundFile5442").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1012_onTap_runningActionsCount = window.obj1012_onTap_runningActionsCount - 1;

if (window.obj1012_onTap_runningActionsCount == 0) {
	obj1012_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1012_onTap_runningActionsCount = window.obj1012_onTap_runningActionsCount - 1;

if (window.obj1012_onTap_runningActionsCount == 0) {
	obj1012_onTap_actionGroup1();
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
				window.obj1012_onTap_runningActionsCount = window.obj1012_onTap_runningActionsCount - 1;

if (window.obj1012_onTap_runningActionsCount == 0) {
	obj1012_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj1012_onTap_runningActionsCount = window.obj1012_onTap_runningActionsCount - 1;

if (window.obj1012_onTap_runningActionsCount == 0) {
	obj1012_onTap_actionGroup1();
}
		}
	}

	
	
	
}




































};
obj1012_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1012_onTap_activeActionGroupIndex = -1;
		$("#obj1012").trigger("obj1012_onTap_ended");
		
		return;
	}
	window.obj1012_onTap_activeActionGroupIndex = 1;
	










































};
obj1016_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1016_onLoad_activeActionGroupIndex = -1;
		$("#obj1016").trigger("obj1016_onLoad_ended");
		
		return;
	}
	window.obj1016_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj1016 
move_1019();
function move_1019() {
	window.obj1016_onLoad_runningActionsCount = obj1016_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj1016");
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
			window.obj1016_onLoad_runningActionsCount = window.obj1016_onLoad_runningActionsCount - 1;

if (window.obj1016_onLoad_runningActionsCount == 0) {
	obj1016_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj1016_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1016_onLoad_activeActionGroupIndex = -1;
		$("#obj1016").trigger("obj1016_onLoad_ended");
		
		return;
	}
	window.obj1016_onLoad_activeActionGroupIndex = 1;
	
















//	action: wait
wait_1020();
function wait_1020() {
	window.obj1016_onLoad_runningActionsCount = obj1016_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj1016_onLoad_runningActionsCount = window.obj1016_onLoad_runningActionsCount - 1;

if (window.obj1016_onLoad_runningActionsCount == 0) {
	obj1016_onLoad_actionGroup2();
}
	}, 200);
}

























};
obj1016_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1016_onLoad_activeActionGroupIndex = -1;
		$("#obj1016").trigger("obj1016_onLoad_ended");
		
		return;
	}
	window.obj1016_onLoad_activeActionGroupIndex = 2;
	



//	action: move
//	target: obj1016 
move_1021();
function move_1021() {
	window.obj1016_onLoad_runningActionsCount = obj1016_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj1016");
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
			window.obj1016_onLoad_runningActionsCount = window.obj1016_onLoad_runningActionsCount - 1;

if (window.obj1016_onLoad_runningActionsCount == 0) {
	obj1016_onLoad_actionGroup3();
}
		}, 1);
	});
}






































};
obj1016_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1016_onLoad_activeActionGroupIndex = -1;
		$("#obj1016").trigger("obj1016_onLoad_ended");
		
		return;
	}
	window.obj1016_onLoad_activeActionGroupIndex = 3;
	















//	action: loop
loop_obj1016_onLoad();
function loop_obj1016_onLoad() {

	var loopCount = 0;

	window.obj1016_onLoad_loopCount = window.obj1016_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj1016_onLoad_loopCount > loopCount) {
		window.obj1016_onLoad_loopCount = 0
		obj1016_onLoad_actionGroup4();
	} else {
		obj1016_onLoad_actionGroup0();
	}

}


























};
obj1016_onLoad_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1016_onLoad_activeActionGroupIndex = -1;
		$("#obj1016").trigger("obj1016_onLoad_ended");
		
		return;
	}
	window.obj1016_onLoad_activeActionGroupIndex = 4;
	
















//	action: wait
wait_1023();
function wait_1023() {
	window.obj1016_onLoad_runningActionsCount = obj1016_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj1016_onLoad_runningActionsCount = window.obj1016_onLoad_runningActionsCount - 1;

if (window.obj1016_onLoad_runningActionsCount == 0) {
	obj1016_onLoad_actionGroup5();
}
	}, 200);
}

























};
obj1016_onLoad_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1016_onLoad_activeActionGroupIndex = -1;
		$("#obj1016").trigger("obj1016_onLoad_ended");
		
		return;
	}
	window.obj1016_onLoad_activeActionGroupIndex = 5;
	










































};
obj1024_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1024_onTap_activeActionGroupIndex = -1;
		$("#obj1024").trigger("obj1024_onTap_ended");
		
		return;
	}
	window.obj1024_onTap_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj1024 
move_1026();
function move_1026() {
	window.obj1024_onTap_runningActionsCount = obj1024_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj1024");
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
			window.obj1024_onTap_runningActionsCount = window.obj1024_onTap_runningActionsCount - 1;

if (window.obj1024_onTap_runningActionsCount == 0) {
	obj1024_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1024 
move_1027();
function move_1027() {
	window.obj1024_onTap_runningActionsCount = obj1024_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj1024");
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
			window.obj1024_onTap_runningActionsCount = window.obj1024_onTap_runningActionsCount - 1;

if (window.obj1024_onTap_runningActionsCount == 0) {
	obj1024_onTap_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_5443();
function playAudioFile_5443() {
	window.obj1024_onTap_runningActionsCount = obj1024_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5443")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5443");
			$("#obj_audio_playSoundFile5443").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1024_onTap_runningActionsCount = window.obj1024_onTap_runningActionsCount - 1;

if (window.obj1024_onTap_runningActionsCount == 0) {
	obj1024_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1024_onTap_runningActionsCount = window.obj1024_onTap_runningActionsCount - 1;

if (window.obj1024_onTap_runningActionsCount == 0) {
	obj1024_onTap_actionGroup1();
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
				window.obj1024_onTap_runningActionsCount = window.obj1024_onTap_runningActionsCount - 1;

if (window.obj1024_onTap_runningActionsCount == 0) {
	obj1024_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj1024_onTap_runningActionsCount = window.obj1024_onTap_runningActionsCount - 1;

if (window.obj1024_onTap_runningActionsCount == 0) {
	obj1024_onTap_actionGroup1();
}
		}
	}

	
	
	
}




































};
obj1024_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1024_onTap_activeActionGroupIndex = -1;
		$("#obj1024").trigger("obj1024_onTap_ended");
		
		return;
	}
	window.obj1024_onTap_activeActionGroupIndex = 1;
	










































};
obj1036_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1036_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1036").trigger("obj1036_SCEventRun_ended");
		
		return;
	}
	window.obj1036_SCEventRun_activeActionGroupIndex = 0;
	


//	action: show 
//	target: obj1032 
(function(){
	window.obj1036_SCEventRun_runningActionsCount = obj1036_SCEventRun_runningActionsCount + 1;


	var element = "#obj1032";
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
				window.obj1036_SCEventRun_runningActionsCount = window.obj1036_SCEventRun_runningActionsCount - 1;

if (window.obj1036_SCEventRun_runningActionsCount == 0) {
	obj1036_SCEventRun_actionGroup1();
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
			window.obj1036_SCEventRun_runningActionsCount = window.obj1036_SCEventRun_runningActionsCount - 1;

if (window.obj1036_SCEventRun_runningActionsCount == 0) {
	obj1036_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj1143 
(function(){
	window.obj1036_SCEventRun_runningActionsCount = obj1036_SCEventRun_runningActionsCount + 1;


	var element = "#obj1143";
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
				window.obj1036_SCEventRun_runningActionsCount = window.obj1036_SCEventRun_runningActionsCount - 1;

if (window.obj1036_SCEventRun_runningActionsCount == 0) {
	obj1036_SCEventRun_actionGroup1();
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
			window.obj1036_SCEventRun_runningActionsCount = window.obj1036_SCEventRun_runningActionsCount - 1;

if (window.obj1036_SCEventRun_runningActionsCount == 0) {
	obj1036_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj1034 
(function(){
	window.obj1036_SCEventRun_runningActionsCount = obj1036_SCEventRun_runningActionsCount + 1;


	var element = "#obj1034";
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
				window.obj1036_SCEventRun_runningActionsCount = window.obj1036_SCEventRun_runningActionsCount - 1;

if (window.obj1036_SCEventRun_runningActionsCount == 0) {
	obj1036_SCEventRun_actionGroup1();
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
			window.obj1036_SCEventRun_runningActionsCount = window.obj1036_SCEventRun_runningActionsCount - 1;

if (window.obj1036_SCEventRun_runningActionsCount == 0) {
	obj1036_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: move
//	target: obj1006 
move_1041();
function move_1041() {
	window.obj1036_SCEventRun_runningActionsCount = obj1036_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj1006");
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
			window.obj1036_SCEventRun_runningActionsCount = window.obj1036_SCEventRun_runningActionsCount - 1;

if (window.obj1036_SCEventRun_runningActionsCount == 0) {
	obj1036_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1006 
move_1042();
function move_1042() {
	window.obj1036_SCEventRun_runningActionsCount = obj1036_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj1006");
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
			window.obj1036_SCEventRun_runningActionsCount = window.obj1036_SCEventRun_runningActionsCount - 1;

if (window.obj1036_SCEventRun_runningActionsCount == 0) {
	obj1036_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1006 
move_1043();
function move_1043() {
	window.obj1036_SCEventRun_runningActionsCount = obj1036_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj1006");
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
			window.obj1036_SCEventRun_runningActionsCount = window.obj1036_SCEventRun_runningActionsCount - 1;

if (window.obj1036_SCEventRun_runningActionsCount == 0) {
	obj1036_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1006 
move_1044();
function move_1044() {
	window.obj1036_SCEventRun_runningActionsCount = obj1036_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj1006");
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
			window.obj1036_SCEventRun_runningActionsCount = window.obj1036_SCEventRun_runningActionsCount - 1;

if (window.obj1036_SCEventRun_runningActionsCount == 0) {
	obj1036_SCEventRun_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_5444();
function playAudioFile_5444() {
	window.obj1036_SCEventRun_runningActionsCount = obj1036_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5444")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5444");
			$("#obj_audio_playSoundFile5444").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1036_SCEventRun_runningActionsCount = window.obj1036_SCEventRun_runningActionsCount - 1;

if (window.obj1036_SCEventRun_runningActionsCount == 0) {
	obj1036_SCEventRun_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1036_SCEventRun_runningActionsCount = window.obj1036_SCEventRun_runningActionsCount - 1;

if (window.obj1036_SCEventRun_runningActionsCount == 0) {
	obj1036_SCEventRun_actionGroup1();
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
				window.obj1036_SCEventRun_runningActionsCount = window.obj1036_SCEventRun_runningActionsCount - 1;

if (window.obj1036_SCEventRun_runningActionsCount == 0) {
	obj1036_SCEventRun_actionGroup1();
}
			}, false);
		} else {
			window.obj1036_SCEventRun_runningActionsCount = window.obj1036_SCEventRun_runningActionsCount - 1;

if (window.obj1036_SCEventRun_runningActionsCount == 0) {
	obj1036_SCEventRun_actionGroup1();
}
		}
	}

	
	
	
}






//	action: playAudioFile
playAudioFile_5663();
function playAudioFile_5663() {
	window.obj1036_SCEventRun_runningActionsCount = obj1036_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5663")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5663");
			$("#obj_audio_playSoundFile5663").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1036_SCEventRun_runningActionsCount = window.obj1036_SCEventRun_runningActionsCount - 1;

if (window.obj1036_SCEventRun_runningActionsCount == 0) {
	obj1036_SCEventRun_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1036_SCEventRun_runningActionsCount = window.obj1036_SCEventRun_runningActionsCount - 1;

if (window.obj1036_SCEventRun_runningActionsCount == 0) {
	obj1036_SCEventRun_actionGroup1();
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
				window.obj1036_SCEventRun_runningActionsCount = window.obj1036_SCEventRun_runningActionsCount - 1;

if (window.obj1036_SCEventRun_runningActionsCount == 0) {
	obj1036_SCEventRun_actionGroup1();
}
			}, false);
		} else {
			window.obj1036_SCEventRun_runningActionsCount = window.obj1036_SCEventRun_runningActionsCount - 1;

if (window.obj1036_SCEventRun_runningActionsCount == 0) {
	obj1036_SCEventRun_actionGroup1();
}
		}
	}

	
	
	
}




































};
obj1036_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1036_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1036").trigger("obj1036_SCEventRun_ended");
		
		return;
	}
	window.obj1036_SCEventRun_activeActionGroupIndex = 1;
	










































};
obj1081_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1081_onLoad_activeActionGroupIndex = -1;
		$("#obj1081").trigger("obj1081_onLoad_ended");
		
		return;
	}
	window.obj1081_onLoad_activeActionGroupIndex = 0;
	




//	action: playAnimation 
//	target: obj1081 
playAnimation_1089();
function playAnimation_1089() {
	var targetObjectId = "#obj1081";
	var targetObject = $(targetObjectId)[0];
	window.obj1081_onLoad_runningActionsCount = obj1081_onLoad_runningActionsCount + 1;

	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj1081_onLoad_runningActionsCount = window.obj1081_onLoad_runningActionsCount - 1;

if (window.obj1081_onLoad_runningActionsCount == 0) {
	obj1081_onLoad_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj1081 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj1081;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");

	setTimeout(function() {
	    api_animate_obj1081.startAnimation();
	}, 1);

	if (!isAnimationInfinite) {
		$("#obj1081").one("obj1081_animation_ended",function(event) {
		    window.obj1081_onLoad_runningActionsCount = window.obj1081_onLoad_runningActionsCount - 1;

if (window.obj1081_onLoad_runningActionsCount == 0) {
	obj1081_onLoad_actionGroup1();
}
		});
	}
 }





































};
obj1081_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1081_onLoad_activeActionGroupIndex = -1;
		$("#obj1081").trigger("obj1081_onLoad_ended");
		
		return;
	}
	window.obj1081_onLoad_activeActionGroupIndex = 1;
	
















//	action: wait
wait_1090();
function wait_1090() {
	window.obj1081_onLoad_runningActionsCount = obj1081_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj1081_onLoad_runningActionsCount = window.obj1081_onLoad_runningActionsCount - 1;

if (window.obj1081_onLoad_runningActionsCount == 0) {
	obj1081_onLoad_actionGroup2();
}
	}, 3000);
}

























};
obj1081_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1081_onLoad_activeActionGroupIndex = -1;
		$("#obj1081").trigger("obj1081_onLoad_ended");
		
		return;
	}
	window.obj1081_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj1081_onLoad();
function loop_obj1081_onLoad() {

	var loopCount = 0;

	window.obj1081_onLoad_loopCount = window.obj1081_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj1081_onLoad_loopCount > loopCount) {
		window.obj1081_onLoad_loopCount = 0
		obj1081_onLoad_actionGroup3();
	} else {
		obj1081_onLoad_actionGroup0();
	}

}


























};
obj1081_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1081_onLoad_activeActionGroupIndex = -1;
		$("#obj1081").trigger("obj1081_onLoad_ended");
		
		return;
	}
	window.obj1081_onLoad_activeActionGroupIndex = 3;
	










































};
obj5437_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5437_onLoad_activeActionGroupIndex = -1;
		$("#obj5437").trigger("obj5437_onLoad_ended");
		
		return;
	}
	window.obj5437_onLoad_activeActionGroupIndex = 0;
	
























//	action: playAudio
//	target: obj5437 
playAudio_5439();
function playAudio_5439() {
	window.obj5437_onLoad_runningActionsCount = obj5437_onLoad_runningActionsCount + 1;

	var myAudio = $("#obj5437")[0];
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
		    window.obj5437_onLoad_runningActionsCount = window.obj5437_onLoad_runningActionsCount - 1;

if (window.obj5437_onLoad_runningActionsCount == 0) {
	obj5437_onLoad_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj5437_onLoad_runningActionsCount = window.obj5437_onLoad_runningActionsCount - 1;

if (window.obj5437_onLoad_runningActionsCount == 0) {
	obj5437_onLoad_actionGroup1();
}
	}
}

















};
obj5437_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5437_onLoad_activeActionGroupIndex = -1;
		$("#obj5437").trigger("obj5437_onLoad_ended");
		
		return;
	}
	window.obj5437_onLoad_activeActionGroupIndex = 1;
	










































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		





/*
 *
 *   obj983: Event Touch Down
 *
 */

$("#obj983").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj983_onTap_activeActionGroupIndex != -1) return;
var obj983_onTap_runningActionsCount = 0;
var obj983_onTap_loopCount = 0;
obj983_onTap_actionGroup0();
});


















/*
 *
 *   obj988: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj988_onLoad_activeActionGroupIndex != -1) return;
var obj988_onLoad_runningActionsCount = 0;
var obj988_onLoad_loopCount = 0;
obj988_onLoad_actionGroup0();
});



























































/*
 *
 *   obj994: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj994_onLoad_activeActionGroupIndex != -1) return;
var obj994_onLoad_runningActionsCount = 0;
var obj994_onLoad_loopCount = 0;
obj994_onLoad_actionGroup0();
});




































































































/*
 *
 *   obj1006: Event Touch Down
 *
 */

$("#obj1006").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1006_onTap_activeActionGroupIndex != -1) return;
var obj1006_onTap_runningActionsCount = 0;
var obj1006_onTap_loopCount = 0;
obj1006_onTap_actionGroup0();
});





























/*
 *
 *   obj1012: Event Touch Down
 *
 */

$("#obj1012").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1012_onTap_activeActionGroupIndex != -1) return;
var obj1012_onTap_runningActionsCount = 0;
var obj1012_onTap_loopCount = 0;
obj1012_onTap_actionGroup0();
});


















/*
 *
 *   obj1016: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1016_onLoad_activeActionGroupIndex != -1) return;
var obj1016_onLoad_runningActionsCount = 0;
var obj1016_onLoad_loopCount = 0;
obj1016_onLoad_actionGroup0();
});










/*
 *
 *   obj1024: Event Touch Down
 *
 */

$("#obj1024").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1024_onTap_activeActionGroupIndex != -1) return;
var obj1024_onTap_runningActionsCount = 0;
var obj1024_onTap_loopCount = 0;
obj1024_onTap_actionGroup0();
});





















































/*
 *
 *   obj1036: Event SCEventRun
 *
 */

$("#obj1036").bind("SCEventRun", function(event) {
	if (window.obj1036_SCEventRun_activeActionGroupIndex != -1) return;
var obj1036_SCEventRun_runningActionsCount = 0;
var obj1036_SCEventRun_loopCount = 0;
obj1036_SCEventRun_actionGroup0();
});









/*
 *
 *   obj1081: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1081_onLoad_activeActionGroupIndex != -1) return;
var obj1081_onLoad_runningActionsCount = 0;
var obj1081_onLoad_loopCount = 0;
obj1081_onLoad_actionGroup0();
});





























/*
 *
 *   obj5437: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj5437_onLoad_activeActionGroupIndex != -1) return;
var obj5437_onLoad_runningActionsCount = 0;
var obj5437_onLoad_loopCount = 0;
obj5437_onLoad_actionGroup0();
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
	
$("#obj983").trigger('SCEventShow');
$("#obj988").trigger('SCEventShow');
$("#obj1104").trigger('SCEventShow');
$("#obj990").trigger('SCEventShow');
$("#obj992").trigger('SCEventShow');
$("#obj994").trigger('SCEventShow');
$("#obj1095").trigger('SCEventShow');
$("#obj996").trigger('SCEventShow');
$("#obj998").trigger('SCEventShow');
$("#obj1000").trigger('SCEventShow');
$("#obj1002").trigger('SCEventShow');
$("#obj1004").trigger('SCEventShow');
$("#obj1006").trigger('SCEventShow');
$("#obj1010").trigger('SCEventShow');
$("#obj1012").trigger('SCEventShow');
$("#obj1016").trigger('SCEventShow');
$("#obj1024").trigger('SCEventShow');
$("#obj1081").trigger('SCEventShow');
$("#obj5437").trigger('SCEventShow');
	localStorage.setItem('tapped','0');
localStorage.setItem('ready','true');

});