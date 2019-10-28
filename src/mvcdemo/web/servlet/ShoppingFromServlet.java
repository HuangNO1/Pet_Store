package mvcdemo.web.servlet;

import mvcdemo.domain.Cart;
import mvcdemo.enity.CustomInfo;
import mvcdemo.service.shoppingCartService;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

public class ShoppingFromServlet extends HttpServlet {
    private static final String VIEW_CART = "/WEB-INF/jsp/shoppingCart.jsp";

    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        doGet(req, res);
    }

    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        HttpSession session = req.getSession();
        Cart cart = (Cart) session.getAttribute("cart");

        if (cart == null) {
            cart = new Cart();
            session.setAttribute("cart", cart);
        }

        req.setAttribute("user", LoginServlet.userName);

        shoppingCartService shop=new shoppingCartService();
        int count=shop.figure(LoginServlet.userName);
        System.out.print(count);
//        CustomInfo[] good=shop.catchInfo(LoginServlet.userName);
//        String[] customName=new String[count];
//        String[] customPet=new String[count];
//        String[] figure=new String[count];
//        for (int i =0;i<count;i++){
//            customName[i]=good[i].getCustomName();
//            customPet[i]=good[i].getCustomPet();
//            figure[i]=good[i].getFigureOfPet();
//        }
        req.setAttribute("count",Integer.toString(count));

        req.getRequestDispatcher(VIEW_CART).forward(req, res);
        System.out.print(LoginServlet.userName);
    }
}
