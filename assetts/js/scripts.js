/*-----------------------------------------------------------------------------------*/
/*	TOGGLE
/*-----------------------------------------------------------------------------------*/
$(document).ready(function(){
	//Hide the tooglebox when page load
	$(".togglebox").hide();
	//slide up and down when click over heading 2
	$("h2").click(function(){
		// slide toggle effect set to slow you can set it to fast too.
		$(this).toggleClass("active").next(".togglebox").slideToggle("slow");
		return true;
	});
});

/*-----------------------------------------------------------------------------------*/
/*	TABS
/*-----------------------------------------------------------------------------------*/
$(document).ready(function() {
	//Default Action
	$(".tab_content").hide(); //Hide all content
	$("ul.tabs li:first").addClass("active").show(); //Activate first tab
	$(".tab_content:first").show(); //Show first tab content
	
	//On Click Event
	$("ul.tabs li").click(function() {
		$("ul.tabs li").removeClass("active"); //Remove any "active" class
		$(this).addClass("active"); //Add "active" class to selected tab
		$(".tab_content").hide(); //Hide all tab content
		var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab+content
		$(activeTab).fadeIn(); //Fade in the active content
		return false;
	});

});

/*-----------------------------------------------------------------------------------*/
/*	MENU
/*-----------------------------------------------------------------------------------*/
ddsmoothmenu.init({
	mainmenuid: "menu", 
	orientation: 'v', 
	classname: 'menu-v', 
	contentsource: "markup" 
})

/*-----------------------------------------------------------------------------------*/
/*	SIDEBAR HEIGHT
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function($){
	var h = $(document).height();
	$('#sidebar').css({height: h+'px'});
});

/*-----------------------------------------------------------------------------------*/
/*	HOVER
/*-----------------------------------------------------------------------------------*/

$(document).ready(function() {
        $('.items .box .image, .items .box .left-side, .carousel ul li').mouseenter(function(e) {

            $(this).children('a').children('span').fadeIn(200);
        }).mouseleave(function(e) {

            $(this).children('a').children('span').fadeOut(200);
        });
    });

/*-----------------------------------------------------------------------------------*/
/* Portfolio slider
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function(){
	$('#slideshow').justifiedGallery({
	rowHeight: 500,
	lastRow: 'nojustify',
	margins: 3
	});
});

/*-----------------------------------------------------------------------------------*/
/* Global site tag (gtag.js) - Google Analytics
/*-----------------------------------------------------------------------------------*/
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-116976077-1');
