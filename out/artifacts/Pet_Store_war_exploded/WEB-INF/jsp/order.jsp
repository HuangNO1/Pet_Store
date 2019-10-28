<%--
  Created by IntelliJ IDEA.
  User: rem
  Date: 2019/10/25
  Time: 下午 2:07
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>我的訂單</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="../../static/CSS/dist/tocas.css">
    <link rel="stylesheet" href="../../static/CSS/theme/Default.css">
    <script type="text/javascript" src="../../static/CSS/dist/tocas.js"></script>
    <script type="text/javascript" src="../../static/js/jquery-3.4.1.min.js"></script>
    <script type="text/javascript" src="../../static/js/jquery.cookie.js"></script>
</head>
<body>
<!--
    上方 menu
-->
<div class="ts menu box menuHeight">
    <div class="ts Home">
        <div class="flow logoDiv">
            <a href="index">
                <img class="logo" src="../../static/image/logo.png" alt="logo">
            </a>
        </div>
        <div class="ts very narrow flow">
            <a href="index">Pet Home</a>
        </div>
    </div>

    <div class="Right">
        <div class="ts image big label username flow">
            <img src="../../static/image/user.png" alt="user.png">
            <a href="myPage">${requestScope.user}</a>
        </div>
        <div class="flow">
            <%--                <a href="login"><button class="ts primary button lgBtn">登入</button></a>--%>
            <a href="loginForm">
                <button class="ts negative button rgBtn">Log Out</button>
            </a>
            <a href="shoppingCart">
                <button class="ts button cartBtn">購物車</button>
            </a>
            <a href="#">
                <button class="ts pulsing button">我的訂單</button>
            </a>
        </div>
        <select id ="wap" class="ts basic dropdown wap" onclick="change_theme()">
            <option value="Default">Default</option>
            <option value="Night">Night</option>
            <option value="Red">Red</option>
            <option value="Yellow">Yellow</option>
            <option value="Green">Green</option>
            <option value="Blue">Blue</option>
            <option value="Purple">Purple</option>
        </select>
    </div>
</div>
<!--
    板岩
-->
<div id="container" class="ts insetted extra padded slate">
    <i class="browser icon"></i>
    <span class="header">我的清單</span>
    <span class="description">這裡是您的購買紀錄。</span>
</div>
<div class="contentSpace"></div>
<!--
    購物清單
-->
<div class="ts container">
    <div class="cartTable" id="app">
        <form v-on:submit.prevent="" action="shoppingCart" method="post" id="form">
            <table id="table" class="ts celled table widget fixed icon">
                <thead>
                <tr class="center aligned">
                    <th colspan="1"><b>#</b></th>
                    <th colspan="4"><b>商品</b></th>
                    <th colspan="2"><b>單價</b></th>
                    <th colspan="2"><b>數量</b></th>
                    <th colspan="2"><b>合計</b></th>
                    <th colspan="1"><b>操作</b></th>
                </tr>
                </thead>
                <tbody>
                <template v-for="(item, index) in items">
                    <tr>
                        <td>{{index+1}}</td>
                        <td class="left aligned" colspan="4">{{ item.customPet }}</td>
                        <td colspan="2">{{ item.goodSell }}</td>
                        <td colspan="2">
<%--                            <button v-on:click="minus(index)" class="ts circular mini icon button">--%>
<%--                                <i class="minus icon"></i>--%>
<%--                            </button>--%>
                            {{ item.figureOfPet }}
<%--                            <button v-on:click="plus(index)" class="ts circular mini icon button">--%>
<%--                                <i class="plus icon"></i>--%>
<%--                            </button>--%>
                        </td >
                        <td colspan="2">{{ item.total.toFixed(2) }}</td>
                        <td>
                            <button v-on:click="remove(index)" class="ts circular negative mini icon button">
                                <i class="remove icon"></i>
                            </button>
                        </td>
                    </tr>
                </template>
                </tbody>
            </table>
            <div class="accountTopSpace"></div>
            <table class="ts very basic borderless table">
                <tr>
                    <td class="twelve wide"></td>
                    <td class="two wide">
                        <h3 class="ts header">總計</h3>
                    </td>
                    <td class="four wide" id="total">
                        <h2>{{sum}}</h2>
                    </td>
                </tr>
            </table>
            <table class="ts very basic borderless table">
                <tr>
                    <td class="fourteen wide"></td>
                    <td class="four wide">
                    </td>
                </tr>
            </table>
        </form>
    </div>
</div>
<div>
    <div class="endSpace"></div>
    <div class="end">
        <span>Copyright &copy; 2019 &mdash; Pet Home</span>
    </div>
</div>
</body>
<script type="text/javascript" src="../../static/js/theme.js"></script>
<script type="text/javascript" src="../../static/js/Order.js"></script>
<script type="text/javascript" src="../../static/js/vue-dev/dist/vue.js"></script>
</html>
