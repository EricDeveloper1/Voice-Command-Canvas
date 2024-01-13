x = 0;
y = 0;
draw_circle = "";
draw_rect = "";
draw_square = "";
draw_ell = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition;

function start() {
    document.getElementById("status").innerHTML = "System is listening please speak";
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);

    var content  = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The Speech has been recognized as: " + content;
    if(content == "Circle.") {
        x = Math.floor(Math.random() * 700);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing a circle";
        draw_circle = "set";
    }
    if(content == "Rectangle.") {
        x = Math.floor(Math.random() * 700);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing a rectangle";
        draw_rect = "set";
    }
    if(content == "Square.") {
        x = Math.floor(Math.random() * 700);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing a square";
        draw_square = "set";
    }
    if(content == "Ellipse.") {
        x = Math.floor(Math.random() * 700);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing an ellipse";
        draw_ell = "set";
    }
}

function setup() {
    canvas = createCanvas(900, 600);
}

function draw() {
    if(draw_circle == "set") {
        radius = Math.floor(Math.random() * 100);
        circle(x, y, radius);
        document.getElementById("status").innerHTML = "Circle is drawn. ";
        draw_circle = "";
    }

    if(draw_rect == "set") {
        rect(x, y, Math.random() * 100, Math.random() * 70);
        document.getElementById("status").innerHTML = "Rectangle is drawn. ";
        draw_rect = "";
    }
    if(draw_square == "set") {
        square = Math.random() * 100;
        rect(x, y, square, square);
        document.getElementById("status").innerHTML = "Square is drawn. ";
        draw_square = "";
    }
    if(draw_ell == "set") {
        ellipse(x, y, Math.random() * 140, Math.random() * 100);
        document.getElementById("status").innerHTML = "Ellipse is drawn. ";
        draw_ell = "";
    }
}