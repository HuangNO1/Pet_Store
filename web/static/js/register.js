$(function(){
    $(".errorClass").each(function(){
        showError($(this));
    });
    // $("#submitBtn").hover(//切换图片
    //     function(){
    //         $("#submitBtn").attr("src","img/regist1.jpg")
    //     },
    //     function(){
    //         $("#submitBtn").attr("src","img/regist2.jpg");
    //     });
    $(".inputClass").focus(function(){//得到焦点隐藏
        var labelId=$(this).attr("id")+"Error";
        $("#"+labelId).text("");
        showError($("#"+labelId));
    });
    $(".inputClass").blur(function(){
        var id=($(this).attr("id"));
        var funName="validate"+id.substring(0,1).toUpperCase()+id.substring(1)+"()";
        eval(funName);
    });
    $("#registForm").submit(function(){
        var bool=true;
        if(!validateLoginname()){bool=false;}
        if(!validateLoginpass()){bool=false;}
        if(!validateReloginpass()){bool=false;}
        if(!validateEmail()){bool=false;}
        if(!validateVerifyCode()){bool=false;}
        return bool;
    })
});
//登录名校验
function validateLoginname(){
    var id="loginname";
    var value=$("#"+id).val();
    if(!value){
        $("#"+id+"Error").text("用户名不能为空");
        showError($("#"+id+"Error"));
        return false;
    }
    if(value.length<3||value.length>10){
        $("#"+id+"Error").text("用户名长度必须在3~10");
        showError($("#"+id+"Error"));
        return false;
    }
    $.ajax({
        url:"NameExistServlet",
        data:{method:"loginName",val:value},
        async:true,
        cache:false,
        type:"post",
        datatype:"json",
        error:function(){
            alert("name error");
        },
        success:function(result){
            if(result){
                $("#"+id+"Error").text("该用户名已存在");
                showError($("#"+id+"Error"));
                return false;
            }
        }
    })
    return true;
}

//登录密码校验
function validateLoginpass(){
    var id="loginpass";
    var value=$("#"+id).val();
    if(!value){
        $("#"+id+"Error").text("登录密码不能为空");
        showError($("#"+id+"Error"));
        return false;
    }
    if(value.length<3||value.length>10){
        $("#"+id+"Error").text("登录密码长度必须在3~10");
        showError($("#"+id+"Error"));
        return false;
    }
    return true;
}
//登录密码确认校验
function validateReloginpass(){
    var id="reloginpass";
    var value=$("#"+id).val();
    if(!value){
        $("#"+id+"Error").text("登录确认密码不能为空");
        showError($("#"+id+"Error"));
        return false;
    }
    if(value.length<3||value.length>10){
        $("#"+id+"Error").text("登录确认密码长度必须在3~10");
        showError($("#"+id+"Error"));
        return false;
    }
    if(value!=$("#loginpass").val()){
        $("#"+id+"Error").text("两次密码不同");
        showError($("#"+id+"Error"));
        return false;
    }
    return true;
}
//Email
function validateEmail(){
    var id="email";
    var value=$("#"+id).val();
    if(!value){
        $("#"+id+"Error").text("Email不能为空");
        showError($("#"+id+"Error"));
        return false;
    }
    if(!/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(value)){
        $("#"+id+"Error").text("Email格式不对");
        showError($("#"+id+"Error"));
        return false;
    }
    return true;
}
//图形验证码
function validateVerifyCode(){
    var id="verifyCode";
    var value=$("#"+id).val();
    if(!value){
        $("#"+id+"Error").text("验证码不能为空");
        showError($("#"+id+"Error"));
        return false;
    }
    if(value.length!=4){
        $("#"+id+"Error").text("验证码长度必须为4");
        showError($("#"+id+"Error"));
        return false;
    }
    $.ajax({
        url:"UserServlet",
        data:{method:"ajaxValidateVerifyCode",verifyCode:value},
        type:"POST",
        dataType:"json",
        async:true,
        cache:false,
        error:function(){
            alert("false");
        },
        success:function(result){
            if(!result){
                $("#"+id+"Error").text("验证码有误");
                showError($("#"+id+"Error"));
                return false;
            }
        }
    });
    return true;
}
function showError(ele){
    var text=ele.text();
    if(!text){
        ele.css("display","none");
    }else{
        ele.css("display","");
    }
}
function _hyz(){
    document.getElementById("imgVerifyCode").src = document
            .getElementById("imgVerifyCode").src
        + "?nocache=" + new Date().getTime();
}