/**
 * Created by hasee on 2017/8/31.
 */
$(function(){
    var x =  sessionStorage.getItem("state");

    var day = 1;

    if (sessionStorage.getItem("m")){
        day = Number(sessionStorage.getItem("m"));
    }

    console.log(day);

    for (var i = 1; i<=day; i++){
        $("main").append(
        '<div class="day">' + '第' + i + '天' + '</div>' +
        '<div class="operate">' +
        '<button id="btn1">' + '杀手杀人' + '</button>' +
        '<button id="btn2">' + '亡灵发表遗言' + '</button>' +
        '<button id="btn3">' + '玩家依次发言' + '</button>' +
        '<button id="btn4">' + '全民投票' + '</button>' +
        '</div>'
        );
    }

    var del = $(".operate");
    console.log(del);
    for (var j=0; j<day; j++){
        $(del[j-1]).remove();
    }


    if ( x == null ) {
        $("#btn1").click(function () {
            window.location.href = "杀手杀人.html";
            i=1;
            sessionStorage.setItem("state", i );
            });
        $("#btn2,#btn3,#btn4").click(function () {
            alert("请按照步骤进行");
        });
    }

    var a = function () {
        alert("请按步骤进行");
    };


     if ( x == 1 ) {
        $("#btn1").css({"background":"#9a9a9a"})
            .attr("disabled",true);
            x = Number(x) + 1;

        // $("body#btn3,body#btn4").click(function(){
        //     alert("请按步骤进行");
        // });

        // $("#btn3,#btn4").click(function(){
        //      alert("请按步骤进行");
        // });

        $("body").on("click", "#btn3,#btn4", a);

        // $("#btn3,#btn4").on("click", a);
    }

    $("#btn2").click(function () {
        if ( x == 2 ){
            $("#btn2").css({"background":"#9a9a9a"})
                .attr("disabled",true);
            alert("请亡灵发表遗言");
            x = x + 1;
        }
    });
    $("#btn3").click(function () {
        if( x == 3 ){
            $("#btn3").css({"background":"#9a9a9a"})
                .attr("disabled",true);
            alert("玩家依次发言");
            x = x + 1;
        }
    });
    $("#btn4").click(function () {
        if( x == 4 ){
            $("#btn4").css({"background":"#9a9a9a"})
                .attr("disabled",true);
            sessionStorage.removeItem("state");
            window.location.href = "投票.html";
            day = day + 1;
            sessionStorage.setItem("m", day);
        }
    });


});
