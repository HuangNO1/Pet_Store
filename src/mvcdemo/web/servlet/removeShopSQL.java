package mvcdemo.web.servlet;

import mvcdemo.service.OrderService;
import mvcdemo.service.shoppingCartService;
import net.sf.json.JSON;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.util.Iterator;

public class removeShopSQL extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        // 读取请求内容
        BufferedReader br = new BufferedReader(new InputStreamReader(request.getInputStream(), "utf-8"));
        String line = null;
        StringBuilder sb = new StringBuilder();
        while ((line = br.readLine()) != null) {
            sb.append(line);
        }
        //将json字符串转换为json对象
        JSONObject json = JSONObject.fromObject(sb.toString());

        System.out.print(json.getString("figureOfPet"));

        shoppingCartService shop = new shoppingCartService();
        int i = shop.remove(LoginServlet.userName, json.getString("customPet"));

    }
}




