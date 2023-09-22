pubcoder.projectID = pubcoder.projectID || "968537061CD4A6469E16DEA662F0DD9C";
pubcoder.project.id = pubcoder.project.id || "968537061CD4A6469E16DEA662F0DD9C";
pubcoder.project.title = pubcoder.project.title || "MGTO Underwater Story";
pubcoder.page.id = pubcoder.page.id || 2;
pubcoder.page.title = pubcoder.page.title || "1";
pubcoder.page.number = pubcoder.page.number || 1;
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
var obj5233_onLoad_activeActionGroupIndex = -1;
var obj5233_onLoad_runningActionsCount = 0;
var obj5233_onLoad_loopCount = 0;
var obj5244_onLoad_activeActionGroupIndex = -1;
var obj5244_onLoad_runningActionsCount = 0;
var obj5244_onLoad_loopCount = 0;
var obj5326_onLoad_activeActionGroupIndex = -1;
var obj5326_onLoad_runningActionsCount = 0;
var obj5326_onLoad_loopCount = 0;
var obj5277_onLoad_activeActionGroupIndex = -1;
var obj5277_onLoad_runningActionsCount = 0;
var obj5277_onLoad_loopCount = 0;
var obj5255_onLoad_activeActionGroupIndex = -1;
var obj5255_onLoad_runningActionsCount = 0;
var obj5255_onLoad_loopCount = 0;
var obj5266_onLoad_activeActionGroupIndex = -1;
var obj5266_onLoad_runningActionsCount = 0;
var obj5266_onLoad_loopCount = 0;
var obj5299_onLoad_activeActionGroupIndex = -1;
var obj5299_onLoad_runningActionsCount = 0;
var obj5299_onLoad_loopCount = 0;
var obj5189_onLoad_activeActionGroupIndex = -1;
var obj5189_onLoad_runningActionsCount = 0;
var obj5189_onLoad_loopCount = 0;
var obj5153_onLoad_activeActionGroupIndex = -1;
var obj5153_onLoad_runningActionsCount = 0;
var obj5153_onLoad_loopCount = 0;
var obj5340_onLoad_activeActionGroupIndex = -1;
var obj5340_onLoad_runningActionsCount = 0;
var obj5340_onLoad_loopCount = 0;
var obj5343_onLoad_activeActionGroupIndex = -1;
var obj5343_onLoad_runningActionsCount = 0;
var obj5343_onLoad_loopCount = 0;
var obj5354_onLoad_activeActionGroupIndex = -1;
var obj5354_onLoad_runningActionsCount = 0;
var obj5354_onLoad_loopCount = 0;
var obj5373_onTap_activeActionGroupIndex = -1;
var obj5373_onTap_runningActionsCount = 0;
var obj5373_onTap_loopCount = 0;

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
		
obj5233_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5233_onLoad_activeActionGroupIndex = -1;
		$("#obj5233").trigger("obj5233_onLoad_ended");
		
		return;
	}
	window.obj5233_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj5233 
move_5236();
function move_5236() {
	window.obj5233_onLoad_runningActionsCount = obj5233_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj5233");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=332";
	var moveY = "+=50";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj5233_onLoad_runningActionsCount = window.obj5233_onLoad_runningActionsCount - 1;

if (window.obj5233_onLoad_runningActionsCount == 0) {
	obj5233_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj5233 
move_5237();
function move_5237() {
	window.obj5233_onLoad_runningActionsCount = obj5233_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj5233");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=298";
	var moveY = "+=-4";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj5233_onLoad_runningActionsCount = window.obj5233_onLoad_runningActionsCount - 1;

if (window.obj5233_onLoad_runningActionsCount == 0) {
	obj5233_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj5233 
move_5238();
function move_5238() {
	window.obj5233_onLoad_runningActionsCount = obj5233_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj5233");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=297";
	var moveY = "+=-67";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj5233_onLoad_runningActionsCount = window.obj5233_onLoad_runningActionsCount - 1;

if (window.obj5233_onLoad_runningActionsCount == 0) {
	obj5233_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj5233 
move_5239();
function move_5239() {
	window.obj5233_onLoad_runningActionsCount = obj5233_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj5233");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=300";
	var moveY = "+=67";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj5233_onLoad_runningActionsCount = window.obj5233_onLoad_runningActionsCount - 1;

if (window.obj5233_onLoad_runningActionsCount == 0) {
	obj5233_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj5233 
move_5240();
function move_5240() {
	window.obj5233_onLoad_runningActionsCount = obj5233_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj5233");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=338";
	var moveY = "+=-81";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj5233_onLoad_runningActionsCount = window.obj5233_onLoad_runningActionsCount - 1;

if (window.obj5233_onLoad_runningActionsCount == 0) {
	obj5233_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj5233_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5233_onLoad_activeActionGroupIndex = -1;
		$("#obj5233").trigger("obj5233_onLoad_ended");
		
		return;
	}
	window.obj5233_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj5233 
move_5242();
function move_5242() {
	window.obj5233_onLoad_runningActionsCount = obj5233_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj5233");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = -135;
	var moveY = 672;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj5233_onLoad_runningActionsCount = window.obj5233_onLoad_runningActionsCount - 1;

if (window.obj5233_onLoad_runningActionsCount == 0) {
	obj5233_onLoad_actionGroup2();
}
		}, 1);
	});
}












//	action: wait
wait_5241();
function wait_5241() {
	window.obj5233_onLoad_runningActionsCount = obj5233_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj5233_onLoad_runningActionsCount = window.obj5233_onLoad_runningActionsCount - 1;

if (window.obj5233_onLoad_runningActionsCount == 0) {
	obj5233_onLoad_actionGroup2();
}
	}, 500);
}

























};
obj5233_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5233_onLoad_activeActionGroupIndex = -1;
		$("#obj5233").trigger("obj5233_onLoad_ended");
		
		return;
	}
	window.obj5233_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj5233_onLoad();
function loop_obj5233_onLoad() {

	var loopCount = 0;

	window.obj5233_onLoad_loopCount = window.obj5233_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj5233_onLoad_loopCount > loopCount) {
		window.obj5233_onLoad_loopCount = 0
		obj5233_onLoad_actionGroup3();
	} else {
		obj5233_onLoad_actionGroup0();
	}

}


























};
obj5233_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5233_onLoad_activeActionGroupIndex = -1;
		$("#obj5233").trigger("obj5233_onLoad_ended");
		
		return;
	}
	window.obj5233_onLoad_activeActionGroupIndex = 3;
	










































};
obj5244_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5244_onLoad_activeActionGroupIndex = -1;
		$("#obj5244").trigger("obj5244_onLoad_ended");
		
		return;
	}
	window.obj5244_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj5244 
move_5251();
function move_5251() {
	window.obj5244_onLoad_runningActionsCount = obj5244_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj5244");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=338";
	var moveY = "+=-81";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 800, easing, function() {
		setTimeout(function() {
			window.obj5244_onLoad_runningActionsCount = window.obj5244_onLoad_runningActionsCount - 1;

if (window.obj5244_onLoad_runningActionsCount == 0) {
	obj5244_onLoad_actionGroup1();
}
		}, 1);
	});
}












//	action: wait
wait_5252();
function wait_5252() {
	window.obj5244_onLoad_runningActionsCount = obj5244_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj5244_onLoad_runningActionsCount = window.obj5244_onLoad_runningActionsCount - 1;

if (window.obj5244_onLoad_runningActionsCount == 0) {
	obj5244_onLoad_actionGroup1();
}
	}, 1000);
}

























};
obj5244_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5244_onLoad_activeActionGroupIndex = -1;
		$("#obj5244").trigger("obj5244_onLoad_ended");
		
		return;
	}
	window.obj5244_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj5244 
move_5247();
function move_5247() {
	window.obj5244_onLoad_runningActionsCount = obj5244_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj5244");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=332";
	var moveY = "+=50";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 900, easing, function() {
		setTimeout(function() {
			window.obj5244_onLoad_runningActionsCount = window.obj5244_onLoad_runningActionsCount - 1;

if (window.obj5244_onLoad_runningActionsCount == 0) {
	obj5244_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj5244 
move_5248();
function move_5248() {
	window.obj5244_onLoad_runningActionsCount = obj5244_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj5244");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=298";
	var moveY = "+=-4";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 900, easing, function() {
		setTimeout(function() {
			window.obj5244_onLoad_runningActionsCount = window.obj5244_onLoad_runningActionsCount - 1;

if (window.obj5244_onLoad_runningActionsCount == 0) {
	obj5244_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj5244 
move_5249();
function move_5249() {
	window.obj5244_onLoad_runningActionsCount = obj5244_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj5244");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=297";
	var moveY = "+=-67";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 900, easing, function() {
		setTimeout(function() {
			window.obj5244_onLoad_runningActionsCount = window.obj5244_onLoad_runningActionsCount - 1;

if (window.obj5244_onLoad_runningActionsCount == 0) {
	obj5244_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj5244 
move_5253();
function move_5253() {
	window.obj5244_onLoad_runningActionsCount = obj5244_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj5244");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = -118;
	var moveY = 571;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj5244_onLoad_runningActionsCount = window.obj5244_onLoad_runningActionsCount - 1;

if (window.obj5244_onLoad_runningActionsCount == 0) {
	obj5244_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj5244 
move_5250();
function move_5250() {
	window.obj5244_onLoad_runningActionsCount = obj5244_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj5244");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=522";
	var moveY = "+=92";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 900, easing, function() {
		setTimeout(function() {
			window.obj5244_onLoad_runningActionsCount = window.obj5244_onLoad_runningActionsCount - 1;

if (window.obj5244_onLoad_runningActionsCount == 0) {
	obj5244_onLoad_actionGroup2();
}
		}, 1);
	});
}






































};
obj5244_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5244_onLoad_activeActionGroupIndex = -1;
		$("#obj5244").trigger("obj5244_onLoad_ended");
		
		return;
	}
	window.obj5244_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj5244_onLoad();
function loop_obj5244_onLoad() {

	var loopCount = 0;

	window.obj5244_onLoad_loopCount = window.obj5244_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj5244_onLoad_loopCount > loopCount) {
		window.obj5244_onLoad_loopCount = 0
		obj5244_onLoad_actionGroup3();
	} else {
		obj5244_onLoad_actionGroup0();
	}

}


























};
obj5244_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5244_onLoad_activeActionGroupIndex = -1;
		$("#obj5244").trigger("obj5244_onLoad_ended");
		
		return;
	}
	window.obj5244_onLoad_activeActionGroupIndex = 3;
	










































};
obj5326_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5326_onLoad_activeActionGroupIndex = -1;
		$("#obj5326").trigger("obj5326_onLoad_ended");
		
		return;
	}
	window.obj5326_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj5326 
move_5335();
function move_5335() {
	window.obj5326_onLoad_runningActionsCount = obj5326_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj5326");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = -155;
	var moveY = 902;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj5326_onLoad_runningActionsCount = window.obj5326_onLoad_runningActionsCount - 1;

if (window.obj5326_onLoad_runningActionsCount == 0) {
	obj5326_onLoad_actionGroup1();
}
		}, 1);
	});
}












//	action: wait
wait_5334();
function wait_5334() {
	window.obj5326_onLoad_runningActionsCount = obj5326_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj5326_onLoad_runningActionsCount = window.obj5326_onLoad_runningActionsCount - 1;

if (window.obj5326_onLoad_runningActionsCount == 0) {
	obj5326_onLoad_actionGroup1();
}
	}, 700);
}

























};
obj5326_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5326_onLoad_activeActionGroupIndex = -1;
		$("#obj5326").trigger("obj5326_onLoad_ended");
		
		return;
	}
	window.obj5326_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj5326 
move_5329();
function move_5329() {
	window.obj5326_onLoad_runningActionsCount = obj5326_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj5326");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=301";
	var moveY = "+=-76";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1700, easing, function() {
		setTimeout(function() {
			window.obj5326_onLoad_runningActionsCount = window.obj5326_onLoad_runningActionsCount - 1;

if (window.obj5326_onLoad_runningActionsCount == 0) {
	obj5326_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj5326 
move_5330();
function move_5330() {
	window.obj5326_onLoad_runningActionsCount = obj5326_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj5326");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=301";
	var moveY = "+=-76";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1700, easing, function() {
		setTimeout(function() {
			window.obj5326_onLoad_runningActionsCount = window.obj5326_onLoad_runningActionsCount - 1;

if (window.obj5326_onLoad_runningActionsCount == 0) {
	obj5326_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj5326 
move_5331();
function move_5331() {
	window.obj5326_onLoad_runningActionsCount = obj5326_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj5326");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=308";
	var moveY = "+=42";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1700, easing, function() {
		setTimeout(function() {
			window.obj5326_onLoad_runningActionsCount = window.obj5326_onLoad_runningActionsCount - 1;

if (window.obj5326_onLoad_runningActionsCount == 0) {
	obj5326_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj5326 
move_5332();
function move_5332() {
	window.obj5326_onLoad_runningActionsCount = obj5326_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj5326");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=399";
	var moveY = "+=75";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1700, easing, function() {
		setTimeout(function() {
			window.obj5326_onLoad_runningActionsCount = window.obj5326_onLoad_runningActionsCount - 1;

if (window.obj5326_onLoad_runningActionsCount == 0) {
	obj5326_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj5326 
move_5333();
function move_5333() {
	window.obj5326_onLoad_runningActionsCount = obj5326_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj5326");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=279";
	var moveY = "+=70";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1700, easing, function() {
		setTimeout(function() {
			window.obj5326_onLoad_runningActionsCount = window.obj5326_onLoad_runningActionsCount - 1;

if (window.obj5326_onLoad_runningActionsCount == 0) {
	obj5326_onLoad_actionGroup2();
}
		}, 1);
	});
}






































};
obj5326_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5326_onLoad_activeActionGroupIndex = -1;
		$("#obj5326").trigger("obj5326_onLoad_ended");
		
		return;
	}
	window.obj5326_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj5326_onLoad();
function loop_obj5326_onLoad() {

	var loopCount = 0;

	window.obj5326_onLoad_loopCount = window.obj5326_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj5326_onLoad_loopCount > loopCount) {
		window.obj5326_onLoad_loopCount = 0
		obj5326_onLoad_actionGroup3();
	} else {
		obj5326_onLoad_actionGroup0();
	}

}


























};
obj5326_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5326_onLoad_activeActionGroupIndex = -1;
		$("#obj5326").trigger("obj5326_onLoad_ended");
		
		return;
	}
	window.obj5326_onLoad_activeActionGroupIndex = 3;
	










































};
obj5277_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5277_onLoad_activeActionGroupIndex = -1;
		$("#obj5277").trigger("obj5277_onLoad_ended");
		
		return;
	}
	window.obj5277_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj5277 
move_5286();
function move_5286() {
	window.obj5277_onLoad_runningActionsCount = obj5277_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj5277");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = -143;
	var moveY = 92;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj5277_onLoad_runningActionsCount = window.obj5277_onLoad_runningActionsCount - 1;

if (window.obj5277_onLoad_runningActionsCount == 0) {
	obj5277_onLoad_actionGroup1();
}
		}, 1);
	});
}












//	action: wait
wait_5285();
function wait_5285() {
	window.obj5277_onLoad_runningActionsCount = obj5277_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj5277_onLoad_runningActionsCount = window.obj5277_onLoad_runningActionsCount - 1;

if (window.obj5277_onLoad_runningActionsCount == 0) {
	obj5277_onLoad_actionGroup1();
}
	}, 1000);
}

























};
obj5277_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5277_onLoad_activeActionGroupIndex = -1;
		$("#obj5277").trigger("obj5277_onLoad_ended");
		
		return;
	}
	window.obj5277_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj5277 
move_5280();
function move_5280() {
	window.obj5277_onLoad_runningActionsCount = obj5277_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj5277");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=332";
	var moveY = "+=50";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj5277_onLoad_runningActionsCount = window.obj5277_onLoad_runningActionsCount - 1;

if (window.obj5277_onLoad_runningActionsCount == 0) {
	obj5277_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj5277 
move_5281();
function move_5281() {
	window.obj5277_onLoad_runningActionsCount = obj5277_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj5277");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=298";
	var moveY = "+=-4";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj5277_onLoad_runningActionsCount = window.obj5277_onLoad_runningActionsCount - 1;

if (window.obj5277_onLoad_runningActionsCount == 0) {
	obj5277_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj5277 
move_5282();
function move_5282() {
	window.obj5277_onLoad_runningActionsCount = obj5277_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj5277");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=297";
	var moveY = "+=-67";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj5277_onLoad_runningActionsCount = window.obj5277_onLoad_runningActionsCount - 1;

if (window.obj5277_onLoad_runningActionsCount == 0) {
	obj5277_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj5277 
move_5283();
function move_5283() {
	window.obj5277_onLoad_runningActionsCount = obj5277_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj5277");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=300";
	var moveY = "+=67";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj5277_onLoad_runningActionsCount = window.obj5277_onLoad_runningActionsCount - 1;

if (window.obj5277_onLoad_runningActionsCount == 0) {
	obj5277_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj5277 
move_5284();
function move_5284() {
	window.obj5277_onLoad_runningActionsCount = obj5277_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj5277");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=338";
	var moveY = "+=-81";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj5277_onLoad_runningActionsCount = window.obj5277_onLoad_runningActionsCount - 1;

if (window.obj5277_onLoad_runningActionsCount == 0) {
	obj5277_onLoad_actionGroup2();
}
		}, 1);
	});
}






































};
obj5277_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5277_onLoad_activeActionGroupIndex = -1;
		$("#obj5277").trigger("obj5277_onLoad_ended");
		
		return;
	}
	window.obj5277_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj5277_onLoad();
function loop_obj5277_onLoad() {

	var loopCount = 0;

	window.obj5277_onLoad_loopCount = window.obj5277_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj5277_onLoad_loopCount > loopCount) {
		window.obj5277_onLoad_loopCount = 0
		obj5277_onLoad_actionGroup3();
	} else {
		obj5277_onLoad_actionGroup0();
	}

}


























};
obj5277_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5277_onLoad_activeActionGroupIndex = -1;
		$("#obj5277").trigger("obj5277_onLoad_ended");
		
		return;
	}
	window.obj5277_onLoad_activeActionGroupIndex = 3;
	










































};
obj5255_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5255_onLoad_activeActionGroupIndex = -1;
		$("#obj5255").trigger("obj5255_onLoad_ended");
		
		return;
	}
	window.obj5255_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj5255 
move_5258();
function move_5258() {
	window.obj5255_onLoad_runningActionsCount = obj5255_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj5255");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=332";
	var moveY = "+=50";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj5255_onLoad_runningActionsCount = window.obj5255_onLoad_runningActionsCount - 1;

if (window.obj5255_onLoad_runningActionsCount == 0) {
	obj5255_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj5255 
move_5259();
function move_5259() {
	window.obj5255_onLoad_runningActionsCount = obj5255_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj5255");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=298";
	var moveY = "+=-4";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj5255_onLoad_runningActionsCount = window.obj5255_onLoad_runningActionsCount - 1;

if (window.obj5255_onLoad_runningActionsCount == 0) {
	obj5255_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj5255 
move_5260();
function move_5260() {
	window.obj5255_onLoad_runningActionsCount = obj5255_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj5255");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=297";
	var moveY = "+=-67";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj5255_onLoad_runningActionsCount = window.obj5255_onLoad_runningActionsCount - 1;

if (window.obj5255_onLoad_runningActionsCount == 0) {
	obj5255_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj5255 
move_5261();
function move_5261() {
	window.obj5255_onLoad_runningActionsCount = obj5255_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj5255");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=300";
	var moveY = "+=67";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj5255_onLoad_runningActionsCount = window.obj5255_onLoad_runningActionsCount - 1;

if (window.obj5255_onLoad_runningActionsCount == 0) {
	obj5255_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj5255 
move_5262();
function move_5262() {
	window.obj5255_onLoad_runningActionsCount = obj5255_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj5255");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=494";
	var moveY = "+=-34";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj5255_onLoad_runningActionsCount = window.obj5255_onLoad_runningActionsCount - 1;

if (window.obj5255_onLoad_runningActionsCount == 0) {
	obj5255_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj5255_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5255_onLoad_activeActionGroupIndex = -1;
		$("#obj5255").trigger("obj5255_onLoad_ended");
		
		return;
	}
	window.obj5255_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj5255 
move_5264();
function move_5264() {
	window.obj5255_onLoad_runningActionsCount = obj5255_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj5255");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = -327;
	var moveY = 466;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj5255_onLoad_runningActionsCount = window.obj5255_onLoad_runningActionsCount - 1;

if (window.obj5255_onLoad_runningActionsCount == 0) {
	obj5255_onLoad_actionGroup2();
}
		}, 1);
	});
}












//	action: wait
wait_5263();
function wait_5263() {
	window.obj5255_onLoad_runningActionsCount = obj5255_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj5255_onLoad_runningActionsCount = window.obj5255_onLoad_runningActionsCount - 1;

if (window.obj5255_onLoad_runningActionsCount == 0) {
	obj5255_onLoad_actionGroup2();
}
	}, 2000);
}

























};
obj5255_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5255_onLoad_activeActionGroupIndex = -1;
		$("#obj5255").trigger("obj5255_onLoad_ended");
		
		return;
	}
	window.obj5255_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj5255_onLoad();
function loop_obj5255_onLoad() {

	var loopCount = 0;

	window.obj5255_onLoad_loopCount = window.obj5255_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj5255_onLoad_loopCount > loopCount) {
		window.obj5255_onLoad_loopCount = 0
		obj5255_onLoad_actionGroup3();
	} else {
		obj5255_onLoad_actionGroup0();
	}

}


























};
obj5255_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5255_onLoad_activeActionGroupIndex = -1;
		$("#obj5255").trigger("obj5255_onLoad_ended");
		
		return;
	}
	window.obj5255_onLoad_activeActionGroupIndex = 3;
	










































};
obj5266_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5266_onLoad_activeActionGroupIndex = -1;
		$("#obj5266").trigger("obj5266_onLoad_ended");
		
		return;
	}
	window.obj5266_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj5266 
move_5269();
function move_5269() {
	window.obj5266_onLoad_runningActionsCount = obj5266_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj5266");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=236";
	var moveY = "+=-215";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1300, easing, function() {
		setTimeout(function() {
			window.obj5266_onLoad_runningActionsCount = window.obj5266_onLoad_runningActionsCount - 1;

if (window.obj5266_onLoad_runningActionsCount == 0) {
	obj5266_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj5266 
move_5337();
function move_5337() {
	window.obj5266_onLoad_runningActionsCount = obj5266_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj5266");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=306";
	var moveY = "+=-25";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1300, easing, function() {
		setTimeout(function() {
			window.obj5266_onLoad_runningActionsCount = window.obj5266_onLoad_runningActionsCount - 1;

if (window.obj5266_onLoad_runningActionsCount == 0) {
	obj5266_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj5266 
move_5338();
function move_5338() {
	window.obj5266_onLoad_runningActionsCount = obj5266_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj5266");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=326";
	var moveY = "+=-69";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1300, easing, function() {
		setTimeout(function() {
			window.obj5266_onLoad_runningActionsCount = window.obj5266_onLoad_runningActionsCount - 1;

if (window.obj5266_onLoad_runningActionsCount == 0) {
	obj5266_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj5266 
move_5339();
function move_5339() {
	window.obj5266_onLoad_runningActionsCount = obj5266_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj5266");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=440";
	var moveY = "+=6";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1300, easing, function() {
		setTimeout(function() {
			window.obj5266_onLoad_runningActionsCount = window.obj5266_onLoad_runningActionsCount - 1;

if (window.obj5266_onLoad_runningActionsCount == 0) {
	obj5266_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj5266_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5266_onLoad_activeActionGroupIndex = -1;
		$("#obj5266").trigger("obj5266_onLoad_ended");
		
		return;
	}
	window.obj5266_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj5266 
move_5275();
function move_5275() {
	window.obj5266_onLoad_runningActionsCount = obj5266_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj5266");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 71;
	var moveY = 1064;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj5266_onLoad_runningActionsCount = window.obj5266_onLoad_runningActionsCount - 1;

if (window.obj5266_onLoad_runningActionsCount == 0) {
	obj5266_onLoad_actionGroup2();
}
		}, 1);
	});
}












//	action: wait
wait_5274();
function wait_5274() {
	window.obj5266_onLoad_runningActionsCount = obj5266_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj5266_onLoad_runningActionsCount = window.obj5266_onLoad_runningActionsCount - 1;

if (window.obj5266_onLoad_runningActionsCount == 0) {
	obj5266_onLoad_actionGroup2();
}
	}, 1000);
}

























};
obj5266_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5266_onLoad_activeActionGroupIndex = -1;
		$("#obj5266").trigger("obj5266_onLoad_ended");
		
		return;
	}
	window.obj5266_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj5266_onLoad();
function loop_obj5266_onLoad() {

	var loopCount = 0;

	window.obj5266_onLoad_loopCount = window.obj5266_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj5266_onLoad_loopCount > loopCount) {
		window.obj5266_onLoad_loopCount = 0
		obj5266_onLoad_actionGroup3();
	} else {
		obj5266_onLoad_actionGroup0();
	}

}


























};
obj5266_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5266_onLoad_activeActionGroupIndex = -1;
		$("#obj5266").trigger("obj5266_onLoad_ended");
		
		return;
	}
	window.obj5266_onLoad_activeActionGroupIndex = 3;
	










































};
obj5299_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5299_onLoad_activeActionGroupIndex = -1;
		$("#obj5299").trigger("obj5299_onLoad_ended");
		
		return;
	}
	window.obj5299_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj5299 
move_5302();
function move_5302() {
	window.obj5299_onLoad_runningActionsCount = obj5299_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj5299");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=152";
	var moveY = "+=188";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1500, easing, function() {
		setTimeout(function() {
			window.obj5299_onLoad_runningActionsCount = window.obj5299_onLoad_runningActionsCount - 1;

if (window.obj5299_onLoad_runningActionsCount == 0) {
	obj5299_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj5299 
move_5310();
function move_5310() {
	window.obj5299_onLoad_runningActionsCount = obj5299_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj5299");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=152";
	var moveY = "+=188";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1500, easing, function() {
		setTimeout(function() {
			window.obj5299_onLoad_runningActionsCount = window.obj5299_onLoad_runningActionsCount - 1;

if (window.obj5299_onLoad_runningActionsCount == 0) {
	obj5299_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj5299 
move_5311();
function move_5311() {
	window.obj5299_onLoad_runningActionsCount = obj5299_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj5299");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=289";
	var moveY = "+=186";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1500, easing, function() {
		setTimeout(function() {
			window.obj5299_onLoad_runningActionsCount = window.obj5299_onLoad_runningActionsCount - 1;

if (window.obj5299_onLoad_runningActionsCount == 0) {
	obj5299_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj5299 
move_5321();
function move_5321() {
	window.obj5299_onLoad_runningActionsCount = obj5299_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj5299");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=671";
	var moveY = "+=234";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1500, easing, function() {
		setTimeout(function() {
			window.obj5299_onLoad_runningActionsCount = window.obj5299_onLoad_runningActionsCount - 1;

if (window.obj5299_onLoad_runningActionsCount == 0) {
	obj5299_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj5299_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5299_onLoad_activeActionGroupIndex = -1;
		$("#obj5299").trigger("obj5299_onLoad_ended");
		
		return;
	}
	window.obj5299_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj5299 
move_5308();
function move_5308() {
	window.obj5299_onLoad_runningActionsCount = obj5299_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj5299");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 307;
	var moveY = -102;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj5299_onLoad_runningActionsCount = window.obj5299_onLoad_runningActionsCount - 1;

if (window.obj5299_onLoad_runningActionsCount == 0) {
	obj5299_onLoad_actionGroup2();
}
		}, 1);
	});
}












//	action: wait
wait_5307();
function wait_5307() {
	window.obj5299_onLoad_runningActionsCount = obj5299_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj5299_onLoad_runningActionsCount = window.obj5299_onLoad_runningActionsCount - 1;

if (window.obj5299_onLoad_runningActionsCount == 0) {
	obj5299_onLoad_actionGroup2();
}
	}, 1200);
}

























};
obj5299_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5299_onLoad_activeActionGroupIndex = -1;
		$("#obj5299").trigger("obj5299_onLoad_ended");
		
		return;
	}
	window.obj5299_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj5299_onLoad();
function loop_obj5299_onLoad() {

	var loopCount = 0;

	window.obj5299_onLoad_loopCount = window.obj5299_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj5299_onLoad_loopCount > loopCount) {
		window.obj5299_onLoad_loopCount = 0
		obj5299_onLoad_actionGroup3();
	} else {
		obj5299_onLoad_actionGroup0();
	}

}


























};
obj5299_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5299_onLoad_activeActionGroupIndex = -1;
		$("#obj5299").trigger("obj5299_onLoad_ended");
		
		return;
	}
	window.obj5299_onLoad_activeActionGroupIndex = 3;
	










































};
obj5189_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5189_onLoad_activeActionGroupIndex = -1;
		$("#obj5189").trigger("obj5189_onLoad_ended");
		
		return;
	}
	window.obj5189_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj5189 
move_5192();
function move_5192() {
	window.obj5189_onLoad_runningActionsCount = obj5189_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj5189");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=301";
	var moveY = "+=-76";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1700, easing, function() {
		setTimeout(function() {
			window.obj5189_onLoad_runningActionsCount = window.obj5189_onLoad_runningActionsCount - 1;

if (window.obj5189_onLoad_runningActionsCount == 0) {
	obj5189_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj5189 
move_5322();
function move_5322() {
	window.obj5189_onLoad_runningActionsCount = obj5189_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj5189");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=301";
	var moveY = "+=-76";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1700, easing, function() {
		setTimeout(function() {
			window.obj5189_onLoad_runningActionsCount = window.obj5189_onLoad_runningActionsCount - 1;

if (window.obj5189_onLoad_runningActionsCount == 0) {
	obj5189_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj5189 
move_5323();
function move_5323() {
	window.obj5189_onLoad_runningActionsCount = obj5189_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj5189");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=308";
	var moveY = "+=42";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1700, easing, function() {
		setTimeout(function() {
			window.obj5189_onLoad_runningActionsCount = window.obj5189_onLoad_runningActionsCount - 1;

if (window.obj5189_onLoad_runningActionsCount == 0) {
	obj5189_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj5189 
move_5324();
function move_5324() {
	window.obj5189_onLoad_runningActionsCount = obj5189_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj5189");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=399";
	var moveY = "+=75";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1700, easing, function() {
		setTimeout(function() {
			window.obj5189_onLoad_runningActionsCount = window.obj5189_onLoad_runningActionsCount - 1;

if (window.obj5189_onLoad_runningActionsCount == 0) {
	obj5189_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj5189 
move_5325();
function move_5325() {
	window.obj5189_onLoad_runningActionsCount = obj5189_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj5189");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=279";
	var moveY = "+=70";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1700, easing, function() {
		setTimeout(function() {
			window.obj5189_onLoad_runningActionsCount = window.obj5189_onLoad_runningActionsCount - 1;

if (window.obj5189_onLoad_runningActionsCount == 0) {
	obj5189_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj5189_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5189_onLoad_activeActionGroupIndex = -1;
		$("#obj5189").trigger("obj5189_onLoad_ended");
		
		return;
	}
	window.obj5189_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj5189 
move_5197();
function move_5197() {
	window.obj5189_onLoad_runningActionsCount = obj5189_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj5189");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = -143;
	var moveY = 304;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj5189_onLoad_runningActionsCount = window.obj5189_onLoad_runningActionsCount - 1;

if (window.obj5189_onLoad_runningActionsCount == 0) {
	obj5189_onLoad_actionGroup2();
}
		}, 1);
	});
}












//	action: wait
wait_5198();
function wait_5198() {
	window.obj5189_onLoad_runningActionsCount = obj5189_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj5189_onLoad_runningActionsCount = window.obj5189_onLoad_runningActionsCount - 1;

if (window.obj5189_onLoad_runningActionsCount == 0) {
	obj5189_onLoad_actionGroup2();
}
	}, 300);
}

























};
obj5189_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5189_onLoad_activeActionGroupIndex = -1;
		$("#obj5189").trigger("obj5189_onLoad_ended");
		
		return;
	}
	window.obj5189_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj5189_onLoad();
function loop_obj5189_onLoad() {

	var loopCount = 0;

	window.obj5189_onLoad_loopCount = window.obj5189_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj5189_onLoad_loopCount > loopCount) {
		window.obj5189_onLoad_loopCount = 0
		obj5189_onLoad_actionGroup3();
	} else {
		obj5189_onLoad_actionGroup0();
	}

}


























};
obj5189_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5189_onLoad_activeActionGroupIndex = -1;
		$("#obj5189").trigger("obj5189_onLoad_ended");
		
		return;
	}
	window.obj5189_onLoad_activeActionGroupIndex = 3;
	










































};
obj5153_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5153_onLoad_activeActionGroupIndex = -1;
		$("#obj5153").trigger("obj5153_onLoad_ended");
		
		return;
	}
	window.obj5153_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj5153 
move_5156();
function move_5156() {
	window.obj5153_onLoad_runningActionsCount = obj5153_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj5153");
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
			window.obj5153_onLoad_runningActionsCount = window.obj5153_onLoad_runningActionsCount - 1;

if (window.obj5153_onLoad_runningActionsCount == 0) {
	obj5153_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj5153_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5153_onLoad_activeActionGroupIndex = -1;
		$("#obj5153").trigger("obj5153_onLoad_ended");
		
		return;
	}
	window.obj5153_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj5153 
move_5157();
function move_5157() {
	window.obj5153_onLoad_runningActionsCount = obj5153_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj5153");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = -24;
	var moveY = 423;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 800, easing, function() {
		setTimeout(function() {
			window.obj5153_onLoad_runningActionsCount = window.obj5153_onLoad_runningActionsCount - 1;

if (window.obj5153_onLoad_runningActionsCount == 0) {
	obj5153_onLoad_actionGroup2();
}
		}, 1);
	});
}






































};
obj5153_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5153_onLoad_activeActionGroupIndex = -1;
		$("#obj5153").trigger("obj5153_onLoad_ended");
		
		return;
	}
	window.obj5153_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj5153_onLoad();
function loop_obj5153_onLoad() {

	var loopCount = 0;

	window.obj5153_onLoad_loopCount = window.obj5153_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj5153_onLoad_loopCount > loopCount) {
		window.obj5153_onLoad_loopCount = 0
		obj5153_onLoad_actionGroup3();
	} else {
		obj5153_onLoad_actionGroup0();
	}

}


























};
obj5153_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5153_onLoad_activeActionGroupIndex = -1;
		$("#obj5153").trigger("obj5153_onLoad_ended");
		
		return;
	}
	window.obj5153_onLoad_activeActionGroupIndex = 3;
	










































};
obj5340_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5340_onLoad_activeActionGroupIndex = -1;
		$("#obj5340").trigger("obj5340_onLoad_ended");
		
		return;
	}
	window.obj5340_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj5340 
move_5347();
function move_5347() {
	window.obj5340_onLoad_runningActionsCount = obj5340_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj5340");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=40";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj5340_onLoad_runningActionsCount = window.obj5340_onLoad_runningActionsCount - 1;

if (window.obj5340_onLoad_runningActionsCount == 0) {
	obj5340_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj5340_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5340_onLoad_activeActionGroupIndex = -1;
		$("#obj5340").trigger("obj5340_onLoad_ended");
		
		return;
	}
	window.obj5340_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj5340 
move_5348();
function move_5348() {
	window.obj5340_onLoad_runningActionsCount = obj5340_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj5340");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 959;
	var moveY = 636;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj5340_onLoad_runningActionsCount = window.obj5340_onLoad_runningActionsCount - 1;

if (window.obj5340_onLoad_runningActionsCount == 0) {
	obj5340_onLoad_actionGroup2();
}
		}, 1);
	});
}






































};
obj5340_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5340_onLoad_activeActionGroupIndex = -1;
		$("#obj5340").trigger("obj5340_onLoad_ended");
		
		return;
	}
	window.obj5340_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj5340_onLoad();
function loop_obj5340_onLoad() {

	var loopCount = 0;

	window.obj5340_onLoad_loopCount = window.obj5340_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj5340_onLoad_loopCount > loopCount) {
		window.obj5340_onLoad_loopCount = 0
		obj5340_onLoad_actionGroup3();
	} else {
		obj5340_onLoad_actionGroup0();
	}

}


























};
obj5340_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5340_onLoad_activeActionGroupIndex = -1;
		$("#obj5340").trigger("obj5340_onLoad_ended");
		
		return;
	}
	window.obj5340_onLoad_activeActionGroupIndex = 3;
	










































};
obj5343_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5343_onLoad_activeActionGroupIndex = -1;
		$("#obj5343").trigger("obj5343_onLoad_ended");
		
		return;
	}
	window.obj5343_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj5343 
move_5351();
function move_5351() {
	window.obj5343_onLoad_runningActionsCount = obj5343_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj5343");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=40";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 900, easing, function() {
		setTimeout(function() {
			window.obj5343_onLoad_runningActionsCount = window.obj5343_onLoad_runningActionsCount - 1;

if (window.obj5343_onLoad_runningActionsCount == 0) {
	obj5343_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj5343_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5343_onLoad_activeActionGroupIndex = -1;
		$("#obj5343").trigger("obj5343_onLoad_ended");
		
		return;
	}
	window.obj5343_onLoad_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj5343 
move_5352();
function move_5352() {
	window.obj5343_onLoad_runningActionsCount = obj5343_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj5343");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 88;
	var moveY = 72;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 900, easing, function() {
		setTimeout(function() {
			window.obj5343_onLoad_runningActionsCount = window.obj5343_onLoad_runningActionsCount - 1;

if (window.obj5343_onLoad_runningActionsCount == 0) {
	obj5343_onLoad_actionGroup2();
}
		}, 1);
	});
}






































};
obj5343_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5343_onLoad_activeActionGroupIndex = -1;
		$("#obj5343").trigger("obj5343_onLoad_ended");
		
		return;
	}
	window.obj5343_onLoad_activeActionGroupIndex = 2;
	















//	action: loop
loop_obj5343_onLoad();
function loop_obj5343_onLoad() {

	var loopCount = 0;

	window.obj5343_onLoad_loopCount = window.obj5343_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj5343_onLoad_loopCount > loopCount) {
		window.obj5343_onLoad_loopCount = 0
		obj5343_onLoad_actionGroup3();
	} else {
		obj5343_onLoad_actionGroup0();
	}

}


























};
obj5343_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5343_onLoad_activeActionGroupIndex = -1;
		$("#obj5343").trigger("obj5343_onLoad_ended");
		
		return;
	}
	window.obj5343_onLoad_activeActionGroupIndex = 3;
	










































};
obj5354_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5354_onLoad_activeActionGroupIndex = -1;
		$("#obj5354").trigger("obj5354_onLoad_ended");
		
		return;
	}
	window.obj5354_onLoad_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj5354 
move_5357();
function move_5357() {
	window.obj5354_onLoad_runningActionsCount = obj5354_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj5354");
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
			window.obj5354_onLoad_runningActionsCount = window.obj5354_onLoad_runningActionsCount - 1;

if (window.obj5354_onLoad_runningActionsCount == 0) {
	obj5354_onLoad_actionGroup1();
}
		}, 1);
	});
}






































};
obj5354_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5354_onLoad_activeActionGroupIndex = -1;
		$("#obj5354").trigger("obj5354_onLoad_ended");
		
		return;
	}
	window.obj5354_onLoad_activeActionGroupIndex = 1;
	
















//	action: wait
wait_5358();
function wait_5358() {
	window.obj5354_onLoad_runningActionsCount = obj5354_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj5354_onLoad_runningActionsCount = window.obj5354_onLoad_runningActionsCount - 1;

if (window.obj5354_onLoad_runningActionsCount == 0) {
	obj5354_onLoad_actionGroup2();
}
	}, 200);
}

























};
obj5354_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5354_onLoad_activeActionGroupIndex = -1;
		$("#obj5354").trigger("obj5354_onLoad_ended");
		
		return;
	}
	window.obj5354_onLoad_activeActionGroupIndex = 2;
	



//	action: move
//	target: obj5354 
move_5359();
function move_5359() {
	window.obj5354_onLoad_runningActionsCount = obj5354_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj5354");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1030;
	var moveY = 92;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 700, easing, function() {
		setTimeout(function() {
			window.obj5354_onLoad_runningActionsCount = window.obj5354_onLoad_runningActionsCount - 1;

if (window.obj5354_onLoad_runningActionsCount == 0) {
	obj5354_onLoad_actionGroup3();
}
		}, 1);
	});
}






































};
obj5354_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5354_onLoad_activeActionGroupIndex = -1;
		$("#obj5354").trigger("obj5354_onLoad_ended");
		
		return;
	}
	window.obj5354_onLoad_activeActionGroupIndex = 3;
	















//	action: loop
loop_obj5354_onLoad();
function loop_obj5354_onLoad() {

	var loopCount = 0;

	window.obj5354_onLoad_loopCount = window.obj5354_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj5354_onLoad_loopCount > loopCount) {
		window.obj5354_onLoad_loopCount = 0
		obj5354_onLoad_actionGroup4();
	} else {
		obj5354_onLoad_actionGroup0();
	}

}


























};
obj5354_onLoad_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5354_onLoad_activeActionGroupIndex = -1;
		$("#obj5354").trigger("obj5354_onLoad_ended");
		
		return;
	}
	window.obj5354_onLoad_activeActionGroupIndex = 4;
	
















//	action: wait
wait_5361();
function wait_5361() {
	window.obj5354_onLoad_runningActionsCount = obj5354_onLoad_runningActionsCount + 1;

	setTimeout(function() {
		window.obj5354_onLoad_runningActionsCount = window.obj5354_onLoad_runningActionsCount - 1;

if (window.obj5354_onLoad_runningActionsCount == 0) {
	obj5354_onLoad_actionGroup5();
}
	}, 200);
}

























};
obj5354_onLoad_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5354_onLoad_activeActionGroupIndex = -1;
		$("#obj5354").trigger("obj5354_onLoad_ended");
		
		return;
	}
	window.obj5354_onLoad_activeActionGroupIndex = 5;
	










































};
obj5373_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5373_onTap_activeActionGroupIndex = -1;
		$("#obj5373").trigger("obj5373_onTap_ended");
		
		return;
	}
	window.obj5373_onTap_activeActionGroupIndex = 0;
	
























//	action: playAudio
//	target: obj5415 
playAudio_5557();
function playAudio_5557() {
	window.obj5373_onTap_runningActionsCount = obj5373_onTap_runningActionsCount + 1;

	var myAudio = $("#obj5415")[0];
	var playFromBeginning = false;
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
		    window.obj5373_onTap_runningActionsCount = window.obj5373_onTap_runningActionsCount - 1;

if (window.obj5373_onTap_runningActionsCount == 0) {
	obj5373_onTap_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj5373_onTap_runningActionsCount = window.obj5373_onTap_runningActionsCount - 1;

if (window.obj5373_onTap_runningActionsCount == 0) {
	obj5373_onTap_actionGroup1();
}
	}
}

















};
obj5373_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5373_onTap_activeActionGroupIndex = -1;
		$("#obj5373").trigger("obj5373_onTap_ended");
		
		return;
	}
	window.obj5373_onTap_activeActionGroupIndex = 1;
	










































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		










































































































































































































































/*
 *
 *   obj5233: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj5233_onLoad_activeActionGroupIndex != -1) return;
var obj5233_onLoad_runningActionsCount = 0;
var obj5233_onLoad_loopCount = 0;
obj5233_onLoad_actionGroup0();
});














/*
 *
 *   obj5244: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj5244_onLoad_activeActionGroupIndex != -1) return;
var obj5244_onLoad_runningActionsCount = 0;
var obj5244_onLoad_loopCount = 0;
obj5244_onLoad_actionGroup0();
});














/*
 *
 *   obj5326: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj5326_onLoad_activeActionGroupIndex != -1) return;
var obj5326_onLoad_runningActionsCount = 0;
var obj5326_onLoad_loopCount = 0;
obj5326_onLoad_actionGroup0();
});














/*
 *
 *   obj5277: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj5277_onLoad_activeActionGroupIndex != -1) return;
var obj5277_onLoad_runningActionsCount = 0;
var obj5277_onLoad_loopCount = 0;
obj5277_onLoad_actionGroup0();
});














/*
 *
 *   obj5255: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj5255_onLoad_activeActionGroupIndex != -1) return;
var obj5255_onLoad_runningActionsCount = 0;
var obj5255_onLoad_loopCount = 0;
obj5255_onLoad_actionGroup0();
});














/*
 *
 *   obj5266: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj5266_onLoad_activeActionGroupIndex != -1) return;
var obj5266_onLoad_runningActionsCount = 0;
var obj5266_onLoad_loopCount = 0;
obj5266_onLoad_actionGroup0();
});














/*
 *
 *   obj5299: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj5299_onLoad_activeActionGroupIndex != -1) return;
var obj5299_onLoad_runningActionsCount = 0;
var obj5299_onLoad_loopCount = 0;
obj5299_onLoad_actionGroup0();
});














/*
 *
 *   obj5189: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj5189_onLoad_activeActionGroupIndex != -1) return;
var obj5189_onLoad_runningActionsCount = 0;
var obj5189_onLoad_loopCount = 0;
obj5189_onLoad_actionGroup0();
});














/*
 *
 *   obj5153: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj5153_onLoad_activeActionGroupIndex != -1) return;
var obj5153_onLoad_runningActionsCount = 0;
var obj5153_onLoad_loopCount = 0;
obj5153_onLoad_actionGroup0();
});














/*
 *
 *   obj5340: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj5340_onLoad_activeActionGroupIndex != -1) return;
var obj5340_onLoad_runningActionsCount = 0;
var obj5340_onLoad_loopCount = 0;
obj5340_onLoad_actionGroup0();
});














/*
 *
 *   obj5343: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj5343_onLoad_activeActionGroupIndex != -1) return;
var obj5343_onLoad_runningActionsCount = 0;
var obj5343_onLoad_loopCount = 0;
obj5343_onLoad_actionGroup0();
});














/*
 *
 *   obj5354: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj5354_onLoad_activeActionGroupIndex != -1) return;
var obj5354_onLoad_runningActionsCount = 0;
var obj5354_onLoad_loopCount = 0;
obj5354_onLoad_actionGroup0();
});























































/*
 *
 *   obj5373: Event Touch Down
 *
 */

$("#obj5373").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5373_onTap_activeActionGroupIndex != -1) return;
var obj5373_onTap_runningActionsCount = 0;
var obj5373_onTap_loopCount = 0;
obj5373_onTap_actionGroup0();
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
	
$("#obj5151").trigger('SCEventShow');
$("#obj5161").trigger('SCEventShow');
$("#obj5163").trigger('SCEventShow');
$("#obj5165").trigger('SCEventShow');
$("#obj5171").trigger('SCEventShow');
$("#obj5169").trigger('SCEventShow');
$("#obj5167").trigger('SCEventShow');
$("#obj5177").trigger('SCEventShow');
$("#obj5175").trigger('SCEventShow');
$("#obj5173").trigger('SCEventShow');
$("#obj5183").trigger('SCEventShow');
$("#obj5181").trigger('SCEventShow');
$("#obj5179").trigger('SCEventShow');
$("#obj5185").trigger('SCEventShow');
$("#obj5187").trigger('SCEventShow');
$("#obj5233").trigger('SCEventShow');
$("#obj5244").trigger('SCEventShow');
$("#obj5326").trigger('SCEventShow');
$("#obj5277").trigger('SCEventShow');
$("#obj5255").trigger('SCEventShow');
$("#obj5266").trigger('SCEventShow');
$("#obj5299").trigger('SCEventShow');
$("#obj5189").trigger('SCEventShow');
$("#obj5153").trigger('SCEventShow');
$("#obj5340").trigger('SCEventShow');
$("#obj5343").trigger('SCEventShow');
$("#obj5354").trigger('SCEventShow');
$("#obj5364").trigger('SCEventShow');
$("#obj5362").trigger('SCEventShow');
$("#obj5366").trigger('SCEventShow');
$("#obj5373").trigger('SCEventShow');
$("#obj5415").trigger('SCEventShow');
	localStorage.setItem('tapped','0');
localStorage.setItem('ready','true');

});