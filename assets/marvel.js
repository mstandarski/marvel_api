(function() {
  var searchButton = $('#search-button');
//  var inputBox = $('user-input');



  searchButton.click(function() {
    $('#table').empty();
    $.get(("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=4bd7246d76255d0860376e42c6310118&hash=ed285c4237d33f94de3bec794c61fd3a&limit=100&nameStartsWith=" + getText()), function(data) {
      $.each(data.data.results, function(index, value) {
        let image = value.thumbnail.path + '.' + value.thumbnail.extension;
        $('#table').append('<tr> <td>' + value.name + '</td><td><img width="200px" src=' + image + '></td></tr>')
        // console.log(value.name);
        // console.log(image);
      })
    })
    console.log("you searched for " + getText());
  })

  function getText() {
    return $('#user-input').val();
  }

})();
