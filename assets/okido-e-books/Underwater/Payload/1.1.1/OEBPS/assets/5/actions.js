pubcoder.projectID = pubcoder.projectID || "968537061CD4A6469E16DEA662F0DD9C";
pubcoder.project.id = pubcoder.project.id || "968537061CD4A6469E16DEA662F0DD9C";
pubcoder.project.title = pubcoder.project.title || "MGTO Underwater Story";
pubcoder.page.id = pubcoder.page.id || 707;
pubcoder.page.title = pubcoder.page.title || "5";
pubcoder.page.number = pubcoder.page.number || 5;
pubcoder.page.alias = pubcoder.page.alias || "";


var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;

var obj708_animation_count = 0;

/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj749_onTap_activeActionGroupIndex = -1;
var obj749_onTap_runningActionsCount = 0;
var obj749_onTap_loopCount = 0;
var obj749_onLoad_activeActionGroupIndex = -1;
var obj749_onLoad_runningActionsCount = 0;
var obj749_onLoad_loopCount = 0;
var obj3626_onLoad_activeActionGroupIndex = -1;
var obj3626_onLoad_runningActionsCount = 0;
var obj3626_onLoad_loopCount = 0;
var obj3614_onLoad_activeActionGroupIndex = -1;
var obj3614_onLoad_runningActionsCount = 0;
var obj3614_onLoad_loopCount = 0;
var obj3600_onLoad_activeActionGroupIndex = -1;
var obj3600_onLoad_runningActionsCount = 0;
var obj3600_onLoad_loopCount = 0;
var obj3588_onLoad_activeActionGroupIndex = -1;
var obj3588_onLoad_runningActionsCount = 0;
var obj3588_onLoad_loopCount = 0;
var obj3573_onLoad_activeActionGroupIndex = -1;
var obj3573_onLoad_runningActionsCount = 0;
var obj3573_onLoad_loopCount = 0;
var obj3561_onLoad_activeActionGroupIndex = -1;
var obj3561_onLoad_runningActionsCount = 0;
var obj3561_onLoad_loopCount = 0;
var obj3547_onLoad_activeActionGroupIndex = -1;
var obj3547_onLoad_runningActionsCount = 0;
var obj3547_onLoad_loopCount = 0;
var obj3535_onLoad_activeActionGroupIndex = -1;
var obj3535_onLoad_runningActionsCount = 0;
var obj3535_onLoad_loopCount = 0;
var obj3765_onLoad_activeActionGroupIndex = -1;
var obj3765_onLoad_runningActionsCount = 0;
var obj3765_onLoad_loopCount = 0;
var obj3753_onLoad_activeActionGroupIndex = -1;
var obj3753_onLoad_runningActionsCount = 0;
var obj3753_onLoad_loopCount = 0;
var obj3739_onLoad_activeActionGroupIndex = -1;
var obj3739_onLoad_runningActionsCount = 0;
var obj3739_onLoad_loopCount = 0;
var obj3727_onLoad_activeActionGroupIndex = -1;
var obj3727_onLoad_runningActionsCount = 0;
var obj3727_onLoad_loopCount = 0;
var obj3712_onLoad_activeActionGroupIndex = -1;
var obj3712_onLoad_runningActionsCount = 0;
var obj3712_onLoad_loopCount = 0;
var obj3700_onLoad_activeActionGroupIndex = -1;
var obj3700_onLoad_runningActionsCount = 0;
var obj3700_onLoad_loopCount = 0;
var obj3686_onLoad_activeActionGroupIndex = -1;
var obj3686_onLoad_runningActionsCount = 0;
var obj3686_onLoad_loopCount = 0;
var obj3674_onLoad_activeActionGroupIndex = -1;
var obj3674_onLoad_runningActionsCount = 0;
var obj3674_onLoad_loopCount = 0;
var obj3786_onLoad_activeActionGroupIndex = -1;
var obj3786_onLoad_runningActionsCount = 0;
var obj3786_onLoad_loopCount = 0;
var obj3798_onLoad_activeActionGroupIndex = -1;
var obj3798_onLoad_runningActionsCount = 0;
var obj3798_onLoad_loopCount = 0;
var obj3811_onLoad_activeActionGroupIndex = -1;
var obj3811_onLoad_runningActionsCount = 0;
var obj3811_onLoad_loopCount = 0;
var obj3823_onLoad_activeActionGroupIndex = -1;
var obj3823_onLoad_runningActionsCount = 0;
var obj3823_onLoad_loopCount = 0;
var obj3835_onLoad_activeActionGroupIndex = -1;
var obj3835_onLoad_runningActionsCount = 0;
var obj3835_onLoad_loopCount = 0;
var obj734_onLoad_activeActionGroupIndex = -1;
var obj734_onLoad_runningActionsCount = 0;
var obj734_onLoad_loopCount = 0;
var obj753_SCEventRun_activeActionGroupIndex = -1;
var obj753_SCEventRun_runningActionsCount = 0;
var obj753_SCEventRun_loopCount = 0;
var obj758_SCEventRun_activeActionGroupIndex = -1;
var obj758_SCEventRun_runningActionsCount = 0;
var obj758_SCEventRun_loopCount = 0;
var obj708_onLoad_activeActionGroupIndex = -1;
var obj708_onLoad_runningActionsCount = 0;
var obj708_onLoad_loopCount = 0;
var obj2885_onTap_activeActionGroupIndex = -1;
var obj2885_onTap_runningActionsCount = 0;
var obj2885_onTap_loopCount = 0;
var obj2918_SCEventRun_activeActionGroupIndex = -1;
var obj2918_SCEventRun_runningActionsCount = 0;
var obj2918_SCEventRun_loopCount = 0;
var obj3490_SCEventRun_activeActionGroupIndex = -1;
var obj3490_SCEventRun_runningActionsCount = 0;
var obj3490_SCEventRun_loopCount = 0;
var obj3883_onLoad_activeActionGroupIndex = -1;
var obj3883_onLoad_runningActionsCount = 0;
var obj3883_onLoad_loopCount = 0;
var obj3895_SCEventRun_activeActionGroupIndex = -1;
var obj3895_SCEventRun_runningActionsCount = 0;
var obj3895_SCEventRun_loopCount = 0;
var obj3962_onTap_activeActionGroupIndex = -1;
var obj3962_onTap_runningActionsCount = 0;
var obj3962_onTap_loopCount = 0;
var obj3962_onLoad_activeActionGroupIndex = -1;
var obj3962_onLoad_runningActionsCount = 0;
var obj3962_onLoad_loopCount = 0;
var obj3945_onTap_activeActionGroupIndex = -1;
var obj3945_onTap_runningActionsCount = 0;
var obj3945_onTap_loopCount = 0;
var obj3945_onLoad_activeActionGroupIndex = -1;
var obj3945_onLoad_runningActionsCount = 0;
var obj3945_onLoad_loopCount = 0;
var obj4782_SCEventRun_activeActionGroupIndex = -1;
var obj4782_SCEventRun_runningActionsCount = 0;
var obj4782_SCEventRun_loopCount = 0;
var obj5425_onLoad_activeActionGroupIndex = -1;
var obj5425_onLoad_runningActionsCount = 0;
var obj5425_onLoad_loopCount = 0;

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
	
initAnimation_708();
function initAnimation_708()
{
        var targetObjectId = "#obj708";
        var widthSCAnimationObject = 620;
        var heightSCAnimationObject = 486;
		var framesPerSecond = 12;
		var howManyLoops = 1;
		var backToFirstFrame = false;
        var isAnimationInfinite = false;
        window.audio_animation_obj708 = $("#")[0];
        window.hasAudioTrack_obj708 = false

 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj708_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj708 = $(targetObjectId).spritespin("api");
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
		
obj749_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj749_onTap_activeActionGroupIndex = -1;
		$("#obj749").trigger("obj749_onTap_ended");
		
		return;
	}
	window.obj749_onTap_activeActionGroupIndex = 0;
	





























//	action: Run JavaScript
runjs_752();
function runjs_752() {
	window.obj749_onTap_runningActionsCount = obj749_onTap_runningActionsCount + 1;


	if(localStorage.getItem("ready") === "true")
{
    if(localStorage.getItem("tapped") === "0")
    {
        $("#obj753").trigger(PubCoder.Events.Run);
        localStorage.setItem("tapped","1");
    }
    else if(localStorage.getItem("tapped") === "1")
    {
        localStorage.setItem("tapped","2");
        $("#obj758").trigger(PubCoder.Events.Run);
    }
}

	setTimeout(function() {
		window.obj749_onTap_runningActionsCount = window.obj749_onTap_runningActionsCount - 1;

if (window.obj749_onTap_runningActionsCount == 0) {
	obj749_onTap_actionGroup1();
}
	}, 1);
}












};
obj749_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj749_onTap_activeActionGroupIndex = -1;
		$("#obj749").trigger("obj749_onTap_ended");
		
		return;
	}
	window.obj749_onTap_activeActionGroupIndex = 1;
	










































};
obj749_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj749_onLoad_activeActionGroupIndex = -1;
		$("#obj749").trigger("obj749_onLoad_ended");
		
		return;
	}
	window.obj749_onLoad_activeActionGroupIndex = 0;
	
















//	action: wait
wait_4792();
function wait_4792() {
	window.obj749_onLoad_runningActionsCount = obj749_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj749_onLoad_runningActionsCount = window.obj749_onLoad_runningActionsCount - 1;

if (window.obj749_onLoad_runningActionsCount == 0) {
	obj749_onLoad_actionGroup1();
}
	}, 4000);
}

























};
obj749_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj749_onLoad_activeActionGroupIndex = -1;
		$("#obj749").trigger("obj749_onLoad_ended");
		
		return;
	}
	window.obj749_onLoad_activeActionGroupIndex = 1;
	





























//	action: Run JavaScript
runjs_4791();
function runjs_4791() {
	window.obj749_onLoad_runningActionsCount = obj749_onLoad_runningActionsCount + 1;


	if(localStorage.getItem("tapped") === "2")
{
    $("#obj4780").fadeIn(1000);
    $("#obj4782").trigger(PubCoder.Events.Run);
}

	setTimeout(function() {
		window.obj749_onLoad_runningActionsCount = window.obj749_onLoad_runningActionsCount - 1;

if (window.obj749_onLoad_runningActionsCount == 0) {
	obj749_onLoad_actionGroup2();
}
	}, 1);
}












};
obj749_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj749_onLoad_activeActionGroupIndex = -1;
		$("#obj749").trigger("obj749_onLoad_ended");
		
		return;
	}
	window.obj749_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj749_onLoad();
function loop_obj749_onLoad() {

	var loopCount = 0;

	window.obj749_onLoad_loopCount = window.obj749_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj749_onLoad_loopCount > loopCount) {
		window.obj749_onLoad_loopCount = 0
		obj749_onLoad_actionGroup3();
	} else {
		obj749_onLoad_actionGroup0();
	}

}


























};
obj749_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj749_onLoad_activeActionGroupIndex = -1;
		$("#obj749").trigger("obj749_onLoad_ended");
		
		return;
	}
	window.obj749_onLoad_activeActionGroupIndex = 3;
	










































};
obj3626_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3626_onLoad_activeActionGroupIndex = -1;
		$("#obj3626").trigger("obj3626_onLoad_ended");
		
		return;
	}
	window.obj3626_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj3626 
move_3629();
function move_3629() {
	window.obj3626_onLoad_runningActionsCount = obj3626_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3626");
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
			window.obj3626_onLoad_runningActionsCount = window.obj3626_onLoad_runningActionsCount - 1;

if (window.obj3626_onLoad_runningActionsCount == 0) {
	obj3626_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3626 
move_3630();
function move_3630() {
	window.obj3626_onLoad_runningActionsCount = obj3626_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3626");
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
			window.obj3626_onLoad_runningActionsCount = window.obj3626_onLoad_runningActionsCount - 1;

if (window.obj3626_onLoad_runningActionsCount == 0) {
	obj3626_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3626 
move_3631();
function move_3631() {
	window.obj3626_onLoad_runningActionsCount = obj3626_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3626");
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
			window.obj3626_onLoad_runningActionsCount = window.obj3626_onLoad_runningActionsCount - 1;

if (window.obj3626_onLoad_runningActionsCount == 0) {
	obj3626_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3626 
move_3632();
function move_3632() {
	window.obj3626_onLoad_runningActionsCount = obj3626_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3626");
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
			window.obj3626_onLoad_runningActionsCount = window.obj3626_onLoad_runningActionsCount - 1;

if (window.obj3626_onLoad_runningActionsCount == 0) {
	obj3626_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3626 
move_3633();
function move_3633() {
	window.obj3626_onLoad_runningActionsCount = obj3626_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3626");
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
			window.obj3626_onLoad_runningActionsCount = window.obj3626_onLoad_runningActionsCount - 1;

if (window.obj3626_onLoad_runningActionsCount == 0) {
	obj3626_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3626 
move_3634();
function move_3634() {
	window.obj3626_onLoad_runningActionsCount = obj3626_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3626");
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
			window.obj3626_onLoad_runningActionsCount = window.obj3626_onLoad_runningActionsCount - 1;

if (window.obj3626_onLoad_runningActionsCount == 0) {
	obj3626_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3626 
move_3635();
function move_3635() {
	window.obj3626_onLoad_runningActionsCount = obj3626_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3626");
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
			window.obj3626_onLoad_runningActionsCount = window.obj3626_onLoad_runningActionsCount - 1;

if (window.obj3626_onLoad_runningActionsCount == 0) {
	obj3626_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3626 
move_3636();
function move_3636() {
	window.obj3626_onLoad_runningActionsCount = obj3626_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3626");
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
			window.obj3626_onLoad_runningActionsCount = window.obj3626_onLoad_runningActionsCount - 1;

if (window.obj3626_onLoad_runningActionsCount == 0) {
	obj3626_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3626 
move_3637();
function move_3637() {
	window.obj3626_onLoad_runningActionsCount = obj3626_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3626");
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
			window.obj3626_onLoad_runningActionsCount = window.obj3626_onLoad_runningActionsCount - 1;

if (window.obj3626_onLoad_runningActionsCount == 0) {
	obj3626_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj3626_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3626_onLoad_activeActionGroupIndex = -1;
		$("#obj3626").trigger("obj3626_onLoad_ended");
		
		return;
	}
	window.obj3626_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj3626 
move_3639();
function move_3639() {
	window.obj3626_onLoad_runningActionsCount = obj3626_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj3626");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = -91;
	var moveY = 372;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj3626_onLoad_runningActionsCount = window.obj3626_onLoad_runningActionsCount - 1;

if (window.obj3626_onLoad_runningActionsCount == 0) {
	obj3626_onLoad_actionGroup2();
}
		}, 1);
	});
}












//	action: wait
wait_3638();
function wait_3638() {
	window.obj3626_onLoad_runningActionsCount = obj3626_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj3626_onLoad_runningActionsCount = window.obj3626_onLoad_runningActionsCount - 1;

if (window.obj3626_onLoad_runningActionsCount == 0) {
	obj3626_onLoad_actionGroup2();
}
	}, 1000);
}

























};
obj3626_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3626_onLoad_activeActionGroupIndex = -1;
		$("#obj3626").trigger("obj3626_onLoad_ended");
		
		return;
	}
	window.obj3626_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj3626_onLoad();
function loop_obj3626_onLoad() {

	var loopCount = 0;

	window.obj3626_onLoad_loopCount = window.obj3626_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj3626_onLoad_loopCount > loopCount) {
		window.obj3626_onLoad_loopCount = 0
		obj3626_onLoad_actionGroup3();
	} else {
		obj3626_onLoad_actionGroup0();
	}

}


























};
obj3626_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3626_onLoad_activeActionGroupIndex = -1;
		$("#obj3626").trigger("obj3626_onLoad_ended");
		
		return;
	}
	window.obj3626_onLoad_activeActionGroupIndex = 3;
	










































};
obj3614_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3614_onLoad_activeActionGroupIndex = -1;
		$("#obj3614").trigger("obj3614_onLoad_ended");
		
		return;
	}
	window.obj3614_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj3614 
move_3617();
function move_3617() {
	window.obj3614_onLoad_runningActionsCount = obj3614_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3614");
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
			window.obj3614_onLoad_runningActionsCount = window.obj3614_onLoad_runningActionsCount - 1;

if (window.obj3614_onLoad_runningActionsCount == 0) {
	obj3614_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3614 
move_3618();
function move_3618() {
	window.obj3614_onLoad_runningActionsCount = obj3614_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3614");
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
			window.obj3614_onLoad_runningActionsCount = window.obj3614_onLoad_runningActionsCount - 1;

if (window.obj3614_onLoad_runningActionsCount == 0) {
	obj3614_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3614 
move_3619();
function move_3619() {
	window.obj3614_onLoad_runningActionsCount = obj3614_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3614");
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
			window.obj3614_onLoad_runningActionsCount = window.obj3614_onLoad_runningActionsCount - 1;

if (window.obj3614_onLoad_runningActionsCount == 0) {
	obj3614_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3614 
move_3620();
function move_3620() {
	window.obj3614_onLoad_runningActionsCount = obj3614_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3614");
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
			window.obj3614_onLoad_runningActionsCount = window.obj3614_onLoad_runningActionsCount - 1;

if (window.obj3614_onLoad_runningActionsCount == 0) {
	obj3614_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3614 
move_3621();
function move_3621() {
	window.obj3614_onLoad_runningActionsCount = obj3614_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3614");
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
			window.obj3614_onLoad_runningActionsCount = window.obj3614_onLoad_runningActionsCount - 1;

if (window.obj3614_onLoad_runningActionsCount == 0) {
	obj3614_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3614 
move_3622();
function move_3622() {
	window.obj3614_onLoad_runningActionsCount = obj3614_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3614");
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
			window.obj3614_onLoad_runningActionsCount = window.obj3614_onLoad_runningActionsCount - 1;

if (window.obj3614_onLoad_runningActionsCount == 0) {
	obj3614_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj3614_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3614_onLoad_activeActionGroupIndex = -1;
		$("#obj3614").trigger("obj3614_onLoad_ended");
		
		return;
	}
	window.obj3614_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj3614 
move_3624();
function move_3624() {
	window.obj3614_onLoad_runningActionsCount = obj3614_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj3614");
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
			window.obj3614_onLoad_runningActionsCount = window.obj3614_onLoad_runningActionsCount - 1;

if (window.obj3614_onLoad_runningActionsCount == 0) {
	obj3614_onLoad_actionGroup2();
}
		}, 1);
	});
}












//	action: wait
wait_3623();
function wait_3623() {
	window.obj3614_onLoad_runningActionsCount = obj3614_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj3614_onLoad_runningActionsCount = window.obj3614_onLoad_runningActionsCount - 1;

if (window.obj3614_onLoad_runningActionsCount == 0) {
	obj3614_onLoad_actionGroup2();
}
	}, 700);
}

























};
obj3614_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3614_onLoad_activeActionGroupIndex = -1;
		$("#obj3614").trigger("obj3614_onLoad_ended");
		
		return;
	}
	window.obj3614_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj3614_onLoad();
function loop_obj3614_onLoad() {

	var loopCount = 0;

	window.obj3614_onLoad_loopCount = window.obj3614_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj3614_onLoad_loopCount > loopCount) {
		window.obj3614_onLoad_loopCount = 0
		obj3614_onLoad_actionGroup3();
	} else {
		obj3614_onLoad_actionGroup0();
	}

}


























};
obj3614_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3614_onLoad_activeActionGroupIndex = -1;
		$("#obj3614").trigger("obj3614_onLoad_ended");
		
		return;
	}
	window.obj3614_onLoad_activeActionGroupIndex = 3;
	










































};
obj3600_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3600_onLoad_activeActionGroupIndex = -1;
		$("#obj3600").trigger("obj3600_onLoad_ended");
		
		return;
	}
	window.obj3600_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj3600 
move_3603();
function move_3603() {
	window.obj3600_onLoad_runningActionsCount = obj3600_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3600");
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
			window.obj3600_onLoad_runningActionsCount = window.obj3600_onLoad_runningActionsCount - 1;

if (window.obj3600_onLoad_runningActionsCount == 0) {
	obj3600_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3600 
move_3604();
function move_3604() {
	window.obj3600_onLoad_runningActionsCount = obj3600_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3600");
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
			window.obj3600_onLoad_runningActionsCount = window.obj3600_onLoad_runningActionsCount - 1;

if (window.obj3600_onLoad_runningActionsCount == 0) {
	obj3600_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3600 
move_3605();
function move_3605() {
	window.obj3600_onLoad_runningActionsCount = obj3600_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3600");
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
			window.obj3600_onLoad_runningActionsCount = window.obj3600_onLoad_runningActionsCount - 1;

if (window.obj3600_onLoad_runningActionsCount == 0) {
	obj3600_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3600 
move_3606();
function move_3606() {
	window.obj3600_onLoad_runningActionsCount = obj3600_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3600");
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
			window.obj3600_onLoad_runningActionsCount = window.obj3600_onLoad_runningActionsCount - 1;

if (window.obj3600_onLoad_runningActionsCount == 0) {
	obj3600_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3600 
move_3607();
function move_3607() {
	window.obj3600_onLoad_runningActionsCount = obj3600_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3600");
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
			window.obj3600_onLoad_runningActionsCount = window.obj3600_onLoad_runningActionsCount - 1;

if (window.obj3600_onLoad_runningActionsCount == 0) {
	obj3600_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3600 
move_3608();
function move_3608() {
	window.obj3600_onLoad_runningActionsCount = obj3600_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3600");
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
			window.obj3600_onLoad_runningActionsCount = window.obj3600_onLoad_runningActionsCount - 1;

if (window.obj3600_onLoad_runningActionsCount == 0) {
	obj3600_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3600 
move_3609();
function move_3609() {
	window.obj3600_onLoad_runningActionsCount = obj3600_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3600");
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
			window.obj3600_onLoad_runningActionsCount = window.obj3600_onLoad_runningActionsCount - 1;

if (window.obj3600_onLoad_runningActionsCount == 0) {
	obj3600_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3600 
move_3610();
function move_3610() {
	window.obj3600_onLoad_runningActionsCount = obj3600_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3600");
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
			window.obj3600_onLoad_runningActionsCount = window.obj3600_onLoad_runningActionsCount - 1;

if (window.obj3600_onLoad_runningActionsCount == 0) {
	obj3600_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj3600_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3600_onLoad_activeActionGroupIndex = -1;
		$("#obj3600").trigger("obj3600_onLoad_ended");
		
		return;
	}
	window.obj3600_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj3600 
move_3612();
function move_3612() {
	window.obj3600_onLoad_runningActionsCount = obj3600_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj3600");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = -100;
	var moveY = 488;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj3600_onLoad_runningActionsCount = window.obj3600_onLoad_runningActionsCount - 1;

if (window.obj3600_onLoad_runningActionsCount == 0) {
	obj3600_onLoad_actionGroup2();
}
		}, 1);
	});
}












//	action: wait
wait_3611();
function wait_3611() {
	window.obj3600_onLoad_runningActionsCount = obj3600_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj3600_onLoad_runningActionsCount = window.obj3600_onLoad_runningActionsCount - 1;

if (window.obj3600_onLoad_runningActionsCount == 0) {
	obj3600_onLoad_actionGroup2();
}
	}, 800);
}

























};
obj3600_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3600_onLoad_activeActionGroupIndex = -1;
		$("#obj3600").trigger("obj3600_onLoad_ended");
		
		return;
	}
	window.obj3600_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj3600_onLoad();
function loop_obj3600_onLoad() {

	var loopCount = 0;

	window.obj3600_onLoad_loopCount = window.obj3600_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj3600_onLoad_loopCount > loopCount) {
		window.obj3600_onLoad_loopCount = 0
		obj3600_onLoad_actionGroup3();
	} else {
		obj3600_onLoad_actionGroup0();
	}

}


























};
obj3600_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3600_onLoad_activeActionGroupIndex = -1;
		$("#obj3600").trigger("obj3600_onLoad_ended");
		
		return;
	}
	window.obj3600_onLoad_activeActionGroupIndex = 3;
	










































};
obj3588_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3588_onLoad_activeActionGroupIndex = -1;
		$("#obj3588").trigger("obj3588_onLoad_ended");
		
		return;
	}
	window.obj3588_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj3588 
move_3591();
function move_3591() {
	window.obj3588_onLoad_runningActionsCount = obj3588_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3588");
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
			window.obj3588_onLoad_runningActionsCount = window.obj3588_onLoad_runningActionsCount - 1;

if (window.obj3588_onLoad_runningActionsCount == 0) {
	obj3588_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3588 
move_3592();
function move_3592() {
	window.obj3588_onLoad_runningActionsCount = obj3588_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3588");
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
			window.obj3588_onLoad_runningActionsCount = window.obj3588_onLoad_runningActionsCount - 1;

if (window.obj3588_onLoad_runningActionsCount == 0) {
	obj3588_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3588 
move_3593();
function move_3593() {
	window.obj3588_onLoad_runningActionsCount = obj3588_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3588");
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
			window.obj3588_onLoad_runningActionsCount = window.obj3588_onLoad_runningActionsCount - 1;

if (window.obj3588_onLoad_runningActionsCount == 0) {
	obj3588_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3588 
move_3594();
function move_3594() {
	window.obj3588_onLoad_runningActionsCount = obj3588_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3588");
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
			window.obj3588_onLoad_runningActionsCount = window.obj3588_onLoad_runningActionsCount - 1;

if (window.obj3588_onLoad_runningActionsCount == 0) {
	obj3588_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3588 
move_3595();
function move_3595() {
	window.obj3588_onLoad_runningActionsCount = obj3588_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3588");
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
			window.obj3588_onLoad_runningActionsCount = window.obj3588_onLoad_runningActionsCount - 1;

if (window.obj3588_onLoad_runningActionsCount == 0) {
	obj3588_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3588 
move_3596();
function move_3596() {
	window.obj3588_onLoad_runningActionsCount = obj3588_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3588");
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
			window.obj3588_onLoad_runningActionsCount = window.obj3588_onLoad_runningActionsCount - 1;

if (window.obj3588_onLoad_runningActionsCount == 0) {
	obj3588_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj3588_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3588_onLoad_activeActionGroupIndex = -1;
		$("#obj3588").trigger("obj3588_onLoad_ended");
		
		return;
	}
	window.obj3588_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj3588 
move_3598();
function move_3598() {
	window.obj3588_onLoad_runningActionsCount = obj3588_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj3588");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = -91;
	var moveY = 132;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj3588_onLoad_runningActionsCount = window.obj3588_onLoad_runningActionsCount - 1;

if (window.obj3588_onLoad_runningActionsCount == 0) {
	obj3588_onLoad_actionGroup2();
}
		}, 1);
	});
}












//	action: wait
wait_3597();
function wait_3597() {
	window.obj3588_onLoad_runningActionsCount = obj3588_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj3588_onLoad_runningActionsCount = window.obj3588_onLoad_runningActionsCount - 1;

if (window.obj3588_onLoad_runningActionsCount == 0) {
	obj3588_onLoad_actionGroup2();
}
	}, 1000);
}

























};
obj3588_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3588_onLoad_activeActionGroupIndex = -1;
		$("#obj3588").trigger("obj3588_onLoad_ended");
		
		return;
	}
	window.obj3588_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj3588_onLoad();
function loop_obj3588_onLoad() {

	var loopCount = 0;

	window.obj3588_onLoad_loopCount = window.obj3588_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj3588_onLoad_loopCount > loopCount) {
		window.obj3588_onLoad_loopCount = 0
		obj3588_onLoad_actionGroup3();
	} else {
		obj3588_onLoad_actionGroup0();
	}

}


























};
obj3588_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3588_onLoad_activeActionGroupIndex = -1;
		$("#obj3588").trigger("obj3588_onLoad_ended");
		
		return;
	}
	window.obj3588_onLoad_activeActionGroupIndex = 3;
	










































};
obj3573_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3573_onLoad_activeActionGroupIndex = -1;
		$("#obj3573").trigger("obj3573_onLoad_ended");
		
		return;
	}
	window.obj3573_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj3573 
move_3576();
function move_3576() {
	window.obj3573_onLoad_runningActionsCount = obj3573_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3573");
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
			window.obj3573_onLoad_runningActionsCount = window.obj3573_onLoad_runningActionsCount - 1;

if (window.obj3573_onLoad_runningActionsCount == 0) {
	obj3573_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3573 
move_3577();
function move_3577() {
	window.obj3573_onLoad_runningActionsCount = obj3573_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3573");
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
			window.obj3573_onLoad_runningActionsCount = window.obj3573_onLoad_runningActionsCount - 1;

if (window.obj3573_onLoad_runningActionsCount == 0) {
	obj3573_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3573 
move_3578();
function move_3578() {
	window.obj3573_onLoad_runningActionsCount = obj3573_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3573");
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
			window.obj3573_onLoad_runningActionsCount = window.obj3573_onLoad_runningActionsCount - 1;

if (window.obj3573_onLoad_runningActionsCount == 0) {
	obj3573_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3573 
move_3579();
function move_3579() {
	window.obj3573_onLoad_runningActionsCount = obj3573_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3573");
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
			window.obj3573_onLoad_runningActionsCount = window.obj3573_onLoad_runningActionsCount - 1;

if (window.obj3573_onLoad_runningActionsCount == 0) {
	obj3573_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3573 
move_3580();
function move_3580() {
	window.obj3573_onLoad_runningActionsCount = obj3573_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3573");
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
			window.obj3573_onLoad_runningActionsCount = window.obj3573_onLoad_runningActionsCount - 1;

if (window.obj3573_onLoad_runningActionsCount == 0) {
	obj3573_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3573 
move_3581();
function move_3581() {
	window.obj3573_onLoad_runningActionsCount = obj3573_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3573");
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
			window.obj3573_onLoad_runningActionsCount = window.obj3573_onLoad_runningActionsCount - 1;

if (window.obj3573_onLoad_runningActionsCount == 0) {
	obj3573_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3573 
move_3582();
function move_3582() {
	window.obj3573_onLoad_runningActionsCount = obj3573_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3573");
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
			window.obj3573_onLoad_runningActionsCount = window.obj3573_onLoad_runningActionsCount - 1;

if (window.obj3573_onLoad_runningActionsCount == 0) {
	obj3573_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3573 
move_3583();
function move_3583() {
	window.obj3573_onLoad_runningActionsCount = obj3573_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3573");
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
			window.obj3573_onLoad_runningActionsCount = window.obj3573_onLoad_runningActionsCount - 1;

if (window.obj3573_onLoad_runningActionsCount == 0) {
	obj3573_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3573 
move_3584();
function move_3584() {
	window.obj3573_onLoad_runningActionsCount = obj3573_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3573");
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
			window.obj3573_onLoad_runningActionsCount = window.obj3573_onLoad_runningActionsCount - 1;

if (window.obj3573_onLoad_runningActionsCount == 0) {
	obj3573_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj3573_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3573_onLoad_activeActionGroupIndex = -1;
		$("#obj3573").trigger("obj3573_onLoad_ended");
		
		return;
	}
	window.obj3573_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj3573 
move_3586();
function move_3586() {
	window.obj3573_onLoad_runningActionsCount = obj3573_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj3573");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = -156;
	var moveY = 647;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj3573_onLoad_runningActionsCount = window.obj3573_onLoad_runningActionsCount - 1;

if (window.obj3573_onLoad_runningActionsCount == 0) {
	obj3573_onLoad_actionGroup2();
}
		}, 1);
	});
}












//	action: wait
wait_3585();
function wait_3585() {
	window.obj3573_onLoad_runningActionsCount = obj3573_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj3573_onLoad_runningActionsCount = window.obj3573_onLoad_runningActionsCount - 1;

if (window.obj3573_onLoad_runningActionsCount == 0) {
	obj3573_onLoad_actionGroup2();
}
	}, 500);
}

























};
obj3573_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3573_onLoad_activeActionGroupIndex = -1;
		$("#obj3573").trigger("obj3573_onLoad_ended");
		
		return;
	}
	window.obj3573_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj3573_onLoad();
function loop_obj3573_onLoad() {

	var loopCount = 0;

	window.obj3573_onLoad_loopCount = window.obj3573_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj3573_onLoad_loopCount > loopCount) {
		window.obj3573_onLoad_loopCount = 0
		obj3573_onLoad_actionGroup3();
	} else {
		obj3573_onLoad_actionGroup0();
	}

}


























};
obj3573_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3573_onLoad_activeActionGroupIndex = -1;
		$("#obj3573").trigger("obj3573_onLoad_ended");
		
		return;
	}
	window.obj3573_onLoad_activeActionGroupIndex = 3;
	










































};
obj3561_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3561_onLoad_activeActionGroupIndex = -1;
		$("#obj3561").trigger("obj3561_onLoad_ended");
		
		return;
	}
	window.obj3561_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj3561 
move_3564();
function move_3564() {
	window.obj3561_onLoad_runningActionsCount = obj3561_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3561");
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
			window.obj3561_onLoad_runningActionsCount = window.obj3561_onLoad_runningActionsCount - 1;

if (window.obj3561_onLoad_runningActionsCount == 0) {
	obj3561_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3561 
move_3565();
function move_3565() {
	window.obj3561_onLoad_runningActionsCount = obj3561_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3561");
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
			window.obj3561_onLoad_runningActionsCount = window.obj3561_onLoad_runningActionsCount - 1;

if (window.obj3561_onLoad_runningActionsCount == 0) {
	obj3561_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3561 
move_3566();
function move_3566() {
	window.obj3561_onLoad_runningActionsCount = obj3561_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3561");
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
			window.obj3561_onLoad_runningActionsCount = window.obj3561_onLoad_runningActionsCount - 1;

if (window.obj3561_onLoad_runningActionsCount == 0) {
	obj3561_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3561 
move_3567();
function move_3567() {
	window.obj3561_onLoad_runningActionsCount = obj3561_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3561");
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
			window.obj3561_onLoad_runningActionsCount = window.obj3561_onLoad_runningActionsCount - 1;

if (window.obj3561_onLoad_runningActionsCount == 0) {
	obj3561_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3561 
move_3568();
function move_3568() {
	window.obj3561_onLoad_runningActionsCount = obj3561_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3561");
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
			window.obj3561_onLoad_runningActionsCount = window.obj3561_onLoad_runningActionsCount - 1;

if (window.obj3561_onLoad_runningActionsCount == 0) {
	obj3561_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3561 
move_3569();
function move_3569() {
	window.obj3561_onLoad_runningActionsCount = obj3561_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3561");
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
			window.obj3561_onLoad_runningActionsCount = window.obj3561_onLoad_runningActionsCount - 1;

if (window.obj3561_onLoad_runningActionsCount == 0) {
	obj3561_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj3561_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3561_onLoad_activeActionGroupIndex = -1;
		$("#obj3561").trigger("obj3561_onLoad_ended");
		
		return;
	}
	window.obj3561_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj3561 
move_3571();
function move_3571() {
	window.obj3561_onLoad_runningActionsCount = obj3561_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj3561");
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
			window.obj3561_onLoad_runningActionsCount = window.obj3561_onLoad_runningActionsCount - 1;

if (window.obj3561_onLoad_runningActionsCount == 0) {
	obj3561_onLoad_actionGroup2();
}
		}, 1);
	});
}












//	action: wait
wait_3570();
function wait_3570() {
	window.obj3561_onLoad_runningActionsCount = obj3561_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj3561_onLoad_runningActionsCount = window.obj3561_onLoad_runningActionsCount - 1;

if (window.obj3561_onLoad_runningActionsCount == 0) {
	obj3561_onLoad_actionGroup2();
}
	}, 1000);
}

























};
obj3561_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3561_onLoad_activeActionGroupIndex = -1;
		$("#obj3561").trigger("obj3561_onLoad_ended");
		
		return;
	}
	window.obj3561_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj3561_onLoad();
function loop_obj3561_onLoad() {

	var loopCount = 0;

	window.obj3561_onLoad_loopCount = window.obj3561_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj3561_onLoad_loopCount > loopCount) {
		window.obj3561_onLoad_loopCount = 0
		obj3561_onLoad_actionGroup3();
	} else {
		obj3561_onLoad_actionGroup0();
	}

}


























};
obj3561_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3561_onLoad_activeActionGroupIndex = -1;
		$("#obj3561").trigger("obj3561_onLoad_ended");
		
		return;
	}
	window.obj3561_onLoad_activeActionGroupIndex = 3;
	










































};
obj3547_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3547_onLoad_activeActionGroupIndex = -1;
		$("#obj3547").trigger("obj3547_onLoad_ended");
		
		return;
	}
	window.obj3547_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj3547 
move_3550();
function move_3550() {
	window.obj3547_onLoad_runningActionsCount = obj3547_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3547");
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
			window.obj3547_onLoad_runningActionsCount = window.obj3547_onLoad_runningActionsCount - 1;

if (window.obj3547_onLoad_runningActionsCount == 0) {
	obj3547_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3547 
move_3551();
function move_3551() {
	window.obj3547_onLoad_runningActionsCount = obj3547_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3547");
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
			window.obj3547_onLoad_runningActionsCount = window.obj3547_onLoad_runningActionsCount - 1;

if (window.obj3547_onLoad_runningActionsCount == 0) {
	obj3547_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3547 
move_3552();
function move_3552() {
	window.obj3547_onLoad_runningActionsCount = obj3547_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3547");
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
			window.obj3547_onLoad_runningActionsCount = window.obj3547_onLoad_runningActionsCount - 1;

if (window.obj3547_onLoad_runningActionsCount == 0) {
	obj3547_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3547 
move_3553();
function move_3553() {
	window.obj3547_onLoad_runningActionsCount = obj3547_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3547");
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
			window.obj3547_onLoad_runningActionsCount = window.obj3547_onLoad_runningActionsCount - 1;

if (window.obj3547_onLoad_runningActionsCount == 0) {
	obj3547_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3547 
move_3554();
function move_3554() {
	window.obj3547_onLoad_runningActionsCount = obj3547_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3547");
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
			window.obj3547_onLoad_runningActionsCount = window.obj3547_onLoad_runningActionsCount - 1;

if (window.obj3547_onLoad_runningActionsCount == 0) {
	obj3547_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3547 
move_3555();
function move_3555() {
	window.obj3547_onLoad_runningActionsCount = obj3547_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3547");
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
			window.obj3547_onLoad_runningActionsCount = window.obj3547_onLoad_runningActionsCount - 1;

if (window.obj3547_onLoad_runningActionsCount == 0) {
	obj3547_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3547 
move_3556();
function move_3556() {
	window.obj3547_onLoad_runningActionsCount = obj3547_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3547");
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
			window.obj3547_onLoad_runningActionsCount = window.obj3547_onLoad_runningActionsCount - 1;

if (window.obj3547_onLoad_runningActionsCount == 0) {
	obj3547_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3547 
move_3557();
function move_3557() {
	window.obj3547_onLoad_runningActionsCount = obj3547_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3547");
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
			window.obj3547_onLoad_runningActionsCount = window.obj3547_onLoad_runningActionsCount - 1;

if (window.obj3547_onLoad_runningActionsCount == 0) {
	obj3547_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj3547_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3547_onLoad_activeActionGroupIndex = -1;
		$("#obj3547").trigger("obj3547_onLoad_ended");
		
		return;
	}
	window.obj3547_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj3547 
move_3559();
function move_3559() {
	window.obj3547_onLoad_runningActionsCount = obj3547_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj3547");
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
			window.obj3547_onLoad_runningActionsCount = window.obj3547_onLoad_runningActionsCount - 1;

if (window.obj3547_onLoad_runningActionsCount == 0) {
	obj3547_onLoad_actionGroup2();
}
		}, 1);
	});
}












//	action: wait
wait_3558();
function wait_3558() {
	window.obj3547_onLoad_runningActionsCount = obj3547_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj3547_onLoad_runningActionsCount = window.obj3547_onLoad_runningActionsCount - 1;

if (window.obj3547_onLoad_runningActionsCount == 0) {
	obj3547_onLoad_actionGroup2();
}
	}, 1000);
}

























};
obj3547_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3547_onLoad_activeActionGroupIndex = -1;
		$("#obj3547").trigger("obj3547_onLoad_ended");
		
		return;
	}
	window.obj3547_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj3547_onLoad();
function loop_obj3547_onLoad() {

	var loopCount = 0;

	window.obj3547_onLoad_loopCount = window.obj3547_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj3547_onLoad_loopCount > loopCount) {
		window.obj3547_onLoad_loopCount = 0
		obj3547_onLoad_actionGroup3();
	} else {
		obj3547_onLoad_actionGroup0();
	}

}


























};
obj3547_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3547_onLoad_activeActionGroupIndex = -1;
		$("#obj3547").trigger("obj3547_onLoad_ended");
		
		return;
	}
	window.obj3547_onLoad_activeActionGroupIndex = 3;
	










































};
obj3535_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3535_onLoad_activeActionGroupIndex = -1;
		$("#obj3535").trigger("obj3535_onLoad_ended");
		
		return;
	}
	window.obj3535_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj3535 
move_3538();
function move_3538() {
	window.obj3535_onLoad_runningActionsCount = obj3535_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3535");
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
			window.obj3535_onLoad_runningActionsCount = window.obj3535_onLoad_runningActionsCount - 1;

if (window.obj3535_onLoad_runningActionsCount == 0) {
	obj3535_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3535 
move_3539();
function move_3539() {
	window.obj3535_onLoad_runningActionsCount = obj3535_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3535");
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
			window.obj3535_onLoad_runningActionsCount = window.obj3535_onLoad_runningActionsCount - 1;

if (window.obj3535_onLoad_runningActionsCount == 0) {
	obj3535_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3535 
move_3540();
function move_3540() {
	window.obj3535_onLoad_runningActionsCount = obj3535_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3535");
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
			window.obj3535_onLoad_runningActionsCount = window.obj3535_onLoad_runningActionsCount - 1;

if (window.obj3535_onLoad_runningActionsCount == 0) {
	obj3535_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3535 
move_3541();
function move_3541() {
	window.obj3535_onLoad_runningActionsCount = obj3535_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3535");
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
			window.obj3535_onLoad_runningActionsCount = window.obj3535_onLoad_runningActionsCount - 1;

if (window.obj3535_onLoad_runningActionsCount == 0) {
	obj3535_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3535 
move_3542();
function move_3542() {
	window.obj3535_onLoad_runningActionsCount = obj3535_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3535");
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
			window.obj3535_onLoad_runningActionsCount = window.obj3535_onLoad_runningActionsCount - 1;

if (window.obj3535_onLoad_runningActionsCount == 0) {
	obj3535_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3535 
move_3543();
function move_3543() {
	window.obj3535_onLoad_runningActionsCount = obj3535_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3535");
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
			window.obj3535_onLoad_runningActionsCount = window.obj3535_onLoad_runningActionsCount - 1;

if (window.obj3535_onLoad_runningActionsCount == 0) {
	obj3535_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj3535_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3535_onLoad_activeActionGroupIndex = -1;
		$("#obj3535").trigger("obj3535_onLoad_ended");
		
		return;
	}
	window.obj3535_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj3535 
move_3545();
function move_3545() {
	window.obj3535_onLoad_runningActionsCount = obj3535_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj3535");
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
			window.obj3535_onLoad_runningActionsCount = window.obj3535_onLoad_runningActionsCount - 1;

if (window.obj3535_onLoad_runningActionsCount == 0) {
	obj3535_onLoad_actionGroup2();
}
		}, 1);
	});
}












//	action: wait
wait_3544();
function wait_3544() {
	window.obj3535_onLoad_runningActionsCount = obj3535_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj3535_onLoad_runningActionsCount = window.obj3535_onLoad_runningActionsCount - 1;

if (window.obj3535_onLoad_runningActionsCount == 0) {
	obj3535_onLoad_actionGroup2();
}
	}, 400);
}

























};
obj3535_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3535_onLoad_activeActionGroupIndex = -1;
		$("#obj3535").trigger("obj3535_onLoad_ended");
		
		return;
	}
	window.obj3535_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj3535_onLoad();
function loop_obj3535_onLoad() {

	var loopCount = 0;

	window.obj3535_onLoad_loopCount = window.obj3535_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj3535_onLoad_loopCount > loopCount) {
		window.obj3535_onLoad_loopCount = 0
		obj3535_onLoad_actionGroup3();
	} else {
		obj3535_onLoad_actionGroup0();
	}

}


























};
obj3535_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3535_onLoad_activeActionGroupIndex = -1;
		$("#obj3535").trigger("obj3535_onLoad_ended");
		
		return;
	}
	window.obj3535_onLoad_activeActionGroupIndex = 3;
	










































};
obj3765_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3765_onLoad_activeActionGroupIndex = -1;
		$("#obj3765").trigger("obj3765_onLoad_ended");
		
		return;
	}
	window.obj3765_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj3765 
move_3778();
function move_3778() {
	window.obj3765_onLoad_runningActionsCount = obj3765_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj3765");
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
			window.obj3765_onLoad_runningActionsCount = window.obj3765_onLoad_runningActionsCount - 1;

if (window.obj3765_onLoad_runningActionsCount == 0) {
	obj3765_onLoad_actionGroup1();
}
		}, 1);
	});
}












//	action: wait
wait_3777();
function wait_3777() {
	window.obj3765_onLoad_runningActionsCount = obj3765_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj3765_onLoad_runningActionsCount = window.obj3765_onLoad_runningActionsCount - 1;

if (window.obj3765_onLoad_runningActionsCount == 0) {
	obj3765_onLoad_actionGroup1();
}
	}, 1000);
}

























};
obj3765_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3765_onLoad_activeActionGroupIndex = -1;
		$("#obj3765").trigger("obj3765_onLoad_ended");
		
		return;
	}
	window.obj3765_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj3765 
move_3768();
function move_3768() {
	window.obj3765_onLoad_runningActionsCount = obj3765_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3765");
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
			window.obj3765_onLoad_runningActionsCount = window.obj3765_onLoad_runningActionsCount - 1;

if (window.obj3765_onLoad_runningActionsCount == 0) {
	obj3765_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3765 
move_3769();
function move_3769() {
	window.obj3765_onLoad_runningActionsCount = obj3765_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3765");
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
			window.obj3765_onLoad_runningActionsCount = window.obj3765_onLoad_runningActionsCount - 1;

if (window.obj3765_onLoad_runningActionsCount == 0) {
	obj3765_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3765 
move_3770();
function move_3770() {
	window.obj3765_onLoad_runningActionsCount = obj3765_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3765");
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
			window.obj3765_onLoad_runningActionsCount = window.obj3765_onLoad_runningActionsCount - 1;

if (window.obj3765_onLoad_runningActionsCount == 0) {
	obj3765_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3765 
move_3771();
function move_3771() {
	window.obj3765_onLoad_runningActionsCount = obj3765_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3765");
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
			window.obj3765_onLoad_runningActionsCount = window.obj3765_onLoad_runningActionsCount - 1;

if (window.obj3765_onLoad_runningActionsCount == 0) {
	obj3765_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3765 
move_3772();
function move_3772() {
	window.obj3765_onLoad_runningActionsCount = obj3765_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3765");
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
			window.obj3765_onLoad_runningActionsCount = window.obj3765_onLoad_runningActionsCount - 1;

if (window.obj3765_onLoad_runningActionsCount == 0) {
	obj3765_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3765 
move_3773();
function move_3773() {
	window.obj3765_onLoad_runningActionsCount = obj3765_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3765");
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
			window.obj3765_onLoad_runningActionsCount = window.obj3765_onLoad_runningActionsCount - 1;

if (window.obj3765_onLoad_runningActionsCount == 0) {
	obj3765_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3765 
move_3774();
function move_3774() {
	window.obj3765_onLoad_runningActionsCount = obj3765_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3765");
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
			window.obj3765_onLoad_runningActionsCount = window.obj3765_onLoad_runningActionsCount - 1;

if (window.obj3765_onLoad_runningActionsCount == 0) {
	obj3765_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3765 
move_3775();
function move_3775() {
	window.obj3765_onLoad_runningActionsCount = obj3765_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3765");
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
			window.obj3765_onLoad_runningActionsCount = window.obj3765_onLoad_runningActionsCount - 1;

if (window.obj3765_onLoad_runningActionsCount == 0) {
	obj3765_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3765 
move_3776();
function move_3776() {
	window.obj3765_onLoad_runningActionsCount = obj3765_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3765");
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
			window.obj3765_onLoad_runningActionsCount = window.obj3765_onLoad_runningActionsCount - 1;

if (window.obj3765_onLoad_runningActionsCount == 0) {
	obj3765_onLoad_actionGroup2();
}
		}, 1);
	});
}






































};
obj3765_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3765_onLoad_activeActionGroupIndex = -1;
		$("#obj3765").trigger("obj3765_onLoad_ended");
		
		return;
	}
	window.obj3765_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj3765_onLoad();
function loop_obj3765_onLoad() {

	var loopCount = 0;

	window.obj3765_onLoad_loopCount = window.obj3765_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj3765_onLoad_loopCount > loopCount) {
		window.obj3765_onLoad_loopCount = 0
		obj3765_onLoad_actionGroup3();
	} else {
		obj3765_onLoad_actionGroup0();
	}

}


























};
obj3765_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3765_onLoad_activeActionGroupIndex = -1;
		$("#obj3765").trigger("obj3765_onLoad_ended");
		
		return;
	}
	window.obj3765_onLoad_activeActionGroupIndex = 3;
	










































};
obj3753_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3753_onLoad_activeActionGroupIndex = -1;
		$("#obj3753").trigger("obj3753_onLoad_ended");
		
		return;
	}
	window.obj3753_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj3753 
move_3763();
function move_3763() {
	window.obj3753_onLoad_runningActionsCount = obj3753_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj3753");
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
			window.obj3753_onLoad_runningActionsCount = window.obj3753_onLoad_runningActionsCount - 1;

if (window.obj3753_onLoad_runningActionsCount == 0) {
	obj3753_onLoad_actionGroup1();
}
		}, 1);
	});
}












//	action: wait
wait_3762();
function wait_3762() {
	window.obj3753_onLoad_runningActionsCount = obj3753_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj3753_onLoad_runningActionsCount = window.obj3753_onLoad_runningActionsCount - 1;

if (window.obj3753_onLoad_runningActionsCount == 0) {
	obj3753_onLoad_actionGroup1();
}
	}, 700);
}

























};
obj3753_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3753_onLoad_activeActionGroupIndex = -1;
		$("#obj3753").trigger("obj3753_onLoad_ended");
		
		return;
	}
	window.obj3753_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj3753 
move_3756();
function move_3756() {
	window.obj3753_onLoad_runningActionsCount = obj3753_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3753");
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
			window.obj3753_onLoad_runningActionsCount = window.obj3753_onLoad_runningActionsCount - 1;

if (window.obj3753_onLoad_runningActionsCount == 0) {
	obj3753_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3753 
move_3757();
function move_3757() {
	window.obj3753_onLoad_runningActionsCount = obj3753_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3753");
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
			window.obj3753_onLoad_runningActionsCount = window.obj3753_onLoad_runningActionsCount - 1;

if (window.obj3753_onLoad_runningActionsCount == 0) {
	obj3753_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3753 
move_3758();
function move_3758() {
	window.obj3753_onLoad_runningActionsCount = obj3753_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3753");
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
			window.obj3753_onLoad_runningActionsCount = window.obj3753_onLoad_runningActionsCount - 1;

if (window.obj3753_onLoad_runningActionsCount == 0) {
	obj3753_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3753 
move_3759();
function move_3759() {
	window.obj3753_onLoad_runningActionsCount = obj3753_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3753");
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
			window.obj3753_onLoad_runningActionsCount = window.obj3753_onLoad_runningActionsCount - 1;

if (window.obj3753_onLoad_runningActionsCount == 0) {
	obj3753_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3753 
move_3760();
function move_3760() {
	window.obj3753_onLoad_runningActionsCount = obj3753_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3753");
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
			window.obj3753_onLoad_runningActionsCount = window.obj3753_onLoad_runningActionsCount - 1;

if (window.obj3753_onLoad_runningActionsCount == 0) {
	obj3753_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3753 
move_3761();
function move_3761() {
	window.obj3753_onLoad_runningActionsCount = obj3753_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3753");
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
			window.obj3753_onLoad_runningActionsCount = window.obj3753_onLoad_runningActionsCount - 1;

if (window.obj3753_onLoad_runningActionsCount == 0) {
	obj3753_onLoad_actionGroup2();
}
		}, 1);
	});
}






































};
obj3753_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3753_onLoad_activeActionGroupIndex = -1;
		$("#obj3753").trigger("obj3753_onLoad_ended");
		
		return;
	}
	window.obj3753_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj3753_onLoad();
function loop_obj3753_onLoad() {

	var loopCount = 0;

	window.obj3753_onLoad_loopCount = window.obj3753_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj3753_onLoad_loopCount > loopCount) {
		window.obj3753_onLoad_loopCount = 0
		obj3753_onLoad_actionGroup3();
	} else {
		obj3753_onLoad_actionGroup0();
	}

}


























};
obj3753_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3753_onLoad_activeActionGroupIndex = -1;
		$("#obj3753").trigger("obj3753_onLoad_ended");
		
		return;
	}
	window.obj3753_onLoad_activeActionGroupIndex = 3;
	










































};
obj3739_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3739_onLoad_activeActionGroupIndex = -1;
		$("#obj3739").trigger("obj3739_onLoad_ended");
		
		return;
	}
	window.obj3739_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj3739 
move_3751();
function move_3751() {
	window.obj3739_onLoad_runningActionsCount = obj3739_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj3739");
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
			window.obj3739_onLoad_runningActionsCount = window.obj3739_onLoad_runningActionsCount - 1;

if (window.obj3739_onLoad_runningActionsCount == 0) {
	obj3739_onLoad_actionGroup1();
}
		}, 1);
	});
}












//	action: wait
wait_3750();
function wait_3750() {
	window.obj3739_onLoad_runningActionsCount = obj3739_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj3739_onLoad_runningActionsCount = window.obj3739_onLoad_runningActionsCount - 1;

if (window.obj3739_onLoad_runningActionsCount == 0) {
	obj3739_onLoad_actionGroup1();
}
	}, 800);
}

























};
obj3739_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3739_onLoad_activeActionGroupIndex = -1;
		$("#obj3739").trigger("obj3739_onLoad_ended");
		
		return;
	}
	window.obj3739_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj3739 
move_3742();
function move_3742() {
	window.obj3739_onLoad_runningActionsCount = obj3739_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3739");
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
			window.obj3739_onLoad_runningActionsCount = window.obj3739_onLoad_runningActionsCount - 1;

if (window.obj3739_onLoad_runningActionsCount == 0) {
	obj3739_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3739 
move_3743();
function move_3743() {
	window.obj3739_onLoad_runningActionsCount = obj3739_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3739");
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
			window.obj3739_onLoad_runningActionsCount = window.obj3739_onLoad_runningActionsCount - 1;

if (window.obj3739_onLoad_runningActionsCount == 0) {
	obj3739_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3739 
move_3744();
function move_3744() {
	window.obj3739_onLoad_runningActionsCount = obj3739_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3739");
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
			window.obj3739_onLoad_runningActionsCount = window.obj3739_onLoad_runningActionsCount - 1;

if (window.obj3739_onLoad_runningActionsCount == 0) {
	obj3739_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3739 
move_3745();
function move_3745() {
	window.obj3739_onLoad_runningActionsCount = obj3739_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3739");
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
			window.obj3739_onLoad_runningActionsCount = window.obj3739_onLoad_runningActionsCount - 1;

if (window.obj3739_onLoad_runningActionsCount == 0) {
	obj3739_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3739 
move_3746();
function move_3746() {
	window.obj3739_onLoad_runningActionsCount = obj3739_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3739");
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
			window.obj3739_onLoad_runningActionsCount = window.obj3739_onLoad_runningActionsCount - 1;

if (window.obj3739_onLoad_runningActionsCount == 0) {
	obj3739_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3739 
move_3747();
function move_3747() {
	window.obj3739_onLoad_runningActionsCount = obj3739_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3739");
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
			window.obj3739_onLoad_runningActionsCount = window.obj3739_onLoad_runningActionsCount - 1;

if (window.obj3739_onLoad_runningActionsCount == 0) {
	obj3739_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3739 
move_3748();
function move_3748() {
	window.obj3739_onLoad_runningActionsCount = obj3739_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3739");
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
			window.obj3739_onLoad_runningActionsCount = window.obj3739_onLoad_runningActionsCount - 1;

if (window.obj3739_onLoad_runningActionsCount == 0) {
	obj3739_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3739 
move_3749();
function move_3749() {
	window.obj3739_onLoad_runningActionsCount = obj3739_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3739");
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
			window.obj3739_onLoad_runningActionsCount = window.obj3739_onLoad_runningActionsCount - 1;

if (window.obj3739_onLoad_runningActionsCount == 0) {
	obj3739_onLoad_actionGroup2();
}
		}, 1);
	});
}






































};
obj3739_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3739_onLoad_activeActionGroupIndex = -1;
		$("#obj3739").trigger("obj3739_onLoad_ended");
		
		return;
	}
	window.obj3739_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj3739_onLoad();
function loop_obj3739_onLoad() {

	var loopCount = 0;

	window.obj3739_onLoad_loopCount = window.obj3739_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj3739_onLoad_loopCount > loopCount) {
		window.obj3739_onLoad_loopCount = 0
		obj3739_onLoad_actionGroup3();
	} else {
		obj3739_onLoad_actionGroup0();
	}

}


























};
obj3739_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3739_onLoad_activeActionGroupIndex = -1;
		$("#obj3739").trigger("obj3739_onLoad_ended");
		
		return;
	}
	window.obj3739_onLoad_activeActionGroupIndex = 3;
	










































};
obj3727_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3727_onLoad_activeActionGroupIndex = -1;
		$("#obj3727").trigger("obj3727_onLoad_ended");
		
		return;
	}
	window.obj3727_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj3727 
move_3737();
function move_3737() {
	window.obj3727_onLoad_runningActionsCount = obj3727_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj3727");
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
			window.obj3727_onLoad_runningActionsCount = window.obj3727_onLoad_runningActionsCount - 1;

if (window.obj3727_onLoad_runningActionsCount == 0) {
	obj3727_onLoad_actionGroup1();
}
		}, 1);
	});
}












//	action: wait
wait_3736();
function wait_3736() {
	window.obj3727_onLoad_runningActionsCount = obj3727_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj3727_onLoad_runningActionsCount = window.obj3727_onLoad_runningActionsCount - 1;

if (window.obj3727_onLoad_runningActionsCount == 0) {
	obj3727_onLoad_actionGroup1();
}
	}, 1000);
}

























};
obj3727_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3727_onLoad_activeActionGroupIndex = -1;
		$("#obj3727").trigger("obj3727_onLoad_ended");
		
		return;
	}
	window.obj3727_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj3727 
move_3730();
function move_3730() {
	window.obj3727_onLoad_runningActionsCount = obj3727_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3727");
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
			window.obj3727_onLoad_runningActionsCount = window.obj3727_onLoad_runningActionsCount - 1;

if (window.obj3727_onLoad_runningActionsCount == 0) {
	obj3727_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3727 
move_3731();
function move_3731() {
	window.obj3727_onLoad_runningActionsCount = obj3727_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3727");
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
			window.obj3727_onLoad_runningActionsCount = window.obj3727_onLoad_runningActionsCount - 1;

if (window.obj3727_onLoad_runningActionsCount == 0) {
	obj3727_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3727 
move_3732();
function move_3732() {
	window.obj3727_onLoad_runningActionsCount = obj3727_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3727");
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
			window.obj3727_onLoad_runningActionsCount = window.obj3727_onLoad_runningActionsCount - 1;

if (window.obj3727_onLoad_runningActionsCount == 0) {
	obj3727_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3727 
move_3733();
function move_3733() {
	window.obj3727_onLoad_runningActionsCount = obj3727_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3727");
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
			window.obj3727_onLoad_runningActionsCount = window.obj3727_onLoad_runningActionsCount - 1;

if (window.obj3727_onLoad_runningActionsCount == 0) {
	obj3727_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3727 
move_3734();
function move_3734() {
	window.obj3727_onLoad_runningActionsCount = obj3727_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3727");
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
			window.obj3727_onLoad_runningActionsCount = window.obj3727_onLoad_runningActionsCount - 1;

if (window.obj3727_onLoad_runningActionsCount == 0) {
	obj3727_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3727 
move_3735();
function move_3735() {
	window.obj3727_onLoad_runningActionsCount = obj3727_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3727");
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
			window.obj3727_onLoad_runningActionsCount = window.obj3727_onLoad_runningActionsCount - 1;

if (window.obj3727_onLoad_runningActionsCount == 0) {
	obj3727_onLoad_actionGroup2();
}
		}, 1);
	});
}






































};
obj3727_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3727_onLoad_activeActionGroupIndex = -1;
		$("#obj3727").trigger("obj3727_onLoad_ended");
		
		return;
	}
	window.obj3727_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj3727_onLoad();
function loop_obj3727_onLoad() {

	var loopCount = 0;

	window.obj3727_onLoad_loopCount = window.obj3727_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj3727_onLoad_loopCount > loopCount) {
		window.obj3727_onLoad_loopCount = 0
		obj3727_onLoad_actionGroup3();
	} else {
		obj3727_onLoad_actionGroup0();
	}

}


























};
obj3727_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3727_onLoad_activeActionGroupIndex = -1;
		$("#obj3727").trigger("obj3727_onLoad_ended");
		
		return;
	}
	window.obj3727_onLoad_activeActionGroupIndex = 3;
	










































};
obj3712_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3712_onLoad_activeActionGroupIndex = -1;
		$("#obj3712").trigger("obj3712_onLoad_ended");
		
		return;
	}
	window.obj3712_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj3712 
move_3725();
function move_3725() {
	window.obj3712_onLoad_runningActionsCount = obj3712_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj3712");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = -139;
	var moveY = 893;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj3712_onLoad_runningActionsCount = window.obj3712_onLoad_runningActionsCount - 1;

if (window.obj3712_onLoad_runningActionsCount == 0) {
	obj3712_onLoad_actionGroup1();
}
		}, 1);
	});
}












//	action: wait
wait_3724();
function wait_3724() {
	window.obj3712_onLoad_runningActionsCount = obj3712_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj3712_onLoad_runningActionsCount = window.obj3712_onLoad_runningActionsCount - 1;

if (window.obj3712_onLoad_runningActionsCount == 0) {
	obj3712_onLoad_actionGroup1();
}
	}, 500);
}

























};
obj3712_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3712_onLoad_activeActionGroupIndex = -1;
		$("#obj3712").trigger("obj3712_onLoad_ended");
		
		return;
	}
	window.obj3712_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj3712 
move_3715();
function move_3715() {
	window.obj3712_onLoad_runningActionsCount = obj3712_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3712");
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
			window.obj3712_onLoad_runningActionsCount = window.obj3712_onLoad_runningActionsCount - 1;

if (window.obj3712_onLoad_runningActionsCount == 0) {
	obj3712_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3712 
move_3716();
function move_3716() {
	window.obj3712_onLoad_runningActionsCount = obj3712_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3712");
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
			window.obj3712_onLoad_runningActionsCount = window.obj3712_onLoad_runningActionsCount - 1;

if (window.obj3712_onLoad_runningActionsCount == 0) {
	obj3712_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3712 
move_3717();
function move_3717() {
	window.obj3712_onLoad_runningActionsCount = obj3712_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3712");
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
			window.obj3712_onLoad_runningActionsCount = window.obj3712_onLoad_runningActionsCount - 1;

if (window.obj3712_onLoad_runningActionsCount == 0) {
	obj3712_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3712 
move_3718();
function move_3718() {
	window.obj3712_onLoad_runningActionsCount = obj3712_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3712");
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
			window.obj3712_onLoad_runningActionsCount = window.obj3712_onLoad_runningActionsCount - 1;

if (window.obj3712_onLoad_runningActionsCount == 0) {
	obj3712_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3712 
move_3719();
function move_3719() {
	window.obj3712_onLoad_runningActionsCount = obj3712_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3712");
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
			window.obj3712_onLoad_runningActionsCount = window.obj3712_onLoad_runningActionsCount - 1;

if (window.obj3712_onLoad_runningActionsCount == 0) {
	obj3712_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3712 
move_3720();
function move_3720() {
	window.obj3712_onLoad_runningActionsCount = obj3712_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3712");
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
			window.obj3712_onLoad_runningActionsCount = window.obj3712_onLoad_runningActionsCount - 1;

if (window.obj3712_onLoad_runningActionsCount == 0) {
	obj3712_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3712 
move_3721();
function move_3721() {
	window.obj3712_onLoad_runningActionsCount = obj3712_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3712");
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
			window.obj3712_onLoad_runningActionsCount = window.obj3712_onLoad_runningActionsCount - 1;

if (window.obj3712_onLoad_runningActionsCount == 0) {
	obj3712_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3712 
move_3722();
function move_3722() {
	window.obj3712_onLoad_runningActionsCount = obj3712_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3712");
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
			window.obj3712_onLoad_runningActionsCount = window.obj3712_onLoad_runningActionsCount - 1;

if (window.obj3712_onLoad_runningActionsCount == 0) {
	obj3712_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3712 
move_3723();
function move_3723() {
	window.obj3712_onLoad_runningActionsCount = obj3712_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3712");
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
			window.obj3712_onLoad_runningActionsCount = window.obj3712_onLoad_runningActionsCount - 1;

if (window.obj3712_onLoad_runningActionsCount == 0) {
	obj3712_onLoad_actionGroup2();
}
		}, 1);
	});
}






































};
obj3712_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3712_onLoad_activeActionGroupIndex = -1;
		$("#obj3712").trigger("obj3712_onLoad_ended");
		
		return;
	}
	window.obj3712_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj3712_onLoad();
function loop_obj3712_onLoad() {

	var loopCount = 0;

	window.obj3712_onLoad_loopCount = window.obj3712_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj3712_onLoad_loopCount > loopCount) {
		window.obj3712_onLoad_loopCount = 0
		obj3712_onLoad_actionGroup3();
	} else {
		obj3712_onLoad_actionGroup0();
	}

}


























};
obj3712_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3712_onLoad_activeActionGroupIndex = -1;
		$("#obj3712").trigger("obj3712_onLoad_ended");
		
		return;
	}
	window.obj3712_onLoad_activeActionGroupIndex = 3;
	










































};
obj3700_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3700_onLoad_activeActionGroupIndex = -1;
		$("#obj3700").trigger("obj3700_onLoad_ended");
		
		return;
	}
	window.obj3700_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj3700 
move_3710();
function move_3710() {
	window.obj3700_onLoad_runningActionsCount = obj3700_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj3700");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = -96;
	var moveY = 806;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj3700_onLoad_runningActionsCount = window.obj3700_onLoad_runningActionsCount - 1;

if (window.obj3700_onLoad_runningActionsCount == 0) {
	obj3700_onLoad_actionGroup1();
}
		}, 1);
	});
}












//	action: wait
wait_3709();
function wait_3709() {
	window.obj3700_onLoad_runningActionsCount = obj3700_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj3700_onLoad_runningActionsCount = window.obj3700_onLoad_runningActionsCount - 1;

if (window.obj3700_onLoad_runningActionsCount == 0) {
	obj3700_onLoad_actionGroup1();
}
	}, 1000);
}

























};
obj3700_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3700_onLoad_activeActionGroupIndex = -1;
		$("#obj3700").trigger("obj3700_onLoad_ended");
		
		return;
	}
	window.obj3700_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj3700 
move_3703();
function move_3703() {
	window.obj3700_onLoad_runningActionsCount = obj3700_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3700");
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
			window.obj3700_onLoad_runningActionsCount = window.obj3700_onLoad_runningActionsCount - 1;

if (window.obj3700_onLoad_runningActionsCount == 0) {
	obj3700_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3700 
move_3704();
function move_3704() {
	window.obj3700_onLoad_runningActionsCount = obj3700_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3700");
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
			window.obj3700_onLoad_runningActionsCount = window.obj3700_onLoad_runningActionsCount - 1;

if (window.obj3700_onLoad_runningActionsCount == 0) {
	obj3700_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3700 
move_3705();
function move_3705() {
	window.obj3700_onLoad_runningActionsCount = obj3700_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3700");
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
			window.obj3700_onLoad_runningActionsCount = window.obj3700_onLoad_runningActionsCount - 1;

if (window.obj3700_onLoad_runningActionsCount == 0) {
	obj3700_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3700 
move_3706();
function move_3706() {
	window.obj3700_onLoad_runningActionsCount = obj3700_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3700");
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
			window.obj3700_onLoad_runningActionsCount = window.obj3700_onLoad_runningActionsCount - 1;

if (window.obj3700_onLoad_runningActionsCount == 0) {
	obj3700_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3700 
move_3707();
function move_3707() {
	window.obj3700_onLoad_runningActionsCount = obj3700_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3700");
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
			window.obj3700_onLoad_runningActionsCount = window.obj3700_onLoad_runningActionsCount - 1;

if (window.obj3700_onLoad_runningActionsCount == 0) {
	obj3700_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3700 
move_3708();
function move_3708() {
	window.obj3700_onLoad_runningActionsCount = obj3700_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3700");
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
			window.obj3700_onLoad_runningActionsCount = window.obj3700_onLoad_runningActionsCount - 1;

if (window.obj3700_onLoad_runningActionsCount == 0) {
	obj3700_onLoad_actionGroup2();
}
		}, 1);
	});
}






































};
obj3700_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3700_onLoad_activeActionGroupIndex = -1;
		$("#obj3700").trigger("obj3700_onLoad_ended");
		
		return;
	}
	window.obj3700_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj3700_onLoad();
function loop_obj3700_onLoad() {

	var loopCount = 0;

	window.obj3700_onLoad_loopCount = window.obj3700_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj3700_onLoad_loopCount > loopCount) {
		window.obj3700_onLoad_loopCount = 0
		obj3700_onLoad_actionGroup3();
	} else {
		obj3700_onLoad_actionGroup0();
	}

}


























};
obj3700_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3700_onLoad_activeActionGroupIndex = -1;
		$("#obj3700").trigger("obj3700_onLoad_ended");
		
		return;
	}
	window.obj3700_onLoad_activeActionGroupIndex = 3;
	










































};
obj3686_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3686_onLoad_activeActionGroupIndex = -1;
		$("#obj3686").trigger("obj3686_onLoad_ended");
		
		return;
	}
	window.obj3686_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj3686 
move_3698();
function move_3698() {
	window.obj3686_onLoad_runningActionsCount = obj3686_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj3686");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = -157;
	var moveY = -64;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj3686_onLoad_runningActionsCount = window.obj3686_onLoad_runningActionsCount - 1;

if (window.obj3686_onLoad_runningActionsCount == 0) {
	obj3686_onLoad_actionGroup1();
}
		}, 1);
	});
}












//	action: wait
wait_3697();
function wait_3697() {
	window.obj3686_onLoad_runningActionsCount = obj3686_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj3686_onLoad_runningActionsCount = window.obj3686_onLoad_runningActionsCount - 1;

if (window.obj3686_onLoad_runningActionsCount == 0) {
	obj3686_onLoad_actionGroup1();
}
	}, 1000);
}

























};
obj3686_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3686_onLoad_activeActionGroupIndex = -1;
		$("#obj3686").trigger("obj3686_onLoad_ended");
		
		return;
	}
	window.obj3686_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj3686 
move_3689();
function move_3689() {
	window.obj3686_onLoad_runningActionsCount = obj3686_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3686");
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
			window.obj3686_onLoad_runningActionsCount = window.obj3686_onLoad_runningActionsCount - 1;

if (window.obj3686_onLoad_runningActionsCount == 0) {
	obj3686_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3686 
move_3690();
function move_3690() {
	window.obj3686_onLoad_runningActionsCount = obj3686_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3686");
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
			window.obj3686_onLoad_runningActionsCount = window.obj3686_onLoad_runningActionsCount - 1;

if (window.obj3686_onLoad_runningActionsCount == 0) {
	obj3686_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3686 
move_3691();
function move_3691() {
	window.obj3686_onLoad_runningActionsCount = obj3686_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3686");
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
			window.obj3686_onLoad_runningActionsCount = window.obj3686_onLoad_runningActionsCount - 1;

if (window.obj3686_onLoad_runningActionsCount == 0) {
	obj3686_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3686 
move_3692();
function move_3692() {
	window.obj3686_onLoad_runningActionsCount = obj3686_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3686");
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
			window.obj3686_onLoad_runningActionsCount = window.obj3686_onLoad_runningActionsCount - 1;

if (window.obj3686_onLoad_runningActionsCount == 0) {
	obj3686_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3686 
move_3693();
function move_3693() {
	window.obj3686_onLoad_runningActionsCount = obj3686_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3686");
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
			window.obj3686_onLoad_runningActionsCount = window.obj3686_onLoad_runningActionsCount - 1;

if (window.obj3686_onLoad_runningActionsCount == 0) {
	obj3686_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3686 
move_3694();
function move_3694() {
	window.obj3686_onLoad_runningActionsCount = obj3686_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3686");
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
			window.obj3686_onLoad_runningActionsCount = window.obj3686_onLoad_runningActionsCount - 1;

if (window.obj3686_onLoad_runningActionsCount == 0) {
	obj3686_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3686 
move_3695();
function move_3695() {
	window.obj3686_onLoad_runningActionsCount = obj3686_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3686");
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
			window.obj3686_onLoad_runningActionsCount = window.obj3686_onLoad_runningActionsCount - 1;

if (window.obj3686_onLoad_runningActionsCount == 0) {
	obj3686_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3686 
move_3696();
function move_3696() {
	window.obj3686_onLoad_runningActionsCount = obj3686_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3686");
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
			window.obj3686_onLoad_runningActionsCount = window.obj3686_onLoad_runningActionsCount - 1;

if (window.obj3686_onLoad_runningActionsCount == 0) {
	obj3686_onLoad_actionGroup2();
}
		}, 1);
	});
}






































};
obj3686_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3686_onLoad_activeActionGroupIndex = -1;
		$("#obj3686").trigger("obj3686_onLoad_ended");
		
		return;
	}
	window.obj3686_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj3686_onLoad();
function loop_obj3686_onLoad() {

	var loopCount = 0;

	window.obj3686_onLoad_loopCount = window.obj3686_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj3686_onLoad_loopCount > loopCount) {
		window.obj3686_onLoad_loopCount = 0
		obj3686_onLoad_actionGroup3();
	} else {
		obj3686_onLoad_actionGroup0();
	}

}


























};
obj3686_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3686_onLoad_activeActionGroupIndex = -1;
		$("#obj3686").trigger("obj3686_onLoad_ended");
		
		return;
	}
	window.obj3686_onLoad_activeActionGroupIndex = 3;
	










































};
obj3674_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3674_onLoad_activeActionGroupIndex = -1;
		$("#obj3674").trigger("obj3674_onLoad_ended");
		
		return;
	}
	window.obj3674_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj3674 
move_3684();
function move_3684() {
	window.obj3674_onLoad_runningActionsCount = obj3674_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj3674");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = -181;
	var moveY = 257;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj3674_onLoad_runningActionsCount = window.obj3674_onLoad_runningActionsCount - 1;

if (window.obj3674_onLoad_runningActionsCount == 0) {
	obj3674_onLoad_actionGroup1();
}
		}, 1);
	});
}












//	action: wait
wait_3683();
function wait_3683() {
	window.obj3674_onLoad_runningActionsCount = obj3674_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj3674_onLoad_runningActionsCount = window.obj3674_onLoad_runningActionsCount - 1;

if (window.obj3674_onLoad_runningActionsCount == 0) {
	obj3674_onLoad_actionGroup1();
}
	}, 400);
}

























};
obj3674_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3674_onLoad_activeActionGroupIndex = -1;
		$("#obj3674").trigger("obj3674_onLoad_ended");
		
		return;
	}
	window.obj3674_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj3674 
move_3677();
function move_3677() {
	window.obj3674_onLoad_runningActionsCount = obj3674_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3674");
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
			window.obj3674_onLoad_runningActionsCount = window.obj3674_onLoad_runningActionsCount - 1;

if (window.obj3674_onLoad_runningActionsCount == 0) {
	obj3674_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3674 
move_3678();
function move_3678() {
	window.obj3674_onLoad_runningActionsCount = obj3674_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3674");
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
			window.obj3674_onLoad_runningActionsCount = window.obj3674_onLoad_runningActionsCount - 1;

if (window.obj3674_onLoad_runningActionsCount == 0) {
	obj3674_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3674 
move_3679();
function move_3679() {
	window.obj3674_onLoad_runningActionsCount = obj3674_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3674");
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
			window.obj3674_onLoad_runningActionsCount = window.obj3674_onLoad_runningActionsCount - 1;

if (window.obj3674_onLoad_runningActionsCount == 0) {
	obj3674_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3674 
move_3680();
function move_3680() {
	window.obj3674_onLoad_runningActionsCount = obj3674_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3674");
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
			window.obj3674_onLoad_runningActionsCount = window.obj3674_onLoad_runningActionsCount - 1;

if (window.obj3674_onLoad_runningActionsCount == 0) {
	obj3674_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3674 
move_3681();
function move_3681() {
	window.obj3674_onLoad_runningActionsCount = obj3674_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3674");
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
			window.obj3674_onLoad_runningActionsCount = window.obj3674_onLoad_runningActionsCount - 1;

if (window.obj3674_onLoad_runningActionsCount == 0) {
	obj3674_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3674 
move_3682();
function move_3682() {
	window.obj3674_onLoad_runningActionsCount = obj3674_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3674");
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
			window.obj3674_onLoad_runningActionsCount = window.obj3674_onLoad_runningActionsCount - 1;

if (window.obj3674_onLoad_runningActionsCount == 0) {
	obj3674_onLoad_actionGroup2();
}
		}, 1);
	});
}






































};
obj3674_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3674_onLoad_activeActionGroupIndex = -1;
		$("#obj3674").trigger("obj3674_onLoad_ended");
		
		return;
	}
	window.obj3674_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj3674_onLoad();
function loop_obj3674_onLoad() {

	var loopCount = 0;

	window.obj3674_onLoad_loopCount = window.obj3674_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj3674_onLoad_loopCount > loopCount) {
		window.obj3674_onLoad_loopCount = 0
		obj3674_onLoad_actionGroup3();
	} else {
		obj3674_onLoad_actionGroup0();
	}

}


























};
obj3674_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3674_onLoad_activeActionGroupIndex = -1;
		$("#obj3674").trigger("obj3674_onLoad_ended");
		
		return;
	}
	window.obj3674_onLoad_activeActionGroupIndex = 3;
	










































};
obj3786_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3786_onLoad_activeActionGroupIndex = -1;
		$("#obj3786").trigger("obj3786_onLoad_ended");
		
		return;
	}
	window.obj3786_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj3786 
move_3789();
function move_3789() {
	window.obj3786_onLoad_runningActionsCount = obj3786_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3786");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-228";
	var moveY = "+=-46";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj3786_onLoad_runningActionsCount = window.obj3786_onLoad_runningActionsCount - 1;

if (window.obj3786_onLoad_runningActionsCount == 0) {
	obj3786_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3786 
move_3790();
function move_3790() {
	window.obj3786_onLoad_runningActionsCount = obj3786_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3786");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-340";
	var moveY = "+=-21";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj3786_onLoad_runningActionsCount = window.obj3786_onLoad_runningActionsCount - 1;

if (window.obj3786_onLoad_runningActionsCount == 0) {
	obj3786_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3786 
move_3791();
function move_3791() {
	window.obj3786_onLoad_runningActionsCount = obj3786_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3786");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-396";
	var moveY = "+=30";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj3786_onLoad_runningActionsCount = window.obj3786_onLoad_runningActionsCount - 1;

if (window.obj3786_onLoad_runningActionsCount == 0) {
	obj3786_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3786 
move_3792();
function move_3792() {
	window.obj3786_onLoad_runningActionsCount = obj3786_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3786");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-290";
	var moveY = "+=118";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj3786_onLoad_runningActionsCount = window.obj3786_onLoad_runningActionsCount - 1;

if (window.obj3786_onLoad_runningActionsCount == 0) {
	obj3786_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3786 
move_3793();
function move_3793() {
	window.obj3786_onLoad_runningActionsCount = obj3786_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3786");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-379";
	var moveY = "+=26";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj3786_onLoad_runningActionsCount = window.obj3786_onLoad_runningActionsCount - 1;

if (window.obj3786_onLoad_runningActionsCount == 0) {
	obj3786_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj3786_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3786_onLoad_activeActionGroupIndex = -1;
		$("#obj3786").trigger("obj3786_onLoad_ended");
		
		return;
	}
	window.obj3786_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj3786 
move_3795();
function move_3795() {
	window.obj3786_onLoad_runningActionsCount = obj3786_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3786");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1362;
	var moveY = 725;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj3786_onLoad_runningActionsCount = window.obj3786_onLoad_runningActionsCount - 1;

if (window.obj3786_onLoad_runningActionsCount == 0) {
	obj3786_onLoad_actionGroup2();
}
		}, 1);
	});
}












//	action: wait
wait_3794();
function wait_3794() {
	window.obj3786_onLoad_runningActionsCount = obj3786_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj3786_onLoad_runningActionsCount = window.obj3786_onLoad_runningActionsCount - 1;

if (window.obj3786_onLoad_runningActionsCount == 0) {
	obj3786_onLoad_actionGroup2();
}
	}, 1000);
}

























};
obj3786_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3786_onLoad_activeActionGroupIndex = -1;
		$("#obj3786").trigger("obj3786_onLoad_ended");
		
		return;
	}
	window.obj3786_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj3786_onLoad();
function loop_obj3786_onLoad() {

	var loopCount = 0;

	window.obj3786_onLoad_loopCount = window.obj3786_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj3786_onLoad_loopCount > loopCount) {
		window.obj3786_onLoad_loopCount = 0
		obj3786_onLoad_actionGroup3();
	} else {
		obj3786_onLoad_actionGroup0();
	}

}


























};
obj3786_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3786_onLoad_activeActionGroupIndex = -1;
		$("#obj3786").trigger("obj3786_onLoad_ended");
		
		return;
	}
	window.obj3786_onLoad_activeActionGroupIndex = 3;
	










































};
obj3798_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3798_onLoad_activeActionGroupIndex = -1;
		$("#obj3798").trigger("obj3798_onLoad_ended");
		
		return;
	}
	window.obj3798_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj3798 
move_3807();
function move_3807() {
	window.obj3798_onLoad_runningActionsCount = obj3798_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3798");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1378;
	var moveY = 283;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj3798_onLoad_runningActionsCount = window.obj3798_onLoad_runningActionsCount - 1;

if (window.obj3798_onLoad_runningActionsCount == 0) {
	obj3798_onLoad_actionGroup1();
}
		}, 1);
	});
}












//	action: wait
wait_3806();
function wait_3806() {
	window.obj3798_onLoad_runningActionsCount = obj3798_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj3798_onLoad_runningActionsCount = window.obj3798_onLoad_runningActionsCount - 1;

if (window.obj3798_onLoad_runningActionsCount == 0) {
	obj3798_onLoad_actionGroup1();
}
	}, 1000);
}

























};
obj3798_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3798_onLoad_activeActionGroupIndex = -1;
		$("#obj3798").trigger("obj3798_onLoad_ended");
		
		return;
	}
	window.obj3798_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj3798 
move_3801();
function move_3801() {
	window.obj3798_onLoad_runningActionsCount = obj3798_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3798");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-228";
	var moveY = "+=-46";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj3798_onLoad_runningActionsCount = window.obj3798_onLoad_runningActionsCount - 1;

if (window.obj3798_onLoad_runningActionsCount == 0) {
	obj3798_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3798 
move_3802();
function move_3802() {
	window.obj3798_onLoad_runningActionsCount = obj3798_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3798");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-340";
	var moveY = "+=-21";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj3798_onLoad_runningActionsCount = window.obj3798_onLoad_runningActionsCount - 1;

if (window.obj3798_onLoad_runningActionsCount == 0) {
	obj3798_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3798 
move_3803();
function move_3803() {
	window.obj3798_onLoad_runningActionsCount = obj3798_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3798");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-396";
	var moveY = "+=30";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj3798_onLoad_runningActionsCount = window.obj3798_onLoad_runningActionsCount - 1;

if (window.obj3798_onLoad_runningActionsCount == 0) {
	obj3798_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3798 
move_3804();
function move_3804() {
	window.obj3798_onLoad_runningActionsCount = obj3798_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3798");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-290";
	var moveY = "+=118";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj3798_onLoad_runningActionsCount = window.obj3798_onLoad_runningActionsCount - 1;

if (window.obj3798_onLoad_runningActionsCount == 0) {
	obj3798_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3798 
move_3805();
function move_3805() {
	window.obj3798_onLoad_runningActionsCount = obj3798_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3798");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-379";
	var moveY = "+=26";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj3798_onLoad_runningActionsCount = window.obj3798_onLoad_runningActionsCount - 1;

if (window.obj3798_onLoad_runningActionsCount == 0) {
	obj3798_onLoad_actionGroup2();
}
		}, 1);
	});
}






































};
obj3798_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3798_onLoad_activeActionGroupIndex = -1;
		$("#obj3798").trigger("obj3798_onLoad_ended");
		
		return;
	}
	window.obj3798_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj3798_onLoad();
function loop_obj3798_onLoad() {

	var loopCount = 0;

	window.obj3798_onLoad_loopCount = window.obj3798_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj3798_onLoad_loopCount > loopCount) {
		window.obj3798_onLoad_loopCount = 0
		obj3798_onLoad_actionGroup3();
	} else {
		obj3798_onLoad_actionGroup0();
	}

}


























};
obj3798_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3798_onLoad_activeActionGroupIndex = -1;
		$("#obj3798").trigger("obj3798_onLoad_ended");
		
		return;
	}
	window.obj3798_onLoad_activeActionGroupIndex = 3;
	










































};
obj3811_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3811_onLoad_activeActionGroupIndex = -1;
		$("#obj3811").trigger("obj3811_onLoad_ended");
		
		return;
	}
	window.obj3811_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj3811 
move_3816();
function move_3816() {
	window.obj3811_onLoad_runningActionsCount = obj3811_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3811");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=1192";
	var moveY = "+=-237";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 800, easing, function() {
		setTimeout(function() {
			window.obj3811_onLoad_runningActionsCount = window.obj3811_onLoad_runningActionsCount - 1;

if (window.obj3811_onLoad_runningActionsCount == 0) {
	obj3811_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3811 
move_3817();
function move_3817() {
	window.obj3811_onLoad_runningActionsCount = obj3811_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3811");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-667";
	var moveY = "+=-99";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj3811_onLoad_runningActionsCount = window.obj3811_onLoad_runningActionsCount - 1;

if (window.obj3811_onLoad_runningActionsCount == 0) {
	obj3811_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3811 
move_3818();
function move_3818() {
	window.obj3811_onLoad_runningActionsCount = obj3811_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3811");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-669";
	var moveY = "+=-39";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 800, easing, function() {
		setTimeout(function() {
			window.obj3811_onLoad_runningActionsCount = window.obj3811_onLoad_runningActionsCount - 1;

if (window.obj3811_onLoad_runningActionsCount == 0) {
	obj3811_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3811 
move_3819();
function move_3819() {
	window.obj3811_onLoad_runningActionsCount = obj3811_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3811");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-544";
	var moveY = "+=53";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 800, easing, function() {
		setTimeout(function() {
			window.obj3811_onLoad_runningActionsCount = window.obj3811_onLoad_runningActionsCount - 1;

if (window.obj3811_onLoad_runningActionsCount == 0) {
	obj3811_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3811 
move_3820();
function move_3820() {
	window.obj3811_onLoad_runningActionsCount = obj3811_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3811");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-633";
	var moveY = "+=-45";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj3811_onLoad_runningActionsCount = window.obj3811_onLoad_runningActionsCount - 1;

if (window.obj3811_onLoad_runningActionsCount == 0) {
	obj3811_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3811 
move_3822();
function move_3822() {
	window.obj3811_onLoad_runningActionsCount = obj3811_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3811");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-232";
	var moveY = "+=-3";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj3811_onLoad_runningActionsCount = window.obj3811_onLoad_runningActionsCount - 1;

if (window.obj3811_onLoad_runningActionsCount == 0) {
	obj3811_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj3811_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3811_onLoad_activeActionGroupIndex = -1;
		$("#obj3811").trigger("obj3811_onLoad_ended");
		
		return;
	}
	window.obj3811_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj3811 
move_3815();
function move_3815() {
	window.obj3811_onLoad_runningActionsCount = obj3811_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3811");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1362;
	var moveY = 546;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj3811_onLoad_runningActionsCount = window.obj3811_onLoad_runningActionsCount - 1;

if (window.obj3811_onLoad_runningActionsCount == 0) {
	obj3811_onLoad_actionGroup2();
}
		}, 1);
	});
}












//	action: wait
wait_3814();
function wait_3814() {
	window.obj3811_onLoad_runningActionsCount = obj3811_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj3811_onLoad_runningActionsCount = window.obj3811_onLoad_runningActionsCount - 1;

if (window.obj3811_onLoad_runningActionsCount == 0) {
	obj3811_onLoad_actionGroup2();
}
	}, 1000);
}

























};
obj3811_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3811_onLoad_activeActionGroupIndex = -1;
		$("#obj3811").trigger("obj3811_onLoad_ended");
		
		return;
	}
	window.obj3811_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj3811_onLoad();
function loop_obj3811_onLoad() {

	var loopCount = 0;

	window.obj3811_onLoad_loopCount = window.obj3811_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj3811_onLoad_loopCount > loopCount) {
		window.obj3811_onLoad_loopCount = 0
		obj3811_onLoad_actionGroup3();
	} else {
		obj3811_onLoad_actionGroup0();
	}

}


























};
obj3811_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3811_onLoad_activeActionGroupIndex = -1;
		$("#obj3811").trigger("obj3811_onLoad_ended");
		
		return;
	}
	window.obj3811_onLoad_activeActionGroupIndex = 3;
	










































};
obj3823_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3823_onLoad_activeActionGroupIndex = -1;
		$("#obj3823").trigger("obj3823_onLoad_ended");
		
		return;
	}
	window.obj3823_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj3823 
move_3833();
function move_3833() {
	window.obj3823_onLoad_runningActionsCount = obj3823_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3823");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1466;
	var moveY = 60;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj3823_onLoad_runningActionsCount = window.obj3823_onLoad_runningActionsCount - 1;

if (window.obj3823_onLoad_runningActionsCount == 0) {
	obj3823_onLoad_actionGroup1();
}
		}, 1);
	});
}












//	action: wait
wait_3832();
function wait_3832() {
	window.obj3823_onLoad_runningActionsCount = obj3823_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj3823_onLoad_runningActionsCount = window.obj3823_onLoad_runningActionsCount - 1;

if (window.obj3823_onLoad_runningActionsCount == 0) {
	obj3823_onLoad_actionGroup1();
}
	}, 1000);
}

























};
obj3823_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3823_onLoad_activeActionGroupIndex = -1;
		$("#obj3823").trigger("obj3823_onLoad_ended");
		
		return;
	}
	window.obj3823_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj3823 
move_3826();
function move_3826() {
	window.obj3823_onLoad_runningActionsCount = obj3823_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3823");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=1192";
	var moveY = "+=-237";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 800, easing, function() {
		setTimeout(function() {
			window.obj3823_onLoad_runningActionsCount = window.obj3823_onLoad_runningActionsCount - 1;

if (window.obj3823_onLoad_runningActionsCount == 0) {
	obj3823_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3823 
move_3827();
function move_3827() {
	window.obj3823_onLoad_runningActionsCount = obj3823_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3823");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-667";
	var moveY = "+=-99";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj3823_onLoad_runningActionsCount = window.obj3823_onLoad_runningActionsCount - 1;

if (window.obj3823_onLoad_runningActionsCount == 0) {
	obj3823_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3823 
move_3828();
function move_3828() {
	window.obj3823_onLoad_runningActionsCount = obj3823_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3823");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-669";
	var moveY = "+=-39";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj3823_onLoad_runningActionsCount = window.obj3823_onLoad_runningActionsCount - 1;

if (window.obj3823_onLoad_runningActionsCount == 0) {
	obj3823_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3823 
move_3829();
function move_3829() {
	window.obj3823_onLoad_runningActionsCount = obj3823_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3823");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-544";
	var moveY = "+=53";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 800, easing, function() {
		setTimeout(function() {
			window.obj3823_onLoad_runningActionsCount = window.obj3823_onLoad_runningActionsCount - 1;

if (window.obj3823_onLoad_runningActionsCount == 0) {
	obj3823_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3823 
move_3830();
function move_3830() {
	window.obj3823_onLoad_runningActionsCount = obj3823_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3823");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-633";
	var moveY = "+=-45";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj3823_onLoad_runningActionsCount = window.obj3823_onLoad_runningActionsCount - 1;

if (window.obj3823_onLoad_runningActionsCount == 0) {
	obj3823_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj3823 
move_3831();
function move_3831() {
	window.obj3823_onLoad_runningActionsCount = obj3823_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3823");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-232";
	var moveY = "+=-3";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj3823_onLoad_runningActionsCount = window.obj3823_onLoad_runningActionsCount - 1;

if (window.obj3823_onLoad_runningActionsCount == 0) {
	obj3823_onLoad_actionGroup2();
}
		}, 1);
	});
}






































};
obj3823_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3823_onLoad_activeActionGroupIndex = -1;
		$("#obj3823").trigger("obj3823_onLoad_ended");
		
		return;
	}
	window.obj3823_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj3823_onLoad();
function loop_obj3823_onLoad() {

	var loopCount = 0;

	window.obj3823_onLoad_loopCount = window.obj3823_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj3823_onLoad_loopCount > loopCount) {
		window.obj3823_onLoad_loopCount = 0
		obj3823_onLoad_actionGroup3();
	} else {
		obj3823_onLoad_actionGroup0();
	}

}


























};
obj3823_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3823_onLoad_activeActionGroupIndex = -1;
		$("#obj3823").trigger("obj3823_onLoad_ended");
		
		return;
	}
	window.obj3823_onLoad_activeActionGroupIndex = 3;
	










































};
obj3835_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3835_onLoad_activeActionGroupIndex = -1;
		$("#obj3835").trigger("obj3835_onLoad_ended");
		
		return;
	}
	window.obj3835_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj3835 
move_3838();
function move_3838() {
	window.obj3835_onLoad_runningActionsCount = obj3835_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3835");
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
			window.obj3835_onLoad_runningActionsCount = window.obj3835_onLoad_runningActionsCount - 1;

if (window.obj3835_onLoad_runningActionsCount == 0) {
	obj3835_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3835 
move_3839();
function move_3839() {
	window.obj3835_onLoad_runningActionsCount = obj3835_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3835");
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
			window.obj3835_onLoad_runningActionsCount = window.obj3835_onLoad_runningActionsCount - 1;

if (window.obj3835_onLoad_runningActionsCount == 0) {
	obj3835_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3835 
move_3840();
function move_3840() {
	window.obj3835_onLoad_runningActionsCount = obj3835_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3835");
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
			window.obj3835_onLoad_runningActionsCount = window.obj3835_onLoad_runningActionsCount - 1;

if (window.obj3835_onLoad_runningActionsCount == 0) {
	obj3835_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3835 
move_3841();
function move_3841() {
	window.obj3835_onLoad_runningActionsCount = obj3835_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3835");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=134";
	var moveY = "+=-109";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 800, easing, function() {
		setTimeout(function() {
			window.obj3835_onLoad_runningActionsCount = window.obj3835_onLoad_runningActionsCount - 1;

if (window.obj3835_onLoad_runningActionsCount == 0) {
	obj3835_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3835 
move_3842();
function move_3842() {
	window.obj3835_onLoad_runningActionsCount = obj3835_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3835");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=274";
	var moveY = "+=-65";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 800, easing, function() {
		setTimeout(function() {
			window.obj3835_onLoad_runningActionsCount = window.obj3835_onLoad_runningActionsCount - 1;

if (window.obj3835_onLoad_runningActionsCount == 0) {
	obj3835_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3835 
move_3843();
function move_3843() {
	window.obj3835_onLoad_runningActionsCount = obj3835_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3835");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=714";
	var moveY = "+=-273";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj3835_onLoad_runningActionsCount = window.obj3835_onLoad_runningActionsCount - 1;

if (window.obj3835_onLoad_runningActionsCount == 0) {
	obj3835_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3835 
move_3844();
function move_3844() {
	window.obj3835_onLoad_runningActionsCount = obj3835_onLoad_runningActionsCount + 1;


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

	var targetObject = $("#obj3835");
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
			window.obj3835_onLoad_runningActionsCount = window.obj3835_onLoad_runningActionsCount - 1;

if (window.obj3835_onLoad_runningActionsCount == 0) {
	obj3835_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj3835_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3835_onLoad_activeActionGroupIndex = -1;
		$("#obj3835").trigger("obj3835_onLoad_ended");
		
		return;
	}
	window.obj3835_onLoad_activeActionGroupIndex = 1;
	
















//	action: wait
wait_3845();
function wait_3845() {
	window.obj3835_onLoad_runningActionsCount = obj3835_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj3835_onLoad_runningActionsCount = window.obj3835_onLoad_runningActionsCount - 1;

if (window.obj3835_onLoad_runningActionsCount == 0) {
	obj3835_onLoad_actionGroup2();
}
	}, 3000);
}

























};
obj3835_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3835_onLoad_activeActionGroupIndex = -1;
		$("#obj3835").trigger("obj3835_onLoad_ended");
		
		return;
	}
	window.obj3835_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj3835_onLoad();
function loop_obj3835_onLoad() {

	var loopCount = 0;

	window.obj3835_onLoad_loopCount = window.obj3835_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj3835_onLoad_loopCount > loopCount) {
		window.obj3835_onLoad_loopCount = 0
		obj3835_onLoad_actionGroup3();
	} else {
		obj3835_onLoad_actionGroup0();
	}

}


























};
obj3835_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3835_onLoad_activeActionGroupIndex = -1;
		$("#obj3835").trigger("obj3835_onLoad_ended");
		
		return;
	}
	window.obj3835_onLoad_activeActionGroupIndex = 3;
	










































};
obj734_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj734_onLoad_activeActionGroupIndex = -1;
		$("#obj734").trigger("obj734_onLoad_ended");
		
		return;
	}
	window.obj734_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj734 
move_738();
function move_738() {
	window.obj734_onLoad_runningActionsCount = obj734_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj734");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 68;
	var moveY = 270;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 800, easing, function() {
		setTimeout(function() {
			window.obj734_onLoad_runningActionsCount = window.obj734_onLoad_runningActionsCount - 1;

if (window.obj734_onLoad_runningActionsCount == 0) {
	obj734_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj734_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj734_onLoad_activeActionGroupIndex = -1;
		$("#obj734").trigger("obj734_onLoad_ended");
		
		return;
	}
	window.obj734_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj734 
move_737();
function move_737() {
	window.obj734_onLoad_runningActionsCount = obj734_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj734");
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
			window.obj734_onLoad_runningActionsCount = window.obj734_onLoad_runningActionsCount - 1;

if (window.obj734_onLoad_runningActionsCount == 0) {
	obj734_onLoad_actionGroup2();
}
		}, 1);
	});
}






































};
obj734_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj734_onLoad_activeActionGroupIndex = -1;
		$("#obj734").trigger("obj734_onLoad_ended");
		
		return;
	}
	window.obj734_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj734_onLoad();
function loop_obj734_onLoad() {

	var loopCount = 0;

	window.obj734_onLoad_loopCount = window.obj734_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj734_onLoad_loopCount > loopCount) {
		window.obj734_onLoad_loopCount = 0
		obj734_onLoad_actionGroup3();
	} else {
		obj734_onLoad_actionGroup0();
	}

}


























};
obj734_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj734_onLoad_activeActionGroupIndex = -1;
		$("#obj734").trigger("obj734_onLoad_ended");
		
		return;
	}
	window.obj734_onLoad_activeActionGroupIndex = 3;
	










































};
obj753_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj753_SCEventRun_activeActionGroupIndex = -1;
		$("#obj753").trigger("obj753_SCEventRun_ended");
		
		return;
	}
	window.obj753_SCEventRun_activeActionGroupIndex = 0;
	


//	action: show 
//	target: obj744 
(function(){
	window.obj753_SCEventRun_runningActionsCount = obj753_SCEventRun_runningActionsCount + 1;


	var element = "#obj744";
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
				window.obj753_SCEventRun_runningActionsCount = window.obj753_SCEventRun_runningActionsCount - 1;

if (window.obj753_SCEventRun_runningActionsCount == 0) {
	obj753_SCEventRun_actionGroup1();
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
			window.obj753_SCEventRun_runningActionsCount = window.obj753_SCEventRun_runningActionsCount - 1;

if (window.obj753_SCEventRun_runningActionsCount == 0) {
	obj753_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj742 
(function(){
	window.obj753_SCEventRun_runningActionsCount = obj753_SCEventRun_runningActionsCount + 1;


	var element = "#obj742";
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
				window.obj753_SCEventRun_runningActionsCount = window.obj753_SCEventRun_runningActionsCount - 1;

if (window.obj753_SCEventRun_runningActionsCount == 0) {
	obj753_SCEventRun_actionGroup1();
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
			window.obj753_SCEventRun_runningActionsCount = window.obj753_SCEventRun_runningActionsCount - 1;

if (window.obj753_SCEventRun_runningActionsCount == 0) {
	obj753_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj746 
(function(){
	window.obj753_SCEventRun_runningActionsCount = obj753_SCEventRun_runningActionsCount + 1;


	var element = "#obj746";
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
				window.obj753_SCEventRun_runningActionsCount = window.obj753_SCEventRun_runningActionsCount - 1;

if (window.obj753_SCEventRun_runningActionsCount == 0) {
	obj753_SCEventRun_actionGroup1();
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
			window.obj753_SCEventRun_runningActionsCount = window.obj753_SCEventRun_runningActionsCount - 1;

if (window.obj753_SCEventRun_runningActionsCount == 0) {
	obj753_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();









//	action: playAudioFile
playAudioFile_5598();
function playAudioFile_5598() {
	window.obj753_SCEventRun_runningActionsCount = obj753_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5598")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5598");
			$("#obj_audio_playSoundFile5598").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj753_SCEventRun_runningActionsCount = window.obj753_SCEventRun_runningActionsCount - 1;

if (window.obj753_SCEventRun_runningActionsCount == 0) {
	obj753_SCEventRun_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj753_SCEventRun_runningActionsCount = window.obj753_SCEventRun_runningActionsCount - 1;

if (window.obj753_SCEventRun_runningActionsCount == 0) {
	obj753_SCEventRun_actionGroup1();
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
				window.obj753_SCEventRun_runningActionsCount = window.obj753_SCEventRun_runningActionsCount - 1;

if (window.obj753_SCEventRun_runningActionsCount == 0) {
	obj753_SCEventRun_actionGroup1();
}
			}, false);
		} else {
			window.obj753_SCEventRun_runningActionsCount = window.obj753_SCEventRun_runningActionsCount - 1;

if (window.obj753_SCEventRun_runningActionsCount == 0) {
	obj753_SCEventRun_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_5601();
function runjs_5601() {
	window.obj753_SCEventRun_runningActionsCount = obj753_SCEventRun_runningActionsCount + 1;


	localStorage.setItem("ready", "false");

	setTimeout(function() {
		window.obj753_SCEventRun_runningActionsCount = window.obj753_SCEventRun_runningActionsCount - 1;

if (window.obj753_SCEventRun_runningActionsCount == 0) {
	obj753_SCEventRun_actionGroup1();
}
	}, 1);
}












};
obj753_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj753_SCEventRun_activeActionGroupIndex = -1;
		$("#obj753").trigger("obj753_SCEventRun_ended");
		
		return;
	}
	window.obj753_SCEventRun_activeActionGroupIndex = 1;
	





























//	action: Run JavaScript
runjs_5599();
function runjs_5599() {
	window.obj753_SCEventRun_runningActionsCount = obj753_SCEventRun_runningActionsCount + 1;


	localStorage.setItem("ready", "true");

	setTimeout(function() {
		window.obj753_SCEventRun_runningActionsCount = window.obj753_SCEventRun_runningActionsCount - 1;

if (window.obj753_SCEventRun_runningActionsCount == 0) {
	obj753_SCEventRun_actionGroup2();
}
	}, 1);
}












};
obj753_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj753_SCEventRun_activeActionGroupIndex = -1;
		$("#obj753").trigger("obj753_SCEventRun_ended");
		
		return;
	}
	window.obj753_SCEventRun_activeActionGroupIndex = 2;
	










































};
obj758_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj758_SCEventRun_activeActionGroupIndex = -1;
		$("#obj758").trigger("obj758_SCEventRun_ended");
		
		return;
	}
	window.obj758_SCEventRun_activeActionGroupIndex = 0;
	




//	action: playAnimation 
//	target: obj708 
playAnimation_760();
function playAnimation_760() {
	var targetObjectId = "#obj708";
	var targetObject = $(targetObjectId)[0];
	window.obj758_SCEventRun_runningActionsCount = obj758_SCEventRun_runningActionsCount + 1;

	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj758_SCEventRun_runningActionsCount = window.obj758_SCEventRun_runningActionsCount - 1;

if (window.obj758_SCEventRun_runningActionsCount == 0) {
	obj758_SCEventRun_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj708 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj708;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");

	setTimeout(function() {
	    api_animate_obj708.startAnimation();
	}, 1);

	if (!isAnimationInfinite) {
		$("#obj708").one("obj708_animation_ended",function(event) {
		    window.obj758_SCEventRun_runningActionsCount = window.obj758_SCEventRun_runningActionsCount - 1;

if (window.obj758_SCEventRun_runningActionsCount == 0) {
	obj758_SCEventRun_actionGroup1();
}
		});
	}
 }













//	action: scale
//	target: obj708 
scale_2899();
function scale_2899() {
	window.obj758_SCEventRun_runningActionsCount = obj758_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj708";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj708';
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
		scale_2899_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2899_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2899_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_2899_completed() {
	setTimeout(function() {
		window.obj758_SCEventRun_runningActionsCount = window.obj758_SCEventRun_runningActionsCount - 1;

if (window.obj758_SCEventRun_runningActionsCount == 0) {
	obj758_SCEventRun_actionGroup1();
}
	}, 1);
}
























};
obj758_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj758_SCEventRun_activeActionGroupIndex = -1;
		$("#obj758").trigger("obj758_SCEventRun_ended");
		
		return;
	}
	window.obj758_SCEventRun_activeActionGroupIndex = 1;
	


//	action: show 
//	target: obj2883 
(function(){
	window.obj758_SCEventRun_runningActionsCount = obj758_SCEventRun_runningActionsCount + 1;


	var element = "#obj2883";
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
		var animationDurationMs = 500;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				window.obj758_SCEventRun_runningActionsCount = window.obj758_SCEventRun_runningActionsCount - 1;

if (window.obj758_SCEventRun_runningActionsCount == 0) {
	obj758_SCEventRun_actionGroup2();
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
			window.obj758_SCEventRun_runningActionsCount = window.obj758_SCEventRun_runningActionsCount - 1;

if (window.obj758_SCEventRun_runningActionsCount == 0) {
	obj758_SCEventRun_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj2885 
(function(){
	window.obj758_SCEventRun_runningActionsCount = obj758_SCEventRun_runningActionsCount + 1;


	var element = "#obj2885";
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
		var animationDurationMs = 500;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				window.obj758_SCEventRun_runningActionsCount = window.obj758_SCEventRun_runningActionsCount - 1;

if (window.obj758_SCEventRun_runningActionsCount == 0) {
	obj758_SCEventRun_actionGroup2();
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
			window.obj758_SCEventRun_runningActionsCount = window.obj758_SCEventRun_runningActionsCount - 1;

if (window.obj758_SCEventRun_runningActionsCount == 0) {
	obj758_SCEventRun_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj2889 
(function(){
	window.obj758_SCEventRun_runningActionsCount = obj758_SCEventRun_runningActionsCount + 1;


	var element = "#obj2889";
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
		var animationDurationMs = 500;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				window.obj758_SCEventRun_runningActionsCount = window.obj758_SCEventRun_runningActionsCount - 1;

if (window.obj758_SCEventRun_runningActionsCount == 0) {
	obj758_SCEventRun_actionGroup2();
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
			window.obj758_SCEventRun_runningActionsCount = window.obj758_SCEventRun_runningActionsCount - 1;

if (window.obj758_SCEventRun_runningActionsCount == 0) {
	obj758_SCEventRun_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj3924 
(function(){
	window.obj758_SCEventRun_runningActionsCount = obj758_SCEventRun_runningActionsCount + 1;


	var element = "#obj3924";
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
		var animationDurationMs = 500;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				window.obj758_SCEventRun_runningActionsCount = window.obj758_SCEventRun_runningActionsCount - 1;

if (window.obj758_SCEventRun_runningActionsCount == 0) {
	obj758_SCEventRun_actionGroup2();
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
			window.obj758_SCEventRun_runningActionsCount = window.obj758_SCEventRun_runningActionsCount - 1;

if (window.obj758_SCEventRun_runningActionsCount == 0) {
	obj758_SCEventRun_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();









//	action: playAudioFile
playAudioFile_5600();
function playAudioFile_5600() {
	window.obj758_SCEventRun_runningActionsCount = obj758_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5600")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5600");
			$("#obj_audio_playSoundFile5600").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj758_SCEventRun_runningActionsCount = window.obj758_SCEventRun_runningActionsCount - 1;

if (window.obj758_SCEventRun_runningActionsCount == 0) {
	obj758_SCEventRun_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj758_SCEventRun_runningActionsCount = window.obj758_SCEventRun_runningActionsCount - 1;

if (window.obj758_SCEventRun_runningActionsCount == 0) {
	obj758_SCEventRun_actionGroup2();
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
				window.obj758_SCEventRun_runningActionsCount = window.obj758_SCEventRun_runningActionsCount - 1;

if (window.obj758_SCEventRun_runningActionsCount == 0) {
	obj758_SCEventRun_actionGroup2();
}
			}, false);
		} else {
			window.obj758_SCEventRun_runningActionsCount = window.obj758_SCEventRun_runningActionsCount - 1;

if (window.obj758_SCEventRun_runningActionsCount == 0) {
	obj758_SCEventRun_actionGroup2();
}
		}
	}

	
	
	
}




































};
obj758_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj758_SCEventRun_activeActionGroupIndex = -1;
		$("#obj758").trigger("obj758_SCEventRun_ended");
		
		return;
	}
	window.obj758_SCEventRun_activeActionGroupIndex = 2;
	










































};
obj708_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj708_onLoad_activeActionGroupIndex = -1;
		$("#obj708").trigger("obj708_onLoad_ended");
		
		return;
	}
	window.obj708_onLoad_activeActionGroupIndex = 0;
	


















//	action: scale
//	target: obj708 
scale_2898();
function scale_2898() {
	window.obj708_onLoad_runningActionsCount = obj708_onLoad_runningActionsCount + 1;

	
	var targetObjectId = "#obj708";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj708';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '0.5';
	var scaleYValue = '0.5';
	var effectDuration = '0';
	var effectEasing = 'linear';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_2898_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2898_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2898_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_2898_completed() {
	setTimeout(function() {
		window.obj708_onLoad_runningActionsCount = window.obj708_onLoad_runningActionsCount - 1;

if (window.obj708_onLoad_runningActionsCount == 0) {
	obj708_onLoad_actionGroup1();
}
	}, 1);
}
























};
obj708_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj708_onLoad_activeActionGroupIndex = -1;
		$("#obj708").trigger("obj708_onLoad_ended");
		
		return;
	}
	window.obj708_onLoad_activeActionGroupIndex = 1;
	



































//	action: run action list container
//	target: obj2918 
runActionList_2923();
function runActionList_2923() {
	window.obj708_onLoad_runningActionsCount = obj708_onLoad_runningActionsCount + 1;

	$("#obj2918").trigger('SCEventRun');
	setTimeout(function() {
		window.obj708_onLoad_runningActionsCount = window.obj708_onLoad_runningActionsCount - 1;

if (window.obj708_onLoad_runningActionsCount == 0) {
	obj708_onLoad_actionGroup2();
}		
	}, 1);
}






};
obj708_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj708_onLoad_activeActionGroupIndex = -1;
		$("#obj708").trigger("obj708_onLoad_ended");
		
		return;
	}
	window.obj708_onLoad_activeActionGroupIndex = 2;
	










































};
obj2885_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2885_onTap_activeActionGroupIndex = -1;
		$("#obj2885").trigger("obj2885_onTap_ended");
		
		return;
	}
	window.obj2885_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj4780 
hide_4789();
function hide_4789() {
	var element = "#obj4780";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2885_onTap_runningActionsCount = obj2885_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj2885_onTap_runningActionsCount = window.obj2885_onTap_runningActionsCount - 1;

if (window.obj2885_onTap_runningActionsCount == 0) {
	obj2885_onTap_actionGroup1();
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
		setTimeout(hide_4789(), 100);
		return;
	}

	setTimeout(function() {
		$(element).css("display", "none");
		window.obj2885_onTap_runningActionsCount = window.obj2885_onTap_runningActionsCount - 1;

if (window.obj2885_onTap_runningActionsCount == 0) {
	obj2885_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)

}










//	action: playAudioFile
playAudioFile_5446();
function playAudioFile_5446() {
	window.obj2885_onTap_runningActionsCount = obj2885_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5446")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5446");
			$("#obj_audio_playSoundFile5446").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2885_onTap_runningActionsCount = window.obj2885_onTap_runningActionsCount - 1;

if (window.obj2885_onTap_runningActionsCount == 0) {
	obj2885_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2885_onTap_runningActionsCount = window.obj2885_onTap_runningActionsCount - 1;

if (window.obj2885_onTap_runningActionsCount == 0) {
	obj2885_onTap_actionGroup1();
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
				window.obj2885_onTap_runningActionsCount = window.obj2885_onTap_runningActionsCount - 1;

if (window.obj2885_onTap_runningActionsCount == 0) {
	obj2885_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj2885_onTap_runningActionsCount = window.obj2885_onTap_runningActionsCount - 1;

if (window.obj2885_onTap_runningActionsCount == 0) {
	obj2885_onTap_actionGroup1();
}
		}
	}

	
	
	
}








//	action: rotate 
//	target: obj2885 
rotate_3432();
function rotate_3432() {
	window.obj2885_onTap_runningActionsCount = obj2885_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj2885";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2885';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '32.39984';
	var rotationSpeed = 0.1;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = false;
	if (isInfinite) { rotate_3432_completed(); }

	//TweenMax.to(targetObjectId, 0.1, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_3432_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_3432_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_3432_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_3432_completed() {
	setTimeout(function() {
		window.obj2885_onTap_runningActionsCount = window.obj2885_onTap_runningActionsCount - 1;

if (window.obj2885_onTap_runningActionsCount == 0) {
	obj2885_onTap_actionGroup1();
}
	}, 1);
}















//	action: Run JavaScript
runjs_4778();
function runjs_4778() {
	window.obj2885_onTap_runningActionsCount = obj2885_onTap_runningActionsCount + 1;


	localStorage.setItem("tapped", "3");

	setTimeout(function() {
		window.obj2885_onTap_runningActionsCount = window.obj2885_onTap_runningActionsCount - 1;

if (window.obj2885_onTap_runningActionsCount == 0) {
	obj2885_onTap_actionGroup1();
}
	}, 1);
}





//	action: run action list container
//	target: obj3490 
runActionList_3504();
function runActionList_3504() {
	window.obj2885_onTap_runningActionsCount = obj2885_onTap_runningActionsCount + 1;

	$("#obj3490").trigger('SCEventRun');
	setTimeout(function() {
		window.obj2885_onTap_runningActionsCount = window.obj2885_onTap_runningActionsCount - 1;

if (window.obj2885_onTap_runningActionsCount == 0) {
	obj2885_onTap_actionGroup1();
}		
	}, 1);
}






};
obj2885_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2885_onTap_activeActionGroupIndex = -1;
		$("#obj2885").trigger("obj2885_onTap_ended");
		
		return;
	}
	window.obj2885_onTap_activeActionGroupIndex = 1;
	














//	action: rotate 
//	target: obj2885 
rotate_3433();
function rotate_3433() {
	window.obj2885_onTap_runningActionsCount = obj2885_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj2885";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2885';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '-62.17086';
	var rotationSpeed = 0.2;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = false;
	if (isInfinite) { rotate_3433_completed(); }

	//TweenMax.to(targetObjectId, 0.2, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_3433_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_3433_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_3433_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_3433_completed() {
	setTimeout(function() {
		window.obj2885_onTap_runningActionsCount = window.obj2885_onTap_runningActionsCount - 1;

if (window.obj2885_onTap_runningActionsCount == 0) {
	obj2885_onTap_actionGroup2();
}
	}, 1);
}




























};
obj2885_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2885_onTap_activeActionGroupIndex = -1;
		$("#obj2885").trigger("obj2885_onTap_ended");
		
		return;
	}
	window.obj2885_onTap_activeActionGroupIndex = 2;
	














//	action: rotate 
//	target: obj2885 
rotate_3434();
function rotate_3434() {
	window.obj2885_onTap_runningActionsCount = obj2885_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj2885";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2885';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '30';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = false;
	if (isInfinite) { rotate_3434_completed(); }

	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_3434_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_3434_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_3434_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_3434_completed() {
	setTimeout(function() {
		window.obj2885_onTap_runningActionsCount = window.obj2885_onTap_runningActionsCount - 1;

if (window.obj2885_onTap_runningActionsCount == 0) {
	obj2885_onTap_actionGroup3();
}
	}, 1);
}




























};
obj2885_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2885_onTap_activeActionGroupIndex = -1;
		$("#obj2885").trigger("obj2885_onTap_ended");
		
		return;
	}
	window.obj2885_onTap_activeActionGroupIndex = 3;
	










































};
obj2918_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2918_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2918").trigger("obj2918_SCEventRun_ended");
		
		return;
	}
	window.obj2918_SCEventRun_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj708 
move_2920();
function move_2920() {
	window.obj2918_SCEventRun_runningActionsCount = obj2918_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj708");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-1";
	var moveY = "+=-35";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 800, easing, function() {
		setTimeout(function() {
			window.obj2918_SCEventRun_runningActionsCount = window.obj2918_SCEventRun_runningActionsCount - 1;

if (window.obj2918_SCEventRun_runningActionsCount == 0) {
	obj2918_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj708 
move_2921();
function move_2921() {
	window.obj2918_SCEventRun_runningActionsCount = obj2918_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj708");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 652;
	var moveY = 462;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 800, easing, function() {
		setTimeout(function() {
			window.obj2918_SCEventRun_runningActionsCount = window.obj2918_SCEventRun_runningActionsCount - 1;

if (window.obj2918_SCEventRun_runningActionsCount == 0) {
	obj2918_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2883 
move_2924();
function move_2924() {
	window.obj2918_SCEventRun_runningActionsCount = obj2918_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj2883");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-1";
	var moveY = "+=-35";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 800, easing, function() {
		setTimeout(function() {
			window.obj2918_SCEventRun_runningActionsCount = window.obj2918_SCEventRun_runningActionsCount - 1;

if (window.obj2918_SCEventRun_runningActionsCount == 0) {
	obj2918_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2883 
move_2925();
function move_2925() {
	window.obj2918_SCEventRun_runningActionsCount = obj2918_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj2883");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 723;
	var moveY = 597;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 800, easing, function() {
		setTimeout(function() {
			window.obj2918_SCEventRun_runningActionsCount = window.obj2918_SCEventRun_runningActionsCount - 1;

if (window.obj2918_SCEventRun_runningActionsCount == 0) {
	obj2918_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2889 
move_2926();
function move_2926() {
	window.obj2918_SCEventRun_runningActionsCount = obj2918_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj2889");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-1";
	var moveY = "+=-35";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 800, easing, function() {
		setTimeout(function() {
			window.obj2918_SCEventRun_runningActionsCount = window.obj2918_SCEventRun_runningActionsCount - 1;

if (window.obj2918_SCEventRun_runningActionsCount == 0) {
	obj2918_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2889 
move_2927();
function move_2927() {
	window.obj2918_SCEventRun_runningActionsCount = obj2918_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj2889");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 736;
	var moveY = 605;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 800, easing, function() {
		setTimeout(function() {
			window.obj2918_SCEventRun_runningActionsCount = window.obj2918_SCEventRun_runningActionsCount - 1;

if (window.obj2918_SCEventRun_runningActionsCount == 0) {
	obj2918_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2885 
move_2928();
function move_2928() {
	window.obj2918_SCEventRun_runningActionsCount = obj2918_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj2885");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-1";
	var moveY = "+=-35";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 800, easing, function() {
		setTimeout(function() {
			window.obj2918_SCEventRun_runningActionsCount = window.obj2918_SCEventRun_runningActionsCount - 1;

if (window.obj2918_SCEventRun_runningActionsCount == 0) {
	obj2918_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2885 
move_2929();
function move_2929() {
	window.obj2918_SCEventRun_runningActionsCount = obj2918_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj2885");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 800;
	var moveY = 691;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 800, easing, function() {
		setTimeout(function() {
			window.obj2918_SCEventRun_runningActionsCount = window.obj2918_SCEventRun_runningActionsCount - 1;

if (window.obj2918_SCEventRun_runningActionsCount == 0) {
	obj2918_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3924 
move_3929();
function move_3929() {
	window.obj2918_SCEventRun_runningActionsCount = obj2918_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3924");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=25";
	var moveY = "+=-35";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 800, easing, function() {
		setTimeout(function() {
			window.obj2918_SCEventRun_runningActionsCount = window.obj2918_SCEventRun_runningActionsCount - 1;

if (window.obj2918_SCEventRun_runningActionsCount == 0) {
	obj2918_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3924 
move_3930();
function move_3930() {
	window.obj2918_SCEventRun_runningActionsCount = obj2918_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3924");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 970;
	var moveY = 679;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 800, easing, function() {
		setTimeout(function() {
			window.obj2918_SCEventRun_runningActionsCount = window.obj2918_SCEventRun_runningActionsCount - 1;

if (window.obj2918_SCEventRun_runningActionsCount == 0) {
	obj2918_SCEventRun_actionGroup1();
}
		}, 1);
	});
}






































};
obj2918_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2918_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2918").trigger("obj2918_SCEventRun_ended");
		
		return;
	}
	window.obj2918_SCEventRun_activeActionGroupIndex = 1;
	















//	action: loop
loop_obj2918_SCEventRun();
function loop_obj2918_SCEventRun() {

	var loopCount = 0;

	window.obj2918_SCEventRun_loopCount = window.obj2918_SCEventRun_loopCount + 1;
	if (loopCount != 0 && window.obj2918_SCEventRun_loopCount > loopCount) {
		window.obj2918_SCEventRun_loopCount = 0
		obj2918_SCEventRun_actionGroup2();
	} else {
		obj2918_SCEventRun_actionGroup0();
	}

}


























};
obj2918_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2918_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2918").trigger("obj2918_SCEventRun_ended");
		
		return;
	}
	window.obj2918_SCEventRun_activeActionGroupIndex = 2;
	










































};
obj3490_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3490_SCEventRun_activeActionGroupIndex = -1;
		$("#obj3490").trigger("obj3490_SCEventRun_ended");
		
		return;
	}
	window.obj3490_SCEventRun_activeActionGroupIndex = 0;
	


//	action: show 
//	target: obj3443 
(function(){
	window.obj3490_SCEventRun_runningActionsCount = obj3490_SCEventRun_runningActionsCount + 1;


	var element = "#obj3443";
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
				window.obj3490_SCEventRun_runningActionsCount = window.obj3490_SCEventRun_runningActionsCount - 1;

if (window.obj3490_SCEventRun_runningActionsCount == 0) {
	obj3490_SCEventRun_actionGroup1();
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
			window.obj3490_SCEventRun_runningActionsCount = window.obj3490_SCEventRun_runningActionsCount - 1;

if (window.obj3490_SCEventRun_runningActionsCount == 0) {
	obj3490_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj3447 
(function(){
	window.obj3490_SCEventRun_runningActionsCount = obj3490_SCEventRun_runningActionsCount + 1;


	var element = "#obj3447";
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
				window.obj3490_SCEventRun_runningActionsCount = window.obj3490_SCEventRun_runningActionsCount - 1;

if (window.obj3490_SCEventRun_runningActionsCount == 0) {
	obj3490_SCEventRun_actionGroup1();
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
			window.obj3490_SCEventRun_runningActionsCount = window.obj3490_SCEventRun_runningActionsCount - 1;

if (window.obj3490_SCEventRun_runningActionsCount == 0) {
	obj3490_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj3449 
(function(){
	window.obj3490_SCEventRun_runningActionsCount = obj3490_SCEventRun_runningActionsCount + 1;


	var element = "#obj3449";
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
				window.obj3490_SCEventRun_runningActionsCount = window.obj3490_SCEventRun_runningActionsCount - 1;

if (window.obj3490_SCEventRun_runningActionsCount == 0) {
	obj3490_SCEventRun_actionGroup1();
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
			window.obj3490_SCEventRun_runningActionsCount = window.obj3490_SCEventRun_runningActionsCount - 1;

if (window.obj3490_SCEventRun_runningActionsCount == 0) {
	obj3490_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: move
//	target: obj3443 
move_3495();
function move_3495() {
	window.obj3490_SCEventRun_runningActionsCount = obj3490_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3443");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-126";
	var moveY = "+=-166";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj3490_SCEventRun_runningActionsCount = window.obj3490_SCEventRun_runningActionsCount - 1;

if (window.obj3490_SCEventRun_runningActionsCount == 0) {
	obj3490_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3447 
move_3496();
function move_3496() {
	window.obj3490_SCEventRun_runningActionsCount = obj3490_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3447");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-69";
	var moveY = "+=-103";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj3490_SCEventRun_runningActionsCount = window.obj3490_SCEventRun_runningActionsCount - 1;

if (window.obj3490_SCEventRun_runningActionsCount == 0) {
	obj3490_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3449 
move_3497();
function move_3497() {
	window.obj3490_SCEventRun_runningActionsCount = obj3490_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3449");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-35";
	var moveY = "+=-85";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj3490_SCEventRun_runningActionsCount = window.obj3490_SCEventRun_runningActionsCount - 1;

if (window.obj3490_SCEventRun_runningActionsCount == 0) {
	obj3490_SCEventRun_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_5445();
function playAudioFile_5445() {
	window.obj3490_SCEventRun_runningActionsCount = obj3490_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5445")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5445");
			$("#obj_audio_playSoundFile5445").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj3490_SCEventRun_runningActionsCount = window.obj3490_SCEventRun_runningActionsCount - 1;

if (window.obj3490_SCEventRun_runningActionsCount == 0) {
	obj3490_SCEventRun_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj3490_SCEventRun_runningActionsCount = window.obj3490_SCEventRun_runningActionsCount - 1;

if (window.obj3490_SCEventRun_runningActionsCount == 0) {
	obj3490_SCEventRun_actionGroup1();
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
				window.obj3490_SCEventRun_runningActionsCount = window.obj3490_SCEventRun_runningActionsCount - 1;

if (window.obj3490_SCEventRun_runningActionsCount == 0) {
	obj3490_SCEventRun_actionGroup1();
}
			}, false);
		} else {
			window.obj3490_SCEventRun_runningActionsCount = window.obj3490_SCEventRun_runningActionsCount - 1;

if (window.obj3490_SCEventRun_runningActionsCount == 0) {
	obj3490_SCEventRun_actionGroup1();
}
		}
	}

	
	
	
}




































};
obj3490_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3490_SCEventRun_activeActionGroupIndex = -1;
		$("#obj3490").trigger("obj3490_SCEventRun_ended");
		
		return;
	}
	window.obj3490_SCEventRun_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj3443 
hide_3498();
function hide_3498() {
	var element = "#obj3443";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3490_SCEventRun_runningActionsCount = obj3490_SCEventRun_runningActionsCount + 1;

	
	var animationType = "zoomOutUp";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj3490_SCEventRun_runningActionsCount = window.obj3490_SCEventRun_runningActionsCount - 1;

if (window.obj3490_SCEventRun_runningActionsCount == 0) {
	obj3490_SCEventRun_actionGroup2();
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
		setTimeout(hide_3498(), 100);
		return;
	}

	setTimeout(function() {
		$(element).css("display", "none");
		window.obj3490_SCEventRun_runningActionsCount = window.obj3490_SCEventRun_runningActionsCount - 1;

if (window.obj3490_SCEventRun_runningActionsCount == 0) {
	obj3490_SCEventRun_actionGroup2();
}
	}, animationDurationMs);

	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)

}








































};
obj3490_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3490_SCEventRun_activeActionGroupIndex = -1;
		$("#obj3490").trigger("obj3490_SCEventRun_ended");
		
		return;
	}
	window.obj3490_SCEventRun_activeActionGroupIndex = 2;
	

//	action: hide
//	target: obj3447 
hide_3500();
function hide_3500() {
	var element = "#obj3447";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3490_SCEventRun_runningActionsCount = obj3490_SCEventRun_runningActionsCount + 1;

	
	var animationType = "zoomOutUp";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj3490_SCEventRun_runningActionsCount = window.obj3490_SCEventRun_runningActionsCount - 1;

if (window.obj3490_SCEventRun_runningActionsCount == 0) {
	obj3490_SCEventRun_actionGroup3();
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
		setTimeout(hide_3500(), 100);
		return;
	}

	setTimeout(function() {
		$(element).css("display", "none");
		window.obj3490_SCEventRun_runningActionsCount = window.obj3490_SCEventRun_runningActionsCount - 1;

if (window.obj3490_SCEventRun_runningActionsCount == 0) {
	obj3490_SCEventRun_actionGroup3();
}
	}, animationDurationMs);

	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)

}








































};
obj3490_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3490_SCEventRun_activeActionGroupIndex = -1;
		$("#obj3490").trigger("obj3490_SCEventRun_ended");
		
		return;
	}
	window.obj3490_SCEventRun_activeActionGroupIndex = 3;
	

//	action: hide
//	target: obj3449 
hide_3502();
function hide_3502() {
	var element = "#obj3449";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3490_SCEventRun_runningActionsCount = obj3490_SCEventRun_runningActionsCount + 1;

	
	var animationType = "zoomOutUp";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj3490_SCEventRun_runningActionsCount = window.obj3490_SCEventRun_runningActionsCount - 1;

if (window.obj3490_SCEventRun_runningActionsCount == 0) {
	obj3490_SCEventRun_actionGroup4();
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
		setTimeout(hide_3502(), 100);
		return;
	}

	setTimeout(function() {
		$(element).css("display", "none");
		window.obj3490_SCEventRun_runningActionsCount = window.obj3490_SCEventRun_runningActionsCount - 1;

if (window.obj3490_SCEventRun_runningActionsCount == 0) {
	obj3490_SCEventRun_actionGroup4();
}
	}, animationDurationMs);

	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)

}








































};
obj3490_SCEventRun_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3490_SCEventRun_activeActionGroupIndex = -1;
		$("#obj3490").trigger("obj3490_SCEventRun_ended");
		
		return;
	}
	window.obj3490_SCEventRun_activeActionGroupIndex = 4;
	



//	action: move
//	target: obj3443 
move_3499();
function move_3499() {
	window.obj3490_SCEventRun_runningActionsCount = obj3490_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3443");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 800;
	var moveY = 766;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj3490_SCEventRun_runningActionsCount = window.obj3490_SCEventRun_runningActionsCount - 1;

if (window.obj3490_SCEventRun_runningActionsCount == 0) {
	obj3490_SCEventRun_actionGroup5();
}
		}, 1);
	});
}
//	action: move
//	target: obj3447 
move_3501();
function move_3501() {
	window.obj3490_SCEventRun_runningActionsCount = obj3490_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3447");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 805;
	var moveY = 772;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj3490_SCEventRun_runningActionsCount = window.obj3490_SCEventRun_runningActionsCount - 1;

if (window.obj3490_SCEventRun_runningActionsCount == 0) {
	obj3490_SCEventRun_actionGroup5();
}
		}, 1);
	});
}
//	action: move
//	target: obj3449 
move_3503();
function move_3503() {
	window.obj3490_SCEventRun_runningActionsCount = obj3490_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3449");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 805;
	var moveY = 789;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj3490_SCEventRun_runningActionsCount = window.obj3490_SCEventRun_runningActionsCount - 1;

if (window.obj3490_SCEventRun_runningActionsCount == 0) {
	obj3490_SCEventRun_actionGroup5();
}
		}, 1);
	});
}






































};
obj3490_SCEventRun_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3490_SCEventRun_activeActionGroupIndex = -1;
		$("#obj3490").trigger("obj3490_SCEventRun_ended");
		
		return;
	}
	window.obj3490_SCEventRun_activeActionGroupIndex = 5;
	










































};
obj3883_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3883_onLoad_activeActionGroupIndex = -1;
		$("#obj3883").trigger("obj3883_onLoad_ended");
		
		return;
	}
	window.obj3883_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj3883 
move_3887();
function move_3887() {
	window.obj3883_onLoad_runningActionsCount = obj3883_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3883");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=386";
	var moveY = "+=-41";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj3883_onLoad_runningActionsCount = window.obj3883_onLoad_runningActionsCount - 1;

if (window.obj3883_onLoad_runningActionsCount == 0) {
	obj3883_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3883 
move_3888();
function move_3888() {
	window.obj3883_onLoad_runningActionsCount = obj3883_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3883");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=200";
	var moveY = "+=-282";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj3883_onLoad_runningActionsCount = window.obj3883_onLoad_runningActionsCount - 1;

if (window.obj3883_onLoad_runningActionsCount == 0) {
	obj3883_onLoad_actionGroup1();
}
		}, 1);
	});
}














//	action: scale
//	target: obj3883 
scale_3886();
function scale_3886() {
	window.obj3883_onLoad_runningActionsCount = obj3883_onLoad_runningActionsCount + 1;

	
	var targetObjectId = "#obj3883";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj3883';
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
		scale_3886_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_3886_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_3886_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_3886_completed() {
	setTimeout(function() {
		window.obj3883_onLoad_runningActionsCount = window.obj3883_onLoad_runningActionsCount - 1;

if (window.obj3883_onLoad_runningActionsCount == 0) {
	obj3883_onLoad_actionGroup1();
}
	}, 1);
}
























};
obj3883_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3883_onLoad_activeActionGroupIndex = -1;
		$("#obj3883").trigger("obj3883_onLoad_ended");
		
		return;
	}
	window.obj3883_onLoad_activeActionGroupIndex = 1;
	



































//	action: run action list container
//	target: obj3895 
runActionList_3900();
function runActionList_3900() {
	window.obj3883_onLoad_runningActionsCount = obj3883_onLoad_runningActionsCount + 1;

	$("#obj3895").trigger('SCEventRun');
	setTimeout(function() {
		window.obj3883_onLoad_runningActionsCount = window.obj3883_onLoad_runningActionsCount - 1;

if (window.obj3883_onLoad_runningActionsCount == 0) {
	obj3883_onLoad_actionGroup2();
}		
	}, 1);
}






};
obj3883_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3883_onLoad_activeActionGroupIndex = -1;
		$("#obj3883").trigger("obj3883_onLoad_ended");
		
		return;
	}
	window.obj3883_onLoad_activeActionGroupIndex = 2;
	










































};
obj3895_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3895_SCEventRun_activeActionGroupIndex = -1;
		$("#obj3895").trigger("obj3895_SCEventRun_ended");
		
		return;
	}
	window.obj3895_SCEventRun_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj3883 
move_3897();
function move_3897() {
	window.obj3895_SCEventRun_runningActionsCount = obj3895_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3883");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-18";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj3895_SCEventRun_runningActionsCount = window.obj3895_SCEventRun_runningActionsCount - 1;

if (window.obj3895_SCEventRun_runningActionsCount == 0) {
	obj3895_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3883 
move_3913();
function move_3913() {
	window.obj3895_SCEventRun_runningActionsCount = obj3895_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3883");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=18";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj3895_SCEventRun_runningActionsCount = window.obj3895_SCEventRun_runningActionsCount - 1;

if (window.obj3895_SCEventRun_runningActionsCount == 0) {
	obj3895_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3883 
move_3898();
function move_3898() {
	window.obj3895_SCEventRun_runningActionsCount = obj3895_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3883");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=18";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj3895_SCEventRun_runningActionsCount = window.obj3895_SCEventRun_runningActionsCount - 1;

if (window.obj3895_SCEventRun_runningActionsCount == 0) {
	obj3895_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3883 
move_3914();
function move_3914() {
	window.obj3895_SCEventRun_runningActionsCount = obj3895_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3883");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-18";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj3895_SCEventRun_runningActionsCount = window.obj3895_SCEventRun_runningActionsCount - 1;

if (window.obj3895_SCEventRun_runningActionsCount == 0) {
	obj3895_SCEventRun_actionGroup1();
}
		}, 1);
	});
}






































};
obj3895_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3895_SCEventRun_activeActionGroupIndex = -1;
		$("#obj3895").trigger("obj3895_SCEventRun_ended");
		
		return;
	}
	window.obj3895_SCEventRun_activeActionGroupIndex = 1;
	















//	action: loop
loop_obj3895_SCEventRun();
function loop_obj3895_SCEventRun() {

	var loopCount = 0;

	window.obj3895_SCEventRun_loopCount = window.obj3895_SCEventRun_loopCount + 1;
	if (loopCount != 0 && window.obj3895_SCEventRun_loopCount > loopCount) {
		window.obj3895_SCEventRun_loopCount = 0
		obj3895_SCEventRun_actionGroup2();
	} else {
		obj3895_SCEventRun_actionGroup0();
	}

}


























};
obj3895_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3895_SCEventRun_activeActionGroupIndex = -1;
		$("#obj3895").trigger("obj3895_SCEventRun_ended");
		
		return;
	}
	window.obj3895_SCEventRun_activeActionGroupIndex = 2;
	










































};
obj3962_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3962_onTap_activeActionGroupIndex = -1;
		$("#obj3962").trigger("obj3962_onTap_ended");
		
		return;
	}
	window.obj3962_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_5448();
function playAudioFile_5448() {
	window.obj3962_onTap_runningActionsCount = obj3962_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5448")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5448");
			$("#obj_audio_playSoundFile5448").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj3962_onTap_runningActionsCount = window.obj3962_onTap_runningActionsCount - 1;

if (window.obj3962_onTap_runningActionsCount == 0) {
	obj3962_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj3962_onTap_runningActionsCount = window.obj3962_onTap_runningActionsCount - 1;

if (window.obj3962_onTap_runningActionsCount == 0) {
	obj3962_onTap_actionGroup1();
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
				window.obj3962_onTap_runningActionsCount = window.obj3962_onTap_runningActionsCount - 1;

if (window.obj3962_onTap_runningActionsCount == 0) {
	obj3962_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj3962_onTap_runningActionsCount = window.obj3962_onTap_runningActionsCount - 1;

if (window.obj3962_onTap_runningActionsCount == 0) {
	obj3962_onTap_actionGroup1();
}
		}
	}

	
	
	
}




































};
obj3962_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3962_onTap_activeActionGroupIndex = -1;
		$("#obj3962").trigger("obj3962_onTap_ended");
		
		return;
	}
	window.obj3962_onTap_activeActionGroupIndex = 1;
	














//	action: rotate 
//	target: obj3962 
rotate_3964();
function rotate_3964() {
	window.obj3962_onTap_runningActionsCount = obj3962_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj3962";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj3962';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '32.39984';
	var rotationSpeed = 0.1;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = false;
	if (isInfinite) { rotate_3964_completed(); }

	//TweenMax.to(targetObjectId, 0.1, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_3964_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_3964_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_3964_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_3964_completed() {
	setTimeout(function() {
		window.obj3962_onTap_runningActionsCount = window.obj3962_onTap_runningActionsCount - 1;

if (window.obj3962_onTap_runningActionsCount == 0) {
	obj3962_onTap_actionGroup2();
}
	}, 1);
}




























};
obj3962_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3962_onTap_activeActionGroupIndex = -1;
		$("#obj3962").trigger("obj3962_onTap_ended");
		
		return;
	}
	window.obj3962_onTap_activeActionGroupIndex = 2;
	














//	action: rotate 
//	target: obj3962 
rotate_3965();
function rotate_3965() {
	window.obj3962_onTap_runningActionsCount = obj3962_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj3962";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj3962';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '-62.17086';
	var rotationSpeed = 0.2;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = false;
	if (isInfinite) { rotate_3965_completed(); }

	//TweenMax.to(targetObjectId, 0.2, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_3965_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_3965_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_3965_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_3965_completed() {
	setTimeout(function() {
		window.obj3962_onTap_runningActionsCount = window.obj3962_onTap_runningActionsCount - 1;

if (window.obj3962_onTap_runningActionsCount == 0) {
	obj3962_onTap_actionGroup3();
}
	}, 1);
}




























};
obj3962_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3962_onTap_activeActionGroupIndex = -1;
		$("#obj3962").trigger("obj3962_onTap_ended");
		
		return;
	}
	window.obj3962_onTap_activeActionGroupIndex = 3;
	














//	action: rotate 
//	target: obj3962 
rotate_3966();
function rotate_3966() {
	window.obj3962_onTap_runningActionsCount = obj3962_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj3962";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj3962';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '30';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = false;
	if (isInfinite) { rotate_3966_completed(); }

	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_3966_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_3966_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_3966_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_3966_completed() {
	setTimeout(function() {
		window.obj3962_onTap_runningActionsCount = window.obj3962_onTap_runningActionsCount - 1;

if (window.obj3962_onTap_runningActionsCount == 0) {
	obj3962_onTap_actionGroup4();
}
	}, 1);
}




























};
obj3962_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3962_onTap_activeActionGroupIndex = -1;
		$("#obj3962").trigger("obj3962_onTap_ended");
		
		return;
	}
	window.obj3962_onTap_activeActionGroupIndex = 4;
	










































};
obj3962_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3962_onLoad_activeActionGroupIndex = -1;
		$("#obj3962").trigger("obj3962_onLoad_ended");
		
		return;
	}
	window.obj3962_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj3962 
move_3968();
function move_3968() {
	window.obj3962_onLoad_runningActionsCount = obj3962_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3962");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=10";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 500, easing, function() {
		setTimeout(function() {
			window.obj3962_onLoad_runningActionsCount = window.obj3962_onLoad_runningActionsCount - 1;

if (window.obj3962_onLoad_runningActionsCount == 0) {
	obj3962_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3962 
move_3969();
function move_3969() {
	window.obj3962_onLoad_runningActionsCount = obj3962_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3962");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-10";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj3962_onLoad_runningActionsCount = window.obj3962_onLoad_runningActionsCount - 1;

if (window.obj3962_onLoad_runningActionsCount == 0) {
	obj3962_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3962 
move_3970();
function move_3970() {
	window.obj3962_onLoad_runningActionsCount = obj3962_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3962");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 988;
	var moveY = 170;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 500, easing, function() {
		setTimeout(function() {
			window.obj3962_onLoad_runningActionsCount = window.obj3962_onLoad_runningActionsCount - 1;

if (window.obj3962_onLoad_runningActionsCount == 0) {
	obj3962_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj3962_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3962_onLoad_activeActionGroupIndex = -1;
		$("#obj3962").trigger("obj3962_onLoad_ended");
		
		return;
	}
	window.obj3962_onLoad_activeActionGroupIndex = 1;
	















//	action: loop
loop_obj3962_onLoad();
function loop_obj3962_onLoad() {

	var loopCount = 0;

	window.obj3962_onLoad_loopCount = window.obj3962_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj3962_onLoad_loopCount > loopCount) {
		window.obj3962_onLoad_loopCount = 0
		obj3962_onLoad_actionGroup2();
	} else {
		obj3962_onLoad_actionGroup0();
	}

}


























};
obj3962_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3962_onLoad_activeActionGroupIndex = -1;
		$("#obj3962").trigger("obj3962_onLoad_ended");
		
		return;
	}
	window.obj3962_onLoad_activeActionGroupIndex = 2;
	










































};
obj3945_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3945_onTap_activeActionGroupIndex = -1;
		$("#obj3945").trigger("obj3945_onTap_ended");
		
		return;
	}
	window.obj3945_onTap_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_5447();
function playAudioFile_5447() {
	window.obj3945_onTap_runningActionsCount = obj3945_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5447")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5447");
			$("#obj_audio_playSoundFile5447").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj3945_onTap_runningActionsCount = window.obj3945_onTap_runningActionsCount - 1;

if (window.obj3945_onTap_runningActionsCount == 0) {
	obj3945_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj3945_onTap_runningActionsCount = window.obj3945_onTap_runningActionsCount - 1;

if (window.obj3945_onTap_runningActionsCount == 0) {
	obj3945_onTap_actionGroup1();
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
				window.obj3945_onTap_runningActionsCount = window.obj3945_onTap_runningActionsCount - 1;

if (window.obj3945_onTap_runningActionsCount == 0) {
	obj3945_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj3945_onTap_runningActionsCount = window.obj3945_onTap_runningActionsCount - 1;

if (window.obj3945_onTap_runningActionsCount == 0) {
	obj3945_onTap_actionGroup1();
}
		}
	}

	
	
	
}




































};
obj3945_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3945_onTap_activeActionGroupIndex = -1;
		$("#obj3945").trigger("obj3945_onTap_ended");
		
		return;
	}
	window.obj3945_onTap_activeActionGroupIndex = 1;
	














//	action: rotate 
//	target: obj3945 
rotate_3947();
function rotate_3947() {
	window.obj3945_onTap_runningActionsCount = obj3945_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj3945";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj3945';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '32.39984';
	var rotationSpeed = 0.1;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = false;
	if (isInfinite) { rotate_3947_completed(); }

	//TweenMax.to(targetObjectId, 0.1, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_3947_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_3947_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_3947_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_3947_completed() {
	setTimeout(function() {
		window.obj3945_onTap_runningActionsCount = window.obj3945_onTap_runningActionsCount - 1;

if (window.obj3945_onTap_runningActionsCount == 0) {
	obj3945_onTap_actionGroup2();
}
	}, 1);
}




























};
obj3945_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3945_onTap_activeActionGroupIndex = -1;
		$("#obj3945").trigger("obj3945_onTap_ended");
		
		return;
	}
	window.obj3945_onTap_activeActionGroupIndex = 2;
	














//	action: rotate 
//	target: obj3945 
rotate_3948();
function rotate_3948() {
	window.obj3945_onTap_runningActionsCount = obj3945_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj3945";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj3945';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '-62.17086';
	var rotationSpeed = 0.2;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = false;
	if (isInfinite) { rotate_3948_completed(); }

	//TweenMax.to(targetObjectId, 0.2, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_3948_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_3948_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_3948_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_3948_completed() {
	setTimeout(function() {
		window.obj3945_onTap_runningActionsCount = window.obj3945_onTap_runningActionsCount - 1;

if (window.obj3945_onTap_runningActionsCount == 0) {
	obj3945_onTap_actionGroup3();
}
	}, 1);
}




























};
obj3945_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3945_onTap_activeActionGroupIndex = -1;
		$("#obj3945").trigger("obj3945_onTap_ended");
		
		return;
	}
	window.obj3945_onTap_activeActionGroupIndex = 3;
	














//	action: rotate 
//	target: obj3945 
rotate_3949();
function rotate_3949() {
	window.obj3945_onTap_runningActionsCount = obj3945_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj3945";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj3945';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '30';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = false;
	if (isInfinite) { rotate_3949_completed(); }

	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_3949_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_3949_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_3949_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_3949_completed() {
	setTimeout(function() {
		window.obj3945_onTap_runningActionsCount = window.obj3945_onTap_runningActionsCount - 1;

if (window.obj3945_onTap_runningActionsCount == 0) {
	obj3945_onTap_actionGroup4();
}
	}, 1);
}




























};
obj3945_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3945_onTap_activeActionGroupIndex = -1;
		$("#obj3945").trigger("obj3945_onTap_ended");
		
		return;
	}
	window.obj3945_onTap_activeActionGroupIndex = 4;
	










































};
obj3945_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3945_onLoad_activeActionGroupIndex = -1;
		$("#obj3945").trigger("obj3945_onLoad_ended");
		
		return;
	}
	window.obj3945_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj3945 
move_3951();
function move_3951() {
	window.obj3945_onLoad_runningActionsCount = obj3945_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3945");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=10";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 500, easing, function() {
		setTimeout(function() {
			window.obj3945_onLoad_runningActionsCount = window.obj3945_onLoad_runningActionsCount - 1;

if (window.obj3945_onLoad_runningActionsCount == 0) {
	obj3945_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3945 
move_3952();
function move_3952() {
	window.obj3945_onLoad_runningActionsCount = obj3945_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3945");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-10";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj3945_onLoad_runningActionsCount = window.obj3945_onLoad_runningActionsCount - 1;

if (window.obj3945_onLoad_runningActionsCount == 0) {
	obj3945_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3945 
move_3953();
function move_3953() {
	window.obj3945_onLoad_runningActionsCount = obj3945_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj3945");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 263;
	var moveY = 789;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 500, easing, function() {
		setTimeout(function() {
			window.obj3945_onLoad_runningActionsCount = window.obj3945_onLoad_runningActionsCount - 1;

if (window.obj3945_onLoad_runningActionsCount == 0) {
	obj3945_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj3945_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3945_onLoad_activeActionGroupIndex = -1;
		$("#obj3945").trigger("obj3945_onLoad_ended");
		
		return;
	}
	window.obj3945_onLoad_activeActionGroupIndex = 1;
	















//	action: loop
loop_obj3945_onLoad();
function loop_obj3945_onLoad() {

	var loopCount = 0;

	window.obj3945_onLoad_loopCount = window.obj3945_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj3945_onLoad_loopCount > loopCount) {
		window.obj3945_onLoad_loopCount = 0
		obj3945_onLoad_actionGroup2();
	} else {
		obj3945_onLoad_actionGroup0();
	}

}


























};
obj3945_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3945_onLoad_activeActionGroupIndex = -1;
		$("#obj3945").trigger("obj3945_onLoad_ended");
		
		return;
	}
	window.obj3945_onLoad_activeActionGroupIndex = 2;
	










































};
obj4782_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4782_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4782").trigger("obj4782_SCEventRun_ended");
		
		return;
	}
	window.obj4782_SCEventRun_activeActionGroupIndex = 0;
	


















//	action: scale
//	target: obj4780 
scale_4784();
function scale_4784() {
	window.obj4782_SCEventRun_runningActionsCount = obj4782_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj4780";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj4780';
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
		scale_4784_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4784_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4784_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_4784_completed() {
	setTimeout(function() {
		window.obj4782_SCEventRun_runningActionsCount = window.obj4782_SCEventRun_runningActionsCount - 1;

if (window.obj4782_SCEventRun_runningActionsCount == 0) {
	obj4782_SCEventRun_actionGroup1();
}
	}, 1);
}
























};
obj4782_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4782_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4782").trigger("obj4782_SCEventRun_ended");
		
		return;
	}
	window.obj4782_SCEventRun_activeActionGroupIndex = 1;
	
















//	action: wait
wait_4785();
function wait_4785() {
	window.obj4782_SCEventRun_runningActionsCount = obj4782_SCEventRun_runningActionsCount + 1;

	setTimeout(function() {
		window.obj4782_SCEventRun_runningActionsCount = window.obj4782_SCEventRun_runningActionsCount - 1;

if (window.obj4782_SCEventRun_runningActionsCount == 0) {
	obj4782_SCEventRun_actionGroup2();
}
	}, 500);
}

























};
obj4782_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4782_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4782").trigger("obj4782_SCEventRun_ended");
		
		return;
	}
	window.obj4782_SCEventRun_activeActionGroupIndex = 2;
	


















//	action: scale
//	target: obj4780 
scale_4786();
function scale_4786() {
	window.obj4782_SCEventRun_runningActionsCount = obj4782_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj4780";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj4780';
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
		scale_4786_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4786_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4786_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_4786_completed() {
	setTimeout(function() {
		window.obj4782_SCEventRun_runningActionsCount = window.obj4782_SCEventRun_runningActionsCount - 1;

if (window.obj4782_SCEventRun_runningActionsCount == 0) {
	obj4782_SCEventRun_actionGroup3();
}
	}, 1);
}
























};
obj4782_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4782_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4782").trigger("obj4782_SCEventRun_ended");
		
		return;
	}
	window.obj4782_SCEventRun_activeActionGroupIndex = 3;
	
















//	action: wait
wait_4787();
function wait_4787() {
	window.obj4782_SCEventRun_runningActionsCount = obj4782_SCEventRun_runningActionsCount + 1;

	setTimeout(function() {
		window.obj4782_SCEventRun_runningActionsCount = window.obj4782_SCEventRun_runningActionsCount - 1;

if (window.obj4782_SCEventRun_runningActionsCount == 0) {
	obj4782_SCEventRun_actionGroup4();
}
	}, 1000);
}

























};
obj4782_SCEventRun_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4782_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4782").trigger("obj4782_SCEventRun_ended");
		
		return;
	}
	window.obj4782_SCEventRun_activeActionGroupIndex = 4;
	















//	action: loop
loop_obj4782_SCEventRun();
function loop_obj4782_SCEventRun() {

	var loopCount = 0;

	window.obj4782_SCEventRun_loopCount = window.obj4782_SCEventRun_loopCount + 1;
	if (loopCount != 0 && window.obj4782_SCEventRun_loopCount > loopCount) {
		window.obj4782_SCEventRun_loopCount = 0
		obj4782_SCEventRun_actionGroup5();
	} else {
		obj4782_SCEventRun_actionGroup0();
	}

}


























};
obj4782_SCEventRun_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4782_SCEventRun_activeActionGroupIndex = -1;
		$("#obj4782").trigger("obj4782_SCEventRun_ended");
		
		return;
	}
	window.obj4782_SCEventRun_activeActionGroupIndex = 5;
	










































};
obj5425_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5425_onLoad_activeActionGroupIndex = -1;
		$("#obj5425").trigger("obj5425_onLoad_ended");
		
		return;
	}
	window.obj5425_onLoad_activeActionGroupIndex = 0;
	
























//	action: playAudio
//	target: obj5425 
playAudio_5427();
function playAudio_5427() {
	window.obj5425_onLoad_runningActionsCount = obj5425_onLoad_runningActionsCount + 1;

	var myAudio = $("#obj5425")[0];
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
		    window.obj5425_onLoad_runningActionsCount = window.obj5425_onLoad_runningActionsCount - 1;

if (window.obj5425_onLoad_runningActionsCount == 0) {
	obj5425_onLoad_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj5425_onLoad_runningActionsCount = window.obj5425_onLoad_runningActionsCount - 1;

if (window.obj5425_onLoad_runningActionsCount == 0) {
	obj5425_onLoad_actionGroup1();
}
	}
}

















};
obj5425_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5425_onLoad_activeActionGroupIndex = -1;
		$("#obj5425").trigger("obj5425_onLoad_ended");
		
		return;
	}
	window.obj5425_onLoad_activeActionGroupIndex = 1;
	










































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		





/*
 *
 *   obj749: Event Touch Down
 *
 */

$("#obj749").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj749_onTap_activeActionGroupIndex != -1) return;
var obj749_onTap_runningActionsCount = 0;
var obj749_onTap_loopCount = 0;
obj749_onTap_actionGroup0();
});



/*
 *
 *   obj749: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj749_onLoad_activeActionGroupIndex != -1) return;
var obj749_onLoad_runningActionsCount = 0;
var obj749_onLoad_loopCount = 0;
obj749_onLoad_actionGroup0();
});














/*
 *
 *   obj3626: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj3626_onLoad_activeActionGroupIndex != -1) return;
var obj3626_onLoad_runningActionsCount = 0;
var obj3626_onLoad_loopCount = 0;
obj3626_onLoad_actionGroup0();
});














/*
 *
 *   obj3614: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj3614_onLoad_activeActionGroupIndex != -1) return;
var obj3614_onLoad_runningActionsCount = 0;
var obj3614_onLoad_loopCount = 0;
obj3614_onLoad_actionGroup0();
});














/*
 *
 *   obj3600: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj3600_onLoad_activeActionGroupIndex != -1) return;
var obj3600_onLoad_runningActionsCount = 0;
var obj3600_onLoad_loopCount = 0;
obj3600_onLoad_actionGroup0();
});














/*
 *
 *   obj3588: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj3588_onLoad_activeActionGroupIndex != -1) return;
var obj3588_onLoad_runningActionsCount = 0;
var obj3588_onLoad_loopCount = 0;
obj3588_onLoad_actionGroup0();
});














/*
 *
 *   obj3573: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj3573_onLoad_activeActionGroupIndex != -1) return;
var obj3573_onLoad_runningActionsCount = 0;
var obj3573_onLoad_loopCount = 0;
obj3573_onLoad_actionGroup0();
});














/*
 *
 *   obj3561: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj3561_onLoad_activeActionGroupIndex != -1) return;
var obj3561_onLoad_runningActionsCount = 0;
var obj3561_onLoad_loopCount = 0;
obj3561_onLoad_actionGroup0();
});














/*
 *
 *   obj3547: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj3547_onLoad_activeActionGroupIndex != -1) return;
var obj3547_onLoad_runningActionsCount = 0;
var obj3547_onLoad_loopCount = 0;
obj3547_onLoad_actionGroup0();
});














/*
 *
 *   obj3535: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj3535_onLoad_activeActionGroupIndex != -1) return;
var obj3535_onLoad_runningActionsCount = 0;
var obj3535_onLoad_loopCount = 0;
obj3535_onLoad_actionGroup0();
});














/*
 *
 *   obj3765: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj3765_onLoad_activeActionGroupIndex != -1) return;
var obj3765_onLoad_runningActionsCount = 0;
var obj3765_onLoad_loopCount = 0;
obj3765_onLoad_actionGroup0();
});














/*
 *
 *   obj3753: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj3753_onLoad_activeActionGroupIndex != -1) return;
var obj3753_onLoad_runningActionsCount = 0;
var obj3753_onLoad_loopCount = 0;
obj3753_onLoad_actionGroup0();
});














/*
 *
 *   obj3739: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj3739_onLoad_activeActionGroupIndex != -1) return;
var obj3739_onLoad_runningActionsCount = 0;
var obj3739_onLoad_loopCount = 0;
obj3739_onLoad_actionGroup0();
});














/*
 *
 *   obj3727: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj3727_onLoad_activeActionGroupIndex != -1) return;
var obj3727_onLoad_runningActionsCount = 0;
var obj3727_onLoad_loopCount = 0;
obj3727_onLoad_actionGroup0();
});














/*
 *
 *   obj3712: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj3712_onLoad_activeActionGroupIndex != -1) return;
var obj3712_onLoad_runningActionsCount = 0;
var obj3712_onLoad_loopCount = 0;
obj3712_onLoad_actionGroup0();
});














/*
 *
 *   obj3700: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj3700_onLoad_activeActionGroupIndex != -1) return;
var obj3700_onLoad_runningActionsCount = 0;
var obj3700_onLoad_loopCount = 0;
obj3700_onLoad_actionGroup0();
});














/*
 *
 *   obj3686: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj3686_onLoad_activeActionGroupIndex != -1) return;
var obj3686_onLoad_runningActionsCount = 0;
var obj3686_onLoad_loopCount = 0;
obj3686_onLoad_actionGroup0();
});














/*
 *
 *   obj3674: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj3674_onLoad_activeActionGroupIndex != -1) return;
var obj3674_onLoad_runningActionsCount = 0;
var obj3674_onLoad_loopCount = 0;
obj3674_onLoad_actionGroup0();
});














/*
 *
 *   obj3786: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj3786_onLoad_activeActionGroupIndex != -1) return;
var obj3786_onLoad_runningActionsCount = 0;
var obj3786_onLoad_loopCount = 0;
obj3786_onLoad_actionGroup0();
});














/*
 *
 *   obj3798: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj3798_onLoad_activeActionGroupIndex != -1) return;
var obj3798_onLoad_runningActionsCount = 0;
var obj3798_onLoad_loopCount = 0;
obj3798_onLoad_actionGroup0();
});














/*
 *
 *   obj3811: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj3811_onLoad_activeActionGroupIndex != -1) return;
var obj3811_onLoad_runningActionsCount = 0;
var obj3811_onLoad_loopCount = 0;
obj3811_onLoad_actionGroup0();
});














/*
 *
 *   obj3823: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj3823_onLoad_activeActionGroupIndex != -1) return;
var obj3823_onLoad_runningActionsCount = 0;
var obj3823_onLoad_loopCount = 0;
obj3823_onLoad_actionGroup0();
});














/*
 *
 *   obj3835: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj3835_onLoad_activeActionGroupIndex != -1) return;
var obj3835_onLoad_runningActionsCount = 0;
var obj3835_onLoad_loopCount = 0;
obj3835_onLoad_actionGroup0();
});








































































































/*
 *
 *   obj734: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj734_onLoad_activeActionGroupIndex != -1) return;
var obj734_onLoad_runningActionsCount = 0;
var obj734_onLoad_loopCount = 0;
obj734_onLoad_actionGroup0();
});
































































/*
 *
 *   obj753: Event SCEventRun
 *
 */

$("#obj753").bind("SCEventRun", function(event) {
	if (window.obj753_SCEventRun_activeActionGroupIndex != -1) return;
var obj753_SCEventRun_runningActionsCount = 0;
var obj753_SCEventRun_loopCount = 0;
obj753_SCEventRun_actionGroup0();
});














/*
 *
 *   obj758: Event SCEventRun
 *
 */

$("#obj758").bind("SCEventRun", function(event) {
	if (window.obj758_SCEventRun_activeActionGroupIndex != -1) return;
var obj758_SCEventRun_runningActionsCount = 0;
var obj758_SCEventRun_loopCount = 0;
obj758_SCEventRun_actionGroup0();
});









/*
 *
 *   obj708: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj708_onLoad_activeActionGroupIndex != -1) return;
var obj708_onLoad_runningActionsCount = 0;
var obj708_onLoad_loopCount = 0;
obj708_onLoad_actionGroup0();
});





















































































/*
 *
 *   obj2885: Event Touch Down
 *
 */

$("#obj2885").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2885_onTap_activeActionGroupIndex != -1) return;
var obj2885_onTap_runningActionsCount = 0;
var obj2885_onTap_loopCount = 0;
obj2885_onTap_actionGroup0();
});






































/*
 *
 *   obj2918: Event SCEventRun
 *
 */

$("#obj2918").bind("SCEventRun", function(event) {
	if (window.obj2918_SCEventRun_activeActionGroupIndex != -1) return;
var obj2918_SCEventRun_runningActionsCount = 0;
var obj2918_SCEventRun_loopCount = 0;
obj2918_SCEventRun_actionGroup0();
});














/*
 *
 *   obj3490: Event SCEventRun
 *
 */

$("#obj3490").bind("SCEventRun", function(event) {
	if (window.obj3490_SCEventRun_activeActionGroupIndex != -1) return;
var obj3490_SCEventRun_runningActionsCount = 0;
var obj3490_SCEventRun_loopCount = 0;
obj3490_SCEventRun_actionGroup0();
});









/*
 *
 *   obj3883: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj3883_onLoad_activeActionGroupIndex != -1) return;
var obj3883_onLoad_runningActionsCount = 0;
var obj3883_onLoad_loopCount = 0;
obj3883_onLoad_actionGroup0();
});



















/*
 *
 *   obj3895: Event SCEventRun
 *
 */

$("#obj3895").bind("SCEventRun", function(event) {
	if (window.obj3895_SCEventRun_activeActionGroupIndex != -1) return;
var obj3895_SCEventRun_runningActionsCount = 0;
var obj3895_SCEventRun_loopCount = 0;
obj3895_SCEventRun_actionGroup0();
});





/*
 *
 *   obj3962: Event Touch Down
 *
 */

$("#obj3962").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3962_onTap_activeActionGroupIndex != -1) return;
var obj3962_onTap_runningActionsCount = 0;
var obj3962_onTap_loopCount = 0;
obj3962_onTap_actionGroup0();
});



/*
 *
 *   obj3962: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj3962_onLoad_activeActionGroupIndex != -1) return;
var obj3962_onLoad_runningActionsCount = 0;
var obj3962_onLoad_loopCount = 0;
obj3962_onLoad_actionGroup0();
});










/*
 *
 *   obj3945: Event Touch Down
 *
 */

$("#obj3945").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3945_onTap_activeActionGroupIndex != -1) return;
var obj3945_onTap_runningActionsCount = 0;
var obj3945_onTap_loopCount = 0;
obj3945_onTap_actionGroup0();
});



/*
 *
 *   obj3945: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj3945_onLoad_activeActionGroupIndex != -1) return;
var obj3945_onLoad_runningActionsCount = 0;
var obj3945_onLoad_loopCount = 0;
obj3945_onLoad_actionGroup0();
});


































/*
 *
 *   obj4782: Event SCEventRun
 *
 */

$("#obj4782").bind("SCEventRun", function(event) {
	if (window.obj4782_SCEventRun_activeActionGroupIndex != -1) return;
var obj4782_SCEventRun_runningActionsCount = 0;
var obj4782_SCEventRun_loopCount = 0;
obj4782_SCEventRun_actionGroup0();
});









/*
 *
 *   obj5425: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj5425_onLoad_activeActionGroupIndex != -1) return;
var obj5425_onLoad_runningActionsCount = 0;
var obj5425_onLoad_loopCount = 0;
obj5425_onLoad_actionGroup0();
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
	
$("#obj749").trigger('SCEventShow');
$("#obj3626").trigger('SCEventShow');
$("#obj3614").trigger('SCEventShow');
$("#obj3600").trigger('SCEventShow');
$("#obj3588").trigger('SCEventShow');
$("#obj3573").trigger('SCEventShow');
$("#obj3561").trigger('SCEventShow');
$("#obj3547").trigger('SCEventShow');
$("#obj3535").trigger('SCEventShow');
$("#obj3765").trigger('SCEventShow');
$("#obj3753").trigger('SCEventShow');
$("#obj3739").trigger('SCEventShow');
$("#obj3727").trigger('SCEventShow');
$("#obj3712").trigger('SCEventShow');
$("#obj3700").trigger('SCEventShow');
$("#obj3686").trigger('SCEventShow');
$("#obj3674").trigger('SCEventShow');
$("#obj3786").trigger('SCEventShow');
$("#obj3798").trigger('SCEventShow');
$("#obj3811").trigger('SCEventShow');
$("#obj3823").trigger('SCEventShow');
$("#obj3835").trigger('SCEventShow');
$("#obj3865").trigger('SCEventShow');
$("#obj3867").trigger('SCEventShow');
$("#obj3875").trigger('SCEventShow');
$("#obj3877").trigger('SCEventShow');
$("#obj3879").trigger('SCEventShow');
$("#obj3881").trigger('SCEventShow');
$("#obj734").trigger('SCEventShow');
$("#obj708").trigger('SCEventShow');
$("#obj3883").trigger('SCEventShow');
$("#obj3962").trigger('SCEventShow');
$("#obj3945").trigger('SCEventShow');
$("#obj5425").trigger('SCEventShow');
	localStorage.setItem('tapped','0');
localStorage.setItem('ready','true');
localStorage.setItem("tapped", "0");
localStorage.setItem("ready", "true");
});