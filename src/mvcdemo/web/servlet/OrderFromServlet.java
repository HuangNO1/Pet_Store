package mvcdemo.web.servlet;

import mvcdemo.domain.Cart;
import mvcdemo.service.shoppingCartService;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

public class OrderFromServlet extends HttpServlet {
    private static final String VIEW_ORDER = "/WEB-INF/jsp/order.jsp";
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.setAttribute("user", LoginServlet.userName);
        req.getRequestDispatcher(VIEW_ORDER).forward(req,resp);
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doPost(req,resp);

    }
}
