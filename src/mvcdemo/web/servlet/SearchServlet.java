package mvcdemo.web.servlet;

import mvcdemo.persistence.impl.SearchDAO;
import mvcdemo.service.SearchService;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

public class SearchServlet extends HttpServlet {
    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=utf-8");
        request.setCharacterEncoding("utf-8");
        //获取搜索框输入的内容
        String name=request.getParameter("name");
        name=new String(name.getBytes("iso-8859-1"), "utf-8");
        //向server层调用相应的业务
        SearchService booksServer=new SearchService();
        String res=booksServer.findPetsAjax(name);
        //返回结果
        response.getWriter().write(res);

    }


    public void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        doGet(request, response);

    }}
