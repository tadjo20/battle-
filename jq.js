$(document).ready(function () {
    console.log("ready");

    $("#playground").click(function (e) {
        //console.log("click " + e.pageX + "  " + e.pageY);
        //var offset = $(this).offset();
        //alert(e.pageX - offset.left);
        //alert(e.pageY - offset.top);
        var playernumber = $("#playerNumber").text();
        var playermoves = $("#playerMoves").text();

        if (playermoves != "0") {
            var location = { xAxis: e.clientX, yAxis: e.clientY };

            console.log("click if " + playernumber + "  " + playermoves);
            $("#circle").css({
                "visibility": "visible",
                //"background":"",
                "position": "absolute",
                "left": location.xAxis - 14,
                "top": location.yAxis - 14
            });
            //playermoves.text($("playerMoves").text((parseInt(playermoves) - 1).toString()));
            //$("playerMoves").text((parseInt(playermoves) - 1).toString());
            //$("playerMoves").text().toString();
            $("#playerMoves").text( (parseInt($("#playerMoves").text()) -1  ));
            console.log( (parseInt($("#playerMoves").text()) -1  ));
        }



        console.log("click " + playernumber + playermoves);

    })


})