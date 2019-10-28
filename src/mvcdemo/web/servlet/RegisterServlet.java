package mvcdemo.web.servlet;

import mvcdemo.enity.UserInfo;
import mvcdemo.service.UserService;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

public class RegisterServlet extends HttpServlet {
    private UserInfo userInfo;
    private UserService userService;

    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws
            ServletException, IOException {
        String password = req.getParameter("password");
        String phone = req.getParameter("phone");
        String name = req.getParameter("name");
        String email = req.getParameter("email");
        String msg = null;


        userService = new UserService();
        int result = userService.register(email,password,phone,name,"10");
        int onlyUser = userService.check(email);
        if (onlyUser==0) {
            if (result == 0) {

            } else {

            }
        }

        else {
            msg = "已經有人註冊過此帳號";
        }
    }
}