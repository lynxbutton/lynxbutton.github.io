pubcoder.projectID = pubcoder.projectID || "968537061CD4A6469E16DEA662F0DD9C";
pubcoder.project.id = pubcoder.project.id || "968537061CD4A6469E16DEA662F0DD9C";
pubcoder.project.title = pubcoder.project.title || "MGTO Underwater Story";
pubcoder.page.id = pubcoder.page.id || 979;
pubcoder.page.title = pubcoder.page.title || "7";
pubcoder.page.number = pubcoder.page.number || 7;
pubcoder.page.alias = pubcoder.page.alias || "";


var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;

var obj5114_animation_count = 0;
var obj5077_animation_count = 0;

/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj2142_onLoad_activeActionGroupIndex = -1;
var obj2142_onLoad_runningActionsCount = 0;
var obj2142_onLoad_loopCount = 0;
var obj2444_onLoad_activeActionGroupIndex = -1;
var obj2444_onLoad_runningActionsCount = 0;
var obj2444_onLoad_loopCount = 0;
var obj2457_onLoad_activeActionGroupIndex = -1;
var obj2457_onLoad_runningActionsCount = 0;
var obj2457_onLoad_loopCount = 0;
var obj2471_onLoad_activeActionGroupIndex = -1;
var obj2471_onLoad_runningActionsCount = 0;
var obj2471_onLoad_loopCount = 0;
var obj2485_onLoad_activeActionGroupIndex = -1;
var obj2485_onLoad_runningActionsCount = 0;
var obj2485_onLoad_loopCount = 0;
var obj2145_onLoad_activeActionGroupIndex = -1;
var obj2145_onLoad_runningActionsCount = 0;
var obj2145_onLoad_loopCount = 0;
var obj2200_onTap_activeActionGroupIndex = -1;
var obj2200_onTap_runningActionsCount = 0;
var obj2200_onTap_loopCount = 0;
var obj1966_onLoad_activeActionGroupIndex = -1;
var obj1966_onLoad_runningActionsCount = 0;
var obj1966_onLoad_loopCount = 0;
var obj1968_onLoad_activeActionGroupIndex = -1;
var obj1968_onLoad_runningActionsCount = 0;
var obj1968_onLoad_loopCount = 0;
var obj1970_onLoad_activeActionGroupIndex = -1;
var obj1970_onLoad_runningActionsCount = 0;
var obj1970_onLoad_loopCount = 0;
var obj1972_onLoad_activeActionGroupIndex = -1;
var obj1972_onLoad_runningActionsCount = 0;
var obj1972_onLoad_loopCount = 0;
var obj2090_onLoad_activeActionGroupIndex = -1;
var obj2090_onLoad_runningActionsCount = 0;
var obj2090_onLoad_loopCount = 0;
var obj2078_onLoad_activeActionGroupIndex = -1;
var obj2078_onLoad_runningActionsCount = 0;
var obj2078_onLoad_loopCount = 0;
var obj2064_onLoad_activeActionGroupIndex = -1;
var obj2064_onLoad_runningActionsCount = 0;
var obj2064_onLoad_loopCount = 0;
var obj2052_onLoad_activeActionGroupIndex = -1;
var obj2052_onLoad_runningActionsCount = 0;
var obj2052_onLoad_loopCount = 0;
var obj3267_onShow_activeActionGroupIndex = -1;
var obj3267_onShow_runningActionsCount = 0;
var obj3267_onShow_loopCount = 0;
var obj3270_onShow_activeActionGroupIndex = -1;
var obj3270_onShow_runningActionsCount = 0;
var obj3270_onShow_loopCount = 0;
var obj3273_onShow_activeActionGroupIndex = -1;
var obj3273_onShow_runningActionsCount = 0;
var obj3273_onShow_loopCount = 0;
var obj3276_onShow_activeActionGroupIndex = -1;
var obj3276_onShow_runningActionsCount = 0;
var obj3276_onShow_loopCount = 0;
var obj5114_onShow_activeActionGroupIndex = -1;
var obj5114_onShow_runningActionsCount = 0;
var obj5114_onShow_loopCount = 0;
var obj3279_onTap_activeActionGroupIndex = -1;
var obj3279_onTap_runningActionsCount = 0;
var obj3279_onTap_loopCount = 0;
var obj3279_onLoad_activeActionGroupIndex = -1;
var obj3279_onLoad_runningActionsCount = 0;
var obj3279_onLoad_loopCount = 0;
var obj3392_onLoad_activeActionGroupIndex = -1;
var obj3392_onLoad_runningActionsCount = 0;
var obj3392_onLoad_loopCount = 0;
var obj2251_SCEventRun_activeActionGroupIndex = -1;
var obj2251_SCEventRun_runningActionsCount = 0;
var obj2251_SCEventRun_loopCount = 0;
var obj2275_SCEventRun_activeActionGroupIndex = -1;
var obj2275_SCEventRun_runningActionsCount = 0;
var obj2275_SCEventRun_loopCount = 0;
var obj2298_SCEventRun_activeActionGroupIndex = -1;
var obj2298_SCEventRun_runningActionsCount = 0;
var obj2298_SCEventRun_loopCount = 0;
var obj2327_SCEventRun_activeActionGroupIndex = -1;
var obj2327_SCEventRun_runningActionsCount = 0;
var obj2327_SCEventRun_loopCount = 0;
var obj2193_SCEventRun_activeActionGroupIndex = -1;
var obj2193_SCEventRun_runningActionsCount = 0;
var obj2193_SCEventRun_loopCount = 0;
var obj2356_SCEventRun_activeActionGroupIndex = -1;
var obj2356_SCEventRun_runningActionsCount = 0;
var obj2356_SCEventRun_loopCount = 0;
var obj3365_SCEventRun_activeActionGroupIndex = -1;
var obj3365_SCEventRun_runningActionsCount = 0;
var obj3365_SCEventRun_loopCount = 0;
var obj4393_SCEventRun_activeActionGroupIndex = -1;
var obj4393_SCEventRun_runningActionsCount = 0;
var obj4393_SCEventRun_loopCount = 0;
var obj4723_SCEventRun_activeActionGroupIndex = -1;
var obj4723_SCEventRun_runningActionsCount = 0;
var obj4723_SCEventRun_loopCount = 0;
var obj5077_onDrag_activeActionGroupIndex = -1;
var obj5077_onDrag_runningActionsCount = 0;
var obj5077_onDrag_loopCount = 0;
var obj5077_onLoad_activeActionGroupIndex = -1;
var obj5077_onLoad_runningActionsCount = 0;
var obj5077_onLoad_loopCount = 0;
var obj5077_onTouchDown_activeActionGroupIndex = -1;
var obj5077_onTouchDown_runningActionsCount = 0;
var obj5077_onTouchDown_loopCount = 0;
var obj5077_SCActionDragDrop2199_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj5077_SCActionDragDrop2199_droppedOutsideTargetActions_runningActionsCount = 0;
var obj5077_SCActionDragDrop2199_droppedOutsideTargetActions_loopCount = 0;
var obj4001_onLoad_activeActionGroupIndex = -1;
var obj4001_onLoad_runningActionsCount = 0;
var obj4001_onLoad_loopCount = 0;
var obj4766_SCEventRun_activeActionGroupIndex = -1;
var obj4766_SCEventRun_runningActionsCount = 0;
var obj4766_SCEventRun_loopCount = 0;
var obj5431_onLoad_activeActionGroupIndex = -1;
var obj5431_onLoad_runningActionsCount = 0;
var obj5431_onLoad_loopCount = 0;
var obj5679_SCEventRun_activeActionGroupIndex = -1;
var obj5679_SCEventRun_runningActionsCount = 0;
var obj5679_SCEventRun_loopCount = 0;

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
	
initAnimation_5114();
function initAnimation_5114()
{
        var targetObjectId = "#obj5114";
        var widthSCAnimationObject = 339;
        var heightSCAnimationObject = 296;
		var framesPerSecond = 10;
		var howManyLoops = 0;
		var backToFirstFrame = true;
        var isAnimationInfinite = true;
        window.audio_animation_obj5114 = $("#")[0];
        window.hasAudioTrack_obj5114 = false

 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj5114_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj5114 = $(targetObjectId).spritespin("api");
}
initAnimation_5077();
function initAnimation_5077()
{
        var targetObjectId = "#obj5077";
        var widthSCAnimationObject = 339;
        var heightSCAnimationObject = 296;
		var framesPerSecond = 10;
		var howManyLoops = 0;
		var backToFirstFrame = false;
        var isAnimationInfinite = true;
        window.audio_animation_obj5077 = $("#")[0];
        window.hasAudioTrack_obj5077 = false

 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj5077_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj5077 = $(targetObjectId).spritespin("api");
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
		
obj2142_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2142_onLoad_activeActionGroupIndex = -1;
		$("#obj2142").trigger("obj2142_onLoad_ended");
		
		return;
	}
	window.obj2142_onLoad_activeActionGroupIndex = 0;
	



































//	action: run action list container
//	target: obj2251 
runActionList_2261();
function runActionList_2261() {
	window.obj2142_onLoad_runningActionsCount = obj2142_onLoad_runningActionsCount + 1;

	$("#obj2251").trigger('SCEventRun');
	setTimeout(function() {
		window.obj2142_onLoad_runningActionsCount = window.obj2142_onLoad_runningActionsCount - 1;

if (window.obj2142_onLoad_runningActionsCount == 0) {
	obj2142_onLoad_actionGroup1();
}		
	}, 1);
}






};
obj2142_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2142_onLoad_activeActionGroupIndex = -1;
		$("#obj2142").trigger("obj2142_onLoad_ended");
		
		return;
	}
	window.obj2142_onLoad_activeActionGroupIndex = 1;
	















//	action: loop
loop_obj2142_onLoad();
function loop_obj2142_onLoad() {

	var loopCount = 0;

	window.obj2142_onLoad_loopCount = window.obj2142_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj2142_onLoad_loopCount > loopCount) {
		window.obj2142_onLoad_loopCount = 0
		obj2142_onLoad_actionGroup2();
	} else {
		obj2142_onLoad_actionGroup0();
	}

}


























};
obj2142_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2142_onLoad_activeActionGroupIndex = -1;
		$("#obj2142").trigger("obj2142_onLoad_ended");
		
		return;
	}
	window.obj2142_onLoad_activeActionGroupIndex = 2;
	










































};
obj2444_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2444_onLoad_activeActionGroupIndex = -1;
		$("#obj2444").trigger("obj2444_onLoad_ended");
		
		return;
	}
	window.obj2444_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj2444 
move_2447();
function move_2447() {
	window.obj2444_onLoad_runningActionsCount = obj2444_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2444");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-92";
	var moveY = "+=254";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj2444_onLoad_runningActionsCount = window.obj2444_onLoad_runningActionsCount - 1;

if (window.obj2444_onLoad_runningActionsCount == 0) {
	obj2444_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj2444_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2444_onLoad_activeActionGroupIndex = -1;
		$("#obj2444").trigger("obj2444_onLoad_ended");
		
		return;
	}
	window.obj2444_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj2444 
move_2448();
function move_2448() {
	window.obj2444_onLoad_runningActionsCount = obj2444_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2444");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-273";
	var moveY = "+=196";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj2444_onLoad_runningActionsCount = window.obj2444_onLoad_runningActionsCount - 1;

if (window.obj2444_onLoad_runningActionsCount == 0) {
	obj2444_onLoad_actionGroup2();
}
		}, 1);
	});
}






































};
obj2444_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2444_onLoad_activeActionGroupIndex = -1;
		$("#obj2444").trigger("obj2444_onLoad_ended");
		
		return;
	}
	window.obj2444_onLoad_activeActionGroupIndex = 2;
	



//	action: move
//	target: obj2444 
move_2449();
function move_2449() {
	window.obj2444_onLoad_runningActionsCount = obj2444_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2444");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-268";
	var moveY = "+=96";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj2444_onLoad_runningActionsCount = window.obj2444_onLoad_runningActionsCount - 1;

if (window.obj2444_onLoad_runningActionsCount == 0) {
	obj2444_onLoad_actionGroup3();
}
		}, 1);
	});
}






































};
obj2444_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2444_onLoad_activeActionGroupIndex = -1;
		$("#obj2444").trigger("obj2444_onLoad_ended");
		
		return;
	}
	window.obj2444_onLoad_activeActionGroupIndex = 3;
	



//	action: move
//	target: obj2444 
move_2450();
function move_2450() {
	window.obj2444_onLoad_runningActionsCount = obj2444_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2444");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-173";
	var moveY = "+=230";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj2444_onLoad_runningActionsCount = window.obj2444_onLoad_runningActionsCount - 1;

if (window.obj2444_onLoad_runningActionsCount == 0) {
	obj2444_onLoad_actionGroup4();
}
		}, 1);
	});
}






































};
obj2444_onLoad_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2444_onLoad_activeActionGroupIndex = -1;
		$("#obj2444").trigger("obj2444_onLoad_ended");
		
		return;
	}
	window.obj2444_onLoad_activeActionGroupIndex = 4;
	



//	action: move
//	target: obj2444 
move_2451();
function move_2451() {
	window.obj2444_onLoad_runningActionsCount = obj2444_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2444");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-153";
	var moveY = "+=250";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj2444_onLoad_runningActionsCount = window.obj2444_onLoad_runningActionsCount - 1;

if (window.obj2444_onLoad_runningActionsCount == 0) {
	obj2444_onLoad_actionGroup5();
}
		}, 1);
	});
}






































};
obj2444_onLoad_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2444_onLoad_activeActionGroupIndex = -1;
		$("#obj2444").trigger("obj2444_onLoad_ended");
		
		return;
	}
	window.obj2444_onLoad_activeActionGroupIndex = 5;
	



//	action: move
//	target: obj2444 
move_2452();
function move_2452() {
	window.obj2444_onLoad_runningActionsCount = obj2444_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2444");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-343";
	var moveY = "+=254";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj2444_onLoad_runningActionsCount = window.obj2444_onLoad_runningActionsCount - 1;

if (window.obj2444_onLoad_runningActionsCount == 0) {
	obj2444_onLoad_actionGroup6();
}
		}, 1);
	});
}






































};
obj2444_onLoad_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2444_onLoad_activeActionGroupIndex = -1;
		$("#obj2444").trigger("obj2444_onLoad_ended");
		
		return;
	}
	window.obj2444_onLoad_activeActionGroupIndex = 6;
	



//	action: move
//	target: obj2444 
move_2455();
function move_2455() {
	window.obj2444_onLoad_runningActionsCount = obj2444_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2444");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1297;
	var moveY = -247;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj2444_onLoad_runningActionsCount = window.obj2444_onLoad_runningActionsCount - 1;

if (window.obj2444_onLoad_runningActionsCount == 0) {
	obj2444_onLoad_actionGroup7();
}
		}, 1);
	});
}












//	action: wait
wait_2453();
function wait_2453() {
	window.obj2444_onLoad_runningActionsCount = obj2444_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj2444_onLoad_runningActionsCount = window.obj2444_onLoad_runningActionsCount - 1;

if (window.obj2444_onLoad_runningActionsCount == 0) {
	obj2444_onLoad_actionGroup7();
}
	}, 1000);
}

























};
obj2444_onLoad_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2444_onLoad_activeActionGroupIndex = -1;
		$("#obj2444").trigger("obj2444_onLoad_ended");
		
		return;
	}
	window.obj2444_onLoad_activeActionGroupIndex = 7;
	















//	action: loop
loop_obj2444_onLoad();
function loop_obj2444_onLoad() {

	var loopCount = 0;

	window.obj2444_onLoad_loopCount = window.obj2444_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj2444_onLoad_loopCount > loopCount) {
		window.obj2444_onLoad_loopCount = 0
		obj2444_onLoad_actionGroup8();
	} else {
		obj2444_onLoad_actionGroup0();
	}

}


























};
obj2444_onLoad_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2444_onLoad_activeActionGroupIndex = -1;
		$("#obj2444").trigger("obj2444_onLoad_ended");
		
		return;
	}
	window.obj2444_onLoad_activeActionGroupIndex = 8;
	










































};
obj2457_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2457_onLoad_activeActionGroupIndex = -1;
		$("#obj2457").trigger("obj2457_onLoad_ended");
		
		return;
	}
	window.obj2457_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj2457 
move_2460();
function move_2460() {
	window.obj2457_onLoad_runningActionsCount = obj2457_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2457");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-269";
	var moveY = "+=-40";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1300, easing, function() {
		setTimeout(function() {
			window.obj2457_onLoad_runningActionsCount = window.obj2457_onLoad_runningActionsCount - 1;

if (window.obj2457_onLoad_runningActionsCount == 0) {
	obj2457_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj2457_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2457_onLoad_activeActionGroupIndex = -1;
		$("#obj2457").trigger("obj2457_onLoad_ended");
		
		return;
	}
	window.obj2457_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj2457 
move_2461();
function move_2461() {
	window.obj2457_onLoad_runningActionsCount = obj2457_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2457");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-263";
	var moveY = "+=-46";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj2457_onLoad_runningActionsCount = window.obj2457_onLoad_runningActionsCount - 1;

if (window.obj2457_onLoad_runningActionsCount == 0) {
	obj2457_onLoad_actionGroup2();
}
		}, 1);
	});
}






































};
obj2457_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2457_onLoad_activeActionGroupIndex = -1;
		$("#obj2457").trigger("obj2457_onLoad_ended");
		
		return;
	}
	window.obj2457_onLoad_activeActionGroupIndex = 2;
	



//	action: move
//	target: obj2457 
move_2462();
function move_2462() {
	window.obj2457_onLoad_runningActionsCount = obj2457_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2457");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-233";
	var moveY = "+=-14";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1300, easing, function() {
		setTimeout(function() {
			window.obj2457_onLoad_runningActionsCount = window.obj2457_onLoad_runningActionsCount - 1;

if (window.obj2457_onLoad_runningActionsCount == 0) {
	obj2457_onLoad_actionGroup3();
}
		}, 1);
	});
}






































};
obj2457_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2457_onLoad_activeActionGroupIndex = -1;
		$("#obj2457").trigger("obj2457_onLoad_ended");
		
		return;
	}
	window.obj2457_onLoad_activeActionGroupIndex = 3;
	



//	action: move
//	target: obj2457 
move_2463();
function move_2463() {
	window.obj2457_onLoad_runningActionsCount = obj2457_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2457");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-266";
	var moveY = "+=5";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj2457_onLoad_runningActionsCount = window.obj2457_onLoad_runningActionsCount - 1;

if (window.obj2457_onLoad_runningActionsCount == 0) {
	obj2457_onLoad_actionGroup4();
}
		}, 1);
	});
}






































};
obj2457_onLoad_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2457_onLoad_activeActionGroupIndex = -1;
		$("#obj2457").trigger("obj2457_onLoad_ended");
		
		return;
	}
	window.obj2457_onLoad_activeActionGroupIndex = 4;
	



//	action: move
//	target: obj2457 
move_2464();
function move_2464() {
	window.obj2457_onLoad_runningActionsCount = obj2457_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2457");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-238";
	var moveY = "+=46";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1300, easing, function() {
		setTimeout(function() {
			window.obj2457_onLoad_runningActionsCount = window.obj2457_onLoad_runningActionsCount - 1;

if (window.obj2457_onLoad_runningActionsCount == 0) {
	obj2457_onLoad_actionGroup5();
}
		}, 1);
	});
}






































};
obj2457_onLoad_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2457_onLoad_activeActionGroupIndex = -1;
		$("#obj2457").trigger("obj2457_onLoad_ended");
		
		return;
	}
	window.obj2457_onLoad_activeActionGroupIndex = 5;
	



//	action: move
//	target: obj2457 
move_2465();
function move_2465() {
	window.obj2457_onLoad_runningActionsCount = obj2457_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2457");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-170";
	var moveY = "+=124";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj2457_onLoad_runningActionsCount = window.obj2457_onLoad_runningActionsCount - 1;

if (window.obj2457_onLoad_runningActionsCount == 0) {
	obj2457_onLoad_actionGroup6();
}
		}, 1);
	});
}






































};
obj2457_onLoad_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2457_onLoad_activeActionGroupIndex = -1;
		$("#obj2457").trigger("obj2457_onLoad_ended");
		
		return;
	}
	window.obj2457_onLoad_activeActionGroupIndex = 6;
	



//	action: move
//	target: obj2457 
move_2466();
function move_2466() {
	window.obj2457_onLoad_runningActionsCount = obj2457_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2457");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-220";
	var moveY = "+=25";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1300, easing, function() {
		setTimeout(function() {
			window.obj2457_onLoad_runningActionsCount = window.obj2457_onLoad_runningActionsCount - 1;

if (window.obj2457_onLoad_runningActionsCount == 0) {
	obj2457_onLoad_actionGroup7();
}
		}, 1);
	});
}






































};
obj2457_onLoad_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2457_onLoad_activeActionGroupIndex = -1;
		$("#obj2457").trigger("obj2457_onLoad_ended");
		
		return;
	}
	window.obj2457_onLoad_activeActionGroupIndex = 7;
	



//	action: move
//	target: obj2457 
move_2468();
function move_2468() {
	window.obj2457_onLoad_runningActionsCount = obj2457_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2457");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=1700";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj2457_onLoad_runningActionsCount = window.obj2457_onLoad_runningActionsCount - 1;

if (window.obj2457_onLoad_runningActionsCount == 0) {
	obj2457_onLoad_actionGroup8();
}
		}, 1);
	});
}












//	action: wait
wait_2467();
function wait_2467() {
	window.obj2457_onLoad_runningActionsCount = obj2457_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj2457_onLoad_runningActionsCount = window.obj2457_onLoad_runningActionsCount - 1;

if (window.obj2457_onLoad_runningActionsCount == 0) {
	obj2457_onLoad_actionGroup8();
}
	}, 1000);
}

























};
obj2457_onLoad_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2457_onLoad_activeActionGroupIndex = -1;
		$("#obj2457").trigger("obj2457_onLoad_ended");
		
		return;
	}
	window.obj2457_onLoad_activeActionGroupIndex = 8;
	















//	action: loop
loop_obj2457_onLoad();
function loop_obj2457_onLoad() {

	var loopCount = 0;

	window.obj2457_onLoad_loopCount = window.obj2457_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj2457_onLoad_loopCount > loopCount) {
		window.obj2457_onLoad_loopCount = 0
		obj2457_onLoad_actionGroup9();
	} else {
		obj2457_onLoad_actionGroup0();
	}

}


























};
obj2457_onLoad_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2457_onLoad_activeActionGroupIndex = -1;
		$("#obj2457").trigger("obj2457_onLoad_ended");
		
		return;
	}
	window.obj2457_onLoad_activeActionGroupIndex = 9;
	















//	action: loop
loop_obj2457_onLoad();
function loop_obj2457_onLoad() {

	var loopCount = 0;

	window.obj2457_onLoad_loopCount = window.obj2457_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj2457_onLoad_loopCount > loopCount) {
		window.obj2457_onLoad_loopCount = 0
		obj2457_onLoad_actionGroup10();
	} else {
		obj2457_onLoad_actionGroup0();
	}

}


























};
obj2457_onLoad_actionGroup10 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2457_onLoad_activeActionGroupIndex = -1;
		$("#obj2457").trigger("obj2457_onLoad_ended");
		
		return;
	}
	window.obj2457_onLoad_activeActionGroupIndex = 10;
	










































};
obj2471_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2471_onLoad_activeActionGroupIndex = -1;
		$("#obj2471").trigger("obj2471_onLoad_ended");
		
		return;
	}
	window.obj2471_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj2471 
move_2474();
function move_2474() {
	window.obj2471_onLoad_runningActionsCount = obj2471_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2471");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-269";
	var moveY = "+=-40";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj2471_onLoad_runningActionsCount = window.obj2471_onLoad_runningActionsCount - 1;

if (window.obj2471_onLoad_runningActionsCount == 0) {
	obj2471_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj2471_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2471_onLoad_activeActionGroupIndex = -1;
		$("#obj2471").trigger("obj2471_onLoad_ended");
		
		return;
	}
	window.obj2471_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj2471 
move_2475();
function move_2475() {
	window.obj2471_onLoad_runningActionsCount = obj2471_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2471");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-263";
	var moveY = "+=-46";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj2471_onLoad_runningActionsCount = window.obj2471_onLoad_runningActionsCount - 1;

if (window.obj2471_onLoad_runningActionsCount == 0) {
	obj2471_onLoad_actionGroup2();
}
		}, 1);
	});
}






































};
obj2471_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2471_onLoad_activeActionGroupIndex = -1;
		$("#obj2471").trigger("obj2471_onLoad_ended");
		
		return;
	}
	window.obj2471_onLoad_activeActionGroupIndex = 2;
	



//	action: move
//	target: obj2471 
move_2476();
function move_2476() {
	window.obj2471_onLoad_runningActionsCount = obj2471_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2471");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-233";
	var moveY = "+=-14";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj2471_onLoad_runningActionsCount = window.obj2471_onLoad_runningActionsCount - 1;

if (window.obj2471_onLoad_runningActionsCount == 0) {
	obj2471_onLoad_actionGroup3();
}
		}, 1);
	});
}






































};
obj2471_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2471_onLoad_activeActionGroupIndex = -1;
		$("#obj2471").trigger("obj2471_onLoad_ended");
		
		return;
	}
	window.obj2471_onLoad_activeActionGroupIndex = 3;
	



//	action: move
//	target: obj2471 
move_2477();
function move_2477() {
	window.obj2471_onLoad_runningActionsCount = obj2471_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2471");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-266";
	var moveY = "+=5";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj2471_onLoad_runningActionsCount = window.obj2471_onLoad_runningActionsCount - 1;

if (window.obj2471_onLoad_runningActionsCount == 0) {
	obj2471_onLoad_actionGroup4();
}
		}, 1);
	});
}






































};
obj2471_onLoad_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2471_onLoad_activeActionGroupIndex = -1;
		$("#obj2471").trigger("obj2471_onLoad_ended");
		
		return;
	}
	window.obj2471_onLoad_activeActionGroupIndex = 4;
	



//	action: move
//	target: obj2471 
move_2478();
function move_2478() {
	window.obj2471_onLoad_runningActionsCount = obj2471_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2471");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-238";
	var moveY = "+=46";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj2471_onLoad_runningActionsCount = window.obj2471_onLoad_runningActionsCount - 1;

if (window.obj2471_onLoad_runningActionsCount == 0) {
	obj2471_onLoad_actionGroup5();
}
		}, 1);
	});
}






































};
obj2471_onLoad_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2471_onLoad_activeActionGroupIndex = -1;
		$("#obj2471").trigger("obj2471_onLoad_ended");
		
		return;
	}
	window.obj2471_onLoad_activeActionGroupIndex = 5;
	



//	action: move
//	target: obj2471 
move_2479();
function move_2479() {
	window.obj2471_onLoad_runningActionsCount = obj2471_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2471");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-170";
	var moveY = "+=124";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj2471_onLoad_runningActionsCount = window.obj2471_onLoad_runningActionsCount - 1;

if (window.obj2471_onLoad_runningActionsCount == 0) {
	obj2471_onLoad_actionGroup6();
}
		}, 1);
	});
}






































};
obj2471_onLoad_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2471_onLoad_activeActionGroupIndex = -1;
		$("#obj2471").trigger("obj2471_onLoad_ended");
		
		return;
	}
	window.obj2471_onLoad_activeActionGroupIndex = 6;
	



//	action: move
//	target: obj2471 
move_2480();
function move_2480() {
	window.obj2471_onLoad_runningActionsCount = obj2471_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2471");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-220";
	var moveY = "+=25";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj2471_onLoad_runningActionsCount = window.obj2471_onLoad_runningActionsCount - 1;

if (window.obj2471_onLoad_runningActionsCount == 0) {
	obj2471_onLoad_actionGroup7();
}
		}, 1);
	});
}






































};
obj2471_onLoad_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2471_onLoad_activeActionGroupIndex = -1;
		$("#obj2471").trigger("obj2471_onLoad_ended");
		
		return;
	}
	window.obj2471_onLoad_activeActionGroupIndex = 7;
	



//	action: move
//	target: obj2471 
move_2482();
function move_2482() {
	window.obj2471_onLoad_runningActionsCount = obj2471_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2471");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=1700";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj2471_onLoad_runningActionsCount = window.obj2471_onLoad_runningActionsCount - 1;

if (window.obj2471_onLoad_runningActionsCount == 0) {
	obj2471_onLoad_actionGroup8();
}
		}, 1);
	});
}












//	action: wait
wait_2481();
function wait_2481() {
	window.obj2471_onLoad_runningActionsCount = obj2471_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj2471_onLoad_runningActionsCount = window.obj2471_onLoad_runningActionsCount - 1;

if (window.obj2471_onLoad_runningActionsCount == 0) {
	obj2471_onLoad_actionGroup8();
}
	}, 1000);
}

























};
obj2471_onLoad_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2471_onLoad_activeActionGroupIndex = -1;
		$("#obj2471").trigger("obj2471_onLoad_ended");
		
		return;
	}
	window.obj2471_onLoad_activeActionGroupIndex = 8;
	















//	action: loop
loop_obj2471_onLoad();
function loop_obj2471_onLoad() {

	var loopCount = 0;

	window.obj2471_onLoad_loopCount = window.obj2471_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj2471_onLoad_loopCount > loopCount) {
		window.obj2471_onLoad_loopCount = 0
		obj2471_onLoad_actionGroup9();
	} else {
		obj2471_onLoad_actionGroup0();
	}

}


























};
obj2471_onLoad_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2471_onLoad_activeActionGroupIndex = -1;
		$("#obj2471").trigger("obj2471_onLoad_ended");
		
		return;
	}
	window.obj2471_onLoad_activeActionGroupIndex = 9;
	















//	action: loop
loop_obj2471_onLoad();
function loop_obj2471_onLoad() {

	var loopCount = 0;

	window.obj2471_onLoad_loopCount = window.obj2471_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj2471_onLoad_loopCount > loopCount) {
		window.obj2471_onLoad_loopCount = 0
		obj2471_onLoad_actionGroup10();
	} else {
		obj2471_onLoad_actionGroup0();
	}

}


























};
obj2471_onLoad_actionGroup10 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2471_onLoad_activeActionGroupIndex = -1;
		$("#obj2471").trigger("obj2471_onLoad_ended");
		
		return;
	}
	window.obj2471_onLoad_activeActionGroupIndex = 10;
	










































};
obj2485_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2485_onLoad_activeActionGroupIndex = -1;
		$("#obj2485").trigger("obj2485_onLoad_ended");
		
		return;
	}
	window.obj2485_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj2485 
move_2488();
function move_2488() {
	window.obj2485_onLoad_runningActionsCount = obj2485_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2485");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-269";
	var moveY = "+=-40";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1500, easing, function() {
		setTimeout(function() {
			window.obj2485_onLoad_runningActionsCount = window.obj2485_onLoad_runningActionsCount - 1;

if (window.obj2485_onLoad_runningActionsCount == 0) {
	obj2485_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj2485_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2485_onLoad_activeActionGroupIndex = -1;
		$("#obj2485").trigger("obj2485_onLoad_ended");
		
		return;
	}
	window.obj2485_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj2485 
move_2489();
function move_2489() {
	window.obj2485_onLoad_runningActionsCount = obj2485_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2485");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-263";
	var moveY = "+=-46";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj2485_onLoad_runningActionsCount = window.obj2485_onLoad_runningActionsCount - 1;

if (window.obj2485_onLoad_runningActionsCount == 0) {
	obj2485_onLoad_actionGroup2();
}
		}, 1);
	});
}






































};
obj2485_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2485_onLoad_activeActionGroupIndex = -1;
		$("#obj2485").trigger("obj2485_onLoad_ended");
		
		return;
	}
	window.obj2485_onLoad_activeActionGroupIndex = 2;
	



//	action: move
//	target: obj2485 
move_2490();
function move_2490() {
	window.obj2485_onLoad_runningActionsCount = obj2485_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2485");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-233";
	var moveY = "+=-14";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1500, easing, function() {
		setTimeout(function() {
			window.obj2485_onLoad_runningActionsCount = window.obj2485_onLoad_runningActionsCount - 1;

if (window.obj2485_onLoad_runningActionsCount == 0) {
	obj2485_onLoad_actionGroup3();
}
		}, 1);
	});
}






































};
obj2485_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2485_onLoad_activeActionGroupIndex = -1;
		$("#obj2485").trigger("obj2485_onLoad_ended");
		
		return;
	}
	window.obj2485_onLoad_activeActionGroupIndex = 3;
	



//	action: move
//	target: obj2485 
move_2491();
function move_2491() {
	window.obj2485_onLoad_runningActionsCount = obj2485_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2485");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-266";
	var moveY = "+=5";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj2485_onLoad_runningActionsCount = window.obj2485_onLoad_runningActionsCount - 1;

if (window.obj2485_onLoad_runningActionsCount == 0) {
	obj2485_onLoad_actionGroup4();
}
		}, 1);
	});
}






































};
obj2485_onLoad_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2485_onLoad_activeActionGroupIndex = -1;
		$("#obj2485").trigger("obj2485_onLoad_ended");
		
		return;
	}
	window.obj2485_onLoad_activeActionGroupIndex = 4;
	



//	action: move
//	target: obj2485 
move_2492();
function move_2492() {
	window.obj2485_onLoad_runningActionsCount = obj2485_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2485");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-238";
	var moveY = "+=46";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1500, easing, function() {
		setTimeout(function() {
			window.obj2485_onLoad_runningActionsCount = window.obj2485_onLoad_runningActionsCount - 1;

if (window.obj2485_onLoad_runningActionsCount == 0) {
	obj2485_onLoad_actionGroup5();
}
		}, 1);
	});
}






































};
obj2485_onLoad_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2485_onLoad_activeActionGroupIndex = -1;
		$("#obj2485").trigger("obj2485_onLoad_ended");
		
		return;
	}
	window.obj2485_onLoad_activeActionGroupIndex = 5;
	



//	action: move
//	target: obj2485 
move_2493();
function move_2493() {
	window.obj2485_onLoad_runningActionsCount = obj2485_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2485");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-170";
	var moveY = "+=124";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj2485_onLoad_runningActionsCount = window.obj2485_onLoad_runningActionsCount - 1;

if (window.obj2485_onLoad_runningActionsCount == 0) {
	obj2485_onLoad_actionGroup6();
}
		}, 1);
	});
}






































};
obj2485_onLoad_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2485_onLoad_activeActionGroupIndex = -1;
		$("#obj2485").trigger("obj2485_onLoad_ended");
		
		return;
	}
	window.obj2485_onLoad_activeActionGroupIndex = 6;
	



//	action: move
//	target: obj2485 
move_2494();
function move_2494() {
	window.obj2485_onLoad_runningActionsCount = obj2485_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2485");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-220";
	var moveY = "+=25";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1500, easing, function() {
		setTimeout(function() {
			window.obj2485_onLoad_runningActionsCount = window.obj2485_onLoad_runningActionsCount - 1;

if (window.obj2485_onLoad_runningActionsCount == 0) {
	obj2485_onLoad_actionGroup7();
}
		}, 1);
	});
}






































};
obj2485_onLoad_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2485_onLoad_activeActionGroupIndex = -1;
		$("#obj2485").trigger("obj2485_onLoad_ended");
		
		return;
	}
	window.obj2485_onLoad_activeActionGroupIndex = 7;
	



//	action: move
//	target: obj2485 
move_2496();
function move_2496() {
	window.obj2485_onLoad_runningActionsCount = obj2485_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2485");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=1700";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj2485_onLoad_runningActionsCount = window.obj2485_onLoad_runningActionsCount - 1;

if (window.obj2485_onLoad_runningActionsCount == 0) {
	obj2485_onLoad_actionGroup8();
}
		}, 1);
	});
}












//	action: wait
wait_2495();
function wait_2495() {
	window.obj2485_onLoad_runningActionsCount = obj2485_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj2485_onLoad_runningActionsCount = window.obj2485_onLoad_runningActionsCount - 1;

if (window.obj2485_onLoad_runningActionsCount == 0) {
	obj2485_onLoad_actionGroup8();
}
	}, 1000);
}

























};
obj2485_onLoad_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2485_onLoad_activeActionGroupIndex = -1;
		$("#obj2485").trigger("obj2485_onLoad_ended");
		
		return;
	}
	window.obj2485_onLoad_activeActionGroupIndex = 8;
	















//	action: loop
loop_obj2485_onLoad();
function loop_obj2485_onLoad() {

	var loopCount = 0;

	window.obj2485_onLoad_loopCount = window.obj2485_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj2485_onLoad_loopCount > loopCount) {
		window.obj2485_onLoad_loopCount = 0
		obj2485_onLoad_actionGroup9();
	} else {
		obj2485_onLoad_actionGroup0();
	}

}


























};
obj2485_onLoad_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2485_onLoad_activeActionGroupIndex = -1;
		$("#obj2485").trigger("obj2485_onLoad_ended");
		
		return;
	}
	window.obj2485_onLoad_activeActionGroupIndex = 9;
	















//	action: loop
loop_obj2485_onLoad();
function loop_obj2485_onLoad() {

	var loopCount = 0;

	window.obj2485_onLoad_loopCount = window.obj2485_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj2485_onLoad_loopCount > loopCount) {
		window.obj2485_onLoad_loopCount = 0
		obj2485_onLoad_actionGroup10();
	} else {
		obj2485_onLoad_actionGroup0();
	}

}


























};
obj2485_onLoad_actionGroup10 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2485_onLoad_activeActionGroupIndex = -1;
		$("#obj2485").trigger("obj2485_onLoad_ended");
		
		return;
	}
	window.obj2485_onLoad_activeActionGroupIndex = 10;
	










































};
obj2145_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2145_onLoad_activeActionGroupIndex = -1;
		$("#obj2145").trigger("obj2145_onLoad_ended");
		
		return;
	}
	window.obj2145_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj2145 
move_2148();
function move_2148() {
	window.obj2145_onLoad_runningActionsCount = obj2145_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2145");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=279";
	var moveY = "+=-36";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj2145_onLoad_runningActionsCount = window.obj2145_onLoad_runningActionsCount - 1;

if (window.obj2145_onLoad_runningActionsCount == 0) {
	obj2145_onLoad_actionGroup1();
}
		}, 1);
	});
}










//	action: rotate 
//	target: obj2145 
rotate_2153();
function rotate_2153() {
	window.obj2145_onLoad_runningActionsCount = obj2145_onLoad_runningActionsCount + 1;

	
	var targetObjectId = "#obj2145";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2145';
	var transformOriginX = '50%';
	var transformOriginY = '51.04712%';
	var rotationToDegrees = '-6';
	var rotationSpeed = 1;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = false;
	if (isInfinite) { rotate_2153_completed(); }

	//TweenMax.to(targetObjectId, 1, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_2153_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2153_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2153_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_2153_completed() {
	setTimeout(function() {
		window.obj2145_onLoad_runningActionsCount = window.obj2145_onLoad_runningActionsCount - 1;

if (window.obj2145_onLoad_runningActionsCount == 0) {
	obj2145_onLoad_actionGroup1();
}
	}, 1);
}




























};
obj2145_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2145_onLoad_activeActionGroupIndex = -1;
		$("#obj2145").trigger("obj2145_onLoad_ended");
		
		return;
	}
	window.obj2145_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj2145 
move_2149();
function move_2149() {
	window.obj2145_onLoad_runningActionsCount = obj2145_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2145");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=232";
	var moveY = "+=4";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 900, easing, function() {
		setTimeout(function() {
			window.obj2145_onLoad_runningActionsCount = window.obj2145_onLoad_runningActionsCount - 1;

if (window.obj2145_onLoad_runningActionsCount == 0) {
	obj2145_onLoad_actionGroup2();
}
		}, 1);
	});
}










//	action: rotate 
//	target: obj2145 
rotate_2154();
function rotate_2154() {
	window.obj2145_onLoad_runningActionsCount = obj2145_onLoad_runningActionsCount + 1;

	
	var targetObjectId = "#obj2145";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2145';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '10';
	var rotationSpeed = 0.9;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = false;
	if (isInfinite) { rotate_2154_completed(); }

	//TweenMax.to(targetObjectId, 0.9, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_2154_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2154_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2154_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_2154_completed() {
	setTimeout(function() {
		window.obj2145_onLoad_runningActionsCount = window.obj2145_onLoad_runningActionsCount - 1;

if (window.obj2145_onLoad_runningActionsCount == 0) {
	obj2145_onLoad_actionGroup2();
}
	}, 1);
}




























};
obj2145_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2145_onLoad_activeActionGroupIndex = -1;
		$("#obj2145").trigger("obj2145_onLoad_ended");
		
		return;
	}
	window.obj2145_onLoad_activeActionGroupIndex = 2;
	



//	action: move
//	target: obj2145 
move_2150();
function move_2150() {
	window.obj2145_onLoad_runningActionsCount = obj2145_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2145");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=236";
	var moveY = "+=56";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj2145_onLoad_runningActionsCount = window.obj2145_onLoad_runningActionsCount - 1;

if (window.obj2145_onLoad_runningActionsCount == 0) {
	obj2145_onLoad_actionGroup3();
}
		}, 1);
	});
}






































};
obj2145_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2145_onLoad_activeActionGroupIndex = -1;
		$("#obj2145").trigger("obj2145_onLoad_ended");
		
		return;
	}
	window.obj2145_onLoad_activeActionGroupIndex = 3;
	



//	action: move
//	target: obj2145 
move_2151();
function move_2151() {
	window.obj2145_onLoad_runningActionsCount = obj2145_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2145");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=194";
	var moveY = "+=48";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj2145_onLoad_runningActionsCount = window.obj2145_onLoad_runningActionsCount - 1;

if (window.obj2145_onLoad_runningActionsCount == 0) {
	obj2145_onLoad_actionGroup4();
}
		}, 1);
	});
}










//	action: rotate 
//	target: obj2145 
rotate_2155();
function rotate_2155() {
	window.obj2145_onLoad_runningActionsCount = obj2145_onLoad_runningActionsCount + 1;

	
	var targetObjectId = "#obj2145";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2145';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '-10';
	var rotationSpeed = 1;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = false;
	if (isInfinite) { rotate_2155_completed(); }

	//TweenMax.to(targetObjectId, 1, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_2155_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2155_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2155_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_2155_completed() {
	setTimeout(function() {
		window.obj2145_onLoad_runningActionsCount = window.obj2145_onLoad_runningActionsCount - 1;

if (window.obj2145_onLoad_runningActionsCount == 0) {
	obj2145_onLoad_actionGroup4();
}
	}, 1);
}




























};
obj2145_onLoad_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2145_onLoad_activeActionGroupIndex = -1;
		$("#obj2145").trigger("obj2145_onLoad_ended");
		
		return;
	}
	window.obj2145_onLoad_activeActionGroupIndex = 4;
	



//	action: move
//	target: obj2145 
move_2152();
function move_2152() {
	window.obj2145_onLoad_runningActionsCount = obj2145_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2145");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=202";
	var moveY = "+=-22";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 800, easing, function() {
		setTimeout(function() {
			window.obj2145_onLoad_runningActionsCount = window.obj2145_onLoad_runningActionsCount - 1;

if (window.obj2145_onLoad_runningActionsCount == 0) {
	obj2145_onLoad_actionGroup5();
}
		}, 1);
	});
}






































};
obj2145_onLoad_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2145_onLoad_activeActionGroupIndex = -1;
		$("#obj2145").trigger("obj2145_onLoad_ended");
		
		return;
	}
	window.obj2145_onLoad_activeActionGroupIndex = 5;
	



//	action: move
//	target: obj2145 
move_2156();
function move_2156() {
	window.obj2145_onLoad_runningActionsCount = obj2145_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2145");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=608";
	var moveY = "+=-68";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj2145_onLoad_runningActionsCount = window.obj2145_onLoad_runningActionsCount - 1;

if (window.obj2145_onLoad_runningActionsCount == 0) {
	obj2145_onLoad_actionGroup6();
}
		}, 1);
	});
}






































};
obj2145_onLoad_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2145_onLoad_activeActionGroupIndex = -1;
		$("#obj2145").trigger("obj2145_onLoad_ended");
		
		return;
	}
	window.obj2145_onLoad_activeActionGroupIndex = 6;
	



//	action: move
//	target: obj2145 
move_2165();
function move_2165() {
	window.obj2145_onLoad_runningActionsCount = obj2145_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2145");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=294";
	var moveY = "+=11";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 800, easing, function() {
		setTimeout(function() {
			window.obj2145_onLoad_runningActionsCount = window.obj2145_onLoad_runningActionsCount - 1;

if (window.obj2145_onLoad_runningActionsCount == 0) {
	obj2145_onLoad_actionGroup7();
}
		}, 1);
	});
}






































};
obj2145_onLoad_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2145_onLoad_activeActionGroupIndex = -1;
		$("#obj2145").trigger("obj2145_onLoad_ended");
		
		return;
	}
	window.obj2145_onLoad_activeActionGroupIndex = 7;
	



//	action: move
//	target: obj2145 
move_2158();
function move_2158() {
	window.obj2145_onLoad_runningActionsCount = obj2145_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2145");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = -631;
	var moveY = 61;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj2145_onLoad_runningActionsCount = window.obj2145_onLoad_runningActionsCount - 1;

if (window.obj2145_onLoad_runningActionsCount == 0) {
	obj2145_onLoad_actionGroup8();
}
		}, 1);
	});
}










//	action: rotate 
//	target: obj2145 
rotate_2166();
function rotate_2166() {
	window.obj2145_onLoad_runningActionsCount = obj2145_onLoad_runningActionsCount + 1;

	
	var targetObjectId = "#obj2145";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2145';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '5';
	var rotationSpeed = 0;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = false;
	if (isInfinite) { rotate_2166_completed(); }

	//TweenMax.to(targetObjectId, 0, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_2166_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2166_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2166_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_2166_completed() {
	setTimeout(function() {
		window.obj2145_onLoad_runningActionsCount = window.obj2145_onLoad_runningActionsCount - 1;

if (window.obj2145_onLoad_runningActionsCount == 0) {
	obj2145_onLoad_actionGroup8();
}
	}, 1);
}


//	action: wait
wait_2157();
function wait_2157() {
	window.obj2145_onLoad_runningActionsCount = obj2145_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj2145_onLoad_runningActionsCount = window.obj2145_onLoad_runningActionsCount - 1;

if (window.obj2145_onLoad_runningActionsCount == 0) {
	obj2145_onLoad_actionGroup8();
}
	}, 700);
}

























};
obj2145_onLoad_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2145_onLoad_activeActionGroupIndex = -1;
		$("#obj2145").trigger("obj2145_onLoad_ended");
		
		return;
	}
	window.obj2145_onLoad_activeActionGroupIndex = 8;
	















//	action: loop
loop_obj2145_onLoad();
function loop_obj2145_onLoad() {

	var loopCount = 0;

	window.obj2145_onLoad_loopCount = window.obj2145_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj2145_onLoad_loopCount > loopCount) {
		window.obj2145_onLoad_loopCount = 0
		obj2145_onLoad_actionGroup9();
	} else {
		obj2145_onLoad_actionGroup0();
	}

}


























};
obj2145_onLoad_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2145_onLoad_activeActionGroupIndex = -1;
		$("#obj2145").trigger("obj2145_onLoad_ended");
		
		return;
	}
	window.obj2145_onLoad_activeActionGroupIndex = 9;
	










































};
obj2200_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2200_onTap_activeActionGroupIndex = -1;
		$("#obj2200").trigger("obj2200_onTap_ended");
		
		return;
	}
	window.obj2200_onTap_activeActionGroupIndex = 0;
	





























//	action: Run JavaScript
runjs_2304();
function runjs_2304() {
	window.obj2200_onTap_runningActionsCount = obj2200_onTap_runningActionsCount + 1;


	if(localStorage.getItem("tapped") === "1" && localStorage.getItem("ready") === "true")
{
    localStorage.setItem("tapped", "2");
    // run action list for speech2 
    $("#obj2327").trigger(PubCoder.Events.Run);
}
else if(localStorage.getItem("tapped") === "2" && localStorage.getItem("ready") === "true")
{
    //localStorage.setItem("tapped", "3");
    console.log(localStorage.getItem("tapped"));
    // run action list for speech3 
    $("#obj2356").trigger(PubCoder.Events.Run);
}

	setTimeout(function() {
		window.obj2200_onTap_runningActionsCount = window.obj2200_onTap_runningActionsCount - 1;

if (window.obj2200_onTap_runningActionsCount == 0) {
	obj2200_onTap_actionGroup1();
}
	}, 1);
}












};
obj2200_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2200_onTap_activeActionGroupIndex = -1;
		$("#obj2200").trigger("obj2200_onTap_ended");
		
		return;
	}
	window.obj2200_onTap_activeActionGroupIndex = 1;
	










































};
obj1966_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1966_onLoad_activeActionGroupIndex = -1;
		$("#obj1966").trigger("obj1966_onLoad_ended");
		
		return;
	}
	window.obj1966_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj1966 
move_2016();
function move_2016() {
	window.obj1966_onLoad_runningActionsCount = obj1966_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj1966");
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
			window.obj1966_onLoad_runningActionsCount = window.obj1966_onLoad_runningActionsCount - 1;

if (window.obj1966_onLoad_runningActionsCount == 0) {
	obj1966_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1966 
move_2017();
function move_2017() {
	window.obj1966_onLoad_runningActionsCount = obj1966_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj1966");
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
			window.obj1966_onLoad_runningActionsCount = window.obj1966_onLoad_runningActionsCount - 1;

if (window.obj1966_onLoad_runningActionsCount == 0) {
	obj1966_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1966 
move_2018();
function move_2018() {
	window.obj1966_onLoad_runningActionsCount = obj1966_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj1966");
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
			window.obj1966_onLoad_runningActionsCount = window.obj1966_onLoad_runningActionsCount - 1;

if (window.obj1966_onLoad_runningActionsCount == 0) {
	obj1966_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1966 
move_2019();
function move_2019() {
	window.obj1966_onLoad_runningActionsCount = obj1966_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj1966");
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
			window.obj1966_onLoad_runningActionsCount = window.obj1966_onLoad_runningActionsCount - 1;

if (window.obj1966_onLoad_runningActionsCount == 0) {
	obj1966_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1966 
move_2020();
function move_2020() {
	window.obj1966_onLoad_runningActionsCount = obj1966_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj1966");
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
			window.obj1966_onLoad_runningActionsCount = window.obj1966_onLoad_runningActionsCount - 1;

if (window.obj1966_onLoad_runningActionsCount == 0) {
	obj1966_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1966 
move_2021();
function move_2021() {
	window.obj1966_onLoad_runningActionsCount = obj1966_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj1966");
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
			window.obj1966_onLoad_runningActionsCount = window.obj1966_onLoad_runningActionsCount - 1;

if (window.obj1966_onLoad_runningActionsCount == 0) {
	obj1966_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1966 
move_2022();
function move_2022() {
	window.obj1966_onLoad_runningActionsCount = obj1966_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj1966");
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
			window.obj1966_onLoad_runningActionsCount = window.obj1966_onLoad_runningActionsCount - 1;

if (window.obj1966_onLoad_runningActionsCount == 0) {
	obj1966_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1966 
move_2023();
function move_2023() {
	window.obj1966_onLoad_runningActionsCount = obj1966_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj1966");
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
			window.obj1966_onLoad_runningActionsCount = window.obj1966_onLoad_runningActionsCount - 1;

if (window.obj1966_onLoad_runningActionsCount == 0) {
	obj1966_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1966 
move_2024();
function move_2024() {
	window.obj1966_onLoad_runningActionsCount = obj1966_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj1966");
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
			window.obj1966_onLoad_runningActionsCount = window.obj1966_onLoad_runningActionsCount - 1;

if (window.obj1966_onLoad_runningActionsCount == 0) {
	obj1966_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj1966_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1966_onLoad_activeActionGroupIndex = -1;
		$("#obj1966").trigger("obj1966_onLoad_ended");
		
		return;
	}
	window.obj1966_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj1966 
move_2026();
function move_2026() {
	window.obj1966_onLoad_runningActionsCount = obj1966_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj1966");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = -90;
	var moveY = 285;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj1966_onLoad_runningActionsCount = window.obj1966_onLoad_runningActionsCount - 1;

if (window.obj1966_onLoad_runningActionsCount == 0) {
	obj1966_onLoad_actionGroup2();
}
		}, 1);
	});
}












//	action: wait
wait_2025();
function wait_2025() {
	window.obj1966_onLoad_runningActionsCount = obj1966_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj1966_onLoad_runningActionsCount = window.obj1966_onLoad_runningActionsCount - 1;

if (window.obj1966_onLoad_runningActionsCount == 0) {
	obj1966_onLoad_actionGroup2();
}
	}, 1000);
}

























};
obj1966_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1966_onLoad_activeActionGroupIndex = -1;
		$("#obj1966").trigger("obj1966_onLoad_ended");
		
		return;
	}
	window.obj1966_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj1966_onLoad();
function loop_obj1966_onLoad() {

	var loopCount = 0;

	window.obj1966_onLoad_loopCount = window.obj1966_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj1966_onLoad_loopCount > loopCount) {
		window.obj1966_onLoad_loopCount = 0
		obj1966_onLoad_actionGroup3();
	} else {
		obj1966_onLoad_actionGroup0();
	}

}


























};
obj1966_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1966_onLoad_activeActionGroupIndex = -1;
		$("#obj1966").trigger("obj1966_onLoad_ended");
		
		return;
	}
	window.obj1966_onLoad_activeActionGroupIndex = 3;
	










































};
obj1968_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1968_onLoad_activeActionGroupIndex = -1;
		$("#obj1968").trigger("obj1968_onLoad_ended");
		
		return;
	}
	window.obj1968_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj1968 
move_1994();
function move_1994() {
	window.obj1968_onLoad_runningActionsCount = obj1968_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj1968");
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
			window.obj1968_onLoad_runningActionsCount = window.obj1968_onLoad_runningActionsCount - 1;

if (window.obj1968_onLoad_runningActionsCount == 0) {
	obj1968_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1968 
move_1995();
function move_1995() {
	window.obj1968_onLoad_runningActionsCount = obj1968_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj1968");
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
			window.obj1968_onLoad_runningActionsCount = window.obj1968_onLoad_runningActionsCount - 1;

if (window.obj1968_onLoad_runningActionsCount == 0) {
	obj1968_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1968 
move_1996();
function move_1996() {
	window.obj1968_onLoad_runningActionsCount = obj1968_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj1968");
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
			window.obj1968_onLoad_runningActionsCount = window.obj1968_onLoad_runningActionsCount - 1;

if (window.obj1968_onLoad_runningActionsCount == 0) {
	obj1968_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1968 
move_1997();
function move_1997() {
	window.obj1968_onLoad_runningActionsCount = obj1968_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj1968");
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
			window.obj1968_onLoad_runningActionsCount = window.obj1968_onLoad_runningActionsCount - 1;

if (window.obj1968_onLoad_runningActionsCount == 0) {
	obj1968_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1968 
move_1998();
function move_1998() {
	window.obj1968_onLoad_runningActionsCount = obj1968_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj1968");
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
			window.obj1968_onLoad_runningActionsCount = window.obj1968_onLoad_runningActionsCount - 1;

if (window.obj1968_onLoad_runningActionsCount == 0) {
	obj1968_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1968 
move_1999();
function move_1999() {
	window.obj1968_onLoad_runningActionsCount = obj1968_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj1968");
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
			window.obj1968_onLoad_runningActionsCount = window.obj1968_onLoad_runningActionsCount - 1;

if (window.obj1968_onLoad_runningActionsCount == 0) {
	obj1968_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj1968_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1968_onLoad_activeActionGroupIndex = -1;
		$("#obj1968").trigger("obj1968_onLoad_ended");
		
		return;
	}
	window.obj1968_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj1968 
move_2001();
function move_2001() {
	window.obj1968_onLoad_runningActionsCount = obj1968_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj1968");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = -100;
	var moveY = 199;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj1968_onLoad_runningActionsCount = window.obj1968_onLoad_runningActionsCount - 1;

if (window.obj1968_onLoad_runningActionsCount == 0) {
	obj1968_onLoad_actionGroup2();
}
		}, 1);
	});
}












//	action: wait
wait_2000();
function wait_2000() {
	window.obj1968_onLoad_runningActionsCount = obj1968_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj1968_onLoad_runningActionsCount = window.obj1968_onLoad_runningActionsCount - 1;

if (window.obj1968_onLoad_runningActionsCount == 0) {
	obj1968_onLoad_actionGroup2();
}
	}, 700);
}

























};
obj1968_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1968_onLoad_activeActionGroupIndex = -1;
		$("#obj1968").trigger("obj1968_onLoad_ended");
		
		return;
	}
	window.obj1968_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj1968_onLoad();
function loop_obj1968_onLoad() {

	var loopCount = 0;

	window.obj1968_onLoad_loopCount = window.obj1968_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj1968_onLoad_loopCount > loopCount) {
		window.obj1968_onLoad_loopCount = 0
		obj1968_onLoad_actionGroup3();
	} else {
		obj1968_onLoad_actionGroup0();
	}

}


























};
obj1968_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1968_onLoad_activeActionGroupIndex = -1;
		$("#obj1968").trigger("obj1968_onLoad_ended");
		
		return;
	}
	window.obj1968_onLoad_activeActionGroupIndex = 3;
	










































};
obj1970_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1970_onLoad_activeActionGroupIndex = -1;
		$("#obj1970").trigger("obj1970_onLoad_ended");
		
		return;
	}
	window.obj1970_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj1970 
move_2035();
function move_2035() {
	window.obj1970_onLoad_runningActionsCount = obj1970_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj1970");
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
			window.obj1970_onLoad_runningActionsCount = window.obj1970_onLoad_runningActionsCount - 1;

if (window.obj1970_onLoad_runningActionsCount == 0) {
	obj1970_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1970 
move_2039();
function move_2039() {
	window.obj1970_onLoad_runningActionsCount = obj1970_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj1970");
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
			window.obj1970_onLoad_runningActionsCount = window.obj1970_onLoad_runningActionsCount - 1;

if (window.obj1970_onLoad_runningActionsCount == 0) {
	obj1970_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1970 
move_2040();
function move_2040() {
	window.obj1970_onLoad_runningActionsCount = obj1970_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj1970");
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
			window.obj1970_onLoad_runningActionsCount = window.obj1970_onLoad_runningActionsCount - 1;

if (window.obj1970_onLoad_runningActionsCount == 0) {
	obj1970_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1970 
move_2041();
function move_2041() {
	window.obj1970_onLoad_runningActionsCount = obj1970_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj1970");
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
			window.obj1970_onLoad_runningActionsCount = window.obj1970_onLoad_runningActionsCount - 1;

if (window.obj1970_onLoad_runningActionsCount == 0) {
	obj1970_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1970 
move_2042();
function move_2042() {
	window.obj1970_onLoad_runningActionsCount = obj1970_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj1970");
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
			window.obj1970_onLoad_runningActionsCount = window.obj1970_onLoad_runningActionsCount - 1;

if (window.obj1970_onLoad_runningActionsCount == 0) {
	obj1970_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1970 
move_2043();
function move_2043() {
	window.obj1970_onLoad_runningActionsCount = obj1970_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj1970");
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
			window.obj1970_onLoad_runningActionsCount = window.obj1970_onLoad_runningActionsCount - 1;

if (window.obj1970_onLoad_runningActionsCount == 0) {
	obj1970_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1970 
move_2044();
function move_2044() {
	window.obj1970_onLoad_runningActionsCount = obj1970_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj1970");
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
			window.obj1970_onLoad_runningActionsCount = window.obj1970_onLoad_runningActionsCount - 1;

if (window.obj1970_onLoad_runningActionsCount == 0) {
	obj1970_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1970 
move_2045();
function move_2045() {
	window.obj1970_onLoad_runningActionsCount = obj1970_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj1970");
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
			window.obj1970_onLoad_runningActionsCount = window.obj1970_onLoad_runningActionsCount - 1;

if (window.obj1970_onLoad_runningActionsCount == 0) {
	obj1970_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj1970_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1970_onLoad_activeActionGroupIndex = -1;
		$("#obj1970").trigger("obj1970_onLoad_ended");
		
		return;
	}
	window.obj1970_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj1970 
move_2037();
function move_2037() {
	window.obj1970_onLoad_runningActionsCount = obj1970_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj1970");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = -194;
	var moveY = 285;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj1970_onLoad_runningActionsCount = window.obj1970_onLoad_runningActionsCount - 1;

if (window.obj1970_onLoad_runningActionsCount == 0) {
	obj1970_onLoad_actionGroup2();
}
		}, 1);
	});
}












//	action: wait
wait_2036();
function wait_2036() {
	window.obj1970_onLoad_runningActionsCount = obj1970_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj1970_onLoad_runningActionsCount = window.obj1970_onLoad_runningActionsCount - 1;

if (window.obj1970_onLoad_runningActionsCount == 0) {
	obj1970_onLoad_actionGroup2();
}
	}, 800);
}

























};
obj1970_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1970_onLoad_activeActionGroupIndex = -1;
		$("#obj1970").trigger("obj1970_onLoad_ended");
		
		return;
	}
	window.obj1970_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj1970_onLoad();
function loop_obj1970_onLoad() {

	var loopCount = 0;

	window.obj1970_onLoad_loopCount = window.obj1970_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj1970_onLoad_loopCount > loopCount) {
		window.obj1970_onLoad_loopCount = 0
		obj1970_onLoad_actionGroup3();
	} else {
		obj1970_onLoad_actionGroup0();
	}

}


























};
obj1970_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1970_onLoad_activeActionGroupIndex = -1;
		$("#obj1970").trigger("obj1970_onLoad_ended");
		
		return;
	}
	window.obj1970_onLoad_activeActionGroupIndex = 3;
	










































};
obj1972_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1972_onLoad_activeActionGroupIndex = -1;
		$("#obj1972").trigger("obj1972_onLoad_ended");
		
		return;
	}
	window.obj1972_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj1972 
move_1978();
function move_1978() {
	window.obj1972_onLoad_runningActionsCount = obj1972_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj1972");
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
			window.obj1972_onLoad_runningActionsCount = window.obj1972_onLoad_runningActionsCount - 1;

if (window.obj1972_onLoad_runningActionsCount == 0) {
	obj1972_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1972 
move_1979();
function move_1979() {
	window.obj1972_onLoad_runningActionsCount = obj1972_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj1972");
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
			window.obj1972_onLoad_runningActionsCount = window.obj1972_onLoad_runningActionsCount - 1;

if (window.obj1972_onLoad_runningActionsCount == 0) {
	obj1972_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1972 
move_1980();
function move_1980() {
	window.obj1972_onLoad_runningActionsCount = obj1972_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj1972");
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
			window.obj1972_onLoad_runningActionsCount = window.obj1972_onLoad_runningActionsCount - 1;

if (window.obj1972_onLoad_runningActionsCount == 0) {
	obj1972_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1972 
move_1981();
function move_1981() {
	window.obj1972_onLoad_runningActionsCount = obj1972_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj1972");
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
			window.obj1972_onLoad_runningActionsCount = window.obj1972_onLoad_runningActionsCount - 1;

if (window.obj1972_onLoad_runningActionsCount == 0) {
	obj1972_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1972 
move_1982();
function move_1982() {
	window.obj1972_onLoad_runningActionsCount = obj1972_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj1972");
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
			window.obj1972_onLoad_runningActionsCount = window.obj1972_onLoad_runningActionsCount - 1;

if (window.obj1972_onLoad_runningActionsCount == 0) {
	obj1972_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1972 
move_1983();
function move_1983() {
	window.obj1972_onLoad_runningActionsCount = obj1972_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj1972");
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
			window.obj1972_onLoad_runningActionsCount = window.obj1972_onLoad_runningActionsCount - 1;

if (window.obj1972_onLoad_runningActionsCount == 0) {
	obj1972_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj1972_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1972_onLoad_activeActionGroupIndex = -1;
		$("#obj1972").trigger("obj1972_onLoad_ended");
		
		return;
	}
	window.obj1972_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj1972 
move_1986();
function move_1986() {
	window.obj1972_onLoad_runningActionsCount = obj1972_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj1972");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = -132;
	var moveY = 379;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj1972_onLoad_runningActionsCount = window.obj1972_onLoad_runningActionsCount - 1;

if (window.obj1972_onLoad_runningActionsCount == 0) {
	obj1972_onLoad_actionGroup2();
}
		}, 1);
	});
}












//	action: wait
wait_1984();
function wait_1984() {
	window.obj1972_onLoad_runningActionsCount = obj1972_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj1972_onLoad_runningActionsCount = window.obj1972_onLoad_runningActionsCount - 1;

if (window.obj1972_onLoad_runningActionsCount == 0) {
	obj1972_onLoad_actionGroup2();
}
	}, 1000);
}

























};
obj1972_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1972_onLoad_activeActionGroupIndex = -1;
		$("#obj1972").trigger("obj1972_onLoad_ended");
		
		return;
	}
	window.obj1972_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj1972_onLoad();
function loop_obj1972_onLoad() {

	var loopCount = 0;

	window.obj1972_onLoad_loopCount = window.obj1972_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj1972_onLoad_loopCount > loopCount) {
		window.obj1972_onLoad_loopCount = 0
		obj1972_onLoad_actionGroup3();
	} else {
		obj1972_onLoad_actionGroup0();
	}

}


























};
obj1972_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1972_onLoad_activeActionGroupIndex = -1;
		$("#obj1972").trigger("obj1972_onLoad_ended");
		
		return;
	}
	window.obj1972_onLoad_activeActionGroupIndex = 3;
	










































};
obj2090_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2090_onLoad_activeActionGroupIndex = -1;
		$("#obj2090").trigger("obj2090_onLoad_ended");
		
		return;
	}
	window.obj2090_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj2090 
move_2093();
function move_2093() {
	window.obj2090_onLoad_runningActionsCount = obj2090_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2090");
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
			window.obj2090_onLoad_runningActionsCount = window.obj2090_onLoad_runningActionsCount - 1;

if (window.obj2090_onLoad_runningActionsCount == 0) {
	obj2090_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2090 
move_2094();
function move_2094() {
	window.obj2090_onLoad_runningActionsCount = obj2090_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2090");
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
			window.obj2090_onLoad_runningActionsCount = window.obj2090_onLoad_runningActionsCount - 1;

if (window.obj2090_onLoad_runningActionsCount == 0) {
	obj2090_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2090 
move_2095();
function move_2095() {
	window.obj2090_onLoad_runningActionsCount = obj2090_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2090");
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
			window.obj2090_onLoad_runningActionsCount = window.obj2090_onLoad_runningActionsCount - 1;

if (window.obj2090_onLoad_runningActionsCount == 0) {
	obj2090_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2090 
move_2096();
function move_2096() {
	window.obj2090_onLoad_runningActionsCount = obj2090_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2090");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=166";
	var moveY = "+=-65";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj2090_onLoad_runningActionsCount = window.obj2090_onLoad_runningActionsCount - 1;

if (window.obj2090_onLoad_runningActionsCount == 0) {
	obj2090_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2090 
move_2097();
function move_2097() {
	window.obj2090_onLoad_runningActionsCount = obj2090_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2090");
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
			window.obj2090_onLoad_runningActionsCount = window.obj2090_onLoad_runningActionsCount - 1;

if (window.obj2090_onLoad_runningActionsCount == 0) {
	obj2090_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2090 
move_2098();
function move_2098() {
	window.obj2090_onLoad_runningActionsCount = obj2090_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2090");
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
			window.obj2090_onLoad_runningActionsCount = window.obj2090_onLoad_runningActionsCount - 1;

if (window.obj2090_onLoad_runningActionsCount == 0) {
	obj2090_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2090 
move_2099();
function move_2099() {
	window.obj2090_onLoad_runningActionsCount = obj2090_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2090");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=146";
	var moveY = "+=54";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj2090_onLoad_runningActionsCount = window.obj2090_onLoad_runningActionsCount - 1;

if (window.obj2090_onLoad_runningActionsCount == 0) {
	obj2090_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2090 
move_2100();
function move_2100() {
	window.obj2090_onLoad_runningActionsCount = obj2090_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2090");
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
			window.obj2090_onLoad_runningActionsCount = window.obj2090_onLoad_runningActionsCount - 1;

if (window.obj2090_onLoad_runningActionsCount == 0) {
	obj2090_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2090 
move_2101();
function move_2101() {
	window.obj2090_onLoad_runningActionsCount = obj2090_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2090");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=170";
	var moveY = "+=90";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1500, easing, function() {
		setTimeout(function() {
			window.obj2090_onLoad_runningActionsCount = window.obj2090_onLoad_runningActionsCount - 1;

if (window.obj2090_onLoad_runningActionsCount == 0) {
	obj2090_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj2090_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2090_onLoad_activeActionGroupIndex = -1;
		$("#obj2090").trigger("obj2090_onLoad_ended");
		
		return;
	}
	window.obj2090_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj2090 
move_2103();
function move_2103() {
	window.obj2090_onLoad_runningActionsCount = obj2090_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2090");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = -236;
	var moveY = 199;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj2090_onLoad_runningActionsCount = window.obj2090_onLoad_runningActionsCount - 1;

if (window.obj2090_onLoad_runningActionsCount == 0) {
	obj2090_onLoad_actionGroup2();
}
		}, 1);
	});
}












//	action: wait
wait_2102();
function wait_2102() {
	window.obj2090_onLoad_runningActionsCount = obj2090_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj2090_onLoad_runningActionsCount = window.obj2090_onLoad_runningActionsCount - 1;

if (window.obj2090_onLoad_runningActionsCount == 0) {
	obj2090_onLoad_actionGroup2();
}
	}, 500);
}

























};
obj2090_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2090_onLoad_activeActionGroupIndex = -1;
		$("#obj2090").trigger("obj2090_onLoad_ended");
		
		return;
	}
	window.obj2090_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj2090_onLoad();
function loop_obj2090_onLoad() {

	var loopCount = 0;

	window.obj2090_onLoad_loopCount = window.obj2090_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj2090_onLoad_loopCount > loopCount) {
		window.obj2090_onLoad_loopCount = 0
		obj2090_onLoad_actionGroup3();
	} else {
		obj2090_onLoad_actionGroup0();
	}

}


























};
obj2090_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2090_onLoad_activeActionGroupIndex = -1;
		$("#obj2090").trigger("obj2090_onLoad_ended");
		
		return;
	}
	window.obj2090_onLoad_activeActionGroupIndex = 3;
	










































};
obj2078_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2078_onLoad_activeActionGroupIndex = -1;
		$("#obj2078").trigger("obj2078_onLoad_ended");
		
		return;
	}
	window.obj2078_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj2078 
move_2081();
function move_2081() {
	window.obj2078_onLoad_runningActionsCount = obj2078_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2078");
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
			window.obj2078_onLoad_runningActionsCount = window.obj2078_onLoad_runningActionsCount - 1;

if (window.obj2078_onLoad_runningActionsCount == 0) {
	obj2078_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2078 
move_2082();
function move_2082() {
	window.obj2078_onLoad_runningActionsCount = obj2078_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2078");
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
			window.obj2078_onLoad_runningActionsCount = window.obj2078_onLoad_runningActionsCount - 1;

if (window.obj2078_onLoad_runningActionsCount == 0) {
	obj2078_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2078 
move_2083();
function move_2083() {
	window.obj2078_onLoad_runningActionsCount = obj2078_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2078");
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
			window.obj2078_onLoad_runningActionsCount = window.obj2078_onLoad_runningActionsCount - 1;

if (window.obj2078_onLoad_runningActionsCount == 0) {
	obj2078_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2078 
move_2084();
function move_2084() {
	window.obj2078_onLoad_runningActionsCount = obj2078_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2078");
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
			window.obj2078_onLoad_runningActionsCount = window.obj2078_onLoad_runningActionsCount - 1;

if (window.obj2078_onLoad_runningActionsCount == 0) {
	obj2078_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2078 
move_2085();
function move_2085() {
	window.obj2078_onLoad_runningActionsCount = obj2078_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2078");
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
			window.obj2078_onLoad_runningActionsCount = window.obj2078_onLoad_runningActionsCount - 1;

if (window.obj2078_onLoad_runningActionsCount == 0) {
	obj2078_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2078 
move_2086();
function move_2086() {
	window.obj2078_onLoad_runningActionsCount = obj2078_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2078");
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
			window.obj2078_onLoad_runningActionsCount = window.obj2078_onLoad_runningActionsCount - 1;

if (window.obj2078_onLoad_runningActionsCount == 0) {
	obj2078_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj2078_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2078_onLoad_activeActionGroupIndex = -1;
		$("#obj2078").trigger("obj2078_onLoad_ended");
		
		return;
	}
	window.obj2078_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj2078 
move_2088();
function move_2088() {
	window.obj2078_onLoad_runningActionsCount = obj2078_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2078");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = -119;
	var moveY = 347;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj2078_onLoad_runningActionsCount = window.obj2078_onLoad_runningActionsCount - 1;

if (window.obj2078_onLoad_runningActionsCount == 0) {
	obj2078_onLoad_actionGroup2();
}
		}, 1);
	});
}












//	action: wait
wait_2087();
function wait_2087() {
	window.obj2078_onLoad_runningActionsCount = obj2078_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj2078_onLoad_runningActionsCount = window.obj2078_onLoad_runningActionsCount - 1;

if (window.obj2078_onLoad_runningActionsCount == 0) {
	obj2078_onLoad_actionGroup2();
}
	}, 1000);
}

























};
obj2078_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2078_onLoad_activeActionGroupIndex = -1;
		$("#obj2078").trigger("obj2078_onLoad_ended");
		
		return;
	}
	window.obj2078_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj2078_onLoad();
function loop_obj2078_onLoad() {

	var loopCount = 0;

	window.obj2078_onLoad_loopCount = window.obj2078_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj2078_onLoad_loopCount > loopCount) {
		window.obj2078_onLoad_loopCount = 0
		obj2078_onLoad_actionGroup3();
	} else {
		obj2078_onLoad_actionGroup0();
	}

}


























};
obj2078_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2078_onLoad_activeActionGroupIndex = -1;
		$("#obj2078").trigger("obj2078_onLoad_ended");
		
		return;
	}
	window.obj2078_onLoad_activeActionGroupIndex = 3;
	










































};
obj2064_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2064_onLoad_activeActionGroupIndex = -1;
		$("#obj2064").trigger("obj2064_onLoad_ended");
		
		return;
	}
	window.obj2064_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj2064 
move_2067();
function move_2067() {
	window.obj2064_onLoad_runningActionsCount = obj2064_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2064");
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
			window.obj2064_onLoad_runningActionsCount = window.obj2064_onLoad_runningActionsCount - 1;

if (window.obj2064_onLoad_runningActionsCount == 0) {
	obj2064_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2064 
move_2068();
function move_2068() {
	window.obj2064_onLoad_runningActionsCount = obj2064_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2064");
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
			window.obj2064_onLoad_runningActionsCount = window.obj2064_onLoad_runningActionsCount - 1;

if (window.obj2064_onLoad_runningActionsCount == 0) {
	obj2064_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2064 
move_2069();
function move_2069() {
	window.obj2064_onLoad_runningActionsCount = obj2064_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2064");
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
			window.obj2064_onLoad_runningActionsCount = window.obj2064_onLoad_runningActionsCount - 1;

if (window.obj2064_onLoad_runningActionsCount == 0) {
	obj2064_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2064 
move_2070();
function move_2070() {
	window.obj2064_onLoad_runningActionsCount = obj2064_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2064");
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
			window.obj2064_onLoad_runningActionsCount = window.obj2064_onLoad_runningActionsCount - 1;

if (window.obj2064_onLoad_runningActionsCount == 0) {
	obj2064_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2064 
move_2071();
function move_2071() {
	window.obj2064_onLoad_runningActionsCount = obj2064_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2064");
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
			window.obj2064_onLoad_runningActionsCount = window.obj2064_onLoad_runningActionsCount - 1;

if (window.obj2064_onLoad_runningActionsCount == 0) {
	obj2064_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2064 
move_2072();
function move_2072() {
	window.obj2064_onLoad_runningActionsCount = obj2064_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2064");
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
			window.obj2064_onLoad_runningActionsCount = window.obj2064_onLoad_runningActionsCount - 1;

if (window.obj2064_onLoad_runningActionsCount == 0) {
	obj2064_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2064 
move_2073();
function move_2073() {
	window.obj2064_onLoad_runningActionsCount = obj2064_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2064");
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
			window.obj2064_onLoad_runningActionsCount = window.obj2064_onLoad_runningActionsCount - 1;

if (window.obj2064_onLoad_runningActionsCount == 0) {
	obj2064_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2064 
move_2074();
function move_2074() {
	window.obj2064_onLoad_runningActionsCount = obj2064_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2064");
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
			window.obj2064_onLoad_runningActionsCount = window.obj2064_onLoad_runningActionsCount - 1;

if (window.obj2064_onLoad_runningActionsCount == 0) {
	obj2064_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj2064_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2064_onLoad_activeActionGroupIndex = -1;
		$("#obj2064").trigger("obj2064_onLoad_ended");
		
		return;
	}
	window.obj2064_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj2064 
move_2076();
function move_2076() {
	window.obj2064_onLoad_runningActionsCount = obj2064_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2064");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = -133;
	var moveY = 141;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj2064_onLoad_runningActionsCount = window.obj2064_onLoad_runningActionsCount - 1;

if (window.obj2064_onLoad_runningActionsCount == 0) {
	obj2064_onLoad_actionGroup2();
}
		}, 1);
	});
}












//	action: wait
wait_2075();
function wait_2075() {
	window.obj2064_onLoad_runningActionsCount = obj2064_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj2064_onLoad_runningActionsCount = window.obj2064_onLoad_runningActionsCount - 1;

if (window.obj2064_onLoad_runningActionsCount == 0) {
	obj2064_onLoad_actionGroup2();
}
	}, 1000);
}

























};
obj2064_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2064_onLoad_activeActionGroupIndex = -1;
		$("#obj2064").trigger("obj2064_onLoad_ended");
		
		return;
	}
	window.obj2064_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj2064_onLoad();
function loop_obj2064_onLoad() {

	var loopCount = 0;

	window.obj2064_onLoad_loopCount = window.obj2064_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj2064_onLoad_loopCount > loopCount) {
		window.obj2064_onLoad_loopCount = 0
		obj2064_onLoad_actionGroup3();
	} else {
		obj2064_onLoad_actionGroup0();
	}

}


























};
obj2064_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2064_onLoad_activeActionGroupIndex = -1;
		$("#obj2064").trigger("obj2064_onLoad_ended");
		
		return;
	}
	window.obj2064_onLoad_activeActionGroupIndex = 3;
	










































};
obj2052_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2052_onLoad_activeActionGroupIndex = -1;
		$("#obj2052").trigger("obj2052_onLoad_ended");
		
		return;
	}
	window.obj2052_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj2052 
move_2055();
function move_2055() {
	window.obj2052_onLoad_runningActionsCount = obj2052_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2052");
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
			window.obj2052_onLoad_runningActionsCount = window.obj2052_onLoad_runningActionsCount - 1;

if (window.obj2052_onLoad_runningActionsCount == 0) {
	obj2052_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2052 
move_2056();
function move_2056() {
	window.obj2052_onLoad_runningActionsCount = obj2052_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2052");
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
			window.obj2052_onLoad_runningActionsCount = window.obj2052_onLoad_runningActionsCount - 1;

if (window.obj2052_onLoad_runningActionsCount == 0) {
	obj2052_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2052 
move_2057();
function move_2057() {
	window.obj2052_onLoad_runningActionsCount = obj2052_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2052");
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
			window.obj2052_onLoad_runningActionsCount = window.obj2052_onLoad_runningActionsCount - 1;

if (window.obj2052_onLoad_runningActionsCount == 0) {
	obj2052_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2052 
move_2058();
function move_2058() {
	window.obj2052_onLoad_runningActionsCount = obj2052_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2052");
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
			window.obj2052_onLoad_runningActionsCount = window.obj2052_onLoad_runningActionsCount - 1;

if (window.obj2052_onLoad_runningActionsCount == 0) {
	obj2052_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2052 
move_2059();
function move_2059() {
	window.obj2052_onLoad_runningActionsCount = obj2052_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2052");
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
			window.obj2052_onLoad_runningActionsCount = window.obj2052_onLoad_runningActionsCount - 1;

if (window.obj2052_onLoad_runningActionsCount == 0) {
	obj2052_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2052 
move_2060();
function move_2060() {
	window.obj2052_onLoad_runningActionsCount = obj2052_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2052");
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
			window.obj2052_onLoad_runningActionsCount = window.obj2052_onLoad_runningActionsCount - 1;

if (window.obj2052_onLoad_runningActionsCount == 0) {
	obj2052_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj2052_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2052_onLoad_activeActionGroupIndex = -1;
		$("#obj2052").trigger("obj2052_onLoad_ended");
		
		return;
	}
	window.obj2052_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj2052 
move_2062();
function move_2062() {
	window.obj2052_onLoad_runningActionsCount = obj2052_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj2052");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = -167;
	var moveY = 213;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj2052_onLoad_runningActionsCount = window.obj2052_onLoad_runningActionsCount - 1;

if (window.obj2052_onLoad_runningActionsCount == 0) {
	obj2052_onLoad_actionGroup2();
}
		}, 1);
	});
}












//	action: wait
wait_2061();
function wait_2061() {
	window.obj2052_onLoad_runningActionsCount = obj2052_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj2052_onLoad_runningActionsCount = window.obj2052_onLoad_runningActionsCount - 1;

if (window.obj2052_onLoad_runningActionsCount == 0) {
	obj2052_onLoad_actionGroup2();
}
	}, 400);
}

























};
obj2052_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2052_onLoad_activeActionGroupIndex = -1;
		$("#obj2052").trigger("obj2052_onLoad_ended");
		
		return;
	}
	window.obj2052_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj2052_onLoad();
function loop_obj2052_onLoad() {

	var loopCount = 0;

	window.obj2052_onLoad_loopCount = window.obj2052_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj2052_onLoad_loopCount > loopCount) {
		window.obj2052_onLoad_loopCount = 0
		obj2052_onLoad_actionGroup3();
	} else {
		obj2052_onLoad_actionGroup0();
	}

}


























};
obj2052_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2052_onLoad_activeActionGroupIndex = -1;
		$("#obj2052").trigger("obj2052_onLoad_ended");
		
		return;
	}
	window.obj2052_onLoad_activeActionGroupIndex = 3;
	










































};
obj3267_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3267_onShow_activeActionGroupIndex = -1;
		$("#obj3267").trigger("obj3267_onShow_ended");
		
		return;
	}
	window.obj3267_onShow_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj3267 
move_3295();
function move_3295() {
	window.obj3267_onShow_runningActionsCount = obj3267_onShow_runningActionsCount + 1;


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

	var targetObject = $("#obj3267");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-305";
	var moveY = "+=-226";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj3267_onShow_runningActionsCount = window.obj3267_onShow_runningActionsCount - 1;

if (window.obj3267_onShow_runningActionsCount == 0) {
	obj3267_onShow_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3267 
move_3303();
function move_3303() {
	window.obj3267_onShow_runningActionsCount = obj3267_onShow_runningActionsCount + 1;


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

	var targetObject = $("#obj3267");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-443";
	var moveY = "+=-136";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj3267_onShow_runningActionsCount = window.obj3267_onShow_runningActionsCount - 1;

if (window.obj3267_onShow_runningActionsCount == 0) {
	obj3267_onShow_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3267 
move_3304();
function move_3304() {
	window.obj3267_onShow_runningActionsCount = obj3267_onShow_runningActionsCount + 1;


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

	var targetObject = $("#obj3267");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-441";
	var moveY = "+=46";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj3267_onShow_runningActionsCount = window.obj3267_onShow_runningActionsCount - 1;

if (window.obj3267_onShow_runningActionsCount == 0) {
	obj3267_onShow_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3267 
move_3305();
function move_3305() {
	window.obj3267_onShow_runningActionsCount = obj3267_onShow_runningActionsCount + 1;


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

	var targetObject = $("#obj3267");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-465";
	var moveY = "+=88";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj3267_onShow_runningActionsCount = window.obj3267_onShow_runningActionsCount - 1;

if (window.obj3267_onShow_runningActionsCount == 0) {
	obj3267_onShow_actionGroup1();
}
		}, 1);
	});
}






































};
obj3267_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3267_onShow_activeActionGroupIndex = -1;
		$("#obj3267").trigger("obj3267_onShow_ended");
		
		return;
	}
	window.obj3267_onShow_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj3267 
move_3301();
function move_3301() {
	window.obj3267_onShow_runningActionsCount = obj3267_onShow_runningActionsCount + 1;


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

	var targetObject = $("#obj3267");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1385;
	var moveY = 447;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj3267_onShow_runningActionsCount = window.obj3267_onShow_runningActionsCount - 1;

if (window.obj3267_onShow_runningActionsCount == 0) {
	obj3267_onShow_actionGroup2();
}
		}, 1);
	});
}












//	action: wait
wait_3300();
function wait_3300() {
	window.obj3267_onShow_runningActionsCount = obj3267_onShow_runningActionsCount + 1;

	setTimeout(function() {
		window.obj3267_onShow_runningActionsCount = window.obj3267_onShow_runningActionsCount - 1;

if (window.obj3267_onShow_runningActionsCount == 0) {
	obj3267_onShow_actionGroup2();
}
	}, 1500);
}

























};
obj3267_onShow_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3267_onShow_activeActionGroupIndex = -1;
		$("#obj3267").trigger("obj3267_onShow_ended");
		
		return;
	}
	window.obj3267_onShow_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj3267_onShow();
function loop_obj3267_onShow() {

	var loopCount = 0;

	window.obj3267_onShow_loopCount = window.obj3267_onShow_loopCount + 1;
	if (loopCount != 0 && window.obj3267_onShow_loopCount > loopCount) {
		window.obj3267_onShow_loopCount = 0
		obj3267_onShow_actionGroup3();
	} else {
		obj3267_onShow_actionGroup0();
	}

}


























};
obj3267_onShow_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3267_onShow_activeActionGroupIndex = -1;
		$("#obj3267").trigger("obj3267_onShow_ended");
		
		return;
	}
	window.obj3267_onShow_activeActionGroupIndex = 3;
	










































};
obj3270_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3270_onShow_activeActionGroupIndex = -1;
		$("#obj3270").trigger("obj3270_onShow_ended");
		
		return;
	}
	window.obj3270_onShow_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj3270 
move_3316();
function move_3316() {
	window.obj3270_onShow_runningActionsCount = obj3270_onShow_runningActionsCount + 1;


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

	var targetObject = $("#obj3270");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=4";
	var moveY = "+=278";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj3270_onShow_runningActionsCount = window.obj3270_onShow_runningActionsCount - 1;

if (window.obj3270_onShow_runningActionsCount == 0) {
	obj3270_onShow_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3270 
move_3324();
function move_3324() {
	window.obj3270_onShow_runningActionsCount = obj3270_onShow_runningActionsCount + 1;


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

	var targetObject = $("#obj3270");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=355";
	var moveY = "+=289";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 3000, easing, function() {
		setTimeout(function() {
			window.obj3270_onShow_runningActionsCount = window.obj3270_onShow_runningActionsCount - 1;

if (window.obj3270_onShow_runningActionsCount == 0) {
	obj3270_onShow_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3270 
move_3325();
function move_3325() {
	window.obj3270_onShow_runningActionsCount = obj3270_onShow_runningActionsCount + 1;


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

	var targetObject = $("#obj3270");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=732";
	var moveY = "+=350";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 3000, easing, function() {
		setTimeout(function() {
			window.obj3270_onShow_runningActionsCount = window.obj3270_onShow_runningActionsCount - 1;

if (window.obj3270_onShow_runningActionsCount == 0) {
	obj3270_onShow_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3270 
move_3326();
function move_3326() {
	window.obj3270_onShow_runningActionsCount = obj3270_onShow_runningActionsCount + 1;


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

	var targetObject = $("#obj3270");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=315";
	var moveY = "+=330";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj3270_onShow_runningActionsCount = window.obj3270_onShow_runningActionsCount - 1;

if (window.obj3270_onShow_runningActionsCount == 0) {
	obj3270_onShow_actionGroup1();
}
		}, 1);
	});
}






































};
obj3270_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3270_onShow_activeActionGroupIndex = -1;
		$("#obj3270").trigger("obj3270_onShow_ended");
		
		return;
	}
	window.obj3270_onShow_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj3270 
move_3314();
function move_3314() {
	window.obj3270_onShow_runningActionsCount = obj3270_onShow_runningActionsCount + 1;


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

	var targetObject = $("#obj3270");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 83;
	var moveY = -231;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj3270_onShow_runningActionsCount = window.obj3270_onShow_runningActionsCount - 1;

if (window.obj3270_onShow_runningActionsCount == 0) {
	obj3270_onShow_actionGroup2();
}
		}, 1);
	});
}












//	action: wait
wait_3313();
function wait_3313() {
	window.obj3270_onShow_runningActionsCount = obj3270_onShow_runningActionsCount + 1;

	setTimeout(function() {
		window.obj3270_onShow_runningActionsCount = window.obj3270_onShow_runningActionsCount - 1;

if (window.obj3270_onShow_runningActionsCount == 0) {
	obj3270_onShow_actionGroup2();
}
	}, 1000);
}

























};
obj3270_onShow_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3270_onShow_activeActionGroupIndex = -1;
		$("#obj3270").trigger("obj3270_onShow_ended");
		
		return;
	}
	window.obj3270_onShow_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj3270_onShow();
function loop_obj3270_onShow() {

	var loopCount = 0;

	window.obj3270_onShow_loopCount = window.obj3270_onShow_loopCount + 1;
	if (loopCount != 0 && window.obj3270_onShow_loopCount > loopCount) {
		window.obj3270_onShow_loopCount = 0
		obj3270_onShow_actionGroup3();
	} else {
		obj3270_onShow_actionGroup0();
	}

}


























};
obj3270_onShow_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3270_onShow_activeActionGroupIndex = -1;
		$("#obj3270").trigger("obj3270_onShow_ended");
		
		return;
	}
	window.obj3270_onShow_activeActionGroupIndex = 3;
	










































};
obj3273_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3273_onShow_activeActionGroupIndex = -1;
		$("#obj3273").trigger("obj3273_onShow_ended");
		
		return;
	}
	window.obj3273_onShow_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj3273 
move_3307();
function move_3307() {
	window.obj3273_onShow_runningActionsCount = obj3273_onShow_runningActionsCount + 1;


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

	var targetObject = $("#obj3273");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = -377;
	var moveY = 241;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj3273_onShow_runningActionsCount = window.obj3273_onShow_runningActionsCount - 1;

if (window.obj3273_onShow_runningActionsCount == 0) {
	obj3273_onShow_actionGroup1();
}
		}, 1);
	});
}












//	action: wait
wait_3308();
function wait_3308() {
	window.obj3273_onShow_runningActionsCount = obj3273_onShow_runningActionsCount + 1;

	setTimeout(function() {
		window.obj3273_onShow_runningActionsCount = window.obj3273_onShow_runningActionsCount - 1;

if (window.obj3273_onShow_runningActionsCount == 0) {
	obj3273_onShow_actionGroup1();
}
	}, 1000);
}

























};
obj3273_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3273_onShow_activeActionGroupIndex = -1;
		$("#obj3273").trigger("obj3273_onShow_ended");
		
		return;
	}
	window.obj3273_onShow_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj3273 
move_3310();
function move_3310() {
	window.obj3273_onShow_runningActionsCount = obj3273_onShow_runningActionsCount + 1;


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

	var targetObject = $("#obj3273");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=645";
	var moveY = "+=-238";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 4000, easing, function() {
		setTimeout(function() {
			window.obj3273_onShow_runningActionsCount = window.obj3273_onShow_runningActionsCount - 1;

if (window.obj3273_onShow_runningActionsCount == 0) {
	obj3273_onShow_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3273 
move_3311();
function move_3311() {
	window.obj3273_onShow_runningActionsCount = obj3273_onShow_runningActionsCount + 1;


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

	var targetObject = $("#obj3273");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=1141";
	var moveY = "+=66";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 6000, easing, function() {
		setTimeout(function() {
			window.obj3273_onShow_runningActionsCount = window.obj3273_onShow_runningActionsCount - 1;

if (window.obj3273_onShow_runningActionsCount == 0) {
	obj3273_onShow_actionGroup2();
}
		}, 1);
	});
}






































};
obj3273_onShow_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3273_onShow_activeActionGroupIndex = -1;
		$("#obj3273").trigger("obj3273_onShow_ended");
		
		return;
	}
	window.obj3273_onShow_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj3273_onShow();
function loop_obj3273_onShow() {

	var loopCount = 0;

	window.obj3273_onShow_loopCount = window.obj3273_onShow_loopCount + 1;
	if (loopCount != 0 && window.obj3273_onShow_loopCount > loopCount) {
		window.obj3273_onShow_loopCount = 0
		obj3273_onShow_actionGroup3();
	} else {
		obj3273_onShow_actionGroup0();
	}

}


























};
obj3273_onShow_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3273_onShow_activeActionGroupIndex = -1;
		$("#obj3273").trigger("obj3273_onShow_ended");
		
		return;
	}
	window.obj3273_onShow_activeActionGroupIndex = 3;
	










































};
obj3276_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3276_onShow_activeActionGroupIndex = -1;
		$("#obj3276").trigger("obj3276_onShow_ended");
		
		return;
	}
	window.obj3276_onShow_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj3276 
move_3292();
function move_3292() {
	window.obj3276_onShow_runningActionsCount = obj3276_onShow_runningActionsCount + 1;


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

	var targetObject = $("#obj3276");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1401;
	var moveY = 46;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj3276_onShow_runningActionsCount = window.obj3276_onShow_runningActionsCount - 1;

if (window.obj3276_onShow_runningActionsCount == 0) {
	obj3276_onShow_actionGroup1();
}
		}, 1);
	});
}












//	action: wait
wait_3291();
function wait_3291() {
	window.obj3276_onShow_runningActionsCount = obj3276_onShow_runningActionsCount + 1;

	setTimeout(function() {
		window.obj3276_onShow_runningActionsCount = window.obj3276_onShow_runningActionsCount - 1;

if (window.obj3276_onShow_runningActionsCount == 0) {
	obj3276_onShow_actionGroup1();
}
	}, 1500);
}

























};
obj3276_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3276_onShow_activeActionGroupIndex = -1;
		$("#obj3276").trigger("obj3276_onShow_ended");
		
		return;
	}
	window.obj3276_onShow_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj3276 
move_3286();
function move_3286() {
	window.obj3276_onShow_runningActionsCount = obj3276_onShow_runningActionsCount + 1;


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

	var targetObject = $("#obj3276");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-281";
	var moveY = "+=88";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj3276_onShow_runningActionsCount = window.obj3276_onShow_runningActionsCount - 1;

if (window.obj3276_onShow_runningActionsCount == 0) {
	obj3276_onShow_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3276 
move_3287();
function move_3287() {
	window.obj3276_onShow_runningActionsCount = obj3276_onShow_runningActionsCount + 1;


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

	var targetObject = $("#obj3276");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-346";
	var moveY = "+=182";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj3276_onShow_runningActionsCount = window.obj3276_onShow_runningActionsCount - 1;

if (window.obj3276_onShow_runningActionsCount == 0) {
	obj3276_onShow_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3276 
move_3288();
function move_3288() {
	window.obj3276_onShow_runningActionsCount = obj3276_onShow_runningActionsCount + 1;


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

	var targetObject = $("#obj3276");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-192";
	var moveY = "+=166";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj3276_onShow_runningActionsCount = window.obj3276_onShow_runningActionsCount - 1;

if (window.obj3276_onShow_runningActionsCount == 0) {
	obj3276_onShow_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3276 
move_3289();
function move_3289() {
	window.obj3276_onShow_runningActionsCount = obj3276_onShow_runningActionsCount + 1;


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

	var targetObject = $("#obj3276");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-422";
	var moveY = "+=90";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj3276_onShow_runningActionsCount = window.obj3276_onShow_runningActionsCount - 1;

if (window.obj3276_onShow_runningActionsCount == 0) {
	obj3276_onShow_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3276 
move_3290();
function move_3290() {
	window.obj3276_onShow_runningActionsCount = obj3276_onShow_runningActionsCount + 1;


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

	var targetObject = $("#obj3276");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-524";
	var moveY = "+=216";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj3276_onShow_runningActionsCount = window.obj3276_onShow_runningActionsCount - 1;

if (window.obj3276_onShow_runningActionsCount == 0) {
	obj3276_onShow_actionGroup2();
}
		}, 1);
	});
}






































};
obj3276_onShow_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3276_onShow_activeActionGroupIndex = -1;
		$("#obj3276").trigger("obj3276_onShow_ended");
		
		return;
	}
	window.obj3276_onShow_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj3276_onShow();
function loop_obj3276_onShow() {

	var loopCount = 0;

	window.obj3276_onShow_loopCount = window.obj3276_onShow_loopCount + 1;
	if (loopCount != 0 && window.obj3276_onShow_loopCount > loopCount) {
		window.obj3276_onShow_loopCount = 0
		obj3276_onShow_actionGroup3();
	} else {
		obj3276_onShow_actionGroup0();
	}

}


























};
obj3276_onShow_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3276_onShow_activeActionGroupIndex = -1;
		$("#obj3276").trigger("obj3276_onShow_ended");
		
		return;
	}
	window.obj3276_onShow_activeActionGroupIndex = 3;
	










































};
obj5114_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5114_onShow_activeActionGroupIndex = -1;
		$("#obj5114").trigger("obj5114_onShow_ended");
		
		return;
	}
	window.obj5114_onShow_activeActionGroupIndex = 0;
	




//	action: playAnimation 
//	target: obj5114 
playAnimation_5141();
function playAnimation_5141() {
	var targetObjectId = "#obj5114";
	var targetObject = $(targetObjectId)[0];
	window.obj5114_onShow_runningActionsCount = obj5114_onShow_runningActionsCount + 1;

	var isAnimationInfinite = true;
	if (isAnimationInfinite) {
		window.obj5114_onShow_runningActionsCount = window.obj5114_onShow_runningActionsCount - 1;

if (window.obj5114_onShow_runningActionsCount == 0) {
	obj5114_onShow_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj5114 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj5114;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");

	setTimeout(function() {
	    api_animate_obj5114.startAnimation();
	}, 1);

	if (!isAnimationInfinite) {
		$("#obj5114").one("obj5114_animation_ended",function(event) {
		    window.obj5114_onShow_runningActionsCount = window.obj5114_onShow_runningActionsCount - 1;

if (window.obj5114_onShow_runningActionsCount == 0) {
	obj5114_onShow_actionGroup1();
}
		});
	}
 }





































};
obj5114_onShow_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5114_onShow_activeActionGroupIndex = -1;
		$("#obj5114").trigger("obj5114_onShow_ended");
		
		return;
	}
	window.obj5114_onShow_activeActionGroupIndex = 1;
	










































};
obj3279_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3279_onTap_activeActionGroupIndex = -1;
		$("#obj3279").trigger("obj3279_onTap_ended");
		
		return;
	}
	window.obj3279_onTap_activeActionGroupIndex = 0;
	





























//	action: Run JavaScript
runjs_3359();
function runjs_3359() {
	window.obj3279_onTap_runningActionsCount = obj3279_onTap_runningActionsCount + 1;


	if(localStorage.getItem("tapped") == "4")
{
    localStorage.setItem("tapped", "5");
    $("#obj3365").trigger(PubCoder.Events.Run);
}

	setTimeout(function() {
		window.obj3279_onTap_runningActionsCount = window.obj3279_onTap_runningActionsCount - 1;

if (window.obj3279_onTap_runningActionsCount == 0) {
	obj3279_onTap_actionGroup1();
}
	}, 1);
}












};
obj3279_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3279_onTap_activeActionGroupIndex = -1;
		$("#obj3279").trigger("obj3279_onTap_ended");
		
		return;
	}
	window.obj3279_onTap_activeActionGroupIndex = 1;
	










































};
obj3279_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3279_onLoad_activeActionGroupIndex = -1;
		$("#obj3279").trigger("obj3279_onLoad_ended");
		
		return;
	}
	window.obj3279_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj3279 
move_3362();
function move_3362() {
	window.obj3279_onLoad_runningActionsCount = obj3279_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj3279");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-24";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj3279_onLoad_runningActionsCount = window.obj3279_onLoad_runningActionsCount - 1;

if (window.obj3279_onLoad_runningActionsCount == 0) {
	obj3279_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3279 
move_3363();
function move_3363() {
	window.obj3279_onLoad_runningActionsCount = obj3279_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj3279");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=48";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj3279_onLoad_runningActionsCount = window.obj3279_onLoad_runningActionsCount - 1;

if (window.obj3279_onLoad_runningActionsCount == 0) {
	obj3279_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3279 
move_4403();
function move_4403() {
	window.obj3279_onLoad_runningActionsCount = obj3279_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj3279");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-24";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 500, easing, function() {
		setTimeout(function() {
			window.obj3279_onLoad_runningActionsCount = window.obj3279_onLoad_runningActionsCount - 1;

if (window.obj3279_onLoad_runningActionsCount == 0) {
	obj3279_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj3279_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3279_onLoad_activeActionGroupIndex = -1;
		$("#obj3279").trigger("obj3279_onLoad_ended");
		
		return;
	}
	window.obj3279_onLoad_activeActionGroupIndex = 1;
	















//	action: loop
loop_obj3279_onLoad();
function loop_obj3279_onLoad() {

	var loopCount = 0;

	window.obj3279_onLoad_loopCount = window.obj3279_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj3279_onLoad_loopCount > loopCount) {
		window.obj3279_onLoad_loopCount = 0
		obj3279_onLoad_actionGroup2();
	} else {
		obj3279_onLoad_actionGroup0();
	}

}


























};
obj3279_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3279_onLoad_activeActionGroupIndex = -1;
		$("#obj3279").trigger("obj3279_onLoad_ended");
		
		return;
	}
	window.obj3279_onLoad_activeActionGroupIndex = 2;
	










































};
obj3392_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3392_onLoad_activeActionGroupIndex = -1;
		$("#obj3392").trigger("obj3392_onLoad_ended");
		
		return;
	}
	window.obj3392_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj3392 
move_4404();
function move_4404() {
	window.obj3392_onLoad_runningActionsCount = obj3392_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj3392");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-24";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj3392_onLoad_runningActionsCount = window.obj3392_onLoad_runningActionsCount - 1;

if (window.obj3392_onLoad_runningActionsCount == 0) {
	obj3392_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3392 
move_4405();
function move_4405() {
	window.obj3392_onLoad_runningActionsCount = obj3392_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj3392");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=48";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj3392_onLoad_runningActionsCount = window.obj3392_onLoad_runningActionsCount - 1;

if (window.obj3392_onLoad_runningActionsCount == 0) {
	obj3392_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3392 
move_4406();
function move_4406() {
	window.obj3392_onLoad_runningActionsCount = obj3392_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj3392");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-24";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 500, easing, function() {
		setTimeout(function() {
			window.obj3392_onLoad_runningActionsCount = window.obj3392_onLoad_runningActionsCount - 1;

if (window.obj3392_onLoad_runningActionsCount == 0) {
	obj3392_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj3392_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3392_onLoad_activeActionGroupIndex = -1;
		$("#obj3392").trigger("obj3392_onLoad_ended");
		
		return;
	}
	window.obj3392_onLoad_activeActionGroupIndex = 1;
	















//	action: loop
loop_obj3392_onLoad();
function loop_obj3392_onLoad() {

	var loopCount = 0;

	window.obj3392_onLoad_loopCount = window.obj3392_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj3392_onLoad_loopCount > loopCount) {
		window.obj3392_onLoad_loopCount = 0
		obj3392_onLoad_actionGroup2();
	} else {
		obj3392_onLoad_actionGroup0();
	}

}


























};
obj3392_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3392_onLoad_activeActionGroupIndex = -1;
		$("#obj3392").trigger("obj3392_onLoad_ended");
		
		return;
	}
	window.obj3392_onLoad_activeActionGroupIndex = 2;
	










































};
obj2251_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2251_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2251").trigger("obj2251_SCEventRun_ended");
		
		return;
	}
	window.obj2251_SCEventRun_activeActionGroupIndex = 0;
	





























//	action: Run JavaScript
runjs_2253();
function runjs_2253() {
	window.obj2251_SCEventRun_runningActionsCount = obj2251_SCEventRun_runningActionsCount + 1;


	if(localStorage.getItem("moved") === "false")
{
    var defX = 0;
    var defY = 72;
    var xPos = 500;
    var zLeft = parseInt($("#obj5077").css("left").slice(0, -2));
    var zTop = parseInt($("#obj5077").css("top").slice(0, -2));
    var zHeight = parseInt($("#obj5077").css("height").slice(0, -2));
    if(localStorage.getItem("tapped") === "0")
    {
        if(zLeft !== defX || zTop !== defY)
        {
            localStorage.setItem("tapped", "1");
            //action list to show first bubble
            $("#obj2275").trigger(PubCoder.Events.Run);
        }
    }
    else if(localStorage.getItem("tapped") === "3" && localStorage.getItem("ready") === "true")
    {
        if(zTop + (zHeight / 2) > xPos)
        {
            localStorage.setItem("tapped", "4");
            //action list to show second bubble
            $("#obj2193").trigger(PubCoder.Events.Run);
            //$("#obj2948").trigger(PubCoder.Events.Run);
        }
    }
}

	setTimeout(function() {
		window.obj2251_SCEventRun_runningActionsCount = window.obj2251_SCEventRun_runningActionsCount - 1;

if (window.obj2251_SCEventRun_runningActionsCount == 0) {
	obj2251_SCEventRun_actionGroup1();
}
	}, 1);
}












};
obj2251_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2251_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2251").trigger("obj2251_SCEventRun_ended");
		
		return;
	}
	window.obj2251_SCEventRun_activeActionGroupIndex = 1;
	










































};
obj2275_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2275_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2275").trigger("obj2275_SCEventRun_ended");
		
		return;
	}
	window.obj2275_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj4001 
hide_4019();
function hide_4019() {
	var element = "#obj4001";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2275_SCEventRun_runningActionsCount = obj2275_SCEventRun_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj2275_SCEventRun_runningActionsCount = window.obj2275_SCEventRun_runningActionsCount - 1;

if (window.obj2275_SCEventRun_runningActionsCount == 0) {
	obj2275_SCEventRun_actionGroup1();
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
		setTimeout(hide_4019(), 100);
		return;
	}

	setTimeout(function() {
		$(element).css("display", "none");
		window.obj2275_SCEventRun_runningActionsCount = window.obj2275_SCEventRun_runningActionsCount - 1;

if (window.obj2275_SCEventRun_runningActionsCount == 0) {
	obj2275_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)

}
//	action: show 
//	target: obj2202 
(function(){
	window.obj2275_SCEventRun_runningActionsCount = obj2275_SCEventRun_runningActionsCount + 1;


	var element = "#obj2202";
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
				window.obj2275_SCEventRun_runningActionsCount = window.obj2275_SCEventRun_runningActionsCount - 1;

if (window.obj2275_SCEventRun_runningActionsCount == 0) {
	obj2275_SCEventRun_actionGroup1();
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
			window.obj2275_SCEventRun_runningActionsCount = window.obj2275_SCEventRun_runningActionsCount - 1;

if (window.obj2275_SCEventRun_runningActionsCount == 0) {
	obj2275_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj2204 
(function(){
	window.obj2275_SCEventRun_runningActionsCount = obj2275_SCEventRun_runningActionsCount + 1;


	var element = "#obj2204";
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
				window.obj2275_SCEventRun_runningActionsCount = window.obj2275_SCEventRun_runningActionsCount - 1;

if (window.obj2275_SCEventRun_runningActionsCount == 0) {
	obj2275_SCEventRun_actionGroup1();
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
			window.obj2275_SCEventRun_runningActionsCount = window.obj2275_SCEventRun_runningActionsCount - 1;

if (window.obj2275_SCEventRun_runningActionsCount == 0) {
	obj2275_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj2206 
(function(){
	window.obj2275_SCEventRun_runningActionsCount = obj2275_SCEventRun_runningActionsCount + 1;


	var element = "#obj2206";
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
				window.obj2275_SCEventRun_runningActionsCount = window.obj2275_SCEventRun_runningActionsCount - 1;

if (window.obj2275_SCEventRun_runningActionsCount == 0) {
	obj2275_SCEventRun_actionGroup1();
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
			window.obj2275_SCEventRun_runningActionsCount = window.obj2275_SCEventRun_runningActionsCount - 1;

if (window.obj2275_SCEventRun_runningActionsCount == 0) {
	obj2275_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();


























//	action: Run JavaScript
runjs_5669();
function runjs_5669() {
	window.obj2275_SCEventRun_runningActionsCount = obj2275_SCEventRun_runningActionsCount + 1;


	localStorage.setItem("ready", "false");

	setTimeout(function() {
		window.obj2275_SCEventRun_runningActionsCount = window.obj2275_SCEventRun_runningActionsCount - 1;

if (window.obj2275_SCEventRun_runningActionsCount == 0) {
	obj2275_SCEventRun_actionGroup1();
}
	}, 1);
}












};
obj2275_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2275_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2275").trigger("obj2275_SCEventRun_ended");
		
		return;
	}
	window.obj2275_SCEventRun_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_5671();
function playAudioFile_5671() {
	window.obj2275_SCEventRun_runningActionsCount = obj2275_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5671")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5671");
			$("#obj_audio_playSoundFile5671").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2275_SCEventRun_runningActionsCount = window.obj2275_SCEventRun_runningActionsCount - 1;

if (window.obj2275_SCEventRun_runningActionsCount == 0) {
	obj2275_SCEventRun_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2275_SCEventRun_runningActionsCount = window.obj2275_SCEventRun_runningActionsCount - 1;

if (window.obj2275_SCEventRun_runningActionsCount == 0) {
	obj2275_SCEventRun_actionGroup2();
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
				window.obj2275_SCEventRun_runningActionsCount = window.obj2275_SCEventRun_runningActionsCount - 1;

if (window.obj2275_SCEventRun_runningActionsCount == 0) {
	obj2275_SCEventRun_actionGroup2();
}
			}, false);
		} else {
			window.obj2275_SCEventRun_runningActionsCount = window.obj2275_SCEventRun_runningActionsCount - 1;

if (window.obj2275_SCEventRun_runningActionsCount == 0) {
	obj2275_SCEventRun_actionGroup2();
}
		}
	}

	
	
	
}




































};
obj2275_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2275_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2275").trigger("obj2275_SCEventRun_ended");
		
		return;
	}
	window.obj2275_SCEventRun_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_5670();
function runjs_5670() {
	window.obj2275_SCEventRun_runningActionsCount = obj2275_SCEventRun_runningActionsCount + 1;


	localStorage.setItem("ready", "true");

	setTimeout(function() {
		window.obj2275_SCEventRun_runningActionsCount = window.obj2275_SCEventRun_runningActionsCount - 1;

if (window.obj2275_SCEventRun_runningActionsCount == 0) {
	obj2275_SCEventRun_actionGroup3();
}
	}, 1);
}












};
obj2275_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2275_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2275").trigger("obj2275_SCEventRun_ended");
		
		return;
	}
	window.obj2275_SCEventRun_activeActionGroupIndex = 3;
	



































//	action: run action list container
//	target: obj5679 
runActionList_5684();
function runActionList_5684() {
	window.obj2275_SCEventRun_runningActionsCount = obj2275_SCEventRun_runningActionsCount + 1;

	$("#obj5679").trigger('SCEventRun');
	setTimeout(function() {
		window.obj2275_SCEventRun_runningActionsCount = window.obj2275_SCEventRun_runningActionsCount - 1;

if (window.obj2275_SCEventRun_runningActionsCount == 0) {
	obj2275_SCEventRun_actionGroup4();
}		
	}, 1);
}






};
obj2275_SCEventRun_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2275_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2275").trigger("obj2275_SCEventRun_ended");
		
		return;
	}
	window.obj2275_SCEventRun_activeActionGroupIndex = 4;
	










































};
obj2298_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2298_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2298").trigger("obj2298_SCEventRun_ended");
		
		return;
	}
	window.obj2298_SCEventRun_activeActionGroupIndex = 0;
	


//	action: show 
//	target: obj2292 
(function(){
	window.obj2298_SCEventRun_runningActionsCount = obj2298_SCEventRun_runningActionsCount + 1;


	var element = "#obj2292";
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
				window.obj2298_SCEventRun_runningActionsCount = window.obj2298_SCEventRun_runningActionsCount - 1;

if (window.obj2298_SCEventRun_runningActionsCount == 0) {
	obj2298_SCEventRun_actionGroup1();
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
			window.obj2298_SCEventRun_runningActionsCount = window.obj2298_SCEventRun_runningActionsCount - 1;

if (window.obj2298_SCEventRun_runningActionsCount == 0) {
	obj2298_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj2296 
(function(){
	window.obj2298_SCEventRun_runningActionsCount = obj2298_SCEventRun_runningActionsCount + 1;


	var element = "#obj2296";
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
				window.obj2298_SCEventRun_runningActionsCount = window.obj2298_SCEventRun_runningActionsCount - 1;

if (window.obj2298_SCEventRun_runningActionsCount == 0) {
	obj2298_SCEventRun_actionGroup1();
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
			window.obj2298_SCEventRun_runningActionsCount = window.obj2298_SCEventRun_runningActionsCount - 1;

if (window.obj2298_SCEventRun_runningActionsCount == 0) {
	obj2298_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj2294 
(function(){
	window.obj2298_SCEventRun_runningActionsCount = obj2298_SCEventRun_runningActionsCount + 1;


	var element = "#obj2294";
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
				window.obj2298_SCEventRun_runningActionsCount = window.obj2298_SCEventRun_runningActionsCount - 1;

if (window.obj2298_SCEventRun_runningActionsCount == 0) {
	obj2298_SCEventRun_actionGroup1();
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
			window.obj2298_SCEventRun_runningActionsCount = window.obj2298_SCEventRun_runningActionsCount - 1;

if (window.obj2298_SCEventRun_runningActionsCount == 0) {
	obj2298_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: move
//	target: obj5114 
move_3242();
function move_3242() {
	window.obj2298_SCEventRun_runningActionsCount = obj2298_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj5114");
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
			window.obj2298_SCEventRun_runningActionsCount = window.obj2298_SCEventRun_runningActionsCount - 1;

if (window.obj2298_SCEventRun_runningActionsCount == 0) {
	obj2298_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj5114 
move_3243();
function move_3243() {
	window.obj2298_SCEventRun_runningActionsCount = obj2298_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj5114");
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
			window.obj2298_SCEventRun_runningActionsCount = window.obj2298_SCEventRun_runningActionsCount - 1;

if (window.obj2298_SCEventRun_runningActionsCount == 0) {
	obj2298_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj5114 
move_3244();
function move_3244() {
	window.obj2298_SCEventRun_runningActionsCount = obj2298_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj5114");
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
			window.obj2298_SCEventRun_runningActionsCount = window.obj2298_SCEventRun_runningActionsCount - 1;

if (window.obj2298_SCEventRun_runningActionsCount == 0) {
	obj2298_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj5114 
move_3245();
function move_3245() {
	window.obj2298_SCEventRun_runningActionsCount = obj2298_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj5114");
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
			window.obj2298_SCEventRun_runningActionsCount = window.obj2298_SCEventRun_runningActionsCount - 1;

if (window.obj2298_SCEventRun_runningActionsCount == 0) {
	obj2298_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3279 
move_3360();
function move_3360() {
	window.obj2298_SCEventRun_runningActionsCount = obj2298_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj3279");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 88;
	var moveY = 478;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 3000, easing, function() {
		setTimeout(function() {
			window.obj2298_SCEventRun_runningActionsCount = window.obj2298_SCEventRun_runningActionsCount - 1;

if (window.obj2298_SCEventRun_runningActionsCount == 0) {
	obj2298_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3392 
move_3394();
function move_3394() {
	window.obj2298_SCEventRun_runningActionsCount = obj2298_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj3392");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 227;
	var moveY = 567;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 3000, easing, function() {
		setTimeout(function() {
			window.obj2298_SCEventRun_runningActionsCount = window.obj2298_SCEventRun_runningActionsCount - 1;

if (window.obj2298_SCEventRun_runningActionsCount == 0) {
	obj2298_SCEventRun_actionGroup1();
}
		}, 1);
	});
}

//	action: stopAnimation 
//	target: obj5114 
stopAnimation_5137();
function stopAnimation_5137() {
	window.obj2298_SCEventRun_runningActionsCount = obj2298_SCEventRun_runningActionsCount + 1;

	var targetObject = $("#obj5114");
	if (targetObject.hasClass("playing")) {
		targetObject.removeClass("playing");
		api_animate_obj5114.stopAnimation();
        if (window.hasAudioTrack_obj5114) {
            var audio_animation = window.audio_animation_obj5114;
            audio_animation.src = audio_animation.src; // myAudio.currentTime = 0 does not work on iOS
		    audio_animation.pause();
        }
		$("#obj5114").trigger('obj5114_animation_ended');
	}
	setTimeout(function() {
		window.obj2298_SCEventRun_runningActionsCount = window.obj2298_SCEventRun_runningActionsCount - 1;

if (window.obj2298_SCEventRun_runningActionsCount == 0) {
	obj2298_SCEventRun_actionGroup1();
}
	}, 1);
}






//	action: playAudioFile
playAudioFile_5485();
function playAudioFile_5485() {
	window.obj2298_SCEventRun_runningActionsCount = obj2298_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5485")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5485");
			$("#obj_audio_playSoundFile5485").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2298_SCEventRun_runningActionsCount = window.obj2298_SCEventRun_runningActionsCount - 1;

if (window.obj2298_SCEventRun_runningActionsCount == 0) {
	obj2298_SCEventRun_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2298_SCEventRun_runningActionsCount = window.obj2298_SCEventRun_runningActionsCount - 1;

if (window.obj2298_SCEventRun_runningActionsCount == 0) {
	obj2298_SCEventRun_actionGroup1();
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
				window.obj2298_SCEventRun_runningActionsCount = window.obj2298_SCEventRun_runningActionsCount - 1;

if (window.obj2298_SCEventRun_runningActionsCount == 0) {
	obj2298_SCEventRun_actionGroup1();
}
			}, false);
		} else {
			window.obj2298_SCEventRun_runningActionsCount = window.obj2298_SCEventRun_runningActionsCount - 1;

if (window.obj2298_SCEventRun_runningActionsCount == 0) {
	obj2298_SCEventRun_actionGroup1();
}
		}
	}

	
	
	
}






//	action: playAudioFile
playAudioFile_5693();
function playAudioFile_5693() {
	window.obj2298_SCEventRun_runningActionsCount = obj2298_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5693")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5693");
			$("#obj_audio_playSoundFile5693").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2298_SCEventRun_runningActionsCount = window.obj2298_SCEventRun_runningActionsCount - 1;

if (window.obj2298_SCEventRun_runningActionsCount == 0) {
	obj2298_SCEventRun_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2298_SCEventRun_runningActionsCount = window.obj2298_SCEventRun_runningActionsCount - 1;

if (window.obj2298_SCEventRun_runningActionsCount == 0) {
	obj2298_SCEventRun_actionGroup1();
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
				window.obj2298_SCEventRun_runningActionsCount = window.obj2298_SCEventRun_runningActionsCount - 1;

if (window.obj2298_SCEventRun_runningActionsCount == 0) {
	obj2298_SCEventRun_actionGroup1();
}
			}, false);
		} else {
			window.obj2298_SCEventRun_runningActionsCount = window.obj2298_SCEventRun_runningActionsCount - 1;

if (window.obj2298_SCEventRun_runningActionsCount == 0) {
	obj2298_SCEventRun_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_3358();
function runjs_3358() {
	window.obj2298_SCEventRun_runningActionsCount = obj2298_SCEventRun_runningActionsCount + 1;


	localStorage.setItem("tapped", "4");

	setTimeout(function() {
		window.obj2298_SCEventRun_runningActionsCount = window.obj2298_SCEventRun_runningActionsCount - 1;

if (window.obj2298_SCEventRun_runningActionsCount == 0) {
	obj2298_SCEventRun_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_5690();
function runjs_5690() {
	window.obj2298_SCEventRun_runningActionsCount = obj2298_SCEventRun_runningActionsCount + 1;


	localStorage.setItem("ready", "false");

	setTimeout(function() {
		window.obj2298_SCEventRun_runningActionsCount = window.obj2298_SCEventRun_runningActionsCount - 1;

if (window.obj2298_SCEventRun_runningActionsCount == 0) {
	obj2298_SCEventRun_actionGroup1();
}
	}, 1);
}












};
obj2298_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2298_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2298").trigger("obj2298_SCEventRun_ended");
		
		return;
	}
	window.obj2298_SCEventRun_activeActionGroupIndex = 1;
	





























//	action: Run JavaScript
runjs_5691();
function runjs_5691() {
	window.obj2298_SCEventRun_runningActionsCount = obj2298_SCEventRun_runningActionsCount + 1;


	localStorage.setItem("ready", "true");

	setTimeout(function() {
		window.obj2298_SCEventRun_runningActionsCount = window.obj2298_SCEventRun_runningActionsCount - 1;

if (window.obj2298_SCEventRun_runningActionsCount == 0) {
	obj2298_SCEventRun_actionGroup2();
}
	}, 1);
}












};
obj2298_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2298_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2298").trigger("obj2298_SCEventRun_ended");
		
		return;
	}
	window.obj2298_SCEventRun_activeActionGroupIndex = 2;
	
















//	action: wait
wait_4699();
function wait_4699() {
	window.obj2298_SCEventRun_runningActionsCount = obj2298_SCEventRun_runningActionsCount + 1;

	setTimeout(function() {
		window.obj2298_SCEventRun_runningActionsCount = window.obj2298_SCEventRun_runningActionsCount - 1;

if (window.obj2298_SCEventRun_runningActionsCount == 0) {
	obj2298_SCEventRun_actionGroup3();
}
	}, 4000);
}

























};
obj2298_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2298_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2298").trigger("obj2298_SCEventRun_ended");
		
		return;
	}
	window.obj2298_SCEventRun_activeActionGroupIndex = 3;
	





























//	action: Run JavaScript
runjs_4730();
function runjs_4730() {
	window.obj2298_SCEventRun_runningActionsCount = obj2298_SCEventRun_runningActionsCount + 1;


	if(localStorage.getItem("tapped") !== "5")
{
    $("#obj4745").fadeIn();
    $("#obj4723").trigger(PubCoder.Events.Run);
}

	setTimeout(function() {
		window.obj2298_SCEventRun_runningActionsCount = window.obj2298_SCEventRun_runningActionsCount - 1;

if (window.obj2298_SCEventRun_runningActionsCount == 0) {
	obj2298_SCEventRun_actionGroup4();
}
	}, 1);
}












};
obj2298_SCEventRun_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2298_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2298").trigger("obj2298_SCEventRun_ended");
		
		return;
	}
	window.obj2298_SCEventRun_activeActionGroupIndex = 4;
	










































};
obj2327_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2327_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2327").trigger("obj2327_SCEventRun_ended");
		
		return;
	}
	window.obj2327_SCEventRun_activeActionGroupIndex = 0;
	


//	action: show 
//	target: obj2325 
(function(){
	window.obj2327_SCEventRun_runningActionsCount = obj2327_SCEventRun_runningActionsCount + 1;


	var element = "#obj2325";
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
				window.obj2327_SCEventRun_runningActionsCount = window.obj2327_SCEventRun_runningActionsCount - 1;

if (window.obj2327_SCEventRun_runningActionsCount == 0) {
	obj2327_SCEventRun_actionGroup1();
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
			window.obj2327_SCEventRun_runningActionsCount = window.obj2327_SCEventRun_runningActionsCount - 1;

if (window.obj2327_SCEventRun_runningActionsCount == 0) {
	obj2327_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj2321 
(function(){
	window.obj2327_SCEventRun_runningActionsCount = obj2327_SCEventRun_runningActionsCount + 1;


	var element = "#obj2321";
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
				window.obj2327_SCEventRun_runningActionsCount = window.obj2327_SCEventRun_runningActionsCount - 1;

if (window.obj2327_SCEventRun_runningActionsCount == 0) {
	obj2327_SCEventRun_actionGroup1();
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
			window.obj2327_SCEventRun_runningActionsCount = window.obj2327_SCEventRun_runningActionsCount - 1;

if (window.obj2327_SCEventRun_runningActionsCount == 0) {
	obj2327_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj2323 
(function(){
	window.obj2327_SCEventRun_runningActionsCount = obj2327_SCEventRun_runningActionsCount + 1;


	var element = "#obj2323";
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
				window.obj2327_SCEventRun_runningActionsCount = window.obj2327_SCEventRun_runningActionsCount - 1;

if (window.obj2327_SCEventRun_runningActionsCount == 0) {
	obj2327_SCEventRun_actionGroup1();
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
			window.obj2327_SCEventRun_runningActionsCount = window.obj2327_SCEventRun_runningActionsCount - 1;

if (window.obj2327_SCEventRun_runningActionsCount == 0) {
	obj2327_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: move
//	target: obj2319 
move_2361();
function move_2361() {
	window.obj2327_SCEventRun_runningActionsCount = obj2327_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj2319");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-448";
	var moveY = "+=-29";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj2327_SCEventRun_runningActionsCount = window.obj2327_SCEventRun_runningActionsCount - 1;

if (window.obj2327_SCEventRun_runningActionsCount == 0) {
	obj2327_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2306 
move_3224();
function move_3224() {
	window.obj2327_SCEventRun_runningActionsCount = obj2327_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj2306");
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
			window.obj2327_SCEventRun_runningActionsCount = window.obj2327_SCEventRun_runningActionsCount - 1;

if (window.obj2327_SCEventRun_runningActionsCount == 0) {
	obj2327_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2306 
move_3225();
function move_3225() {
	window.obj2327_SCEventRun_runningActionsCount = obj2327_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj2306");
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
			window.obj2327_SCEventRun_runningActionsCount = window.obj2327_SCEventRun_runningActionsCount - 1;

if (window.obj2327_SCEventRun_runningActionsCount == 0) {
	obj2327_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2306 
move_3226();
function move_3226() {
	window.obj2327_SCEventRun_runningActionsCount = obj2327_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj2306");
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
			window.obj2327_SCEventRun_runningActionsCount = window.obj2327_SCEventRun_runningActionsCount - 1;

if (window.obj2327_SCEventRun_runningActionsCount == 0) {
	obj2327_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2306 
move_3227();
function move_3227() {
	window.obj2327_SCEventRun_runningActionsCount = obj2327_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj2306");
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
			window.obj2327_SCEventRun_runningActionsCount = window.obj2327_SCEventRun_runningActionsCount - 1;

if (window.obj2327_SCEventRun_runningActionsCount == 0) {
	obj2327_SCEventRun_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_5477();
function playAudioFile_5477() {
	window.obj2327_SCEventRun_runningActionsCount = obj2327_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5477")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5477");
			$("#obj_audio_playSoundFile5477").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2327_SCEventRun_runningActionsCount = window.obj2327_SCEventRun_runningActionsCount - 1;

if (window.obj2327_SCEventRun_runningActionsCount == 0) {
	obj2327_SCEventRun_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2327_SCEventRun_runningActionsCount = window.obj2327_SCEventRun_runningActionsCount - 1;

if (window.obj2327_SCEventRun_runningActionsCount == 0) {
	obj2327_SCEventRun_actionGroup1();
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
				window.obj2327_SCEventRun_runningActionsCount = window.obj2327_SCEventRun_runningActionsCount - 1;

if (window.obj2327_SCEventRun_runningActionsCount == 0) {
	obj2327_SCEventRun_actionGroup1();
}
			}, false);
		} else {
			window.obj2327_SCEventRun_runningActionsCount = window.obj2327_SCEventRun_runningActionsCount - 1;

if (window.obj2327_SCEventRun_runningActionsCount == 0) {
	obj2327_SCEventRun_actionGroup1();
}
		}
	}

	
	
	
}






//	action: playAudioFile
playAudioFile_5673();
function playAudioFile_5673() {
	window.obj2327_SCEventRun_runningActionsCount = obj2327_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5673")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5673");
			$("#obj_audio_playSoundFile5673").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2327_SCEventRun_runningActionsCount = window.obj2327_SCEventRun_runningActionsCount - 1;

if (window.obj2327_SCEventRun_runningActionsCount == 0) {
	obj2327_SCEventRun_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2327_SCEventRun_runningActionsCount = window.obj2327_SCEventRun_runningActionsCount - 1;

if (window.obj2327_SCEventRun_runningActionsCount == 0) {
	obj2327_SCEventRun_actionGroup1();
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
				window.obj2327_SCEventRun_runningActionsCount = window.obj2327_SCEventRun_runningActionsCount - 1;

if (window.obj2327_SCEventRun_runningActionsCount == 0) {
	obj2327_SCEventRun_actionGroup1();
}
			}, false);
		} else {
			window.obj2327_SCEventRun_runningActionsCount = window.obj2327_SCEventRun_runningActionsCount - 1;

if (window.obj2327_SCEventRun_runningActionsCount == 0) {
	obj2327_SCEventRun_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_5672();
function runjs_5672() {
	window.obj2327_SCEventRun_runningActionsCount = obj2327_SCEventRun_runningActionsCount + 1;


	localStorage.setItem("ready", "false");

	setTimeout(function() {
		window.obj2327_SCEventRun_runningActionsCount = window.obj2327_SCEventRun_runningActionsCount - 1;

if (window.obj2327_SCEventRun_runningActionsCount == 0) {
	obj2327_SCEventRun_actionGroup1();
}
	}, 1);
}












};
obj2327_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2327_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2327").trigger("obj2327_SCEventRun_ended");
		
		return;
	}
	window.obj2327_SCEventRun_activeActionGroupIndex = 1;
	





























//	action: Run JavaScript
runjs_5674();
function runjs_5674() {
	window.obj2327_SCEventRun_runningActionsCount = obj2327_SCEventRun_runningActionsCount + 1;


	localStorage.setItem("ready", "true");

	setTimeout(function() {
		window.obj2327_SCEventRun_runningActionsCount = window.obj2327_SCEventRun_runningActionsCount - 1;

if (window.obj2327_SCEventRun_runningActionsCount == 0) {
	obj2327_SCEventRun_actionGroup2();
}
	}, 1);
}












};
obj2327_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2327_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2327").trigger("obj2327_SCEventRun_ended");
		
		return;
	}
	window.obj2327_SCEventRun_activeActionGroupIndex = 2;
	










































};
obj2193_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2193_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2193").trigger("obj2193_SCEventRun_ended");
		
		return;
	}
	window.obj2193_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj4764 
hide_4777();
function hide_4777() {
	var element = "#obj4764";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2193_SCEventRun_runningActionsCount = obj2193_SCEventRun_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj2193_SCEventRun_runningActionsCount = window.obj2193_SCEventRun_runningActionsCount - 1;

if (window.obj2193_SCEventRun_runningActionsCount == 0) {
	obj2193_SCEventRun_actionGroup1();
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
		setTimeout(hide_4777(), 100);
		return;
	}

	setTimeout(function() {
		$(element).css("display", "none");
		window.obj2193_SCEventRun_runningActionsCount = window.obj2193_SCEventRun_runningActionsCount - 1;

if (window.obj2193_SCEventRun_runningActionsCount == 0) {
	obj2193_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)

}
//	action: show 
//	target: obj2136 
(function(){
	window.obj2193_SCEventRun_runningActionsCount = obj2193_SCEventRun_runningActionsCount + 1;


	var element = "#obj2136";
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
				window.obj2193_SCEventRun_runningActionsCount = window.obj2193_SCEventRun_runningActionsCount - 1;

if (window.obj2193_SCEventRun_runningActionsCount == 0) {
	obj2193_SCEventRun_actionGroup1();
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
			window.obj2193_SCEventRun_runningActionsCount = window.obj2193_SCEventRun_runningActionsCount - 1;

if (window.obj2193_SCEventRun_runningActionsCount == 0) {
	obj2193_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj3273 
(function(){
	window.obj2193_SCEventRun_runningActionsCount = obj2193_SCEventRun_runningActionsCount + 1;


	var element = "#obj3273";
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
				window.obj2193_SCEventRun_runningActionsCount = window.obj2193_SCEventRun_runningActionsCount - 1;

if (window.obj2193_SCEventRun_runningActionsCount == 0) {
	obj2193_SCEventRun_actionGroup1();
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
			window.obj2193_SCEventRun_runningActionsCount = window.obj2193_SCEventRun_runningActionsCount - 1;

if (window.obj2193_SCEventRun_runningActionsCount == 0) {
	obj2193_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj3270 
(function(){
	window.obj2193_SCEventRun_runningActionsCount = obj2193_SCEventRun_runningActionsCount + 1;


	var element = "#obj3270";
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
				window.obj2193_SCEventRun_runningActionsCount = window.obj2193_SCEventRun_runningActionsCount - 1;

if (window.obj2193_SCEventRun_runningActionsCount == 0) {
	obj2193_SCEventRun_actionGroup1();
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
			window.obj2193_SCEventRun_runningActionsCount = window.obj2193_SCEventRun_runningActionsCount - 1;

if (window.obj2193_SCEventRun_runningActionsCount == 0) {
	obj2193_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj3267 
(function(){
	window.obj2193_SCEventRun_runningActionsCount = obj2193_SCEventRun_runningActionsCount + 1;


	var element = "#obj3267";
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
				window.obj2193_SCEventRun_runningActionsCount = window.obj2193_SCEventRun_runningActionsCount - 1;

if (window.obj2193_SCEventRun_runningActionsCount == 0) {
	obj2193_SCEventRun_actionGroup1();
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
			window.obj2193_SCEventRun_runningActionsCount = window.obj2193_SCEventRun_runningActionsCount - 1;

if (window.obj2193_SCEventRun_runningActionsCount == 0) {
	obj2193_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj3276 
(function(){
	window.obj2193_SCEventRun_runningActionsCount = obj2193_SCEventRun_runningActionsCount + 1;


	var element = "#obj3276";
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
				window.obj2193_SCEventRun_runningActionsCount = window.obj2193_SCEventRun_runningActionsCount - 1;

if (window.obj2193_SCEventRun_runningActionsCount == 0) {
	obj2193_SCEventRun_actionGroup1();
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
			window.obj2193_SCEventRun_runningActionsCount = window.obj2193_SCEventRun_runningActionsCount - 1;

if (window.obj2193_SCEventRun_runningActionsCount == 0) {
	obj2193_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: move
//	target: obj2142 
move_3069();
function move_3069() {
	window.obj2193_SCEventRun_runningActionsCount = obj2193_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj2142");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-700";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 3000, easing, function() {
		setTimeout(function() {
			window.obj2193_SCEventRun_runningActionsCount = window.obj2193_SCEventRun_runningActionsCount - 1;

if (window.obj2193_SCEventRun_runningActionsCount == 0) {
	obj2193_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2202 
move_3070();
function move_3070() {
	window.obj2193_SCEventRun_runningActionsCount = obj2193_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj2202");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-300";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj2193_SCEventRun_runningActionsCount = window.obj2193_SCEventRun_runningActionsCount - 1;

if (window.obj2193_SCEventRun_runningActionsCount == 0) {
	obj2193_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2206 
move_3071();
function move_3071() {
	window.obj2193_SCEventRun_runningActionsCount = obj2193_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj2206");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-300";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj2193_SCEventRun_runningActionsCount = window.obj2193_SCEventRun_runningActionsCount - 1;

if (window.obj2193_SCEventRun_runningActionsCount == 0) {
	obj2193_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2204 
move_3072();
function move_3072() {
	window.obj2193_SCEventRun_runningActionsCount = obj2193_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj2204");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-300";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj2193_SCEventRun_runningActionsCount = window.obj2193_SCEventRun_runningActionsCount - 1;

if (window.obj2193_SCEventRun_runningActionsCount == 0) {
	obj2193_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2354 
move_3073();
function move_3073() {
	window.obj2193_SCEventRun_runningActionsCount = obj2193_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj2354");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-604";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1300, easing, function() {
		setTimeout(function() {
			window.obj2193_SCEventRun_runningActionsCount = window.obj2193_SCEventRun_runningActionsCount - 1;

if (window.obj2193_SCEventRun_runningActionsCount == 0) {
	obj2193_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2352 
move_3074();
function move_3074() {
	window.obj2193_SCEventRun_runningActionsCount = obj2193_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj2352");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-604";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1300, easing, function() {
		setTimeout(function() {
			window.obj2193_SCEventRun_runningActionsCount = window.obj2193_SCEventRun_runningActionsCount - 1;

if (window.obj2193_SCEventRun_runningActionsCount == 0) {
	obj2193_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2350 
move_3075();
function move_3075() {
	window.obj2193_SCEventRun_runningActionsCount = obj2193_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj2350");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-604";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1300, easing, function() {
		setTimeout(function() {
			window.obj2193_SCEventRun_runningActionsCount = window.obj2193_SCEventRun_runningActionsCount - 1;

if (window.obj2193_SCEventRun_runningActionsCount == 0) {
	obj2193_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2325 
move_3076();
function move_3076() {
	window.obj2193_SCEventRun_runningActionsCount = obj2193_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj2325");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-730";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1500, easing, function() {
		setTimeout(function() {
			window.obj2193_SCEventRun_runningActionsCount = window.obj2193_SCEventRun_runningActionsCount - 1;

if (window.obj2193_SCEventRun_runningActionsCount == 0) {
	obj2193_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2323 
move_3077();
function move_3077() {
	window.obj2193_SCEventRun_runningActionsCount = obj2193_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj2323");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-730";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1500, easing, function() {
		setTimeout(function() {
			window.obj2193_SCEventRun_runningActionsCount = window.obj2193_SCEventRun_runningActionsCount - 1;

if (window.obj2193_SCEventRun_runningActionsCount == 0) {
	obj2193_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2321 
move_3078();
function move_3078() {
	window.obj2193_SCEventRun_runningActionsCount = obj2193_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj2321");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-730";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1500, easing, function() {
		setTimeout(function() {
			window.obj2193_SCEventRun_runningActionsCount = window.obj2193_SCEventRun_runningActionsCount - 1;

if (window.obj2193_SCEventRun_runningActionsCount == 0) {
	obj2193_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2319 
move_3079();
function move_3079() {
	window.obj2193_SCEventRun_runningActionsCount = obj2193_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj2319");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-830";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj2193_SCEventRun_runningActionsCount = window.obj2193_SCEventRun_runningActionsCount - 1;

if (window.obj2193_SCEventRun_runningActionsCount == 0) {
	obj2193_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2309 
move_3080();
function move_3080() {
	window.obj2193_SCEventRun_runningActionsCount = obj2193_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj2309");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=459";
	var moveY = "+=-352";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 3000, easing, function() {
		setTimeout(function() {
			window.obj2193_SCEventRun_runningActionsCount = window.obj2193_SCEventRun_runningActionsCount - 1;

if (window.obj2193_SCEventRun_runningActionsCount == 0) {
	obj2193_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2317 
move_3081();
function move_3081() {
	window.obj2193_SCEventRun_runningActionsCount = obj2193_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj2317");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=459";
	var moveY = "+=-352";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 3000, easing, function() {
		setTimeout(function() {
			window.obj2193_SCEventRun_runningActionsCount = window.obj2193_SCEventRun_runningActionsCount - 1;

if (window.obj2193_SCEventRun_runningActionsCount == 0) {
	obj2193_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2136 
move_3083();
function move_3083() {
	window.obj2193_SCEventRun_runningActionsCount = obj2193_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj2136");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-1";
	var moveY = "+=-291";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 3000, easing, function() {
		setTimeout(function() {
			window.obj2193_SCEventRun_runningActionsCount = window.obj2193_SCEventRun_runningActionsCount - 1;

if (window.obj2193_SCEventRun_runningActionsCount == 0) {
	obj2193_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2306 
move_3084();
function move_3084() {
	window.obj2193_SCEventRun_runningActionsCount = obj2193_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj2306");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-181";
	var moveY = "+=-209";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj2193_SCEventRun_runningActionsCount = window.obj2193_SCEventRun_runningActionsCount - 1;

if (window.obj2193_SCEventRun_runningActionsCount == 0) {
	obj2193_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3185 
move_3198();
function move_3198() {
	window.obj2193_SCEventRun_runningActionsCount = obj2193_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj3185");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-1";
	var moveY = "+=-291";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 3000, easing, function() {
		setTimeout(function() {
			window.obj2193_SCEventRun_runningActionsCount = window.obj2193_SCEventRun_runningActionsCount - 1;

if (window.obj2193_SCEventRun_runningActionsCount == 0) {
	obj2193_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3188 
move_3199();
function move_3199() {
	window.obj2193_SCEventRun_runningActionsCount = obj2193_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj3188");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-1";
	var moveY = "+=-291";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 3000, easing, function() {
		setTimeout(function() {
			window.obj2193_SCEventRun_runningActionsCount = window.obj2193_SCEventRun_runningActionsCount - 1;

if (window.obj2193_SCEventRun_runningActionsCount == 0) {
	obj2193_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3191 
move_3200();
function move_3200() {
	window.obj2193_SCEventRun_runningActionsCount = obj2193_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj3191");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-1";
	var moveY = "+=-291";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 3000, easing, function() {
		setTimeout(function() {
			window.obj2193_SCEventRun_runningActionsCount = window.obj2193_SCEventRun_runningActionsCount - 1;

if (window.obj2193_SCEventRun_runningActionsCount == 0) {
	obj2193_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3194 
move_3201();
function move_3201() {
	window.obj2193_SCEventRun_runningActionsCount = obj2193_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj3194");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-1";
	var moveY = "+=-291";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 3000, easing, function() {
		setTimeout(function() {
			window.obj2193_SCEventRun_runningActionsCount = window.obj2193_SCEventRun_runningActionsCount - 1;

if (window.obj2193_SCEventRun_runningActionsCount == 0) {
	obj2193_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3196 
move_3202();
function move_3202() {
	window.obj2193_SCEventRun_runningActionsCount = obj2193_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj3196");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-1";
	var moveY = "+=-291";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 3000, easing, function() {
		setTimeout(function() {
			window.obj2193_SCEventRun_runningActionsCount = window.obj2193_SCEventRun_runningActionsCount - 1;

if (window.obj2193_SCEventRun_runningActionsCount == 0) {
	obj2193_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3349 
move_3351();
function move_3351() {
	window.obj2193_SCEventRun_runningActionsCount = obj2193_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj3349");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=459";
	var moveY = "+=-352";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 3000, easing, function() {
		setTimeout(function() {
			window.obj2193_SCEventRun_runningActionsCount = window.obj2193_SCEventRun_runningActionsCount - 1;

if (window.obj2193_SCEventRun_runningActionsCount == 0) {
	obj2193_SCEventRun_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_5479();
function playAudioFile_5479() {
	window.obj2193_SCEventRun_runningActionsCount = obj2193_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5479")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5479");
			$("#obj_audio_playSoundFile5479").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2193_SCEventRun_runningActionsCount = window.obj2193_SCEventRun_runningActionsCount - 1;

if (window.obj2193_SCEventRun_runningActionsCount == 0) {
	obj2193_SCEventRun_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2193_SCEventRun_runningActionsCount = window.obj2193_SCEventRun_runningActionsCount - 1;

if (window.obj2193_SCEventRun_runningActionsCount == 0) {
	obj2193_SCEventRun_actionGroup1();
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
				window.obj2193_SCEventRun_runningActionsCount = window.obj2193_SCEventRun_runningActionsCount - 1;

if (window.obj2193_SCEventRun_runningActionsCount == 0) {
	obj2193_SCEventRun_actionGroup1();
}
			}, false);
		} else {
			window.obj2193_SCEventRun_runningActionsCount = window.obj2193_SCEventRun_runningActionsCount - 1;

if (window.obj2193_SCEventRun_runningActionsCount == 0) {
	obj2193_SCEventRun_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_3068();
function runjs_3068() {
	window.obj2193_SCEventRun_runningActionsCount = obj2193_SCEventRun_runningActionsCount + 1;


	$("#obj1966").stop(true);
$("#obj1966").animate({top: "-1000px"}, 2000, function(){
    $("#obj1966").hide();
});
$("#obj1968").stop(true);
$("#obj1968").animate({top: "-1000px"}, 2000, function(){
    $("#obj1968").hide();
});
$("#obj1970").stop(true);
$("#obj1970").animate({top: "-1000px"}, 2000, function(){
    $("#obj1970").hide();
});
$("#obj1972").stop(true);
$("#obj1972").animate({top: "-1000px"}, 2000, function(){
    $("#obj1972").hide();
});
$("#obj2090").stop(true);
$("#obj2090").animate({top: "-1000px"}, 2000, function(){
    $("#obj2090").hide();
});
$("#obj2078").stop(true);
$("#obj2078").animate({top: "-1000px"}, 2000, function(){
    $("#obj2078").hide();
});
$("#obj2064").stop(true);
$("#obj2064").animate({top: "-1000px"}, 2000, function(){
    $("#obj2064").hide();
});
$("#obj2052").stop(true);
$("#obj2052").animate({top: "-1000px"}, 2000, function(){
    $("#obj2052").hide();
});
//flock
$("#obj2145").stop(true);
$("#obj2145").animate({top: "-1000px"}, 2000, function(){
    $("#obj2145").hide();
});
//tur
$("#obj2444").stop(true);
$("#obj2444").animate({top: "-1000px"}, 3000, function(){
    $("#obj2444").hide();
});
$("#obj2485").animate({top: "150px"}, 2000)
$("#obj2471").animate({top: "70px"}, 2000);
$("#obj2457").animate({top: "-1000px"}, 2000);

	setTimeout(function() {
		window.obj2193_SCEventRun_runningActionsCount = window.obj2193_SCEventRun_runningActionsCount - 1;

if (window.obj2193_SCEventRun_runningActionsCount == 0) {
	obj2193_SCEventRun_actionGroup1();
}
	}, 1);
}












};
obj2193_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2193_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2193").trigger("obj2193_SCEventRun_ended");
		
		return;
	}
	window.obj2193_SCEventRun_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj5077 
hide_3095();
function hide_3095() {
	var element = "#obj5077";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2193_SCEventRun_runningActionsCount = obj2193_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj2193_SCEventRun_runningActionsCount = window.obj2193_SCEventRun_runningActionsCount - 1;

if (window.obj2193_SCEventRun_runningActionsCount == 0) {
	obj2193_SCEventRun_actionGroup2();
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
		setTimeout(hide_3095(), 100);
		return;
	}

	setTimeout(function() {
		$(element).css("display", "none");
		window.obj2193_SCEventRun_runningActionsCount = window.obj2193_SCEventRun_runningActionsCount - 1;

if (window.obj2193_SCEventRun_runningActionsCount == 0) {
	obj2193_SCEventRun_actionGroup2();
}
	}, animationDurationMs);

	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)

}
//	action: show 
//	target: obj5114 
(function(){
	window.obj2193_SCEventRun_runningActionsCount = obj2193_SCEventRun_runningActionsCount + 1;


	var element = "#obj5114";
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
				window.obj2193_SCEventRun_runningActionsCount = window.obj2193_SCEventRun_runningActionsCount - 1;

if (window.obj2193_SCEventRun_runningActionsCount == 0) {
	obj2193_SCEventRun_actionGroup2();
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
			window.obj2193_SCEventRun_runningActionsCount = window.obj2193_SCEventRun_runningActionsCount - 1;

if (window.obj2193_SCEventRun_runningActionsCount == 0) {
	obj2193_SCEventRun_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: move
//	target: obj2306 
move_3086();
function move_3086() {
	window.obj2193_SCEventRun_runningActionsCount = obj2193_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj2306");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=202";
	var moveY = "+=297";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj2193_SCEventRun_runningActionsCount = window.obj2193_SCEventRun_runningActionsCount - 1;

if (window.obj2193_SCEventRun_runningActionsCount == 0) {
	obj2193_SCEventRun_actionGroup2();
}
		}, 1);
	});
}

//	action: stopAnimation 
//	target: obj5077 
stopAnimation_5111();
function stopAnimation_5111() {
	window.obj2193_SCEventRun_runningActionsCount = obj2193_SCEventRun_runningActionsCount + 1;

	var targetObject = $("#obj5077");
	if (targetObject.hasClass("playing")) {
		targetObject.removeClass("playing");
		api_animate_obj5077.stopAnimation();
        if (window.hasAudioTrack_obj5077) {
            var audio_animation = window.audio_animation_obj5077;
            audio_animation.src = audio_animation.src; // myAudio.currentTime = 0 does not work on iOS
		    audio_animation.pause();
        }
		$("#obj5077").trigger('obj5077_animation_ended');
	}
	setTimeout(function() {
		window.obj2193_SCEventRun_runningActionsCount = window.obj2193_SCEventRun_runningActionsCount - 1;

if (window.obj2193_SCEventRun_runningActionsCount == 0) {
	obj2193_SCEventRun_actionGroup2();
}
	}, 1);
}








//	action: rotate 
//	target: obj5114 
rotate_3098();
function rotate_3098() {
	window.obj2193_SCEventRun_runningActionsCount = obj2193_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj5114";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj5114';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '-39.6266';
	var rotationSpeed = 2;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = false;
	if (isInfinite) { rotate_3098_completed(); }

	//TweenMax.to(targetObjectId, 2, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_3098_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_3098_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_3098_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_3098_completed() {
	setTimeout(function() {
		window.obj2193_SCEventRun_runningActionsCount = window.obj2193_SCEventRun_runningActionsCount - 1;

if (window.obj2193_SCEventRun_runningActionsCount == 0) {
	obj2193_SCEventRun_actionGroup2();
}
	}, 1);
}




//	action: scale
//	target: obj2306 
scale_3087();
function scale_3087() {
	window.obj2193_SCEventRun_runningActionsCount = obj2193_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj2306";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2306';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '-1';
	var scaleYValue = '1';
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
		scale_3087_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_3087_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_3087_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_3087_completed() {
	setTimeout(function() {
		window.obj2193_SCEventRun_runningActionsCount = window.obj2193_SCEventRun_runningActionsCount - 1;

if (window.obj2193_SCEventRun_runningActionsCount == 0) {
	obj2193_SCEventRun_actionGroup2();
}
	}, 1);
}











//	action: Run JavaScript
runjs_3085();
function runjs_3085() {
	window.obj2193_SCEventRun_runningActionsCount = obj2193_SCEventRun_runningActionsCount + 1;


	//place hidden zep to that pos
$("#obj5114").css("left", $("#obj5077").css("left"));
$("#obj5114").css("top", $("#obj5077").css("top"));
//use action list to move them to a fixed location on the ocean bed
$("#obj5114").animate({left: "800px", top: "550px"}, 3000, function(){
    $("#obj2298").trigger(PubCoder.Events.Run);
});

	setTimeout(function() {
		window.obj2193_SCEventRun_runningActionsCount = window.obj2193_SCEventRun_runningActionsCount - 1;

if (window.obj2193_SCEventRun_runningActionsCount == 0) {
	obj2193_SCEventRun_actionGroup2();
}
	}, 1);
}












};
obj2193_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2193_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2193").trigger("obj2193_SCEventRun_ended");
		
		return;
	}
	window.obj2193_SCEventRun_activeActionGroupIndex = 2;
	










































};
obj2356_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2356_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2356").trigger("obj2356_SCEventRun_ended");
		
		return;
	}
	window.obj2356_SCEventRun_activeActionGroupIndex = 0;
	


//	action: show 
//	target: obj2354 
(function(){
	window.obj2356_SCEventRun_runningActionsCount = obj2356_SCEventRun_runningActionsCount + 1;


	var element = "#obj2354";
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
				window.obj2356_SCEventRun_runningActionsCount = window.obj2356_SCEventRun_runningActionsCount - 1;

if (window.obj2356_SCEventRun_runningActionsCount == 0) {
	obj2356_SCEventRun_actionGroup1();
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
			window.obj2356_SCEventRun_runningActionsCount = window.obj2356_SCEventRun_runningActionsCount - 1;

if (window.obj2356_SCEventRun_runningActionsCount == 0) {
	obj2356_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj2350 
(function(){
	window.obj2356_SCEventRun_runningActionsCount = obj2356_SCEventRun_runningActionsCount + 1;


	var element = "#obj2350";
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
				window.obj2356_SCEventRun_runningActionsCount = window.obj2356_SCEventRun_runningActionsCount - 1;

if (window.obj2356_SCEventRun_runningActionsCount == 0) {
	obj2356_SCEventRun_actionGroup1();
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
			window.obj2356_SCEventRun_runningActionsCount = window.obj2356_SCEventRun_runningActionsCount - 1;

if (window.obj2356_SCEventRun_runningActionsCount == 0) {
	obj2356_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj2352 
(function(){
	window.obj2356_SCEventRun_runningActionsCount = obj2356_SCEventRun_runningActionsCount + 1;


	var element = "#obj2352";
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
				window.obj2356_SCEventRun_runningActionsCount = window.obj2356_SCEventRun_runningActionsCount - 1;

if (window.obj2356_SCEventRun_runningActionsCount == 0) {
	obj2356_SCEventRun_actionGroup1();
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
			window.obj2356_SCEventRun_runningActionsCount = window.obj2356_SCEventRun_runningActionsCount - 1;

if (window.obj2356_SCEventRun_runningActionsCount == 0) {
	obj2356_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: move
//	target: obj2319 
move_3228();
function move_3228() {
	window.obj2356_SCEventRun_runningActionsCount = obj2356_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj2319");
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
			window.obj2356_SCEventRun_runningActionsCount = window.obj2356_SCEventRun_runningActionsCount - 1;

if (window.obj2356_SCEventRun_runningActionsCount == 0) {
	obj2356_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2319 
move_3229();
function move_3229() {
	window.obj2356_SCEventRun_runningActionsCount = obj2356_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj2319");
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
			window.obj2356_SCEventRun_runningActionsCount = window.obj2356_SCEventRun_runningActionsCount - 1;

if (window.obj2356_SCEventRun_runningActionsCount == 0) {
	obj2356_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2319 
move_3230();
function move_3230() {
	window.obj2356_SCEventRun_runningActionsCount = obj2356_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj2319");
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
			window.obj2356_SCEventRun_runningActionsCount = window.obj2356_SCEventRun_runningActionsCount - 1;

if (window.obj2356_SCEventRun_runningActionsCount == 0) {
	obj2356_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2319 
move_3231();
function move_3231() {
	window.obj2356_SCEventRun_runningActionsCount = obj2356_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj2319");
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
			window.obj2356_SCEventRun_runningActionsCount = window.obj2356_SCEventRun_runningActionsCount - 1;

if (window.obj2356_SCEventRun_runningActionsCount == 0) {
	obj2356_SCEventRun_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_5476();
function playAudioFile_5476() {
	window.obj2356_SCEventRun_runningActionsCount = obj2356_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5476")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5476");
			$("#obj_audio_playSoundFile5476").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2356_SCEventRun_runningActionsCount = window.obj2356_SCEventRun_runningActionsCount - 1;

if (window.obj2356_SCEventRun_runningActionsCount == 0) {
	obj2356_SCEventRun_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2356_SCEventRun_runningActionsCount = window.obj2356_SCEventRun_runningActionsCount - 1;

if (window.obj2356_SCEventRun_runningActionsCount == 0) {
	obj2356_SCEventRun_actionGroup1();
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
				window.obj2356_SCEventRun_runningActionsCount = window.obj2356_SCEventRun_runningActionsCount - 1;

if (window.obj2356_SCEventRun_runningActionsCount == 0) {
	obj2356_SCEventRun_actionGroup1();
}
			}, false);
		} else {
			window.obj2356_SCEventRun_runningActionsCount = window.obj2356_SCEventRun_runningActionsCount - 1;

if (window.obj2356_SCEventRun_runningActionsCount == 0) {
	obj2356_SCEventRun_actionGroup1();
}
		}
	}

	
	
	
}






//	action: playAudioFile
playAudioFile_5481();
function playAudioFile_5481() {
	window.obj2356_SCEventRun_runningActionsCount = obj2356_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5481")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5481");
			$("#obj_audio_playSoundFile5481").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2356_SCEventRun_runningActionsCount = window.obj2356_SCEventRun_runningActionsCount - 1;

if (window.obj2356_SCEventRun_runningActionsCount == 0) {
	obj2356_SCEventRun_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2356_SCEventRun_runningActionsCount = window.obj2356_SCEventRun_runningActionsCount - 1;

if (window.obj2356_SCEventRun_runningActionsCount == 0) {
	obj2356_SCEventRun_actionGroup1();
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
				window.obj2356_SCEventRun_runningActionsCount = window.obj2356_SCEventRun_runningActionsCount - 1;

if (window.obj2356_SCEventRun_runningActionsCount == 0) {
	obj2356_SCEventRun_actionGroup1();
}
			}, false);
		} else {
			window.obj2356_SCEventRun_runningActionsCount = window.obj2356_SCEventRun_runningActionsCount - 1;

if (window.obj2356_SCEventRun_runningActionsCount == 0) {
	obj2356_SCEventRun_actionGroup1();
}
		}
	}

	
	
	
}






//	action: playAudioFile
playAudioFile_5689();
function playAudioFile_5689() {
	window.obj2356_SCEventRun_runningActionsCount = obj2356_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5689")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5689");
			$("#obj_audio_playSoundFile5689").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2356_SCEventRun_runningActionsCount = window.obj2356_SCEventRun_runningActionsCount - 1;

if (window.obj2356_SCEventRun_runningActionsCount == 0) {
	obj2356_SCEventRun_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2356_SCEventRun_runningActionsCount = window.obj2356_SCEventRun_runningActionsCount - 1;

if (window.obj2356_SCEventRun_runningActionsCount == 0) {
	obj2356_SCEventRun_actionGroup1();
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
				window.obj2356_SCEventRun_runningActionsCount = window.obj2356_SCEventRun_runningActionsCount - 1;

if (window.obj2356_SCEventRun_runningActionsCount == 0) {
	obj2356_SCEventRun_actionGroup1();
}
			}, false);
		} else {
			window.obj2356_SCEventRun_runningActionsCount = window.obj2356_SCEventRun_runningActionsCount - 1;

if (window.obj2356_SCEventRun_runningActionsCount == 0) {
	obj2356_SCEventRun_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_5687();
function runjs_5687() {
	window.obj2356_SCEventRun_runningActionsCount = obj2356_SCEventRun_runningActionsCount + 1;


	localStorage.setItem("ready", "false");

	setTimeout(function() {
		window.obj2356_SCEventRun_runningActionsCount = window.obj2356_SCEventRun_runningActionsCount - 1;

if (window.obj2356_SCEventRun_runningActionsCount == 0) {
	obj2356_SCEventRun_actionGroup1();
}
	}, 1);
}












};
obj2356_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2356_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2356").trigger("obj2356_SCEventRun_ended");
		
		return;
	}
	window.obj2356_SCEventRun_activeActionGroupIndex = 1;
	





























//	action: Run JavaScript
runjs_5688();
function runjs_5688() {
	window.obj2356_SCEventRun_runningActionsCount = obj2356_SCEventRun_runningActionsCount + 1;


	localStorage.setItem("ready", "true");

	setTimeout(function() {
		window.obj2356_SCEventRun_runningActionsCount = window.obj2356_SCEventRun_runningActionsCount - 1;

if (window.obj2356_SCEventRun_runningActionsCount == 0) {
	obj2356_SCEventRun_actionGroup2();
}
	}, 1);
}












};
obj2356_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2356_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2356").trigger("obj2356_SCEventRun_ended");
		
		return;
	}
	window.obj2356_SCEventRun_activeActionGroupIndex = 2;
	
















//	action: wait
wait_4747();
function wait_4747() {
	window.obj2356_SCEventRun_runningActionsCount = obj2356_SCEventRun_runningActionsCount + 1;

	setTimeout(function() {
		window.obj2356_SCEventRun_runningActionsCount = window.obj2356_SCEventRun_runningActionsCount - 1;

if (window.obj2356_SCEventRun_runningActionsCount == 0) {
	obj2356_SCEventRun_actionGroup3();
}
	}, 2000);
}

























};
obj2356_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2356_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2356").trigger("obj2356_SCEventRun_ended");
		
		return;
	}
	window.obj2356_SCEventRun_activeActionGroupIndex = 3;
	





























//	action: Run JavaScript
runjs_4754();
function runjs_4754() {
	window.obj2356_SCEventRun_runningActionsCount = obj2356_SCEventRun_runningActionsCount + 1;


	localStorage.setItem("tapped", "3");

	setTimeout(function() {
		window.obj2356_SCEventRun_runningActionsCount = window.obj2356_SCEventRun_runningActionsCount - 1;

if (window.obj2356_SCEventRun_runningActionsCount == 0) {
	obj2356_SCEventRun_actionGroup4();
}
	}, 1);
}












};
obj2356_SCEventRun_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2356_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2356").trigger("obj2356_SCEventRun_ended");
		
		return;
	}
	window.obj2356_SCEventRun_activeActionGroupIndex = 4;
	
















//	action: wait
wait_4762();
function wait_4762() {
	window.obj2356_SCEventRun_runningActionsCount = obj2356_SCEventRun_runningActionsCount + 1;

	setTimeout(function() {
		window.obj2356_SCEventRun_runningActionsCount = window.obj2356_SCEventRun_runningActionsCount - 1;

if (window.obj2356_SCEventRun_runningActionsCount == 0) {
	obj2356_SCEventRun_actionGroup5();
}
	}, 2000);
}

























};
obj2356_SCEventRun_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2356_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2356").trigger("obj2356_SCEventRun_ended");
		
		return;
	}
	window.obj2356_SCEventRun_activeActionGroupIndex = 5;
	





























//	action: Run JavaScript
runjs_4763();
function runjs_4763() {
	window.obj2356_SCEventRun_runningActionsCount = obj2356_SCEventRun_runningActionsCount + 1;


	var zep = {
    left: parseInt($("#obj2196").css("left").slice(0, -2)),
    top: parseInt($("#obj2196").css("top").slice(0, -2)),
    width: parseInt($("#obj2196").css("width").slice(0, -2)),
    height: parseInt($("#obj2196").css("height").slice(0, -2))
};
if(localStorage.getItem("tapped") !== "4")
{
    $("#obj4764").css("left", (zep.left + (zep.width / 2)).toString() + "px");
    $("#obj4764").css("top", (zep.top + (zep.height / 2)).toString() + "px");
    $("#obj4766").trigger(PubCoder.Events.Run);
    $("#obj4764").fadeIn();
}

	setTimeout(function() {
		window.obj2356_SCEventRun_runningActionsCount = window.obj2356_SCEventRun_runningActionsCount - 1;

if (window.obj2356_SCEventRun_runningActionsCount == 0) {
	obj2356_SCEventRun_actionGroup6();
}
	}, 1);
}












};
obj2356_SCEventRun_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2356_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2356").trigger("obj2356_SCEventRun_ended");
		
		return;
	}
	window.obj2356_SCEventRun_activeActionGroupIndex = 6;
	










































};
obj3365_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3365_SCEventRun_activeActionGroupIndex = -1;
		$("#obj3365").trigger("obj3365_SCEventRun_ended");
		
		return;
	}
	window.obj3365_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj4745 
hide_4733();
function hide_4733() {
	var element = "#obj4745";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3365_SCEventRun_runningActionsCount = obj3365_SCEventRun_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj3365_SCEventRun_runningActionsCount = window.obj3365_SCEventRun_runningActionsCount - 1;

if (window.obj3365_SCEventRun_runningActionsCount == 0) {
	obj3365_SCEventRun_actionGroup1();
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
		setTimeout(hide_4733(), 100);
		return;
	}

	setTimeout(function() {
		$(element).css("display", "none");
		window.obj3365_SCEventRun_runningActionsCount = window.obj3365_SCEventRun_runningActionsCount - 1;

if (window.obj3365_SCEventRun_runningActionsCount == 0) {
	obj3365_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)

}








































};
obj3365_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3365_SCEventRun_activeActionGroupIndex = -1;
		$("#obj3365").trigger("obj3365_SCEventRun_ended");
		
		return;
	}
	window.obj3365_SCEventRun_activeActionGroupIndex = 1;
	


//	action: show 
//	target: obj3367 
(function(){
	window.obj3365_SCEventRun_runningActionsCount = obj3365_SCEventRun_runningActionsCount + 1;


	var element = "#obj3367";
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
				window.obj3365_SCEventRun_runningActionsCount = window.obj3365_SCEventRun_runningActionsCount - 1;

if (window.obj3365_SCEventRun_runningActionsCount == 0) {
	obj3365_SCEventRun_actionGroup2();
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
			window.obj3365_SCEventRun_runningActionsCount = window.obj3365_SCEventRun_runningActionsCount - 1;

if (window.obj3365_SCEventRun_runningActionsCount == 0) {
	obj3365_SCEventRun_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj3369 
(function(){
	window.obj3365_SCEventRun_runningActionsCount = obj3365_SCEventRun_runningActionsCount + 1;


	var element = "#obj3369";
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
				window.obj3365_SCEventRun_runningActionsCount = window.obj3365_SCEventRun_runningActionsCount - 1;

if (window.obj3365_SCEventRun_runningActionsCount == 0) {
	obj3365_SCEventRun_actionGroup2();
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
			window.obj3365_SCEventRun_runningActionsCount = window.obj3365_SCEventRun_runningActionsCount - 1;

if (window.obj3365_SCEventRun_runningActionsCount == 0) {
	obj3365_SCEventRun_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj3371 
(function(){
	window.obj3365_SCEventRun_runningActionsCount = obj3365_SCEventRun_runningActionsCount + 1;


	var element = "#obj3371";
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
				window.obj3365_SCEventRun_runningActionsCount = window.obj3365_SCEventRun_runningActionsCount - 1;

if (window.obj3365_SCEventRun_runningActionsCount == 0) {
	obj3365_SCEventRun_actionGroup2();
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
			window.obj3365_SCEventRun_runningActionsCount = window.obj3365_SCEventRun_runningActionsCount - 1;

if (window.obj3365_SCEventRun_runningActionsCount == 0) {
	obj3365_SCEventRun_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: move
//	target: obj2306 
move_3376();
function move_3376() {
	window.obj3365_SCEventRun_runningActionsCount = obj3365_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj2306");
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
			window.obj3365_SCEventRun_runningActionsCount = window.obj3365_SCEventRun_runningActionsCount - 1;

if (window.obj3365_SCEventRun_runningActionsCount == 0) {
	obj3365_SCEventRun_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj2306 
move_3377();
function move_3377() {
	window.obj3365_SCEventRun_runningActionsCount = obj3365_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj2306");
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
			window.obj3365_SCEventRun_runningActionsCount = window.obj3365_SCEventRun_runningActionsCount - 1;

if (window.obj3365_SCEventRun_runningActionsCount == 0) {
	obj3365_SCEventRun_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj2306 
move_3378();
function move_3378() {
	window.obj3365_SCEventRun_runningActionsCount = obj3365_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj2306");
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
			window.obj3365_SCEventRun_runningActionsCount = window.obj3365_SCEventRun_runningActionsCount - 1;

if (window.obj3365_SCEventRun_runningActionsCount == 0) {
	obj3365_SCEventRun_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj2306 
move_3379();
function move_3379() {
	window.obj3365_SCEventRun_runningActionsCount = obj3365_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj2306");
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
			window.obj3365_SCEventRun_runningActionsCount = window.obj3365_SCEventRun_runningActionsCount - 1;

if (window.obj3365_SCEventRun_runningActionsCount == 0) {
	obj3365_SCEventRun_actionGroup2();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_5484();
function playAudioFile_5484() {
	window.obj3365_SCEventRun_runningActionsCount = obj3365_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5484")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5484");
			$("#obj_audio_playSoundFile5484").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj3365_SCEventRun_runningActionsCount = window.obj3365_SCEventRun_runningActionsCount - 1;

if (window.obj3365_SCEventRun_runningActionsCount == 0) {
	obj3365_SCEventRun_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj3365_SCEventRun_runningActionsCount = window.obj3365_SCEventRun_runningActionsCount - 1;

if (window.obj3365_SCEventRun_runningActionsCount == 0) {
	obj3365_SCEventRun_actionGroup2();
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
				window.obj3365_SCEventRun_runningActionsCount = window.obj3365_SCEventRun_runningActionsCount - 1;

if (window.obj3365_SCEventRun_runningActionsCount == 0) {
	obj3365_SCEventRun_actionGroup2();
}
			}, false);
		} else {
			window.obj3365_SCEventRun_runningActionsCount = window.obj3365_SCEventRun_runningActionsCount - 1;

if (window.obj3365_SCEventRun_runningActionsCount == 0) {
	obj3365_SCEventRun_actionGroup2();
}
		}
	}

	
	
	
}






//	action: playAudioFile
playAudioFile_5694();
function playAudioFile_5694() {
	window.obj3365_SCEventRun_runningActionsCount = obj3365_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5694")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5694");
			$("#obj_audio_playSoundFile5694").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj3365_SCEventRun_runningActionsCount = window.obj3365_SCEventRun_runningActionsCount - 1;

if (window.obj3365_SCEventRun_runningActionsCount == 0) {
	obj3365_SCEventRun_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj3365_SCEventRun_runningActionsCount = window.obj3365_SCEventRun_runningActionsCount - 1;

if (window.obj3365_SCEventRun_runningActionsCount == 0) {
	obj3365_SCEventRun_actionGroup2();
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
				window.obj3365_SCEventRun_runningActionsCount = window.obj3365_SCEventRun_runningActionsCount - 1;

if (window.obj3365_SCEventRun_runningActionsCount == 0) {
	obj3365_SCEventRun_actionGroup2();
}
			}, false);
		} else {
			window.obj3365_SCEventRun_runningActionsCount = window.obj3365_SCEventRun_runningActionsCount - 1;

if (window.obj3365_SCEventRun_runningActionsCount == 0) {
	obj3365_SCEventRun_actionGroup2();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_5695();
function runjs_5695() {
	window.obj3365_SCEventRun_runningActionsCount = obj3365_SCEventRun_runningActionsCount + 1;


	localStorage.setItem("ready", "false");

	setTimeout(function() {
		window.obj3365_SCEventRun_runningActionsCount = window.obj3365_SCEventRun_runningActionsCount - 1;

if (window.obj3365_SCEventRun_runningActionsCount == 0) {
	obj3365_SCEventRun_actionGroup2();
}
	}, 1);
}












};
obj3365_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3365_SCEventRun_activeActionGroupIndex = -1;
		$("#obj3365").trigger("obj3365_SCEventRun_ended");
		
		return;
	}
	window.obj3365_SCEventRun_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_5696();
function runjs_5696() {
	window.obj3365_SCEventRun_runningActionsCount = obj3365_SCEventRun_runningActionsCount + 1;


	localStorage.setItem("ready", "true");

	setTimeout(function() {
		window.obj3365_SCEventRun_runningActionsCount = window.obj3365_SCEventRun_runningActionsCount - 1;

if (window.obj3365_SCEventRun_runningActionsCount == 0) {
	obj3365_SCEventRun_actionGroup3();
}
	}, 1);
}












};
obj3365_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3365_SCEventRun_activeActionGroupIndex = -1;
		$("#obj3365").trigger("obj3365_SCEventRun_ended");
		
		return;
	}
	window.obj3365_SCEventRun_activeActionGroupIndex = 3;
	










































};
obj4393_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4393_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4393").trigger("obj4393_SCEventRun_ended");
		
		return;
	}
	window.obj4393_SCEventRun_activeActionGroupIndex = 0;
	


















//	action: scale
//	target: obj4001 
scale_4395();
function scale_4395() {
	window.obj4393_SCEventRun_runningActionsCount = obj4393_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj4001";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj4001';
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
		scale_4395_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4395_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4395_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_4395_completed() {
	setTimeout(function() {
		window.obj4393_SCEventRun_runningActionsCount = window.obj4393_SCEventRun_runningActionsCount - 1;

if (window.obj4393_SCEventRun_runningActionsCount == 0) {
	obj4393_SCEventRun_actionGroup1();
}
	}, 1);
}
























};
obj4393_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4393_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4393").trigger("obj4393_SCEventRun_ended");
		
		return;
	}
	window.obj4393_SCEventRun_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj4001 
move_4396();
function move_4396() {
	window.obj4393_SCEventRun_runningActionsCount = obj4393_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj4001");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=607";
	var moveY = "+=523";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj4393_SCEventRun_runningActionsCount = window.obj4393_SCEventRun_runningActionsCount - 1;

if (window.obj4393_SCEventRun_runningActionsCount == 0) {
	obj4393_SCEventRun_actionGroup2();
}
		}, 1);
	});
}






































};
obj4393_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4393_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4393").trigger("obj4393_SCEventRun_ended");
		
		return;
	}
	window.obj4393_SCEventRun_activeActionGroupIndex = 2;
	


















//	action: scale
//	target: obj4001 
scale_4397();
function scale_4397() {
	window.obj4393_SCEventRun_runningActionsCount = obj4393_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj4001";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj4001';
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
		scale_4397_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4397_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4397_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_4397_completed() {
	setTimeout(function() {
		window.obj4393_SCEventRun_runningActionsCount = window.obj4393_SCEventRun_runningActionsCount - 1;

if (window.obj4393_SCEventRun_runningActionsCount == 0) {
	obj4393_SCEventRun_actionGroup3();
}
	}, 1);
}
























};
obj4393_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4393_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4393").trigger("obj4393_SCEventRun_ended");
		
		return;
	}
	window.obj4393_SCEventRun_activeActionGroupIndex = 3;
	
















//	action: wait
wait_4398();
function wait_4398() {
	window.obj4393_SCEventRun_runningActionsCount = obj4393_SCEventRun_runningActionsCount + 1;

	setTimeout(function() {
		window.obj4393_SCEventRun_runningActionsCount = window.obj4393_SCEventRun_runningActionsCount - 1;

if (window.obj4393_SCEventRun_runningActionsCount == 0) {
	obj4393_SCEventRun_actionGroup4();
}
	}, 2000);
}

























};
obj4393_SCEventRun_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4393_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4393").trigger("obj4393_SCEventRun_ended");
		
		return;
	}
	window.obj4393_SCEventRun_activeActionGroupIndex = 4;
	



//	action: move
//	target: obj4001 
move_4399();
function move_4399() {
	window.obj4393_SCEventRun_runningActionsCount = obj4393_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj4001");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 207;
	var moveY = 249;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj4393_SCEventRun_runningActionsCount = window.obj4393_SCEventRun_runningActionsCount - 1;

if (window.obj4393_SCEventRun_runningActionsCount == 0) {
	obj4393_SCEventRun_actionGroup5();
}
		}, 1);
	});
}






































};
obj4393_SCEventRun_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4393_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4393").trigger("obj4393_SCEventRun_ended");
		
		return;
	}
	window.obj4393_SCEventRun_activeActionGroupIndex = 5;
	
















//	action: wait
wait_4400();
function wait_4400() {
	window.obj4393_SCEventRun_runningActionsCount = obj4393_SCEventRun_runningActionsCount + 1;

	setTimeout(function() {
		window.obj4393_SCEventRun_runningActionsCount = window.obj4393_SCEventRun_runningActionsCount - 1;

if (window.obj4393_SCEventRun_runningActionsCount == 0) {
	obj4393_SCEventRun_actionGroup6();
}
	}, 2000);
}

























};
obj4393_SCEventRun_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4393_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4393").trigger("obj4393_SCEventRun_ended");
		
		return;
	}
	window.obj4393_SCEventRun_activeActionGroupIndex = 6;
	















//	action: loop
loop_obj4393_SCEventRun();
function loop_obj4393_SCEventRun() {

	var loopCount = 0;

	window.obj4393_SCEventRun_loopCount = window.obj4393_SCEventRun_loopCount + 1;
	if (loopCount != 0 && window.obj4393_SCEventRun_loopCount > loopCount) {
		window.obj4393_SCEventRun_loopCount = 0
		obj4393_SCEventRun_actionGroup7();
	} else {
		obj4393_SCEventRun_actionGroup0();
	}

}


























};
obj4393_SCEventRun_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4393_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4393").trigger("obj4393_SCEventRun_ended");
		
		return;
	}
	window.obj4393_SCEventRun_activeActionGroupIndex = 7;
	










































};
obj4723_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4723_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4723").trigger("obj4723_SCEventRun_ended");
		
		return;
	}
	window.obj4723_SCEventRun_activeActionGroupIndex = 0;
	


















//	action: scale
//	target: obj4745 
scale_4725();
function scale_4725() {
	window.obj4723_SCEventRun_runningActionsCount = obj4723_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj4745";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj4745';
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
		scale_4725_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4725_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4725_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_4725_completed() {
	setTimeout(function() {
		window.obj4723_SCEventRun_runningActionsCount = window.obj4723_SCEventRun_runningActionsCount - 1;

if (window.obj4723_SCEventRun_runningActionsCount == 0) {
	obj4723_SCEventRun_actionGroup1();
}
	}, 1);
}
























};
obj4723_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4723_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4723").trigger("obj4723_SCEventRun_ended");
		
		return;
	}
	window.obj4723_SCEventRun_activeActionGroupIndex = 1;
	
















//	action: wait
wait_4727();
function wait_4727() {
	window.obj4723_SCEventRun_runningActionsCount = obj4723_SCEventRun_runningActionsCount + 1;

	setTimeout(function() {
		window.obj4723_SCEventRun_runningActionsCount = window.obj4723_SCEventRun_runningActionsCount - 1;

if (window.obj4723_SCEventRun_runningActionsCount == 0) {
	obj4723_SCEventRun_actionGroup2();
}
	}, 1000);
}

























};
obj4723_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4723_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4723").trigger("obj4723_SCEventRun_ended");
		
		return;
	}
	window.obj4723_SCEventRun_activeActionGroupIndex = 2;
	


















//	action: scale
//	target: obj4745 
scale_4728();
function scale_4728() {
	window.obj4723_SCEventRun_runningActionsCount = obj4723_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj4745";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj4745';
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
		scale_4728_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4728_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4728_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_4728_completed() {
	setTimeout(function() {
		window.obj4723_SCEventRun_runningActionsCount = window.obj4723_SCEventRun_runningActionsCount - 1;

if (window.obj4723_SCEventRun_runningActionsCount == 0) {
	obj4723_SCEventRun_actionGroup3();
}
	}, 1);
}
























};
obj4723_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4723_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4723").trigger("obj4723_SCEventRun_ended");
		
		return;
	}
	window.obj4723_SCEventRun_activeActionGroupIndex = 3;
	
















//	action: wait
wait_4732();
function wait_4732() {
	window.obj4723_SCEventRun_runningActionsCount = obj4723_SCEventRun_runningActionsCount + 1;

	setTimeout(function() {
		window.obj4723_SCEventRun_runningActionsCount = window.obj4723_SCEventRun_runningActionsCount - 1;

if (window.obj4723_SCEventRun_runningActionsCount == 0) {
	obj4723_SCEventRun_actionGroup4();
}
	}, 500);
}

























};
obj4723_SCEventRun_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4723_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4723").trigger("obj4723_SCEventRun_ended");
		
		return;
	}
	window.obj4723_SCEventRun_activeActionGroupIndex = 4;
	















//	action: loop
loop_obj4723_SCEventRun();
function loop_obj4723_SCEventRun() {

	var loopCount = 0;

	window.obj4723_SCEventRun_loopCount = window.obj4723_SCEventRun_loopCount + 1;
	if (loopCount != 0 && window.obj4723_SCEventRun_loopCount > loopCount) {
		window.obj4723_SCEventRun_loopCount = 0
		obj4723_SCEventRun_actionGroup5();
	} else {
		obj4723_SCEventRun_actionGroup0();
	}

}


























};
obj4723_SCEventRun_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4723_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4723").trigger("obj4723_SCEventRun_ended");
		
		return;
	}
	window.obj4723_SCEventRun_activeActionGroupIndex = 5;
	










































};
obj5077_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5077_onLoad_activeActionGroupIndex = -1;
		$("#obj5077").trigger("obj5077_onLoad_ended");
		
		return;
	}
	window.obj5077_onLoad_activeActionGroupIndex = 0;
	




//	action: playAnimation 
//	target: obj5077 
playAnimation_5110();
function playAnimation_5110() {
	var targetObjectId = "#obj5077";
	var targetObject = $(targetObjectId)[0];
	window.obj5077_onLoad_runningActionsCount = obj5077_onLoad_runningActionsCount + 1;

	var isAnimationInfinite = true;
	if (isAnimationInfinite) {
		window.obj5077_onLoad_runningActionsCount = window.obj5077_onLoad_runningActionsCount - 1;

if (window.obj5077_onLoad_runningActionsCount == 0) {
	obj5077_onLoad_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj5077 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj5077;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");

	setTimeout(function() {
	    api_animate_obj5077.startAnimation();
	}, 1);

	if (!isAnimationInfinite) {
		$("#obj5077").one("obj5077_animation_ended",function(event) {
		    window.obj5077_onLoad_runningActionsCount = window.obj5077_onLoad_runningActionsCount - 1;

if (window.obj5077_onLoad_runningActionsCount == 0) {
	obj5077_onLoad_actionGroup1();
}
		});
	}
 }





































};
obj5077_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5077_onLoad_activeActionGroupIndex = -1;
		$("#obj5077").trigger("obj5077_onLoad_ended");
		
		return;
	}
	window.obj5077_onLoad_activeActionGroupIndex = 1;
	










































};
obj5077_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5077_onTouchDown_activeActionGroupIndex = -1;
		$("#obj5077").trigger("obj5077_onTouchDown_ended");
		
		return;
	}
	window.obj5077_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj5077");

//	action: dragDrop
//	target: obj5077 
dragDrop_5104();
function dragDrop_5104() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj5077_onTouchDown_runningActionsCount = obj5077_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj5077');
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
    	window.obj5077_onTouchDown_runningActionsCount = window.obj5077_onTouchDown_runningActionsCount - 1;

if (window.obj5077_onTouchDown_runningActionsCount == 0) {
	obj5077_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array();
    	var actionsOnDrop = new Array() //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_5104 = false;
    	var dropped_id_5104;
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
					dropped_5104 = true;
					dropped_id_5104 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_5104) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			
$("#obj5077").trigger('SCActionDragDrop2199_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}






















};
obj5077_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5077_onTouchDown_activeActionGroupIndex = -1;
		$("#obj5077").trigger("obj5077_onTouchDown_ended");
		
		return;
	}
	window.obj5077_onTouchDown_activeActionGroupIndex = 1;
	










































};
obj5077_SCActionDragDrop2199_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5077_SCActionDragDrop2199_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5077").trigger("obj5077_SCActionDragDrop2199_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj5077_SCActionDragDrop2199_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	










































};
obj4001_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4001_onLoad_activeActionGroupIndex = -1;
		$("#obj4001").trigger("obj4001_onLoad_ended");
		
		return;
	}
	window.obj4001_onLoad_activeActionGroupIndex = 0;
	


//	action: show 
//	target: obj4001 
(function(){
	window.obj4001_onLoad_runningActionsCount = obj4001_onLoad_runningActionsCount + 1;


	var element = "#obj4001";
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
				window.obj4001_onLoad_runningActionsCount = window.obj4001_onLoad_runningActionsCount - 1;

if (window.obj4001_onLoad_runningActionsCount == 0) {
	obj4001_onLoad_actionGroup1();
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
			window.obj4001_onLoad_runningActionsCount = window.obj4001_onLoad_runningActionsCount - 1;

if (window.obj4001_onLoad_runningActionsCount == 0) {
	obj4001_onLoad_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();







































};
obj4001_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4001_onLoad_activeActionGroupIndex = -1;
		$("#obj4001").trigger("obj4001_onLoad_ended");
		
		return;
	}
	window.obj4001_onLoad_activeActionGroupIndex = 1;
	



































//	action: run action list container
//	target: obj4393 
runActionList_4401();
function runActionList_4401() {
	window.obj4001_onLoad_runningActionsCount = obj4001_onLoad_runningActionsCount + 1;

	$("#obj4393").trigger('SCEventRun');
	setTimeout(function() {
		window.obj4001_onLoad_runningActionsCount = window.obj4001_onLoad_runningActionsCount - 1;

if (window.obj4001_onLoad_runningActionsCount == 0) {
	obj4001_onLoad_actionGroup2();
}		
	}, 1);
}






};
obj4001_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4001_onLoad_activeActionGroupIndex = -1;
		$("#obj4001").trigger("obj4001_onLoad_ended");
		
		return;
	}
	window.obj4001_onLoad_activeActionGroupIndex = 2;
	










































};
obj4766_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4766_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4766").trigger("obj4766_SCEventRun_ended");
		
		return;
	}
	window.obj4766_SCEventRun_activeActionGroupIndex = 0;
	


















//	action: scale
//	target: obj4764 
scale_4771();
function scale_4771() {
	window.obj4766_SCEventRun_runningActionsCount = obj4766_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj4764";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj4764';
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
		scale_4771_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4771_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4771_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_4771_completed() {
	setTimeout(function() {
		window.obj4766_SCEventRun_runningActionsCount = window.obj4766_SCEventRun_runningActionsCount - 1;

if (window.obj4766_SCEventRun_runningActionsCount == 0) {
	obj4766_SCEventRun_actionGroup1();
}
	}, 1);
}
























};
obj4766_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4766_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4766").trigger("obj4766_SCEventRun_ended");
		
		return;
	}
	window.obj4766_SCEventRun_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj4764 
move_4770();
function move_4770() {
	window.obj4766_SCEventRun_runningActionsCount = obj4766_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj4764");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=463";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj4766_SCEventRun_runningActionsCount = window.obj4766_SCEventRun_runningActionsCount - 1;

if (window.obj4766_SCEventRun_runningActionsCount == 0) {
	obj4766_SCEventRun_actionGroup2();
}
		}, 1);
	});
}






































};
obj4766_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4766_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4766").trigger("obj4766_SCEventRun_ended");
		
		return;
	}
	window.obj4766_SCEventRun_activeActionGroupIndex = 2;
	
















//	action: wait
wait_4772();
function wait_4772() {
	window.obj4766_SCEventRun_runningActionsCount = obj4766_SCEventRun_runningActionsCount + 1;

	setTimeout(function() {
		window.obj4766_SCEventRun_runningActionsCount = window.obj4766_SCEventRun_runningActionsCount - 1;

if (window.obj4766_SCEventRun_runningActionsCount == 0) {
	obj4766_SCEventRun_actionGroup3();
}
	}, 1000);
}

























};
obj4766_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4766_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4766").trigger("obj4766_SCEventRun_ended");
		
		return;
	}
	window.obj4766_SCEventRun_activeActionGroupIndex = 3;
	


















//	action: scale
//	target: obj4764 
scale_4773();
function scale_4773() {
	window.obj4766_SCEventRun_runningActionsCount = obj4766_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj4764";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj4764';
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
		scale_4773_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4773_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4773_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_4773_completed() {
	setTimeout(function() {
		window.obj4766_SCEventRun_runningActionsCount = window.obj4766_SCEventRun_runningActionsCount - 1;

if (window.obj4766_SCEventRun_runningActionsCount == 0) {
	obj4766_SCEventRun_actionGroup4();
}
	}, 1);
}
























};
obj4766_SCEventRun_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4766_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4766").trigger("obj4766_SCEventRun_ended");
		
		return;
	}
	window.obj4766_SCEventRun_activeActionGroupIndex = 4;
	





























//	action: Run JavaScript
runjs_4768();
function runjs_4768() {
	window.obj4766_SCEventRun_runningActionsCount = obj4766_SCEventRun_runningActionsCount + 1;


	var zep = {
    left: parseInt($("#obj5077").css("left").slice(0, -2)),
    top: parseInt($("#obj5077").css("top").slice(0, -2)),
    width: parseInt($("#obj5077").css("width").slice(0, -2)),
    height: parseInt($("#obj5077").css("height").slice(0, -2))
};
$("#obj4764").animate({left: (zep.left + (zep.width / 2)).toString() + "px", top: (zep.top + (zep.height / 2)).toString() + "px"}, 1500);

	setTimeout(function() {
		window.obj4766_SCEventRun_runningActionsCount = window.obj4766_SCEventRun_runningActionsCount - 1;

if (window.obj4766_SCEventRun_runningActionsCount == 0) {
	obj4766_SCEventRun_actionGroup5();
}
	}, 1);
}












};
obj4766_SCEventRun_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4766_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4766").trigger("obj4766_SCEventRun_ended");
		
		return;
	}
	window.obj4766_SCEventRun_activeActionGroupIndex = 5;
	
















//	action: wait
wait_4774();
function wait_4774() {
	window.obj4766_SCEventRun_runningActionsCount = obj4766_SCEventRun_runningActionsCount + 1;

	setTimeout(function() {
		window.obj4766_SCEventRun_runningActionsCount = window.obj4766_SCEventRun_runningActionsCount - 1;

if (window.obj4766_SCEventRun_runningActionsCount == 0) {
	obj4766_SCEventRun_actionGroup6();
}
	}, 1000);
}

























};
obj4766_SCEventRun_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4766_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4766").trigger("obj4766_SCEventRun_ended");
		
		return;
	}
	window.obj4766_SCEventRun_activeActionGroupIndex = 6;
	















//	action: loop
loop_obj4766_SCEventRun();
function loop_obj4766_SCEventRun() {

	var loopCount = 0;

	window.obj4766_SCEventRun_loopCount = window.obj4766_SCEventRun_loopCount + 1;
	if (loopCount != 0 && window.obj4766_SCEventRun_loopCount > loopCount) {
		window.obj4766_SCEventRun_loopCount = 0
		obj4766_SCEventRun_actionGroup7();
	} else {
		obj4766_SCEventRun_actionGroup0();
	}

}


























};
obj4766_SCEventRun_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4766_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4766").trigger("obj4766_SCEventRun_ended");
		
		return;
	}
	window.obj4766_SCEventRun_activeActionGroupIndex = 7;
	










































};
obj5431_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5431_onLoad_activeActionGroupIndex = -1;
		$("#obj5431").trigger("obj5431_onLoad_ended");
		
		return;
	}
	window.obj5431_onLoad_activeActionGroupIndex = 0;
	
























//	action: playAudio
//	target: obj5431 
playAudio_5433();
function playAudio_5433() {
	window.obj5431_onLoad_runningActionsCount = obj5431_onLoad_runningActionsCount + 1;

	var myAudio = $("#obj5431")[0];
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
		    window.obj5431_onLoad_runningActionsCount = window.obj5431_onLoad_runningActionsCount - 1;

if (window.obj5431_onLoad_runningActionsCount == 0) {
	obj5431_onLoad_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj5431_onLoad_runningActionsCount = window.obj5431_onLoad_runningActionsCount - 1;

if (window.obj5431_onLoad_runningActionsCount == 0) {
	obj5431_onLoad_actionGroup1();
}
	}
}

















};
obj5431_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5431_onLoad_activeActionGroupIndex = -1;
		$("#obj5431").trigger("obj5431_onLoad_ended");
		
		return;
	}
	window.obj5431_onLoad_activeActionGroupIndex = 1;
	










































};
obj5679_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5679_SCEventRun_activeActionGroupIndex = -1;
		$("#obj5679").trigger("obj5679_SCEventRun_ended");
		
		return;
	}
	window.obj5679_SCEventRun_activeActionGroupIndex = 0;
	





























//	action: Run JavaScript
runjs_5682();
function runjs_5682() {
	window.obj5679_SCEventRun_runningActionsCount = obj5679_SCEventRun_runningActionsCount + 1;


	if(localStorage.getItem("tapped") === "1" && localStorage.getItem("ready") === "true")
{
    localStorage.setItem("tapped", "2");
    // run action list for speech2 
    $("#obj2327").trigger(PubCoder.Events.Run);
}
else if(localStorage.getItem("tapped") === "2" && localStorage.getItem("ready") === "true")
{
    //localStorage.setItem("tapped", "3");
    console.log(localStorage.getItem("timed out"));
    // run action list for speech3 
    $("#obj2356").trigger(PubCoder.Events.Run);
}

	setTimeout(function() {
		window.obj5679_SCEventRun_runningActionsCount = window.obj5679_SCEventRun_runningActionsCount - 1;

if (window.obj5679_SCEventRun_runningActionsCount == 0) {
	obj5679_SCEventRun_actionGroup1();
}
	}, 1);
}












};
obj5679_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5679_SCEventRun_activeActionGroupIndex = -1;
		$("#obj5679").trigger("obj5679_SCEventRun_ended");
		
		return;
	}
	window.obj5679_SCEventRun_activeActionGroupIndex = 1;
	















//	action: loop
loop_obj5679_SCEventRun();
function loop_obj5679_SCEventRun() {

	var loopCount = 0;

	window.obj5679_SCEventRun_loopCount = window.obj5679_SCEventRun_loopCount + 1;
	if (loopCount != 0 && window.obj5679_SCEventRun_loopCount > loopCount) {
		window.obj5679_SCEventRun_loopCount = 0
		obj5679_SCEventRun_actionGroup2();
	} else {
		obj5679_SCEventRun_actionGroup0();
	}

}


























};
obj5679_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5679_SCEventRun_activeActionGroupIndex = -1;
		$("#obj5679").trigger("obj5679_SCEventRun_ended");
		
		return;
	}
	window.obj5679_SCEventRun_activeActionGroupIndex = 2;
	










































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		









/*
 *
 *   obj2142: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj2142_onLoad_activeActionGroupIndex != -1) return;
var obj2142_onLoad_runningActionsCount = 0;
var obj2142_onLoad_loopCount = 0;
obj2142_onLoad_actionGroup0();
});














/*
 *
 *   obj2444: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj2444_onLoad_activeActionGroupIndex != -1) return;
var obj2444_onLoad_runningActionsCount = 0;
var obj2444_onLoad_loopCount = 0;
obj2444_onLoad_actionGroup0();
});














/*
 *
 *   obj2457: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj2457_onLoad_activeActionGroupIndex != -1) return;
var obj2457_onLoad_runningActionsCount = 0;
var obj2457_onLoad_loopCount = 0;
obj2457_onLoad_actionGroup0();
});














/*
 *
 *   obj2471: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj2471_onLoad_activeActionGroupIndex != -1) return;
var obj2471_onLoad_runningActionsCount = 0;
var obj2471_onLoad_loopCount = 0;
obj2471_onLoad_actionGroup0();
});














/*
 *
 *   obj2485: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj2485_onLoad_activeActionGroupIndex != -1) return;
var obj2485_onLoad_runningActionsCount = 0;
var obj2485_onLoad_loopCount = 0;
obj2485_onLoad_actionGroup0();
});














/*
 *
 *   obj2145: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj2145_onLoad_activeActionGroupIndex != -1) return;
var obj2145_onLoad_runningActionsCount = 0;
var obj2145_onLoad_loopCount = 0;
obj2145_onLoad_actionGroup0();
});










/*
 *
 *   obj2200: Event Touch Down
 *
 */

$("#obj2200").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2200_onTap_activeActionGroupIndex != -1) return;
var obj2200_onTap_runningActionsCount = 0;
var obj2200_onTap_loopCount = 0;
obj2200_onTap_actionGroup0();
});

























































































































































/*
 *
 *   obj1966: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1966_onLoad_activeActionGroupIndex != -1) return;
var obj1966_onLoad_runningActionsCount = 0;
var obj1966_onLoad_loopCount = 0;
obj1966_onLoad_actionGroup0();
});














/*
 *
 *   obj1968: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1968_onLoad_activeActionGroupIndex != -1) return;
var obj1968_onLoad_runningActionsCount = 0;
var obj1968_onLoad_loopCount = 0;
obj1968_onLoad_actionGroup0();
});














/*
 *
 *   obj1970: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1970_onLoad_activeActionGroupIndex != -1) return;
var obj1970_onLoad_runningActionsCount = 0;
var obj1970_onLoad_loopCount = 0;
obj1970_onLoad_actionGroup0();
});














/*
 *
 *   obj1972: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1972_onLoad_activeActionGroupIndex != -1) return;
var obj1972_onLoad_runningActionsCount = 0;
var obj1972_onLoad_loopCount = 0;
obj1972_onLoad_actionGroup0();
});














/*
 *
 *   obj2090: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj2090_onLoad_activeActionGroupIndex != -1) return;
var obj2090_onLoad_runningActionsCount = 0;
var obj2090_onLoad_loopCount = 0;
obj2090_onLoad_actionGroup0();
});














/*
 *
 *   obj2078: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj2078_onLoad_activeActionGroupIndex != -1) return;
var obj2078_onLoad_runningActionsCount = 0;
var obj2078_onLoad_loopCount = 0;
obj2078_onLoad_actionGroup0();
});














/*
 *
 *   obj2064: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj2064_onLoad_activeActionGroupIndex != -1) return;
var obj2064_onLoad_runningActionsCount = 0;
var obj2064_onLoad_loopCount = 0;
obj2064_onLoad_actionGroup0();
});














/*
 *
 *   obj2052: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj2052_onLoad_activeActionGroupIndex != -1) return;
var obj2052_onLoad_runningActionsCount = 0;
var obj2052_onLoad_loopCount = 0;
obj2052_onLoad_actionGroup0();
});













/*
 *
 *   obj3267: Event Show
 *
 */
 
$("#obj3267").bind('SCEventShow', function(event) {
	if (window.obj3267_onShow_activeActionGroupIndex != -1) return;
var obj3267_onShow_runningActionsCount = 0;
var obj3267_onShow_loopCount = 0;
obj3267_onShow_actionGroup0();
});














/*
 *
 *   obj3270: Event Show
 *
 */
 
$("#obj3270").bind('SCEventShow', function(event) {
	if (window.obj3270_onShow_activeActionGroupIndex != -1) return;
var obj3270_onShow_runningActionsCount = 0;
var obj3270_onShow_loopCount = 0;
obj3270_onShow_actionGroup0();
});














/*
 *
 *   obj3273: Event Show
 *
 */
 
$("#obj3273").bind('SCEventShow', function(event) {
	if (window.obj3273_onShow_activeActionGroupIndex != -1) return;
var obj3273_onShow_runningActionsCount = 0;
var obj3273_onShow_loopCount = 0;
obj3273_onShow_actionGroup0();
});














/*
 *
 *   obj3276: Event Show
 *
 */
 
$("#obj3276").bind('SCEventShow', function(event) {
	if (window.obj3276_onShow_activeActionGroupIndex != -1) return;
var obj3276_onShow_runningActionsCount = 0;
var obj3276_onShow_loopCount = 0;
obj3276_onShow_actionGroup0();
});














/*
 *
 *   obj5114: Event Show
 *
 */
 
$("#obj5114").bind('SCEventShow', function(event) {
	if (window.obj5114_onShow_activeActionGroupIndex != -1) return;
var obj5114_onShow_runningActionsCount = 0;
var obj5114_onShow_loopCount = 0;
obj5114_onShow_actionGroup0();
});


























/*
 *
 *   obj3279: Event Touch Down
 *
 */

$("#obj3279").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3279_onTap_activeActionGroupIndex != -1) return;
var obj3279_onTap_runningActionsCount = 0;
var obj3279_onTap_loopCount = 0;
obj3279_onTap_actionGroup0();
});



/*
 *
 *   obj3279: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj3279_onLoad_activeActionGroupIndex != -1) return;
var obj3279_onLoad_runningActionsCount = 0;
var obj3279_onLoad_loopCount = 0;
obj3279_onLoad_actionGroup0();
});














/*
 *
 *   obj3392: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj3392_onLoad_activeActionGroupIndex != -1) return;
var obj3392_onLoad_runningActionsCount = 0;
var obj3392_onLoad_loopCount = 0;
obj3392_onLoad_actionGroup0();
});


































/*
 *
 *   obj2251: Event SCEventRun
 *
 */

$("#obj2251").bind("SCEventRun", function(event) {
	if (window.obj2251_SCEventRun_activeActionGroupIndex != -1) return;
var obj2251_SCEventRun_runningActionsCount = 0;
var obj2251_SCEventRun_loopCount = 0;
obj2251_SCEventRun_actionGroup0();
});














/*
 *
 *   obj2275: Event SCEventRun
 *
 */

$("#obj2275").one("SCEventRun", function(event) {
	if (window.obj2275_SCEventRun_activeActionGroupIndex != -1) return;
var obj2275_SCEventRun_runningActionsCount = 0;
var obj2275_SCEventRun_loopCount = 0;
obj2275_SCEventRun_actionGroup0();
});



























































/*
 *
 *   obj2298: Event SCEventRun
 *
 */

$("#obj2298").one("SCEventRun", function(event) {
	if (window.obj2298_SCEventRun_activeActionGroupIndex != -1) return;
var obj2298_SCEventRun_runningActionsCount = 0;
var obj2298_SCEventRun_loopCount = 0;
obj2298_SCEventRun_actionGroup0();
});



























































/*
 *
 *   obj2327: Event SCEventRun
 *
 */

$("#obj2327").one("SCEventRun", function(event) {
	if (window.obj2327_SCEventRun_activeActionGroupIndex != -1) return;
var obj2327_SCEventRun_runningActionsCount = 0;
var obj2327_SCEventRun_loopCount = 0;
obj2327_SCEventRun_actionGroup0();
});








































































































/*
 *
 *   obj2193: Event SCEventRun
 *
 */

$("#obj2193").bind("SCEventRun", function(event) {
	if (window.obj2193_SCEventRun_activeActionGroupIndex != -1) return;
var obj2193_SCEventRun_runningActionsCount = 0;
var obj2193_SCEventRun_loopCount = 0;
obj2193_SCEventRun_actionGroup0();
});














/*
 *
 *   obj2356: Event SCEventRun
 *
 */

$("#obj2356").one("SCEventRun", function(event) {
	if (window.obj2356_SCEventRun_activeActionGroupIndex != -1) return;
var obj2356_SCEventRun_runningActionsCount = 0;
var obj2356_SCEventRun_loopCount = 0;
obj2356_SCEventRun_actionGroup0();
});














/*
 *
 *   obj3365: Event SCEventRun
 *
 */

$("#obj3365").bind("SCEventRun", function(event) {
	if (window.obj3365_SCEventRun_activeActionGroupIndex != -1) return;
var obj3365_SCEventRun_runningActionsCount = 0;
var obj3365_SCEventRun_loopCount = 0;
obj3365_SCEventRun_actionGroup0();
});



























































/*
 *
 *   obj4393: Event SCEventRun
 *
 */

$("#obj4393").bind("SCEventRun", function(event) {
	if (window.obj4393_SCEventRun_activeActionGroupIndex != -1) return;
var obj4393_SCEventRun_runningActionsCount = 0;
var obj4393_SCEventRun_loopCount = 0;
obj4393_SCEventRun_actionGroup0();
});














/*
 *
 *   obj4723: Event SCEventRun
 *
 */

$("#obj4723").bind("SCEventRun", function(event) {
	if (window.obj4723_SCEventRun_activeActionGroupIndex != -1) return;
var obj4723_SCEventRun_runningActionsCount = 0;
var obj4723_SCEventRun_loopCount = 0;
obj4723_SCEventRun_actionGroup0();
});







/*
 *
 *   obj5077: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj5077");
	var winTarget = document.getElementById("obj5077");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj5077").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj5077_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj5077_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj5077_onTouchDown_activeActionGroupIndex != -1) return;
var obj5077_onTouchDown_runningActionsCount = 0;
var obj5077_onTouchDown_loopCount = 0;
obj5077_onTouchDown_actionGroup0();
});

/*
 *
 *   obj5077: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj5077_onLoad_activeActionGroupIndex != -1) return;
var obj5077_onLoad_runningActionsCount = 0;
var obj5077_onLoad_loopCount = 0;
obj5077_onLoad_actionGroup0();
});




/*
 *
 *   obj5077: Event SCActionDragDrop2199_droppedOutsideTargetActions
 *
 */

$("#obj5077").bind("SCActionDragDrop2199_droppedOutsideTargetActions", function(event) {
	if (window.obj5077_SCActionDragDrop2199_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj5077_SCActionDragDrop2199_droppedOutsideTargetActions_runningActionsCount = 0;
var obj5077_SCActionDragDrop2199_droppedOutsideTargetActions_loopCount = 0;
obj5077_SCActionDragDrop2199_droppedOutsideTargetActions_actionGroup0();
});









/*
 *
 *   obj4001: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj4001_onLoad_activeActionGroupIndex != -1) return;
var obj4001_onLoad_runningActionsCount = 0;
var obj4001_onLoad_loopCount = 0;
obj4001_onLoad_actionGroup0();
});

















































/*
 *
 *   obj4766: Event SCEventRun
 *
 */

$("#obj4766").bind("SCEventRun", function(event) {
	if (window.obj4766_SCEventRun_activeActionGroupIndex != -1) return;
var obj4766_SCEventRun_runningActionsCount = 0;
var obj4766_SCEventRun_loopCount = 0;
obj4766_SCEventRun_actionGroup0();
});









/*
 *
 *   obj5431: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj5431_onLoad_activeActionGroupIndex != -1) return;
var obj5431_onLoad_runningActionsCount = 0;
var obj5431_onLoad_loopCount = 0;
obj5431_onLoad_actionGroup0();
});



















/*
 *
 *   obj5679: Event SCEventRun
 *
 */

$("#obj5679").bind("SCEventRun", function(event) {
	if (window.obj5679_SCEventRun_activeActionGroupIndex != -1) return;
var obj5679_SCEventRun_runningActionsCount = 0;
var obj5679_SCEventRun_loopCount = 0;
obj5679_SCEventRun_actionGroup0();
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
	
$("#obj2142").trigger('SCEventShow');
$("#obj2444").trigger('SCEventShow');
$("#obj2457").trigger('SCEventShow');
$("#obj2471").trigger('SCEventShow');
$("#obj2485").trigger('SCEventShow');
$("#obj2145").trigger('SCEventShow');
$("#obj2200").trigger('SCEventShow');
$("#obj2317").trigger('SCEventShow');
$("#obj2309").trigger('SCEventShow');
$("#obj3349").trigger('SCEventShow');
$("#obj2136").trigger('SCEventShow');
$("#obj3185").trigger('SCEventShow');
$("#obj3188").trigger('SCEventShow');
$("#obj3191").trigger('SCEventShow');
$("#obj3194").trigger('SCEventShow');
$("#obj3196").trigger('SCEventShow');
$("#obj1966").trigger('SCEventShow');
$("#obj1968").trigger('SCEventShow');
$("#obj1970").trigger('SCEventShow');
$("#obj1972").trigger('SCEventShow');
$("#obj2090").trigger('SCEventShow');
$("#obj2078").trigger('SCEventShow');
$("#obj2064").trigger('SCEventShow');
$("#obj2052").trigger('SCEventShow');
$("#obj2306").trigger('SCEventShow');
$("#obj3279").trigger('SCEventShow');
$("#obj3392").trigger('SCEventShow');
$("#obj2319").trigger('SCEventShow');
$("#obj5077").trigger('SCEventShow');
$("#obj5431").trigger('SCEventShow');
	localStorage.setItem('tapped','0');
localStorage.setItem('ready','true');
localStorage.setItem("moved", "false");
localStorage.setItem("tapped", "0");
localStorage.setItem("ready", "true");
});