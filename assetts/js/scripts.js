/*-----------------------------------------------------------------------------------*/
/* Global site tag (gtag.js) - Google Analytics
/*-----------------------------------------------------------------------------------*/
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-116976077-1');

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
        $('.items .box .image, .items .box .left-side').mouseenter(function(e) {

            $(this).children('a').children('span').fadeIn(200);
        }).mouseleave(function(e) {

            $(this).children('a').children('span').fadeOut(200);
        });
    });

/*-----------------------------------------------------------------------------------*/
/* Homepage - About
/*-----------------------------------------------------------------------------------*/

$(document).ready(function() {

	$('.intro-quote').append('<p>"Capturing the world through his glass lens, Sanidhya is our VR'+ 
		'Photographer. He found his passion amidst The Himalayas and hopes to extend that all over'+ 
		'the world with outsiteVR. He is currently fighting engineering in USICT."</p><br><br>');
	
	$('.intro-catchphrase').append('<p>capturing the world through his canon 800D, sanidhya</p><br><br>');
	
	$('.intro-story')

	.append('<p>It all starts with a 9th grade socially awkward kid wanting to find'+ 
		' a perspective in life. A kid who was always behind the lens clicking family pictures with'+ 
		' the film camera, I felt a breath of satisfaction every time the pictures I clicked was'+ 
		' taken to the photo studio, printed after 4 days and aligned into he family photo album.'+
		'</p><br>')

	.append('<p>The stubbornness of a kid got me my first DSLR camera, the canon 1100D. The simple'+ 
		' reason for me getting this camera was the introductory sale by Amazon for this camera. A'+ 
		' cheap camera which came with two lenses.</p><br>')
	
	.append('<p>Clicking the most random pictures of insects and plants exploring new places and'+ 
		' playing with the camera suddenly gave me a new perspective in life, exactly what I was'+ 
		' seeking. What my eyes saw, was perceived as an image clicked through my camera rather'+ 
		' than a sight.</p><br>')

	.append('<p>A month into getting the camera and already about 5000 pictures down, I was sure'+ 
		" I wanted to live my life capturing images. Never leaving my camera more than an arm's"+ 
		' distance away, I clicked and captured the most insignificant pictures.<br>But then came'+
		' grade 11th and I was forced into a field I was not at all interested, science.</p><br>')

	.append('<p>Holding back on my camera, I had to focus more on chemistry, math and physics.</p><br><br>')

	.append('<p>Soon enough engineering came along the way, still stuck in the cycle I knew I just'+
		' could not continue without having my camera by my side. I joined Vh1 as an intern and soon'+
		' enough was clicking pictures for some major artists at music events. <br>Building contacts'+
		' along the way, i soon started collaborating with a variety of people, from food bloggers'+
		' to business looking or build an online presence. </p><br>')

	.append('<p>But this was just not enough, and in the knick of time, a trip to the Himalayas came'+
		' along.</p><br><br>')

	.append('<p>Travelling in the HRTC Bus, I had an epiphany, the realisation no matter how grand'+
		' these mountains were they were calm, and ready and I need to be the same.  Losing my self'+
		' in the mountains, clicking and capturing everything, I learned a lot about living life.'+
		'</p><br>')

	.append('<p>Soon expanding into videos and cinematography, I have never looked back. Working on'+
		' my personal project, I plan to create my first travel video, which shows the various steps'+
		' of my life journey through a trip to the Himalayas. </p><br>')

	.append('<p>Having taken too much time already,I would like to conclude by saying, not all of us'+
		" were meant to be engineers, but that does not mean all us can't be satisfied, exploring"+
		' till you find what you need to do matters the most. Because 40 years down the lane, old'+
		' and tired sitting on a rocking chair, would you rather want to be satisfied than'+
		' successful.</p><br>');

	$('#contents').scroll(function() {
		if($('#home').css('translateY', '100px')){
			$('#sidebar').css('background', 'rgba(f, f, f, 0.6)');
		}
	});
});

/*-----------------------------------------------------------------------------------*/
/* Portfolio Grid
/*-----------------------------------------------------------------------------------*/
$.ready(function() {

	var grid = document.querySelector('.grid');

	var msnry = new Masonry( grid, {
		itemSelector: 'none', // select none at first
  		columnWidth: '.grid__col-sizer',
  		gutter: '.grid__gutter-sizer',
  		percentPosition: true,
  		stagger: 10,
  		// nicer reveal transition
		visibleStyle: { transform: 'translateY(0)', opacity: 1 },
		hiddenStyle: { transform: 'translateY(100px)', opacity: 0 },
	});

	// initial items reveal
	imagesLoaded( grid, function() {
  		grid.classList.remove('are-images-unloaded');
  		msnry.options.itemSelector = '.grid__item';
  		var items = grid.querySelectorAll('.grid__item');
 		msnry.appended( items );
	});
});
/*-----------------------------------------------------------------------------------*/
/* Portfolio Infinite Scroll
/*-----------------------------------------------------------------------------------*/

$.ready(function() {

var nextPenSlugs = [
	'202252c2f5f192688dada252913ccf13',
	'a308f05af22690139e9a2bc655bfe3ee',
	'6c9ff23039157ee37b3ab982245eef28',
];

function getErrPath() {
	var slug = nextPenSlugs[this.loadCount];
	return 'http://www.uneventripod.com/portfolio/debug/' + slug;
}

var grid = document.querySelector('.grid');

var infScroll = new infiniteScroll( grid, {
		path: getErrPath,
		append: '.grid__item',
        outlayer: msnry,
		status: '.page-load-status'
	});
});
