package mvcdemo.web.servlet;

import mvcdemo.enity.UserInfo;
import mvcdemo.service.UserService;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

public class LoginServlet extends HttpServlet {
    static String userName = null;
    private UserInfo userInfo;
    private UserService userService;

    private static String LOGIN_FORM = "/loginForm";
    private static String MAIN_FORM = "/index";

    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws
            ServletException, IOException {
        String msg = null;
        String username = req.getParameter("email");
        String password = req.getParameter("password");


        userService = new UserService();
        UserInfo loginResult = new UserInfo();
        loginResult.setEmail(username);
        loginResult.setPwd(password);
        loginResult = userService.login(loginResult);

        if (loginResult == null) {
            msg = "用户名或密码不正确";
            System.out.println(userInfo.getEmail());
            System.out.println(userInfo.getPwd());
            System.out.println(loginResult);
            req.setAttribute("msg", msg);
            req.getRequestDispatcher(LOGIN_FORM).forward(req, resp);
        }
        else {
            userName=loginResult.getName();
            req.setAttribute("user",userName);
            req.getRequestDispatcher(MAIN_FORM).forward(req, resp);
        }
    }
}