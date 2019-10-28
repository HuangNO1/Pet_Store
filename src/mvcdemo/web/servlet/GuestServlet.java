package mvcdemo.web.servlet;

import mvcdemo.enity.UserInfo;
import mvcdemo.service.UserService;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class GuestServlet extends HttpServlet {
    private static String MAIN_FORM = "/index";
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws
            ServletException, IOException {
        req.setAttribute("user","訪客");
        req.getRequestDispatcher(MAIN_FORM).forward(req, resp);

    }
}
