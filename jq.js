$(document).ready(function () {
    console.log("ready");
    var user1Moves = 0;
    var user2Moves = 0;
    var recMoves = [];

    $("#playground").click(function (e) {
        //console.log("click " + e.pageX + "  " + e.pageY);
        //var offset = $(this).offset();
        //alert(e.pageX - offset.left);
        //alert(e.pageY - offset.top);
        var playernumber = $("#playerNumber").text();
        var playermoves = $("#playerMoves").text();




        if (playermoves != "0") {
            var location = { xAxis: e.clientX, yAxis: e.clientY };
            recMoves[user1Moves] = [location.xAxis - 12.5, location.yAxis - 12.5];
            console.log("click if " + playernumber + "  " + playermoves);
            $("#circle").css({
                "visibility": "visible",
                //"background":"",
                "position": "absolute",
                "left": location.xAxis - 12.5,
                "top": location.yAxis - 12.5
            });

            $("#playerMoves").text( (parseInt($("#playerMoves").text()) -1  ));
            console.log(recMoves[user1Moves]);

            if(playermoves === "1"){
                alert("moves are up!!");
                console.log("moves are up");
            }


        }



        console.log("click " + playernumber + playermoves);

    })


});