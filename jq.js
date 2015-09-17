$(document).ready(function () {
    console.log("ready");

    $("#playground").click(function (e) {
        console.log("click " + e.pageX + "  " + e.pageY);
        //var offset = $(this).offset();
        //alert(e.pageX - offset.left);
        //alert(e.pageY - offset.top);
        var item = [   X  = e.pageX,
         Y = e.pageY];


        console.log(item[0]);
    })


})