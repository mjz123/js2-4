$(function(){

    var killer = sessionStorage.getItem("killer");
    var civ = sessionStorage.getItem("civ");
    var day = Number(sessionStorage.getItem("m"));
    var rolegather = JSON.parse(sessionStorage.getItem("roleGatherEnd"));
    var death = JSON.parse(sessionStorage.getItem("death"));
    console.log(death);
    var vote = JSON.parse(sessionStorage.getItem("vote"));
    console.log(vote);
    console.log(rolegather);

    if ( killer == 0 ){
        $(".msg1").append(
            '<div>' + "水民胜利" + '</div>' +
            '<p>' + "恭喜！这是属于水民的时刻" + '</p>'
        );
    } else {
        $(".msg1").append(
            '<div>' + "杀手胜利" + '</div>' +
            '<p>' + "太棒了!你知道么？在捉鬼游戏中只有20%的杀手取得了最终的胜利" + '</p>'
        );
    }


    for (var i=1; i <= day-1; i++){
        $(".msg2").append(
            '<div class="msg3">' +
            '<div>' +
            '<h4>' +  "第" + i + "天" + '</h4>'+
            '<p>' + "黑夜：" + death[i-1].number + "号被杀死，角色是" + death[i-1].identity +'</p>' +
            '<p>' + "白天：" + vote[i-1].number + "号被杀死，角色是" + vote[i-1].identity+'</p>' +
            '</div>' +
            '</div>'
        );
    }

    $(".left").click(function () {
        sessionStorage.clear();
        window.location.href = "首页.html";
    });


});
