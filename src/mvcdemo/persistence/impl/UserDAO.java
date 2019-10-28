package mvcdemo.persistence.impl;

import mvcdemo.enity.UserInfo;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import mvcdemo.persistence.BaseDAO;
public class UserDAO {

    public int UpdateUserInfo(String email,String password,String phone,String name,String money) {
        int count = 0;
        Connection conn = BaseDAO.getconn();
        PreparedStatement ps = null;
        ResultSet rs = null;
        try {
            String sql = "replace into staff user (email,password,phone,name,money) values(?,?,?,?,?)";
            ps = conn.prepareStatement(sql);
            ps.setString(1, email);
            ps.setString(2, password);
            ps.setString(3, phone);
            ps.setString(4, name);
            ps.setInt(5, Integer.parseInt(money));
            count = ps.executeUpdate();
            count++;
        }
        catch(Exception e){
                e.printStackTrace();
            }
        return count;
    }

    public UserInfo findUserByUsernameAndPassword(UserInfo userInfo) {
        Connection conn=BaseDAO.getconn();
        PreparedStatement ps=null;
        ResultSet rs=null;
        UserInfo tempUserInfo;
        tempUserInfo = null;
        try {
            String sql="SELECT * FROM user where email=? and password=?";
            ps=conn.prepareStatement(sql);
            ps.setString(1,userInfo.getEmail());
            ps.setString(2,userInfo.getPwd());
            rs=ps.executeQuery();

            while (rs.next()){
                tempUserInfo=new UserInfo();
                tempUserInfo.setId(rs.getInt("id"));
                tempUserInfo.setEmail(rs.getString("email"));
                tempUserInfo.setPwd(rs.getString("password"));
                tempUserInfo.setName(rs.getString("name"));
                tempUserInfo.setPhone(rs.getString("phone"));
                tempUserInfo.setMoney(rs.getInt("money"));
            }
        }

        catch (Exception e){
            e.printStackTrace();
        }
        finally {
            BaseDAO.closeAll(conn,ps,rs);
        }
        return tempUserInfo;
    }
    public int Check(String email) {
        Connection conn=BaseDAO.getconn();
        PreparedStatement ps=null;
        ResultSet rs=null;
        int count = 0;
        try {
            String sql="SELECT * FROM user where email=?";
            ps=conn.prepareStatement(sql);
            ps.setString(1,email);
            rs=ps.executeQuery();

            while (rs.next()){
                count++;
            }
        }

        catch (Exception e){
            e.printStackTrace();
        }
        finally {
            BaseDAO.closeAll(conn,ps,rs);
        }
        return count;
    }

}
