/**
 * Created by hasee on 2017/8/31.
 */
$(function(){
    var num = sessionStorage.getItem("person");
    var role = JSON.parse(sessionStorage.getItem('key'));
    num = Number(num);

    if (sessionStorage.getItem("death")){
         death = JSON.parse(sessionStorage.getItem('death'));
    } else {
        var death =new Array();
    }


    for (var i= num + 1; i <= 18; i++){
        $("#box" + i).remove();
    }
    for (var u=0; u < num; u++){
        $("#msg" + (u+1) ).text(role[u]);
    }
    var group = $(".top");

    var rolegather = new Array();

    if ( sessionStorage.getItem("rolegather")){
        rolegather = JSON.parse(sessionStorage.getItem("rolegather")); //第二次之后直接读取sessionStorage值
    } else {
        for (var k=0; k<num; k++) {
        rolegather[k] = {};
        rolegather[k].status = "live";
        rolegather[k].number = k + 1;
        rolegather[k].identity = role[k];//第一次进入页面先创建数组对象
    }}

    //杀人动作
    var lastsel;
    for (var j=0 ;j < group.length ;j++){
        group[j].index = j;
        if (rolegather[j].status == "die") {
            $(group[j]).css("background","red");
        }
        group[j].onclick = function () {

            if ( rolegather[this.index].identity == "杀手" ||  rolegather[this.index].status == "die"){
                alert("你杀错人了");//用if判断，已经死的人不能再杀
            } else {
                if (lastsel != undefined){
                    rolegather[lastsel].status = "live";
                    $(group[lastsel]).css("background","#f5c97b");
                }
                $(group[this.index]).css("background","red");
                rolegather[this.index].status = "die";
                lastsel = this.index; //最后一次点击时的数字

            }
        }
    }
    console.log(rolegather);

    $("#kill").click(function () {
        if ( lastsel == undefined ){
            alert("不杀人就想跑？")
        } else {
            death.push(rolegather[lastsel]);
            console.log(death);
            sessionStorage.setItem("rolegather",JSON.stringify(rolegather));
            sessionStorage.setItem("death", JSON.stringify(death));
            window.location.href="法官台本.html";
        }
    })
});

