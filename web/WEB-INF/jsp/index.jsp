<%--
  Created by IntelliJ IDEA.
  User: rem
  Date: 2019/10/3
  Time: 下午 07:19
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Pet Home</title>
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
    <div class="ts icon input Search">
        <form>
            <input type="text" id="name" placeholder="Search...">
            <i  onclick="onSearch()" class="inverted circular search link icon"></i>
        </form>
    </div>
    <div class="Right">
        <div class="ts image big label username flow">
            <img src="../../static/image/user.png" alt="user.png">
            <a id="user">${requestScope.user}</a>
        </div>
        <!--index.js-->
        <div class="flow">
            <nav class="btn1">
            </nav>
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
<div class="mySearchView">
    <div id="context1" class="flow viewSearchEnd">
    </div>
</div>
<!--
    圖片背景
-->
<section class="ONE">
    <div><br>Welcome To Pet Home.</div>
</section>

<div class="myTag">
    <div class="flow tagTheme">
        高品質、高水平、價額合理, Pet Home 會是您最好的選擇
    </div>
</div>

<div class="contentSpace"></div>
<!--
    商品列表
-->
<div class="product">
    <div id="container">
        <div class="ts container mainContent grid">
            <nav class="List four wide">
                <div class="ts huge raised vertical compact inverted info icon menu">
                    <a class="item">
                        <i class="list icon"></i>
                        商品清單
                    </a>
                    <a class="item">FISH</a>
                    <a class="item">DOGS</a>
                    <a class="item">REPTILES</a>
                    <a class="item">CATS</a>
                    <a class="item">BIRDS</a>

                </div>
            </nav>
            <div class="Card fourteen wide ">
                <!--
                    Product 1
                -->
                <div class="Border">
                    <form>
                        <div class="ts left aligned statistics">
                            <div class="ts mini statistic">
                                <div class="myValue">163000</div>
                                <div class="label">點擊數</div>
                            </div>
                            <div class="ts mini statistic">
                                <div class="myValue"><i class="heart icon"></i>1000</div>
                                <div class="label">收藏次數</div>
                            </div>
                            <div class="ts mini statistic">
                                <div class="myValue">12</div>
                                <div class="label">購買數</div>
                            </div>
                            <div class="ts mini statistic">
                                <div class="myValue">2,847</div>
                                <div class="label">評價數</div>
                            </div>
                            <div class="ts mini statistic">
                                <div class="myValue"><i class="star icon"></i>5.0</div>
                                <div class="label">平均評價</div>
                            </div>
                            <div class="ts mini myPositive statistic">
                                <div class="myValue">301+</div>
                                <div class="label">正面</div>
                            </div>
                            <div class="ts mini myNegative statistic">
                                <div class="myValue">13</div>
                                <div class="label">負面</div>
                            </div>
                        </div>
                        <div class="ts grid">
                            <div class="productPhoto ts image flow four wide">
                                <img src="../../static/image/profile.jpg" alt="A1"/>
                            </div>
                            <div class="flow fourteen wide productWidth">
                                <div class="myHeader">可愛的小寵物</div>
                                <div class="myDescription">這個是 Huang Po-Hsun 的老婆，hh</div>
                                <div class="myDescription">雷姆賽高！！！</div>
                            </div>
                            <div class="ts flow two wide VButtons">
                                <div class="ts relaxed fluid vertical buttons">
                                    <button class="ts labeled icon button">
                                        <i class="star icon"></i>
                                        加入收藏
                                    </button>
                                    <br>
                                    <button class="ts labeled icon button">
                                        <i class="heart icon"></i>
                                        加入最愛
                                    </button>
                                    <br>
                                    <button class="ts positive labeled icon button">
                                        <i class="cart icon"></i>
                                        加入購物車
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <!--
                    Product 2
                -->
                <div class="Border">
                    <form>
                        <div class="ts left aligned statistics">
                            <div class="ts mini statistic">
                                <div class="myValue">163000</div>
                                <div class="label">點擊數</div>
                            </div>
                            <div class="ts mini statistic">
                                <div class="myValue"><i class="heart icon"></i>1000</div>
                                <div class="label">收藏次數</div>
                            </div>
                            <div class="ts mini statistic">
                                <div class="myValue">12</div>
                                <div class="label">購買數</div>
                            </div>
                            <div class="ts mini statistic">
                                <div class="myValue">2,847</div>
                                <div class="label">評價數</div>
                            </div>
                            <div class="ts mini statistic">
                                <div class="myValue"><i class="star icon"></i>5.0</div>
                                <div class="label">平均評價</div>
                            </div>
                            <div class="ts mini myPositive statistic">
                                <div class="myValue">301+</div>
                                <div class="label">正面</div>
                            </div>
                            <div class="ts mini myNegative statistic">
                                <div class="myValue">13</div>
                                <div class="label">負面</div>
                            </div>
                        </div>
                        <div class="ts grid">
                            <div class="productPhoto ts image flow four wide">
                                <img src="../../static/image/profile.jpg" alt="A1"/>
                            </div>
                            <div class="flow fourteen wide productWidth">
                                <div class="myHeader">可愛的小寵物</div>
                                <div class="myDescription">這個是 Huang Po-Hsun 的老婆，hhhhh</div>
                                <div class="myDescription">雷姆賽高！！！</div>
                            </div>
                            <div class="ts flow two wide VButtons">
                                <div class="ts relaxed fluid vertical buttons">
                                    <button class="ts labeled icon button">
                                        <i class="star icon"></i>
                                        加入收藏
                                    </button>
                                    <br>
                                    <button class="ts labeled icon button">
                                        <i class="heart icon"></i>
                                        加入最愛
                                    </button>
                                    <br>
                                    <button class="ts positive labeled icon button">
                                        <i class="cart icon"></i>
                                        加入購物車
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <!--
                     Product 3
                -->
                <div class="Border">
                    <form>
                        <div class="ts left aligned statistics">
                            <div class="ts mini statistic">
                                <div class="myValue">163000</div>
                                <div class="label">點擊數</div>
                            </div>
                            <div class="ts mini statistic">
                                <div class="myValue"><i class="heart icon"></i>1000</div>
                                <div class="label">收藏次數</div>
                            </div>
                            <div class="ts mini statistic">
                                <div class="myValue">12</div>
                                <div class="label">購買數</div>
                            </div>
                            <div class="ts mini statistic">
                                <div class="myValue">2,847</div>
                                <div class="label">評價數</div>
                            </div>
                            <div class="ts mini statistic">
                                <div class="myValue"><i class="star icon"></i>5.0</div>
                                <div class="label">平均評價</div>
                            </div>
                            <div class="ts mini myPositive statistic">
                                <div class="myValue">301+</div>
                                <div class="label">正面</div>
                            </div>
                            <div class="ts mini myNegative statistic">
                                <div class="myValue">13</div>
                                <div class="label">負面</div>
                            </div>
                        </div>
                        <div class="ts grid">
                            <div class="productPhoto ts image flow four wide">
                                <img src="../../static/image/profile.jpg" alt="A1"/>
                            </div>
                            <div class="flow fourteen wide productWidth">
                                <div class="myHeader">可愛的小寵物</div>
                                <h3>這個是 Huang Po-Hsun 的老婆，486 是個弟弟，嘿嘿嘿嘿嘿</h3>

                                <div class="myDescription">雷姆賽高！！！</div>
                            </div>
                            <div class="ts flow two wide VButtons">
                                <div class="ts relaxed fluid vertical buttons">
                                    <button class="ts labeled icon button">
                                        <i class="star icon"></i>
                                        加入收藏
                                    </button>
                                    <br>
                                    <button class="ts labeled icon button">
                                        <i class="heart icon"></i>
                                        加入最愛
                                    </button>
                                    <br>
                                    <button class="ts positive labeled icon button">
                                        <i class="cart icon"></i>
                                        加入購物車
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<div>
    <div class="endSpace"></div>
    <div class="end">
        <span>Copyright &copy; 2019 &mdash; Pet Home</span>
    </div>
</div>
<%--<div class="ts padded slate end">--%>
<%--    <span class="header">Copyright &copy; 2019 &mdash; Pet Home</span>--%>
<%--</div>--%>

</body>
<script type="text/javascript" src="../../static/js/index.js"></script>
<script type="text/javascript" src="../../static/js/theme.js"></script>
<script type="text/javascript" src="../../static/js/reaction.js"></script>
</html>
