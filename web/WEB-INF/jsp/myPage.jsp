<%--
  Created by IntelliJ IDEA.
  User: rem
  Date: 2019/10/15
  Time: 上午 2:05
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <link rel="stylesheet" href="../../static/CSS/dist/tocas.css">
    <link rel="stylesheet" href="../../static/CSS/theme/Default.css">
    <script type="text/javascript" src="../../static/js/jquery-3.4.1.min.js"></script>
    <script type="text/javascript" src="../../static/js/jquery.cookie.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="author" content="Huang Po Hsun">
    <title>My Page</title>
</head>
<body>
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
            <a>${requestScope.user}</a>
        </div>
        <div class="flow">
            <%--                <a href="login"><button class="ts primary button lgBtn">登入</button></a>--%>
            <a href="loginForm">
                <button class="ts negative button rgBtn">Log Out</button>
            </a>
            <a href="shoppingCart">
                <button class="ts button cartBtn">購物車</button>
            </a>
            <a href="Order">
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

<div class="ts insetted extra padded slate">
    <i class="setting icon"></i>
    <span class="header">偏好設定</span>
    <span class="description">你可以在這裡改變你想改變的。</span>
</div>
<div class="someSpace"></div>
<div class="ts container mainContent grid">
    <div class="profile four wide">
        <div class="ts card Border">
            <div class="image avatar">
                <img src="../../static/image/profile.jpg" alt="avatar">
            </div>
            <br>
            <div class="content contentWide">
                <div class="header">User Name</div>
                <div class="meta">
                    <a>@ts_collection</a>
                </div>
                <div class="description contentWide">
                    <p class="P">在同個屋簷下，做著那一成不變的事情，</p>
                    <p class="P">就算沒有外星人來襲擊，</p>
                    <p class="P">偶爾也會發生一些意想之外的事情。</p>
                    <p class="P">HHHHHHHHHHHHHHHHHHHHHHH</p>
                </div>
            </div>
        </div>
    </div>
    <div class="fourteen wide formWide">
        <div class="Form">
            <form class="ts form">
                <!--
                    個人基本資料
                -->
                <div class="ts dividing header"><h3>基本資料</h3></div>
                <div class="field">
                   <script type="text/javascript" src="../../static/js/theme.js"></script> <label>用戶名</label>
                    <input type="text">
                </div>
                <div class="field">
                    <label>真實姓名</label>
                    <div class="two fields">
                        <div class="field">
                            <input type="text" placeholder="姓氏">
                        </div>
                        <div class="field">
                            <input type="text" placeholder="名字">
                        </div>
                    </div>
                </div>
                <div class="fields">
                    <div class="six wide field">
                        <label>年齡</label>
                        <div class="inline field">
                            <input type="text">
                            <label>歲</label>
                        </div>
                    </div>
                    <div class="twelve wide field">
                        <label>性別</label>
                        <select>
                            <option>男性</option>
                            <option>女性</option>
                            <option>第三性</option>
                        </select>
                    </div>
                </div>
                <div class="fields">
                    <div class="field">
                        <label>國家</label>
                        <select>
                            <option>中國</option>
                            <option>日本</option>
                            <option>南韓</option>
                            <option>北韓</option>
                            <option>俄羅斯</option>
                            <option>印度</option>
                            <option>印尼</option>
                            <option>泰國</option>
                            <option>菲律賓</option>
                            <option>澳大利亞</option>
                            <option>紐西蘭</option>
                            <option>德國</option>
                            <option>英國</option>
                            <option>法國</option>
                            <option>捷克</option>
                            <option>美國</option>
                            <option>加拿大</option>
                            <option>墨西哥</option>
                            <option>阿根廷</option>
                        </select>
                    </div>
                    <div class="field">
                        <label>地區</label>
                        <input type="text">
                    </div>
                </div>
                <div class="field">
                    <label>手機號碼</label>
                    <input type="text">
                </div>
                <div class="field">
                    <label>電子郵件</label>
                    <input type="text">
                </div>
                <div class="field">
                    <label>Blog</label>
                    <input type="text">
                </div>
                <div class="field">
                    <label>Description 1</label>
                    <input type="text">
                </div>
                <div class="field">
                    <label>Description 2</label>
                    <input type="text">
                </div>
                <div class="field">
                    <label>Description 3</label>
                    <input type="text">
                </div>
                <br>
                <div class="ts dividing header"><h3>收貨地址</h3></div>
                <div class="field">
                    <label>收貨人</label>
                    <input type="text">
                </div>
                <div class="field">
                    <label>手機號碼</label>
                    <input type="text">
                </div>
                <div class="fields">
                    <div class="field">
                        <label>省/市</label>
                        <input type="text">
                    </div>
                    <div class="field">
                        <label>市</label>
                        <input type="text">
                    </div>
                </div>
                <div class="fields">
                    <div class="field">
                        <label>區</label>
                        <input type="text">
                    </div>
                    <div class="field">
                        <label>街道</label>
                        <input type="text">
                    </div>
                </div>
                <div class="field">
                    <label>詳細地址</label>
                    <input type="text">
                </div>
                <div class="field">
                    <div class="ts toggle checkbox">
                        <input type="checkbox" id="toggle">
                        <label for="toggle">設為默認地址</label>
                    </div>
                </div>
                <br>
                <div class="ts dividing header"><h3>信用卡/銀行卡</h3></div>
                <div class="fields">
                    <div class="field">
                        <label>申辦人姓名</label>
                        <input type="text">
                    </div>
                    <div class="field">
                        <label>監護人姓名</label>
                        <input type="text">
                    </div>
                </div>
                <fieldset>
                    <legend>機密資料</legend>
                    <div class="fields">
                        <div class="field">
                            <label>信用卡卡號</label>
                            <input type="text" placeholder="xxxx-xxxx-xxxx-xxxx">
                        </div>
                        <div class="field">
                            <label>到期日</label>
                            <input type="text" placeholder="月月/年年">
                        </div>
                        <div class="field">
                            <label>安全碼</label>
                            <input type="text">
                        </div>
                    </div>
                </fieldset>
                <br>
                <div class="inline field">
                    <div class="ts checkbox">
                        <input id="agree" type="checkbox">
                        <label for="agree">我同意 Pet Home 最高協議。</label>
                    </div>
                </div>
                <button class="ts negative button">送出</button>
            </form>
        </div>
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
</html>
