package mvcdemo.persistence.impl;
import mvcdemo.enity.CustomInfo;
import mvcdemo.persistence.BaseDAO;
import net.sf.json.JSON;
import net.sf.json.JSONArray;

import net.sf.json.JSONObject;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class OrderDAO {

    public JSONArray catchGoodInfo(String user) {
        Connection conn= BaseDAO.getconn();
        PreparedStatement ps=null;
        ResultSet rs=null;
        List<CustomInfo> list=new ArrayList<>();

        try {
            String sql="SELECT * FROM customOrder where customName=?";
            ps=conn.prepareStatement(sql);
            ps.setString(1,user);
            System.out.print(ps.toString());
            rs=ps.executeQuery();
            while (rs.next()){
                CustomInfo tempCustomInfo=new CustomInfo();
                tempCustomInfo.setCustomName(rs.getString("customName"));
                tempCustomInfo.setFigureOfPet(rs.getString("figureOfPet"));
                tempCustomInfo.setCustomPet(rs.getString("customPet"));
                tempCustomInfo.setGoodSell(rs.getString("goodSell"));
                list.add(tempCustomInfo);
            }
        }

        catch (Exception e){
            e.printStackTrace();
        }
        finally {
            BaseDAO.closeAll(conn,ps,rs);
        }
        JSONArray jsonArray=JSONArray.fromObject(list);
        return jsonArray;
    }
}
