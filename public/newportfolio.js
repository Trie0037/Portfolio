$(document).ready(function () {
    var indyProjects = [
        {
            title: "Unit 4 Game",
            href: "https://trie0037.github.io/Unit-4-game/",
            img: "assets/images/Crystal4.jpg",
            alt: "Unit 4 Game"
        },
        {
            title: "Vikings Trivia",
            href: "https://trie0037.github.io/triviaGame/",
            img: "assets/images/SKOL.jpg",
            alt: "Vikings Trivia"
        },
        {
            title: "Train Scheduler",
            href: "https://trie0037.github.io/TrainScheduler/",
            img: "assets/images/Train.jpeg",
            alt: "Train Scheduler"
        },
        {
            title: "EatDaBurger",
            href: "https://eatdaburger187.herokuapp.com/",
            img: "assets/images/burger.png",
            alt: "Burger"
        },
        {
            title: "ReactCLICKY",
            href: "https://trie0037.github.io/ReactCLICKY/",
            img: "assets/images/SouthPark.png",
            alt: "Cartman"
        },
        {
            title: "GIPHY1",
            href: "https://trie0037.github.io/GIPHY1/",
            img: "assets/images/Giphy.png",
            alt: "Joker"
        }
    ];

    function createCard() {
        for(var i = 0; i < indyProjects.length; i++) {
            var row =("<br>")
            if (i % 3 && i != 0) {  
                $('#createCards').append(row);
            }
            
            var title = indyProjects[i].title;
            var href = indyProjects[i].href;
            var img = indyProjects[i].img;
            var alt = indyProjects[i].alt;
            var card = "<div class='col-md-4 projects'>"
            + "<a title='" + title + "' href='" + href + "' target='_blank'>"
            + "<img src='" + img + "' style='width: 100%; height: 170px;' alt='" + alt + "'>"
            + "</a><p class='text-center'><strong class='projectName'>" + title + "</strong></p></div>";
            $("#createCards").append(card);
        }
    };

    createCard()
});