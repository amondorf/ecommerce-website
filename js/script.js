// book site
var books = [{
       id: "book1",
        name: "Octopus Encounters",
        item: "test1",
        author: "Anton Berirf",
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
      name: "The Adventures of Tom Sawyer",
      item: "test3",
      author: "Mark Twain",
      description: "The old lady pulled her spectacles down and looked over them about the room; then she put them up and looked out under them. She seldom or never looked through them for so small a thing as a boy; they were her state pair, the pride of her heart, and were built for “style,” not service—she could have seen through a pair of stove-lids just as well. She looked perplexed for a moment, and then said, not fiercely, but still loud enough for the furniture to hear: “Well, I lay if I get hold of you I’ll—” She did not finish, for by this time she was bending down and punching under the bed with the broom, and so she needed breath to punctuate the punches with. She resurrected nothing but the cat.",
      img: "img/adventures_of_tom_sawyer.jpg"
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

$('img, .book-description').on("click touch", function(){
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

// hide brand when clicking on hamburger menu
$('button').click(function(){
  $('.toggle').toggleClass('hide-blp');
});

// add 'continue reading..' add on in mobile view
 if ( $(window).width() < 767) {
   $(document).ready(function() {
   	var showText = 130;
   	$('.book-description').each(function() {
   		var content = $(this).html();

   		if(content.length > showText) {
   			var c = content.substr(0, showText);
        //  var bookLink = $(this).attr("id");
   			// var h = content.substr(showText-1, content.length - showText)
   			var html = c + '<a href="#"> ...continue reading</a>';
   			$(this).html(html);
   		};
   	});
   });
 }
