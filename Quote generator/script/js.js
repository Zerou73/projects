$(document).ready(function() {
  getQuote();

  function getQuote() {
    var quotes = [
      "The right man in the wrong place can make all the difference in the world.",
      "Jobs done",
      "War, war never changes.",
      "Frostmourne hungers.",
      "War has changed.",
      "Boss…you were right. It’s not about changing the world. It’s about doing our best to leave the world…the way it is. It’s about respecting the will of others, and believing in your own.",
      "The genius of the hole: No matter how long you spend climbing out, you can still fall back down in an instant"
    ];
    var authors = [
      "-Half-life 2",
      "-Warcraft 3",
      "-Fallout",
      "-Arthas",
      "-Metal Gear Solid 4",
      "-Big Boss",
      "-Max Payne"
    ];

    var randomNumber = Math.floor(Math.random() * quotes.length);
    var randomQuote = quotes[randomNumber];
    var randomAuthor = authors[randomNumber];

    $("#text").text(randomQuote);
    $("#author").text(randomAuthor);
  }
  $(".btn").on("click", function() {
    getQuote();
  });

  $("#Tweet").on("click", function() {
    window.open("https://twitter.com/intent/tweet?text=" + randomQuote);
  });
});
