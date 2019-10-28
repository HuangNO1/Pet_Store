package mvcdemo.persistence.impl;

import mvcdemo.persistence.BaseDAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class SearchDAO {
    public static List<Object> findPetsAjax(String name) {
        List<Object> list = new ArrayList<Object>();
        Connection conn = BaseDAO.getconn();
        PreparedStatement ps = null;
        ResultSet rs = null;
        try {
            String sql = "select * from pet where petName like '%" + name + "%'";
            ps = conn.prepareStatement(sql);
            rs = ps.executeQuery();
            System.out.println(sql);
            while (rs.next()) {
                list.add(rs.getString("petName"));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }
}