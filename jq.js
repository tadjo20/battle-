$(document).ready(function () {
    console.log("ready");
    var user1Moves = 0;
    var user2Moves = 0;
    var recMoves = [];
    var compMoves = [];

    function compare(){
        console.log("from compare");
    }
    function computerMove(recMoves){
        console.log("from computer moves  " + recMoves);
        for( var comindex = 0 ; comindex < recMoves.length ; comindex++ ){
            console.log(" comp loop");
            playFieldWidth = $("#playground").innerWidth();
            playFieldLength = $("#playground").innerHeight();
            playOffsetX = $("#playground").position().left;
            playOffsetY = $("#playground").position().top;
           // console.log( playFieldWidth);

          //  console.log(Math.floor((Math.random() * (playOffsetX + playFieldWidth)) + 1) );
            var compXposition = ((Math.random() * (playOffsetX + playFieldWidth)) + playOffsetX).toFixed(1);
            var compYposition = ((Math.random() * (playOffsetY + playFieldLength)) + playOffsetY).toFixed(1);

            console.log( compXposition + "  " + compYposition );
            compMoves.push(compXposition,compYposition );
        }
     console.log(compMoves);
    }

    $("#playground").click(function (e) {
        //console.log("click " + e.pageX + "  " + e.pageY);
        //var offset = $(this).offset();
        //alert(e.pageX - offset.left);
        //alert(e.pageY - offset.top);
        var playernumber = $("#playerNumber").text();
        var playermoves = $("#playerMoves").text();
        var loops = 0;



        if (playermoves != "0") {
            var location = { xAxis: e.clientX, yAxis: e.clientY };
            recMoves.push([location.xAxis - 12.5, location.yAxis - 12.5]);
           // console.log("click if " + playernumber + "  " + playermoves);
            $("#circle").css({
                "visibility": "visible",
                //"background":"",
                "position": "absolute",
                "left": location.xAxis - 12.5,
                "top": location.yAxis - 12.5
            });

            $("#playerMoves").text( (parseInt($("#playerMoves").text()) -1  ));
           // console.log(recMoves[user1Moves]);

            if(playermoves === "1"){
               // alert("moves are up!!");
                console.log("moves are up");


                for (var i = 0; i < recMoves.length; ++i){
                   // console.log( recMoves[i] + "  " + recMoves.length );
                   // console.log(loops + "   " + "loops")
                }

                computerMove(recMoves);
                compare();

            }


        }
       // console.log(loops + "   " + "loops");
        loops++;
       // console.log(loops + "   " + "loops");
       // console.log("click " + playernumber + playermoves);

    })


});