pubcoder.projectID = pubcoder.projectID || "D928F63EC5FACE4D86169F491C787A52";
pubcoder.project.id = pubcoder.project.id || "D928F63EC5FACE4D86169F491C787A52";
pubcoder.project.title = pubcoder.project.title || "OkidoNumbers";
pubcoder.page.id = pubcoder.page.id || 5;
pubcoder.page.title = pubcoder.page.title || "3";
pubcoder.page.number = pubcoder.page.number || 3;
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
var obj75_onTap_activeActionGroupIndex = -1;
var obj75_onTap_runningActionsCount = 0;
var obj75_onTap_loopCount = 0;
var obj100_onTap_activeActionGroupIndex = -1;
var obj100_onTap_runningActionsCount = 0;
var obj100_onTap_loopCount = 0;
var obj101_onTap_activeActionGroupIndex = -1;
var obj101_onTap_runningActionsCount = 0;
var obj101_onTap_loopCount = 0;
var obj102_onTap_activeActionGroupIndex = -1;
var obj102_onTap_runningActionsCount = 0;
var obj102_onTap_loopCount = 0;
var obj103_onTap_activeActionGroupIndex = -1;
var obj103_onTap_runningActionsCount = 0;
var obj103_onTap_loopCount = 0;
var obj104_onTap_activeActionGroupIndex = -1;
var obj104_onTap_runningActionsCount = 0;
var obj104_onTap_loopCount = 0;
var obj104_onLoad_activeActionGroupIndex = -1;
var obj104_onLoad_runningActionsCount = 0;
var obj104_onLoad_loopCount = 0;
var obj105_onLoad_activeActionGroupIndex = -1;
var obj105_onLoad_runningActionsCount = 0;
var obj105_onLoad_loopCount = 0;
var obj106_onLoad_activeActionGroupIndex = -1;
var obj106_onLoad_runningActionsCount = 0;
var obj106_onLoad_loopCount = 0;
var obj107_onTap_activeActionGroupIndex = -1;
var obj107_onTap_runningActionsCount = 0;
var obj107_onTap_loopCount = 0;
var obj108_onTap_activeActionGroupIndex = -1;
var obj108_onTap_runningActionsCount = 0;
var obj108_onTap_loopCount = 0;
var obj110_onTap_activeActionGroupIndex = -1;
var obj110_onTap_runningActionsCount = 0;
var obj110_onTap_loopCount = 0;
var obj111_onTap_activeActionGroupIndex = -1;
var obj111_onTap_runningActionsCount = 0;
var obj111_onTap_loopCount = 0;
var obj590_SCEventRun_activeActionGroupIndex = -1;
var obj590_SCEventRun_runningActionsCount = 0;
var obj590_SCEventRun_loopCount = 0;
var obj666_onLoad_activeActionGroupIndex = -1;
var obj666_onLoad_runningActionsCount = 0;
var obj666_onLoad_loopCount = 0;
var obj678_onTap_activeActionGroupIndex = -1;
var obj678_onTap_runningActionsCount = 0;
var obj678_onTap_loopCount = 0;
var obj680_SCEventRun_activeActionGroupIndex = -1;
var obj680_SCEventRun_runningActionsCount = 0;
var obj680_SCEventRun_loopCount = 0;
var obj697_onTap_activeActionGroupIndex = -1;
var obj697_onTap_runningActionsCount = 0;
var obj697_onTap_loopCount = 0;
var obj698_onTap_activeActionGroupIndex = -1;
var obj698_onTap_runningActionsCount = 0;
var obj698_onTap_loopCount = 0;
var obj699_onTap_activeActionGroupIndex = -1;
var obj699_onTap_runningActionsCount = 0;
var obj699_onTap_loopCount = 0;
var obj1430_onLoad_activeActionGroupIndex = -1;
var obj1430_onLoad_runningActionsCount = 0;
var obj1430_onLoad_loopCount = 0;

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
		
obj75_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75_onTap_activeActionGroupIndex = -1;
		$("#obj75").trigger("obj75_onTap_ended");
		
		return;
	}
	window.obj75_onTap_activeActionGroupIndex = 0;
	





























//	action: Run JavaScript
runjs_676();
function runjs_676() {
	window.obj75_onTap_runningActionsCount = obj75_onTap_runningActionsCount + 1;


	if(localStorage.getItem("tapped") === "0" && localStorage.getItem("ready") === "true")
{
    localStorage.setItem("tapped", "1");
    $("#obj680").trigger(PubCoder.Events.Run);
}

	setTimeout(function() {
		window.obj75_onTap_runningActionsCount = window.obj75_onTap_runningActionsCount - 1;

if (window.obj75_onTap_runningActionsCount == 0) {
	obj75_onTap_actionGroup1();
}
	}, 1);
}












};
obj75_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75_onTap_activeActionGroupIndex = -1;
		$("#obj75").trigger("obj75_onTap_ended");
		
		return;
	}
	window.obj75_onTap_activeActionGroupIndex = 1;
	










































};
obj100_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj100_onTap_activeActionGroupIndex = -1;
		$("#obj100").trigger("obj100_onTap_ended");
		
		return;
	}
	window.obj100_onTap_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj100 
move_620();
function move_620() {
	window.obj100_onTap_runningActionsCount = obj100_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj100");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-18";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 500, easing, function() {
		setTimeout(function() {
			window.obj100_onTap_runningActionsCount = window.obj100_onTap_runningActionsCount - 1;

if (window.obj100_onTap_runningActionsCount == 0) {
	obj100_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj100 
move_621();
function move_621() {
	window.obj100_onTap_runningActionsCount = obj100_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj100");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 573;
	var moveY = 713;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 500, easing, function() {
		setTimeout(function() {
			window.obj100_onTap_runningActionsCount = window.obj100_onTap_runningActionsCount - 1;

if (window.obj100_onTap_runningActionsCount == 0) {
	obj100_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj100 
move_622();
function move_622() {
	window.obj100_onTap_runningActionsCount = obj100_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj100");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-18";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 500, easing, function() {
		setTimeout(function() {
			window.obj100_onTap_runningActionsCount = window.obj100_onTap_runningActionsCount - 1;

if (window.obj100_onTap_runningActionsCount == 0) {
	obj100_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj100 
move_623();
function move_623() {
	window.obj100_onTap_runningActionsCount = obj100_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj100");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 573;
	var moveY = 713;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 500, easing, function() {
		setTimeout(function() {
			window.obj100_onTap_runningActionsCount = window.obj100_onTap_runningActionsCount - 1;

if (window.obj100_onTap_runningActionsCount == 0) {
	obj100_onTap_actionGroup1();
}
		}, 1);
	});
}






































};
obj100_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj100_onTap_activeActionGroupIndex = -1;
		$("#obj100").trigger("obj100_onTap_ended");
		
		return;
	}
	window.obj100_onTap_activeActionGroupIndex = 1;
	










































};
obj101_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj101_onTap_activeActionGroupIndex = -1;
		$("#obj101").trigger("obj101_onTap_ended");
		
		return;
	}
	window.obj101_onTap_activeActionGroupIndex = 0;
	














//	action: rotate 
//	target: obj101 
rotate_611();
function rotate_611() {
	window.obj101_onTap_runningActionsCount = obj101_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj101";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj101';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '17.76485';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = false;
	if (isInfinite) { rotate_611_completed(); }

	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_611_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_611_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_611_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_611_completed() {
	setTimeout(function() {
		window.obj101_onTap_runningActionsCount = window.obj101_onTap_runningActionsCount - 1;

if (window.obj101_onTap_runningActionsCount == 0) {
	obj101_onTap_actionGroup1();
}
	}, 1);
}




























};
obj101_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj101_onTap_activeActionGroupIndex = -1;
		$("#obj101").trigger("obj101_onTap_ended");
		
		return;
	}
	window.obj101_onTap_activeActionGroupIndex = 1;
	














//	action: rotate 
//	target: obj101 
rotate_612();
function rotate_612() {
	window.obj101_onTap_runningActionsCount = obj101_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj101";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj101';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '-17.76485';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = false;
	if (isInfinite) { rotate_612_completed(); }

	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_612_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_612_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_612_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_612_completed() {
	setTimeout(function() {
		window.obj101_onTap_runningActionsCount = window.obj101_onTap_runningActionsCount - 1;

if (window.obj101_onTap_runningActionsCount == 0) {
	obj101_onTap_actionGroup2();
}
	}, 1);
}




























};
obj101_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj101_onTap_activeActionGroupIndex = -1;
		$("#obj101").trigger("obj101_onTap_ended");
		
		return;
	}
	window.obj101_onTap_activeActionGroupIndex = 2;
	














//	action: rotate 
//	target: obj101 
rotate_613();
function rotate_613() {
	window.obj101_onTap_runningActionsCount = obj101_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj101";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj101';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '-17.76485';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = false;
	if (isInfinite) { rotate_613_completed(); }

	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_613_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_613_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_613_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_613_completed() {
	setTimeout(function() {
		window.obj101_onTap_runningActionsCount = window.obj101_onTap_runningActionsCount - 1;

if (window.obj101_onTap_runningActionsCount == 0) {
	obj101_onTap_actionGroup3();
}
	}, 1);
}




























};
obj101_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj101_onTap_activeActionGroupIndex = -1;
		$("#obj101").trigger("obj101_onTap_ended");
		
		return;
	}
	window.obj101_onTap_activeActionGroupIndex = 3;
	














//	action: rotate 
//	target: obj101 
rotate_614();
function rotate_614() {
	window.obj101_onTap_runningActionsCount = obj101_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj101";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj101';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '17.76485';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = false;
	if (isInfinite) { rotate_614_completed(); }

	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_614_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_614_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_614_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_614_completed() {
	setTimeout(function() {
		window.obj101_onTap_runningActionsCount = window.obj101_onTap_runningActionsCount - 1;

if (window.obj101_onTap_runningActionsCount == 0) {
	obj101_onTap_actionGroup4();
}
	}, 1);
}




























};
obj101_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj101_onTap_activeActionGroupIndex = -1;
		$("#obj101").trigger("obj101_onTap_ended");
		
		return;
	}
	window.obj101_onTap_activeActionGroupIndex = 4;
	










































};
obj102_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj102_onTap_activeActionGroupIndex = -1;
		$("#obj102").trigger("obj102_onTap_ended");
		
		return;
	}
	window.obj102_onTap_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj102 
move_602();
function move_602() {
	window.obj102_onTap_runningActionsCount = obj102_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj102");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=26";
	var moveY = "+=-1";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 500, easing, function() {
		setTimeout(function() {
			window.obj102_onTap_runningActionsCount = window.obj102_onTap_runningActionsCount - 1;

if (window.obj102_onTap_runningActionsCount == 0) {
	obj102_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj102 
move_603();
function move_603() {
	window.obj102_onTap_runningActionsCount = obj102_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj102");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-26";
	var moveY = "+=-18";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 500, easing, function() {
		setTimeout(function() {
			window.obj102_onTap_runningActionsCount = window.obj102_onTap_runningActionsCount - 1;

if (window.obj102_onTap_runningActionsCount == 0) {
	obj102_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj102 
move_604();
function move_604() {
	window.obj102_onTap_runningActionsCount = obj102_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj102");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-22";
	var moveY = "+=18";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 500, easing, function() {
		setTimeout(function() {
			window.obj102_onTap_runningActionsCount = window.obj102_onTap_runningActionsCount - 1;

if (window.obj102_onTap_runningActionsCount == 0) {
	obj102_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj102 
move_605();
function move_605() {
	window.obj102_onTap_runningActionsCount = obj102_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj102");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 762;
	var moveY = 714;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 500, easing, function() {
		setTimeout(function() {
			window.obj102_onTap_runningActionsCount = window.obj102_onTap_runningActionsCount - 1;

if (window.obj102_onTap_runningActionsCount == 0) {
	obj102_onTap_actionGroup1();
}
		}, 1);
	});
}






































};
obj102_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj102_onTap_activeActionGroupIndex = -1;
		$("#obj102").trigger("obj102_onTap_ended");
		
		return;
	}
	window.obj102_onTap_activeActionGroupIndex = 1;
	










































};
obj103_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj103_onTap_activeActionGroupIndex = -1;
		$("#obj103").trigger("obj103_onTap_ended");
		
		return;
	}
	window.obj103_onTap_activeActionGroupIndex = 0;
	














//	action: rotate 
//	target: obj103 
rotate_660();
function rotate_660() {
	window.obj103_onTap_runningActionsCount = obj103_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj103";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj103';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '14';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = false;
	if (isInfinite) { rotate_660_completed(); }

	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_660_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_660_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_660_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_660_completed() {
	setTimeout(function() {
		window.obj103_onTap_runningActionsCount = window.obj103_onTap_runningActionsCount - 1;

if (window.obj103_onTap_runningActionsCount == 0) {
	obj103_onTap_actionGroup1();
}
	}, 1);
}




























};
obj103_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj103_onTap_activeActionGroupIndex = -1;
		$("#obj103").trigger("obj103_onTap_ended");
		
		return;
	}
	window.obj103_onTap_activeActionGroupIndex = 1;
	














//	action: rotate 
//	target: obj103 
rotate_661();
function rotate_661() {
	window.obj103_onTap_runningActionsCount = obj103_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj103";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj103';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '-28';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = false;
	if (isInfinite) { rotate_661_completed(); }

	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_661_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_661_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_661_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_661_completed() {
	setTimeout(function() {
		window.obj103_onTap_runningActionsCount = window.obj103_onTap_runningActionsCount - 1;

if (window.obj103_onTap_runningActionsCount == 0) {
	obj103_onTap_actionGroup2();
}
	}, 1);
}




























};
obj103_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj103_onTap_activeActionGroupIndex = -1;
		$("#obj103").trigger("obj103_onTap_ended");
		
		return;
	}
	window.obj103_onTap_activeActionGroupIndex = 2;
	














//	action: rotate 
//	target: obj103 
rotate_662();
function rotate_662() {
	window.obj103_onTap_runningActionsCount = obj103_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj103";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj103';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '14';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = false;
	if (isInfinite) { rotate_662_completed(); }

	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_662_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_662_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_662_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_662_completed() {
	setTimeout(function() {
		window.obj103_onTap_runningActionsCount = window.obj103_onTap_runningActionsCount - 1;

if (window.obj103_onTap_runningActionsCount == 0) {
	obj103_onTap_actionGroup3();
}
	}, 1);
}




























};
obj103_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj103_onTap_activeActionGroupIndex = -1;
		$("#obj103").trigger("obj103_onTap_ended");
		
		return;
	}
	window.obj103_onTap_activeActionGroupIndex = 3;
	










































};
obj104_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj104_onTap_activeActionGroupIndex = -1;
		$("#obj104").trigger("obj104_onTap_ended");
		
		return;
	}
	window.obj104_onTap_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj104 
move_596();
function move_596() {
	window.obj104_onTap_runningActionsCount = obj104_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj104");
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
			window.obj104_onTap_runningActionsCount = window.obj104_onTap_runningActionsCount - 1;

if (window.obj104_onTap_runningActionsCount == 0) {
	obj104_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj104 
move_597();
function move_597() {
	window.obj104_onTap_runningActionsCount = obj104_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj104");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 839;
	var moveY = 708;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj104_onTap_runningActionsCount = window.obj104_onTap_runningActionsCount - 1;

if (window.obj104_onTap_runningActionsCount == 0) {
	obj104_onTap_actionGroup1();
}
		}, 1);
	});
}






































};
obj104_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj104_onTap_activeActionGroupIndex = -1;
		$("#obj104").trigger("obj104_onTap_ended");
		
		return;
	}
	window.obj104_onTap_activeActionGroupIndex = 1;
	










































};
obj104_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj104_onLoad_activeActionGroupIndex = -1;
		$("#obj104").trigger("obj104_onLoad_ended");
		
		return;
	}
	window.obj104_onLoad_activeActionGroupIndex = 0;
	



































//	action: run action list container
//	target: obj590 
runActionList_592();
function runActionList_592() {
	window.obj104_onLoad_runningActionsCount = obj104_onLoad_runningActionsCount + 1;

	$("#obj590").trigger('SCEventRun');
	setTimeout(function() {
		window.obj104_onLoad_runningActionsCount = window.obj104_onLoad_runningActionsCount - 1;

if (window.obj104_onLoad_runningActionsCount == 0) {
	obj104_onLoad_actionGroup1();
}		
	}, 1);
}






};
obj104_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj104_onLoad_activeActionGroupIndex = -1;
		$("#obj104").trigger("obj104_onLoad_ended");
		
		return;
	}
	window.obj104_onLoad_activeActionGroupIndex = 1;
	










































};
obj105_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj105_onLoad_activeActionGroupIndex = -1;
		$("#obj105").trigger("obj105_onLoad_ended");
		
		return;
	}
	window.obj105_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj105 
move_582();
function move_582() {
	window.obj105_onLoad_runningActionsCount = obj105_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj105");
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
			window.obj105_onLoad_runningActionsCount = window.obj105_onLoad_runningActionsCount - 1;

if (window.obj105_onLoad_runningActionsCount == 0) {
	obj105_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj105_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj105_onLoad_activeActionGroupIndex = -1;
		$("#obj105").trigger("obj105_onLoad_ended");
		
		return;
	}
	window.obj105_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj105 
move_583();
function move_583() {
	window.obj105_onLoad_runningActionsCount = obj105_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj105");
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
			window.obj105_onLoad_runningActionsCount = window.obj105_onLoad_runningActionsCount - 1;

if (window.obj105_onLoad_runningActionsCount == 0) {
	obj105_onLoad_actionGroup2();
}
		}, 1);
	});
}






































};
obj105_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj105_onLoad_activeActionGroupIndex = -1;
		$("#obj105").trigger("obj105_onLoad_ended");
		
		return;
	}
	window.obj105_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj105_onLoad();
function loop_obj105_onLoad() {

	var loopCount = 0;

	window.obj105_onLoad_loopCount = window.obj105_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj105_onLoad_loopCount > loopCount) {
		window.obj105_onLoad_loopCount = 0
		obj105_onLoad_actionGroup3();
	} else {
		obj105_onLoad_actionGroup0();
	}

}


























};
obj105_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj105_onLoad_activeActionGroupIndex = -1;
		$("#obj105").trigger("obj105_onLoad_ended");
		
		return;
	}
	window.obj105_onLoad_activeActionGroupIndex = 3;
	










































};
obj106_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj106_onLoad_activeActionGroupIndex = -1;
		$("#obj106").trigger("obj106_onLoad_ended");
		
		return;
	}
	window.obj106_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj106 
move_586();
function move_586() {
	window.obj106_onLoad_runningActionsCount = obj106_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj106");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=26";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj106_onLoad_runningActionsCount = window.obj106_onLoad_runningActionsCount - 1;

if (window.obj106_onLoad_runningActionsCount == 0) {
	obj106_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj106_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj106_onLoad_activeActionGroupIndex = -1;
		$("#obj106").trigger("obj106_onLoad_ended");
		
		return;
	}
	window.obj106_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj106 
move_587();
function move_587() {
	window.obj106_onLoad_runningActionsCount = obj106_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj106");
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
			window.obj106_onLoad_runningActionsCount = window.obj106_onLoad_runningActionsCount - 1;

if (window.obj106_onLoad_runningActionsCount == 0) {
	obj106_onLoad_actionGroup2();
}
		}, 1);
	});
}






































};
obj106_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj106_onLoad_activeActionGroupIndex = -1;
		$("#obj106").trigger("obj106_onLoad_ended");
		
		return;
	}
	window.obj106_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj106_onLoad();
function loop_obj106_onLoad() {

	var loopCount = 0;

	window.obj106_onLoad_loopCount = window.obj106_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj106_onLoad_loopCount > loopCount) {
		window.obj106_onLoad_loopCount = 0
		obj106_onLoad_actionGroup3();
	} else {
		obj106_onLoad_actionGroup0();
	}

}


























};
obj106_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj106_onLoad_activeActionGroupIndex = -1;
		$("#obj106").trigger("obj106_onLoad_ended");
		
		return;
	}
	window.obj106_onLoad_activeActionGroupIndex = 3;
	










































};
obj107_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj107_onTap_activeActionGroupIndex = -1;
		$("#obj107").trigger("obj107_onTap_ended");
		
		return;
	}
	window.obj107_onTap_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj107 
move_663();
function move_663() {
	window.obj107_onTap_runningActionsCount = obj107_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj107");
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
			window.obj107_onTap_runningActionsCount = window.obj107_onTap_runningActionsCount - 1;

if (window.obj107_onTap_runningActionsCount == 0) {
	obj107_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj107 
move_664();
function move_664() {
	window.obj107_onTap_runningActionsCount = obj107_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj107");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = -17;
	var moveY = 706;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj107_onTap_runningActionsCount = window.obj107_onTap_runningActionsCount - 1;

if (window.obj107_onTap_runningActionsCount == 0) {
	obj107_onTap_actionGroup1();
}
		}, 1);
	});
}






































};
obj107_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj107_onTap_activeActionGroupIndex = -1;
		$("#obj107").trigger("obj107_onTap_ended");
		
		return;
	}
	window.obj107_onTap_activeActionGroupIndex = 1;
	










































};
obj108_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj108_onTap_activeActionGroupIndex = -1;
		$("#obj108").trigger("obj108_onTap_ended");
		
		return;
	}
	window.obj108_onTap_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj108 
move_639();
function move_639() {
	window.obj108_onTap_runningActionsCount = obj108_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj108");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-18";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 800, easing, function() {
		setTimeout(function() {
			window.obj108_onTap_runningActionsCount = window.obj108_onTap_runningActionsCount - 1;

if (window.obj108_onTap_runningActionsCount == 0) {
	obj108_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj108 
move_640();
function move_640() {
	window.obj108_onTap_runningActionsCount = obj108_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj108");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 383;
	var moveY = 666;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 800, easing, function() {
		setTimeout(function() {
			window.obj108_onTap_runningActionsCount = window.obj108_onTap_runningActionsCount - 1;

if (window.obj108_onTap_runningActionsCount == 0) {
	obj108_onTap_actionGroup1();
}
		}, 1);
	});
}






































};
obj108_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj108_onTap_activeActionGroupIndex = -1;
		$("#obj108").trigger("obj108_onTap_ended");
		
		return;
	}
	window.obj108_onTap_activeActionGroupIndex = 1;
	










































};
obj110_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj110_onTap_activeActionGroupIndex = -1;
		$("#obj110").trigger("obj110_onTap_ended");
		
		return;
	}
	window.obj110_onTap_activeActionGroupIndex = 0;
	














//	action: rotate 
//	target: obj110 
rotate_633();
function rotate_633() {
	window.obj110_onTap_runningActionsCount = obj110_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj110";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj110';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '14';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = false;
	if (isInfinite) { rotate_633_completed(); }

	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_633_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_633_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_633_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_633_completed() {
	setTimeout(function() {
		window.obj110_onTap_runningActionsCount = window.obj110_onTap_runningActionsCount - 1;

if (window.obj110_onTap_runningActionsCount == 0) {
	obj110_onTap_actionGroup1();
}
	}, 1);
}




//	action: scale
//	target: obj110 
scale_632();
function scale_632() {
	window.obj110_onTap_runningActionsCount = obj110_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj110";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj110';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1';
	var scaleYValue = '-1';
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
		scale_632_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_632_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_632_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_632_completed() {
	setTimeout(function() {
		window.obj110_onTap_runningActionsCount = window.obj110_onTap_runningActionsCount - 1;

if (window.obj110_onTap_runningActionsCount == 0) {
	obj110_onTap_actionGroup1();
}
	}, 1);
}
























};
obj110_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj110_onTap_activeActionGroupIndex = -1;
		$("#obj110").trigger("obj110_onTap_ended");
		
		return;
	}
	window.obj110_onTap_activeActionGroupIndex = 1;
	














//	action: rotate 
//	target: obj110 
rotate_634();
function rotate_634() {
	window.obj110_onTap_runningActionsCount = obj110_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj110";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj110';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '-28';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = false;
	if (isInfinite) { rotate_634_completed(); }

	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_634_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_634_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_634_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_634_completed() {
	setTimeout(function() {
		window.obj110_onTap_runningActionsCount = window.obj110_onTap_runningActionsCount - 1;

if (window.obj110_onTap_runningActionsCount == 0) {
	obj110_onTap_actionGroup2();
}
	}, 1);
}




























};
obj110_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj110_onTap_activeActionGroupIndex = -1;
		$("#obj110").trigger("obj110_onTap_ended");
		
		return;
	}
	window.obj110_onTap_activeActionGroupIndex = 2;
	














//	action: rotate 
//	target: obj110 
rotate_635();
function rotate_635() {
	window.obj110_onTap_runningActionsCount = obj110_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj110";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj110';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '14';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = false;
	if (isInfinite) { rotate_635_completed(); }

	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_635_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_635_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_635_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_635_completed() {
	setTimeout(function() {
		window.obj110_onTap_runningActionsCount = window.obj110_onTap_runningActionsCount - 1;

if (window.obj110_onTap_runningActionsCount == 0) {
	obj110_onTap_actionGroup3();
}
	}, 1);
}




























};
obj110_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj110_onTap_activeActionGroupIndex = -1;
		$("#obj110").trigger("obj110_onTap_ended");
		
		return;
	}
	window.obj110_onTap_activeActionGroupIndex = 3;
	










































};
obj111_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj111_onTap_activeActionGroupIndex = -1;
		$("#obj111").trigger("obj111_onTap_ended");
		
		return;
	}
	window.obj111_onTap_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj111 
move_645();
function move_645() {
	window.obj111_onTap_runningActionsCount = obj111_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj111");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=40";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj111_onTap_runningActionsCount = window.obj111_onTap_runningActionsCount - 1;

if (window.obj111_onTap_runningActionsCount == 0) {
	obj111_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj111 
move_646();
function move_646() {
	window.obj111_onTap_runningActionsCount = obj111_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj111");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-60";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj111_onTap_runningActionsCount = window.obj111_onTap_runningActionsCount - 1;

if (window.obj111_onTap_runningActionsCount == 0) {
	obj111_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj111 
move_647();
function move_647() {
	window.obj111_onTap_runningActionsCount = obj111_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj111");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 259;
	var moveY = 654;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 500, easing, function() {
		setTimeout(function() {
			window.obj111_onTap_runningActionsCount = window.obj111_onTap_runningActionsCount - 1;

if (window.obj111_onTap_runningActionsCount == 0) {
	obj111_onTap_actionGroup1();
}
		}, 1);
	});
}






































};
obj111_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj111_onTap_activeActionGroupIndex = -1;
		$("#obj111").trigger("obj111_onTap_ended");
		
		return;
	}
	window.obj111_onTap_activeActionGroupIndex = 1;
	










































};
obj590_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj590_SCEventRun_activeActionGroupIndex = -1;
		$("#obj590").trigger("obj590_SCEventRun_ended");
		
		return;
	}
	window.obj590_SCEventRun_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj104 
move_593();
function move_593() {
	window.obj590_SCEventRun_runningActionsCount = obj590_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj104");
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
			window.obj590_SCEventRun_runningActionsCount = window.obj590_SCEventRun_runningActionsCount - 1;

if (window.obj590_SCEventRun_runningActionsCount == 0) {
	obj590_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj104 
move_594();
function move_594() {
	window.obj590_SCEventRun_runningActionsCount = obj590_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj104");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 839;
	var moveY = 708;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj590_SCEventRun_runningActionsCount = window.obj590_SCEventRun_runningActionsCount - 1;

if (window.obj590_SCEventRun_runningActionsCount == 0) {
	obj590_SCEventRun_actionGroup1();
}
		}, 1);
	});
}






































};
obj590_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj590_SCEventRun_activeActionGroupIndex = -1;
		$("#obj590").trigger("obj590_SCEventRun_ended");
		
		return;
	}
	window.obj590_SCEventRun_activeActionGroupIndex = 1;
	














//	action: rotate 
//	target: obj103 
rotate_654();
function rotate_654() {
	window.obj590_SCEventRun_runningActionsCount = obj590_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj103";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj103';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '14';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = false;
	if (isInfinite) { rotate_654_completed(); }

	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_654_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_654_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_654_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_654_completed() {
	setTimeout(function() {
		window.obj590_SCEventRun_runningActionsCount = window.obj590_SCEventRun_runningActionsCount - 1;

if (window.obj590_SCEventRun_runningActionsCount == 0) {
	obj590_SCEventRun_actionGroup2();
}
	}, 1);
}




























};
obj590_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj590_SCEventRun_activeActionGroupIndex = -1;
		$("#obj590").trigger("obj590_SCEventRun_ended");
		
		return;
	}
	window.obj590_SCEventRun_activeActionGroupIndex = 2;
	














//	action: rotate 
//	target: obj103 
rotate_655();
function rotate_655() {
	window.obj590_SCEventRun_runningActionsCount = obj590_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj103";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj103';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '-28';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = false;
	if (isInfinite) { rotate_655_completed(); }

	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_655_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_655_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_655_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_655_completed() {
	setTimeout(function() {
		window.obj590_SCEventRun_runningActionsCount = window.obj590_SCEventRun_runningActionsCount - 1;

if (window.obj590_SCEventRun_runningActionsCount == 0) {
	obj590_SCEventRun_actionGroup3();
}
	}, 1);
}




























};
obj590_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj590_SCEventRun_activeActionGroupIndex = -1;
		$("#obj590").trigger("obj590_SCEventRun_ended");
		
		return;
	}
	window.obj590_SCEventRun_activeActionGroupIndex = 3;
	














//	action: rotate 
//	target: obj103 
rotate_656();
function rotate_656() {
	window.obj590_SCEventRun_runningActionsCount = obj590_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj103";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj103';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '14';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = false;
	if (isInfinite) { rotate_656_completed(); }

	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_656_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_656_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_656_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_656_completed() {
	setTimeout(function() {
		window.obj590_SCEventRun_runningActionsCount = window.obj590_SCEventRun_runningActionsCount - 1;

if (window.obj590_SCEventRun_runningActionsCount == 0) {
	obj590_SCEventRun_actionGroup4();
}
	}, 1);
}




























};
obj590_SCEventRun_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj590_SCEventRun_activeActionGroupIndex = -1;
		$("#obj590").trigger("obj590_SCEventRun_ended");
		
		return;
	}
	window.obj590_SCEventRun_activeActionGroupIndex = 4;
	
















//	action: wait
wait_595();
function wait_595() {
	window.obj590_SCEventRun_runningActionsCount = obj590_SCEventRun_runningActionsCount + 1;

	setTimeout(function() {
		window.obj590_SCEventRun_runningActionsCount = window.obj590_SCEventRun_runningActionsCount - 1;

if (window.obj590_SCEventRun_runningActionsCount == 0) {
	obj590_SCEventRun_actionGroup5();
}
	}, 1000);
}

























};
obj590_SCEventRun_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj590_SCEventRun_activeActionGroupIndex = -1;
		$("#obj590").trigger("obj590_SCEventRun_ended");
		
		return;
	}
	window.obj590_SCEventRun_activeActionGroupIndex = 5;
	



//	action: move
//	target: obj109 
move_649();
function move_649() {
	window.obj590_SCEventRun_runningActionsCount = obj590_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj109");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-18";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 700, easing, function() {
		setTimeout(function() {
			window.obj590_SCEventRun_runningActionsCount = window.obj590_SCEventRun_runningActionsCount - 1;

if (window.obj590_SCEventRun_runningActionsCount == 0) {
	obj590_SCEventRun_actionGroup6();
}
		}, 1);
	});
}
//	action: move
//	target: obj109 
move_650();
function move_650() {
	window.obj590_SCEventRun_runningActionsCount = obj590_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj109");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 177;
	var moveY = 666;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 700, easing, function() {
		setTimeout(function() {
			window.obj590_SCEventRun_runningActionsCount = window.obj590_SCEventRun_runningActionsCount - 1;

if (window.obj590_SCEventRun_runningActionsCount == 0) {
	obj590_SCEventRun_actionGroup6();
}
		}, 1);
	});
}
//	action: move
//	target: obj109 
move_651();
function move_651() {
	window.obj590_SCEventRun_runningActionsCount = obj590_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj109");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-18";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 700, easing, function() {
		setTimeout(function() {
			window.obj590_SCEventRun_runningActionsCount = window.obj590_SCEventRun_runningActionsCount - 1;

if (window.obj590_SCEventRun_runningActionsCount == 0) {
	obj590_SCEventRun_actionGroup6();
}
		}, 1);
	});
}
//	action: move
//	target: obj109 
move_652();
function move_652() {
	window.obj590_SCEventRun_runningActionsCount = obj590_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj109");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 177;
	var moveY = 666;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 700, easing, function() {
		setTimeout(function() {
			window.obj590_SCEventRun_runningActionsCount = window.obj590_SCEventRun_runningActionsCount - 1;

if (window.obj590_SCEventRun_runningActionsCount == 0) {
	obj590_SCEventRun_actionGroup6();
}
		}, 1);
	});
}






































};
obj590_SCEventRun_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj590_SCEventRun_activeActionGroupIndex = -1;
		$("#obj590").trigger("obj590_SCEventRun_ended");
		
		return;
	}
	window.obj590_SCEventRun_activeActionGroupIndex = 6;
	














//	action: rotate 
//	target: obj110 
rotate_626();
function rotate_626() {
	window.obj590_SCEventRun_runningActionsCount = obj590_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj110";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj110';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '14';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = false;
	if (isInfinite) { rotate_626_completed(); }

	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_626_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_626_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_626_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_626_completed() {
	setTimeout(function() {
		window.obj590_SCEventRun_runningActionsCount = window.obj590_SCEventRun_runningActionsCount - 1;

if (window.obj590_SCEventRun_runningActionsCount == 0) {
	obj590_SCEventRun_actionGroup7();
}
	}, 1);
}




//	action: scale
//	target: obj110 
scale_631();
function scale_631() {
	window.obj590_SCEventRun_runningActionsCount = obj590_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj110";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj110';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1';
	var scaleYValue = '-1';
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
		scale_631_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_631_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_631_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_631_completed() {
	setTimeout(function() {
		window.obj590_SCEventRun_runningActionsCount = window.obj590_SCEventRun_runningActionsCount - 1;

if (window.obj590_SCEventRun_runningActionsCount == 0) {
	obj590_SCEventRun_actionGroup7();
}
	}, 1);
}
























};
obj590_SCEventRun_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj590_SCEventRun_activeActionGroupIndex = -1;
		$("#obj590").trigger("obj590_SCEventRun_ended");
		
		return;
	}
	window.obj590_SCEventRun_activeActionGroupIndex = 7;
	














//	action: rotate 
//	target: obj110 
rotate_627();
function rotate_627() {
	window.obj590_SCEventRun_runningActionsCount = obj590_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj110";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj110';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '-28';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = false;
	if (isInfinite) { rotate_627_completed(); }

	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_627_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_627_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_627_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_627_completed() {
	setTimeout(function() {
		window.obj590_SCEventRun_runningActionsCount = window.obj590_SCEventRun_runningActionsCount - 1;

if (window.obj590_SCEventRun_runningActionsCount == 0) {
	obj590_SCEventRun_actionGroup8();
}
	}, 1);
}




























};
obj590_SCEventRun_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj590_SCEventRun_activeActionGroupIndex = -1;
		$("#obj590").trigger("obj590_SCEventRun_ended");
		
		return;
	}
	window.obj590_SCEventRun_activeActionGroupIndex = 8;
	














//	action: rotate 
//	target: obj110 
rotate_628();
function rotate_628() {
	window.obj590_SCEventRun_runningActionsCount = obj590_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj110";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj110';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '14';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = false;
	if (isInfinite) { rotate_628_completed(); }

	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_628_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_628_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_628_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_628_completed() {
	setTimeout(function() {
		window.obj590_SCEventRun_runningActionsCount = window.obj590_SCEventRun_runningActionsCount - 1;

if (window.obj590_SCEventRun_runningActionsCount == 0) {
	obj590_SCEventRun_actionGroup9();
}
	}, 1);
}




























};
obj590_SCEventRun_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj590_SCEventRun_activeActionGroupIndex = -1;
		$("#obj590").trigger("obj590_SCEventRun_ended");
		
		return;
	}
	window.obj590_SCEventRun_activeActionGroupIndex = 9;
	
















//	action: wait
wait_606();
function wait_606() {
	window.obj590_SCEventRun_runningActionsCount = obj590_SCEventRun_runningActionsCount + 1;

	setTimeout(function() {
		window.obj590_SCEventRun_runningActionsCount = window.obj590_SCEventRun_runningActionsCount - 1;

if (window.obj590_SCEventRun_runningActionsCount == 0) {
	obj590_SCEventRun_actionGroup10();
}
	}, 1200);
}

























};
obj590_SCEventRun_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj590_SCEventRun_activeActionGroupIndex = -1;
		$("#obj590").trigger("obj590_SCEventRun_ended");
		
		return;
	}
	window.obj590_SCEventRun_activeActionGroupIndex = 10;
	














//	action: rotate 
//	target: obj101 
rotate_607();
function rotate_607() {
	window.obj590_SCEventRun_runningActionsCount = obj590_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj101";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj101';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '17.76485';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = false;
	if (isInfinite) { rotate_607_completed(); }

	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_607_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_607_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_607_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_607_completed() {
	setTimeout(function() {
		window.obj590_SCEventRun_runningActionsCount = window.obj590_SCEventRun_runningActionsCount - 1;

if (window.obj590_SCEventRun_runningActionsCount == 0) {
	obj590_SCEventRun_actionGroup11();
}
	}, 1);
}




























};
obj590_SCEventRun_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj590_SCEventRun_activeActionGroupIndex = -1;
		$("#obj590").trigger("obj590_SCEventRun_ended");
		
		return;
	}
	window.obj590_SCEventRun_activeActionGroupIndex = 11;
	














//	action: rotate 
//	target: obj101 
rotate_608();
function rotate_608() {
	window.obj590_SCEventRun_runningActionsCount = obj590_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj101";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj101';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '-17.76485';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = false;
	if (isInfinite) { rotate_608_completed(); }

	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_608_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_608_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_608_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_608_completed() {
	setTimeout(function() {
		window.obj590_SCEventRun_runningActionsCount = window.obj590_SCEventRun_runningActionsCount - 1;

if (window.obj590_SCEventRun_runningActionsCount == 0) {
	obj590_SCEventRun_actionGroup12();
}
	}, 1);
}




























};
obj590_SCEventRun_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj590_SCEventRun_activeActionGroupIndex = -1;
		$("#obj590").trigger("obj590_SCEventRun_ended");
		
		return;
	}
	window.obj590_SCEventRun_activeActionGroupIndex = 12;
	














//	action: rotate 
//	target: obj101 
rotate_609();
function rotate_609() {
	window.obj590_SCEventRun_runningActionsCount = obj590_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj101";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj101';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '-17.76485';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = false;
	if (isInfinite) { rotate_609_completed(); }

	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_609_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_609_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_609_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_609_completed() {
	setTimeout(function() {
		window.obj590_SCEventRun_runningActionsCount = window.obj590_SCEventRun_runningActionsCount - 1;

if (window.obj590_SCEventRun_runningActionsCount == 0) {
	obj590_SCEventRun_actionGroup13();
}
	}, 1);
}




























};
obj590_SCEventRun_actionGroup13 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj590_SCEventRun_activeActionGroupIndex = -1;
		$("#obj590").trigger("obj590_SCEventRun_ended");
		
		return;
	}
	window.obj590_SCEventRun_activeActionGroupIndex = 13;
	














//	action: rotate 
//	target: obj101 
rotate_610();
function rotate_610() {
	window.obj590_SCEventRun_runningActionsCount = obj590_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj101";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj101';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '17.76485';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = false;
	if (isInfinite) { rotate_610_completed(); }

	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_610_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_610_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_610_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_610_completed() {
	setTimeout(function() {
		window.obj590_SCEventRun_runningActionsCount = window.obj590_SCEventRun_runningActionsCount - 1;

if (window.obj590_SCEventRun_runningActionsCount == 0) {
	obj590_SCEventRun_actionGroup14();
}
	}, 1);
}




























};
obj590_SCEventRun_actionGroup14 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj590_SCEventRun_activeActionGroupIndex = -1;
		$("#obj590").trigger("obj590_SCEventRun_ended");
		
		return;
	}
	window.obj590_SCEventRun_activeActionGroupIndex = 14;
	



//	action: move
//	target: obj108 
move_637();
function move_637() {
	window.obj590_SCEventRun_runningActionsCount = obj590_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj108");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-18";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 800, easing, function() {
		setTimeout(function() {
			window.obj590_SCEventRun_runningActionsCount = window.obj590_SCEventRun_runningActionsCount - 1;

if (window.obj590_SCEventRun_runningActionsCount == 0) {
	obj590_SCEventRun_actionGroup15();
}
		}, 1);
	});
}
//	action: move
//	target: obj108 
move_638();
function move_638() {
	window.obj590_SCEventRun_runningActionsCount = obj590_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj108");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 383;
	var moveY = 666;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 800, easing, function() {
		setTimeout(function() {
			window.obj590_SCEventRun_runningActionsCount = window.obj590_SCEventRun_runningActionsCount - 1;

if (window.obj590_SCEventRun_runningActionsCount == 0) {
	obj590_SCEventRun_actionGroup15();
}
		}, 1);
	});
}






































};
obj590_SCEventRun_actionGroup15 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj590_SCEventRun_activeActionGroupIndex = -1;
		$("#obj590").trigger("obj590_SCEventRun_ended");
		
		return;
	}
	window.obj590_SCEventRun_activeActionGroupIndex = 15;
	
















//	action: wait
wait_615();
function wait_615() {
	window.obj590_SCEventRun_runningActionsCount = obj590_SCEventRun_runningActionsCount + 1;

	setTimeout(function() {
		window.obj590_SCEventRun_runningActionsCount = window.obj590_SCEventRun_runningActionsCount - 1;

if (window.obj590_SCEventRun_runningActionsCount == 0) {
	obj590_SCEventRun_actionGroup16();
}
	}, 500);
}

























};
obj590_SCEventRun_actionGroup16 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj590_SCEventRun_activeActionGroupIndex = -1;
		$("#obj590").trigger("obj590_SCEventRun_ended");
		
		return;
	}
	window.obj590_SCEventRun_activeActionGroupIndex = 16;
	



//	action: move
//	target: obj102 
move_598();
function move_598() {
	window.obj590_SCEventRun_runningActionsCount = obj590_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj102");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=26";
	var moveY = "+=-1";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 500, easing, function() {
		setTimeout(function() {
			window.obj590_SCEventRun_runningActionsCount = window.obj590_SCEventRun_runningActionsCount - 1;

if (window.obj590_SCEventRun_runningActionsCount == 0) {
	obj590_SCEventRun_actionGroup17();
}
		}, 1);
	});
}
//	action: move
//	target: obj102 
move_599();
function move_599() {
	window.obj590_SCEventRun_runningActionsCount = obj590_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj102");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-26";
	var moveY = "+=-18";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 500, easing, function() {
		setTimeout(function() {
			window.obj590_SCEventRun_runningActionsCount = window.obj590_SCEventRun_runningActionsCount - 1;

if (window.obj590_SCEventRun_runningActionsCount == 0) {
	obj590_SCEventRun_actionGroup17();
}
		}, 1);
	});
}
//	action: move
//	target: obj102 
move_600();
function move_600() {
	window.obj590_SCEventRun_runningActionsCount = obj590_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj102");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-22";
	var moveY = "+=18";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 500, easing, function() {
		setTimeout(function() {
			window.obj590_SCEventRun_runningActionsCount = window.obj590_SCEventRun_runningActionsCount - 1;

if (window.obj590_SCEventRun_runningActionsCount == 0) {
	obj590_SCEventRun_actionGroup17();
}
		}, 1);
	});
}
//	action: move
//	target: obj102 
move_601();
function move_601() {
	window.obj590_SCEventRun_runningActionsCount = obj590_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj102");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 762;
	var moveY = 714;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 500, easing, function() {
		setTimeout(function() {
			window.obj590_SCEventRun_runningActionsCount = window.obj590_SCEventRun_runningActionsCount - 1;

if (window.obj590_SCEventRun_runningActionsCount == 0) {
	obj590_SCEventRun_actionGroup17();
}
		}, 1);
	});
}






































};
obj590_SCEventRun_actionGroup17 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj590_SCEventRun_activeActionGroupIndex = -1;
		$("#obj590").trigger("obj590_SCEventRun_ended");
		
		return;
	}
	window.obj590_SCEventRun_activeActionGroupIndex = 17;
	



//	action: move
//	target: obj100 
move_616();
function move_616() {
	window.obj590_SCEventRun_runningActionsCount = obj590_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj100");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-18";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 500, easing, function() {
		setTimeout(function() {
			window.obj590_SCEventRun_runningActionsCount = window.obj590_SCEventRun_runningActionsCount - 1;

if (window.obj590_SCEventRun_runningActionsCount == 0) {
	obj590_SCEventRun_actionGroup18();
}
		}, 1);
	});
}
//	action: move
//	target: obj100 
move_617();
function move_617() {
	window.obj590_SCEventRun_runningActionsCount = obj590_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj100");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 573;
	var moveY = 713;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 500, easing, function() {
		setTimeout(function() {
			window.obj590_SCEventRun_runningActionsCount = window.obj590_SCEventRun_runningActionsCount - 1;

if (window.obj590_SCEventRun_runningActionsCount == 0) {
	obj590_SCEventRun_actionGroup18();
}
		}, 1);
	});
}
//	action: move
//	target: obj100 
move_618();
function move_618() {
	window.obj590_SCEventRun_runningActionsCount = obj590_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj100");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-18";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 500, easing, function() {
		setTimeout(function() {
			window.obj590_SCEventRun_runningActionsCount = window.obj590_SCEventRun_runningActionsCount - 1;

if (window.obj590_SCEventRun_runningActionsCount == 0) {
	obj590_SCEventRun_actionGroup18();
}
		}, 1);
	});
}
//	action: move
//	target: obj100 
move_619();
function move_619() {
	window.obj590_SCEventRun_runningActionsCount = obj590_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj100");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 573;
	var moveY = 713;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 500, easing, function() {
		setTimeout(function() {
			window.obj590_SCEventRun_runningActionsCount = window.obj590_SCEventRun_runningActionsCount - 1;

if (window.obj590_SCEventRun_runningActionsCount == 0) {
	obj590_SCEventRun_actionGroup18();
}
		}, 1);
	});
}






































};
obj590_SCEventRun_actionGroup18 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj590_SCEventRun_activeActionGroupIndex = -1;
		$("#obj590").trigger("obj590_SCEventRun_ended");
		
		return;
	}
	window.obj590_SCEventRun_activeActionGroupIndex = 18;
	
















//	action: wait
wait_641();
function wait_641() {
	window.obj590_SCEventRun_runningActionsCount = obj590_SCEventRun_runningActionsCount + 1;

	setTimeout(function() {
		window.obj590_SCEventRun_runningActionsCount = window.obj590_SCEventRun_runningActionsCount - 1;

if (window.obj590_SCEventRun_runningActionsCount == 0) {
	obj590_SCEventRun_actionGroup19();
}
	}, 500);
}

























};
obj590_SCEventRun_actionGroup19 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj590_SCEventRun_activeActionGroupIndex = -1;
		$("#obj590").trigger("obj590_SCEventRun_ended");
		
		return;
	}
	window.obj590_SCEventRun_activeActionGroupIndex = 19;
	



//	action: move
//	target: obj111 
move_642();
function move_642() {
	window.obj590_SCEventRun_runningActionsCount = obj590_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj111");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=40";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj590_SCEventRun_runningActionsCount = window.obj590_SCEventRun_runningActionsCount - 1;

if (window.obj590_SCEventRun_runningActionsCount == 0) {
	obj590_SCEventRun_actionGroup20();
}
		}, 1);
	});
}
//	action: move
//	target: obj111 
move_643();
function move_643() {
	window.obj590_SCEventRun_runningActionsCount = obj590_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj111");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-60";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj590_SCEventRun_runningActionsCount = window.obj590_SCEventRun_runningActionsCount - 1;

if (window.obj590_SCEventRun_runningActionsCount == 0) {
	obj590_SCEventRun_actionGroup20();
}
		}, 1);
	});
}
//	action: move
//	target: obj111 
move_644();
function move_644() {
	window.obj590_SCEventRun_runningActionsCount = obj590_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj111");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 259;
	var moveY = 654;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 500, easing, function() {
		setTimeout(function() {
			window.obj590_SCEventRun_runningActionsCount = window.obj590_SCEventRun_runningActionsCount - 1;

if (window.obj590_SCEventRun_runningActionsCount == 0) {
	obj590_SCEventRun_actionGroup20();
}
		}, 1);
	});
}






































};
obj590_SCEventRun_actionGroup20 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj590_SCEventRun_activeActionGroupIndex = -1;
		$("#obj590").trigger("obj590_SCEventRun_ended");
		
		return;
	}
	window.obj590_SCEventRun_activeActionGroupIndex = 20;
	



//	action: move
//	target: obj107 
move_658();
function move_658() {
	window.obj590_SCEventRun_runningActionsCount = obj590_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj107");
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
			window.obj590_SCEventRun_runningActionsCount = window.obj590_SCEventRun_runningActionsCount - 1;

if (window.obj590_SCEventRun_runningActionsCount == 0) {
	obj590_SCEventRun_actionGroup21();
}
		}, 1);
	});
}
//	action: move
//	target: obj107 
move_659();
function move_659() {
	window.obj590_SCEventRun_runningActionsCount = obj590_SCEventRun_runningActionsCount + 1;


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

	var targetObject = $("#obj107");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = -17;
	var moveY = 706;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj590_SCEventRun_runningActionsCount = window.obj590_SCEventRun_runningActionsCount - 1;

if (window.obj590_SCEventRun_runningActionsCount == 0) {
	obj590_SCEventRun_actionGroup21();
}
		}, 1);
	});
}






































};
obj590_SCEventRun_actionGroup21 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj590_SCEventRun_activeActionGroupIndex = -1;
		$("#obj590").trigger("obj590_SCEventRun_ended");
		
		return;
	}
	window.obj590_SCEventRun_activeActionGroupIndex = 21;
	
















//	action: wait
wait_653();
function wait_653() {
	window.obj590_SCEventRun_runningActionsCount = obj590_SCEventRun_runningActionsCount + 1;

	setTimeout(function() {
		window.obj590_SCEventRun_runningActionsCount = window.obj590_SCEventRun_runningActionsCount - 1;

if (window.obj590_SCEventRun_runningActionsCount == 0) {
	obj590_SCEventRun_actionGroup22();
}
	}, 1300);
}

























};
obj590_SCEventRun_actionGroup22 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj590_SCEventRun_activeActionGroupIndex = -1;
		$("#obj590").trigger("obj590_SCEventRun_ended");
		
		return;
	}
	window.obj590_SCEventRun_activeActionGroupIndex = 22;
	















//	action: loop
loop_obj590_SCEventRun();
function loop_obj590_SCEventRun() {

	var loopCount = 0;

	window.obj590_SCEventRun_loopCount = window.obj590_SCEventRun_loopCount + 1;
	if (loopCount != 0 && window.obj590_SCEventRun_loopCount > loopCount) {
		window.obj590_SCEventRun_loopCount = 0
		obj590_SCEventRun_actionGroup23();
	} else {
		obj590_SCEventRun_actionGroup0();
	}

}


























};
obj590_SCEventRun_actionGroup23 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj590_SCEventRun_activeActionGroupIndex = -1;
		$("#obj590").trigger("obj590_SCEventRun_ended");
		
		return;
	}
	window.obj590_SCEventRun_activeActionGroupIndex = 23;
	










































};
obj666_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj666_onLoad_activeActionGroupIndex = -1;
		$("#obj666").trigger("obj666_onLoad_ended");
		
		return;
	}
	window.obj666_onLoad_activeActionGroupIndex = 0;
	


//	action: show 
//	target: obj666 
(function(){
	window.obj666_onLoad_runningActionsCount = obj666_onLoad_runningActionsCount + 1;


	var element = "#obj666";
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
				window.obj666_onLoad_runningActionsCount = window.obj666_onLoad_runningActionsCount - 1;

if (window.obj666_onLoad_runningActionsCount == 0) {
	obj666_onLoad_actionGroup1();
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
			window.obj666_onLoad_runningActionsCount = window.obj666_onLoad_runningActionsCount - 1;

if (window.obj666_onLoad_runningActionsCount == 0) {
	obj666_onLoad_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj670 
(function(){
	window.obj666_onLoad_runningActionsCount = obj666_onLoad_runningActionsCount + 1;


	var element = "#obj670";
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
				window.obj666_onLoad_runningActionsCount = window.obj666_onLoad_runningActionsCount - 1;

if (window.obj666_onLoad_runningActionsCount == 0) {
	obj666_onLoad_actionGroup1();
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
			window.obj666_onLoad_runningActionsCount = window.obj666_onLoad_runningActionsCount - 1;

if (window.obj666_onLoad_runningActionsCount == 0) {
	obj666_onLoad_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj668 
(function(){
	window.obj666_onLoad_runningActionsCount = obj666_onLoad_runningActionsCount + 1;


	var element = "#obj668";
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
				window.obj666_onLoad_runningActionsCount = window.obj666_onLoad_runningActionsCount - 1;

if (window.obj666_onLoad_runningActionsCount == 0) {
	obj666_onLoad_actionGroup1();
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
			window.obj666_onLoad_runningActionsCount = window.obj666_onLoad_runningActionsCount - 1;

if (window.obj666_onLoad_runningActionsCount == 0) {
	obj666_onLoad_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();









//	action: playAudioFile
playAudioFile_1268();
function playAudioFile_1268() {
	window.obj666_onLoad_runningActionsCount = obj666_onLoad_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1268")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1268");
			$("#obj_audio_playSoundFile1268").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj666_onLoad_runningActionsCount = window.obj666_onLoad_runningActionsCount - 1;

if (window.obj666_onLoad_runningActionsCount == 0) {
	obj666_onLoad_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj666_onLoad_runningActionsCount = window.obj666_onLoad_runningActionsCount - 1;

if (window.obj666_onLoad_runningActionsCount == 0) {
	obj666_onLoad_actionGroup1();
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
				window.obj666_onLoad_runningActionsCount = window.obj666_onLoad_runningActionsCount - 1;

if (window.obj666_onLoad_runningActionsCount == 0) {
	obj666_onLoad_actionGroup1();
}
			}, false);
		} else {
			window.obj666_onLoad_runningActionsCount = window.obj666_onLoad_runningActionsCount - 1;

if (window.obj666_onLoad_runningActionsCount == 0) {
	obj666_onLoad_actionGroup1();
}
		}
	}

	
	
	
}




































};
obj666_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj666_onLoad_activeActionGroupIndex = -1;
		$("#obj666").trigger("obj666_onLoad_ended");
		
		return;
	}
	window.obj666_onLoad_activeActionGroupIndex = 1;
	





























//	action: Run JavaScript
runjs_1269();
function runjs_1269() {
	window.obj666_onLoad_runningActionsCount = obj666_onLoad_runningActionsCount + 1;


	localStorage.setItem("ready", "true");

	setTimeout(function() {
		window.obj666_onLoad_runningActionsCount = window.obj666_onLoad_runningActionsCount - 1;

if (window.obj666_onLoad_runningActionsCount == 0) {
	obj666_onLoad_actionGroup2();
}
	}, 1);
}












};
obj666_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj666_onLoad_activeActionGroupIndex = -1;
		$("#obj666").trigger("obj666_onLoad_ended");
		
		return;
	}
	window.obj666_onLoad_activeActionGroupIndex = 2;
	










































};
obj678_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj678_onTap_activeActionGroupIndex = -1;
		$("#obj678").trigger("obj678_onTap_ended");
		
		return;
	}
	window.obj678_onTap_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj678 
move_707();
function move_707() {
	window.obj678_onTap_runningActionsCount = obj678_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj678");
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
			window.obj678_onTap_runningActionsCount = window.obj678_onTap_runningActionsCount - 1;

if (window.obj678_onTap_runningActionsCount == 0) {
	obj678_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj678 
move_708();
function move_708() {
	window.obj678_onTap_runningActionsCount = obj678_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj678");
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
			window.obj678_onTap_runningActionsCount = window.obj678_onTap_runningActionsCount - 1;

if (window.obj678_onTap_runningActionsCount == 0) {
	obj678_onTap_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1386();
function playAudioFile_1386() {
	window.obj678_onTap_runningActionsCount = obj678_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1386")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1386");
			$("#obj_audio_playSoundFile1386").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj678_onTap_runningActionsCount = window.obj678_onTap_runningActionsCount - 1;

if (window.obj678_onTap_runningActionsCount == 0) {
	obj678_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj678_onTap_runningActionsCount = window.obj678_onTap_runningActionsCount - 1;

if (window.obj678_onTap_runningActionsCount == 0) {
	obj678_onTap_actionGroup1();
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
				window.obj678_onTap_runningActionsCount = window.obj678_onTap_runningActionsCount - 1;

if (window.obj678_onTap_runningActionsCount == 0) {
	obj678_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj678_onTap_runningActionsCount = window.obj678_onTap_runningActionsCount - 1;

if (window.obj678_onTap_runningActionsCount == 0) {
	obj678_onTap_actionGroup1();
}
		}
	}

	
	
	
}




































};
obj678_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj678_onTap_activeActionGroupIndex = -1;
		$("#obj678").trigger("obj678_onTap_ended");
		
		return;
	}
	window.obj678_onTap_activeActionGroupIndex = 1;
	










































};
obj680_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj680_SCEventRun_activeActionGroupIndex = -1;
		$("#obj680").trigger("obj680_SCEventRun_ended");
		
		return;
	}
	window.obj680_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj666 
hide_683();
function hide_683() {
	var element = "#obj666";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj680_SCEventRun_runningActionsCount = obj680_SCEventRun_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj680_SCEventRun_runningActionsCount = window.obj680_SCEventRun_runningActionsCount - 1;

if (window.obj680_SCEventRun_runningActionsCount == 0) {
	obj680_SCEventRun_actionGroup1();
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
		setTimeout(hide_683(), 100);
		return;
	}

	setTimeout(function() {
		$(element).css("display", "none");
		window.obj680_SCEventRun_runningActionsCount = window.obj680_SCEventRun_runningActionsCount - 1;

if (window.obj680_SCEventRun_runningActionsCount == 0) {
	obj680_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)

}
//	action: hide
//	target: obj668 
hide_684();
function hide_684() {
	var element = "#obj668";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj680_SCEventRun_runningActionsCount = obj680_SCEventRun_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj680_SCEventRun_runningActionsCount = window.obj680_SCEventRun_runningActionsCount - 1;

if (window.obj680_SCEventRun_runningActionsCount == 0) {
	obj680_SCEventRun_actionGroup1();
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
		setTimeout(hide_684(), 100);
		return;
	}

	setTimeout(function() {
		$(element).css("display", "none");
		window.obj680_SCEventRun_runningActionsCount = window.obj680_SCEventRun_runningActionsCount - 1;

if (window.obj680_SCEventRun_runningActionsCount == 0) {
	obj680_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)

}
//	action: hide
//	target: obj670 
hide_685();
function hide_685() {
	var element = "#obj670";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj680_SCEventRun_runningActionsCount = obj680_SCEventRun_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj680_SCEventRun_runningActionsCount = window.obj680_SCEventRun_runningActionsCount - 1;

if (window.obj680_SCEventRun_runningActionsCount == 0) {
	obj680_SCEventRun_actionGroup1();
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
		setTimeout(hide_685(), 100);
		return;
	}

	setTimeout(function() {
		$(element).css("display", "none");
		window.obj680_SCEventRun_runningActionsCount = window.obj680_SCEventRun_runningActionsCount - 1;

if (window.obj680_SCEventRun_runningActionsCount == 0) {
	obj680_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)

}

//	action: move
//	target: obj678 
move_682();
function move_682() {
	window.obj680_SCEventRun_runningActionsCount = obj680_SCEventRun_runningActionsCount + 1;


	var easing = "ease-out";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj678");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-800";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj680_SCEventRun_runningActionsCount = window.obj680_SCEventRun_runningActionsCount - 1;

if (window.obj680_SCEventRun_runningActionsCount == 0) {
	obj680_SCEventRun_actionGroup1();
}
		}, 1);
	});
}






































};
obj680_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj680_SCEventRun_activeActionGroupIndex = -1;
		$("#obj680").trigger("obj680_SCEventRun_ended");
		
		return;
	}
	window.obj680_SCEventRun_activeActionGroupIndex = 1;
	


//	action: show 
//	target: obj688 
(function(){
	window.obj680_SCEventRun_runningActionsCount = obj680_SCEventRun_runningActionsCount + 1;


	var element = "#obj688";
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
				window.obj680_SCEventRun_runningActionsCount = window.obj680_SCEventRun_runningActionsCount - 1;

if (window.obj680_SCEventRun_runningActionsCount == 0) {
	obj680_SCEventRun_actionGroup2();
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
			window.obj680_SCEventRun_runningActionsCount = window.obj680_SCEventRun_runningActionsCount - 1;

if (window.obj680_SCEventRun_runningActionsCount == 0) {
	obj680_SCEventRun_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj686 
(function(){
	window.obj680_SCEventRun_runningActionsCount = obj680_SCEventRun_runningActionsCount + 1;


	var element = "#obj686";
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
				window.obj680_SCEventRun_runningActionsCount = window.obj680_SCEventRun_runningActionsCount - 1;

if (window.obj680_SCEventRun_runningActionsCount == 0) {
	obj680_SCEventRun_actionGroup2();
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
			window.obj680_SCEventRun_runningActionsCount = window.obj680_SCEventRun_runningActionsCount - 1;

if (window.obj680_SCEventRun_runningActionsCount == 0) {
	obj680_SCEventRun_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj690 
(function(){
	window.obj680_SCEventRun_runningActionsCount = obj680_SCEventRun_runningActionsCount + 1;


	var element = "#obj690";
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
				window.obj680_SCEventRun_runningActionsCount = window.obj680_SCEventRun_runningActionsCount - 1;

if (window.obj680_SCEventRun_runningActionsCount == 0) {
	obj680_SCEventRun_actionGroup2();
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
			window.obj680_SCEventRun_runningActionsCount = window.obj680_SCEventRun_runningActionsCount - 1;

if (window.obj680_SCEventRun_runningActionsCount == 0) {
	obj680_SCEventRun_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: move
//	target: obj678 
move_709();
function move_709() {
	window.obj680_SCEventRun_runningActionsCount = obj680_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj678");
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
			window.obj680_SCEventRun_runningActionsCount = window.obj680_SCEventRun_runningActionsCount - 1;

if (window.obj680_SCEventRun_runningActionsCount == 0) {
	obj680_SCEventRun_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj678 
move_710();
function move_710() {
	window.obj680_SCEventRun_runningActionsCount = obj680_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj678");
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
			window.obj680_SCEventRun_runningActionsCount = window.obj680_SCEventRun_runningActionsCount - 1;

if (window.obj680_SCEventRun_runningActionsCount == 0) {
	obj680_SCEventRun_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj678 
move_711();
function move_711() {
	window.obj680_SCEventRun_runningActionsCount = obj680_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj678");
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
			window.obj680_SCEventRun_runningActionsCount = window.obj680_SCEventRun_runningActionsCount - 1;

if (window.obj680_SCEventRun_runningActionsCount == 0) {
	obj680_SCEventRun_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj678 
move_712();
function move_712() {
	window.obj680_SCEventRun_runningActionsCount = obj680_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj678");
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
			window.obj680_SCEventRun_runningActionsCount = window.obj680_SCEventRun_runningActionsCount - 1;

if (window.obj680_SCEventRun_runningActionsCount == 0) {
	obj680_SCEventRun_actionGroup2();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1399();
function playAudioFile_1399() {
	window.obj680_SCEventRun_runningActionsCount = obj680_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1399")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1399");
			$("#obj_audio_playSoundFile1399").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj680_SCEventRun_runningActionsCount = window.obj680_SCEventRun_runningActionsCount - 1;

if (window.obj680_SCEventRun_runningActionsCount == 0) {
	obj680_SCEventRun_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj680_SCEventRun_runningActionsCount = window.obj680_SCEventRun_runningActionsCount - 1;

if (window.obj680_SCEventRun_runningActionsCount == 0) {
	obj680_SCEventRun_actionGroup2();
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
				window.obj680_SCEventRun_runningActionsCount = window.obj680_SCEventRun_runningActionsCount - 1;

if (window.obj680_SCEventRun_runningActionsCount == 0) {
	obj680_SCEventRun_actionGroup2();
}
			}, false);
		} else {
			window.obj680_SCEventRun_runningActionsCount = window.obj680_SCEventRun_runningActionsCount - 1;

if (window.obj680_SCEventRun_runningActionsCount == 0) {
	obj680_SCEventRun_actionGroup2();
}
		}
	}

	
	
	
}






//	action: playAudioFile
playAudioFile_1263();
function playAudioFile_1263() {
	window.obj680_SCEventRun_runningActionsCount = obj680_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1263")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1263");
			$("#obj_audio_playSoundFile1263").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj680_SCEventRun_runningActionsCount = window.obj680_SCEventRun_runningActionsCount - 1;

if (window.obj680_SCEventRun_runningActionsCount == 0) {
	obj680_SCEventRun_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj680_SCEventRun_runningActionsCount = window.obj680_SCEventRun_runningActionsCount - 1;

if (window.obj680_SCEventRun_runningActionsCount == 0) {
	obj680_SCEventRun_actionGroup2();
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
				window.obj680_SCEventRun_runningActionsCount = window.obj680_SCEventRun_runningActionsCount - 1;

if (window.obj680_SCEventRun_runningActionsCount == 0) {
	obj680_SCEventRun_actionGroup2();
}
			}, false);
		} else {
			window.obj680_SCEventRun_runningActionsCount = window.obj680_SCEventRun_runningActionsCount - 1;

if (window.obj680_SCEventRun_runningActionsCount == 0) {
	obj680_SCEventRun_actionGroup2();
}
		}
	}

	
	
	
}




































};
obj680_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj680_SCEventRun_activeActionGroupIndex = -1;
		$("#obj680").trigger("obj680_SCEventRun_ended");
		
		return;
	}
	window.obj680_SCEventRun_activeActionGroupIndex = 2;
	
















//	action: wait
wait_1267();
function wait_1267() {
	window.obj680_SCEventRun_runningActionsCount = obj680_SCEventRun_runningActionsCount + 1;

	setTimeout(function() {
		window.obj680_SCEventRun_runningActionsCount = window.obj680_SCEventRun_runningActionsCount - 1;

if (window.obj680_SCEventRun_runningActionsCount == 0) {
	obj680_SCEventRun_actionGroup3();
}
	}, 900);
}

























};
obj680_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj680_SCEventRun_activeActionGroupIndex = -1;
		$("#obj680").trigger("obj680_SCEventRun_ended");
		
		return;
	}
	window.obj680_SCEventRun_activeActionGroupIndex = 3;
	


//	action: show 
//	target: obj698 
(function(){
	window.obj680_SCEventRun_runningActionsCount = obj680_SCEventRun_runningActionsCount + 1;


	var element = "#obj698";
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
		var animationDurationMs = 300;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				window.obj680_SCEventRun_runningActionsCount = window.obj680_SCEventRun_runningActionsCount - 1;

if (window.obj680_SCEventRun_runningActionsCount == 0) {
	obj680_SCEventRun_actionGroup4();
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
			window.obj680_SCEventRun_runningActionsCount = window.obj680_SCEventRun_runningActionsCount - 1;

if (window.obj680_SCEventRun_runningActionsCount == 0) {
	obj680_SCEventRun_actionGroup4();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();







































};
obj680_SCEventRun_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj680_SCEventRun_activeActionGroupIndex = -1;
		$("#obj680").trigger("obj680_SCEventRun_ended");
		
		return;
	}
	window.obj680_SCEventRun_activeActionGroupIndex = 4;
	


//	action: show 
//	target: obj697 
(function(){
	window.obj680_SCEventRun_runningActionsCount = obj680_SCEventRun_runningActionsCount + 1;


	var element = "#obj697";
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
		var animationDurationMs = 300;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				window.obj680_SCEventRun_runningActionsCount = window.obj680_SCEventRun_runningActionsCount - 1;

if (window.obj680_SCEventRun_runningActionsCount == 0) {
	obj680_SCEventRun_actionGroup5();
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
			window.obj680_SCEventRun_runningActionsCount = window.obj680_SCEventRun_runningActionsCount - 1;

if (window.obj680_SCEventRun_runningActionsCount == 0) {
	obj680_SCEventRun_actionGroup5();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();







































};
obj680_SCEventRun_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj680_SCEventRun_activeActionGroupIndex = -1;
		$("#obj680").trigger("obj680_SCEventRun_ended");
		
		return;
	}
	window.obj680_SCEventRun_activeActionGroupIndex = 5;
	


//	action: show 
//	target: obj699 
(function(){
	window.obj680_SCEventRun_runningActionsCount = obj680_SCEventRun_runningActionsCount + 1;


	var element = "#obj699";
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
		var animationDurationMs = 300;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				window.obj680_SCEventRun_runningActionsCount = window.obj680_SCEventRun_runningActionsCount - 1;

if (window.obj680_SCEventRun_runningActionsCount == 0) {
	obj680_SCEventRun_actionGroup6();
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
			window.obj680_SCEventRun_runningActionsCount = window.obj680_SCEventRun_runningActionsCount - 1;

if (window.obj680_SCEventRun_runningActionsCount == 0) {
	obj680_SCEventRun_actionGroup6();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();







































};
obj680_SCEventRun_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj680_SCEventRun_activeActionGroupIndex = -1;
		$("#obj680").trigger("obj680_SCEventRun_ended");
		
		return;
	}
	window.obj680_SCEventRun_activeActionGroupIndex = 6;
	










































};
obj697_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj697_onTap_activeActionGroupIndex = -1;
		$("#obj697").trigger("obj697_onTap_ended");
		
		return;
	}
	window.obj697_onTap_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj697 
move_717();
function move_717() {
	window.obj697_onTap_runningActionsCount = obj697_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj697");
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
			window.obj697_onTap_runningActionsCount = window.obj697_onTap_runningActionsCount - 1;

if (window.obj697_onTap_runningActionsCount == 0) {
	obj697_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj697 
move_718();
function move_718() {
	window.obj697_onTap_runningActionsCount = obj697_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj697");
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
			window.obj697_onTap_runningActionsCount = window.obj697_onTap_runningActionsCount - 1;

if (window.obj697_onTap_runningActionsCount == 0) {
	obj697_onTap_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1434();
function playAudioFile_1434() {
	window.obj697_onTap_runningActionsCount = obj697_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1434")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1434");
			$("#obj_audio_playSoundFile1434").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj697_onTap_runningActionsCount = window.obj697_onTap_runningActionsCount - 1;

if (window.obj697_onTap_runningActionsCount == 0) {
	obj697_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj697_onTap_runningActionsCount = window.obj697_onTap_runningActionsCount - 1;

if (window.obj697_onTap_runningActionsCount == 0) {
	obj697_onTap_actionGroup1();
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
				window.obj697_onTap_runningActionsCount = window.obj697_onTap_runningActionsCount - 1;

if (window.obj697_onTap_runningActionsCount == 0) {
	obj697_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj697_onTap_runningActionsCount = window.obj697_onTap_runningActionsCount - 1;

if (window.obj697_onTap_runningActionsCount == 0) {
	obj697_onTap_actionGroup1();
}
		}
	}

	
	
	
}




































};
obj697_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj697_onTap_activeActionGroupIndex = -1;
		$("#obj697").trigger("obj697_onTap_ended");
		
		return;
	}
	window.obj697_onTap_activeActionGroupIndex = 1;
	










































};
obj698_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj698_onTap_activeActionGroupIndex = -1;
		$("#obj698").trigger("obj698_onTap_ended");
		
		return;
	}
	window.obj698_onTap_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj698 
move_715();
function move_715() {
	window.obj698_onTap_runningActionsCount = obj698_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj698");
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
			window.obj698_onTap_runningActionsCount = window.obj698_onTap_runningActionsCount - 1;

if (window.obj698_onTap_runningActionsCount == 0) {
	obj698_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj698 
move_716();
function move_716() {
	window.obj698_onTap_runningActionsCount = obj698_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj698");
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
			window.obj698_onTap_runningActionsCount = window.obj698_onTap_runningActionsCount - 1;

if (window.obj698_onTap_runningActionsCount == 0) {
	obj698_onTap_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1433();
function playAudioFile_1433() {
	window.obj698_onTap_runningActionsCount = obj698_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1433")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1433");
			$("#obj_audio_playSoundFile1433").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj698_onTap_runningActionsCount = window.obj698_onTap_runningActionsCount - 1;

if (window.obj698_onTap_runningActionsCount == 0) {
	obj698_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj698_onTap_runningActionsCount = window.obj698_onTap_runningActionsCount - 1;

if (window.obj698_onTap_runningActionsCount == 0) {
	obj698_onTap_actionGroup1();
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
				window.obj698_onTap_runningActionsCount = window.obj698_onTap_runningActionsCount - 1;

if (window.obj698_onTap_runningActionsCount == 0) {
	obj698_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj698_onTap_runningActionsCount = window.obj698_onTap_runningActionsCount - 1;

if (window.obj698_onTap_runningActionsCount == 0) {
	obj698_onTap_actionGroup1();
}
		}
	}

	
	
	
}




































};
obj698_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj698_onTap_activeActionGroupIndex = -1;
		$("#obj698").trigger("obj698_onTap_ended");
		
		return;
	}
	window.obj698_onTap_activeActionGroupIndex = 1;
	










































};
obj699_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj699_onTap_activeActionGroupIndex = -1;
		$("#obj699").trigger("obj699_onTap_ended");
		
		return;
	}
	window.obj699_onTap_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj699 
move_713();
function move_713() {
	window.obj699_onTap_runningActionsCount = obj699_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj699");
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
			window.obj699_onTap_runningActionsCount = window.obj699_onTap_runningActionsCount - 1;

if (window.obj699_onTap_runningActionsCount == 0) {
	obj699_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj699 
move_714();
function move_714() {
	window.obj699_onTap_runningActionsCount = obj699_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj699");
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
			window.obj699_onTap_runningActionsCount = window.obj699_onTap_runningActionsCount - 1;

if (window.obj699_onTap_runningActionsCount == 0) {
	obj699_onTap_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1435();
function playAudioFile_1435() {
	window.obj699_onTap_runningActionsCount = obj699_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1435")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1435");
			$("#obj_audio_playSoundFile1435").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj699_onTap_runningActionsCount = window.obj699_onTap_runningActionsCount - 1;

if (window.obj699_onTap_runningActionsCount == 0) {
	obj699_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj699_onTap_runningActionsCount = window.obj699_onTap_runningActionsCount - 1;

if (window.obj699_onTap_runningActionsCount == 0) {
	obj699_onTap_actionGroup1();
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
				window.obj699_onTap_runningActionsCount = window.obj699_onTap_runningActionsCount - 1;

if (window.obj699_onTap_runningActionsCount == 0) {
	obj699_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj699_onTap_runningActionsCount = window.obj699_onTap_runningActionsCount - 1;

if (window.obj699_onTap_runningActionsCount == 0) {
	obj699_onTap_actionGroup1();
}
		}
	}

	
	
	
}




































};
obj699_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj699_onTap_activeActionGroupIndex = -1;
		$("#obj699").trigger("obj699_onTap_ended");
		
		return;
	}
	window.obj699_onTap_activeActionGroupIndex = 1;
	










































};
obj1430_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1430_onLoad_activeActionGroupIndex = -1;
		$("#obj1430").trigger("obj1430_onLoad_ended");
		
		return;
	}
	window.obj1430_onLoad_activeActionGroupIndex = 0;
	
























//	action: playAudio
//	target: obj1430 
playAudio_1432();
function playAudio_1432() {
	window.obj1430_onLoad_runningActionsCount = obj1430_onLoad_runningActionsCount + 1;

	var myAudio = $("#obj1430")[0];
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
		    window.obj1430_onLoad_runningActionsCount = window.obj1430_onLoad_runningActionsCount - 1;

if (window.obj1430_onLoad_runningActionsCount == 0) {
	obj1430_onLoad_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1430_onLoad_runningActionsCount = window.obj1430_onLoad_runningActionsCount - 1;

if (window.obj1430_onLoad_runningActionsCount == 0) {
	obj1430_onLoad_actionGroup1();
}
	}
}

















};
obj1430_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1430_onLoad_activeActionGroupIndex = -1;
		$("#obj1430").trigger("obj1430_onLoad_ended");
		
		return;
	}
	window.obj1430_onLoad_activeActionGroupIndex = 1;
	










































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		





/*
 *
 *   obj75: Event Touch Down
 *
 */

$("#obj75").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj75_onTap_activeActionGroupIndex != -1) return;
var obj75_onTap_runningActionsCount = 0;
var obj75_onTap_loopCount = 0;
obj75_onTap_actionGroup0();
});










































































/*
 *
 *   obj100: Event Touch Down
 *
 */

$("#obj100").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj100_onTap_activeActionGroupIndex != -1) return;
var obj100_onTap_runningActionsCount = 0;
var obj100_onTap_loopCount = 0;
obj100_onTap_actionGroup0();
});














/*
 *
 *   obj101: Event Touch Down
 *
 */

$("#obj101").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj101_onTap_activeActionGroupIndex != -1) return;
var obj101_onTap_runningActionsCount = 0;
var obj101_onTap_loopCount = 0;
obj101_onTap_actionGroup0();
});














/*
 *
 *   obj102: Event Touch Down
 *
 */

$("#obj102").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj102_onTap_activeActionGroupIndex != -1) return;
var obj102_onTap_runningActionsCount = 0;
var obj102_onTap_loopCount = 0;
obj102_onTap_actionGroup0();
});














/*
 *
 *   obj103: Event Touch Down
 *
 */

$("#obj103").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj103_onTap_activeActionGroupIndex != -1) return;
var obj103_onTap_runningActionsCount = 0;
var obj103_onTap_loopCount = 0;
obj103_onTap_actionGroup0();
});














/*
 *
 *   obj104: Event Touch Down
 *
 */

$("#obj104").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj104_onTap_activeActionGroupIndex != -1) return;
var obj104_onTap_runningActionsCount = 0;
var obj104_onTap_loopCount = 0;
obj104_onTap_actionGroup0();
});



/*
 *
 *   obj104: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj104_onLoad_activeActionGroupIndex != -1) return;
var obj104_onLoad_runningActionsCount = 0;
var obj104_onLoad_loopCount = 0;
obj104_onLoad_actionGroup0();
});














/*
 *
 *   obj105: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj105_onLoad_activeActionGroupIndex != -1) return;
var obj105_onLoad_runningActionsCount = 0;
var obj105_onLoad_loopCount = 0;
obj105_onLoad_actionGroup0();
});














/*
 *
 *   obj106: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj106_onLoad_activeActionGroupIndex != -1) return;
var obj106_onLoad_runningActionsCount = 0;
var obj106_onLoad_loopCount = 0;
obj106_onLoad_actionGroup0();
});










/*
 *
 *   obj107: Event Touch Down
 *
 */

$("#obj107").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj107_onTap_activeActionGroupIndex != -1) return;
var obj107_onTap_runningActionsCount = 0;
var obj107_onTap_loopCount = 0;
obj107_onTap_actionGroup0();
});














/*
 *
 *   obj108: Event Touch Down
 *
 */

$("#obj108").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj108_onTap_activeActionGroupIndex != -1) return;
var obj108_onTap_runningActionsCount = 0;
var obj108_onTap_loopCount = 0;
obj108_onTap_actionGroup0();
});





























/*
 *
 *   obj110: Event Touch Down
 *
 */

$("#obj110").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj110_onTap_activeActionGroupIndex != -1) return;
var obj110_onTap_runningActionsCount = 0;
var obj110_onTap_loopCount = 0;
obj110_onTap_actionGroup0();
});














/*
 *
 *   obj111: Event Touch Down
 *
 */

$("#obj111").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj111_onTap_activeActionGroupIndex != -1) return;
var obj111_onTap_runningActionsCount = 0;
var obj111_onTap_loopCount = 0;
obj111_onTap_actionGroup0();
});























/*
 *
 *   obj590: Event SCEventRun
 *
 */

$("#obj590").bind("SCEventRun", function(event) {
	if (window.obj590_SCEventRun_activeActionGroupIndex != -1) return;
var obj590_SCEventRun_runningActionsCount = 0;
var obj590_SCEventRun_loopCount = 0;
obj590_SCEventRun_actionGroup0();
});









/*
 *
 *   obj666: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj666_onLoad_activeActionGroupIndex != -1) return;
var obj666_onLoad_runningActionsCount = 0;
var obj666_onLoad_loopCount = 0;
obj666_onLoad_actionGroup0();
});








































/*
 *
 *   obj678: Event Touch Down
 *
 */

$("#obj678").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj678_onTap_activeActionGroupIndex != -1) return;
var obj678_onTap_runningActionsCount = 0;
var obj678_onTap_loopCount = 0;
obj678_onTap_actionGroup0();
});























/*
 *
 *   obj680: Event SCEventRun
 *
 */

$("#obj680").bind("SCEventRun", function(event) {
	if (window.obj680_SCEventRun_activeActionGroupIndex != -1) return;
var obj680_SCEventRun_runningActionsCount = 0;
var obj680_SCEventRun_loopCount = 0;
obj680_SCEventRun_actionGroup0();
});


















































/*
 *
 *   obj697: Event Touch Down
 *
 */

$("#obj697").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj697_onTap_activeActionGroupIndex != -1) return;
var obj697_onTap_runningActionsCount = 0;
var obj697_onTap_loopCount = 0;
obj697_onTap_actionGroup0();
});














/*
 *
 *   obj698: Event Touch Down
 *
 */

$("#obj698").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj698_onTap_activeActionGroupIndex != -1) return;
var obj698_onTap_runningActionsCount = 0;
var obj698_onTap_loopCount = 0;
obj698_onTap_actionGroup0();
});














/*
 *
 *   obj699: Event Touch Down
 *
 */

$("#obj699").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj699_onTap_activeActionGroupIndex != -1) return;
var obj699_onTap_runningActionsCount = 0;
var obj699_onTap_loopCount = 0;
obj699_onTap_actionGroup0();
});


















/*
 *
 *   obj1430: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1430_onLoad_activeActionGroupIndex != -1) return;
var obj1430_onLoad_runningActionsCount = 0;
var obj1430_onLoad_loopCount = 0;
obj1430_onLoad_actionGroup0();
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
	
$("#obj75").trigger('SCEventShow');
$("#obj96").trigger('SCEventShow');
$("#obj98").trigger('SCEventShow');
$("#obj94").trigger('SCEventShow');
$("#obj92").trigger('SCEventShow');
$("#obj100").trigger('SCEventShow');
$("#obj101").trigger('SCEventShow');
$("#obj102").trigger('SCEventShow');
$("#obj103").trigger('SCEventShow');
$("#obj104").trigger('SCEventShow');
$("#obj105").trigger('SCEventShow');
$("#obj106").trigger('SCEventShow');
$("#obj107").trigger('SCEventShow');
$("#obj108").trigger('SCEventShow');
$("#obj109").trigger('SCEventShow');
$("#obj110").trigger('SCEventShow');
$("#obj111").trigger('SCEventShow');
$("#obj678").trigger('SCEventShow');
$("#obj1430").trigger('SCEventShow');
	localStorage.setItem("tapped", "0");
localStorage.setItem("tapped", "0");
localStorage.setItem("ready", "false");
});