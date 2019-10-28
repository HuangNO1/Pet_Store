package mvcdemo.service;

import mvcdemo.enity.UserInfo;
import mvcdemo.persistence.impl.UserDAO;

public class UserService {
    private UserDAO userDAO;

    //登入
    public UserInfo login(UserInfo userInfo) {
        //其他业务逻辑相关内容
        userDAO = new UserDAO();
        return userDAO.findUserByUsernameAndPassword(userInfo);
    }

    public int register(String email,String password,String phone,String name,String money) {
        userDAO = new UserDAO();
        return userDAO.UpdateUserInfo(email, password,phone,name,money);
    }
    public int check(String email) {
        userDAO = new UserDAO();
        return userDAO.Check(email);
    }
}