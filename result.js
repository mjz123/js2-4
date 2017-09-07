/**
 * Created by hasee on 2017/9/6.
 */
$(function () {
    var num = sessionStorage.getItem("person");
    var killer = sessionStorage.getItem("killer");
    var civ = sessionStorage.getItem("civ");
    var day = Number(sessionStorage.getItem("m"));
    var rolegather = JSON.parse(sessionStorage.getItem("rolegather"));

    console.log(killer);
    if ( killer == 0 ){
        $(".msg1").append(
            '<div>' + "杀手胜利" + '</div>' +
            '<p>' + "太棒了!你知道么？在捉鬼游戏中只有20%的杀手取得了最终的胜利" + '</p>'
        );
    } else {
        $(".msg1").append(
            '<div>' + "水民胜利" + '</div>' +
            '<p>' + "恭喜！这是属于水民的时刻" + '</p>'
        );
    }

    var date = 1;
    var no = new Array();
    for (var j=0; j < num; j++){
        for (var k=0; k < num; k++){
            if (rolegather[k].day == date){
                if ( rolegather[k].status == "die") {
                    no.push(rolegather.number);
                }
            }
            date++;
        }
    }

    for (var i=1; i <= day; i++){
        $(".msg1").after(
            '<div class="msg3">' +
            '<div>' +
            '<h4>' +  "第" + i + "天" + '</h4>'+
            '<p>' + "黑夜：" + no[i-1] + "号被杀手杀死，号是" + '</p>' +
            '<p>' + "白天：号被杀手杀死，号是" + '</p>' +
            '</div>' +
            '</div>'
        );
    }

    $(".left").click(function () {
        sessionStorage.clear();
        window.location.href = "首页.html";
    });
})
