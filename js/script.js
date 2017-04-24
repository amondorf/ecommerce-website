$('button').click(function(){
  $('.toggle').toggleClass('hide-blp');
});

 if ( $(window).width() < 739) {
   $(document).ready(function() {
   	var showText = 100;
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
