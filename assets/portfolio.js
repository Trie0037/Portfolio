$(document).ready(function () {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBTXnv-AIK84SE6-r-1TcBb5eUDzqNqAkA",
        authDomain: "portfolio-73992.firebaseapp.com",
        databaseURL: "https://portfolio-73992.firebaseio.com",
        projectId: "portfolio-73992",
        storageBucket: "portfolio-73992.appspot.com",
        messagingSenderId: "536429628411"
    };
    firebase.initializeApp(config);
    var database = firebase.database();

    $("#submit-btn").click(function () {
        //Creating variables for Train Schedule
        var yourName = $("#your-name").val().trim();
        var yourOccupation = $("#occupation").val().trim();
        var Experience = $("#employed").val().trim();
        var startDate = $("#start-date").val().trim();
        console.log(yourName);
        alert("works");

        database.ref().push({

            Name: yourName,
            Occupation: yourOccupation,
            Employment: startDate,
            Experience: Experience,

            dateAdded: firebase.database.ServerValue.TIMESTAMP

        });
    });

    database.ref().orderByChild("dateAdded").on("child_added", function (childSnapshot) {
        var startDate = (childSnapshot.val().Employment);
        var dateFormat = moment().format('LLLL');

        var Experience = moment($("#employed").val().trim(), "MMMM Do YYYY").format();
        var currentTime = moment();
        var nextAppoint = moment(childSnapshot.val().Experience, "HH:mm");
        while (nextAppoint.isBefore(currentTime)) {
            nextAppoint.add(startDate, "minutes");
        }
        var minutesAway = Math.abs(currentTime.diff(nextAppoint, 'minutes'));
        console.log(minutesAway);
        console.log(nextAppoint);
        var minutesAwayTd = $("<td>").html(minutesAway);
        var tBody = $("tbody");
        var tRow = $("<tr>");
        yourName = $("<td>").html(childSnapshot.val().Name);
        yourOccupation = $("<td>").html(childSnapshot.val().Occupation);
        startDate = $("<td>").html(childSnapshot.val().Employment);
        Experience = $("<td>").html(childSnapshot.val().Experience);
        nextAppointTd = $("<td>").html(nextAppoint.format('LT'));

        tRow.append(yourName, yourOccupation, startDate, Experience, nextAppointTd, minutesAwayTd);
        tBody.append(tRow);
    });

});

// Modal content
var modal = document.getElementById("resumeModal");

// Get the button that opens the modal
var btn = document.getElementById("resumeBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// When the user clicks the close button,
// remove the modal and disable the sumbit button
$("#close").on("click", function () {
    modal.style.display = "none";
})