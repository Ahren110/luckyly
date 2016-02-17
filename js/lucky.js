var timer;
var flag = new Array (22);
var existingnum = new Array (22);
var clickTimes = 0;
var randnum;
var cellnum = 1;
var mobile = new Array ();
mobile[0] = '张三1';
mobile[1] = '李四1';
mobile[2] = '王二1';
mobile[3] = '麻子1';
mobile[4] = '张三2';
mobile[5] = '李四2';
mobile[6] = '王二2';
mobile[7] = '麻子3';
mobile[8] = '张三3';
mobile[9] = '李四3';
mobile[10] = '王二3';
mobile[11] = '麻子3';
mobile[12] = '张三4';
mobile[13] = '李四4';
mobile[14] = '王二4';
mobile[15] = '麻子4';
mobile[16] = '张三5';
mobile[17] = '李四5';
var num = mobile.length - 1;
function getRandNum () { //根据随机更换面板名字
    $("#result").val(mobile[GetRnd (0, num)]);
}
function start () { //开始按钮
    clearInterval (timer);
    timer = setInterval ('change()', 1);
}
function ok () { //结束按钮
    clearInterval (timer);
}
function GetRnd (min, max) {  //随机产生
    randnum = parseInt (Math.random () * (max - min + 1));
    return randnum;
}
function setTimer () {
    timer = setInterval ("getRandNum()", 1);
    $('#result').addClass('blur');
}
function clearTimer () {
    noDupNum ();
    clearInterval (timer);
    $('#result').removeClass('blur');

}
function noDupNum () {
    mobile.removeEleAt (randnum);
    var o = 0;
    for (p = 0; p < mobile.length; p++) {
        if (typeof mobile[p] != "undefined") {
            mobile[o] = mobile[p];
            o++;
        }
    }
    num = mobile.length - 1;
}
Array.prototype.removeEleAt = function (dx) {
    if (isNaN (dx) || dx > this.length) {
        return false;
    }
    this.splice (dx, 1);
}
function setValues () {
    $('#'+cellnum).html($("#result").val());
    cellnum++;
}

$(function(){
    $('#start').click(function () {
        var btn = $(this).html();
        if(btn == '开始'){
            $(this).html('停止');
            setTimer();
        } else if(btn == '停止'){
            $(this).html('开始');
            clearTimer ();
            setValues();
        }
    });
});
