pubcoder.projectID = pubcoder.projectID || "968537061CD4A6469E16DEA662F0DD9C";
pubcoder.project.id = pubcoder.project.id || "968537061CD4A6469E16DEA662F0DD9C";
pubcoder.project.title = pubcoder.project.title || "MGTO Underwater Story";
pubcoder.page.id = pubcoder.page.id || 980;
pubcoder.page.title = pubcoder.page.title || "8";
pubcoder.page.number = pubcoder.page.number || 8;
pubcoder.page.alias = pubcoder.page.alias || "";


var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;

var obj1162_animation_count = 0;

/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj1271_onTap_activeActionGroupIndex = -1;
var obj1271_onTap_runningActionsCount = 0;
var obj1271_onTap_loopCount = 0;
var obj1271_onLoad_activeActionGroupIndex = -1;
var obj1271_onLoad_runningActionsCount = 0;
var obj1271_onLoad_loopCount = 0;
var obj1312_onLoad_activeActionGroupIndex = -1;
var obj1312_onLoad_runningActionsCount = 0;
var obj1312_onLoad_loopCount = 0;
var obj1285_onTap_activeActionGroupIndex = -1;
var obj1285_onTap_runningActionsCount = 0;
var obj1285_onTap_loopCount = 0;
var obj1285_onLoad_activeActionGroupIndex = -1;
var obj1285_onLoad_runningActionsCount = 0;
var obj1285_onLoad_loopCount = 0;
var obj1325_onLoad_activeActionGroupIndex = -1;
var obj1325_onLoad_runningActionsCount = 0;
var obj1325_onLoad_loopCount = 0;
var obj1265_onLoad_activeActionGroupIndex = -1;
var obj1265_onLoad_runningActionsCount = 0;
var obj1265_onLoad_loopCount = 0;
var obj1223_onTap_activeActionGroupIndex = -1;
var obj1223_onTap_runningActionsCount = 0;
var obj1223_onTap_loopCount = 0;
var obj1223_onLoad_activeActionGroupIndex = -1;
var obj1223_onLoad_runningActionsCount = 0;
var obj1223_onLoad_loopCount = 0;
var obj1913_onLoad_activeActionGroupIndex = -1;
var obj1913_onLoad_runningActionsCount = 0;
var obj1913_onLoad_loopCount = 0;
var obj1162_onLoad_activeActionGroupIndex = -1;
var obj1162_onLoad_runningActionsCount = 0;
var obj1162_onLoad_loopCount = 0;
var obj1341_onLoad_activeActionGroupIndex = -1;
var obj1341_onLoad_runningActionsCount = 0;
var obj1341_onLoad_loopCount = 0;
var obj1501_SCEventRun_activeActionGroupIndex = -1;
var obj1501_SCEventRun_runningActionsCount = 0;
var obj1501_SCEventRun_loopCount = 0;
var obj1510_onShow_activeActionGroupIndex = -1;
var obj1510_onShow_runningActionsCount = 0;
var obj1510_onShow_loopCount = 0;
var obj1518_onShow_activeActionGroupIndex = -1;
var obj1518_onShow_runningActionsCount = 0;
var obj1518_onShow_loopCount = 0;
var obj1520_onShow_activeActionGroupIndex = -1;
var obj1520_onShow_runningActionsCount = 0;
var obj1520_onShow_loopCount = 0;
var obj1338_onShow_activeActionGroupIndex = -1;
var obj1338_onShow_runningActionsCount = 0;
var obj1338_onShow_loopCount = 0;
var obj1402_onShow_activeActionGroupIndex = -1;
var obj1402_onShow_runningActionsCount = 0;
var obj1402_onShow_loopCount = 0;
var obj1404_SCEventRun_activeActionGroupIndex = -1;
var obj1404_SCEventRun_runningActionsCount = 0;
var obj1404_SCEventRun_loopCount = 0;
var obj1434_onShow_activeActionGroupIndex = -1;
var obj1434_onShow_runningActionsCount = 0;
var obj1434_onShow_loopCount = 0;
var obj1436_onShow_activeActionGroupIndex = -1;
var obj1436_onShow_runningActionsCount = 0;
var obj1436_onShow_loopCount = 0;
var obj1197_onLoad_activeActionGroupIndex = -1;
var obj1197_onLoad_runningActionsCount = 0;
var obj1197_onLoad_loopCount = 0;
var obj1177_onShow_activeActionGroupIndex = -1;
var obj1177_onShow_runningActionsCount = 0;
var obj1177_onShow_loopCount = 0;
var obj1753_onDrag_activeActionGroupIndex = -1;
var obj1753_onDrag_runningActionsCount = 0;
var obj1753_onDrag_loopCount = 0;
var obj1753_onTouchDown_activeActionGroupIndex = -1;
var obj1753_onTouchDown_runningActionsCount = 0;
var obj1753_onTouchDown_loopCount = 0;
var obj1753_SCActionDragDrop1789_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1753_SCActionDragDrop1789_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1753_SCActionDragDrop1789_droppedOutsideTargetActions_loopCount = 0;
var obj1753_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj1753_droppedInsideTargetActions_runningActionsCount = 0;
var obj1753_droppedInsideTargetActions_loopCount = 0;
var obj1781_SCEventRun_activeActionGroupIndex = -1;
var obj1781_SCEventRun_runningActionsCount = 0;
var obj1781_SCEventRun_loopCount = 0;
var obj1186_onShow_activeActionGroupIndex = -1;
var obj1186_onShow_runningActionsCount = 0;
var obj1186_onShow_loopCount = 0;
var obj1746_onDrag_activeActionGroupIndex = -1;
var obj1746_onDrag_runningActionsCount = 0;
var obj1746_onDrag_loopCount = 0;
var obj1746_onTouchDown_activeActionGroupIndex = -1;
var obj1746_onTouchDown_runningActionsCount = 0;
var obj1746_onTouchDown_loopCount = 0;
var obj1746_SCActionDragDrop1761_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1746_SCActionDragDrop1761_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1746_SCActionDragDrop1761_droppedOutsideTargetActions_loopCount = 0;
var obj1746_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj1746_droppedInsideTargetActions_runningActionsCount = 0;
var obj1746_droppedInsideTargetActions_loopCount = 0;
var obj1766_SCEventRun_activeActionGroupIndex = -1;
var obj1766_SCEventRun_runningActionsCount = 0;
var obj1766_SCEventRun_loopCount = 0;
var obj1182_onShow_activeActionGroupIndex = -1;
var obj1182_onShow_runningActionsCount = 0;
var obj1182_onShow_loopCount = 0;
var obj1709_onDrag_activeActionGroupIndex = -1;
var obj1709_onDrag_runningActionsCount = 0;
var obj1709_onDrag_loopCount = 0;
var obj1709_onTouchDown_activeActionGroupIndex = -1;
var obj1709_onTouchDown_runningActionsCount = 0;
var obj1709_onTouchDown_loopCount = 0;
var obj1709_SCActionDragDrop1722_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1709_SCActionDragDrop1722_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1709_SCActionDragDrop1722_droppedOutsideTargetActions_loopCount = 0;
var obj1709_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj1709_droppedInsideTargetActions_runningActionsCount = 0;
var obj1709_droppedInsideTargetActions_loopCount = 0;
var obj1727_SCEventRun_activeActionGroupIndex = -1;
var obj1727_SCEventRun_runningActionsCount = 0;
var obj1727_SCEventRun_loopCount = 0;
var obj1212_onDrag_activeActionGroupIndex = -1;
var obj1212_onDrag_runningActionsCount = 0;
var obj1212_onDrag_loopCount = 0;
var obj1212_onTouchDown_activeActionGroupIndex = -1;
var obj1212_onTouchDown_runningActionsCount = 0;
var obj1212_onTouchDown_loopCount = 0;
var obj1212_SCActionDragDrop1578_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1212_SCActionDragDrop1578_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1212_SCActionDragDrop1578_droppedOutsideTargetActions_loopCount = 0;
var obj1212_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj1212_droppedInsideTargetActions_runningActionsCount = 0;
var obj1212_droppedInsideTargetActions_loopCount = 0;
var obj1649_onShow_activeActionGroupIndex = -1;
var obj1649_onShow_runningActionsCount = 0;
var obj1649_onShow_loopCount = 0;
var obj1581_SCEventRun_activeActionGroupIndex = -1;
var obj1581_SCEventRun_runningActionsCount = 0;
var obj1581_SCEventRun_loopCount = 0;
var obj1181_onDrag_activeActionGroupIndex = -1;
var obj1181_onDrag_runningActionsCount = 0;
var obj1181_onDrag_loopCount = 0;
var obj1181_onTouchDown_activeActionGroupIndex = -1;
var obj1181_onTouchDown_runningActionsCount = 0;
var obj1181_onTouchDown_loopCount = 0;
var obj1181_SCActionDragDrop1392_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1181_SCActionDragDrop1392_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1181_SCActionDragDrop1392_droppedOutsideTargetActions_loopCount = 0;
var obj1181_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj1181_droppedInsideTargetActions_runningActionsCount = 0;
var obj1181_droppedInsideTargetActions_loopCount = 0;
var obj1185_onDrag_activeActionGroupIndex = -1;
var obj1185_onDrag_runningActionsCount = 0;
var obj1185_onDrag_loopCount = 0;
var obj1185_onTouchDown_activeActionGroupIndex = -1;
var obj1185_onTouchDown_runningActionsCount = 0;
var obj1185_onTouchDown_loopCount = 0;
var obj1185_SCActionDragDrop1499_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1185_SCActionDragDrop1499_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1185_SCActionDragDrop1499_droppedOutsideTargetActions_loopCount = 0;
var obj1185_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj1185_droppedInsideTargetActions_runningActionsCount = 0;
var obj1185_droppedInsideTargetActions_loopCount = 0;
var obj2623_onLoad_activeActionGroupIndex = -1;
var obj2623_onLoad_runningActionsCount = 0;
var obj2623_onLoad_loopCount = 0;
var obj2759_SCEventRun_activeActionGroupIndex = -1;
var obj2759_SCEventRun_runningActionsCount = 0;
var obj2759_SCEventRun_loopCount = 0;
var obj5434_onLoad_activeActionGroupIndex = -1;
var obj5434_onLoad_runningActionsCount = 0;
var obj5434_onLoad_loopCount = 0;
var obj5547_SCEventRun_activeActionGroupIndex = -1;
var obj5547_SCEventRun_runningActionsCount = 0;
var obj5547_SCEventRun_loopCount = 0;

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
	
initAnimation_1162();
function initAnimation_1162()
{
        var targetObjectId = "#obj1162";
        var widthSCAnimationObject = 204;
        var heightSCAnimationObject = 162;
		var framesPerSecond = 6;
		var howManyLoops = 1;
		var backToFirstFrame = false;
        var isAnimationInfinite = false;
        window.audio_animation_obj1162 = $("#")[0];
        window.hasAudioTrack_obj1162 = false

 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj1162_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj1162 = $(targetObjectId).spritespin("api");
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
		
obj1271_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1271_onTap_activeActionGroupIndex = -1;
		$("#obj1271").trigger("obj1271_onTap_ended");
		
		return;
	}
	window.obj1271_onTap_activeActionGroupIndex = 0;
	














//	action: rotate 
//	target: obj1271 
rotate_1361();
function rotate_1361() {
	window.obj1271_onTap_runningActionsCount = obj1271_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj1271";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1271';
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
	if (isInfinite) { rotate_1361_completed(); }

	//TweenMax.to(targetObjectId, 0.1, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_1361_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1361_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1361_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_1361_completed() {
	setTimeout(function() {
		window.obj1271_onTap_runningActionsCount = window.obj1271_onTap_runningActionsCount - 1;

if (window.obj1271_onTap_runningActionsCount == 0) {
	obj1271_onTap_actionGroup1();
}
	}, 1);
}




























};
obj1271_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1271_onTap_activeActionGroupIndex = -1;
		$("#obj1271").trigger("obj1271_onTap_ended");
		
		return;
	}
	window.obj1271_onTap_activeActionGroupIndex = 1;
	














//	action: rotate 
//	target: obj1271 
rotate_1362();
function rotate_1362() {
	window.obj1271_onTap_runningActionsCount = obj1271_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj1271";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1271';
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
	if (isInfinite) { rotate_1362_completed(); }

	//TweenMax.to(targetObjectId, 0.2, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_1362_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1362_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1362_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_1362_completed() {
	setTimeout(function() {
		window.obj1271_onTap_runningActionsCount = window.obj1271_onTap_runningActionsCount - 1;

if (window.obj1271_onTap_runningActionsCount == 0) {
	obj1271_onTap_actionGroup2();
}
	}, 1);
}




























};
obj1271_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1271_onTap_activeActionGroupIndex = -1;
		$("#obj1271").trigger("obj1271_onTap_ended");
		
		return;
	}
	window.obj1271_onTap_activeActionGroupIndex = 2;
	














//	action: rotate 
//	target: obj1271 
rotate_1363();
function rotate_1363() {
	window.obj1271_onTap_runningActionsCount = obj1271_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj1271";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1271';
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
	if (isInfinite) { rotate_1363_completed(); }

	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_1363_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1363_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1363_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_1363_completed() {
	setTimeout(function() {
		window.obj1271_onTap_runningActionsCount = window.obj1271_onTap_runningActionsCount - 1;

if (window.obj1271_onTap_runningActionsCount == 0) {
	obj1271_onTap_actionGroup3();
}
	}, 1);
}




























};
obj1271_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1271_onTap_activeActionGroupIndex = -1;
		$("#obj1271").trigger("obj1271_onTap_ended");
		
		return;
	}
	window.obj1271_onTap_activeActionGroupIndex = 3;
	










































};
obj1271_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1271_onLoad_activeActionGroupIndex = -1;
		$("#obj1271").trigger("obj1271_onLoad_ended");
		
		return;
	}
	window.obj1271_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj1271 
move_1279();
function move_1279() {
	window.obj1271_onLoad_runningActionsCount = obj1271_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1271");
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
			window.obj1271_onLoad_runningActionsCount = window.obj1271_onLoad_runningActionsCount - 1;

if (window.obj1271_onLoad_runningActionsCount == 0) {
	obj1271_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1271 
move_1280();
function move_1280() {
	window.obj1271_onLoad_runningActionsCount = obj1271_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1271");
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
			window.obj1271_onLoad_runningActionsCount = window.obj1271_onLoad_runningActionsCount - 1;

if (window.obj1271_onLoad_runningActionsCount == 0) {
	obj1271_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1271 
move_1281();
function move_1281() {
	window.obj1271_onLoad_runningActionsCount = obj1271_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1271");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 368;
	var moveY = 48;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 500, easing, function() {
		setTimeout(function() {
			window.obj1271_onLoad_runningActionsCount = window.obj1271_onLoad_runningActionsCount - 1;

if (window.obj1271_onLoad_runningActionsCount == 0) {
	obj1271_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj1271_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1271_onLoad_activeActionGroupIndex = -1;
		$("#obj1271").trigger("obj1271_onLoad_ended");
		
		return;
	}
	window.obj1271_onLoad_activeActionGroupIndex = 1;
	















//	action: loop
loop_obj1271_onLoad();
function loop_obj1271_onLoad() {

	var loopCount = 0;

	window.obj1271_onLoad_loopCount = window.obj1271_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj1271_onLoad_loopCount > loopCount) {
		window.obj1271_onLoad_loopCount = 0
		obj1271_onLoad_actionGroup2();
	} else {
		obj1271_onLoad_actionGroup0();
	}

}


























};
obj1271_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1271_onLoad_activeActionGroupIndex = -1;
		$("#obj1271").trigger("obj1271_onLoad_ended");
		
		return;
	}
	window.obj1271_onLoad_activeActionGroupIndex = 2;
	










































};
obj1312_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1312_onLoad_activeActionGroupIndex = -1;
		$("#obj1312").trigger("obj1312_onLoad_ended");
		
		return;
	}
	window.obj1312_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj1312 
move_1315();
function move_1315() {
	window.obj1312_onLoad_runningActionsCount = obj1312_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1312");
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
			window.obj1312_onLoad_runningActionsCount = window.obj1312_onLoad_runningActionsCount - 1;

if (window.obj1312_onLoad_runningActionsCount == 0) {
	obj1312_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1312 
move_1316();
function move_1316() {
	window.obj1312_onLoad_runningActionsCount = obj1312_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1312");
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
			window.obj1312_onLoad_runningActionsCount = window.obj1312_onLoad_runningActionsCount - 1;

if (window.obj1312_onLoad_runningActionsCount == 0) {
	obj1312_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1312 
move_1317();
function move_1317() {
	window.obj1312_onLoad_runningActionsCount = obj1312_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1312");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 379;
	var moveY = 123;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 500, easing, function() {
		setTimeout(function() {
			window.obj1312_onLoad_runningActionsCount = window.obj1312_onLoad_runningActionsCount - 1;

if (window.obj1312_onLoad_runningActionsCount == 0) {
	obj1312_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj1312_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1312_onLoad_activeActionGroupIndex = -1;
		$("#obj1312").trigger("obj1312_onLoad_ended");
		
		return;
	}
	window.obj1312_onLoad_activeActionGroupIndex = 1;
	















//	action: loop
loop_obj1312_onLoad();
function loop_obj1312_onLoad() {

	var loopCount = 0;

	window.obj1312_onLoad_loopCount = window.obj1312_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj1312_onLoad_loopCount > loopCount) {
		window.obj1312_onLoad_loopCount = 0
		obj1312_onLoad_actionGroup2();
	} else {
		obj1312_onLoad_actionGroup0();
	}

}


























};
obj1312_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1312_onLoad_activeActionGroupIndex = -1;
		$("#obj1312").trigger("obj1312_onLoad_ended");
		
		return;
	}
	window.obj1312_onLoad_activeActionGroupIndex = 2;
	










































};
obj1285_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1285_onTap_activeActionGroupIndex = -1;
		$("#obj1285").trigger("obj1285_onTap_ended");
		
		return;
	}
	window.obj1285_onTap_activeActionGroupIndex = 0;
	














//	action: rotate 
//	target: obj1285 
rotate_1358();
function rotate_1358() {
	window.obj1285_onTap_runningActionsCount = obj1285_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj1285";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1285';
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
	if (isInfinite) { rotate_1358_completed(); }

	//TweenMax.to(targetObjectId, 0.1, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_1358_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1358_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1358_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_1358_completed() {
	setTimeout(function() {
		window.obj1285_onTap_runningActionsCount = window.obj1285_onTap_runningActionsCount - 1;

if (window.obj1285_onTap_runningActionsCount == 0) {
	obj1285_onTap_actionGroup1();
}
	}, 1);
}




























};
obj1285_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1285_onTap_activeActionGroupIndex = -1;
		$("#obj1285").trigger("obj1285_onTap_ended");
		
		return;
	}
	window.obj1285_onTap_activeActionGroupIndex = 1;
	














//	action: rotate 
//	target: obj1285 
rotate_1359();
function rotate_1359() {
	window.obj1285_onTap_runningActionsCount = obj1285_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj1285";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1285';
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
	if (isInfinite) { rotate_1359_completed(); }

	//TweenMax.to(targetObjectId, 0.2, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_1359_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1359_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1359_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_1359_completed() {
	setTimeout(function() {
		window.obj1285_onTap_runningActionsCount = window.obj1285_onTap_runningActionsCount - 1;

if (window.obj1285_onTap_runningActionsCount == 0) {
	obj1285_onTap_actionGroup2();
}
	}, 1);
}




























};
obj1285_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1285_onTap_activeActionGroupIndex = -1;
		$("#obj1285").trigger("obj1285_onTap_ended");
		
		return;
	}
	window.obj1285_onTap_activeActionGroupIndex = 2;
	














//	action: rotate 
//	target: obj1285 
rotate_1360();
function rotate_1360() {
	window.obj1285_onTap_runningActionsCount = obj1285_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj1285";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1285';
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
	if (isInfinite) { rotate_1360_completed(); }

	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_1360_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1360_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1360_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_1360_completed() {
	setTimeout(function() {
		window.obj1285_onTap_runningActionsCount = window.obj1285_onTap_runningActionsCount - 1;

if (window.obj1285_onTap_runningActionsCount == 0) {
	obj1285_onTap_actionGroup3();
}
	}, 1);
}




























};
obj1285_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1285_onTap_activeActionGroupIndex = -1;
		$("#obj1285").trigger("obj1285_onTap_ended");
		
		return;
	}
	window.obj1285_onTap_activeActionGroupIndex = 3;
	










































};
obj1285_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1285_onLoad_activeActionGroupIndex = -1;
		$("#obj1285").trigger("obj1285_onLoad_ended");
		
		return;
	}
	window.obj1285_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj1285 
move_1295();
function move_1295() {
	window.obj1285_onLoad_runningActionsCount = obj1285_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1285");
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
			window.obj1285_onLoad_runningActionsCount = window.obj1285_onLoad_runningActionsCount - 1;

if (window.obj1285_onLoad_runningActionsCount == 0) {
	obj1285_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1285 
move_1296();
function move_1296() {
	window.obj1285_onLoad_runningActionsCount = obj1285_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1285");
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
			window.obj1285_onLoad_runningActionsCount = window.obj1285_onLoad_runningActionsCount - 1;

if (window.obj1285_onLoad_runningActionsCount == 0) {
	obj1285_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1285 
move_1297();
function move_1297() {
	window.obj1285_onLoad_runningActionsCount = obj1285_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1285");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 17;
	var moveY = 181;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 500, easing, function() {
		setTimeout(function() {
			window.obj1285_onLoad_runningActionsCount = window.obj1285_onLoad_runningActionsCount - 1;

if (window.obj1285_onLoad_runningActionsCount == 0) {
	obj1285_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj1285_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1285_onLoad_activeActionGroupIndex = -1;
		$("#obj1285").trigger("obj1285_onLoad_ended");
		
		return;
	}
	window.obj1285_onLoad_activeActionGroupIndex = 1;
	















//	action: loop
loop_obj1285_onLoad();
function loop_obj1285_onLoad() {

	var loopCount = 0;

	window.obj1285_onLoad_loopCount = window.obj1285_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj1285_onLoad_loopCount > loopCount) {
		window.obj1285_onLoad_loopCount = 0
		obj1285_onLoad_actionGroup2();
	} else {
		obj1285_onLoad_actionGroup0();
	}

}


























};
obj1285_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1285_onLoad_activeActionGroupIndex = -1;
		$("#obj1285").trigger("obj1285_onLoad_ended");
		
		return;
	}
	window.obj1285_onLoad_activeActionGroupIndex = 2;
	










































};
obj1325_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1325_onLoad_activeActionGroupIndex = -1;
		$("#obj1325").trigger("obj1325_onLoad_ended");
		
		return;
	}
	window.obj1325_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj1325 
move_1328();
function move_1328() {
	window.obj1325_onLoad_runningActionsCount = obj1325_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1325");
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
			window.obj1325_onLoad_runningActionsCount = window.obj1325_onLoad_runningActionsCount - 1;

if (window.obj1325_onLoad_runningActionsCount == 0) {
	obj1325_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1325 
move_1329();
function move_1329() {
	window.obj1325_onLoad_runningActionsCount = obj1325_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1325");
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
			window.obj1325_onLoad_runningActionsCount = window.obj1325_onLoad_runningActionsCount - 1;

if (window.obj1325_onLoad_runningActionsCount == 0) {
	obj1325_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1325 
move_1330();
function move_1330() {
	window.obj1325_onLoad_runningActionsCount = obj1325_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1325");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 27;
	var moveY = 255;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 500, easing, function() {
		setTimeout(function() {
			window.obj1325_onLoad_runningActionsCount = window.obj1325_onLoad_runningActionsCount - 1;

if (window.obj1325_onLoad_runningActionsCount == 0) {
	obj1325_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj1325_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1325_onLoad_activeActionGroupIndex = -1;
		$("#obj1325").trigger("obj1325_onLoad_ended");
		
		return;
	}
	window.obj1325_onLoad_activeActionGroupIndex = 1;
	















//	action: loop
loop_obj1325_onLoad();
function loop_obj1325_onLoad() {

	var loopCount = 0;

	window.obj1325_onLoad_loopCount = window.obj1325_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj1325_onLoad_loopCount > loopCount) {
		window.obj1325_onLoad_loopCount = 0
		obj1325_onLoad_actionGroup2();
	} else {
		obj1325_onLoad_actionGroup0();
	}

}


























};
obj1325_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1325_onLoad_activeActionGroupIndex = -1;
		$("#obj1325").trigger("obj1325_onLoad_ended");
		
		return;
	}
	window.obj1325_onLoad_activeActionGroupIndex = 2;
	










































};
obj1265_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1265_onLoad_activeActionGroupIndex = -1;
		$("#obj1265").trigger("obj1265_onLoad_ended");
		
		return;
	}
	window.obj1265_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj1265 
move_1274();
function move_1274() {
	window.obj1265_onLoad_runningActionsCount = obj1265_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1265");
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
			window.obj1265_onLoad_runningActionsCount = window.obj1265_onLoad_runningActionsCount - 1;

if (window.obj1265_onLoad_runningActionsCount == 0) {
	obj1265_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1265 
move_1275();
function move_1275() {
	window.obj1265_onLoad_runningActionsCount = obj1265_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1265");
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
			window.obj1265_onLoad_runningActionsCount = window.obj1265_onLoad_runningActionsCount - 1;

if (window.obj1265_onLoad_runningActionsCount == 0) {
	obj1265_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1265 
move_1276();
function move_1276() {
	window.obj1265_onLoad_runningActionsCount = obj1265_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1265");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = -162;
	var moveY = -25;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj1265_onLoad_runningActionsCount = window.obj1265_onLoad_runningActionsCount - 1;

if (window.obj1265_onLoad_runningActionsCount == 0) {
	obj1265_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj1265_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1265_onLoad_activeActionGroupIndex = -1;
		$("#obj1265").trigger("obj1265_onLoad_ended");
		
		return;
	}
	window.obj1265_onLoad_activeActionGroupIndex = 1;
	















//	action: loop
loop_obj1265_onLoad();
function loop_obj1265_onLoad() {

	var loopCount = 0;

	window.obj1265_onLoad_loopCount = window.obj1265_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj1265_onLoad_loopCount > loopCount) {
		window.obj1265_onLoad_loopCount = 0
		obj1265_onLoad_actionGroup2();
	} else {
		obj1265_onLoad_actionGroup0();
	}

}


























};
obj1265_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1265_onLoad_activeActionGroupIndex = -1;
		$("#obj1265").trigger("obj1265_onLoad_ended");
		
		return;
	}
	window.obj1265_onLoad_activeActionGroupIndex = 2;
	










































};
obj1223_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1223_onTap_activeActionGroupIndex = -1;
		$("#obj1223").trigger("obj1223_onTap_ended");
		
		return;
	}
	window.obj1223_onTap_activeActionGroupIndex = 0;
	














//	action: rotate 
//	target: obj1223 
rotate_1225();
function rotate_1225() {
	window.obj1223_onTap_runningActionsCount = obj1223_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj1223";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1223';
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
	if (isInfinite) { rotate_1225_completed(); }

	//TweenMax.to(targetObjectId, 0.1, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_1225_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1225_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1225_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_1225_completed() {
	setTimeout(function() {
		window.obj1223_onTap_runningActionsCount = window.obj1223_onTap_runningActionsCount - 1;

if (window.obj1223_onTap_runningActionsCount == 0) {
	obj1223_onTap_actionGroup1();
}
	}, 1);
}




























};
obj1223_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1223_onTap_activeActionGroupIndex = -1;
		$("#obj1223").trigger("obj1223_onTap_ended");
		
		return;
	}
	window.obj1223_onTap_activeActionGroupIndex = 1;
	














//	action: rotate 
//	target: obj1223 
rotate_1226();
function rotate_1226() {
	window.obj1223_onTap_runningActionsCount = obj1223_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj1223";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1223';
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
	if (isInfinite) { rotate_1226_completed(); }

	//TweenMax.to(targetObjectId, 0.2, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_1226_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1226_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1226_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_1226_completed() {
	setTimeout(function() {
		window.obj1223_onTap_runningActionsCount = window.obj1223_onTap_runningActionsCount - 1;

if (window.obj1223_onTap_runningActionsCount == 0) {
	obj1223_onTap_actionGroup2();
}
	}, 1);
}




























};
obj1223_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1223_onTap_activeActionGroupIndex = -1;
		$("#obj1223").trigger("obj1223_onTap_ended");
		
		return;
	}
	window.obj1223_onTap_activeActionGroupIndex = 2;
	














//	action: rotate 
//	target: obj1223 
rotate_1227();
function rotate_1227() {
	window.obj1223_onTap_runningActionsCount = obj1223_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj1223";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1223';
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
	if (isInfinite) { rotate_1227_completed(); }

	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_1227_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1227_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1227_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_1227_completed() {
	setTimeout(function() {
		window.obj1223_onTap_runningActionsCount = window.obj1223_onTap_runningActionsCount - 1;

if (window.obj1223_onTap_runningActionsCount == 0) {
	obj1223_onTap_actionGroup3();
}
	}, 1);
}




























};
obj1223_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1223_onTap_activeActionGroupIndex = -1;
		$("#obj1223").trigger("obj1223_onTap_ended");
		
		return;
	}
	window.obj1223_onTap_activeActionGroupIndex = 3;
	










































};
obj1223_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1223_onLoad_activeActionGroupIndex = -1;
		$("#obj1223").trigger("obj1223_onLoad_ended");
		
		return;
	}
	window.obj1223_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj1223 
move_1234();
function move_1234() {
	window.obj1223_onLoad_runningActionsCount = obj1223_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1223");
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
			window.obj1223_onLoad_runningActionsCount = window.obj1223_onLoad_runningActionsCount - 1;

if (window.obj1223_onLoad_runningActionsCount == 0) {
	obj1223_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1223 
move_1235();
function move_1235() {
	window.obj1223_onLoad_runningActionsCount = obj1223_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1223");
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
			window.obj1223_onLoad_runningActionsCount = window.obj1223_onLoad_runningActionsCount - 1;

if (window.obj1223_onLoad_runningActionsCount == 0) {
	obj1223_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1223 
move_1236();
function move_1236() {
	window.obj1223_onLoad_runningActionsCount = obj1223_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1223");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 167;
	var moveY = 906;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 500, easing, function() {
		setTimeout(function() {
			window.obj1223_onLoad_runningActionsCount = window.obj1223_onLoad_runningActionsCount - 1;

if (window.obj1223_onLoad_runningActionsCount == 0) {
	obj1223_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj1223_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1223_onLoad_activeActionGroupIndex = -1;
		$("#obj1223").trigger("obj1223_onLoad_ended");
		
		return;
	}
	window.obj1223_onLoad_activeActionGroupIndex = 1;
	















//	action: loop
loop_obj1223_onLoad();
function loop_obj1223_onLoad() {

	var loopCount = 0;

	window.obj1223_onLoad_loopCount = window.obj1223_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj1223_onLoad_loopCount > loopCount) {
		window.obj1223_onLoad_loopCount = 0
		obj1223_onLoad_actionGroup2();
	} else {
		obj1223_onLoad_actionGroup0();
	}

}


























};
obj1223_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1223_onLoad_activeActionGroupIndex = -1;
		$("#obj1223").trigger("obj1223_onLoad_ended");
		
		return;
	}
	window.obj1223_onLoad_activeActionGroupIndex = 2;
	










































};
obj1913_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1913_onLoad_activeActionGroupIndex = -1;
		$("#obj1913").trigger("obj1913_onLoad_ended");
		
		return;
	}
	window.obj1913_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj1913 
move_1923();
function move_1923() {
	window.obj1913_onLoad_runningActionsCount = obj1913_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1913");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-13";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj1913_onLoad_runningActionsCount = window.obj1913_onLoad_runningActionsCount - 1;

if (window.obj1913_onLoad_runningActionsCount == 0) {
	obj1913_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1913 
move_1924();
function move_1924() {
	window.obj1913_onLoad_runningActionsCount = obj1913_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1913");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1072;
	var moveY = -31;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj1913_onLoad_runningActionsCount = window.obj1913_onLoad_runningActionsCount - 1;

if (window.obj1913_onLoad_runningActionsCount == 0) {
	obj1913_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj1913_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1913_onLoad_activeActionGroupIndex = -1;
		$("#obj1913").trigger("obj1913_onLoad_ended");
		
		return;
	}
	window.obj1913_onLoad_activeActionGroupIndex = 1;
	















//	action: loop
loop_obj1913_onLoad();
function loop_obj1913_onLoad() {

	var loopCount = 0;

	window.obj1913_onLoad_loopCount = window.obj1913_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj1913_onLoad_loopCount > loopCount) {
		window.obj1913_onLoad_loopCount = 0
		obj1913_onLoad_actionGroup2();
	} else {
		obj1913_onLoad_actionGroup0();
	}

}


























};
obj1913_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1913_onLoad_activeActionGroupIndex = -1;
		$("#obj1913").trigger("obj1913_onLoad_ended");
		
		return;
	}
	window.obj1913_onLoad_activeActionGroupIndex = 2;
	










































};
obj1162_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1162_onLoad_activeActionGroupIndex = -1;
		$("#obj1162").trigger("obj1162_onLoad_ended");
		
		return;
	}
	window.obj1162_onLoad_activeActionGroupIndex = 0;
	




//	action: playAnimation 
//	target: obj1162 
playAnimation_1170();
function playAnimation_1170() {
	var targetObjectId = "#obj1162";
	var targetObject = $(targetObjectId)[0];
	window.obj1162_onLoad_runningActionsCount = obj1162_onLoad_runningActionsCount + 1;

	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj1162_onLoad_runningActionsCount = window.obj1162_onLoad_runningActionsCount - 1;

if (window.obj1162_onLoad_runningActionsCount == 0) {
	obj1162_onLoad_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj1162 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj1162;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");

	setTimeout(function() {
	    api_animate_obj1162.startAnimation();
	}, 1);

	if (!isAnimationInfinite) {
		$("#obj1162").one("obj1162_animation_ended",function(event) {
		    window.obj1162_onLoad_runningActionsCount = window.obj1162_onLoad_runningActionsCount - 1;

if (window.obj1162_onLoad_runningActionsCount == 0) {
	obj1162_onLoad_actionGroup1();
}
		});
	}
 }





































};
obj1162_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1162_onLoad_activeActionGroupIndex = -1;
		$("#obj1162").trigger("obj1162_onLoad_ended");
		
		return;
	}
	window.obj1162_onLoad_activeActionGroupIndex = 1;
	
















//	action: wait
wait_1171();
function wait_1171() {
	window.obj1162_onLoad_runningActionsCount = obj1162_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj1162_onLoad_runningActionsCount = window.obj1162_onLoad_runningActionsCount - 1;

if (window.obj1162_onLoad_runningActionsCount == 0) {
	obj1162_onLoad_actionGroup2();
}
	}, 3000);
}

























};
obj1162_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1162_onLoad_activeActionGroupIndex = -1;
		$("#obj1162").trigger("obj1162_onLoad_ended");
		
		return;
	}
	window.obj1162_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj1162_onLoad();
function loop_obj1162_onLoad() {

	var loopCount = 0;

	window.obj1162_onLoad_loopCount = window.obj1162_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj1162_onLoad_loopCount > loopCount) {
		window.obj1162_onLoad_loopCount = 0
		obj1162_onLoad_actionGroup3();
	} else {
		obj1162_onLoad_actionGroup0();
	}

}


























};
obj1162_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1162_onLoad_activeActionGroupIndex = -1;
		$("#obj1162").trigger("obj1162_onLoad_ended");
		
		return;
	}
	window.obj1162_onLoad_activeActionGroupIndex = 3;
	










































};
obj1341_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1341_onLoad_activeActionGroupIndex = -1;
		$("#obj1341").trigger("obj1341_onLoad_ended");
		
		return;
	}
	window.obj1341_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj1341 
move_1372();
function move_1372() {
	window.obj1341_onLoad_runningActionsCount = obj1341_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1341");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=19";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1100, easing, function() {
		setTimeout(function() {
			window.obj1341_onLoad_runningActionsCount = window.obj1341_onLoad_runningActionsCount - 1;

if (window.obj1341_onLoad_runningActionsCount == 0) {
	obj1341_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1341 
move_1373();
function move_1373() {
	window.obj1341_onLoad_runningActionsCount = obj1341_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1341");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 952;
	var moveY = 82;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1100, easing, function() {
		setTimeout(function() {
			window.obj1341_onLoad_runningActionsCount = window.obj1341_onLoad_runningActionsCount - 1;

if (window.obj1341_onLoad_runningActionsCount == 0) {
	obj1341_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj1341_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1341_onLoad_activeActionGroupIndex = -1;
		$("#obj1341").trigger("obj1341_onLoad_ended");
		
		return;
	}
	window.obj1341_onLoad_activeActionGroupIndex = 1;
	















//	action: loop
loop_obj1341_onLoad();
function loop_obj1341_onLoad() {

	var loopCount = 0;

	window.obj1341_onLoad_loopCount = window.obj1341_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj1341_onLoad_loopCount > loopCount) {
		window.obj1341_onLoad_loopCount = 0
		obj1341_onLoad_actionGroup2();
	} else {
		obj1341_onLoad_actionGroup0();
	}

}


























};
obj1341_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1341_onLoad_activeActionGroupIndex = -1;
		$("#obj1341").trigger("obj1341_onLoad_ended");
		
		return;
	}
	window.obj1341_onLoad_activeActionGroupIndex = 2;
	










































};
obj1501_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1501_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1501").trigger("obj1501_SCEventRun_ended");
		
		return;
	}
	window.obj1501_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj2620 
hide_2631();
function hide_2631() {
	var element = "#obj2620";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1501_SCEventRun_runningActionsCount = obj1501_SCEventRun_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 700;
	var animationIterationCount = "1";

	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1501_SCEventRun_runningActionsCount = window.obj1501_SCEventRun_runningActionsCount - 1;

if (window.obj1501_SCEventRun_runningActionsCount == 0) {
	obj1501_SCEventRun_actionGroup1();
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
		setTimeout(hide_2631(), 100);
		return;
	}

	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1501_SCEventRun_runningActionsCount = window.obj1501_SCEventRun_runningActionsCount - 1;

if (window.obj1501_SCEventRun_runningActionsCount == 0) {
	obj1501_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)

}
//	action: hide
//	target: obj2623 
hide_2632();
function hide_2632() {
	var element = "#obj2623";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1501_SCEventRun_runningActionsCount = obj1501_SCEventRun_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 700;
	var animationIterationCount = "1";

	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1501_SCEventRun_runningActionsCount = window.obj1501_SCEventRun_runningActionsCount - 1;

if (window.obj1501_SCEventRun_runningActionsCount == 0) {
	obj1501_SCEventRun_actionGroup1();
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
		setTimeout(hide_2632(), 100);
		return;
	}

	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1501_SCEventRun_runningActionsCount = window.obj1501_SCEventRun_runningActionsCount - 1;

if (window.obj1501_SCEventRun_runningActionsCount == 0) {
	obj1501_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)

}
//	action: hide
//	target: obj2625 
hide_2633();
function hide_2633() {
	var element = "#obj2625";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1501_SCEventRun_runningActionsCount = obj1501_SCEventRun_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 700;
	var animationIterationCount = "1";

	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1501_SCEventRun_runningActionsCount = window.obj1501_SCEventRun_runningActionsCount - 1;

if (window.obj1501_SCEventRun_runningActionsCount == 0) {
	obj1501_SCEventRun_actionGroup1();
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
		setTimeout(hide_2633(), 100);
		return;
	}

	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1501_SCEventRun_runningActionsCount = window.obj1501_SCEventRun_runningActionsCount - 1;

if (window.obj1501_SCEventRun_runningActionsCount == 0) {
	obj1501_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)

}
//	action: hide
//	target: obj2762 
hide_2770();
function hide_2770() {
	var element = "#obj2762";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1501_SCEventRun_runningActionsCount = obj1501_SCEventRun_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";

	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1501_SCEventRun_runningActionsCount = window.obj1501_SCEventRun_runningActionsCount - 1;

if (window.obj1501_SCEventRun_runningActionsCount == 0) {
	obj1501_SCEventRun_actionGroup1();
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
		setTimeout(hide_2770(), 100);
		return;
	}

	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1501_SCEventRun_runningActionsCount = window.obj1501_SCEventRun_runningActionsCount - 1;

if (window.obj1501_SCEventRun_runningActionsCount == 0) {
	obj1501_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)

}
//	action: show 
//	target: obj1510 
(function(){
	window.obj1501_SCEventRun_runningActionsCount = obj1501_SCEventRun_runningActionsCount + 1;


	var element = "#obj1510";
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
				window.obj1501_SCEventRun_runningActionsCount = window.obj1501_SCEventRun_runningActionsCount - 1;

if (window.obj1501_SCEventRun_runningActionsCount == 0) {
	obj1501_SCEventRun_actionGroup1();
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
			window.obj1501_SCEventRun_runningActionsCount = window.obj1501_SCEventRun_runningActionsCount - 1;

if (window.obj1501_SCEventRun_runningActionsCount == 0) {
	obj1501_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj1520 
(function(){
	window.obj1501_SCEventRun_runningActionsCount = obj1501_SCEventRun_runningActionsCount + 1;


	var element = "#obj1520";
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
				window.obj1501_SCEventRun_runningActionsCount = window.obj1501_SCEventRun_runningActionsCount - 1;

if (window.obj1501_SCEventRun_runningActionsCount == 0) {
	obj1501_SCEventRun_actionGroup1();
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
			window.obj1501_SCEventRun_runningActionsCount = window.obj1501_SCEventRun_runningActionsCount - 1;

if (window.obj1501_SCEventRun_runningActionsCount == 0) {
	obj1501_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj1518 
(function(){
	window.obj1501_SCEventRun_runningActionsCount = obj1501_SCEventRun_runningActionsCount + 1;


	var element = "#obj1518";
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
				window.obj1501_SCEventRun_runningActionsCount = window.obj1501_SCEventRun_runningActionsCount - 1;

if (window.obj1501_SCEventRun_runningActionsCount == 0) {
	obj1501_SCEventRun_actionGroup1();
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
			window.obj1501_SCEventRun_runningActionsCount = window.obj1501_SCEventRun_runningActionsCount - 1;

if (window.obj1501_SCEventRun_runningActionsCount == 0) {
	obj1501_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj1341 
(function(){
	window.obj1501_SCEventRun_runningActionsCount = obj1501_SCEventRun_runningActionsCount + 1;


	var element = "#obj1341";
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
				window.obj1501_SCEventRun_runningActionsCount = window.obj1501_SCEventRun_runningActionsCount - 1;

if (window.obj1501_SCEventRun_runningActionsCount == 0) {
	obj1501_SCEventRun_actionGroup1();
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
			window.obj1501_SCEventRun_runningActionsCount = window.obj1501_SCEventRun_runningActionsCount - 1;

if (window.obj1501_SCEventRun_runningActionsCount == 0) {
	obj1501_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj1512 
(function(){
	window.obj1501_SCEventRun_runningActionsCount = obj1501_SCEventRun_runningActionsCount + 1;


	var element = "#obj1512";
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
		var animationDurationMs = 2000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				window.obj1501_SCEventRun_runningActionsCount = window.obj1501_SCEventRun_runningActionsCount - 1;

if (window.obj1501_SCEventRun_runningActionsCount == 0) {
	obj1501_SCEventRun_actionGroup1();
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
			window.obj1501_SCEventRun_runningActionsCount = window.obj1501_SCEventRun_runningActionsCount - 1;

if (window.obj1501_SCEventRun_runningActionsCount == 0) {
	obj1501_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: move
//	target: obj1185 
move_1538();
function move_1538() {
	window.obj1501_SCEventRun_runningActionsCount = obj1501_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1185");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1070;
	var moveY = 359;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj1501_SCEventRun_runningActionsCount = window.obj1501_SCEventRun_runningActionsCount - 1;

if (window.obj1501_SCEventRun_runningActionsCount == 0) {
	obj1501_SCEventRun_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_5541();
function playAudioFile_5541() {
	window.obj1501_SCEventRun_runningActionsCount = obj1501_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5541")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5541");
			$("#obj_audio_playSoundFile5541").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1501_SCEventRun_runningActionsCount = window.obj1501_SCEventRun_runningActionsCount - 1;

if (window.obj1501_SCEventRun_runningActionsCount == 0) {
	obj1501_SCEventRun_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1501_SCEventRun_runningActionsCount = window.obj1501_SCEventRun_runningActionsCount - 1;

if (window.obj1501_SCEventRun_runningActionsCount == 0) {
	obj1501_SCEventRun_actionGroup1();
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
				window.obj1501_SCEventRun_runningActionsCount = window.obj1501_SCEventRun_runningActionsCount - 1;

if (window.obj1501_SCEventRun_runningActionsCount == 0) {
	obj1501_SCEventRun_actionGroup1();
}
			}, false);
		} else {
			window.obj1501_SCEventRun_runningActionsCount = window.obj1501_SCEventRun_runningActionsCount - 1;

if (window.obj1501_SCEventRun_runningActionsCount == 0) {
	obj1501_SCEventRun_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_1566();
function runjs_1566() {
	window.obj1501_SCEventRun_runningActionsCount = obj1501_SCEventRun_runningActionsCount + 1;


	localStorage.setItem("plankton", "true");

	setTimeout(function() {
		window.obj1501_SCEventRun_runningActionsCount = window.obj1501_SCEventRun_runningActionsCount - 1;

if (window.obj1501_SCEventRun_runningActionsCount == 0) {
	obj1501_SCEventRun_actionGroup1();
}
	}, 1);
}












};
obj1501_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1501_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1501").trigger("obj1501_SCEventRun_ended");
		
		return;
	}
	window.obj1501_SCEventRun_activeActionGroupIndex = 1;
	


//	action: show 
//	target: obj1319 
(function(){
	window.obj1501_SCEventRun_runningActionsCount = obj1501_SCEventRun_runningActionsCount + 1;


	var element = "#obj1319";
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
				window.obj1501_SCEventRun_runningActionsCount = window.obj1501_SCEventRun_runningActionsCount - 1;

if (window.obj1501_SCEventRun_runningActionsCount == 0) {
	obj1501_SCEventRun_actionGroup2();
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
			window.obj1501_SCEventRun_runningActionsCount = window.obj1501_SCEventRun_runningActionsCount - 1;

if (window.obj1501_SCEventRun_runningActionsCount == 0) {
	obj1501_SCEventRun_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj1291 
(function(){
	window.obj1501_SCEventRun_runningActionsCount = obj1501_SCEventRun_runningActionsCount + 1;


	var element = "#obj1291";
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
				window.obj1501_SCEventRun_runningActionsCount = window.obj1501_SCEventRun_runningActionsCount - 1;

if (window.obj1501_SCEventRun_runningActionsCount == 0) {
	obj1501_SCEventRun_actionGroup2();
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
			window.obj1501_SCEventRun_runningActionsCount = window.obj1501_SCEventRun_runningActionsCount - 1;

if (window.obj1501_SCEventRun_runningActionsCount == 0) {
	obj1501_SCEventRun_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj1321 
(function(){
	window.obj1501_SCEventRun_runningActionsCount = obj1501_SCEventRun_runningActionsCount + 1;


	var element = "#obj1321";
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
				window.obj1501_SCEventRun_runningActionsCount = window.obj1501_SCEventRun_runningActionsCount - 1;

if (window.obj1501_SCEventRun_runningActionsCount == 0) {
	obj1501_SCEventRun_actionGroup2();
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
			window.obj1501_SCEventRun_runningActionsCount = window.obj1501_SCEventRun_runningActionsCount - 1;

if (window.obj1501_SCEventRun_runningActionsCount == 0) {
	obj1501_SCEventRun_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();









//	action: playAudioFile
playAudioFile_5630();
function playAudioFile_5630() {
	window.obj1501_SCEventRun_runningActionsCount = obj1501_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5630")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5630");
			$("#obj_audio_playSoundFile5630").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1501_SCEventRun_runningActionsCount = window.obj1501_SCEventRun_runningActionsCount - 1;

if (window.obj1501_SCEventRun_runningActionsCount == 0) {
	obj1501_SCEventRun_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1501_SCEventRun_runningActionsCount = window.obj1501_SCEventRun_runningActionsCount - 1;

if (window.obj1501_SCEventRun_runningActionsCount == 0) {
	obj1501_SCEventRun_actionGroup2();
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
				window.obj1501_SCEventRun_runningActionsCount = window.obj1501_SCEventRun_runningActionsCount - 1;

if (window.obj1501_SCEventRun_runningActionsCount == 0) {
	obj1501_SCEventRun_actionGroup2();
}
			}, false);
		} else {
			window.obj1501_SCEventRun_runningActionsCount = window.obj1501_SCEventRun_runningActionsCount - 1;

if (window.obj1501_SCEventRun_runningActionsCount == 0) {
	obj1501_SCEventRun_actionGroup2();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_5626();
function runjs_5626() {
	window.obj1501_SCEventRun_runningActionsCount = obj1501_SCEventRun_runningActionsCount + 1;


	localStorage.setItem('ready','false');

	setTimeout(function() {
		window.obj1501_SCEventRun_runningActionsCount = window.obj1501_SCEventRun_runningActionsCount - 1;

if (window.obj1501_SCEventRun_runningActionsCount == 0) {
	obj1501_SCEventRun_actionGroup2();
}
	}, 1);
}












};
obj1501_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1501_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1501").trigger("obj1501_SCEventRun_ended");
		
		return;
	}
	window.obj1501_SCEventRun_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_5631();
function runjs_5631() {
	window.obj1501_SCEventRun_runningActionsCount = obj1501_SCEventRun_runningActionsCount + 1;


	localStorage.setItem('ready','true');

	setTimeout(function() {
		window.obj1501_SCEventRun_runningActionsCount = window.obj1501_SCEventRun_runningActionsCount - 1;

if (window.obj1501_SCEventRun_runningActionsCount == 0) {
	obj1501_SCEventRun_actionGroup3();
}
	}, 1);
}












};
obj1501_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1501_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1501").trigger("obj1501_SCEventRun_ended");
		
		return;
	}
	window.obj1501_SCEventRun_activeActionGroupIndex = 3;
	










































};
obj1510_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1510_onShow_activeActionGroupIndex = -1;
		$("#obj1510").trigger("obj1510_onShow_ended");
		
		return;
	}
	window.obj1510_onShow_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj1510 
move_1515();
function move_1515() {
	window.obj1510_onShow_runningActionsCount = obj1510_onShow_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1510");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=19";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1100, easing, function() {
		setTimeout(function() {
			window.obj1510_onShow_runningActionsCount = window.obj1510_onShow_runningActionsCount - 1;

if (window.obj1510_onShow_runningActionsCount == 0) {
	obj1510_onShow_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1510 
move_1516();
function move_1516() {
	window.obj1510_onShow_runningActionsCount = obj1510_onShow_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1510");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1109;
	var moveY = 170;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1100, easing, function() {
		setTimeout(function() {
			window.obj1510_onShow_runningActionsCount = window.obj1510_onShow_runningActionsCount - 1;

if (window.obj1510_onShow_runningActionsCount == 0) {
	obj1510_onShow_actionGroup1();
}
		}, 1);
	});
}






































};
obj1510_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1510_onShow_activeActionGroupIndex = -1;
		$("#obj1510").trigger("obj1510_onShow_ended");
		
		return;
	}
	window.obj1510_onShow_activeActionGroupIndex = 1;
	















//	action: loop
loop_obj1510_onShow();
function loop_obj1510_onShow() {

	var loopCount = 0;

	window.obj1510_onShow_loopCount = window.obj1510_onShow_loopCount + 1;
	if (loopCount != 0 && window.obj1510_onShow_loopCount > loopCount) {
		window.obj1510_onShow_loopCount = 0
		obj1510_onShow_actionGroup2();
	} else {
		obj1510_onShow_actionGroup0();
	}

}


























};
obj1510_onShow_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1510_onShow_activeActionGroupIndex = -1;
		$("#obj1510").trigger("obj1510_onShow_ended");
		
		return;
	}
	window.obj1510_onShow_activeActionGroupIndex = 2;
	










































};
obj1518_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1518_onShow_activeActionGroupIndex = -1;
		$("#obj1518").trigger("obj1518_onShow_ended");
		
		return;
	}
	window.obj1518_onShow_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj1518 
move_1557();
function move_1557() {
	window.obj1518_onShow_runningActionsCount = obj1518_onShow_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1518");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=19";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1100, easing, function() {
		setTimeout(function() {
			window.obj1518_onShow_runningActionsCount = window.obj1518_onShow_runningActionsCount - 1;

if (window.obj1518_onShow_runningActionsCount == 0) {
	obj1518_onShow_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1518 
move_1558();
function move_1558() {
	window.obj1518_onShow_runningActionsCount = obj1518_onShow_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1518");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1082;
	var moveY = 182;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1100, easing, function() {
		setTimeout(function() {
			window.obj1518_onShow_runningActionsCount = window.obj1518_onShow_runningActionsCount - 1;

if (window.obj1518_onShow_runningActionsCount == 0) {
	obj1518_onShow_actionGroup1();
}
		}, 1);
	});
}






































};
obj1518_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1518_onShow_activeActionGroupIndex = -1;
		$("#obj1518").trigger("obj1518_onShow_ended");
		
		return;
	}
	window.obj1518_onShow_activeActionGroupIndex = 1;
	















//	action: loop
loop_obj1518_onShow();
function loop_obj1518_onShow() {

	var loopCount = 0;

	window.obj1518_onShow_loopCount = window.obj1518_onShow_loopCount + 1;
	if (loopCount != 0 && window.obj1518_onShow_loopCount > loopCount) {
		window.obj1518_onShow_loopCount = 0
		obj1518_onShow_actionGroup2();
	} else {
		obj1518_onShow_actionGroup0();
	}

}


























};
obj1518_onShow_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1518_onShow_activeActionGroupIndex = -1;
		$("#obj1518").trigger("obj1518_onShow_ended");
		
		return;
	}
	window.obj1518_onShow_activeActionGroupIndex = 2;
	










































};
obj1520_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1520_onShow_activeActionGroupIndex = -1;
		$("#obj1520").trigger("obj1520_onShow_ended");
		
		return;
	}
	window.obj1520_onShow_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj1520 
move_1560();
function move_1560() {
	window.obj1520_onShow_runningActionsCount = obj1520_onShow_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1520");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=19";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1100, easing, function() {
		setTimeout(function() {
			window.obj1520_onShow_runningActionsCount = window.obj1520_onShow_runningActionsCount - 1;

if (window.obj1520_onShow_runningActionsCount == 0) {
	obj1520_onShow_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1520 
move_1561();
function move_1561() {
	window.obj1520_onShow_runningActionsCount = obj1520_onShow_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1520");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1182;
	var moveY = 188;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1100, easing, function() {
		setTimeout(function() {
			window.obj1520_onShow_runningActionsCount = window.obj1520_onShow_runningActionsCount - 1;

if (window.obj1520_onShow_runningActionsCount == 0) {
	obj1520_onShow_actionGroup1();
}
		}, 1);
	});
}






































};
obj1520_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1520_onShow_activeActionGroupIndex = -1;
		$("#obj1520").trigger("obj1520_onShow_ended");
		
		return;
	}
	window.obj1520_onShow_activeActionGroupIndex = 1;
	















//	action: loop
loop_obj1520_onShow();
function loop_obj1520_onShow() {

	var loopCount = 0;

	window.obj1520_onShow_loopCount = window.obj1520_onShow_loopCount + 1;
	if (loopCount != 0 && window.obj1520_onShow_loopCount > loopCount) {
		window.obj1520_onShow_loopCount = 0
		obj1520_onShow_actionGroup2();
	} else {
		obj1520_onShow_actionGroup0();
	}

}


























};
obj1520_onShow_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1520_onShow_activeActionGroupIndex = -1;
		$("#obj1520").trigger("obj1520_onShow_ended");
		
		return;
	}
	window.obj1520_onShow_activeActionGroupIndex = 2;
	










































};
obj1338_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1338_onShow_activeActionGroupIndex = -1;
		$("#obj1338").trigger("obj1338_onShow_ended");
		
		return;
	}
	window.obj1338_onShow_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj1338 
move_1397();
function move_1397() {
	window.obj1338_onShow_runningActionsCount = obj1338_onShow_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1338");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=19";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj1338_onShow_runningActionsCount = window.obj1338_onShow_runningActionsCount - 1;

if (window.obj1338_onShow_runningActionsCount == 0) {
	obj1338_onShow_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1338 
move_1398();
function move_1398() {
	window.obj1338_onShow_runningActionsCount = obj1338_onShow_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1338");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 647;
	var moveY = 218;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj1338_onShow_runningActionsCount = window.obj1338_onShow_runningActionsCount - 1;

if (window.obj1338_onShow_runningActionsCount == 0) {
	obj1338_onShow_actionGroup1();
}
		}, 1);
	});
}






































};
obj1338_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1338_onShow_activeActionGroupIndex = -1;
		$("#obj1338").trigger("obj1338_onShow_ended");
		
		return;
	}
	window.obj1338_onShow_activeActionGroupIndex = 1;
	















//	action: loop
loop_obj1338_onShow();
function loop_obj1338_onShow() {

	var loopCount = 0;

	window.obj1338_onShow_loopCount = window.obj1338_onShow_loopCount + 1;
	if (loopCount != 0 && window.obj1338_onShow_loopCount > loopCount) {
		window.obj1338_onShow_loopCount = 0
		obj1338_onShow_actionGroup2();
	} else {
		obj1338_onShow_actionGroup0();
	}

}


























};
obj1338_onShow_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1338_onShow_activeActionGroupIndex = -1;
		$("#obj1338").trigger("obj1338_onShow_ended");
		
		return;
	}
	window.obj1338_onShow_activeActionGroupIndex = 2;
	










































};
obj1402_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1402_onShow_activeActionGroupIndex = -1;
		$("#obj1402").trigger("obj1402_onShow_ended");
		
		return;
	}
	window.obj1402_onShow_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj1402 
move_1412();
function move_1412() {
	window.obj1402_onShow_runningActionsCount = obj1402_onShow_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1402");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=19";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj1402_onShow_runningActionsCount = window.obj1402_onShow_runningActionsCount - 1;

if (window.obj1402_onShow_runningActionsCount == 0) {
	obj1402_onShow_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1402 
move_1413();
function move_1413() {
	window.obj1402_onShow_runningActionsCount = obj1402_onShow_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1402");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 725;
	var moveY = 274;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj1402_onShow_runningActionsCount = window.obj1402_onShow_runningActionsCount - 1;

if (window.obj1402_onShow_runningActionsCount == 0) {
	obj1402_onShow_actionGroup1();
}
		}, 1);
	});
}






































};
obj1402_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1402_onShow_activeActionGroupIndex = -1;
		$("#obj1402").trigger("obj1402_onShow_ended");
		
		return;
	}
	window.obj1402_onShow_activeActionGroupIndex = 1;
	















//	action: loop
loop_obj1402_onShow();
function loop_obj1402_onShow() {

	var loopCount = 0;

	window.obj1402_onShow_loopCount = window.obj1402_onShow_loopCount + 1;
	if (loopCount != 0 && window.obj1402_onShow_loopCount > loopCount) {
		window.obj1402_onShow_loopCount = 0
		obj1402_onShow_actionGroup2();
	} else {
		obj1402_onShow_actionGroup0();
	}

}


























};
obj1402_onShow_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1402_onShow_activeActionGroupIndex = -1;
		$("#obj1402").trigger("obj1402_onShow_ended");
		
		return;
	}
	window.obj1402_onShow_activeActionGroupIndex = 2;
	










































};
obj1404_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1404_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1404").trigger("obj1404_SCEventRun_ended");
		
		return;
	}
	window.obj1404_SCEventRun_activeActionGroupIndex = 0;
	


//	action: show 
//	target: obj1338 
(function(){
	window.obj1404_SCEventRun_runningActionsCount = obj1404_SCEventRun_runningActionsCount + 1;


	var element = "#obj1338";
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
				window.obj1404_SCEventRun_runningActionsCount = window.obj1404_SCEventRun_runningActionsCount - 1;

if (window.obj1404_SCEventRun_runningActionsCount == 0) {
	obj1404_SCEventRun_actionGroup1();
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
			window.obj1404_SCEventRun_runningActionsCount = window.obj1404_SCEventRun_runningActionsCount - 1;

if (window.obj1404_SCEventRun_runningActionsCount == 0) {
	obj1404_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj1402 
(function(){
	window.obj1404_SCEventRun_runningActionsCount = obj1404_SCEventRun_runningActionsCount + 1;


	var element = "#obj1402";
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
				window.obj1404_SCEventRun_runningActionsCount = window.obj1404_SCEventRun_runningActionsCount - 1;

if (window.obj1404_SCEventRun_runningActionsCount == 0) {
	obj1404_SCEventRun_actionGroup1();
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
			window.obj1404_SCEventRun_runningActionsCount = window.obj1404_SCEventRun_runningActionsCount - 1;

if (window.obj1404_SCEventRun_runningActionsCount == 0) {
	obj1404_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj1434 
(function(){
	window.obj1404_SCEventRun_runningActionsCount = obj1404_SCEventRun_runningActionsCount + 1;


	var element = "#obj1434";
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
				window.obj1404_SCEventRun_runningActionsCount = window.obj1404_SCEventRun_runningActionsCount - 1;

if (window.obj1404_SCEventRun_runningActionsCount == 0) {
	obj1404_SCEventRun_actionGroup1();
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
			window.obj1404_SCEventRun_runningActionsCount = window.obj1404_SCEventRun_runningActionsCount - 1;

if (window.obj1404_SCEventRun_runningActionsCount == 0) {
	obj1404_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj1436 
(function(){
	window.obj1404_SCEventRun_runningActionsCount = obj1404_SCEventRun_runningActionsCount + 1;


	var element = "#obj1436";
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
				window.obj1404_SCEventRun_runningActionsCount = window.obj1404_SCEventRun_runningActionsCount - 1;

if (window.obj1404_SCEventRun_runningActionsCount == 0) {
	obj1404_SCEventRun_actionGroup1();
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
			window.obj1404_SCEventRun_runningActionsCount = window.obj1404_SCEventRun_runningActionsCount - 1;

if (window.obj1404_SCEventRun_runningActionsCount == 0) {
	obj1404_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj1424 
(function(){
	window.obj1404_SCEventRun_runningActionsCount = obj1404_SCEventRun_runningActionsCount + 1;


	var element = "#obj1424";
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
		var animationDurationMs = 2000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				window.obj1404_SCEventRun_runningActionsCount = window.obj1404_SCEventRun_runningActionsCount - 1;

if (window.obj1404_SCEventRun_runningActionsCount == 0) {
	obj1404_SCEventRun_actionGroup1();
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
			window.obj1404_SCEventRun_runningActionsCount = window.obj1404_SCEventRun_runningActionsCount - 1;

if (window.obj1404_SCEventRun_runningActionsCount == 0) {
	obj1404_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: move
//	target: obj1181 
move_1430();
function move_1430() {
	window.obj1404_SCEventRun_runningActionsCount = obj1404_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1181");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 722;
	var moveY = 445;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj1404_SCEventRun_runningActionsCount = window.obj1404_SCEventRun_runningActionsCount - 1;

if (window.obj1404_SCEventRun_runningActionsCount == 0) {
	obj1404_SCEventRun_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_5540();
function playAudioFile_5540() {
	window.obj1404_SCEventRun_runningActionsCount = obj1404_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5540")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5540");
			$("#obj_audio_playSoundFile5540").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1404_SCEventRun_runningActionsCount = window.obj1404_SCEventRun_runningActionsCount - 1;

if (window.obj1404_SCEventRun_runningActionsCount == 0) {
	obj1404_SCEventRun_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1404_SCEventRun_runningActionsCount = window.obj1404_SCEventRun_runningActionsCount - 1;

if (window.obj1404_SCEventRun_runningActionsCount == 0) {
	obj1404_SCEventRun_actionGroup1();
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
				window.obj1404_SCEventRun_runningActionsCount = window.obj1404_SCEventRun_runningActionsCount - 1;

if (window.obj1404_SCEventRun_runningActionsCount == 0) {
	obj1404_SCEventRun_actionGroup1();
}
			}, false);
		} else {
			window.obj1404_SCEventRun_runningActionsCount = window.obj1404_SCEventRun_runningActionsCount - 1;

if (window.obj1404_SCEventRun_runningActionsCount == 0) {
	obj1404_SCEventRun_actionGroup1();
}
		}
	}

	
	
	
}




































};
obj1404_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1404_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1404").trigger("obj1404_SCEventRun_ended");
		
		return;
	}
	window.obj1404_SCEventRun_activeActionGroupIndex = 1;
	










































};
obj1434_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1434_onShow_activeActionGroupIndex = -1;
		$("#obj1434").trigger("obj1434_onShow_ended");
		
		return;
	}
	window.obj1434_onShow_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj1434 
move_1447();
function move_1447() {
	window.obj1434_onShow_runningActionsCount = obj1434_onShow_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1434");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=19";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj1434_onShow_runningActionsCount = window.obj1434_onShow_runningActionsCount - 1;

if (window.obj1434_onShow_runningActionsCount == 0) {
	obj1434_onShow_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1434 
move_1448();
function move_1448() {
	window.obj1434_onShow_runningActionsCount = obj1434_onShow_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1434");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 729;
	var moveY = 323;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj1434_onShow_runningActionsCount = window.obj1434_onShow_runningActionsCount - 1;

if (window.obj1434_onShow_runningActionsCount == 0) {
	obj1434_onShow_actionGroup1();
}
		}, 1);
	});
}






































};
obj1434_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1434_onShow_activeActionGroupIndex = -1;
		$("#obj1434").trigger("obj1434_onShow_ended");
		
		return;
	}
	window.obj1434_onShow_activeActionGroupIndex = 1;
	















//	action: loop
loop_obj1434_onShow();
function loop_obj1434_onShow() {

	var loopCount = 0;

	window.obj1434_onShow_loopCount = window.obj1434_onShow_loopCount + 1;
	if (loopCount != 0 && window.obj1434_onShow_loopCount > loopCount) {
		window.obj1434_onShow_loopCount = 0
		obj1434_onShow_actionGroup2();
	} else {
		obj1434_onShow_actionGroup0();
	}

}


























};
obj1434_onShow_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1434_onShow_activeActionGroupIndex = -1;
		$("#obj1434").trigger("obj1434_onShow_ended");
		
		return;
	}
	window.obj1434_onShow_activeActionGroupIndex = 2;
	










































};
obj1436_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1436_onShow_activeActionGroupIndex = -1;
		$("#obj1436").trigger("obj1436_onShow_ended");
		
		return;
	}
	window.obj1436_onShow_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj1436 
move_1471();
function move_1471() {
	window.obj1436_onShow_runningActionsCount = obj1436_onShow_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1436");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 820;
	var moveY = 298;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj1436_onShow_runningActionsCount = window.obj1436_onShow_runningActionsCount - 1;

if (window.obj1436_onShow_runningActionsCount == 0) {
	obj1436_onShow_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1436 
move_1444();
function move_1444() {
	window.obj1436_onShow_runningActionsCount = obj1436_onShow_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1436");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 820;
	var moveY = 291;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj1436_onShow_runningActionsCount = window.obj1436_onShow_runningActionsCount - 1;

if (window.obj1436_onShow_runningActionsCount == 0) {
	obj1436_onShow_actionGroup1();
}
		}, 1);
	});
}






































};
obj1436_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1436_onShow_activeActionGroupIndex = -1;
		$("#obj1436").trigger("obj1436_onShow_ended");
		
		return;
	}
	window.obj1436_onShow_activeActionGroupIndex = 1;
	















//	action: loop
loop_obj1436_onShow();
function loop_obj1436_onShow() {

	var loopCount = 0;

	window.obj1436_onShow_loopCount = window.obj1436_onShow_loopCount + 1;
	if (loopCount != 0 && window.obj1436_onShow_loopCount > loopCount) {
		window.obj1436_onShow_loopCount = 0
		obj1436_onShow_actionGroup2();
	} else {
		obj1436_onShow_actionGroup0();
	}

}


























};
obj1436_onShow_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1436_onShow_activeActionGroupIndex = -1;
		$("#obj1436").trigger("obj1436_onShow_ended");
		
		return;
	}
	window.obj1436_onShow_activeActionGroupIndex = 2;
	










































};
obj1197_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1197_onLoad_activeActionGroupIndex = -1;
		$("#obj1197").trigger("obj1197_onLoad_ended");
		
		return;
	}
	window.obj1197_onLoad_activeActionGroupIndex = 0;
	














//	action: rotate 
//	target: obj1197 
rotate_1206();
function rotate_1206() {
	window.obj1197_onLoad_runningActionsCount = obj1197_onLoad_runningActionsCount + 1;

	
	var targetObjectId = "#obj1197";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1197';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '10';
	var rotationSpeed = 0;
	var rotationEasing = 'linear';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = false;
	if (isInfinite) { rotate_1206_completed(); }

	//TweenMax.to(targetObjectId, 0, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_1206_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1206_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1206_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_1206_completed() {
	setTimeout(function() {
		window.obj1197_onLoad_runningActionsCount = window.obj1197_onLoad_runningActionsCount - 1;

if (window.obj1197_onLoad_runningActionsCount == 0) {
	obj1197_onLoad_actionGroup1();
}
	}, 1);
}




//	action: scale
//	target: obj1197 
scale_1200();
function scale_1200() {
	window.obj1197_onLoad_runningActionsCount = obj1197_onLoad_runningActionsCount + 1;

	
	var targetObjectId = "#obj1197";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1197';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '-1';
	var scaleYValue = '1';
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
		scale_1200_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1200_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1200_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_1200_completed() {
	setTimeout(function() {
		window.obj1197_onLoad_runningActionsCount = window.obj1197_onLoad_runningActionsCount - 1;

if (window.obj1197_onLoad_runningActionsCount == 0) {
	obj1197_onLoad_actionGroup1();
}
	}, 1);
}
























};
obj1197_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1197_onLoad_activeActionGroupIndex = -1;
		$("#obj1197").trigger("obj1197_onLoad_ended");
		
		return;
	}
	window.obj1197_onLoad_activeActionGroupIndex = 1;
	










































};
obj1177_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1177_onShow_activeActionGroupIndex = -1;
		$("#obj1177").trigger("obj1177_onShow_ended");
		
		return;
	}
	window.obj1177_onShow_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj1177 
move_1784();
function move_1784() {
	window.obj1177_onShow_runningActionsCount = obj1177_onShow_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1177");
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
			window.obj1177_onShow_runningActionsCount = window.obj1177_onShow_runningActionsCount - 1;

if (window.obj1177_onShow_runningActionsCount == 0) {
	obj1177_onShow_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1177 
move_1785();
function move_1785() {
	window.obj1177_onShow_runningActionsCount = obj1177_onShow_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1177");
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
			window.obj1177_onShow_runningActionsCount = window.obj1177_onShow_runningActionsCount - 1;

if (window.obj1177_onShow_runningActionsCount == 0) {
	obj1177_onShow_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1177 
move_1786();
function move_1786() {
	window.obj1177_onShow_runningActionsCount = obj1177_onShow_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1177");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 805;
	var moveY = 766;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj1177_onShow_runningActionsCount = window.obj1177_onShow_runningActionsCount - 1;

if (window.obj1177_onShow_runningActionsCount == 0) {
	obj1177_onShow_actionGroup1();
}
		}, 1);
	});
}






































};
obj1177_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1177_onShow_activeActionGroupIndex = -1;
		$("#obj1177").trigger("obj1177_onShow_ended");
		
		return;
	}
	window.obj1177_onShow_activeActionGroupIndex = 1;
	















//	action: loop
loop_obj1177_onShow();
function loop_obj1177_onShow() {

	var loopCount = 0;

	window.obj1177_onShow_loopCount = window.obj1177_onShow_loopCount + 1;
	if (loopCount != 0 && window.obj1177_onShow_loopCount > loopCount) {
		window.obj1177_onShow_loopCount = 0
		obj1177_onShow_actionGroup2();
	} else {
		obj1177_onShow_actionGroup0();
	}

}


























};
obj1177_onShow_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1177_onShow_activeActionGroupIndex = -1;
		$("#obj1177").trigger("obj1177_onShow_ended");
		
		return;
	}
	window.obj1177_onShow_activeActionGroupIndex = 2;
	










































};
obj1753_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1753_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1753").trigger("obj1753_onTouchDown_ended");
		
		return;
	}
	window.obj1753_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj1753");

//	action: dragDrop
//	target: obj1753 
dragDrop_1789();
function dragDrop_1789() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj1753_onTouchDown_runningActionsCount = obj1753_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj1753');
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
    	window.obj1753_onTouchDown_runningActionsCount = window.obj1753_onTouchDown_runningActionsCount - 1;

if (window.obj1753_onTouchDown_runningActionsCount == 0) {
	obj1753_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj1383");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_1789 = false;
    	var dropped_id_1789;
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
					dropped_1789 = true;
					dropped_id_1789 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_1789) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj1753").trigger('SCActionDragDrop1789_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}






















};
obj1753_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1753_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1753").trigger("obj1753_onTouchDown_ended");
		
		return;
	}
	window.obj1753_onTouchDown_activeActionGroupIndex = 1;
	










































};
obj1753_SCActionDragDrop1789_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1753_SCActionDragDrop1789_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1753").trigger("obj1753_SCActionDragDrop1789_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1753_SCActionDragDrop1789_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_5498();
function playAudioFile_5498() {
	window.obj1753_SCActionDragDrop1789_droppedOutsideTargetActions_runningActionsCount = obj1753_SCActionDragDrop1789_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5498")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5498");
			$("#obj_audio_playSoundFile5498").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1753_SCActionDragDrop1789_droppedOutsideTargetActions_runningActionsCount = window.obj1753_SCActionDragDrop1789_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1753_SCActionDragDrop1789_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1753_SCActionDragDrop1789_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1753_SCActionDragDrop1789_droppedOutsideTargetActions_runningActionsCount = window.obj1753_SCActionDragDrop1789_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1753_SCActionDragDrop1789_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1753_SCActionDragDrop1789_droppedOutsideTargetActions_actionGroup1();
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
				window.obj1753_SCActionDragDrop1789_droppedOutsideTargetActions_runningActionsCount = window.obj1753_SCActionDragDrop1789_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1753_SCActionDragDrop1789_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1753_SCActionDragDrop1789_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj1753_SCActionDragDrop1789_droppedOutsideTargetActions_runningActionsCount = window.obj1753_SCActionDragDrop1789_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1753_SCActionDragDrop1789_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1753_SCActionDragDrop1789_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_1791();
function runjs_1791() {
	window.obj1753_SCActionDragDrop1789_droppedOutsideTargetActions_runningActionsCount = obj1753_SCActionDragDrop1789_droppedOutsideTargetActions_runningActionsCount + 1;


	if(localStorage.getItem("shark") === "true")
{
    $("#obj1753").animate({left: "805px", top: "766px"}, 1000);
}
else
{
    $("#obj1753").animate({left: "817px", top: "472px"}, 1000);
}

	setTimeout(function() {
		window.obj1753_SCActionDragDrop1789_droppedOutsideTargetActions_runningActionsCount = window.obj1753_SCActionDragDrop1789_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1753_SCActionDragDrop1789_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1753_SCActionDragDrop1789_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}












};
obj1753_SCActionDragDrop1789_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1753_SCActionDragDrop1789_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1753").trigger("obj1753_SCActionDragDrop1789_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1753_SCActionDragDrop1789_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	










































};
obj1753_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1753_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1753").trigger("obj1753_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1753_droppedInsideTargetActions_activeActionGroupIndex = 0;
	





























//	action: Run JavaScript
runjs_1793();
function runjs_1793() {
	window.obj1753_droppedInsideTargetActions_runningActionsCount = obj1753_droppedInsideTargetActions_runningActionsCount + 1;


	if(localStorage.getItem("lFish") === "true" && localStorage.getItem("ready") === "true")
{
    localStorage.setItem("shark", "true");
    $("#obj1781").trigger(PubCoder.Events.Run);
}
else
{
    $("#obj5547").trigger(PubCoder.Events.Run);
    $("#obj1753").animate({left: "817px", top: "472px"}, 1000);
}

	setTimeout(function() {
		window.obj1753_droppedInsideTargetActions_runningActionsCount = window.obj1753_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1753_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1753_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}












};
obj1753_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1753_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1753").trigger("obj1753_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1753_droppedInsideTargetActions_activeActionGroupIndex = 1;
	










































};
obj1781_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1781_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1781").trigger("obj1781_SCEventRun_ended");
		
		return;
	}
	window.obj1781_SCEventRun_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj1753 
move_1794();
function move_1794() {
	window.obj1781_SCEventRun_runningActionsCount = obj1781_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1753");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 805;
	var moveY = 768;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj1781_SCEventRun_runningActionsCount = window.obj1781_SCEventRun_runningActionsCount - 1;

if (window.obj1781_SCEventRun_runningActionsCount == 0) {
	obj1781_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1197 
move_1824();
function move_1824() {
	window.obj1781_SCEventRun_runningActionsCount = obj1781_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1197");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-101";
	var moveY = "+=-158";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj1781_SCEventRun_runningActionsCount = window.obj1781_SCEventRun_runningActionsCount - 1;

if (window.obj1781_SCEventRun_runningActionsCount == 0) {
	obj1781_SCEventRun_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_5530();
function playAudioFile_5530() {
	window.obj1781_SCEventRun_runningActionsCount = obj1781_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5530")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5530");
			$("#obj_audio_playSoundFile5530").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1781_SCEventRun_runningActionsCount = window.obj1781_SCEventRun_runningActionsCount - 1;

if (window.obj1781_SCEventRun_runningActionsCount == 0) {
	obj1781_SCEventRun_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1781_SCEventRun_runningActionsCount = window.obj1781_SCEventRun_runningActionsCount - 1;

if (window.obj1781_SCEventRun_runningActionsCount == 0) {
	obj1781_SCEventRun_actionGroup1();
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
				window.obj1781_SCEventRun_runningActionsCount = window.obj1781_SCEventRun_runningActionsCount - 1;

if (window.obj1781_SCEventRun_runningActionsCount == 0) {
	obj1781_SCEventRun_actionGroup1();
}
			}, false);
		} else {
			window.obj1781_SCEventRun_runningActionsCount = window.obj1781_SCEventRun_runningActionsCount - 1;

if (window.obj1781_SCEventRun_runningActionsCount == 0) {
	obj1781_SCEventRun_actionGroup1();
}
		}
	}

	
	
	
}








//	action: rotate 
//	target: obj1197 
rotate_1844();
function rotate_1844() {
	window.obj1781_SCEventRun_runningActionsCount = obj1781_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj1197";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1197';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '-30';
	var rotationSpeed = 2;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;

	
	
	var isInfinite = false;
	if (isInfinite) { rotate_1844_completed(); }

	//TweenMax.to(targetObjectId, 2, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_1844_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1844_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1844_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	

}
function rotate_1844_completed() {
	setTimeout(function() {
		window.obj1781_SCEventRun_runningActionsCount = window.obj1781_SCEventRun_runningActionsCount - 1;

if (window.obj1781_SCEventRun_runningActionsCount == 0) {
	obj1781_SCEventRun_actionGroup1();
}
	}, 1);
}




//	action: scale
//	target: obj1197 
scale_1851();
function scale_1851() {
	window.obj1781_SCEventRun_runningActionsCount = obj1781_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj1197";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1197';
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
		scale_1851_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1851_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1851_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_1851_completed() {
	setTimeout(function() {
		window.obj1781_SCEventRun_runningActionsCount = window.obj1781_SCEventRun_runningActionsCount - 1;

if (window.obj1781_SCEventRun_runningActionsCount == 0) {
	obj1781_SCEventRun_actionGroup1();
}
	}, 1);
}
























};
obj1781_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1781_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1781").trigger("obj1781_SCEventRun_ended");
		
		return;
	}
	window.obj1781_SCEventRun_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj1753 
hide_1796();
function hide_1796() {
	var element = "#obj1753";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1781_SCEventRun_runningActionsCount = obj1781_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1781_SCEventRun_runningActionsCount = window.obj1781_SCEventRun_runningActionsCount - 1;

if (window.obj1781_SCEventRun_runningActionsCount == 0) {
	obj1781_SCEventRun_actionGroup2();
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
		setTimeout(hide_1796(), 100);
		return;
	}

	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1781_SCEventRun_runningActionsCount = window.obj1781_SCEventRun_runningActionsCount - 1;

if (window.obj1781_SCEventRun_runningActionsCount == 0) {
	obj1781_SCEventRun_actionGroup2();
}
	}, animationDurationMs);

	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)

}
//	action: show 
//	target: obj1177 
(function(){
	window.obj1781_SCEventRun_runningActionsCount = obj1781_SCEventRun_runningActionsCount + 1;


	var element = "#obj1177";
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
				window.obj1781_SCEventRun_runningActionsCount = window.obj1781_SCEventRun_runningActionsCount - 1;

if (window.obj1781_SCEventRun_runningActionsCount == 0) {
	obj1781_SCEventRun_actionGroup2();
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
			window.obj1781_SCEventRun_runningActionsCount = window.obj1781_SCEventRun_runningActionsCount - 1;

if (window.obj1781_SCEventRun_runningActionsCount == 0) {
	obj1781_SCEventRun_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();







































};
obj1781_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1781_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1781").trigger("obj1781_SCEventRun_ended");
		
		return;
	}
	window.obj1781_SCEventRun_activeActionGroupIndex = 2;
	


//	action: show 
//	target: obj1287 
(function(){
	window.obj1781_SCEventRun_runningActionsCount = obj1781_SCEventRun_runningActionsCount + 1;


	var element = "#obj1287";
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
				window.obj1781_SCEventRun_runningActionsCount = window.obj1781_SCEventRun_runningActionsCount - 1;

if (window.obj1781_SCEventRun_runningActionsCount == 0) {
	obj1781_SCEventRun_actionGroup3();
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
			window.obj1781_SCEventRun_runningActionsCount = window.obj1781_SCEventRun_runningActionsCount - 1;

if (window.obj1781_SCEventRun_runningActionsCount == 0) {
	obj1781_SCEventRun_actionGroup3();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj1308 
(function(){
	window.obj1781_SCEventRun_runningActionsCount = obj1781_SCEventRun_runningActionsCount + 1;


	var element = "#obj1308";
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
				window.obj1781_SCEventRun_runningActionsCount = window.obj1781_SCEventRun_runningActionsCount - 1;

if (window.obj1781_SCEventRun_runningActionsCount == 0) {
	obj1781_SCEventRun_actionGroup3();
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
			window.obj1781_SCEventRun_runningActionsCount = window.obj1781_SCEventRun_runningActionsCount - 1;

if (window.obj1781_SCEventRun_runningActionsCount == 0) {
	obj1781_SCEventRun_actionGroup3();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj1305 
(function(){
	window.obj1781_SCEventRun_runningActionsCount = obj1781_SCEventRun_runningActionsCount + 1;


	var element = "#obj1305";
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
				window.obj1781_SCEventRun_runningActionsCount = window.obj1781_SCEventRun_runningActionsCount - 1;

if (window.obj1781_SCEventRun_runningActionsCount == 0) {
	obj1781_SCEventRun_actionGroup3();
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
			window.obj1781_SCEventRun_runningActionsCount = window.obj1781_SCEventRun_runningActionsCount - 1;

if (window.obj1781_SCEventRun_runningActionsCount == 0) {
	obj1781_SCEventRun_actionGroup3();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();


























//	action: Run JavaScript
runjs_5657();
function runjs_5657() {
	window.obj1781_SCEventRun_runningActionsCount = obj1781_SCEventRun_runningActionsCount + 1;


	localStorage.setItem("ready", "false");

	setTimeout(function() {
		window.obj1781_SCEventRun_runningActionsCount = window.obj1781_SCEventRun_runningActionsCount - 1;

if (window.obj1781_SCEventRun_runningActionsCount == 0) {
	obj1781_SCEventRun_actionGroup3();
}
	}, 1);
}












};
obj1781_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1781_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1781").trigger("obj1781_SCEventRun_ended");
		
		return;
	}
	window.obj1781_SCEventRun_activeActionGroupIndex = 3;
	












//	action: playAudioFile
playAudioFile_5655();
function playAudioFile_5655() {
	window.obj1781_SCEventRun_runningActionsCount = obj1781_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5655")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5655");
			$("#obj_audio_playSoundFile5655").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1781_SCEventRun_runningActionsCount = window.obj1781_SCEventRun_runningActionsCount - 1;

if (window.obj1781_SCEventRun_runningActionsCount == 0) {
	obj1781_SCEventRun_actionGroup4();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1781_SCEventRun_runningActionsCount = window.obj1781_SCEventRun_runningActionsCount - 1;

if (window.obj1781_SCEventRun_runningActionsCount == 0) {
	obj1781_SCEventRun_actionGroup4();
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
				window.obj1781_SCEventRun_runningActionsCount = window.obj1781_SCEventRun_runningActionsCount - 1;

if (window.obj1781_SCEventRun_runningActionsCount == 0) {
	obj1781_SCEventRun_actionGroup4();
}
			}, false);
		} else {
			window.obj1781_SCEventRun_runningActionsCount = window.obj1781_SCEventRun_runningActionsCount - 1;

if (window.obj1781_SCEventRun_runningActionsCount == 0) {
	obj1781_SCEventRun_actionGroup4();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_5656();
function runjs_5656() {
	window.obj1781_SCEventRun_runningActionsCount = obj1781_SCEventRun_runningActionsCount + 1;


	localStorage.setItem("ready", "true");

	setTimeout(function() {
		window.obj1781_SCEventRun_runningActionsCount = window.obj1781_SCEventRun_runningActionsCount - 1;

if (window.obj1781_SCEventRun_runningActionsCount == 0) {
	obj1781_SCEventRun_actionGroup4();
}
	}, 1);
}












};
obj1781_SCEventRun_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1781_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1781").trigger("obj1781_SCEventRun_ended");
		
		return;
	}
	window.obj1781_SCEventRun_activeActionGroupIndex = 4;
	










































};
obj1186_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1186_onShow_activeActionGroupIndex = -1;
		$("#obj1186").trigger("obj1186_onShow_ended");
		
		return;
	}
	window.obj1186_onShow_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj1186 
move_1772();
function move_1772() {
	window.obj1186_onShow_runningActionsCount = obj1186_onShow_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1186");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=10";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 800, easing, function() {
		setTimeout(function() {
			window.obj1186_onShow_runningActionsCount = window.obj1186_onShow_runningActionsCount - 1;

if (window.obj1186_onShow_runningActionsCount == 0) {
	obj1186_onShow_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1186 
move_1773();
function move_1773() {
	window.obj1186_onShow_runningActionsCount = obj1186_onShow_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1186");
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
			window.obj1186_onShow_runningActionsCount = window.obj1186_onShow_runningActionsCount - 1;

if (window.obj1186_onShow_runningActionsCount == 0) {
	obj1186_onShow_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1186 
move_1774();
function move_1774() {
	window.obj1186_onShow_runningActionsCount = obj1186_onShow_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1186");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 391;
	var moveY = 791;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 500, easing, function() {
		setTimeout(function() {
			window.obj1186_onShow_runningActionsCount = window.obj1186_onShow_runningActionsCount - 1;

if (window.obj1186_onShow_runningActionsCount == 0) {
	obj1186_onShow_actionGroup1();
}
		}, 1);
	});
}






































};
obj1186_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1186_onShow_activeActionGroupIndex = -1;
		$("#obj1186").trigger("obj1186_onShow_ended");
		
		return;
	}
	window.obj1186_onShow_activeActionGroupIndex = 1;
	















//	action: loop
loop_obj1186_onShow();
function loop_obj1186_onShow() {

	var loopCount = 0;

	window.obj1186_onShow_loopCount = window.obj1186_onShow_loopCount + 1;
	if (loopCount != 0 && window.obj1186_onShow_loopCount > loopCount) {
		window.obj1186_onShow_loopCount = 0
		obj1186_onShow_actionGroup2();
	} else {
		obj1186_onShow_actionGroup0();
	}

}


























};
obj1186_onShow_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1186_onShow_activeActionGroupIndex = -1;
		$("#obj1186").trigger("obj1186_onShow_ended");
		
		return;
	}
	window.obj1186_onShow_activeActionGroupIndex = 2;
	










































};
obj1746_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1746_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1746").trigger("obj1746_onTouchDown_ended");
		
		return;
	}
	window.obj1746_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj1746");

//	action: dragDrop
//	target: obj1746 
dragDrop_1761();
function dragDrop_1761() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj1746_onTouchDown_runningActionsCount = obj1746_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj1746');
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
    	window.obj1746_onTouchDown_runningActionsCount = window.obj1746_onTouchDown_runningActionsCount - 1;

if (window.obj1746_onTouchDown_runningActionsCount == 0) {
	obj1746_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj1387");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_1761 = false;
    	var dropped_id_1761;
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
					dropped_1761 = true;
					dropped_id_1761 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_1761) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj1746").trigger('SCActionDragDrop1761_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}






















};
obj1746_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1746_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1746").trigger("obj1746_onTouchDown_ended");
		
		return;
	}
	window.obj1746_onTouchDown_activeActionGroupIndex = 1;
	










































};
obj1746_SCActionDragDrop1761_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1746_SCActionDragDrop1761_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1746").trigger("obj1746_SCActionDragDrop1761_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1746_SCActionDragDrop1761_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_5509();
function playAudioFile_5509() {
	window.obj1746_SCActionDragDrop1761_droppedOutsideTargetActions_runningActionsCount = obj1746_SCActionDragDrop1761_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5509")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5509");
			$("#obj_audio_playSoundFile5509").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1746_SCActionDragDrop1761_droppedOutsideTargetActions_runningActionsCount = window.obj1746_SCActionDragDrop1761_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1746_SCActionDragDrop1761_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1746_SCActionDragDrop1761_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1746_SCActionDragDrop1761_droppedOutsideTargetActions_runningActionsCount = window.obj1746_SCActionDragDrop1761_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1746_SCActionDragDrop1761_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1746_SCActionDragDrop1761_droppedOutsideTargetActions_actionGroup1();
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
				window.obj1746_SCActionDragDrop1761_droppedOutsideTargetActions_runningActionsCount = window.obj1746_SCActionDragDrop1761_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1746_SCActionDragDrop1761_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1746_SCActionDragDrop1761_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj1746_SCActionDragDrop1761_droppedOutsideTargetActions_runningActionsCount = window.obj1746_SCActionDragDrop1761_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1746_SCActionDragDrop1761_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1746_SCActionDragDrop1761_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_1765();
function runjs_1765() {
	window.obj1746_SCActionDragDrop1761_droppedOutsideTargetActions_runningActionsCount = obj1746_SCActionDragDrop1761_droppedOutsideTargetActions_runningActionsCount + 1;


	if(localStorage.getItem("lFish") === "true")
{
    $("#obj1746").animate({left: "391px", top: "791px"}, 1000);
}
else
{
    $("#obj1746").animate({left: "791px", top: "681px"}, 1000);
}

	setTimeout(function() {
		window.obj1746_SCActionDragDrop1761_droppedOutsideTargetActions_runningActionsCount = window.obj1746_SCActionDragDrop1761_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1746_SCActionDragDrop1761_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1746_SCActionDragDrop1761_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}












};
obj1746_SCActionDragDrop1761_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1746_SCActionDragDrop1761_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1746").trigger("obj1746_SCActionDragDrop1761_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1746_SCActionDragDrop1761_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	










































};
obj1746_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1746_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1746").trigger("obj1746_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1746_droppedInsideTargetActions_activeActionGroupIndex = 0;
	





























//	action: Run JavaScript
runjs_1763();
function runjs_1763() {
	window.obj1746_droppedInsideTargetActions_runningActionsCount = obj1746_droppedInsideTargetActions_runningActionsCount + 1;


	if(localStorage.getItem("mFish") === "true")
{
    localStorage.setItem("lFish", "true");
    $("#obj1766").trigger(PubCoder.Events.Run);
}
else
{
    $("#obj5547").trigger(PubCoder.Events.Run);
    $("#obj1746").animate({left: "791px", top: "681px"}, 1000);
}

	setTimeout(function() {
		window.obj1746_droppedInsideTargetActions_runningActionsCount = window.obj1746_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1746_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1746_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}












};
obj1746_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1746_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1746").trigger("obj1746_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1746_droppedInsideTargetActions_activeActionGroupIndex = 1;
	










































};
obj1766_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1766_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1766").trigger("obj1766_SCEventRun_ended");
		
		return;
	}
	window.obj1766_SCEventRun_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj1746 
move_1770();
function move_1770() {
	window.obj1766_SCEventRun_runningActionsCount = obj1766_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1746");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 391;
	var moveY = 791;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj1766_SCEventRun_runningActionsCount = window.obj1766_SCEventRun_runningActionsCount - 1;

if (window.obj1766_SCEventRun_runningActionsCount == 0) {
	obj1766_SCEventRun_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_5531();
function playAudioFile_5531() {
	window.obj1766_SCEventRun_runningActionsCount = obj1766_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5531")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5531");
			$("#obj_audio_playSoundFile5531").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1766_SCEventRun_runningActionsCount = window.obj1766_SCEventRun_runningActionsCount - 1;

if (window.obj1766_SCEventRun_runningActionsCount == 0) {
	obj1766_SCEventRun_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1766_SCEventRun_runningActionsCount = window.obj1766_SCEventRun_runningActionsCount - 1;

if (window.obj1766_SCEventRun_runningActionsCount == 0) {
	obj1766_SCEventRun_actionGroup1();
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
				window.obj1766_SCEventRun_runningActionsCount = window.obj1766_SCEventRun_runningActionsCount - 1;

if (window.obj1766_SCEventRun_runningActionsCount == 0) {
	obj1766_SCEventRun_actionGroup1();
}
			}, false);
		} else {
			window.obj1766_SCEventRun_runningActionsCount = window.obj1766_SCEventRun_runningActionsCount - 1;

if (window.obj1766_SCEventRun_runningActionsCount == 0) {
	obj1766_SCEventRun_actionGroup1();
}
		}
	}

	
	
	
}




































};
obj1766_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1766_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1766").trigger("obj1766_SCEventRun_ended");
		
		return;
	}
	window.obj1766_SCEventRun_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj1746 
hide_1769();
function hide_1769() {
	var element = "#obj1746";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1766_SCEventRun_runningActionsCount = obj1766_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1766_SCEventRun_runningActionsCount = window.obj1766_SCEventRun_runningActionsCount - 1;

if (window.obj1766_SCEventRun_runningActionsCount == 0) {
	obj1766_SCEventRun_actionGroup2();
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
		setTimeout(hide_1769(), 100);
		return;
	}

	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1766_SCEventRun_runningActionsCount = window.obj1766_SCEventRun_runningActionsCount - 1;

if (window.obj1766_SCEventRun_runningActionsCount == 0) {
	obj1766_SCEventRun_actionGroup2();
}
	}, animationDurationMs);

	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)

}
//	action: show 
//	target: obj1186 
(function(){
	window.obj1766_SCEventRun_runningActionsCount = obj1766_SCEventRun_runningActionsCount + 1;


	var element = "#obj1186";
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
				window.obj1766_SCEventRun_runningActionsCount = window.obj1766_SCEventRun_runningActionsCount - 1;

if (window.obj1766_SCEventRun_runningActionsCount == 0) {
	obj1766_SCEventRun_actionGroup2();
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
			window.obj1766_SCEventRun_runningActionsCount = window.obj1766_SCEventRun_runningActionsCount - 1;

if (window.obj1766_SCEventRun_runningActionsCount == 0) {
	obj1766_SCEventRun_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();







































};
obj1766_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1766_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1766").trigger("obj1766_SCEventRun_ended");
		
		return;
	}
	window.obj1766_SCEventRun_activeActionGroupIndex = 2;
	










































};
obj1182_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1182_onShow_activeActionGroupIndex = -1;
		$("#obj1182").trigger("obj1182_onShow_ended");
		
		return;
	}
	window.obj1182_onShow_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj1182 
move_1717();
function move_1717() {
	window.obj1182_onShow_runningActionsCount = obj1182_onShow_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1182");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=10";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 700, easing, function() {
		setTimeout(function() {
			window.obj1182_onShow_runningActionsCount = window.obj1182_onShow_runningActionsCount - 1;

if (window.obj1182_onShow_runningActionsCount == 0) {
	obj1182_onShow_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1182 
move_1718();
function move_1718() {
	window.obj1182_onShow_runningActionsCount = obj1182_onShow_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1182");
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
			window.obj1182_onShow_runningActionsCount = window.obj1182_onShow_runningActionsCount - 1;

if (window.obj1182_onShow_runningActionsCount == 0) {
	obj1182_onShow_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1182 
move_1719();
function move_1719() {
	window.obj1182_onShow_runningActionsCount = obj1182_onShow_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1182");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 207;
	var moveY = 596;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 700, easing, function() {
		setTimeout(function() {
			window.obj1182_onShow_runningActionsCount = window.obj1182_onShow_runningActionsCount - 1;

if (window.obj1182_onShow_runningActionsCount == 0) {
	obj1182_onShow_actionGroup1();
}
		}, 1);
	});
}






































};
obj1182_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1182_onShow_activeActionGroupIndex = -1;
		$("#obj1182").trigger("obj1182_onShow_ended");
		
		return;
	}
	window.obj1182_onShow_activeActionGroupIndex = 1;
	















//	action: loop
loop_obj1182_onShow();
function loop_obj1182_onShow() {

	var loopCount = 0;

	window.obj1182_onShow_loopCount = window.obj1182_onShow_loopCount + 1;
	if (loopCount != 0 && window.obj1182_onShow_loopCount > loopCount) {
		window.obj1182_onShow_loopCount = 0
		obj1182_onShow_actionGroup2();
	} else {
		obj1182_onShow_actionGroup0();
	}

}


























};
obj1182_onShow_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1182_onShow_activeActionGroupIndex = -1;
		$("#obj1182").trigger("obj1182_onShow_ended");
		
		return;
	}
	window.obj1182_onShow_activeActionGroupIndex = 2;
	










































};
obj1709_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1709_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1709").trigger("obj1709_onTouchDown_ended");
		
		return;
	}
	window.obj1709_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj1709");

//	action: dragDrop
//	target: obj1709 
dragDrop_1722();
function dragDrop_1722() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj1709_onTouchDown_runningActionsCount = obj1709_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj1709');
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
    	window.obj1709_onTouchDown_runningActionsCount = window.obj1709_onTouchDown_runningActionsCount - 1;

if (window.obj1709_onTouchDown_runningActionsCount == 0) {
	obj1709_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj1385");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_1722 = false;
    	var dropped_id_1722;
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
					dropped_1722 = true;
					dropped_id_1722 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_1722) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj1709").trigger('SCActionDragDrop1722_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}






















};
obj1709_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1709_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1709").trigger("obj1709_onTouchDown_ended");
		
		return;
	}
	window.obj1709_onTouchDown_activeActionGroupIndex = 1;
	










































};
obj1709_SCActionDragDrop1722_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1709_SCActionDragDrop1722_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1709").trigger("obj1709_SCActionDragDrop1722_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1709_SCActionDragDrop1722_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_5510();
function playAudioFile_5510() {
	window.obj1709_SCActionDragDrop1722_droppedOutsideTargetActions_runningActionsCount = obj1709_SCActionDragDrop1722_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5510")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5510");
			$("#obj_audio_playSoundFile5510").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1709_SCActionDragDrop1722_droppedOutsideTargetActions_runningActionsCount = window.obj1709_SCActionDragDrop1722_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1709_SCActionDragDrop1722_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1709_SCActionDragDrop1722_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1709_SCActionDragDrop1722_droppedOutsideTargetActions_runningActionsCount = window.obj1709_SCActionDragDrop1722_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1709_SCActionDragDrop1722_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1709_SCActionDragDrop1722_droppedOutsideTargetActions_actionGroup1();
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
				window.obj1709_SCActionDragDrop1722_droppedOutsideTargetActions_runningActionsCount = window.obj1709_SCActionDragDrop1722_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1709_SCActionDragDrop1722_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1709_SCActionDragDrop1722_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj1709_SCActionDragDrop1722_droppedOutsideTargetActions_runningActionsCount = window.obj1709_SCActionDragDrop1722_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1709_SCActionDragDrop1722_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1709_SCActionDragDrop1722_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_1726();
function runjs_1726() {
	window.obj1709_SCActionDragDrop1722_droppedOutsideTargetActions_runningActionsCount = obj1709_SCActionDragDrop1722_droppedOutsideTargetActions_runningActionsCount + 1;


	if(localStorage.getItem("mFish") === "true")
{
    $("#obj1709").animate({left: "207px", top: "596px"}, 1000);
}
else
{
    $("#obj1709").animate({left: "532px", top: "457px"}, 1000);
}

	setTimeout(function() {
		window.obj1709_SCActionDragDrop1722_droppedOutsideTargetActions_runningActionsCount = window.obj1709_SCActionDragDrop1722_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1709_SCActionDragDrop1722_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1709_SCActionDragDrop1722_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}












};
obj1709_SCActionDragDrop1722_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1709_SCActionDragDrop1722_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1709").trigger("obj1709_SCActionDragDrop1722_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1709_SCActionDragDrop1722_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	










































};
obj1709_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1709_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1709").trigger("obj1709_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1709_droppedInsideTargetActions_activeActionGroupIndex = 0;
	





























//	action: Run JavaScript
runjs_1725();
function runjs_1725() {
	window.obj1709_droppedInsideTargetActions_runningActionsCount = obj1709_droppedInsideTargetActions_runningActionsCount + 1;


	if(localStorage.getItem("sFish") === "true" && localStorage.getItem("ready") === "true")
{
    localStorage.setItem("mFish", "true");
    $("#obj1727").trigger(PubCoder.Events.Run);
}
else
{
    $("#obj5547").trigger(PubCoder.Events.Run);
    $("#obj1709").animate({left: "532px", top: "457px"}, 1000);
}

	setTimeout(function() {
		window.obj1709_droppedInsideTargetActions_runningActionsCount = window.obj1709_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1709_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1709_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}












};
obj1709_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1709_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1709").trigger("obj1709_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1709_droppedInsideTargetActions_activeActionGroupIndex = 1;
	










































};
obj1727_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1727_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1727").trigger("obj1727_SCEventRun_ended");
		
		return;
	}
	window.obj1727_SCEventRun_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj1709 
move_1731();
function move_1731() {
	window.obj1727_SCEventRun_runningActionsCount = obj1727_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1709");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 207;
	var moveY = 596;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj1727_SCEventRun_runningActionsCount = window.obj1727_SCEventRun_runningActionsCount - 1;

if (window.obj1727_SCEventRun_runningActionsCount == 0) {
	obj1727_SCEventRun_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_5532();
function playAudioFile_5532() {
	window.obj1727_SCEventRun_runningActionsCount = obj1727_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5532")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5532");
			$("#obj_audio_playSoundFile5532").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1727_SCEventRun_runningActionsCount = window.obj1727_SCEventRun_runningActionsCount - 1;

if (window.obj1727_SCEventRun_runningActionsCount == 0) {
	obj1727_SCEventRun_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1727_SCEventRun_runningActionsCount = window.obj1727_SCEventRun_runningActionsCount - 1;

if (window.obj1727_SCEventRun_runningActionsCount == 0) {
	obj1727_SCEventRun_actionGroup1();
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
				window.obj1727_SCEventRun_runningActionsCount = window.obj1727_SCEventRun_runningActionsCount - 1;

if (window.obj1727_SCEventRun_runningActionsCount == 0) {
	obj1727_SCEventRun_actionGroup1();
}
			}, false);
		} else {
			window.obj1727_SCEventRun_runningActionsCount = window.obj1727_SCEventRun_runningActionsCount - 1;

if (window.obj1727_SCEventRun_runningActionsCount == 0) {
	obj1727_SCEventRun_actionGroup1();
}
		}
	}

	
	
	
}




































};
obj1727_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1727_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1727").trigger("obj1727_SCEventRun_ended");
		
		return;
	}
	window.obj1727_SCEventRun_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj1709 
hide_1729();
function hide_1729() {
	var element = "#obj1709";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1727_SCEventRun_runningActionsCount = obj1727_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 0;
	var animationIterationCount = "1";

	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1727_SCEventRun_runningActionsCount = window.obj1727_SCEventRun_runningActionsCount - 1;

if (window.obj1727_SCEventRun_runningActionsCount == 0) {
	obj1727_SCEventRun_actionGroup2();
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
		setTimeout(hide_1729(), 100);
		return;
	}

	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1727_SCEventRun_runningActionsCount = window.obj1727_SCEventRun_runningActionsCount - 1;

if (window.obj1727_SCEventRun_runningActionsCount == 0) {
	obj1727_SCEventRun_actionGroup2();
}
	}, animationDurationMs);

	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)

}
//	action: show 
//	target: obj1182 
(function(){
	window.obj1727_SCEventRun_runningActionsCount = obj1727_SCEventRun_runningActionsCount + 1;


	var element = "#obj1182";
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
				window.obj1727_SCEventRun_runningActionsCount = window.obj1727_SCEventRun_runningActionsCount - 1;

if (window.obj1727_SCEventRun_runningActionsCount == 0) {
	obj1727_SCEventRun_actionGroup2();
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
			window.obj1727_SCEventRun_runningActionsCount = window.obj1727_SCEventRun_runningActionsCount - 1;

if (window.obj1727_SCEventRun_runningActionsCount == 0) {
	obj1727_SCEventRun_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();







































};
obj1727_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1727_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1727").trigger("obj1727_SCEventRun_ended");
		
		return;
	}
	window.obj1727_SCEventRun_activeActionGroupIndex = 2;
	


//	action: show 
//	target: obj1310 
(function(){
	window.obj1727_SCEventRun_runningActionsCount = obj1727_SCEventRun_runningActionsCount + 1;


	var element = "#obj1310";
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
				window.obj1727_SCEventRun_runningActionsCount = window.obj1727_SCEventRun_runningActionsCount - 1;

if (window.obj1727_SCEventRun_runningActionsCount == 0) {
	obj1727_SCEventRun_actionGroup3();
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
			window.obj1727_SCEventRun_runningActionsCount = window.obj1727_SCEventRun_runningActionsCount - 1;

if (window.obj1727_SCEventRun_runningActionsCount == 0) {
	obj1727_SCEventRun_actionGroup3();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj1302 
(function(){
	window.obj1727_SCEventRun_runningActionsCount = obj1727_SCEventRun_runningActionsCount + 1;


	var element = "#obj1302";
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
				window.obj1727_SCEventRun_runningActionsCount = window.obj1727_SCEventRun_runningActionsCount - 1;

if (window.obj1727_SCEventRun_runningActionsCount == 0) {
	obj1727_SCEventRun_actionGroup3();
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
			window.obj1727_SCEventRun_runningActionsCount = window.obj1727_SCEventRun_runningActionsCount - 1;

if (window.obj1727_SCEventRun_runningActionsCount == 0) {
	obj1727_SCEventRun_actionGroup3();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();


























//	action: Run JavaScript
runjs_5654();
function runjs_5654() {
	window.obj1727_SCEventRun_runningActionsCount = obj1727_SCEventRun_runningActionsCount + 1;


	localStorage.setItem("ready", "false");

	setTimeout(function() {
		window.obj1727_SCEventRun_runningActionsCount = window.obj1727_SCEventRun_runningActionsCount - 1;

if (window.obj1727_SCEventRun_runningActionsCount == 0) {
	obj1727_SCEventRun_actionGroup3();
}
	}, 1);
}












};
obj1727_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1727_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1727").trigger("obj1727_SCEventRun_ended");
		
		return;
	}
	window.obj1727_SCEventRun_activeActionGroupIndex = 3;
	












//	action: playAudioFile
playAudioFile_5652();
function playAudioFile_5652() {
	window.obj1727_SCEventRun_runningActionsCount = obj1727_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5652")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5652");
			$("#obj_audio_playSoundFile5652").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1727_SCEventRun_runningActionsCount = window.obj1727_SCEventRun_runningActionsCount - 1;

if (window.obj1727_SCEventRun_runningActionsCount == 0) {
	obj1727_SCEventRun_actionGroup4();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1727_SCEventRun_runningActionsCount = window.obj1727_SCEventRun_runningActionsCount - 1;

if (window.obj1727_SCEventRun_runningActionsCount == 0) {
	obj1727_SCEventRun_actionGroup4();
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
				window.obj1727_SCEventRun_runningActionsCount = window.obj1727_SCEventRun_runningActionsCount - 1;

if (window.obj1727_SCEventRun_runningActionsCount == 0) {
	obj1727_SCEventRun_actionGroup4();
}
			}, false);
		} else {
			window.obj1727_SCEventRun_runningActionsCount = window.obj1727_SCEventRun_runningActionsCount - 1;

if (window.obj1727_SCEventRun_runningActionsCount == 0) {
	obj1727_SCEventRun_actionGroup4();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_5653();
function runjs_5653() {
	window.obj1727_SCEventRun_runningActionsCount = obj1727_SCEventRun_runningActionsCount + 1;


	localStorage.setItem("ready", "true");

	setTimeout(function() {
		window.obj1727_SCEventRun_runningActionsCount = window.obj1727_SCEventRun_runningActionsCount - 1;

if (window.obj1727_SCEventRun_runningActionsCount == 0) {
	obj1727_SCEventRun_actionGroup4();
}
	}, 1);
}












};
obj1727_SCEventRun_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1727_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1727").trigger("obj1727_SCEventRun_ended");
		
		return;
	}
	window.obj1727_SCEventRun_activeActionGroupIndex = 4;
	










































};
obj1212_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1212_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1212").trigger("obj1212_onTouchDown_ended");
		
		return;
	}
	window.obj1212_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj1212");

//	action: dragDrop
//	target: obj1212 
dragDrop_1578();
function dragDrop_1578() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj1212_onTouchDown_runningActionsCount = obj1212_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj1212');
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
    	window.obj1212_onTouchDown_runningActionsCount = window.obj1212_onTouchDown_runningActionsCount - 1;

if (window.obj1212_onTouchDown_runningActionsCount == 0) {
	obj1212_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj1377");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_1578 = false;
    	var dropped_id_1578;
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
					dropped_1578 = true;
					dropped_id_1578 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_1578) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj1212").trigger('SCActionDragDrop1578_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}






















};
obj1212_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1212_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1212").trigger("obj1212_onTouchDown_ended");
		
		return;
	}
	window.obj1212_onTouchDown_activeActionGroupIndex = 1;
	










































};
obj1212_SCActionDragDrop1578_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1212_SCActionDragDrop1578_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1212").trigger("obj1212_SCActionDragDrop1578_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1212_SCActionDragDrop1578_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_5511();
function playAudioFile_5511() {
	window.obj1212_SCActionDragDrop1578_droppedOutsideTargetActions_runningActionsCount = obj1212_SCActionDragDrop1578_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5511")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5511");
			$("#obj_audio_playSoundFile5511").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1212_SCActionDragDrop1578_droppedOutsideTargetActions_runningActionsCount = window.obj1212_SCActionDragDrop1578_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1212_SCActionDragDrop1578_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1212_SCActionDragDrop1578_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1212_SCActionDragDrop1578_droppedOutsideTargetActions_runningActionsCount = window.obj1212_SCActionDragDrop1578_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1212_SCActionDragDrop1578_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1212_SCActionDragDrop1578_droppedOutsideTargetActions_actionGroup1();
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
				window.obj1212_SCActionDragDrop1578_droppedOutsideTargetActions_runningActionsCount = window.obj1212_SCActionDragDrop1578_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1212_SCActionDragDrop1578_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1212_SCActionDragDrop1578_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj1212_SCActionDragDrop1578_droppedOutsideTargetActions_runningActionsCount = window.obj1212_SCActionDragDrop1578_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1212_SCActionDragDrop1578_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1212_SCActionDragDrop1578_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_1588();
function runjs_1588() {
	window.obj1212_SCActionDragDrop1578_droppedOutsideTargetActions_runningActionsCount = obj1212_SCActionDragDrop1578_droppedOutsideTargetActions_runningActionsCount + 1;


	if(localStorage.getItem("sFish") === "true")
{
    $("#obj1212").animate({left: "378px", top: "332px"}, 1000);
}
else
{
    $("#obj1212").animate({left: "604px", top: "603px"}, 1000);
}

	setTimeout(function() {
		window.obj1212_SCActionDragDrop1578_droppedOutsideTargetActions_runningActionsCount = window.obj1212_SCActionDragDrop1578_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1212_SCActionDragDrop1578_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1212_SCActionDragDrop1578_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}












};
obj1212_SCActionDragDrop1578_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1212_SCActionDragDrop1578_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1212").trigger("obj1212_SCActionDragDrop1578_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1212_SCActionDragDrop1578_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	










































};
obj1212_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1212_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1212").trigger("obj1212_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1212_droppedInsideTargetActions_activeActionGroupIndex = 0;
	





























//	action: Run JavaScript
runjs_1580();
function runjs_1580() {
	window.obj1212_droppedInsideTargetActions_runningActionsCount = obj1212_droppedInsideTargetActions_runningActionsCount + 1;


	if(localStorage.getItem("shrimp") === "true" && localStorage.getItem("ready") == "true")
{
    localStorage.setItem("sFish", "true");
    $("#obj1581").trigger(PubCoder.Events.Run);
}
else
{
    $("#obj5547").trigger(PubCoder.Events.Run);
    $("#obj1212").animate({left: "604px", top: "603px"}, 1000);
}

	setTimeout(function() {
		window.obj1212_droppedInsideTargetActions_runningActionsCount = window.obj1212_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1212_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1212_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}












};
obj1212_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1212_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1212").trigger("obj1212_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1212_droppedInsideTargetActions_activeActionGroupIndex = 1;
	










































};
obj1649_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1649_onShow_activeActionGroupIndex = -1;
		$("#obj1649").trigger("obj1649_onShow_ended");
		
		return;
	}
	window.obj1649_onShow_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj1649 
move_1664();
function move_1664() {
	window.obj1649_onShow_runningActionsCount = obj1649_onShow_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1649");
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
			window.obj1649_onShow_runningActionsCount = window.obj1649_onShow_runningActionsCount - 1;

if (window.obj1649_onShow_runningActionsCount == 0) {
	obj1649_onShow_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1649 
move_1663();
function move_1663() {
	window.obj1649_onShow_runningActionsCount = obj1649_onShow_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1649");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=10";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 700, easing, function() {
		setTimeout(function() {
			window.obj1649_onShow_runningActionsCount = window.obj1649_onShow_runningActionsCount - 1;

if (window.obj1649_onShow_runningActionsCount == 0) {
	obj1649_onShow_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1649 
move_1665();
function move_1665() {
	window.obj1649_onShow_runningActionsCount = obj1649_onShow_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1649");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 200, easing, function() {
		setTimeout(function() {
			window.obj1649_onShow_runningActionsCount = window.obj1649_onShow_runningActionsCount - 1;

if (window.obj1649_onShow_runningActionsCount == 0) {
	obj1649_onShow_actionGroup1();
}
		}, 1);
	});
}






































};
obj1649_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1649_onShow_activeActionGroupIndex = -1;
		$("#obj1649").trigger("obj1649_onShow_ended");
		
		return;
	}
	window.obj1649_onShow_activeActionGroupIndex = 1;
	















//	action: loop
loop_obj1649_onShow();
function loop_obj1649_onShow() {

	var loopCount = 0;

	window.obj1649_onShow_loopCount = window.obj1649_onShow_loopCount + 1;
	if (loopCount != 0 && window.obj1649_onShow_loopCount > loopCount) {
		window.obj1649_onShow_loopCount = 0
		obj1649_onShow_actionGroup2();
	} else {
		obj1649_onShow_actionGroup0();
	}

}


























};
obj1649_onShow_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1649_onShow_activeActionGroupIndex = -1;
		$("#obj1649").trigger("obj1649_onShow_ended");
		
		return;
	}
	window.obj1649_onShow_activeActionGroupIndex = 2;
	










































};
obj1581_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1581_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1581").trigger("obj1581_SCEventRun_ended");
		
		return;
	}
	window.obj1581_SCEventRun_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj1212 
move_1583();
function move_1583() {
	window.obj1581_SCEventRun_runningActionsCount = obj1581_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1212");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 378;
	var moveY = 332;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj1581_SCEventRun_runningActionsCount = window.obj1581_SCEventRun_runningActionsCount - 1;

if (window.obj1581_SCEventRun_runningActionsCount == 0) {
	obj1581_SCEventRun_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_5533();
function playAudioFile_5533() {
	window.obj1581_SCEventRun_runningActionsCount = obj1581_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5533")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5533");
			$("#obj_audio_playSoundFile5533").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1581_SCEventRun_runningActionsCount = window.obj1581_SCEventRun_runningActionsCount - 1;

if (window.obj1581_SCEventRun_runningActionsCount == 0) {
	obj1581_SCEventRun_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1581_SCEventRun_runningActionsCount = window.obj1581_SCEventRun_runningActionsCount - 1;

if (window.obj1581_SCEventRun_runningActionsCount == 0) {
	obj1581_SCEventRun_actionGroup1();
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
				window.obj1581_SCEventRun_runningActionsCount = window.obj1581_SCEventRun_runningActionsCount - 1;

if (window.obj1581_SCEventRun_runningActionsCount == 0) {
	obj1581_SCEventRun_actionGroup1();
}
			}, false);
		} else {
			window.obj1581_SCEventRun_runningActionsCount = window.obj1581_SCEventRun_runningActionsCount - 1;

if (window.obj1581_SCEventRun_runningActionsCount == 0) {
	obj1581_SCEventRun_actionGroup1();
}
		}
	}

	
	
	
}




































};
obj1581_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1581_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1581").trigger("obj1581_SCEventRun_ended");
		
		return;
	}
	window.obj1581_SCEventRun_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj1212 
hide_1667();
function hide_1667() {
	var element = "#obj1212";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1581_SCEventRun_runningActionsCount = obj1581_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 0;
	var animationIterationCount = "1";

	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1581_SCEventRun_runningActionsCount = window.obj1581_SCEventRun_runningActionsCount - 1;

if (window.obj1581_SCEventRun_runningActionsCount == 0) {
	obj1581_SCEventRun_actionGroup2();
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
		setTimeout(hide_1667(), 100);
		return;
	}

	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1581_SCEventRun_runningActionsCount = window.obj1581_SCEventRun_runningActionsCount - 1;

if (window.obj1581_SCEventRun_runningActionsCount == 0) {
	obj1581_SCEventRun_actionGroup2();
}
	}, animationDurationMs);

	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)

}
//	action: show 
//	target: obj1649 
(function(){
	window.obj1581_SCEventRun_runningActionsCount = obj1581_SCEventRun_runningActionsCount + 1;


	var element = "#obj1649";
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
		var animationDurationMs = 0;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				window.obj1581_SCEventRun_runningActionsCount = window.obj1581_SCEventRun_runningActionsCount - 1;

if (window.obj1581_SCEventRun_runningActionsCount == 0) {
	obj1581_SCEventRun_actionGroup2();
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
			window.obj1581_SCEventRun_runningActionsCount = window.obj1581_SCEventRun_runningActionsCount - 1;

if (window.obj1581_SCEventRun_runningActionsCount == 0) {
	obj1581_SCEventRun_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj1323 
(function(){
	window.obj1581_SCEventRun_runningActionsCount = obj1581_SCEventRun_runningActionsCount + 1;


	var element = "#obj1323";
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
				window.obj1581_SCEventRun_runningActionsCount = window.obj1581_SCEventRun_runningActionsCount - 1;

if (window.obj1581_SCEventRun_runningActionsCount == 0) {
	obj1581_SCEventRun_actionGroup2();
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
			window.obj1581_SCEventRun_runningActionsCount = window.obj1581_SCEventRun_runningActionsCount - 1;

if (window.obj1581_SCEventRun_runningActionsCount == 0) {
	obj1581_SCEventRun_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj1299 
(function(){
	window.obj1581_SCEventRun_runningActionsCount = obj1581_SCEventRun_runningActionsCount + 1;


	var element = "#obj1299";
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
				window.obj1581_SCEventRun_runningActionsCount = window.obj1581_SCEventRun_runningActionsCount - 1;

if (window.obj1581_SCEventRun_runningActionsCount == 0) {
	obj1581_SCEventRun_actionGroup2();
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
			window.obj1581_SCEventRun_runningActionsCount = window.obj1581_SCEventRun_runningActionsCount - 1;

if (window.obj1581_SCEventRun_runningActionsCount == 0) {
	obj1581_SCEventRun_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj1333 
(function(){
	window.obj1581_SCEventRun_runningActionsCount = obj1581_SCEventRun_runningActionsCount + 1;


	var element = "#obj1333";
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
				window.obj1581_SCEventRun_runningActionsCount = window.obj1581_SCEventRun_runningActionsCount - 1;

if (window.obj1581_SCEventRun_runningActionsCount == 0) {
	obj1581_SCEventRun_actionGroup2();
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
			window.obj1581_SCEventRun_runningActionsCount = window.obj1581_SCEventRun_runningActionsCount - 1;

if (window.obj1581_SCEventRun_runningActionsCount == 0) {
	obj1581_SCEventRun_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();


























//	action: Run JavaScript
runjs_5644();
function runjs_5644() {
	window.obj1581_SCEventRun_runningActionsCount = obj1581_SCEventRun_runningActionsCount + 1;


	localStorage.setItem("ready", "false");

	setTimeout(function() {
		window.obj1581_SCEventRun_runningActionsCount = window.obj1581_SCEventRun_runningActionsCount - 1;

if (window.obj1581_SCEventRun_runningActionsCount == 0) {
	obj1581_SCEventRun_actionGroup2();
}
	}, 1);
}












};
obj1581_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1581_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1581").trigger("obj1581_SCEventRun_ended");
		
		return;
	}
	window.obj1581_SCEventRun_activeActionGroupIndex = 2;
	












//	action: playAudioFile
playAudioFile_5646();
function playAudioFile_5646() {
	window.obj1581_SCEventRun_runningActionsCount = obj1581_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5646")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5646");
			$("#obj_audio_playSoundFile5646").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1581_SCEventRun_runningActionsCount = window.obj1581_SCEventRun_runningActionsCount - 1;

if (window.obj1581_SCEventRun_runningActionsCount == 0) {
	obj1581_SCEventRun_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1581_SCEventRun_runningActionsCount = window.obj1581_SCEventRun_runningActionsCount - 1;

if (window.obj1581_SCEventRun_runningActionsCount == 0) {
	obj1581_SCEventRun_actionGroup3();
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
				window.obj1581_SCEventRun_runningActionsCount = window.obj1581_SCEventRun_runningActionsCount - 1;

if (window.obj1581_SCEventRun_runningActionsCount == 0) {
	obj1581_SCEventRun_actionGroup3();
}
			}, false);
		} else {
			window.obj1581_SCEventRun_runningActionsCount = window.obj1581_SCEventRun_runningActionsCount - 1;

if (window.obj1581_SCEventRun_runningActionsCount == 0) {
	obj1581_SCEventRun_actionGroup3();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_5645();
function runjs_5645() {
	window.obj1581_SCEventRun_runningActionsCount = obj1581_SCEventRun_runningActionsCount + 1;


	localStorage.setItem("ready", "true");

	setTimeout(function() {
		window.obj1581_SCEventRun_runningActionsCount = window.obj1581_SCEventRun_runningActionsCount - 1;

if (window.obj1581_SCEventRun_runningActionsCount == 0) {
	obj1581_SCEventRun_actionGroup3();
}
	}, 1);
}












};
obj1581_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1581_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1581").trigger("obj1581_SCEventRun_ended");
		
		return;
	}
	window.obj1581_SCEventRun_activeActionGroupIndex = 3;
	










































};
obj1181_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1181_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1181").trigger("obj1181_onTouchDown_ended");
		
		return;
	}
	window.obj1181_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj1181");

//	action: dragDrop
//	target: obj1181 
dragDrop_1392();
function dragDrop_1392() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj1181_onTouchDown_runningActionsCount = obj1181_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj1181');
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
    	window.obj1181_onTouchDown_runningActionsCount = window.obj1181_onTouchDown_runningActionsCount - 1;

if (window.obj1181_onTouchDown_runningActionsCount == 0) {
	obj1181_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj1379");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_1392 = false;
    	var dropped_id_1392;
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
					dropped_1392 = true;
					dropped_id_1392 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_1392) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj1181").trigger('SCActionDragDrop1392_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}






















};
obj1181_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1181_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1181").trigger("obj1181_onTouchDown_ended");
		
		return;
	}
	window.obj1181_onTouchDown_activeActionGroupIndex = 1;
	










































};
obj1181_SCActionDragDrop1392_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1181_SCActionDragDrop1392_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1181").trigger("obj1181_SCActionDragDrop1392_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1181_SCActionDragDrop1392_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_5513();
function playAudioFile_5513() {
	window.obj1181_SCActionDragDrop1392_droppedOutsideTargetActions_runningActionsCount = obj1181_SCActionDragDrop1392_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5513")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5513");
			$("#obj_audio_playSoundFile5513").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1181_SCActionDragDrop1392_droppedOutsideTargetActions_runningActionsCount = window.obj1181_SCActionDragDrop1392_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1181_SCActionDragDrop1392_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1181_SCActionDragDrop1392_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1181_SCActionDragDrop1392_droppedOutsideTargetActions_runningActionsCount = window.obj1181_SCActionDragDrop1392_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1181_SCActionDragDrop1392_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1181_SCActionDragDrop1392_droppedOutsideTargetActions_actionGroup1();
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
				window.obj1181_SCActionDragDrop1392_droppedOutsideTargetActions_runningActionsCount = window.obj1181_SCActionDragDrop1392_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1181_SCActionDragDrop1392_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1181_SCActionDragDrop1392_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj1181_SCActionDragDrop1392_droppedOutsideTargetActions_runningActionsCount = window.obj1181_SCActionDragDrop1392_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1181_SCActionDragDrop1392_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1181_SCActionDragDrop1392_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_1571();
function runjs_1571() {
	window.obj1181_SCActionDragDrop1392_droppedOutsideTargetActions_runningActionsCount = obj1181_SCActionDragDrop1392_droppedOutsideTargetActions_runningActionsCount + 1;


	if(localStorage.getItem("shrimp") === "true")
{
    $("#obj1181").animate({left: "722px", top: "445px"}, 1000);
}
else
{
    $("#obj1181").animate({left: "639px", top: "781px"}, 1000);
}

	setTimeout(function() {
		window.obj1181_SCActionDragDrop1392_droppedOutsideTargetActions_runningActionsCount = window.obj1181_SCActionDragDrop1392_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1181_SCActionDragDrop1392_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1181_SCActionDragDrop1392_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}












};
obj1181_SCActionDragDrop1392_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1181_SCActionDragDrop1392_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1181").trigger("obj1181_SCActionDragDrop1392_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1181_SCActionDragDrop1392_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	










































};
obj1181_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1181_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1181").trigger("obj1181_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1181_droppedInsideTargetActions_activeActionGroupIndex = 0;
	





























//	action: Run JavaScript
runjs_1573();
function runjs_1573() {
	window.obj1181_droppedInsideTargetActions_runningActionsCount = obj1181_droppedInsideTargetActions_runningActionsCount + 1;


	if(localStorage.getItem("plankton") === "true")
{
    $("#obj1404").trigger(PubCoder.Events.Run);
    localStorage.setItem("shrimp", "true");
}
else
{
    $("#obj5547").trigger(PubCoder.Events.Run);
    $("#obj1181").animate({left: "639px", top: "781px"}, 1000);
}

	setTimeout(function() {
		window.obj1181_droppedInsideTargetActions_runningActionsCount = window.obj1181_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1181_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1181_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}












};
obj1181_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1181_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1181").trigger("obj1181_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1181_droppedInsideTargetActions_activeActionGroupIndex = 1;
	










































};
obj1185_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1185_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1185").trigger("obj1185_onTouchDown_ended");
		
		return;
	}
	window.obj1185_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj1185");

//	action: dragDrop
//	target: obj1185 
dragDrop_1499();
function dragDrop_1499() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj1185_onTouchDown_runningActionsCount = obj1185_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj1185');
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
    	window.obj1185_onTouchDown_runningActionsCount = window.obj1185_onTouchDown_runningActionsCount - 1;

if (window.obj1185_onTouchDown_runningActionsCount == 0) {
	obj1185_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj1381");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_1499 = false;
    	var dropped_id_1499;
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
					dropped_1499 = true;
					dropped_id_1499 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_1499) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj1185").trigger('SCActionDragDrop1499_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}






















};
obj1185_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1185_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1185").trigger("obj1185_onTouchDown_ended");
		
		return;
	}
	window.obj1185_onTouchDown_activeActionGroupIndex = 1;
	










































};
obj1185_SCActionDragDrop1499_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1185_SCActionDragDrop1499_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1185").trigger("obj1185_SCActionDragDrop1499_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1185_SCActionDragDrop1499_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_5512();
function playAudioFile_5512() {
	window.obj1185_SCActionDragDrop1499_droppedOutsideTargetActions_runningActionsCount = obj1185_SCActionDragDrop1499_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5512")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5512");
			$("#obj_audio_playSoundFile5512").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1185_SCActionDragDrop1499_droppedOutsideTargetActions_runningActionsCount = window.obj1185_SCActionDragDrop1499_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1185_SCActionDragDrop1499_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1185_SCActionDragDrop1499_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1185_SCActionDragDrop1499_droppedOutsideTargetActions_runningActionsCount = window.obj1185_SCActionDragDrop1499_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1185_SCActionDragDrop1499_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1185_SCActionDragDrop1499_droppedOutsideTargetActions_actionGroup1();
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
				window.obj1185_SCActionDragDrop1499_droppedOutsideTargetActions_runningActionsCount = window.obj1185_SCActionDragDrop1499_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1185_SCActionDragDrop1499_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1185_SCActionDragDrop1499_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj1185_SCActionDragDrop1499_droppedOutsideTargetActions_runningActionsCount = window.obj1185_SCActionDragDrop1499_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1185_SCActionDragDrop1499_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1185_SCActionDragDrop1499_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_1567();
function runjs_1567() {
	window.obj1185_SCActionDragDrop1499_droppedOutsideTargetActions_runningActionsCount = obj1185_SCActionDragDrop1499_droppedOutsideTargetActions_runningActionsCount + 1;


	if(localStorage.getItem("plankton") === "true")
{
    $("#obj1185").animate({left: "1070px", top: "359px"}, 1000);
}
else
{
    $("#obj1185").animate({left: "421px", top: "594px"}, 1000);
}

	setTimeout(function() {
		window.obj1185_SCActionDragDrop1499_droppedOutsideTargetActions_runningActionsCount = window.obj1185_SCActionDragDrop1499_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1185_SCActionDragDrop1499_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1185_SCActionDragDrop1499_droppedOutsideTargetActions_actionGroup1();
}
	}, 1);
}












};
obj1185_SCActionDragDrop1499_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1185_SCActionDragDrop1499_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1185").trigger("obj1185_SCActionDragDrop1499_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1185_SCActionDragDrop1499_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	










































};
obj1185_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1185_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1185").trigger("obj1185_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1185_droppedInsideTargetActions_activeActionGroupIndex = 0;
	





























//	action: Run JavaScript
runjs_5632();
function runjs_5632() {
	window.obj1185_droppedInsideTargetActions_runningActionsCount = obj1185_droppedInsideTargetActions_runningActionsCount + 1;


	if(localStorage.getItem("ready") === "true")
{
    $("#obj1501").trigger(PubCoder.Events.Run);
}

	setTimeout(function() {
		window.obj1185_droppedInsideTargetActions_runningActionsCount = window.obj1185_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1185_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1185_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}












};
obj1185_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1185_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1185").trigger("obj1185_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1185_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: loop
loop_obj1185_droppedInsideTargetActions();
function loop_obj1185_droppedInsideTargetActions() {

	var loopCount = 0;

	window.obj1185_droppedInsideTargetActions_loopCount = window.obj1185_droppedInsideTargetActions_loopCount + 1;
	if (loopCount != 0 && window.obj1185_droppedInsideTargetActions_loopCount > loopCount) {
		window.obj1185_droppedInsideTargetActions_loopCount = 0
		obj1185_droppedInsideTargetActions_actionGroup2();
	} else {
		obj1185_droppedInsideTargetActions_actionGroup0();
	}

}


























};
obj1185_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1185_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1185").trigger("obj1185_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1185_droppedInsideTargetActions_activeActionGroupIndex = 2;
	










































};
obj2623_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2623_onLoad_activeActionGroupIndex = -1;
		$("#obj2623").trigger("obj2623_onLoad_ended");
		
		return;
	}
	window.obj2623_onLoad_activeActionGroupIndex = 0;
	


//	action: show 
//	target: obj2623 
(function(){
	window.obj2623_onLoad_runningActionsCount = obj2623_onLoad_runningActionsCount + 1;


	var element = "#obj2623";
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
				window.obj2623_onLoad_runningActionsCount = window.obj2623_onLoad_runningActionsCount - 1;

if (window.obj2623_onLoad_runningActionsCount == 0) {
	obj2623_onLoad_actionGroup1();
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
			window.obj2623_onLoad_runningActionsCount = window.obj2623_onLoad_runningActionsCount - 1;

if (window.obj2623_onLoad_runningActionsCount == 0) {
	obj2623_onLoad_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj2620 
(function(){
	window.obj2623_onLoad_runningActionsCount = obj2623_onLoad_runningActionsCount + 1;


	var element = "#obj2620";
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
				window.obj2623_onLoad_runningActionsCount = window.obj2623_onLoad_runningActionsCount - 1;

if (window.obj2623_onLoad_runningActionsCount == 0) {
	obj2623_onLoad_actionGroup1();
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
			window.obj2623_onLoad_runningActionsCount = window.obj2623_onLoad_runningActionsCount - 1;

if (window.obj2623_onLoad_runningActionsCount == 0) {
	obj2623_onLoad_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj2625 
(function(){
	window.obj2623_onLoad_runningActionsCount = obj2623_onLoad_runningActionsCount + 1;


	var element = "#obj2625";
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
				window.obj2623_onLoad_runningActionsCount = window.obj2623_onLoad_runningActionsCount - 1;

if (window.obj2623_onLoad_runningActionsCount == 0) {
	obj2623_onLoad_actionGroup1();
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
			window.obj2623_onLoad_runningActionsCount = window.obj2623_onLoad_runningActionsCount - 1;

if (window.obj2623_onLoad_runningActionsCount == 0) {
	obj2623_onLoad_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();







































};
obj2623_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2623_onLoad_activeActionGroupIndex = -1;
		$("#obj2623").trigger("obj2623_onLoad_ended");
		
		return;
	}
	window.obj2623_onLoad_activeActionGroupIndex = 1;
	


//	action: show 
//	target: obj2762 
(function(){
	window.obj2623_onLoad_runningActionsCount = obj2623_onLoad_runningActionsCount + 1;


	var element = "#obj2762";
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
				window.obj2623_onLoad_runningActionsCount = window.obj2623_onLoad_runningActionsCount - 1;

if (window.obj2623_onLoad_runningActionsCount == 0) {
	obj2623_onLoad_actionGroup2();
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
			window.obj2623_onLoad_runningActionsCount = window.obj2623_onLoad_runningActionsCount - 1;

if (window.obj2623_onLoad_runningActionsCount == 0) {
	obj2623_onLoad_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();









//	action: playAudioFile
playAudioFile_5607();
function playAudioFile_5607() {
	window.obj2623_onLoad_runningActionsCount = obj2623_onLoad_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5607")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5607");
			$("#obj_audio_playSoundFile5607").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2623_onLoad_runningActionsCount = window.obj2623_onLoad_runningActionsCount - 1;

if (window.obj2623_onLoad_runningActionsCount == 0) {
	obj2623_onLoad_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2623_onLoad_runningActionsCount = window.obj2623_onLoad_runningActionsCount - 1;

if (window.obj2623_onLoad_runningActionsCount == 0) {
	obj2623_onLoad_actionGroup2();
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
				window.obj2623_onLoad_runningActionsCount = window.obj2623_onLoad_runningActionsCount - 1;

if (window.obj2623_onLoad_runningActionsCount == 0) {
	obj2623_onLoad_actionGroup2();
}
			}, false);
		} else {
			window.obj2623_onLoad_runningActionsCount = window.obj2623_onLoad_runningActionsCount - 1;

if (window.obj2623_onLoad_runningActionsCount == 0) {
	obj2623_onLoad_actionGroup2();
}
		}
	}

	
	
	
}





























//	action: run action list container
//	target: obj2759 
runActionList_2765();
function runActionList_2765() {
	window.obj2623_onLoad_runningActionsCount = obj2623_onLoad_runningActionsCount + 1;

	$("#obj2759").trigger('SCEventRun');
	setTimeout(function() {
		window.obj2623_onLoad_runningActionsCount = window.obj2623_onLoad_runningActionsCount - 1;

if (window.obj2623_onLoad_runningActionsCount == 0) {
	obj2623_onLoad_actionGroup2();
}		
	}, 1);
}






};
obj2623_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2623_onLoad_activeActionGroupIndex = -1;
		$("#obj2623").trigger("obj2623_onLoad_ended");
		
		return;
	}
	window.obj2623_onLoad_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_5608();
function runjs_5608() {
	window.obj2623_onLoad_runningActionsCount = obj2623_onLoad_runningActionsCount + 1;


	localStorage.setItem('ready','true');

	setTimeout(function() {
		window.obj2623_onLoad_runningActionsCount = window.obj2623_onLoad_runningActionsCount - 1;

if (window.obj2623_onLoad_runningActionsCount == 0) {
	obj2623_onLoad_actionGroup3();
}
	}, 1);
}












};
obj2623_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2623_onLoad_activeActionGroupIndex = -1;
		$("#obj2623").trigger("obj2623_onLoad_ended");
		
		return;
	}
	window.obj2623_onLoad_activeActionGroupIndex = 3;
	










































};
obj2759_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2759_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2759").trigger("obj2759_SCEventRun_ended");
		
		return;
	}
	window.obj2759_SCEventRun_activeActionGroupIndex = 0;
	


















//	action: scale
//	target: obj2762 
scale_2778();
function scale_2778() {
	window.obj2759_SCEventRun_runningActionsCount = obj2759_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj2762";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2762';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '0.8';
	var scaleYValue = '0.8';
	var effectDuration = '0.5';
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
		scale_2778_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2778_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2778_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_2778_completed() {
	setTimeout(function() {
		window.obj2759_SCEventRun_runningActionsCount = window.obj2759_SCEventRun_runningActionsCount - 1;

if (window.obj2759_SCEventRun_runningActionsCount == 0) {
	obj2759_SCEventRun_actionGroup1();
}
	}, 1);
}
























};
obj2759_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2759_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2759").trigger("obj2759_SCEventRun_ended");
		
		return;
	}
	window.obj2759_SCEventRun_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj2762 
move_2766();
function move_2766() {
	window.obj2759_SCEventRun_runningActionsCount = obj2759_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj2762");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=651";
	var moveY = "+=-405";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 3000, easing, function() {
		setTimeout(function() {
			window.obj2759_SCEventRun_runningActionsCount = window.obj2759_SCEventRun_runningActionsCount - 1;

if (window.obj2759_SCEventRun_runningActionsCount == 0) {
	obj2759_SCEventRun_actionGroup2();
}
		}, 1);
	});
}












//	action: wait
wait_2777();
function wait_2777() {
	window.obj2759_SCEventRun_runningActionsCount = obj2759_SCEventRun_runningActionsCount + 1;

	setTimeout(function() {
		window.obj2759_SCEventRun_runningActionsCount = window.obj2759_SCEventRun_runningActionsCount - 1;

if (window.obj2759_SCEventRun_runningActionsCount == 0) {
	obj2759_SCEventRun_actionGroup2();
}
	}, 1000);
}

























};
obj2759_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2759_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2759").trigger("obj2759_SCEventRun_ended");
		
		return;
	}
	window.obj2759_SCEventRun_activeActionGroupIndex = 2;
	


















//	action: scale
//	target: obj2762 
scale_2781();
function scale_2781() {
	window.obj2759_SCEventRun_runningActionsCount = obj2759_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj2762";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2762';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1';
	var scaleYValue = '1';
	var effectDuration = '0.5';
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
		scale_2781_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2781_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2781_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_2781_completed() {
	setTimeout(function() {
		window.obj2759_SCEventRun_runningActionsCount = window.obj2759_SCEventRun_runningActionsCount - 1;

if (window.obj2759_SCEventRun_runningActionsCount == 0) {
	obj2759_SCEventRun_actionGroup3();
}
	}, 1);
}
























};
obj2759_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2759_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2759").trigger("obj2759_SCEventRun_ended");
		
		return;
	}
	window.obj2759_SCEventRun_activeActionGroupIndex = 3;
	



//	action: move
//	target: obj2762 
move_2767();
function move_2767() {
	window.obj2759_SCEventRun_runningActionsCount = obj2759_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj2762");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 449;
	var moveY = 615;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1500, easing, function() {
		setTimeout(function() {
			window.obj2759_SCEventRun_runningActionsCount = window.obj2759_SCEventRun_runningActionsCount - 1;

if (window.obj2759_SCEventRun_runningActionsCount == 0) {
	obj2759_SCEventRun_actionGroup4();
}
		}, 1);
	});
}












//	action: wait
wait_2768();
function wait_2768() {
	window.obj2759_SCEventRun_runningActionsCount = obj2759_SCEventRun_runningActionsCount + 1;

	setTimeout(function() {
		window.obj2759_SCEventRun_runningActionsCount = window.obj2759_SCEventRun_runningActionsCount - 1;

if (window.obj2759_SCEventRun_runningActionsCount == 0) {
	obj2759_SCEventRun_actionGroup4();
}
	}, 1000);
}

























};
obj2759_SCEventRun_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2759_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2759").trigger("obj2759_SCEventRun_ended");
		
		return;
	}
	window.obj2759_SCEventRun_activeActionGroupIndex = 4;
	















//	action: loop
loop_obj2759_SCEventRun();
function loop_obj2759_SCEventRun() {

	var loopCount = 0;

	window.obj2759_SCEventRun_loopCount = window.obj2759_SCEventRun_loopCount + 1;
	if (loopCount != 0 && window.obj2759_SCEventRun_loopCount > loopCount) {
		window.obj2759_SCEventRun_loopCount = 0
		obj2759_SCEventRun_actionGroup5();
	} else {
		obj2759_SCEventRun_actionGroup0();
	}

}


























};
obj2759_SCEventRun_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2759_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2759").trigger("obj2759_SCEventRun_ended");
		
		return;
	}
	window.obj2759_SCEventRun_activeActionGroupIndex = 5;
	










































};
obj5434_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5434_onLoad_activeActionGroupIndex = -1;
		$("#obj5434").trigger("obj5434_onLoad_ended");
		
		return;
	}
	window.obj5434_onLoad_activeActionGroupIndex = 0;
	
























//	action: playAudio
//	target: obj5434 
playAudio_5436();
function playAudio_5436() {
	window.obj5434_onLoad_runningActionsCount = obj5434_onLoad_runningActionsCount + 1;

	var myAudio = $("#obj5434")[0];
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
		    window.obj5434_onLoad_runningActionsCount = window.obj5434_onLoad_runningActionsCount - 1;

if (window.obj5434_onLoad_runningActionsCount == 0) {
	obj5434_onLoad_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj5434_onLoad_runningActionsCount = window.obj5434_onLoad_runningActionsCount - 1;

if (window.obj5434_onLoad_runningActionsCount == 0) {
	obj5434_onLoad_actionGroup1();
}
	}
}

















};
obj5434_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5434_onLoad_activeActionGroupIndex = -1;
		$("#obj5434").trigger("obj5434_onLoad_ended");
		
		return;
	}
	window.obj5434_onLoad_activeActionGroupIndex = 1;
	










































};
obj5547_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5547_SCEventRun_activeActionGroupIndex = -1;
		$("#obj5547").trigger("obj5547_SCEventRun_ended");
		
		return;
	}
	window.obj5547_SCEventRun_activeActionGroupIndex = 0;
	












//	action: playAudioFile
playAudioFile_5549();
function playAudioFile_5549() {
	window.obj5547_SCEventRun_runningActionsCount = obj5547_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile5549")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5549");
			$("#obj_audio_playSoundFile5549").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj5547_SCEventRun_runningActionsCount = window.obj5547_SCEventRun_runningActionsCount - 1;

if (window.obj5547_SCEventRun_runningActionsCount == 0) {
	obj5547_SCEventRun_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj5547_SCEventRun_runningActionsCount = window.obj5547_SCEventRun_runningActionsCount - 1;

if (window.obj5547_SCEventRun_runningActionsCount == 0) {
	obj5547_SCEventRun_actionGroup1();
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
				window.obj5547_SCEventRun_runningActionsCount = window.obj5547_SCEventRun_runningActionsCount - 1;

if (window.obj5547_SCEventRun_runningActionsCount == 0) {
	obj5547_SCEventRun_actionGroup1();
}
			}, false);
		} else {
			window.obj5547_SCEventRun_runningActionsCount = window.obj5547_SCEventRun_runningActionsCount - 1;

if (window.obj5547_SCEventRun_runningActionsCount == 0) {
	obj5547_SCEventRun_actionGroup1();
}
		}
	}

	
	
	
}




































};
obj5547_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5547_SCEventRun_activeActionGroupIndex = -1;
		$("#obj5547").trigger("obj5547_SCEventRun_ended");
		
		return;
	}
	window.obj5547_SCEventRun_activeActionGroupIndex = 1;
	










































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		

































































/*
 *
 *   obj1271: Event Touch Down
 *
 */

$("#obj1271").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1271_onTap_activeActionGroupIndex != -1) return;
var obj1271_onTap_runningActionsCount = 0;
var obj1271_onTap_loopCount = 0;
obj1271_onTap_actionGroup0();
});



/*
 *
 *   obj1271: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1271_onLoad_activeActionGroupIndex != -1) return;
var obj1271_onLoad_runningActionsCount = 0;
var obj1271_onLoad_loopCount = 0;
obj1271_onLoad_actionGroup0();
});














/*
 *
 *   obj1312: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1312_onLoad_activeActionGroupIndex != -1) return;
var obj1312_onLoad_runningActionsCount = 0;
var obj1312_onLoad_loopCount = 0;
obj1312_onLoad_actionGroup0();
});










/*
 *
 *   obj1285: Event Touch Down
 *
 */

$("#obj1285").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1285_onTap_activeActionGroupIndex != -1) return;
var obj1285_onTap_runningActionsCount = 0;
var obj1285_onTap_loopCount = 0;
obj1285_onTap_actionGroup0();
});



/*
 *
 *   obj1285: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1285_onLoad_activeActionGroupIndex != -1) return;
var obj1285_onLoad_runningActionsCount = 0;
var obj1285_onLoad_loopCount = 0;
obj1285_onLoad_actionGroup0();
});














/*
 *
 *   obj1325: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1325_onLoad_activeActionGroupIndex != -1) return;
var obj1325_onLoad_runningActionsCount = 0;
var obj1325_onLoad_loopCount = 0;
obj1325_onLoad_actionGroup0();
});














/*
 *
 *   obj1265: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1265_onLoad_activeActionGroupIndex != -1) return;
var obj1265_onLoad_runningActionsCount = 0;
var obj1265_onLoad_loopCount = 0;
obj1265_onLoad_actionGroup0();
});










/*
 *
 *   obj1223: Event Touch Down
 *
 */

$("#obj1223").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1223_onTap_activeActionGroupIndex != -1) return;
var obj1223_onTap_runningActionsCount = 0;
var obj1223_onTap_loopCount = 0;
obj1223_onTap_actionGroup0();
});



/*
 *
 *   obj1223: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1223_onLoad_activeActionGroupIndex != -1) return;
var obj1223_onLoad_runningActionsCount = 0;
var obj1223_onLoad_loopCount = 0;
obj1223_onLoad_actionGroup0();
});














/*
 *
 *   obj1913: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1913_onLoad_activeActionGroupIndex != -1) return;
var obj1913_onLoad_runningActionsCount = 0;
var obj1913_onLoad_loopCount = 0;
obj1913_onLoad_actionGroup0();
});














/*
 *
 *   obj1162: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1162_onLoad_activeActionGroupIndex != -1) return;
var obj1162_onLoad_runningActionsCount = 0;
var obj1162_onLoad_loopCount = 0;
obj1162_onLoad_actionGroup0();
});



















































































































































































/*
 *
 *   obj1341: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1341_onLoad_activeActionGroupIndex != -1) return;
var obj1341_onLoad_runningActionsCount = 0;
var obj1341_onLoad_loopCount = 0;
obj1341_onLoad_actionGroup0();
});


































/*
 *
 *   obj1501: Event SCEventRun
 *
 */

$("#obj1501").one("SCEventRun", function(event) {
	if (window.obj1501_SCEventRun_activeActionGroupIndex != -1) return;
var obj1501_SCEventRun_runningActionsCount = 0;
var obj1501_SCEventRun_loopCount = 0;
obj1501_SCEventRun_actionGroup0();
});








/*
 *
 *   obj1510: Event Show
 *
 */
 
$("#obj1510").bind('SCEventShow', function(event) {
	if (window.obj1510_onShow_activeActionGroupIndex != -1) return;
var obj1510_onShow_runningActionsCount = 0;
var obj1510_onShow_loopCount = 0;
obj1510_onShow_actionGroup0();
});





























/*
 *
 *   obj1518: Event Show
 *
 */
 
$("#obj1518").bind('SCEventShow', function(event) {
	if (window.obj1518_onShow_activeActionGroupIndex != -1) return;
var obj1518_onShow_runningActionsCount = 0;
var obj1518_onShow_loopCount = 0;
obj1518_onShow_actionGroup0();
});














/*
 *
 *   obj1520: Event Show
 *
 */
 
$("#obj1520").bind('SCEventShow', function(event) {
	if (window.obj1520_onShow_activeActionGroupIndex != -1) return;
var obj1520_onShow_runningActionsCount = 0;
var obj1520_onShow_loopCount = 0;
obj1520_onShow_actionGroup0();
});














/*
 *
 *   obj1338: Event Show
 *
 */
 
$("#obj1338").bind('SCEventShow', function(event) {
	if (window.obj1338_onShow_activeActionGroupIndex != -1) return;
var obj1338_onShow_runningActionsCount = 0;
var obj1338_onShow_loopCount = 0;
obj1338_onShow_actionGroup0();
});














/*
 *
 *   obj1402: Event Show
 *
 */
 
$("#obj1402").bind('SCEventShow', function(event) {
	if (window.obj1402_onShow_activeActionGroupIndex != -1) return;
var obj1402_onShow_runningActionsCount = 0;
var obj1402_onShow_loopCount = 0;
obj1402_onShow_actionGroup0();
});



































/*
 *
 *   obj1404: Event SCEventRun
 *
 */

$("#obj1404").bind("SCEventRun", function(event) {
	if (window.obj1404_SCEventRun_activeActionGroupIndex != -1) return;
var obj1404_SCEventRun_runningActionsCount = 0;
var obj1404_SCEventRun_loopCount = 0;
obj1404_SCEventRun_actionGroup0();
});























/*
 *
 *   obj1434: Event Show
 *
 */
 
$("#obj1434").bind('SCEventShow', function(event) {
	if (window.obj1434_onShow_activeActionGroupIndex != -1) return;
var obj1434_onShow_runningActionsCount = 0;
var obj1434_onShow_loopCount = 0;
obj1434_onShow_actionGroup0();
});














/*
 *
 *   obj1436: Event Show
 *
 */
 
$("#obj1436").bind('SCEventShow', function(event) {
	if (window.obj1436_onShow_activeActionGroupIndex != -1) return;
var obj1436_onShow_runningActionsCount = 0;
var obj1436_onShow_loopCount = 0;
obj1436_onShow_actionGroup0();
});















/*
 *
 *   obj1197: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1197_onLoad_activeActionGroupIndex != -1) return;
var obj1197_onLoad_runningActionsCount = 0;
var obj1197_onLoad_loopCount = 0;
obj1197_onLoad_actionGroup0();
});













/*
 *
 *   obj1177: Event Show
 *
 */
 
$("#obj1177").bind('SCEventShow', function(event) {
	if (window.obj1177_onShow_activeActionGroupIndex != -1) return;
var obj1177_onShow_runningActionsCount = 0;
var obj1177_onShow_loopCount = 0;
obj1177_onShow_actionGroup0();
});




























/*
 *
 *   obj1753: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1753");
	var winTarget = document.getElementById("obj1753");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj1753").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1753_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1753_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1753_onTouchDown_activeActionGroupIndex != -1) return;
var obj1753_onTouchDown_runningActionsCount = 0;
var obj1753_onTouchDown_loopCount = 0;
obj1753_onTouchDown_actionGroup0();
});






/*
 *
 *   obj1753: Event SCActionDragDrop1789_droppedOutsideTargetActions
 *
 */

$("#obj1753").bind("SCActionDragDrop1789_droppedOutsideTargetActions", function(event) {
	if (window.obj1753_SCActionDragDrop1789_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj1753_SCActionDragDrop1789_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1753_SCActionDragDrop1789_droppedOutsideTargetActions_loopCount = 0;
obj1753_SCActionDragDrop1789_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj1753: Event droppedInsideTargetActions
 *
 */

$("#obj1753").bind("droppedInsideTargetActions", function(event) {
	if (window.obj1753_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj1753_droppedInsideTargetActions_runningActionsCount = 0;
var obj1753_droppedInsideTargetActions_loopCount = 0;
obj1753_droppedInsideTargetActions_actionGroup0();
});














/*
 *
 *   obj1781: Event SCEventRun
 *
 */

$("#obj1781").bind("SCEventRun", function(event) {
	if (window.obj1781_SCEventRun_activeActionGroupIndex != -1) return;
var obj1781_SCEventRun_runningActionsCount = 0;
var obj1781_SCEventRun_loopCount = 0;
obj1781_SCEventRun_actionGroup0();
});








/*
 *
 *   obj1186: Event Show
 *
 */
 
$("#obj1186").bind('SCEventShow', function(event) {
	if (window.obj1186_onShow_activeActionGroupIndex != -1) return;
var obj1186_onShow_runningActionsCount = 0;
var obj1186_onShow_loopCount = 0;
obj1186_onShow_actionGroup0();
});




























/*
 *
 *   obj1746: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1746");
	var winTarget = document.getElementById("obj1746");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj1746").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1746_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1746_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1746_onTouchDown_activeActionGroupIndex != -1) return;
var obj1746_onTouchDown_runningActionsCount = 0;
var obj1746_onTouchDown_loopCount = 0;
obj1746_onTouchDown_actionGroup0();
});






/*
 *
 *   obj1746: Event SCActionDragDrop1761_droppedOutsideTargetActions
 *
 */

$("#obj1746").bind("SCActionDragDrop1761_droppedOutsideTargetActions", function(event) {
	if (window.obj1746_SCActionDragDrop1761_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj1746_SCActionDragDrop1761_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1746_SCActionDragDrop1761_droppedOutsideTargetActions_loopCount = 0;
obj1746_SCActionDragDrop1761_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj1746: Event droppedInsideTargetActions
 *
 */

$("#obj1746").bind("droppedInsideTargetActions", function(event) {
	if (window.obj1746_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj1746_droppedInsideTargetActions_runningActionsCount = 0;
var obj1746_droppedInsideTargetActions_loopCount = 0;
obj1746_droppedInsideTargetActions_actionGroup0();
});














/*
 *
 *   obj1766: Event SCEventRun
 *
 */

$("#obj1766").bind("SCEventRun", function(event) {
	if (window.obj1766_SCEventRun_activeActionGroupIndex != -1) return;
var obj1766_SCEventRun_runningActionsCount = 0;
var obj1766_SCEventRun_loopCount = 0;
obj1766_SCEventRun_actionGroup0();
});








/*
 *
 *   obj1182: Event Show
 *
 */
 
$("#obj1182").bind('SCEventShow', function(event) {
	if (window.obj1182_onShow_activeActionGroupIndex != -1) return;
var obj1182_onShow_runningActionsCount = 0;
var obj1182_onShow_loopCount = 0;
obj1182_onShow_actionGroup0();
});




























/*
 *
 *   obj1709: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1709");
	var winTarget = document.getElementById("obj1709");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj1709").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1709_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1709_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1709_onTouchDown_activeActionGroupIndex != -1) return;
var obj1709_onTouchDown_runningActionsCount = 0;
var obj1709_onTouchDown_loopCount = 0;
obj1709_onTouchDown_actionGroup0();
});






/*
 *
 *   obj1709: Event SCActionDragDrop1722_droppedOutsideTargetActions
 *
 */

$("#obj1709").bind("SCActionDragDrop1722_droppedOutsideTargetActions", function(event) {
	if (window.obj1709_SCActionDragDrop1722_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj1709_SCActionDragDrop1722_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1709_SCActionDragDrop1722_droppedOutsideTargetActions_loopCount = 0;
obj1709_SCActionDragDrop1722_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj1709: Event droppedInsideTargetActions
 *
 */

$("#obj1709").bind("droppedInsideTargetActions", function(event) {
	if (window.obj1709_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj1709_droppedInsideTargetActions_runningActionsCount = 0;
var obj1709_droppedInsideTargetActions_loopCount = 0;
obj1709_droppedInsideTargetActions_actionGroup0();
});














/*
 *
 *   obj1727: Event SCEventRun
 *
 */

$("#obj1727").bind("SCEventRun", function(event) {
	if (window.obj1727_SCEventRun_activeActionGroupIndex != -1) return;
var obj1727_SCEventRun_runningActionsCount = 0;
var obj1727_SCEventRun_loopCount = 0;
obj1727_SCEventRun_actionGroup0();
});







/*
 *
 *   obj1212: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1212");
	var winTarget = document.getElementById("obj1212");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj1212").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1212_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1212_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1212_onTouchDown_activeActionGroupIndex != -1) return;
var obj1212_onTouchDown_runningActionsCount = 0;
var obj1212_onTouchDown_loopCount = 0;
obj1212_onTouchDown_actionGroup0();
});






/*
 *
 *   obj1212: Event SCActionDragDrop1578_droppedOutsideTargetActions
 *
 */

$("#obj1212").bind("SCActionDragDrop1578_droppedOutsideTargetActions", function(event) {
	if (window.obj1212_SCActionDragDrop1578_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj1212_SCActionDragDrop1578_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1212_SCActionDragDrop1578_droppedOutsideTargetActions_loopCount = 0;
obj1212_SCActionDragDrop1578_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj1212: Event droppedInsideTargetActions
 *
 */

$("#obj1212").bind("droppedInsideTargetActions", function(event) {
	if (window.obj1212_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj1212_droppedInsideTargetActions_runningActionsCount = 0;
var obj1212_droppedInsideTargetActions_loopCount = 0;
obj1212_droppedInsideTargetActions_actionGroup0();
});























/*
 *
 *   obj1649: Event Show
 *
 */
 
$("#obj1649").bind('SCEventShow', function(event) {
	if (window.obj1649_onShow_activeActionGroupIndex != -1) return;
var obj1649_onShow_runningActionsCount = 0;
var obj1649_onShow_loopCount = 0;
obj1649_onShow_actionGroup0();
});




















/*
 *
 *   obj1581: Event SCEventRun
 *
 */

$("#obj1581").bind("SCEventRun", function(event) {
	if (window.obj1581_SCEventRun_activeActionGroupIndex != -1) return;
var obj1581_SCEventRun_runningActionsCount = 0;
var obj1581_SCEventRun_loopCount = 0;
obj1581_SCEventRun_actionGroup0();
});












































































































































































/*
 *
 *   obj1181: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1181");
	var winTarget = document.getElementById("obj1181");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj1181").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1181_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1181_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1181_onTouchDown_activeActionGroupIndex != -1) return;
var obj1181_onTouchDown_runningActionsCount = 0;
var obj1181_onTouchDown_loopCount = 0;
obj1181_onTouchDown_actionGroup0();
});






/*
 *
 *   obj1181: Event SCActionDragDrop1392_droppedOutsideTargetActions
 *
 */

$("#obj1181").bind("SCActionDragDrop1392_droppedOutsideTargetActions", function(event) {
	if (window.obj1181_SCActionDragDrop1392_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj1181_SCActionDragDrop1392_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1181_SCActionDragDrop1392_droppedOutsideTargetActions_loopCount = 0;
obj1181_SCActionDragDrop1392_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj1181: Event droppedInsideTargetActions
 *
 */

$("#obj1181").bind("droppedInsideTargetActions", function(event) {
	if (window.obj1181_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj1181_droppedInsideTargetActions_runningActionsCount = 0;
var obj1181_droppedInsideTargetActions_loopCount = 0;
obj1181_droppedInsideTargetActions_actionGroup0();
});







/*
 *
 *   obj1185: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1185");
	var winTarget = document.getElementById("obj1185");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj1185").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1185_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1185_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1185_onTouchDown_activeActionGroupIndex != -1) return;
var obj1185_onTouchDown_runningActionsCount = 0;
var obj1185_onTouchDown_loopCount = 0;
obj1185_onTouchDown_actionGroup0();
});






/*
 *
 *   obj1185: Event SCActionDragDrop1499_droppedOutsideTargetActions
 *
 */

$("#obj1185").bind("SCActionDragDrop1499_droppedOutsideTargetActions", function(event) {
	if (window.obj1185_SCActionDragDrop1499_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj1185_SCActionDragDrop1499_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1185_SCActionDragDrop1499_droppedOutsideTargetActions_loopCount = 0;
obj1185_SCActionDragDrop1499_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj1185: Event droppedInsideTargetActions
 *
 */

$("#obj1185").bind("droppedInsideTargetActions", function(event) {
	if (window.obj1185_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj1185_droppedInsideTargetActions_runningActionsCount = 0;
var obj1185_droppedInsideTargetActions_loopCount = 0;
obj1185_droppedInsideTargetActions_actionGroup0();
});
























/*
 *
 *   obj2623: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj2623_onLoad_activeActionGroupIndex != -1) return;
var obj2623_onLoad_runningActionsCount = 0;
var obj2623_onLoad_loopCount = 0;
obj2623_onLoad_actionGroup0();
});


































/*
 *
 *   obj2759: Event SCEventRun
 *
 */

$("#obj2759").bind("SCEventRun", function(event) {
	if (window.obj2759_SCEventRun_activeActionGroupIndex != -1) return;
var obj2759_SCEventRun_runningActionsCount = 0;
var obj2759_SCEventRun_loopCount = 0;
obj2759_SCEventRun_actionGroup0();
});
























/*
 *
 *   obj5434: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj5434_onLoad_activeActionGroupIndex != -1) return;
var obj5434_onLoad_runningActionsCount = 0;
var obj5434_onLoad_loopCount = 0;
obj5434_onLoad_actionGroup0();
});



















/*
 *
 *   obj5547: Event SCEventRun
 *
 */

$("#obj5547").bind("SCEventRun", function(event) {
	if (window.obj5547_SCEventRun_activeActionGroupIndex != -1) return;
var obj5547_SCEventRun_runningActionsCount = 0;
var obj5547_SCEventRun_loopCount = 0;
obj5547_SCEventRun_actionGroup0();
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
	
$("#obj1154").trigger('SCEventShow');
$("#obj1215").trigger('SCEventShow');
$("#obj1217").trigger('SCEventShow');
$("#obj1221").trigger('SCEventShow');
$("#obj1271").trigger('SCEventShow');
$("#obj1312").trigger('SCEventShow');
$("#obj1285").trigger('SCEventShow');
$("#obj1325").trigger('SCEventShow');
$("#obj1265").trigger('SCEventShow');
$("#obj1223").trigger('SCEventShow');
$("#obj1913").trigger('SCEventShow');
$("#obj1162").trigger('SCEventShow');
$("#obj1347").trigger('SCEventShow');
$("#obj1349").trigger('SCEventShow');
$("#obj1351").trigger('SCEventShow');
$("#obj1353").trigger('SCEventShow');
$("#obj1355").trigger('SCEventShow');
$("#obj1882").trigger('SCEventShow');
$("#obj1884").trigger('SCEventShow');
$("#obj1886").trigger('SCEventShow');
$("#obj1890").trigger('SCEventShow');
$("#obj1892").trigger('SCEventShow');
$("#obj1888").trigger('SCEventShow');
$("#obj1381").trigger('SCEventShow');
$("#obj1379").trigger('SCEventShow');
$("#obj1197").trigger('SCEventShow');
$("#obj1383").trigger('SCEventShow');
$("#obj1753").trigger('SCEventShow');
$("#obj1387").trigger('SCEventShow');
$("#obj1746").trigger('SCEventShow');
$("#obj1385").trigger('SCEventShow');
$("#obj1709").trigger('SCEventShow');
$("#obj1212").trigger('SCEventShow');
$("#obj1377").trigger('SCEventShow');
$("#obj1181").trigger('SCEventShow');
$("#obj1185").trigger('SCEventShow');
$("#obj5434").trigger('SCEventShow');
	localStorage.setItem('tapped','0');
localStorage.setItem('ready','true');
localStorage.setItem("plankton", "false");
localStorage.setItem("shrimp", "false");
localStorage.setItem("sFish", "false");
localStorage.setItem("mFish", "false");
localStorage.setItem("lFish", "false");
localStorage.setItem("shark", "false");
localStorage.setItem('ready','false');
});