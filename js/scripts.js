function slabTextHeadlines() {
	$("h1.slabtext-container").slabText({
		// Don't slabtext the headers if the viewport is under 380px
		"viewportBreakpoint":380,
		"minCharsPerLine":10
	});
}

$(window).load(function() {
	setTimeout(slabTextHeadlines, 0);
});


$(document).ready(function(){
	console.log("First");

	$.ajax({
		url: 'theme.json',
		dataType: 'json',
		//async: false,
		//cache: false,
		success: function( data, status ){
			console.log('working');
			console.log( data.length + ' results found!' );
			loadTheme(data);
		},
		error: function(xhr, textStatus, err) {
			console.log('not working');
			console.log("readyState: "+xhr.readyState+"\n xhrStatus: "+xhr.status);//4, 200 ok
			console.log("responseText: "+xhr.responseText);//HERE IS CORRECT JSON CONTENT
		}
	});

	function loadTheme(data) {


		var siteThemes = data,
			themeCount = siteThemes.length,
			randomNumber = Math.floor( (Math.random() * themeCount) );
		
		chosenTheme = siteThemes[randomNumber];

		console.log("Pick image: ", randomNumber, chosenTheme.image);
		//BACKSTRETCH

		$.backstretch(chosenTheme.image);
		$(".wrapper").addClass(chosenTheme.color);
		console.log('atest for watch')
		$(".credit .tooltip").attr("href", chosenTheme.credit.link);
		$(".credit .tooltip").tooltipster('content', chosenTheme.credit.name);
	}


	//MASONRY
	var $container = $('.portfolio');
	$container.imagesLoaded(function(){
		$container.masonry({
			itemSelector : '.item',
			isFitWidth: true,
			isAnimated: true
		});
	});

	//PRETTYPHOTO
	$("a[rel^='prettyPhoto']").prettyPhoto({
		custom_markup: '<div class="pp_inline">SAMPLE</div>'
	});
	//$('h1.lettering span').lettering('lines');

	//TOOLTIPSTER PLUGIN
	$('.tooltip').tooltipster({
		animation: 'grow',
		delay: 100,
		position: 'top-left',
		theme: 'tooltipster-light'
	});
}); // end document ready