
$(function(){


var num = sessionStorage.getItem("person");
var role = JSON.parse(sessionStorage.getItem('key'));
console.log(role);

$("#pic2").hide();
$("#btn2").hide();

var a = 1;
var b = 2;

$("#btn1").click(function () {

    $("#btn1").hide();
    $("#btn2").show()
        .text("将身份传递给" + a + "号");

    $("#identify").text(role[a-1]);

    a = a + 1;

    $("#pic1").hide();
    $("#pic2").show();

    }
);

$("#btn2").click(function () {
    if ( num == b-1 ){
        window.location.href = "法官日志.html";
    } else {
        $("#btn2").hide();
        $("#btn1").show()
            .text("查看" + b + "号身份");
        b = b + 1;

        $("#pic2").hide();
        $("#pic1").show();

        $("#circle").text(a);

        $("#identify").text("");
    }
    }

);

});



