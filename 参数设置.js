/**
 * Created by hasee on 2017/8/25.
 */
var num = document.getElementById("num");
var x = document.getElementById("slider");
var minus = document.getElementById("btn1");
var plus = document.getElementById("btn2");
minus.onclick = function () {
    x.value--;
    num.value = x.value;
};
plus.onclick = function () {
    x.value++;
    num.value = x.value;
};
x.oninput = function () {
    num.value = x.value;
};
num.onchange = function () {
    x.value = num.value;
};
var role = new Array();
var i = 0;
var person = null;


//将身份放到数组中
var given = function () {
    var remove =  new Object();
    person = num.value;
    sessionStorage.person = num.value;
    for (i=0 ; i < person ;i++){
        role[i] = "平民";
    }
    switch (true) {
        case person >= 4 && person < 9 :
            remove = role.splice(0, 1, "杀手");
            break;
        case person >= 9  && person < 12 :
            remove = role.splice(0, 2, "杀手","杀手");
            break;
        case person >= 12  && person < 16 :
            remove = role.splice(0, 3, "杀手","杀手","杀手");
            break;
        case person >= 16  && person < 19 :
            remove = role.splice(0, 4, "杀手","杀手","杀手","杀手");
            break;
        default:
            alert("wrong");
    }



};

//将身份随机排序
var shuffle = function () {
    var len = role.length;
    for (var a=0; a < len -1 ; a++){
        var index = Math.floor(Math.random()*(len - a));
        var temp = role[index];
        role[index] = role[len - 1 - a];
        role[len - 1 - a] = temp;
    }
};

//在界面上显示出身份
var list = document.getElementById("mylist");
var wr = function () {
    list.innerHTML = "";    //清除上一次的身份
    for (var b=0; b < person; b++){
        var node =  document.createElement("LI");
        var textnode = document.createTextNode(b+1 + "号为" + role[b]);
        node.appendChild(textnode);
        list.appendChild(node);
    }
};

var m = null;
set.onclick = function (){
if ( num.value < 4 || num.value > 18)
    {
        document.getElementById("mylist").innerHTML = "";
        alert("请输入4至18之间的值");
        m = null;
    } else {
        given();
        shuffle();
        wr();
        m = 1;
        sessionStorage.setItem('key',JSON.stringify(role));
    }
};

document.getElementById("btn3").onclick = function () {
    if ( m !=1 ) {
        alert("请点击设置");
    } else {
        window.location.href = "查看身份.html";
    }
};



