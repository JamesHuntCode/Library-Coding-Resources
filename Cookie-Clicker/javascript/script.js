$(document).ready(function() {
    var userScore = 0;
    var doublePoints = false;
    var displayUserScore = $('#score');

    // Show user their score
    var showScore = function() {
        displayUserScore.html("Your Score: " + userScore);
    }

    // Detect user clicking on cookie
    $('#cookie').on('click', function() {
        if ((userScore >= 10) && (userScore <= 20)) {

            if (doublePoints) {
                userScore += 4;
            } else {
                userScore += 2;
            }

            $('body').css('backgroundColor', 'gold');
            showScore();
        } else {

            if (doublePoints) {
                userScore += 2;
            } else {
                userScore++;
            }

            $('body').css('backgroundColor', 'white');
            showScore();
        }
    });

    // Allow user to buy power ups
    $('.powerup').on('click', function() {
        var selectedPowerUp = $(this);

        if (selectedPowerUp.is('#double-points')) {
            if (userScore < 50) {
                notEnough();
            } else {
                userScore -= 50;
                showScore();

                enableDoublePoints();
            }
        } else if (selectedPowerUp.is('#auto-clicker')) {
            if (userScore < 25) {
                notEnough();
            } else {
                userScore -= 25;
                showScore();

                setInterval(autoClick, 1000);
            }
        } else {
            if (userScore < 75) {
                notEnough();
            } else {
                userScore -= 75;
                showScore();

                setInterval(granny, 1000);
            }
        }
    });

    var notEnough = function() {
        alert("YOU DON'T HAVE ENOUGH $$$! GET BACK TO CLICKING!");
    };

    // Powerup methods
    var enableDoublePoints = function() {
        doublePoints = true;
    }

    var autoClick = function() {
        userScore += 0.5;
        showScore();
    }

    var granny = function() {
        userScore += 5;
        showScore();
    }
});
