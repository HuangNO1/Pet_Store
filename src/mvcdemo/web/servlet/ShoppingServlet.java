package mvcdemo.web.servlet;

import com.mysql.cj.x.protobuf.MysqlxDatatypes;
import mvcdemo.domain.Cart;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;

import mvcdemo.enity.CustomInfo;
import mvcdemo.service.shoppingCartService;
import net.sf.json.JSONArray;

public class ShoppingServlet  extends HttpServlet{

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        shoppingCartService shop=new shoppingCartService();
        JSONArray jsonData= shop.catchCustonGood(LoginServlet.userName);
        request.setCharacterEncoding("UTF-8");
        response.setCharacterEncoding("UTF-8");
//        String Search = request.getParameter("Search"); // 接收userid
//        System.out.println(Search);
//寫返回的JSON
        PrintWriter pw = response.getWriter();
        pw.print(jsonData);
        pw.flush();
        pw.close();
//        shoppingCartService shop=new shoppingCartService();
//        int count=shop.figure(LoginServlet.userName);
//        CustomInfo[] good=shop.catchInfo(LoginServlet.userName);
//        String[] customName=new String[count];
//        String[] customPet=new String[count];
//        String[] figure=new String[count];
//        for (int i =0;i<count;i++){
//            customName[i]=good[i].getCustomName();
//            customPet[i]=good[i].getCustomPet();
//            figure[i]=good[i].getFigureOfPet();
        }

    }
