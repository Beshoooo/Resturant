/*global console ,alert*/

//make carousel work and change every 0.5s 
$(document).ready(function()
	{
		//Nice scroll lib
 		$("html").niceScroll({
 			cursorwidth:"10px"
 		});
		$("#boxscroll").niceScroll({horizrailenabled:false});

		$('.carousel').carousel({interval:7000});
	});
//end 

//Show colors option when click on gear
$('.fa-cog').click(function()
	{$('.color-option').fadeToggle(500);});
//end 


//Change color when click on gear
var colorLi= $('.color-option ul li'),
	css_name;
	
	colorLi
		.eq(0).css("backgroundColor","#ff0000").end()
		.eq(1).css("backgroundColor","#0062cc").end()
		.eq(2).css("backgroundColor","#329c14").end()
		.eq(3).css("backgroundColor","#6610f2").end()
		.eq(4).css("backgroundColor","#ffc107");

	colorLi.click(function()
		{
			css_name=$(this).attr("data-value");
			$("link[href*='theme']").attr("href",css_name);
		});
//end 


//Hide Loading-screen
$(window).on("load",function()
	{	
		//hide screen
		$(".Loading-screen .sk-cube-grid").fadeOut(2000,function()
			{
				$('body').css('position','relative');
				//show the scroll
				$('body').css('overflow','auto');
				
				$(this).parent().fadeOut(2000,function()
					{
						//show the scroll
						$('body').css('overflow','auto');

						//remove all section because no longer need it
						$(this).remove();
					});
			});
	});
//end 

//Show Up button
var scrollButton=$("#Go-home");

$(window).scroll(function()
	{
		//scrollTop for get the pixel that scrolled
		if($(this).scrollTop() >= 3500)
		{
			scrollButton.show();
		}
		else
		{
			scrollButton.hide();
		}
	});

scrollButton.on("click",function()
	{
		$("html,body").animate({scrollTop:0},600);
	});
//end 



//on mousemove in font awesome icons Our-Team.
$(".Our-team i").on("mouseover", function(){
  $(this).css('opacity','0.6');
});
$(".Our-team i").on("mouseout", function(){
  $(this).css('opacity','1');
});


//////////////////////////////////////////////////////////
//make responsive on click in font awesome icons. 
$(".Our-team a").on("click", function(){
  alert("Sorry this link is hidden.");
});

//on click in order now.
$(".Price-box a").on("click", function(){
  alert("Thanks For Your Trust");
});

//on click in subscibe.
$(".Subscribe button").on("click", function(){
  alert("Thanks For Your honesty");
});
