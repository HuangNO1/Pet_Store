package mvcdemo.service;
import mvcdemo.enity.CustomInfo;
import mvcdemo.persistence.impl.shoppingCartDAO;
import net.sf.json.JSONArray;

public class shoppingCartService {
    private shoppingCartDAO shopDAO;
    public  JSONArray catchCustonGood(String name){
        shopDAO=new shoppingCartDAO();
        return shopDAO.catchGoodInfo(name);
    }
    public int figure(String name){
        shopDAO=new shoppingCartDAO();
        return shopDAO.getfigure(name);
    }
    public int update(String name,String Pet , String figure){
        shopDAO=new shoppingCartDAO();
        return shopDAO.changefigure(name,Pet,figure);
    }
    public int remove(String name,String Pet ){
        shopDAO=new shoppingCartDAO();
        return shopDAO.remove(name,Pet);
    }
    public int insert( ){
        shopDAO=new shoppingCartDAO();
        return shopDAO.insertTable();
    }
    public int deletAll( ){
        shopDAO=new shoppingCartDAO();
        return shopDAO.deletAll();
    }
}
