$("#name").keyup(function(){
    var content=$(this).val();
    //如果当前搜索内容为空，无须进行查询
    if(content==""){
        $("#context1").css("display","none");
        return ;
    }
    //由于浏览器的缓存机制 所以我们每次传入一个时间
    var time=new Date().getTime();
    $.ajax({
        type:"get",
        //新建一个名为findBooksAjaxServlet的servlet
        url:"/SearchServlet",
        data:{name:content,time:time},
        success:function(data){
            //拼接html
            var res=data.split(",");
            var html="";
            for(var i=0;i<res.length;i++){
                //每一个div还有鼠标移出、移入点击事件
                html+="<div οnclick='setSearch_onclick(this)' οnmοuseοut='changeBackColor_out(this)' οnmοuseοver='changeBackColor_over(this)'>"+res[i]+"</div>";
            }
            $("#context1").html(html);
            //显示为块级元素
            $("#context1").css("display","block");
        }
    });
});

//鼠标移动到内容上
function onSearch()
{
    var nickName =$("#autoComplete").val();
    alert(nickName);
}

function judge() {
    if (document.getElementById("user").textContent == "訪客") {
        var msg = ' <a href="/loginForm"><button id=\"btn1\" class=\"ts primary button lgBtn\">登入</button></a>\n' +
            '<a href="/registerfrom"><button class=\"ts positive basic button rgBtn\">註冊</button></a>';
    } else {
        var msg = '<a href="/loginForm"><button class="ts negative button rgBtn">Log Out</button></a>' + ' ' +
            '<a  href="/shoppingCart"><button class="ts button cartBtn">購物車</button></a>' +
            '<a href="Order"><button class="ts pulsing button">我的訂單</button></a>';
    }
    $('.btn1').append(msg);
    return true;
}
judge();