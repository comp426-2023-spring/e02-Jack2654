// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

var rps = false;
var rpsls = false;
var opponent = false; 
const moves = ["rock", "paper","scissors","lizard", "spock"];
var move = "rock";

function hidethis(){
    document.getElementById("rpsls_move_options").hidden = true; 
}

function rules(){
    var x = document.getElementById("view_rules");
    if(x.style.display == "none"){
        x.style.display="flex";
    } else {
        x.style.display="none";
    }
}

function reset(){
    location.reload();
    rps=false;
    rpsls=false;
    opponent=false;
    move="rock";
    document.getElementById("game_options").hidden = false;
    document.getElementById("rpsls_move_options").hidden = true; 
    document.getElementById("results").hidden = true; 
    document.getElementById("rps").checked = false;
    document.getElementById("rpsls").checked = false;
    document.getElementById("opponent").checked = false;
    document.getElementById("random").checked = false;
}

function unhidethis(){
    document.getElementById("rpsls_move_options").hidden = false; 
}

function rpsgame(){
    rps = true;
    rpsls = false;
}

function rpslsgame(){
    rps = false;
    rpsls = true;
}

function opponentgame(){
    opponent = true;
}

function random_draw(){
    opponent = false;
}

function playgame(){
    if (!document.getElementById("rps").checked && !document.getElementById("rpsls").checked)
        window.alert("Must select a game to play");
    else{
        if(!opponent){
            makeMove()
        }
        else{
            document.getElementById("rpsls_move_options").hidden = false; 
            document.getElementById("game_options").hidden = true;
            if (rps){
                var dropdown = document.getElementById("your_move");
                dropdown.options[3] = null;
                dropdown.options[3] = null;
            }
        } 
    }

}

function makeMove(){
    if(!opponent) {
        if(rps){
            var randMove = moves[Math.floor(Math.random()* 3)];
            var api = "/app/rps/play/" + randMove;
            fetch(api).then(response => response.json()).then(data => {
                ret_html = `<h2>You played: ${data["player"]}</h2>
                <h2>Your opponent played: ${data["opponent"]}</h2>
                <h2> The result is: ${data["result"]}<\h2>`
                document.getElementById("results").innerHTML = ret_html;
                document.getElementById("game_options").hidden = true; 
                document.getElementById("results").hidden = false; 
            });
        } else {
            var randMove = moves[Math.floor(Math.random()* 5)];
            var api = "/app/rpsls/play/"+randMove;
            fetch(api).then(response => response.json()).then(data => {
                ret_html = `<h2>You played: ${data["player"]}</h2>
                <h2>Your opponent played: ${data["opponent"]}</h2>
                <h2> The result is: ${data["result"]}<\h2>`
                document.getElementById("results").innerHTML = ret_html;
                document.getElementById("game_options").hidden = true; 
                document.getElementById("results").hidden = false; 
            });

        }
    }
    else{
        var index = document.getElementById("your_move");
        move = moves[index.value - 1];
        if(rps){
            var api = "/app/rps/play/" + move;
            fetch(api).then(response => response.json()).then(data => {
                ret_html = `<h2>You played: ${data["player"]}</h2>
                <h2>Your opponent played: ${data["opponent"]}</h2>
                <h2> The result is: ${data["result"]}<\h2>`
                document.getElementById("results").innerHTML = ret_html;
                document.getElementById("rpsls_move_options").hidden = true; 
                document.getElementById("results").hidden = false; 
            });
        } else {
            var api = "/app/rpsls/play/"+ move;
            fetch(api).then(response => response.json()).then(data => {
                ret_html = `<h2>You played: ${data["player"]}</h2>
                <h2>Your opponent played: ${data["opponent"]}</h2>
                <h2> The result is: ${data["result"]}<\h2>`
                document.getElementById("results").innerHTML = ret_html;
                document.getElementById("rpsls_move_options").hidden = true; 
                document.getElementById("results").hidden = false; 
            });
        }
    } 
}