pubcoder.projectID = pubcoder.projectID || "D928F63EC5FACE4D86169F491C787A52";
pubcoder.project.id = pubcoder.project.id || "D928F63EC5FACE4D86169F491C787A52";
pubcoder.project.title = pubcoder.project.title || "OkidoNumbers";
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
var obj1359_onLoad_activeActionGroupIndex = -1;
var obj1359_onLoad_runningActionsCount = 0;
var obj1359_onLoad_loopCount = 0;

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
		
obj1359_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1359_onLoad_activeActionGroupIndex = -1;
		$("#obj1359").trigger("obj1359_onLoad_ended");
		
		return;
	}
	window.obj1359_onLoad_activeActionGroupIndex = 0;
	
























//	action: playAudio
//	target: obj1359 
playAudio_1361();
function playAudio_1361() {
	window.obj1359_onLoad_runningActionsCount = obj1359_onLoad_runningActionsCount + 1;

	var myAudio = $("#obj1359")[0];
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
		    window.obj1359_onLoad_runningActionsCount = window.obj1359_onLoad_runningActionsCount - 1;

if (window.obj1359_onLoad_runningActionsCount == 0) {
	obj1359_onLoad_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1359_onLoad_runningActionsCount = window.obj1359_onLoad_runningActionsCount - 1;

if (window.obj1359_onLoad_runningActionsCount == 0) {
	obj1359_onLoad_actionGroup1();
}
	}
}

















};
obj1359_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1359_onLoad_activeActionGroupIndex = -1;
		$("#obj1359").trigger("obj1359_onLoad_ended");
		
		return;
	}
	window.obj1359_onLoad_activeActionGroupIndex = 1;
	










































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		


















































































































/*
 *
 *   obj1359: Event Load
 *
 */

$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1359_onLoad_activeActionGroupIndex != -1) return;
var obj1359_onLoad_runningActionsCount = 0;
var obj1359_onLoad_loopCount = 0;
obj1359_onLoad_actionGroup0();
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
	
$("#obj1202").trigger('SCEventShow');
$("#obj1244").trigger('SCEventShow');
$("#obj1248").trigger('SCEventShow');
$("#obj1246").trigger('SCEventShow');
$("#obj1254").trigger('SCEventShow');
$("#obj1256").trigger('SCEventShow');
$("#obj1258").trigger('SCEventShow');
$("#obj1359").trigger('SCEventShow');
	localStorage.setItem("tapped", "0");

});