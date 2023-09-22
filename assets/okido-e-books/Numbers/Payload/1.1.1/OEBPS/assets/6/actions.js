pubcoder.projectID = pubcoder.projectID || "D928F63EC5FACE4D86169F491C787A52";
pubcoder.project.id = pubcoder.project.id || "D928F63EC5FACE4D86169F491C787A52";
pubcoder.project.title = pubcoder.project.title || "OkidoNumbers";
pubcoder.page.id = pubcoder.page.id || 8;
pubcoder.page.title = pubcoder.page.title || "6";
pubcoder.page.number = pubcoder.page.number || 6;
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
var obj164_onTap_activeActionGroupIndex = -1;
var obj164_onTap_runningActionsCount = 0;
var obj164_onTap_loopCount = 0;
var obj164_onLoad_activeActionGroupIndex = -1;
var obj164_onLoad_runningActionsCount = 0;
var obj164_onLoad_loopCount = 0;
var obj169_onTap_activeActionGroupIndex = -1;
var obj169_onTap_runningActionsCount = 0;
var obj169_onTap_loopCount = 0;
var obj171_onTap_activeActionGroupIndex = -1;
var obj171_onTap_runningActionsCount = 0;
var obj171_onTap_loopCount = 0;
var obj167_onLoad_activeActionGroupIndex = -1;
var obj167_onLoad_runningActionsCount = 0;
var obj167_onLoad_loopCount = 0;
var obj1080_SCEventRun_activeActionGroupIndex = -1;
var obj1080_SCEventRun_runningActionsCount = 0;
var obj1080_SCEventRun_loopCount = 0;
var obj1120_SCEventRun_activeActionGroupIndex = -1;
var obj1120_SCEventRun_runningActionsCount = 0;
var obj1120_SCEventRun_loopCount = 0;
var obj1133_SCEventRun_activeActionGroupIndex = -1;
var obj1133_SCEventRun_runningActionsCount = 0;
var obj1133_SCEventRun_loopCount = 0;
var obj1002_onDrag_activeActionGroupIndex = -1;
var obj1002_onDrag_runningActionsCount = 0;
var obj1002_onDrag_loopCount = 0;
var obj1002_onTouchDown_activeActionGroupIndex = -1;
var obj1002_onTouchDown_runningActionsCount = 0;
var obj1002_onTouchDown_loopCount = 0;
var obj1002_SCActionDragDrop1041_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1002_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1002_SCActionDragDrop1041_droppedOutsideTargetActions_loopCount = 0;
var obj1002_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj1002_droppedInsideTargetActions_runningActionsCount = 0;
var obj1002_droppedInsideTargetActions_loopCount = 0;
var obj1004_onDrag_activeActionGroupIndex = -1;
var obj1004_onDrag_runningActionsCount = 0;
var obj1004_onDrag_loopCount = 0;
var obj1004_onTouchDown_activeActionGroupIndex = -1;
var obj1004_onTouchDown_runningActionsCount = 0;
var obj1004_onTouchDown_loopCount = 0;
var obj1004_SCActionDragDrop1041_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1004_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1004_SCActionDragDrop1041_droppedOutsideTargetActions_loopCount = 0;
var obj1005_onDrag_activeActionGroupIndex = -1;
var obj1005_onDrag_runningActionsCount = 0;
var obj1005_onDrag_loopCount = 0;
var obj1005_onTouchDown_activeActionGroupIndex = -1;
var obj1005_onTouchDown_runningActionsCount = 0;
var obj1005_onTouchDown_loopCount = 0;
var obj1005_SCActionDragDrop1041_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1005_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1005_SCActionDragDrop1041_droppedOutsideTargetActions_loopCount = 0;
var obj1003_onDrag_activeActionGroupIndex = -1;
var obj1003_onDrag_runningActionsCount = 0;
var obj1003_onDrag_loopCount = 0;
var obj1003_onTouchDown_activeActionGroupIndex = -1;
var obj1003_onTouchDown_runningActionsCount = 0;
var obj1003_onTouchDown_loopCount = 0;
var obj1003_SCActionDragDrop1041_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1003_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1003_SCActionDragDrop1041_droppedOutsideTargetActions_loopCount = 0;
var obj1003_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj1003_droppedInsideTargetActions_runningActionsCount = 0;
var obj1003_droppedInsideTargetActions_loopCount = 0;
var obj1170_SCEventRun_activeActionGroupIndex = -1;
var obj1170_SCEventRun_runningActionsCount = 0;
var obj1170_SCEventRun_loopCount = 0;
var obj1371_onLoad_activeActionGroupIndex = -1;
var obj1371_onLoad_runningActionsCount = 0;
var obj1371_onLoad_loopCount = 0;

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
		
obj164_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj164_onTap_activeActionGroupIndex = -1;
		$("#obj164").trigger("obj164_onTap_ended");
		
		return;
	}
	window.obj164_onTap_activeActionGroupIndex = 0;
	





























//	action: Run JavaScript
runjs_1039();
function runjs_1039() {
	window.obj164_onTap_runningActionsCount = obj164_onTap_runningActionsCount + 1;


	if(localStorage.getItem("tapped") === "0" && localStorage.getItem("ready") === "true")
{
    localStorage.setItem("tapped", "1");
    //show first half of speech bub
    $("#obj1080").trigger(PubCoder.Events.Run);
}
else if(localStorage.getItem("tapped") === "4" && localStorage.getItem("ready") === "true")
{
    localStorage.setItem("tapped", "5");
    //show messys speech
    $("#obj1133").trigger(PubCoder.Events.Run);
}

	setTimeout(function() {
		window.obj164_onTap_runningActionsCount = window.obj164_onTap_runningActionsCount - 1;

if (window.obj164_onTap_runningActionsCount == 0) {
	obj164_onTap_actionGroup1();
}
	}, 1);
}












};
obj164_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj164_onTap_activeActionGroupIndex = -1;
		$("#obj164").trigger("obj164_onTap_ended");
		
		return;
	}
	window.obj164_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_1188();
function wait_1188() {
	window.obj164_onTap_runningActionsCount = obj164_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj164_onTap_runningActionsCount = window.obj164_onTap_runningActionsCount - 1;

if (window.obj164_onTap_runningActionsCount == 0) {
	obj164_onTap_actionGroup2();
}
	}, 5000);
}

























};
obj164_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj164_onTap_activeActionGroupIndex = -1;
		$("#obj164").trigger("obj164_onTap_ended");
		
		return;
	}
	window.obj164_onTap_activeActionGroupIndex = 2;
	





























//	action: Run JavaScript
runjs_1189();
function runjs_1189() {
	window.obj164_onTap_runningActionsCount = obj164_onTap_runningActionsCount + 1;


	if(localStorage.getItem("finger") === "true")
{
    //run finger list
    $("#obj1172").fadeIn(1000);
    $("#obj1170").trigger(PubCoder.Events.Run);
}

	setTimeout(function() {
		window.obj164_onTap_runningActionsCount = window.obj164_onTap_runningActionsCount - 1;

if (window.obj164_onTap_runningActionsCount == 0) {
	obj164_onTap_actionGroup3();
}
	}, 1);
}












};
obj164_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj164_onTap_activeActionGroupIndex = -1;
		$("#obj164").trigger("obj164_onTap_ended");
		
		return;
	}
	window.obj164_onTap_activeActionGroupIndex = 3;
	










































};
obj164_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj164_onLoad_activeActionGroupIndex = -1;
		$("#obj164").trigger("obj164_onLoad_ended");
		
		return;
	}
	window.obj164_onLoad_activeActionGroupIndex = 0;
	


//	action: show 
//	target: obj1014 
(function(){
	window.obj164_onLoad_runningActionsCount = obj164_onLoad_runningActionsCount + 1;


	var element = "#obj1014";
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
				window.obj164_onLoad_runningActionsCount = window.obj164_onLoad_runningActionsCount - 1;

if (window.obj164_onLoad_runningActionsCount == 0) {
	obj164_onLoad_actionGroup1();
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
			window.obj164_onLoad_runningActionsCount = window.obj164_onLoad_runningActionsCount - 1;

if (window.obj164_onLoad_runningActionsCount == 0) {
	obj164_onLoad_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj1012 
(function(){
	window.obj164_onLoad_runningActionsCount = obj164_onLoad_runningActionsCount + 1;


	var element = "#obj1012";
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
				window.obj164_onLoad_runningActionsCount = window.obj164_onLoad_runningActionsCount - 1;

if (window.obj164_onLoad_runningActionsCount == 0) {
	obj164_onLoad_actionGroup1();
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
			window.obj164_onLoad_runningActionsCount = window.obj164_onLoad_runningActionsCount - 1;

if (window.obj164_onLoad_runningActionsCount == 0) {
	obj164_onLoad_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj1010 
(function(){
	window.obj164_onLoad_runningActionsCount = obj164_onLoad_runningActionsCount + 1;


	var element = "#obj1010";
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
				window.obj164_onLoad_runningActionsCount = window.obj164_onLoad_runningActionsCount - 1;

if (window.obj164_onLoad_runningActionsCount == 0) {
	obj164_onLoad_actionGroup1();
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
			window.obj164_onLoad_runningActionsCount = window.obj164_onLoad_runningActionsCount - 1;

if (window.obj164_onLoad_runningActionsCount == 0) {
	obj164_onLoad_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj1035 
(function(){
	window.obj164_onLoad_runningActionsCount = obj164_onLoad_runningActionsCount + 1;


	var element = "#obj1035";
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
				window.obj164_onLoad_runningActionsCount = window.obj164_onLoad_runningActionsCount - 1;

if (window.obj164_onLoad_runningActionsCount == 0) {
	obj164_onLoad_actionGroup1();
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
			window.obj164_onLoad_runningActionsCount = window.obj164_onLoad_runningActionsCount - 1;

if (window.obj164_onLoad_runningActionsCount == 0) {
	obj164_onLoad_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj1033 
(function(){
	window.obj164_onLoad_runningActionsCount = obj164_onLoad_runningActionsCount + 1;


	var element = "#obj1033";
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
				window.obj164_onLoad_runningActionsCount = window.obj164_onLoad_runningActionsCount - 1;

if (window.obj164_onLoad_runningActionsCount == 0) {
	obj164_onLoad_actionGroup1();
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
			window.obj164_onLoad_runningActionsCount = window.obj164_onLoad_runningActionsCount - 1;

if (window.obj164_onLoad_runningActionsCount == 0) {
	obj164_onLoad_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: move
//	target: obj169 
move_1112();
function move_1112() {
	window.obj164_onLoad_runningActionsCount = obj164_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj169");
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
			window.obj164_onLoad_runningActionsCount = window.obj164_onLoad_runningActionsCount - 1;

if (window.obj164_onLoad_runningActionsCount == 0) {
	obj164_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj169 
move_1113();
function move_1113() {
	window.obj164_onLoad_runningActionsCount = obj164_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj169");
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
			window.obj164_onLoad_runningActionsCount = window.obj164_onLoad_runningActionsCount - 1;

if (window.obj164_onLoad_runningActionsCount == 0) {
	obj164_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj169 
move_1114();
function move_1114() {
	window.obj164_onLoad_runningActionsCount = obj164_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj169");
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
			window.obj164_onLoad_runningActionsCount = window.obj164_onLoad_runningActionsCount - 1;

if (window.obj164_onLoad_runningActionsCount == 0) {
	obj164_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj169 
move_1115();
function move_1115() {
	window.obj164_onLoad_runningActionsCount = obj164_onLoad_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj169");
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
			window.obj164_onLoad_runningActionsCount = window.obj164_onLoad_runningActionsCount - 1;

if (window.obj164_onLoad_runningActionsCount == 0) {
	obj164_onLoad_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1405();
function playAudioFile_1405() {
	window.obj164_onLoad_runningActionsCount = obj164_onLoad_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1405")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1405");
			$("#obj_audio_playSoundFile1405").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj164_onLoad_runningActionsCount = window.obj164_onLoad_runningActionsCount - 1;

if (window.obj164_onLoad_runningActionsCount == 0) {
	obj164_onLoad_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj164_onLoad_runningActionsCount = window.obj164_onLoad_runningActionsCount - 1;

if (window.obj164_onLoad_runningActionsCount == 0) {
	obj164_onLoad_actionGroup1();
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
				window.obj164_onLoad_runningActionsCount = window.obj164_onLoad_runningActionsCount - 1;

if (window.obj164_onLoad_runningActionsCount == 0) {
	obj164_onLoad_actionGroup1();
}
			}, false);
		} else {
			window.obj164_onLoad_runningActionsCount = window.obj164_onLoad_runningActionsCount - 1;

if (window.obj164_onLoad_runningActionsCount == 0) {
	obj164_onLoad_actionGroup1();
}
		}
	}

	
	
	
}






//	action: playAudioFile
playAudioFile_1288();
function playAudioFile_1288() {
	window.obj164_onLoad_runningActionsCount = obj164_onLoad_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1288")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1288");
			$("#obj_audio_playSoundFile1288").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj164_onLoad_runningActionsCount = window.obj164_onLoad_runningActionsCount - 1;

if (window.obj164_onLoad_runningActionsCount == 0) {
	obj164_onLoad_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj164_onLoad_runningActionsCount = window.obj164_onLoad_runningActionsCount - 1;

if (window.obj164_onLoad_runningActionsCount == 0) {
	obj164_onLoad_actionGroup1();
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
				window.obj164_onLoad_runningActionsCount = window.obj164_onLoad_runningActionsCount - 1;

if (window.obj164_onLoad_runningActionsCount == 0) {
	obj164_onLoad_actionGroup1();
}
			}, false);
		} else {
			window.obj164_onLoad_runningActionsCount = window.obj164_onLoad_runningActionsCount - 1;

if (window.obj164_onLoad_runningActionsCount == 0) {
	obj164_onLoad_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_1318();
function runjs_1318() {
	window.obj164_onLoad_runningActionsCount = obj164_onLoad_runningActionsCount + 1;


	localStorage.setItem("ready", "false");

	setTimeout(function() {
		window.obj164_onLoad_runningActionsCount = window.obj164_onLoad_runningActionsCount - 1;

if (window.obj164_onLoad_runningActionsCount == 0) {
	obj164_onLoad_actionGroup1();
}
	}, 1);
}












};
obj164_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj164_onLoad_activeActionGroupIndex = -1;
		$("#obj164").trigger("obj164_onLoad_ended");
		
		return;
	}
	window.obj164_onLoad_activeActionGroupIndex = 1;
	





























//	action: Run JavaScript
runjs_1287();
function runjs_1287() {
	window.obj164_onLoad_runningActionsCount = obj164_onLoad_runningActionsCount + 1;


	localStorage.setItem("ready", "true");

	setTimeout(function() {
		window.obj164_onLoad_runningActionsCount = window.obj164_onLoad_runningActionsCount - 1;

if (window.obj164_onLoad_runningActionsCount == 0) {
	obj164_onLoad_actionGroup2();
}
	}, 1);
}












};
obj164_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj164_onLoad_activeActionGroupIndex = -1;
		$("#obj164").trigger("obj164_onLoad_ended");
		
		return;
	}
	window.obj164_onLoad_activeActionGroupIndex = 2;
	










































};
obj169_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj169_onTap_activeActionGroupIndex = -1;
		$("#obj169").trigger("obj169_onTap_ended");
		
		return;
	}
	window.obj169_onTap_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj169 
move_1327();
function move_1327() {
	window.obj169_onTap_runningActionsCount = obj169_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj169");
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
			window.obj169_onTap_runningActionsCount = window.obj169_onTap_runningActionsCount - 1;

if (window.obj169_onTap_runningActionsCount == 0) {
	obj169_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj169 
move_1328();
function move_1328() {
	window.obj169_onTap_runningActionsCount = obj169_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj169");
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
			window.obj169_onTap_runningActionsCount = window.obj169_onTap_runningActionsCount - 1;

if (window.obj169_onTap_runningActionsCount == 0) {
	obj169_onTap_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1392();
function playAudioFile_1392() {
	window.obj169_onTap_runningActionsCount = obj169_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1392")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1392");
			$("#obj_audio_playSoundFile1392").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj169_onTap_runningActionsCount = window.obj169_onTap_runningActionsCount - 1;

if (window.obj169_onTap_runningActionsCount == 0) {
	obj169_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj169_onTap_runningActionsCount = window.obj169_onTap_runningActionsCount - 1;

if (window.obj169_onTap_runningActionsCount == 0) {
	obj169_onTap_actionGroup1();
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
				window.obj169_onTap_runningActionsCount = window.obj169_onTap_runningActionsCount - 1;

if (window.obj169_onTap_runningActionsCount == 0) {
	obj169_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj169_onTap_runningActionsCount = window.obj169_onTap_runningActionsCount - 1;

if (window.obj169_onTap_runningActionsCount == 0) {
	obj169_onTap_actionGroup1();
}
		}
	}

	
	
	
}




































};
obj169_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj169_onTap_activeActionGroupIndex = -1;
		$("#obj169").trigger("obj169_onTap_ended");
		
		return;
	}
	window.obj169_onTap_activeActionGroupIndex = 1;
	










































};
obj171_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj171_onTap_activeActionGroupIndex = -1;
		$("#obj171").trigger("obj171_onTap_ended");
		
		return;
	}
	window.obj171_onTap_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj171 
move_1329();
function move_1329() {
	window.obj171_onTap_runningActionsCount = obj171_onTap_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj171");
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
			window.obj171_onTap_runningActionsCount = window.obj171_onTap_runningActionsCount - 1;

if (window.obj171_onTap_runningActionsCount == 0) {
	obj171_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj171 
move_1330();
function move_1330() {
	window.obj171_onTap_runningActionsCount = obj171_onTap_runningActionsCount + 1;


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

	var targetObject = $("#obj171");
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
			window.obj171_onTap_runningActionsCount = window.obj171_onTap_runningActionsCount - 1;

if (window.obj171_onTap_runningActionsCount == 0) {
	obj171_onTap_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1393();
function playAudioFile_1393() {
	window.obj171_onTap_runningActionsCount = obj171_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1393")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1393");
			$("#obj_audio_playSoundFile1393").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj171_onTap_runningActionsCount = window.obj171_onTap_runningActionsCount - 1;

if (window.obj171_onTap_runningActionsCount == 0) {
	obj171_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj171_onTap_runningActionsCount = window.obj171_onTap_runningActionsCount - 1;

if (window.obj171_onTap_runningActionsCount == 0) {
	obj171_onTap_actionGroup1();
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
				window.obj171_onTap_runningActionsCount = window.obj171_onTap_runningActionsCount - 1;

if (window.obj171_onTap_runningActionsCount == 0) {
	obj171_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj171_onTap_runningActionsCount = window.obj171_onTap_runningActionsCount - 1;

if (window.obj171_onTap_runningActionsCount == 0) {
	obj171_onTap_actionGroup1();
}
		}
	}

	
	
	
}




































};
obj171_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj171_onTap_activeActionGroupIndex = -1;
		$("#obj171").trigger("obj171_onTap_ended");
		
		return;
	}
	window.obj171_onTap_activeActionGroupIndex = 1;
	










































};
obj167_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj167_onLoad_activeActionGroupIndex = -1;
		$("#obj167").trigger("obj167_onLoad_ended");
		
		return;
	}
	window.obj167_onLoad_activeActionGroupIndex = 0;
	





























//	action: Run JavaScript
runjs_1101();
function runjs_1101() {
	window.obj167_onLoad_runningActionsCount = obj167_onLoad_runningActionsCount + 1;


	if(localStorage.getItem("tapped") === "3")
{
    $("#obj1120").trigger(PubCoder.Events.Run);
    localStorage.setItem("tapped", "4");
}

	setTimeout(function() {
		window.obj167_onLoad_runningActionsCount = window.obj167_onLoad_runningActionsCount - 1;

if (window.obj167_onLoad_runningActionsCount == 0) {
	obj167_onLoad_actionGroup1();
}
	}, 1);
}












};
obj167_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj167_onLoad_activeActionGroupIndex = -1;
		$("#obj167").trigger("obj167_onLoad_ended");
		
		return;
	}
	window.obj167_onLoad_activeActionGroupIndex = 1;
	















//	action: loop
loop_obj167_onLoad();
function loop_obj167_onLoad() {

	var loopCount = 0;

	window.obj167_onLoad_loopCount = window.obj167_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj167_onLoad_loopCount > loopCount) {
		window.obj167_onLoad_loopCount = 0
		obj167_onLoad_actionGroup2();
	} else {
		obj167_onLoad_actionGroup0();
	}

}


























};
obj167_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj167_onLoad_activeActionGroupIndex = -1;
		$("#obj167").trigger("obj167_onLoad_ended");
		
		return;
	}
	window.obj167_onLoad_activeActionGroupIndex = 2;
	










































};
obj1080_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1080_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1080").trigger("obj1080_SCEventRun_ended");
		
		return;
	}
	window.obj1080_SCEventRun_activeActionGroupIndex = 0;
	


//	action: show 
//	target: obj1027 
(function(){
	window.obj1080_SCEventRun_runningActionsCount = obj1080_SCEventRun_runningActionsCount + 1;


	var element = "#obj1027";
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
				window.obj1080_SCEventRun_runningActionsCount = window.obj1080_SCEventRun_runningActionsCount - 1;

if (window.obj1080_SCEventRun_runningActionsCount == 0) {
	obj1080_SCEventRun_actionGroup1();
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
			window.obj1080_SCEventRun_runningActionsCount = window.obj1080_SCEventRun_runningActionsCount - 1;

if (window.obj1080_SCEventRun_runningActionsCount == 0) {
	obj1080_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj1018 
(function(){
	window.obj1080_SCEventRun_runningActionsCount = obj1080_SCEventRun_runningActionsCount + 1;


	var element = "#obj1018";
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
				window.obj1080_SCEventRun_runningActionsCount = window.obj1080_SCEventRun_runningActionsCount - 1;

if (window.obj1080_SCEventRun_runningActionsCount == 0) {
	obj1080_SCEventRun_actionGroup1();
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
			window.obj1080_SCEventRun_runningActionsCount = window.obj1080_SCEventRun_runningActionsCount - 1;

if (window.obj1080_SCEventRun_runningActionsCount == 0) {
	obj1080_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj1025 
(function(){
	window.obj1080_SCEventRun_runningActionsCount = obj1080_SCEventRun_runningActionsCount + 1;


	var element = "#obj1025";
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
				window.obj1080_SCEventRun_runningActionsCount = window.obj1080_SCEventRun_runningActionsCount - 1;

if (window.obj1080_SCEventRun_runningActionsCount == 0) {
	obj1080_SCEventRun_actionGroup1();
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
			window.obj1080_SCEventRun_runningActionsCount = window.obj1080_SCEventRun_runningActionsCount - 1;

if (window.obj1080_SCEventRun_runningActionsCount == 0) {
	obj1080_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: move
//	target: obj169 
move_1116();
function move_1116() {
	window.obj1080_SCEventRun_runningActionsCount = obj1080_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj169");
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
			window.obj1080_SCEventRun_runningActionsCount = window.obj1080_SCEventRun_runningActionsCount - 1;

if (window.obj1080_SCEventRun_runningActionsCount == 0) {
	obj1080_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj169 
move_1117();
function move_1117() {
	window.obj1080_SCEventRun_runningActionsCount = obj1080_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj169");
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
			window.obj1080_SCEventRun_runningActionsCount = window.obj1080_SCEventRun_runningActionsCount - 1;

if (window.obj1080_SCEventRun_runningActionsCount == 0) {
	obj1080_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj169 
move_1118();
function move_1118() {
	window.obj1080_SCEventRun_runningActionsCount = obj1080_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj169");
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
			window.obj1080_SCEventRun_runningActionsCount = window.obj1080_SCEventRun_runningActionsCount - 1;

if (window.obj1080_SCEventRun_runningActionsCount == 0) {
	obj1080_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj169 
move_1119();
function move_1119() {
	window.obj1080_SCEventRun_runningActionsCount = obj1080_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj169");
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
			window.obj1080_SCEventRun_runningActionsCount = window.obj1080_SCEventRun_runningActionsCount - 1;

if (window.obj1080_SCEventRun_runningActionsCount == 0) {
	obj1080_SCEventRun_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1407();
function playAudioFile_1407() {
	window.obj1080_SCEventRun_runningActionsCount = obj1080_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1407")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1407");
			$("#obj_audio_playSoundFile1407").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1080_SCEventRun_runningActionsCount = window.obj1080_SCEventRun_runningActionsCount - 1;

if (window.obj1080_SCEventRun_runningActionsCount == 0) {
	obj1080_SCEventRun_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1080_SCEventRun_runningActionsCount = window.obj1080_SCEventRun_runningActionsCount - 1;

if (window.obj1080_SCEventRun_runningActionsCount == 0) {
	obj1080_SCEventRun_actionGroup1();
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
				window.obj1080_SCEventRun_runningActionsCount = window.obj1080_SCEventRun_runningActionsCount - 1;

if (window.obj1080_SCEventRun_runningActionsCount == 0) {
	obj1080_SCEventRun_actionGroup1();
}
			}, false);
		} else {
			window.obj1080_SCEventRun_runningActionsCount = window.obj1080_SCEventRun_runningActionsCount - 1;

if (window.obj1080_SCEventRun_runningActionsCount == 0) {
	obj1080_SCEventRun_actionGroup1();
}
		}
	}

	
	
	
}






//	action: playAudioFile
playAudioFile_1301();
function playAudioFile_1301() {
	window.obj1080_SCEventRun_runningActionsCount = obj1080_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1301")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1301");
			$("#obj_audio_playSoundFile1301").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1080_SCEventRun_runningActionsCount = window.obj1080_SCEventRun_runningActionsCount - 1;

if (window.obj1080_SCEventRun_runningActionsCount == 0) {
	obj1080_SCEventRun_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1080_SCEventRun_runningActionsCount = window.obj1080_SCEventRun_runningActionsCount - 1;

if (window.obj1080_SCEventRun_runningActionsCount == 0) {
	obj1080_SCEventRun_actionGroup1();
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
				window.obj1080_SCEventRun_runningActionsCount = window.obj1080_SCEventRun_runningActionsCount - 1;

if (window.obj1080_SCEventRun_runningActionsCount == 0) {
	obj1080_SCEventRun_actionGroup1();
}
			}, false);
		} else {
			window.obj1080_SCEventRun_runningActionsCount = window.obj1080_SCEventRun_runningActionsCount - 1;

if (window.obj1080_SCEventRun_runningActionsCount == 0) {
	obj1080_SCEventRun_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_1300();
function runjs_1300() {
	window.obj1080_SCEventRun_runningActionsCount = obj1080_SCEventRun_runningActionsCount + 1;


	localStorage.setItem("ready", "false");

	setTimeout(function() {
		window.obj1080_SCEventRun_runningActionsCount = window.obj1080_SCEventRun_runningActionsCount - 1;

if (window.obj1080_SCEventRun_runningActionsCount == 0) {
	obj1080_SCEventRun_actionGroup1();
}
	}, 1);
}












};
obj1080_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1080_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1080").trigger("obj1080_SCEventRun_ended");
		
		return;
	}
	window.obj1080_SCEventRun_activeActionGroupIndex = 1;
	





























//	action: Run JavaScript
runjs_1302();
function runjs_1302() {
	window.obj1080_SCEventRun_runningActionsCount = obj1080_SCEventRun_runningActionsCount + 1;


	localStorage.setItem("ready", "true");

	setTimeout(function() {
		window.obj1080_SCEventRun_runningActionsCount = window.obj1080_SCEventRun_runningActionsCount - 1;

if (window.obj1080_SCEventRun_runningActionsCount == 0) {
	obj1080_SCEventRun_actionGroup2();
}
	}, 1);
}












};
obj1080_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1080_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1080").trigger("obj1080_SCEventRun_ended");
		
		return;
	}
	window.obj1080_SCEventRun_activeActionGroupIndex = 2;
	










































};
obj1120_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1120_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1120").trigger("obj1120_SCEventRun_ended");
		
		return;
	}
	window.obj1120_SCEventRun_activeActionGroupIndex = 0;
	


//	action: show 
//	target: obj1097 
(function(){
	window.obj1120_SCEventRun_runningActionsCount = obj1120_SCEventRun_runningActionsCount + 1;


	var element = "#obj1097";
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
				window.obj1120_SCEventRun_runningActionsCount = window.obj1120_SCEventRun_runningActionsCount - 1;

if (window.obj1120_SCEventRun_runningActionsCount == 0) {
	obj1120_SCEventRun_actionGroup1();
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
			window.obj1120_SCEventRun_runningActionsCount = window.obj1120_SCEventRun_runningActionsCount - 1;

if (window.obj1120_SCEventRun_runningActionsCount == 0) {
	obj1120_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj1016 
(function(){
	window.obj1120_SCEventRun_runningActionsCount = obj1120_SCEventRun_runningActionsCount + 1;


	var element = "#obj1016";
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
				window.obj1120_SCEventRun_runningActionsCount = window.obj1120_SCEventRun_runningActionsCount - 1;

if (window.obj1120_SCEventRun_runningActionsCount == 0) {
	obj1120_SCEventRun_actionGroup1();
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
			window.obj1120_SCEventRun_runningActionsCount = window.obj1120_SCEventRun_runningActionsCount - 1;

if (window.obj1120_SCEventRun_runningActionsCount == 0) {
	obj1120_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: move
//	target: obj169 
move_1125();
function move_1125() {
	window.obj1120_SCEventRun_runningActionsCount = obj1120_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj169");
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
			window.obj1120_SCEventRun_runningActionsCount = window.obj1120_SCEventRun_runningActionsCount - 1;

if (window.obj1120_SCEventRun_runningActionsCount == 0) {
	obj1120_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj169 
move_1126();
function move_1126() {
	window.obj1120_SCEventRun_runningActionsCount = obj1120_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj169");
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
			window.obj1120_SCEventRun_runningActionsCount = window.obj1120_SCEventRun_runningActionsCount - 1;

if (window.obj1120_SCEventRun_runningActionsCount == 0) {
	obj1120_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj169 
move_1127();
function move_1127() {
	window.obj1120_SCEventRun_runningActionsCount = obj1120_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj169");
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
			window.obj1120_SCEventRun_runningActionsCount = window.obj1120_SCEventRun_runningActionsCount - 1;

if (window.obj1120_SCEventRun_runningActionsCount == 0) {
	obj1120_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj169 
move_1128();
function move_1128() {
	window.obj1120_SCEventRun_runningActionsCount = obj1120_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj169");
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
			window.obj1120_SCEventRun_runningActionsCount = window.obj1120_SCEventRun_runningActionsCount - 1;

if (window.obj1120_SCEventRun_runningActionsCount == 0) {
	obj1120_SCEventRun_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1406();
function playAudioFile_1406() {
	window.obj1120_SCEventRun_runningActionsCount = obj1120_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1406")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1406");
			$("#obj_audio_playSoundFile1406").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1120_SCEventRun_runningActionsCount = window.obj1120_SCEventRun_runningActionsCount - 1;

if (window.obj1120_SCEventRun_runningActionsCount == 0) {
	obj1120_SCEventRun_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1120_SCEventRun_runningActionsCount = window.obj1120_SCEventRun_runningActionsCount - 1;

if (window.obj1120_SCEventRun_runningActionsCount == 0) {
	obj1120_SCEventRun_actionGroup1();
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
				window.obj1120_SCEventRun_runningActionsCount = window.obj1120_SCEventRun_runningActionsCount - 1;

if (window.obj1120_SCEventRun_runningActionsCount == 0) {
	obj1120_SCEventRun_actionGroup1();
}
			}, false);
		} else {
			window.obj1120_SCEventRun_runningActionsCount = window.obj1120_SCEventRun_runningActionsCount - 1;

if (window.obj1120_SCEventRun_runningActionsCount == 0) {
	obj1120_SCEventRun_actionGroup1();
}
		}
	}

	
	
	
}






//	action: playAudioFile
playAudioFile_1299();
function playAudioFile_1299() {
	window.obj1120_SCEventRun_runningActionsCount = obj1120_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1299")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1299");
			$("#obj_audio_playSoundFile1299").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1120_SCEventRun_runningActionsCount = window.obj1120_SCEventRun_runningActionsCount - 1;

if (window.obj1120_SCEventRun_runningActionsCount == 0) {
	obj1120_SCEventRun_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1120_SCEventRun_runningActionsCount = window.obj1120_SCEventRun_runningActionsCount - 1;

if (window.obj1120_SCEventRun_runningActionsCount == 0) {
	obj1120_SCEventRun_actionGroup1();
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
				window.obj1120_SCEventRun_runningActionsCount = window.obj1120_SCEventRun_runningActionsCount - 1;

if (window.obj1120_SCEventRun_runningActionsCount == 0) {
	obj1120_SCEventRun_actionGroup1();
}
			}, false);
		} else {
			window.obj1120_SCEventRun_runningActionsCount = window.obj1120_SCEventRun_runningActionsCount - 1;

if (window.obj1120_SCEventRun_runningActionsCount == 0) {
	obj1120_SCEventRun_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_1298();
function runjs_1298() {
	window.obj1120_SCEventRun_runningActionsCount = obj1120_SCEventRun_runningActionsCount + 1;


	localStorage.setItem("ready", "false");

	setTimeout(function() {
		window.obj1120_SCEventRun_runningActionsCount = window.obj1120_SCEventRun_runningActionsCount - 1;

if (window.obj1120_SCEventRun_runningActionsCount == 0) {
	obj1120_SCEventRun_actionGroup1();
}
	}, 1);
}












};
obj1120_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1120_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1120").trigger("obj1120_SCEventRun_ended");
		
		return;
	}
	window.obj1120_SCEventRun_activeActionGroupIndex = 1;
	





























//	action: Run JavaScript
runjs_1297();
function runjs_1297() {
	window.obj1120_SCEventRun_runningActionsCount = obj1120_SCEventRun_runningActionsCount + 1;


	localStorage.setItem("ready", "true");

	setTimeout(function() {
		window.obj1120_SCEventRun_runningActionsCount = window.obj1120_SCEventRun_runningActionsCount - 1;

if (window.obj1120_SCEventRun_runningActionsCount == 0) {
	obj1120_SCEventRun_actionGroup2();
}
	}, 1);
}












};
obj1120_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1120_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1120").trigger("obj1120_SCEventRun_ended");
		
		return;
	}
	window.obj1120_SCEventRun_activeActionGroupIndex = 2;
	










































};
obj1133_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1133_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1133").trigger("obj1133_SCEventRun_ended");
		
		return;
	}
	window.obj1133_SCEventRun_activeActionGroupIndex = 0;
	


//	action: show 
//	target: obj1135 
(function(){
	window.obj1133_SCEventRun_runningActionsCount = obj1133_SCEventRun_runningActionsCount + 1;


	var element = "#obj1135";
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
				window.obj1133_SCEventRun_runningActionsCount = window.obj1133_SCEventRun_runningActionsCount - 1;

if (window.obj1133_SCEventRun_runningActionsCount == 0) {
	obj1133_SCEventRun_actionGroup1();
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
			window.obj1133_SCEventRun_runningActionsCount = window.obj1133_SCEventRun_runningActionsCount - 1;

if (window.obj1133_SCEventRun_runningActionsCount == 0) {
	obj1133_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj1137 
(function(){
	window.obj1133_SCEventRun_runningActionsCount = obj1133_SCEventRun_runningActionsCount + 1;


	var element = "#obj1137";
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
				window.obj1133_SCEventRun_runningActionsCount = window.obj1133_SCEventRun_runningActionsCount - 1;

if (window.obj1133_SCEventRun_runningActionsCount == 0) {
	obj1133_SCEventRun_actionGroup1();
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
			window.obj1133_SCEventRun_runningActionsCount = window.obj1133_SCEventRun_runningActionsCount - 1;

if (window.obj1133_SCEventRun_runningActionsCount == 0) {
	obj1133_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj1139 
(function(){
	window.obj1133_SCEventRun_runningActionsCount = obj1133_SCEventRun_runningActionsCount + 1;


	var element = "#obj1139";
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
				window.obj1133_SCEventRun_runningActionsCount = window.obj1133_SCEventRun_runningActionsCount - 1;

if (window.obj1133_SCEventRun_runningActionsCount == 0) {
	obj1133_SCEventRun_actionGroup1();
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
			window.obj1133_SCEventRun_runningActionsCount = window.obj1133_SCEventRun_runningActionsCount - 1;

if (window.obj1133_SCEventRun_runningActionsCount == 0) {
	obj1133_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: move
//	target: obj171 
move_1144();
function move_1144() {
	window.obj1133_SCEventRun_runningActionsCount = obj1133_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj171");
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
			window.obj1133_SCEventRun_runningActionsCount = window.obj1133_SCEventRun_runningActionsCount - 1;

if (window.obj1133_SCEventRun_runningActionsCount == 0) {
	obj1133_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj171 
move_1145();
function move_1145() {
	window.obj1133_SCEventRun_runningActionsCount = obj1133_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj171");
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
			window.obj1133_SCEventRun_runningActionsCount = window.obj1133_SCEventRun_runningActionsCount - 1;

if (window.obj1133_SCEventRun_runningActionsCount == 0) {
	obj1133_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj171 
move_1146();
function move_1146() {
	window.obj1133_SCEventRun_runningActionsCount = obj1133_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj171");
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
			window.obj1133_SCEventRun_runningActionsCount = window.obj1133_SCEventRun_runningActionsCount - 1;

if (window.obj1133_SCEventRun_runningActionsCount == 0) {
	obj1133_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj171 
move_1147();
function move_1147() {
	window.obj1133_SCEventRun_runningActionsCount = obj1133_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj171");
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
			window.obj1133_SCEventRun_runningActionsCount = window.obj1133_SCEventRun_runningActionsCount - 1;

if (window.obj1133_SCEventRun_runningActionsCount == 0) {
	obj1133_SCEventRun_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1408();
function playAudioFile_1408() {
	window.obj1133_SCEventRun_runningActionsCount = obj1133_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1408")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1408");
			$("#obj_audio_playSoundFile1408").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1133_SCEventRun_runningActionsCount = window.obj1133_SCEventRun_runningActionsCount - 1;

if (window.obj1133_SCEventRun_runningActionsCount == 0) {
	obj1133_SCEventRun_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1133_SCEventRun_runningActionsCount = window.obj1133_SCEventRun_runningActionsCount - 1;

if (window.obj1133_SCEventRun_runningActionsCount == 0) {
	obj1133_SCEventRun_actionGroup1();
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
				window.obj1133_SCEventRun_runningActionsCount = window.obj1133_SCEventRun_runningActionsCount - 1;

if (window.obj1133_SCEventRun_runningActionsCount == 0) {
	obj1133_SCEventRun_actionGroup1();
}
			}, false);
		} else {
			window.obj1133_SCEventRun_runningActionsCount = window.obj1133_SCEventRun_runningActionsCount - 1;

if (window.obj1133_SCEventRun_runningActionsCount == 0) {
	obj1133_SCEventRun_actionGroup1();
}
		}
	}

	
	
	
}






//	action: playAudioFile
playAudioFile_1304();
function playAudioFile_1304() {
	window.obj1133_SCEventRun_runningActionsCount = obj1133_SCEventRun_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1304")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1304");
			$("#obj_audio_playSoundFile1304").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1133_SCEventRun_runningActionsCount = window.obj1133_SCEventRun_runningActionsCount - 1;

if (window.obj1133_SCEventRun_runningActionsCount == 0) {
	obj1133_SCEventRun_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1133_SCEventRun_runningActionsCount = window.obj1133_SCEventRun_runningActionsCount - 1;

if (window.obj1133_SCEventRun_runningActionsCount == 0) {
	obj1133_SCEventRun_actionGroup1();
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
				window.obj1133_SCEventRun_runningActionsCount = window.obj1133_SCEventRun_runningActionsCount - 1;

if (window.obj1133_SCEventRun_runningActionsCount == 0) {
	obj1133_SCEventRun_actionGroup1();
}
			}, false);
		} else {
			window.obj1133_SCEventRun_runningActionsCount = window.obj1133_SCEventRun_runningActionsCount - 1;

if (window.obj1133_SCEventRun_runningActionsCount == 0) {
	obj1133_SCEventRun_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_1303();
function runjs_1303() {
	window.obj1133_SCEventRun_runningActionsCount = obj1133_SCEventRun_runningActionsCount + 1;


	localStorage.setItem("ready", "false");

	setTimeout(function() {
		window.obj1133_SCEventRun_runningActionsCount = window.obj1133_SCEventRun_runningActionsCount - 1;

if (window.obj1133_SCEventRun_runningActionsCount == 0) {
	obj1133_SCEventRun_actionGroup1();
}
	}, 1);
}












};
obj1133_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1133_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1133").trigger("obj1133_SCEventRun_ended");
		
		return;
	}
	window.obj1133_SCEventRun_activeActionGroupIndex = 1;
	





























//	action: Run JavaScript
runjs_1305();
function runjs_1305() {
	window.obj1133_SCEventRun_runningActionsCount = obj1133_SCEventRun_runningActionsCount + 1;


	localStorage.setItem("ready", "true");

	setTimeout(function() {
		window.obj1133_SCEventRun_runningActionsCount = window.obj1133_SCEventRun_runningActionsCount - 1;

if (window.obj1133_SCEventRun_runningActionsCount == 0) {
	obj1133_SCEventRun_actionGroup2();
}
	}, 1);
}












};
obj1133_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1133_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1133").trigger("obj1133_SCEventRun_ended");
		
		return;
	}
	window.obj1133_SCEventRun_activeActionGroupIndex = 2;
	










































};
obj1002_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1002_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1002").trigger("obj1002_onTouchDown_ended");
		
		return;
	}
	window.obj1002_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj1002");

//	action: dragDrop
//	target: obj1002 
dragDrop_1041();
function dragDrop_1041() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj1002_onTouchDown_runningActionsCount = obj1002_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj1002');
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
    	window.obj1002_onTouchDown_runningActionsCount = window.obj1002_onTouchDown_runningActionsCount - 1;

if (window.obj1002_onTouchDown_runningActionsCount == 0) {
	obj1002_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj1018");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_1041 = false;
    	var dropped_id_1041;
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
					dropped_1041 = true;
					dropped_id_1041 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_1041) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj1002").trigger('SCActionDragDrop1041_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}






















};
obj1002_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1002_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1002").trigger("obj1002_onTouchDown_ended");
		
		return;
	}
	window.obj1002_onTouchDown_activeActionGroupIndex = 1;
	










































};
obj1002_SCActionDragDrop1041_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1002_SCActionDragDrop1041_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1002").trigger("obj1002_SCActionDragDrop1041_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1002_SCActionDragDrop1041_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj1002 
move_1043();
function move_1043() {
	window.obj1002_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount = obj1002_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1002");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 442;
	var moveY = 135;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj1002_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount = window.obj1002_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1002_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1002_SCActionDragDrop1041_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1436();
function playAudioFile_1436() {
	window.obj1002_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount = obj1002_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1436")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1436");
			$("#obj_audio_playSoundFile1436").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1002_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount = window.obj1002_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1002_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1002_SCActionDragDrop1041_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1002_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount = window.obj1002_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1002_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1002_SCActionDragDrop1041_droppedOutsideTargetActions_actionGroup1();
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
				window.obj1002_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount = window.obj1002_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1002_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1002_SCActionDragDrop1041_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj1002_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount = window.obj1002_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1002_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1002_SCActionDragDrop1041_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}




































};
obj1002_SCActionDragDrop1041_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1002_SCActionDragDrop1041_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1002").trigger("obj1002_SCActionDragDrop1041_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1002_SCActionDragDrop1041_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	










































};
obj1002_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1002_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1002").trigger("obj1002_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1002_droppedInsideTargetActions_activeActionGroupIndex = 0;
	


//	action: show 
//	target: obj1023 
(function(){
	window.obj1002_droppedInsideTargetActions_runningActionsCount = obj1002_droppedInsideTargetActions_runningActionsCount + 1;


	var element = "#obj1023";
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
				window.obj1002_droppedInsideTargetActions_runningActionsCount = window.obj1002_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1002_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1002_droppedInsideTargetActions_actionGroup1();
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
			window.obj1002_droppedInsideTargetActions_runningActionsCount = window.obj1002_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1002_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1002_droppedInsideTargetActions_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj1087 
(function(){
	window.obj1002_droppedInsideTargetActions_runningActionsCount = obj1002_droppedInsideTargetActions_runningActionsCount + 1;


	var element = "#obj1087";
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
				window.obj1002_droppedInsideTargetActions_runningActionsCount = window.obj1002_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1002_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1002_droppedInsideTargetActions_actionGroup1();
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
			window.obj1002_droppedInsideTargetActions_runningActionsCount = window.obj1002_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1002_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1002_droppedInsideTargetActions_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: move
//	target: obj1002 
move_1045();
function move_1045() {
	window.obj1002_droppedInsideTargetActions_runningActionsCount = obj1002_droppedInsideTargetActions_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1002");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 442;
	var moveY = 135;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj1002_droppedInsideTargetActions_runningActionsCount = window.obj1002_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1002_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1002_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1440();
function playAudioFile_1440() {
	window.obj1002_droppedInsideTargetActions_runningActionsCount = obj1002_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1440")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1440");
			$("#obj_audio_playSoundFile1440").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1002_droppedInsideTargetActions_runningActionsCount = window.obj1002_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1002_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1002_droppedInsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1002_droppedInsideTargetActions_runningActionsCount = window.obj1002_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1002_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1002_droppedInsideTargetActions_actionGroup1();
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
				window.obj1002_droppedInsideTargetActions_runningActionsCount = window.obj1002_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1002_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1002_droppedInsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj1002_droppedInsideTargetActions_runningActionsCount = window.obj1002_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1002_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1002_droppedInsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_1085();
function runjs_1085() {
	window.obj1002_droppedInsideTargetActions_runningActionsCount = obj1002_droppedInsideTargetActions_runningActionsCount + 1;


	var t = parseInt(localStorage.getItem("tapped")) + 1;
localStorage.setItem("tapped", t.toString());
localStorage.setItem("finger", "false");
$("#obj1172").fadeOut(1000);

	setTimeout(function() {
		window.obj1002_droppedInsideTargetActions_runningActionsCount = window.obj1002_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1002_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1002_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}












};
obj1002_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1002_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1002").trigger("obj1002_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1002_droppedInsideTargetActions_activeActionGroupIndex = 1;
	










































};
obj1004_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1004_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1004").trigger("obj1004_onTouchDown_ended");
		
		return;
	}
	window.obj1004_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj1004");

//	action: dragDrop
//	target: obj1004 
dragDrop_1071();
function dragDrop_1071() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj1004_onTouchDown_runningActionsCount = obj1004_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj1004');
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
    	window.obj1004_onTouchDown_runningActionsCount = window.obj1004_onTouchDown_runningActionsCount - 1;

if (window.obj1004_onTouchDown_runningActionsCount == 0) {
	obj1004_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array();
    	var actionsOnDrop = new Array() //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_1071 = false;
    	var dropped_id_1071;
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
					dropped_1071 = true;
					dropped_id_1071 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_1071) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			
$("#obj1004").trigger('SCActionDragDrop1041_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}






















};
obj1004_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1004_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1004").trigger("obj1004_onTouchDown_ended");
		
		return;
	}
	window.obj1004_onTouchDown_activeActionGroupIndex = 1;
	










































};
obj1004_SCActionDragDrop1041_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1004_SCActionDragDrop1041_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1004").trigger("obj1004_SCActionDragDrop1041_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1004_SCActionDragDrop1041_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj1004 
move_1075();
function move_1075() {
	window.obj1004_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount = obj1004_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1004");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 668;
	var moveY = 285;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj1004_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount = window.obj1004_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1004_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1004_SCActionDragDrop1041_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1439();
function playAudioFile_1439() {
	window.obj1004_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount = obj1004_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1439")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1439");
			$("#obj_audio_playSoundFile1439").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1004_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount = window.obj1004_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1004_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1004_SCActionDragDrop1041_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1004_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount = window.obj1004_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1004_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1004_SCActionDragDrop1041_droppedOutsideTargetActions_actionGroup1();
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
				window.obj1004_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount = window.obj1004_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1004_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1004_SCActionDragDrop1041_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj1004_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount = window.obj1004_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1004_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1004_SCActionDragDrop1041_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}




































};
obj1004_SCActionDragDrop1041_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1004_SCActionDragDrop1041_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1004").trigger("obj1004_SCActionDragDrop1041_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1004_SCActionDragDrop1041_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	










































};
obj1005_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1005_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1005").trigger("obj1005_onTouchDown_ended");
		
		return;
	}
	window.obj1005_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj1005");

//	action: dragDrop
//	target: obj1005 
dragDrop_1067();
function dragDrop_1067() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj1005_onTouchDown_runningActionsCount = obj1005_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj1005');
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
    	window.obj1005_onTouchDown_runningActionsCount = window.obj1005_onTouchDown_runningActionsCount - 1;

if (window.obj1005_onTouchDown_runningActionsCount == 0) {
	obj1005_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array();
    	var actionsOnDrop = new Array() //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_1067 = false;
    	var dropped_id_1067;
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
					dropped_1067 = true;
					dropped_id_1067 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_1067) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			
$("#obj1005").trigger('SCActionDragDrop1041_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}






















};
obj1005_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1005_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1005").trigger("obj1005_onTouchDown_ended");
		
		return;
	}
	window.obj1005_onTouchDown_activeActionGroupIndex = 1;
	










































};
obj1005_SCActionDragDrop1041_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1005_SCActionDragDrop1041_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1005").trigger("obj1005_SCActionDragDrop1041_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1005_SCActionDragDrop1041_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj1005 
move_1069();
function move_1069() {
	window.obj1005_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount = obj1005_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1005");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 439;
	var moveY = 286;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj1005_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount = window.obj1005_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1005_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1005_SCActionDragDrop1041_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1438();
function playAudioFile_1438() {
	window.obj1005_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount = obj1005_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1438")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1438");
			$("#obj_audio_playSoundFile1438").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1005_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount = window.obj1005_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1005_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1005_SCActionDragDrop1041_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1005_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount = window.obj1005_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1005_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1005_SCActionDragDrop1041_droppedOutsideTargetActions_actionGroup1();
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
				window.obj1005_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount = window.obj1005_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1005_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1005_SCActionDragDrop1041_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj1005_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount = window.obj1005_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1005_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1005_SCActionDragDrop1041_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}




































};
obj1005_SCActionDragDrop1041_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1005_SCActionDragDrop1041_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1005").trigger("obj1005_SCActionDragDrop1041_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1005_SCActionDragDrop1041_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	










































};
obj1003_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1003_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1003").trigger("obj1003_onTouchDown_ended");
		
		return;
	}
	window.obj1003_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj1003");

//	action: dragDrop
//	target: obj1003 
dragDrop_1047();
function dragDrop_1047() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj1003_onTouchDown_runningActionsCount = obj1003_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj1003');
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
    	window.obj1003_onTouchDown_runningActionsCount = window.obj1003_onTouchDown_runningActionsCount - 1;

if (window.obj1003_onTouchDown_runningActionsCount == 0) {
	obj1003_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj1018");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_1047 = false;
    	var dropped_id_1047;
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
					dropped_1047 = true;
					dropped_id_1047 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_1047) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj1003").trigger('SCActionDragDrop1041_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}






















};
obj1003_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1003_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1003").trigger("obj1003_onTouchDown_ended");
		
		return;
	}
	window.obj1003_onTouchDown_activeActionGroupIndex = 1;
	










































};
obj1003_SCActionDragDrop1041_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1003_SCActionDragDrop1041_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1003").trigger("obj1003_SCActionDragDrop1041_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1003_SCActionDragDrop1041_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj1003 
move_1051();
function move_1051() {
	window.obj1003_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount = obj1003_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1003");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 668;
	var moveY = 135;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj1003_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount = window.obj1003_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1003_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1003_SCActionDragDrop1041_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1437();
function playAudioFile_1437() {
	window.obj1003_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount = obj1003_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1437")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1437");
			$("#obj_audio_playSoundFile1437").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1003_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount = window.obj1003_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1003_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1003_SCActionDragDrop1041_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1003_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount = window.obj1003_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1003_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1003_SCActionDragDrop1041_droppedOutsideTargetActions_actionGroup1();
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
				window.obj1003_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount = window.obj1003_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1003_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1003_SCActionDragDrop1041_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj1003_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount = window.obj1003_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1003_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1003_SCActionDragDrop1041_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}




































};
obj1003_SCActionDragDrop1041_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1003_SCActionDragDrop1041_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1003").trigger("obj1003_SCActionDragDrop1041_droppedOutsideTargetActions_ended");
		
		return;
	}
	window.obj1003_SCActionDragDrop1041_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	










































};
obj1003_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1003_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1003").trigger("obj1003_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1003_droppedInsideTargetActions_activeActionGroupIndex = 0;
	


//	action: show 
//	target: obj1021 
(function(){
	window.obj1003_droppedInsideTargetActions_runningActionsCount = obj1003_droppedInsideTargetActions_runningActionsCount + 1;


	var element = "#obj1021";
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
				window.obj1003_droppedInsideTargetActions_runningActionsCount = window.obj1003_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1003_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1003_droppedInsideTargetActions_actionGroup1();
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
			window.obj1003_droppedInsideTargetActions_runningActionsCount = window.obj1003_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1003_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1003_droppedInsideTargetActions_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj1095 
(function(){
	window.obj1003_droppedInsideTargetActions_runningActionsCount = obj1003_droppedInsideTargetActions_runningActionsCount + 1;


	var element = "#obj1095";
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
				window.obj1003_droppedInsideTargetActions_runningActionsCount = window.obj1003_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1003_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1003_droppedInsideTargetActions_actionGroup1();
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
			window.obj1003_droppedInsideTargetActions_runningActionsCount = window.obj1003_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1003_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1003_droppedInsideTargetActions_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: move
//	target: obj1003 
move_1091();
function move_1091() {
	window.obj1003_droppedInsideTargetActions_runningActionsCount = obj1003_droppedInsideTargetActions_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1003");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 668;
	var moveY = 135;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj1003_droppedInsideTargetActions_runningActionsCount = window.obj1003_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1003_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1003_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1441();
function playAudioFile_1441() {
	window.obj1003_droppedInsideTargetActions_runningActionsCount = obj1003_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1441")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1441");
			$("#obj_audio_playSoundFile1441").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1003_droppedInsideTargetActions_runningActionsCount = window.obj1003_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1003_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1003_droppedInsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1003_droppedInsideTargetActions_runningActionsCount = window.obj1003_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1003_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1003_droppedInsideTargetActions_actionGroup1();
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
				window.obj1003_droppedInsideTargetActions_runningActionsCount = window.obj1003_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1003_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1003_droppedInsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj1003_droppedInsideTargetActions_runningActionsCount = window.obj1003_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1003_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1003_droppedInsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_1092();
function runjs_1092() {
	window.obj1003_droppedInsideTargetActions_runningActionsCount = obj1003_droppedInsideTargetActions_runningActionsCount + 1;


	var t = parseInt(localStorage.getItem("tapped")) + 1;
localStorage.setItem("tapped", t.toString());
localStorage.setItem("finger", "false");
$("#obj1172").fadeOut(1000);

	setTimeout(function() {
		window.obj1003_droppedInsideTargetActions_runningActionsCount = window.obj1003_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1003_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1003_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}












};
obj1003_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1003_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1003").trigger("obj1003_droppedInsideTargetActions_ended");
		
		return;
	}
	window.obj1003_droppedInsideTargetActions_activeActionGroupIndex = 1;
	










































};
obj1170_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1170_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1170").trigger("obj1170_SCEventRun_ended");
		
		return;
	}
	window.obj1170_SCEventRun_activeActionGroupIndex = 0;
	


















//	action: scale
//	target: obj1172 
scale_1176();
function scale_1176() {
	window.obj1170_SCEventRun_runningActionsCount = obj1170_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj1172";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1172';
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
		scale_1176_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1176_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1176_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_1176_completed() {
	setTimeout(function() {
		window.obj1170_SCEventRun_runningActionsCount = window.obj1170_SCEventRun_runningActionsCount - 1;

if (window.obj1170_SCEventRun_runningActionsCount == 0) {
	obj1170_SCEventRun_actionGroup1();
}
	}, 1);
}
























};
obj1170_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1170_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1170").trigger("obj1170_SCEventRun_ended");
		
		return;
	}
	window.obj1170_SCEventRun_activeActionGroupIndex = 1;
	



//	action: move
//	target: obj1172 
move_1175();
function move_1175() {
	window.obj1170_SCEventRun_runningActionsCount = obj1170_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1172");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=380";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj1170_SCEventRun_runningActionsCount = window.obj1170_SCEventRun_runningActionsCount - 1;

if (window.obj1170_SCEventRun_runningActionsCount == 0) {
	obj1170_SCEventRun_actionGroup2();
}
		}, 1);
	});
}






































};
obj1170_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1170_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1170").trigger("obj1170_SCEventRun_ended");
		
		return;
	}
	window.obj1170_SCEventRun_activeActionGroupIndex = 2;
	


















//	action: scale
//	target: obj1172 
scale_1177();
function scale_1177() {
	window.obj1170_SCEventRun_runningActionsCount = obj1170_SCEventRun_runningActionsCount + 1;

	
	var targetObjectId = "#obj1172";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1172';
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
		scale_1177_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1177_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1177_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_1177_completed() {
	setTimeout(function() {
		window.obj1170_SCEventRun_runningActionsCount = window.obj1170_SCEventRun_runningActionsCount - 1;

if (window.obj1170_SCEventRun_runningActionsCount == 0) {
	obj1170_SCEventRun_actionGroup3();
}
	}, 1);
}
























};
obj1170_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1170_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1170").trigger("obj1170_SCEventRun_ended");
		
		return;
	}
	window.obj1170_SCEventRun_activeActionGroupIndex = 3;
	



//	action: move
//	target: obj1172 
move_1178();
function move_1178() {
	window.obj1170_SCEventRun_runningActionsCount = obj1170_SCEventRun_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj1172");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 504;
	var moveY = 178;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj1170_SCEventRun_runningActionsCount = window.obj1170_SCEventRun_runningActionsCount - 1;

if (window.obj1170_SCEventRun_runningActionsCount == 0) {
	obj1170_SCEventRun_actionGroup4();
}
		}, 1);
	});
}






































};
obj1170_SCEventRun_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1170_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1170").trigger("obj1170_SCEventRun_ended");
		
		return;
	}
	window.obj1170_SCEventRun_activeActionGroupIndex = 4;
	















//	action: loop
loop_obj1170_SCEventRun();
function loop_obj1170_SCEventRun() {

	var loopCount = 0;

	window.obj1170_SCEventRun_loopCount = window.obj1170_SCEventRun_loopCount + 1;
	if (loopCount != 0 && window.obj1170_SCEventRun_loopCount > loopCount) {
		window.obj1170_SCEventRun_loopCount = 0
		obj1170_SCEventRun_actionGroup5();
	} else {
		obj1170_SCEventRun_actionGroup0();
	}

}


























};
obj1170_SCEventRun_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1170_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1170").trigger("obj1170_SCEventRun_ended");
		
		return;
	}
	window.obj1170_SCEventRun_activeActionGroupIndex = 5;
	










































};
obj1371_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1371_onLoad_activeActionGroupIndex = -1;
		$("#obj1371").trigger("obj1371_onLoad_ended");
		
		return;
	}
	window.obj1371_onLoad_activeActionGroupIndex = 0;
	
























//	action: playAudio
//	target: obj1371 
playAudio_1373();
function playAudio_1373() {
	window.obj1371_onLoad_runningActionsCount = obj1371_onLoad_runningActionsCount + 1;

	var myAudio = $("#obj1371")[0];
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
		    window.obj1371_onLoad_runningActionsCount = window.obj1371_onLoad_runningActionsCount - 1;

if (window.obj1371_onLoad_runningActionsCount == 0) {
	obj1371_onLoad_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1371_onLoad_runningActionsCount = window.obj1371_onLoad_runningActionsCount - 1;

if (window.obj1371_onLoad_runningActionsCount == 0) {
	obj1371_onLoad_actionGroup1();
}
	}
}

















};
obj1371_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1371_onLoad_activeActionGroupIndex = -1;
		$("#obj1371").trigger("obj1371_onLoad_ended");
		
		return;
	}
	window.obj1371_onLoad_activeActionGroupIndex = 1;
	










































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		





/*
 *
 *   obj164: Event Touch Down
 *
 */

$("#obj164").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj164_onTap_activeActionGroupIndex != -1) return;
var obj164_onTap_runningActionsCount = 0;
var obj164_onTap_loopCount = 0;
obj164_onTap_actionGroup0();
});



/*
 *
 *   obj164: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj164_onLoad_activeActionGroupIndex != -1) return;
var obj164_onLoad_runningActionsCount = 0;
var obj164_onLoad_loopCount = 0;
obj164_onLoad_actionGroup0();
});










/*
 *
 *   obj169: Event Touch Down
 *
 */

$("#obj169").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj169_onTap_activeActionGroupIndex != -1) return;
var obj169_onTap_runningActionsCount = 0;
var obj169_onTap_loopCount = 0;
obj169_onTap_actionGroup0();
});














/*
 *
 *   obj171: Event Touch Down
 *
 */

$("#obj171").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj171_onTap_activeActionGroupIndex != -1) return;
var obj171_onTap_runningActionsCount = 0;
var obj171_onTap_loopCount = 0;
obj171_onTap_actionGroup0();
});


















/*
 *
 *   obj167: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj167_onLoad_activeActionGroupIndex != -1) return;
var obj167_onLoad_runningActionsCount = 0;
var obj167_onLoad_loopCount = 0;
obj167_onLoad_actionGroup0();
});
























































































































































































/*
 *
 *   obj1080: Event SCEventRun
 *
 */

$("#obj1080").bind("SCEventRun", function(event) {
	if (window.obj1080_SCEventRun_activeActionGroupIndex != -1) return;
var obj1080_SCEventRun_runningActionsCount = 0;
var obj1080_SCEventRun_loopCount = 0;
obj1080_SCEventRun_actionGroup0();
});



























































/*
 *
 *   obj1120: Event SCEventRun
 *
 */

$("#obj1120").bind("SCEventRun", function(event) {
	if (window.obj1120_SCEventRun_activeActionGroupIndex != -1) return;
var obj1120_SCEventRun_runningActionsCount = 0;
var obj1120_SCEventRun_loopCount = 0;
obj1120_SCEventRun_actionGroup0();
});














/*
 *
 *   obj1133: Event SCEventRun
 *
 */

$("#obj1133").bind("SCEventRun", function(event) {
	if (window.obj1133_SCEventRun_activeActionGroupIndex != -1) return;
var obj1133_SCEventRun_runningActionsCount = 0;
var obj1133_SCEventRun_loopCount = 0;
obj1133_SCEventRun_actionGroup0();
});




















































/*
 *
 *   obj1002: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1002");
	var winTarget = document.getElementById("obj1002");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj1002").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1002_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1002_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1002_onTouchDown_activeActionGroupIndex != -1) return;
var obj1002_onTouchDown_runningActionsCount = 0;
var obj1002_onTouchDown_loopCount = 0;
obj1002_onTouchDown_actionGroup0();
});






/*
 *
 *   obj1002: Event SCActionDragDrop1041_droppedOutsideTargetActions
 *
 */

$("#obj1002").bind("SCActionDragDrop1041_droppedOutsideTargetActions", function(event) {
	if (window.obj1002_SCActionDragDrop1041_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj1002_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1002_SCActionDragDrop1041_droppedOutsideTargetActions_loopCount = 0;
obj1002_SCActionDragDrop1041_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj1002: Event droppedInsideTargetActions
 *
 */

$("#obj1002").bind("droppedInsideTargetActions", function(event) {
	if (window.obj1002_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj1002_droppedInsideTargetActions_runningActionsCount = 0;
var obj1002_droppedInsideTargetActions_loopCount = 0;
obj1002_droppedInsideTargetActions_actionGroup0();
});







/*
 *
 *   obj1004: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1004");
	var winTarget = document.getElementById("obj1004");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj1004").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1004_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1004_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1004_onTouchDown_activeActionGroupIndex != -1) return;
var obj1004_onTouchDown_runningActionsCount = 0;
var obj1004_onTouchDown_loopCount = 0;
obj1004_onTouchDown_actionGroup0();
});






/*
 *
 *   obj1004: Event SCActionDragDrop1041_droppedOutsideTargetActions
 *
 */

$("#obj1004").bind("SCActionDragDrop1041_droppedOutsideTargetActions", function(event) {
	if (window.obj1004_SCActionDragDrop1041_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj1004_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1004_SCActionDragDrop1041_droppedOutsideTargetActions_loopCount = 0;
obj1004_SCActionDragDrop1041_droppedOutsideTargetActions_actionGroup0();
});







/*
 *
 *   obj1005: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1005");
	var winTarget = document.getElementById("obj1005");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj1005").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1005_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1005_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1005_onTouchDown_activeActionGroupIndex != -1) return;
var obj1005_onTouchDown_runningActionsCount = 0;
var obj1005_onTouchDown_loopCount = 0;
obj1005_onTouchDown_actionGroup0();
});






/*
 *
 *   obj1005: Event SCActionDragDrop1041_droppedOutsideTargetActions
 *
 */

$("#obj1005").bind("SCActionDragDrop1041_droppedOutsideTargetActions", function(event) {
	if (window.obj1005_SCActionDragDrop1041_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj1005_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1005_SCActionDragDrop1041_droppedOutsideTargetActions_loopCount = 0;
obj1005_SCActionDragDrop1041_droppedOutsideTargetActions_actionGroup0();
});







/*
 *
 *   obj1003: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1003");
	var winTarget = document.getElementById("obj1003");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj1003").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1003_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1003_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1003_onTouchDown_activeActionGroupIndex != -1) return;
var obj1003_onTouchDown_runningActionsCount = 0;
var obj1003_onTouchDown_loopCount = 0;
obj1003_onTouchDown_actionGroup0();
});






/*
 *
 *   obj1003: Event SCActionDragDrop1041_droppedOutsideTargetActions
 *
 */

$("#obj1003").bind("SCActionDragDrop1041_droppedOutsideTargetActions", function(event) {
	if (window.obj1003_SCActionDragDrop1041_droppedOutsideTargetActions_activeActionGroupIndex != -1) return;
var obj1003_SCActionDragDrop1041_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1003_SCActionDragDrop1041_droppedOutsideTargetActions_loopCount = 0;
obj1003_SCActionDragDrop1041_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj1003: Event droppedInsideTargetActions
 *
 */

$("#obj1003").bind("droppedInsideTargetActions", function(event) {
	if (window.obj1003_droppedInsideTargetActions_activeActionGroupIndex != -1) return;
var obj1003_droppedInsideTargetActions_runningActionsCount = 0;
var obj1003_droppedInsideTargetActions_loopCount = 0;
obj1003_droppedInsideTargetActions_actionGroup0();
});














/*
 *
 *   obj1170: Event SCEventRun
 *
 */

$("#obj1170").bind("SCEventRun", function(event) {
	if (window.obj1170_SCEventRun_activeActionGroupIndex != -1) return;
var obj1170_SCEventRun_runningActionsCount = 0;
var obj1170_SCEventRun_loopCount = 0;
obj1170_SCEventRun_actionGroup0();
});
























/*
 *
 *   obj1371: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1371_onLoad_activeActionGroupIndex != -1) return;
var obj1371_onLoad_runningActionsCount = 0;
var obj1371_onLoad_loopCount = 0;
obj1371_onLoad_actionGroup0();
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
	
$("#obj164").trigger('SCEventShow');
$("#obj169").trigger('SCEventShow');
$("#obj171").trigger('SCEventShow');
$("#obj167").trigger('SCEventShow');
$("#obj1002").trigger('SCEventShow');
$("#obj1004").trigger('SCEventShow');
$("#obj1005").trigger('SCEventShow');
$("#obj1003").trigger('SCEventShow');
$("#obj1371").trigger('SCEventShow');
	localStorage.setItem("tapped", "0");
localStorage.setItem("tapped", "0");
localStorage.setItem("finger", "false");
});