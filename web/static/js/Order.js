function useTestFun() {

}
function total(){
    var tab=document.getElementById("table");
    var rows=tab.rows;
    var coast=0;
    for(var i=1;i<rows.length;i++)
    {
        coast +=parseInt(rows[i].cells[4].innerHTML);
    }
    $('#total').append("<h3>"+coast+"</h3>");

}

useTestFun();
var app = new Vue({
    el: "#app",
    data: {
        sum: 0,
        items: []
    },
    created: function() {
        document.getElementById("form").addEventListener("submit", function (event) {
            alert("not submit")
            event.preventDefault();
        });
        console.log("before created")
        console.log(this.sum);
        var _this = this;
        $.ajax({
            url: "/OrderServlet",//獲取資料的URL
            data:JSON.stringify({
                'wJsona':"kkk",
                'wjsonb':12,
                'wjsonc':80,
            }),
            type: "POST",//HTTP請求方法
            dataType:'JSON',//獲取資料執行方式
        }).done(function (json) {
            console.log(json)
            json.forEach(function (e) {
                e["goodSell"] = parseInt(e.goodSell);
                e["figureOfPet"] = parseInt(e.figureOfPet);
                e["total"] = e.goodSell*e.figureOfPet;
                _this.items.push(e)
            })
        })
        this.calcSum();
    },
    beforeMount: function() {
        // this.sum = this.sum.toFixed(2);
    },
    updated: function() {
        let total = 0;
        this.items.forEach(function(item) {
            total+=(item.goodSell*item.figureOfPet);
        });
        this.sum = total;
    },
    methods: {
        // minus: function (index) {
        //     let item = this.items[index];
        //     if (item.figureOfPet > 0) {
        //         item.figureOfPet--;
        //         item.total -= item.goodSell;
        //     }
        // },
        // plus: function (index) {
        //     let item = this.items[index];
        //     item.figureOfPet++;
        //     item.total += item.goodSell;
        //     // item.total = parseFloat(item.total).toFixed(3);
        // },
        remove: function(index) {
            this.items.splice(index, 1);
        },
        calcSum: function () {
            let total = 0;
            this.items.forEach(function(item) {
                total+=(item.goodSell*item.figureOfPet);
            });
        }
    }
})