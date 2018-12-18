var button = ["red","blue","green","yellow"];
var gamePattern = [];
var userPattern = [];

var started = false;
var level = 0;

$(document).keypress(function () { 
    if(!started){
        $("#level-title").text("Level "+level);
        seq();
        started = true;
        $("#inst").addClass("hide");
        $("#remove").addClass("hide");
    }
});

$(document).click(function () { 
    if(!started){
        $("#level-title").text("Level "+level);
        seq();
        started = true;
        $("#inst").addClass("hide");
        $("#remove").addClass("hide");
    }
});

$(".btn").click(function () {
    var userClicked = $(this).attr("id");  
    userPattern.push(userClicked);
    console.log(gamePattern);
    console.log(userPattern);  
    playSound(userClicked);
    prssAnimationByUser(userClicked);
    console.log(userPattern.length-1);
    checkAnswer(userPattern.length-1);
})


function checkAnswer(clevel) { 
    if(gamePattern[clevel]===userPattern[clevel]){
        console.log("Ok");
        if(userPattern.length===gamePattern.length){
            setTimeout(function(){
                seq();
            },1000);
        }
    }else{
        console.log("Wrong");
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        },200);
        $("#level-title").text("Game Over, Press any key To start or click anywhere");
        $("#remove").removeClass("hide");
        startAgain();
    }
 }


function seq(){
    userPattern = [];
    level++;
    $("#level-title").text("Level "+level);
    var randomNumber = Math.floor(Math.random()*4);
    var randomColor = button[randomNumber];
    gamePattern.push(randomColor);

    $("#"+randomColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomColor);
}
function playSound (name){
    var playAudio = new Audio("sounds/"+name+".mp3");
    playAudio.play();
}

function prssAnimationByUser(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    },100);
}

function startAgain(){
    level = 0;
    gamePattern = [];
    started = false;
}

function animateIcon() {

    $('#love').fadeOut().fadeIn();
    animateIcon();
};

animateIcon();
