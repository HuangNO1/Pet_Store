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

public class shoppingCartDAO {
    public int getfigure(String user) {
        Connection conn= BaseDAO.getconn();
        PreparedStatement ps=null;
        ResultSet rs=null;
        int count=0;
        try {
            String sql="SELECT * FROM custom where customName=?";
            ps=conn.prepareStatement(sql);
            ps.setString(1,user);
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

    public JSONArray catchGoodInfo(String user) {
        Connection conn= BaseDAO.getconn();
        PreparedStatement ps=null;
        ResultSet rs=null;
        List<CustomInfo> list=new ArrayList<>();

        try {
            String sql="SELECT * FROM custom where customName=?";
            ps=conn.prepareStatement(sql);
            ps.setString(1,user);
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

    public int changefigure(String user,String Pet,String figure) {
        int count=0;
        Connection conn=BaseDAO.getconn();
        PreparedStatement ps=null;
        ResultSet rs=null;
        try {
                String sql="UPDATE custom SET figureOfPet=? WHERE customName=? AND customPet=?";
            ps=conn.prepareStatement(sql);
            ps.setString(1,figure);
            ps.setString(2,user);
            ps.setString(3,Pet);
            count=ps.executeUpdate();
            count++;

        }

        catch (Exception e){
            e.printStackTrace();
        }
        finally {
            BaseDAO.closeAll(conn,ps,rs);
        }
        return count;
    }
    public int remove(String user,String Pet) {
        int count=0;
        Connection conn=BaseDAO.getconn();
        PreparedStatement ps=null;
        ResultSet rs=null;
        try {
            String sql="DELETE FROM custom  WHERE customName=? AND customPet=?";
            ps=conn.prepareStatement(sql);
            ps.setString(1,user);
            ps.setString(2,Pet);
            count=ps.executeUpdate();
            count++;

        }

        catch (Exception e){
            e.printStackTrace();
        }
        finally {
            BaseDAO.closeAll(conn,ps,rs);
        }
        return count;
    }

    public int insertTable() {
        int count=0;
        Connection conn=BaseDAO.getconn();
        PreparedStatement ps=null;
        ResultSet rs=null;
        try {
            String sql="INSERT INTO customOrder SELECT * FROM custom";
            ps=conn.prepareStatement(sql);
            count=ps.executeUpdate();
            count++;
        }

        catch (Exception e){
            e.printStackTrace();
        }
        finally {
            BaseDAO.closeAll(conn,ps,rs);
        }
        return count;
    }
    public int deletAll() {
        int count=0;
        Connection conn=BaseDAO.getconn();
        PreparedStatement ps=null;
        ResultSet rs=null;
        try {
            String sql="TRUNCATE TABLE custom";
            ps=conn.prepareStatement(sql);
            count=ps.executeUpdate();
            count++;
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
