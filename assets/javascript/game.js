//set up random number user is trying to match
    $(document).ready(function () {
    var Random = Math.floor(Math.random() * 101) + 19;
    console.log(Random);
    $("#randomNumber").text(Random);

    //setting up four random numbers array, total variable and printing the wins and losses variable

    var generatedNumbers = [];
    var total = 0;
    var wins = 0;
    var losses = 0;
    $("#numberWins").text(wins);
    $("#numberLosses").text(losses);

    //sets up random numbers for each jewel

    function fourRandomNumbers() {
        for (i = 0; i < 4; i++) {
            var num = Math.floor(Math.random() * 12) + 1;
            generatedNumbers.push(num);
        }
        console.log(generatedNumbers);
    }
    fourRandomNumbers();

    // resets the game

    function reset() {
        Random = Math.floor(Math.random() * 101) + 19;
        console.log(Random);
        $("#randomNumber").text(Random);
        generatedNumbers = [];
        fourRandomNumbers();
        total = 0;
        $("#combined").text(total);
    }

    // adds wins to total
    function winner() {
        alert("You Win!");
        wins++;
        $("#numberWins").text(wins);
        reset();
    }

    // adds losses to total

    function loser() {
        alert("You Lose! Try again.");
        losses++;
        $("#numberLosses").text(losses);
        reset();
    }

    // sets up click for jewels
    $("#redgem").on("click", function() {
        total = total + generatedNumbers[0];
        console.log("randomNumber")
    })

    // sets win/lose condition
});
