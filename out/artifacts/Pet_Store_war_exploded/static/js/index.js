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

$('').on('click', function (e) {                 // User clicks nav link
    e.preventDefault();                                // Stop loading new link
    var url = this.href;                               // Get value of href
    $('#container').remove();                          // Remove old content
    $('#content').load(url + ' #container').hide().fadeIn('slow'); // New content
});
judge();