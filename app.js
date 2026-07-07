
var move,
    pos = 10,
    toy = document.getElementsByClassName("toy");

for (let i = 0; i < toy.length; i++) {

    toy[i].style.width = "170px";
    toy[i].style.height = "250px";
    toy[i].style.objectFit = "contain";
    toy[i].style.position = "absolute";
    toy[i].style.transition = "0.3s";
}

function toy1() {

    if (toy[0].offsetTop < 100) {

        toy[0].setAttribute("src", "./winner.png");

        $(".toy1").fadeOut(2500);

    } else {

        toy[0].style.bottom =
            Math.floor(Math.random() + pos) + 60 + "px";

        toy[0].setAttribute("src", "running.gif");
    }
}

function toy2() {

    if (toy[1].offsetTop < 100) {

        toy[1].setAttribute("src", "./winner.png");

        $(".toy2").fadeOut(2500);

    } else {

        toy[1].style.bottom =
            Math.floor(Math.random() + pos) + 10 + "px";

        toy[1].setAttribute("src", "running.gif");
    }
}

function toy3() {

    if (toy[2].offsetTop < 100) {

        toy[2].setAttribute("src", "./winner.png");

        $(".toy3").fadeOut(2500);

    } else {

        toy[2].style.bottom =
            Math.floor(Math.random() + pos) + 35 + "px";

        toy[2].setAttribute("src", "running.gif");
    }
}

function toy4() {

    if (toy[3].offsetTop < 100) {

        toy[3].setAttribute("src", "./winner.png");

        $(".toy4").fadeOut(2500);

    } else {

        toy[3].style.bottom =
            Math.floor(Math.random() + pos) + 20 + "px";

        toy[3].setAttribute("src", "running.gif");
    }
}

function toy5() {

    if (toy[4].offsetTop < 100) {

        toy[4].setAttribute("src", "./winner.png");

        $(".toy5").fadeOut(2500);

    } else {

        toy[4].style.bottom =
            Math.floor(Math.random() + pos) + 50 + "px";

        toy[4].setAttribute("src", "running.gif");
    }
}

$("#start").click(function () {

    $("#start").prop("disabled", true);

    if (monster.classList.contains("fixed")) {

        var t = document.getElementsByClassName("toy");

        for (let e = 0; e < t.length; e++) {

            t[e].classList.add("loser");

            Gun.play();

            clearInterval(this);

            $("#body").addClass("loserBody");

            setTimeout(function () {

                window.location = window.location;

            }, 3000);
        }

    } else {

        move = setInterval(function () {

            document.getElementsByClassName("toy");

            document.getElementById("monster");

            toy1();
            toy2();
            toy3();
            toy4();
            toy5();

            $(".toy").removeClass("fixed");

            pos += 30;

        }, 1000);
    }
});

$("#stop").click(function () {

    $("#start").prop("disabled", false);

    clearInterval(move);

    $(".toy").addClass("fixed");

    toy[0].setAttribute("src", "./player1.jpg");
    toy[1].setAttribute("src", "./player2.jpg");
    toy[2].setAttribute("src", "./player3.jpg");
    toy[3].setAttribute("src", "./player1.jpg");
    toy[4].setAttribute("src", "./player4.jpg");
});

var x = document.getElementById("myAudio"),
    Gun = document.getElementById("Gun");

function stratGame() {

    x.play();

    document.getElementById("load");

    $("#load").fadeOut();

    var t = setInterval(function () {

        var e = document.getElementById("monster"),
            o = e.getAttribute("src");

        x.play();

        $("#monster").removeClass("fixed");

        if ("FaceMonster.jpg" == o) {

            e.setAttribute("src", "BackMonster.jpg");

            x.play();

        } else {

            e.setAttribute("src", "FaceMonster.jpg");

            x.pause();

            x.remove();

            x.currentTime = 0;

            $("#monster").addClass("fixed");

            let s = document.getElementsByClassName("toy");

            for (let n = 0; n < s.length; n++) {

                if (!s[n].classList.contains("fixed")) {

                    s[n].classList.add("loser");

                    Gun.play();

                    clearInterval(move);

                    clearInterval(t);

                    $("#body").addClass("loserBody");

                    setTimeout(function () {

                        window.location = window.location;

                    }, 3000);
                }
            }
        }

    }, 5000);
}

var CheckMove = setInterval(function () {

    var t = document.getElementById("monster");

    let e = document.getElementsByClassName("toy");

    for (let o = 0; o < e.length; o++) {

        if (
            t.classList.contains("fixed") &&
            !e[o].classList.contains("fixed")
        ) {

            e[o].classList.add("loser");

            Gun.play();

            clearInterval(move);

    toy = document.getElementsByClassName("toy");


        toy[0].setAttribute("src", "./player1.jpg");   
        toy[1].setAttribute("src", "./player2.jpg");            
        toy[2].setAttribute("src", "./player3.jpg");            
        toy[3].setAttribute("src", "./player1.jpg");            
        toy[4].setAttribute("src", "./player4.jpg");            
         

            setTimeout(function () {

                window.location = window.location;
            }, 3000);
        }
    }

}, 1000);

document.onkeydown = function (t) {

    return !t.ctrlKey ||
        (
            t.keyCode !== 67 &&
            t.keyCode !== 86 &&
            t.keyCode !== 85 &&
            t.keyCode !== 117
        );
};

$(document).keypress("u", function (t) {

    return !t.ctrlKey;

});

document.addEventListener("contextmenu", function (t) {

    t.preventDefault();

}, false);

$(document).keydown(function (t) {

    return t.keyCode != 123 &&
        (!t.ctrlKey || !t.shiftKey || t.keyCode != 73);

});
