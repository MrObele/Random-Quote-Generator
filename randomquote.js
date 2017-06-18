$(document).ready(function(){
  var randomQuote;
  var randomAuthor;
  function getquotes(){
    //createing an array of quotes
    var myQuotes = ["Java is to JavaScript what Car is to Carpet. "," It's hard enough to find an error in your code when you're looking for it, it's even harder when you've assumed your code is error-free. ","If debugging is the process of removing software bugs, then programming must be the process of putting them in."," Rules of Optimization:Rule 1: Don\'t do it.Rule 2 (for experts only): Don\'t do it yet. ","Walking on water and developing software from a specification are easy if both are frozen.","Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.","It's not at all important to get it right the first time. It's vitally important to get it right the last time.","First, solve the problem. Then, write the code.","Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.","Any fool can write code that a computer can understand. Good programmers write code that humans can understand."];
    //creating an array of authors corresponding to the above quotes
     var myAuthors = ["- Chris Heilmann","- Steve McConnell","- Edsger Dijkstra","- Michael A. Jackson","- Edward V Berard","- Brian Kernighan","- Andrew Hunt and David Thomas","- John Johnson","- Rick Osborne","- Martin Fowler"];
    //random number to correspond to the quotes and authors array index
    var randomNum = Math.floor(Math.random()*myQuotes.length);
     randomQuote = myQuotes[randomNum];
     randomAuthor = myAuthors[randomNum];
    //assign the generated random quote to the html quote and author  tags
    $(".quote").text(randomQuote);
    $(".author").text(randomAuthor);
    var myString =    randomQuote+randomAuthor;
    
    /*add a restriction so that if the number of characters of quote and author is greater
    than the maximum required characters to be tweeted it should cut it off and add(...)
    */
    if (myString.length > 115) {
      myString = myString.slice(0, 115 - 3);
      myString += "...";
    }
    $(".twitter-share-button").attr("href", "https://twitter.com/intent/tweet?text=" + myString);
  }
  $(".quotebtn").on("click",function(){
    getquotes();
    $(".quote").text(randomQuote);
    $(".author").text(randomAuthor);
    
  });
  //add a random quote and corresponding author to the quote and author tag on page load.
   getquotes();
    var quoteText = randomQuote;
    var authorText = randomAuthor;
    $(".quote").text(quoteText);
    $(".author").text(authorText);
   
});
