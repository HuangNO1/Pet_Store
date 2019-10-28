<%--
  Created by IntelliJ IDEA.
  User: Rem
  Date: 2019/10/21
  Time: 上午 12:07
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="utf-8">
</head>
<script language="JavaScript">
    function myrefresh()
    {
        window.location.replace("/loginForm") ;
    }
    setTimeout('myrefresh()',1); //指定1秒刷新一次
</script>
</html>