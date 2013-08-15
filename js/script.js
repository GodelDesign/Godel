document.params = {
	i : 0,
	j : 0,
	init : 1,
	speed : 300
};

function nextLetter() {
	
	document.params.i++;
	
	if( document.params.i < document.params.j ) {
	$( document.params.letters[document.params.i] ).fadeIn( 'normal' );
	} else {
		clearInterval( document.params.timer );
	}

}

function buildBullshit( wrapper ) {
	
	var words = $( wrapper ).text().split("");
	
    var text = words.join("</span><span class='jhide'>");

    $( wrapper ).html("<span class='jhide'>" + text + "</span>").removeClass('jhide');

    document.params.letters = $( wrapper ).find('span');
	document.params.j = $( document.params.letters ).length;
	
	document.params.timer = setInterval( 'nextLetter()', 20 );
	
}

function buildMain( el ) {
	
	$( el).hover(
		function(){
			$( this ).stop().fadeTo( document.params.speed, 0.001 );
			$( '#main-behind').stop().fadeTo( document.params.speed, 1 );
		},
		function(){
			$( this ).stop().fadeTo( document.params.speed, 1 );
			$( '#main-behind' ).stop().fadeTo( document.params.speed, 0.001 );
		})
}

$(function(){
	
	buildMain( '#main' );
		
		if( document.params.init ){
			document.params.init = 0;
			buildBullshit( '#bullshit' );
		}

});