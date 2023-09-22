pubcoder.projectID = pubcoder.projectID || "968537061CD4A6469E16DEA662F0DD9C";
pubcoder.project.id = pubcoder.project.id || "968537061CD4A6469E16DEA662F0DD9C";
pubcoder.project.title = pubcoder.project.title || "MGTO Underwater Story";
pubcoder.page.id = pubcoder.page.id || 485;
pubcoder.page.title = pubcoder.page.title || "4";
pubcoder.page.number = pubcoder.page.number || 4;
pubcoder.page.alias = pubcoder.page.alias || "";


var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;

var obj4905_animation_count = 0;

/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj536_onLoad_activeActionGroupIndex = -1;
var obj536_onLoad_runningActionsCount = 0;
var obj536_onLoad_loopCount = 0;
var obj4503_onLoad_activeActionGroupIndex = -1;
var obj4503_onLoad_runningActionsCount = 0;
var obj4503_onLoad_loopCount = 0;
var obj4515_onLoad_activeActionGroupIndex = -1;
var obj4515_onLoad_runningActionsCount = 0;
var obj4515_onLoad_loopCount = 0;
var obj4530_onLoad_activeActionGroupIndex = -1;
var obj4530_onLoad_runningActionsCount = 0;
var obj4530_onLoad_loopCount = 0;
var obj4543_onLoad_activeActionGroupIndex = -1;
var obj4543_onLoad_runningActionsCount = 0;
var obj4543_onLoad_loopCount = 0;
var obj4594_onLoad_activeActionGroupIndex = -1;
var obj4594_onLoad_runningActionsCount = 0;
var obj4594_onLoad_loopCount = 0;
var obj4582_onLoad_activeActionGroupIndex = -1;
var obj4582_onLoad_runningActionsCount = 0;
var obj4582_onLoad_loopCount = 0;
var obj4568_onLoad_activeActionGroupIndex = -1;
var obj4568_onLoad_runningActionsCount = 0;
var obj4568_onLoad_loopCount = 0;
var obj4556_onLoad_activeActionGroupIndex = -1;
var obj4556_onLoad_runningActionsCount = 0;
var obj4556_onLoad_loopCount = 0;
var obj523_onLoad_activeActionGroupIndex = -1;
var obj523_onLoad_runningActionsCount = 0;
var obj523_onLoad_loopCount = 0;
var obj4905_onDrag_activeActionGroupIndex = -1;
var obj4905_onDrag_runningActionsCount = 0;
var obj4905_onDrag_loopCount = 0;
var obj4905_onLoad_activeActionGroupIndex = -1;
var obj4905_onLoad_runningActionsCount = 0;
var obj4905_onLoad_loopCount = 0;
var obj4905_onTouchDown_activeActionGroupIndex = -1;
var obj4905_onTouchDown_runningActionsCount = 0;
var obj4905_onTouchDown_loopCount = 0;
var obj499_onLoad_activeActionGroupIndex = -1;
var obj499_onLoad_runningActionsCount = 0;
var obj499_onLoad_loopCount = 0;
var obj490_onLoad_activeActionGroupIndex = -1;
var obj490_onLoad_runningActionsCount = 0;
var obj490_onLoad_loopCount = 0;
var obj4384_SCEventRun_activeActionGroupIndex = -1;
var obj4384_SCEventRun_runningActionsCount = 0;
var obj4384_SCEventRun_loopCount = 0;
var obj4446_SCEventRun_activeActionGroupIndex = -1;
var obj4446_SCEventRun_runningActionsCount = 0;
var obj4446_SCEventRun_loopCount = 0;
var obj4475_SCEventRun_activeActionGroupIndex = -1;
var obj4475_SCEventRun_runningActionsCount = 0;
var obj4475_SCEventRun_loopCount = 0;
var obj4478_SCEventRun_activeActionGroupIndex = -1;
var obj4478_SCEventRun_runningActionsCount = 0;
var obj4478_SCEventRun_loopCount = 0;
var obj4612_onLoad_activeActionGroupIndex = -1;
var obj4612_onLoad_runningActionsCount = 0;
var obj4612_onLoad_loopCount = 0;
var obj4612_onShow_activeActionGroupIndex = -1;
var obj4612_onShow_runningActionsCount = 0;
var obj4612_onShow_loopCount = 0;
var obj5422_onLoad_activeActionGroupIndex = -1;
var obj5422_onLoad_runningActionsCount = 0;
var obj5422_onLoad_loopCount = 0;

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
	
initAnimation_4905();
function initAnimation_4905()
{
        var targetObjectId = "#obj4905";
        var widthSCAnimationObject = 547;
        var heightSCAnimationObject = 354;
		var framesPerSecond = 10;
		var howManyLoops = 0;
		var backToFirstFrame = false;
        var isAnimationInfinite = true;
        window.audio_animation_obj4905 = $("#")[0];
        window.hasAudioTrack_obj4905 = false

 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj4905_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj4905 = $(targetObjectId).spritespin("api");
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
		
obj536_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj536_onLoad_activeActionGroupIndex = -1;
		$("#obj536").trigger("obj536_onLoad_ended");
		
		return;
	}
	window.obj536_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj536 
move_4494();
function move_4494() {
	window.obj536_onLoad_runningActionsCount = obj536_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj536");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-333";
	var moveY = "+=280";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 3000, easing, function() {
		setTimeout(function() {
			window.obj536_onLoad_runningActionsCount = window.obj536_onLoad_runningActionsCount - 1;

if (window.obj536_onLoad_runningActionsCount == 0) {
	obj536_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj536 
move_4495();
function move_4495() {
	window.obj536_onLoad_runningActionsCount = obj536_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj536");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-404";
	var moveY = "+=-78";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj536_onLoad_runningActionsCount = window.obj536_onLoad_runningActionsCount - 1;

if (window.obj536_onLoad_runningActionsCount == 0) {
	obj536_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj536 
move_4496();
function move_4496() {
	window.obj536_onLoad_runningActionsCount = obj536_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj536");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-375";
	var moveY = "+=84";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 3000, easing, function() {
		setTimeout(function() {
			window.obj536_onLoad_runningActionsCount = window.obj536_onLoad_runningActionsCount - 1;

if (window.obj536_onLoad_runningActionsCount == 0) {
	obj536_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj536 
move_4497();
function move_4497() {
	window.obj536_onLoad_runningActionsCount = obj536_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj536");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-437";
	var moveY = "+=8";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj536_onLoad_runningActionsCount = window.obj536_onLoad_runningActionsCount - 1;

if (window.obj536_onLoad_runningActionsCount == 0) {
	obj536_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj536_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj536_onLoad_activeActionGroupIndex = -1;
		$("#obj536").trigger("obj536_onLoad_ended");
		
		return;
	}
	window.obj536_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj536 
move_4499();
function move_4499() {
	window.obj536_onLoad_runningActionsCount = obj536_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj536");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1421;
	var moveY = 402;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj536_onLoad_runningActionsCount = window.obj536_onLoad_runningActionsCount - 1;

if (window.obj536_onLoad_runningActionsCount == 0) {
	obj536_onLoad_actionGroup2();
}
		}, 1);
	});
}












//	action: wait
wait_4498();
function wait_4498() {
	window.obj536_onLoad_runningActionsCount = obj536_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj536_onLoad_runningActionsCount = window.obj536_onLoad_runningActionsCount - 1;

if (window.obj536_onLoad_runningActionsCount == 0) {
	obj536_onLoad_actionGroup2();
}
	}, 1000);
}

























};
obj536_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj536_onLoad_activeActionGroupIndex = -1;
		$("#obj536").trigger("obj536_onLoad_ended");
		
		return;
	}
	window.obj536_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj536_onLoad();
function loop_obj536_onLoad() {

	var loopCount = 0;

	window.obj536_onLoad_loopCount = window.obj536_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj536_onLoad_loopCount > loopCount) {
		window.obj536_onLoad_loopCount = 0
		obj536_onLoad_actionGroup3();
	} else {
		obj536_onLoad_actionGroup0();
	}

}


























};
obj536_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj536_onLoad_activeActionGroupIndex = -1;
		$("#obj536").trigger("obj536_onLoad_ended");
		
		return;
	}
	window.obj536_onLoad_activeActionGroupIndex = 3;
	










































};
obj4503_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4503_onLoad_activeActionGroupIndex = -1;
		$("#obj4503").trigger("obj4503_onLoad_ended");
		
		return;
	}
	window.obj4503_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj4503 
move_4511();
function move_4511() {
	window.obj4503_onLoad_runningActionsCount = obj4503_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj4503");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1409;
	var moveY = 591;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj4503_onLoad_runningActionsCount = window.obj4503_onLoad_runningActionsCount - 1;

if (window.obj4503_onLoad_runningActionsCount == 0) {
	obj4503_onLoad_actionGroup1();
}
		}, 1);
	});
}












//	action: wait
wait_4510();
function wait_4510() {
	window.obj4503_onLoad_runningActionsCount = obj4503_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj4503_onLoad_runningActionsCount = window.obj4503_onLoad_runningActionsCount - 1;

if (window.obj4503_onLoad_runningActionsCount == 0) {
	obj4503_onLoad_actionGroup1();
}
	}, 1000);
}

























};
obj4503_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4503_onLoad_activeActionGroupIndex = -1;
		$("#obj4503").trigger("obj4503_onLoad_ended");
		
		return;
	}
	window.obj4503_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj4503 
move_4506();
function move_4506() {
	window.obj4503_onLoad_runningActionsCount = obj4503_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj4503");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-468";
	var moveY = "+=-15";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 3000, easing, function() {
		setTimeout(function() {
			window.obj4503_onLoad_runningActionsCount = window.obj4503_onLoad_runningActionsCount - 1;

if (window.obj4503_onLoad_runningActionsCount == 0) {
	obj4503_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj4503 
move_4507();
function move_4507() {
	window.obj4503_onLoad_runningActionsCount = obj4503_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj4503");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-420";
	var moveY = "+=116";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj4503_onLoad_runningActionsCount = window.obj4503_onLoad_runningActionsCount - 1;

if (window.obj4503_onLoad_runningActionsCount == 0) {
	obj4503_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj4503 
move_4508();
function move_4508() {
	window.obj4503_onLoad_runningActionsCount = obj4503_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj4503");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-429";
	var moveY = "+=-90";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 3000, easing, function() {
		setTimeout(function() {
			window.obj4503_onLoad_runningActionsCount = window.obj4503_onLoad_runningActionsCount - 1;

if (window.obj4503_onLoad_runningActionsCount == 0) {
	obj4503_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj4503 
move_4509();
function move_4509() {
	window.obj4503_onLoad_runningActionsCount = obj4503_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj4503");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-428";
	var moveY = "+=-234";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj4503_onLoad_runningActionsCount = window.obj4503_onLoad_runningActionsCount - 1;

if (window.obj4503_onLoad_runningActionsCount == 0) {
	obj4503_onLoad_actionGroup2();
}
		}, 1);
	});
}






































};
obj4503_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4503_onLoad_activeActionGroupIndex = -1;
		$("#obj4503").trigger("obj4503_onLoad_ended");
		
		return;
	}
	window.obj4503_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj4503_onLoad();
function loop_obj4503_onLoad() {

	var loopCount = 0;

	window.obj4503_onLoad_loopCount = window.obj4503_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj4503_onLoad_loopCount > loopCount) {
		window.obj4503_onLoad_loopCount = 0
		obj4503_onLoad_actionGroup3();
	} else {
		obj4503_onLoad_actionGroup0();
	}

}


























};
obj4503_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4503_onLoad_activeActionGroupIndex = -1;
		$("#obj4503").trigger("obj4503_onLoad_ended");
		
		return;
	}
	window.obj4503_onLoad_activeActionGroupIndex = 3;
	










































};
obj4515_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4515_onLoad_activeActionGroupIndex = -1;
		$("#obj4515").trigger("obj4515_onLoad_ended");
		
		return;
	}
	window.obj4515_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj4515 
move_4520();
function move_4520() {
	window.obj4515_onLoad_runningActionsCount = obj4515_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj4515");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-345";
	var moveY = "+=149";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 3000, easing, function() {
		setTimeout(function() {
			window.obj4515_onLoad_runningActionsCount = window.obj4515_onLoad_runningActionsCount - 1;

if (window.obj4515_onLoad_runningActionsCount == 0) {
	obj4515_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4515 
move_4525();
function move_4525() {
	window.obj4515_onLoad_runningActionsCount = obj4515_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj4515");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-148";
	var moveY = "+=-281";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 3000, easing, function() {
		setTimeout(function() {
			window.obj4515_onLoad_runningActionsCount = window.obj4515_onLoad_runningActionsCount - 1;

if (window.obj4515_onLoad_runningActionsCount == 0) {
	obj4515_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4515 
move_4526();
function move_4526() {
	window.obj4515_onLoad_runningActionsCount = obj4515_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj4515");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-329";
	var moveY = "+=-109";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj4515_onLoad_runningActionsCount = window.obj4515_onLoad_runningActionsCount - 1;

if (window.obj4515_onLoad_runningActionsCount == 0) {
	obj4515_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4515 
move_4527();
function move_4527() {
	window.obj4515_onLoad_runningActionsCount = obj4515_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj4515");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-405";
	var moveY = "+=-81";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 3000, easing, function() {
		setTimeout(function() {
			window.obj4515_onLoad_runningActionsCount = window.obj4515_onLoad_runningActionsCount - 1;

if (window.obj4515_onLoad_runningActionsCount == 0) {
	obj4515_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4515 
move_4528();
function move_4528() {
	window.obj4515_onLoad_runningActionsCount = obj4515_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj4515");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-308";
	var moveY = "+=72";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj4515_onLoad_runningActionsCount = window.obj4515_onLoad_runningActionsCount - 1;

if (window.obj4515_onLoad_runningActionsCount == 0) {
	obj4515_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj4515_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4515_onLoad_activeActionGroupIndex = -1;
		$("#obj4515").trigger("obj4515_onLoad_ended");
		
		return;
	}
	window.obj4515_onLoad_activeActionGroupIndex = 1;
	















//	action: loop
loop_obj4515_onLoad();
function loop_obj4515_onLoad() {

	var loopCount = 0;

	window.obj4515_onLoad_loopCount = window.obj4515_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj4515_onLoad_loopCount > loopCount) {
		window.obj4515_onLoad_loopCount = 0
		obj4515_onLoad_actionGroup2();
	} else {
		obj4515_onLoad_actionGroup0();
	}

}


























};
obj4515_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4515_onLoad_activeActionGroupIndex = -1;
		$("#obj4515").trigger("obj4515_onLoad_ended");
		
		return;
	}
	window.obj4515_onLoad_activeActionGroupIndex = 2;
	



//	action: move
//	target: obj4515 
move_4519();
function move_4519() {
	window.obj4515_onLoad_runningActionsCount = obj4515_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj4515");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1383;
	var moveY = 723;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj4515_onLoad_runningActionsCount = window.obj4515_onLoad_runningActionsCount - 1;

if (window.obj4515_onLoad_runningActionsCount == 0) {
	obj4515_onLoad_actionGroup3();
}
		}, 1);
	});
}












//	action: wait
wait_4518();
function wait_4518() {
	window.obj4515_onLoad_runningActionsCount = obj4515_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj4515_onLoad_runningActionsCount = window.obj4515_onLoad_runningActionsCount - 1;

if (window.obj4515_onLoad_runningActionsCount == 0) {
	obj4515_onLoad_actionGroup3();
}
	}, 500);
}

























};
obj4515_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4515_onLoad_activeActionGroupIndex = -1;
		$("#obj4515").trigger("obj4515_onLoad_ended");
		
		return;
	}
	window.obj4515_onLoad_activeActionGroupIndex = 3;
	










































};
obj4530_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4530_onLoad_activeActionGroupIndex = -1;
		$("#obj4530").trigger("obj4530_onLoad_ended");
		
		return;
	}
	window.obj4530_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj4530 
move_4540();
function move_4540() {
	window.obj4530_onLoad_runningActionsCount = obj4530_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj4530");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1381;
	var moveY = 823;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj4530_onLoad_runningActionsCount = window.obj4530_onLoad_runningActionsCount - 1;

if (window.obj4530_onLoad_runningActionsCount == 0) {
	obj4530_onLoad_actionGroup1();
}
		}, 1);
	});
}












//	action: wait
wait_4539();
function wait_4539() {
	window.obj4530_onLoad_runningActionsCount = obj4530_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj4530_onLoad_runningActionsCount = window.obj4530_onLoad_runningActionsCount - 1;

if (window.obj4530_onLoad_runningActionsCount == 0) {
	obj4530_onLoad_actionGroup1();
}
	}, 500);
}

























};
obj4530_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4530_onLoad_activeActionGroupIndex = -1;
		$("#obj4530").trigger("obj4530_onLoad_ended");
		
		return;
	}
	window.obj4530_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj4530 
move_4533();
function move_4533() {
	window.obj4530_onLoad_runningActionsCount = obj4530_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj4530");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-345";
	var moveY = "+=149";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 3000, easing, function() {
		setTimeout(function() {
			window.obj4530_onLoad_runningActionsCount = window.obj4530_onLoad_runningActionsCount - 1;

if (window.obj4530_onLoad_runningActionsCount == 0) {
	obj4530_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj4530 
move_4534();
function move_4534() {
	window.obj4530_onLoad_runningActionsCount = obj4530_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj4530");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-148";
	var moveY = "+=-281";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 3000, easing, function() {
		setTimeout(function() {
			window.obj4530_onLoad_runningActionsCount = window.obj4530_onLoad_runningActionsCount - 1;

if (window.obj4530_onLoad_runningActionsCount == 0) {
	obj4530_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj4530 
move_4535();
function move_4535() {
	window.obj4530_onLoad_runningActionsCount = obj4530_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj4530");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-329";
	var moveY = "+=-109";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj4530_onLoad_runningActionsCount = window.obj4530_onLoad_runningActionsCount - 1;

if (window.obj4530_onLoad_runningActionsCount == 0) {
	obj4530_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj4530 
move_4536();
function move_4536() {
	window.obj4530_onLoad_runningActionsCount = obj4530_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj4530");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-405";
	var moveY = "+=-81";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 3000, easing, function() {
		setTimeout(function() {
			window.obj4530_onLoad_runningActionsCount = window.obj4530_onLoad_runningActionsCount - 1;

if (window.obj4530_onLoad_runningActionsCount == 0) {
	obj4530_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj4530 
move_4537();
function move_4537() {
	window.obj4530_onLoad_runningActionsCount = obj4530_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj4530");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-308";
	var moveY = "+=72";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj4530_onLoad_runningActionsCount = window.obj4530_onLoad_runningActionsCount - 1;

if (window.obj4530_onLoad_runningActionsCount == 0) {
	obj4530_onLoad_actionGroup2();
}
		}, 1);
	});
}






































};
obj4530_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4530_onLoad_activeActionGroupIndex = -1;
		$("#obj4530").trigger("obj4530_onLoad_ended");
		
		return;
	}
	window.obj4530_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj4530_onLoad();
function loop_obj4530_onLoad() {

	var loopCount = 0;

	window.obj4530_onLoad_loopCount = window.obj4530_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj4530_onLoad_loopCount > loopCount) {
		window.obj4530_onLoad_loopCount = 0
		obj4530_onLoad_actionGroup3();
	} else {
		obj4530_onLoad_actionGroup0();
	}

}


























};
obj4530_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4530_onLoad_activeActionGroupIndex = -1;
		$("#obj4530").trigger("obj4530_onLoad_ended");
		
		return;
	}
	window.obj4530_onLoad_activeActionGroupIndex = 3;
	










































};
obj4543_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4543_onLoad_activeActionGroupIndex = -1;
		$("#obj4543").trigger("obj4543_onLoad_ended");
		
		return;
	}
	window.obj4543_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj4543 
move_4546();
function move_4546() {
	window.obj4543_onLoad_runningActionsCount = obj4543_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj4543");
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
			window.obj4543_onLoad_runningActionsCount = window.obj4543_onLoad_runningActionsCount - 1;

if (window.obj4543_onLoad_runningActionsCount == 0) {
	obj4543_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4543 
move_4547();
function move_4547() {
	window.obj4543_onLoad_runningActionsCount = obj4543_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj4543");
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
			window.obj4543_onLoad_runningActionsCount = window.obj4543_onLoad_runningActionsCount - 1;

if (window.obj4543_onLoad_runningActionsCount == 0) {
	obj4543_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4543 
move_4548();
function move_4548() {
	window.obj4543_onLoad_runningActionsCount = obj4543_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj4543");
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
			window.obj4543_onLoad_runningActionsCount = window.obj4543_onLoad_runningActionsCount - 1;

if (window.obj4543_onLoad_runningActionsCount == 0) {
	obj4543_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4543 
move_4549();
function move_4549() {
	window.obj4543_onLoad_runningActionsCount = obj4543_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj4543");
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
			window.obj4543_onLoad_runningActionsCount = window.obj4543_onLoad_runningActionsCount - 1;

if (window.obj4543_onLoad_runningActionsCount == 0) {
	obj4543_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4543 
move_4550();
function move_4550() {
	window.obj4543_onLoad_runningActionsCount = obj4543_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj4543");
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
			window.obj4543_onLoad_runningActionsCount = window.obj4543_onLoad_runningActionsCount - 1;

if (window.obj4543_onLoad_runningActionsCount == 0) {
	obj4543_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj4543_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4543_onLoad_activeActionGroupIndex = -1;
		$("#obj4543").trigger("obj4543_onLoad_ended");
		
		return;
	}
	window.obj4543_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj4543 
move_4551();
function move_4551() {
	window.obj4543_onLoad_runningActionsCount = obj4543_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj4543");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1381;
	var moveY = 192;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj4543_onLoad_runningActionsCount = window.obj4543_onLoad_runningActionsCount - 1;

if (window.obj4543_onLoad_runningActionsCount == 0) {
	obj4543_onLoad_actionGroup2();
}
		}, 1);
	});
}












//	action: wait
wait_4552();
function wait_4552() {
	window.obj4543_onLoad_runningActionsCount = obj4543_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj4543_onLoad_runningActionsCount = window.obj4543_onLoad_runningActionsCount - 1;

if (window.obj4543_onLoad_runningActionsCount == 0) {
	obj4543_onLoad_actionGroup2();
}
	}, 2000);
}

























};
obj4543_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4543_onLoad_activeActionGroupIndex = -1;
		$("#obj4543").trigger("obj4543_onLoad_ended");
		
		return;
	}
	window.obj4543_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj4543_onLoad();
function loop_obj4543_onLoad() {

	var loopCount = 0;

	window.obj4543_onLoad_loopCount = window.obj4543_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj4543_onLoad_loopCount > loopCount) {
		window.obj4543_onLoad_loopCount = 0
		obj4543_onLoad_actionGroup3();
	} else {
		obj4543_onLoad_actionGroup0();
	}

}


























};
obj4543_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4543_onLoad_activeActionGroupIndex = -1;
		$("#obj4543").trigger("obj4543_onLoad_ended");
		
		return;
	}
	window.obj4543_onLoad_activeActionGroupIndex = 3;
	










































};
obj4594_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4594_onLoad_activeActionGroupIndex = -1;
		$("#obj4594").trigger("obj4594_onLoad_ended");
		
		return;
	}
	window.obj4594_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj4594 
move_4597();
function move_4597() {
	window.obj4594_onLoad_runningActionsCount = obj4594_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj4594");
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
			window.obj4594_onLoad_runningActionsCount = window.obj4594_onLoad_runningActionsCount - 1;

if (window.obj4594_onLoad_runningActionsCount == 0) {
	obj4594_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4594 
move_4598();
function move_4598() {
	window.obj4594_onLoad_runningActionsCount = obj4594_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj4594");
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
			window.obj4594_onLoad_runningActionsCount = window.obj4594_onLoad_runningActionsCount - 1;

if (window.obj4594_onLoad_runningActionsCount == 0) {
	obj4594_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4594 
move_4599();
function move_4599() {
	window.obj4594_onLoad_runningActionsCount = obj4594_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj4594");
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
			window.obj4594_onLoad_runningActionsCount = window.obj4594_onLoad_runningActionsCount - 1;

if (window.obj4594_onLoad_runningActionsCount == 0) {
	obj4594_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4594 
move_4600();
function move_4600() {
	window.obj4594_onLoad_runningActionsCount = obj4594_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj4594");
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
			window.obj4594_onLoad_runningActionsCount = window.obj4594_onLoad_runningActionsCount - 1;

if (window.obj4594_onLoad_runningActionsCount == 0) {
	obj4594_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4594 
move_4601();
function move_4601() {
	window.obj4594_onLoad_runningActionsCount = obj4594_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj4594");
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
			window.obj4594_onLoad_runningActionsCount = window.obj4594_onLoad_runningActionsCount - 1;

if (window.obj4594_onLoad_runningActionsCount == 0) {
	obj4594_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4594 
move_4602();
function move_4602() {
	window.obj4594_onLoad_runningActionsCount = obj4594_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj4594");
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
			window.obj4594_onLoad_runningActionsCount = window.obj4594_onLoad_runningActionsCount - 1;

if (window.obj4594_onLoad_runningActionsCount == 0) {
	obj4594_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4594 
move_4603();
function move_4603() {
	window.obj4594_onLoad_runningActionsCount = obj4594_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj4594");
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
			window.obj4594_onLoad_runningActionsCount = window.obj4594_onLoad_runningActionsCount - 1;

if (window.obj4594_onLoad_runningActionsCount == 0) {
	obj4594_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4594 
move_4604();
function move_4604() {
	window.obj4594_onLoad_runningActionsCount = obj4594_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj4594");
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
			window.obj4594_onLoad_runningActionsCount = window.obj4594_onLoad_runningActionsCount - 1;

if (window.obj4594_onLoad_runningActionsCount == 0) {
	obj4594_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4594 
move_4605();
function move_4605() {
	window.obj4594_onLoad_runningActionsCount = obj4594_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj4594");
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
			window.obj4594_onLoad_runningActionsCount = window.obj4594_onLoad_runningActionsCount - 1;

if (window.obj4594_onLoad_runningActionsCount == 0) {
	obj4594_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj4594_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4594_onLoad_activeActionGroupIndex = -1;
		$("#obj4594").trigger("obj4594_onLoad_ended");
		
		return;
	}
	window.obj4594_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj4594 
move_4607();
function move_4607() {
	window.obj4594_onLoad_runningActionsCount = obj4594_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4594");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = -136;
	var moveY = 503;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj4594_onLoad_runningActionsCount = window.obj4594_onLoad_runningActionsCount - 1;

if (window.obj4594_onLoad_runningActionsCount == 0) {
	obj4594_onLoad_actionGroup2();
}
		}, 1);
	});
}












//	action: wait
wait_4606();
function wait_4606() {
	window.obj4594_onLoad_runningActionsCount = obj4594_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj4594_onLoad_runningActionsCount = window.obj4594_onLoad_runningActionsCount - 1;

if (window.obj4594_onLoad_runningActionsCount == 0) {
	obj4594_onLoad_actionGroup2();
}
	}, 1000);
}

























};
obj4594_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4594_onLoad_activeActionGroupIndex = -1;
		$("#obj4594").trigger("obj4594_onLoad_ended");
		
		return;
	}
	window.obj4594_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj4594_onLoad();
function loop_obj4594_onLoad() {

	var loopCount = 0;

	window.obj4594_onLoad_loopCount = window.obj4594_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj4594_onLoad_loopCount > loopCount) {
		window.obj4594_onLoad_loopCount = 0
		obj4594_onLoad_actionGroup3();
	} else {
		obj4594_onLoad_actionGroup0();
	}

}


























};
obj4594_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4594_onLoad_activeActionGroupIndex = -1;
		$("#obj4594").trigger("obj4594_onLoad_ended");
		
		return;
	}
	window.obj4594_onLoad_activeActionGroupIndex = 3;
	










































};
obj4582_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4582_onLoad_activeActionGroupIndex = -1;
		$("#obj4582").trigger("obj4582_onLoad_ended");
		
		return;
	}
	window.obj4582_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj4582 
move_4585();
function move_4585() {
	window.obj4582_onLoad_runningActionsCount = obj4582_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj4582");
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
			window.obj4582_onLoad_runningActionsCount = window.obj4582_onLoad_runningActionsCount - 1;

if (window.obj4582_onLoad_runningActionsCount == 0) {
	obj4582_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4582 
move_4586();
function move_4586() {
	window.obj4582_onLoad_runningActionsCount = obj4582_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj4582");
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
			window.obj4582_onLoad_runningActionsCount = window.obj4582_onLoad_runningActionsCount - 1;

if (window.obj4582_onLoad_runningActionsCount == 0) {
	obj4582_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4582 
move_4587();
function move_4587() {
	window.obj4582_onLoad_runningActionsCount = obj4582_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj4582");
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
			window.obj4582_onLoad_runningActionsCount = window.obj4582_onLoad_runningActionsCount - 1;

if (window.obj4582_onLoad_runningActionsCount == 0) {
	obj4582_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4582 
move_4588();
function move_4588() {
	window.obj4582_onLoad_runningActionsCount = obj4582_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj4582");
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
			window.obj4582_onLoad_runningActionsCount = window.obj4582_onLoad_runningActionsCount - 1;

if (window.obj4582_onLoad_runningActionsCount == 0) {
	obj4582_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4582 
move_4589();
function move_4589() {
	window.obj4582_onLoad_runningActionsCount = obj4582_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj4582");
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
			window.obj4582_onLoad_runningActionsCount = window.obj4582_onLoad_runningActionsCount - 1;

if (window.obj4582_onLoad_runningActionsCount == 0) {
	obj4582_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4582 
move_4590();
function move_4590() {
	window.obj4582_onLoad_runningActionsCount = obj4582_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj4582");
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
			window.obj4582_onLoad_runningActionsCount = window.obj4582_onLoad_runningActionsCount - 1;

if (window.obj4582_onLoad_runningActionsCount == 0) {
	obj4582_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj4582_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4582_onLoad_activeActionGroupIndex = -1;
		$("#obj4582").trigger("obj4582_onLoad_ended");
		
		return;
	}
	window.obj4582_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj4582 
move_4592();
function move_4592() {
	window.obj4582_onLoad_runningActionsCount = obj4582_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4582");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = -180;
	var moveY = 125;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj4582_onLoad_runningActionsCount = window.obj4582_onLoad_runningActionsCount - 1;

if (window.obj4582_onLoad_runningActionsCount == 0) {
	obj4582_onLoad_actionGroup2();
}
		}, 1);
	});
}












//	action: wait
wait_4591();
function wait_4591() {
	window.obj4582_onLoad_runningActionsCount = obj4582_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj4582_onLoad_runningActionsCount = window.obj4582_onLoad_runningActionsCount - 1;

if (window.obj4582_onLoad_runningActionsCount == 0) {
	obj4582_onLoad_actionGroup2();
}
	}, 700);
}

























};
obj4582_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4582_onLoad_activeActionGroupIndex = -1;
		$("#obj4582").trigger("obj4582_onLoad_ended");
		
		return;
	}
	window.obj4582_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj4582_onLoad();
function loop_obj4582_onLoad() {

	var loopCount = 0;

	window.obj4582_onLoad_loopCount = window.obj4582_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj4582_onLoad_loopCount > loopCount) {
		window.obj4582_onLoad_loopCount = 0
		obj4582_onLoad_actionGroup3();
	} else {
		obj4582_onLoad_actionGroup0();
	}

}


























};
obj4582_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4582_onLoad_activeActionGroupIndex = -1;
		$("#obj4582").trigger("obj4582_onLoad_ended");
		
		return;
	}
	window.obj4582_onLoad_activeActionGroupIndex = 3;
	










































};
obj4568_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4568_onLoad_activeActionGroupIndex = -1;
		$("#obj4568").trigger("obj4568_onLoad_ended");
		
		return;
	}
	window.obj4568_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj4568 
move_4571();
function move_4571() {
	window.obj4568_onLoad_runningActionsCount = obj4568_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj4568");
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
			window.obj4568_onLoad_runningActionsCount = window.obj4568_onLoad_runningActionsCount - 1;

if (window.obj4568_onLoad_runningActionsCount == 0) {
	obj4568_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4568 
move_4572();
function move_4572() {
	window.obj4568_onLoad_runningActionsCount = obj4568_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj4568");
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
			window.obj4568_onLoad_runningActionsCount = window.obj4568_onLoad_runningActionsCount - 1;

if (window.obj4568_onLoad_runningActionsCount == 0) {
	obj4568_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4568 
move_4573();
function move_4573() {
	window.obj4568_onLoad_runningActionsCount = obj4568_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj4568");
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
			window.obj4568_onLoad_runningActionsCount = window.obj4568_onLoad_runningActionsCount - 1;

if (window.obj4568_onLoad_runningActionsCount == 0) {
	obj4568_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4568 
move_4574();
function move_4574() {
	window.obj4568_onLoad_runningActionsCount = obj4568_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj4568");
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
			window.obj4568_onLoad_runningActionsCount = window.obj4568_onLoad_runningActionsCount - 1;

if (window.obj4568_onLoad_runningActionsCount == 0) {
	obj4568_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4568 
move_4575();
function move_4575() {
	window.obj4568_onLoad_runningActionsCount = obj4568_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj4568");
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
			window.obj4568_onLoad_runningActionsCount = window.obj4568_onLoad_runningActionsCount - 1;

if (window.obj4568_onLoad_runningActionsCount == 0) {
	obj4568_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4568 
move_4576();
function move_4576() {
	window.obj4568_onLoad_runningActionsCount = obj4568_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj4568");
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
			window.obj4568_onLoad_runningActionsCount = window.obj4568_onLoad_runningActionsCount - 1;

if (window.obj4568_onLoad_runningActionsCount == 0) {
	obj4568_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4568 
move_4577();
function move_4577() {
	window.obj4568_onLoad_runningActionsCount = obj4568_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj4568");
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
			window.obj4568_onLoad_runningActionsCount = window.obj4568_onLoad_runningActionsCount - 1;

if (window.obj4568_onLoad_runningActionsCount == 0) {
	obj4568_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4568 
move_4578();
function move_4578() {
	window.obj4568_onLoad_runningActionsCount = obj4568_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj4568");
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
			window.obj4568_onLoad_runningActionsCount = window.obj4568_onLoad_runningActionsCount - 1;

if (window.obj4568_onLoad_runningActionsCount == 0) {
	obj4568_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj4568_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4568_onLoad_activeActionGroupIndex = -1;
		$("#obj4568").trigger("obj4568_onLoad_ended");
		
		return;
	}
	window.obj4568_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj4568 
move_4580();
function move_4580() {
	window.obj4568_onLoad_runningActionsCount = obj4568_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4568");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = -170;
	var moveY = 728;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj4568_onLoad_runningActionsCount = window.obj4568_onLoad_runningActionsCount - 1;

if (window.obj4568_onLoad_runningActionsCount == 0) {
	obj4568_onLoad_actionGroup2();
}
		}, 1);
	});
}












//	action: wait
wait_4579();
function wait_4579() {
	window.obj4568_onLoad_runningActionsCount = obj4568_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj4568_onLoad_runningActionsCount = window.obj4568_onLoad_runningActionsCount - 1;

if (window.obj4568_onLoad_runningActionsCount == 0) {
	obj4568_onLoad_actionGroup2();
}
	}, 800);
}

























};
obj4568_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4568_onLoad_activeActionGroupIndex = -1;
		$("#obj4568").trigger("obj4568_onLoad_ended");
		
		return;
	}
	window.obj4568_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj4568_onLoad();
function loop_obj4568_onLoad() {

	var loopCount = 0;

	window.obj4568_onLoad_loopCount = window.obj4568_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj4568_onLoad_loopCount > loopCount) {
		window.obj4568_onLoad_loopCount = 0
		obj4568_onLoad_actionGroup3();
	} else {
		obj4568_onLoad_actionGroup0();
	}

}


























};
obj4568_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4568_onLoad_activeActionGroupIndex = -1;
		$("#obj4568").trigger("obj4568_onLoad_ended");
		
		return;
	}
	window.obj4568_onLoad_activeActionGroupIndex = 3;
	










































};
obj4556_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4556_onLoad_activeActionGroupIndex = -1;
		$("#obj4556").trigger("obj4556_onLoad_ended");
		
		return;
	}
	window.obj4556_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj4556 
move_4559();
function move_4559() {
	window.obj4556_onLoad_runningActionsCount = obj4556_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj4556");
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
			window.obj4556_onLoad_runningActionsCount = window.obj4556_onLoad_runningActionsCount - 1;

if (window.obj4556_onLoad_runningActionsCount == 0) {
	obj4556_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4556 
move_4560();
function move_4560() {
	window.obj4556_onLoad_runningActionsCount = obj4556_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj4556");
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
			window.obj4556_onLoad_runningActionsCount = window.obj4556_onLoad_runningActionsCount - 1;

if (window.obj4556_onLoad_runningActionsCount == 0) {
	obj4556_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4556 
move_4561();
function move_4561() {
	window.obj4556_onLoad_runningActionsCount = obj4556_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj4556");
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
			window.obj4556_onLoad_runningActionsCount = window.obj4556_onLoad_runningActionsCount - 1;

if (window.obj4556_onLoad_runningActionsCount == 0) {
	obj4556_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4556 
move_4562();
function move_4562() {
	window.obj4556_onLoad_runningActionsCount = obj4556_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj4556");
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
			window.obj4556_onLoad_runningActionsCount = window.obj4556_onLoad_runningActionsCount - 1;

if (window.obj4556_onLoad_runningActionsCount == 0) {
	obj4556_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4556 
move_4563();
function move_4563() {
	window.obj4556_onLoad_runningActionsCount = obj4556_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj4556");
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
			window.obj4556_onLoad_runningActionsCount = window.obj4556_onLoad_runningActionsCount - 1;

if (window.obj4556_onLoad_runningActionsCount == 0) {
	obj4556_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj4556 
move_4564();
function move_4564() {
	window.obj4556_onLoad_runningActionsCount = obj4556_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj4556");
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
			window.obj4556_onLoad_runningActionsCount = window.obj4556_onLoad_runningActionsCount - 1;

if (window.obj4556_onLoad_runningActionsCount == 0) {
	obj4556_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj4556_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4556_onLoad_activeActionGroupIndex = -1;
		$("#obj4556").trigger("obj4556_onLoad_ended");
		
		return;
	}
	window.obj4556_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj4556 
move_4566();
function move_4566() {
	window.obj4556_onLoad_runningActionsCount = obj4556_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj4556");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = -260;
	var moveY = 294;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj4556_onLoad_runningActionsCount = window.obj4556_onLoad_runningActionsCount - 1;

if (window.obj4556_onLoad_runningActionsCount == 0) {
	obj4556_onLoad_actionGroup2();
}
		}, 1);
	});
}












//	action: wait
wait_4565();
function wait_4565() {
	window.obj4556_onLoad_runningActionsCount = obj4556_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj4556_onLoad_runningActionsCount = window.obj4556_onLoad_runningActionsCount - 1;

if (window.obj4556_onLoad_runningActionsCount == 0) {
	obj4556_onLoad_actionGroup2();
}
	}, 1000);
}

























};
obj4556_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4556_onLoad_activeActionGroupIndex = -1;
		$("#obj4556").trigger("obj4556_onLoad_ended");
		
		return;
	}
	window.obj4556_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj4556_onLoad();
function loop_obj4556_onLoad() {

	var loopCount = 0;

	window.obj4556_onLoad_loopCount = window.obj4556_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj4556_onLoad_loopCount > loopCount) {
		window.obj4556_onLoad_loopCount = 0
		obj4556_onLoad_actionGroup3();
	} else {
		obj4556_onLoad_actionGroup0();
	}

}


























};
obj4556_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4556_onLoad_activeActionGroupIndex = -1;
		$("#obj4556").trigger("obj4556_onLoad_ended");
		
		return;
	}
	window.obj4556_onLoad_activeActionGroupIndex = 3;
	










































};
obj523_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj523_onLoad_activeActionGroupIndex = -1;
		$("#obj523").trigger("obj523_onLoad_ended");
		
		return;
	}
	window.obj523_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj523 
move_540();
function move_540() {
	window.obj523_onLoad_runningActionsCount = obj523_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj523");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=240";
	var moveY = "+=-166";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 800, easing, function() {
		setTimeout(function() {
			window.obj523_onLoad_runningActionsCount = window.obj523_onLoad_runningActionsCount - 1;

if (window.obj523_onLoad_runningActionsCount == 0) {
	obj523_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj523 
move_541();
function move_541() {
	window.obj523_onLoad_runningActionsCount = obj523_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj523");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=116";
	var moveY = "+=-67";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 800, easing, function() {
		setTimeout(function() {
			window.obj523_onLoad_runningActionsCount = window.obj523_onLoad_runningActionsCount - 1;

if (window.obj523_onLoad_runningActionsCount == 0) {
	obj523_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj523 
move_542();
function move_542() {
	window.obj523_onLoad_runningActionsCount = obj523_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj523");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=126";
	var moveY = "+=-143";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 800, easing, function() {
		setTimeout(function() {
			window.obj523_onLoad_runningActionsCount = window.obj523_onLoad_runningActionsCount - 1;

if (window.obj523_onLoad_runningActionsCount == 0) {
	obj523_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj523 
move_543();
function move_543() {
	window.obj523_onLoad_runningActionsCount = obj523_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj523");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=51";
	var moveY = "+=-133";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 800, easing, function() {
		setTimeout(function() {
			window.obj523_onLoad_runningActionsCount = window.obj523_onLoad_runningActionsCount - 1;

if (window.obj523_onLoad_runningActionsCount == 0) {
	obj523_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj523 
move_544();
function move_544() {
	window.obj523_onLoad_runningActionsCount = obj523_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj523");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=46";
	var moveY = "+=-260";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 800, easing, function() {
		setTimeout(function() {
			window.obj523_onLoad_runningActionsCount = window.obj523_onLoad_runningActionsCount - 1;

if (window.obj523_onLoad_runningActionsCount == 0) {
	obj523_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj523 
move_545();
function move_545() {
	window.obj523_onLoad_runningActionsCount = obj523_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj523");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=100";
	var moveY = "+=-656";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj523_onLoad_runningActionsCount = window.obj523_onLoad_runningActionsCount - 1;

if (window.obj523_onLoad_runningActionsCount == 0) {
	obj523_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj523_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj523_onLoad_activeActionGroupIndex = -1;
		$("#obj523").trigger("obj523_onLoad_ended");
		
		return;
	}
	window.obj523_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj523 
move_557();
function move_557() {
	window.obj523_onLoad_runningActionsCount = obj523_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj523");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = -216;
	var moveY = 927;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj523_onLoad_runningActionsCount = window.obj523_onLoad_runningActionsCount - 1;

if (window.obj523_onLoad_runningActionsCount == 0) {
	obj523_onLoad_actionGroup2();
}
		}, 1);
	});
}






































};
obj523_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj523_onLoad_activeActionGroupIndex = -1;
		$("#obj523").trigger("obj523_onLoad_ended");
		
		return;
	}
	window.obj523_onLoad_activeActionGroupIndex = 2;
	
















//	action: wait
wait_561();
function wait_561() {
	window.obj523_onLoad_runningActionsCount = obj523_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj523_onLoad_runningActionsCount = window.obj523_onLoad_runningActionsCount - 1;

if (window.obj523_onLoad_runningActionsCount == 0) {
	obj523_onLoad_actionGroup3();
}
	}, 3000);
}

























};
obj523_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj523_onLoad_activeActionGroupIndex = -1;
		$("#obj523").trigger("obj523_onLoad_ended");
		
		return;
	}
	window.obj523_onLoad_activeActionGroupIndex = 3;
	















//	action: loop
loop_obj523_onLoad();
function loop_obj523_onLoad() {

	var loopCount = 0;

	window.obj523_onLoad_loopCount = window.obj523_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj523_onLoad_loopCount > loopCount) {
		window.obj523_onLoad_loopCount = 0
		obj523_onLoad_actionGroup4();
	} else {
		obj523_onLoad_actionGroup0();
	}

}


























};
obj523_onLoad_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj523_onLoad_activeActionGroupIndex = -1;
		$("#obj523").trigger("obj523_onLoad_ended");
		
		return;
	}
	window.obj523_onLoad_activeActionGroupIndex = 4;
	










































};
obj4905_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4905_onLoad_activeActionGroupIndex = -1;
		$("#obj4905").trigger("obj4905_onLoad_ended");
		
		return;
	}
	window.obj4905_onLoad_activeActionGroupIndex = 0;
	



































//	action: run action list container
//	target: obj4384 
runActionList_4956();
function runActionList_4956() {
	window.obj4905_onLoad_runningActionsCount = obj4905_onLoad_runningActionsCount + 1;

	$("#obj4384").trigger('SCEventRun');
	setTimeout(function() {
		window.obj4905_onLoad_runningActionsCount = window.obj4905_onLoad_runningActionsCount - 1;

if (window.obj4905_onLoad_runningActionsCount == 0) {
	obj4905_onLoad_actionGroup1();
}		
	}, 1);
}






};
obj4905_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4905_onLoad_activeActionGroupIndex = -1;
		$("#obj4905").trigger("obj4905_onLoad_ended");
		
		return;
	}
	window.obj4905_onLoad_activeActionGroupIndex = 1;
	



































//	action: run action list container
//	target: obj4446 
runActionList_4957();
function runActionList_4957() {
	window.obj4905_onLoad_runningActionsCount = obj4905_onLoad_runningActionsCount + 1;

	$("#obj4446").trigger('SCEventRun');
	setTimeout(function() {
		window.obj4905_onLoad_runningActionsCount = window.obj4905_onLoad_runningActionsCount - 1;

if (window.obj4905_onLoad_runningActionsCount == 0) {
	obj4905_onLoad_actionGroup2();
}		
	}, 1);
}






};
obj4905_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4905_onLoad_activeActionGroupIndex = -1;
		$("#obj4905").trigger("obj4905_onLoad_ended");
		
		return;
	}
	window.obj4905_onLoad_activeActionGroupIndex = 2;
	



































//	action: run action list container
//	target: obj4475 
runActionList_4958();
function runActionList_4958() {
	window.obj4905_onLoad_runningActionsCount = obj4905_onLoad_runningActionsCount + 1;

	$("#obj4475").trigger('SCEventRun');
	setTimeout(function() {
		window.obj4905_onLoad_runningActionsCount = window.obj4905_onLoad_runningActionsCount - 1;

if (window.obj4905_onLoad_runningActionsCount == 0) {
	obj4905_onLoad_actionGroup3();
}		
	}, 1);
}






};
obj4905_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4905_onLoad_activeActionGroupIndex = -1;
		$("#obj4905").trigger("obj4905_onLoad_ended");
		
		return;
	}
	window.obj4905_onLoad_activeActionGroupIndex = 3;
	















//	action: loop
loop_obj4905_onLoad();
function loop_obj4905_onLoad() {

	var loopCount = 0;

	window.obj4905_onLoad_loopCount = window.obj4905_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj4905_onLoad_loopCount > loopCount) {
		window.obj4905_onLoad_loopCount = 0
		obj4905_onLoad_actionGroup4();
	} else {
		obj4905_onLoad_actionGroup0();
	}

}


























};
obj4905_onLoad_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4905_onLoad_activeActionGroupIndex = -1;
		$("#obj4905").trigger("obj4905_onLoad_ended");
		
		return;
	}
	window.obj4905_onLoad_activeActionGroupIndex = 4;
	










































};
obj4905_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4905_onTouchDown_activeActionGroupIndex = -1;
		$("#obj4905").trigger("obj4905_onTouchDown_ended");
		
		return;
	}
	window.obj4905_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj4905");

//	action: dragDrop
//	target: obj4905 
dragDrop_4954();
function dragDrop_4954() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj4905_onTouchDown_runningActionsCount = obj4905_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj4905');
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
    	window.obj4905_onTouchDown_runningActionsCount = window.obj4905_onTouchDown_runningActionsCount - 1;

if (window.obj4905_onTouchDown_runningActionsCount == 0) {
	obj4905_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array();
    	var actionsOnDrop = new Array() //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_4954 = false;
    	var dropped_id_4954;
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
					dropped_4954 = true;
					dropped_id_4954 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_4954) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			

		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}






















};
obj4905_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4905_onTouchDown_activeActionGroupIndex = -1;
		$("#obj4905").trigger("obj4905_onTouchDown_ended");
		
		return;
	}
	window.obj4905_onTouchDown_activeActionGroupIndex = 1;
	










































};
obj499_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj499_onLoad_activeActionGroupIndex = -1;
		$("#obj499").trigger("obj499_onLoad_ended");
		
		return;
	}
	window.obj499_onLoad_activeActionGroupIndex = 0;
	




//	action: playAnimation 
//	target: obj4905 
playAnimation_4965();
function playAnimation_4965() {
	var targetObjectId = "#obj4905";
	var targetObject = $(targetObjectId)[0];
	window.obj499_onLoad_runningActionsCount = obj499_onLoad_runningActionsCount + 1;

	var isAnimationInfinite = true;
	if (isAnimationInfinite) {
		window.obj499_onLoad_runningActionsCount = window.obj499_onLoad_runningActionsCount - 1;

if (window.obj499_onLoad_runningActionsCount == 0) {
	obj499_onLoad_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj4905 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj4905;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");

	setTimeout(function() {
	    api_animate_obj4905.startAnimation();
	}, 1);

	if (!isAnimationInfinite) {
		$("#obj4905").one("obj4905_animation_ended",function(event) {
		    window.obj499_onLoad_runningActionsCount = window.obj499_onLoad_runningActionsCount - 1;

if (window.obj499_onLoad_runningActionsCount == 0) {
	obj499_onLoad_actionGroup1();
}
		});
	}
 }





































};
obj499_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj499_onLoad_activeActionGroupIndex = -1;
		$("#obj499").trigger("obj499_onLoad_ended");
		
		return;
	}
	window.obj499_onLoad_activeActionGroupIndex = 1;
	










































};
obj490_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj490_onLoad_activeActionGroupIndex = -1;
		$("#obj490").trigger("obj490_onLoad_ended");
		
		return;
	}
	window.obj490_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj490 
move_493();
function move_493() {
	window.obj490_onLoad_runningActionsCount = obj490_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj490");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=40";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 800, easing, function() {
		setTimeout(function() {
			window.obj490_onLoad_runningActionsCount = window.obj490_onLoad_runningActionsCount - 1;

if (window.obj490_onLoad_runningActionsCount == 0) {
	obj490_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj490_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj490_onLoad_activeActionGroupIndex = -1;
		$("#obj490").trigger("obj490_onLoad_ended");
		
		return;
	}
	window.obj490_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj490 
move_494();
function move_494() {
	window.obj490_onLoad_runningActionsCount = obj490_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj490");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 50;
	var moveY = 48;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 800, easing, function() {
		setTimeout(function() {
			window.obj490_onLoad_runningActionsCount = window.obj490_onLoad_runningActionsCount - 1;

if (window.obj490_onLoad_runningActionsCount == 0) {
	obj490_onLoad_actionGroup2();
}
		}, 1);
	});
}






































};
obj490_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj490_onLoad_activeActionGroupIndex = -1;
		$("#obj490").trigger("obj490_onLoad_ended");
		
		return;
	}
	window.obj490_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj490_onLoad();
function loop_obj490_onLoad() {

	var loopCount = 0;

	window.obj490_onLoad_loopCount = window.obj490_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj490_onLoad_loopCount > loopCount) {
		window.obj490_onLoad_loopCount = 0
		obj490_onLoad_actionGroup3();
	} else {
		obj490_onLoad_actionGroup0();
	}

}


























};
obj490_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj490_onLoad_activeActionGroupIndex = -1;
		$("#obj490").trigger("obj490_onLoad_ended");
		
		return;
	}
	window.obj490_onLoad_activeActionGroupIndex = 3;
	










































};
obj4384_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4384_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4384").trigger("obj4384_SCEventRun_ended");
		
		return;
	}
	window.obj4384_SCEventRun_activeActionGroupIndex = 0;
	





























//	action: Run JavaScript
runjs_4386();
function runjs_4386() {
	window.obj4384_SCEventRun_runningActionsCount = obj4384_SCEventRun_runningActionsCount + 1;


	var speed = 2;
var panic = 2;
//get zep location
var zep = {
    left: parseInt($("#obj4905").css("left").slice(0, -2)),
    top: parseInt($("#obj4905").css("top").slice(0, -2)),
    width: parseInt($("#obj4905").css("width").slice(0, -2)),
    height: parseInt($("#obj4905").css("height").slice(0, -2))
};
//get fish location
var fish = {
    left: parseInt($("#obj529").css("left").slice(0, -2)),
    top: parseInt($("#obj529").css("top").slice(0, -2)),
    width: parseInt($("#obj529").css("width").slice(0, -2)),
    height: parseInt($("#obj529").css("height").slice(0, -2))
};
//if fish is near in zep increase x by speed
if(fish.left < zep.left + zep.width && fish.left + fish.width > zep.left)
{
    if(fish.top < zep.top + zep.height && fish.top + fish.height > zep.top)
    {
        //else if fish move down
        if(zep.top < fish.top + (fish.width / 2))
        {
            //console.log("fish will move down");
            var fishDown = fish.top + (speed * panic);
            $("#obj529").css("top", fishDown.toString() + "px");
            localStorage.setItem("dir", 1);
        }
        //else if fish move up
        else
        {
            //console.log("fish will move up");
            var fishUp = fish.top - (speed * panic);
            $("#obj529").css("top", fishUp.toString() + "px");
            localStorage.setItem("dir", -1);
        }
        localStorage.setItem("dirTim", "0");
    }
    else
    {
        moveNormal();
    }
}
else
{
    moveNormal();
}
function moveNormal()
{
    if(fish.left > parseInt($("#obj486").css("width").slice(0, -2)))
    {
        //console.log("I am out of bounds i need to be reset");
        $("#obj529").css("left", "-136px");
        if(fish.top < 0 || fish.top > parseInt($("#obj486").css("height").slice(0,-2)))
        {
            $("#obj529").css("top", "389px");
            var temp = parseInt($("#obj486").css("width").slice(0,-2)) + fish.width + 15;
            $("#obj527").css("left", temp.toString() + "px");
            $("#obj525").css("left", temp.toString() + "px");
            $("#obj521").css("left", temp.toString() + "px");
        }
        localStorage.setItem("dirTim", "0");
    }
    else
    {
        //width movement
        var newLoc = fish.left + speed;
        $("#obj529").css("left", newLoc.toString() + "px");
        
        //height movement
        if(localStorage.getItem("dirTim") === "45")
        {
            localStorage.setItem("dirTim", "0");
            heightDir();
        }
        var temp = parseInt(localStorage.getItem("dirTim")) + 1;
        localStorage.setItem("dirTim", temp.toString());
        
        var dir = parseInt(localStorage.getItem("dir"));
        var newTop = fish.top + (speed * dir);
        $("#obj529").css("top", newTop.toString() + "px");
    }
}
function heightDir()
{
    var ran;
    if(Math.floor(Math.random() * 2) === 1)
    {
        ran = "-1";
    }
    else
    {
        ran = "1";
    }
    localStorage.setItem("dir", ran);
}

	setTimeout(function() {
		window.obj4384_SCEventRun_runningActionsCount = window.obj4384_SCEventRun_runningActionsCount - 1;

if (window.obj4384_SCEventRun_runningActionsCount == 0) {
	obj4384_SCEventRun_actionGroup1();
}
	}, 1);
}












};
obj4384_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4384_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4384").trigger("obj4384_SCEventRun_ended");
		
		return;
	}
	window.obj4384_SCEventRun_activeActionGroupIndex = 1;
	










































};
obj4446_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4446_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4446").trigger("obj4446_SCEventRun_ended");
		
		return;
	}
	window.obj4446_SCEventRun_activeActionGroupIndex = 0;
	





























//	action: Run JavaScript
runjs_4449();
function runjs_4449() {
	window.obj4446_SCEventRun_runningActionsCount = obj4446_SCEventRun_runningActionsCount + 1;


	var speed = 2;
var panic = 2;
var fishDefaults = {
    greenX: "-116px",
    yellowX: "-296px",
    pinkX: "-192px"
};
var fishSpeeds = {
    green: 4,
    yellow: 3,
    pink: 1
};
//get fish location
var fish = {
    left: parseInt($("#obj529").css("left").slice(0, -2)),
    top: parseInt($("#obj529").css("top").slice(0, -2)),
    width: parseInt($("#obj529").css("width").slice(0, -2)),
    height: parseInt($("#obj529").css("height").slice(0, -2))
};
moveNormal("green");
moveNormal("yellow");
moveNormal("pink");
function moveNormal(color)
{
    var self;
    switch(color)
        {
            case "green":
                self = $("#obj527");
                break;
            case "yellow":
                self = $("#obj525");
                break;
            case "pink": //pink
                self = $("#obj521");
                break;
        }
        
    if(parseInt(self.css("left").slice(0, -2)) > parseInt($("#obj486").css("width").slice(0, -2)))
    {
        //console.log("I am out of bounds i need to be reset");
        switch(color)
        {
            case "green": //green
                self.css("left", fishDefaults.greenX);
                self.css("top", fish.top.toString() + "px");
                break;
            case "yellow": //yellow
                self.css("left", fishDefaults.yellowX);
                self.css("top", fish.top.toString() + "px");
                break;
            case "pink": //pink
                self.css("left", fishDefaults.pinkX);
                self.css("top", fish.top.toString() + "px");
                break;
        }
    }
    else
    {
        //width movement
        var newLoc;
        switch(color)
        {
            case "green": //green
                newLoc = parseInt(self.css("left").slice(0, -2)) + fishSpeeds.green;
                self.css("left", newLoc.toString() + "px");
                break;
            case "yellow": //yellow
                newLoc = parseInt(self.css("left").slice(0, -2)) + fishSpeeds.yellow;
                self.css("left", newLoc.toString() + "px");
                break;
            case "pink": //pink
                newLoc = parseInt(self.css("left").slice(0, -2)) + fishSpeeds.pink;
                self.css("left", newLoc.toString() + "px");
                break;
        }
        
        //height movement
        self.css("top", fish.top.toString() + "px");
    }
}

	setTimeout(function() {
		window.obj4446_SCEventRun_runningActionsCount = window.obj4446_SCEventRun_runningActionsCount - 1;

if (window.obj4446_SCEventRun_runningActionsCount == 0) {
	obj4446_SCEventRun_actionGroup1();
}
	}, 1);
}












};
obj4446_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4446_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4446").trigger("obj4446_SCEventRun_ended");
		
		return;
	}
	window.obj4446_SCEventRun_activeActionGroupIndex = 1;
	










































};
obj4475_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4475_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4475").trigger("obj4475_SCEventRun_ended");
		
		return;
	}
	window.obj4475_SCEventRun_activeActionGroupIndex = 0;
	





























//	action: Run JavaScript
runjs_4477();
function runjs_4477() {
	window.obj4475_SCEventRun_runningActionsCount = obj4475_SCEventRun_runningActionsCount + 1;


	var defX = 640;
var defY = 351;
var zLeft = parseInt($("#obj4905").css("left").slice(0, -2));
var zTop = parseInt($("#obj4905").css("top").slice(0, -2));
if(zLeft !== defX || zTop !== defY)
    {
        $("#obj4478").trigger(PubCoder.Events.Run);
    }

	setTimeout(function() {
		window.obj4475_SCEventRun_runningActionsCount = window.obj4475_SCEventRun_runningActionsCount - 1;

if (window.obj4475_SCEventRun_runningActionsCount == 0) {
	obj4475_SCEventRun_actionGroup1();
}
	}, 1);
}












};
obj4475_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4475_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4475").trigger("obj4475_SCEventRun_ended");
		
		return;
	}
	window.obj4475_SCEventRun_activeActionGroupIndex = 1;
	










































};
obj4478_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4478_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4478").trigger("obj4478_SCEventRun_ended");
		
		return;
	}
	window.obj4478_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj4612 
hide_4614();
function hide_4614() {
	var element = "#obj4612";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4478_SCEventRun_runningActionsCount = obj4478_SCEventRun_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj4478_SCEventRun_runningActionsCount = window.obj4478_SCEventRun_runningActionsCount - 1;

if (window.obj4478_SCEventRun_runningActionsCount == 0) {
	obj4478_SCEventRun_actionGroup1();
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
		setTimeout(hide_4614(), 100);
		return;
	}

	setTimeout(function() {
		$(element).css("display", "none");
		window.obj4478_SCEventRun_runningActionsCount = window.obj4478_SCEventRun_runningActionsCount - 1;

if (window.obj4478_SCEventRun_runningActionsCount == 0) {
	obj4478_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)

}








































};
obj4478_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4478_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4478").trigger("obj4478_SCEventRun_ended");
		
		return;
	}
	window.obj4478_SCEventRun_activeActionGroupIndex = 1;
	


//	action: show 
//	target: obj497 
(function(){
	window.obj4478_SCEventRun_runningActionsCount = obj4478_SCEventRun_runningActionsCount + 1;


	var element = "#obj497";
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
				window.obj4478_SCEventRun_runningActionsCount = window.obj4478_SCEventRun_runningActionsCount - 1;

if (window.obj4478_SCEventRun_runningActionsCount == 0) {
	obj4478_SCEventRun_actionGroup2();
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
			window.obj4478_SCEventRun_runningActionsCount = window.obj4478_SCEventRun_runningActionsCount - 1;

if (window.obj4478_SCEventRun_runningActionsCount == 0) {
	obj4478_SCEventRun_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj499 
(function(){
	window.obj4478_SCEventRun_runningActionsCount = obj4478_SCEventRun_runningActionsCount + 1;


	var element = "#obj499";
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
				window.obj4478_SCEventRun_runningActionsCount = window.obj4478_SCEventRun_runningActionsCount - 1;

if (window.obj4478_SCEventRun_runningActionsCount == 0) {
	obj4478_SCEventRun_actionGroup2();
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
			window.obj4478_SCEventRun_runningActionsCount = window.obj4478_SCEventRun_runningActionsCount - 1;

if (window.obj4478_SCEventRun_runningActionsCount == 0) {
	obj4478_SCEventRun_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj501 
(function(){
	window.obj4478_SCEventRun_runningActionsCount = obj4478_SCEventRun_runningActionsCount + 1;


	var element = "#obj501";
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
				window.obj4478_SCEventRun_runningActionsCount = window.obj4478_SCEventRun_runningActionsCount - 1;

if (window.obj4478_SCEventRun_runningActionsCount == 0) {
	obj4478_SCEventRun_actionGroup2();
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
			window.obj4478_SCEventRun_runningActionsCount = window.obj4478_SCEventRun_runningActionsCount - 1;

if (window.obj4478_SCEventRun_runningActionsCount == 0) {
	obj4478_SCEventRun_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();









//	action: playAudioFile
playAudioFile_5595();
function playAudioFile_5595() {
	window.obj4478_SCEventRun_runningActionsCount = obj4478_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5595")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5595");
			$("#obj_audio_playSoundFile5595").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4478_SCEventRun_runningActionsCount = window.obj4478_SCEventRun_runningActionsCount - 1;

if (window.obj4478_SCEventRun_runningActionsCount == 0) {
	obj4478_SCEventRun_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4478_SCEventRun_runningActionsCount = window.obj4478_SCEventRun_runningActionsCount - 1;

if (window.obj4478_SCEventRun_runningActionsCount == 0) {
	obj4478_SCEventRun_actionGroup2();
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
				window.obj4478_SCEventRun_runningActionsCount = window.obj4478_SCEventRun_runningActionsCount - 1;

if (window.obj4478_SCEventRun_runningActionsCount == 0) {
	obj4478_SCEventRun_actionGroup2();
}
			}, false);
		} else {
			window.obj4478_SCEventRun_runningActionsCount = window.obj4478_SCEventRun_runningActionsCount - 1;

if (window.obj4478_SCEventRun_runningActionsCount == 0) {
	obj4478_SCEventRun_actionGroup2();
}
		}
	}

	
	
	
}




































};
obj4478_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4478_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4478").trigger("obj4478_SCEventRun_ended");
		
		return;
	}
	window.obj4478_SCEventRun_activeActionGroupIndex = 2;
	










































};
obj4612_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4612_onLoad_activeActionGroupIndex = -1;
		$("#obj4612").trigger("obj4612_onLoad_ended");
		
		return;
	}
	window.obj4612_onLoad_activeActionGroupIndex = 0;
	


//	action: show 
//	target: obj4612 
(function(){
	window.obj4612_onLoad_runningActionsCount = obj4612_onLoad_runningActionsCount + 1;


	var element = "#obj4612";
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
				window.obj4612_onLoad_runningActionsCount = window.obj4612_onLoad_runningActionsCount - 1;

if (window.obj4612_onLoad_runningActionsCount == 0) {
	obj4612_onLoad_actionGroup1();
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
			window.obj4612_onLoad_runningActionsCount = window.obj4612_onLoad_runningActionsCount - 1;

if (window.obj4612_onLoad_runningActionsCount == 0) {
	obj4612_onLoad_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();







































};
obj4612_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4612_onLoad_activeActionGroupIndex = -1;
		$("#obj4612").trigger("obj4612_onLoad_ended");
		
		return;
	}
	window.obj4612_onLoad_activeActionGroupIndex = 1;
	










































};
obj4612_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4612_onShow_activeActionGroupIndex = -1;
		$("#obj4612").trigger("obj4612_onShow_ended");
		
		return;
	}
	window.obj4612_onShow_activeActionGroupIndex = 0;
	
















//	action: wait
wait_4623();
function wait_4623() {
	window.obj4612_onShow_runningActionsCount = obj4612_onShow_runningActionsCount + 1;

	setTimeout(function() {
		window.obj4612_onShow_runningActionsCount = window.obj4612_onShow_runningActionsCount - 1;

if (window.obj4612_onShow_runningActionsCount == 0) {
	obj4612_onShow_actionGroup1();
}
	}, 1000);
}

























};
obj4612_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4612_onShow_activeActionGroupIndex = -1;
		$("#obj4612").trigger("obj4612_onShow_ended");
		
		return;
	}
	window.obj4612_onShow_activeActionGroupIndex = 1;
	


















//	action: scale
//	target: obj4612 
scale_4624();
function scale_4624() {
	window.obj4612_onShow_runningActionsCount = obj4612_onShow_runningActionsCount + 1;

	
	var targetObjectId = "#obj4612";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj4612';
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
		scale_4624_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4624_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4624_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_4624_completed() {
	setTimeout(function() {
		window.obj4612_onShow_runningActionsCount = window.obj4612_onShow_runningActionsCount - 1;

if (window.obj4612_onShow_runningActionsCount == 0) {
	obj4612_onShow_actionGroup2();
}
	}, 1);
}
























};
obj4612_onShow_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4612_onShow_activeActionGroupIndex = -1;
		$("#obj4612").trigger("obj4612_onShow_ended");
		
		return;
	}
	window.obj4612_onShow_activeActionGroupIndex = 2;
	



//	action: move
//	target: obj4612 
move_4625();
function move_4625() {
	window.obj4612_onShow_runningActionsCount = obj4612_onShow_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj4612");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-424";
	var moveY = "+=162";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1500, easing, function() {
		setTimeout(function() {
			window.obj4612_onShow_runningActionsCount = window.obj4612_onShow_runningActionsCount - 1;

if (window.obj4612_onShow_runningActionsCount == 0) {
	obj4612_onShow_actionGroup3();
}
		}, 1);
	});
}






































};
obj4612_onShow_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4612_onShow_activeActionGroupIndex = -1;
		$("#obj4612").trigger("obj4612_onShow_ended");
		
		return;
	}
	window.obj4612_onShow_activeActionGroupIndex = 3;
	


















//	action: scale
//	target: obj4612 
scale_4626();
function scale_4626() {
	window.obj4612_onShow_runningActionsCount = obj4612_onShow_runningActionsCount + 1;

	
	var targetObjectId = "#obj4612";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj4612';
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
		scale_4626_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4626_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4626_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_4626_completed() {
	setTimeout(function() {
		window.obj4612_onShow_runningActionsCount = window.obj4612_onShow_runningActionsCount - 1;

if (window.obj4612_onShow_runningActionsCount == 0) {
	obj4612_onShow_actionGroup4();
}
	}, 1);
}
























};
obj4612_onShow_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4612_onShow_activeActionGroupIndex = -1;
		$("#obj4612").trigger("obj4612_onShow_ended");
		
		return;
	}
	window.obj4612_onShow_activeActionGroupIndex = 4;
	
















//	action: wait
wait_4631();
function wait_4631() {
	window.obj4612_onShow_runningActionsCount = obj4612_onShow_runningActionsCount + 1;

	setTimeout(function() {
		window.obj4612_onShow_runningActionsCount = window.obj4612_onShow_runningActionsCount - 1;

if (window.obj4612_onShow_runningActionsCount == 0) {
	obj4612_onShow_actionGroup5();
}
	}, 1000);
}

























};
obj4612_onShow_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4612_onShow_activeActionGroupIndex = -1;
		$("#obj4612").trigger("obj4612_onShow_ended");
		
		return;
	}
	window.obj4612_onShow_activeActionGroupIndex = 5;
	



//	action: move
//	target: obj4612 
move_4627();
function move_4627() {
	window.obj4612_onShow_runningActionsCount = obj4612_onShow_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj4612");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 825;
	var moveY = 458;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1500, easing, function() {
		setTimeout(function() {
			window.obj4612_onShow_runningActionsCount = window.obj4612_onShow_runningActionsCount - 1;

if (window.obj4612_onShow_runningActionsCount == 0) {
	obj4612_onShow_actionGroup6();
}
		}, 1);
	});
}






































};
obj4612_onShow_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4612_onShow_activeActionGroupIndex = -1;
		$("#obj4612").trigger("obj4612_onShow_ended");
		
		return;
	}
	window.obj4612_onShow_activeActionGroupIndex = 6;
	















//	action: loop
loop_obj4612_onShow();
function loop_obj4612_onShow() {

	var loopCount = 0;

	window.obj4612_onShow_loopCount = window.obj4612_onShow_loopCount + 1;
	if (loopCount != 0 && window.obj4612_onShow_loopCount > loopCount) {
		window.obj4612_onShow_loopCount = 0
		obj4612_onShow_actionGroup7();
	} else {
		obj4612_onShow_actionGroup0();
	}

}


























};
obj4612_onShow_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4612_onShow_activeActionGroupIndex = -1;
		$("#obj4612").trigger("obj4612_onShow_ended");
		
		return;
	}
	window.obj4612_onShow_activeActionGroupIndex = 7;
	










































};
obj5422_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5422_onLoad_activeActionGroupIndex = -1;
		$("#obj5422").trigger("obj5422_onLoad_ended");
		
		return;
	}
	window.obj5422_onLoad_activeActionGroupIndex = 0;
	
























//	action: playAudio
//	target: obj5422 
playAudio_5424();
function playAudio_5424() {
	window.obj5422_onLoad_runningActionsCount = obj5422_onLoad_runningActionsCount + 1;

	var myAudio = $("#obj5422")[0];
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
		    window.obj5422_onLoad_runningActionsCount = window.obj5422_onLoad_runningActionsCount - 1;

if (window.obj5422_onLoad_runningActionsCount == 0) {
	obj5422_onLoad_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj5422_onLoad_runningActionsCount = window.obj5422_onLoad_runningActionsCount - 1;

if (window.obj5422_onLoad_runningActionsCount == 0) {
	obj5422_onLoad_actionGroup1();
}
	}
}

















};
obj5422_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5422_onLoad_activeActionGroupIndex = -1;
		$("#obj5422").trigger("obj5422_onLoad_ended");
		
		return;
	}
	window.obj5422_onLoad_activeActionGroupIndex = 1;
	










































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		
























/*
 *
 *   obj536: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj536_onLoad_activeActionGroupIndex != -1) return;
var obj536_onLoad_runningActionsCount = 0;
var obj536_onLoad_loopCount = 0;
obj536_onLoad_actionGroup0();
});














/*
 *
 *   obj4503: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj4503_onLoad_activeActionGroupIndex != -1) return;
var obj4503_onLoad_runningActionsCount = 0;
var obj4503_onLoad_loopCount = 0;
obj4503_onLoad_actionGroup0();
});














/*
 *
 *   obj4515: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj4515_onLoad_activeActionGroupIndex != -1) return;
var obj4515_onLoad_runningActionsCount = 0;
var obj4515_onLoad_loopCount = 0;
obj4515_onLoad_actionGroup0();
});














/*
 *
 *   obj4530: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj4530_onLoad_activeActionGroupIndex != -1) return;
var obj4530_onLoad_runningActionsCount = 0;
var obj4530_onLoad_loopCount = 0;
obj4530_onLoad_actionGroup0();
});














/*
 *
 *   obj4543: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj4543_onLoad_activeActionGroupIndex != -1) return;
var obj4543_onLoad_runningActionsCount = 0;
var obj4543_onLoad_loopCount = 0;
obj4543_onLoad_actionGroup0();
});














/*
 *
 *   obj4594: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj4594_onLoad_activeActionGroupIndex != -1) return;
var obj4594_onLoad_runningActionsCount = 0;
var obj4594_onLoad_loopCount = 0;
obj4594_onLoad_actionGroup0();
});














/*
 *
 *   obj4582: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj4582_onLoad_activeActionGroupIndex != -1) return;
var obj4582_onLoad_runningActionsCount = 0;
var obj4582_onLoad_loopCount = 0;
obj4582_onLoad_actionGroup0();
});














/*
 *
 *   obj4568: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj4568_onLoad_activeActionGroupIndex != -1) return;
var obj4568_onLoad_runningActionsCount = 0;
var obj4568_onLoad_loopCount = 0;
obj4568_onLoad_actionGroup0();
});














/*
 *
 *   obj4556: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj4556_onLoad_activeActionGroupIndex != -1) return;
var obj4556_onLoad_runningActionsCount = 0;
var obj4556_onLoad_loopCount = 0;
obj4556_onLoad_actionGroup0();
});














/*
 *
 *   obj523: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj523_onLoad_activeActionGroupIndex != -1) return;
var obj523_onLoad_runningActionsCount = 0;
var obj523_onLoad_loopCount = 0;
obj523_onLoad_actionGroup0();
});












/*
 *
 *   obj4905: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj4905");
	var winTarget = document.getElementById("obj4905");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj4905").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj4905_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj4905_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj4905_onTouchDown_activeActionGroupIndex != -1) return;
var obj4905_onTouchDown_runningActionsCount = 0;
var obj4905_onTouchDown_loopCount = 0;
obj4905_onTouchDown_actionGroup0();
});

/*
 *
 *   obj4905: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj4905_onLoad_activeActionGroupIndex != -1) return;
var obj4905_onLoad_runningActionsCount = 0;
var obj4905_onLoad_loopCount = 0;
obj4905_onLoad_actionGroup0();
});














/*
 *
 *   obj499: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj499_onLoad_activeActionGroupIndex != -1) return;
var obj499_onLoad_runningActionsCount = 0;
var obj499_onLoad_loopCount = 0;
obj499_onLoad_actionGroup0();
});








































































































/*
 *
 *   obj490: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj490_onLoad_activeActionGroupIndex != -1) return;
var obj490_onLoad_runningActionsCount = 0;
var obj490_onLoad_loopCount = 0;
obj490_onLoad_actionGroup0();
});



















/*
 *
 *   obj4384: Event SCEventRun
 *
 */

$("#obj4384").bind("SCEventRun", function(event) {
	if (window.obj4384_SCEventRun_activeActionGroupIndex != -1) return;
var obj4384_SCEventRun_runningActionsCount = 0;
var obj4384_SCEventRun_loopCount = 0;
obj4384_SCEventRun_actionGroup0();
});














/*
 *
 *   obj4446: Event SCEventRun
 *
 */

$("#obj4446").bind("SCEventRun", function(event) {
	if (window.obj4446_SCEventRun_activeActionGroupIndex != -1) return;
var obj4446_SCEventRun_runningActionsCount = 0;
var obj4446_SCEventRun_loopCount = 0;
obj4446_SCEventRun_actionGroup0();
});














/*
 *
 *   obj4475: Event SCEventRun
 *
 */

$("#obj4475").bind("SCEventRun", function(event) {
	if (window.obj4475_SCEventRun_activeActionGroupIndex != -1) return;
var obj4475_SCEventRun_runningActionsCount = 0;
var obj4475_SCEventRun_loopCount = 0;
obj4475_SCEventRun_actionGroup0();
});














/*
 *
 *   obj4478: Event SCEventRun
 *
 */

$("#obj4478").one("SCEventRun", function(event) {
	if (window.obj4478_SCEventRun_activeActionGroupIndex != -1) return;
var obj4478_SCEventRun_runningActionsCount = 0;
var obj4478_SCEventRun_loopCount = 0;
obj4478_SCEventRun_actionGroup0();
});








/*
 *
 *   obj4612: Event Show
 *
 */
 
$("#obj4612").bind('SCEventShow', function(event) {
	if (window.obj4612_onShow_activeActionGroupIndex != -1) return;
var obj4612_onShow_runningActionsCount = 0;
var obj4612_onShow_loopCount = 0;
obj4612_onShow_actionGroup0();
});
/*
 *
 *   obj4612: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj4612_onLoad_activeActionGroupIndex != -1) return;
var obj4612_onLoad_runningActionsCount = 0;
var obj4612_onLoad_loopCount = 0;
obj4612_onLoad_actionGroup0();
});














/*
 *
 *   obj5422: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj5422_onLoad_activeActionGroupIndex != -1) return;
var obj5422_onLoad_runningActionsCount = 0;
var obj5422_onLoad_loopCount = 0;
obj5422_onLoad_actionGroup0();
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
	
$("#obj486").trigger('SCEventShow');
$("#obj536").trigger('SCEventShow');
$("#obj4503").trigger('SCEventShow');
$("#obj4515").trigger('SCEventShow');
$("#obj4530").trigger('SCEventShow');
$("#obj4543").trigger('SCEventShow');
$("#obj4594").trigger('SCEventShow');
$("#obj4582").trigger('SCEventShow');
$("#obj4568").trigger('SCEventShow');
$("#obj4556").trigger('SCEventShow');
$("#obj523").trigger('SCEventShow');
$("#obj4905").trigger('SCEventShow');
$("#obj521").trigger('SCEventShow');
$("#obj525").trigger('SCEventShow');
$("#obj527").trigger('SCEventShow');
$("#obj529").trigger('SCEventShow');
$("#obj490").trigger('SCEventShow');
$("#obj4612").trigger('SCEventShow');
$("#obj5422").trigger('SCEventShow');
	localStorage.setItem('tapped','0');
localStorage.setItem('ready','true');
localStorage.setItem("animating", "false");
localStorage.setItem("following", "false");
localStorage.setItem("fDoneAnim", "3");
localStorage.setItem("outOfBounds", "false");
localStorage.setItem("resetL", $("#obj529").css("left"));
localStorage.setItem("resetT", $("#obj529").css("top"));
localStorage.setItem("dir", "0");
localStorage.setItem("dirTim", "0");
localStorage.setItem("fDir", "0");
localStorage.setItem("bDir", "1");
});