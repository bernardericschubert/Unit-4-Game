// Homework 4 JQuery

$(document).ready(function() {

    //Generate random target number between 120 and 19.
    //Math.floor(Math.random() * (max - min + 1)) + min;
    var targetNumber = Math.floor(Math.random() * 102) + 19;
    console.log("Target Number: " + targetNumber);

    //Generate random values for the emojis between 12 and 1
    var emoji1 = Math.floor(Math.random() * 12) + 1;
    var emoji2 = Math.floor(Math.random() * 12) + 1;
    var emoji3 = Math.floor(Math.random() * 12) + 1;
    var emoji4 = Math.floor(Math.random() * 12) + 1;
    console.log("Emoji values: " + emoji1, emoji2, emoji3, emoji4);

    //Show target number to player
    $("#targetScore").html("Target Number: " + targetNumber);

    //Set variables for total wins, totals losses, and the current player total
    var wins = 0;
    var losses = 0;
    var currentTotal = 0;

    //Create function to reset the game
    function init() {
        currentTotal = 0;
        targetNumber = Math.floor(Math.random() * 120) + 19;
        console.log("Target Number: " + targetNumber);
        $("#targetScore").html("Target Number: " + targetNumber);
        $("#currentScore").html("Current Score: " + currentTotal);
        emoji1 = Math.floor(Math.random() * 12) + 1;
        emoji2 = Math.floor(Math.random() * 12) + 1;
        emoji3 = Math.floor(Math.random() * 12) + 1;
        emoji4 = Math.floor(Math.random() * 12) + 1;
        console.log("Emoji values: " + emoji1, emoji2, emoji3, emoji4);
    }

    //Create function to calculate wins and losses
    function calculate() {
        if (currentTotal === targetNumber) {
            wins++;
            alert("Congrats! You matched the number! Victory!");
            $("#wins").html("Wins: " + wins);
            init();
        }
        else if (currentTotal > targetNumber) {
            losses++;
            alert("Sorry! You went over the target number. :( ");
            $("#losses").html("Losses: " + losses);
            init();
        }
    };

    //Clicking on images, updating total, checking whether player wins
    $("#emoji1").on("click", function() {
        currentTotal = currentTotal + emoji1;
        console.log("Current total = " + currentTotal);
        $("#currentScore").html("Current Score: " + currentTotal);
        calculate();
    });

    $("#emoji2").on("click", function() {
        currentTotal = currentTotal + emoji2;
        console.log("Current total = " + currentTotal);
        $("#currentScore").html("Current Score: " + currentTotal);
        calculate();
    });

    $("#emoji3").on("click", function() {
        currentTotal = currentTotal + emoji3;
        console.log("Current total = " + currentTotal);
        $("#currentScore").html("Current Score: " + currentTotal);
        calculate();
    });

    $("#emoji4").on("click", function() {
        currentTotal = currentTotal + emoji4;
        console.log("Current total = " + currentTotal);
        $("#currentScore").html("Current Score: " + currentTotal);
        calculate();
    });

});