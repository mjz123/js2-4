$(function(){
    var num = sessionStorage.getItem("person");
    var role = JSON.parse(sessionStorage.getItem('key'));
    var rolegather = JSON.parse(sessionStorage.getItem("rolegather"));
    num = Number(num);

    if (sessionStorage.getItem("vote")){
        vote = JSON.parse(sessionStorage.getItem("vote"));
    } else {
        var vote =new Array();
    }




    for (var i= num + 1; i <= 18; i++){
        $("#box" + i).remove();
    }
    for (var u=0; u < num; u++){
        $("#msg" + (u+1) ).text(role[u]);
    }
    var group = $(".top");

    var lastsel;
    for (var j=0 ;j < group.length ;j++){
        group[j].index = j;
        if (rolegather[j].status == "die"){
            $(group[j]).css("background","red");
        }

        group[j].onclick = function () {
                if ( rolegather[this.index].status == "die" ){
                    alert("他已经死了");
                } else {
                    if ( lastsel != undefined ){
                        rolegather[lastsel].status = "live";
                        $(group[lastsel]).css("background","#f5c97b");
                    }
                    $(group[this.index]).css("background","red");
                    rolegather[this.index].status = "die";
                    lastsel = this.index;

                }

            }
        }
    console.log(rolegather);


    $("#vote").click(function () {
        var killer = 0;
        var civ = 0;
        for (var k=0; k < group.length; k++){
            if (rolegather[k].identity == "杀手"){
                killer++;
                if ( rolegather[k].status == "die" ){
                    killer--;
                }
            } else {
                civ++;
                if ( rolegather[k].status == "die" ){
                    civ--;
                }
            }
        }
        console.log(killer);
        console.log(civ);

        sessionStorage.setItem("killer",killer);
        sessionStorage.setItem("civ",civ);

        if ( lastsel == undefined ){
            alert("请行使你的投票权")
        } else if (killer == 0 || killer == civ || killer + 1 == civ ) {
            sessionStorage.setItem("roleGatherEnd",JSON.stringify(rolegather));
            vote.push(rolegather[lastsel]);
            console.log(vote);
            sessionStorage.setItem("vote", JSON.stringify(vote));
            window.location.href = "结果.html";
        } else {
            sessionStorage.setItem("rolegather",JSON.stringify(rolegather));

            vote.push(rolegather[lastsel]);
            sessionStorage.setItem("vote", JSON.stringify(vote));
            window.location.href="法官台本.html";
        }
    })
});
