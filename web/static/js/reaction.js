
function changeBackColor_over(div){
    $(div).css("background-color","#CCCCCC");
}
//鼠标离开内容
function changeBackColor_out(div){
    $(div).css("background-color","");
}
//将点击的内容放到搜索框
function setSearch_onclick(div){
    $(".inputtable").val(div.innerText);
    $("#context1").css("display","none");
    alert()
}
