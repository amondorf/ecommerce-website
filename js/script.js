$('button').click(function(){
  $('.toggle').toggleClass('hide-blp');
});

 if ( $(window).width() < 767) {
   $(document).ready(function() {
   	var showText = 130;
   	$('.book-description').each(function() {
   		var content = $(this).html();

   		if(content.length > showText) {
   			var c = content.substr(0, showText);
         var bookLink = $(this).attr("id");
   			// var h = content.substr(showText-1, content.length - showText)
   			var html = c + '<a href="' + bookLink + '">' + " ...continue reading" + "</a>";
   			$(this).html(html);
   		};
   	});
   });
 }


 // book site
 var books = [{
        id: "book1",
         name: "Octopus Encounters1",
         item: "test1",
         author: "a",
         description: "Detailed description of the book comes here.",
         img: "img/example.png"

     },
     {
       id: "book2",
       name: "The Crimson Sign",
       item: "test2",
       author: "S. R. Keightley",
       description: "In the year of grace 1689 men were not a whit more long-suffering nor more patient than they are to-day. The choleric captain who had been pacing the guard-room for a quarter of an hour showed evident signs that he was fast losing what temper he possessed. As he marched with a hasty stride up and down the oaken floor, and wheeled with military abruptness on the broad stone that formed the hearth, the rafters of black oak rang with the clank of his sword and the jingling of the spurs on his heavy jack-boots. He pulled with a gesture of impatience at the grizzled white moustache that concealed his mouth, and muttered anathemas which, had they been heard in the pious city of Londonderry, would have been deemed little in keeping with his reputation. Nor did he seem a man with whom others would take unwarrantable liberties, or keep dangling upon their careless will and pleasure.",
       img: "img/the_crimson_sign.jpg"

     },
     {
       id: "book3",
       name: "Octopus Encounters3",
       item: "test3",
       author: "c",
       description: "Detailed description of the book comes here.",
       img: "img/example.png"

     },
     {
       id: "book4",
       name: "Octopus Encounters4",
       item: "test4",
       author: "d",
       description: "Detailed description of the book comes here.",
       img: "img/example.png"

     },
     {
       id: "book5",
       name: "Octopus Encounters5",
       item: "test5",
       author: "e",
       description: "Detailed description of the book comes here.",
       img: "img/example.png"
     },
     {
       id: "book6",
       name: "Octopus Encounters6",
       item: "test6",
       author: "f",
       description: "Detailed description of the book comes here.",
       img: "img/example.png"
         }
 ];

 $('img').click(function(){
  //  console.log("test");
   var bookId = $(this).attr('id');
   console.log(bookId);

   index = books.findIndex(x => x.id==bookId);
   console.log(index);

   var name = books[index].name;
   var author = books[index].author;
   var image = books[index].img;
   var description = books[index].description;
   console.log(image);

   $(".title").text(name);
   $(".author").text("by " + author);
   $(".details-descr").text(description);

  document.getElementById("details-img").src= image;
   console.log(name);
   $("#myCarousel").addClass("hide-section");
   $("#details-page").removeClass("hide-section");

 });
