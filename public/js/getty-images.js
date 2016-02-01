$( document ).ready( function () {

  var myKey = '';

  var searchButton = $( '<div>' );
    searchButton
      .addClass( 'searchButton' )
      .text( 'Search for Pics!' )
    ;
  $( '.mainDiv' ).append( searchButton );

  searchButton.click( function() {
    var userInput = $( '.searchInput' ).val();

    $.ajax( 'https://api.gettyimages.com/v3/search/images?phrase=' + userInput, {
      headers : {
        'Api-Key' : myKey
      },
      method : 'GET'
      }).done( function( data ) {
      console.log( data );
    });

  });
});
