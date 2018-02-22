$(document).ready(function() {
    // Display user score
    var playerScore = 0;
    var updateScore = function() {
        $('#score').html("Your Score: " + playerScore);
    }
    updateScore();

    var rows = [$('#top'), $('#middle'), $('#bottom')];

    var topTiles = [$('#topLeft'), $('#topMid'), $('#topRight')];
    var middleTiles = [$('#midLeft'), $('#midMiddle'), $('#midRight')];
    var bottomTiles = [$('#bottomLeft'), $('#bottomMiddle'), $('#bottomRight')];

    var allTiles = [topTiles, middleTiles, bottomTiles];

    var hideMoles = function() {
        for(let i = 0; i < allTiles.length; i++) {
            for(let j = 0; j < allTiles[i].length; j++) {
                allTiles[i][j].css('visibility', 'hidden');
            }
        }
    }

    // Select random tile
    var showRandomMole = function() {
        hideMoles();
        var randomRow = allTiles[Math.floor(Math.random() * allTiles.length)];

        var hitMe = randomRow[Math.floor(Math.random() * 3)];
        hitMe.css('visibility', 'visible');
    }
    showRandomMole();

    // On-click event for the 'mole'
    $('.tile').on('click', function() {
        playerScore++;
        updateScore();
        showRandomMole();
    });
});
