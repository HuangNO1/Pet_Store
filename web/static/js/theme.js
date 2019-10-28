function change_theme() {

    console.log($(".wap").val());
    /*加载css*/
    $("<link>").attr({
        rel: "stylesheet",
        type: "text/css",
        href: "static/CSS/theme/" + $(".wap").val()+ ".css"
    }).appendTo("head");
    /*保存到cookie中,保存100天*/
    $.cookie("change_theme_id",$(".wap").val() , { expires: 100 });
}
function init_theme(theme_id) {

    /*加载css*/
    $("<link>").attr({
        rel: "stylesheet",
        type: "text/css",
        href: "static/CSS/theme/" + theme_id + ".css"
    }).appendTo("head");
    /*保存到cookie中,保存100天*/
    $.cookie("change_theme_id", theme_id , { expires: 100 });
}

function init_select_theme(theme_id)
{
    if(theme_id == null) {
        $("#wap").val("Default");
    }
    else {
        $("#wap").val(theme_id);
    }
}

$(document).ready(function () {
    console.log("read cookie");
    init_theme($.cookie("change_theme_id"));
    init_select_theme($.cookie("change_theme_id"));
})