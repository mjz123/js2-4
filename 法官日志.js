/**
 * Created by hasee on 2017/8/29.
 */
$(function(){
    var num = sessionStorage.getItem("person");
    var role = JSON.parse(sessionStorage.getItem('key'));
    console.log(num);

    $(".box").hide();

    for (var i=1 ;i <= num ; i++){
        $("#box" + i).show();
    }

    for (var u=0 ;u < num ; u++){
        $("#msg" + (u+1) ).text(role[u]);
    }

});
