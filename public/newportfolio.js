$(document).ready(function () {
  var indyProjects = [
    {
      title: "Crystal Game",
      href: "https://trie0037.github.io/Unit-4-game/",
      img: "assets/images/Crystal4.jpg",
      alt: "Crystal Game",
    },
    {
      title: "Vikings Trivia",
      href: "https://trie0037.github.io/triviaGame/",
      img: "assets/images/SKOL.jpg",
      alt: "Vikings Trivia",
    },
    {
      title: "Train Scheduler",
      href: "https://trie0037.github.io/TrainScheduler/",
      img: "assets/images/Train.jpeg",
      alt: "Train Scheduler",
    },
    {
      title: "EatDaBurger",
      href: "https://eatdaburger187.herokuapp.com/",
      img: "assets/images/burger.png",
      alt: "Burger",
    },
    {
      title: "REACTCLICKY",
      href: "https://southparkreactclicky.netlify.com/",
      img: "assets/images/SouthPark.png",
      alt: "Cartman",
    },
    {
      title: "GIPHY1",
      href: "https://trie0037.github.io/GIPHY1/",
      img: "assets/images/Giphy.png",
      alt: "Joker",
    },
    {
      title: "FriendMaker",
      href: "https://friendmaker187.herokuapp.com/",
      img: "assets/images/FF1 (3).png",
      alt: "FaceSpace",
    },
    {
      title: "Checklist",
      href: "https://weekly-workout-checklist.netlify.com/",
      img: "assets/images/checklist.png",
      alt: "Workout",
    },
    {
      title: "Bamazon",
      href: "https://github.com/Trie0037/bamazon",
      img: "assets/images/bamazon.png",
      alt: "Inventory",
    },
    {
      title: "TikTokTow",
      href: "https://trie0037.github.io/tiktoktow/",
      img: "assets/images/tictactoe.png",
      alt: "X&O",
    },
    {
      title: "Afterclass",
      href: "https://lifeafterclass.herokuapp.com/",
      img: "assets/images/LAF.png",
      alt: "Life After Class",
    },
  ];

  function createCard() {
    for (var i = 0; i < indyProjects.length; i++) {
      var row = "<br>";
      if (i % 3 && i != 0) {
        $("#createCards").append(row);
      }

      var title = indyProjects[i].title;
      var href = indyProjects[i].href;
      var img = indyProjects[i].img;
      var alt = indyProjects[i].alt;
      var card =
        "<div class='col-md-4 projects'>" +
        "<a title='" +
        title +
        "' href='" +
        href +
        "' target='_blank'>" +
        "<img src='" +
        img +
        "' style='width: 100%; height: 170px; opacity: 0.9;' alt='" +
        alt +
        "'>" +
        "</a><p class='text-center'><strong class='projectName'><font color='lightblue'>" +
        title +
        "</font></strong></p></div>";
      $("#createCards").append(card);
    }
  }

  createCard();
});
