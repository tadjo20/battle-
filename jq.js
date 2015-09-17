$(document).ready(function () {
    console.log("ready");

    $("#playground").click(function (e) {
        //console.log("click " + e.pageX + "  " + e.pageY);
        //var offset = $(this).offset();
        //alert(e.pageX - offset.left);
        //alert(e.pageY - offset.top);




        var location = {xAxis: e.clientX, yAxis: e.clientY};


        $("#circle").css({
            "visibility": "visible",
            //"background":"",
            "position":"absolute",
            "left":location.xAxis,
            "top":location.yAxis
        });

        console.log("click " );

    })


})