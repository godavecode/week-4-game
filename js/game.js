// script.js

var myChars = [
    {
        name:"goku",
        hp: 10,
        attack: 8
    },
    {
        name: "frieza",
        hp:10,
        attack: 8
    }
]

// <div id="goku"></div>

$('.myCharacterDivs').on('click', function() {
    var currentChar = $(this).attr("id");
    var currenCharHp = myChars[currentChar].hp;
});

$('#gogoku').click(function() {
    // get the width of goku image
    var gokuWidth = $('#gokuimage').width();
        
    // get the width of the screen
    var screenLeft = $(window).width() - gokuWidth;
  
    // animate goku
    $('#gokuimage').animate({
        
        // move goku width of the scree to the left
        right: screenLeft
            
    });
        
    // animate freiza
    $('#gofreeza').animate({
        
        // move freiza to right of screen
        left: screenLeft
            
        // animation is complete
        
    });
        
});

    



    