/**
 * Created by hasee on 2017/8/29.
 */
$(function(){
    var num = sessionStorage.getItem("person");
    var role = JSON.parse(sessionStorage.getItem('key'));

    //第一种方法
    $(".box").hide();

    for (var i=1 ;i <= num ; i++){
        $("#box" + i).show();
    }

    for (var u=0 ;u < num ; u++){
        $("#msg" + (u+1) ).text(role[u]);
    }

    //第二种方法
    // function add () {
    //     for (var i = 0 ;i < num ;i++){
    //         $("main").append(
    //             '<div class="row">' +
    //                 '<div class="box">' +
    //                     '<div class="top">' + role[i] +
    //                     '<div class="bottom">' + (i+1) + "号"+
    //                     '<div class="sec">' +
    //                         // "<ul>" + '<li class="ctn-1"></li>' + "</ul>" +
    //                     "</div>" +
    //                     "</div>" +
    //                     "</div>" +
    //                 "</div>" +
    //             "</div>"
    //         )
    //     }
    // }
    // add();

});
